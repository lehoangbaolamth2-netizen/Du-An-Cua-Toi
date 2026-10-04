import React, { useState } from 'react';
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
  ExternalLink
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { user, isAdmin, isSuperAdmin, logout, updateProfile, switchAccountPreset } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editLevel, setEditLevel] = useState(user?.target_level || 'N3');
  const [editAvatar, setEditAvatar] = useState(user?.avatar_url || '');
  const [isSaving, setIsSaving] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Đã sao chép ${label}!`);
  };

  const handleSave = async () => {
    setIsSaving(true);
    const success = await updateProfile({
      name: editName.trim(),
      target_level: editLevel,
      avatar_url: editAvatar.trim(),
    });
    setIsSaving(false);
    if (success) {
      setIsEditing(false);
      showToast('Đã lưu thông tin hồ sơ thành công!');
    } else {
      showToast('Lỗi cập nhật hồ sơ.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-xl cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Toast */}
        {toastMsg && (
          <div className="absolute top-3 left-6 right-6 bg-emerald-950 border border-emerald-500 text-emerald-300 px-4 py-2 rounded-xl text-xs font-bold text-center animate-fadeIn shadow-lg">
            {toastMsg}
          </div>
        )}

        {/* Header */}
        <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
          <div className="relative">
            <img
              src={user?.avatar_url}
              alt={user?.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500 shadow-md shadow-indigo-500/20"
            />
            {isAdmin && (
              <span
                className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-lg text-[10px] font-black"
                title="Quản Trị Viên"
              >
                <Shield className="w-3.5 h-3.5" />
              </span>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-extrabold text-white">{user?.name}</h3>
              <span
                className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                  isSuperAdmin
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : isAdmin
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                {user?.role}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">{user?.email}</p>
          </div>
        </div>

        {/* Profile Details or Edit Mode */}
        {!isEditing ? (
          <div className="space-y-4 text-xs">
            {/* Google Sub (Important Google ID anchor) */}
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                  <Key className="w-3.5 h-3.5 text-amber-400" />
                  Định Danh Google Duy Nhất (Google sub):
                </span>
                <button
                  onClick={() => copyToClipboard(user?.google_sub || '', 'Google Sub')}
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Sao chép</span>
                </button>
              </div>
              <div className="font-mono text-emerald-300 text-xs break-all bg-slate-900/80 p-2 rounded-xl">
                {user?.google_sub}
              </div>
              <p className="text-[10px] text-slate-500 pt-0.5">
                * Chuẩn bảo mật Google: Định danh bất biến của tài khoản, không bị ảnh hưởng khi đổi email.
              </p>
            </div>

            {/* Target Level & Study Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-slate-400 block text-[11px]">Cấp độ mục tiêu JLPT:</span>
                <span className="text-base font-extrabold text-indigo-400 font-mono">
                  {user?.target_level || 'N3'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-slate-400 block text-[11px]">Số bài học đã xong:</span>
                <span className="text-base font-extrabold text-cyan-400 font-mono">
                  {user?.completed_lessons || 0} bài
                </span>
              </div>
            </div>

            {/* Quick Demo Switcher */}
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 space-y-2">
              <span className="text-xs font-bold text-indigo-300 block">
                🧪 Thử Nghiệm Nhanh Cơ Chế Phân Quyền (RBAC Test Switch):
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => switchAccountPreset('admin')}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold cursor-pointer"
                >
                  Đăng nhập Quyền Admin
                </button>
                <button
                  onClick={() => switchAccountPreset('user')}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold cursor-pointer"
                >
                  Đăng nhập Quyền User thường
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold cursor-pointer"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Chỉnh sửa hồ sơ</span>
              </button>

              <button
                onClick={() => {
                  logout();
                  onClose();
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/60 font-semibold cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Đăng xuất</span>
              </button>
            </div>
          </div>
        ) : (
          /* Edit Mode */
          <div className="space-y-4 text-xs">
            <div>
              <label className="text-slate-300 font-bold block mb-1">Tên hiển thị:</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold"
              />
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-1">Cấp độ JLPT mục tiêu:</label>
              <select
                value={editLevel}
                onChange={(e) => setEditLevel(e.target.value)}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold"
              >
                <option value="N5">N5 Sơ cấp</option>
                <option value="N4">N4 Sơ trung</option>
                <option value="N3">N3 Trung cấp</option>
                <option value="N2">N2 Nâng cao</option>
                <option value="N1">N1 Chuyên gia</option>
              </select>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-1">URL Ảnh đại diện:</label>
              <input
                type="text"
                value={editAvatar}
                onChange={(e) => setEditAvatar(e.target.value)}
                placeholder="https://..."
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-[11px]"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold cursor-pointer shadow-md"
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
