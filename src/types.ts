export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

// ==========================================
// ROLE-BASED ACCESS CONTROL (RBAC) & USER TYPES
// ==========================================
export type UserRole = 'user' | 'admin' | 'superadmin';
export type UserStatus = 'active' | 'suspended' | 'banned';
export type AvatarSource = 'google' | 'custom';

export interface UserProfile {
  id: string;
  google_sub: string; // Khóa định danh Google duy nhất bất biến (không dùng email làm ID chính)
  email: string;
  name: string;
  avatar_url: string; // URL avatar đang hiển thị (ảnh Google hoặc ảnh custom)
  google_avatar_url?: string; // URL ảnh gốc từ tài khoản Google (lưu riêng, không bị ghi đè)
  avatar_source?: AvatarSource; // 'google' | 'custom'
  role: UserRole;
  status: UserStatus;
  target_level?: string;
  created_at: string;
  last_login_at: string;
  total_study_minutes?: number;
  completed_lessons?: number;
}

export interface AdminAuditLogItem {
  id: string;
  admin_id: string;
  admin_email: string;
  action: string;
  target_type: 'user' | 'content' | 'settings' | 'security';
  target_id: string;
  target_name?: string;
  reason: string;
  ip: string;
  device: string;
  result: 'SUCCESS' | 'FAILED';
  timestamp: string;
}

export interface AdminContentItem {
  id: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  module: 'grammar' | 'listening' | 'pitch' | 'flashcard' | 'dokkai';
  title: string;
  summary: string;
  status: 'published' | 'draft';
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface AdminSystemStats {
  summary: {
    totalUsers: number;
    activeUsers: number;
    suspendedUsers: number;
    bannedUsers: number;
    dau: number;
    wau: number;
    mau: number;
    totalStudyHours: number;
    totalCompletedLessons: number;
    completionRate: string;
    publishedContentsCount: number;
    auditLogsCount: number;
  };
  levelDistribution: { name: string; count: number; percentage: number }[];
  dailyGrowth: { day: string; users: number; active: number }[];
}

export interface AdminSystemSettings {
  maintenance_mode: boolean;
  registration_open: boolean;
  max_daily_ai_requests: number;
  allow_guest_preview: boolean;
  app_name: string;
  support_email: string;
  updated_at: string;
}

export type PitchType = 'H' | 'L' | 'D'; // High, Low, Drop

export interface MoraPitch {
  mora: string;
  pitch: PitchType;
  note?: string;
}

export interface PitchAccentInfo {
  patternName: string;
  description: string;
  moras: MoraPitch[];
  audioTips: string;
}

export interface CommunicationVariant {
  style: string;
  japanese: string;
  nuance: string;
}

export interface ReflexDrill {
  question: string;
  questionVi: string;
  modelAnswer: string;
  modelAnswerVi: string;
  reflexTip: string;
}

export interface PitchSentenceItem {
  id: string;
  level: JLPTLevel;
  original: string;
  hiragana: string;
  romaji: string;
  vietnamese: string;
  pitchAccent: PitchAccentInfo;
  speechSpeeds: {
    slow08x: { label: string; focus: string };
    natural10x: { label: string; focus: string };
    native12x: { label: string; focus: string };
  };
  communicationVariants: CommunicationVariant[];
  reflexDrills: ReflexDrill[];
}

export interface SoundModification {
  type: string;
  location: string;
  phoneticRealization: string;
  explanation: string;
}

export interface FocusKeyword {
  word: string;
  hiragana: string;
  meaning: string;
  importance: string;
}

export interface ListeningChunk {
  chunkJp: string;
  chunkVi: string;
  intonation: string;
}

export interface DictationBlank {
  id: number;
  answer: string;
  acceptableVariants: string[];
  hint: string;
  explanation: string;
}

export interface ListeningLesson {
  id: string;
  title: string;
  level: JLPTLevel;
  situation: string;
  script: string;
  soundModifications: SoundModification[];
  focusKeywords: FocusKeyword[];
  threeStepTraining: {
    step1Keywords: {
      task: string;
      instructions: string;
      targetKeywords: string[];
    };
    step2Chunking: {
      task: string;
      chunks: ListeningChunk[];
    };
    step3Dictation: {
      task: string;
      maskedScript: string;
      blanks: DictationBlank[];
    };
  };
}

export interface Flashcard {
  id: string;
  level: JLPTLevel;
  kanji: string;
  hanViet: string;
  hiragana: string;
  romaji: string;
  mnemonic: {
    story: string;
    visualDescription: string;
    emoji: string;
  };
  pitchAccent: {
    pattern: string;
    pitchGraph: string; // e.g. "L-H-H-L"
    accentMora?: number;
  };
  definition: string;
  examples: {
    lifeExample: {
      jp: string;
      vi: string;
      context: string;
    };
    jlptExample: {
      jp: string;
      vi: string;
      examTip: string;
    };
  };
  collocations: string[];
  synonyms: string[];
  antonyms: string[];
  category?: string; // Chuyên ngành: IT, Kinh tế, Y tế, Cơ khí, Dịch vụ, Thường nhật...
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert'; // Dễ nhớ, Khó, Chuyên môn
  // SRS parameters
  srs: {
    repetitions: number;
    interval: number; // in days
    easeFactor: number;
    dueDate: string; // ISO date
    lastReviewed?: string;
    state: 'new' | 'learning' | 'review' | 'mastered';
  };
}

export interface GrammarItem {
  id: string;
  level: JLPTLevel;
  textbookSource?: 'Minna no Nihongo Sơ cấp' | 'Minna no Nihongo Trung cấp' | 'Mimikaraoboeru N3' | 'Mimikaraoboeru N2' | 'Mimikaraoboeru N1';
  lessonNumber?: string;
  grammar: string;
  meaning: string;

  // 1. GIẢI THÍCH SIÊU CƠ BẢN
  simpleExplanation?: {
    whatFor: string; // Mẫu này dùng để làm gì?
    whenToUse: string; // Người Nhật dùng nó trong tình huống nào?
    plainSummary: string; // Giải thích tiếng Việt đơn giản, tránh thuật ngữ khó
  };

  // 2. CẤU TRÚC & PHÂN TÍCH THÀNH PHẦN
  structures?: {
    formula: string; // Công thức hiển thị rõ ràng
    verbRule?: string;
    adjectiveRule?: string;
    nounRule?: string;
    relatedForms?: string;
    exceptions?: string[];
    breakdownExamples: {
      sentence: string;
      furigana?: string;
      translation: string;
      components: {
        part: string;
        role: string;
        explanation: string;
      }[];
    }[];
  };

  // 3. VÍ DỤ THEO 3 CẤP ĐỘ (🟢 Cơ bản - 🟡 Trung cấp - 🔴 Nâng cao)
  threeTierExamples?: {
    basic: {
      japanese: string;
      furigana?: string;
      romaji: string;
      vietnamese: string;
      whyThisPattern: string;
    };
    intermediate: {
      japanese: string;
      furigana?: string;
      romaji: string;
      vietnamese: string;
      whyThisPattern: string;
    };
    advanced: {
      japanese: string;
      furigana?: string;
      romaji: string;
      vietnamese: string;
      whyThisPattern: string;
    };
  };

  // 4. SO SÁNH MẪU DỄ NHẦM & KHI KHÔNG NÊN DÙNG
  confusingComparisons?: {
    patterns: {
      pattern: string;
      meaning: string;
      politenessLevel: string; // Mức lịch sự
      nuance: string; // Sắc thái
      usageSituation: string; // Tình huống dùng
    }[];
    whenNotToUse: string; // ⚠️ Khi KHÔNG nên dùng mẫu này
  };

  // 5 & 6. HỌC CHỦ ĐỘNG (5 DẠNG BÀI) & CHẨN ĐOÁN LỖI THÔNG MINH
  activeLearning?: {
    recognition: {
      question: string;
      options: { id: string; text: string; isCorrect: boolean; explanation: string }[];
    };
    fillInBlank: {
      prompt: string;
      rawSentence: string;
      targetForm: string;
      expectedAnswer: string;
      acceptableVariants?: string[];
      hint: string;
      errorDiagnosis?: {
        commonMistake: string;
        errorType: 'conjugation' | 'particle' | 'nuance' | 'politeness' | 'keigo' | 'wordOrder' | 'vocabulary' | 'kanji';
        analysis: string;
        ruleToRemember: string;
        similarExample: string;
      };
    };
    fixError: {
      wrongSentence: string;
      errorHighlight: string;
      correctSentence: string;
      errorType: 'conjugation' | 'particle' | 'nuance' | 'politeness' | 'keigo' | 'wordOrder' | 'vocabulary' | 'kanji';
      diagnosticAnalysis: string;
      ruleToRemember: string;
      similarExample: string;
    };
    translation: {
      vietnamese: string;
      expectedJapanese: string;
      sampleCorrect: string;
      keywords: string[];
      tip: string;
    };
    reflex: {
      scenario: string;
      taskPrompt: string;
      sampleSpeech: string;
      reflexMindset: string;
    };
  };

  // 7. SẮC THÁI NGƯỜI NHẬT (NUANCE SPECTRUM)
  nuanceSpectrum?: {
    casual: { japanese: string; situation: string; levelLabel: string };
    polite: { japanese: string; situation: string; levelLabel: string };
    respectful: { japanese: string; situation: string; levelLabel: string };
    businessKeigo: { japanese: string; situation: string; levelLabel: string };
    writtenFormal?: { japanese: string; situation: string; levelLabel: string };
    insight: string;
  };

  // 8. PHẦN "HỌC KĨ" (DEEP DIVE ACCORDION)
  deepDive?: {
    originEtymology?: string; // Nguồn gốc/cấu trúc ngữ pháp
    nuanceDetails: string; // Sắc thái
    usageConditions: string; // Điều kiện sử dụng
    exceptions: string[]; // Ngoại lệ
    equivalentPatterns: string[]; // Mẫu tương đương
    oppositePatterns: string[]; // Mẫu trái nghĩa hoặc đối lập
    commonVietnameseMistakes: string[]; // Những lỗi người Việt thường mắc
  };

  // TÍNH NĂNG "TẠI SAO KHÔNG DÙNG MẪU KIA?"
  whyNotTheOther?: {
    situation: string;
    targetChoiceQuestion: string;
    options: {
      id: string;
      text: string;
      isGrammaticallyCorrect: boolean;
      politenessLevel: string;
      relationshipFit: string;
      businessAppropriateness: string;
      friendAlternative: string;
      verdict: string;
      isRecommended: boolean;
    }[];
    thinkingRule: string; // Quy tắc tư duy giúp tự chọn đúng
  };

  // 9. KIỂM TRA SAU BÀI (MINI-TEST 5 CÂU)
  miniTest?: {
    questions: {
      id: string;
      tier: 'basic' | 'application' | 'nuance'; // 2 câu cơ bản, 2 vận dụng, 1 sắc thái
      question: string;
      options: { id: string; text: string; isCorrect: boolean; explanation: string }[];
    }[];
  };

  // 10. HỆ THỐNG GHI NHỚ (FLASHCARDS / SRS INTEGRATION)
  takeawayMemory?: {
    goldenQuote: string; // 1 câu ghi nhớ ngắn
    avoidTrap: string; // 1 lỗi cần tránh
    realLifeScenario: string; // 1 tình huống thực tế
    srsCards: {
      front: string;
      back: string;
      mnemonic: string;
      level: JLPTLevel;
    }[];
  };

  // GRAMMAR MAP & LỘ TRÌNH TƯ DUY
  grammarMap?: {
    current: string;
    prerequisites: string[]; // Đã biết
    nextRecommendations: string[]; // Nên học tiếp
    easyToConfuseWith: string[]; // Dễ nhầm với
    advancedKnowledge: string[]; // Kiến thức nâng cao
    branchDiagramText?: string; // Sơ đồ nhánh
  };

  // Legacy fields preserved for backward compatibility
  essenceMeaning: {
    coreMindset: string;
    literalVsReal: string;
  };
  connectionRules: {
    form: string;
    rule: string;
    example: string;
  }[];
  comparison: {
    confusingWith: string;
    keyDifference: string;
    sideBySide: {
      structure: string;
      usage: string;
      nuance: string;
    }[];
  };
  creativeDrills: {
    context: string;
    prompt: string;
    modelSentence: string;
    explanation: string;
  }[];
  commonMistakes: {
    wrongSentence: string;
    correctSentence: string;
    whyWrong: string;
  }[];
}

export type JLPTSectionType = 'vocabulary' | 'grammar' | 'reading' | 'listening';

export type DokkaiCategory =
  | 'setsumei_short'    // 1. Văn giải thích / Bình luận - Đoạn ngắn (~200字)
  | 'setsumei_medium'   // 1. Văn giải thích / Bình luận - Đoạn trung (~350字)
  | 'setsumei_long'     // 1. Văn giải thích / Bình luận - Đoạn dài (~550字)
  | 'notice_email'      // 2. Thông báo / Email / Thư từ (~200字)
  | 'info_search';      // 3. 情報検索 (Tra cứu thông tin thực tế - 2 câu hỏi)

export interface DokkaiMeta {
  category: DokkaiCategory;
  categoryLabel: string; // e.g. "1. 説明文・解説文 (Đoạn ngắn ~200字)"
  categoryName?: string;
  length?: string; // e.g. "~200字", "~350字"
  targetTimeMinutes?: string; // e.g. "2-3 phút", "4 phút"
  wordCount?: number; // 200, 350, 550
  focusPoints: string; // "Hỏi ý chính & chi tiết" | "Hỏi nguyên nhân & tư tưởng" | "Lý do, mốc thời gian, đối tượng hướng tới" | "Quét nhanh thông tin, tính toán chính xác"
  infoSearchDocTitle?: string;
  questionNumberInGroup?: number; // 1 hoặc 2 (cho bài tra cứu)
}

export type ChoukaiMondai =
  | 'mondai_1' // 問題1: 課題理解 (Hiểu đề bài - Task-based)
  | 'mondai_2' // 問題2: ポイント理解 (Điểm then chốt - Point comprehension)
  | 'mondai_3' // 問題3: 発話表現 (N5/N4) hoặc 概要理解 (N3/N2/N1)
  | 'mondai_4' // 問題4: 即時応答 (Phản xạ tức thì - Quick response)
  | 'mondai_5'; // 問題5: 統合理解 (Hiểu tổng hợp - Integrated comprehension N3/N2/N1)

export interface ChoukaiMeta {
  mondai: ChoukaiMondai;
  mondaiNumber: number; // 1, 2, 3, 4, 5
  mondaiTitle: string; // e.g. "問題1: 課題理解", "問題3: 概要理解", "問題5: 統合理解"
  mondaiInstruction: string; // e.g. "まず質問を聞いてください。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。"
  questionInMondai?: number; // Câu 1, Câu 2... trong Mondai
}

export interface ChoukaiIllustration {
  type: 'arrow_scene' | 'choice_diagrams' | 'task_memo' | 'dialogue_scene';
  title?: string;
  caption?: string;
  imageUrl?: string;
  sceneDescription?: string;
  speakerWithArrow?: string; // Ví dụ: "矢印（➡）の人: 食事を終えた人"
  arrowDirection?: 'left' | 'right' | 'up' | 'down';
  layout?: 'grid-4' | 'horizontal-3' | 'memo' | 'scene-card';
  visualChoices?: {
    num: number; // 1, 2, 3, 4
    title: string;
    description?: string;
    icon?: string; // emoji or icon code
    badge?: string;
  }[];
  memoSheet?: {
    header: string;
    items: { label: string; value: string; isFocus?: boolean }[];
    footerNote?: string;
  };
  dialogueContext?: {
    setting: string; // e.g. "オフィス (Văn phòng)", "大学のゼミ (Hội thảo đại học)"
    characters: string; // e.g. "上司（課長）と 部下"
    speechBubble?: string;
    atmosphere?: string;
  };
}

export interface JLPTQuestion {
  id: string;
  level: JLPTLevel;
  year?: string; // e.g. "2018-12", "2015-07", "2020-12"
  section?: JLPTSectionType; // 'vocabulary' | 'grammar' | 'reading' | 'listening'
  dokkaiMeta?: DokkaiMeta; // Phân loại chuyên sâu đọc hiểu theo yêu cầu đề thi chuẩn N3, N2, N1
  choukaiMeta?: ChoukaiMeta; // Phân loại chuyên sâu nghe hiểu chuẩn Mondai 1 - 4 (N5/N4) và Mondai 1 - 5 (N3/N2/N1)
  passageOrScript?: string; // Đoạn văn đọc hiểu hoặc kịch bản nghe hội thoại
  audioSpeed?: number;
  imageUrl?: string;
  choukaiIllustration?: ChoukaiIllustration;
  question: string;
  options: {
    id: string; // 'A' | 'B' | 'C' | 'D'
    text: string;
    isCorrect: boolean;
    analysis: string; // Giải thích chi tiết vì sao Đúng hay Sai
  }[];
  speed30sTip: string; // Mẹo làm bài trong 30 giây
  relatedKnowledge: string; // Từ vựng / Ngữ pháp mở rộng
}

export interface JLPTTestHistory {
  id: string;
  testTitle: string;
  level: JLPTLevel;
  score: number;
  totalQuestions: number;
  date: string;
  wrongQuestionIds: string[];
}

export interface DokkaiArticle {
  id: string;
  level: JLPTLevel;
  title: string;
  passage: string;
  mainIdea: string;
  articleStructure: {
    paragraphBreakdown: {
      part: string;
      contentSummary: string;
      logicRole: string;
    }[];
    logicFlow: string;
  };
  keyConjunctions: {
    word: string;
    meaning: string;
    signalRole: string;
  }[];
  chunkingTranslation: {
    japaneseChunk: string;
    vietnameseChunk: string;
    note: string;
  }[];
  comprehensionQuiz: {
    question: string;
    options: {
      id: string;
      text: string;
      isCorrect: boolean;
      whyWrongOrRight: string;
    }[];
    speedEliminationTip: string;
  };
  advancedVocabGrammar: {
    term: string;
    reading: string;
    meaning: string;
  }[];
}
