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
  switchAccountPreset: (presetType: 'admin' | 'user' | 'assistant') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'nihongo_session_token_v1';

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
  const fetchCurrentUser = async (authToken: string) => {
    try {
      const res = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        // Invalid or expired token
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
      }
    } catch (err) {
      console.error('Failed to fetch user:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCurrentUser(token);
    } else {
      // By default for rich exploration, we can auto-login the owner/admin account if no token
      switchAccountPreset('admin');
    }
  }, []);

  const loginWithGoogle = async (payload: {
    credential?: string;
    google_sub?: string;
    email?: string;
    name?: string;
    avatar_url?: string;
  }) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.token && data.user) {
        localStorage.setItem(TOKEN_KEY, data.token);
        setToken(data.token);
        setUser(data.user);
        setIsLoading(false);
        return { success: true, message: data.message };
      } else {
        setIsLoading(false);
        return { success: false, message: data.message || 'Đăng nhập thất bại.' };
      }
    } catch (err) {
      setIsLoading(false);
      return { success: false, message: 'Lỗi kết nối máy chủ xác thực.' };
    }
  };

  const logout = async () => {
    if (token) {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (e) {
        // Ignore
      }
    }
    localStorage.removeItem(TOKEN_KEY);
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
      const res = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const resData = await res.json();
        setUser(resData.user);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const revertToGoogleAvatar = async () => {
    if (!token) return false;
    try {
      const res = await fetch('/api/user/avatar/revert-google', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const resData = await res.json();
        setUser(resData.user);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const refreshUser = async () => {
    if (token) {
      await fetchCurrentUser(token);
    }
  };

  // Helper for quick testing of RBAC differences
  const switchAccountPreset = async (presetType: 'admin' | 'user' | 'assistant') => {
    if (presetType === 'admin') {
      await loginWithGoogle({
        google_sub: '109823485720194857201',
        email: 'lehoangbaolamth2@gmail.com',
        name: 'Lê Hoàng Bảo Lâm (Chủ Quản)',
        avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      });
    } else if (presetType === 'assistant') {
      await loginWithGoogle({
        google_sub: '105192837465019283746',
        email: 'lequocbao.sensei@gmail.com',
        name: 'Lê Quốc Bảo (Trợ Lý Giảng Viên)',
        avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      });
    } else {
      await loginWithGoogle({
        google_sub: '108293847561928374651',
        email: 'nguyenvana@gmail.com',
        name: 'Nguyễn Văn An (Người Học)',
        avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      });
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
        switchAccountPreset,
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
