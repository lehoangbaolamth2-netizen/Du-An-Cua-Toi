import React, { useState } from 'react';
import { DokkaiArticle } from '../types';
import { JapaneseSpeechEngine } from '../services/speech';
import {
  FileText,
  Sparkles,
  Volume2,
  Workflow,
  Link2,
  SplitSquareVertical,
  HelpCircle,
  CheckCircle2,
  Clock,
  BookOpenCheck
} from 'lucide-react';

interface Props {
  articles: DokkaiArticle[];
  currentLevel: string;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
}

export const DokkaiStrategyModule: React.FC<Props> = ({
  articles,
  currentLevel,
  onOpenAiAnalyzer,
}) => {
  const filtered = articles.filter(
    (a) => currentLevel === 'ALL' || a.level === currentLevel
  );
  const activeArticles = filtered.length > 0 ? filtered : articles;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = activeArticles[selectedIndex] || activeArticles[0];

  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);

  const handleSelectQuiz = (optId: string) => {
    if (isQuizSubmitted) return;
    setSelectedQuizOption(optId);
  };

  const handleSubmitQuiz = () => {
    setIsQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedQuizOption(null);
    setIsQuizSubmitted(false);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-slate-900/80 border border-blue-700/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Module 6 • Tư Duy Đọc Hiểu Chuyên Gia (Dokkai Strategy)
              </span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                {current?.level}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              Phân Tích Đoạn Văn Đọc Hiểu Theo Tư Duy Chuyên Gia
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Xác định Main Idea, giải mã mối quan hệ giữa các đoạn. Đánh dấu các từ nối then chốt (接続詞: しかし, つまり, なぜなら...), dịch nghĩa theo cụm (Chunking translation) và mẹo 30s loại trừ đáp án bẫy.
            </p>
          </div>

          <button
            onClick={() => onOpenAiAnalyzer('', 'dokkai')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 active:scale-95 transition cursor-pointer shrink-0 self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Phân tích bài đọc với AI</span>
          </button>
        </div>
      </div>

      {/* Article Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
        {activeArticles.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedIndex(idx);
              handleResetQuiz();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border flex items-center gap-2 ${
              selectedIndex === idx
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="truncate max-w-[240px]">{item.title}</span>
          </button>
        ))}
      </div>

      {current && (
        <div className="space-y-6">
          {/* Passage Showcase with Highlighted Conjunctions */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-sm font-bold text-white tracking-wide">{current.title}</span>
              <button
                onClick={() => JapaneseSpeechEngine.speak(current.passage)}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe đọc toàn bài</span>
              </button>
            </div>

            {/* Japanese Text with Rich Styling */}
            <div className="text-base sm:text-lg font-japanese font-medium text-slate-200 leading-relaxed bg-slate-950/70 p-6 rounded-2xl border border-slate-800/80 whitespace-pre-line mb-6">
              {current.passage}
            </div>

            {/* 1. Main Idea & Article Structure */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Workflow className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  1. Cấu Trúc Bài Viết & Main Idea Của Tác Giả
                </h3>
              </div>

              {/* Main Idea Card */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/50 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                  🎯 Ý chính cốt lõi (Main Idea):
                </span>
                <p className="text-sm font-medium text-slate-200 leading-relaxed">
                  {current.mainIdea}
                </p>
              </div>

              {/* Logic Flow */}
              <div className="text-xs text-amber-300/90 bg-amber-950/30 border border-amber-800/30 p-3 rounded-xl mb-4">
                <strong className="text-amber-400 mr-2">Sơ đồ dòng chảy tư duy (Logic Flow):</strong>
                {current.articleStructure.logicFlow}
              </div>

              {/* Paragraph Breakdown */}
              <div className="space-y-2.5">
                {current.articleStructure.paragraphBreakdown.map((pb, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <span className="font-bold text-blue-400 block mb-0.5">{pb.part}</span>
                      <p className="text-slate-300">{pb.contentSummary}</p>
                    </div>
                    <span className="text-[11px] text-slate-400 bg-slate-950 px-2 py-1 rounded-md border border-slate-800 shrink-0 self-start sm:self-auto italic">
                      {pb.logicRole}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Key Conjunctions (Từ nối then chốt) */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Link2 className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  2. Từ Nối Then Chốt (接続詞: しかし, つまり, なぜなら...)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.keyConjunctions.map((conj, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-base font-bold text-white font-japanese text-cyan-300">
                          {conj.word}
                        </span>
                        <span className="text-xs text-slate-400">{conj.meaning}</span>
                      </div>
                    </div>
                    <p className="text-xs text-amber-200/90 bg-amber-950/30 p-2.5 rounded-lg border border-amber-800/30 mt-2 leading-relaxed">
                      ⚡ <span className="font-semibold text-amber-400">Tín hiệu đọc hiểu:</span> {conj.signalRole}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Chunking Translation (Dịch theo cụm) */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <SplitSquareVertical className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  3. Dịch Nghĩa Chính Xác Theo Cụm (Chunking Translation)
                </h3>
              </div>

              <div className="space-y-3">
                {current.chunkingTranslation.map((chunk, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm font-bold text-white font-japanese mb-0.5">
                        {chunk.japaneseChunk}
                      </p>
                      <p className="text-xs text-emerald-400 font-medium">
                        {chunk.vietnameseChunk}
                      </p>
                    </div>
                    {chunk.note && (
                      <span className="text-[11px] text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 shrink-0 self-start sm:self-auto italic">
                        {chunk.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Comprehension Quiz & Speed Elimination */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  4. Câu Hỏi Kiểm Tra Thấu Hiểu Nội Dung Chuẩn JLPT
                </h3>
              </div>

              <p className="text-sm font-bold text-white font-japanese mb-4 leading-relaxed">
                {current.comprehensionQuiz.question}
              </p>

              <div className="space-y-2.5 mb-4">
                {current.comprehensionQuiz.options.map((opt) => {
                  const isSelected = selectedQuizOption === opt.id;
                  let style = 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300';

                  if (isQuizSubmitted) {
                    if (opt.isCorrect) {
                      style = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isSelected && !opt.isCorrect) {
                      style = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    }
                  } else if (isSelected) {
                    style = 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30';
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectQuiz(opt.id)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-japanese transition cursor-pointer flex flex-col gap-1.5 ${style}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                          {opt.id}
                        </span>
                        <span>{opt.text}</span>
                      </div>

                      {/* Analysis explanation after submission */}
                      {isQuizSubmitted && (
                        <div className="mt-1 pt-2 border-t border-slate-800/80 text-xs font-sans text-slate-300">
                          {opt.whyWrongOrRight}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                {!isQuizSubmitted ? (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={!selectedQuizOption}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white text-xs font-bold transition shadow-md shadow-blue-600/20 cursor-pointer"
                  >
                    Kiểm tra đáp án & Xem phân tích bẫy
                  </button>
                ) : (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 w-full flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300 block mb-0.5 font-bold">
                        Mẹo 30 giây loại trừ đáp án bẫy:
                      </strong>
                      {current.comprehensionQuiz.speedEliminationTip}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 5. Advanced Vocab & Grammar Summary */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpenCheck className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  5. Tổng Hợp Từ Vựng & Cấu Trúc Nâng Cao Trong Bài
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {current.advancedVocabGrammar.map((vg, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-sm font-bold text-white font-japanese block">
                        {vg.term}
                      </span>
                      <span className="text-xs text-cyan-400 font-japanese block mt-0.5">
                        {vg.reading}
                      </span>
                    </div>
                    <span className="text-xs text-slate-300 mt-2 border-t border-slate-800 pt-1.5 font-medium">
                      {vg.meaning}
                    </span>
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
