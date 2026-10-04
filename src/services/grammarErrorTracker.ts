export type PersonalErrorCategory =
  | 'particle'
  | 'conjugation'
  | 'politeness'
  | 'keigo'
  | 'wordOrder'
  | 'nuance'
  | 'vocabulary'
  | 'kanji';

export interface RecordedGrammarError {
  id: string;
  grammarId: string;
  grammarPattern: string;
  category: PersonalErrorCategory;
  categoryLabel: string;
  userAnswer: string;
  correctAnswer: string;
  diagnosis: string;
  ruleToRemember: string;
  similarExample: string;
  timestamp: string;
}

export interface TargetedDrill {
  id: string;
  category: PersonalErrorCategory;
  categoryLabel: string;
  question: string;
  hint: string;
  options: { id: string; text: string; isCorrect: boolean; explanation: string }[];
}

const STORAGE_KEY = 'nihongo_grammar_personal_errors_v1';

export const ERROR_CATEGORY_METADATA: Record<
  PersonalErrorCategory,
  { label: string; icon: string; description: string; color: string }
> = {
  particle: {
    label: 'Trợ từ (Particles)',
    icon: '⚡',
    description: 'Nhầm lẫn giữa は, が, に, で, を, と, へ...',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  },
  conjugation: {
    label: 'Chia động từ (Conjugation)',
    icon: '🔄',
    description: 'Chia sai thể て, ない, た, thể khả năng, bị động, sai khiến...',
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
  },
  politeness: {
    label: 'Thể lịch sự (Politeness)',
    icon: '🤝',
    description: 'Lẫn lộn thể ngắn (thân mật) và thể です/ます khi giao tiếp...',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  },
  keigo: {
    label: 'Kính ngữ (Keigo)',
    icon: '👑',
    description: 'Nhầm lẫn Tôn kính ngữ (hành động của sếp) và Khiêm nhường ngữ (hành động của mình)...',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  },
  wordOrder: {
    label: 'Trật tự câu (Word order)',
    icon: '🧱',
    description: 'Đảo lộn vị trí trạng ngữ chỉ thời gian, địa điểm, thành phần bổ nghĩa...',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  },
  nuance: {
    label: 'Sắc thái (Nuance)',
    icon: '🎭',
    description: 'Câu đúng ngữ pháp nhưng không hợp tâm lý hoặc sắc thái người Nhật...',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  },
  vocabulary: {
    label: 'Từ vựng (Vocabulary)',
    icon: '📚',
    description: 'Dùng từ vựng dịch từ tiếng Việt sang bị gượng gạo, sai collocation...',
    color: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
  },
  kanji: {
    label: 'Kanji & Âm Hán (Kanji)',
    icon: '🈴',
    description: 'Nhầm âm On/Kun hoặc chữ Hán tương tự mang sắc thái khác...',
    color: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
  },
};

export function loadRecordedErrors(): RecordedGrammarError[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed default initial learning history for demonstration
      const seed: RecordedGrammarError[] = [
        {
          id: 'err-seed-1',
          grammarId: 'gram-minna-1',
          grammarPattern: '~てください',
          category: 'keigo',
          categoryLabel: 'Kính ngữ (Keigo)',
          userAnswer: '社長、この書類をチェックしてください',
          correctAnswer: '社長、この書類をご確認いただけますでしょうか',
          diagnosis: 'Dùng ~てください với Giám đốc (bề trên) là bất lịch sự vì mang sắc thái mệnh lệnh.',
          ruleToRemember: 'Với cấp trên/khách hàng, luôn dùng Khiêm nhường ngữ: ~ていただけますでしょうか hoặc ~ご確認ください.',
          similarExample: '部長、こちらにご署名いただけますでしょうか。',
          timestamp: 'Hôm qua, 14:20',
        },
        {
          id: 'err-seed-2',
          grammarId: 'gram-minna-3',
          grammarPattern: '~ています vs ~てあります',
          category: 'conjugation',
          categoryLabel: 'Chia động từ (Conjugation)',
          userAnswer: '窓が開けています',
          correctAnswer: '窓が開いています',
          diagnosis: 'Mô tả trạng thái tự nhiên trước mắt mà dùng Tha động từ 開ける với ています.',
          ruleToRemember: 'Nhìn thấy trạng thái khách quan trước mắt dùng Tự động từ + ています (開く -> 開いています).',
          similarExample: '電気がついています (Đèn đang sáng).',
          timestamp: 'Hôm nay, 09:15',
        },
        {
          id: 'err-seed-3',
          grammarId: 'gram-minna-chu-1',
          grammarPattern: '~おかげで vs ~せいで',
          category: 'nuance',
          categoryLabel: 'Sắc thái (Nuance)',
          userAnswer: '事故のおかげで、怪我をして入院した',
          correctAnswer: '事故のせいで、怪我をして入院した',
          diagnosis: 'おかげで chỉ dùng cho kết quả tốt, mang tính biết ơn. Dùng cho tai nạn bị thương là hoàn toàn sai sắc thái.',
          ruleToRemember: 'Hậu quả xấu, đổ lỗi, bực mình -> bắt buộc dùng せいで.',
          similarExample: '大雨のせいで、試合が中止になった。',
          timestamp: 'Hôm nay, 10:30',
        },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load grammar errors:', e);
    return [];
  }
}

export function saveRecordedErrors(errors: RecordedGrammarError[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(errors));
  } catch (e) {
    console.error('Failed to save grammar errors:', e);
  }
}

export function recordNewGrammarError(
  grammarId: string,
  grammarPattern: string,
  category: PersonalErrorCategory,
  userAnswer: string,
  correctAnswer: string,
  diagnosis: string,
  ruleToRemember: string,
  similarExample: string
): RecordedGrammarError[] {
  const current = loadRecordedErrors();
  const newErr: RecordedGrammarError = {
    id: 'err-' + Date.now(),
    grammarId,
    grammarPattern,
    category,
    categoryLabel: ERROR_CATEGORY_METADATA[category]?.label || category,
    userAnswer,
    correctAnswer,
    diagnosis,
    ruleToRemember,
    similarExample,
    timestamp: new Date().toLocaleString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
    }),
  };
  const updated = [newErr, ...current];
  saveRecordedErrors(updated);
  return updated;
}

export function clearRecordedErrors(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

// Built-in targeted drills for frequent mistake categories
export const TARGETED_DRILLS_BANK: Record<PersonalErrorCategory, TargetedDrill[]> = {
  particle: [
    {
      id: 'drill-part-1',
      category: 'particle',
      categoryLabel: 'Trợ từ (Particles)',
      question: '窓（　）開けてあります。Điền trợ từ đúng nhất biểu thị trạng thái có chủ đích chuẩn bị sẵn:',
      hint: 'Cấu trúc ~てあります đi với tha động từ làm tân ngữ được chuyển thành chủ thể trạng thái.',
      options: [
        { id: 'A', text: 'を', isCorrect: false, explanation: 'Trong cấu trúc ~てあります miêu tả hiện trạng sẵn có, trợ từ thường dùng là が.' },
        { id: 'B', text: 'が', isCorrect: true, explanation: 'Chính xác! Noun が + Tha động từ-te + あります (Cửa sổ đã được mở sẵn).' },
        { id: 'C', text: 'に', isCorrect: false, explanation: 'Trợ từ に không chỉ chủ thể trạng thái trong mẫu này.' },
        { id: 'D', text: 'で', isCorrect: false, explanation: 'で chỉ phương tiện/địa điểm hành động, không phù hợp.' },
      ],
    },
  ],
  conjugation: [
    {
      id: 'drill-conj-1',
      category: 'conjugation',
      categoryLabel: 'Chia động từ (Conjugation)',
      question: 'Chia động từ する với mẫu ngữ pháp đành phải làm (~ざるを得ない):',
      hint: 'Động từ する là trường hợp bất quy tắc ngoại lệ duy nhất.',
      options: [
        { id: 'A', text: 'しざるを得ない', isCorrect: false, explanation: 'Sai! Đây là bẫy người học hay mắc nhất.' },
        { id: 'B', text: 'せざるを得ない', isCorrect: true, explanation: 'Tuyệt vời! する bắt buộc chuyển thành せざるを得ない.' },
        { id: 'C', text: 'さざるを得ない', isCorrect: false, explanation: 'Không có dạng chia này.' },
        { id: 'D', text: 'すざるを得ない', isCorrect: false, explanation: 'Không có dạng chia này.' },
      ],
    },
  ],
  keigo: [
    {
      id: 'drill-keigo-1',
      category: 'keigo',
      categoryLabel: 'Kính ngữ (Keigo)',
      question: 'Khi nhờ Giám đốc (社長) xem qua bản đề xuất dự án, câu nào chuẩn mực công sở nhất?',
      hint: 'Không dùng thể mệnh lệnh ~てください với bề trên.',
      options: [
        { id: 'A', text: '社長、企画書を見てください。', isCorrect: false, explanation: 'Thất lễ! てください mang sắc thái yêu cầu/mệnh lệnh.' },
        { id: 'B', text: '社長、企画書をご確認いただけますでしょうか。', isCorrect: true, explanation: 'Chuẩn xác 100%! Dùng khiêm kính ngữ lịch sự tột bậc.' },
        { id: 'C', text: '社長、企画書を見てほしいです。', isCorrect: false, explanation: 'てほしい là bày tỏ ý muốn cá nhân thô, cấm dùng với sếp.' },
        { id: 'D', text: '社長、企画書を見るべきです。', isCorrect: false, explanation: 'べきです là chỉ trích đạo đức (ông nên xem), cực kỳ vô phép.' },
      ],
    },
  ],
  politeness: [
    {
      id: 'drill-polite-1',
      category: 'politeness',
      categoryLabel: 'Thể lịch sự (Politeness)',
      question: 'Nói chuyện với đồng nghiệp mới quen ngày đầu ở công ty, cách nào vừa lịch sự vừa gần gũi?',
      hint: 'Dùng thể ます kèm từ đệm lịch thiệp.',
      options: [
        { id: 'A', text: 'ちょっと待って。', isCorrect: false, explanation: 'Đây là thể ngắn (thân mật), chỉ dùng cho bạn thân/người nhà.' },
        { id: 'B', text: '少々お待ちいただけますか。', isCorrect: true, explanation: 'Rất chuẩn mực và tôn trọng đối phương trong môi trường công sở.' },
        { id: 'C', text: '待て！', isCorrect: false, explanation: 'Thể mệnh lệnh thô lỗ, cấm dùng.' },
        { id: 'D', text: '待たないで。', isCorrect: false, explanation: 'Nghĩa là "đừng đợi", sai nghĩa cần nói.' },
      ],
    },
  ],
  nuance: [
    {
      id: 'drill-nuance-1',
      category: 'nuance',
      categoryLabel: 'Sắc thái (Nuance)',
      question: 'Được học bổng toàn phần du học Nhật nhờ thầy cô tận tâm giúp đỡ, chọn mẫu nào đúng tâm thức Nhật?',
      hint: 'Có lòng biết ơn sâu sắc về kết quả tốt đẹp.',
      options: [
        { id: 'A', text: '先生の指導のせいで、合格できました。', isCorrect: false, explanation: 'せいで mang nghĩa đổ lỗi, oán trách, hoàn toàn trái ngược với lòng biết ơn.' },
        { id: 'B', text: '先生の指導のおかげで、合格できました。', isCorrect: true, explanation: 'Chính xác! おかげで biểu đạt sự hàm ơn sâu sắc trước kết quả tốt.' },
        { id: 'C', text: '先生の指導のわりに、合格できました。', isCorrect: false, explanation: 'わりに mang nghĩa "mặc dù... thế mà lại", xúc phạm thầy cô.' },
        { id: 'D', text: '先生の指導によって、合格できました。', isCorrect: false, explanation: 'によって quá máy móc, khách quan, thiếu đi cảm xúc tri ân.' },
      ],
    },
  ],
  wordOrder: [
    {
      id: 'drill-order-1',
      category: 'wordOrder',
      categoryLabel: 'Trật tự câu (Word order)',
      question: 'Trật tự câu tự nhiên nhất trong tiếng Nhật khi diễn đạt "Tôi đã đọc sách trong phòng lúc 8 giờ sáng nay":',
      hint: 'Quy tắc: Thời gian -> Địa điểm -> Tân ngữ -> Động từ cuối câu.',
      options: [
        { id: 'A', text: '今朝8時に 部屋で 本を 読みました。', isCorrect: true, explanation: 'Chuẩn xác! Thời gian (今朝8時に) -> Địa điểm (部屋で) -> Tân ngữ (本を) -> V (読みました).' },
        { id: 'B', text: '読みました 今朝8時に 部屋で 本を。', isCorrect: false, explanation: 'Động từ trong tiếng Nhật luôn đứng cuối câu.' },
        { id: 'C', text: '本を 読みました 今朝8時に。', isCorrect: false, explanation: 'Sai trật tự chuẩn.' },
        { id: 'D', text: '部屋で 読みました 本を 8時に。', isCorrect: false, explanation: 'Đảo lộn lung tung cấu trúc SOV.' },
      ],
    },
  ],
  vocabulary: [
    {
      id: 'drill-vocab-1',
      category: 'vocabulary',
      categoryLabel: 'Từ vựng (Vocabulary)',
      question: 'Khi muốn nói "uống thuốc", động từ tiếng Nhật tự nhiên chuẩn xác là gì?',
      hint: 'Người Nhật không nói "uống" như nước uống (飲む) hay dùng từ khác?',
      options: [
        { id: 'A', text: '薬を食べる (Taberu)', isCorrect: false, explanation: 'Sai! Không dùng 食べる cho thuốc.' },
        { id: 'B', text: '薬を飲む (Nomu)', isCorrect: true, explanation: 'Chính xác! Collocation chuẩn của người Nhật là 薬を飲む.' },
        { id: 'C', text: '薬を使う (Tsukau)', isCorrect: false, explanation: 'Thường chỉ dùng cho thuốc bôi ngoài da (dùng thuốc).' },
        { id: 'D', text: '薬を取る (Toru)', isCorrect: false, explanation: 'Không phải là cách nói uống thuốc chuẩn.' },
      ],
    },
  ],
  kanji: [
    {
      id: 'drill-kanji-1',
      category: 'kanji',
      categoryLabel: 'Kanji & Âm Hán (Kanji)',
      question: 'Phân biệt chữ "Ấm" trong ngữ cảnh thời tiết ấm áp (Khí hậu):',
      hint: 'Ấm thời tiết dùng chữ 暖, ấm đồ vật/nước dùng chữ 温.',
      options: [
        { id: 'A', text: '温かい日 (On)', isCorrect: false, explanation: 'Sai! 温 dùng cho nhiệt độ đồ vật (nước ấm, súp ấm, tấm lòng).' },
        { id: 'B', text: '暖かい日 (Dan)', isCorrect: true, explanation: 'Chính xác! 暖 (Noãn) dùng cho khí hậu, thời tiết xung quanh.' },
        { id: 'C', text: '熱い日 (Netsu)', isCorrect: false, explanation: '熱い nghĩa là nóng sốt, nóng bỏng đồ vật.' },
        { id: 'D', text: '暑い日 (Sho)', isCorrect: false, explanation: '暑い nghĩa là thời tiết nóng bức mùa hè, không phải ấm áp.' },
      ],
    },
  ],
};
