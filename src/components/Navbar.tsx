import React from 'react';
import {
  Mic2,
  Headphones,
  Brain,
  BookOpen,
  Award,
  FileText,
  Sparkles,
  Flame,
  Globe
} from 'lucide-react';

export type ActiveTab =
  | 'pitch'
  | 'listening'
  | 'flashcards'
  | 'grammar'
  | 'jlpt'
  | 'dokkai';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentLevel: string;
  setCurrentLevel: (level: string) => void;
  dueCardsCount: number;
  onOpenAiAnalyzer: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  currentLevel,
  setCurrentLevel,
  dueCardsCount,
  onOpenAiAnalyzer,
}) => {
  const levels = ['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'];

  const navItems = [
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
                  SRS & JLPT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Hệ Thống Luyện Phản Xạ Pitch Accent • Trí Nhớ Dài Hạn • Giải Đề JLPT
              </p>
            </div>
          </div>

          {/* Right Controls: Level Selector & AI Engine Button */}
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
