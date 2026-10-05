import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  loginWithGoogle: (payload: {
    credential?: string;
    access_token?: string;
    google_sub?: string;
    email?: string;
    name?: string;
    avatar_url?: string;
  }) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  updateProfile: (data: {
    name?: string;
    avatar_url?: string;
    avatar_source?: 'google' | 'custom';
    target_level?: string;
  }) => Promise<boolean>;
  revertToGoogleAvatar: () => Promise<boolean>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'nihongo_session_token_v1';

/**
 * Dynamic API URL resolver:
 * Ensures requests adapt dynamically to Vercel production domain, preview branches, or localhost.
 */
export const getApiUrl = (endpoint: string): string => {
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return endpoint;
  }
  const customBase = (import.meta.env.VITE_API_URL || '').trim().replace(/\/$/, '');
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return customBase ? `${customBase}${cleanEndpoint}` : cleanEndpoint;
};

/**
 * Safe JSON parser helper to prevent cryptic syntax errors when Vercel returns HTML 404/500
 */
async function parseJsonResponse(res: Response, contextLabel: string): Promise<{
  isJson: boolean;
  data: any;
  errorText: string | null;
}> {
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const rawText = await res.text();
    console.error(`[AUTH_CLIENT_ERROR] ${contextLabel}: Expected JSON but received content-type "${contentType}" (HTTP ${res.status}):`, rawText.slice(0, 300));
    return {
      isJson: false,
      data: null,
      errorText: `Máy chủ phản hồi mã HTTP ${res.status} (${res.statusText || 'Lỗi kết nối'}). Định dạng trả về là HTML thay vì JSON (thường do Vercel chưa nhận diện Serverless Function /api).`,
    };
  }

  try {
    const data = await res.json();
    return { isJson: true, data, errorText: null };
  } catch (err: any) {
    console.error(`[AUTH_CLIENT_ERROR] ${contextLabel}: JSON parsing exception:`, err);
    return {
      isJson: false,
      data: null,
      errorText: `Lỗi đọc dữ liệu phản hồi từ máy chủ: ${err?.message || 'Invalid JSON'}`,
    };
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  });

  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user on startup if token exists
  const fetchCurrentUser = async (authToken?: string | null) => {
    const url = getApiUrl('/api/auth/me');
    try {
      console.log('[AuthContext] Fetching current user session from:', url);
      const headers: Record<string, string> = {
        'Accept': 'application/json',
      };
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      const res = await fetch(url, {
        headers,
        credentials: 'include',
      });

      const parsed = await parseJsonResponse(res, 'fetchCurrentUser');

      if (res.ok && parsed.isJson && parsed.data?.user) {
        const fetchedUser = parsed.data.user;
        // Safety guard: Reject any legacy mock user data
        if (
          fetchedUser.email?.toLowerCase().includes('lehoangbaolamth2@gmail.com') ||
          fetchedUser.google_sub === '109823485720194857201' ||
          fetchedUser.id === 'usr_superadmin_001'
        ) {
          console.warn('[AuthContext] Detected legacy mock user session. Purging cache.');
          localStorage.removeItem(TOKEN_KEY);
          sessionStorage.clear();
          setToken(null);
          setUser(null);
          return;
        }

        setUser(fetchedUser);
      } else {
        console.warn('[AuthContext] Session invalid or expired:', parsed.errorText || res.status);
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
      }
    } catch (err) {
      console.error('[AuthContext] Network error while fetching user session:', err);
      // In case of network error, do not leave fake logged in state
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 1. Cleansing check: wipe any old mock tokens or traces
    try {
      const storedToken = typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;
      if (storedToken && (storedToken.includes('mock_') || storedToken.includes('usr_superadmin_001'))) {
        localStorage.removeItem(TOKEN_KEY);
        sessionStorage.clear();
      }
    } catch (e) {
      // Safe storage access
    }

    // 2. Check if returned from Google OAuth redirect callback with token in query param
    let initialToken = typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get('token');
      const authError = urlParams.get('auth_error');

      if (urlToken) {
        localStorage.setItem(TOKEN_KEY, urlToken);
        setToken(urlToken);
        initialToken = urlToken;
        // Clean URL cleanly
        window.history.replaceState({}, document.title, window.location.pathname);
      } else if (authError) {
        console.warn('[AuthContext] Returned from OAuth callback with error:', authError);
        if (window.location.pathname !== '/login') {
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      }
    }

    if (initialToken) {
      fetchCurrentUser(initialToken);
    } else {
      // Check if session exists in HttpOnly cookie
      fetchCurrentUser(null);
    }
  }, []);

  const loginWithGoogle = async (payload: {
    credential?: string;
    access_token?: string;
    google_sub?: string;
    email?: string;
    name?: string;
    avatar_url?: string;
  }) => {
    setIsLoading(true);
    const targetUrl = getApiUrl('/api/auth/google');

    console.group('[AuthContext:loginWithGoogle]');
    console.log('Target API Endpoint:', targetUrl);
    console.log('Payload Details:', {
      hasCredential: Boolean(payload.credential),
      hasAccessToken: Boolean(payload.access_token),
      google_sub: payload.google_sub || '(Will extract from credential)',
      email: payload.email || '(Will extract from credential)',
      name: payload.name || '(Will extract from credential)',
    });

    try {
      const res = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      console.log('Response HTTP Status:', res.status, res.statusText);

      const parsed = await parseJsonResponse(res, 'loginWithGoogle');

      if (!parsed.isJson) {
        console.error('Non-JSON response received:', parsed.errorText);
        console.groupEnd();
        setIsLoading(false);
        return {
          success: false,
          message: parsed.errorText || 'Không thể kết nối máy chủ xác thực. Kiểm tra lại Vercel API routing.',
        };
      }

      const data = parsed.data;
      console.log('Response Payload:', data);
      console.groupEnd();

      if (res.ok && data.token && data.user) {
        localStorage.setItem(TOKEN_KEY, data.token);
        setToken(data.token);
        setUser(data.user);
        setIsLoading(false);
        return { success: true, message: data.message || 'Đăng nhập thành công!' };
      } else {
        setIsLoading(false);
        return {
          success: false,
          message: data.message || data.error || `Xác thực thất bại (HTTP ${res.status}).`,
        };
      }
    } catch (err: any) {
      console.error('[AuthContext:loginWithGoogle] Fatal Network Exception:', err);
      console.groupEnd();
      setIsLoading(false);
      return {
        success: false,
        message: `Lỗi kết nối máy chủ xác thực: ${err?.message || 'Network request failed'}. Vui lòng kiểm tra kết nối mạng và Vercel status.`,
      };
    }
  };

  const logout = async () => {
    try {
      const headers: Record<string, string> = {
        'Accept': 'application/json',
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      await fetch(getApiUrl('/api/auth/logout'), {
        method: 'POST',
        headers,
        credentials: 'include',
      });
    } catch (e) {
      // Ignore network errors on logout
    }
    // Deep cleanse all local traces, session storage, and mock keys
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem('nihongo_session_token_v1');
      localStorage.removeItem('nihongo_user_profile');
      sessionStorage.clear();
    } catch (e) {
      console.warn('[AuthContext] Storage clearance exception:', e);
    }
    setToken(null);
    setUser(null);
  };

  const updateProfile = async (data: {
    name?: string;
    avatar_url?: string;
    avatar_source?: 'google' | 'custom';
    target_level?: string;
  }) => {
    if (!token) return false;
    try {
      const res = await fetch(getApiUrl('/api/user/profile'), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const parsed = await parseJsonResponse(res, 'updateProfile');
      if (res.ok && parsed.isJson && parsed.data?.user) {
        setUser(parsed.data.user);
        return true;
      }
      return false;
    } catch (e) {
      console.error('[AuthContext] Error updating profile:', e);
      return false;
    }
  };

  const revertToGoogleAvatar = async () => {
    if (!token) return false;
    try {
      const res = await fetch(getApiUrl('/api/user/avatar/revert-google'), {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
        },
      });

      const parsed = await parseJsonResponse(res, 'revertToGoogleAvatar');
      if (res.ok && parsed.isJson && parsed.data?.user) {
        setUser(parsed.data.user);
        return true;
      }
      return false;
    } catch (e) {
      console.error('[AuthContext] Error reverting to Google avatar:', e);
      return false;
    }
  };

  const refreshUser = async () => {
    if (token) {
      await fetchCurrentUser(token);
    }
  };

  const isAdmin = user?.role === 'admin' || user?.role === 'superadmin';
  const isSuperAdmin = user?.role === 'superadmin';
  const isAuthenticated = Boolean(user && user.status === 'active');

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated,
        isAdmin,
        isSuperAdmin,
        loginWithGoogle,
        logout,
        updateProfile,
        revertToGoogleAvatar,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
