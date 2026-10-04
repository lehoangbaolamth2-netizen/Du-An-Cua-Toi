import React, { useState, useEffect, useMemo } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
} from 'recharts';
import {
  Brain,
  Clock,
  Award,
  TrendingUp,
  Flame,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Calendar,
  Layers,
  ChevronRight,
  Target,
  BarChart3,
  BookOpen,
  Headphones,
  Mic2,
  FileText,
  Volume2,
  HelpCircle,
  Filter,
} from 'lucide-react';
import { Flashcard, JLPTLevel, JLPTTestHistory } from '../types';
import {
  loadStudyTrackerData,
  recordStudyMinutes,
  loadJLPTTestHistories,
  computeJLPTStats,
  computeSRSStats,
  StudyTrackerData,
  JLPTStatsSummary,
  SRSStatsSummary,
} from '../services/studyTracker';
import { JapaneseSpeechEngine } from '../services/speech';

interface Props {
  cards: Flashcard[];
  currentLevel: string;
  onNavigateToJLPT: () => void;
  onNavigateToFlashcards: () => void;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
}

const COLORS = {
  emerald: '#10b981',
  cyan: '#06b6d4',
  indigo: '#6366f1',
  purple: '#a855f7',
  amber: '#f59e0b',
  rose: '#f43f5e',
  slate: '#64748b',
};

const PIE_COLORS = ['#10b981', '#f43f5e'];

export const LearningDashboard: React.FC<Props> = ({
  cards,
  currentLevel,
  onNavigateToJLPT,
  onNavigateToFlashcards,
  onOpenAiAnalyzer,
}) => {
  const [trackerData, setTrackerData] = useState<StudyTrackerData>(loadStudyTrackerData());
  const [testHistories, setTestHistories] = useState<JLPTTestHistory[]>(loadJLPTTestHistories());
  const [timeframe, setTimeframe] = useState<'7days' | '14days'>('14days');
  const [skillChartMode, setSkillChartMode] = useState<'total' | 'breakdown'>('total');

  // Focus Pomodoro / Live timer state
  const [isLiveTimerActive, setIsLiveTimerActive] = useState(false);
  const [liveSeconds, setLiveSeconds] = useState(0);
  const [selectedFocusModule, setSelectedFocusModule] = useState<
    'listening' | 'reading' | 'flashcard' | 'pitch' | 'grammar'
  >('flashcard');

  // Refresh data on mount or storage updates
  useEffect(() => {
    setTrackerData(loadStudyTrackerData());
    setTestHistories(loadJLPTTestHistories());
  }, []);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isLiveTimerActive) {
      interval = setInterval(() => {
        setLiveSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLiveTimerActive]);

  const handleStopAndSaveFocusTimer = () => {
    setIsLiveTimerActive(false);
    if (liveSeconds >= 30) {
      const minutes = Math.max(1, Math.round(liveSeconds / 60));
      const updated = recordStudyMinutes(minutes, selectedFocusModule);
      setTrackerData(updated);
    }
    setLiveSeconds(0);
  };

  // Compute live statistics
  const srsStats: SRSStatsSummary = useMemo(() => computeSRSStats(cards), [cards]);
  const jlptStats: JLPTStatsSummary = useMemo(() => computeJLPTStats(testHistories), [testHistories]);

  // Total study hours
  const totalStudyHours = (trackerData.totalStudyMinutes / 60).toFixed(1);
  const todayDateStr = new Date().toISOString().slice(0, 10);
  const todayLog = trackerData.dailyLogs.find((l) => l.date === todayDateStr);
  const todayMinutes = todayLog ? todayLog.totalMinutes : 0;

  // Chart data for daily study time
  const filteredDailyLogs = useMemo(() => {
    const count = timeframe === '7days' ? 7 : 14;
    return trackerData.dailyLogs.slice(-count).map((log) => ({
      ...log,
      totalHours: Number((log.totalMinutes / 60).toFixed(2)),
      listeningHours: Number((log.listeningMinutes / 60).toFixed(2)),
      readingHours: Number((log.readingMinutes / 60).toFixed(2)),
      flashcardHours: Number((log.flashcardMinutes / 60).toFixed(2)),
      pitchHours: Number((log.pitchMinutes / 60).toFixed(2)),
      grammarHours: Number((log.grammarMinutes / 60).toFixed(2)),
    }));
  }, [trackerData.dailyLogs, timeframe]);

  // Data for JLPT Pass Rate Pie
  const passRatePieData = useMemo(() => {
    return [
      { name: 'Đạt Yêu Cầu', value: jlptStats.passedTests },
      { name: 'Cần Cải Thiện', value: jlptStats.failedTests },
    ];
  }, [jlptStats]);

  // Data for Radar Competence Balance
  const radarData = useMemo(() => {
    // Calculate aggregate score percentages by skill type
    const srsMasteryRate = srsStats.retentionRatePercentage;
    const jlptPassRate = jlptStats.passRatePercentage;
    const avgScore = jlptStats.averageScorePercentage;

    return [
      { subject: 'Từ vựng SRS', value: Math.min(100, Math.max(40, srsMasteryRate)), fullMark: 100 },
      { subject: 'Nghe Choukai', value: Math.min(100, Math.max(50, Math.round(avgScore * 0.95))), fullMark: 100 },
      { subject: 'Đọc Dokkai', value: Math.min(100, Math.max(45, Math.round(avgScore * 0.9))), fullMark: 100 },
      { subject: 'Ngữ pháp', value: Math.min(100, Math.max(55, Math.round(avgScore * 1.05))), fullMark: 100 },
      { subject: 'Phản xạ Pitch', value: 85, fullMark: 100 },
    ];
  }, [srsStats, jlptStats]);

  // Data for JLPT Score progression over time
  const testProgressionData = useMemo(() => {
    return [...testHistories]
      .reverse()
      .slice(-8)
      .map((t, idx) => ({
        index: idx + 1,
        title: `${t.level} #${idx + 1}`,
        scorePercent: Math.round((t.score / t.totalQuestions) * 100),
        rawScore: `${t.score}/${t.totalQuestions}`,
        level: t.level,
        isPass: (t.score / t.totalQuestions) >= 0.6,
      }));
  }, [testHistories]);

  // Filtered memorized vocabulary for preview
  const memorizedSample = useMemo(() => {
    return cards.filter((c) => c.srs.state === 'mastered').slice(0, 8);
  }, [cards]);

  const formatTimerDigits = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <span>BẢNG ĐIỀU KHIỂN THỐNG KÊ TIẾN ĐỘ HỌC TẬP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hành Trình Chinh Phục <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">JLPT & Phản Xạ Nhật Ngữ</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Trực quan hóa toàn diện thời gian biểu học tập, chỉ số ghi nhớ dài hạn qua thuật toán ngắt quãng <span className="text-purple-300 font-semibold">SRS (Spaced Repetition)</span> và tỉ lệ đạt chuẩn trong các kỳ thi thử mô phỏng thực chiến.
            </p>
          </div>

          {/* Quick Focus Study Session Widget */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 min-w-[280px] shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Phiên Học Tập Trung
              </span>
              {isLiveTimerActive && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-semibold animate-pulse">
                  Đang ghi nhận
                </span>
              )}
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="text-3xl font-mono font-bold text-white tracking-wider">
                {formatTimerDigits(liveSeconds)}
              </div>

              {!isLiveTimerActive ? (
                <button
                  onClick={() => setIsLiveTimerActive(true)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all active:scale-95 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Bắt đầu học
                </button>
              ) : (
                <button
                  onClick={handleStopAndSaveFocusTimer}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-md shadow-rose-600/30 transition-all active:scale-95 cursor-pointer"
                >
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  Lưu phiên học
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="focus-module-select" className="text-[11px] text-slate-400">Kỹ năng:</label>
              <select
                id="focus-module-select"
                value={selectedFocusModule}
                onChange={(e) => setSelectedFocusModule(e.target.value as any)}
                aria-label="Kỹ năng học tập trung"
                className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2 py-1 flex-1 focus:outline-none focus:border-indigo-500"
              >
                <option value="flashcard">Flashcards SRS</option>
                <option value="listening">Nghe hiểu Choukai</option>
                <option value="reading">Đọc hiểu Dokkai</option>
                <option value="pitch">Phản xạ & Pitch</option>
                <option value="grammar">Ngữ pháp</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Metric KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* KPI 1: Số Giờ Học */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-xl hover:border-indigo-500/40 transition-all group">
          <div className="absolute top-0 right-0 p-4 text-indigo-500/10 group-hover:text-indigo-500/20 transition-all">
            <Clock className="w-20 h-20" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Tổng Số Giờ Học
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {trackerData.streakDays} ngày streak
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {totalStudyHours}
            </span>
            <span className="text-slate-400 text-sm font-semibold">giờ tích lũy</span>
          </div>

          <div className="space-y-2 mt-4 pt-4 border-t border-slate-800/80">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Hôm nay:</span>
              <span className="text-emerald-400 font-semibold">{todayMinutes} phút</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Mục tiêu ngày (60p):</span>
              <span className="text-slate-300 font-semibold">{Math.min(100, Math.round((todayMinutes / 60) * 100))}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (todayMinutes / 60) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* KPI 2: Số Từ Vựng Đã Nhớ (Thuật Toán SRS) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-xl hover:border-purple-500/40 transition-all group">
          <div className="absolute top-0 right-0 p-4 text-purple-500/10 group-hover:text-purple-500/20 transition-all">
            <Brain className="w-20 h-20" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <Brain className="w-4 h-4" />
              Từ Vựng Đã Nhớ (SRS)
            </span>
            <button
              onClick={onNavigateToFlashcards}
              className="text-xs text-purple-300 hover:text-purple-200 flex items-center gap-1 font-medium transition-colors"
            >
              Học tiếp <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {srsStats.masteredCount}
            </span>
            <span className="text-slate-400 text-sm font-semibold">/ {srsStats.totalCards} từ vựng</span>
          </div>

          <div className="space-y-2 mt-4 pt-4 border-t border-slate-800/80">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Tỉ lệ duy trì (Retention):</span>
              <span className="text-purple-300 font-semibold">{srsStats.retentionRatePercentage}%</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-center">
              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-1.5">
                <div className="text-emerald-400 font-bold text-xs">{srsStats.masteredCount}</div>
                <div className="text-[10px] text-slate-400">Thành thạo</div>
              </div>
              <div className="bg-cyan-950/40 border border-cyan-800/40 rounded-xl p-1.5">
                <div className="text-cyan-400 font-bold text-xs">{srsStats.reviewCount}</div>
                <div className="text-[10px] text-slate-400">Đang ôn</div>
              </div>
              <div className="bg-amber-950/40 border border-amber-800/40 rounded-xl p-1.5">
                <div className="text-amber-400 font-bold text-xs">{srsStats.learningCount}</div>
                <div className="text-[10px] text-slate-400">Đang học</div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI 3: Tỉ Lệ Đạt Yêu Cầu JLPT */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all group">
          <div className="absolute top-0 right-0 p-4 text-emerald-500/10 group-hover:text-emerald-500/20 transition-all">
            <Award className="w-20 h-20" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Tỉ Lệ Đạt Chuẩn JLPT
            </span>
            <button
              onClick={onNavigateToJLPT}
              className="text-xs text-emerald-300 hover:text-emerald-200 flex items-center gap-1 font-medium transition-colors"
            >
              Làm đề <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight">
              {jlptStats.passRatePercentage}%
            </span>
            <span className="text-slate-400 text-sm font-semibold">
              ({jlptStats.passedTests}/{jlptStats.totalTests} bài thi đỗ)
            </span>
          </div>

          <div className="space-y-2 mt-4 pt-4 border-t border-slate-800/80">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Điểm số trung bình:</span>
              <span className="text-white font-semibold">{jlptStats.averageScorePercentage}% số câu đúng</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Tổng câu hỏi đã rèn:</span>
              <span className="text-slate-300 font-semibold">{jlptStats.totalQuestionsAttempted} câu</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${jlptStats.passRatePercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: BIỂU ĐỒ XU HƯỚNG GIỜ HỌC (Recharts Area / Bar) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Xu Hướng & Phân Bổ Thời Gian Học (Giờ)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Theo dõi nhịp độ học tập bền bỉ qua từng ngày, phân bổ đều giữa nghe, đọc, từ vựng và phản xạ.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
              <button
                onClick={() => setSkillChartMode('total')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  skillChartMode === 'total'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Tổng số giờ
              </button>
              <button
                onClick={() => setSkillChartMode('breakdown')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  skillChartMode === 'breakdown'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Từng kỹ năng
              </button>
            </div>

            <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
              <button
                onClick={() => setTimeframe('7days')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  timeframe === '7days'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                7 Ngày
              </button>
              <button
                onClick={() => setTimeframe('14days')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  timeframe === '14days'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                14 Ngày
              </button>
            </div>
          </div>
        </div>

        <div className="h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            {skillChartMode === 'total' ? (
              <AreaChart data={filteredDailyLogs} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="studyHoursGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS.indigo} stopOpacity={0.6} />
                    <stop offset="95%" stopColor={COLORS.indigo} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="dayLabel" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} unit="h" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '1rem',
                    color: '#f8fafc',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  }}
                  formatter={(value: any) => [`${value} giờ (${Math.round(Number(value) * 60)} phút)`, 'Thời gian học']}
                  labelFormatter={(label, payload) => {
                    const item = payload && payload[0]?.payload;
                    return item ? `${label} - Ngày ${item.date}` : label;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="totalHours"
                  stroke={COLORS.indigo}
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#studyHoursGradient)"
                />
              </AreaChart>
            ) : (
              <BarChart data={filteredDailyLogs} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="dayLabel" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} unit="h" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '1rem',
                    color: '#f8fafc',
                  }}
                  formatter={(val: any, name: any) => [`${val}h`, name]}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                <Bar dataKey="listeningHours" name="Nghe Choukai" stackId="a" fill={COLORS.cyan} />
                <Bar dataKey="readingHours" name="Đọc Dokkai" stackId="a" fill={COLORS.indigo} />
                <Bar dataKey="flashcardHours" name="Flashcards SRS" stackId="a" fill={COLORS.purple} />
                <Bar dataKey="pitchHours" name="Pitch Reflex" stackId="a" fill={COLORS.rose} />
                <Bar dataKey="grammarHours" name="Ngữ pháp" stackId="a" fill={COLORS.emerald} radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* SECTION 2: BIỂU ĐỒ TRỰC QUAN HÓA THUẬT TOÁN SRS (Recharts Stacked Bar & Retention) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SRS Level Distribution (BarChart) */}
        <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Tiến Độ Nhớ Từ Vựng Qua Thuật Toán SRS
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Phân bổ trạng thái ghi nhớ (Thành thạo, Ôn tập, Đang học, Từ mới) từ cấp N5 đến N1.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              100 Từ Vựng Chuẩn JLPT
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={srsStats.levelDistribution}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="level" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '1rem',
                    color: '#f8fafc',
                  }}
                  formatter={(val: any, name: any) => [`${val} từ`, name]}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                <Bar dataKey="mastered" name="Thành thạo (Mastered)" stackId="a" fill={COLORS.emerald} />
                <Bar dataKey="review" name="Đang củng cố (Review)" stackId="a" fill={COLORS.cyan} />
                <Bar dataKey="learning" name="Đang học (Learning)" stackId="a" fill={COLORS.amber} />
                <Bar dataKey="new" name="Từ mới (New)" stackId="a" fill={COLORS.slate} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SRS Retention Breakdown & Insights */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Chỉ Số Ghi Nhớ Dài Hạn</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Thuật toán SM-2 tối ưu chu kỳ lặp lại theo khả năng phản xạ.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-800/30">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-emerald-300 font-semibold">Tỉ lệ nhớ thành công:</span>
                  <span className="text-lg font-bold text-emerald-400">{srsStats.retentionRatePercentage}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${srsStats.retentionRatePercentage}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Dựa trên các từ đã đạt trạng thái Thành thạo (Mastered) và Ôn tập định kỳ (Review).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Chu kỳ giãn TB</div>
                  <div className="text-xl font-bold text-cyan-400 mt-0.5">
                    {srsStats.averageIntervalDays} <span className="text-xs font-normal text-slate-400">ngày</span>
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Cần ôn hôm nay</div>
                  <div className="text-xl font-bold text-amber-400 mt-0.5">
                    {srsStats.dueTodayCount} <span className="text-xs font-normal text-slate-400">từ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onNavigateToFlashcards}
            className="w-full mt-6 py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
          >
            <Brain className="w-4 h-4" />
            Luyện Ôn Flashcard Ngay
          </button>
        </div>
      </div>

      {/* SECTION 3: TỈ LỆ ĐẠT YÊU CẦU & HIỆU SUẤT THI THỬ JLPT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pass Rate Donut & Level Performance */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Tỉ Lệ Đạt Yêu Cầu JLPT</h3>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Chuẩn đỗ tối thiểu &ge; 60% tổng điểm và không liệt kỹ năng.
          </p>

          <div className="h-56 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={passRatePieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {passRatePieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '0.75rem',
                    color: '#f8fafc',
                  }}
                  formatter={(val: any) => [`${val} bài`, 'Số lượng']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center pointer-events-none">
              <div className="text-2xl font-extrabold text-white">{jlptStats.passRatePercentage}%</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Tỉ lệ đỗ</div>
            </div>
          </div>

          <div className="space-y-2 mt-2 pt-2 border-t border-slate-800">
            {jlptStats.levelBreakdown.map((lb) => (
              <div key={lb.level} className="flex items-center justify-between text-xs py-1">
                <span className="font-semibold text-slate-300">{lb.level}:</span>
                <span className="text-slate-400">
                  {lb.attempts > 0 ? (
                    <>
                      <span className="text-emerald-400 font-bold">{lb.passed}/{lb.attempts}</span> đỗ (TB {lb.averageScorePercent}%)
                    </>
                  ) : (
                    'Chưa làm bài'
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Score Progression LineChart */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Tiến Trình Điểm Số Thi Thử</h3>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Đường biến thiên tỉ lệ điểm số qua các đợt thi thử gần đây.
          </p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={testProgressionData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="title" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} unit="%" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '0.75rem',
                    color: '#f8fafc',
                  }}
                  formatter={(val: any, name: any, item: any) => [
                    `${val}% (${item.payload.rawScore} câu đúng) - ${item.payload.isPass ? 'ĐẠT' : 'CHƯA ĐẠT'}`,
                    'Điểm thi',
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="scorePercent"
                  stroke={COLORS.cyan}
                  strokeWidth={3}
                  dot={{ r: 5, fill: COLORS.cyan }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Competence Balance RadarChart */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Cân Bằng 5 Năng Lực JLPT</h3>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Đánh giá toàn diện không để tình trạng học lệch môn thi.
          </p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#64748b" fontSize={9} />
                <Radar
                  name="Năng lực học viên"
                  dataKey="value"
                  stroke={COLORS.indigo}
                  fill={COLORS.indigo}
                  fillOpacity={0.5}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderColor: '#334155',
                    borderRadius: '0.75rem',
                    color: '#f8fafc',
                  }}
                  formatter={(val: any) => [`${val}/100 điểm`, 'Mức độ tự tin']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* SECTION 4: BẢNG LỊCH SỬ THI THỬ & TỪ VỰNG THÀNH THẠO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent JLPT Test History */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Lịch Sử Các Bài Thi Đã Làm</h3>
            </div>
            <button
              onClick={onNavigateToJLPT}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
            >
              Vào phòng thi <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {testHistories.slice(0, 5).map((t) => {
              const pct = Math.round((t.score / t.totalQuestions) * 100);
              const isPassed = pct >= 60;
              return (
                <div
                  key={t.id}
                  className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3 hover:border-slate-700 transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-bold">
                        {t.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-200 line-clamp-1">
                        {t.testTitle}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">{t.date}</div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">
                        {t.score}/{t.totalQuestions}
                      </div>
                      <div className="text-[11px] font-medium text-slate-400">{pct}%</div>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${
                        isPassed
                          ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                          : 'bg-rose-500/15 border border-rose-500/30 text-rose-400'
                      }`}
                    >
                      {isPassed ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Đạt
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Cần ôn
                        </>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Memorized Vocabulary Snapshot */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Từ Vựng Đã Ghi Nhớ Thành Thạo</h3>
            </div>
            <button
              onClick={onNavigateToFlashcards}
              className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1"
            >
              Xem tất cả ({srsStats.masteredCount}) <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {memorizedSample.map((card) => (
              <div
                key={card.id}
                className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-2 hover:border-purple-500/30 transition-all"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-japanese font-bold text-white">{card.kanji}</span>
                    <span className="text-xs text-slate-400 font-japanese">({card.hiragana})</span>
                    <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                      {card.level}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 truncate max-w-[180px]">{card.definition}</div>
                </div>

                <button
                  onClick={() => JapaneseSpeechEngine.speak(card.hiragana || card.kanji, 1.0)}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer shrink-0"
                  title="Nghe phát âm chuẩn"
                  aria-label="Nghe phát âm chuẩn"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-2xl bg-indigo-950/30 border border-indigo-800/30 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-indigo-200">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Muốn phân tích chuyên sâu lỗi sai hoặc điểm ngữ pháp yếu?</span>
            </div>
            <button
              onClick={() => onOpenAiAnalyzer('', 'grammar')}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shrink-0 transition-colors cursor-pointer"
            >
              Phân tích AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
