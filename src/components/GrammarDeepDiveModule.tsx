import React, { useState } from 'react';
import { GrammarItem, Flashcard } from '../types';
import { JapaneseSpeechEngine } from '../services/speech';
import { GrammarSixLayersView } from './GrammarSixLayersView';
import { GrammarActivePracticeView } from './GrammarActivePracticeView';
import { GrammarComparisonScenarioView } from './GrammarComparisonScenarioView';
import { GrammarMiniTestView } from './GrammarMiniTestView';
import { GrammarMemorySRSView } from './GrammarMemorySRSView';
import { GrammarPersonalMistakesView } from './GrammarPersonalMistakesView';
import {
  Compass,
  Sparkles,
  Volume2,
  Table,
  GitCompare,
  PenTool,
  AlertOctagon,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Award,
  Brain,
  Layers,
  GraduationCap
} from 'lucide-react';

interface Props {
  grammarList: GrammarItem[];
  currentLevel: string;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
  onAddFlashcards?: (cards: Flashcard[]) => void;
}

export type GrammarSubModuleTab =
  | 'layers'
  | 'practice'
  | 'scenario'
  | 'test'
  | 'memory'
  | 'mistakes';

export const GrammarDeepDiveModule: React.FC<Props> = ({
  grammarList,
  currentLevel,
  onOpenAiAnalyzer,
  onAddFlashcards,
}) => {
  const filtered = grammarList.filter(
    (g) => currentLevel === 'ALL' || g.level === currentLevel
  );
  const activeList = filtered.length > 0 ? filtered : grammarList;

  const [selectedBook, setSelectedBook] = useState<string>('ALL');

  const bookFiltered = activeList.filter(
    (g) => selectedBook === 'ALL' || g.textbookSource === selectedBook
  );
  const displayList = bookFiltered.length > 0 ? bookFiltered : activeList;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = displayList[selectedIndex] || displayList[0];

  const [activeTab, setActiveTab] = useState<GrammarSubModuleTab>('layers');

  const textbooks = [
    { id: 'ALL', label: 'Tất cả giáo trình' },
    { id: 'Minna no Nihongo Sơ cấp', label: 'Minna Sơ cấp (N5/N4)' },
    { id: 'Minna no Nihongo Trung cấp', label: 'Minna Trung cấp (N3)' },
    { id: 'Mimikaraoboeru N3', label: 'Mimikaraoboeru N3' },
    { id: 'Mimikaraoboeru N2', label: 'Mimikaraoboeru N2' },
    { id: 'Mimikaraoboeru N1', label: 'Mimikaraoboeru N1' },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-900/60 via-teal-900/40 to-slate-900/80 border border-emerald-700/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Module 4 • Hệ Thống Ngữ Pháp 6 Tầng Chuẩn Sư Phạm
              </span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-mono font-bold">
                {current?.level}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              Bản Chất Ngữ Pháp & Tâm Thức Người Nhật (N5 - N1)
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              6 tầng kiến thức chuyên sâu: Giải thích siêu cơ bản, Cấu trúc mổ xẻ, 3 Cấp độ ví dụ, Bảng so sánh dễ nhầm, 5 dạng bài học chủ động kèm chẩn đoán lỗi thông minh, và phổ sắc thái giao tiếp tự nhiên.
            </p>
          </div>

          <button
            onClick={() => onOpenAiAnalyzer(current?.grammar, 'grammar')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 active:scale-95 transition cursor-pointer shrink-0 self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Phân tích ngữ pháp với AI</span>
          </button>
        </div>
      </div>

      {/* Textbook Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {textbooks.map((tb) => (
          <button
            key={tb.id}
            onClick={() => {
              setSelectedBook(tb.id);
              setSelectedIndex(0);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer border ${
              selectedBook === tb.id
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
            }`}
          >
            {tb.label}
          </button>
        ))}
      </div>

      {/* Grammar Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
        {displayList.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedIndex(idx);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border flex items-center gap-2 ${
              selectedIndex === idx
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="font-japanese font-bold">{item.grammar}</span>
            {item.lessonNumber && (
              <span className="text-[10px] opacity-75 hidden sm:inline">({item.lessonNumber})</span>
            )}
          </button>
        ))}
      </div>

      {current && (
        <div className="space-y-6">
          {/* Header of Active Grammar Item */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/80">
                  {current.level}
                </span>
                {current.textbookSource && (
                  <span className="text-xs font-semibold text-teal-300 bg-teal-950/80 px-2.5 py-0.5 rounded-full border border-teal-800/60">
                    📖 {current.textbookSource} • {current.lessonNumber}
                  </span>
                )}
              </div>
              <button
                onClick={() => JapaneseSpeechEngine.speak(current.grammar)}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white cursor-pointer px-3 py-1.5 bg-slate-800/60 rounded-xl"
              >
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Nghe phát âm</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-japanese mb-2">
              {current.grammar}
            </h1>
            <p className="text-base text-emerald-400 font-semibold mb-6">
              {current.meaning}
            </p>

            {/* 6 Feature Tabs Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2 border-t border-slate-800/80">
              <button
                onClick={() => setActiveTab('layers')}
                className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  activeTab === 'layers'
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span className="text-xs font-bold">6 Tầng Lý Thuyết</span>
              </button>

              <button
                onClick={() => setActiveTab('practice')}
                className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  activeTab === 'practice'
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <PenTool className="w-4 h-4" />
                <span className="text-xs font-bold">Học Chủ Động (5 Bài)</span>
              </button>

              <button
                onClick={() => setActiveTab('scenario')}
                className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  activeTab === 'scenario'
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <HelpCircle className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold">Tại Sao Dùng Mẫu Này?</span>
              </button>

              <button
                onClick={() => setActiveTab('test')}
                className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  activeTab === 'test'
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <Award className="w-4 h-4 text-cyan-300" />
                <span className="text-xs font-bold">Mini-Test (5 Câu)</span>
              </button>

              <button
                onClick={() => setActiveTab('memory')}
                className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  activeTab === 'memory'
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <Brain className="w-4 h-4 text-purple-300" />
                <span className="text-xs font-bold">Ghi Nhớ & SRS</span>
              </button>

              <button
                onClick={() => setActiveTab('mistakes')}
                className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  activeTab === 'mistakes'
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <AlertOctagon className="w-4 h-4 text-rose-300" />
                <span className="text-xs font-bold">Sổ Lỗi Cá Nhân</span>
              </button>
            </div>
          </div>

          {/* Tab 1: 6 Tầng Lý Thuyết */}
          {activeTab === 'layers' && (
            <GrammarSixLayersView item={current} />
          )}

          {/* Tab 2: Học Chủ Động (5 Dạng Bài A-E) & Chẩn Đoán Lỗi */}
          {activeTab === 'practice' && (
            <GrammarActivePracticeView item={current} />
          )}

          {/* Tab 3: Tại Sao Không Dùng Mẫu Kia? */}
          {activeTab === 'scenario' && (
            <GrammarComparisonScenarioView item={current} />
          )}

          {/* Tab 4: Mini-Test 5 Câu */}
          {activeTab === 'test' && (
            <GrammarMiniTestView item={current} />
          )}

          {/* Tab 5: Hệ Thống Ghi Nhớ & SRS */}
          {activeTab === 'memory' && (
            <GrammarMemorySRSView item={current} onAddFlashcards={onAddFlashcards} />
          )}

          {/* Tab 6: Sổ Lỗi Ngữ Pháp Cá Nhân */}
          {activeTab === 'mistakes' && (
            <GrammarPersonalMistakesView />
          )}
        </div>
      )}
    </div>
  );
};
