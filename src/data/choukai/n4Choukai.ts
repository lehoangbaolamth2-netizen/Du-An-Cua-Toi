import { JLPTQuestion } from '../../types';

// =========================================================================
// JLPT N4 CHOUKAI (30 CÂU CHUẨN THI: MONDAI 1 -> MONDAI 4 - 100% TIẾNG NHẬT)
// =========================================================================

export const N4_CHOUKAI_QUESTIONS: JLPTQuestion[] = [
  // --- MONDAI 1: 課題理解 (8 câu - Hành động tiếp theo / Nhiệm vụ) ---
  {
    id: 'n4-c-1',
    level: 'N4',
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
      title: '問題1: 男の人の次の行動',
      caption: '問題用紙の行動指示イラスト (Chuẩn bị phòng họp cho hội nghị ngày mai)',
      visualChoices: [
        { num: 1, title: '机に資料を並べる', icon: '📄📑', description: 'Xếp tài liệu lên các bàn họp', badge: '正解' },
        { num: 2, title: 'PC・プロジェクター準備', icon: '💻📽️', description: 'Tanaka đảm nhiệm cài đặt máy' },
        { num: 3, title: '資料コピー', icon: '🖨️', description: 'Việc đã hoàn tất trước đó' },
        { num: 4, title: '田中さんを呼ぶ', icon: '🗣️', description: 'Đi gọi đồng nghiệp Tanaka' }
      ]
    },
    passageOrScript: `会社で 男の人と 女の人が 話しています。男の人は この後 まず 何を しますか。

男の人：課長、明日の 会議の 資料、コピーが 終わりました。
女の人：ありがとう。じゃあ、会議室の 机の 上に 並べておいてくれる？
男の人：はい、わかりました。パソコンと プロジェクターの 準備も しておきましょうか。
女の人：あ、それは 田中さんが やってくれることになっているから、机の 準備だけ お願い。
男の人：かしこまりました。すぐ やります。

質問：男の人は この後 まず 何を しますか。`,
    question: '男の人は この後 まず 何を しますか。',
    options: [
      { id: 'A', text: '会議室の 机に 資料を 並べます。', isCorrect: true, analysis: 'ĐÚNG: Trưởng phòng dặn "会議室の 机の 上に 並べておいてくれる？" và nhắc chỉ cần chuẩn bị bàn ghế.' },
      { id: 'B', text: 'パソコンと プロジェクターを 準備します。', isCorrect: false, analysis: 'SAI: Tanaka sẽ làm việc này.' },
      { id: 'C', text: '資料を コピーします。', isCorrect: false, analysis: 'SAI: Đã xong rồi.' },
      { id: 'D', text: '田中さんを 呼びます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Loại trừ nhiệm vụ người khác làm (Tanaka phụ trách máy chiếu) -> Chọn xếp tài liệu lên bàn.',
    relatedKnowledge: 'Phân công công việc văn phòng trong JLPT N4.'
  },
  {
    id: 'n4-c-2',
    level: 'N4',
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
      title: '問題1: レポート提出期限',
      caption: 'カレンダー提出締切イラスト (Hạn chót nộp báo cáo cho giảng viên)',
      visualChoices: [
        { num: 1, title: '木曜日の授業後', icon: '📅', description: 'Sau tiết học thứ Năm' },
        { num: 2, title: '金曜日の17:00まで', icon: '⏰', description: 'Trước 5 giờ chiều thứ Sáu', badge: '正解' },
        { num: 3, title: '金曜日の授業前', icon: '🌅', description: 'Trước giờ học thứ Sáu' },
        { num: 4, title: '来週の月曜日', icon: '📆', description: 'Thứ Hai tuần kế tiếp' }
      ]
    },
    passageOrScript: `大学で 女の学生と 先生が 話しています。女の学生は いつまでに レポートを 出さなければ なりませんか。

女の学生：先生、先週 出された レポートですが、締め切りは いつでしたでしょうか。
先生：金曜日の 午後 5時ですよ。
女の学生：あ、今週の 金曜日ですね。木曜日の 授業の ときに 出しても いいですか。
先生：ええ、もちろん 構いませんよ。金曜日の 5時を 過ぎないように 出してくださいね。

質問：女の学生は いつまでに レポートを 出さなければ なりませんか。`,
    question: '女の学生は いつまでに レポートを 出さなければ なりませんか。',
    options: [
      { id: 'A', text: '木曜日の 授業の 後', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '金曜日の 午後 5時まで', isCorrect: true, analysis: 'ĐÚNG: Giáo viên nhắc rõ hạn chót: "金曜日の 午後 5時ですよ / 5時を過ぎないように".' },
      { id: 'C', text: '金曜日の 授業の 前', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '来週の 月曜日', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi hạn chót nộp (締め切り) -> Bắt từ "金曜日の午後5時まで".',
    relatedKnowledge: 'Từ vựng thời hạn: 締め切り, 〜を過ぎないように.'
  },
  {
    id: 'n4-c-3',
    level: 'N4',
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
      title: '問題1: 病院の診察順序',
      caption: '病院フロア案内イラスト (Thứ tự các phòng cần đến tại bệnh viện)',
      visualChoices: [
        { num: 1, title: '1番の窓口', icon: '📝', description: 'Nộp phiếu hỏi bệnh ban đầu' },
        { num: 2, title: '3番の部屋の前', icon: '🚪🩺', description: 'Đợi trước phòng khám bác sĩ', badge: '正解' },
        { num: 3, title: '5番の検査室', icon: '🧪🔬', description: 'Phòng xét nghiệm (nếu cần sau đó)' },
        { num: 4, title: '会計窓口', icon: '💳', description: 'Quầy thanh toán viện phí' }
      ]
    },
    passageOrScript: `病院の 受付で 男の人と 受付の人が 話しています。男の人は 最初に 何番の 部屋へ 行きますか。

男の人：初診なんですが、お願いします。
受付：こちらの 問診票に お名前と 症状を 書いてください。書き終わったら 1番の 窓口へ 出してくださいね。
男の人：はい、書きました。
受付：ありがとうございます。では、まず 3番の 部屋の 前で お待ちください。先生が お呼びします。検査が 必要なら、後で 5番の 検査室へ 行っていただきます。

質問：男の人は 最初に 何番の 部屋へ 行きますか。`,
    question: '男の人は 最初に 何番の 部屋へ 行きますか。',
    options: [
      { id: 'A', text: '1番の 部屋', isCorrect: false, analysis: 'SAI: Đó là quầy nộp phiếu.' },
      { id: 'B', text: '3番の 部屋', isCorrect: true, analysis: 'ĐÚNG: Nhân viên dặn "まず 3番の 部屋の 前で お待ちください".' },
      { id: 'C', text: '5番の 部屋', isCorrect: false, analysis: 'SAI: Nếu cần xét nghiệm thì sau đó mới đi phòng số 5.' },
      { id: 'D', text: '会計の 窓口', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt từ chỉ thứ tự "まず 3番の部屋の前に... 後で 5番へ".',
    relatedKnowledge: 'Từ khóa thứ tự: まず (trước tiên), 後で (sau đó).'
  },
  {
    id: 'n4-c-4',
    level: 'N4',
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
      title: '問題1: 市役所持参物',
      caption: '必要書類イラスト (Giấy tờ cần đem đến ủy ban quận/thành phố)',
      visualChoices: [
        { num: 1, title: '在留カード＋パスポート', icon: '🪪🛂', description: 'Thẻ ngoại kiều và hộ chiếu', badge: '正解' },
        { num: 2, title: '在留カード＋印鑑', icon: '🪪🔴', description: 'Có thể ký tên nên không cần dấu' },
        { num: 3, title: 'パスポート＋写真', icon: '🛂📷', description: 'Ảnh được chụp tại quầy' },
        { num: 4, title: '全種類', icon: '📁', description: 'Đem theo toàn bộ giấy tờ' }
      ]
    },
    passageOrScript: `留学生の 女の人と 男の人が 話しています。女の人は 市役所へ 何を 持って行かなければ なりませんか。

女の人：来週、市役所へ 住所変更に 行くんですが、何が 必要ですか。
男の人：在留カードと パスポートは 絶対に 必要だよ。
女の人：印鑑や 写真も 要りますか。
男の人：サインで 大丈夫だから 印鑑は 要らないよ。写真も 窓口で 取ってくれるから 持って行かなくて いいよ。

質問：女の人は 市役所へ 何を 持って行きますか。`,
    question: '女の人は 市役所へ 何を 持って行きますか。',
    options: [
      { id: 'A', text: '在留カードと パスポート', isCorrect: true, analysis: 'ĐÚNG: Cần thẻ cư trú và hộ chiếu; con dấu và ảnh không cần.' },
      { id: 'B', text: '在留カードと 印鑑', isCorrect: false, analysis: 'SAI: Con dấu không cần.' },
      { id: 'C', text: 'パスポートと 写真', isCorrect: false, analysis: 'SAI: Ảnh chụp tại quầy.' },
      { id: 'D', text: '全部', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Loại trừ đồ vật không cần: 印鑑 (dấu) và 写真 (ảnh) không cần mang.',
    relatedKnowledge: 'Thủ tục hành chính tại cơ quan địa phương (市役所).'
  },
  {
    id: 'n4-c-5',
    level: 'N4',
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
      title: '問題1: 友達のための用事',
      caption: '図書館カウンターイラスト (Hành động nam sinh làm giúp bạn)',
      visualChoices: [
        { num: 1, title: '自分の本返却', icon: '📥', description: 'Việc riêng của nam sinh' },
        { num: 2, title: '本の貸出期間延長', icon: '🔄📖', description: 'Gia hạn thời gian mượn sách', badge: '正解' },
        { num: 3, title: '資料コピー', icon: '📑', description: 'Photo tài liệu báo cáo cá nhân' },
        { num: 4, title: '新刊本を借りる', icon: '📚', description: 'Mượn thêm sách mới' }
      ]
    },
    passageOrScript: `女の学生と 男の学生が 話しています。男の学生は これから 図書館で 何を しますか。

女の学生：今から 図書館へ 行くの？
男の学生：うん、借りていた 本を 返しに 行くんだ。
女の学生：あ、じゃあ、ついでに この 本の 貸出期間を 延長してきてくれない？
男の学生：いいよ。学生証を 預かるね。あと、レポートの 資料も 探したいから、コピーも してくるよ。

質問：男の学生は 図書館で 友達の ために 何を しますか。`,
    question: '男の学生は 図書館で 友達の ために 何を しますか。',
    options: [
      { id: 'A', text: '本を 返します。', isCorrect: false, analysis: 'SAI: Đó là việc của chính bạn nam.' },
      { id: 'B', text: '本の 貸出期間を 延長します。', isCorrect: true, analysis: 'ĐÚNG: Bạn nữ nhờ gia hạn mượn sách (貸出期間を延長する).' },
      { id: 'C', text: '資料を コピーします。', isCorrect: false, analysis: 'SAI: Việc riêng của bạn nam.' },
      { id: 'D', text: '新しい 本を 借ります。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi làm cho bạn (友達のために) -> Gia hạn sách mượn.',
    relatedKnowledge: 'Phân biệt hành động cá nhân vs hành động làm hộ người khác.'
  },
  {
    id: 'n4-c-6',
    level: 'N4',
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
      title: '問題1: レジ決済方法',
      caption: '決済端末イラスト (Hình thức thanh toán tiền tại quầy)',
      visualChoices: [
        { num: 1, title: 'クレジットカード', icon: '💳', description: 'Máy quẹt thẻ đang bị hỏng' },
        { num: 2, title: '電子マネー(スマホ)', icon: '📱📶', description: 'Chạm điện thoại thanh toán', badge: '正解' },
        { num: 3, title: '現金決済', icon: '💴', description: 'Trả bằng tiền mặt' },
        { num: 4, title: '銀行振込', icon: '🏦', description: 'Chuyển khoản qua ngân hàng' }
      ]
    },
    passageOrScript: `店で 男の人と 店員が 話しています。男の人は 代金を どのように 払いますか。

男の人：これ、お願いします。クレジットカードで 払えますか。
店員：申し訳ございません。機械の 故障で、今は 現金か 電子マネーしか 使えません。
男の人：あ、そうですか。じゃあ、スマートフォンで 払います。
店員：かしこまりました。こちらの 画面に タッチしてください。

質問：男の人は 代金を どのように 払いますか。`,
    question: '男の人は 代金を どのように 払いますか。',
    options: [
      { id: 'A', text: 'クレジットカード', isCorrect: false, analysis: 'SAI: Máy hỏng không dùng được thẻ.' },
      { id: 'B', text: '電子マネー（スマートフォン）', isCorrect: true, analysis: 'ĐÚNG: Khách chọn thanh toán qua smartphone/ví điện tử.' },
      { id: 'C', text: '現金', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '銀行振込', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Thẻ tín dụng hỏng -> chuyển sang smartphone (電子マネー).',
    relatedKnowledge: 'Phương thức thanh toán hiện đại tại Nhật Bản.'
  },
  {
    id: 'n4-c-7',
    level: 'N4',
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
      title: '問題1: 資源ごみの収集日',
      caption: 'ゴミ収集カレンダーイラスト (Ngày giờ đem chai lọ rác tái chế ra điểm vứt)',
      visualChoices: [
        { num: 1, title: '火曜日の夜', icon: '🌙', description: 'Không được vứt trước ngày (tránh mèo/chim)' },
        { num: 2, title: '水曜日の朝(8:30前)', icon: '🌅🍾🥫', description: 'Sáng thứ Tư trước 8h30', badge: '正解' },
        { num: 3, title: '月曜日の朝', icon: '🗑️', description: 'Lịch thu gom rác cháy được' },
        { num: 4, title: '木曜日の夜', icon: '🌙', description: 'Đêm thứ Năm' }
      ]
    },
    passageOrScript: `アパートの 前で 管理人と 男の人が 話しています。男の人は 瓶と 缶を いつ ごみ捨て場に 出しますか。

男の人：すみません、瓶と 缶の ごみは いつ 出せば いいですか。
管理人：燃える ごみは 月曜日と 木曜日ですが、瓶と 缶は 水曜日の 朝 8時半までに出してください。
男の人：前日の 夜に 出しても いいですか。
管理人：猫や 鳥が 来ますから、必ず 当日の 朝に 出してくださいね。

質問：男の人は 瓶と 缶を いつ 出しますか。`,
    question: '男の人は 瓶と 缶を いつ 出しますか。',
    options: [
      { id: 'A', text: '火曜日の 夜', isCorrect: false, analysis: 'SAI: Không được vứt trước ngày vì sợ mèo/chim bới.' },
      { id: 'B', text: '水曜日の 朝', isCorrect: true, analysis: 'ĐÚNG: Phải vứt vào đúng sáng thứ Tư trước 8h30.' },
      { id: 'C', text: '月曜日の 朝', isCorrect: false, analysis: 'SAI: Rác cháy được.' },
      { id: 'D', text: '木曜日の 夜', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt yêu cầu "必ず 当日の 朝に 出してください" -> Sáng thứ Tư.',
    relatedKnowledge: 'Quy tắc phân loại rác thải sinh hoạt tại Nhật (ゴミ分別).'
  },
  {
    id: 'n4-c-8',
    level: 'N4',
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
      title: '問題1: 待ち合わせ場所',
      caption: '駅周辺マップイラスト (Địa điểm gặp mặt hẹn hò ngày mai)',
      visualChoices: [
        { num: 1, title: '映画館の前', icon: '🎬', description: 'Trời mưa không tiện đứng' },
        { num: 2, title: '改札の前', icon: '🎫', description: 'Đông người qua lại quá mức' },
        { num: 3, title: '改札外のカフェ', icon: '☕🍰', description: 'Quán cà phê ngay ngoài cổng soát vé', badge: '正解' },
        { num: 4, title: '映画館の中', icon: '🍿', description: 'Bên trong rạp chiếu phim' }
      ]
    },
    passageOrScript: `女の学生と 男の学生が 話しています。二人は どこで 待ち合わせを しますか。

女の学生：明日の 映画、10時半からだから、10時に 映画館の前で いい？
男の学生：明日は 雨が 降るらしいよ。駅の 改札の 前に しない？ 濡れなくて 済むし。
女の学生：そうね。でも 改札は 混んでいるから、改札を 出た ところの カフェに しようよ。
男の学生：うん、それが いいね。じゃあ、そこで。

質問：二人は 明日、どこで 待ち合わせを しますか。`,
    question: '二人は 明日、どこで 待ち合わせを しますか。',
    options: [
      { id: 'A', text: '映画館の 前', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '駅の 改札の 前', isCorrect: false, analysis: 'SAI: Đông người.' },
      { id: 'C', text: '改札を 出た ところの カフェ', isCorrect: true, analysis: 'ĐÚNG: Thống nhất gặp nhau ở quán cafe ngay ngoài cửa soát vé.' },
      { id: 'D', text: '映画館の 中', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe lần đổi ý kiến cuối cùng: Quán cafe ngoài cửa soát vé.',
    relatedKnowledge: 'Từ vựng hẹn gặp: 待ち合わせ, 改札を出たところ.'
  },

  // --- MONDAI 2: ポイント理解 (7 câu - Nắm bắt điểm mấu chốt / Lý do) ---
  {
    id: 'n4-c-9',
    level: 'N4',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `男の人と 女の人が 話しています。女の人は どうして 引っ越しを したいのですか。

男の人：新しい アパートを 探しているんだって？
女の人：うん、今の 部屋、駅から 近くて 便利なんだけどね。
男の人：家賃が 高いの？
女の人：ううん、家賃は 安いんだけど、夜になると 近くの 工場や 電車の 音が うるさくて、よく 眠れないのよ。
男の人：それは 大変だね。静かな 所が いいね。

質問：女の人が 引っ越しを したい 理由は 何ですか。`,
    question: '女の人が 引っ越しを したい 理由は 何ですか。',
    options: [
      { id: 'A', text: '駅から 遠いから', isCorrect: false, analysis: 'SAI: Gần ga.' },
      { id: 'B', text: '家賃が 高いから', isCorrect: false, analysis: 'SAI: Tiền thuê rẻ.' },
      { id: 'C', text: '周りの 音が うるさいから', isCorrect: true, analysis: 'ĐÚNG: Ban đêm ồn ào không ngủ được do tàu và nhà máy.' },
      { id: 'D', text: '部屋が 狭いから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt lý do thật sự: "音が生るさくてよく眠れない".',
    relatedKnowledge: 'Lý do chuyển nhà thường gặp trong JLPT N4.'
  },
  {
    id: 'n4-c-10',
    level: 'N4',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `男の学生と 女の学生が 話しています。二人は どうして 旅行の 日にちを 変えましたか。

男の学生：来週の 土曜日の 京都旅行だけど、日曜日に 変えない？
女の学生：えっ、どうして？ 天気が 悪いの？
男の学生：いや、天気は 晴れるらしいんだけど、土曜日は 新幹線の チケットが 全部 売り切れていたんだ。
女の学生：そうなんだ。日曜日なら 取れるの？
男の学生：うん、日曜日の 朝なら 空いているよ。
女の学生：じゃあ、日曜日に しよう。

質問：二人は どうして 旅行の 日にちを 変えましたか。`,
    question: '二人は どうして 旅行の 日にちを 変えましたか。',
    options: [
      { id: 'A', text: '天気が 悪いから', isCorrect: false, analysis: 'SAI: Thời tiết dự báo nắng.' },
      { id: 'B', text: '土曜日の 新幹線の チケットが なかったから', isCorrect: true, analysis: 'ĐÚNG: Vé tàu Shinkansen ngày thứ Bảy đã hết sạch (売り切れ).' },
      { id: 'C', text: 'ホテルが 満室だったから', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '用事が できたから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe cụm từ nguyên nhân "チケットが全部売り切れていた".',
    relatedKnowledge: 'Từ vựng đặt vé: 売り切れ (hết vé), 空いている (còn chỗ).'
  },
  {
    id: 'n4-c-11',
    level: 'N4',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `会社で 男の人と 女の人が 話しています。女の人は どうして アルバイトを 辞めますか。

男の人：佐藤さん、今月で アルバイトを 辞めるんだって？
女の人：はい、お世話になりました。
男の人：就職先が 決まったの？
女の人：いいえ、来月から 国へ 帰って、大学院に 進学することにしたんです。
男の人：そうなんだ。専門の 勉強、頑張ってね。

質問：女の人は どうして アルバイトを 辞めますか。`,
    question: '女の人は どうして アルバイトを 辞めますか。',
    options: [
      { id: 'A', text: '就職が 決まったから', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '大学院に 進学するから', isCorrect: true, analysis: 'ĐÚNG: Về nước học lên cao học (大学院に進学する).' },
      { id: 'C', text: '仕事が 大変だから', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '病気に なったから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt cụm từ "大学院に 進学することにしたんです".',
    relatedKnowledge: 'Từ vựng học thuật: 大学院 (cao học), 進学 (học lên tiếp).'
  },
  {
    id: 'n4-c-12',
    level: 'N4',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `留学生の 男の人が スピーチを しています。男の人が 日本に 来て 驚いたことは 何ですか。

男の人：わたしは 去年の 秋に 日本へ 来ました。日本は 景色が 美しくて、食べ物も 美味しいです。特に 驚いたのは、町が とても きれいな ことです。道に ごみ箱が ほとんど ないのに、ごみが 落ちていません。みんな 自分の ごみを 家まで 持ち帰ると 聞いて、本当に 感心しました。

質問：男の人が 日本に 来て 最も 驚いたことは 何ですか。`,
    question: '男の人が 日本に 来て 最も 驚いたことは 何ですか。',
    options: [
      { id: 'A', text: '景色が 美しいこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '食べ物が 美味しいこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'ごみ箱が ないのに 町が きれいなこと', isCorrect: true, analysis: 'ĐÚNG: Ngạc nhiên nhất vì đường không có thùng rác mà phố vẫn sạch (町がとてもきれいなこと).' },
      { id: 'D', text: '人が 親切なこと', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt từ khóa "特に 驚いたのは、町が とても きれいな ことです".',
    relatedKnowledge: 'Từ vựng cảm xúc: 驚く (ngạc nhiên), 感心する (khâm phục).'
  },
  {
    id: 'n4-c-13',
    level: 'N4',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `女の人と 男の人が 話しています。男の人は どうして 遅刻しましたか。

女の人：山田さん、遅かったですね。もう 会議が 始まってしまいますよ。
男の人：すみません。目覚まし時計を セットするのを 忘れて 寝坊してしまって……。
女の人：電車が 止まったわけでは ないんですね。
男の人：はい、完全に 自分の 失敗です。急いで 来たんですが、間に合いませんでした。

質問：男の人は どうして 遅刻しましたか。`,
    question: '男の人は どうして 遅刻しましたか。',
    options: [
      { id: 'A', text: '電車が 遅れたから', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '寝坊したから', isCorrect: true, analysis: 'ĐÚNG: Quên đặt chuông báo thức nên ngủ quên (寝坊してしまって).' },
      { id: 'C', text: '道に 迷ったから', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '具合が 悪かったから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe từ thú nhận "寝坊してしまって" (ngủ quên).',
    relatedKnowledge: 'Từ vựng đi làm muộn: 遅刻, 寝坊する.'
  },
  {
    id: 'n4-c-14',
    level: 'N4',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `男の人と 女の人が 話しています。女の人は なぜ その レストランが 気に入っていますか。

男の人：昨日 行った イタリア料理の 店、どうだった？
女の人：すごく よかったよ！ 値段は ちょっと 高めだし、駅から 歩いて 15分も かかるんだけどね。
男の人：へえ、何が そんなに よかったの？
女の人：パスタが 絶品なのは もちろん、店員さんの 笑顔と サービスが 本当に 素晴らしかったの。
男の人：接客が いいと 気持ちよく 食事が できるよね。

質問：女の人が その 店を 気に入った 一番の 理由は 何ですか。`,
    question: '女の人が その 店を 気に入った 一番の 理由は 何ですか。',
    options: [
      { id: 'A', text: '値段が 安いから', isCorrect: false, analysis: 'SAI: Giá hơi đắt.' },
      { id: 'B', text: '駅から 近いから', isCorrect: false, analysis: 'SAI: Đi bộ 15 phút.' },
      { id: 'C', text: '店員の サービスと 接客が 素晴らしいから', isCorrect: true, analysis: 'ĐÚNG: Thích vì thái độ phục vụ và nụ cười của nhân viên (店員さんの笑顔とサービス).' },
      { id: 'D', text: '店内が 広いから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Loại trừ giá và vị trí ga -> Chọn dịch vụ và thái độ nhân viên.',
    relatedKnowledge: 'Từ vựng dịch vụ khách hàng: 接客, サービス.'
  },
  {
    id: 'n4-c-15',
    level: 'N4',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 7
    },
    passageOrScript: `学校で 先生が 話しています。留学生は 明日、何時に どこへ 集まらなければ なりませんか。

先生：明日の 見学旅行について 連絡します。バスは 朝 8時半に 出発します。ですから、8時15分までに 校門の 前に 集合してください。雨が 降っても 予定通り 行きます。遅刻した 人は 待たずに 出発しますので、時間を 守ってくださいね。

質問：留学生は 明日、何時に どこへ 集まりますか。`,
    question: '留学生は 明日、何時に どこへ 集まりますか。',
    options: [
      { id: 'A', text: '8時15分までに 教室', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '8時15分までに 校門の 前', isCorrect: true, analysis: 'ĐÚNG: Giáo viên dặn rõ "8時15分までに 校門の 前に 集合してください".' },
      { id: 'C', text: '8時30分までに 校門の 前', isCorrect: false, analysis: 'SAI: 8h30 là giờ xe buýt lăn bánh xuất phát.' },
      { id: 'D', text: '8時30分までに バスの中', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Phân biệt giờ tập trung (8h15) vs giờ xe chạy (8h30).',
    relatedKnowledge: 'Bắt bẫy thời gian tập trung (集合) trong Choukai N4.'
  },

  // --- MONDAI 3: 発話表現 (5 câu - Tình huống nói năng phù hợp) ---
  {
    id: 'n4-c-16',
    level: 'N4',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 発話表現',
      mondaiInstruction: '問題3では、絵を見ながら質問を聞いてください。矢印の人は何と言いますか。1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    imageUrl: '/src/assets/images/jlpt_n4_mondai3_1790500860371.jpg',
    choukaiIllustration: {
      type: 'arrow_scene',
      title: '問題3: エレベーターの順番を譲る場面',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      imageUrl: '/src/assets/images/jlpt_n4_mondai3_1790500860371.jpg',
      speakerWithArrow: '矢印（➡）の人: ボタンを押して譲る人',
      sceneDescription: 'エレベーターの扉の前に立ち、「開」ボタンを手で押さえながら、後ろから来た人に先に乗り込んでもらいたい場面。',
      visualChoices: [
        { num: 1, title: 'どうぞ お先に。', description: 'Mời bạn đi trước ạ' },
        { num: 2, title: '乗ってくださいませんか。', description: 'Nhờ vả cưỡng ép' },
        { num: 3, title: '先へ 行きます。', description: 'Tôi đi trước đây' }
      ]
    },
    passageOrScript: `エレベーターに 乗る 人に 先に 乗ってもらいたいです。何と 言いますか。

1：どうぞ お先に。
2：乗ってくださいませんか。
3：先へ 行きます。`,
    question: 'エレベーターに 乗る 人に 先に 乗ってもらいたいです。何と 言いますか。',
    options: [
      { id: 'A', text: 'どうぞ お先に。', isCorrect: true, analysis: 'ĐÚNG: Mời người khác đi trước một cách lịch sự.' },
      { id: 'B', text: '乗ってくださいませんか。', isCorrect: false, analysis: 'SAI: Nhờ vả cưỡng ép.' },
      { id: 'C', text: '先へ 行きます。', isCorrect: false, analysis: 'SAI: Tôi đi trước đây.' },
      { id: 'D', text: 'いってらっしゃい。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nhường người khác đi trước: どうぞ お先に.',
    relatedKnowledge: 'Lời nhường bước văn minh: お先にどうぞ.'
  },
  {
    id: 'n4-c-17',
    level: 'N4',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 発話表現',
      mondaiInstruction: '問題3では、絵を見ながら質問を聞いてください。矢印の人は何と言いますか。1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    choukaiIllustration: {
      type: 'arrow_scene',
      title: '問題3: 聞き取れなかったときの依頼',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      speakerWithArrow: '矢印（➡）の人: もう一度聞きたい人',
      sceneDescription: '相手が話した声が小さくて聞こえなかった場面。耳に手を当てて、もう一度話してほしいと丁寧に頼みます。',
      visualChoices: [
        { num: 1, title: 'もう一度言ってくれませんか。', description: 'Thiếu tính lịch sự tự nhiên' },
        { num: 2, title: 'すみません、聞こえませんでした。', description: 'Chỉ đơn thuần thông báo' },
        { num: 3, title: 'すみません、もう一度お願いします。', description: 'Xin lỗi, làm ơn nhắc lại một lần nữa' }
      ]
    },
    passageOrScript: `相手の 言った ことが よく 聞こえませんでした。もう 一度 聞きたいです。何と 言いますか。

1：もう 一度 言ってくれませんか。
2：すみません、聞こえませんでした。
3：すみません、もう 一度 お願いします。`,
    question: 'もう 一度 聞きたいです。何と 言いますか。',
    options: [
      { id: 'A', text: 'もう 一度 言ってくれませんか。', isCorrect: false, analysis: 'SAI: Thiếu tự nhiên lịch sự.' },
      { id: 'B', text: 'すみません、聞こえませんでした。', isCorrect: false, analysis: 'SAI: Chỉ thông báo.' },
      { id: 'C', text: 'すみません、もう 一度 お願いします。', isCorrect: true, analysis: 'ĐÚNG: Mẫu câu chuẩn nhất khi muốn đối phương nhắc lại.' },
      { id: 'D', text: 'よく 聞いてください。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nhờ nhắc lại lịch sự: すみません、もう一度お願いします.',
    relatedKnowledge: 'Cách đề nghị nói lại khi không nghe rõ.'
  },
  {
    id: 'n4-c-18',
    level: 'N4',
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
      title: '問題3: 職場を先に退勤する挨拶',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      speakerWithArrow: '矢印（➡）の人: 退勤する社員',
      sceneDescription: '夕方のオフィスで、自分の業務が完了し上着を着てカバンを持ち、まだ残業している同僚たちに向かって挨拶する場面。',
      visualChoices: [
        { num: 1, title: 'お先に失礼します。', description: 'Tôi xin phép về trước ạ' },
        { num: 2, title: 'ご苦労様でした。', description: 'Cấp trên nói với cấp dưới' },
        { num: 3, title: 'お邪魔します。', description: 'Nói khi vào nhà người khác' }
      ]
    },
    passageOrScript: `仕事が 終わって、先に 帰ります。同僚に 何と 言いますか。

1：お先に 失礼します。
2：ご苦労様でした。
3：お邪魔します。`,
    question: '仕事が 終わって、先に 帰ります。何と 言いますか。',
    options: [
      { id: 'A', text: 'お先に 失礼します。', isCorrect: true, analysis: 'ĐÚNG: Lời chào chuẩn mực khi xin phép về trước đồng nghiệp.' },
      { id: 'B', text: 'ご苦労様でした。', isCorrect: false, analysis: 'SAI: Cấp trên nói với cấp dưới.' },
      { id: 'C', text: 'お邪魔します。', isCorrect: false, analysis: 'SAI: Nói khi vào nhà người khác.' },
      { id: 'D', text: 'さようなら。', isCorrect: false, analysis: 'SAI: Thiếu tính công sở.' }
    ],
    speed30sTip: 'Về trước nơi làm việc: お先に失礼します.',
    relatedKnowledge: 'Quy tắc chào hỏi nơi làm việc Nhật Bản.'
  },
  {
    id: 'n4-c-19',
    level: 'N4',
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
      title: '問題3: 友達の部屋に上がる挨拶',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      speakerWithArrow: '矢印（➡）の人: 部屋に入る客',
      sceneDescription: '友達の家を訪れ、玄関で靴を脱いで部屋の敷居をまたぐ場面。矢印の客は何と言って上がりますか。',
      visualChoices: [
        { num: 1, title: '失礼しました。', description: 'Đã thất lễ (nói khi ra về)' },
        { num: 2, title: 'お邪魔します。', description: 'Xin phép làm phiền khi vào nhà' },
        { num: 3, title: 'ごめんください。', description: 'Nói ngoài cửa khi bấm chuông' }
      ]
    },
    passageOrScript: `友達の 家を 訪問しました。部屋に 入る とき、何と 言いますか。

1：失礼しました。
2：お邪魔します。
3：ごめんください。`,
    question: '友達の 家の 部屋に 入る とき、何と 言いますか。',
    options: [
      { id: 'A', text: '失礼しました。', isCorrect: false, analysis: 'SAI: Dùng khi ra về.' },
      { id: 'B', text: 'お邪魔します。', isCorrect: true, analysis: 'ĐÚNG: Lời chào khi bước vào nhà/phòng người khác.' },
      { id: 'C', text: 'ごめんください。', isCorrect: false, analysis: 'SAI: Nói ở cửa khi gọi chủ nhà.' },
      { id: 'D', text: 'いただきます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bước vào phòng người khác: お邪魔します.',
    relatedKnowledge: 'Từ vựng văn hóa thăm nhà người Nhật.'
  },
  {
    id: 'n4-c-20',
    level: 'N4',
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
      title: '問題3: 観光地で写真撮影を頼む場面',
      caption: '絵を見ながら質問を聞いてください。矢印（➡）の人は何と言いますか。',
      speakerWithArrow: '矢印（➡）の人: カメラを渡す旅行者',
      sceneDescription: '観光地で、通りかかった親切そうな人に自分のカメラを両手で差し出し、記念写真を撮ってもらいたい場面。',
      visualChoices: [
        { num: 1, title: '写真を撮っていただけませんか。', description: 'Làm ơn chụp giúp tôi một tấm ảnh được không' },
        { num: 2, title: '写真を撮りましょうか。', description: 'Để tôi chụp cho bạn nhé' },
        { num: 3, title: '写真を撮ってもいいですか。', description: 'Tôi chụp có được không' }
      ]
    },
    passageOrScript: `相手に 写真を 撮ってもらいたいです。何と 言いますか。

1：写真を 撮っていただけませんか。
2：写真を 撮りましょうか。
3：写真を 撮っても いいですか。`,
    question: '相手に 写真を 撮ってもらいたいです。何と 言いますか。',
    options: [
      { id: 'A', text: '写真を 撮っていただけませんか。', isCorrect: true, analysis: 'ĐÚNG: Nhờ chụp hộ lịch sự: 〜ていただけませんか.' },
      { id: 'B', text: '写真を 撮りましょうか。', isCorrect: false, analysis: 'SAI: Để tôi chụp cho bạn nhé.' },
      { id: 'C', text: '写真を 撮っても いいですか。', isCorrect: false, analysis: 'SAI: Tôi chụp có được không.' },
      { id: 'D', text: '写真を 見せてください。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nhờ người khác làm cho mình lịch sự: 〜ていただけませんか.',
    relatedKnowledge: 'Mẫu câu nhờ vả lịch sự N4.'
  },

  // --- MONDAI 4: 即時応答 (10 câu - Phản xạ đối đáp tức thì) ---
  {
    id: 'n4-c-21',
    level: 'N4',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `この 書類、コピーを 10部 取っておいてくれない？

1：はい、すぐ やっておきます。
2：いいえ、取りませんでした。
3：コピー機が ありますよ。`,
    question: 'この 書類、コピーを 10部 取っておいてくれない？',
    options: [
      { id: 'A', text: 'はい、すぐ やっておきます。', isCorrect: true, analysis: 'ĐÚNG: Đồng ý thực hiện ngay công việc được nhờ.' },
      { id: 'B', text: 'いいえ、取りませんでした。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'コピー機が ありますよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '書類です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nhờ vả "〜てくれない？" -> Đáp "はい、すぐやっておきます".',
    relatedKnowledge: 'Mẫu câu nhờ vả và chuẩn bị trước: 〜ておく.'
  },
  {
    id: 'n4-c-22',
    level: 'N4',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `田中さん、明日の 飲み会、参加できそう？

1：行けるか どうか、まだ わからないんだ。
2：はい、参加しませんでした。
3：昨日 行きましたよ。`,
    question: '田中さん、明日の 飲み会、参加できそう？',
    options: [
      { id: 'A', text: '行けるか どうか、まだ わからないんだ。', isCorrect: true, analysis: 'ĐÚNG: Đáp đúng câu hỏi khả năng tham gia (chưa biết có đi được hay không).' },
      { id: 'B', text: 'はい、参加しませんでした。', isCorrect: false, analysis: 'SAI: Mâu thuẫn quá khứ.' },
      { id: 'C', text: '昨日 行きましたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'お酒を 飲みました。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi ngày mai có tham gia được không (参加できそう？) -> Đáp hiện tại/tương lai.',
    relatedKnowledge: 'Cấu trúc phỏng đoán: 〜そう.'
  },
  {
    id: 'n4-c-23',
    level: 'N4',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `その 靴、軽くて 歩きやすそうですね。

1：ええ、全然 疲れないんですよ。
2：いいえ、重いですね。
3：はい、歩きませんでした。`,
    question: 'その 靴、軽くて 歩きやすそうですね。',
    options: [
      { id: 'A', text: 'ええ、全然 疲れないんですよ。', isCorrect: true, analysis: 'ĐÚNG: Khẳng định giày đi nhẹ và hoàn toàn không bị mỏi chân.' },
      { id: 'B', text: 'いいえ、重いですね。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'はい、歩きませんでした。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '靴を 買いました。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Khen giày dễ đi "歩きやすそう" -> Đồng tình "全然疲れないんですよ".',
    relatedKnowledge: 'Mẫu câu dễ làm gì: Vます + やすい.'
  },
  {
    id: 'n4-c-24',
    level: 'N4',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `窓を 閉めても よろしいでしょうか。

1：ええ、構いませんよ。
2：はい、閉めました。
3：いいえ、閉めてください。`,
    question: '窓を 閉めても よろしいでしょうか。',
    options: [
      { id: 'A', text: 'ええ、構いませんよ。', isCorrect: true, analysis: 'ĐÚNG: Đồng ý cho phép lịch sự (không sao, cứ đóng đi).' },
      { id: 'B', text: 'はい、閉めました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'いいえ、閉めてください。', isCorrect: false, analysis: 'SAI: Mâu thuẫn.' },
      { id: 'D', text: '窓です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Xin phép lịch sự "〜てもよろしいでしょうか" -> Đáp "ええ、構いませんよ".',
    relatedKnowledge: 'Mẫu câu xin phép tôn kính N4: 構いません.'
  },
  {
    id: 'n4-c-25',
    level: 'N4',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `山田さん、ちょっと お手伝いしましょうか。

1：あ、助かります。お願いします。
2：いいえ、手伝ってください。
3：はい、手伝いました。`,
    question: '山田さん、ちょっと お手伝いしましょうか。',
    options: [
      { id: 'A', text: 'あ、助かります。お願いします。', isCorrect: true, analysis: 'ĐÚNG: Cảm ơn và đón nhận sự giúp đỡ (thế thì tốt quá, nhờ bạn nhé).' },
      { id: 'B', text: 'いいえ、手伝ってください。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'はい、手伝いました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'どういたしまして。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nhận giúp đỡ: "あ、助かります。お願いします".',
    relatedKnowledge: 'Cách nhận lời giúp đỡ tự nhiên: 助かります.'
  },
  {
    id: 'n4-c-26',
    level: 'N4',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `日本語、ずいぶん 上手に なりましたね。

1：いいえ、まだまだです。
2：はい、上手でした。
3：どういたしまして。`,
    question: '日本語、ずいぶん 上手に なりましたね。',
    options: [
      { id: 'A', text: 'いいえ、まだまだです。', isCorrect: true, analysis: 'ĐÚNG: Khiêm tốn khi được khen ngợi (Dạ chưa đâu, tôi còn phải cố gắng nhiều).' },
      { id: 'B', text: 'はい、上手でした。', isCorrect: false, analysis: 'SAI: Thiếu khiêm tốn.' },
      { id: 'C', text: 'どういたしまして。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '上手です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Khi được khen tiếng Nhật giỏi -> Đáp khiêm tốn "いいえ、まだまだです".',
    relatedKnowledge: 'Văn hóa khiêm nhường trong giao tiếp tiếng Nhật.'
  },
  {
    id: 'n4-c-27',
    level: 'N4',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 7
    },
    passageOrScript: `部長、ごちそうさまでした。とても 美味しかったです。

1：それは よかった。また 行こうね。
2：いいえ、美味しくなかったです。
3：お腹が いっぱいです。`,
    question: '部長、ごちそうさまでした。とても 美味しかったです。',
    options: [
      { id: 'A', text: 'それは よかった。また 行こうね。', isCorrect: true, analysis: 'ĐÚNG: Cấp trên đáp lại lời cảm ơn ăn uống của cấp dưới.' },
      { id: 'B', text: 'いいえ、美味しくなかったです。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'お腹が いっぱいです。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '失礼しました。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Đáp lại lời cảm ơn bữa ăn: "それはよかった。また行こうね".',
    relatedKnowledge: 'Giao tiếp cấp trên - cấp dưới sau bữa tiệc công ty.'
  },
  {
    id: 'n4-c-28',
    level: 'N4',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 8
    },
    passageOrScript: `風邪気味なんですが、先に 帰らせて いただけませんか。

1：大丈夫？ お大事にね。
2：はい、帰りました。
3：いいえ、風邪を ひきません。`,
    question: '風邪気味なんですが、先に 帰らせて いただけませんか。',
    options: [
      { id: 'A', text: '大丈夫？ お大事にね。', isCorrect: true, analysis: 'ĐÚNG: Lời hỏi thăm và dặn giữ gìn sức khỏe khi đồng nghiệp bị ốm xin về trước.' },
      { id: 'B', text: 'はい、帰りました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'いいえ、風邪を ひきません。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'おめでとうございます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Người khác xin về vì ốm -> Dặn dò "お大事に".',
    relatedKnowledge: 'Lời chúc sức khỏe người ốm: お大事に.'
  },
  {
    id: 'n4-c-29',
    level: 'N4',
    year: '2015-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 9
    },
    passageOrScript: `雨が 止んだみたいですね。

1：あ、本当だ。傘を 忘れないように しなきゃ。
2：ええ、大雨ですね。
3：まだ 降っていますよ。`,
    question: '雨が 止んだみたいですね。',
    options: [
      { id: 'A', text: 'あ、本当だ。傘を 忘れないように しなきゃ。', isCorrect: true, analysis: 'ĐÚNG: Công nhận mưa đã tạnh và nhắc cầm theo ô kẻo quên.' },
      { id: 'B', text: 'ええ、大雨ですね。', isCorrect: false, analysis: 'SAI: Mâu thuẫn.' },
      { id: 'C', text: 'まだ 降っていますよ。', isCorrect: false, analysis: 'SAI: Phủ nhận cộc lốc.' },
      { id: 'D', text: '傘を 買いました。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Mưa tạnh (雨が止んだ) -> Nhắc không để quên ô.',
    relatedKnowledge: 'Cấu trúc phỏng đoán: 〜みたい.'
  },
  {
    id: 'n4-c-30',
    level: 'N4',
    year: '2015-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 10
    },
    passageOrScript: `すみません、駅までの 道を 教えて いただけませんか。

1：あちらの 交差点を 右に 曲がると、すぐですよ。
2：はい、教えません。
3：駅へ 行きました。`,
    question: 'すみません、駅までの 道を 教えて いただけませんか。',
    options: [
      { id: 'A', text: 'あちらの 交差点を 右に 曲がると、すぐですよ。', isCorrect: true, analysis: 'ĐÚNG: Chỉ đường chi tiết lịch sự.' },
      { id: 'B', text: 'はい、教えません。', isCorrect: false, analysis: 'SAI: Bất lịch sự.' },
      { id: 'C', text: '駅へ 行きました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'どういたしまして。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi đường "道を教えていただけませんか" -> Chỉ đường "交差点を右に曲がると...".',
    relatedKnowledge: 'Từ vựng chỉ phương hướng giao thông.'
  }
];
