import React, { useState } from 'react';
import { GrammarItem, Flashcard } from '../types';
import {
  Brain,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Lightbulb,
  Compass,
  BookmarkPlus
} from 'lucide-react';

interface Props {
  item: GrammarItem;
  onAddFlashcards?: (cards: Flashcard[]) => void;
}

export const GrammarMemorySRSView: React.FC<Props> = ({ item, onAddFlashcards }) => {
  const [isSavedToSRS, setIsSavedToSRS] = useState(false);
  const memory = item.takeawayMemory;

  if (!memory) {
    return (
      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl text-slate-400">
        Đang tạo bộ thẻ ghi nhớ SRS cho mẫu ngữ pháp này...
      </div>
    );
  }

  const handleSaveSRS = () => {
    if (!onAddFlashcards) return;
    const newCards: Flashcard[] = memory.srsCards.map((c, i) => ({
      id: `srs-gram-${item.id}-${i}-${Date.now()}`,
      level: c.level,
      kanji: item.grammar.split(' ')[0],
      hanViet: 'NGỮ PHÁP',
      hiragana: item.grammar,
      romaji: item.grammar,
      definition: c.back,
      meaning: {
        vietnamese: c.back,
        coreConcept: c.front,
        contextUsage: memory.realLifeScenario,
        examTip: memory.avoidTrap,
      },
      mnemonic: {
        story: c.mnemonic,
        visualDescription: item.meaning,
        emoji: '🧠',
      },
      pitchAccent: {
        pattern: 'Heiban',
        pitchGraph: 'LHHH',
        accentMora: 0,
      },
      examples: {
        lifeExample: {
          jp: item.threeTierExamples?.basic.japanese || item.grammar,
          vi: item.threeTierExamples?.basic.vietnamese || item.meaning,
          context: 'Đời sống thường nhật',
        },
        jlptExample: {
          jp: item.threeTierExamples?.intermediate.japanese || item.grammar,
          vi: item.threeTierExamples?.intermediate.vietnamese || item.meaning,
          examTip: memory.avoidTrap,
        },
      },
      collocations: [],
      synonyms: [],
      antonyms: [],
      category: 'Ngữ pháp cốt lõi',
      difficulty: 'medium',
      srs: {
        repetitions: 0,
        interval: 1,
        easeFactor: 2.5,
        dueDate: new Date().toISOString(),
        state: 'new',
      },
    }));

    onAddFlashcards(newCards);
    setIsSavedToSRS(true);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block">
            TẦNG 10 • HỆ THỐNG GHI NHỚ DÀI HẠN & SRS
          </span>
          <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            Bộ Công Cụ Ghi Nhớ & 3 Thẻ Flashcard Tích Hợp SRS
          </h3>
        </div>

        <button
          onClick={handleSaveSRS}
          disabled={isSavedToSRS}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition shadow-lg cursor-pointer ${
            isSavedToSRS
              ? 'bg-emerald-950 text-emerald-300 border border-emerald-500'
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/30'
          }`}
        >
          {isSavedToSRS ? (
            <>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Đã lưu 3 thẻ vào Module SRS</span>
            </>
          ) : (
            <>
              <BookmarkPlus className="w-4 h-4 text-amber-300" />
              <span>Lưu 3 thẻ này vào SRS Ôn Tập</span>
            </>
          )}
        </button>
      </div>

      {/* 3 Key Takeaways Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. Golden Quote */}
        <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4" />
            1 Câu Ghi Nhớ Ngắn (Golden Takeaway)
          </div>
          <p className="text-sm font-extrabold text-white leading-relaxed">
            {memory.goldenQuote}
          </p>
        </div>

        {/* 2. Avoid Trap */}
        <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/40 space-y-2">
          <div className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" />
            1 Lỗi Bẫy Cần Tuyệt Đối Tránh
          </div>
          <p className="text-sm font-bold text-rose-200 leading-relaxed">
            {memory.avoidTrap}
          </p>
        </div>

        {/* 3. Real-life scenario */}
        <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 space-y-2">
          <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            1 Tình Huống Giao Tiếp Thực Tế
          </div>
          <p className="text-sm font-bold text-cyan-200 leading-relaxed">
            {memory.realLifeScenario}
          </p>
        </div>
      </div>

      {/* 3 Flashcards Preview */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
          Xem trước 3 Thẻ Flashcard đồng bộ tự động sang thuật toán Spaced Repetition:
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {memory.srsCards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-purple-400 uppercase">
                  Thẻ #{idx + 1} • {card.level}
                </span>
                <div className="text-xs font-bold text-white font-japanese bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  {card.front}
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  {card.back}
                </div>
              </div>

              <div className="text-[11px] text-amber-300/90 pt-2 border-t border-slate-800 italic">
                🧠 <strong>Mẹo nhớ:</strong> {card.mnemonic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
