import React, { useState, useRef, useEffect } from 'react';
import { Flashcard } from '../types';
import { calculateSM2, isCardDue, exportCardsAsJSON, importCardsFromJSON, ReviewRating } from '../services/srs';
import { JapaneseSpeechEngine } from '../services/speech';
import { recordStudyMinutes } from '../services/studyTracker';
import {
  SRSReminderConfig,
  loadReminderConfig,
  saveReminderConfig,
  requestNotificationPermission,
  sendPushNotification,
  playChimeSound,
} from '../services/srsReminder';
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
  Plus,
  Bell,
  BellRing,
  X,
  Clock,
  Briefcase,
  Zap,
} from 'lucide-react';

interface Props {
  cards: Flashcard[];
  onUpdateCards: (newCards: Flashcard[]) => void;
  currentLevel: string;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
}

const CATEGORIES = [
  'Tất cả ngành nghề',
  'Đời sống thường nhật',
  'IT & Công nghệ thông tin',
  'Kinh tế & Thương mại',
  'Y tế & Điều dưỡng',
  'Cơ khí & Kỹ thuật chế tạo',
  'Dịch vụ & Khách sạn',
  'Học thuật & Đọc hiểu N1/N2',
];

export const SRSFlashcardModule: React.FC<Props> = ({
  cards,
  onUpdateCards,
  currentLevel,
  onOpenAiAnalyzer,
}) => {
  // Reminder Notification state
  const [reminderConfig, setReminderConfig] = useState<SRSReminderConfig>(loadReminderConfig());
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [newReminderTime, setNewReminderTime] = useState('20:00');
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>(
    typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'default'
  );

  // Category & Difficulty filters
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả ngành nghề');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'warning' | 'error' } | null>(null);

  useEffect(() => {
    if (!toastMessage) return;
    const t = setTimeout(() => setToastMessage(null), 4000);
    return () => clearTimeout(t);
  }, [toastMessage]);

  const filtered = cards.filter((c) => {
    if (currentLevel !== 'ALL' && c.level !== currentLevel) return false;
    if (selectedCategory !== 'Tất cả ngành nghề' && c.category && c.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && c.difficulty && c.difficulty !== selectedDifficulty) return false;
    return true;
  });

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

  // Scheduled reminder check every minute
  useEffect(() => {
    if (!reminderConfig.enabled) return;

    const interval = setInterval(() => {
      const now = new Date();
      const currentHoursMins = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const todayStr = now.toISOString().slice(0, 10);
      const reminderKey = `${todayStr}-${currentHoursMins}`;

      if (
        reminderConfig.reminderTimes.includes(currentHoursMins) &&
        reminderConfig.lastNotifiedDate !== reminderKey
      ) {
        if (dueCount > 0) {
          sendPushNotification(
            '⏰ Nhắc nhở ôn tập Flashcards SRS',
            `Bạn đang có ${dueCount} từ vựng tiếng Nhật đến hạn cần ôn tập để củng cố trí nhớ dài hạn!`
          );
          if (reminderConfig.soundEnabled) {
            playChimeSound();
          }
        }
        const updated = { ...reminderConfig, lastNotifiedDate: reminderKey };
        setReminderConfig(updated);
        saveReminderConfig(updated);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [reminderConfig, dueCount]);

  const handleToggleReminder = async (enabled: boolean) => {
    if (enabled && notificationPermission !== 'granted') {
      const perm = await requestNotificationPermission();
      setNotificationPermission(perm);
      if (perm !== 'granted') {
        setToastMessage({
          text: 'Trình duyệt chưa cho phép quyền gửi thông báo. Hãy cho phép trong cài đặt trình duyệt của bạn.',
          type: 'warning'
        });
      }
    }
    const updated = { ...reminderConfig, enabled };
    setReminderConfig(updated);
    saveReminderConfig(updated);
  };

  const handleAddReminderTime = () => {
    if (!newReminderTime || reminderConfig.reminderTimes.includes(newReminderTime)) return;
    const updated = {
      ...reminderConfig,
      reminderTimes: [...reminderConfig.reminderTimes, newReminderTime].sort(),
    };
    setReminderConfig(updated);
    saveReminderConfig(updated);
  };

  const handleRemoveReminderTime = (time: string) => {
    const updated = {
      ...reminderConfig,
      reminderTimes: reminderConfig.reminderTimes.filter((t) => t !== time),
    };
    setReminderConfig(updated);
    saveReminderConfig(updated);
  };

  const handleTestNotification = async () => {
    if (notificationPermission !== 'granted') {
      const perm = await requestNotificationPermission();
      setNotificationPermission(perm);
    }
    sendPushNotification(
      '🔔 Thử nghiệm thông báo NihonGo SRS',
      `Hiện có ${dueCount} thẻ từ vựng cần ôn luyện. Thuật toán Spaced Repetition sẵn sàng!`
    );
    playChimeSound();
  };

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
    recordStudyMinutes(1, 'flashcard');

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
        setToastMessage({
          text: `Đồng bộ thành công ${imported.length} thẻ từ file dữ liệu!`,
          type: 'success'
        });
      } catch (err) {
        setToastMessage({
          text: 'Lỗi khi nạp dữ liệu: ' + (err as Error).message,
          type: 'error'
        });
      }
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto relative">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 animate-fadeIn">
          <div
            className={`px-4 py-3 rounded-2xl border shadow-2xl flex items-center gap-3 backdrop-blur-md text-xs font-semibold ${
              toastMessage.type === 'success'
                ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200 shadow-emerald-950/50'
                : toastMessage.type === 'warning'
                ? 'bg-amber-950/90 border-amber-500 text-amber-200 shadow-amber-950/50'
                : 'bg-rose-950/90 border-rose-500 text-rose-200 shadow-rose-950/50'
            }`}
          >
            <span>{toastMessage.text}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="p-1 hover:bg-white/10 rounded-lg cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
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

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => setIsReminderModalOpen(true)}
              title="Cài đặt nhắc nhở ôn tập hàng ngày"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition cursor-pointer ${
                reminderConfig.enabled
                  ? 'bg-purple-600/30 border-purple-500/50 text-purple-200 hover:bg-purple-600/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              <BellRing className={`w-4 h-4 ${reminderConfig.enabled ? 'text-amber-400 animate-bounce' : 'text-slate-400'}`} />
              <span>Nhắc nhở ôn tập</span>
              {reminderConfig.enabled && (
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              )}
            </button>

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

      {/* Industry Category & Difficulty Filter Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <Briefcase className="w-4 h-4 text-indigo-400 shrink-0" />
          <span className="text-xs text-slate-400 shrink-0 font-medium">Chuyên ngành:</span>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentIndex(0);
            }}
            aria-label="Chọn chuyên ngành từ vựng"
            className="bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-purple-500"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs text-slate-400 shrink-0 font-medium">Độ khó:</span>
          <select
            value={selectedDifficulty}
            onChange={(e) => {
              setSelectedDifficulty(e.target.value);
              setCurrentIndex(0);
            }}
            aria-label="Chọn độ khó từ vựng"
            className="bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-purple-500"
          >
            <option value="all">Tất cả độ khó</option>
            <option value="easy">Căn bản / Dễ nhớ</option>
            <option value="medium">Trung bình</option>
            <option value="hard">Khó nhớ</option>
            <option value="expert">Cực khó / Chuyên sâu</option>
          </select>

          <span className="text-xs font-mono font-bold text-purple-300 ml-2">
            ({filtered.length} từ)
          </span>
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

                  <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300 tracking-wide">
                      ÂM HÁN VIỆT: {currentCard.hanViet}
                    </div>
                    {currentCard.category && (
                      <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                        💼 {currentCard.category}
                      </span>
                    )}
                    {currentCard.difficulty && (
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase">
                        ⚡ {currentCard.difficulty}
                      </span>
                    )}
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

            {/* SRS Review Rating Buttons */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Đánh giá khả năng ghi nhớ (Thuật toán SM-2):
                </span>
                <span className="text-[11px] text-purple-400 font-medium">
                  Chọn mức độ phản xạ để tối ưu chu kỳ lặp lại
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* 1: Dễ quên (Again) */}
                <button
                  onClick={() => handleReview('again')}
                  className="p-3.5 rounded-2xl bg-slate-950 hover:bg-rose-950/50 border border-rose-900/40 hover:border-rose-500/60 text-center transition cursor-pointer active:scale-95 group shadow-sm hover:shadow-rose-950/30"
                >
                  <span className="text-sm font-bold text-rose-400 block mb-0.5">Dễ quên</span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">Chưa nhớ vững • Ôn lại ngay</span>
                </button>

                {/* 2: Khó nhớ (Hard) */}
                <button
                  onClick={() => handleReview('hard')}
                  className="p-3.5 rounded-2xl bg-slate-950 hover:bg-amber-950/50 border border-amber-900/40 hover:border-amber-500/60 text-center transition cursor-pointer active:scale-95 group shadow-sm hover:shadow-amber-950/30"
                >
                  <span className="text-sm font-bold text-amber-400 block mb-0.5">Khó nhớ</span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">Nhớ chật vật • 1 - 2 ngày</span>
                </button>

                {/* 3: Dễ nhớ (Good) */}
                <button
                  onClick={() => handleReview('good')}
                  className="p-3.5 rounded-2xl bg-slate-950 hover:bg-indigo-950/50 border border-indigo-900/40 hover:border-indigo-500/60 text-center transition cursor-pointer active:scale-95 group shadow-sm hover:shadow-indigo-950/30"
                >
                  <span className="text-sm font-bold text-indigo-400 block mb-0.5">Dễ nhớ</span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">Nhớ tốt • Chu kỳ chuẩn</span>
                </button>

                {/* 4: Sài được luôn (Easy) */}
                <button
                  onClick={() => handleReview('easy')}
                  className="p-3.5 rounded-2xl bg-slate-950 hover:bg-emerald-950/50 border border-emerald-900/40 hover:border-emerald-500/60 text-center transition cursor-pointer active:scale-95 group shadow-sm hover:shadow-emerald-950/30"
                >
                  <span className="text-sm font-bold text-emerald-400 block mb-0.5">Sài được luôn</span>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-400">Phản xạ tức thì • Giãn cách x1.3</span>
                </button>
              </div>
            </div>
          </div>
        )
      )}

      {/* Reminder Settings Modal */}
      {isReminderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsReminderModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                <BellRing className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Cài Đặt Nhắc Nhở Ôn Tập SRS</h3>
                <p className="text-xs text-slate-400">
                  Thông báo đẩy trình duyệt theo khung giờ cố định khi có thẻ đến hạn
                </p>
              </div>
            </div>

            {/* Toggle Master Reminder */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Bật nhắc nhở ôn tập hàng ngày</div>
                <div className="text-xs text-slate-400">
                  {reminderConfig.enabled ? 'Đang kích hoạt thông báo' : 'Đang tạm tắt thông báo'}
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={reminderConfig.enabled}
                  onChange={(e) => handleToggleReminder(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            {/* Configured Reminder Times */}
            <div className="space-y-3 mb-5">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-purple-400" />
                  Các khung giờ nhận thông báo ({reminderConfig.reminderTimes.length})
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {reminderConfig.reminderTimes.map((time) => (
                  <div
                    key={time}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-800/50 text-purple-200 text-xs font-mono font-bold"
                  >
                    <span>{time}</span>
                    <button
                      onClick={() => handleRemoveReminderTime(time)}
                      className="text-slate-400 hover:text-rose-400 cursor-pointer"
                      title="Xóa giờ này"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add New Time */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="time"
                  value={newReminderTime}
                  onChange={(e) => setNewReminderTime(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-white text-xs rounded-xl px-3 py-2 font-mono focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={handleAddReminderTime}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer flex items-center gap-1"
                >
                  <Plus className="w-4 h-4 text-emerald-400" />
                  <span>Thêm khung giờ</span>
                </button>
              </div>
            </div>

            {/* Sound Toggle & Test */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Phát âm thanh chuông nhẹ (Chime):</span>
                <input
                  type="checkbox"
                  checked={reminderConfig.soundEnabled}
                  onChange={(e) => {
                    const updated = { ...reminderConfig, soundEnabled: e.target.checked };
                    setReminderConfig(updated);
                    saveReminderConfig(updated);
                  }}
                  className="rounded bg-slate-800 border-slate-700 text-purple-600 focus:ring-0 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleTestNotification}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Bell className="w-3.5 h-3.5 text-amber-400" />
                  <span>Thử nghiệm thông báo ngay</span>
                </button>

                <button
                  onClick={() => setIsReminderModalOpen(false)}
                  className="py-2.5 px-5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition cursor-pointer shadow-md shadow-purple-600/30"
                >
                  Hoàn tất
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
