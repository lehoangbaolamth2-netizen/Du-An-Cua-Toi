import React, { useState, useEffect } from 'react';
import {
  loadRecordedErrors,
  clearRecordedErrors,
  RecordedGrammarError,
  PersonalErrorCategory,
  ERROR_CATEGORY_METADATA,
  TARGETED_DRILLS_BANK,
  TargetedDrill
} from '../services/grammarErrorTracker';
import {
  AlertOctagon,
  Trash2,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  TrendingDown,
  BookOpen
} from 'lucide-react';

export const GrammarPersonalMistakesView: React.FC = () => {
  const [errors, setErrors] = useState<RecordedGrammarError[]>([]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<PersonalErrorCategory | 'ALL'>('ALL');
  const [activeDrill, setActiveDrill] = useState<TargetedDrill | null>(null);
  const [drillChosenOption, setDrillChosenOption] = useState<string | null>(null);
  const [drillAnswered, setDrillAnswered] = useState(false);

  useEffect(() => {
    setErrors(loadRecordedErrors());
  }, []);

  const handleClear = () => {
    clearRecordedErrors();
    setErrors([]);
  };

  // Group error counts
  const categoryCounts: Record<PersonalErrorCategory, number> = {
    particle: 0,
    conjugation: 0,
    politeness: 0,
    keigo: 0,
    wordOrder: 0,
    nuance: 0,
    vocabulary: 0,
    kanji: 0,
  };

  errors.forEach((err) => {
    if (categoryCounts[err.category] !== undefined) {
      categoryCounts[err.category]++;
    }
  });

  // Find most frequent error category
  let topErrorCategory: PersonalErrorCategory = 'conjugation';
  let maxCount = -1;
  (Object.keys(categoryCounts) as PersonalErrorCategory[]).forEach((cat) => {
    if (categoryCounts[cat] > maxCount) {
      maxCount = categoryCounts[cat];
      topErrorCategory = cat;
    }
  });

  const filteredErrors =
    selectedCategoryFilter === 'ALL'
      ? errors
      : errors.filter((e) => e.category === selectedCategoryFilter);

  const startTargetedDrill = (cat: PersonalErrorCategory) => {
    const list = TARGETED_DRILLS_BANK[cat] || [];
    if (list.length > 0) {
      setActiveDrill(list[0]);
      setDrillChosenOption(null);
      setDrillAnswered(false);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block">
            TẦNG 11 • CÁ NHÂN HÓA HỌC TẬP
          </span>
          <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-rose-400" />
            Sổ Lỗi Ngữ Pháp Cá Nhân (Phân Loại Theo 8 Nhóm Chuẩn)
          </h3>
        </div>

        {errors.length > 0 && (
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-rose-300 text-xs font-semibold cursor-pointer border border-slate-700"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Xóa sạch lịch sử lỗi</span>
          </button>
        )}
      </div>

      {/* 8 Categories Badge Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {(Object.keys(ERROR_CATEGORY_METADATA) as PersonalErrorCategory[]).map((cat) => {
          const meta = ERROR_CATEGORY_METADATA[cat];
          const count = categoryCounts[cat];
          const isSelected = selectedCategoryFilter === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategoryFilter(isSelected ? 'ALL' : cat)}
              className={`p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-800 border-rose-500 shadow-md ring-1 ring-rose-500/30'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">{meta.icon}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                    count > 0 ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {count} lỗi
                </span>
              </div>
              <div className="text-xs font-bold text-slate-200 truncate">{meta.label}</div>
            </button>
          );
        })}
      </div>

      {/* Targeted Drill Callout for Most Frequent Mistake */}
      {maxCount > 0 && (
        <div className="p-5 rounded-3xl bg-gradient-to-r from-rose-950/50 via-purple-950/40 to-slate-950 border border-rose-600/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-rose-300 uppercase tracking-wide flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-rose-400" />
              Điểm Yếu Tần Suất Cao: {ERROR_CATEGORY_METADATA[topErrorCategory].label} ({maxCount} lần mắc lỗi)
            </span>
            <p className="text-xs text-slate-300">
              Hệ thống đã tự động tạo bài luyện riêng nhằm xóa sạch điểm mù về{' '}
              <strong className="text-white">{ERROR_CATEGORY_METADATA[topErrorCategory].label}</strong> cho bạn.
            </p>
          </div>

          <button
            onClick={() => startTargetedDrill(topErrorCategory)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs shadow-lg shadow-rose-600/30 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Luyện bài khắc phục ngay</span>
          </button>
        </div>
      )}

      {/* Active Targeted Drill Modal / Panel */}
      {activeDrill && (
        <div className="p-6 rounded-3xl bg-slate-950 border-2 border-rose-500 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold">
              Bài Luyện Riêng Biệt: {activeDrill.categoryLabel}
            </span>
            <button
              onClick={() => setActiveDrill(null)}
              className="text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              Đóng bài luyện
            </button>
          </div>

          <h4 className="text-base font-bold text-white font-japanese">{activeDrill.question}</h4>
          <p className="text-xs text-slate-400 italic">💡 Gợi ý: {activeDrill.hint}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {activeDrill.options.map((opt) => {
              const isChosen = drillChosenOption === opt.id;
              let style = 'bg-slate-900 border-slate-800 text-slate-300';
              if (drillAnswered) {
                if (opt.isCorrect) style = 'bg-emerald-950 border-emerald-500 text-emerald-200 font-bold';
                else if (isChosen && !opt.isCorrect) style = 'bg-rose-950 border-rose-500 text-rose-200';
              } else if (isChosen) {
                style = 'bg-rose-600 text-white font-bold';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    if (drillAnswered) return;
                    setDrillChosenOption(opt.id);
                  }}
                  className={`p-3.5 rounded-xl border text-left text-xs transition cursor-pointer flex items-start gap-2.5 ${style}`}
                >
                  <span className="w-5 h-5 rounded-md bg-slate-800 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {opt.id}
                  </span>
                  <div className="flex-1">
                    <div className="font-japanese font-semibold">{opt.text}</div>
                    {drillAnswered && (
                      <p className="text-[11px] mt-1 pt-1 border-t border-slate-800/80">{opt.explanation}</p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {!drillAnswered ? (
            <button
              onClick={() => {
                if (!drillChosenOption) return;
                setDrillAnswered(true);
              }}
              disabled={!drillChosenOption}
              className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs cursor-pointer shadow-md disabled:opacity-50"
            >
              Kiểm tra đáp án bài luyện
            </button>
          ) : (
            <button
              onClick={() => setActiveDrill(null)}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold cursor-pointer hover:bg-slate-700"
            >
              Hoàn thành bài luyện
            </button>
          )}
        </div>
      )}

      {/* Recorded Errors List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
          <span>Lịch sử các câu làm sai ({filteredErrors.length}):</span>
          {selectedCategoryFilter !== 'ALL' && (
            <button
              onClick={() => setSelectedCategoryFilter('ALL')}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Xem tất cả nhóm lỗi
            </button>
          )}
        </div>

        {filteredErrors.length === 0 ? (
          <div className="p-8 text-center bg-slate-950 rounded-2xl border border-slate-800">
            <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-2 opacity-80" />
            <p className="text-sm font-semibold text-white">Chưa ghi nhận lỗi sai nào trong nhóm này!</p>
            <p className="text-xs text-slate-500 mt-1">
              Hãy luyện tập ở Tầng 5. Hệ thống sẽ tự động bắt lỗi và phân loại vào đây.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredErrors.map((err) => (
              <div key={err.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-japanese font-bold text-white text-sm">
                      {err.grammarPattern}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-bold">
                      {err.categoryLabel}
                    </span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{err.timestamp}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-rose-950 text-rose-300 font-japanese">
                    <strong className="text-rose-400 block mb-0.5">❌ Bạn đã trả lời:</strong>
                    {err.userAnswer}
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-emerald-950 text-emerald-300 font-japanese">
                    <strong className="text-emerald-400 block mb-0.5">✅ Câu sửa chuẩn:</strong>
                    {err.correctAnswer}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1 text-slate-300">
                  <p>
                    <strong className="text-amber-400">🔎 Chẩn đoán:</strong> {err.diagnosis}
                  </p>
                  <p>
                    <strong className="text-cyan-400">💡 Quy tắc ghi nhớ:</strong> {err.ruleToRemember}
                  </p>
                  {err.similarExample && (
                    <p className="pt-1 border-t border-slate-800 text-slate-400">
                      <strong className="text-purple-400">🧠 Ví dụ tương tự:</strong>{' '}
                      <span className="font-japanese text-slate-200">{err.similarExample}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
