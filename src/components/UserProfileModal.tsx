import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  User,
  Shield,
  Mail,
  Key,
  LogOut,
  Edit2,
  CheckCircle,
  Copy,
  Sparkles,
  Award,
  Clock,
  Compass,
  X,
  Lock,
  Upload,
  RotateCcw,
  Image as ImageIcon,
  Check,
  AlertCircle
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// Bộ sưu tập avatar phong cách Nhật Bản & Học tập tuyển chọn
const JAPAN_AVATAR_PRESETS = [
  {
    id: 'jp_1',
    name: 'Học viên Nam',
    url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'jp_2',
    name: 'Học viên Nữ',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'jp_3',
    name: 'Sensei Giảng Viên',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'jp_4',
    name: 'Thần thái Tập trung',
    url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'jp_5',
    name: 'Núi Phú Sĩ & Mùa Thu',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'jp_6',
    name: 'Tokyo Neon & Học Đêm',
    url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=200&auto=format&fit=crop&q=80',
  },
];

export const UserProfileModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    user,
    isAdmin,
    isSuperAdmin,
    logout,
    updateProfile,
    revertToGoogleAvatar,
    switchAccountPreset
  } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editLevel, setEditLevel] = useState(user?.target_level || 'N3');
  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState(user?.avatar_url || '');
  const [selectedAvatarSource, setSelectedAvatarSource] = useState<'google' | 'custom'>(
    user?.avatar_source || 'google'
  );
  const [avatarTab, setAvatarTab] = useState<'presets' | 'upload' | 'google' | 'url'>('presets');
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isReverting, setIsReverting] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (user) {
      setEditName(user.name);
      setEditLevel(user.target_level || 'N3');
      setSelectedAvatarUrl(user.avatar_url);
      setSelectedAvatarSource(user.avatar_source || 'google');
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Đã sao chép ${label}!`);
  };

  // Tải ảnh từ máy tính / thiết bị người dùng (đọc thành DataURL)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Vui lòng chọn tệp hình ảnh hợp lệ (PNG, JPG, WebP).');
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      showToast('Kích thước ảnh không nên vượt quá 3MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setSelectedAvatarUrl(result);
        setSelectedAvatarSource('custom');
        showToast('Đã tải ảnh lên! Hãy bấm "Lưu Thay Đổi" để hoàn tất.');
      }
    };
    reader.readAsDataURL(file);
  };

  // Chọn ảnh từ kho Preset
  const handleSelectPreset = (url: string) => {
    setSelectedAvatarUrl(url);
    setSelectedAvatarSource('custom');
  };

  // Áp dụng URL thủ công
  const handleApplyCustomUrl = () => {
    if (!customUrlInput.trim()) return;
    setSelectedAvatarUrl(customUrlInput.trim());
    setSelectedAvatarSource('custom');
    showToast('Đã áp dụng đường dẫn ảnh!');
  };

  // Chọn lại ảnh Google trong giao diện edit
  const handleSelectGoogleAvatarInEdit = () => {
    const googleUrl = user?.google_avatar_url || user?.avatar_url || '';
    setSelectedAvatarUrl(googleUrl);
    setSelectedAvatarSource('google');
    showToast('Đã chọn lại ảnh đại diện Google!');
  };

  // Nhanh chóng khôi phục ảnh Google từ chế độ xem
  const handleQuickRevertToGoogle = async () => {
    setIsReverting(true);
    const success = await revertToGoogleAvatar();
    setIsReverting(false);
    if (success) {
      showToast('✓ Đã khôi phục và dùng lại ảnh đại diện Google thành công!');
    } else {
      showToast('Lỗi khi khôi phục ảnh Google.');
    }
  };

  // Lưu thông tin chỉnh sửa
  const handleSave = async () => {
    if (!editName.trim()) {
      showToast('Tên hiển thị không được để trống.');
      return;
    }

    setIsSaving(true);
    const success = await updateProfile({
      name: editName.trim(),
      target_level: editLevel,
      avatar_url: selectedAvatarUrl.trim(),
      avatar_source: selectedAvatarSource,
    });
    setIsSaving(false);

    if (success) {
      setIsEditing(false);
      showToast('✓ Đã lưu thay đổi hồ sơ & avatar thành công!');
    } else {
      showToast('Lỗi cập nhật hồ sơ từ máy chủ.');
    }
  };

  const isCurrentAvatarGoogle = user?.avatar_source === 'google' || !user?.avatar_source;
  const originalGoogleAvatar = user?.google_avatar_url || user?.avatar_url;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-5 sm:p-7 space-y-6 shadow-2xl relative animate-scaleUp my-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Toast Notification */}
        {toastMsg && (
          <div className="sticky top-0 z-20 bg-emerald-950/95 border border-emerald-500 text-emerald-200 px-4 py-2.5 rounded-2xl text-xs font-bold text-center animate-fadeIn shadow-xl flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Header Profile Identity */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-slate-800 pb-5">
          <div className="relative shrink-0">
            <img
              src={isEditing ? selectedAvatarUrl : user?.avatar_url}
              alt={user?.name}
              className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-indigo-500 shadow-xl shadow-indigo-500/20 bg-slate-950"
            />
            {/* Source Badge on Avatar */}
            <span
              className={`absolute -bottom-2 -left-1 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider shadow-md ${
                (isEditing ? selectedAvatarSource : user?.avatar_source) === 'custom'
                  ? 'bg-purple-600 text-white border border-purple-400/40'
                  : 'bg-blue-600 text-white border border-blue-400/40'
              }`}
            >
              {(isEditing ? selectedAvatarSource : user?.avatar_source) === 'custom'
                ? 'Ảnh Riêng'
                : 'Google'}
            </span>

            {isAdmin && (
              <span
                className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-lg text-[10px] font-black shadow-md"
                title="Quản Trị Viên (Admin)"
              >
                <Shield className="w-3.5 h-3.5" />
              </span>
            )}
          </div>

          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-extrabold text-white truncate">{user?.name}</h3>
              <span
                className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full ${
                  isSuperAdmin
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : isAdmin
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}
              >
                {isSuperAdmin ? 'Chủ Quản (Superadmin)' : isAdmin ? 'Quản Trị Viên (Admin)' : 'Học Viên (User)'}
              </span>
            </div>

            {/* Email with permanent lock notice */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
              <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{user?.email}</span>
              <span
                className="inline-flex items-center gap-0.5 text-[10px] text-amber-400/90 bg-amber-950/40 px-1.5 py-0.2 rounded border border-amber-800/40"
                title="Email Google không thể chỉnh sửa để bảo vệ định danh tài khoản"
              >
                <Lock className="w-2.5 h-2.5" />
                <span>Google</span>
              </span>
            </div>

            {/* Current Avatar Status text */}
            <p className="text-[11px] text-slate-400">
              {isCurrentAvatarGoogle ? (
                <span className="text-blue-300 flex items-center gap-1">
                  <span>🔵 Đang sử dụng ảnh đại diện đồng bộ từ tài khoản Google.</span>
                </span>
              ) : (
                <span className="text-purple-300 flex items-center gap-1">
                  <span>🟣 Đang sử dụng ảnh đại diện riêng (Custom Avatar).</span>
                </span>
              )}
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* VIEW MODE                                                 */}
        {/* ========================================================= */}
        {!isEditing ? (
          <div className="space-y-4 text-xs">
            {/* Avatar Management Quick Bar */}
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-700 shrink-0 bg-slate-900">
                  <img
                    src={originalGoogleAvatar}
                    alt="Google Original"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white flex items-center gap-1">
                    <span>Ảnh gốc Google</span>
                    <span className="text-[10px] text-blue-400 font-normal">(Luôn được lưu an toàn)</span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {isCurrentAvatarGoogle
                      ? 'Hiện đang hiển thị ảnh này'
                      : 'Bạn đang dùng ảnh riêng, có thể khôi phục lại bất kỳ lúc nào'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {!isCurrentAvatarGoogle && (
                  <button
                    onClick={handleQuickRevertToGoogle}
                    disabled={isReverting}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 text-blue-300 border border-blue-700/60 font-bold text-[11px] transition cursor-pointer"
                    title="Khôi phục lại ảnh Google"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{isReverting ? 'Đang khôi phục...' : 'Dùng lại ảnh Google'}</span>
                  </button>
                )}

                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-white font-bold text-[11px] transition cursor-pointer"
                >
                  <Edit2 className="w-3 h-3" />
                  <span>Đổi ảnh / Sửa hồ sơ</span>
                </button>
              </div>
            </div>

            {/* Google Sub (Google Unique Immutable ID) */}
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                  <Key className="w-3.5 h-3.5 text-amber-400" />
                  Định Danh Google Duy Nhất (Google sub):
                </span>
                <button
                  onClick={() => copyToClipboard(user?.google_sub || '', 'Google Sub')}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer font-bold"
                >
                  <Copy className="w-3 h-3" />
                  <span>Sao chép</span>
                </button>
              </div>
              <div className="font-mono text-emerald-300 text-xs break-all bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/80">
                {user?.google_sub}
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                🔒 <strong>Chuẩn bảo mật Google:</strong> Khóa định danh bất biến của tài khoản bạn tại hệ thống. Dù bạn đổi email hoặc tên Google, tài khoản và lịch sử học tập vẫn được bảo tồn vẹn nguyên.
              </p>
            </div>

            {/* Target Level & Study Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-slate-400 block text-[11px]">Cấp độ mục tiêu JLPT:</span>
                <span className="text-base font-extrabold text-indigo-400 font-mono">
                  {user?.target_level || 'N3'}
                </span>
                <span className="text-[10px] text-slate-500 block">Kế hoạch luyện nghe & phản xạ</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-slate-400 block text-[11px]">Bài học đã hoàn thành:</span>
                <span className="text-base font-extrabold text-cyan-400 font-mono">
                  {user?.completed_lessons || 0} bài
                </span>
                <span className="text-[10px] text-slate-500 block">Tiến độ tích lũy cá nhân</span>
              </div>
            </div>

            {/* Security Guarantee Banner */}
            <div className="p-3 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 text-[11px] text-slate-400 flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <strong className="text-slate-200">Không lưu trữ mật khẩu:</strong>
                <p className="text-slate-400 leading-relaxed">
                  Ứng dụng xác thực độc quyền qua chuẩn Google OAuth 2.0 an toàn. Hệ thống và Quản trị viên không bao giờ biết hay lưu mật khẩu Google cá nhân của bạn.
                </p>
              </div>
            </div>

            {/* Quick Demo Switcher */}
            <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 block">
                🧪 Thử Nghiệm Nhanh Cơ Chế Phân Quyền (RBAC Test Demo):
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => switchAccountPreset('admin')}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold cursor-pointer transition"
                >
                  Đăng nhập Quyền Admin
                </button>
                <button
                  onClick={() => switchAccountPreset('user')}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold cursor-pointer transition"
                >
                  Đăng nhập Quyền User thường
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold cursor-pointer transition shadow-md shadow-indigo-600/30"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Chỉnh sửa hồ sơ</span>
              </button>

              <button
                onClick={() => {
                  logout();
                  onClose();
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/60 font-semibold cursor-pointer transition"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Đăng xuất</span>
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* EDIT MODE (CHỈNH SỬA HỒ SƠ & ĐỔI AVATAR RIÊNG)          */
          /* ========================================================= */
          <div className="space-y-5 text-xs animate-fadeIn">
            {/* Display Name Input */}
            <div>
              <label className="text-slate-200 font-bold block mb-1">
                Tên hiển thị trong ứng dụng:
              </label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Nhập tên bạn muốn hiển thị..."
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white font-bold focus:outline-none focus:border-indigo-500 transition"
              />
              <span className="text-[10px] text-slate-500 mt-1 block">
                * Tên này sẽ xuất hiện trên bảng thành tích và giao diện học tập.
              </span>
            </div>

            {/* Email Google (Locked & Readonly) */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-400 font-bold flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  Email Google (Bảo mật - Bất biến):
                </label>
                <span className="text-[10px] text-slate-500">Khóa an toàn</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={user?.email || ''}
                  disabled
                  readOnly
                  className="w-full p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-400 font-mono cursor-not-allowed select-none opacity-80"
                />
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">
                * Theo chuẩn bảo mật, Email được liên kết cố định với Google OAuth và không được sửa tùy tiện.
              </span>
            </div>

            {/* Target JLPT Level */}
            <div>
              <label className="text-slate-200 font-bold block mb-1">Cấp độ JLPT mục tiêu:</label>
              <select
                value={editLevel}
                onChange={(e) => setEditLevel(e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white font-bold focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="N5">N5 — Sơ cấp (Căn bản phát âm & trợ từ)</option>
                <option value="N4">N4 — Sơ trung (Giao tiếp đời thường)</option>
                <option value="N3">N3 — Trung cấp (Phản xạ đàm thoại & pitch accent)</option>
                <option value="N2">N2 — Nâng cao (Văn phòng, thương mại & tin tức)</option>
                <option value="N1">N1 — Chuyên gia (Bản ngữ & học thuật sâu)</option>
              </select>
            </div>

            {/* Avatar Customization Tabs */}
            <div className="border border-slate-800 rounded-2xl p-4 bg-slate-950/60 space-y-3.5">
              <div className="flex items-center justify-between">
                <label className="text-slate-200 font-bold flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-indigo-400" />
                  Tùy Chọn Ảnh Đại Diện (Avatar):
                </label>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    selectedAvatarSource === 'custom'
                      ? 'bg-purple-950/80 text-purple-300 border border-purple-800'
                      : 'bg-blue-950/80 text-blue-300 border border-blue-800'
                  }`}
                >
                  {selectedAvatarSource === 'custom' ? 'Đang chọn: Ảnh riêng' : 'Đang chọn: Ảnh Google'}
                </span>
              </div>

              {/* 4 Avatar Sub-tabs */}
              <div className="grid grid-cols-4 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-bold text-center">
                <button
                  type="button"
                  onClick={() => setAvatarTab('presets')}
                  className={`py-1.5 px-2 rounded-lg transition cursor-pointer ${
                    avatarTab === 'presets'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Kho Anime
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarTab('upload')}
                  className={`py-1.5 px-2 rounded-lg transition cursor-pointer ${
                    avatarTab === 'upload'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Tải Lên Máy
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarTab('google')}
                  className={`py-1.5 px-2 rounded-lg transition cursor-pointer ${
                    avatarTab === 'google'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ảnh Google
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarTab('url')}
                  className={`py-1.5 px-2 rounded-lg transition cursor-pointer ${
                    avatarTab === 'url'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Nhập URL
                </button>
              </div>

              {/* TAB 1: PRESETS */}
              {avatarTab === 'presets' && (
                <div className="space-y-2">
                  <p className="text-[11px] text-slate-400">
                    Chọn một trong các avatar phong cách Nhật Bản có sẵn dưới đây:
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
                    {JAPAN_AVATAR_PRESETS.map((p) => {
                      const isSelected = selectedAvatarUrl === p.url;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleSelectPreset(p.url)}
                          className={`relative group rounded-xl overflow-hidden border-2 transition cursor-pointer aspect-square ${
                            isSelected
                              ? 'border-indigo-500 ring-2 ring-indigo-500/50 scale-105'
                              : 'border-slate-800 hover:border-slate-600'
                          }`}
                        >
                          <img
                            src={p.url}
                            alt={p.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                          />
                          {isSelected && (
                            <div className="absolute inset-0 bg-indigo-600/40 flex items-center justify-center">
                              <Check className="w-5 h-5 text-white stroke-[3]" />
                            </div>
                          )}
                          <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-center text-slate-200 py-0.5 truncate px-1">
                            {p.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: FILE UPLOAD */}
              {avatarTab === 'upload' && (
                <div className="space-y-3">
                  <p className="text-[11px] text-slate-400">
                    Tải ảnh từ máy tính hoặc điện thoại của bạn (tự động chuyển đổi và lưu an toàn):
                  </p>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full p-4 border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-2xl flex flex-col items-center justify-center gap-2 bg-slate-950/80 hover:bg-slate-900 transition cursor-pointer text-slate-300"
                  >
                    <Upload className="w-6 h-6 text-indigo-400" />
                    <span className="text-xs font-bold">Bấm để chọn tệp ảnh từ thiết bị</span>
                    <span className="text-[10px] text-slate-500">Hỗ trợ PNG, JPG, WebP tối đa 3MB</span>
                  </button>
                </div>
              )}

              {/* TAB 3: GOOGLE AVATAR RESTORE */}
              {avatarTab === 'google' && (
                <div className="space-y-3 p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={originalGoogleAvatar}
                      alt="Google Avatar"
                      className="w-12 h-12 rounded-xl object-cover border border-blue-500/50"
                    />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Ảnh đại diện Google chính thức</span>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Được cấp từ tài khoản Google khi bạn đăng nhập lần đầu.
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSelectGoogleAvatarInEdit}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs cursor-pointer transition ${
                      selectedAvatarSource === 'google'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    {selectedAvatarSource === 'google' ? 'Đã Chọn' : 'Chọn Ảnh Này'}
                  </button>
                </div>
              )}

              {/* TAB 4: URL INPUT */}
              {avatarTab === 'url' && (
                <div className="space-y-2">
                  <label className="text-[11px] text-slate-400 block">
                    Dán đường dẫn (URL) ảnh đại diện riêng của bạn:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="flex-1 p-2 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-[11px] focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCustomUrl}
                      className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl cursor-pointer transition"
                    >
                      Áp Dụng
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Actions for Edit Mode */}
            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  // Reset back to current user state
                  if (user) {
                    setEditName(user.name);
                    setSelectedAvatarUrl(user.avatar_url);
                    setSelectedAvatarSource(user.avatar_source || 'google');
                  }
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 cursor-pointer transition"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold cursor-pointer shadow-lg shadow-indigo-600/30 transition disabled:opacity-50"
              >
                {isSaving ? 'Đang lưu...' : 'Lưu Thay Đổi'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
