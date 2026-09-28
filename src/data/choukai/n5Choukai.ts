import { JLPTQuestion } from '../../types';

// =========================================================================
// JLPT N5 CHOUKAI (30 CÂU CHUẨN THI: MONDAI 1 -> MONDAI 4 - 100% TIẾNG NHẬT)
// =========================================================================

export const N5_CHOUKAI_QUESTIONS: JLPTQuestion[] = [
  // --- MONDAI 1: 課題理解 (8 câu - Hành động tiếp theo / Nhiệm vụ) ---
  {
    id: 'n5-c-1',
    level: 'N5',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    choukaiIllustration: {
      type: 'choice_diagrams',
      title: '問題1: 男の学生の次の行動',
      caption: '問題用紙に印刷された4つの行動イラスト (4 hình minh họa hành động trên đề thi)',
      visualChoices: [
        { num: 1, title: '黒板を拭く', icon: '🧽', description: 'Cầm khăn lau sạch bảng lớp', badge: '正解' },
        { num: 2, title: 'ごみを捨てる', icon: '🗑️', description: 'Cầm túi rác đem đi vứt' },
        { num: 3, title: '教室を出る', icon: '🚪', description: 'Mở cửa đi ra ngoài phòng' },
        { num: 4, title: '先生を呼ぶ', icon: '👨‍🏫', description: 'Đi tìm gọi thầy giáo' }
      ]
    },
    passageOrScript: `女の学生と 男の学生が 話しています。男の学生は これから 何を しますか。

女の学生：山田くん、教室の 掃除、手伝ってくれない？
男の学生：いいよ。何を すれば いい？
女の学生：じゃあ、黒板を きれいに 拭いてくれる？ わたしは ごみを 捨てるから。
男の学生：わかった。すぐ やるよ。

質問：男の学生は これから 何を しますか。`,
    question: '男の学生は これから 何を しますか。',
    options: [
      { id: 'A', text: '黒板を 拭きます。', isCorrect: true, analysis: 'ĐÚNG: Bạn nữ nhờ "じゃあ、黒板を きれいに 拭いてくれる？" và nam đồng ý.' },
      { id: 'B', text: 'ごみを 捨てます。', isCorrect: false, analysis: 'SAI: Bạn nữ là người đi vứt rác.' },
      { id: 'C', text: '教室を 出ます。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '先生を 呼びます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe yêu cầu "黒板を拭いてくれる" -> Chọn ngay hành động lau bảng.',
    relatedKnowledge: 'Hội thoại nhờ vả thường gặp trong Mondai 1 N5.'
  },
  {
    id: 'n5-c-2',
    level: 'N5',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    choukaiIllustration: {
      type: 'choice_diagrams',
      title: '問題1: 女の人のピクニックの持ち物',
      caption: '問題用紙に描かれた持ち物イラスト (4 đồ vật chuẩn bị mang đi dã ngoại)',
      visualChoices: [
        { num: 1, title: 'おにぎり・お茶', icon: '🍙🍵', description: 'Cơm nắm Onigiri và trà xanh', badge: '正解' },
        { num: 2, title: '果物・お菓子', icon: '🍎🍪', description: 'Túi hoa quả và bánh kẹo (Nam mang)' },
        { num: 3, title: 'カメラ', icon: '📷', description: 'Máy ảnh chụp kỷ niệm (Nam mang)' },
        { num: 4, title: 'お弁当・カメラ', icon: '🍱📷', description: 'Hộp cơm bento và máy ảnh' }
      ]
    },
    passageOrScript: `男の人と 女の人が 話しています。女の人は あした 何を 持って行きますか。

男の人：あしたの ピクニックの 準備、どうする？
女の人は：わたしが おにぎりと お茶を 用意するね。
男の人：ありがとう。じゃあ、果物と お菓子は ぼくが 買って行くよ。
女の人：カメラも 持って行く？
男の人：うん、カメラは ぼくが 持って行くから 大丈夫。

質問：女の人は あした 何を 持って行きますか。`,
    question: '女の人は あした 何を 持って行きますか。',
    options: [
      { id: 'A', text: 'おにぎりと お茶', isCorrect: true, analysis: 'ĐÚNG: Người nữ chủ động nhận "わたしが おにぎりと お茶を 用意するね".' },
      { id: 'B', text: '果物と お菓子', isCorrect: false, analysis: 'SAI: Người nam phụ trách mua.' },
      { id: 'C', text: 'カメラ', isCorrect: false, analysis: 'SAI: Người nam mang máy ảnh.' },
      { id: 'D', text: 'お弁当と カメラ', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Phân định rõ ai mang đồ gì: Nữ nhận cơm nắm & trà, nam mang hoa quả và máy ảnh.',
    relatedKnowledge: 'Phân loại chủ ngữ trong câu nói chuẩn bị đồ đạc.'
  },
  {
    id: 'n5-c-3',
    level: 'N5',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    choukaiIllustration: {
      type: 'choice_diagrams',
      title: '問題1: 教科書のページ範囲',
      caption: '問題用紙のページ指定 (Phạm vi trang sách giáo viên yêu cầu)',
      visualChoices: [
        { num: 1, title: '25〜26 ページ', icon: '📖', description: 'Trang 25-26 (Đã học hôm qua)' },
        { num: 2, title: '27〜28 ページ', icon: '📖', description: 'Trang 27-28 (Bài đọc hôm nay)', badge: '正解' },
        { num: 3, title: '29 ページ', icon: '✍️', description: 'Trang 29 (Bài tập về nhà làm)' },
        { num: 4, title: '全ページ', icon: '📚', description: 'Toàn bộ bài học' }
      ]
    },
    passageOrScript: `先生が 生徒に 話しています。生徒は 今日、どこを 勉強しますか。

先生：みなさん、教科書の 25ページを 開けてください。昨日は 26ページまで やりましたね。今日は 27ページと 28ページを 読みます。29ページは 宿題ですから、家で やってください。

質問：生徒は 今日、どこを 勉強しますか。`,
    question: '生徒は 今日、どこを 勉強しますか。',
    options: [
      { id: 'A', text: '25ページと 26ページ', isCorrect: false, analysis: 'SAI: Đã học hôm qua.' },
      { id: 'B', text: '27ページと 28ページ', isCorrect: true, analysis: 'ĐÚNG: Giáo viên nói rõ "今日は 27ページと 28ページを 読みます".' },
      { id: 'C', text: '29ページ', isCorrect: false, analysis: 'SAI: Đó là bài tập về nhà.' },
      { id: 'D', text: '全部の ページ', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt từ "今日は" -> trang 27 và 28.',
    relatedKnowledge: 'Bắt mốc thời gian: 昨日 vs 今日 vs 宿題.'
  },
  {
    id: 'n5-c-4',
    level: 'N5',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    choukaiIllustration: {
      type: 'choice_diagrams',
      title: '問題1: 薬を飲むタイミング',
      caption: '処方箋イラスト (Thời điểm uống thuốc theo hướng dẫn bác sĩ)',
      visualChoices: [
        { num: 1, title: '食前 ＋ 就寝前', icon: '🍽️💊', description: 'Trước bữa ăn & trước ngủ' },
        { num: 2, title: '食後 ＋ 就寝前', icon: '☕💊', description: 'Sau bữa ăn 3 lần & trước khi ngủ', badge: '正解' },
        { num: 3, title: '食前のみ', icon: '🥣💊', description: 'Chỉ uống trước khi ăn' },
        { num: 4, title: '朝 起きてすぐ', icon: '🌅💊', description: 'Uống ngay khi thức dậy' }
      ]
    },
    passageOrScript: `病院で 医者と 女の人が 話しています。女の人は いつ 薬を 飲みますか。

医者：風邪ですね。この 薬を 1日に 3回、飲んでください。
女の人：ご飯の 前ですか、後ですか。
医者：ご飯を 食べた 後に 飲んでください。寝る 前にも 1つ 飲んでくださいね。

質問：女の人は 薬を いつ 飲みますか。`,
    question: '女の人は 薬を いつ 飲みますか。',
    options: [
      { id: 'A', text: 'ご飯の 前と 寝る 前', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: 'ご飯の 後と 寝る 前', isCorrect: true, analysis: 'ĐÚNG: Bác sĩ dặn sau khi ăn (ご飯を食べた後) và trước khi đi ngủ (寝る前).' },
      { id: 'C', text: 'ご飯の 前だけ', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '朝 起きて すぐ', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt cặp từ: ご飯の後 (sau ăn) + 寝る前 (trước khi ngủ).',
    relatedKnowledge: 'Cách chỉ dẫn uống thuốc thường gặp trong hội thoại y tế.'
  },
  {
    id: 'n5-c-5',
    level: 'N5',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    choukaiIllustration: {
      type: 'choice_diagrams',
      title: '問題1: 乗車ホーム番線',
      caption: '駅のホーム案内板イラスト (Sơ đồ biển báo ga tàu Tokyo)',
      visualChoices: [
        { num: 1, title: '1番線 ホーム', icon: '🚉', description: 'Đường ray số 1' },
        { num: 2, title: '2番線 ホーム', icon: '🚉', description: 'Đường ray số 2' },
        { num: 3, title: '3番線 ホーム', icon: '🚆', description: 'Đường ray số 3 (Tàu xuất phát trước)', badge: '正解' },
        { num: 4, title: '4番線 ホーム', icon: '🚉', description: 'Đường ray số 4' }
      ]
    },
    passageOrScript: `駅で 男の人と 駅員が 話しています。男の人は 何番の 電車に 乗りますか。

男の人：すみません。東京駅へ 行きたいんですが、どの 電車ですか。
駅員：東京行きですね。3番線と 4番線ですが、今の 時間は 3番線の 電車が 先に 出ますよ。
男の人：3番線ですね。わかりました。ありがとうございます。

質問：男の人は 何番の 電車に 乗りますか。`,
    question: '男の人は 何番の 電車に 乗りますか。',
    options: [
      { id: 'A', text: '1番線', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '2番線', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: '3番線', isCorrect: true, analysis: 'ĐÚNG: Nhân viên dặn "3番線の電車が先に出ますよ".' },
      { id: 'D', text: '4番線', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt từ "先に出ます" (xuất phát trước) ở đường ray số 3.',
    relatedKnowledge: 'Hội thoại hỏi đường ray tàu điện ga xe lửa.'
  },
  {
    id: 'n5-c-6',
    level: 'N5',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    choukaiIllustration: {
      type: 'choice_diagrams',
      title: '問題1: 時計の針の時刻',
      caption: '時計イラスト (Các mặt đồng hồ hiển thị giờ hẹn tại ga)',
      visualChoices: [
        { num: 1, title: '1時50分 (1:50)', icon: '🕐', description: '1 giờ 50 phút' },
        { num: 2, title: '2時00分 (2:00)', icon: '🕑', description: '2 giờ đúng (Giờ hiện tại)' },
        { num: 3, title: '2時10分 (2:10)', icon: '🕑', description: '2 giờ 10 phút (2:00 + 10分)', badge: '正解' },
        { num: 4, title: '2時30分 (2:30)', icon: '🕝', description: '2 giờ 30 phút' }
      ]
    },
    passageOrScript: `女の人と 男の人が 電話で 話しています。男の人は 何時に 駅に 着きますか。

女の人：もしもし、田中さん。今 どこですか。
男の人：今、電車の中です。あと 10分で 着きます。
女の人：今 2時ですから、2時10分ですね。
男の人：はい、そうです。駅の 改札の前で 待っていてください。

質問：男の人は 何時に 駅に 着きますか。`,
    question: '男の人は 何時に 駅に 着きますか。',
    options: [
      { id: 'A', text: '1時50分', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '2時', isCorrect: false, analysis: 'SAI: Hiện tại là 2h.' },
      { id: 'C', text: '2時10分', isCorrect: true, analysis: 'ĐÚNG: Hiện tại 2h, còn 10 phút nữa đến -> 2h10.' },
      { id: 'D', text: '2時30分', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hiện tại 2h + 10 phút = 2h10.',
    relatedKnowledge: 'Tính toán giờ giấc đơn giản qua điện thoại.'
  },
  {
    id: 'n5-c-7',
    level: 'N5',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 7
    },
    choukaiIllustration: {
      type: 'choice_diagrams',
      title: '問題1: 男の子の行動順序',
      caption: '男の子の行動イラスト (Hành động nào cậu bé cần làm trước tiên)',
      visualChoices: [
        { num: 1, title: 'ご飯を食べる', icon: '🍚', description: 'Ngồi vào bàn ăn trưa' },
        { num: 2, title: '手をきれいに洗う', icon: '🧼🚿', description: 'Rửa tay bằng xà phòng trước', badge: '正解' },
        { num: 3, title: '宿題をする', icon: '📝', description: 'Ngồi vào bàn làm bài' },
        { num: 4, title: 'テレビを見る', icon: '📺', description: 'Mở tivi xem phim' }
      ]
    },
    passageOrScript: `母と 男の子が 話しています。男の子は これから 何を しますか。

母：たけし、お昼ご飯が できましたよ。
男の子：はーい。今 行く。
母：あ、先に 手を きれいに 洗ってね。
男の子：うん、わかった。

質問：男の子は これから まず 何を しますか。`,
    question: '男の子は これから まず 何を しますか。',
    options: [
      { id: 'A', text: 'ご飯を 食べます。', isCorrect: false, analysis: 'SAI: Phải rửa tay trước.' },
      { id: 'B', text: '手を 洗います。', isCorrect: true, analysis: 'ĐÚNG: Mẹ bảo "先に 手を きれいに 洗ってね".' },
      { id: 'C', text: '宿題を します。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'テレビを 見ます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt từ "先に" (trước tiên) -> rửa tay.',
    relatedKnowledge: 'Từ khóa thứ tự thực hiện hành động: 先に, まず.'
  },
  {
    id: 'n5-c-8',
    level: 'N5',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 8
    },
    choukaiIllustration: {
      type: 'choice_diagrams',
      title: '問題1: 借りる本の冊数',
      caption: 'カウンターの冊数イラスト (Số lượng sách được phép mượn về)',
      visualChoices: [
        { num: 1, title: '1 冊', icon: '📕', description: 'Chỉ mượn 1 cuốn' },
        { num: 2, title: '3 冊', icon: '📚', description: 'Mượn 3 cuốn sách đọc thông thường', badge: '正解' },
        { num: 3, title: '4 冊', icon: '📚📕', description: '3 sách + 1 từ điển (từ điển không cho mượn)' },
        { num: 4, title: '5 冊', icon: '📚📚', description: 'Hạn mức tối đa 5 cuốn' }
      ]
    },
    passageOrScript: `図書館で 男の人と 係の人が 話しています。男の人は 何冊 本を 借りますか。

男の人：すみません。この 本を 借りたいです。
係の人：はい。一度に 5冊まで 借りられますよ。
男の人：じゃあ、この 3冊と、あちらの 辞書を 1冊 お願いします。
係の人：あ、辞書は ここで 見るだけで、借りられません。
男の人：あ、そうですか。では、この 3冊だけに します。

質問：男の人は 何冊 本を 借りますか。`,
    question: '男の人は 何冊 本を 借りますか。',
    options: [
      { id: 'A', text: '1冊', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '3冊', isCorrect: true, analysis: 'ĐÚNG: Từ điển không được mượn nên chỉ mượn 3 cuốn sách kia.' },
      { id: 'C', text: '4冊', isCorrect: false, analysis: 'SAI: Bị trừ cuốn từ điển.' },
      { id: 'D', text: '5冊', isCorrect: false, analysis: 'SAI: Đó là số lượng tối đa cho phép.' }
    ],
    speed30sTip: 'Bắt câu chốt "では、この 3冊だけに します".',
    relatedKnowledge: 'Lượng từ đếm sách: 冊 (さつ).'
  },

  // --- MONDAI 2: ポイント理解 (7 câu - Nắm bắt điểm then chốt / Lý do / Sở thích) ---
  {
    id: 'n5-c-9',
    level: 'N5',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `男の人と 女の人が 話しています。女の人は どうして 昨日 学校を 休みましたか。

男の人：木村さん、昨日は どうしたの？ 学校に 来なかったね。
女の人：うん、朝 起きたら 頭が すごく 痛くて、熱も あったの。
男の人：そうだったんだ。今は 大丈夫？
女の人：うん、一日 病院で もらった 薬を 飲んで 寝ていたから、もう すっかり よくなったよ。

質問：女の人は どうして 昨日 学校を 休みましたか。`,
    question: '女の人は どうして 昨日 学校を 休みましたか。',
    options: [
      { id: 'A', text: '旅行に 行ったから', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '頭が 痛くて 熱が あったから', isCorrect: true, analysis: 'ĐÚNG: "頭が すごく 痛くて、熱も あったの".' },
      { id: 'C', text: 'アルバイトが 忙しかったから', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '友達と 遊んだから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe lý do nghỉ ốm: đau đầu và sốt.',
    relatedKnowledge: 'Cách diễn đạt lý do ốm đau: 頭が痛い, 熱がある.'
  },
  {
    id: 'n5-c-10',
    level: 'N5',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `店で 男の人と 店員が 話しています。男の人は どの シャツを 買いますか。

男の人：すみません。この 青い シャツを 見せてください。
店員：はい。サイズは S、M、Lが ございます。
男の人：Mサイズを 着てみても いいですか。
店員：どうぞ。……いかがですか。
男の人：ちょっと 小さいですね。Lサイズは ありますか。
店員：はい、こちらです。
男の人：あ、ちょうど いいです。これにします。

質問：男の人は どの シャツを 買いますか。`,
    question: '男の人は どの シャツを 買いますか。',
    options: [
      { id: 'A', text: '青い Sサイズの シャツ', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '青い Mサイズの シャツ', isCorrect: false, analysis: 'SAI: M bị chật.' },
      { id: 'C', text: '青い Lサイズの シャツ', isCorrect: true, analysis: 'ĐÚNG: Sau khi thử M thấy nhỏ, đổi sang L vừa vặn và quyết định mua.' },
      { id: 'D', text: '白い Lサイズの シャツ', isCorrect: false, analysis: 'SAI: Áo màu xanh (青い).' }
    ],
    speed30sTip: 'Theo dõi sự thay đổi: Thử M chật -> L vừa vặn -> chọn L.',
    relatedKnowledge: 'Hội thoại mua sắm quần áo và thử đồ (着てみる).'
  },
  {
    id: 'n5-c-11',
    level: 'N5',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `女の人が 話しています。女の人の 好きな 食べ物は 何ですか。

女の人：わたしは 甘い ものが 大好きです。ケーキや チョコレートを よく 食べます。果物も 好きですが、一番 好きなのは アイスクリームです。暑い 夏はもちろん、寒い 冬にも 毎日 食べますよ。

質問：女の人が 一番 好きな 食べ物は 何ですか。`,
    question: '女の人が 一番 好きな 食べ物は 何ですか。',
    options: [
      { id: 'A', text: 'ケーキ', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: 'チョコレート', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: '果物', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'アイスクリーム', isCorrect: true, analysis: 'ĐÚNG: Nhân vật nói "一番 好きなのは アイスクリームです".' }
    ],
    speed30sTip: 'Bắt từ khóa cực độ "一番好きなのは...".',
    relatedKnowledge: 'Từ chỉ mức độ cao nhất: 一番 (いちばん).'
  },
  {
    id: 'n5-c-12',
    level: 'N5',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `男の人と 女の人が 話しています。二人は どこで 会いますか。

男の人：今週の 日曜日、映画を 見に 行きませんか。
女の人：いいですね。何時に 会いましょうか。
男の人：2時に 映画館の 前で どうですか。
女の人：映画館の 前は 人が 多いですから、駅の 西口で 会いませんか。
男の人：わかりました。じゃあ、そうしましょう。

質問：二人は どこで 会いますか。`,
    question: '二人は どこで 会いますか。',
    options: [
      { id: 'A', text: '映画館の 前', isCorrect: false, analysis: 'SAI: Người nam đề xuất nhưng người nữ từ chối vì đông người.' },
      { id: 'B', text: '駅の 西口', isCorrect: true, analysis: 'ĐÚNG: Người nữ hẹn ở cửa Tây nhà ga và cả hai thống nhất.' },
      { id: 'C', text: '駅の 東口', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '喫茶店', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bẫy đề xuất: rạp phim đông người -> đổi địa điểm sang cửa Tây ga (駅の西口).',
    relatedKnowledge: 'Các cửa ở ga tàu: 西口 (cửa tây), 東口 (cửa đông), 南口, 北口.'
  },
  {
    id: 'n5-c-13',
    level: 'N5',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `留学生の 男の人と 日本人の 友達が 話しています。男の人は どうやって 大学へ 来ていますか。

友達：スミスくんは 家から 大学まで 何で 来ているの？
男の人：自転車で 来ています。家から 15分くらいです。
友達：雨の 日も 自転車？
男の人：いいえ、雨の 日は バスに 乗ります。でも 今日は いい 天気ですから、自転車で 来ました。

質問：男の人は 今日、何で 大学へ 来ましたか。`,
    question: '男の人は 今日、何で 大学へ 来ましたか。',
    options: [
      { id: 'A', text: '電車', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: 'バス', isCorrect: false, analysis: 'SAI: Ngày mưa mới đi xe buýt.' },
      { id: 'C', text: '自転車', isCorrect: true, analysis: 'ĐÚNG: Hôm nay trời đẹp nên đi xe đạp (今日は いい 天気ですから、自転車で 来ました).' },
      { id: 'D', text: '歩いて', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi ngày hôm nay (今日) -> trời đẹp nên đi xe đạp.',
    relatedKnowledge: 'Phương tiện giao thông đi kèm trợ từ で.'
  },
  {
    id: 'n5-c-14',
    level: 'N5',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `女の人と 男の人が 話しています。男の人の 部屋には 何が ありますか。

女の人：田中さんの 新しい 部屋は どうですか。
男の人：広くて 静かですよ。
女の人：テレビや 冷蔵庫は もう 買いましたか。
男の人：テレビは 買いましたが、冷蔵庫は まだです。明日 届きます。

質問：男の人の 部屋には 今、何が ありますか。`,
    question: '男の人の 部屋には 今、何が ありますか。',
    options: [
      { id: 'A', text: 'テレビだけ', isCorrect: true, analysis: 'ĐÚNG: Tivi đã mua rồi, còn tủ lạnh ngày mai mới giao tới.' },
      { id: 'B', text: '冷蔵庫だけ', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'テレビと 冷蔵庫', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '何も ない', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Phân biệt "買いました" (đã có) vs "まだです・明日届きます" (chưa có).',
    relatedKnowledge: 'Thời điểm hiện tại (今) so với tương lai (明日).'
  },
  {
    id: 'n5-c-15',
    level: 'N5',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 7
    },
    passageOrScript: `男の人と 女の人が 話しています。二人は 昼ご飯に 何を 食べますか。

男の人：もう 12時ですね。お昼を 食べに行きませんか。
女の人：いいですね。何に しますか。
男の人：ラーメンは どうですか。近くに 美味しい 店が ありますよ。
女の人：昨日の 夜も ラーメンでしたから、今日は うどんか お蕎麦が いいです。
男の人：そうですか。じゃあ、駅前の お蕎麦屋さんに 行きましょう。

質問：二人は 昼ご飯に 何を 食べますか。`,
    question: '二人は 昼ご飯に 何を 食べますか。',
    options: [
      { id: 'A', text: 'ラーメン', isCorrect: false, analysis: 'SAI: Bạn nữ đã ăn tối qua.' },
      { id: 'B', text: 'お蕎麦', isCorrect: true, analysis: 'ĐÚNG: Chốt đi quán mì soba trước ga (駅前の お蕎麦屋さん).' },
      { id: 'C', text: 'カレー', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '寿司', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe câu chốt cuối cùng: "じゃあ、駅前の お蕎麦屋さんに 行きましょう".',
    relatedKnowledge: 'Từ chối món ăn và đưa ra đề xuất thay thế.'
  },

  // --- MONDAI 3: 発話表現 (5 câu - Nói gì trong tình huống này) ---
  {
    id: 'n5-c-16',
    level: 'N5',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 発話表現',
      mondaiInstruction: '問題3では、絵を見ながら質問を聞いてください。矢印の人は何と言いますか。1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    choukaiIllustration: {
      type: 'arrow_scene',
      title: '問題3: 朝の学校での挨拶',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      speakerWithArrow: '矢印（➡）の人: 登校した生徒',
      sceneDescription: '朝、学校の廊下で先生に出会った場面。生徒が立ち止まり、先生に向かってお辞儀をしながら挨拶をします。',
      visualChoices: [
        { num: 1, title: 'おはようございます。', description: 'Chào buổi sáng lễ phép' },
        { num: 2, title: 'こんにちは。', description: 'Chào buổi trưa chiều' },
        { num: 3, title: 'こんばんは。', description: 'Chào buổi tối' }
      ]
    },
    passageOrScript: `朝、先生に 会いました。何と 言いますか。

1：おはようございます。
2：こんにちは。
3：こんばんは。`,
    question: '朝、先生に 会いました。何と 言いますか。',
    options: [
      { id: 'A', text: 'おはようございます。', isCorrect: true, analysis: 'ĐÚNG: Chào buổi sáng lịch sự với thầy cô.' },
      { id: 'B', text: 'こんにちは。', isCorrect: false, analysis: 'SAI: Chào ban ngày/trưa chiều.' },
      { id: 'C', text: 'こんばんは。', isCorrect: false, analysis: 'SAI: Chào buổi tối.' },
      { id: 'D', text: 'さようなら。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Buổi sáng (朝) chào thầy cô dùng おはようございます.',
    relatedKnowledge: 'Lời chào theo thời điểm trong ngày.'
  },
  {
    id: 'n5-c-17',
    level: 'N5',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 発話表現',
      mondaiInstruction: '問題3では、絵を見ながら質問を聞いてください。矢印の人は何と言いますか。1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    imageUrl: '/src/assets/images/jlpt_n5_mondai3_1790500846004.jpg',
    choukaiIllustration: {
      type: 'arrow_scene',
      title: '問題3: 食事終了の挨拶',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      imageUrl: '/src/assets/images/jlpt_n5_mondai3_1790500846004.jpg',
      speakerWithArrow: '矢印（➡）の人: ご飯を食べ終わった生徒',
      sceneDescription: '食卓で料理をきれいに食べ終え、お箸を置いて両手を合わせている場面。矢印の生徒は何と言いますか。',
      visualChoices: [
        { num: 1, title: 'いただきます。', description: 'Nói trước khi ăn' },
        { num: 2, title: 'ごちそうさまでした。', description: 'Nói cảm ơn sau khi ăn xong bữa' },
        { num: 3, title: 'どういたしまして。', description: 'Không có chi' }
      ]
    },
    passageOrScript: `ご飯を 食べ終わりました。何と 言いますか。

1：いただきます。
2：ごちそうさまでした。
3：どういたしまして。`,
    question: 'ご飯を 食べ終わりました。何と 言いますか。',
    options: [
      { id: 'A', text: 'いただきます。', isCorrect: false, analysis: 'SAI: Nói trước khi ăn.' },
      { id: 'B', text: 'ごちそうさまでした。', isCorrect: true, analysis: 'ĐÚNG: Nói sau khi ăn xong bữa.' },
      { id: 'C', text: 'どういたしまして。', isCorrect: false, analysis: 'SAI: Không có chi.' },
      { id: 'D', text: 'いってきます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Sau khi ăn xong: ごちそうさまでした.',
    relatedKnowledge: 'Văn hóa chào hỏi trong bữa ăn của người Nhật.'
  },
  {
    id: 'n5-c-18',
    level: 'N5',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 発話表現',
      mondaiInstruction: '問題3では、絵を見ながら質問を聞いてください。矢印の人は何と言いますか。1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    choukaiIllustration: {
      type: 'arrow_scene',
      title: '問題3: 家を出るときの挨拶',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      speakerWithArrow: '矢印（➡）の人: 玄関から出かける人',
      sceneDescription: '朝、カバンを持って玄関で靴を履き、ドアを開けて出かける場面。見送る家族に向かって矢印の人は何と言いますか。',
      visualChoices: [
        { num: 1, title: 'いってきます。', description: 'Tôi đi đây rồi sẽ về' },
        { num: 2, title: 'いってらっしゃい。', description: 'Người ở nhà nói với người đi' },
        { num: 3, title: 'おかえりなさい。', description: 'Mừng bạn đã về' }
      ]
    },
    passageOrScript: `家を 出ます。家族に 何と 言いますか。

1：いってきます。
2：いってらっしゃい。
3：おかえりなさい。`,
    question: '家を 出ます。家族に 何と 言いますか。',
    options: [
      { id: 'A', text: 'いってきます。', isCorrect: true, analysis: 'ĐÚNG: Người đi ra khỏi nhà nói "いってきます" (Tôi đi đây).' },
      { id: 'B', text: 'いってらっしゃい。', isCorrect: false, analysis: 'SAI: Người ở nhà nói với người đi.' },
      { id: 'C', text: 'おかえりなさい。', isCorrect: false, analysis: 'SAI: Mừng bạn đã về.' },
      { id: 'D', text: 'ただいま。', isCorrect: false, analysis: 'SAI: Khi vừa về nhà.' }
    ],
    speed30sTip: 'Người rời nhà đi: いってきます (Đi rồi về).',
    relatedKnowledge: 'Cặp chào hỏi khi ra khỏi nhà và về nhà.'
  },
  {
    id: 'n5-c-19',
    level: 'N5',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 発話表現',
      mondaiInstruction: '問題3では、絵を見ながら質問を聞いてください。矢印の人は何と言いますか。1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    choukaiIllustration: {
      type: 'arrow_scene',
      title: '問題3: 友達にペンを借りる場面',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      speakerWithArrow: '矢印（➡）の人: ペンを借りたい生徒',
      sceneDescription: '教室で筆記用具を忘れ、ノートを書くために隣の席の友達に手を伸ばしてペンをお願いする場面。',
      visualChoices: [
        { num: 1, title: 'ペンを 貸してください。', description: 'Làm ơn cho tôi mượn bút' },
        { num: 2, title: 'ペンを あげます。', description: 'Tôi tặng bạn cây bút' },
        { num: 3, title: 'ペンを 買いますか。', description: 'Bạn có mua bút không?' }
      ]
    },
    passageOrScript: `友達の ペンを 借りたいです。何と 言いますか。

1：ペンを 貸してください。
2：ペンを あげます。
3：ペンを 買いますか。`,
    question: '友達の ペンを 借りたいです。何と 言いますか。',
    options: [
      { id: 'A', text: 'ペンを 貸してください。', isCorrect: true, analysis: 'ĐÚNG: Nhờ bạn cho mượn bút (貸してください).' },
      { id: 'B', text: 'ペンを あげます。', isCorrect: false, analysis: 'SAI: Cho bạn bút.' },
      { id: 'C', text: 'ペンを 買いますか。', isCorrect: false, analysis: 'SAI: Bạn có mua bút không?' },
      { id: 'D', text: 'ペンを 書いてください。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Muốn mượn đồ: 貸してください (Hãy cho tôi mượn).',
    relatedKnowledge: 'Động từ 貸す (cho mượn) vs 借りる (mượn).'
  },
  {
    id: 'n5-c-20',
    level: 'N5',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 発話表現',
      mondaiInstruction: '問題3では、絵を見ながら質問を聞いてください。矢印の人は何と言いますか。1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    choukaiIllustration: {
      type: 'arrow_scene',
      title: '問題3: 足を踏んでしまったお詫び',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      speakerWithArrow: '矢印（➡）の人: 足を踏んでしまった乗客',
      sceneDescription: '満員電車の中で、揺れた拍子にうっかり前の人の足を踏んでしまい、慌てて頭を下げる場面。',
      visualChoices: [
        { num: 1, title: 'ありがとうございます。', description: 'Cảm ơn' },
        { num: 2, title: 'すみません。', description: 'Xin lỗi khi làm phiền / dẫm vào chân' },
        { num: 3, title: 'おねがいします。', description: 'Làm ơn' }
      ]
    },
    passageOrScript: `相手の 足を 踏んでしまいました。何と 言いますか。

1：ありがとうございます。
2：すみません。
3：おねがいします。`,
    question: '相手の 足を 踏んでしまいました。何と 言いますか。',
    options: [
      { id: 'A', text: 'ありがとうございます。', isCorrect: false, analysis: 'SAI: Cảm ơn.' },
      { id: 'B', text: 'すみません。', isCorrect: true, analysis: 'ĐÚNG: Xin lỗi khi giẫm vào chân người khác.' },
      { id: 'C', text: 'おねがいします。', isCorrect: false, analysis: 'SAI: Làm ơn.' },
      { id: 'D', text: 'しつれいしました。', isCorrect: false, analysis: 'SAI: Dùng khi rời đi/thất lễ công việc.' }
    ],
    speed30sTip: 'Gây lỗi vô tình -> xin lỗi bằng すみません.',
    relatedKnowledge: 'Lời xin lỗi trong giao tiếp thường nhật.'
  },

  // --- MONDAI 4: 即時応答 (10 câu - Phản xạ đối đáp nhanh) ---
  {
    id: 'n5-c-21',
    level: 'N5',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `お茶、もう 一杯 いかがですか。

1：はい、いただきます。
2：いいえ、お茶です。
3：どういたしまして。`,
    question: 'お茶、もう 一杯 いかがですか。',
    options: [
      { id: 'A', text: 'はい、いただきます。', isCorrect: true, analysis: 'ĐÚNG: Đồng ý nhận thêm một tách trà lịch sự.' },
      { id: 'B', text: 'いいえ、お茶です。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'どういたしまして。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'ごちそうさまでした。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Mời đồ uống "〜いかがですか" -> Đáp "はい、いただきます".',
    relatedKnowledge: 'Lời mời và cách đón nhận lịch sự.'
  },
  {
    id: 'n5-c-22',
    level: 'N5',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `昨日の テスト、難しかったですね。

1：いいえ、難しかったです。
2：ええ、本当に 難しかったですね。
3：はい、上手でしたよ。`,
    question: '昨日の テスト、難しかったですね。',
    options: [
      { id: 'A', text: 'いいえ、難しかったです。', isCorrect: false, analysis: 'SAI: Mâu thuẫn.' },
      { id: 'B', text: 'ええ、本当に 難しかったですね。', isCorrect: true, analysis: 'ĐÚNG: Đồng tình với nhận định của đối phương.' },
      { id: 'C', text: 'はい、上手でしたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'テストです。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi xác nhận cảm thán "〜ね" -> Đồng tình "ええ、本当に〜ですね".',
    relatedKnowledge: 'Đồng tình trong đối thoại tiếng Nhật.'
  },
  {
    id: 'n5-c-23',
    level: 'N5',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `田中さん、日曜日 どこかへ 行きましたか。

1：はい、どこへも 行きませんでした。
2：はい、友達と 会いました。
3：いいえ、行きませんでした。`,
    question: '田中さん、日曜日 どこかへ 行きましたか。',
    options: [
      { id: 'A', text: 'はい、どこへも 行きませんでした。', isCorrect: false, analysis: 'SAI: Mâu thuẫn はい vs 行きませんでした.' },
      { id: 'B', text: 'いいえ、どこへも 行きませんでした。', isCorrect: false, analysis: 'SAI: Không có phương án này.' },
      { id: 'C', text: 'いいえ、行きませんでした。', isCorrect: true, analysis: 'ĐÚNG: Phủ định chuẩn câu hỏi có đi đâu không.' },
      { id: 'D', text: '電車で 行きます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Trả lời ngắn gọn phủ định quá khứ: いいえ、行きませんでした.',
    relatedKnowledge: 'Câu hỏi nghi vấn từ + か (どこかへ).'
  },
  {
    id: 'n5-c-24',
    level: 'N5',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `その 辞書、ちょっと 見ても いいですか。

1：ええ、どうぞ。
2：いいえ、見ません。
3：どういたしまして。`,
    question: 'その 辞書、ちょっと 見ても いいですか。',
    options: [
      { id: 'A', text: 'ええ、どうぞ。', isCorrect: true, analysis: 'ĐÚNG: Đồng ý cho phép đối phương xem: ええ、どうぞ.' },
      { id: 'B', text: 'いいえ、見ません。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'どういたしまして。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'ありがとう。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Xin phép "〜てもいいですか" -> Cho phép "ええ、どうぞ".',
    relatedKnowledge: 'Cấu trúc xin phép và cho phép.'
  },
  {
    id: 'n5-c-25',
    level: 'N5',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `雨が 降って きましたね。

1：そうですね。傘を 持ちましょう。
2：ええ、いい 天気ですね。
3：いいえ、降りませんよ。`,
    question: '雨が 降って きましたね。',
    options: [
      { id: 'A', text: 'そうですね。傘を 持ちましょう。', isCorrect: true, analysis: 'ĐÚNG: Nhận biết trời mưa và đề xuất che ô.' },
      { id: 'B', text: 'ええ、いい 天気ですね。', isCorrect: false, analysis: 'SAI: Mâu thuẫn với mưa.' },
      { id: 'C', text: 'いいえ、降りませんよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '暑いですね。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Trời mưa (雨が降ってきた) -> Che ô (傘).',
    relatedKnowledge: 'Cách phản hồi về hiện tượng thời tiết.'
  },
  {
    id: 'n5-c-26',
    level: 'N5',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `日本料理で 何が 一番 好きですか。

1：天ぷらが 好きです。
2：日本で 食べました。
3：昨日 食べました。`,
    question: '日本料理で 何が 一番 好きですか。',
    options: [
      { id: 'A', text: '天ぷらが 好きです。', isCorrect: true, analysis: 'ĐÚNG: Trả lời đúng món ăn yêu thích nhất (Tempura).' },
      { id: 'B', text: '日本で 食べました。', isCorrect: false, analysis: 'SAI: Trả lời nơi chốn.' },
      { id: 'C', text: '昨日 食べました。', isCorrect: false, analysis: 'SAI: Trả lời thời gian.' },
      { id: 'D', text: '料理を 作ります。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi "何が好きですか" -> Trả lời tên món ăn (天ぷら).',
    relatedKnowledge: 'Mẫu câu hỏi sở thích: 〜が好きです.'
  },
  {
    id: 'n5-c-27',
    level: 'N5',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 7
    },
    passageOrScript: `駅まで どのくらい かかりますか。

1：歩いて 10分くらいです。
2：300円です。
3：電車で 行きます。`,
    question: '駅まで どのくらい かかりますか。',
    options: [
      { id: 'A', text: '歩いて 10分くらいです。', isCorrect: true, analysis: 'ĐÚNG: Trả lời thời gian ước lượng (歩いて10分くらい).' },
      { id: 'B', text: '300円です。', isCorrect: false, analysis: 'SAI: Trả lời tiền.' },
      { id: 'C', text: '電車で 行きます。', isCorrect: false, analysis: 'SAI: Trả lời phương tiện.' },
      { id: 'D', text: '駅です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'どのくらいかかりますか -> Mất bao lâu thời gian -> 10 phút.',
    relatedKnowledge: 'Mẫu câu hỏi lượng thời gian: どのくらい.'
  },
  {
    id: 'n5-c-28',
    level: 'N5',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 8
    },
    passageOrScript: `日本語の 勉強は どうですか。

1：とても 面白いです。
2：毎朝 勉強します。
3：学校で 習います。`,
    question: '日本語の 勉強は どうですか。',
    options: [
      { id: 'A', text: 'とても 面白いです。', isCorrect: true, analysis: 'ĐÚNG: Đánh giá tính chất việc học (rất thú vị).' },
      { id: 'B', text: '毎朝 勉強します。', isCorrect: false, analysis: 'SAI: Trả lời thời điểm.' },
      { id: 'C', text: '学校で 習います。', isCorrect: false, analysis: 'SAI: Trả lời địa điểm.' },
      { id: 'D', text: '先生です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi "どうですか" (như thế nào) -> Trả lời tính từ "とても面白い".',
    relatedKnowledge: 'Mẫu câu hỏi cảm nhận: どうですか.'
  },
  {
    id: 'n5-c-29',
    level: 'N5',
    year: '2015-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 9
    },
    passageOrScript: `この 荷物、重そうですね。手伝いましょうか。

1：すみません、お願いします。
2：はい、重いです。
3：いいえ、手伝います。`,
    question: 'この 荷物、重そうですね。手伝いましょうか。',
    options: [
      { id: 'A', text: 'すみません、お願いします。', isCorrect: true, analysis: 'ĐÚNG: Đáp lại lời đề nghị giúp đỡ lịch sự.' },
      { id: 'B', text: 'はい、重いです。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'いいえ、手伝います。', isCorrect: false, analysis: 'SAI: Ngược vai.' },
      { id: 'D', text: '荷物です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Đề nghị giúp đỡ "手伝いましょうか" -> Nhờ vả "すみません、お願いします".',
    relatedKnowledge: 'Mẫu câu đề nghị làm giúp: 〜ましょうか.'
  },
  {
    id: 'n5-c-30',
    level: 'N5',
    year: '2015-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 10
    },
    passageOrScript: `では、また 明日。

1：さようなら、また 明日。
2：おはようございます。
3：はじめまして。`,
    question: 'では、また 明日。',
    options: [
      { id: 'A', text: 'さようなら、また 明日。', isCorrect: true, analysis: 'ĐÚNG: Lời chào tạm biệt hẹn gặp lại ngày mai.' },
      { id: 'B', text: 'おはようございます。', isCorrect: false, analysis: 'SAI: Chào buổi sáng.' },
      { id: 'C', text: 'はじめまして。', isCorrect: false, analysis: 'SAI: Chào lần đầu gặp.' },
      { id: 'D', text: 'ごめんなさい。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hẹn "また明日" (hẹn ngày mai) -> Đáp "さようなら、また明日".',
    relatedKnowledge: 'Lời chào khi chia tay ra về.'
  }
];
