import React, { useState } from 'react';
import { GrammarItem } from '../types';
import { JapaneseSpeechEngine } from '../services/speech';
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
  BookOpen
} from 'lucide-react';

interface Props {
  grammarList: GrammarItem[];
  currentLevel: string;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
}

export const GrammarDeepDiveModule: React.FC<Props> = ({
  grammarList,
  currentLevel,
  onOpenAiAnalyzer,
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

  // User input answers for the 3 creative context drills: { [drillIndex]: string }
  const [drillAnswers, setDrillAnswers] = useState<Record<number, string>>({});
  const [revealedModels, setRevealedModels] = useState<Record<number, boolean>>({});

  const handleDrillInputChange = (idx: number, val: string) => {
    setDrillAnswers((prev) => ({ ...prev, [idx]: val }));
  };

  const toggleModelAnswer = (idx: number) => {
    setRevealedModels((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

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
                Module 4 • Bản Chất Ngữ Pháp Tiếng Nhật
              </span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                {current?.level}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              Hiểu Bản Chất Ngữ Pháp Để Không Bao Giờ Nhầm Lẫn
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Giải mã ngữ pháp xuất phát từ tư duy tâm lý nào của người Nhật? Bảng chia thể chuẩn xác, so sánh đối trọng 1-1 với cấu trúc gây lú, tự đặt câu theo 3 ngữ cảnh và lật tẩy các lỗi sai kinh điển.
            </p>
          </div>

          <button
            onClick={() => onOpenAiAnalyzer('', 'grammar')}
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
              setDrillAnswers({});
              setRevealedModels({});
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
              setDrillAnswers({});
              setRevealedModels({});
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
          {/* Main Showcase */}
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
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Phát âm</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-japanese mb-2">
              {current.grammar}
            </h1>
            <p className="text-base text-emerald-400 font-semibold mb-6">
              {current.meaning}
            </p>

            {/* 1. Essence & Japanese Mindset */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  1. Bản Chất Ý Nghĩa: Xuất Phát Từ Tư Duy Nào Của Người Nhật?
                </h3>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <span className="font-bold text-emerald-300 block mb-1">🧠 Tâm thức cốt lõi:</span>
                  {current.essenceMeaning.coreMindset}
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-slate-400 mr-2">Nghĩa đen vs Nghĩa thực tế:</span>
                  {current.essenceMeaning.literalVsReal}
                </div>
              </div>
            </div>

            {/* 2. Connection & Conjugation Table */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Table className="w-4 h-4 text-teal-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  2. Bảng Chia Thể & Điều Kiện Kết Hợp
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
                      <th className="py-2.5 px-3">Dạng từ loại</th>
                      <th className="py-2.5 px-3">Công thức kết hợp</th>
                      <th className="py-2.5 px-3">Ví dụ trực quan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {current.connectionRules.map((rule, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/50 transition">
                        <td className="py-3 px-3 font-semibold text-emerald-300 whitespace-nowrap">
                          {rule.form}
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-white whitespace-nowrap">
                          {rule.rule}
                        </td>
                        <td className="py-3 px-3 font-japanese text-slate-300 leading-relaxed">
                          {rule.example}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Direct Comparison with Confusing Structure */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <GitCompare className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  3. So Sánh Phân Biệt Để Không Bị Đánh Lừa
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 mb-4 leading-relaxed">
                <span className="font-bold text-amber-300 block mb-1">
                  ⚡ Điểm khác biệt mấu chốt so với {current.comparison.confusingWith}:
                </span>
                {current.comparison.keyDifference}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.comparison.sideBySide.map((side, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-sm font-extrabold text-white font-japanese block mb-2">
                        {side.structure}
                      </span>
                      <p className="text-xs text-slate-300 mb-2">
                        <strong className="text-slate-400">Cách dùng:</strong> {side.usage}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 border-t border-slate-800 pt-2 italic">
                      <strong className="text-slate-400">Sắc thái:</strong> {side.nuance}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Creative Sentence Building Drills (3 Contexts) */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <PenTool className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  4. Thực Hành Tạo Câu: Áp Dụng Ngay Vào 3 Ngữ Cảnh
                </h3>
              </div>

              <div className="space-y-4">
                {current.creativeDrills.map((drill, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3"
                  >
                    <div>
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide block mb-1">
                        {drill.context}
                      </span>
                      <p className="text-xs text-slate-300 font-medium">{drill.prompt}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <input
                        type="text"
                        value={drillAnswers[idx] || ''}
                        onChange={(e) => handleDrillInputChange(idx, e.target.value)}
                        placeholder="Hãy thử tự đặt câu của bạn bằng tiếng Nhật..."
                        className="flex-1 px-3.5 py-2 rounded-xl text-xs font-japanese text-white bg-slate-950 border border-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />

                      <button
                        onClick={() => toggleModelAnswer(idx)}
                        className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 cursor-pointer shrink-0"
                      >
                        {revealedModels[idx] ? 'Ẩn câu mẫu' : 'Xem câu mẫu'}
                      </button>
                    </div>

                    {revealedModels[idx] && (
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 animate-fadeIn">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-emerald-400">Câu mẫu chuẩn bản xứ:</span>
                          <button
                            onClick={() => JapaneseSpeechEngine.speak(drill.modelSentence)}
                            className="text-slate-400 hover:text-white p-1 rounded-md cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-white font-japanese">
                          {drill.modelSentence}
                        </p>
                        <p className="text-xs text-slate-400 pt-1 border-t border-slate-800/80">
                          💡 {drill.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Common Mistakes & Corrections */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  5. Lỗi Sai Thường Gặp Của Người Học Kèm Giải Thích Chi Tiết
                </h3>
              </div>

              <div className="space-y-3">
                {current.commonMistakes.map((m, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2"
                  >
                    <div className="text-xs font-japanese font-bold text-rose-400">
                      {m.wrongSentence}
                    </div>
                    <div className="text-xs font-japanese font-bold text-emerald-400">
                      {m.correctSentence}
                    </div>
                    <p className="text-xs text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      ⚠️ <span className="font-semibold text-amber-300">Vì sao sai:</span> {m.whyWrong}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
