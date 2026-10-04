import React, { useState, useEffect, useRef } from 'react';
import { JLPTQuestion, JLPTTestHistory, JLPTSectionType, JLPTLevel, ChoukaiMondai } from '../types';
import { JLPT_EXAM_PACKAGES, JLPTExamPackage } from '../data/jlptExams';
import { JLPT_QUESTION_PRESETS } from '../data/mockData';
import { JapaneseSpeechEngine } from '../services/speech';
import {
  HelpCircle,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  Award,
  BookOpen,
  RotateCcw,
  Sparkles,
  History,
  AlertTriangle,
  ChevronRight,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Filter,
  Play,
  Pause,
  Layers,
  FileText,
  Headphones,
  Check,
  Flame,
  ArrowRight,
  ShieldAlert,
  Maximize,
  AlertOctagon,
  Lock,
  Unlock,
  Send,
  Info,
  X
} from 'lucide-react';
import { ChoukaiIllustrationView } from './ChoukaiIllustrationView';
import { recordStudyMinutes } from '../services/studyTracker';

interface Props {
  currentLevel: string;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
}

const HISTORY_KEY = 'nihongo_reflex_jlpt_history_v2';
const MISTAKES_KEY = 'nihongo_reflex_jlpt_mistakes_v2';

export const JLPTSimulatorModule: React.FC<Props> = ({
  currentLevel,
  onOpenAiAnalyzer,
}) => {
  // Target level: fallback to N3 if 'ALL'
  const initialTargetLevel = (currentLevel === 'ALL' ? 'N3' : currentLevel) as JLPTLevel;
  const [examLevel, setExamLevel] = useState<JLPTLevel>(initialTargetLevel);

  useEffect(() => {
    if (currentLevel !== 'ALL') {
      setExamLevel(currentLevel as JLPTLevel);
    }
  }, [currentLevel]);

  // Find package for the current level
  const activePackage: JLPTExamPackage =
    JLPT_EXAM_PACKAGES.find((pkg) => pkg.level === examLevel) ||
    JLPT_EXAM_PACKAGES[0];

  // Test mode: 'full' (full official exam package ~40 questions) or 'quick' (5 questions)
  const [testMode, setTestMode] = useState<'full' | 'quick'>('full');

  // Base questions determined by test mode
  const baseQuestions: JLPTQuestion[] =
    testMode === 'quick' ? activePackage.questions.slice(0, 5) : activePackage.questions;

  // Exam format: 'standard120' (Kỳ thi chuẩn 120 phút - 3 phần nghiêm ngặt) | 'practice' (Luyện tự do)
  const [examStandardMode, setExamStandardMode] = useState<'standard120' | 'practice'>('standard120');

  // User selections and general test state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isTestSubmitted, setIsTestSubmitted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'test' | 'history' | 'mistakes'>('test');

  // Stored histories & wrong question IDs
  const [testHistories, setTestHistories] = useState<JLPTTestHistory[]>([]);
  const [mistakeQuestionIds, setMistakeQuestionIds] = useState<string[]>([]);

  // Practice timer states
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(activePackage.totalTimeMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Script visibility toggle for Listening (Chokai) questions
  const [revealedScripts, setRevealedScripts] = useState<Record<string, boolean>>({});

  // Audio playback state
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);

  // Section filter inside test: 'all' | 'vocabulary' | 'grammar' | 'reading' | 'listening'
  const [selectedSection, setSelectedSection] = useState<'all' | JLPTSectionType>('all');
  // Sub-filter for reading questions: 'all' | 'setsumei' | 'notice' | 'search'
  const [dokkaiFilter, setDokkaiFilter] = useState<'all' | 'setsumei' | 'notice' | 'search'>('all');
  // Sub-filter for listening questions: 'all' | ChoukaiMondai
  const [choukaiFilter, setChoukaiFilter] = useState<'all' | ChoukaiMondai>('all');
  // Toggle for highlighting conjunctions/transition markers
  const [highlightConnectives, setHighlightConnectives] = useState<boolean>(true);

  // 3-Phase standard exam state:
  // Phase 1: Từ vựng & Kanji (40 phút, 40 điểm)
  // Phase 2: Ngữ pháp & Đọc hiểu (40 phút, 40 điểm)
  // Phase 3: Nghe hiểu (40 phút, 40 điểm, phải nghe hết giờ)
  const [currentPhase, setCurrentPhase] = useState<1 | 2 | 3>(1);
  const [phaseTimeRemaining, setPhaseTimeRemaining] = useState<number>(40 * 60);
  const [submittedPhases, setSubmittedPhases] = useState<Record<number, boolean>>({});
  const [isEarlySubmitDialogOpen, setIsEarlySubmitDialogOpen] = useState<boolean>(false);

  // Anti-Cheat & Fullscreen state
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [violationCount, setViolationCount] = useState<number>(0);
  const [isCheatWarningModalOpen, setIsCheatWarningModalOpen] = useState<boolean>(false);
  const [isExamDisqualified, setIsExamDisqualified] = useState<boolean>(false);

  // Center Score Report Modal
  const [isCenterScoreModalOpen, setIsCenterScoreModalOpen] = useState<boolean>(false);

  // Phase Questions Separation for Standard 120-Min Exam
  const phase1Questions = baseQuestions.filter(
    (q: JLPTQuestion) => q.section === 'vocabulary'
  );
  const phase2Questions = baseQuestions.filter(
    (q: JLPTQuestion) => q.section === 'grammar' || q.section === 'reading'
  );
  const phase3Questions = baseQuestions.filter(
    (q: JLPTQuestion) => q.section === 'listening'
  );

  const filteredQuestions = baseQuestions.filter((q: JLPTQuestion) => {
    if (selectedSection !== 'all' && q.section !== selectedSection) {
      return false;
    }
    if (selectedSection === 'reading' && dokkaiFilter !== 'all') {
      if (dokkaiFilter === 'setsumei') {
        return (
          q.dokkaiMeta?.category === 'setsumei_short' ||
          q.dokkaiMeta?.category === 'setsumei_medium' ||
          q.dokkaiMeta?.category === 'setsumei_long'
        );
      }
      if (dokkaiFilter === 'notice') {
        return q.dokkaiMeta?.category === 'notice_email';
      }
      if (dokkaiFilter === 'search') {
        return q.dokkaiMeta?.category === 'info_search';
      }
    }
    if (selectedSection === 'listening' && choukaiFilter !== 'all') {
      return q.choukaiMeta?.mondai === choukaiFilter;
    }
    return true;
  });

  // Active questions determined by standard 120-min phase or free practice
  const activeQuestions =
    examStandardMode === 'standard120'
      ? currentPhase === 1
        ? phase1Questions
        : currentPhase === 2
        ? phase2Questions
        : phase3Questions
      : filteredQuestions;

  // Load from local storage
  useEffect(() => {
    try {
      const hist = localStorage.getItem(HISTORY_KEY);
      if (hist) setTestHistories(JSON.parse(hist));

      const mis = localStorage.getItem(MISTAKES_KEY);
      if (mis) setMistakeQuestionIds(JSON.parse(mis));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Anti-Cheat & Fullscreen Monitoring Effect
  useEffect(() => {
    if (!isExamStarted || isTestSubmitted || isExamDisqualified || examStandardMode !== 'standard120') return;

    const triggerViolation = (reason: string) => {
      setViolationCount((prev) => {
        const next = prev + 1;
        if (next > 3) {
          setIsExamDisqualified(true);
          setIsTestSubmitted(true);
          setIsCenterScoreModalOpen(true);

          const disqHistory: JLPTTestHistory = {
            id: 'test-disq-' + Date.now(),
            testTitle: `${activePackage.title} [HỦY BÀI: VI PHẠM CHÍNH SÁCH THI]`,
            level: examLevel,
            score: 0,
            totalQuestions: 120,
            date: new Date().toLocaleString('vi-VN'),
            wrongQuestionIds: baseQuestions.map((q: JLPTQuestion) => q.id),
          };
          const updated = [disqHistory, ...testHistories];
          setTestHistories(updated);
          localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
        } else {
          setIsCheatWarningModalOpen(true);
        }
        return next;
      });
    };

    const handleFullscreenChange = () => {
      const isFull = !!(document.fullscreenElement || (document as any).webkitFullscreenElement);
      if (!isFull && isExamStarted && !isTestSubmitted && !isExamDisqualified) {
        triggerViolation('Thoát toàn màn hình');
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden && isExamStarted && !isTestSubmitted && !isExamDisqualified) {
        triggerViolation('Chuyển tab hoặc ẩn trình duyệt');
      }
    };

    const handleBlur = () => {
      if (isExamStarted && !isTestSubmitted && !isExamDisqualified) {
        triggerViolation('Nhấp ra ngoài màn hình thi');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
    };
  }, [isExamStarted, isTestSubmitted, isExamDisqualified, examStandardMode, baseQuestions, testHistories, examLevel, activePackage]);

  // Standard 120-minute timer effect (40 mins per phase)
  useEffect(() => {
    if (examStandardMode !== 'standard120' || !isExamStarted || !isTimerRunning || isTestSubmitted || isExamDisqualified) return;

    const timer = setInterval(() => {
      setPhaseTimeRemaining((prev) => {
        if (prev <= 1) {
          // Auto advance to next phase after 40 mins
          if (currentPhase === 1) {
            setSubmittedPhases((p) => ({ ...p, 1: true }));
            setCurrentPhase(2);
            return 40 * 60;
          } else if (currentPhase === 2) {
            setSubmittedPhases((p) => ({ ...p, 2: true }));
            setCurrentPhase(3);
            return 40 * 60;
          } else {
            // Choukai time completed -> Final submit
            clearInterval(timer);
            handleFinal120Submit();
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStandardMode, isExamStarted, isTimerRunning, isTestSubmitted, isExamDisqualified, currentPhase]);

  // Enter Full Screen helper
  const requestFullScreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        await (document.documentElement as any).webkitRequestFullscreen();
      }
    } catch (e) {
      console.warn('Fullscreen request denied:', e);
    }
  };

  const handleStartExam120 = async () => {
    await requestFullScreen();
    setIsExamStarted(true);
    setCurrentPhase(1);
    setPhaseTimeRemaining(40 * 60);
    setSubmittedPhases({});
    setViolationCount(0);
    setIsExamDisqualified(false);
    setIsTestSubmitted(false);
    setIsCenterScoreModalOpen(false);
    setSelectedAnswers({});
  };

  const handleProceedNextPhase = () => {
    if (currentPhase === 1) {
      setSubmittedPhases((p) => ({ ...p, 1: true }));
      setCurrentPhase(2);
      setPhaseTimeRemaining(40 * 60);
      setIsEarlySubmitDialogOpen(false);
    } else if (currentPhase === 2) {
      setSubmittedPhases((p) => ({ ...p, 2: true }));
      setCurrentPhase(3);
      setPhaseTimeRemaining(40 * 60);
      setIsEarlySubmitDialogOpen(false);
    }
  };

  // Calculate scores per phase (scaled to 40 points each)
  const calculatePhaseScore = (qList: JLPTQuestion[]) => {
    if (qList.length === 0) return 0;
    let correct = 0;
    qList.forEach((q: JLPTQuestion) => {
      const sel = selectedAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (sel && correctOpt && sel === correctOpt.id) correct++;
    });
    return Math.round((correct / qList.length) * 40);
  };

  const scoreP1 = isExamDisqualified ? 0 : calculatePhaseScore(phase1Questions);
  const scoreP2 = isExamDisqualified ? 0 : calculatePhaseScore(phase2Questions);
  const scoreP3 = isExamDisqualified ? 0 : calculatePhaseScore(phase3Questions);
  const total120Score = isExamDisqualified ? 0 : scoreP1 + scoreP2 + scoreP3;

  const isP1Failed = !isExamDisqualified && scoreP1 < 19;
  const isP2Failed = !isExamDisqualified && scoreP2 < 19;
  const isP3Failed = !isExamDisqualified && scoreP3 < 19;
  const hasFailedSection = isP1Failed || isP2Failed || isP3Failed;
  const is120Passed = !isExamDisqualified && !hasFailedSection && total120Score >= 60;

  const handleFinal120Submit = () => {
    setSubmittedPhases({ 1: true, 2: true, 3: true });
    setIsTestSubmitted(true);
    setIsCenterScoreModalOpen(true);
    recordStudyMinutes(120, 'reading');

    const wrongIds: string[] = [];
    baseQuestions.forEach((q: JLPTQuestion) => {
      const sel = selectedAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (!sel || !correctOpt || sel !== correctOpt.id) {
        wrongIds.push(q.id);
      }
    });

    const newHistory: JLPTTestHistory = {
      id: 'test-120-' + Date.now(),
      testTitle: `${activePackage.title} (Thi Chuẩn 120p: ${scoreP1}/40, ${scoreP2}/40, ${scoreP3}/40) - ${is120Passed ? 'ĐỖ' : 'RỚT'}`,
      level: examLevel,
      score: total120Score,
      totalQuestions: 120,
      date: new Date().toLocaleString('vi-VN'),
      wrongQuestionIds: wrongIds,
    };

    const updated = [newHistory, ...testHistories];
    setTestHistories(updated);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));

    const newMistakes = Array.from(new Set([...mistakeQuestionIds, ...wrongIds]));
    setMistakeQuestionIds(newMistakes);
    localStorage.setItem(MISTAKES_KEY, JSON.stringify(newMistakes));
  };

  // Reset when level or test mode changes
  useEffect(() => {
    setSelectedAnswers({});
    setIsTestSubmitted(false);
    setRevealedScripts({});
    setTimeRemainingSeconds(activePackage.totalTimeMinutes * 60);
    setIsTimerRunning(true);
    setSelectedSection('all');
    setDokkaiFilter('all');
    setChoukaiFilter('all');
  }, [examLevel, testMode]);

  // Countdown timer effect
  useEffect(() => {
    if (!isTimerRunning || isTestSubmitted || timeRemainingSeconds <= 0) return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, isTestSubmitted, timeRemainingSeconds]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isTestSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const toggleScript = (qId: string) => {
    setRevealedScripts((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handlePlayListeningAudio = (qId: string, script: string) => {
    if (playingAudioId === qId) {
      JapaneseSpeechEngine.stop();
      setPlayingAudioId(null);
    } else {
      JapaneseSpeechEngine.speak(script, audioSpeed, () => {
        setPlayingAudioId(null);
      });
      setPlayingAudioId(qId);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    filteredQuestions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (selected && correctOpt && selected === correctOpt.id) {
        correct++;
      }
    });
    return correct;
  };

  const getSectionStats = () => {
    const stats: Record<JLPTSectionType, { total: number; correct: number }> = {
      vocabulary: { total: 0, correct: 0 },
      grammar: { total: 0, correct: 0 },
      reading: { total: 0, correct: 0 },
      listening: { total: 0, correct: 0 },
    };

    baseQuestions.forEach((q) => {
      const sec = q.section || 'grammar';
      stats[sec].total++;
      const selected = selectedAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (selected && correctOpt && selected === correctOpt.id) {
        stats[sec].correct++;
      }
    });

    return stats;
  };

  const handleSubmitTest = () => {
    const correctCount = calculateScore();
    const wrongIds: string[] = [];

    filteredQuestions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (!selected || !correctOpt || selected !== correctOpt.id) {
        wrongIds.push(q.id);
      }
    });

    const newHistory: JLPTTestHistory = {
      id: 'test-' + Date.now(),
      testTitle: `${activePackage.title} (${filteredQuestions.length} Câu - ${testMode === 'full' ? 'Đầy Đủ' : 'Nhanh'})`,
      level: examLevel,
      score: correctCount,
      totalQuestions: filteredQuestions.length,
      date: new Date().toLocaleString('vi-VN'),
      wrongQuestionIds: wrongIds,
    };

    const updatedHistories = [newHistory, ...testHistories];
    setTestHistories(updatedHistories);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistories));

    // Record study time spent on the test
    const timeSpentSeconds = Math.max(60, activePackage.totalTimeMinutes * 60 - timeRemainingSeconds);
    const timeSpentMinutes = Math.max(2, Math.round(timeSpentSeconds / 60));
    recordStudyMinutes(timeSpentMinutes, 'reading');

    // Update mistake notebook
    const newMistakes = Array.from(new Set([...mistakeQuestionIds, ...wrongIds]));
    setMistakeQuestionIds(newMistakes);
    localStorage.setItem(MISTAKES_KEY, JSON.stringify(newMistakes));

    setIsTestSubmitted(true);
    setIsTimerRunning(false);
  };

  const handleResetTest = () => {
    setSelectedAnswers({});
    setIsTestSubmitted(false);
    setTimeRemainingSeconds(activePackage.totalTimeMinutes * 60);
    setIsTimerRunning(true);
    setRevealedScripts({});
    JapaneseSpeechEngine.stop();
    setPlayingAudioId(null);
  };

  // Mistake Notebook questions across all packages
  const allAvailableQuestions = [
    ...JLPT_EXAM_PACKAGES.flatMap((p) => p.questions),
    ...JLPT_QUESTION_PRESETS.flatMap((p) => p.questions)
  ];
  const uniqueQuestionsMap = new Map<string, JLPTQuestion>();
  allAvailableQuestions.forEach((q) => uniqueQuestionsMap.set(q.id, q));

  const mistakeQuestions = mistakeQuestionIds
    .map((id) => uniqueQuestionsMap.get(id))
    .filter((q): q is JLPTQuestion => !!q);

  const handleRemoveMistake = (qId: string) => {
    const updated = mistakeQuestionIds.filter((id) => id !== qId);
    setMistakeQuestionIds(updated);
    localStorage.setItem(MISTAKES_KEY, JSON.stringify(updated));
  };

  const availableLevels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  // Helper to highlight discourse connectives (接続詞) and condition keywords for Dokkai
  const renderHighlightedPassage = (text: string, isHighlighted: boolean) => {
    if (!isHighlighted) return text;
    // Match connectives and key condition markers
    const regex = /(しかし|だが|けれども|ところが|一方で|つまり|要するに|すなわち|なぜなら|というのは|したがって|そのため|ただし|なお|※[^\n]*|注意[：:]?|条件[：:]?|締切[：:]?|締め切り[：:]?)/g;
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, idx) => {
          if (!part) return null;
          if (part.startsWith('※')) {
            return (
              <mark
                key={idx}
                className="bg-rose-500/20 text-rose-300 font-bold px-1.5 py-0.5 rounded border border-rose-500/40 not-italic inline-block my-0.5"
                title="Lưu ý quan trọng / Ngoại lệ bẫy đề thi"
              >
                {part}
              </mark>
            );
          }
          if (/^(しかし|だが|けれども|ところが|一方で)/.test(part)) {
            return (
              <mark
                key={idx}
                className="bg-amber-500/25 text-amber-300 font-bold px-1.5 py-0.5 rounded border border-amber-500/40 not-italic"
                title="Từ nối đối lập - Ý chính thường nằm ngay sau"
              >
                {part}
              </mark>
            );
          }
          if (/^(つまり|要するに|すなわち)/.test(part)) {
            return (
              <mark
                key={idx}
                className="bg-cyan-500/25 text-cyan-200 font-bold px-1.5 py-0.5 rounded border border-cyan-500/40 not-italic"
                title="Từ nối tóm tắt / Kết luận của tác giả"
              >
                {part}
              </mark>
            );
          }
          if (/^(なぜなら|というのは|したがって|そのため)/.test(part)) {
            return (
              <mark
                key={idx}
                className="bg-indigo-500/25 text-indigo-200 font-bold px-1.5 py-0.5 rounded border border-indigo-500/40 not-italic"
                title="Nguyên nhân & Hệ quả"
              >
                {part}
              </mark>
            );
          }
          if (/^(ただし|なお|注意|条件|締切|締め切り)/.test(part)) {
            return (
              <mark
                key={idx}
                className="bg-emerald-500/25 text-emerald-200 font-bold px-1.5 py-0.5 rounded border border-emerald-500/40 not-italic"
                title="Điều kiện ràng buộc / Bẫy lọc"
              >
                {part}
              </mark>
            );
          }
          return part;
        })}
      </>
    );
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-900/60 via-orange-900/40 to-slate-900/80 border border-amber-700/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Module 5 • Luyện Đề Chuẩn JLPT (2012 - 2020)
              </span>

              {/* Interactive Level Pills */}
              <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-full border border-slate-800">
                {availableLevels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setExamLevel(lvl)}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold transition cursor-pointer ${
                      examLevel === lvl
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>

              <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full font-mono">
                {activePackage.year}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
              {activePackage.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Kho đề thi thật gồm ~30 câu Từ vựng & Ngữ pháp, 5 câu Đọc hiểu Dokkai (chuẩn 3 thể loại), và 30 câu Nghe hiểu Choukai chuẩn thi thật (Mondai 1-4 đối với N5/N4; Mondai 1-5 đối với N3/N2/N1 100% tiếng Nhật, không dịch khi làm bài). Phân tích bẫy 4 phương án và mẹo làm bài 30 giây.
            </p>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('test')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'test'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Đề thi ({filteredQuestions.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('mistakes')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'mistakes'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Sổ tay câu sai ({mistakeQuestions.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'history'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Lịch sử ({testHistories.length})</span>
            </button>
          </div>
        </div>

        {/* Mode Selector & Standard 120-min Bar */}
        {activeTab === 'test' && (
          <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold mr-1">Hình thức:</span>
              <button
                onClick={() => {
                  setExamStandardMode('standard120');
                  setIsExamStarted(false);
                  setIsTestSubmitted(false);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  examStandardMode === 'standard120'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-300" />
                <span>Thi Chuẩn 120 Phút (3 Phần Nghiêm Ngặt)</span>
              </button>

              <button
                onClick={() => setExamStandardMode('practice')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  examStandardMode === 'practice'
                    ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Luyện Tập Tự Do</span>
              </button>
            </div>

            {/* Timer Counter */}
            {examStandardMode === 'standard120' && isExamStarted && !isTestSubmitted ? (
              <div className="flex items-center gap-3 bg-slate-950/90 px-4 py-1.5 rounded-2xl border border-amber-500/40 shadow-inner">
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${phaseTimeRemaining < 600 ? 'text-rose-400 animate-pulse' : 'text-amber-400'}`} />
                  <span className="text-xs text-amber-300 font-semibold">
                    Phần {currentPhase}:
                  </span>
                  <span className={`font-mono text-base font-bold ${phaseTimeRemaining < 600 ? 'text-rose-400' : 'text-white'}`}>
                    {formatTimer(phaseTimeRemaining)}
                  </span>
                </div>

                {violationCount > 0 && (
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-bold">
                    Cảnh báo vi phạm: {violationCount}/3
                  </span>
                )}
              </div>
            ) : examStandardMode === 'practice' ? (
              <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-1.5 rounded-2xl border border-slate-800">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-sm font-bold text-white">
                  {formatTimer(timeRemainingSeconds)}
                </span>
                {!isTestSubmitted && (
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-900 border border-slate-800 cursor-pointer"
                  >
                    {isTimerRunning ? 'Tạm dừng' : 'Tiếp tục'}
                  </button>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* STANDARD 120-MIN PRE-EXAM LOBBY & RULES AGREEMENT */}
      {activeTab === 'test' && examStandardMode === 'standard120' && !isExamStarted && !isTestSubmitted && (
        <div className="bg-slate-900/95 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                Quy Chế Thi JLPT {examLevel} Chuẩn 120 Phút
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Phòng Thi Mô Phỏng Nghiêm Ngặt
              </h2>
              <p className="text-sm text-slate-300">
                Tuân thủ nghiêm ngặt cấu trúc 3 phần thi, cơ chế điểm liệt và chế độ giám sát toàn màn hình chống gian lận.
              </p>
            </div>

            {/* 3 Core Exam Phases Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">PHẦN 1</span>
                  <span className="text-xs text-slate-400 font-mono">40 Phút</span>
                </div>
                <h4 className="text-sm font-bold text-white">Từ Vựng & Kanji</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tối đa <strong>40 điểm</strong>. Chỉ được nộp sớm khi còn đúng 10 phút. Nộp xong KHÔNG THỂ quay lại.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">PHẦN 2</span>
                  <span className="text-xs text-slate-400 font-mono">40 Phút</span>
                </div>
                <h4 className="text-sm font-bold text-white">Ngữ Pháp & Đọc Hiểu</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tối đa <strong>40 điểm</strong>. Nộp bài khi còn 10 phút cuối để bước vào phần Nghe hiểu.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400">PHẦN 3</span>
                  <span className="text-xs text-slate-400 font-mono">40 Phút</span>
                </div>
                <h4 className="text-sm font-bold text-white">Nghe Hiểu (Choukai)</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tối đa <strong>40 điểm</strong>. <em>Bắt buộc nghe và làm bài đến hết toàn bộ 40 phút</em> (không nộp sớm).
                </p>
              </div>
            </div>

            {/* Critical Rules Notice */}
            <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-800/40 space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <span>QUY CHẾ ĐIỂM LIỆT & GIÁM SÁT AN TOÀN THI KHÔNG NHÂN NHƯỢNG:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>
                  <strong className="text-rose-300">Quy định điểm liệt:</strong> 3 phần mỗi phần 40 điểm (Tổng 120 điểm). <strong>Bất kỳ phần nào dưới 19 điểm là AUTO RỚT</strong>, bất kể tổng điểm cao bao nhiêu.
                </li>
                <li>
                  <strong className="text-emerald-300">Chuẩn đỗ (Goukaku):</strong> Cả 3 phần đều &ge; 19 điểm VÀ tổng điểm đạt &ge; 60 / 120 điểm.
                </li>
                <li>
                  <strong className="text-amber-300">Giám sát toàn màn hình:</strong> Khi bắt đầu thi, hệ thống sẽ mở chế độ Full Screen. Nếu thoát toàn màn hình hoặc chuyển tab sang ứng dụng khác, hệ thống sẽ cảnh báo <strong>tối đa 3 lần</strong>.
                </li>
                <li>
                  <strong className="text-rose-400">Hủy bài thi:</strong> Nếu vi phạm <strong>quá 3 lần</strong>, bài thi sẽ bị hủy bỏ ngay lập tức với thông báo <em>"Bạn đã vi phạm chính sách thi JLPT"</em> và tính <strong>0 ĐIỂM</strong>!
                </li>
              </ul>
            </div>

            {/* Start Button */}
            <div className="text-center pt-2">
              <button
                onClick={handleStartExam120}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 hover:from-amber-500 hover:to-orange-500 text-white font-extrabold text-base shadow-xl shadow-amber-600/30 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 mx-auto"
              >
                <Maximize className="w-5 h-5" />
                <span>BẮT ĐẦU LÀM BÀI THI CHUẨN 120 PHÚT (VÀO TOÀN MÀN HÌNH)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 1: ACTIVE TEST */}
      {activeTab === 'test' && (examStandardMode === 'practice' || isExamStarted) && (
        <div className="space-y-6">
          {/* Phase Progress Bar in 120-min Standard Mode */}
          {examStandardMode === 'standard120' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tiến trình thi:</span>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
                      currentPhase === 1
                        ? 'bg-amber-600 text-white shadow-md'
                        : submittedPhases[1]
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {submittedPhases[1] ? <Check className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                    <span>1. Từ vựng & Kanji ({phase1Questions.length} câu)</span>
                  </span>

                  <ChevronRight className="w-4 h-4 text-slate-600" />

                  <span
                    className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
                      currentPhase === 2
                        ? 'bg-amber-600 text-white shadow-md'
                        : submittedPhases[2]
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {submittedPhases[2] ? <Check className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                    <span>2. Ngữ pháp & Đọc hiểu ({phase2Questions.length} câu)</span>
                  </span>

                  <ChevronRight className="w-4 h-4 text-slate-600" />

                  <span
                    className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
                      currentPhase === 3
                        ? 'bg-amber-600 text-white shadow-md'
                        : submittedPhases[3]
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {submittedPhases[3] ? <Check className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                    <span>3. Nghe hiểu ({phase3Questions.length} câu)</span>
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400">
                Thời gian phần {currentPhase}: <strong className="font-mono text-white text-sm">{formatTimer(phaseTimeRemaining)}</strong>
              </div>
            </div>
          )}

          {/* Section Filter Tabs in Practice Mode */}
          {examStandardMode === 'practice' && testMode === 'full' && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedSection('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                  selectedSection === 'all'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Tất cả ({baseQuestions.length})
              </button>

              <button
                onClick={() => setSelectedSection('vocabulary')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  selectedSection === 'vocabulary'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Từ vựng ({baseQuestions.filter((q) => q.section === 'vocabulary').length})</span>
              </button>

              <button
                onClick={() => setSelectedSection('grammar')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  selectedSection === 'grammar'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Ngữ pháp ({baseQuestions.filter((q) => q.section === 'grammar').length})</span>
              </button>

              <button
                onClick={() => setSelectedSection('reading')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  selectedSection === 'reading'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Đọc hiểu Dokkai ({baseQuestions.filter((q) => q.section === 'reading').length})</span>
              </button>

              <button
                onClick={() => setSelectedSection('listening')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  selectedSection === 'listening'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Headphones className="w-3.5 h-3.5 text-cyan-400" />
                <span>Nghe hiểu Chokai ({baseQuestions.filter((q) => q.section === 'listening').length})</span>
              </button>
            </div>
          )}

          {/* DOKKAI SPECIALIZED TOOLBAR & STRATEGY (KHI CHỌN PHẦN ĐỌC HIỂU HOẶC LUYỆN N3, N2, N1) */}
          {selectedSection === 'reading' && (
            <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 rounded-2xl p-4 space-y-3 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5" />
                    Phân loại 3 dạng đề Dokkai Chuẩn Thi:
                  </span>
                </div>

                {/* Highlighter Toggle */}
                <button
                  onClick={() => setHighlightConnectives(!highlightConnectives)}
                  className={`text-xs px-3 py-1 rounded-xl border flex items-center gap-1.5 cursor-pointer font-semibold transition ${
                    highlightConnectives
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {highlightConnectives ? 'Đang bật đánh dấu từ nối (接続詞)' : 'Bật đánh dấu từ nối (接続詞)'}
                  </span>
                </button>
              </div>

              {/* Dokkai Sub-filters */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setDokkaiFilter('all')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium ${
                    dokkaiFilter === 'all'
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Tất cả ({baseQuestions.filter((q) => q.section === 'reading').length})
                </button>

                <button
                  onClick={() => setDokkaiFilter('setsumei')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium flex items-center gap-1.5 ${
                    dokkaiFilter === 'setsumei'
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <FileText className="w-3 h-3 text-emerald-400" />
                  <span>1. 説明文・解説文 (Văn giải thích / Bình luận / Tùy bút)</span>
                </button>

                <button
                  onClick={() => setDokkaiFilter('notice')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium flex items-center gap-1.5 ${
                    dokkaiFilter === 'notice'
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <Award className="w-3 h-3 text-cyan-400" />
                  <span>2. お知らせ・メール (Thông báo & Email)</span>
                </button>

                <button
                  onClick={() => setDokkaiFilter('search')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium flex items-center gap-1.5 ${
                    dokkaiFilter === 'search'
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>3. 情報検索 (Tra cứu thông tin, điều kiện & bảng biểu)</span>
                </button>
              </div>

              {/* N3/N2/N1 Dokkai Strategy Quick Notes */}
              {(examLevel === 'N3' || examLevel === 'N2' || examLevel === 'N1') && (
                <div className="mt-2 pt-2 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-300">
                  <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="font-bold text-amber-400 block mb-0.5">📌 1. 説明文・解説文:</span>
                    Ý chính tác giả luôn đứng sau <strong>しかし, だが, つまり, 要するに</strong>. Loại ngay đáp án có từ tuyệt đối (すべて, 決して) không xuất hiện trong bài.
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="font-bold text-cyan-400 block mb-0.5">📌 2. お知らせ・メール:</span>
                    Đọc câu hỏi trước để tìm: <em>Ai gửi cho ai? Mục đích gửi là gì? Người nhận phải làm gì trước thời hạn nào?</em>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="font-bold text-rose-400 block mb-0.5">📌 3. 情報検索:</span>
                    Luôn đọc thật kỹ dòng chú thích có dấu hoa thị <strong>※</strong> ở chân bảng/thông báo. 90% câu hỏi bẫy tính phí hoặc trường hợp ngoại lệ tại đây!
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CHOUKAI SPECIALIZED TOOLBAR & MONDAI FILTERS (MONDAI 1-4 CHO N5/N4, MONDAI 1-5 CHO N3/N2/N1) */}
          {selectedSection === 'listening' && (
            <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/30 rounded-2xl p-4 space-y-3 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Phần Nghe Hiểu Choukai Chuẩn Thi Thật ({baseQuestions.filter((q) => q.section === 'listening').length} câu):
                  </span>
                </div>

                <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                  100% Thuần Tiếng Nhật (Không Dịch Nghĩa Khi Làm Bài)
                </span>
              </div>

              {/* Mondai Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setChoukaiFilter('all')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium ${
                    choukaiFilter === 'all'
                      ? 'bg-cyan-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Tất cả Mondai ({baseQuestions.filter((q) => q.section === 'listening').length})
                </button>

                <button
                  onClick={() => setChoukaiFilter('mondai_1')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium flex items-center gap-1.5 ${
                    choukaiFilter === 'mondai_1'
                      ? 'bg-cyan-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <span>
                    問題1: 課題理解 (
                    {baseQuestions.filter((q) => q.section === 'listening' && q.choukaiMeta?.mondai === 'mondai_1').length}
                    )
                  </span>
                </button>

                <button
                  onClick={() => setChoukaiFilter('mondai_2')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium flex items-center gap-1.5 ${
                    choukaiFilter === 'mondai_2'
                      ? 'bg-cyan-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <span>
                    問題2: ポイント理解 (
                    {baseQuestions.filter((q) => q.section === 'listening' && q.choukaiMeta?.mondai === 'mondai_2').length}
                    )
                  </span>
                </button>

                <button
                  onClick={() => setChoukaiFilter('mondai_3')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium flex items-center gap-1.5 ${
                    choukaiFilter === 'mondai_3'
                      ? 'bg-cyan-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <span>
                    {examLevel === 'N5' || examLevel === 'N4' ? '問題3: 発話表現' : '問題3: 概要理解'} (
                    {baseQuestions.filter((q) => q.section === 'listening' && q.choukaiMeta?.mondai === 'mondai_3').length}
                    )
                  </span>
                </button>

                <button
                  onClick={() => setChoukaiFilter('mondai_4')}
                  className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium flex items-center gap-1.5 ${
                    choukaiFilter === 'mondai_4'
                      ? 'bg-cyan-600 text-white font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <span>
                    問題4: 即時応答 (
                    {baseQuestions.filter((q) => q.section === 'listening' && q.choukaiMeta?.mondai === 'mondai_4').length}
                    )
                  </span>
                </button>

                {(examLevel === 'N3' || examLevel === 'N2' || examLevel === 'N1') && (
                  <button
                    onClick={() => setChoukaiFilter('mondai_5')}
                    className={`text-xs px-3 py-1 rounded-xl transition cursor-pointer font-medium flex items-center gap-1.5 ${
                      choukaiFilter === 'mondai_5'
                        ? 'bg-cyan-600 text-white font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    <span>
                      問題5: 統合理解 (
                      {baseQuestions.filter((q) => q.section === 'listening' && q.choukaiMeta?.mondai === 'mondai_5').length}
                      )
                    </span>
                  </button>
                )}
              </div>

              {/* Active Mondai Strategy & Exam Instruction Banner */}
              <div className="mt-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="bg-slate-950/70 p-3 rounded-xl border border-cyan-900/40 leading-relaxed font-japanese text-cyan-200">
                  <strong className="text-amber-300 block mb-0.5">【音声指示 - Lời Dẫn Kỳ Thi Thật JLPT】:</strong>
                  {choukaiFilter === 'mondai_1'
                    ? '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。'
                    : choukaiFilter === 'mondai_2'
                    ? '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。'
                    : choukaiFilter === 'mondai_3'
                    ? (examLevel === 'N5' || examLevel === 'N4'
                        ? '問題3では、絵を見ながら質問を聞いてください。矢印の人は何と言いますか。1から3の中から、最も良いものを1つ選んでください。'
                        : '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。')
                    : choukaiFilter === 'mondai_4'
                    ? '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。'
                    : choukaiFilter === 'mondai_5'
                    ? '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。'
                    : (examLevel === 'N5' || examLevel === 'N4'
                        ? 'Đề thi Choukai gồm 4 Mondai: 問題1 (課題理解), 問題2 (ポイント理解), 問題3 (発話表現), 問題4 (即時応答).'
                        : 'Đề thi Choukai gồm 5 Mondai: 問題1 (課題理解), 問題2 (ポイント理解), 問題3 (概要理解), 問題4 (即時応答), 問題5 (統合理解).')}
                </div>
              </div>
            </div>
          )}

          {/* Test Submission Summary Banner */}
          {isTestSubmitted && (
            <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-emerald-950/80 border border-emerald-500/40 rounded-3xl p-6 shadow-2xl animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-xl font-extrabold text-white">Kết Quả Bài Thi Thử</h3>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Đã hoàn thành đề thi {activePackage.title}. Dưới đây là phân tích chi tiết từng kỹ năng và đáp án bẫy:
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center bg-slate-950 px-5 py-3 rounded-2xl border border-slate-800">
                    <span className="text-xs text-slate-400 block font-medium">Tổng điểm</span>
                    <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                      {calculateScore()} / {filteredQuestions.length}
                    </span>
                  </div>

                  <div className="text-center bg-slate-950 px-5 py-3 rounded-2xl border border-slate-800">
                    <span className="text-xs text-slate-400 block font-medium">Tỷ lệ chính xác</span>
                    <span className="text-2xl font-extrabold text-amber-400 font-mono">
                      {Math.round((calculateScore() / filteredQuestions.length) * 100)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Section Breakdown Grid */}
              {testMode === 'full' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-slate-800/80">
                  {Object.entries(getSectionStats()).map(([secKey, stat]) => {
                    const titles: Record<string, string> = {
                      vocabulary: 'Từ vựng (Goi)',
                      grammar: 'Ngữ pháp (Bunpou)',
                      reading: 'Đọc hiểu (Dokkai)',
                      listening: 'Nghe hiểu (Chokai)',
                    };
                    const percent = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;

                    return (
                      <div key={secKey} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                        <span className="text-[11px] text-slate-400 block font-semibold">{titles[secKey]}</span>
                        <div className="text-sm font-bold text-white font-mono mt-0.5">
                          {stat.correct} / {stat.total}
                        </div>
                        <span className={`text-[10px] font-bold ${percent >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {percent}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Question List */}
          <div className="space-y-6">
            {(examStandardMode === 'standard120' ? activeQuestions : filteredQuestions).map((q, qIndex) => {
              const selectedOptId = selectedAnswers[q.id];
              const isAnswered = !!selectedOptId;
              const isChokai = q.section === 'listening';
              const isDokkai = q.section === 'reading';

              return (
                <div
                  key={q.id}
                  className={`bg-slate-900/90 border rounded-3xl p-6 shadow-xl backdrop-blur-md transition ${
                    isChokai
                      ? 'border-cyan-800/30'
                      : isDokkai
                      ? 'border-emerald-800/30'
                      : 'border-slate-800'
                  }`}
                >
                  {/* Top Bar for Question */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Câu {qIndex + 1} / {filteredQuestions.length} • {q.level}
                      </span>

                      {/* Section Badge */}
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          isChokai
                            ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/50'
                            : isDokkai
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                            : q.section === 'vocabulary'
                            ? 'bg-purple-950 text-purple-400 border border-purple-800/50'
                            : 'bg-indigo-950 text-indigo-400 border border-indigo-800/50'
                        }`}
                      >
                        {q.section === 'listening'
                          ? (q.choukaiMeta?.mondaiTitle || 'Nghe hiểu Chokai')
                          : q.section === 'reading'
                          ? 'Đọc hiểu Dokkai'
                          : q.section === 'vocabulary'
                          ? 'Từ vựng'
                          : 'Ngữ pháp'}
                      </span>

                      {isChokai && q.choukaiMeta?.questionInMondai && (
                        <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded-full border border-cyan-800/40">
                          第 {q.choukaiMeta.questionInMondai} 問
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Audio Controls for Listening questions */}
                      {isChokai && q.passageOrScript && (
                        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-xl border border-cyan-800/40">
                          <button
                            onClick={() => handlePlayListeningAudio(q.id, q.passageOrScript!)}
                            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                          >
                            {playingAudioId === q.id ? (
                              <>
                                <Pause className="w-3.5 h-3.5" />
                                <span>Dừng nghe</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                                <span>Phát Audio Đề Thi</span>
                              </>
                            )}
                          </button>

                          {/* Speed Toggle */}
                          <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
                            {[0.8, 1.0, 1.2].map((spd) => (
                              <button
                                key={spd}
                                onClick={() => setAudioSpeed(spd)}
                                className={`text-[10px] font-mono px-1.5 py-0.5 rounded cursor-pointer ${
                                  audioSpeed === spd
                                    ? 'bg-cyan-500/30 text-cyan-300 font-bold'
                                    : 'text-slate-500 hover:text-slate-300'
                                }`}
                              >
                                {spd}x
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* General Speak Button */}
                      {!isChokai && (
                        <button
                          onClick={() => JapaneseSpeechEngine.speak(q.question)}
                          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800"
                        >
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span>Nghe câu hỏi</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Reading Passage Box (Đọc hiểu) */}
                  {isDokkai && q.passageOrScript && (
                    <div className="mb-5 p-5 rounded-2xl bg-slate-950/80 border border-emerald-900/40 leading-relaxed text-slate-200 font-japanese text-sm sm:text-base tracking-wide whitespace-pre-line shadow-inner">
                      {/* Dokkai Meta Header if present */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold uppercase tracking-wider">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>
                              {q.dokkaiMeta?.categoryLabel || q.dokkaiMeta?.categoryName || 'Đoạn văn đọc hiểu (本文)'}
                            </span>
                          </span>

                          {q.dokkaiMeta?.length && (
                            <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                              {q.dokkaiMeta.length}
                            </span>
                          )}

                          {q.dokkaiMeta?.targetTimeMinutes && (
                            <span className="text-[11px] font-medium text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-800/40 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{q.dokkaiMeta.targetTimeMinutes}</span>
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => JapaneseSpeechEngine.speak(q.passageOrScript!)}
                            className="text-xs text-slate-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer bg-slate-900 px-2.5 py-1 rounded-xl border border-slate-800"
                            title="Nghe máy đọc toàn bộ bài đọc hiểu"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Nghe đọc bài</span>
                          </button>
                        </div>
                      </div>

                      {/* Core Strategy Target if available */}
                      {q.dokkaiMeta?.focusPoints && (
                        <div className="mb-3 px-3 py-1.5 rounded-xl bg-emerald-950/30 border border-emerald-800/30 text-xs text-emerald-300 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>
                            <strong>Mục tiêu quét nhanh:</strong> {q.dokkaiMeta.focusPoints}
                          </span>
                        </div>
                      )}

                      {/* Render text with connective highlighter */}
                      <div className="leading-loose font-normal">
                        {renderHighlightedPassage(q.passageOrScript, highlightConnectives)}
                      </div>
                    </div>
                  )}

                  {/* Listening Audio Script Box (Chokai - with reveal toggle) */}
                  {isChokai && q.passageOrScript && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleScript(q.id)}
                        className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 mb-2 cursor-pointer font-medium"
                      >
                        {revealedScripts[q.id] || isTestSubmitted ? (
                          <>
                            <EyeOff className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Ẩn kịch bản thoại (Script)</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Hiện kịch bản thoại (Script)</span>
                          </>
                        )}
                      </button>

                      {(revealedScripts[q.id] || isTestSubmitted) && (
                        <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 leading-relaxed text-slate-200 font-japanese text-sm whitespace-pre-line animate-fadeIn">
                          {q.passageOrScript}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Choukai Illustration (Hình ảnh minh họa đề thi Choukai) */}
                  {isChokai && (q.choukaiIllustration || q.imageUrl) && (
                    <ChoukaiIllustrationView
                      illustration={
                        q.choukaiIllustration || {
                          type: 'choice_diagrams',
                          title: q.choukaiMeta?.mondaiTitle,
                          imageUrl: q.imageUrl,
                        }
                      }
                      level={q.level}
                      mondaiTitle={q.choukaiMeta?.mondaiTitle}
                      questionNumber={q.choukaiMeta?.questionInMondai}
                    />
                  )}

                  {/* Question Stem */}
                  <h3 className="text-xl font-extrabold text-white font-japanese mb-5 leading-relaxed">
                    {q.question}
                  </h3>

                  {/* Options A, B, C, D */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {q.options.map((opt) => {
                      const isChosen = selectedOptId === opt.id;
                      let btnStyle = 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300';

                      if (isTestSubmitted) {
                        if (opt.isCorrect) {
                          btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isChosen && !opt.isCorrect) {
                          btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                        }
                      } else if (isChosen) {
                        btnStyle = 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-600/30 font-bold';
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`p-4 rounded-2xl border text-left transition flex items-center gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span
                            className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                              isChosen
                                ? 'bg-white text-slate-900'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {opt.id}
                          </span>
                          <span className="font-japanese text-sm font-semibold">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Detailed Analysis After Submission */}
                  {isTestSubmitted && (
                    <div className="mt-5 pt-4 border-t border-slate-800 space-y-3 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                          Phân tích Đúng/Sai chi tiết từng phương án:
                        </span>
                      </div>

                      <div className="space-y-2">
                        {q.options.map((opt) => (
                          <div
                            key={opt.id}
                            className={`p-3 rounded-xl border text-xs leading-relaxed ${
                              opt.isCorrect
                                ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                                : 'bg-slate-950 border-slate-800 text-slate-400'
                            }`}
                          >
                            <span className="font-mono font-bold mr-2 text-white">
                              [{opt.id}] {opt.text}:
                            </span>
                            {opt.analysis}
                          </div>
                        ))}
                      </div>

                      {/* 30s Speed Tip */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2">
                        <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-amber-300 block mb-0.5 font-bold">
                            Mẹo nhận biết trong 30 giây:
                          </strong>
                          {q.speed30sTip}
                        </div>
                      </div>

                      {/* Related Vocab / Grammar */}
                      <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <span className="font-semibold text-slate-300 mr-2">Kiến thức mở rộng liên quan:</span>
                        {q.relatedKnowledge}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Test Action Sticky Bar */}
          <div className="sticky bottom-6 z-20 bg-slate-900/95 border border-slate-800 rounded-3xl p-5 shadow-2xl backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-medium">
              Đã trả lời:{' '}
              <strong className="text-white font-mono text-sm">
                {
                  Object.keys(selectedAnswers).filter((id) =>
                    (examStandardMode === 'standard120' ? activeQuestions : filteredQuestions).some((q) => q.id === id)
                  ).length
                }
              </strong>{' '}
              / {(examStandardMode === 'standard120' ? activeQuestions : filteredQuestions).length} câu{' '}
              {examStandardMode === 'standard120' && (
                <span className="text-amber-400 font-bold ml-1">
                  (Phần {currentPhase}/3 - {currentPhase === 1 ? 'Từ vựng & Kanji' : currentPhase === 2 ? 'Ngữ pháp & Đọc hiểu' : 'Nghe hiểu'})
                </span>
              )}
            </div>

            {examStandardMode === 'standard120' && !isTestSubmitted ? (
              <div className="flex items-center gap-3">
                {currentPhase < 3 ? (
                  phaseTimeRemaining > 600 ? (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-400">
                      <Lock className="w-3.5 h-3.5 text-slate-500" />
                      <span>
                        Chưa đến 10 phút cuối (Mở nộp sau{' '}
                        <strong className="text-amber-300 font-mono">
                          {Math.ceil((phaseTimeRemaining - 600) / 60)} phút
                        </strong>
                        )
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsEarlySubmitDialogOpen(true)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-600/30 cursor-pointer active:scale-95 animate-pulse"
                    >
                      <Send className="w-4 h-4" />
                      <span>Qua bài & Chuyển sang phần tiếp theo</span>
                    </button>
                  )
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-800/60 text-xs text-purple-200">
                    <Headphones className="w-4 h-4 text-purple-400 animate-pulse" />
                    <span>
                      Phần Nghe hiểu: <strong>Bắt buộc nghe hết 40 phút</strong>. Hệ thống tự động nộp khi hết giờ.
                    </span>
                  </div>
                )}
              </div>
            ) : !isTestSubmitted ? (
              <button
                onClick={handleSubmitTest}
                className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-600/30 cursor-pointer active:scale-95"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Nộp bài & Xem phân tích bẫy</span>
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsCenterScoreModalOpen(true)}
                  className="flex items-center gap-2 bg-amber-950/80 hover:bg-amber-900/80 px-4 py-2 rounded-2xl border border-amber-700/60 text-sm font-bold text-white font-mono cursor-pointer transition"
                >
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>
                    Xem Bảng Điểm Trung Tâm ({total120Score}/120)
                  </span>
                </button>

                <button
                  onClick={handleStartExam120}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Thi lại đề 120 phút mới</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: MISTAKE NOTEBOOK (SỔ TAY CÂU SAI) */}
      {activeTab === 'mistakes' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Sổ Tay Ôn Tập Lại Các Câu Sai (Mistake Notebook)
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Hệ thống tự động lưu giữ tất cả các câu bạn đã làm sai trong các lần thi thử từ N5 đến N1 để bạn nghiền ngẫm lại và xóa sạch điểm mù kiến thức.
            </p>

            {mistakeQuestions.length === 0 ? (
              <div className="text-center py-10">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-2 opacity-80" />
                <p className="text-sm font-semibold text-white">Chưa có câu sai nào trong sổ tay!</p>
                <p className="text-xs text-slate-500 mt-1">Hãy làm các đề thi thử để hệ thống tự động lọc ra các câu bạn cần ôn lại.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {mistakeQuestions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-slate-950 border border-rose-900/30 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                        Câu sai #{idx + 1} • {q.level} • {q.section}
                      </span>
                      <button
                        onClick={() => handleRemoveMistake(q.id)}
                        className="text-[11px] text-emerald-400 hover:text-emerald-300 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/40 cursor-pointer"
                      >
                        ✓ Đã nắm vững (Xóa khỏi sổ tay)
                      </button>
                    </div>

                    {q.passageOrScript && (
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-japanese text-slate-300 whitespace-pre-line">
                        {q.passageOrScript}
                      </div>
                    )}

                    <h4 className="text-base font-bold text-white font-japanese">{q.question}</h4>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800">
                      {q.options.map((opt) => (
                        <div
                          key={opt.id}
                          className={`p-2.5 rounded-xl text-xs ${
                            opt.isCorrect
                              ? 'bg-emerald-950/50 border border-emerald-700/60 text-emerald-300 font-semibold'
                              : 'bg-slate-900 text-slate-400'
                          }`}
                        >
                          <span className="font-mono font-bold mr-2 text-white">[{opt.id}]</span>
                          {opt.text} — {opt.analysis}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                      <strong>Mẹo 30 giây:</strong> {q.speed30sTip}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: TEST HISTORY */}
      {activeTab === 'history' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4">Lịch Sử Làm Bài & Tiến Độ Học Tập</h3>

            {testHistories.length === 0 ? (
              <div className="text-center py-10 text-xs text-slate-500">
                Chưa có lịch sử làm bài. Hãy hoàn thành đề thi đầu tiên!
              </div>
            ) : (
              <div className="space-y-3">
                {testHistories.map((hist) => (
                  <div
                    key={hist.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded-md border border-amber-800/40">
                          {hist.level}
                        </span>
                        <span className="text-sm font-bold text-white">{hist.testTitle}</span>
                      </div>
                      <span className="text-xs text-slate-500">{hist.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">Kết quả</span>
                        <span className="text-lg font-bold text-emerald-400 font-mono">
                          {hist.score} / {hist.totalQuestions}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL 1: EARLY SUBMIT CONFIRMATION (CHỈ KHI CÒN 10 PHÚT) */}
      {isEarlySubmitDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-amber-500/50 rounded-3xl max-w-md w-full p-6 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/40">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-white">Bạn có chắc muốn nộp bài không?</h3>

            <p className="text-xs text-slate-300 leading-relaxed bg-amber-950/30 p-3 rounded-2xl border border-amber-800/40 text-left">
              ⚠️ <strong>Lưu ý quan trọng:</strong> Một khi đã xác nhận nộp bài phần{' '}
              <strong className="text-amber-300">
                {currentPhase === 1 ? 'Từ vựng & Kanji' : 'Ngữ pháp & Đọc hiểu'}
              </strong>
              , bạn <span className="text-rose-400 font-bold uppercase">không thể quay lại</span> làm hoặc sửa bất kỳ câu hỏi nào của phần này mà phải tiếp tục làm phần tiếp theo.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsEarlySubmitDialogOpen(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition cursor-pointer"
              >
                Tiếp tục làm bài
              </button>

              <button
                onClick={handleProceedNextPhase}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-bold transition cursor-pointer shadow-lg shadow-amber-600/30"
              >
                Xác nhận nộp & Qua bài
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ANTI-CHEAT WARNING ("Vui lòng quay lại làm bài") */}
      {isCheatWarningModalOpen && !isExamDisqualified && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/90 backdrop-blur-lg animate-fade-in">
          <div className="bg-slate-900 border-2 border-rose-500 rounded-3xl max-w-lg w-full p-8 shadow-2xl text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border-2 border-rose-500 animate-pulse">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-mono font-bold uppercase tracking-wider">
                Cảnh Báo Vi Phạm Lần {violationCount} / 3
              </span>
              <h2 className="text-2xl font-extrabold text-white">Vui lòng quay lại làm bài</h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed bg-rose-950/40 p-4 rounded-2xl border border-rose-800/50">
              Hệ thống phát hiện bạn đã <strong>thoát chế độ toàn màn hình</strong> hoặc <strong>chuyển sang tab khác</strong>. Trong suốt quá trình thi JLPT chuẩn, bạn phải giữ màn hình thi liên tục.
              <br />
              <span className="text-rose-400 font-bold block mt-2">
                ⚠️ NẾU QUÁ 3 LẦN, BÀI THI COI NHƯ HỦY VÀ LẬP TỨC NHẬN 0 ĐIỂM!
              </span>
            </p>

            <button
              onClick={async () => {
                await requestFullScreen();
                setIsCheatWarningModalOpen(false);
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm shadow-xl shadow-rose-600/40 transition active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Maximize className="w-4 h-4" />
              <span>Quay lại làm bài (Bật lại toàn màn hình)</span>
            </button>
          </div>
        </div>
      )}

      {/* MODAL 3: EXAM DISQUALIFIED SCREEN ("Bạn đã vi phạm chính sách thi JLPT") */}
      {isExamDisqualified && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl animate-fade-in">
          <div className="bg-gradient-to-b from-rose-950 via-slate-900 to-black border-2 border-rose-600 rounded-3xl max-w-xl w-full p-8 sm:p-10 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-rose-600/20 text-rose-500 flex items-center justify-center mx-auto border-2 border-rose-600 animate-bounce">
              <AlertOctagon className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-black text-rose-500 tracking-tight uppercase">
                Bạn đã vi phạm chính sách thi JLPT
              </h1>
              <p className="text-base text-white font-bold">
                Bài thi của bạn đã bị HỦY BỎ ngay lập tức!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-rose-900/60 text-xs text-slate-300 leading-relaxed text-left space-y-2">
              <div className="text-rose-400 font-bold">LÝ DO XỬ PHẠT KỶ LUẬT:</div>
              <p>
                Thí sinh đã có hành vi thoát toàn màn hình / chuyển tab trái phép <strong>vượt quá 3 lần</strong> trong thời gian làm bài.
              </p>
              <div className="pt-2 border-t border-slate-800 text-center text-sm font-mono font-extrabold text-rose-400">
                KẾT QUẢ: 0 / 120 ĐIỂM (ĂN 0 ĐIỂM - TRƯỢT KỶ LUẬT)
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setIsExamDisqualified(false);
                  setIsCenterScoreModalOpen(true);
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer"
              >
                Xem Bảng Điểm 0 Điểm
              </button>

              <button
                onClick={handleStartExam120}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-extrabold shadow-lg shadow-rose-600/30 transition cursor-pointer"
              >
                Đăng ký thi lại từ đầu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: CENTER SCORE REPORT MODAL (BẢNG ĐIỂM Ở GIỮA MÀN HÌNH - KHÔNG NHÂN NHƯỢNG) */}
      {isCenterScoreModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
            <button
              onClick={() => setIsCenterScoreModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center space-y-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Chứng Chỉ Kết Quả Kỳ Thi JLPT {examLevel} Chuẩn 120 Phút
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                BẢNG ĐIỂM CHÍNH THỨC
              </h2>
              <p className="text-xs text-slate-400">
                {activePackage.title} • Thời gian hoàn tất: {new Date().toLocaleString('vi-VN')}
              </p>
            </div>

            {/* Overall Verdict Banner */}
            <div
              className={`p-5 rounded-3xl border-2 text-center mb-6 shadow-xl ${
                isExamDisqualified
                  ? 'bg-rose-950/60 border-rose-600 text-rose-300'
                  : is120Passed
                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                  : 'bg-rose-950/60 border-rose-500 text-rose-300'
              }`}
            >
              <div className="text-xs uppercase font-extrabold tracking-widest mb-1">
                KẾT QUẢ CHUNG CUỘC
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight font-japanese mb-2">
                {isExamDisqualified ? (
                  <span className="text-rose-500">HỦY BÀI THI (0 ĐIỂM)</span>
                ) : is120Passed ? (
                  <span className="text-emerald-400">合格 (ĐẠT YÊU CẦU - ĐỖ JLPT)</span>
                ) : (
                  <span className="text-rose-400">不合格 (KHÔNG ĐẠT / RỚT)</span>
                )}
              </div>

              <p className="text-xs font-medium max-w-lg mx-auto leading-relaxed">
                {isExamDisqualified ? (
                  'Thí sinh bị kỷ luật hủy bài do vi phạm quy chế toàn màn hình / chuyển tab quá 3 lần.'
                ) : hasFailedSection ? (
                  <span className="text-rose-300 font-bold">
                    ⚠️ AUTO RỚT DO BỊ ĐIỂM LIỆT: Có ít nhất 1 phần thi dưới 19 điểm! (3 phần mỗi phần 40 điểm không nhân nhượng).
                  </span>
                ) : total120Score < 60 ? (
                  <span className="text-rose-300 font-bold">
                    ⚠️ RỚT DO KHÔNG ĐỦ ĐIỂM SÀN: Tổng điểm đạt {total120Score}/120 điểm (yêu cầu tối thiểu &ge; 60 điểm).
                  </span>
                ) : (
                  <span className="text-emerald-300 font-bold">
                    🎉 XUẤT SẮC: Bạn đã vượt qua tất cả chuẩn điểm liệt (&ge; 19 điểm mỗi phần) và đạt chuẩn điểm sàn JLPT!
                  </span>
                )}
              </p>
            </div>

            {/* 3 Sections Detailed Score Breakdown (40 pts each) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {/* Part 1: Từ vựng & Kanji */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-center">
                <div className="text-xs text-slate-400 font-bold">PHẦN 1: TỪ VỰNG & KANJI</div>
                <div className="text-2xl font-mono font-black text-amber-400">
                  {scoreP1} <span className="text-xs text-slate-400 font-normal">/ 40</span>
                </div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      isP1Failed
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {isP1Failed ? 'ĐIỂM LIỆT (< 19)' : 'ĐẠT CHUẨN'}
                  </span>
                </div>
              </div>

              {/* Part 2: Ngữ pháp & Đọc hiểu */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-center">
                <div className="text-xs text-slate-400 font-bold">PHẦN 2: NGỮ PHÁP & ĐỌC HIỂU</div>
                <div className="text-2xl font-mono font-black text-cyan-400">
                  {scoreP2} <span className="text-xs text-slate-400 font-normal">/ 40</span>
                </div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      isP2Failed
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {isP2Failed ? 'ĐIỂM LIỆT (< 19)' : 'ĐẠT CHUẨN'}
                  </span>
                </div>
              </div>

              {/* Part 3: Nghe hiểu */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-center">
                <div className="text-xs text-slate-400 font-bold">PHẦN 3: NGHE HIỂU (CHOUKAI)</div>
                <div className="text-2xl font-mono font-black text-purple-400">
                  {scoreP3} <span className="text-xs text-slate-400 font-normal">/ 40</span>
                </div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      isP3Failed
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {isP3Failed ? 'ĐIỂM LIỆT (< 19)' : 'ĐẠT CHUẨN'}
                  </span>
                </div>
              </div>
            </div>

            {/* Grand Total */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between mb-6">
              <div>
                <span className="text-xs text-slate-400 font-semibold block">TỔNG ĐIỂM CHUẨN 3 PHẦN:</span>
                <span className="text-xs text-slate-500">Chuẩn đỗ tổng thể: &ge; 60 / 120 điểm</span>
              </div>
              <div className="text-right">
                <span className="text-3xl font-mono font-black text-white">
                  {total120Score}
                </span>
                <span className="text-slate-400 text-sm font-semibold font-mono"> / 120</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setIsCenterScoreModalOpen(false)}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer"
              >
                Xem lại bài làm & Giải thích bẫy
              </button>

              <button
                onClick={handleStartExam120}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs font-extrabold shadow-lg shadow-amber-600/30 transition cursor-pointer"
              >
                Làm lại đề thi chuẩn 120 phút mới
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
