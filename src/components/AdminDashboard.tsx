import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  UserProfile,
  AdminAuditLogItem,
  AdminContentItem,
  AdminSystemStats,
  AdminSystemSettings
} from '../types';
import {
  Shield,
  Users,
  BarChart3,
  BookOpen,
  FileText,
  Search,
  Filter,
  Plus,
  Trash2,
  Lock,
  Unlock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Settings,
  Eye,
  Copy,
  ExternalLink,
  Download,
  Upload,
  UserCheck,
  UserX,
  Clock,
  Globe,
  Terminal,
  ChevronRight
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user, token, isAdmin, isSuperAdmin } = useAuth();

  const [activeTab, setActiveTab] = useState<'users' | 'analytics' | 'content' | 'audit' | 'settings'>('users');

  // Users state
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [searchUser, setSearchUser] = useState('');
  const [filterRole, setFilterRole] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [filterLevel, setFilterLevel] = useState<string>('ALL');
  const [isUsersLoading, setIsUsersLoading] = useState(false);

  // Selected user for modals
  const [selectedUserForAction, setSelectedUserForAction] = useState<UserProfile | null>(null);
  const [actionModalType, setActionModalType] = useState<'status' | 'role' | 'delete' | 'view' | null>(null);
  const [actionReason, setActionReason] = useState('');
  const [newSelectedStatus, setNewSelectedStatus] = useState<'active' | 'suspended' | 'banned'>('active');
  const [newSelectedRole, setNewSelectedRole] = useState<'user' | 'admin' | 'superadmin'>('user');

  // Analytics state
  const [stats, setStats] = useState<AdminSystemStats | null>(null);

  // Content state
  const [contents, setContents] = useState<AdminContentItem[]>([]);
  const [contentLevelFilter, setContentLevelFilter] = useState('ALL');
  const [contentModuleFilter, setContentModuleFilter] = useState('ALL');
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [newContentTitle, setNewContentTitle] = useState('');
  const [newContentSummary, setNewContentSummary] = useState('');
  const [newContentLevel, setNewContentLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N3');
  const [newContentModule, setNewContentModule] = useState<'grammar' | 'listening' | 'pitch' | 'flashcard' | 'dokkai'>('grammar');

  // Audit logs state
  const [auditLogs, setAuditLogs] = useState<AdminAuditLogItem[]>([]);
  const [auditSearch, setAuditSearch] = useState('');
  const [auditActionFilter, setAuditActionFilter] = useState('ALL');

  // Settings state
  const [settings, setSettings] = useState<AdminSystemSettings | null>(null);
  const [settingsEnv, setSettingsEnv] = useState<any>(null);

  // Toast banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Fetch Users
  const fetchUsers = async () => {
    if (!token) return;
    setIsUsersLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (searchUser) queryParams.set('search', searchUser);
      if (filterRole !== 'ALL') queryParams.set('role', filterRole);
      if (filterStatus !== 'ALL') queryParams.set('status', filterStatus);
      if (filterLevel !== 'ALL') queryParams.set('level', filterLevel);

      const res = await fetch(`/api/admin/users?${queryParams.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsUsersLoading(false);
    }
  };

  // Fetch Stats
  const fetchStats = async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/admin/statistics', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Fetch Content
  const fetchContent = async () => {
    if (!token) return;
    try {
      const queryParams = new URLSearchParams();
      if (contentLevelFilter !== 'ALL') queryParams.set('level', contentLevelFilter);
      if (contentModuleFilter !== 'ALL') queryParams.set('module', contentModuleFilter);

      const res = await fetch(`/api/admin/content?${queryParams.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setContents(data.contents || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Fetch Audit Logs
  const fetchAuditLogs = async () => {
    if (!token) return;
    try {
      const queryParams = new URLSearchParams();
      if (auditActionFilter !== 'ALL') queryParams.set('action', auditActionFilter);
      if (auditSearch) queryParams.set('search', auditSearch);

      const res = await fetch(`/api/admin/audit-logs?${queryParams.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setAuditLogs(data.logs || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Fetch Settings
  const fetchSettings = async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/admin/settings', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setSettings(data.settings);
        setSettingsEnv(data.environment);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (activeTab === 'users') fetchUsers();
    if (activeTab === 'analytics') fetchStats();
    if (activeTab === 'content') fetchContent();
    if (activeTab === 'audit') fetchAuditLogs();
    if (activeTab === 'settings') fetchSettings();
  }, [activeTab, searchUser, filterRole, filterStatus, filterLevel, contentLevelFilter, contentModuleFilter, auditActionFilter, auditSearch]);

  // Handle User Status Update
  const handleConfirmStatusChange = async () => {
    if (!selectedUserForAction || !token) return;
    try {
      const res = await fetch(`/api/admin/users/${selectedUserForAction.id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: newSelectedStatus,
          reason: actionReason || 'Quản trị viên cập nhật trạng thái',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        showToast(data.message || 'Cập nhật trạng thái thành công!');
        setActionModalType(null);
        setSelectedUserForAction(null);
        setActionReason('');
        fetchUsers();
      } else {
        showToast(data.message || 'Lỗi cập nhật trạng thái.');
      }
    } catch (e) {
      showToast('Lỗi máy chủ khi thao tác.');
    }
  };

  // Handle User Role Update
  const handleConfirmRoleChange = async () => {
    if (!selectedUserForAction || !token) return;
    try {
      const res = await fetch(`/api/admin/users/${selectedUserForAction.id}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role: newSelectedRole,
          reason: actionReason || 'Quản trị viên thay đổi vai trò quyền hạn',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        showToast(data.message || 'Cập nhật quyền thành công!');
        setActionModalType(null);
        setSelectedUserForAction(null);
        setActionReason('');
        fetchUsers();
      } else {
        showToast(data.message || 'Lỗi cập nhật vai trò.');
      }
    } catch (e) {
      showToast('Lỗi máy chủ khi thao tác.');
    }
  };

  // Handle User Delete
  const handleConfirmDelete = async () => {
    if (!selectedUserForAction || !token) return;
    try {
      const res = await fetch(`/api/admin/users/${selectedUserForAction.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          reason: actionReason || 'Quản trị viên xóa tài khoản',
        }),
      });

      const data = await res.json();
      if (res.ok) {
        showToast(data.message || 'Đã xóa người dùng thành công!');
        setActionModalType(null);
        setSelectedUserForAction(null);
        setActionReason('');
        fetchUsers();
      } else {
        showToast(data.message || 'Không thể xóa người dùng.');
      }
    } catch (e) {
      showToast('Lỗi máy chủ khi xóa.');
    }
  };

  // Handle Create Content
  const handleCreateContent = async () => {
    if (!token || !newContentTitle.trim()) return;
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          level: newContentLevel,
          module: newContentModule,
          title: newContentTitle.trim(),
          summary: newContentSummary.trim(),
          status: 'published',
        }),
      });

      if (res.ok) {
        showToast('Tạo bài học mới thành công!');
        setIsContentModalOpen(false);
        setNewContentTitle('');
        setNewContentSummary('');
        fetchContent();
      }
    } catch (e) {
      showToast('Lỗi máy chủ khi tạo nội dung.');
    }
  };

  // Handle Delete Content
  const handleDeleteContent = async (id: string) => {
    if (!token || !confirm('Bạn có chắc chắn muốn xóa bài học này khỏi hệ thống?')) return;
    try {
      const res = await fetch(`/api/admin/content/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        showToast('Đã xóa bài học thành công.');
        fetchContent();
      }
    } catch (e) {
      showToast('Lỗi xóa nội dung.');
    }
  };

  // Copy helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Đã sao chép ${label}: ${text}`);
  };

  if (!isAdmin) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="p-8 rounded-3xl bg-rose-950/40 border border-rose-600/50 space-y-4 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-400">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">403 - KHU VỰC QUẢN TRỊ BỊ GIỚI HẠN</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Hệ thống Role-Based Access Control (RBAC) phía máy chủ đã chặn truy cập. Tài khoản hiện tại của bạn không mang vai trò <strong className="text-amber-400">Quản Trị Viên (Admin)</strong> hoặc <strong className="text-rose-400">Chủ Quản (Superadmin)</strong>.
          </p>
          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-mono text-slate-400 max-w-md mx-auto text-left space-y-1">
            <div>User Email: <span className="text-white">{user?.email || 'Chưa đăng nhập'}</span></div>
            <div>Google Sub: <span className="text-slate-300">{user?.google_sub || 'N/A'}</span></div>
            <div>Vai trò hiện tại: <span className="text-rose-400 font-bold">{user?.role || 'Guest'}</span></div>
            <div>Server Guard: <span className="text-emerald-400">requireAdmin() middleware enforced</span></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fadeIn">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-emerald-500 text-emerald-300 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-bold animate-bounce">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                RBAC Control Center • Server-Side Enforced
              </span>
              <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-0.5 rounded-full font-mono font-bold">
                {user?.role.toUpperCase()}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Bảng Điều Khiển Quản Trị Hệ Thống</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Mô hình phân quyền RBAC chuẩn bảo mật Google: Định danh bằng Google <code className="text-amber-300 font-mono font-bold">sub</code> bất biến, bảo vệ toàn diện các API và tài nguyên từ máy chủ backend.
            </p>
          </div>

          {/* Current Admin Profile Card */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3.5 shrink-0">
            <img
              src={user?.avatar_url}
              alt={user?.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-indigo-500/40"
            />
            <div className="text-xs space-y-0.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <span>{user?.name}</span>
                {isSuperAdmin && <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-black">CHỦ QUẢN</span>}
              </div>
              <div className="text-slate-400 font-mono">{user?.email}</div>
              <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <span>sub: {user?.google_sub.slice(0, 10)}...</span>
                <button
                  onClick={() => copyToClipboard(user?.google_sub || '', 'Google Sub')}
                  className="hover:text-white cursor-pointer"
                  title="Sao chép Google Sub"
                >
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Tab Navigation Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
        {[
          { id: 'users', label: 'Quản Lý User', icon: Users, desc: 'Tài khoản & Phân quyền' },
          { id: 'analytics', label: 'Thống Kê Toàn Hệ Thống', icon: BarChart3, desc: 'DAU / WAU / MAU' },
          { id: 'content', label: 'Quản Lý Nội Dung', icon: BookOpen, desc: 'N5 → N1 Bài Học' },
          { id: 'audit', label: 'Nhật Ký Kiểm Toán', icon: Terminal, desc: 'Security Audit Logs' },
          { id: 'settings', label: 'Cấu Hình & Vercel', icon: Settings, desc: 'Hệ thống & .env' },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between gap-1 ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span className="text-xs font-bold">{tab.label}</span>
              </div>
              <span className={`text-[10px] ${isActive ? 'text-indigo-200' : 'text-slate-500'}`}>{tab.desc}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: USER MANAGEMENT                                                    */}
      {/* ========================================================================= */}
      {activeTab === 'users' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Top Quick Filters & Search */}
          <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col lg:flex-row gap-3 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                placeholder="Tìm theo tên, email, Google sub..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {/* Role filter */}
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="ALL">Tất cả vai trò</option>
                <option value="user">Người dùng (User)</option>
                <option value="admin">Quản trị viên (Admin)</option>
                <option value="superadmin">Chủ quản (Superadmin)</option>
              </select>

              {/* Status filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="ALL">Tất cả trạng thái</option>
                <option value="active">🟢 Đang hoạt động (Active)</option>
                <option value="suspended">🟡 Tạm khóa (Suspended)</option>
                <option value="banned">🔴 Cấm vĩnh viễn (Banned)</option>
              </select>

              {/* Level filter */}
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="ALL">Mọi cấp độ JLPT</option>
                <option value="N5">N5 Sơ cấp</option>
                <option value="N4">N4 Sơ trung</option>
                <option value="N3">N3 Trung cấp</option>
                <option value="N2">N2 Nâng cao</option>
                <option value="N1">N1 Chuyên gia</option>
              </select>

              <button
                onClick={fetchUsers}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                title="Làm mới danh sách"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* User Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-4">Người dùng</th>
                    <th className="py-3.5 px-4">Google sub</th>
                    <th className="py-3.5 px-4">Vai trò (Role)</th>
                    <th className="py-3.5 px-4">Trạng thái (Status)</th>
                    <th className="py-3.5 px-4">Cấp độ & Tiến độ</th>
                    <th className="py-3.5 px-4">Lần đăng nhập cuối</th>
                    <th className="py-3.5 px-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {users.map((u) => {
                    const isSelf = u.id === user?.id;

                    return (
                      <tr key={u.id} className="hover:bg-slate-800/40 transition">
                        {/* Name & Email */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={u.avatar_url}
                              alt={u.name}
                              className="w-9 h-9 rounded-xl object-cover border border-slate-700"
                            />
                            <div>
                              <div className="font-bold text-white flex items-center gap-1.5">
                                <span>{u.name}</span>
                                {isSelf && <span className="text-[10px] text-indigo-400 font-semibold">(Bạn)</span>}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono">{u.email}</div>
                            </div>
                          </div>
                        </td>

                        {/* Google sub */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
                            <span>{u.google_sub.slice(0, 12)}...</span>
                            <button
                              onClick={() => copyToClipboard(u.google_sub, 'Google Sub')}
                              className="text-slate-500 hover:text-white p-1 rounded"
                              title="Sao chép toàn bộ sub"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                        </td>

                        {/* Role */}
                        <td className="py-3 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1 ${
                              u.role === 'superadmin'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : u.role === 'admin'
                                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {u.role}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="py-3 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 ${
                              u.status === 'active'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : u.status === 'suspended'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            }`}
                          >
                            {u.status === 'active' ? 'Hoạt động' : u.status === 'suspended' ? 'Tạm khóa' : 'Cấm'}
                          </span>
                        </td>

                        {/* Target level & stats */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800">
                              {u.target_level || 'N3'}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              {u.completed_lessons || 0} bài học
                            </span>
                          </div>
                        </td>

                        {/* Last login */}
                        <td className="py-3 px-4 text-slate-400 text-[11px] font-mono">
                          {new Date(u.last_login_at).toLocaleString('vi-VN')}
                        </td>

                        {/* Action buttons */}
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Change status */}
                            <button
                              onClick={() => {
                                setSelectedUserForAction(u);
                                setNewSelectedStatus(u.status);
                                setActionModalType('status');
                              }}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
                              title="Đổi trạng thái tài khoản"
                            >
                              {u.status === 'active' ? <Lock className="w-3.5 h-3.5 text-amber-400" /> : <Unlock className="w-3.5 h-3.5 text-emerald-400" />}
                            </button>

                            {/* Change role */}
                            <button
                              onClick={() => {
                                setSelectedUserForAction(u);
                                setNewSelectedRole(u.role);
                                setActionModalType('role');
                              }}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-indigo-200 cursor-pointer"
                              title="Phân quyền vai trò"
                            >
                              <UserCheck className="w-3.5 h-3.5" />
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => {
                                setSelectedUserForAction(u);
                                setActionModalType('delete');
                              }}
                              disabled={u.role === 'superadmin'}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/50 text-slate-400 hover:text-rose-300 disabled:opacity-30 cursor-pointer"
                              title="Xóa tài khoản vĩnh viễn"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SYSTEM ANALYTICS                                                   */}
      {/* ========================================================================= */}
      {activeTab === 'analytics' && stats && (
        <div className="space-y-6 animate-fadeIn">
          {/* Key KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Tổng Người Dùng</span>
              <div className="text-3xl font-mono font-black text-white">{stats.summary.totalUsers}</div>
              <span className="text-[11px] text-emerald-400 font-semibold">🟢 {stats.summary.activeUsers} tài khoản active</span>
            </div>

            <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Người Học Hoạt Động (DAU)</span>
              <div className="text-3xl font-mono font-black text-indigo-400">{stats.summary.dau}</div>
              <span className="text-[11px] text-slate-400">WAU: {stats.summary.wau} • MAU: {stats.summary.mau}</span>
            </div>

            <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Tổng Giờ Học Nhật Ngữ</span>
              <div className="text-3xl font-mono font-black text-amber-300">{stats.summary.totalStudyHours}h</div>
              <span className="text-[11px] text-cyan-300">{stats.summary.totalCompletedLessons} bài học hoàn tất</span>
            </div>

            <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Tỷ Lệ Hoàn Thành Bài</span>
              <div className="text-3xl font-mono font-black text-emerald-400">{stats.summary.completionRate}</div>
              <span className="text-[11px] text-purple-300">{stats.summary.publishedContentsCount} bài đã xuất bản</span>
            </div>
          </div>

          {/* Level Distribution & Weekly Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Level distribution */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-400" />
                <span>Phân Bố Người Học Theo Cấp Độ JLPT (N5 → N1)</span>
              </h3>

              <div className="space-y-3">
                {stats.levelDistribution.map((lvl) => (
                  <div key={lvl.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">{lvl.name}</span>
                      <span className="text-indigo-400 font-mono">{lvl.count} người ({lvl.percentage}%)</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-950 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                        style={{ width: `${Math.max(8, lvl.percentage)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly activity growth */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span>Xu Hướng Hoạt Động 7 Ngày Qua (DAU Trend)</span>
              </h3>

              <div className="grid grid-cols-7 gap-2 pt-6 items-end h-48">
                {stats.dailyGrowth.map((g) => {
                  const heightPercent = Math.min(100, Math.max(15, (g.active / (stats.summary.totalUsers || 1)) * 100));

                  return (
                    <div key={g.day} className="flex flex-col items-center gap-2 h-full justify-end">
                      <div className="text-[10px] font-mono text-indigo-300 font-bold">{g.active}</div>
                      <div
                        className="w-full bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-xl transition-all"
                        style={{ height: `${heightPercent}%` }}
                      />
                      <span className="text-xs font-bold text-slate-400">{g.day}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CONTENT MANAGEMENT (N5 -> N1)                                      */}
      {/* ========================================================================= */}
      {activeTab === 'content' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Action Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-3xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center gap-2">
              <select
                value={contentLevelFilter}
                onChange={(e) => setContentLevelFilter(e.target.value)}
                className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none"
              >
                <option value="ALL">Mọi cấp độ (N5 - N1)</option>
                <option value="N5">N5 Sơ cấp</option>
                <option value="N4">N4 Sơ trung</option>
                <option value="N3">N3 Trung cấp</option>
                <option value="N2">N2 Nâng cao</option>
                <option value="N1">N1 Chuyên gia</option>
              </select>

              <select
                value={contentModuleFilter}
                onChange={(e) => setContentModuleFilter(e.target.value)}
                className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none"
              >
                <option value="ALL">Mọi phân hệ module</option>
                <option value="grammar">Ngữ Pháp Bản Chất</option>
                <option value="listening">Luyện Nghe 3 Bước</option>
                <option value="pitch">Pitch Accent & Phản Xạ</option>
                <option value="flashcard">Flashcards SRS</option>
                <option value="dokkai">Đọc Hiểu Dokkai</option>
              </select>
            </div>

            <button
              onClick={() => setIsContentModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm Bài Học Mới</span>
            </button>
          </div>

          {/* Content Items List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contents.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-slate-700 transition"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold">
                        {item.level}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        {item.module}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.status === 'published'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {item.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white font-japanese">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.summary}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                  <span>Cập nhật: {new Date(item.updated_at).toLocaleDateString('vi-VN')}</span>
                  <button
                    onClick={() => handleDeleteContent(item.id)}
                    className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer"
                    title="Xóa bài học này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SECURITY & AUDIT LOGS                                              */}
      {/* ========================================================================= */}
      {activeTab === 'audit' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Filter Bar */}
          <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={auditSearch}
                onChange={(e) => setAuditSearch(e.target.value)}
                placeholder="Tìm nhật ký theo admin, lý do, target..."
                className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={auditActionFilter}
                onChange={(e) => setAuditActionFilter(e.target.value)}
                className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none"
              >
                <option value="ALL">Mọi hành động (All Actions)</option>
                <option value="USER_LOGIN_GOOGLE">USER_LOGIN_GOOGLE</option>
                <option value="SUSPEND_USER">SUSPEND_USER</option>
                <option value="CHANGE_ROLE">CHANGE_ROLE</option>
                <option value="DELETE_USER">DELETE_USER</option>
                <option value="CREATE_CONTENT">CREATE_CONTENT</option>
                <option value="UPDATE_SYSTEM_SETTINGS">UPDATE_SYSTEM_SETTINGS</option>
                <option value="UNAUTHORIZED_ACCESS_ATTEMPT">UNAUTHORIZED_ACCESS_ATTEMPT</option>
              </select>

              <button
                onClick={fetchAuditLogs}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Audit Logs Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4">Thời gian</th>
                    <th className="py-3 px-4">Admin / Người thực hiện</th>
                    <th className="py-3 px-4">Hành động (Action)</th>
                    <th className="py-3 px-4">Đối tượng tác động</th>
                    <th className="py-3 px-4">Lý do & Chi tiết</th>
                    <th className="py-3 px-4">IP & Thiết bị</th>
                    <th className="py-3 px-4 text-center">Kết quả</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 px-4 whitespace-nowrap text-slate-400">
                        {new Date(log.timestamp).toLocaleString('vi-VN')}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap font-bold text-white">
                        {log.admin_email}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-0.5 rounded font-bold ${
                            log.action.includes('DELETE') || log.action.includes('SUSPEND') || log.action.includes('UNAUTHORIZED')
                              ? 'bg-rose-500/20 text-rose-300'
                              : log.action.includes('LOGIN')
                              ? 'bg-blue-500/20 text-blue-300'
                              : 'bg-emerald-500/20 text-emerald-300'
                          }`}
                        >
                          {log.action}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-300 font-sans">
                        {log.target_name || log.target_id}
                      </td>
                      <td className="py-3 px-4 font-sans text-slate-400 max-w-xs truncate">
                        {log.reason}
                      </td>
                      <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                        {log.ip}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`font-bold ${log.result === 'SUCCESS' ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {log.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: SYSTEM SETTINGS & VERCEL GUIDE                                     */}
      {/* ========================================================================= */}
      {activeTab === 'settings' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Settings Box */}
          {settings && (
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-base font-extrabold text-white">Cấu Hình Vận Hành Hệ Thống</h3>
                  <p className="text-xs text-slate-400">Các thiết lập chỉ áp dụng khi bạn mang vai trò Superadmin</p>
                </div>

                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/30">
                  Superadmin Only
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <strong className="text-white block">Chế độ bảo trì (Maintenance Mode)</strong>
                    <span className="text-slate-400">Tạm ngưng người dùng thông thường truy cập app</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.maintenance_mode}
                    disabled={!isSuperAdmin}
                    onChange={async (e) => {
                      if (!token) return;
                      const res = await fetch('/api/admin/settings', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                        body: JSON.stringify({ maintenance_mode: e.target.checked }),
                      });
                      if (res.ok) {
                        showToast('Đã cập nhật chế độ bảo trì');
                        fetchSettings();
                      }
                    }}
                    className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <strong className="text-white block">Cho phép đăng ký mới</strong>
                    <span className="text-slate-400">Người dùng mới có thể đăng ký tài khoản Google</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.registration_open}
                    disabled={!isSuperAdmin}
                    onChange={async (e) => {
                      if (!token) return;
                      const res = await fetch('/api/admin/settings', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                        body: JSON.stringify({ registration_open: e.target.checked }),
                      });
                      if (res.ok) {
                        showToast('Đã cập nhật cấu hình đăng ký');
                        fetchSettings();
                      }
                    }}
                    className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Vercel Deployment & Google OAuth Instructions */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 border border-indigo-500/40 space-y-4">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <Globe className="w-5 h-5" />
              <span>HƯỚNG DẪN TRIỂN KHAI VERCEL & CẤU HÌNH GOOGLE OAUTH PRODUCTION</span>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                Để đưa ứng dụng lên <strong className="text-white">Vercel</strong> hoặc môi trường Production mà không bao giờ gặp lỗi xác thực Google ID Token:
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 font-mono text-[11px] text-slate-300 border border-slate-800 space-y-2">
                <div className="text-amber-400 font-bold font-sans">1. Cấu hình Google Cloud Console (OAuth 2.0 Client IDs):</div>
                <div>Authorized JavaScript origins:</div>
                <div className="text-emerald-400 pl-4">• http://localhost:3000 (Development)</div>
                <div className="text-emerald-400 pl-4">• https://your-app.vercel.app (Production)</div>
                <div>Authorized redirect URIs:</div>
                <div className="text-emerald-400 pl-4">• https://your-app.vercel.app/api/auth/google</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 font-mono text-[11px] text-slate-300 border border-slate-800 space-y-2">
                <div className="text-amber-400 font-bold font-sans">2. Cấu hình biến môi trường trên Vercel Project Settings:</div>
                <div className="text-cyan-300">GOOGLE_CLIENT_ID = "xxx.apps.googleusercontent.com"</div>
                <div className="text-cyan-300">GOOGLE_CLIENT_SECRET = "GOCSPX-xxx"</div>
                <div className="text-cyan-300">AUTH_SECRET = "32_ky_tu_ngau_nhien_ma_hoa"</div>
                <div className="text-cyan-300">INITIAL_ADMIN_EMAIL = "lehoangbaolamth2@gmail.com"</div>
              </div>

              <div className="p-3 bg-indigo-950/40 border border-indigo-800/40 rounded-xl text-indigo-200">
                💡 <strong>Nguyên tắc vàng:</strong> Backend luôn là chốt chặn cuối cùng kiểm tra trường <code className="font-bold">sub</code> và <code className="font-bold">role === 'admin'</code>. Dù người dùng sửa mã JavaScript phía trình duyệt cũng tuyệt đối không thể gọi các API quản trị!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: CREATE CONTENT                                                     */}
      {/* ========================================================================= */}
      {isContentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-extrabold text-white">Thêm Bài Học Mới (N5 - N1)</h3>
              <button
                onClick={() => setIsContentModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-bold block mb-1">Cấp độ JLPT:</label>
                  <select
                    value={newContentLevel}
                    onChange={(e) => setNewContentLevel(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  >
                    <option value="N5">N5</option>
                    <option value="N4">N4</option>
                    <option value="N3">N3</option>
                    <option value="N2">N2</option>
                    <option value="N1">N1</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 font-bold block mb-1">Module:</label>
                  <select
                    value={newContentModule}
                    onChange={(e) => setNewContentModule(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                  >
                    <option value="grammar">Ngữ Pháp Bản Chất</option>
                    <option value="listening">Luyện Nghe</option>
                    <option value="pitch">Pitch Accent & Phản Xạ</option>
                    <option value="flashcard">Flashcards SRS</option>
                    <option value="dokkai">Đọc Hiểu Dokkai</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-bold block mb-1">Tiêu đề bài học:</label>
                <input
                  type="text"
                  value={newContentTitle}
                  onChange={(e) => setNewContentTitle(e.target.value)}
                  placeholder="Ví dụ: Mẫu 〜にすぎない (Chẳng qua chỉ là...)"
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-japanese"
                />
              </div>

              <div>
                <label className="text-slate-400 font-bold block mb-1">Tóm tắt nội dung cốt lõi:</label>
                <textarea
                  rows={3}
                  value={newContentSummary}
                  onChange={(e) => setNewContentSummary(e.target.value)}
                  placeholder="Mô tả ý nghĩa bản chất và tình huống sử dụng..."
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setIsContentModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleCreateContent}
                disabled={!newContentTitle.trim()}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold"
              >
                Lưu & Xuất Bản
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: USER ACTIONS (STATUS / ROLE / DELETE)                               */}
      {/* ========================================================================= */}
      {actionModalType && selectedUserForAction && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                {actionModalType === 'status' && <Lock className="w-4 h-4 text-amber-400" />}
                {actionModalType === 'role' && <UserCheck className="w-4 h-4 text-indigo-400" />}
                {actionModalType === 'delete' && <Trash2 className="w-4 h-4 text-rose-400" />}
                <span>
                  {actionModalType === 'status' && 'Thay Đổi Trạng Thái Tài Khoản'}
                  {actionModalType === 'role' && 'Phân Quyền Vai Trò (Role)'}
                  {actionModalType === 'delete' && 'Xác Nhận Xóa Tài Khoản'}
                </span>
              </h3>
              <button
                onClick={() => setActionModalType(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <img
                  src={selectedUserForAction.avatar_url}
                  alt={selectedUserForAction.name}
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <div className="font-bold text-white">{selectedUserForAction.name}</div>
                  <div className="text-slate-400 font-mono text-[11px]">{selectedUserForAction.email}</div>
                  <div className="text-[10px] text-slate-500 font-mono">sub: {selectedUserForAction.google_sub}</div>
                </div>
              </div>

              {actionModalType === 'status' && (
                <div className="space-y-1">
                  <label className="text-slate-300 font-bold block">Chọn trạng thái mới:</label>
                  <select
                    value={newSelectedStatus}
                    onChange={(e) => setNewSelectedStatus(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold"
                  >
                    <option value="active">🟢 Hoạt động bình thường (Active)</option>
                    <option value="suspended">🟡 Tạm khóa tài khoản (Suspended)</option>
                    <option value="banned">🔴 Cấm vĩnh viễn (Banned)</option>
                  </select>
                </div>
              )}

              {actionModalType === 'role' && (
                <div className="space-y-1">
                  <label className="text-slate-300 font-bold block">Chọn vai trò quyền hạn:</label>
                  <select
                    value={newSelectedRole}
                    onChange={(e) => setNewSelectedRole(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-bold"
                  >
                    <option value="user">Người Dùng Tiêu Chuẩn (User)</option>
                    <option value="admin">Quản Trị Viên (Admin)</option>
                    {isSuperAdmin && <option value="superadmin">Chủ Quản Hệ Thống (Superadmin)</option>}
                  </select>
                </div>
              )}

              {actionModalType === 'delete' && (
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-600/40 text-rose-200">
                  ⚠️ <strong>Cảnh báo:</strong> Thao tác xóa tài khoản là vĩnh viễn và không thể khôi phục. Mọi phiên đăng nhập của người dùng sẽ lập tức bị hủy bỏ.
                </div>
              )}

              <div>
                <label className="text-slate-300 font-bold block mb-1">
                  Lý do thực hiện (Lưu vào Audit Log):
                </label>
                <input
                  type="text"
                  value={actionReason}
                  onChange={(e) => setActionReason(e.target.value)}
                  placeholder="Nhập lý do thực hiện thao tác..."
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setActionModalType(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
              >
                Hủy bỏ
              </button>

              {actionModalType === 'status' && (
                <button
                  onClick={handleConfirmStatusChange}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold"
                >
                  Xác Nhận Đổi Trạng Thái
                </button>
              )}

              {actionModalType === 'role' && (
                <button
                  onClick={handleConfirmRoleChange}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold"
                >
                  Cập Nhật Phân Quyền
                </button>
              )}

              {actionModalType === 'delete' && (
                <button
                  onClick={handleConfirmDelete}
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold"
                >
                  Xác Nhận Xóa Vĩnh Viễn
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
