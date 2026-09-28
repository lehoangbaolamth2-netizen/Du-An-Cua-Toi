export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

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
