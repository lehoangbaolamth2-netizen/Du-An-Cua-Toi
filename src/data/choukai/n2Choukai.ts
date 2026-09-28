import { JLPTQuestion } from '../../types';

// =========================================================================
// JLPT N2 CHOUKAI (30 CÂU CHUẨN THI: MONDAI 1 -> MONDAI 5 - 100% TIẾNG NHẬT)
// =========================================================================

export const N2_CHOUKAI_QUESTIONS: JLPTQuestion[] = [
  // --- MONDAI 1: 課題理解 (6 câu - Nhiệm vụ công việc / Hành động kế tiếp) ---
  {
    id: 'n2-c-1',
    level: 'N2',
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
      type: 'task_memo',
      title: '問題1: 経営戦略会議 準備タスクリスト',
      caption: '会議準備進行管理メモ (Tiến độ và thứ tự ưu tiên chuẩn bị họp chiến lược)',
      memoSheet: {
        header: '経営戦略会議・準備状況チェック (Tình trạng công tác chuẩn bị)',
        items: [
          { label: '役員会議室の予約', value: '【完了】予約済み' },
          { label: '配布資料の印刷・製本', value: '【完了】製本済み' },
          { label: '佐藤部長（出張中）への携帯電話確認', value: '【最優先・ただちに行う】(Gọi xác nhận)', isFocus: true },
          { label: 'プロジェクター投影テスト', value: '【保留】出欠確認完了後に実施' }
        ],
        footerNote: '「まず佐藤部長の携帯に直接電話して確認を取って」'
      }
    },
    passageOrScript: `会社で 課長と 男の社員が 話しています。男の社員は この後 まず 何を しますか。

課長：木村さん、来週の 経営戦略会議の 準備だけど、進み具合は どう？
男の社員：はい。役員会議室の 予約と、配布資料の 印刷・製本は すでに 完了しております。
課長：そう、手際が いいわね。で、出席者の 出欠確認は 全員分 取れたかしら。
男の社員：あ、営業部の 佐藤部長から まだ 返答を いただいておりません。
課長：佐藤部長、昨日から 出張中だったわね。急ぎで アポイントを 確定させたいから、まず 佐藤部長の 携帯に 直接 電話して 確認を取ってくれる？ 資料の プロジェクター投影テストは その後で 構わないから。
男の社員：承知いたしました。ただちに ご連絡いたします。

質問：男の社員は この後 まず 何を しますか。`,
    question: '男の社員は この後 まず 何を しますか。',
    options: [
      { id: 'A', text: '佐藤部長の 携帯電話に 連絡して 出欠を 確認します。', isCorrect: true, analysis: 'ĐÚNG: Trưởng phòng yêu cầu khẩn cấp: "まず 佐藤部長の携帯に直接電話して確認を取ってくれる？" trước khi thử máy chiếu.' },
      { id: 'B', text: 'プロジェクターの 投影テストを 行います。', isCorrect: false, analysis: 'SAI: Sếp bảo việc này để sau.' },
      { id: 'C', text: '役員会議室を 予約します。', isCorrect: false, analysis: 'SAI: Đã xong.' },
      { id: 'D', text: '会議の 配布資料を 印刷します。', isCorrect: false, analysis: 'SAI: Đã xong.' }
    ],
    speed30sTip: 'Bắt chỉ đạo khẩn cấp: "まず佐藤部長の携帯に直接電話して確認を取ってくれる？".',
    relatedKnowledge: 'Từ vựng thương mại N2: 経営戦略会議, 手際がいい, 出欠確認.'
  },
  {
    id: 'n2-c-2',
    level: 'N2',
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
      type: 'task_memo',
      title: '問題1: エントリーシート添削指摘メモ',
      caption: 'キャリアセンター添削シート (Nhiệm vụ cần hoàn thành ngay hôm nay)',
      memoSheet: {
        header: 'インターンシップ応募書類・修正指導 (Hướng dẫn sửa hồ sơ)',
        items: [
          { label: '志望動機', value: '【合格】熱意が伝わり良好' },
          { label: '自己PRの数値的裏付け', value: '自宅で練り直し明朝提出 (Sáng mai nộp)' },
          { label: '証明写真の裏面記名（氏名・大学名）', value: '【今すぐここで記入】(Ghi tên sau ảnh ngay)', isFocus: true },
          { label: '応募先企業へ提出', value: '明日の夕方締め切り' }
        ],
        footerNote: '「写真の記名だけは今ここで済ませていってください」'
      }
    },
    passageOrScript: `大学の キャリアセンターで 職員と 女の学生が 話しています。女の学生は 今日中に 何を しなければ なりませんか。

職員：田中さん、インターンシップの 応募書類、持ってきましたね。拝見します。……志望動機は 熱意が 伝わって とても 素晴らしいですよ。ただ、自己PRの 部分で、大学時代に リーダーシップを 発揮した 具体的な エピソードが 少し 抽象的ですね。
女の学生：あ、もう少し 具体的な 数値や 成果を 盛り込んだ ほうが よろしいでしょうか。
職員：ええ、その ほうが 説得力が 増します。それと、証明写真の 裏面に 氏名と 大学名を 記入するのを 忘れていますよ。剥がれたときに 困りますから。
女の学生：失礼いたしました。今 すぐ 書きます。自己PRの 修正は 自宅で 練り直して 明日の 午前中に 提出でも 間に合いますか。
職員：応募締め切りは 明日の 夕方ですから、書類の 修正提出は 明朝で 大丈夫です。ただ、写真の 記名だけは 今 ここで 済ませていってください。

質問：女の学生は 今日中に 何を しますか。`,
    question: '女の学生は 今日中に 何を しますか。',
    options: [
      { id: 'A', text: '証明写真の 裏面に 氏名と 大学名を 記入します。', isCorrect: true, analysis: 'ĐÚNG: Cán bộ dặn ký tên và trường vào sau ảnh ngay tại chỗ hôm nay, còn sửa bài thì sáng mai nộp.' },
      { id: 'B', text: '自己PRを 修正して 提出します。', isCorrect: false, analysis: 'SAI: Sáng mai mới nộp.' },
      { id: 'C', text: '志望動機を 書き直します。', isCorrect: false, analysis: 'SAI: Đã đạt.' },
      { id: 'D', text: '応募先企業に 電話を かけます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Phân biệt: Sửa bài để sáng mai, còn ký sau ảnh thì làm ngay bây giờ (今ここで済ませていってください).',
    relatedKnowledge: 'Từ vựng xin việc: インターンシップ, 志望動機, 自己PR.'
  },
  {
    id: 'n2-c-3',
    level: 'N2',
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
      type: 'task_memo',
      title: '問題1: VIP顧客 早着対応チェックリスト',
      caption: 'ホテル客室準備シート (Nhiệm vụ lễ tân khách sạn khi khách VIP đến sớm)',
      memoSheet: {
        header: 'VIP（スミス様）スイートルーム受入準備 (Chuẩn bị đón khách VIP)',
        items: [
          { label: '客室清掃・アメニティ点検', value: '【午前中完了】点検済み' },
          { label: 'ウェルカムフルーツの盛り合わせ', value: '【至急】厨房へ即座に手配連絡 (Liên hệ bếp ngay)', isFocus: true },
          { label: 'ロビー出迎え準備', value: '支配人が直接担当 (Quản lý làm)' },
          { label: '到着予定時刻', value: 'フライト早まり14:00頃予定 (Còn 30 phút)' }
        ],
        footerNote: '「厨房に急ぎでフルーツの盛り合わせを部屋に運ぶよう指示してくれ」'
      }
    },
    passageOrScript: `ホテルで 支配人と フロント係の 女性が 話しています。女性は この後 すぐ 何を しますか。

支配人：鈴木さん、本日 15時に ご到着予定の VIPの スミス様ですが、フライトが 1時間 早まったと ご連絡が ありました。
女性：かしこまりました。現在 13時半ですので、あと 30分ほどで ご到着されるかも しれませんね。
支配人：ええ。スイートルームの 清掃と アメニティの 設置は 完了しているかね。
女性：はい、午前中に 点検を 済ませて おります。ただ、ウェルカムフルーツの お届けが まだでして……。
支配人：では、厨房に 急ぎで フルーツの 盛り合わせを 部屋に 運ぶよう 指示してくれ。私は ロビーで お迎えの 準備を 整える。
女性：承知いたしました。ただちに 厨房へ 連絡いたします。

質問：フロント係の 女性は この後 すぐ 何を しますか。`,
    question: 'フロント係の 女性は この後 すぐ 何を しますか。',
    options: [
      { id: 'A', text: '厨房に フルーツを 部屋へ 運ぶよう 連絡します。', isCorrect: true, analysis: 'ĐÚNG: Nhận lệnh "厨房に急ぎでフルーツの盛り合わせを部屋に運ぶよう指示してくれ" và thực hiện ngay.' },
      { id: 'B', text: 'スイートルームの 清掃を します。', isCorrect: false, analysis: 'SAI: Đã xong buổi sáng.' },
      { id: 'C', text: 'ロビーで お客様を 出迎えます。', isCorrect: false, analysis: 'SAI: Tổng quản lý làm.' },
      { id: 'D', text: '空港へ 車を 出します。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt lệnh tức thì: "厨房に急ぎでフルーツを... 指示してくれ".',
    relatedKnowledge: 'Dịch vụ khách sạn cao cấp: 支配人, スイートルーム, ウェルカムフルーツ.'
  },
  {
    id: 'n2-c-4',
    level: 'N2',
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
      type: 'task_memo',
      title: '問題1: セミナー配布資料タイムテーブル',
      caption: 'セミナー資料配布スケジュール (Phân bổ thời gian phát tài liệu hội thảo)',
      memoSheet: {
        header: 'セミナー会場・資料配布タイムライン (Thời điểm phát tài liệu)',
        items: [
          { label: 'テキスト・名札', value: '【配布済】受付時に手渡し' },
          { label: '講師からの差し替え「追補版ペーパー」', value: '【開演前に至急配布】(Phát ngay trước khai mạc)', isFocus: true },
          { label: 'アンケート用紙 (印刷所別納)', value: '【休憩時間】各机に配布 (Giờ giải lao phát)' },
          { label: '開演時間', value: '15分後スタート' }
        ],
        footerNote: '「この追補版の1枚ペーパーを、講義が始まる前に至急受講者に配ってくれ」'
      }
    },
    passageOrScript: `セミナーの 会場で 責任者の 男の人と スタッフの 女の人が 話しています。女の人は これから 参加者に 何を 配布しますか。

男の人：開演 15分前になりましたね。受講票の 受付は 順調ですか。
女の人：はい、すでに 7割ほどの 方が 着席されています。受付で 本日の テキストと 名札を お渡ししています。
男の人：アンケート用紙は テキストに 挟み込んで あるのかな。
女の人：あ、それが 印刷所の 手違いで アンケート用紙だけ 別納品になっておりまして、まだ お配りできていません。
男の人：そうか。では、休憩時間に 各自の 机に 配って回ることにしよう。それより、今日の 講師の 先生から 直前に 配布資料の 差し替え要請が 入ったんだ。この 追補版の 1枚ペーパーを、講義が 始まる 前に 至急 受講者に 配ってくれ。
女の人：わかりました。すぐに 配ってまいります。

質問：女の人は これから 開演前に 何を 配布しますか。`,
    question: '女の人は これから 開演前に 何を 配布しますか。',
    options: [
      { id: 'A', text: '本日の テキストと 名札', isCorrect: false, analysis: 'SAI: Đã phát ở quầy tiếp tân.' },
      { id: 'B', text: 'アンケート用紙', isCorrect: false, analysis: 'SAI: Để giờ nghỉ giải lao mới phát.' },
      { id: 'C', text: '直前に 差し替えられた 追補版の 資料', isCorrect: true, analysis: 'ĐÚNG: Phát ngay trước giờ giảng tờ bổ sung vừa được giảng viên đổi (追補版の1枚ペーパー).' },
      { id: 'D', text: '受講票', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Phân loại mốc thời gian: アンケート = 休憩時間; 追補版ペーパー = 講義が始まる前至急.',
    relatedKnowledge: 'Từ vựng tổ chức hội thảo: 受講票, 追補版, 差し替え.'
  },
  {
    id: 'n2-c-5',
    level: 'N2',
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
      type: 'task_memo',
      title: '問題1: カタログ表紙 デザイン修正指示書',
      caption: 'デザインフィードバックシート (Yêu cầu chỉnh sửa trang bìa catalogue)',
      memoSheet: {
        header: '新カタログ表紙デザイン・修正要件 (Yêu cầu thiết kế)',
        items: [
          { label: 'ロゴサイズ', value: '【現状維持】変更するとバランス崩壊' },
          { label: '背景グラデーション色', value: '【暗めのトーンに落とす】(Hạ tông nền tối hơn)', isFocus: true },
          { label: '白ロゴのコントラスト', value: '【くっきりと浮き出させる】(Tăng độ tương phản)', isFocus: true },
          { label: 'キャッチコピーフォント', value: '【現状維持】変更不要' }
        ],
        footerNote: '「背景のグラデーションを暗めのトーンに落としてコントラストを強めてほしい」'
      }
    },
    passageOrScript: `印刷会社で 営業担当の 男の人と デザイナーの 女性が 話しています。女性は カタログの 表紙を どのように 修正しますか。

男の人：クライアントから、新カタログの 表紙デザインについて フィードバックが 来ました。
女性：はい、どのような ご要望でしょうか。
男の人：全体の 配色は クールで 非常に 好評なんですが、社名の ロゴマークが 少し 目立たないと 指摘されました。
女性：ロゴを 大きく 拡大しましょうか。
男の人：いや、ロゴの サイズ自体を 変えると 全体の バランスが 崩れるので、背景の グラデーションを 少し 暗めの トーンに 落として、白い ロゴが くっきりと 浮き出るように コントラストを 強めてほしいとのことです。キャッチコピーの フォントは そのままで 構いません。
女性：承知しました。背景色を 調整して コントラストを 際立たせるように 修正します。

質問：デザイナーの 女性は 表紙を どのように 修正しますか。`,
    question: 'デザイナーの 女性は 表紙を どのように 修正しますか。',
    options: [
      { id: 'A', text: '社名の ロゴマークを 大きく 拡大する。', isCorrect: false, analysis: 'SAI: Bác bỏ phương án phóng to vì phá vỡ bố cục.' },
      { id: 'B', text: '背景の 色を 暗くして コントラストを 強める。', isCorrect: true, analysis: 'ĐÚNG: Hạ tông màu nền tối xuống để làm nổi bật logo màu trắng (コントラストを強める).' },
      { id: 'C', text: 'キャッチコピーの フォントを 変更する。', isCorrect: false, analysis: 'SAI: Giữ nguyên.' },
      { id: 'D', text: '表紙の 写真を 別の ものに 差し替える。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe yêu cầu tinh chỉnh thiết kế: Giữ kích thước logo, hạ tông nền tăng tương phản.',
    relatedKnowledge: 'Thuật ngữ thiết kế thương mại: コントラスト, グラデーション, キャッチコピー.'
  },
  {
    id: 'n2-c-6',
    level: 'N2',
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
      type: 'task_memo',
      title: '問題1: 薬剤服用ガイダンスシート',
      caption: '処方薬の服薬説明書 (Chỉ dẫn chi tiết cách uống các loại thuốc)',
      memoSheet: {
        header: '処方薬服用ルール一覧 (Quy tắc uống từng loại thuốc)',
        items: [
          { label: '白い錠剤', value: '毎食後 1錠ずつ (Uống đều 3 bữa)' },
          { label: '痛み止めカプセル (頓服薬)', value: '激痛時のみ・最低6時間あける (Cách tối thiểu 6h)' },
          { label: '抗生物質の顆粒', value: '【治まっても5日分を必ず飲み切る】(Phải uống hết 5 ngày)', isFocus: true },
          { label: '自己判断の中断', value: '【厳禁】耐性菌防止のため' }
        ],
        footerNote: '「抗生物質の顆粒は症状が治まっても、出された5日分を必ずすべて飲み切ってください」'
      }
    },
    passageOrScript: `病院で 薬剤師と 患者の 男性が 話しています。男性は この 薬を どのように 服用しなければ なりませんか。

薬剤師：お薬の 説明を いたしますね。こちらの 白い 錠剤は 毎食後に 1錠ずつ、水で お飲みください。そして、こちらの カプセルは 痛みが 激しいときのみ、頓服薬として 服用してください。
男性：カプセルは 痛くなければ 飲まなくても いいんですね。
薬剤師：はい、無理に 飲む 必要は ありません。ただし、1回 飲んだら、最低でも 6時間は 間隔を 空けるように してください。あと、抗生物質の 顆粒は 症状が 治まっても、出された 5日分を 必ず すべて 飲み切ってくださいね。
男性：わかりました。途中で やめないように します。

質問：抗生物質の 顆粒について、患者は どうしなければ なりませんか。`,
    question: '抗生物質の 顆粒について、患者は どうしなければ なりませんか。',
    options: [
      { id: 'A', text: '痛みが 激しいときだけ 飲む。', isCorrect: false, analysis: 'SAI: Đó là thuốc viên nang giảm đau.' },
      { id: 'B', text: '症状が よくなったら 服用を やめる。', isCorrect: false, analysis: 'SAI: Bác sĩ cấm dừng giữa chừng.' },
      { id: 'C', text: '症状が 治まっても 5日分 すべて 飲み切る。', isCorrect: true, analysis: 'ĐÚNG: Kháng sinh phải uống hết toàn bộ 5 ngày dù triệu chứng đã thuyên giảm (5日分を必ずすべて飲み切る).' },
      { id: 'D', text: '6時間ごとに 飲む。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Quy tắc dùng kháng sinh: Dù khỏi bệnh vẫn phải uống hết liều (飲み切る).',
    relatedKnowledge: 'Từ vựng y tế N2: 頓服薬, 抗生物質, 飲み切る.'
  },

  // --- MONDAI 2: ポイント理解 (6 câu - Nắm bắt điểm mấu chốt / Luận điểm) ---
  {
    id: 'n2-c-7',
    level: 'N2',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `会社で 上司と 部下が、テレワークの 導入効果について 話しています。上司が 感じている 最も 大きな メリットは 何ですか。

上司：在宅勤務を 導入して 3か月が 経ったけど、業務の 効率はどう？
部下：通勤ラッシュの ストレスから 解放されて、体調管理が 非常に しやすくなりました。ただ、チーム内の 雑談や ちょっとした 相談が 減ってしまったのが 課題です。
上司：確かに コミュニケーションの 希薄化は 心配だね。でも 私はね、無駄な 書面での 稟議や 形式的な 定例会議が 一掃されて、意思決定の スピードが 格段に 早くなった ことが 何よりの 収穫だと 実感しているんだよ。以前なら 判子を もらうだけで 数日 かかっていたからね。
部下：確かに、ペーパーレス化と 決裁の 迅速化は 劇的ですね。

質問：上司が 最も 大きな メリットだと 感じていることは 何ですか。`,
    question: '上司が 最も 大きな メリットだと 感じていることは 何ですか。',
    options: [
      { id: 'A', text: '通勤ラッシュの ストレスが 減ったこと', isCorrect: false, analysis: 'SAI: Đó là cảm nhận của cấp dưới.' },
      { id: 'B', text: '意思決定と 決裁の スピードが 格段に 早くなったこと', isCorrect: true, analysis: 'ĐÚNG: Sếp tâm đắc nhất việc bỏ thủ tục giấy tờ rườm rà, tốc độ ra quyết định tăng vọt.' },
      { id: 'C', text: 'オフィスの 賃料が 削減できたこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '社員同士の 雑談が 増えたこと', isCorrect: false, analysis: 'SAI: Bị giảm đi.' }
    ],
    speed30sTip: 'Phân định người nói: Nhân viên thích bớt kẹt xe, còn Sếp đánh giá cao tốc độ ra quyết định (意思決定のスピード).',
    relatedKnowledge: 'Thuật ngữ quản trị: テレワーク, 稟議, 意思決定, 決裁.'
  },
  {
    id: 'n2-c-8',
    level: 'N2',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `ラジオで 経済評論家が ある 地方都市の 商店街の 再生事例について 解説しています。この 商店街が 活気を 取り戻した 決め手は 何ですか。

評論家：シャッター通りと 化していた 青葉商店街ですが、近年、若者や 観光客で 賑わいを取り戻しています。成功の 要因は、大型商業施設と 価格競争を するのを やめ、古い 空き店舗を リノベーションして、地元出身の 若手クリエイターや 工芸職人に 格安で 貸し出した ことに あります。個性的で こだわりの ある 雑貨店や カフェが 軒を 連ねることで、他には ない 独自の 文化的空間が 生み出されたのです。

質問：青葉商店街が 活気を 取り戻した 決定的な 理由は 何ですか。`,
    question: '青葉商店街が 活気を 取り戻した 決定的な 理由は 何ですか。',
    options: [
      { id: 'A', text: '大型スーパーと 徹底的な 価格競争を 行ったこと', isCorrect: false, analysis: 'SAI: Đã từ bỏ việc cạnh tranh giá.' },
      { id: 'B', text: '空き店舗を リノベーションし、独自の 個性的な 店を 誘致したこと', isCorrect: true, analysis: 'ĐÚNG: Cải tạo nhà cổ bỏ hoang cho nghệ sĩ trẻ thuê mở shop độc đáo tạo nên không gian văn hóa riêng biệt.' },
      { id: 'C', text: '道路を 拡張して 巨大な 駐車場を 作ったこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '行政からの 多額の 補助金を 住民に 配ったこと', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt nguyên nhân thành công: "古い空き店舗をリノベーションして... 個性的でこだわりのある雑貨店やカフェが軒を連ねる".',
    relatedKnowledge: 'Kinh tế đô thị Nhật: シャッター通り, リノベーション, 活気を取り戻す.'
  },
  {
    id: 'n2-c-9',
    level: 'N2',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `大学の 講義で 教授が 言語習得について 話しています。第二言語の 習得において、教授が 最も 強調している 要素は 何ですか。

教授：外国語を 学ぶ際、文法規則の 暗記や 単語テストの 点数に とらわれがちです。しかし、真に 運用能力を 高めるために 不可欠なのは、「意味のある コンテクストの 中で、自らの 感情や 意図を 伝えようとする 切実な 欲求」です。文法的な 誤りを 恐れず、試行錯誤しながら 他者と 意味を 交渉する 実際の コミュニケーション体験こそが、脳の 言語野を 活性化させるのです。

質問：教授が 第二言語習得で 最も 重要だと 主張しているのは 何ですか。`,
    question: '教授が 第二言語習得で 最も 重要だと 主張しているのは 何ですか。',
    options: [
      { id: 'A', text: '完璧な 文法規則の 暗記と 網羅', isCorrect: false, analysis: 'SAI: Bị giáo sư phản bác.' },
      { id: 'B', text: '誤りを 恐れずに 意図を 伝えようとする 実際の 対話体験', isCorrect: true, analysis: 'ĐÚNG: Trải nghiệm giao tiếp thực tế truyền đạt cảm xúc/ý muốn không sợ sai lầm (実際のコミュニケーション体験).' },
      { id: 'C', text: 'ネイティブスピーカーの 発音を 完全に 模倣すること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '辞書を 一冊 すべて 丸暗記すること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Từ nối đối lập: "〜ととらわれがちですが、しかし不可欠なのは... 実際のコミュニケーション体験".',
    relatedKnowledge: 'Ngôn ngữ học ứng dụng: 運用能力, 試行錯誤, 意味を交渉する.'
  },
  {
    id: 'n2-c-10',
    level: 'N2',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `女の人と 男の人が、最近 話題の サブスクリプションサービスについて 話しています。男の人が その サービスを 解約した 理由は 何ですか。

女の人：毎月 定額で 洋服が 借り放題の サービス、まだ 続けてる？
男の人：ああ、あれね、先月 解約しちゃったんだ。
女の人：え、便利そうだったのに。毎月の 料金が 高すぎたの？
男の人：いや、月額 8000円だから 金額的には 妥当だったよ。服の 質も 悪くなかったし。
女の人：じゃあ、どうして？
男の人：結局、返却するたびに 洗濯して クリーニング袋に 詰めて コンビニに 持って行くのが、仕事で 忙しい 身には 想像以上に 負担だったんだよね。手軽さを 求めていたのに、かえって 手間が 増えちゃって。

質問：男の人が サービスを 解約した 主な 理由は 何ですか。`,
    question: '男の人が サービスを 解約した 主な 理由は 何ですか。',
    options: [
      { id: 'A', text: '月額料金が 高すぎたから', isCorrect: false, analysis: 'SAI: Giá 8000 yên hợp lý.' },
      { id: 'B', text: '洋服の 品質が 悪かったから', isCorrect: false, analysis: 'SAI: Chất lượng tốt.' },
      { id: 'C', text: '返却や 発送に かかる 手間が 面倒だったから', isCorrect: true, analysis: 'ĐÚNG: Khâu giặt ủi và đem trả ra cửa hàng tiện lợi quá tốn công sức thời gian (かえって手間が増えちゃって).' },
      { id: 'D', text: '着たい デザインが なかったから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt lý do thực sự: Tiền và chất lượng đều ổn, nhưng khâu trả đồ tốn công (手間が増えちゃって).',
    relatedKnowledge: 'Dịch vụ hiện đại: サブスクリプション, 定額制, 手間がかかる.'
  },
  {
    id: 'n2-c-11',
    level: 'N2',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `テレビで 農業の 専門家が「スマート農業」について 語っています。AIや ドローンを 活用した 農業が もたらす 最大の 恩恵は 何だと 述べていますか。

専門家：従来の 農業は、長年の 経験や 勘に 頼る 部分が 大きく、新規就農者にとって 参入障壁が 非常に 高い 世界でした。しかし、ドローンによる 画像解析で 作物の 生育状況や 病害虫を 早期発見し、AIが 水やりや 肥料の 最適量を 自動制御する「スマート農業」の 普及によって、経験の 浅い 若者でも 高品質な 作物を 安定して 収穫できるように なりました。技術の 標準化と 継承の 容易さこそが、最大の メリットです。

質問：スマート農業の 最大の 恩恵として 専門家が 挙げているのは 何ですか。`,
    question: 'スマート農業の 最大の 恩恵として 専門家が 挙げているのは 何ですか。',
    options: [
      { id: 'A', text: '農薬を 一切 使わずに 栽培できること', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '熟練の 勘に 頼らず、経験が 浅くても 安定生産が 可能になったこと', isCorrect: true, analysis: 'ĐÚNG: Tiêu chuẩn hóa dữ liệu, giúp người mới không cần dựa vào kinh nghiệm cảm tính mà vẫn thu hoạch ổn định.' },
      { id: 'C', text: '作物の 販売価格を 10倍に 引き上げられること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'すべての 農作業を 人間が やらなくて よくなったこと', isCorrect: false, analysis: 'SAI: Quá tuyệt đối.' }
    ],
    speed30sTip: 'So sánh: Trước đây dựa vào "勘" (trực giác người già) -> Nay AI chuẩn hóa giúp người trẻ làm nông ổn định.',
    relatedKnowledge: 'Nông nghiệp công nghệ cao: スマート農業, 参入障壁, 自動制御.'
  },
  {
    id: 'n2-c-12',
    level: 'N2',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `会社で 人事部長と 採用担当者が、今年の 新卒採用の 傾向について 話しています。今年、企業が 最も 重視した 採用基準は 何ですか。

人事部長：今年の 面接選考、全体として どういう 学生が 多かったかね。
採用担当者：資格や 語学スコアが 秀でている 学生は 非常に 多かったです。ただ、マニュアル通りの 受け答えが 目立ちました。
人事部長：そうだね。わが社が 今期 最も 重視したのは、予期せぬ トラブルや 変化に 直面した際に、自ら 課題を 見出し、周囲を 巻き込んで 柔軟に 解決策を 導き出せる「適応力」だった。その 基準に 照らし合わせると、泥臭い 挫折経験を 乗り越えた 学生の ほうが 高く 評価されたね。
採用担当者：同感です。机上の スキルより 行動力が 決め手に なりましたね。

質問：この 会社が 今年の 採用で 最も 重視した 基準は 何ですか。`,
    question: 'この 会社が 今年の 採用で 最も 重視した 基準は 何ですか。',
    options: [
      { id: 'A', text: '高い 語学力や 保有資格の 多さ', isCorrect: false, analysis: 'SAI: Nhiều bạn có nhưng trả lời theo mẫu rập khuôn.' },
      { id: 'B', text: '予期せぬ 変化に 柔軟に 対応し 課題を 解決する 力', isCorrect: true, analysis: 'ĐÚNG: Khả năng thích ứng linh hoạt và giải quyết vấn đề khi đối mặt biến cố bất ngờ (適応力).' },
      { id: 'C', text: '有名大学の 出身であること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'マニュアルを 忠実に 守る 従順さ', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt tiêu chuẩn cốt lõi: Không phải bằng cấp (机上のスキル) mà là "適応力・変化への柔軟性".',
    relatedKnowledge: 'Từ vựng tuyển dụng công ty Nhật: 新卒採用, マニュアル通り, 適応力.'
  },

  // --- MONDAI 3: 概要理解 (5 câu - Hiểu tổng thể bài nói / Mục đích diễn thuyết) ---
  {
    id: 'n2-c-13',
    level: 'N2',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `テレビで 心理学者が「マルチタスクの 罠」について 語っています。

専門家：仕事や 勉強を しながら、スマートフォンで SNSを チェックし、音楽を 聴く。一見、複数の 作業を 同時に こなして 効率的に 思える マルチタスクですが、脳科学の 観点からは、人間の 脳は 同時に 複数の 思考を 処理できません。実際には、極めて 短い 時間で 脳の 注意力を 行ったり来たり 切り替えているだけに 過ぎないのです。この 認知的負荷は、集中力を 激減させ、ミスを 激増させます。真の 高い 生産性を 得るには、一つの 作業に 没頭する「シングルタスク」こそが 最善の 道なのです。

質問：専門家は 何について 主張していますか。`,
    question: '専門家は 何について 主張していますか。',
    options: [
      { id: 'A', text: 'マルチタスクは 効率的であり、若者が 習得すべき 能力である', isCorrect: false, analysis: 'SAI: Ngược hoàn toàn ý chuyên gia.' },
      { id: 'B', text: 'マルチタスクは 脳に 負担を 与えるため、一つの 作業に 集中すべきである', isCorrect: true, analysis: 'ĐÚNG: Multitask chỉ là đổi qua lại gây mỏi não, cần tập trung đơn nhiệm (シングルタスク).' },
      { id: 'C', text: 'スマートフォンの 利用時間を 制限する 法律を 作るべきである', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '音楽を 聴きながら 作業すると 記憶力が 向上する', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nắm kết luận cuối bài: Bác bỏ multitask -> Ủng hộ singletask (一つの作業に没頭する).',
    relatedKnowledge: 'Tâm lý học nhận thức: マルチタスク, 認知的負荷, シングルタスク.'
  },
  {
    id: 'n2-c-14',
    level: 'N2',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `ある 食品メーカーの 社長が、新製品の 開発方針について 記者会見で 話しています。

社長：現代は モノが 溢れ、単に「美味しくて 安い」だけでは 消費者の 心は 動きません。わが社が 目指すのは、購入することで 社会貢献に つながる「エシカル消費」に 応える 商品開発です。今回 発売する チョコレートは、フェアトレードの 原材料を 100％ 使用し、パッケージには 森林認証紙を 採用しました。消費者が 自らの 価値観を 表現できる ストーリー性を 届けることこそが、これからの 時代の ブランドの 存在意義だと 確信しております。

質問：社長が 語っている 新製品の コンセプトは 何ですか。`,
    question: '社長が 語っている 新製品の コンセプトは 何ですか。',
    options: [
      { id: 'A', text: '圧倒的な 低価格で 大量販売を 目指す戦略', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '社会貢献や 環境配慮という 価値を 届ける 商品作り', isCorrect: true, analysis: 'ĐÚNG: Tiêu dùng đạo đức (Ethical consumption), nguyên liệu thương mại công bằng và thân thiện môi trường.' },
      { id: 'C', text: '海外市場だけに 特化した 高級スイーツの開発', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '最新の 人工甘味料を 用いた ダイエット食品', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt từ khóa cốt lõi: エシカル消費 (tiêu dùng đạo đức), 社会貢献, フェアトレード.',
    relatedKnowledge: 'Kinh doanh hiện đại: エシカル消費, フェアトレード, 存在意義.'
  },
  {
    id: 'n2-c-15',
    level: 'N2',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `博物館の 館長が、地域住民に向けた 講演会で 話しています。

館長：博物館は、貴重な 歴史的資料を 保存・展示する「静かな 保管庫」だと 思われがちです。しかし、本来の 役割は、過去の 遺産を 通じて 地域の 未来を 住民と共に 考える「対話の 広場」で あるべきだと 考えています。当館では 今後、学校や 地域コミュニティと 連携した ワークショップや、住民が 自らの 家族史を 展示する 参加型プロジェクトを 積極的に 推進してまいります。開かれた 交流拠点として、皆様と 共に 歩んでいきたいのです。

質問：館長は 博物館を どのような 場所に したいと 述べていますか。`,
    question: '館長は 博物館を どのような 場所に したいと 述べていますか。',
    options: [
      { id: 'A', text: '厳重な 管理で 資料を 一切 触らせない 保管庫', isCorrect: false, analysis: 'SAI: Phủ định quan niệm cũ.' },
      { id: 'B', text: '地域住民が 参加し、未来を 共に 語り合える 開かれた 対話の 拠点', isCorrect: true, analysis: 'ĐÚNG: Chuyển từ nhà kho lưu trữ sang không gian giao lưu cởi mở có sự tham gia của cư dân.' },
      { id: 'C', text: '入場料を 無料にして 観光客だけを 誘致する 施設', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '海外の 著名な 美術品だけを 展示する 専門館', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Cấu trúc đối chiếu: 〜と思われがちだが、本来は「対話の広場・開かれた交流拠点」であるべき.',
    relatedKnowledge: 'Văn hóa xã hội: 保存・展示, 対話の広場, 参加型プロジェクト.'
  },
  {
    id: 'n2-c-16',
    level: 'N2',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `ラジオで 教育評論家が、子どもの 読書習慣について 話しています。

評論家：子どもに 本を 読ませようと、「本を 読みなさい」と 口うるさく 命令しても、逆効果に 終わることが ほとんどです。子どもは 親の 言葉ではなく、親の 行動を 見て 育ちます。読書習慣を 育む 最良の 環境とは、親自身が 日常の中で 楽しそうに 本や 新聞を 開いている 姿を 見せることです。リビングに 自然と 本が 手に 取れる 本棚を 置くなど、家庭全体を「読書が 当たり前の 風景」に していくことが、自発的な 好奇心を 刺激するのです。

質問：評論家が 提案している、子どもの 読書習慣を 育てる 方法は 何ですか。`,
    question: '評論家が 提案している、子どもの 読書習慣を 育てる 方法は 何ですか。',
    options: [
      { id: 'A', text: '毎日 読書の 目標ページ数を 決めて 厳しく 管理する', isCorrect: false, analysis: 'SAI: Phản tác dụng.' },
      { id: 'B', text: '親自身が 読書を楽しむ 姿を 見せ、家庭環境を 整える', isCorrect: true, analysis: 'ĐÚNG: Bố mẹ làm gương đọc sách và tạo không gian tự nhiên trong gia đình.' },
      { id: 'C', text: '読んだ 冊数に応じて お小遣いを 与える', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '文字の 多い 本ではなく 漫画だけを 読ませる', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nắm tư tưởng cốt lõi: Không ép buộc lời nói, mà dùng hành động làm gương của cha mẹ.',
    relatedKnowledge: 'Tâm lý giáo dục: 逆効果, 口うるさく, 自発的な好奇心.'
  },
  {
    id: 'n2-c-17',
    level: 'N2',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `ビジネススクールの 講師が「失敗の 活用法」について 講義を しています。

講師：多くの 組織では、失敗を 犯した 個人を 追及し、原因を 個人の 能力不足に 帰属させがちです。しかし、これでは 社員は 失敗を 隠蔽するようになり、同じ 事故が 繰り返されます。真に イノベーションを 生み出す 企業は、失敗を「貴重な 学習の 機会」と 捉え、個人の 責任ではなく「システムや プロセスの 不備」として 客観的に 分析する 仕組みを 持っています。失敗を 責めない 心理的平穏こそが、挑戦を 促す 原動力なのです。

質問：講師は 組織における 失敗について どのように 扱うべきだと 述べていますか。`,
    question: '講師は 組織における 失敗について どのように 扱うべきだと 述べていますか。',
    options: [
      { id: 'A', text: '失敗した 本人を 厳しく 処罰し、反省文を 書かせる', isCorrect: false, analysis: 'SAI: Gây ra giấu giếm sai phạm.' },
      { id: 'B', text: '個人の 責任にせず、システムの 欠陥として 分析し 学びの 機会にする', isCorrect: true, analysis: 'ĐÚNG: Xem thất bại là cơ hội học hỏi, phân tích khách quan khuyết tật của quy trình thay vì đổ lỗi cá nhân.' },
      { id: 'C', text: '失敗を 防ぐために 新しい 挑戦を 一切 制限する', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '失敗した プロジェクトは 直ちに 完全に 破棄する', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Tư duy quản trị hiện đại: Không phạt cá nhân mà sửa hệ thống (システムの不備として分析).',
    relatedKnowledge: 'Quản trị nhân sự: 隠蔽, 心理的安全性, イノベーション.'
  },

  // --- MONDAI 4: 即時応答 (9 câu - Phản xạ ứng đáp hội thoại tức thì) ---
  {
    id: 'n2-c-18',
    level: 'N2',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `部長からの ご指摘、耳が 痛い 話ばかりだったよ。

1：確かに 厳しいけれど、君の ためを 思っての ことだよ。
2：えっ、耳の 病気に なったの？
3：はい、よく 聞こえましたよ。`,
    question: '部長からの ご指摘、耳が 痛い 話ばかりだったよ。',
    options: [
      { id: 'A', text: '確かに 厳しいけれど、君の ためを 思っての ことだよ。', isCorrect: true, analysis: 'ĐÚNG: Quán dụng ngữ "耳が痛い" nghĩa là nghe rát tai/đúng tim đen -> An ủi sếp muốn tốt cho bạn.' },
      { id: 'B', text: 'えっ、耳の 病気に なったの？', isCorrect: false, analysis: 'SAI: Hiểu sai nghĩa đen đau tai vật lý.' },
      { id: 'C', text: 'はい、よく 聞こえましたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '部長です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Quán dụng ngữ "耳が痛い" = Nói trúng điểm yếu, khó nghe nhưng đúng.',
    relatedKnowledge: 'Quán dụng ngữ N2: 耳が痛い.'
  },
  {
    id: 'n2-c-19',
    level: 'N2',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `この 案件、何としても 納期に 間に合わせるよう、骨を 折ってくれたまえ。

1：ご期待に 沿えるよう、全力を 尽くします。
2：はい、骨が 折れてしまいました。
3：いいえ、納期は 過ぎました。`,
    question: 'この 案件、何としても 納期に 間に合わせるよう、骨を 折ってくれたまえ。',
    options: [
      { id: 'A', text: 'ご期待に 沿えるよう、全力を 尽くします。', isCorrect: true, analysis: 'ĐÚNG: Quán dụng ngữ "骨を折る" = nỗ lực hết mình/chịu khó nhọc -> Đáp xin dốc hết sức.' },
      { id: 'B', text: 'はい、骨が 折れてしまいました。', isCorrect: false, analysis: 'SAI: Nghĩa đen gãy xương.' },
      { id: 'C', text: 'いいえ、納期は 過ぎました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '病院へ 行きます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Quán dụng ngữ "骨を折る" = Chịu khó nhọc, dốc sức làm việc.',
    relatedKnowledge: 'Quán dụng ngữ N2: 骨を折る (lao tâm khổ tứ).'
  },
  {
    id: 'n2-c-20',
    level: 'N2',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `本日の 講演会、ご多忙の 折、わざわざ お越しいただき 恐縮に 存じます。

1：滅相もございません。こちらこそ お招きいただき 光栄です。
2：はい、忙しくて 大変でした。
3：どういたしまして、お疲れ様です。`,
    question: '本日の 講演会、ご多忙の 折、わざわざ お越しいただき 恐縮に 存じます。',
    options: [
      { id: 'A', text: '滅相もございません。こちらこそ お招きいただき 光栄です。', isCorrect: true, analysis: 'ĐÚNG: Kính ngữ thương mại đỉnh cao: "滅相もございません (đâu dám ạ, chúng tôi vinh hạnh được mời)".' },
      { id: 'B', text: 'はい、忙しくて 大変でした。', isCorrect: false, analysis: 'SAI: Kể lể bận rộn cực đoan.' },
      { id: 'C', text: 'どういたしまして、お疲れ様です。', isCorrect: false, analysis: 'SAI: Dùng sai vai giao tiếp.' },
      { id: 'D', text: '講演です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Kính ngữ cao cấp: 恐縮に存じます -> Đáp "滅相もございません。こちらこそ光栄です".',
    relatedKnowledge: 'Kính ngữ nghi thức tiếp khách thương mại N2.'
  },
  {
    id: 'n2-c-21',
    level: 'N2',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `昨日の コンペ、惜しくも 採用には 至らなかったよ。

1：そうだったのか。あと 一歩だっただけに、本当に 悔しいね。
2：おめでとう！ よく やったね。
3：最初から 無理だと 思ってたよ。`,
    question: '昨日の コンペ、惜しくも 採用には 至らなかったよ。',
    options: [
      { id: 'A', text: 'そうだったのか。あと 一歩だっただけに、本当に 悔しいね。', isCorrect: true, analysis: 'ĐÚNG: Đồng cảm nuối tiếc vì suýt chút nữa là trúng thầu (あと一歩だっただけに悔しい).' },
      { id: 'B', text: 'おめでとう！ よく やったね。', isCorrect: false, analysis: 'SAI: Ngược nghĩa thất bại.' },
      { id: 'C', text: '最初から 無理だと 思ってたよ。', isCorrect: false, analysis: 'SAI: Thiếu tinh thần đồng đội.' },
      { id: 'D', text: 'コンペです。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt cụm "惜しくも〜に至らなかった" (tiếc là không được chọn) -> Đồng cảm tiếc nuối.',
    relatedKnowledge: 'Từ vựng đấu thầu: コンペ (competition), 〜に至らない.'
  },
  {
    id: 'n2-c-22',
    level: 'N2',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `課長、今回の トラブル、私が 責任を 取って 辞任すべきでしょうか。

1：何を 言ってるんだ。今は 責任転嫁せず、事態の 収拾が 先決だよ。
2：はい、すぐに 辞表を 出しなさい。
3：私の 責任では ありません。`,
    question: '課長、今回の トラブル、私が 責任を 取って 辞任すべきでしょうか。',
    options: [
      { id: 'A', text: '何を 言ってるんだ。今は 責任転嫁せず、事態の 収拾が 先決だよ。', isCorrect: true, analysis: 'ĐÚNG: Cấp trên chấn chỉnh: Trước mắt giải quyết ổn thỏa sự cố là ưu tiên số một.' },
      { id: 'B', text: 'はい、すぐに 辞表を 出しなさい。', isCorrect: false, analysis: 'SAI: Thiếu tính thực tế.' },
      { id: 'C', text: '私の 責任では ありません。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'トラブルです。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Khi cấp dưới xin từ chức sau sự cố -> Cấp trên dặn: "事態の収拾が先決だ" (khắc phục hậu quả trước).',
    relatedKnowledge: 'Từ vựng xử lý khủng hoảng: 辞任, 事態の収拾, 先決.'
  },
  {
    id: 'n2-c-23',
    level: 'N2',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `佐藤さん、頼まれていた 資料の 作成、明後日までじゃ 間に合わないかな？

1：明日中には なんとか 仕上げてみせます。
2：はい、昨日 終わりましたよ。
3：いいえ、間に合いました。`,
    question: '佐藤さん、頼まれていた 資料の 作成、明後日までじゃ 間に合わないかな？',
    options: [
      { id: 'A', text: '明日中には なんとか 仕上げてみせます。', isCorrect: true, analysis: 'ĐÚNG: Thể hiện tinh thần trách nhiệm hoàn thành sớm hơn cả hạn chót ngày kia.' },
      { id: 'B', text: 'はい、昨日 終わりましたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'いいえ、間に合いました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '明後日です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi tiến độ khó khăn "〜じゃ間に合わないかな？" -> Đáp quyết tâm "なんとか仕上げてみせます".',
    relatedKnowledge: 'Mẫu câu biểu thị quyết tâm: 〜てみせる.'
  },
  {
    id: 'n2-c-24',
    level: 'N2',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 7
    },
    passageOrScript: `せっかくの チャンスを 棒に 振るなんて、もったいないよ。

1：うん、リスクを 恐れずに 挑戦してみるよ。
2：はい、棒を 投げました。
3：いいえ、チャンスは ありませんでした。`,
    question: 'せっかくの チャンスを 棒に 振るなんて、もったいないよ。',
    options: [
      { id: 'A', text: 'うん、リスクを 恐れずに 挑戦してみるよ。', isCorrect: true, analysis: 'ĐÚNG: Quán dụng ngữ "棒に振る" = đánh mất lãng phí cơ hội -> Tiếp thu khuyên bảo dám thử sức.' },
      { id: 'B', text: 'はい、棒を 投げました。', isCorrect: false, analysis: 'SAI: Hiểu sai nghĩa đen cây gậy.' },
      { id: 'C', text: 'いいえ、チャンスは ありませんでした。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '棒です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Quán dụng ngữ "棒に振る" = Bỏ lỡ/đánh mất cơ hội uổng phí.',
    relatedKnowledge: 'Quán dụng ngữ N2: 棒に振る.'
  },
  {
    id: 'n2-c-25',
    level: 'N2',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 8
    },
    passageOrScript: `これだけの 予算を 投じるからには、失敗は 許されないね。

1：ええ、背水の 陣で 臨む 所存です。
2：はい、失敗しても 構いません。
3：予算は ゼロでしたよ。`,
    question: 'これだけの 予算を 投じるからには、失敗は 許されないね。',
    options: [
      { id: 'A', text: 'ええ、背水の 陣で 臨む 所存です。', isCorrect: true, analysis: 'ĐÚNG: Thành ngữ "背水の陣" (trận chiến dựa lưng vào sông - không còn đường lui) thể hiện quyết tâm cao nhất.' },
      { id: 'B', text: 'はい、失敗しても 構いません。', isCorrect: false, analysis: 'SAI: Thiếu trách nhiệm.' },
      { id: 'C', text: '予算は ゼロでしたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'お金です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Thành ngữ "背水の陣" = Quyết tử không còn đường lùi.',
    relatedKnowledge: 'Thành ngữ chữ Hán 4 ký tự (Yojijukugo): 背水の陣 (はいすいのじん).'
  },
  {
    id: 'n2-c-26',
    level: 'N2',
    year: '2015-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 9
    },
    passageOrScript: `昨日の 取引先との 懇親会、君が 同席してくれて 本当に 大助かりだったよ。

1：滅相もありません。お役に 立てて 何よりです。
2：いいえ、助かりませんでした。
3：どういたしまして、お酒を 飲みました。`,
    question: '昨日の 取引先との 懇親会、君が 同席してくれて 本当に 大助かりだったよ。',
    options: [
      { id: 'A', text: '滅相もありません。お役に 立てて 何よりです。', isCorrect: true, analysis: 'ĐÚNG: Khiêm nhường khi được cấp trên cảm ơn vì đã hỗ trợ trong tiệc giao lưu khách hàng.' },
      { id: 'B', text: 'いいえ、助かりませんでした。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'どういたしまして、お酒を 飲みました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '懇親会です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Khi sếp khen ngợi "大助かりだったよ" -> Đáp khiêm tốn "お役に立てて何よりです".',
    relatedKnowledge: 'Kính ngữ giao tiếp văn phòng: お役に立てて何よりです.'
  },

  // --- MONDAI 5: 統合理解 (4 câu - Hiểu tổng hợp / Bài dài thảo luận đa luồng) ---
  {
    id: 'n2-c-27',
    level: 'N2',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `電機メーカーで 開発チームの 3人（部長、男性エンジニア、女性デザイナー）が、次世代型 空気清浄機の コンセプトについて 議論しています。

部長：我が社の 次期モデルの 空気清浄機だが、4つの 提案が 上がっている。市場競争に 勝つための 方向性を 絞り込みたい。
男性エンジニア：1案は、最新の 医療グレードの フィルターを 搭載した「超高性能特化モデル」です。ウイルス除去率は 圧倒的ですが、本体価格が 8万円を 超えてしまいます。
女性デザイナー：2案は、北欧風の 木製パネルを あしらった「インテリア調デザインモデル」です。家具のように 部屋に 馴染みますが、風量は スタンダードな レベルです。
男性エンジニア：3案は、スマートフォンや スマートスピーカーと 完全連動し、室内の 空気質を 可視化・自動制御する「IoTスマート連動モデル」です。若年ファミリー層の 関心が 非常に 高いです。
女性デザイナー：4案は、重さ 1.5kgで バッテリー内蔵の「ポータブル軽量モデル」です。持ち運びは 容易ですが、広い 部屋全体を カバーするのは 困難です。
部長：今の 住宅環境では、空気清浄機は「置く 場所に 困る 家電」の 代表格だ。機能が 高くても、部屋の 雰囲気を 損なう ごつい デザインは 敬遠される。少々 風量が 標準的でも、リビングの 景観を 美しく 引き立てる ものこそが、今の 消費者に 最も 響くはずだ。
女性デザイナー：私の 意見とも 一致します。
男性エンジニア：わかりました。では、その 路線で 詳細設計に 入ります。

質問：開発チームは どの 案を 採用することに しましたか。`,
    question: '開発チームは どの 案を 採用することに しましたか。',
    options: [
      { id: 'A', text: '1案：超高性能特化モデル', isCorrect: false, analysis: 'SAI: Giá quá đắt (8 vạn).' },
      { id: 'B', text: '2案：インテリア調デザインモデル', isCorrect: true, analysis: 'ĐÚNG: Trưởng phòng và designer chốt thiết kế hài hòa không gian nội thất, không phá vỡ mỹ quan phòng khách.' },
      { id: 'C', text: '3案：IoTスマート連動モデル', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '4案：ポータブル軽量モデル', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt quan điểm của Trưởng phòng: Không cần quá xịn, quan trọng là kiểu dáng nội thất thanh lịch -> Chọn phương án 2.',
    relatedKnowledge: 'Bài nghe thảo luận phát triển sản phẩm công nghệ trong Mondai 5 N2.'
  },
  {
    id: 'n2-c-28',
    level: 'N2',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `商店街の 理事会で、夏祭りの 集客イベントについて 3人が 相談しています。

会長：今年の 夏祭り、若者や 子連れファミリーを 呼び込む 目玉企画を 決定したい。
理事A：企画1は、有名お笑い芸人を 招いた ステージライブです。集客力は 抜群ですが、出演料だけで 予算の 8割を 占めてしまいます。
理事B：企画2は、地元飲食店の 看板メニューを 集めた「ご当地B級グルメ屋台村」です。低予算で 実現可能で、地域の 食の 魅力も アピールできます。
理事A：企画3は、商店街全体を 使った「謎解きスタンプラリー」です。回遊性が 生まれ、各店舗への 入店が 促されますが、景品代と アプリ開発費が かかります。
理事B：企画4は、プロジェクションマッピングによる 光の 演出です。夜間の インパクトは 絶大ですが、雨天時は 中止せざるを得ません。
会長：商店街の 活性化が 本来の 目的だからね。一過性の ライブで 終わったり、天候で リスクを 抱えるのは 避けたい。各店舗の 売上に 直接 つながり、かつ 家族連れが 手軽に 楽しめ、予算も 抑えられる 企画が ベストだ。
理事A・B：それなら、飲食ブースを 並べる 企画が 最も 条件に 合致しますね。

質問：理事会は どの 企画を 実施することに 決めましたか。`,
    question: '理事会は どの 企画を 実施することに 決めましたか。',
    options: [
      { id: 'A', text: '企画1：お笑い芸人の ステージライブ', isCorrect: false, analysis: 'SAI: Chi phí cát-xê quá cao.' },
      { id: 'B', text: '企画2：ご当地B級グルメの 屋台村', isCorrect: true, analysis: 'ĐÚNG: Chi phí thấp, gắn liền doanh thu ẩm thực địa phương và không sợ rủi ro mưa gió quá lớn.' },
      { id: 'C', text: '企画3：謎解きスタンプラリー', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '企画4：プロジェクションマッピング', isCorrect: false, analysis: 'SAI: Rủi ro hủy nếu trời mưa.' }
    ],
    speed30sTip: 'Tổng hợp tiêu chí: Tác động doanh thu cửa hàng + chi phí thấp + an toàn không rủi ro thời tiết -> Gian hàng ẩm thực B-kyu.',
    relatedKnowledge: 'Tổ chức sự kiện cộng đồng: B級グルメ, 屋台村, 回遊性.'
  },
  {
    id: 'n2-c-29',
    level: 'N2',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `夫婦が、新居の リビングに 置く ソファの 購入について 家具屋で 話しています。

妻：この お店の ソファ、4つの 候補が あるわね。
夫：そうだね。1番は 高級本革の 3人掛けソファ。座り心地は 抜群だけど、価格が 25万円と 予算オーバーだね。それに 革は 手入れが 大変そうだ。
妻：2番は 布製の コーナーソファよ。ゆったり 横になれるし、カバーを 外して 丸洗いできるのが 魅力的。価格も 12万円で 予算内ね。
夫：でも リビングの 通路を かなり 塞いじゃうんじゃない？ 部屋が 狭く 見えそうだよ。
妻：確かに サイズは 大きいかも。3番は 木枠フレームの 2人掛け北欧ソファよ。すっきりした デザインで 圧迫感が なく、掃除ロボットも 下を 通れるわ。価格は 9万円。
夫：4番は リクライニング機能付きの パーソナルチェア 2脚セットだ。贅沢だけど 家族みんなで 一緒に 座れないね。
妻：うちの リビングの 広さと、掃除の しやすさを 考えると、圧迫感が なくて デザインも 軽やかな 3番が 一番 現実的じゃない？
夫：そうだね。部屋も 広く 感じられるし、それに 決めよう。

質問：夫婦は どの ソファを 購入することに しましたか。`,
    question: '夫婦は どの ソファを 購入することに しましたか。',
    options: [
      { id: 'A', text: '1番：本革の 3人掛けソファ', isCorrect: false, analysis: 'SAI: Quá ngân sách (25 vạn).' },
      { id: 'B', text: '2番：洗える 布製コーナーソファ', isCorrect: false, analysis: 'SAI: Kích thước quá lớn chắn lối đi.' },
      { id: 'C', text: '3番：木枠フレームの 2人掛け北欧ソファ', isCorrect: true, analysis: 'ĐÚNG: Không chiếm diện tích ngột ngạt (圧迫感がない), robot hút bụi chui qua được, trong ngân sách.' },
      { id: 'D', text: '4番：リクライニングチェア 2脚', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Lọc điều kiện không gian: Cần thông thoáng, robot hút bụi dọn được gầm -> Chọn ghế số 3.',
    relatedKnowledge: 'Từ vựng nội thất gia đình: 圧迫感, 本革, 座り心地.'
  },
  {
    id: 'n2-c-30',
    level: 'N2',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `IT企業で 人事部長と 研修担当者が、新入社員研修の プログラムについて 検討しています。

人事部長：来春の 新卒研修だが、従来の 講義形式を 見直し、4つの 新プランから 1つを 選びたい。
研修担当者：プランAは、外部の 専門機関に 委託する「2泊3日の ビジネスマナー合宿」です。礼儀作法は 徹底されますが、受講生の 自主性が 育ちにくいとの 指摘が あります。
プランBは、チームごとに 実際の 新規事業立案を 行わせる「ハッカソン型ビジネス体験」です。協調性と 課題解決力が 飛躍的に 伸びますが、基礎的な 業務知識の 習得が 手薄になります。
プランCは、先輩社員が 1対1で 実務を 指導する「メンター制 OJT研修」です。現場の 立ち上がりが 早い 反面、指導役の 先輩の 負担が 重くなります。
プランDは、オンライン動画で 基本を 自習させた 上で、週に 1回 実践ディスカッションを 行う「反転学習型ハイブリッド研修」です。コストを 抑えつつ、知識習得と 主体的な 議論の 双方が 成立します。
人事部長：現在の 我が社に 求められているのは、マナーの 押し付けではなく、自律的に 考え、デジタルツールを 駆使しながら 仲間と 議論できる 人材だ。知識の 詰め込みと 実践の バランスが 取れた 案を 採用しよう。
研修担当者：承知しました。その 方針で プログラムを 設計します。

質問：どの 研修プランが 採用されましたか。`,
    question: 'どの 研修プランが 採用されましたか。',
    options: [
      { id: 'A', text: 'プランA：ビジネスマナー合宿', isCorrect: false, analysis: 'SAI: Ép buộc rập khuôn.' },
      { id: 'B', text: 'プランB：ハッカソン型ビジネス体験', isCorrect: false, analysis: 'SAI: Thiếu kiến thức nền tảng.' },
      { id: 'C', text: 'プランC：メンター制 OJT研修', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'プランD：反転学習型ハイブリッド研修', isCorrect: true, analysis: 'ĐÚNG: Kết hợp tự học online và thảo luận nhóm thực tế, cân bằng giữa kiến thức và tính tự chủ sáng tạo.' }
    ],
    speed30sTip: 'Bắt quan điểm tuyển dụng: Cân bằng kiến thức tự học và tư duy chủ động -> Chọn Plan D.',
    relatedKnowledge: 'Từ vựng đào tạo nhân lực N2: 反転学習, ハッカソン, OJT.'
  }
];
