import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { apiRouter } from './server/apiRoutes.js';

const app = express();
app.use(express.json());
app.use('/api', apiRouter);

const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Endpoint for Pitch Accent & Reflex analysis
app.post('/api/ai/pitch-reflex', async (req, res) => {
  try {
    const { sentence } = req.body;
    if (!sentence || typeof sentence !== 'string') {
      return res.status(400).json({ error: 'Sentence is required' });
    }

    if (!ai) {
      return res.status(200).json({
        source: 'fallback',
        data: getFallbackPitchAnalysis(sentence),
      });
    }

    const prompt = `Bạn là chuyên gia ngữ âm và phản xạ tiếng Nhật bản xứ.
Hãy phân tích câu tiếng Nhật sau đây theo 4 bước chuẩn để người học xóa mất gốc và nói tự nhiên:
Câu: "${sentence}"

Yêu cầu xuất ra định dạng JSON chính xác theo cấu trúc sau (không kèm markdown ngoài JSON):
{
  "original": "${sentence}",
  "hiragana": "Phiên âm Hiragana đầy đủ",
  "romaji": "Phiên âm Romaji chuẩn",
  "vietnamese": "Dịch nghĩa tiếng Việt tự nhiên",
  "pitchAccent": {
    "patternName": "Tên loại trọng âm (Heiban - 平板, Atamadaka - 頭高, Nakadaka - 中高, Odaka - 尾高)",
    "description": "Mô tả chi tiết vị trí lên giọng, hạ giọng hoặc rơi giọng",
    "moras": [
      { "mora": "ký tự mora (âm tiết)", "pitch": "H" | "L" | "D", "note": "Ghi chú nếu có (ví dụ: Rơi giọng sau âm này)" }
    ],
    "audioTips": "Mẹo mở khẩu hình và điều chỉnh hơi thở của người bản xứ"
  },
  "speechSpeeds": {
    "slow08x": { "label": "Chậm (0.8x)", "focus": "Tập trung tách rõ từng mora, giữ cao độ chuẩn" },
    "natural10x": { "label": "Tự nhiên (1.0x)", "focus": "Tốc độ đàm thoại đời thường, mượt mà giữa các trợ từ" },
    "native12x": { "label": "Bản xứ nhanh (1.2x)", "focus": "Nói liền mạch, nuốt nhẹ các phụ âm yếu" }
  },
  "communicationVariants": [
    {
      "style": "Lịch sự trang trọng (Polite / Keigo)",
      "japanese": "Câu ở thể Desu/Masu hoặc Keigo",
      "nuance": "Dùng trong công việc, người lạ, người lớn tuổi"
    },
    {
      "style": "Thân mật hàng ngày (Casual / Thể ngắn)",
      "japanese": "Câu ở thể ngắn (Thể từ điển / Ta / Nai)",
      "nuance": "Dùng với bạn bè, đồng nghiệp thân thiết, gia đình"
    },
    {
      "style": "Khẩu ngữ / Slang giới trẻ (Spoken / Slang)",
      "japanese": "Biến thể rút gọn (ví dụ: ~ちゃう, ~じゃん, ~っす)",
      "nuance": "Cách nói siêu tự nhiên của người Nhật trẻ"
    }
  ],
  "reflexDrills": [
    {
      "question": "Câu hỏi phản xạ 1 bằng tiếng Nhật (kèm Hiragana & Romaji)",
      "questionVi": "Nghĩa tiếng Việt",
      "modelAnswer": "Câu trả lời gợi ý phản xạ nhanh bằng tiếng Nhật",
      "modelAnswerVi": "Nghĩa tiếng Việt",
      "reflexTip": "Mẹo bật phản xạ trong 1 giây không cần dịch qua tiếng Việt"
    },
    {
      "question": "Câu hỏi phản xạ 2 bằng tiếng Nhật",
      "questionVi": "Nghĩa tiếng Việt",
      "modelAnswer": "Câu trả lời gợi ý",
      "modelAnswerVi": "Nghĩa tiếng Việt",
      "reflexTip": "Mẹo tư duy trực tiếp"
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ source: 'ai', data: parsed });
  } catch (error) {
    console.error('Error in pitch-reflex:', error);
    return res.status(200).json({
      source: 'fallback',
      data: getFallbackPitchAnalysis(req.body.sentence || ''),
    });
  }
});

// Endpoint for Listening & Dictation analysis
app.post('/api/ai/listening-analysis', async (req, res) => {
  try {
    const { script } = req.body;
    if (!script) {
      return res.status(400).json({ error: 'Script is required' });
    }

    if (!ai) {
      return res.status(200).json({
        source: 'fallback',
        data: getFallbackListeningAnalysis(script),
      });
    }

    const prompt = `Bạn là chuyên gia xóa hiện tượng "nghe không kịp" trong tiếng Nhật (JLPT Chokai Coach).
Hãy phân tích đoạn nghe sau đây để học viên bắt kịp tốc độ bản xứ:
Đoạn nghe: "${script}"

Yêu cầu xuất ra JSON chính xác theo format sau (chỉ JSON):
{
  "script": "${script}",
  "soundModifications": [
    {
      "type": "Nối âm / Âm ngắt / Nuốt âm / Rút gọn",
      "location": "Vị trí từ/cụm từ",
      "phoneticRealization": "Cách viết thực tế vs Cách phát âm thực tế bản xứ (ví dụ: ~ておく -> ~とく)",
      "explanation": "Lý do người Nhật biến đổi âm ở đây và cách tai nhận diện"
    }
  ],
  "focusKeywords": [
    { "word": "Từ vựng trọng tâm", "hiragana": "Cách đọc", "meaning": "Ý nghĩa", "importance": "Tại sao quyết định nội dung chính" }
  ],
  "threeStepTraining": {
    "step1Keywords": {
      "task": "Lần 1: Nghe bắt từ khóa",
      "instructions": "Chỉ tập trung bắt 3 từ khóa mấu chốt sau để đoán 80% ngữ cảnh",
      "targetKeywords": ["từ 1", "từ 2", "từ 3"]
    },
    "step2Chunking": {
      "task": "Lần 2: Nghe từng cụm ý nghĩa",
      "chunks": [
        { "chunkJp": "Cụm tiếng Nhật 1", "chunkVi": "Nghĩa cụm 1", "intonation": "Ngữ điệu cụm" }
      ]
    },
    "step3Dictation": {
      "task": "Lần 3: Nghe chép chính tả (Dictation test)",
      "maskedScript": "Đoạn văn với các chỗ trống dạng [___1___], [___2___]",
      "blanks": [
        { "id": 1, "answer": "từ cần điền", "acceptableVariants": ["biến thể chấp nhận"], "hint": "Gợi ý ngữ âm", "explanation": "Giải thích chi tiết lỗi sai thường nghe nhầm" }
      ]
    }
  }
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ source: 'ai', data: parsed });
  } catch (error) {
    console.error('Error in listening-analysis:', error);
    return res.status(200).json({
      source: 'fallback',
      data: getFallbackListeningAnalysis(req.body.script || ''),
    });
  }
});

// Endpoint for Grammar Deep Dive
app.post('/api/ai/grammar-deep-dive', async (req, res) => {
  try {
    const { grammarPoint } = req.body;
    if (!grammarPoint) {
      return res.status(400).json({ error: 'Grammar point is required' });
    }

    if (!ai) {
      return res.status(200).json({
        source: 'fallback',
        data: getFallbackGrammarAnalysis(grammarPoint),
      });
    }

    const prompt = `Bạn là chuyên gia giảng dạy Ngữ pháp Tiếng Nhật Bản chất (Deep Japanese Grammar).
Hãy giải thích cấu trúc ngữ pháp sau để người học không bao giờ nhầm lẫn:
Cấu trúc: "${grammarPoint}"

Yêu cầu xuất ra JSON theo đúng cấu trúc:
{
  "grammar": "${grammarPoint}",
  "jlptLevel": "N5 | N4 | N3 | N2 | N1",
  "essenceMeaning": {
    "coreMindset": "Bản chất ý nghĩa: Ngữ pháp này xuất phát từ tư duy nào của người Nhật? (Tâm lý, văn hóa, góc nhìn chủ quan hay khách quan)",
    "literalVsReal": "Nghĩa đen vs Nghĩa sử dụng thực tế"
  },
  "connectionRules": [
    { "form": "Động từ V", "rule": "Quy tắc kết hợp cụ thể (ví dụ: V-te, V-dic...)", "example": "Ví dụ ngắn" }
  ],
  "comparison": {
    "confusingWith": "Tên 1 hoặc 2 cấu trúc ngữ pháp rất dễ gây nhầm lẫn",
    "keyDifference": "Điểm khác biệt cốt tử để phân biệt trong 5 giây",
    "sideBySide": [
      { "structure": "${grammarPoint}", "usage": "Khi nào dùng", "nuance": "Sắc thái cảm xúc" },
      { "structure": "Cấu trúc tương đương", "usage": "Khi nào dùng", "nuance": "Sắc thái khác biệt" }
    ]
  },
  "creativeDrills": [
    { "context": "Ngữ cảnh 1", "prompt": "Yêu cầu đặt câu", "modelSentence": "Câu mẫu chuẩn", "explanation": "Phân tích vì sao cấu trúc này phù hợp nhất" },
    { "context": "Ngữ cảnh 2", "prompt": "Yêu cầu đặt câu", "modelSentence": "Câu mẫu chuẩn", "explanation": "Phân tích" },
    { "context": "Ngữ cảnh 3", "prompt": "Yêu cầu đặt câu", "modelSentence": "Câu mẫu chuẩn", "explanation": "Phân tích" }
  ],
  "commonMistakes": [
    { "wrongSentence": "Câu sai người học hay viết", "correctSentence": "Câu sửa lại cho đúng", "whyWrong": "Giải thích chi tiết tại sao sai và cách khắc phục" }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ source: 'ai', data: parsed });
  } catch (error) {
    console.error('Error in grammar-deep-dive:', error);
    return res.status(200).json({
      source: 'fallback',
      data: getFallbackGrammarAnalysis(req.body.grammarPoint || ''),
    });
  }
});

// Endpoint for Dokkai Reading analysis
app.post('/api/ai/dokkai-analysis', async (req, res) => {
  try {
    const { passage } = req.body;
    if (!passage) {
      return res.status(400).json({ error: 'Passage is required' });
    }

    if (!ai) {
      return res.status(200).json({
        source: 'fallback',
        data: getFallbackDokkaiAnalysis(passage),
      });
    }

    const prompt = `Bạn là chuyên gia luyện thi Đọc hiểu JLPT (Dokkai Sensei).
Hãy phân tích đoạn văn sau theo tư duy giải đề chủ động của chuyên gia:
Đoạn văn: "${passage}"

Yêu cầu xuất ra JSON theo đúng cấu trúc:
{
  "mainIdea": "Ý chính cốt lõi nhất của tác giả (1-2 câu súc tích)",
  "articleStructure": {
    "paragraphBreakdown": [
      { "part": "Phần mở đầu / Thân bài / Kết luận", "contentSummary": "Tóm tắt nội dung", "logicRole": "Vai trò logic (Đưa vấn đề / Đưa ví dụ đối lập / Kết luận chốt ý)" }
    ],
    "logicFlow": "Sơ đồ dòng chảy tư duy (Nguyên nhân -> Kết quả, hoặc Phản đề -> Luận điểm chính)"
  },
  "keyConjunctions": [
    { "word": "Từ nối then chốt (như しかし, つまり, したがって, なぜなら)", "meaning": "Ý nghĩa", "signalRole": "Tín hiệu đọc hiểu (Báo hiệu ý tác giả sắp nói ngược lại, tóm tắt ý chính, v.v.)" }
  ],
  "chunkingTranslation": [
    { "japaneseChunk": "Cụm tiếng Nhật", "vietnameseChunk": "Dịch chuẩn xác theo tư duy Nhật", "note": "Ghi chú cú pháp quan trọng" }
  ],
  "comprehensionQuiz": {
    "question": "Câu hỏi kiểm tra thấu hiểu nội dung chuẩn phong cách JLPT",
    "options": [
      { "id": "A", "text": "Phương án A", "isCorrect": false, "whyWrongOrRight": "Lý do bẫy hoặc đúng" },
      { "id": "B", "text": "Phương án B", "isCorrect": true, "whyWrongOrRight": "Lý do đúng theo câu chốt của tác giả" },
      { "id": "C", "text": "Phương án C", "isCorrect": false, "whyWrongOrRight": "Lý do sai" },
      { "id": "D", "text": "Phương án D", "isCorrect": false, "whyWrongOrRight": "Lý do sai" }
    ],
    "speedEliminationTip": "Mẹo 30 giây để loại trừ các đáp án bẫy"
  },
  "advancedVocabGrammar": [
    { "term": "Từ vựng / Ngữ pháp N3-N1", "reading": "Cách đọc", "meaning": "Ý nghĩa trong bài" }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ source: 'ai', data: parsed });
  } catch (error) {
    console.error('Error in dokkai-analysis:', error);
    return res.status(200).json({
      source: 'fallback',
      data: getFallbackDokkaiAnalysis(req.body.passage || ''),
    });
  }
});

// Fallback generators with high linguistic quality for offline or API limits
function getFallbackPitchAnalysis(sentence: string) {
  return {
    original: sentence || 'お疲れ様でした',
    hiragana: 'おつかれさまでした',
    romaji: 'Otsukaresama deshita',
    vietnamese: 'Anh/chị đã vất vả rồi (Lời chào sau ngày làm việc/hoàn thành công việc)',
    pitchAccent: {
      patternName: 'Nakadaka (中高) - Đỉnh ở mora "れ" hoặc "ま"',
      description: 'Lên giọng từ mora thứ 2, đạt đỉnh cao độ ở "れ" (re) rồi hạ thấp dần sang "でした" (deshita).',
      moras: [
        { mora: 'お (o)', pitch: 'L', note: 'Khởi đầu thấp nhẹ' },
        { mora: 'つ (tsu)', pitch: 'H', note: 'Bắt đầu nâng cao độ' },
        { mora: 'か (ka)', pitch: 'H', note: 'Giữ cao độ' },
        { mora: 'れ (re)', pitch: 'H', note: 'Đỉnh cao độ của từ (Accent peak)' },
        { mora: 'さ (sa)', pitch: 'L', note: 'Rơi giọng (Pitch Drop bắt đầu)' },
        { mora: 'ま (ma)', pitch: 'L', note: 'Duy trì thấp' },
        { mora: 'で (de)', pitch: 'L', note: 'Trợ động từ thấp' },
        { mora: 'し (shi)', pitch: 'L', note: 'Âm vô thanh hóa nhẹ' },
        { mora: 'た (ta)', pitch: 'L', note: 'Kết thúc êm dịu' }
      ],
      audioTips: 'Không nhấn mạnh bằng âm lượng (stress volume) như tiếng Anh mà chuyển đổi độ cao tần số (frequency pitch). Giữ lưỡi thả lỏng, âm "shi" nhẹ không thổi gió mạnh.'
    },
    speechSpeeds: {
      slow08x: { label: 'Chậm (0.8x)', focus: 'Tách rõ mora お-つ-か-れ, cảm nhận bước nhảy cao độ L-H.' },
      natural10x: { label: 'Tự nhiên (1.0x)', focus: 'Phát âm nhịp nhàng, liền mạch tự nhiên như người Tokyo.' },
      native12x: { label: 'Bản xứ nhanh (1.2x)', focus: 'Âm "shi" được vô thanh hóa (de-voiced), nghe như "otsukaresamadesh-ta".' }
    },
    communicationVariants: [
      {
        style: 'Lịch sự trang trọng (Polite / Keigo)',
        japanese: 'お疲れ様でございました (Otsukaresama de gozaimashita)',
        nuance: 'Dùng với cấp trên lớn tuổi, giám đốc hoặc đối tác kinh doanh.'
      },
      {
        style: 'Thân mật hàng ngày (Casual / Thể ngắn)',
        japanese: 'お疲れ！ (Otsukare!)',
        nuance: 'Chào đồng nghiệp ngang hàng, bạn bè sau buổi học hay đi chơi.'
      },
      {
        style: 'Khẩu ngữ / Slang giới trẻ (Spoken / Slang)',
        japanese: 'おつ〜 / おつかれさま〜 (Otsu~ / Otsukaresama~)',
        nuance: 'Nhắn tin qua LINE, game chat hoặc chào nhanh lúc tan ca.'
      }
    ],
    reflexDrills: [
      {
        question: '同僚が「お先に失礼します」と言って帰る時、何と返しますか？',
        questionVi: 'Khi đồng nghiệp nói "Tôi xin phép về trước", bạn đáp lại thế nào trong 1 giây?',
        modelAnswer: 'お疲れ様でした！気をつけて帰ってくださいね。',
        modelAnswerVi: 'Anh/chị đã vất vả rồi! Đi về cẩn thận nhé.',
        reflexTip: 'Phản xạ ngay từ khóa "お疲れ様" mà không cần suy nghĩ chia động từ.'
      },
      {
        question: '友達とハードな筋トレや勉強会が終わった時、カジュアルに何と言う？',
        questionVi: 'Khi buổi học nhóm căng thẳng vừa xong, nói gì thật tự nhiên với bạn?',
        modelAnswer: 'おつかれー！まじで疲れたけど楽しかったね！',
        modelAnswerVi: 'Xong rồi nha! Mệt thật đấy nhưng vui ghê!',
        reflexTip: 'Kéo dài đuôi おつかれー để tạo sự gần gũi, đồng cảm.'
      }
    ]
  };
}

function getFallbackListeningAnalysis(script: string) {
  return {
    script: script || '昨日の会議、部長は何ておっしゃってた？',
    soundModifications: [
      {
        type: 'Rút gọn & Nối âm khẩu ngữ',
        location: '何て (Nante)',
        phoneticRealization: '何と言って (Nan to itte) -> 何て (Nante)',
        explanation: 'Trợ từ と kết hợp âm ngắt って tạo thành [nte], người Nhật thường nuốt nguyên âm o để tăng tốc độ nói.'
      },
      {
        type: 'Kính ngữ hòa trộn thể ngắn',
        location: 'おっしゃってた (Osshatteta)',
        phoneticRealization: 'おっしゃっていました -> おっしゃってた (rút gọn い)',
        explanation: 'Hiện tượng nuốt âm い trong thì tiếp diễn [~teiru -> ~teru], rất phổ biến trong hội thoại tự nhiên của người Nhật.'
      }
    ],
    focusKeywords: [
      { word: '会議 (Kaigi)', hiragana: 'かいぎ', meaning: 'Cuộc họp', importance: 'Chủ đề của đoạn hội thoại' },
      { word: '部長 (Buchou)', hiragana: 'ぶちょう', meaning: 'Trưởng phòng', importance: 'Nhân vật chủ thể được nhắc tới' },
      { word: 'おっしゃる (Ossharu)', hiragana: 'おっしゃる', meaning: 'Nói (Tôn kính ngữ của 言う)', importance: 'Bắt được kính ngữ để biết đang hỏi ý kiến sếp' }
    ],
    threeStepTraining: {
      step1Keywords: {
        task: 'Lần 1: Nghe bắt từ khóa (Keywords)',
        instructions: 'Chỉ cần nghe được 3 từ "Hôm qua", "Cuộc họp", "Trưởng phòng nói gì" là nắm trọn vẹn ngữ cảnh.',
        targetKeywords: ['昨日の会議', '部長', '何て']
      },
      step2Chunking: {
        task: 'Lần 2: Nghe từng cụm ý nghĩa (Chunking)',
        chunks: [
          { chunkJp: '昨日の会議、', chunkVi: 'Cuộc họp hôm qua ấy,', intonation: 'Lên giọng nhẹ ở cuối để gợi nhắc' },
          { chunkJp: '部長は何て', chunkVi: 'trưởng phòng đã nói gì', intonation: 'Nhấn nhẹ vào 何 (Nan)' },
          { chunkJp: 'おっしゃってた？', chunkVi: 'thế cậu?', intonation: 'Lên giọng ở cuối câu hỏi' }
        ]
      },
      step3Dictation: {
        task: 'Lần 3: Nghe chép chính tả (Dictation test)',
        maskedScript: '昨日の[___1___]、[___2___]は何て[___3___]？',
        blanks: [
          { id: 1, answer: '会議', acceptableVariants: ['かいぎ', 'kaigi'], hint: 'Âm Hán: Hội Nghị', explanation: 'Thường nghe nhầm thành かぎ (chìa khóa) nếu không nghe rõ trường âm [ii].' },
          { id: 2, answer: '部長', acceptableVariants: ['ぶちょう', 'buchou'], hint: 'Âm Hán: Bộ Trưởng', explanation: 'Chú ý trường âm [ou], không nghe thành ぶちょ.' },
          { id: 3, answer: 'おっしゃってた', acceptableVariants: ['おっしゃてた'], hint: 'Tôn kính ngữ rút gọn', explanation: 'Âm ngắt [っ] và hiện tượng nuốt âm [い] trong おっしゃっていました.' }
        ]
      }
    }
  };
}

function getFallbackGrammarAnalysis(point: string) {
  return {
    grammar: point || '~わけがない (~wake ga nai)',
    jlptLevel: 'N3 / N2',
    essenceMeaning: {
      coreMindset: 'Tư duy "Tuyệt đối phi lý dựa trên căn cứ logic". Người Nhật dùng cấu trúc này khi dựa trên một sự thật hiển nhiên hoặc lý lẽ vững chắc, trong tâm trí họ khẳng định 100% điều đó không thể nào xảy ra (Lý trí bác bỏ hoàn toàn).',
      literalVsReal: 'Nghĩa đen: "Không có lý do/nguyên nhân nào để..." -> Nghĩa thực tế: "Làm sao mà... được / Tuyệt đối không thể nào!"'
    },
    connectionRules: [
      { form: 'V (Thể thông thường - Futsuukei)', rule: 'V-dic / V-nai / V-ta / V-nakatta + わけがない', example: 'あんな真面目な人が嘘をつくわけがない (Người nghiêm túc thế sao nói dối được).' },
      { form: 'Tính từ đuôi い (A-i)', rule: 'Giữ nguyên い + わけがない', example: '美味しくないわけがない (Sao mà không ngon cho được).' },
      { form: 'Tính từ đuôi な (A-na)', rule: 'A-na + な + わけがない', example: '暇なわけがない (Làm sao mà rảnh rỗi được).' },
      { form: 'Danh từ (Noun)', rule: 'Noun + である / の + わけがない', example: '彼が犯人であるわけがない (Anh ta tuyệt đối không thể là thủ phạm).' }
    ],
    comparison: {
      confusingWith: '~はずがない (~hazu ga nai)',
      keyDifference: 'わけがない mang tính phủ định logic tuyệt đối mang tính khách quan và chủ quan mạnh mẽ. はずがない dựa trên sự phán đoán/kỳ vọng cá nhân của người nói (theo dự tính thì chắc chắn không). わけがない có ngữ khí phản bác gay gắt hơn.',
      sideBySide: [
        { structure: '~わけがない', usage: 'Bác bỏ một điều phi lý dựa trên lý lẽ chắc chắn.', nuance: 'Mạnh mẽ, quả quyết, có phần ngạc nhiên hoặc bất bình.' },
        { structure: '~はずがない', usage: 'Dựa trên kế hoạch, lịch trình, dữ liệu để phán đoán.', nuance: 'Phán đoán logic cá nhân, trung tính hơn.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Bạn thân bạn là người ăn chay trường, có người nói bạn ấy vừa đi ăn thịt bò nướng.', prompt: 'Hãy dùng ~わけがない để phản bác ngay lập tức.', modelSentence: '彼はずっとベジタリアンなんだから、焼肉を食べるわけがない！', explanation: 'Dùng căn cứ "ăn chay" để khẳng định việc ăn thịt là không thể.' },
      { context: 'Ngữ cảnh 2: Một bài toán tiểu học rất đơn giản nhưng có người nói giáo viên đại học giải sai.', prompt: 'Hãy dùng ~わけがない với A-na/A-i để bày tỏ sự tin tưởng.', modelSentence: 'こんな簡単な問題、先生が間違えるわけがないよ。', explanation: 'Bác bỏ khả năng sai sót của chuyên gia.' },
      { context: 'Ngữ cảnh 3: Giá chiếc túi hàng hiệu chính hãng chỉ 100 yên trên mạng.', prompt: 'Hãy dùng ~わけがない với Noun để cảnh báo bạn bè.', modelSentence: '100円で本物のブランド品であるわけがない。絶対偽物だよ！', explanation: 'Khẳng định túi 100 yên không thể là đồ thật.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 彼は暇わけがない (Quên liên từ của tính từ な)',
        correctSentence: '○ 彼は暇なわけがない (Kèm trợ từ な)',
        whyWrong: 'Tính từ đuôi な khi bổ nghĩa cho danh từ "わけ" bắt buộc phải giữ lại な.'
      },
      {
        wrongSentence: '× 明日雨が降るわけがない (Dùng cho thời tiết ngẫu nhiên tự nhiên)',
        correctSentence: '○ 明日雨が降るはずがない / 降らないだろう',
        whyWrong: 'Hiện tượng thời tiết là biến số tự nhiên, không thể dùng "lý lẽ đạo đức/logic con người" để phủ định tuyệt đối bằng わけがない trừ phi thời tiết sa mạc có căn cứ khoa học đặc biệt.'
      }
    ]
  };
}

function getFallbackDokkaiAnalysis(passage: string) {
  return {
    mainIdea: 'Tác giả nhấn mạnh rằng thất bại không phải là đối lập của thành công, mà chính là những bước đệm không thể thiếu để hình thành nên năng lực thực sự.',
    articleStructure: {
      paragraphBreakdown: [
        { part: 'Đoạn 1 (Đưa ra định kiến)', contentSummary: 'Xã hội hiện đại thường sợ thất bại và chỉ ca ngợi người chiến thắng.', logicRole: 'Nêu hiện trạng & quan niệm chung để chuẩn bị phản biện' },
        { part: 'Đoạn 2 (Chuyển ý & Dẫn chứng)', contentSummary: 'Tuy nhiên (しかし), chính từ các lần thử sai mà kinh nghiệm quý giá mới được tích lũy.', logicRole: 'Luận điểm cốt lõi của tác giả' },
        { part: 'Đoạn 3 (Kết luận đúc rút)', contentSummary: 'Tóm lại (つまり), dám đối diện với sai lầm mới là chìa khóa của phát triển bền vững.', logicRole: 'Khẳng định thông điệp cuối bài' }
      ],
      logicFlow: 'Quan niệm phổ biến -> Phản đề bằng liên từ しかし -> Dẫn chứng thực tế -> Đúc kết bằng つまり'
    },
    keyConjunctions: [
      { word: 'しかし (Shikashi)', meaning: 'Tuy nhiên / Nhưng', signalRole: 'ĐẶC BIỆT QUAN TRỌNG: Câu đứng ngay sau しかし luôn là quan điểm thực sự của tác giả, thường là đáp án cho câu hỏi Đọc hiểu JLPT.' },
      { word: 'つまり (Tsumari)', meaning: 'Tóm lại / Nói cách khác', signalRole: 'Báo hiệu tác giả đang quy tụ toàn bộ luận điểm thành một câu chốt súc tích.' },
      { word: 'なぜなら (Nazenara)', meaning: 'Bởi vì là', signalRole: 'Báo hiệu phần giải thích nguyên nhân cho luận điểm vừa nêu.' }
    ],
    chunkingTranslation: [
      { japaneseChunk: '現代社会において、', vietnameseChunk: 'Trong xã hội hiện đại,', note: 'Trạng từ chỉ phạm vi ngữ cảnh' },
      { japaneseChunk: '失敗は避けられるべきものと', vietnameseChunk: 'thất bại là thứ đáng bị né tránh', note: 'Dạng bị động biểu thị quan niệm xã hội' },
      { japaneseChunk: '考えられがちであるが、', vietnameseChunk: 'dù thường bị nghĩ là như vậy, nhưng...', note: 'Ngữ pháp ~がち (có xu hướng tiêu cực)' },
      { japaneseChunk: '本当の成長はそこから始まる。', vietnameseChunk: 'sự trưởng thành thực sự lại bắt đầu từ chính nơi ấy.', note: 'Câu khẳng định trọng tâm' }
    ],
    comprehensionQuiz: {
      question: '筆者がこの文章で最も言いたいことは何か。(Điều tác giả muốn nói nhất trong đoạn văn là gì?)',
      options: [
        { id: 'A', text: '失敗を恐れずに挑戦し、そこから学ぶ姿勢こそが成長につながる。', isCorrect: true, whyWrongOrRight: 'ĐÚNG: Khớp chính xác với câu chốt của đoạn văn sau liên từ しかし và つまり.' },
        { id: 'B', text: '現代社会では誰もが一度も失敗せずに成功することが求められている。', isCorrect: false, whyWrongOrRight: 'SAI: Đây chỉ là định kiến sai lầm tác giả nêu ra để phản bác ở đoạn 1.' },
        { id: 'C', text: '失敗した人は社会から取り残されてしまうため、努力し続けるべきだ。', isCorrect: false, whyWrongOrRight: 'SAI: Ý kiến tiêu cực bịa thêm, không có trong bài.' },
        { id: 'D', text: '他人の失敗を許容できる寛容な社会を作ることが最優先である。', isCorrect: false, whyWrongOrRight: 'SAI: Lạc đề, bài viết tập trung vào sự trưởng thành của cá nhân.' }
      ],
      speedEliminationTip: 'Mẹo 30 giây: Tìm câu đứng sau "しかし" và "つまり", đối chiếu trực tiếp với 4 đáp án. Bỏ ngay các đáp án chứa từ mang tính tuyệt đối sai lệch như "一度も...ない".'
    },
    advancedVocabGrammar: [
      { term: '避けられるべき (~beki)', reading: 'さけられるべき', meaning: 'Nên / Đáng bị né tránh (Đạo lý/Bổn phận)' },
      { term: '考えられがち (~gachi)', reading: 'かんがえられがち', meaning: 'Thường hay bị nghĩ như vậy (Khuynh hướng xấu)' },
      { term: '不可欠 (Fukaketsu)', reading: 'ふかけつ', meaning: 'Không thể thiếu được (Từ vựng N2)' }
    ]
  };
}

async function startServer() {
  const PORT = 3000;

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NihonGo Reflex server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
