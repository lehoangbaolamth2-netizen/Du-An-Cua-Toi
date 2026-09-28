import { JLPTExamPackage } from '../jlptExams';
import { N4_CHOUKAI_QUESTIONS } from '../choukai/n4Choukai';

export const EXAM_N4_PACKAGE: JLPTExamPackage = {
  id: 'exam-n4-2016-12',
  level: 'N4',
  year: '2016-12',
  title: 'Đề Thi Thật JLPT N4 (Kỳ Tháng 12/2016 & 2019)',
  totalTimeMinutes: 90,
  questions: [
    // --- TỪ VỰNG N4 (15 câu) ---
    {
      id: 'n4-v-1',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '図書館で 本を 【借りました】。',
      options: [
        { id: 'A', text: 'かりました', isCorrect: true, analysis: 'ĐÚNG: 借りる (Tá - かりる - mượn/vay).' },
        { id: 'B', text: 'かしました', isCorrect: false, analysis: 'SAI: かす là 貸す (cho mượn).' },
        { id: 'C', text: 'かえしました', isCorrect: false, analysis: 'SAI: かえす là 返す (trả lại).' },
        { id: 'D', text: 'とりました', isCorrect: false, analysis: 'SAI: 取る (lấy).' }
      ],
      speed30sTip: 'Mẹo: Mượn ở thư viện -> 借りる (かりる).',
      relatedKnowledge: 'Cặp đối lập: 借りる (mượn) vs 貸す (cho mượn).'
    },
    {
      id: 'n4-v-2',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '兄は 大学で 【けいざい】 を 研究しています。',
      options: [
        { id: 'A', text: '経済', isCorrect: true, analysis: 'ĐÚNG: Chữ Hán Kinh Tế (けいざい - 経済).' },
        { id: 'B', text: '経剤', isCorrect: false, analysis: 'SAI bộ chữ Hán.' },
        { id: 'C', text: '競済', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '係済', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Ngành kinh tế = 経済.',
      relatedKnowledge: 'Từ vựng đại học: 経済, 経営, 文学, 医学.'
    },
    {
      id: 'n4-v-3',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: 'この 道は 車が 多くて 【きけん】 です。',
      options: [
        { id: 'A', text: '危険', isCorrect: true, analysis: 'ĐÚNG: Nguy Hiểm (きけん - 危険).' },
        { id: 'B', text: '危検', isCorrect: false, analysis: 'SAI chữ Kiểm.' },
        { id: 'C', text: '気険', isCorrect: false, analysis: 'SAI chữ Khí.' },
        { id: 'D', text: '機険', isCorrect: false, analysis: 'SAI chữ Cơ.' }
      ],
      speed30sTip: 'Mẹo: Xe đông -> Nguy hiểm (危険 - きけん).',
      relatedKnowledge: 'Cặp từ trái nghĩa: 危険 (nguy hiểm) vs 安全 (an toàn).'
    },
    {
      id: 'n4-v-4',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '昨日の 夜、大きな 地震が 【おきました】。',
      options: [
        { id: 'A', text: '起きました', isCorrect: true, analysis: 'ĐÚNG: Động đất xảy ra: 地震が起きる (Khởi - おきる).' },
        { id: 'B', text: '置きました', isCorrect: false, analysis: 'SAI: Đặt để (おく).' },
        { id: 'C', text: '送りました', isCorrect: false, analysis: 'SAI: Gửi (おくる).' },
        { id: 'D', text: '降りました', isCorrect: false, analysis: 'SAI: Xuống xe / Mưa rơi.' }
      ],
      speed30sTip: 'Mẹo: Sự kiện thiên tai xảy ra dùng chữ 起 (Khởi - おきる).',
      relatedKnowledge: 'Collocation thiên tai: 地震・事故が起きる.'
    },
    {
      id: 'n4-v-5',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '明日までに レポートを （　　） しなければならない。',
      options: [
        { id: 'A', text: '提出', isCorrect: true, analysis: 'ĐÚNG: 提出する (ていしゅつ - nộp báo cáo).' },
        { id: 'B', text: '出席', isCorrect: false, analysis: 'SAI: Điểm danh, có mặt.' },
        { id: 'C', text: '出発', isCorrect: false, analysis: 'SAI: Xuất phát.' },
        { id: 'D', text: '発言', isCorrect: false, analysis: 'SAI: Phát biểu.' }
      ],
      speed30sTip: 'Mẹo: Đi với レポート (báo cáo) -> 提出 (nộp).',
      relatedKnowledge: 'Cụm từ: レポート・宿題を提出する.'
    },
    {
      id: 'n4-v-6',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: 'この部屋は 日が 当たらないので、とても （　　） です。',
      options: [
        { id: 'A', text: '暗い', isCorrect: true, analysis: 'ĐÚNG: 暗い (くらい - tối tăm do không có ánh nắng).' },
        { id: 'B', text: '狭い', isCorrect: false, analysis: 'SAI: Hẹp.' },
        { id: 'C', text: '低い', isCorrect: false, analysis: 'SAI: Thấp.' },
        { id: 'D', text: '深い', isCorrect: false, analysis: 'SAI: Sâu.' }
      ],
      speed30sTip: 'Mẹo: 日が当たらない (không có nắng) -> 暗い (tối).',
      relatedKnowledge: 'Cặp từ: 明るい vs 暗い.'
    },
    {
      id: 'n4-v-7',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '道が わからないので、交番で （　　） みます。',
      options: [
        { id: 'A', text: 'たずねて', isCorrect: true, analysis: 'ĐÚNG: 尋ねる (たずねる - hỏi đường/thăm dò).' },
        { id: 'B', text: 'ならべて', isCorrect: false, analysis: 'SAI: Xếp hàng.' },
        { id: 'C', text: 'さがして', isCorrect: false, analysis: 'SAI: Tìm kiếm.' },
        { id: 'D', text: 'あつめて', isCorrect: false, analysis: 'SAI: Tập hợp.' }
      ],
      speed30sTip: 'Mẹo: 交番で (ở đồn cảnh sát) -> 尋ねる (hỏi han).',
      relatedKnowledge: 'Từ vựng: 道を尋ねる (Hỏi đường).'
    },
    {
      id: 'n4-v-8',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: 'お湯が （　　） から、お茶を 入れましょう。',
      options: [
        { id: 'A', text: 'わいた', isCorrect: true, analysis: 'ĐÚNG: 沸く (わく - nước sôi). お湯が沸く.' },
        { id: 'B', text: 'あいた', isCorrect: false, analysis: 'SAI: Trống/mở.' },
        { id: 'C', text: 'ついた', isCorrect: false, analysis: 'SAI: Đến nơi / Bật.' },
        { id: 'D', text: 'きえた', isCorrect: false, analysis: 'SAI: Tắt/biến mất.' }
      ],
      speed30sTip: 'Mẹo: Đi với お湯 (nước nóng) -> 沸く (わく - sôi).',
      relatedKnowledge: 'Cặp tự động từ/tha động từ: お湯が沸く vs お湯を沸かす.'
    },
    {
      id: 'n4-v-9',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '来週の 旅行の 【日程】 を 決めましょう。',
      options: [
        { id: 'A', text: 'にってい', isCorrect: true, analysis: 'ĐÚNG: 日程 đọc là にってい (lịch trình).' },
        { id: 'B', text: 'にちてい', isCorrect: false, analysis: 'SAI: Âm biến にってい.' },
        { id: 'C', text: 'ひてい', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'にっけい', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 日程 = にってい (âm ngắt).',
      relatedKnowledge: 'Từ vựng du lịch N4: 日程, 予定, 予約.'
    },
    {
      id: 'n4-v-10',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: 'この 服は 軽くて 【うごきやすい】 です。',
      options: [
        { id: 'A', text: '動きやすい', isCorrect: true, analysis: 'ĐÚNG: Động (うごく) + やすい (dễ vận động).' },
        { id: 'B', text: '働きやすい', isCorrect: false, analysis: 'SAI: Chữ Động (làm việc).' },
        { id: 'C', text: '運びやすい', isCorrect: false, analysis: 'SAI: Vận (vận chuyển).' },
        { id: 'D', text: '通りやすい', isCorrect: false, analysis: 'SAI: Thông (đi qua).' }
      ],
      speed30sTip: 'Mẹo: Quần áo nhẹ -> Dễ vận động (動きやすい).',
      relatedKnowledge: 'Chữ Hán 動 (Động).'
    },
    {
      id: 'n4-v-11',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '彼女は いつも （　　） に 話を聞いてくれる。',
      options: [
        { id: 'A', text: '親切', isCorrect: true, analysis: 'ĐÚNG: 親切に (thân thiện, tốt bụng).' },
        { id: 'B', text: '退屈', isCorrect: false, analysis: 'SAI: Chán nản.' },
        { id: 'C', text: '丁寧', isCorrect: false, analysis: 'SAI: Thường đi với nói/viết lịch sự.' },
        { id: 'D', text: '適当', isCorrect: false, analysis: 'SAI: Qua loa / Phù hợp.' }
      ],
      speed30sTip: 'Mẹo: Lắng nghe tận tình -> 親切に (しんせつに).',
      relatedKnowledge: 'Tính từ đuôi な N4.'
    },
    {
      id: 'n4-v-12',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '電車が 遅れた （　　） を 駅員に 聞いた。',
      options: [
        { id: 'A', text: '理由', isCorrect: true, analysis: 'ĐÚNG: 理由 (りゆう - lý do tàu trễ).' },
        { id: 'B', text: '意見', isCorrect: false, analysis: 'SAI: Ý kiến.' },
        { id: 'C', text: '目的', isCorrect: false, analysis: 'SAI: Mục đích.' },
        { id: 'D', text: '意味', isCorrect: false, analysis: 'SAI: Ý nghĩa.' }
      ],
      speed30sTip: 'Mẹo: Hỏi tại sao tàu trễ -> 理由 (りゆう - lý do).',
      relatedKnowledge: 'Chữ Hán 理 (Lý) + 由 (Do).'
    },
    {
      id: 'n4-v-13',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: 'シャツの ボタンが （　　） そうですよ。',
      options: [
        { id: 'A', text: 'とれ', isCorrect: true, analysis: 'ĐÚNG: 取れる (sắp tuột/rơi cúc áo).' },
        { id: 'B', text: 'おち', isCorrect: false, analysis: 'SAI: Rơi từ trên cao.' },
        { id: 'C', text: 'きれ', isCorrect: false, analysis: 'SAI: Đứt/cắt.' },
        { id: 'D', text: 'こわれ', isCorrect: false, analysis: 'SAI: Hỏng.' }
      ],
      speed30sTip: 'Mẹo: Cúc áo tuột ra -> ボタンが取れる.',
      relatedKnowledge: 'Tự động từ miêu tả trạng thái đồ vật.'
    },
    {
      id: 'n4-v-14',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '（　　） 暗くなってきましたね。早く帰りましょう。',
      options: [
        { id: 'A', text: 'だんだん', isCorrect: true, analysis: 'ĐÚNG: だんだん (dần dần biến đổi).' },
        { id: 'B', text: 'ぜんぜん', isCorrect: false, analysis: 'SAI: Hoàn toàn không.' },
        { id: 'C', text: 'ぴったり', isCorrect: false, analysis: 'SAI: Vừa khít.' },
        { id: 'D', text: 'すっかり', isCorrect: false, analysis: 'SAI: Hoàn toàn.' }
      ],
      speed30sTip: 'Mẹo: Trời chuyển tối từ từ -> だんだん暗くなる.',
      relatedKnowledge: 'Phó từ miêu tả mức độ biến thiên: だんだん.'
    },
    {
      id: 'n4-v-15',
      level: 'N4',
      year: '2016-12',
      section: 'vocabulary',
      question: '子どもに 薬を 【のませました】。',
      options: [
        { id: 'A', text: '飲ませました', isCorrect: true, analysis: 'ĐÚNG: Thể sai khiến: 飲む -> 飲ませる (Cho con uống thuốc).' },
        { id: 'B', text: '乗らせました', isCorrect: false, analysis: 'SAI: Cho lên xe (乗る).' },
        { id: 'C', text: '見せました', isCorrect: false, analysis: 'SAI: Cho xem (見る).' },
        { id: 'D', text: '持たせました', isCorrect: false, analysis: 'SAI: Cho cầm (持つ).' }
      ],
      speed30sTip: 'Mẹo: Cho uống thuốc -> 飲ませる.',
      relatedKnowledge: 'Chữ Hán 飲 (Ẩm) thể sai khiến.'
    },

    // --- NGỮ PHÁP N4 (15 câu) ---
    {
      id: 'n4-g-1',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '雨が 降り （　　） ですから、傘を 持って 行きましょう。',
      options: [
        { id: 'A', text: 'そう', isCorrect: true, analysis: 'ĐÚNG: V-masu (bỏ masu) + そう (Dường như sắp sửa mưa).' },
        { id: 'B', text: 'よう', isCorrect: false, analysis: 'SAI: よう đi với V thể thông thường.' },
        { id: 'C', text: 'らしい', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'みたい', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo 30 giây: Động từ dạng V-masu bỏ masu + そうだ (Dự đoán sắp sửa xảy ra).',
      relatedKnowledge: 'Ngữ pháp N4: V-masu + そうだ (Điềm báo sắp xảy ra).'
    },
    {
      id: 'n4-g-2',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '先生に 推薦状を 書いて （　　） ました。',
      options: [
        { id: 'A', text: 'いただき', isCorrect: true, analysis: 'ĐÚNG: Khiêm nhường ngữ: ~ていただきました (Nhận được ơn thầy viết thư giới thiệu cho).' },
        { id: 'B', text: 'あげ', isCorrect: false, analysis: 'SAI: Không dùng あげる cho người bề trên.' },
        { id: 'C', text: 'やり', isCorrect: false, analysis: 'SAI: Chỉ dùng cho thú cưng, cây cối, con cái.' },
        { id: 'D', text: 'くれ', isCorrect: false, analysis: 'SAI: Bề trên ban ơn phải dùng くださる.' }
      ],
      speed30sTip: 'Mẹo: Nhận hành động từ thầy cô/bề trên -> ていただく.',
      relatedKnowledge: 'Kính ngữ cho nhận N4: ていただく, てくださる, てさしあげる.'
    },
    {
      id: 'n4-g-3',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: 'この 本は 難しすぎて、いくら 読んでも （　　）。',
      options: [
        { id: 'A', text: 'わからない', isCorrect: true, analysis: 'ĐÚNG: いくら... ても (Dù có đọc bao nhiêu đi nữa thì vẫn KHÔNG HIỂU).' },
        { id: 'B', text: 'わかる', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'わかりそう', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'わかった', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Cặp liên từ: いくら + V-temo + Phủ định.',
      relatedKnowledge: 'Ngữ pháp ~ても (Dù thế nào chăng nữa).'
    },
    {
      id: 'n4-g-4',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '母に 部屋の 掃除を （　　） ました。',
      options: [
        { id: 'A', text: 'させられ', isCorrect: true, analysis: 'ĐÚNG: Thể bị động sai khiến: させられる (Bị mẹ bắt dọn phòng).' },
        { id: 'B', text: 'させ', isCorrect: false, analysis: 'SAI: Mẹ bắt tôi dọn, tôi là người chịu hành động thì phải dùng thể bị động sai khiến.' },
        { id: 'C', text: 'され', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'し', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Chủ ngữ là "tôi", mẹ ép buộc -> Thể bị động sai khiến: ~させられる.',
      relatedKnowledge: 'Thể bị động sai khiến (使役受身形).'
    },
    {
      id: 'n4-g-5',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '日本へ 来る （　　）、一度も 刺身を 食べたことが なかった。',
      options: [
        { id: 'A', text: 'まえは', isCorrect: true, analysis: 'ĐÚNG: V-dic + まえは (Trước khi đến Nhật thì chưa từng ăn).' },
        { id: 'B', text: 'あとは', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'ときに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ながら', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: V-dic + 前 (Trước khi làm việc gì).',
      relatedKnowledge: 'Thời gian: V-ru mae ni vs V-ta ato de.'
    },
    {
      id: 'n4-g-6',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '明日までに この 資料を 読んで （　　） ください。',
      options: [
        { id: 'A', text: 'おいて', isCorrect: true, analysis: 'ĐÚNG: V-te + おく (Đọc chuẩn bị sẵn trước cho việc ngày mai).' },
        { id: 'B', text: 'しまって', isCorrect: false, analysis: 'SAI: Làm lỡ/hoàn tất.' },
        { id: 'C', text: 'あって', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'いって', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: "明日までに" (trước ngày mai) -> Chuẩn bị trước: ~ておく.',
      relatedKnowledge: 'Mẫu câu chuẩn bị sẵn: V-te oku.'
    },
    {
      id: 'n4-g-7',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '社長は もう お帰りに （　　） ました。',
      options: [
        { id: 'A', text: 'なり', isCorrect: true, analysis: 'ĐÚNG: Tôn kính ngữ: お + V-masu + になる (Giám đốc đã về rồi ạ).' },
        { id: 'B', text: 'し', isCorrect: false, analysis: 'SAI: お + V-masu + する là khiêm nhường ngữ dùng cho bản thân.' },
        { id: 'C', text: 'いただき', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'みえ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo kinh điển: Hành động của giám đốc (bề trên) -> お〜になる.',
      relatedKnowledge: 'Công thức tôn kính ngữ: お/ご + V + になる.'
    },
    {
      id: 'n4-g-8',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '熱が ありますから、今日は お風呂に （　　） 方が いいですよ。',
      options: [
        { id: 'A', text: '入らない', isCorrect: true, analysis: 'ĐÚNG: Khuyên không nên làm: V-nai + ほうがいい (Nên không tắm bồn).' },
        { id: 'B', text: '入る', isCorrect: false, analysis: 'SAI: Đang sốt thì không nên tắm.' },
        { id: 'C', text: '入った', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '入らなくて', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Khuyên bảo tiêu cực: V-nai + ほうがいい.',
      relatedKnowledge: 'Lời khuyên: V-ta hou ga ii vs V-nai hou ga ii.'
    },
    {
      id: 'n4-g-9',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '電気を （　　） まま、寝てしまいました。',
      options: [
        { id: 'A', text: 'つけた', isCorrect: true, analysis: 'ĐÚNG: V-ta + まま (Để nguyên trạng thái bật đèn mà ngủ mất).' },
        { id: 'B', text: 'つける', isCorrect: false, analysis: 'SAI: まま chỉ đi với V-ta hoặc V-nai.' },
        { id: 'C', text: 'つけて', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'つき', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Giữ nguyên trạng thái: V-ta + まま.',
      relatedKnowledge: 'Ngữ pháp ~まま (Cứ để nguyên như thế).'
    },
    {
      id: 'n4-g-10',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: 'あの 人は 日本語が （　　） そうです。',
      options: [
        { id: 'A', text: '上手だ', isCorrect: true, analysis: 'ĐÚNG: Nghe nói rằng (truyền văn): Tính từ đuôi な + だそうです.' },
        { id: 'B', text: '上手', isCorrect: false, analysis: 'SAI: Thiếu だ (nếu không có だ thì biến thành phán đoán vẻ ngoài).' },
        { id: 'C', text: '上手に', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '上手な', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Nghe nói rằng (Truyền văn) -> Na-adj + だそうです.',
      relatedKnowledge: 'Phân biệt そうだ (nghe nói) vs そうだ (trông có vẻ).'
    },
    {
      id: 'n4-g-11',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: 'この 料理は 子どもでも （　　） ように、辛く していません。',
      options: [
        { id: 'A', text: '食べられる', isCorrect: true, analysis: 'ĐÚNG: Thể khả năng + ように (Để trẻ con cũng có thể ăn được).' },
        { id: 'B', text: '食べる', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '食べて', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '食べた', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Để đạt mục đích năng lực -> Thể khả năng + ように.',
      relatedKnowledge: 'Mục đích: V-khả năng + ように.'
    },
    {
      id: 'n4-g-12',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '田中さんは 今、会議の （　　） ですから、あとで 電話してください。',
      options: [
        { id: 'A', text: 'ところ', isCorrect: true, analysis: 'ĐÚNG: Noun + のところ (Đang đúng vào lúc họp).' },
        { id: 'B', text: 'ばかり', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'とおり', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'わけ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Đang giữa lúc diễn ra -> のところ.',
      relatedKnowledge: 'Ngữ pháp mốc thời điểm ~ところ.'
    },
    {
      id: 'n4-g-13',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '雨が 降れば、試合は 中止に （　　）。',
      options: [
        { id: 'A', text: 'なります', isCorrect: true, analysis: 'ĐÚNG: Thể điều kiện ば: Nếu mưa thì trận đấu sẽ bị hoãn (中止になります).' },
        { id: 'B', text: 'します', isCorrect: false, analysis: 'SAI: Quyết định của ban tổ chức mang tính tự nhiên.' },
        { id: 'C', text: 'なりました', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ならなくて', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Trở nên/bị thành trạng thái: になる.',
      relatedKnowledge: 'Câu điều kiện ~ば (N4).'
    },
    {
      id: 'n4-g-14',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '日本へ 行ったら、富士山に 登って （　　） です。',
      options: [
        { id: 'A', text: 'みたい', isCorrect: true, analysis: 'ĐÚNG: V-te + みたい (Muốn leo thử núi Phú Sĩ xem sao).' },
        { id: 'B', text: 'おきたい', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'しまいたい', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'いきたい', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Thử nghiệm trải nghiệm mới -> V-te miru -> てみたい.',
      relatedKnowledge: 'Thử làm gì: V-te miru.'
    },
    {
      id: 'n4-g-15',
      level: 'N4',
      year: '2016-12',
      section: 'grammar',
      question: '窓が （　　） いますよ。寒いですね。',
      options: [
        { id: 'A', text: '開いて', isCorrect: true, analysis: 'ĐÚNG: Tự động từ 開く (あく) miêu tả trạng thái đồ vật: 窓が開いている (Cửa sổ đang mở).' },
        { id: 'B', text: '開けて', isCorrect: false, analysis: 'SAI: Tha động từ phải đi với trợ từ を (開けている) hoặc が (開けてある).' },
        { id: 'C', text: '閉めて', isCorrect: false, analysis: 'SAI: Đang lạnh thì không phải cửa đóng.' },
        { id: 'D', text: '閉じて', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Chủ ngữ là đồ vật + が + Tự động từ-te + いる (Diễn tả trạng thái hiện hữu).',
      relatedKnowledge: 'Cặp tự tha động từ N4: 開く vs 開ける.'
    },

    // --- ĐỌC HIỂU N4 (5 câu) ---
    {
      id: 'n4-r-1',
      level: 'N4',
      year: '2016-12',
      section: 'reading',
      passageOrScript: `昨日の午後、駅前のパン屋で新しいパンを買いました。リンゴとクリームが入っていて、甘くてとてもおいしかったです。店員さんに聞いたら、今月だけの限定商品だそうです。来週もまた買いに行こうと思います。`,
      question: 'このパンについて、正しいものはどれですか。',
      options: [
        { id: 'A', text: '一年中いつでも買うことができる。', isCorrect: false, analysis: 'SAI: Chỉ bán trong tháng này (今月だけの限定).' },
        { id: 'B', text: 'リンゴとクリームが入っている。', isCorrect: true, analysis: 'ĐÚNG: Khớp nguyên văn: "リンゴとクリームが入っていて".' },
        { id: 'C', text: '辛くてあまりおいしくなかった。', isCorrect: false, analysis: 'SAI: Ngon và ngọt.' },
        { id: 'D', text: '自分で家で作ったパンである。', isCorrect: false, analysis: 'SAI: Mua ở tiệm trước ga.' }
      ],
      speed30sTip: 'Mẹo: Đọc lướt thành phần chiếc bánh: リンゴ + クリーム.',
      relatedKnowledge: 'Đọc hiểu mẩu nhật ký cảm nhận ẩm thực.'
    },
    {
      id: 'n4-r-2',
      level: 'N4',
      year: '2016-12',
      section: 'reading',
      passageOrScript: `【市役所から ゴミ出しの お願い】
ビンとカンは 毎週水曜日の 朝8時までに 出してください。
キャップやラベルは 必ず はがして、プラスチックゴミの 日に 出してください。
汚れたビンは 水で 洗ってから 出すよう ご協力 お願いいたします。`,
      question: 'ビンの キャップや ラベルは どうしなければ なりませんか。',
      options: [
        { id: 'A', text: 'つけたまま水曜日に出す。', isCorrect: false, analysis: 'SAI.' },
        { id: 'B', text: 'はがしてプラスチックゴミの日に出す。', isCorrect: true, analysis: 'ĐÚNG: Khớp câu: "キャップやラベルは 必ず はがして、プラスチックゴミの 日に 出してください".' },
        { id: 'C', text: '燃えるゴミの日に出す。', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '市役所に直接持っていく。', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Bắt từ khóa "キャップやラベル" -> xem chỉ dẫn ngay sau đó.',
      relatedKnowledge: 'Quy tắc phân loại rác thải tại Nhật Bản.'
    },
    {
      id: 'n4-r-3',
      level: 'N4',
      year: '2016-12',
      section: 'reading',
      passageOrScript: `日本人の友だちの家に行ったとき、玄関で靴を脱ぐのを忘れそうになりました。ベトナムでは靴を脱がない家もありますが、日本では必ず脱ぎます。靴の向きをそろえて置くのがマナーだと教えてもらいました。`,
      question: 'この人は 友だちの家で 何を 教えてもらいましたか。',
      options: [
        { id: 'A', text: '靴を履いたまま部屋に入ること', isCorrect: false, analysis: 'SAI.' },
        { id: 'B', text: '靴の向きをそろえて置くマナー', isCorrect: true, analysis: 'ĐÚNG: "靴の向きをそろえて置くのがマナーだと教えてもらいました".' },
        { id: 'C', text: 'ベトナム料理の作り方', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '新しい靴の買い方', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Nhìn câu cuối cùng có cụm "...と教えてもらいました".',
      relatedKnowledge: 'Văn hóa ứng xử tại lối vào Genkan ở Nhật.'
    },
    {
      id: 'n4-r-4',
      level: 'N4',
      year: '2016-12',
      section: 'reading',
      passageOrScript: `スミスさんは 毎朝 ジョギングを しています。最初は 1キロ 走るのも 大変でしたが、3か月 続けた 今では 5キロ 楽に 走れるように なりました。走ったあとは シャワーを 浴びて、とても 気分が いいです。`,
      question: 'スミスさんの 様子について 正しいものは どれですか。',
      options: [
        { id: 'A', text: '今でも1キロ走るのが大変だ。', isCorrect: false, analysis: 'SAI: Đó là lúc đầu (最初は).' },
        { id: 'B', text: '今では5キロ楽に走れるようになった。', isCorrect: true, analysis: 'ĐÚNG: "今では 5キロ 楽に 走れるように なりました".' },
        { id: 'C', text: 'ジョギングをやめてしまった。', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '夜にしか走らない。', isCorrect: false, analysis: 'SAI: 毎朝走る.' }
      ],
      speed30sTip: 'Mẹo: Bắt sự tương phản giữa "最初は" (Lúc đầu) và "今では" (Bây giờ).',
      relatedKnowledge: 'Thể biểu thị sự biến đổi: V-khả năng + ようになる.'
    },
    {
      id: 'n4-r-5',
      level: 'N4',
      year: '2016-12',
      section: 'reading',
      passageOrScript: `【日本語学校の スピーチ大会】
日時：12月15日（金） 13:00〜16:00
場所：大ホール
参加資格：本校の学生（各クラス2名まで）
※ 発表したい人は、11月20日までにスピーチの原稿を担任の先生に出してください。テーマは自由です。`,
      question: 'スピーチ大会で 発表したい人は いつまでに 何を しなければなりませんか。',
      options: [
        { id: 'A', text: '12月15日までに大ホールへ行く。', isCorrect: false, analysis: 'SAI: Đó là ngày tổ chức.' },
        { id: 'B', text: '11月20日までに原稿を担任の先生に提出する。', isCorrect: true, analysis: 'ĐÚNG: "11月20日までにスピーチの原稿を担任の先生に出してください".' },
        { id: 'C', text: '今すぐテーマを決めなければならない。', isCorrect: false, analysis: 'SAI: テーマは自由.' },
        { id: 'D', text: '参加費を払う。', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Đọc ghi chú sau dấu ※ (Điều kiện nộp bài).',
      relatedKnowledge: 'Đọc hiểu bảng tin thông báo trường học.'
    },

    // --- NGHE HIỂU CHOUKAI N4 (30 câu Chuẩn Thi Mondai 1 -> Mondai 4 - 100% Tiếng Nhật) ---
    ...N4_CHOUKAI_QUESTIONS
  ]
};
