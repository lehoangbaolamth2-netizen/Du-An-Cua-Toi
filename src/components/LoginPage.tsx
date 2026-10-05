import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    google?: any;
  }
}

export const LoginPage: React.FC = () => {
  const { user, isAuthenticated, loginWithGoogle, refreshUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [serverClientId, setServerClientId] = useState<string>('');

  // Check URL query parameters for error on initial load (e.g. /login?error=google_auth_failed)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const err = params.get('error') || params.get('auth_error');
      if (err) {
        console.warn('[Google Auth] Detected error in URL params:', err);
        setErrorMessage('Đăng nhập Google không thành công. Vui lòng thử lại.');
      }
    }
  }, []);

  // If already authenticated, redirect to home / dashboard
  useEffect(() => {
    if (isAuthenticated && user) {
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    }
  }, [isAuthenticated, user]);

  // Fetch client ID from server config dynamically
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const res = await fetch('/api/auth/config');
        if (res.ok) {
          const data = await res.json();
          if (data.clientId) {
            setServerClientId(data.clientId.trim());
          }
        }
      } catch (e) {
        console.warn('[Google Auth] Could not fetch /api/auth/config:', e);
      }
    };
    loadConfig();
  }, []);

  // Listen for postMessage from popup OAuth window
  useEffect(() => {
    const handleAuthMessage = async (event: MessageEvent) => {
      if (event.data?.type === 'GOOGLE_AUTH_SUCCESS') {
        console.log('[Google Auth] Received GOOGLE_AUTH_SUCCESS from popup callback.');
        const sessionToken = event.data.token;
        if (sessionToken) {
          localStorage.setItem('nihongo_session_token_v1', sessionToken);
          await refreshUser();
          window.location.href = '/';
        }
      } else if (event.data?.type === 'GOOGLE_AUTH_ERROR') {
        console.warn('[Google Auth] Received GOOGLE_AUTH_ERROR from popup callback:', event.data.error);
        setIsLoading(false);
        setErrorMessage('Đăng nhập Google không thành công. Vui lòng thử lại.');
      }
    };

    window.addEventListener('message', handleAuthMessage);
    return () => window.removeEventListener('message', handleAuthMessage);
  }, [refreshUser]);

  const getEffectiveClientId = (): string => {
    const fromEnv = (import.meta.env.VITE_GOOGLE_CLIENT_ID || '').trim();
    return fromEnv || serverClientId;
  };

  /**
   * Primary action: Initiate Google OAuth with prompt=select_account
   * This guarantees that Google ALWAYS opens the Account Chooser.
   */
  const handleContinueWithGoogle = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    const clientId = getEffectiveClientId();

    // 1. If Google Identity Services Token Client is available, launch GSI Popup
    if (window.google?.accounts?.oauth2 && clientId) {
      try {
        console.log('[Google Auth] Opening Google Account Chooser via GSI OAuth Token Client (prompt=select_account)...');
        const tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: 'openid email profile',
          prompt: 'select_account', // CRITICAL: Always forces Google Account Chooser!
          callback: async (tokenResponse: any) => {
            if (tokenResponse?.error) {
              console.warn('[Google Auth] Token response error from Google:', tokenResponse.error);
              setIsLoading(false);
              setErrorMessage('Đăng nhập Google không thành công. Vui lòng thử lại.');
              return;
            }

            if (tokenResponse?.access_token) {
              console.log('[Google Auth] Access token received, authenticating with server...');
              const res = await loginWithGoogle({ access_token: tokenResponse.access_token });
              setIsLoading(false);
              if (res.success) {
                window.location.href = '/';
              } else {
                setErrorMessage('Đăng nhập Google không thành công. Vui lòng thử lại.');
              }
            } else {
              setIsLoading(false);
              setErrorMessage('Đăng nhập Google không thành công. Vui lòng thử lại.');
            }
          },
          error_callback: (err: any) => {
            console.warn('[Google Auth] GSI popup blocked or error, falling back to popup window:', err);
            openOAuthPopup();
          },
        });

        // Trigger Google Account Chooser popup
        tokenClient.requestAccessToken({ prompt: 'select_account' });
        return;
      } catch (err) {
        console.warn('[Google Auth] Exception during initTokenClient, falling back to popup window:', err);
      }
    }

    // 2. Open standard popup window for Google OAuth 2.0 flow
    // Using popup prevents iframe X-Frame-Options blocking (which causes white screen in iframes)
    openOAuthPopup();
  };

  const openOAuthPopup = () => {
    const authStartUrl = '/api/auth/google/start';

    // Center popup on screen
    const width = 500;
    const height = 620;
    const left = window.screenX + Math.max(0, (window.outerWidth - width) / 2);
    const top = window.screenY + Math.max(0, (window.outerHeight - height) / 2.5);

    try {
      const popup = window.open(
        authStartUrl,
        'google_oauth_popup',
        `width=${width},height=${height},left=${left},top=${top},status=no,toolbar=no,menubar=no,location=yes,resizable=yes`
      );

      if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        console.warn('[Google Auth] Popup was blocked by browser. Falling back to window navigation.');
        // If in top-level window (not iframe), navigate directly
        if (window.self === window.top) {
          window.location.href = authStartUrl;
        } else {
          setIsLoading(false);
          setErrorMessage('Đăng nhập Google không thành công. Vui lòng cho phép mở cửa sổ popup trên trình duyệt.');
        }
      }
    } catch (e) {
      console.error('[Google Auth] Error opening popup:', e);
      if (window.self === window.top) {
        window.location.href = authStartUrl;
      } else {
        setIsLoading(false);
        setErrorMessage('Đăng nhập Google không thành công. Vui lòng thử lại.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-center">
        {/* Google Logo */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/40">
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Đăng nhập bằng Google
          </h2>
          <p className="text-xs text-slate-400">
            Đăng nhập để tiếp tục sử dụng ứng dụng
          </p>
        </div>

        {/* Friendly Error Message */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs text-center animate-fadeIn">
            {errorMessage}
          </div>
        )}

        {/* Action Button: Tiếp tục với Google */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleContinueWithGoogle}
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-xl shadow-black/30 transition cursor-pointer flex items-center justify-center gap-3 active:scale-98 disabled:opacity-75"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                <span>Đang mở Google...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Tiếp tục với Google</span>
              </>
            )}
          </button>
        </div>

        {/* Subtle Back link */}
        <div className="pt-2 text-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="text-xs text-slate-500 hover:text-slate-300 transition"
          >
            ← Quay lại trang chủ
          </a>
        </div>
      </div>
    </div>
  );
};
