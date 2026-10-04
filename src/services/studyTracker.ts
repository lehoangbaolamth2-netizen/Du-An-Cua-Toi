import { Flashcard, JLPTLevel, JLPTTestHistory } from '../types';

export interface DailyStudyLog {
  date: string; // YYYY-MM-DD
  dayLabel: string; // 'T2', 'T3', etc.
  totalMinutes: number;
  listeningMinutes: number;
  readingMinutes: number;
  flashcardMinutes: number;
  pitchMinutes: number;
  grammarMinutes: number;
}

export interface StudyTrackerData {
  totalStudyMinutes: number;
  streakDays: number;
  lastActiveDate: string;
  dailyLogs: DailyStudyLog[];
}

const STUDY_TRACKER_KEY = 'nihongo_study_tracker_v2';
const JLPT_HISTORY_KEY_V2 = 'nihongo_reflex_jlpt_history_v2';
const JLPT_HISTORY_KEY_V1 = 'nihongo_reflex_jlpt_history_v1';

// Generate default 14-day history for realistic initial experience
function generateSeedStudyLogs(): DailyStudyLog[] {
  const logs: DailyStudyLog[] = [];
  const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const today = new Date();

  for (let i = 13; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const dayLabel = dayNames[d.getDay()];

    // Realistic study patterns: 45 to 110 mins per day
    const baseMin = i === 0 ? 55 : 40 + Math.floor(Math.sin(i * 1.5) * 25 + 35);
    const listening = Math.round(baseMin * 0.3);
    const reading = Math.round(baseMin * 0.25);
    const flashcard = Math.round(baseMin * 0.25);
    const pitch = Math.round(baseMin * 0.1);
    const grammar = baseMin - (listening + reading + flashcard + pitch);

    logs.push({
      date: dateStr,
      dayLabel,
      totalMinutes: baseMin,
      listeningMinutes: listening,
      readingMinutes: reading,
      flashcardMinutes: flashcard,
      pitchMinutes: pitch,
      grammarMinutes: Math.max(5, grammar),
    });
  }
  return logs;
}

export function loadStudyTrackerData(): StudyTrackerData {
  if (typeof window === 'undefined') {
    return {
      totalStudyMinutes: 780,
      streakDays: 14,
      lastActiveDate: new Date().toISOString().slice(0, 10),
      dailyLogs: generateSeedStudyLogs(),
    };
  }

  try {
    const raw = localStorage.getItem(STUDY_TRACKER_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.dailyLogs) && parsed.dailyLogs.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading study tracker:', e);
  }

  const seeded: StudyTrackerData = {
    totalStudyMinutes: 820,
    streakDays: 14,
    lastActiveDate: new Date().toISOString().slice(0, 10),
    dailyLogs: generateSeedStudyLogs(),
  };
  saveStudyTrackerData(seeded);
  return seeded;
}

export function saveStudyTrackerData(data: StudyTrackerData) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STUDY_TRACKER_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving study tracker:', e);
  }
}

export function recordStudyMinutes(
  minutes: number,
  moduleType: 'listening' | 'reading' | 'flashcard' | 'pitch' | 'grammar'
): StudyTrackerData {
  const current = loadStudyTrackerData();
  const todayStr = new Date().toISOString().slice(0, 10);
  const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const dayLabel = dayNames[new Date().getDay()];

  let todayLog = current.dailyLogs.find((l) => l.date === todayStr);
  if (!todayLog) {
    todayLog = {
      date: todayStr,
      dayLabel,
      totalMinutes: 0,
      listeningMinutes: 0,
      readingMinutes: 0,
      flashcardMinutes: 0,
      pitchMinutes: 0,
      grammarMinutes: 0,
    };
    current.dailyLogs.push(todayLog);
  }

  todayLog.totalMinutes += minutes;
  if (moduleType === 'listening') todayLog.listeningMinutes += minutes;
  else if (moduleType === 'reading') todayLog.readingMinutes += minutes;
  else if (moduleType === 'flashcard') todayLog.flashcardMinutes += minutes;
  else if (moduleType === 'pitch') todayLog.pitchMinutes += minutes;
  else if (moduleType === 'grammar') todayLog.grammarMinutes += minutes;

  current.totalStudyMinutes += minutes;
  current.lastActiveDate = todayStr;

  saveStudyTrackerData(current);
  return current;
}

export function loadJLPTTestHistories(): JLPTTestHistory[] {
  if (typeof window === 'undefined') return [];
  try {
    const rawV2 = localStorage.getItem(JLPT_HISTORY_KEY_V2);
    if (rawV2) {
      const parsed = JSON.parse(rawV2);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }

    const rawV1 = localStorage.getItem(JLPT_HISTORY_KEY_V1);
    if (rawV1) {
      const parsed = JSON.parse(rawV1);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error('Error loading JLPT test histories:', e);
  }

  // Realistic sample seed histories for high-fidelity initial experience
  const sampleHistories: JLPTTestHistory[] = [
    {
      id: 'test-seed-1',
      testTitle: 'Đề Thi Thử Toàn Diện N3 - 2024 (30 Câu - Đầy Đủ)',
      level: 'N3',
      score: 25,
      totalQuestions: 30,
      date: '28/09/2026, 14:30',
      wrongQuestionIds: ['n3-q-4', 'n3-q-12', 'n3-q-18', 'n3-q-22', 'n3-q-29'],
    },
    {
      id: 'test-seed-2',
      testTitle: 'Đề Thi Thử Toàn Diện N2 - 2024 (30 Câu - Đầy Đủ)',
      level: 'N2',
      score: 23,
      totalQuestions: 30,
      date: '30/09/2026, 16:15',
      wrongQuestionIds: ['n2-q-3', 'n2-q-9', 'n2-q-15', 'n2-q-21', 'n2-q-24', 'n2-q-27', 'n2-q-30'],
    },
    {
      id: 'test-seed-3',
      testTitle: 'Đề Thi Thử N4 Trọng Điểm (25 Câu - Đầy Đủ)',
      level: 'N4',
      score: 22,
      totalQuestions: 25,
      date: '01/10/2026, 20:00',
      wrongQuestionIds: ['n4-q-5', 'n4-q-14', 'n4-q-20'],
    },
    {
      id: 'test-seed-4',
      testTitle: 'Đề Thi Thử Đỉnh Cao N1 - 2024 (30 Câu - Đầy Đủ)',
      level: 'N1',
      score: 21,
      totalQuestions: 30,
      date: '02/10/2026, 19:45',
      wrongQuestionIds: ['n1-q-2', 'n1-q-8', 'n1-q-14', 'n1-q-17', 'n1-q-23', 'n1-q-26', 'n1-q-28', 'n1-q-29', 'n1-q-30'],
    },
    {
      id: 'test-seed-5',
      testTitle: 'Đề Thi Thử Căn Bản N5 (20 Câu - Đầy Đủ)',
      level: 'N5',
      score: 19,
      totalQuestions: 20,
      date: '03/10/2026, 09:20',
      wrongQuestionIds: ['n5-q-11'],
    },
  ];

  try {
    localStorage.setItem(JLPT_HISTORY_KEY_V2, JSON.stringify(sampleHistories));
  } catch (e) {
    // Ignore storage quota
  }

  return sampleHistories;
}

export interface JLPTStatsSummary {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  passRatePercentage: number; // e.g. 80 (%)
  averageScorePercentage: number; // e.g. 78.4 (%)
  totalQuestionsAttempted: number;
  totalCorrectAnswers: number;
  levelBreakdown: {
    level: JLPTLevel;
    attempts: number;
    passed: number;
    averageScorePercent: number;
  }[];
}

export function computeJLPTStats(histories: JLPTTestHistory[]): JLPTStatsSummary {
  if (!histories || histories.length === 0) {
    return {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      passRatePercentage: 0,
      averageScorePercentage: 0,
      totalQuestionsAttempted: 0,
      totalCorrectAnswers: 0,
      levelBreakdown: ['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => ({
        level: lvl as JLPTLevel,
        attempts: 0,
        passed: 0,
        averageScorePercent: 0,
      })),
    };
  }

  const PASSING_THRESHOLD = 0.6; // 60% standard JLPT pass threshold

  let totalQuestions = 0;
  let totalCorrect = 0;
  let passedCount = 0;

  const levelMap = new Map<JLPTLevel, { attempts: number; passed: number; totalScorePct: number }>();
  (['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).forEach((lvl) => {
    levelMap.set(lvl, { attempts: 0, passed: 0, totalScorePct: 0 });
  });

  histories.forEach((h) => {
    totalQuestions += h.totalQuestions;
    totalCorrect += h.score;
    const scorePct = h.totalQuestions > 0 ? (h.score / h.totalQuestions) : 0;
    const isPass = scorePct >= PASSING_THRESHOLD;
    if (isPass) passedCount++;

    const entry = levelMap.get(h.level);
    if (entry) {
      entry.attempts++;
      if (isPass) entry.passed++;
      entry.totalScorePct += scorePct * 100;
    }
  });

  const levelBreakdown = (['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).map((lvl) => {
    const entry = levelMap.get(lvl)!;
    return {
      level: lvl,
      attempts: entry.attempts,
      passed: entry.passed,
      averageScorePercent: entry.attempts > 0 ? Math.round(entry.totalScorePct / entry.attempts) : 0,
    };
  });

  return {
    totalTests: histories.length,
    passedTests: passedCount,
    failedTests: histories.length - passedCount,
    passRatePercentage: Math.round((passedCount / histories.length) * 100),
    averageScorePercentage: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0,
    totalQuestionsAttempted: totalQuestions,
    totalCorrectAnswers: totalCorrect,
    levelBreakdown,
  };
}

export interface SRSStatsSummary {
  totalCards: number;
  masteredCount: number;
  reviewCount: number;
  learningCount: number;
  newCount: number;
  retentionRatePercentage: number;
  averageIntervalDays: number;
  dueTodayCount: number;
  levelDistribution: {
    level: JLPTLevel;
    mastered: number;
    review: number;
    learning: number;
    new: number;
    total: number;
    masteredPercent: number;
  }[];
}

export function computeSRSStats(cards: Flashcard[]): SRSStatsSummary {
  let mastered = 0;
  let review = 0;
  let learning = 0;
  let newCards = 0;
  let totalInterval = 0;
  let dueToday = 0;
  const now = new Date();

  const levelCounts: Record<JLPTLevel, { mastered: number; review: number; learning: number; new: number }> = {
    N5: { mastered: 0, review: 0, learning: 0, new: 0 },
    N4: { mastered: 0, review: 0, learning: 0, new: 0 },
    N3: { mastered: 0, review: 0, learning: 0, new: 0 },
    N2: { mastered: 0, review: 0, learning: 0, new: 0 },
    N1: { mastered: 0, review: 0, learning: 0, new: 0 },
  };

  cards.forEach((c) => {
    const s = c.srs.state || 'new';
    const lvl = c.level as JLPTLevel;

    if (s === 'mastered') {
      mastered++;
      if (levelCounts[lvl]) levelCounts[lvl].mastered++;
    } else if (s === 'review') {
      review++;
      if (levelCounts[lvl]) levelCounts[lvl].review++;
    } else if (s === 'learning') {
      learning++;
      if (levelCounts[lvl]) levelCounts[lvl].learning++;
    } else {
      newCards++;
      if (levelCounts[lvl]) levelCounts[lvl].new++;
    }

    totalInterval += c.srs.interval || 0;
    if (new Date(c.srs.dueDate) <= now) {
      dueToday++;
    }
  });

  const total = cards.length || 1;
  const rememberedCount = mastered + review;
  const retentionRate = Math.round((rememberedCount / total) * 100);

  const levelDistribution = (['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).map((lvl) => {
    const counts = levelCounts[lvl] || { mastered: 0, review: 0, learning: 0, new: 0 };
    const lvlTotal = counts.mastered + counts.review + counts.learning + counts.new;
    return {
      level: lvl,
      mastered: counts.mastered,
      review: counts.review,
      learning: counts.learning,
      new: counts.new,
      total: lvlTotal,
      masteredPercent: lvlTotal > 0 ? Math.round((counts.mastered / lvlTotal) * 100) : 0,
    };
  });

  return {
    totalCards: cards.length,
    masteredCount: mastered,
    reviewCount: review,
    learningCount: learning,
    newCount: newCards,
    retentionRatePercentage: retentionRate,
    averageIntervalDays: Math.round(totalInterval / total),
    dueTodayCount: dueToday,
    levelDistribution,
  };
}
