import { JLPTQuestion } from '../../types';

// =========================================================================
// JLPT N3 CHOUKAI (30 CÂU CHUẨN THI: MONDAI 1 -> MONDAI 5 - 100% TIẾNG NHẬT)
// =========================================================================

export const N3_CHOUKAI_QUESTIONS: JLPTQuestion[] = [
  // --- MONDAI 1: 課題理解 (6 câu - Nhiệm vụ hành động tiếp theo) ---
  {
    id: 'n3-c-1',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    imageUrl: '/src/assets/images/jlpt_n3_mondai1_1790500870997.jpg',
    choukaiIllustration: {
      type: 'task_memo',
      title: '問題1: プレゼン資料準備ワークフロー',
      caption: '問題用紙の業務フローメモ (Sơ đồ các bước hoàn thiện tài liệu thuyết trình)',
      imageUrl: '/src/assets/images/jlpt_n3_mondai1_1790500870997.jpg',
      memoSheet: {
        header: 'プレゼン資料作成・承認フロー (Quy trình duyệt tài liệu)',
        items: [
          { label: 'Step 1: 価格比較グラフ修正', value: '最優先 (Ưu tiên số 1 làm ngay)', isFocus: true },
          { label: 'Step 2: 部長へメール送付・確認', value: 'グラフ修正完了後 (Gửi sếp xem)' },
          { label: 'Step 3: スライド印刷', value: '部長の了解後 (Chỉ in sau khi duyệt)' },
          { label: 'Step 4: 発表用セット準備', value: '会議当日 (Chuẩn bị phòng họp)' }
        ],
        footerNote: '「グラフを直してから、すぐ部長に送付します」'
      }
    },
    passageOrScript: `会社で 男の人と 女の人が 話しています。男の人は この後 まず 何を しますか。

男の人：先輩、新商品の プレゼン資料、作成が 完了しました。確認していただけますでしょうか。
女の人：ありがとう。よく まとまっているわね。でも、競合他社の 価格比較グラフが ちょっと 見づらいかもしれないわ。
男の人：あ、数字が 細かすぎましたか。
女の人：ええ。それと、発表用の スライドを 印刷する前に、部長に 一度 メールで 送って 見てもらえるかしら。部長の 了解が 取れたら 印刷しましょう。
男の人：承知しました。では、グラフを 直してから、すぐ 部長に 送付します。

質問：男の人は この後 まず 何を しますか。`,
    question: '男の人は この後 まず 何を しますか。',
    options: [
      { id: 'A', text: 'グラフの デザインを 修正します。', isCorrect: true, analysis: 'ĐÚNG: Bạn nam nói rõ thứ tự: "グラフを 直してから、すぐ 部長に 送付します" (Sửa biểu đồ trước rồi mới gửi email cho trưởng phòng).' },
      { id: 'B', text: '資料を 部長に メールで 送ります。', isCorrect: false, analysis: 'SAI: Phải sửa biểu đồ xong mới gửi.' },
      { id: 'C', text: 'スライドを 印刷します。', isCorrect: false, analysis: 'SAI: Chỉ in sau khi trưởng phòng duyệt.' },
      { id: 'D', text: '会議室を 予約します。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt cụm thứ tự "〜を直してから、すぐ部長に送付します" -> Sửa biểu đồ trước.',
    relatedKnowledge: 'Quy trình công việc công sở Nhật: 確認 -> 修正 -> 承認.'
  },
  {
    id: 'n3-c-2',
    level: 'N3',
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
      title: '問題1: 研究調査タスク締切メモ',
      caption: '研究室タスクスケジュール (Thời hạn các hạng mục điều tra)',
      memoSheet: {
        header: 'アンケート調査・提出スケジュール (Lịch nộp các phần việc)',
        items: [
          { label: 'アンケートデータ入力', value: '残り1時間で完了 (80% đã xong)' },
          { label: '年齢別集計表の作成', value: '【今日中 提出】(Hạn chót hôm nay)', isFocus: true },
          { label: '集計グラフ作成', value: '来週月曜日まで (Sang tuần sau)' },
          { label: '考察レポート', value: '来週月曜日まで (Sang tuần sau)' }
        ],
        footerNote: 'まずは集計表だけ今日中に提出'
      }
    },
    passageOrScript: `大学の 研究室で 教授と 女の学生が 話しています。女の学生は 今日中に 何を しなければ なりませんか。

教授：佐藤さん、アンケート調査の データ入力は 進んでいますか。
女の学生：はい、ほぼ 8割ほど 終わりました。
教授：素晴らしいですね。入力が 終わったら、回答者の 年齢別の 集計表を 作成してほしいのですが、今日中は 無理でしょうか。
女の学生：データ入力は 1時間ほどで 終わりますので、集計表まで なら 今日中に 提出できます。
教授：助かります。グラフの 作成や 考察の レポートは 来週の 月曜日で 結構ですから、まずは 集計表だけ お願いしますね。
女の学生：かしこまりました。

質問：女の学生は 今日中に 何を 提出しますか。`,
    question: '女の学生は 今日中に 何を 提出しますか。',
    options: [
      { id: 'A', text: '回答者の 年齢別集計表', isCorrect: true, analysis: 'ĐÚNG: Nữ sinh cam kết nộp bảng tổng hợp theo độ tuổi trong ngày hôm nay.' },
      { id: 'B', text: 'グラフの まとめ', isCorrect: false, analysis: 'SAI: Đến thứ Hai tuần sau.' },
      { id: 'C', text: '考察の レポート', isCorrect: false, analysis: 'SAI: Đến thứ Hai tuần sau.' },
      { id: 'D', text: '新しい アンケート用紙', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Phân định hạn nộp: 今日中 (trong ngày hôm nay) = 集計表; 来週月曜 = グラフ & 考察.',
    relatedKnowledge: 'Từ vựng thống kê nghiên cứu: データ入力, 集計表, 考察.'
  },
  {
    id: 'n3-c-3',
    level: 'N3',
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
      title: '問題1: 新幹線切符 発券窓口案内',
      caption: '駅構内案内メモ (Bảng chỉ dẫn các lựa chọn mua và in vé Shinkansen)',
      memoSheet: {
        header: '新幹線切符取扱カウンター案内 (Các điểm xử lý vé tàu)',
        items: [
          { label: '現在地: 国内ツアー相談窓口', value: '発券不可 (Chỉ tư vấn tour)' },
          { label: 'みどりの窓口 (有人カウンター)', value: '混雑中 (Đang rất đông người xếp hàng)' },
          { label: '自動券売機 (指定席発券機)', value: '並ばずにスムーズ (Không phải xếp hàng)', isFocus: true },
          { label: '改札口有人通路', value: '案内のみ (Chỉ hướng dẫn)' }
        ],
        footerNote: '「じゃあ、機械のほうでやってみます」'
      }
    },
    passageOrScript: `旅行会社で 男の人と 係の人が 話しています。男の人は これから どこへ 行きますか。

男の人：すみません。新幹線の 指定席を 予約したのですが、発券は こちらで できますか。
係の人：あいにく こちらの 窓口は 国内ツアーの 相談専用となっております。新幹線の 切符の 発券でしたら、外を 出て 右側にある みどりの窓口か、自動券売機を ご利用ください。
男の人：みどりの窓口は 混んでいますかね。
係の人：今の 時間帯でしたら、自動券売機の ほうが 並ばずに スムーズに 購入・発券していただけますよ。
男の人：わかりました。じゃあ、機械の ほうで やってみます。

質問：男の人は これから どこへ 行きますか。`,
    question: '男の人は これから どこへ 行きますか。',
    options: [
      { id: 'A', text: 'ツアー相談の 窓口', isCorrect: false, analysis: 'SAI: Đang ở đây.' },
      { id: 'B', text: 'みどりの窓口', isCorrect: false, analysis: 'SAI: Sợ đông nên không vào.' },
      { id: 'C', text: '自動券売機', isCorrect: true, analysis: 'ĐÚNG: Khách chốt "機械の ほうで やってみます" (Tôi sẽ dùng máy bán vé tự động).' },
      { id: 'D', text: '改札口', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe quyết định cuối cùng "機械のほうでやってみます" -> Máy bán vé tự động.',
    relatedKnowledge: 'Dịch vụ nhà ga: みどりの窓口, 自動券売機.'
  },
  {
    id: 'n3-c-4',
    level: 'N3',
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
      title: '問題1: ボランティア活動 集合変更連絡',
      caption: '活動連絡シート (Thông báo điều chỉnh địa điểm tập trung dọn rác bãi biển)',
      memoSheet: {
        header: '海岸清掃活動・集合連絡 (Lịch trình dọn bờ biển)',
        items: [
          { label: '旧集合場所: 西海岸公園', value: '【変更・中止】(Không tập trung ở đây)' },
          { label: '新集合場所: 管理センター前', value: '【決定】清掃道具を配布 (Địa điểm mới)', isFocus: true },
          { label: '集合時間', value: '8時45分 (点呼・説明があるため)' },
          { label: '活動開始時間', value: '9時00分〜11時30分' }
        ],
        footerNote: '※雨天中止時は当日朝7時にHP掲示'
      }
    },
    passageOrScript: `ボランティア団体の 会議で リーダーが 話しています。参加者は 明日の 朝、何時に どこへ 集まらなければ なりませんか。

リーダー：明日の 海岸清掃活動について 連絡します。集合場所は 当初 予定していた 西海岸公園ではなく、清掃道具を 配布する 管理センターの 前に 変更になりました。時間は 9時開始ですが、点呼と 説明が ありますので、8時45分までに 必ず お集まりください。雨天の 場合は 中止となりますが、その 際は 朝 7時に ホームページで 告知します。

質問：参加者は 明日の 朝、どこへ 集まりますか。`,
    question: '参加者は 明日の 朝、どこへ 集まりますか。',
    options: [
      { id: 'A', text: '西海岸公園', isCorrect: false, analysis: 'SAI: Kế hoạch ban đầu đã bị đổi.' },
      { id: 'B', text: '管理センターの 前', isCorrect: true, analysis: 'ĐÚNG: Đổi địa điểm sang trước Trung tâm quản lý để phát dụng cụ dọn dẹp.' },
      { id: 'C', text: '駅の 改札口', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '市役所の 駐車場', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt thông báo thay đổi: "〜ではなく、管理センターの前に変更になりました".',
    relatedKnowledge: 'Mẫu câu đính chính: 当初予定していた〜ではなく、〜に変更.'
  },
  {
    id: 'n3-c-5',
    level: 'N3',
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
      title: '問題1: 来客対応マニュアル',
      caption: '応接対応手順チェックリスト (Thứ tự tiếp đón trưởng phòng đối tác lúc 14h)',
      memoSheet: {
        header: '中村部長（取引先）来訪対応手順 (Quy trình đón khách)',
        items: [
          { label: '事前準備: エアコン', value: '【完了】すでに稼働中 (Đã bật trước)' },
          { label: 'ステップ1: 応接室案内＋お茶出し', value: '【まず最初に行う】(Đưa vào phòng & rót trà)', isFocus: true },
          { label: 'ステップ2: 内線で先輩を呼び出し', value: 'お茶出し完了直後 (Gọi báo sếp)' },
          { label: 'ステップ3: 本面談・名刺交換', value: '先輩が合流して実施 (Sếp cùng tiếp)' }
        ],
        footerNote: '「お通ししてお茶を出したら、内線で私を呼んで」'
      }
    },
    passageOrScript: `オフィスで 女の人と 男の人が 話しています。男の人は お客様が 来られたら まず 何を しますか。

女の人：加藤さん、14時に 取引先の 中村部長が いらっしゃいます。応接室へ ご案内して お茶を お出ししてください。
男の人：はい。名刺交換は 私も 立ち会いますか。
女の人：いえ、私が すぐ 参りますので、お通しして お茶を 出したら、内線で 私を 呼んでいただければ 結構です。
男の人：わかりました。応接室の エアコンは 先に つけておきますね。
女の人：ええ、それは もう つけてあるから 大丈夫よ。

質問：男の人は お客様が 来られたら まず 何を しますか。`,
    question: '男の人は お客様が 来られたら まず 何を しますか。',
    options: [
      { id: 'A', text: '応接室へ 案内して お茶を 出します。', isCorrect: true, analysis: 'ĐÚNG: Dẫn khách vào phòng tiếp khách và rót trà, sau đó bấm máy nội bộ gọi sếp.' },
      { id: 'B', text: 'エアコンの スイッチを 入れます。', isCorrect: false, analysis: 'SAI: Đã bật sẵn rồi.' },
      { id: 'C', text: '名刺交換を します。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '会議の 資料を 配ります。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Điều hòa đã bật sẵn -> Khách đến thì dẫn vào phòng tiếp khách và mời trà.',
    relatedKnowledge: 'Quy tắc lễ nghi tiếp khách công sở: 応接室へご案内, お茶出し.'
  },
  {
    id: 'n3-c-6',
    level: 'N3',
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
      title: '問題1: 奨学金申請 書類チェックリスト',
      caption: '提出書類チェックリスト (Các giấy tờ cần chuẩn bị xin học bổng)',
      memoSheet: {
        header: '奨学金申請必要書類一覧 (Danh mục giấy tờ nộp)',
        items: [
          { label: '奨学金申請書', value: '窓口配布・各自記入' },
          { label: '成績証明書', value: '【自動発行機で学生証を使用し発行】', isFocus: true },
          { label: '指導教員の推薦状', value: '担当教授へ依頼済み (Giáo viên viết)' },
          { label: '在留カードコピー', value: '各自コピー添付 (Bản photo thẻ)' }
        ],
        footerNote: '証明書自動発行機で取得する書類 = 成績証明書'
      }
    },
    passageOrScript: `日本語学校で 留学生が 職員と 話しています。留学生は 奨学金の 申請のために 何を 提出しなければ なりませんか。

留学生：奨学金の 申し込みを したいのですが、書類は 何が 必要ですか。
職員：申請書と、成績証明書、それから 指導教員の 推薦状ですね。
留学生：推薦状は 先生に お願いして あるのですが、成績証明書は どこで もらえますか。
職員：証明書自動発行機で 学生証を 使って 発行できますよ。それと、在留カードの コピーも 忘れずに 添えてくださいね。

質問：留学生が 自分で 発行機から 取ってくる 書類は どれですか。`,
    question: '留学生が 自分で 発行機から 取ってくる 書類は どれですか。',
    options: [
      { id: 'A', text: '推薦状', isCorrect: false, analysis: 'SAI: Giáo viên viết.' },
      { id: 'B', text: '成績証明書', isCorrect: true, analysis: 'ĐÚNG: Dùng thẻ sinh viên in tại máy cấp chứng chỉ tự động.' },
      { id: 'C', text: '申請書', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '在留カード', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi tài liệu tự in tại máy (発行機) -> Bắt "成績証明書".',
    relatedKnowledge: 'Thủ tục học bổng: 成績証明書, 推薦状.'
  },

  // --- MONDAI 2: ポイント理解 (6 câu - Nắm bắt điểm then chốt / Lý do / Chi tiết) ---
  {
    id: 'n3-c-7',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `男の人と 女の人が 話しています。男の人は どうして 新しい スマートフォンに 買い替えたのですか。

男の人：見て、これ。昨日 新しい スマホを 買ったんだ。
女の人：わあ、最新の モデルね！ 前の スマホ、まだ 1年も 使っていなかったんじゃない？
男の人：うん。画面が 割れたわけでも ないし、バッテリーも 問題なかったんだけどね。
女の人：じゃあ、どうして？
男の人：今度 キャンプや 旅行に よく 行くように なったから、暗い ところでも きれいに 撮れる カメラ機能が どうしても 欲しくなっちゃって。
女の人：なるほどね。写真が 趣味だもんね。

質問：男の人が スマートフォンを 買い替えた 理由は 何ですか。`,
    question: '男の人が スマートフォンを 買い替えた 理由は 何ですか。',
    options: [
      { id: 'A', text: '画面が 割れてしまったから', isCorrect: false, analysis: 'SAI: Phủ định "割れたわけでもない".' },
      { id: 'B', text: 'バッテリーの 減りが 早かったから', isCorrect: false, analysis: 'SAI: Pin vẫn tốt.' },
      { id: 'C', text: '高性能な カメラ機能が 欲しかったから', isCorrect: true, analysis: 'ĐÚNG: Đi du lịch cắm trại nên muốn có camera chụp đẹp trong đêm.' },
      { id: 'D', text: '値段が 安く セールだったから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Loại trừ các giả thiết màn hình vỡ / pin yếu -> Chọn tính năng camera xịn.',
    relatedKnowledge: 'Từ vựng công nghệ: バッテリー, カメラ機能, 買い替える.'
  },
  {
    id: 'n3-c-8',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `会社で 上司と 部下が 話しています。上司は 新しい アルバイトの 人について 何を 評価していますか。

上司：新しく 入った アルバイトの リンさん、仕事ぶりは どう？
部下：まだ 日本語の 敬語は 勉強中ですが、挨拶が いつも 元気で 気持ちがいいです。
上司：そうだね。あと、わからない ことが あったとき、自分で 勝手に 判断しないで、必ず 先輩に 質問・確認してから 動いているよね。あれは 素晴らしい 姿勢だよ。
部下：はい、ミスが 非常に 少なくて 助かっています。

質問：上司が 新しい アルバイトの 人を 最も 評価している 点は 何ですか。`,
    question: '上司が 新しい アルバイトの 人を 最も 評価している 点は 何ですか。',
    options: [
      { id: 'A', text: '敬語が 完璧に 使えること', isCorrect: false, analysis: 'SAI: Đang học.' },
      { id: 'B', text: '疑問点を 確認してから 行動すること', isCorrect: true, analysis: 'ĐÚNG: Sếp đánh giá cao việc không tự tiện phán đoán mà luôn hỏi/xác nhận tiền bối rồi mới làm.' },
      { id: 'C', text: 'パソコンの スキルが 高いこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '残業を たくさん すること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt câu chốt đánh giá của sếp: "勝手に判断しないで、必ず先輩に確認してから動いている... あれは素晴らしい姿勢".',
    relatedKnowledge: 'Quy tắc làm việc Nhật Bản: ほうれんそう (Báo cáo - Liên lạc - Bàn bạc).'
  },
  {
    id: 'n3-c-9',
    level: 'N3',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `ラジオで アナウンサーが 最近 人気の 習い事について 話しています。なぜ 大人の 間で 料理教室が 人気なのですか。

アナウンサー：最近、仕事帰りに 料理教室に 通う 社会人が 急増しています。以前は 花嫁修業などの ために 女性が 多く 通っていましたが、現在は 健康管理を 意識して バランスの 良い 食事を 自分で 作りたくなった 男性や、料理を 作る ことで 仕事の ストレスを 解消したいという 人々が 増えています。食への 関心が 高まったことが 大きな 理由の ようです。

質問：最近 大人の 間で 料理教室が 人気な 理由は 何ですか。`,
    question: '最近 大人の 間で 料理教室が 人気な 理由は 何ですか。',
    options: [
      { id: 'A', text: '結婚の 準備を するため', isCorrect: false, analysis: 'SAI: Đó là ngày xưa.' },
      { id: 'B', text: '健康管理や ストレス解消を 意識する 人が 増えたから', isCorrect: true, analysis: 'ĐÚNG: Muốn tự nấu ăn dinh dưỡng giữ sức khỏe và giải tỏa áp lực công việc.' },
      { id: 'C', text: 'プロの 料理人に 転職するため', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '教室の 授業料が 安くなったから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'So sánh quá khứ vs hiện tại: Hiện nay học vì 健康管理 và ストレス解消.',
    relatedKnowledge: 'Từ vựng xã hội: 習い事, 健康管理, ストレス解消.'
  },
  {
    id: 'n3-c-10',
    level: 'N3',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `病院で 医者と 男の人が 話しています。男の人は どんな 運動を 勧められましたか。

医者：健康診断の 結果ですが、少し コレステロール値が 高めですね。日頃、運動は されていますか。
男の人：いえ、仕事が デスクワークなので、ほとんど 運動していません。激しい ジムの 筋トレとかを 始めたほうが いいでしょうか。
医者：いきなり 激しい 運動を すると 心臓や 関節に 負担が かかります。まずは 毎日の 通勤で 1駅分 歩くとか、無理のない ウォーキングから 始めてみてください。
男の人：わかりました。歩く ことなら 続けられそうです。

質問：医者は 男の人に どんな 運動を 勧めましたか。`,
    question: '医者は 男の人に どんな 運動を 勧めましたか。',
    options: [
      { id: 'A', text: 'ジムでの 激しい 筋トレ', isCorrect: false, analysis: 'SAI: Bác sĩ khuyên không nên vì áp lực tim mạch.' },
      { id: 'B', text: '無理のない ウォーキング（歩行）', isCorrect: true, analysis: 'ĐÚNG: Bác sĩ khuyên đi bộ vừa sức (1 trạm tàu hoặc đi bộ nhẹ nhàng).' },
      { id: 'C', text: '水泳', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'マラソン大会への 出場', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bác sĩ bác bỏ tập tạ nặng -> Khuyên đi bộ nhẹ nhàng (ウォーキング).',
    relatedKnowledge: 'Từ vựng sức khỏe: コレステロール, 負担がかかる, ウォーキング.'
  },
  {
    id: 'n3-c-11',
    level: 'N3',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `女の人と 男の人が 話しています。女の人は なぜ その ホテルを 選びましたか。

女の人：今度の 連休の 温泉旅行、ホテルを 予約したよ。
男の人：へえ、どんな ところ？ 露天風呂が 有名な ところ？
女の人：お風呂も 素晴らしいんだけど、決め手は 地元の 新鮮な 海の幸を 使った 懐石料理が 部屋食で 楽しめる プランが あったからなの。周りを 気にせず ゆっくり 食べられるでしょう。
男の人：いいね！ 部屋で 贅沢な 食事が できるのは 最高だね。

質問：女の人が その ホテルを 選んだ 決め手は 何ですか。`,
    question: '女の人が その ホテルを 選んだ 決め手は 何ですか。',
    options: [
      { id: 'A', text: '宿泊料金が 非常に 安かったから', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '新鮮な 料理を 部屋で 食べられる プランが あったから', isCorrect: true, analysis: 'ĐÚNG: Yếu tố quyết định là gói ăn món Kaiseki hải sản tươi ngay tại phòng riêng.' },
      { id: 'C', text: '駅から 送迎バスが あったから', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '部屋に プールが ついていたから', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt từ khóa "決め手は..." -> Ăn món hải sản tươi ngon ngay tại phòng.',
    relatedKnowledge: 'Từ vựng du lịch Nhật Bản: 露天風呂, 懐石料理, 部屋食.'
  },
  {
    id: 'n3-c-12',
    level: 'N3',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `男の人と 女の人が 話しています。二人の 会話の 内容と 合っているものは どれですか。

男の人：山田さん、今度の 社員旅行の 幹事、誰に なったか 知ってる？
女の人：営業部の 鈴木さんと、総務部の 木村さんだよ。
男の人：そうなんだ。今年は どこへ 行くんだろう。
女の人：アンケートの 結果、北海道と 沖縄が 同点だったらしいんだけど、予算と 日程の 関係で、最終的に 箱根の 温泉に 決まったみたい。
男の人：なるほど。近場なら 移動疲れも なくて のんびり できそうだね。

質問：今年の 社員旅行の 行き先は どこに 決まりましたか。`,
    question: '今年の 社員旅行の 行き先は どこに 決まりましたか。',
    options: [
      { id: 'A', text: '北海道', isCorrect: false, analysis: 'SAI: Bị loại vì ngân sách/lịch trình.' },
      { id: 'B', text: '沖縄', isCorrect: false, analysis: 'SAI: Bị loại vì ngân sách/lịch trình.' },
      { id: 'C', text: '箱根', isCorrect: true, analysis: 'ĐÚNG: Cuối cùng quyết định đi suối nước nóng Hakone (箱根の温泉).' },
      { id: 'D', text: '京都', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt câu chốt sau từ nối: "最終的に 箱根の温泉に決まったみたい".',
    relatedKnowledge: 'Từ vựng hội nghị/du lịch công ty: 幹事, 予算, 近場.'
  },

  // --- MONDAI 3: 概要理解 (5 câu - Hiểu khái quát / Ý chính toàn bài) ---
  {
    id: 'n3-c-13',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `テレビで アナウンサーが ある 町の 取り組みについて 話しています。

アナウンサー：こちらの 緑町では、高齢化が 進む中、買い物難民を 支援する 新しい 試みが 始まりました。週に 3回、野菜や 魚、日用品を 積んだ 移動スーパーの 車が、山間部の 集落を 巡回しています。ただ 買い物が できるだけでなく、一人暮らしの 高齢者の 安否確認や、住民同士の 交流の 場としても 大きな 役割を 果たしています。

質問：アナウンサーは 何について リポートしていますか。`,
    question: 'アナウンサーは 何について リポートしていますか。',
    options: [
      { id: 'A', text: '山間部での 新しい 農業の 技術', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '移動スーパーによる 高齢者支援の 取り組み', isCorrect: true, analysis: 'ĐÚNG: Xe siêu thị lưu động vừa giúp mua sắm vừa hỗ trợ an sinh người già vùng núi.' },
      { id: 'C', text: '若者の 地方移住を 増やす 方法', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '町での 病院の 建設プラン', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nắm chủ đề bao quát: Xe bán hàng lưu động hỗ trợ người cao tuổi.',
    relatedKnowledge: 'Vấn đề xã hội Nhật Bản: 高齢化, 買い物難民, 移動スーパー.'
  },
  {
    id: 'n3-c-14',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `講演会で 睡眠の 専門家が 話しています。

専門家：みなさん、休日に 普段より 何時間も 長く 寝ていませんか。平日の 睡眠不足を 週末に まとめて 取り戻そうとする、いわゆる「寝だめ」は、実は 体内時計を 大きく 狂わせてしまいます。その 結果、月曜日の 朝に 強い だるさや 集中力の 低下を 引き起こすのです。週末も 平日と 同じ 規則正しい リズムで 起きることが、真の 疲労回復に つながります。

質問：専門家が 最も 伝えたいことは 何ですか。`,
    question: '専門家が 最も 伝えたいことは 何ですか。',
    options: [
      { id: 'A', text: '休日に たくさん 寝だめを することの 大切さ', isCorrect: false, analysis: 'SAI: Chuyên gia phản đối ngủ bù.' },
      { id: 'B', text: '休日も 平日と 同じ 時間に 起きて リズムを 保つこと', isCorrect: true, analysis: 'ĐÚNG: Duy trì nhịp sinh học đều đặn cả ngày nghỉ để cơ thể không mệt mỏi.' },
      { id: 'C', text: '平日に 残業を しない 工夫', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '良い 枕や 布団を 選ぶ コツ', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt ý cốt lõi: Ngủ bù (寝だめ) là sai, phải giữ nhịp sinh học đều đặn.',
    relatedKnowledge: 'Từ vựng sức khỏe sinh học: 寝だめ, 体内時計, 疲労回復.'
  },
  {
    id: 'n3-c-15',
    level: 'N3',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `会社で 社長が 社員に 訓示を 述べています。

社長：わが社が 長年 お客様から 信頼を いただいてきた 理由は、製品の 性能だけでは ありません。故障や 問い合わせが あった際の、アフターサービスの 迅速さと 誠実な 対応こそが、お客様の 心を つかんできたのです。新製品の 開発はもちろん 重要ですが、顧客一人ひとりの 声に 真摯に 耳を 傾ける 基本姿勢を、決して 忘れては なりません。

質問：社長は 何が 最も 重要だと 述べていますか。`,
    question: '社長は 何が 最も 重要だと 述べていますか。',
    options: [
      { id: 'A', text: '製品の 価格を 限界まで 下げること', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: 'お客様への 誠実で 迅速な サポート対応', isCorrect: true, analysis: 'ĐÚNG: Dịch vụ hậu mãi chân thành và nhanh chóng (誠実な対応, アフターサービス).' },
      { id: 'C', text: '海外市場への 進出を 急ぐこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '社員の 労働時間を 短縮すること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt ý bao quát: "アフターサービスの迅速さと誠実な対応こそが重要".',
    relatedKnowledge: 'Từ vựng triết lý doanh nghiệp: 信頼, アフターサービス, 真摯に.'
  },
  {
    id: 'n3-c-16',
    level: 'N3',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `ラジオで 環境問題の 専門家が プラスチックごみについて 話しています。

専門家：最近、海に 流れ出る プラスチックごみが 生態系に 与える 悪影響が 深刻化しています。レジ袋の 有料化や マイボトルの 持参など、個人の 意識改革も 進んでいますが、それだけでは 根本的な 解決には なりません。企業が 自然に 還る 生分解性プラスチックを 開発したり、自治体が リサイクル体制を 抜本的に 強化するなど、社会全体の 構造転換が 求められています。

質問：専門家は プラスチック問題の 解決に 何が 必要だと 主張していますか。`,
    question: '専門家は プラスチック問題の 解決に 何が 必要だと 主張していますか。',
    options: [
      { id: 'A', text: '個人の 節約意識だけで 十分である', isCorrect: false, analysis: 'SAI: Phủ định "それだけでは根本的解決にならない".' },
      { id: 'B', text: '企業や 自治体を含めた 社会全体の 構造的な 取り組み', isCorrect: true, analysis: 'ĐÚNG: Cần sự chuyển đổi cơ cấu toàn xã hội từ doanh nghiệp nghiên cứu vật liệu đến chính quyền tăng tái chế.' },
      { id: 'C', text: 'プラスチック製品の 製造を 全面禁止すること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '海での 漁業活動を 中止すること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Loại trừ nỗ lực cá nhân đơn lẻ -> Chọn chuyển đổi cấu trúc toàn xã hội.',
    relatedKnowledge: 'Từ vựng môi trường: 生態系, 生分解性, 構造転換.'
  },
  {
    id: 'n3-c-17',
    level: 'N3',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `美術館の 学芸員が 展覧会の 開会式で 挨拶を しています。

学芸員：本展では、日本の 伝統工芸品が 現代の ライフスタイルに どのように 溶け込んでいるかを テーマに 展示を 構成いたしました。古くからの 技法を 継承しながらも、現代の 洋室に 合う 食器や インテリアへと 進化を 遂げた 作品の 数々を ご覧いただけます。過去の 遺産として 鑑賞するのではなく、日々の 暮らしを 豊かにする 身近な 道具としての 魅力を 感じていただければ 幸いです。

質問：この 展覧会の 目的は 何ですか。`,
    question: 'この 展覧会の 目的は 何ですか。',
    options: [
      { id: 'A', text: '伝統工芸の 道具を 昔の まま 保存すること', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '現代の 暮らしに 生かされている 伝統工芸の 魅力を 伝えること', isCorrect: true, analysis: 'ĐÚNG: Giới thiệu vẻ đẹp thủ công truyền thống được ứng dụng vào đời sống hiện đại.' },
      { id: 'C', text: '海外の 美術品と 日本の 工芸品を 比較すること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '伝統工芸品を 高値で 販売すること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nắm thông điệp: Thủ công truyền thống dung hòa trong đời sống hiện đại.',
    relatedKnowledge: 'Từ vựng văn hóa mỹ thuật: 伝統工芸, 継承, 鑑賞.'
  },

  // --- MONDAI 4: 即時応答 (9 câu - Phản xạ ứng đáp hội thoại tức thì) ---
  {
    id: 'n3-c-18',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: プレゼン後の感想・励まし',
      caption: '相手の発話を聞いて、瞬時に最も適切な返答を選んでください',
      dialogueContext: {
        setting: 'オフィス・プレゼン直後の廊下 (Hành lang sau buổi thuyết trình)',
        characters: '同僚の男性 と あなた (Đồng nghiệp nam và bạn)',
        speechBubble: '昨日のプレゼン、緊張してうまく話せなかったよ。',
        atmosphere: '相手が落ち込んで自信をなくしている場面'
      }
    },
    passageOrScript: `昨日の プレゼン、緊張して うまく 話せなかったよ。

1：そんなこと ないよ。堂々としていて 素晴らしかったよ。
2：ええ、本当に 下手でしたね。
3：はい、緊張しませんでした。`,
    question: '昨日の プレゼン、緊張して うまく 話せなかったよ。',
    options: [
      { id: 'A', text: 'そんなこと ないよ。堂々としていて 素晴らしかったよ。', isCorrect: true, analysis: 'ĐÚNG: An ủi và khen ngợi phong thái tự tin của bạn.' },
      { id: 'B', text: 'ええ、本当に 下手でしたね。', isCorrect: false, analysis: 'SAI: Cực kỳ bất lịch sự.' },
      { id: 'C', text: 'はい、緊張しませんでした。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'プレゼンです。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Khi bạn tự ti "うまく話せなかった" -> Động viên "そんなことないよ、堂々としていたよ".',
    relatedKnowledge: 'Cách động viên trong giao tiếp thân mật.'
  },
  {
    id: 'n3-c-19',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: 企画書の確認依頼',
      caption: '後輩からの依頼に対する適切な返答',
      dialogueContext: {
        setting: 'オフィスのデスク (Bàn làm việc văn phòng)',
        characters: '後輩社員 と 先輩（あなた）',
        speechBubble: '先輩、この企画書、少し目を通していただけませんか。',
        atmosphere: '後輩が緊張しながら書類を手渡して依頼する場面'
      }
    },
    passageOrScript: `先輩、この 企画書、少し 目を 通していただけませんか。

1：うん、後で 時間が あるときに 見ておくね。
2：いいえ、目が 痛いです。
3：はい、目を通しましたよ。`,
    question: '先輩、この 企画書、少し 目を 通していただけませんか。',
    options: [
      { id: 'A', text: 'うん、後で 時間が あるときに 見ておくね。', isCorrect: true, analysis: 'ĐÚNG: Đồng ý nhận xem qua tài liệu khi có thời gian rảnh.' },
      { id: 'B', text: 'いいえ、目が 痛いです。', isCorrect: false, analysis: 'SAI: Hiểu sai nghĩa đen của quán dụng ngữ.' },
      { id: 'C', text: 'はい、目を通しましたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '企画書を 書きます。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Quán dụng ngữ "目を通す" = Xem qua -> Đáp "後で見ておくね".',
    relatedKnowledge: 'Quán dụng ngữ cơ thể: 目を通す (đọc lướt qua).'
  },
  {
    id: 'n3-c-20',
    level: 'N3',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: 天気と傘の助言',
      caption: '日常の気配り発言に対する返答',
      dialogueContext: {
        setting: '会社の玄関・外出前 (Cửa ra vào trước khi ra ngoài)',
        characters: '同僚 と あなた (Đồng nghiệp và bạn)',
        speechBubble: '雨が降りそうだから、傘を持って行ったほうがいいんじゃない？',
        atmosphere: '曇り空を見上げながらの親切なアドバイス'
      }
    },
    passageOrScript: `雨が 降りそうだから、傘を 持って行った ほうが いいんじゃない？

1：そうだね、念のため 持って行くよ。
2：いいえ、降っていました。
3：傘を 買いましたよ。`,
    question: '雨が 降りそうだから、傘を 持って行った ほうが いいんじゃない？',
    options: [
      { id: 'A', text: 'そうだね、念のため 持って行くよ。', isCorrect: true, analysis: 'ĐÚNG: Đồng ý mang theo ô đề phòng (念のため).' },
      { id: 'B', text: 'いいえ、降っていました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: '傘を 買いましたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '雨は 好きです。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Khuyên mang ô phòng hờ -> Đáp "そうだね、念のため持って行くよ".',
    relatedKnowledge: 'Từ phó từ thường gặp: 念のため (để cho chắc chắn).'
  },
  {
    id: 'n3-c-21',
    level: 'N3',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: 上司への荷物運びの申し出',
      caption: '部下の申し出に対する上司（課長）の返答',
      dialogueContext: {
        setting: '出張先の駅・空港 (Ga tàu/Sân bay đi công tác)',
        characters: '課長（あなた） と 部下',
        speechBubble: '課長、お荷物お持ちいたしましょうか。',
        atmosphere: '部下が重い荷物を持つ上司を気遣う場面'
      }
    },
    passageOrScript: `課長、お荷物 お持ちいたしましょうか。

1：あ、悪いね。じゃあ、これ お願いできるかな。
2：はい、持ってあげます。
3：どういたしまして。`,
    question: '課長、お荷物 お持ちいたしましょうか。',
    options: [
      { id: 'A', text: 'あ、悪いね。じゃあ、これ お願いできるかな。', isCorrect: true, analysis: 'ĐÚNG: Cấp trên đáp lại lời đề nghị xách đồ giúp của cấp dưới.' },
      { id: 'B', text: 'はい、持ってあげます。', isCorrect: false, analysis: 'SAI: Ngược ngôi xưng.' },
      { id: 'C', text: 'どういたしまして。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '失礼します。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Cấp dưới đề nghị khiêm nhường "お持ちいたしましょうか" -> Cấp trên đáp "あ、悪いね。お願いできるかな".',
    relatedKnowledge: 'Kính ngữ nơi công sở: お〜いたしましょうか.'
  },
  {
    id: 'n3-c-22',
    level: 'N3',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: 締切スケジュールの調整相談',
      caption: '部下の困り相談に対する上司の判断',
      dialogueContext: {
        setting: 'オフィス会議スペース (Bàn trao đổi công việc)',
        characters: '担当社員 と 上司（あなた）',
        speechBubble: 'この書類、明日までに作成するのはちょっと厳しいんですが……。',
        atmosphere: '締め切りに間に合わない懸念を相談する場面'
      }
    },
    passageOrScript: `この 書類、明日までに 作成するのは ちょっと 厳しいんですが……。

1：そうですか。じゃあ、明後日の 朝までに 延ばしましょう。
2：はい、厳しく 作成してください。
3：いいえ、明日までに 終わりました。`,
    question: 'この 書類、明日までに 作成するのは ちょっと 厳しいんですが……。',
    options: [
      { id: 'A', text: 'そうですか。じゃあ、明後日の 朝までに 延ばしましょう。', isCorrect: true, analysis: 'ĐÚNG: Nhận biết nhân viên kêu khó kịp tiến độ nên lùi thời hạn sang sáng ngày kia.' },
      { id: 'B', text: 'はい、厳しく 作成してください。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'いいえ、明日までに 終わりました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '書類です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bày tỏ khó khăn "ちょっと厳しいんですが" -> Điều chỉnh thời hạn lùi lại.',
    relatedKnowledge: 'Từ vựng đàm phán tiến độ: 厳しい, 延ばす.'
  },
  {
    id: 'n3-c-23',
    level: 'N3',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: 会議準備の進捗確認',
      caption: '上司からの確認に対する的確な回答',
      dialogueContext: {
        setting: '役員会議前 (Trước giờ họp ban giám đốc)',
        characters: '部長 と 田中さん（あなた）',
        speechBubble: '田中さん、午後からの会議、資料の準備は万全ですか。',
        atmosphere: '重役会議を控えた緊迫感のある事前確認'
      }
    },
    passageOrScript: `田中さん、午後からの 会議、資料の 準備は 万全ですか。

1：ええ、抜かりなく 準備して あります。
2：いいえ、全然 準備しませんでした。
3：会議は 中止になりましたよ。`,
    question: '田中さん、午後からの 会議、資料の 準備は 万全ですか。',
    options: [
      { id: 'A', text: 'ええ、抜かりなく 準備して あります。', isCorrect: true, analysis: 'ĐÚNG: Khẳng định đã chuẩn bị chu đáo không chút thiếu sót (抜かりなく).' },
      { id: 'B', text: 'いいえ、全然 準備しませんでした。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: '会議は 中止になりましたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '資料です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Hỏi chu đáo chưa (万全ですか) -> Đáp tự tin "抜かりなく準備してあります".',
    relatedKnowledge: 'Từ vựng công việc: 万全 (chu toàn), 抜かりなく (không sơ suất).'
  },
  {
    id: 'n3-c-24',
    level: 'N3',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 7
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: 来訪取引先の出迎えに対する謝意',
      caption: '取引先の恐縮発言に対する洗練された応対',
      dialogueContext: {
        setting: '駅の改札口 (Cổng ga đón đối tác kinh doanh)',
        characters: '取引先クライアント と あなた (Phụ trách đón khách)',
        speechBubble: 'わざわざ駅まで迎えに来ていただいて、恐縮です。',
        atmosphere: '取引先が礼儀正しく感謝の言葉を述べる場面'
      }
    },
    passageOrScript: `わざわざ 駅まで 迎えに 来ていただいて、恐縮です。

1：とんでもないです。お役に 立てて よかったです。
2：はい、恐縮しました。
3：どういたしまして、疲れました。`,
    question: 'わざわざ 駅まで 迎えに 来ていただいて、恐縮です。',
    options: [
      { id: 'A', text: 'とんでもないです。お役に 立てて よかったです。', isCorrect: true, analysis: 'ĐÚNG: Đáp lại sự khách sáo bằng khiêm nhường chuẩn mực: "とんでもないです".' },
      { id: 'B', text: 'はい、恐縮しました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'どういたしまして、疲れました。', isCorrect: false, analysis: 'SAI: Than mệt là bất lịch sự.' },
      { id: 'D', text: '駅です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Khách nói "恐縮です" -> Đáp nhã nhặn "とんでもないです".',
    relatedKnowledge: 'Thành ngữ lịch sự kinh doanh: 恐縮です, とんでもないです.'
  },
  {
    id: 'n3-c-25',
    level: 'N3',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 8
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: 提案への指摘とコスト懸念',
      caption: '上司からの改善指摘に対する前向きな受容',
      dialogueContext: {
        setting: '企画レビュー会議 (Cuộc họp đánh giá dự án)',
        characters: '上司（部長） と 企画担当（あなた）',
        speechBubble: '君の意見には一理あるけれど、コストの面を考えると難しいね。',
        atmosphere: 'アイデアを認めつつもコスト面の壁を指摘される場面'
      }
    },
    passageOrScript: `君の 意見には 一理あるけれど、コストの 面を 考えると 難しいね。

1：おっしゃる通りです。再検討いたします。
2：いいえ、コストは かかりません。
3：私の 勝ちですね。`,
    question: '君の 意見には 一理あるけれど、コストの 面を 考えると 難しいね。',
    options: [
      { id: 'A', text: 'おっしゃる通りです。再検討いたします。', isCorrect: true, analysis: 'ĐÚNG: Tiếp thu ý kiến của sếp và xin phép xem xét lại.' },
      { id: 'B', text: 'いいえ、コストは かかりません。', isCorrect: false, analysis: 'SAI: Phủ nhận thiếu căn cứ.' },
      { id: 'C', text: '私の 勝ちですね。', isCorrect: false, analysis: 'SAI: Lạc đề.' },
      { id: 'D', text: '意見です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Sếp phân tích chi phí khó khả thi -> Tiếp thu "おっしゃる通りです。再検討いたします".',
    relatedKnowledge: 'Từ vựng thương thảo: 一理ある (có phần đúng), 再検討.'
  },
  {
    id: 'n3-c-26',
    level: 'N3',
    year: '2015-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、絵などがありません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 9
    },
    choukaiIllustration: {
      type: 'dialogue_scene',
      title: '問題4: 打ち合わせ結果の報告手段の伺い',
      caption: '部下の伺いに対する上司の承認',
      dialogueContext: {
        setting: '社内チャット・電話 (Báo cáo sau buổi gặp khách hàng)',
        characters: '部長（あなた） と 外回り中の部下',
        speechBubble: '部長、本日の打ち合わせの件、メールでご報告申し上げてもよろしいでしょうか。',
        atmosphere: '外出先から簡潔に報告を済ませたい部下からの伺い'
      }
    },
    passageOrScript: `部長、本日の 打ち合わせの 件、メールで ご報告申し上げても よろしいでしょうか。

1：ああ、それで 構わないよ。よろしく頼むね。
2：はい、メールを 読みました。
3：いいえ、報告しましたよ。`,
    question: '部長、本日の 打ち合わせの 件、メールで ご報告申し上げても よろしいでしょうか。',
    options: [
      { id: 'A', text: 'ああ、それで 構わないよ。よろしく頼むね。', isCorrect: true, analysis: 'ĐÚNG: Trưởng phòng đồng ý cho phép báo cáo qua email.' },
      { id: 'B', text: 'はい、メールを 読みました。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'いいえ、報告しましたよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '打ち合わせです。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Xin phép báo cáo qua email -> Đáp "ああ、それで構わないよ".',
    relatedKnowledge: 'Khiêm nhường ngữ: ご報告申し上げる.'
  },

  // --- MONDAI 5: 統合理解 (4 câu - Hiểu tổng hợp / Thảo luận chọn phương án tối ưu) ---
  {
    id: 'n3-c-27',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `家族 3人（父親、母親、高校生の 娘）が、休日に 行く レジャー施設について 話しています。

父親：今度の 日曜日、久しぶりに 家族で 出かけようか。どこか 行きたい ところは ある？
娘：わたし、新しく できた 水族館に 行ってみたい！ イルカショーが すごく 人気らしいよ。
母親：水族館も いいけど、日曜日は かなり 混雑しそうね。それより、季節の 花が 満開の 植物園は どう？ 青空の 下で ピクニックも できるし。
父親：うーん、お父さんは 最近 疲れが たまっているから、日帰り温泉で ゆっくり 露天風呂に 入りたいんだけどなあ。
娘：えー、温泉は おじさんっぽいよ！
母親：でも、あそこの 温泉施設、隣に 綺麗な 庭園が あって 花も 楽しめるし、温水プールも ついているわよ。
娘：あ、温水プールが あるなら いいかも！ 泳ぎたい！
父親：よし、じゃあ 全員の 希望が かなう そこに 決まりだな。

質問：家族は どこへ 行くことに しましたか。`,
    question: '家族は どこへ 行くことに しましたか。',
    options: [
      { id: 'A', text: '新しく できた 水族館', isCorrect: false, analysis: 'SAI: Sợ đông nên không đi.' },
      { id: 'B', text: '植物園', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: '庭園と プールが ある 日帰り温泉施設', isCorrect: true, analysis: 'ĐÚNG: Cơ sở suối nước nóng có cả bể bơi cho con gái và hoa vườn cảnh cho mẹ, đáp ứng mong muốn của cả 3 người.' },
      { id: 'D', text: '自宅で のんびり 過ごす', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Tổng hợp ý kiến: Bố thích onsen, mẹ thích hoa cảnh, con gái thích bơi lội -> Chọn khu phức hợp Onsen có vườn và bể bơi.',
    relatedKnowledge: 'Dạng bài thảo luận gia đình đưa ra phương án dung hòa trong Mondai 5.'
  },
  {
    id: 'n3-c-28',
    level: 'N3',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `会社で 社員 2人が、新しい オフィスの コーヒーメーカーの 購入について 話しています。

男の人：給湯室に 置く コーヒーメーカー、カタログを 取り寄せたよ。4種類 あるんだ。
女の人：へえ、見せて。1番の マシンは カプセル式で、色々な 味が 手軽に 楽しめるわね。でも 1杯あたりの コストが 80円と ちょっと 高めね。
男の人：2番は 豆から 挽く 本格的な タイプだよ。味は 最高で 1杯 30円だけど、毎日の お手入れと 掃除が かなり 面倒らしい。
女の人：掃除が 大変なのは 誰も やらなくなりそうね。3番は 粉から ドリップする スタンダードな ものね。手入れも 簡単で 1杯 25円。本体も 一番 安いわ。
男の人：4番は 大容量の サーバー付きで、一度に 20杯分 作れるやつだ。でも うちの 部署は 10人しか いないから、余っちゃうね。
女の人：毎日の 手入れが 楽で、ランニングコストも 安い 3番が うちの 会社には 一番 ぴったりね。
男の人：賛成。それに 決定しよう。

質問：二人は どの コーヒーメーカーを 購入することに しましたか。`,
    question: '二人は どの コーヒーメーカーを 購入することに しましたか。',
    options: [
      { id: 'A', text: '1番：色々な 味が 楽しめる カプセル式', isCorrect: false, analysis: 'SAI: Chi phí mỗi cốc đắt (80 yên).' },
      { id: 'B', text: '2番：本格的だが 手入れが 大変な 豆挽きタイプ', isCorrect: false, analysis: 'SAI: Vệ sinh dọn dẹp phiền phức.' },
      { id: 'C', text: '3番：手入れが 簡単で コストが 安い ドリップ式', isCorrect: true, analysis: 'ĐÚNG: Dễ lau chùi vệ sinh và chi phí rẻ (25 yên/cốc), phù hợp văn phòng 10 người.' },
      { id: 'D', text: '4番：一度に 20杯 作れる 大容量タイプ', isCorrect: false, analysis: 'SAI: Quá to so với quy mô.' }
    ],
    speed30sTip: 'Lọc điều kiện: Loại số 1 (đắt), loại số 2 (khó rửa), loại số 4 (quá to) -> Chọn số 3.',
    relatedKnowledge: 'Dạng bài so sánh 4 sản phẩm theo tiêu chí tính năng & chi phí.'
  },
  {
    id: 'n3-c-29',
    level: 'N3',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `不動産屋で 留学生と 店員が アパート探しについて 話しています。

店員：ご希望の 条件ですと、現在 3つの 物件が ございます。
物件Aは 駅から 徒歩 3分と 非常に 近いですが、築年数が 35年と 古く、家賃は 5万円です。
物件Bは 新築で オートロック付き、セキュリティは 万全ですが、駅から バスで 15分かかり、家賃は 6万5千円です。
物件Cは 駅から 徒歩 10分、築 10年で 設備も 新しく、家賃は 5万5千円です。
留学生：アルバイトで 帰りが 遅くなることが 多いので、夜道が 危ない バスは 避けたいです。でも、あまりに 古い 部屋は 虫が 出そうで 嫌ですね。予算は 6万円以内を 考えています。
店員：それでしたら、駅からも 歩けて 予算内の あの 物件が ベストですね。
留学生：はい、そこに します。

質問：留学生は どの 物件に 決めましたか。`,
    question: '留学生は どの 物件に 決めましたか。',
    options: [
      { id: 'A', text: '物件A（徒歩 3分、築 35年、5万円）', isCorrect: false, analysis: 'SAI: Nhà quá cũ sợ có côn trùng.' },
      { id: 'B', text: '物件B（バス 15分、新築、6万5千円）', isCorrect: false, analysis: 'SAI: Vượt quá ngân sách 6 vạn và phải đi xe buýt ban đêm nguy hiểm.' },
      { id: 'C', text: '物件C（徒歩 10分、築 10年、5万5千円）', isCorrect: true, analysis: 'ĐÚNG: Đi bộ 10 phút, nhà mới vừa phải (10 năm), nằm trong ngân sách 6 vạn (5.5 vạn).' },
      { id: 'D', text: '別の 不動産屋を 探す', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Lọc điều kiện: Dưới 6 vạn (loại B) + không quá cũ (loại A) -> Chọn căn C (5.5 vạn, đi bộ 10p).',
    relatedKnowledge: 'Từ vựng thuê nhà: 築年数, 徒歩, 予算.'
  },
  {
    id: 'n3-c-30',
    level: 'N3',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `大学の サークルで 部長と 副部長が、新入生歓迎会の 開催場所について 相談しています。

部長：新入生歓迎会の 会場、どこに しようか。候補を 4つ 挙げたんだけど。
案1は 大学の すぐ 近くの 居酒屋。飲み放題付きで 3000円と 安い。でも 未成年の 飲酒チェックが 厳しいよ。
案2は イタリアンレストランの 貸し切り。おしゃれで 料理も 美味しいけど、一人 4500円で 予算オーバーだな。
案3は 学校の 食堂を 借りて、オードブルを ケータリングする 方法。一人 2000円で 済むし、移動も なくて 安全だ。
案4は 公園での バーベキュー。楽しいけど 天気に 左右されるし、準備と 片付けが 大変だね。
副部長：新入生は お金が ないから 参加費は 安い ほうが 集まりやすいよね。それに 未成年も 多いから、お酒の ない 食堂での ケータリングが 一番 安心じゃない？
部長：確かに。天気の 心配も いらないしね。じゃあ、食堂案で いこう。

質問：二人は 歓迎会を どこで 開くことに しましたか。`,
    question: '二人は 歓迎会を どこで 開くことに しましたか。',
    options: [
      { id: 'A', text: '案1：駅前の 居酒屋', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '案2：イタリアンレストランの 貸し切り', isCorrect: false, analysis: 'SAI: Đắt quá (4500 yên).' },
      { id: 'C', text: '案3：大学の 食堂での ケータリング', isCorrect: true, analysis: 'ĐÚNG: Giá rẻ (2000 yên), an toàn cho sinh viên chưa đủ tuổi vị thành niên và không lo thời tiết.' },
      { id: 'D', text: '案4：公園での バーベキュー', isCorrect: false, analysis: 'SAI: Sợ trời mưa và dọn dẹp cực.' }
    ],
    speed30sTip: 'Tổng hợp tiêu chí: Rẻ + an toàn không rượu cho tân sinh viên -> Chọn nhà ăn trường học (食堂案).',
    relatedKnowledge: 'Văn hóa chào đón sinh viên mới (新歓).'
  }
];
