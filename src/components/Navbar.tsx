import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Mic2,
  Headphones,
  Brain,
  BookOpen,
  Award,
  FileText,
  Sparkles,
  Flame,
  Globe,
  BarChart3,
  Shield,
  User,
  LogIn
} from 'lucide-react';

export type ActiveTab =
  | 'dashboard'
  | 'pitch'
  | 'listening'
  | 'flashcards'
  | 'grammar'
  | 'jlpt'
  | 'dokkai'
  | 'admin';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentLevel: string;
  setCurrentLevel: (level: string) => void;
  dueCardsCount: number;
  onOpenAiAnalyzer: () => void;
  onOpenProfile: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  currentLevel,
  setCurrentLevel,
  dueCardsCount,
  onOpenAiAnalyzer,
  onOpenProfile,
  onOpenLogin,
}) => {
  const { user, isAdmin, isSuperAdmin, isAuthenticated } = useAuth();
  const levels = ['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'];

  const navItems = [
    {
      id: 'dashboard' as ActiveTab,
      label: 'Thống Kê Tiến Độ',
      icon: BarChart3,
      color: 'text-emerald-400',
    },
    { id: 'pitch' as ActiveTab, label: 'Phản Xạ & Pitch', icon: Mic2, color: 'text-indigo-400' },
    { id: 'listening' as ActiveTab, label: 'Luyện Nghe 3 Bước', icon: Headphones, color: 'text-cyan-400' },
    {
      id: 'flashcards' as ActiveTab,
      label: 'Flashcards SRS',
      icon: Brain,
      color: 'text-purple-400',
      badge: dueCardsCount > 0 ? dueCardsCount : undefined,
    },
    { id: 'grammar' as ActiveTab, label: 'Ngữ Pháp Bản Chất', icon: BookOpen, color: 'text-emerald-400' },
    { id: 'jlpt' as ActiveTab, label: 'Luyện Đề JLPT', icon: Award, color: 'text-amber-400' },
    { id: 'dokkai' as ActiveTab, label: 'Đọc Hiểu Dokkai', icon: FileText, color: 'text-blue-400' },
  ];

  // RBAC Server-Verified: only show Admin tab if user has admin/superadmin role
  if (isAdmin) {
    navItems.push({
      id: 'admin' as ActiveTab,
      label: 'Khu Vực Quản Trị',
      icon: Shield,
      color: 'text-amber-400',
    });
  }

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo & App Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-extrabold shadow-lg shadow-indigo-500/20 select-none">
              <span className="font-japanese text-xl">日</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  NihonGo <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Reflex</span>
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  RBAC & JLPT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Hệ Thống Luyện Phản Xạ Pitch Accent • Trí Nhớ Dài Hạn • Quản Trị RBAC
              </p>
            </div>
          </div>

          {/* Right Controls: Level Selector, AI Button, User Profile */}
          <div className="flex items-center gap-3">
            {/* JLPT Level Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-2xl p-1">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setCurrentLevel(lvl)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                    currentLevel === lvl
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* AI Engine Analyzer Button */}
            <button
              onClick={onOpenAiAnalyzer}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 active:scale-95 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Phân tích AI</span>
              <span className="sm:hidden">AI</span>
            </button>

            {/* User Account / Google Sign-In Button */}
            {isAuthenticated && user ? (
              <button
                onClick={onOpenProfile}
                className="flex items-center gap-2 p-1 pl-2.5 pr-2 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition cursor-pointer group"
                title="Xem và chỉnh sửa hồ sơ cá nhân"
              >
                <div className="text-left hidden md:block">
                  <div className="text-[11px] font-bold text-white group-hover:text-indigo-300 transition leading-tight">
                    {user.name.split(' ')[0]}
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase">
                    {isSuperAdmin ? 'CHỦ QUẢN' : user.role}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="w-7 h-7 rounded-xl object-cover border border-slate-700"
                  />
                  {isAdmin && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-slate-900" />
                  )}
                </div>
              </button>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-md transition cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-indigo-600" />
                <span>Đăng nhập Google</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pt-3 pb-1 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer relative ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-inner border border-slate-700/80'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? item.color : 'text-slate-400'}`} />
                <span>{item.label}</span>

                {item.badge !== undefined && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-purple-500 text-white animate-pulse">
                    {item.badge}
                  </span>
                )}

                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

