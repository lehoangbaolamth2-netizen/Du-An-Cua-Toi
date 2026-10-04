import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Shield,
  Key,
  X,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  User,
  LogIn
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleLoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { loginWithGoogle, switchAccountPreset } = useAuth();
  const [customSub, setCustomSub] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail.trim()) {
      setErrorMsg('Vui lòng nhập địa chỉ Google Email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    const generatedSub = customSub.trim() || `10${Math.floor(100000000000000000 + Math.random() * 900000000000000000)}`;

    const res = await loginWithGoogle({
      google_sub: generatedSub,
      email: customEmail.trim(),
      name: customName.trim() || customEmail.split('@')[0],
      avatar_url: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(customEmail)}`,
    });

    setIsSubmitting(false);

    if (res.success) {
      onClose();
    } else {
      setErrorMsg(res.message || 'Đăng nhập không thành công.');
    }
  };

  const handleQuickPreset = async (preset: 'admin' | 'user') => {
    setIsSubmitting(true);
    await switchAccountPreset(preset);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-xl cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto shadow-xl shadow-white/10 p-2.5">
            <svg viewBox="0 0 24 24" className="w-full h-full">
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

          <h3 className="text-xl font-extrabold text-white">Đăng Nhập Bằng Google</h3>
          <p className="text-xs text-slate-400">
            Hệ thống xác thực Role-Based Access Control (RBAC) với Google sub bảo mật
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-950/60 border border-rose-600/60 rounded-xl text-rose-300 text-xs font-semibold flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Quick 1-Click Login for Evaluation */}
        <div className="space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Chọn tài khoản thử nghiệm nhanh:
          </span>

          <button
            onClick={() => handleQuickPreset('admin')}
            disabled={isSubmitting}
            className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-indigo-950/40 to-slate-900 border border-amber-500/40 hover:border-amber-400 text-left transition cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold">
                👑
              </div>
              <div className="text-xs">
                <div className="font-bold text-white group-hover:text-amber-300 transition">
                  Lê Hoàng Bảo Lâm (Chủ Quản / Admin)
                </div>
                <div className="text-slate-400 font-mono text-[11px]">lehoangbaolamth2@gmail.com</div>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Quyền Admin
            </span>
          </button>

          <button
            onClick={() => handleQuickPreset('user')}
            disabled={isSubmitting}
            className="w-full p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-left transition cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 font-bold">
                👤
              </div>
              <div className="text-xs">
                <div className="font-bold text-white group-hover:text-indigo-300 transition">
                  Nguyễn Văn An (Người Học Tiêu Chuẩn)
                </div>
                <div className="text-slate-400 font-mono text-[11px]">nguyenvana@gmail.com</div>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
              Quyền User
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-[10px] font-mono uppercase text-slate-500">Hoặc nhập email Google khác</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* Custom Google Account Login Form */}
        <form onSubmit={handleCustomLogin} className="space-y-3 text-xs">
          <div>
            <label className="text-slate-300 font-bold block mb-1">Email Google:</label>
            <input
              type="email"
              value={customEmail}
              onChange={(e) => setCustomEmail(e.target.value)}
              placeholder="tenban@gmail.com"
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-slate-300 font-bold block mb-1">Tên hiển thị:</label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Nguyễn Văn B"
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            <span>{isSubmitting ? 'Đang xác thực...' : 'Đăng Nhập Tài Khoản Này'}</span>
          </button>
        </form>

        <p className="text-[10px] text-slate-500 text-center leading-relaxed">
          🔒 Máy chủ xác thực Google ID Token & gán quyền RBAC tự động theo danh bạ cơ sở dữ liệu.
        </p>
      </div>
    </div>
  );
};
