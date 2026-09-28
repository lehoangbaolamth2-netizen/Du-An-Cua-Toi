import React, { useState, useRef } from 'react';
import { Flashcard } from '../types';
import { calculateSM2, isCardDue, exportCardsAsJSON, importCardsFromJSON, ReviewRating } from '../services/srs';
import { JapaneseSpeechEngine } from '../services/speech';
import {
  Brain,
  Sparkles,
  Volume2,
  RotateCw,
  Download,
  Upload,
  Calendar,
  Layers,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Award,
  RefreshCw,
  Plus
} from 'lucide-react';

interface Props {
  cards: Flashcard[];
  onUpdateCards: (newCards: Flashcard[]) => void;
  currentLevel: string;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
}

export const SRSFlashcardModule: React.FC<Props> = ({
  cards,
  onUpdateCards,
  currentLevel,
  onOpenAiAnalyzer,
}) => {
  const filtered = cards.filter(
    (c) => currentLevel === 'ALL' || c.level === currentLevel
  );
  const activeCards = filtered.length > 0 ? filtered : cards;

  // Filter modes: 'due' | 'all'
  const [filterMode, setFilterMode] = useState<'due' | 'all'>('due');

  const studyCards = activeCards.filter((c) =>
    filterMode === 'due' ? isCardDue(c.srs.dueDate) : true
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentCard = studyCards[currentIndex] || studyCards[0];
  const dueCount = activeCards.filter((c) => isCardDue(c.srs.dueDate)).length;

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleReview = (rating: ReviewRating) => {
    if (!currentCard) return;

    const result = calculateSM2(
      rating,
      currentCard.srs.repetitions,
      currentCard.srs.interval,
      currentCard.srs.easeFactor
    );

    const updated = cards.map((c) => {
      if (c.id === currentCard.id) {
        return {
          ...c,
          srs: {
            ...result,
            lastReviewed: new Date().toISOString(),
          },
        };
      }
      return c;
    });

    onUpdateCards(updated);
    setIsFlipped(false);

    if (currentIndex < studyCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleExport = () => {
    exportCardsAsJSON(cards);
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imported = await importCardsFromJSON(file);
        onUpdateCards(imported);
        alert(`Đồng bộ thành công ${imported.length} thẻ từ file dữ liệu!`);
      } catch (err) {
        alert('Lỗi khi nạp dữ liệu: ' + (err as Error).message);
      }
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-slate-900/80 border border-purple-700/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Module 3 • Trí Nhớ Dài Hạn (SRS SM-2)
              </span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                {currentLevel}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              Flashcard Tối Ưu Não Bộ & Thuật Toán Spaced Repetition
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Mặt trước: Kanji + Hán Việt + Câu chuyện gợi nhớ (Mnemonic). Mặt sau: Trọng âm, 2 ví dụ thực chiến (đời sống + đề thi JLPT), Collocations và từ đồng/trái nghĩa. Tự động tính chu kỳ ôn tập.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleExport}
              title="Xuất sao lưu dữ liệu sang máy khác"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition cursor-pointer"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Xuất sao lưu</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              title="Nhập dữ liệu từ thiết bị khác"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition cursor-pointer"
            >
              <Upload className="w-4 h-4 text-emerald-400" />
              <span>Đồng bộ máy</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportFile}
              accept=".json"
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* Filter and Stats Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setFilterMode('due');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              filterMode === 'due'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Cần ôn hôm nay ({dueCount})</span>
          </button>

          <button
            onClick={() => {
              setFilterMode('all');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              filterMode === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tất cả thẻ ({activeCards.length})</span>
          </button>
        </div>

        <div className="text-xs text-slate-400 font-medium">
          Thẻ {studyCards.length > 0 ? currentIndex + 1 : 0} / {studyCards.length}
        </div>
      </div>

      {studyCards.length === 0 ? (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-12 text-center shadow-xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Tuyệt vời! Bạn đã hoàn thành các thẻ đến hạn!</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
            Thuật toán SRS đã lên lịch giãn cách cho các ngày tiếp theo. Bạn có thể chọn xem "Tất cả thẻ" để ôn tập thêm hoặc phân tích thêm từ mới.
          </p>
          <button
            onClick={() => setFilterMode('all')}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition cursor-pointer shadow-lg shadow-purple-600/30"
          >
            Xem tất cả các thẻ trong kho
          </button>
        </div>
      ) : (
        currentCard && (
          <div className="space-y-6">
            {/* The Interactive 3D Flip Card */}
            <div
              onClick={handleFlip}
              className="min-h-[420px] bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md cursor-pointer transition duration-300 relative flex flex-col justify-between group"
            >
              {/* Card Top Label & Flip hint */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {currentCard.level}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {isFlipped ? 'Mặt sau (Chi tiết & Đề thi JLPT)' : 'Mặt trước (Kanji & Mnemonic)'}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 group-hover:text-purple-300 transition">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Bấm vào thẻ để lật ({isFlipped ? 'Xem mặt trước' : 'Xem mặt sau'})</span>
                </div>
              </div>

              {/* CARD FRONT: Kanji + Hán Việt + Mnemonic */}
              {!isFlipped ? (
                <div className="py-8 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="text-xs font-mono text-purple-400 mb-1">{currentCard.romaji}</div>
                  <div className="text-sm font-japanese text-slate-400 mb-4">{currentCard.hiragana}</div>

                  <h1 className="text-6xl sm:text-7xl font-extrabold text-white font-japanese tracking-wider mb-3">
                    {currentCard.kanji}
                  </h1>

                  <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300 mb-6 tracking-wide">
                    ÂM HÁN VIỆT: {currentCard.hanViet}
                  </div>

                  {/* Mnemonic story & emoji illustration */}
                  <div className="max-w-md bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{currentCard.mnemonic.emoji}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                        Câu chuyện gợi nhớ (Mnemonic):
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentCard.mnemonic.story}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-2 italic">
                      🖼️ {currentCard.mnemonic.visualDescription}
                    </p>
                  </div>
                </div>
              ) : (
                /* CARD BACK: Pitch Accent, Definition, 2 Examples (Life + JLPT), Collocation, Synonyms */
                <div className="py-4 space-y-5 animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                    <div>
                      <span className="text-[11px] font-bold uppercase text-purple-400 block">
                        Trọng âm (Pitch Accent):
                      </span>
                      <span className="text-sm font-bold text-white font-mono">
                        {currentCard.pitchAccent.pattern} ({currentCard.pitchAccent.pitchGraph})
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        JapaneseSpeechEngine.speak(currentCard.kanji);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition shadow-md shadow-purple-600/20"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Phát âm</span>
                    </button>
                  </div>

                  {/* Definition */}
                  <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Định nghĩa súc tích:
                    </span>
                    <p className="text-sm font-medium text-emerald-400">
                      {currentCard.definition}
                    </p>
                  </div>

                  {/* 2 Contextual Examples (Life + JLPT) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Life Example */}
                    <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded-md border border-cyan-800/40">
                          Ví dụ 1: Giao tiếp đời sống
                        </span>
                        <p className="text-xs font-bold text-white font-japanese mt-2 leading-relaxed">
                          {currentCard.examples.lifeExample.jp}
                        </p>
                        <p className="text-xs text-slate-300 mt-1">
                          {currentCard.examples.lifeExample.vi}
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-2 border-t border-slate-800/80 pt-1 italic">
                        💬 {currentCard.examples.lifeExample.context}
                      </span>
                    </div>

                    {/* JLPT Exam Example */}
                    <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-800/40">
                          Ví dụ 2: Xuất hiện trong đề thi JLPT
                        </span>
                        <p className="text-xs font-bold text-white font-japanese mt-2 leading-relaxed">
                          {currentCard.examples.jlptExample.jp}
                        </p>
                        <p className="text-xs text-slate-300 mt-1">
                          {currentCard.examples.jlptExample.vi}
                        </p>
                      </div>
                      <span className="text-[10px] text-amber-300/80 mt-2 border-t border-slate-800/80 pt-1 italic">
                        ⭐ {currentCard.examples.jlptExample.examTip}
                      </span>
                    </div>
                  </div>

                  {/* Collocation & Synonyms */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <span className="font-bold text-slate-400 block mb-1">Collocation (Cụm đi kèm):</span>
                      <ul className="space-y-0.5 text-slate-300 font-japanese">
                        {currentCard.collocations.map((col, idx) => (
                          <li key={idx}>• {col}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <span className="font-bold text-slate-400 block mb-1">Đồng nghĩa / Trái nghĩa:</span>
                      <p className="text-emerald-400 font-japanese">
                        Đồng nghĩa: {currentCard.synonyms.join(', ')}
                      </p>
                      <p className="text-rose-400 font-japanese mt-0.5">
                        Trái nghĩa: {currentCard.antonyms.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom SRS Status Indicator */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-500">
                <span>Trạng thái: <strong className="text-purple-300 uppercase">{currentCard.srs.state}</strong></span>
                <span>Khoảng cách: <strong>{currentCard.srs.interval} ngày</strong></span>
                <span>Hệ số Ease: <strong>{currentCard.srs.easeFactor}</strong></span>
              </div>
            </div>

            {/* SRS Review Rating Buttons (Shown when flipped or always available) */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center sm:text-left">
                Đánh giá khả năng ghi nhớ theo thuật toán SM-2:
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* 1: AGAIN */}
                <button
                  onClick={() => handleReview('again')}
                  className="p-3.5 rounded-2xl bg-slate-950 hover:bg-rose-950/50 border border-rose-900/40 hover:border-rose-500/60 text-center transition cursor-pointer active:scale-95 group"
                >
                  <span className="text-xs font-bold text-rose-400 block mb-0.5">1. Quên (Again)</span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">&lt; 1 ngày</span>
                </button>

                {/* 2: HARD */}
                <button
                  onClick={() => handleReview('hard')}
                  className="p-3.5 rounded-2xl bg-slate-950 hover:bg-amber-950/50 border border-amber-900/40 hover:border-amber-500/60 text-center transition cursor-pointer active:scale-95 group"
                >
                  <span className="text-xs font-bold text-amber-400 block mb-0.5">2. Khó (Hard)</span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">1 - 2 ngày</span>
                </button>

                {/* 3: GOOD */}
                <button
                  onClick={() => handleReview('good')}
                  className="p-3.5 rounded-2xl bg-slate-950 hover:bg-indigo-950/50 border border-indigo-900/40 hover:border-indigo-500/60 text-center transition cursor-pointer active:scale-95 group"
                >
                  <span className="text-xs font-bold text-indigo-400 block mb-0.5">3. Tốt (Good)</span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">Chu kỳ chuẩn</span>
                </button>

                {/* 4: EASY */}
                <button
                  onClick={() => handleReview('easy')}
                  className="p-3.5 rounded-2xl bg-slate-950 hover:bg-emerald-950/50 border border-emerald-900/40 hover:border-emerald-500/60 text-center transition cursor-pointer active:scale-95 group"
                >
                  <span className="text-xs font-bold text-emerald-400 block mb-0.5">4. Rất dễ (Easy)</span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">Giãn cách x1.3</span>
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
