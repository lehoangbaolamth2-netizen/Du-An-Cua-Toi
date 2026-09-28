import { JLPTQuestion } from '../../types';

// =========================================================================
// JLPT N1 CHOUKAI (30 CÂU CHUẨN THI: MONDAI 1 -> MONDAI 5 - 100% TIẾNG NHẬT)
// =========================================================================

export const N1_CHOUKAI_QUESTIONS: JLPTQuestion[] = [
  // --- MONDAI 1: 課題理解 (6 câu - Nhiệm vụ chiến lược / Kế hoạch triển khai) ---
  {
    id: 'n1-c-1',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `グローバルIT企業で 事業本部長と プロジェクトリーダーの 男性が 話しています。リーダーの 男性は この後 まず 何に 着手しなければ なりませんか。

事業本部長：来期 リリース予定の クラウド基盤刷新プロジェクトだが、進捗に 若干の 遅れが 生じていると 聞いたが、現状は どうなっているのかね。
リーダー：はい。海外の オフショア開発チームとの 仕様認識に 齟齬が 生じ、APIの インターフェース設計の 手戻りが 発生しております。
事業本部長：なるほど。開発工数の 逼迫は 避けられんな。納期を 厳守する 上で、最優先で 打つべき 手は 何だ。
リーダー：仕様書の 修正は ほぼ 完了しておりますので、クライアントへの スケジュール遅延の 打診を 行うか、あるいは 国内の 追加エンジニアの 調達を 検討すべきかと。
事業本部長：いや、クライアントへの 納期延期要請は 最終手段だ。まずは 開発スコープの 再定義を 行い、第1フェーズで 実装すべき 必須機能と、次期フェーズに 見送る 付加機能を 明確に 切り分けなさい。リソースの 追加投入の 判断は、その 絞り込みを 行ってからだ。
リーダー：承知いたしました。ただちに コア機能の 優先順位付けと スコープの 洗い出しに 入ります。

質問：プロジェクトリーダーの 男性は この後 まず 何を しますか。`,
    question: 'プロジェクトリーダーの 男性は この後 まず 何を しますか。',
    options: [
      { id: 'A', text: '実装すべき コア機能と 見送り機能の 切り分け（スコープ再定義）を 行う。', isCorrect: true, analysis: 'ĐÚNG: Giám đốc chỉ thị rõ ràng: "まずは 開発スコープの 再定義を 行い、第1フェーズで 実装すべき 必須機能と... 切り分けなさい" trước khi tính chuyện xin hoãn hoặc thêm người.' },
      { id: 'B', text: 'クライアントに 納期の 延期を 打診する。', isCorrect: false, analysis: 'SAI: Giám đốc bảo đây là hạ sách cuối cùng (最終手段).' },
      { id: 'C', text: '国内の 追加エンジニアを 調達する。', isCorrect: false, analysis: 'SAI: Phải phân định tính năng xong mới tính.' },
      { id: 'D', text: 'オフショア開発チームとの 契約を 解除する。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt lệnh ưu tiên: Không xin hoãn, không vội tuyển người, mà phải "開発スコープの再定義・機能の切り分け" trước tiên.',
    relatedKnowledge: 'Thuật ngữ quản trị dự án phần mềm cao cấp: 齟齬, 手戻り, 開発スコープ, 再定義.'
  },
  {
    id: 'n1-c-2',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `バイオテクノロジーの 研究所で 所長と 主任研究員が 話しています。研究チームは 今週中に 何を 完了させなければ なりませんか。

所長：来週の 国際学会での 共同研究発表、論文の ドラフトは 仕上がったかね。
主任研究員：はい、実験データの 解析と 考察の 執筆は 概ね 完了しております。ただ、査読者から 指摘された 対照実験の サンプル数が 不足している 点が 懸念材料です。
所長：そうか。その 追加実験には どのくらい 日数が かかるんだね。
主任研究員：追加の 培養と 測定には 最低でも 3日は 要します。今週中に 追試を 終えなければ、論文の 差し替えが 間に合いません。
所長：学会事務局への 抄録の 最終登録は 今週の 金曜 正午が デッドラインだ。英語の ネイティブチェックは 私が 引き受けるから、君たちは 全精力を 傾けて その 追加検証データの 収集と 測定を 今週中に 完遂させてくれたまえ。
主任研究員：わかりました。研究室総出で 測定作業に 専念いたします。

質問：研究チームが 今週中に 完了させなければ ならない 作業は 何ですか。`,
    question: '研究チームが 今週中に 完了させなければ ならない 作業は 何ですか。',
    options: [
      { id: 'A', text: '英語論文の ネイティブチェックを 完了すること', isCorrect: false, analysis: 'SAI: Viện trưởng tự nhận làm việc này.' },
      { id: 'B', text: '対照実験の 追加検証データの 培養と 測定を 完遂すること', isCorrect: true, analysis: 'ĐÚNG: Viện trưởng yêu cầu tập trung toàn lực hoàn tất nuôi cấy và đo đạc dữ liệu bổ sung trong tuần này.' },
      { id: 'C', text: '国際学会の 参加手続きを 済ませること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '共同研究先と 新規契約を 締結すること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Phân nhiệm vụ: Viện trưởng nhận hiệu đính tiếng Anh, nhóm nghiên cứu phải hoàn tất "追加検証データの収集と測定".',
    relatedKnowledge: 'Từ vựng học thuật nghiên cứu: 査読者, 対照実験, 追試, 抄録.'
  },
  {
    id: 'n1-c-3',
    level: 'N1',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `アパレル企業で マーケティング統括と 担当の 女性が 話しています。女性は この後 直ちに 何を 手配しますか。

統括：来月の 新ブランド立ち上げに 向けた プロモーション戦略だが、インフルエンサーマーケティングの 進捗は どうなっている。
女性：はい、候補となる 10名の インフルエンサーの リストアップは 終了し、現在、事務所との 契約交渉に 入っております。ただ、メインで 起用を 予定していた 人気モデルの A氏ですが、競合他社との 独占契約条項に 抵触する 恐れが 判明いたしました。
統括：それは まずいな。コンプライアンス上の リスクは 徹底的に 排除しなければ ならん。A氏の 起用は 見送らざるを 得ないだろう。
女性：はい。至急、同等の 拡散力と ブランドイメージを 備えた 代替候補の アサインに 動く 必要が あります。
統括：うむ。法務部への 相談は 私が 済ませておくから、君は 直ちに 代替候補の ピックアップと アプローチを 開始してくれ。プロモーション動画の 撮影スケジュールは 変更できないからな。
女性：承知いたしました。ただちに 代替インフルエンサーの 選定に 取りかかります。

質問：担当の 女性は この後 直ちに 何を 行いますか。`,
    question: '担当の 女性は この後 直ちに 何を 行いますか。',
    options: [
      { id: 'A', text: '法務部へ 契約条項の 確認相談に 行く。', isCorrect: false, analysis: 'SAI: Cấp trên tự làm.' },
      { id: 'B', text: '代替となる インフルエンサーの 選定と アプローチに 着手する。', isCorrect: true, analysis: 'ĐÚNG: Tìm kiếm và tiếp cận người mẫu thay thế ngay để không lỡ lịch quay video.' },
      { id: 'C', text: 'プロモーション動画の 撮影日程を 延期する。', isCorrect: false, analysis: 'SAI: Sếp cấm hoãn.' },
      { id: 'D', text: 'A氏の 所属事務所に 違約金を 請求する。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Sếp đi gặp pháp chế, giao cấp dưới lập tức tìm người mẫu thay thế (代替候補のピックアップ).',
    relatedKnowledge: 'Từ vựng thương mại hiện đại: インフルエンサー, 独占契約条項, 抵触する.'
  },
  {
    id: 'n1-c-4',
    level: 'N1',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `地域活性化の 諮問委員会で 委員長と 事務局の 男性が 話しています。事務局は 次回の 会合までに 何を 準備しなければ なりませんか。

委員長：過疎化が 著しい 南部地区の 観光振興策について、前回の 議論を踏まえ、実効性の ある 提言書を まとめたいと 考えています。
男性：はい。前回の 会合では、古民家を 活用した ワーケーション誘致案と、地場産品を 生かした ガストロノミーツーリズム案の 2本柱で 意見が 集約されました。
委員長：そこでだね、次回は 具体的な 財政シミュレーションと、受け入れ態勢を 担う 住民組織の 組織図を 提示したい。事務局には、近隣自治体の 先進導入事例における「初期投資額と 投資回収期間の 試算データ」を 精査して、比較資料として 作成してもらいたいんだ。
男性：承知いたしました。成功事例だけでなく、失敗事例における 収支の 乖離要因も 盛り込んだ ほうが よろしいでしょうか。
委員長：まさに その 通りだ。リスク要因の 分析こそが、議会での 予算承認を 勝ち取る 鍵となる。よろしく頼むよ。

質問：事務局の 男性が 次回の 会合までに 準備すべき ものは 何ですか。`,
    question: '事務局の 男性が 次回の 会合までに 準備すべき ものは 何ですか。',
    options: [
      { id: 'A', text: '他自治体の 先進事例における 投資額・回収期間の 試算と比較データ', isCorrect: true, analysis: 'ĐÚNG: Phân tích số liệu vốn đầu tư ban đầu và thời gian hoàn vốn của các mô hình thành công/thất bại ở địa phương lân cận.' },
      { id: 'B', text: '古民家の 買い取り契約書', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: '地元住民への 補償金支給計画案', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '観光ポスターの デザインカンプ', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt yêu cầu tài chính cụ thể: "先進導入事例における初期投資額と投資回収期間の試算データ".',
    relatedKnowledge: 'Quy hoạch phát triển vùng: 諮問委員会, 過疎化, 試算データ, 収支の乖離.'
  },
  {
    id: 'n1-c-5',
    level: 'N1',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `金融機関で 支店長と 融資担当の 女性社員が 話しています。女性社員は この後 取引先企業に 何を 要請しますか。

支店長：先ほど 融資申請の あった 太陽精密機械の 件だが、審査部の 意向は 確認できたかね。
女性社員：はい。設備投資資金として 3億円の 融資希望ですが、審査部からは、直近の 決算書における キャッシュフローの 悪化が 懸念視されております。
支店長：確かに、売掛債権の 回収遅延が 目立つな。新規事業の 見通し自体は 明るいのだが、このままでは 稟議を 通すのは 難しい。
女性社員：担保不動産の 追加差し入れを 求めるべきでしょうか。
支店長：いや、それよりも 喫緊の 課題は 資金繰りの 透明性だ。今後 3年間の「月次資金繰り計画表」と、大口取引先からの「受注内定証明書」を 早急に 提出するよう 経営陣に 働きかけてくれ。それらが 揃えば、条件付きで 承認を 取り付ける 余地が ある。
女性社員：かしこまりました。ただちに 先方の 財務担当役員に 連絡し、資料の 追完を 取り付けます。

質問：女性社員は 取引先企業に 何の 提出を 要請しますか。`,
    question: '女性社員は 取引先企業に 何の 提出を 要請しますか。',
    options: [
      { id: 'A', text: '担保不動産の 追加差し入れ書類', isCorrect: false, analysis: 'SAI: Giám đốc bác bỏ yêu cầu này.' },
      { id: 'B', text: '月次資金繰り計画表と 受注内定証明書', isCorrect: true, analysis: 'ĐÚNG: Kế hoạch dòng tiền hàng tháng trong 3 năm và giấy xác nhận đơn đặt hàng của đối tác lớn.' },
      { id: 'C', text: '社長の 個人資産の 目録', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '融資申請の 取り下げ届', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nghe yêu cầu chứng minh dòng tiền: "月次資金繰り計画表" và "受注内定証明書".',
    relatedKnowledge: 'Nghiệp vụ thẩm định tín dụng ngân hàng N1: 融資申請, キャッシュフロー, 資金繰り.'
  },
  {
    id: 'n1-c-6',
    level: 'N1',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_1',
      mondaiNumber: 1,
      mondaiTitle: '問題1: 課題理解',
      mondaiInstruction: '問題1では、まず質問を聞いてください。それから話を聞いて、問題用紙の1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `製造業の 品質管理部で 部長と 課長が 話しています。リコール事案の 発生に 伴い、課長は まず どの 部署に 協力を 要請しなければ なりませんか。

部長：海外市場で 出荷済みの 車載用センサーに、特定の 低温環境下で 誤作動を 起こす 不具合が 発覚した。経営陣からは、迅速かつ 抜本的な 是正措置が 求められている。
課長：重大事故の 報告は まだ 入っておりませんが、直ちに リコールの 届け出と プレスリリースを 打つ 必要が ありますね。
部長：広報や 法務との 連携は 私が 音頭を 取る。それより 現場レベルで 急がれるのは、不具合の 根本原因の 究明と、製造ラインの 暫定停止だ。
課長：設計部門と 製造工場の どちらを 優先すべきでしょうか。
部長：設計上の マージン不足か、あるいは 部品工場の はんだ付けプロセスの バラツキかが 判然と しない。まずは 製造ラインの ロット管理データを 押さえ、該当する 不良ロットの 流出範囲を 特定することが 先決だ。製造本部の 工場長に 連絡を 取り、直近 3か月の 製造履歴データの 抽出を 命じてくれ。
課長：わかりました。直ちに 工場長へ ホットラインを 繋ぎます。

質問：課長は まず 誰に 連絡を 取って 協力を 要請しますか。`,
    question: '課長は まず 誰に 連絡を 取って 協力を 要請しますか。',
    options: [
      { id: 'A', text: '広報部門の 責任者', isCorrect: false, analysis: 'SAI: Trưởng bộ phận làm việc này.' },
      { id: 'B', text: '法務部門の 顧問弁護士', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: '製造本部の 工場長', isCorrect: true, analysis: 'ĐÚNG: Liên hệ giám đốc nhà máy để trích xuất dữ liệu lịch sử sản xuất 3 tháng gần nhất nhằm khoanh vùng lô hàng lỗi.' },
      { id: 'D', text: '設計部門の チーフエンジニア', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt chỉ đạo khẩn cấp: "製造本部の工場長に連絡を取り、直近3か月の製造履歴データの抽出を命じてくれ".',
    relatedKnowledge: 'Quản lý chất lượng sản xuất ô tô: リコール, ロット管理, 是正措置.'
  },

  // --- MONDAI 2: ポイント理解 (6 câu - Hiểu sâu luận điểm then chốt / Lập luận tinh vi) ---
  {
    id: 'n1-c-7',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `シンポジウムで 経済学者が「行動経済学と 政策決定」について 講演しています。学者が 指摘する、従来の 合理的経済人モデルの 決定的な 限界とは 何ですか。

経済学者：伝統的な 新古典派経済学は、人間が 常に 自らの 効用を 最大化すべく、入手可能な あらゆる 情報を 完璧に 比較検討して 冷徹に 意思決定を 下す「合理的な 存在」であると 仮定してきました。しかし、現実の 人間行動を 観察すれば、我々は 直近の 損失を 過大に 恐れる「損失回避性」や、現状維持を 好む 認知的バイアスに 絶えず 支配されています。情報の 非対称性や 意志力の 限界を 直視せず、数式上の 最適解だけを 提示しても、現実の 社会政策が 機能不全に 陥るのは 必然なのです。

質問：学者が 指摘する、従来の 経済学モデルの 最大の 限界は 何ですか。`,
    question: '学者が 指摘する、従来の 経済学モデルの 最大の 限界は 何ですか。',
    options: [
      { id: 'A', text: '数式の 計算スピードが コンピュータより 遅いこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '人間が 損失回避や 認知的バイアスに 左右される 非合理な 側面を 軽視したこと', isCorrect: true, analysis: 'ĐÚNG: Bỏ qua việc con người có tâm lý thiên vị nhận thức và sợ tổn thất thay vì hoàn toàn lý trí (非合理的側面).' },
      { id: 'C', text: '市場の 自由競争を 過度に 制限したこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '富裕層の 利益のみを 代表していること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt luận điểm kinh tế học hành vi: Chỉ trích việc coi con người là lý trí tuyệt đối mà phớt lờ "損失回避性・認知的バイアス".',
    relatedKnowledge: 'Kinh tế học hành vi N1: 行動経済学, 効用最大化, 損失回避性, 認知的バイアス.'
  },
  {
    id: 'n1-c-8',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `ラジオで 脳科学者が「人工知能と 人間の 創造性」について 語っています。科学者は、AIが 容易に 代替できない 人間独自の 領域は どこに あると 主張していますか。

科学者：大規模言語モデルや 生成AIの 驚異的な 進化により、過去の 膨大な データの パターン認識や、既存の 概念を 組み合わせた 文章・画像の 生成においては、もはや AIが 人間を 凌駕しつつあります。しかし、AIには 決して できず、人間にのみ 宿る 特質が あります。それは「問いを 自ら 生み出す 動機」です。AIは 与えられた プロンプトに 対して 最適な 答えを 出力するに 過ぎません。なぜ その 課題を 探求したいのかという、身体性に 根ざした 実存的な 欠乏感や 好奇心こそが、真の 創造の 源泉なのです。

質問：科学者が 述べる、AIが 代替できない 人間固有の 特質とは 何ですか。`,
    question: '科学者が 述べる、AIが 代替できない 人間固有の 特質とは 何ですか。',
    options: [
      { id: 'A', text: '膨大な データを 高速に 処理し パターンを 認識する 能力', isCorrect: false, analysis: 'SAI: AI làm tốt hơn người.' },
      { id: 'B', text: '過去の 知識を 組み合わせて 美しい 絵画を 描く 技術', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: '自らの 実存的な 動機や 好奇心から「問いそのもの」を 創出する 力', isCorrect: true, analysis: 'ĐÚNG: Động lực tự thân và sự thiếu hụt hiện sinh thôi thúc tự đặt ra câu hỏi khám phá (問いを自ら生み出す動機).' },
      { id: 'D', text: '一切の 誤りを 犯さずに プログラミングコードを 書く 能力', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt câu chốt triết học: "人間にのみ宿る特質... それは「問いを自ら生み出す動機」".',
    relatedKnowledge: 'Triết học công nghệ AI: 凌駕する, 身体性, 実存的な欠乏感.'
  },
  {
    id: 'n1-c-9',
    level: 'N1',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `テレビの 報道番組で、コメンテーターが「企業の 内部告発制度の 実効性」について 論評しています。コメンテーターが 最も 憂慮している 構造的な 問題点は 何ですか。

コメンテーター：近年、大手メーカーの 検査データ偽装が 相次いで 発覚していますが、その 多くは 外部からの 指摘や 退職者の 告発によるものです。社内の 通報窓口が 形骸化している 最大の 原因は、「通報者の 秘匿性と 不利益処遇の 防止」が 担保されていない点に 尽きます。形式的な 窓口を 設置しても、告発した 社員が 左遷されたり 村八分に される リスクが 放置されている 限り、自浄作用が 働くはずが ありません。独立した 外部第三者機関による 厳格な 監査体制の 構築が 焦眉の 急です。

質問：コメンテーターが 最も 憂慮している 点は 何ですか。`,
    question: 'コメンテーターが 最も 憂慮している 点は 何ですか。',
    options: [
      { id: 'A', text: '内部告発窓口の システム導入費用が 高すぎること', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '通報者の 秘密保護や 不利益な 報復人事を 防ぐ 仕組みが 不十分なこと', isCorrect: true, analysis: 'ĐÚNG: Lo ngại việc người tố giác không được bảo vệ bí mật và đối mặt nguy cơ bị đày đọa/trả thù (通報者の秘匿性と不利益処遇の防止が担保されていない).' },
      { id: 'C', text: '社員の 倫理観が 低下していること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '不正の 告発が 頻発しすぎて 業務が 停滞すること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt mấu chốt vấn đề: "通報者の秘匿性と不利益処遇の防止が担保されていない... 自浄作用が働かない".',
    relatedKnowledge: 'Quản trị tuân thủ pháp luật doanh nghiệp: 内部告発, 形骸化, 秘匿性, 不利益処遇.'
  },
  {
    id: 'n1-c-10',
    level: 'N1',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `歴史学の 講義で 教授が「都市の 発展と 疫病の 歴史」について 講義しています。ペストの 大流行が 中世ヨーロッパ社会に もたらした 歴史的転換点とは 何ですか。

教授：14世紀の ペストの 猛威は、ヨーロッパの 人口の 3分の 1を 奪うという 壊滅的な 打撃を 与えました。しかし、歴史の パラドックスとして、この 激甚な 人口激減こそが、農奴制の 崩壊と 近代資本主義の 萌芽を 生み出したのです。労働力の 著しい 希少化により、領主に対する 農民の 立場が 劇的に 向上し、賃金労働者としての 地位を 獲得していきました。既存の 封建的ヒエラルキーが 根底から 揺らぎ、社会構造の 流動化が 加速したのです。

質問：ペストの 流行が 中世社会に もたらした 構造的変化は 何ですか。`,
    question: 'ペストの 流行が 中世社会に もたらした 構造的変化は 何ですか。',
    options: [
      { id: 'A', text: '領主の 権力が 以前よりも さらに 強化されたこと', isCorrect: false, analysis: 'SAI: Ngược hoàn toàn.' },
      { id: 'B', text: '労働力不足により 農民の 地位が 向上し、封建制度の 崩壊が 促されたこと', isCorrect: true, analysis: 'ĐÚNG: Lao động khan hiếm làm tăng vị thế người nông dân, dẫn đến sụp đổ chế độ nông nô phong kiến.' },
      { id: 'C', text: '都市間の 交易が 完全に 停止し 自給自足社会へ 逆戻りしたこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '医学の 発展により すべての 伝染病が 根絶されたこと', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Luận điểm nghịch lý lịch sử: Dịch bệnh giảm dân số -> Lao động khan hiếm -> Nông dân có quyền lực -> Phá vỡ chế độ phong kiến.',
    relatedKnowledge: 'Lịch sử kinh tế xã hội N1: パラドックス, 農奴制, 封建的ヒエラルキー, 萌芽.'
  },
  {
    id: 'n1-c-11',
    level: 'N1',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `企業経営の カンファレンスで、ある ベンチャーキャピタリストが「ユニコーン企業の 条件」について スピーチしています。登壇者が 最も 警戒すべきだと 警鐘を 鳴らす 経営指標の 陥穽は 何ですか。

登壇者：スタートアップの 評価額が 急騰する中、多くの 経営者が 陥る 致命的な 罠があります。それは、ユーザー数や アプリダウンロード数といった「表面的な トラフィック指標」に 陶酔し、顧客の リテンション率や ユニットエコノミクスを 軽視することです。巨額の 広告宣伝費で 一時的な ユーザーを 買い集めても、穴の 開いた バケツに 水を 注ぐが 如く、定着しなければ 資本は 瞬く間に 枯渇します。虚飾の グロースではなく、持続可能な 収益性の 規律こそが 企業の 命運を 分かつ のです。

質問：登壇者が 最も 警戒すべきだと 主張しているのは 何ですか。`,
    question: '登壇者が 最も 警戒すべきだと 主張しているのは 何ですか。',
    options: [
      { id: 'A', text: '海外投資家からの 出資を 一切 受け入れないこと', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '本質的な 収益性や 顧客定着を 伴わない、表面的な ユーザー数の 拡大', isCorrect: true, analysis: 'ĐÚNG: Ảo tưởng vào lượng truy cập/tải về bề nổi do chi tiền quảng cáo mà bỏ qua khả năng giữ chân khách hàng và sinh lời bền vững.' },
      { id: 'C', text: '優秀な エンジニアを 高待遇で 雇用すること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '新技術の 特許出願を 怠ること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Ẩn dụ "穴の開いたバケツに水を注ぐ" = Đốt tiền quảng cáo gom user bề nổi mà không giữ chân được khách.',
    relatedKnowledge: 'Tài chính đầu tư mạo hiểm: ユニコーン企業, ユニットエコノミクス, リテンション率.'
  },
  {
    id: 'n1-c-12',
    level: 'N1',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_2',
      mondaiNumber: 2,
      mondaiTitle: '問題2: ポイント理解',
      mondaiInstruction: '問題2では、まず質問を聞いてください。そのあと問題用紙を見て、読む時間があります。それから話を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `美学の 講義で 准教授が「日本の わび・さびの 美意識」について 語っています。准教授が 解説する、西洋の 古典主義美学との 本質的な 相違点は 何ですか。

准教授：古代ギリシャに 端を 発する 西洋古典主義の 美学は、黄金比や 左右対称性、完全無欠な 幾何学的調和を「究極の 美」として 追求してきました。これに 対し、千利休らが 大成させた 日本の「わび・さび」は、不完全さや 歪み、風雨に 晒された 経年劣化の 痕跡の中にこそ、移ろいゆく 無常の 美を 見出します。永遠不滅の 完璧さではなく、朽ちてゆく 儚さの 中に 宿る 陰影を 肯定する 点に、決定的な 思想の 分水嶺が 存在するのです。

質問：日本の「わび・さび」が 西洋古典主義と 最も 異なっている 点は 何ですか。`,
    question: '日本の「わび・さび」が 西洋古典主義と 最も 異なっている 点は 何ですか。',
    options: [
      { id: 'A', text: '完全無欠な 左右対称性と 幾何学的調和を 重視する 点', isCorrect: false, analysis: 'SAI: Đó là mỹ học phương Tây cổ điển.' },
      { id: 'B', text: '経年変化や 不完全さ、朽ちてゆく 儚さの 中に 美を 見出す 点', isCorrect: true, analysis: 'ĐÚNG: Tìm thấy vẻ đẹp trong sự biến đổi thời gian, vết xước không hoàn hảo và sự vô thường tàn phai.' },
      { id: 'C', text: '原色を 多用した 華麗で 絢爛豪華な 装飾を 好む 点', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '永遠に 劣化しない 金属素材のみを 尊ぶ 点', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Đối chiếu triết học mỹ quan: Phương Tây = Hoàn hảo vĩnh cửu (左右対称・完全無欠); Wabi-sabi Nhật = Không hoàn hảo, tàn phai vô thường (経年劣化・不完全さ).',
    relatedKnowledge: 'Mỹ học triết học Nhật Bản: わび・さび, 無常, 経年劣化, 左右対称性.'
  },

  // --- MONDAI 3: 概要理解 (5 câu - Luận điểm toàn cảnh / Diễn thuyết học thuật) ---
  {
    id: 'n1-c-13',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `学術フォーラムで 社会学者が「デジタル化と 民主主義の 変容」について 講演しています。

社会学者：インターネットの 黎明期には、情報の 民主化が 進み、誰もが 平等に 発言できる 理想的な 言論空間が 実現すると 期待されました。しかし 現実に 起きているのは、アルゴリズムによる「エコーチェンバー現象」と「フィルターバブル」による 社会の 分断です。自らの 信条に 合致する 情報だけに 囲まれ、異論を 排除する 結果、極端な ポピュリズムや 陰謀論が 跋扈しています。真の 熟議民主主義を 再生するには、異なる 価値観と 摩擦を 恐れずに 対話する「意図的な 異質性の 確保」が、プラットフォームの 設計思想に 組み込まれねば なりません。

質問：社会学者は 現代の デジタル社会の 課題について どのように 結論づけていますか。`,
    question: '社会学者は 現代の デジタル社会の 課題について どのように 結論づけていますか。',
    options: [
      { id: 'A', text: 'インターネットの 利用を 全面的に 禁止し、新聞報道のみに 戻すべきである', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: 'アルゴリズムによる 分断を 克服し、異質な 意見との 熟議を 促す 仕組みが 必要である', isCorrect: true, analysis: 'ĐÚNG: Cần thiết kế thuật toán đảm bảo va chạm và đối thoại với các quan điểm đa dạng để vượt qua bong bóng phân mảnh xã hội.' },
      { id: 'C', text: 'すべての ソーシャルメディアを 政府の 直接統制下に 置くべきである', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: 'エコーチェンバー現象は 個人の 精神的安定に 寄与するため 放置すべきである', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nắm giải pháp cốt lõi: Khắc phục Echo chamber bằng cách chủ động thiết kế không gian đối thoại đa chiều (意図的な異質性の確保).',
    relatedKnowledge: 'Xã hội học thông tin N1: エコーチェンバー, フィルターバブル, 熟議民主主義.'
  },
  {
    id: 'n1-c-14',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `科学番組で 天文学者が「地球外生命体の 探査手法の 転換」について 解説しています。

天文学者：長年、地球外知的生命体の 探査は、電波望遠鏡で 人工的な 電波信号を 捉える SETIプロジェクトが 主流でした。しかし 近年、系外惑星の 大気スペクトル分析という 新たな パラダイムが 脚光を 浴びています。ジェームズ・ウェッブ宇宙望遠鏡などにより、数千光年彼方の 惑星大気中に 酸素や メタン、オゾンといった、生物活動の 副産物である「バイオシグネチャー（生命指標ガス）」を 直接 検出できる 時代が 到来したのです。文明からの 通信を 受動的に 待つ 時代から、大気組成の 化学的非平衡を 能動的に 暴く 時代へと、探査の 概念そのものが コペルニクス的転回を 遂げています。

質問：天文学者は 何について 話していますか。`,
    question: '天文学者は 何について 話していますか。',
    options: [
      { id: 'A', text: '宇宙ロケットの 燃料効率を 劇的に 向上させる 技術', isCorrect: false, analysis: 'SAI.' },
      { id: 'B', text: '電波の 受信待ちから 大気の 成分分析へと シフトした 生命探査の 革新', isCorrect: true, analysis: 'ĐÚNG: Sự chuyển dịch phương pháp tìm kiếm sự sống: Từ chờ sóng radio thụ động sang phân tích quang phổ khí quyển chủ động.' },
      { id: 'C', text: '火星への 移住計画に おける 酸素濃度の 課題', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '地球外生命体が すでに 地球に 到達している 証拠', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Nắm sự thay đổi phương thức khoa học: SETI (thụ động nghe đài) -> Phân tích quang phổ khí quyển (chủ động tìm dấu vết hóa học).',
    relatedKnowledge: 'Khoa học vũ trụ N1: バイオシグネチャー, スペクトル分析, コペルニクス的転回.'
  },
  {
    id: 'n1-c-15',
    level: 'N1',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `経営戦略セミナーで コンサルタントが「両利きの 経営」について 講義しています。

コンサルタント：企業が 長期的に 生き残るために 提唱される「両利きの 経営」とは、既存事業の 効率化と 改善を 徹底する「深化」と、未知の 領域に 果敢に 投資して 新規事業の 種を 蒔く「探索」という、相反する 2つの ベクトルを 高度な レベルで 両立させる 経営手法です。多くの 優良企業が 破綻に 追い込まれるのは、足元の 利益率が 高い「深化」に 経営資源を 偏重させ、失敗リスクを 伴う「探索」を 怠るためです。自らの 成功体験を 意図的に 破壊する 組織構造の 複眼性こそが、持続的競争優位の 鍵となります。

質問：コンサルタントが 最も 強調している 企業の 生存戦略は 何ですか。`,
    question: 'コンサルタントが 最も 強調している 企業の 生存戦略は 何ですか。',
    options: [
      { id: 'A', text: '赤字部門を 直ちに 閉鎖し、主力事業の 効率化のみに 専念すること', isCorrect: false, analysis: 'SAI: Rơi vào bẫy chỉ làm 深化.' },
      { id: 'B', text: '既存事業の「深化」と、未来の 新規領域への「探索」を 両立させること', isCorrect: true, analysis: 'ĐÚNG: Thuyết Ambidexterity (両利きの経営) - Cân bằng giữa đào sâu khai thác hiện tại và khám phá rủi ro tương lai.' },
      { id: 'C', text: 'すべての 業務を 外部委託して 固定費を ゼロに 近づけること', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '競合企業を 買収して 市場シェアを 独占すること', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt khái niệm cốt lõi: 両利きの経営 (Ambidexterity) = 深化 (Khai thác) + 探索 (Khám phá).',
    relatedKnowledge: 'Lý thuyết quản trị chiến lược N1: 両利きの経営, 深化と探索, 持続的競争優位.'
  },
  {
    id: 'n1-c-16',
    level: 'N1',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `言語哲学の シンポジウムで 哲学者が「言葉と 思考の 相互規定性」について 講演しています。

哲学者：我々は 思考した 内容を 言葉によって 単に「表現」していると 錯覚しがちです。しかし サピア・ウォーフの 仮説が 示唆するように、実際には、我々が 操る 言語の 体系そのものが、我々の 認識可能な 世界の 輪郭を 規定しています。例えば、虹の 色を 7色と 区切る 言語共同体と、3色として 捉える 言語共同体では、知覚する 連続的な 光の 境界線の 引き方そのものが 異なるのです。言葉は 思考の 単なる 伝達容器ではなく、思考の 枠組みそのものを 生成する 存在論的契機なのです。

質問：哲学者が 主張している 言葉の 本質とは 何ですか。`,
    question: '哲学者が 主張している 言葉の 本質とは 何ですか。',
    options: [
      { id: 'A', text: '言葉は 頭の中で 完成した 思考を 単に 運ぶ 伝達ツールに 過ぎない', isCorrect: false, analysis: 'SAI: Bị triết gia bác bỏ như một ảo tưởng.' },
      { id: 'B', text: '言語体系そのものが、人間が 世界を 認識し 思考する 枠組みを 規定している', isCorrect: true, analysis: 'ĐÚNG: Giả thuyết tương đối ngôn ngữ - Cấu trúc ngôn ngữ định hình và giới hạn cách con người nhận thức thế giới.' },
      { id: 'C', text: 'すべての 人類は 生まれつき 同一の 普遍文法を 脳内に 保持している', isCorrect: false, analysis: 'SAI: Thuyết Chomsky không phải trọng tâm bài này.' },
      { id: 'D', text: '言語の 差異は コミュニケーションの 阻害要因でしかない', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bác bỏ quan niệm "từ ngữ chỉ là công cụ truyền tải", khẳng định "hệ thống ngôn ngữ định hình khung nhận thức thế giới".',
    relatedKnowledge: 'Triết học ngôn ngữ N1: サピア・ウォーフの仮説, 相互規定性, 存在論的契機.'
  },
  {
    id: 'n1-c-17',
    level: 'N1',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_3',
      mondaiNumber: 3,
      mondaiTitle: '問題3: 概要理解',
      mondaiInstruction: '問題3では、問題用紙に何も印刷されていません。まず話を聞いてください。それから質問と選択肢を聞いて、1から4の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `建築史の 専門家が「日本の 伝統建築における 空間の 可変性」について 解説しています。

専門家：石や レンガを 積み上げる 西洋の 組積造建築が「空間を 恒久的に 遮断・固定する 壁の 建築」であるのに 対し、日本の 伝統的な 木造軸組構造は「柱と 梁によって 領域を 緩やかに 規定する 骨組みの 建築」です。障子や 襖、引き戸を 開閉あるいは 取り外すことで、外の 自然景観を 室内に 引き込み、あるいは 部屋の 間取りを 儀礼や 人数に応じて 自由自在に 組み替えることが できました。「内と 外」の 厳密な 境界線を 敢えて 曖昧に 保つ 融通無碍な 空間思想こそ、日本建築の 白眉なのです。

質問：専門家が 述べる 日本の 伝統建築の 最大の 特徴は 何ですか。`,
    question: '専門家が 述べる 日本の 伝統建築の 最大の 特徴は 何ですか。',
    options: [
      { id: 'A', text: '堅牢な 石壁で 自然の 脅威を 完全に 遮断する 閉鎖性', isCorrect: false, analysis: 'SAI: Đó là kiến trúc phương Tây.' },
      { id: 'B', text: '建具の 開閉により 内と 外の 境界を 融通無碍に 変化させる 空間の 可変性', isCorrect: true, analysis: 'ĐÚNG: Khả năng biến đổi linh hoạt không gian nội ngoại qua việc đóng mở cửa kéo/shoji (空間の可変性・融通無碍).' },
      { id: 'C', text: '一切の 修理を 必要としない 耐久年数の 長さ', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '装飾を 排除した 幾何学的な 直線美', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Đối chiếu đặc tính kiến trúc: Phương Tây = Bức tường cô lập; Nhật Bản = Khung cột linh hoạt biến đổi không gian nội ngoại.',
    relatedKnowledge: 'Lịch sử kiến trúc Nhật N1: 組積造, 軸組構造, 融通無碍, 白眉.'
  },

  // --- MONDAI 4: 即時応答 (9 câu - Ứng đối ngữ dụng siêu cấp / Kính ngữ & Yojijukugo) ---
  {
    id: 'n1-c-18',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `新任の 役員に 就任されたそうで、まさに 青天の 霹靂ですね。

1：ええ、身に 余る 光栄で、身の 引き締まる 思いです。
2：はい、昨日は 激しい 雷雨でしたね。
3：いいえ、最初から 確信していましたよ。`,
    question: '新任の 役員に 就任されたそうで、まさに 青天の 霹靂ですね。',
    options: [
      { id: 'A', text: 'ええ、身に 余る 光栄で、身の 引き締まる 思いです。', isCorrect: true, analysis: 'ĐÚNG: Thành ngữ "青天の霹靂" (sét đánh ngang tai - bất ngờ hoàn toàn) -> Đáp khiêm tốn: "身に余る光栄で、身の引き締まる思いです".' },
      { id: 'B', text: 'はい、昨日は 激しい 雷雨でしたね。', isCorrect: false, analysis: 'SAI: Hiểu sai nghĩa đen thời tiết sấm sét.' },
      { id: 'C', text: 'いいえ、最初から 確信していましたよ。', isCorrect: false, analysis: 'SAI: Kiêu căng bất lịch sự.' },
      { id: 'D', text: '役員です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Thành ngữ "青天の霹靂" = Sự việc bất ngờ bất ngờ đổ xuống -> Đáp khiêm tốn "身に余る光栄".',
    relatedKnowledge: 'Thành ngữ N1: 青天の霹靂 (せいてんのへきれき), 身に余る光栄.'
  },
  {
    id: 'n1-c-19',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `あんな 杜撰な 計画では、頓挫するのも 無理は ないよ。

1：おっしゃる通りです。見通しが 甘すぎましたね。
2：はい、見事に 成功しましたよ。
3：いいえ、計画は 完璧でした。`,
    question: 'あんな 杜撰な 計画では、頓挫するのも 無理は ないよ。',
    options: [
      { id: 'A', text: 'おっしゃる通りです。見通しが 甘すぎましたね。', isCorrect: true, analysis: 'ĐÚNG: Từ "杜撰" (cẩu thả) và "頓挫" (đổ vỡ giữa chừng) -> Đồng tình: Đánh giá quá ngây thơ hời hợt.' },
      { id: 'B', text: 'はい、見事に 成功しましたよ。', isCorrect: false, analysis: 'SAI: Mâu thuẫn thất bại.' },
      { id: 'C', text: 'いいえ、計画は 完璧でした。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '計画です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Từ vựng N1: "杜撰" (cẩu thả sơ sài), "頓挫" (sụp đổ dở dang) -> Nhận lỗi "見通しが甘かった".',
    relatedKnowledge: 'Từ vựng Hán tự khó N1: 杜撰 (ずさん), 頓挫 (とんざ).'
  },
  {
    id: 'n1-c-20',
    level: 'N1',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `先日の 無礼な 振る舞い、慙愧に 耐えません。

1：どうぞ お気になさらないでください。水に 流しましょう。
2：はい、恥ずかしくありませんよ。
3：どういたしまして、怒っています。`,
    question: '先日の 無礼な 振る舞い、慙愧に 耐えません。',
    options: [
      { id: 'A', text: 'どうぞ お気になさらないでください。水に 流しましょう。', isCorrect: true, analysis: 'ĐÚNG: "慙愧に堪えない" (vô cùng xấu hổ ân hận) -> Đáp rộng lượng: Xin đừng bận lòng, hãy xí xóa chuyện cũ (水に流す).' },
      { id: 'B', text: 'はい、恥ずかしくありませんよ。', isCorrect: false, analysis: 'SAI.' },
      { id: 'C', text: 'どういたしまして、怒っています。', isCorrect: false, analysis: 'SAI: Mâu thuẫn.' },
      { id: 'D', text: '振る舞いです。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Từ "慙愧に耐えない" = Ân hận xấu hổ tột độ -> Tha thứ bằng "水に流しましょう".',
    relatedKnowledge: 'Từ vựng tạ lỗi cao cấp: 慙愧に堪えない (ざんきにたえない), 水に流す.'
  },
  {
    id: 'n1-c-21',
    level: 'N1',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `この 難局を 乗り切るには、一蓮托生の 覚悟が 求められるね。

1：ええ、運命を 共にし、最後まで やり抜きましょう。
2：はい、一人だけで 逃げ出します。
3：蓮の 花を 買いに 行きます。`,
    question: 'この 難局を 乗り切るには、一蓮托生の 覚悟が 求められるね。',
    options: [
      { id: 'A', text: 'ええ、運命を 共にし、最後まで やり抜きましょう。', isCorrect: true, analysis: 'ĐÚNG: Thành ngữ "一蓮托生" (cùng chung số phận, sống chết có nhau) -> Đáp đồng lòng cùng chiến đấu tới cùng.' },
      { id: 'B', text: 'はい、一人だけで 逃げ出します。', isCorrect: false, analysis: 'SAI: Trốn chạy phản bội.' },
      { id: 'C', text: '蓮の 花を 買いに 行きます。', isCorrect: false, analysis: 'SAI: Nghĩa đen hoa sen.' },
      { id: 'D', text: '覚悟です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Thành ngữ "一蓮托生" = Cùng chung vận mệnh sống chết -> "運命を共にし、最後までやり抜く".',
    relatedKnowledge: 'Thành ngữ bốn chữ N1: 一蓮托生 (いちれんたくしょう).'
  },
  {
    id: 'n1-c-22',
    level: 'N1',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 5
    },
    passageOrScript: `いくら 優秀でも、あの 傲慢な 態度は 鼻に つくね。

1：確かに。周囲への 配慮が なさすぎますよね。
2：ええ、鼻の 治療を 勧めましょう。
3：いいえ、匂いは しませんよ。`,
    question: 'いくら 優秀でも、あの 傲慢な 態度は 鼻に つくね。',
    options: [
      { id: 'A', text: '確かに。周囲への 配慮が なさすぎますよね。', isCorrect: true, analysis: 'ĐÚNG: Quán dụng ngữ "鼻につく" (chướng tai gai mắt, ngửi không ngửi được) -> Đồng tình: Thái độ quá thiếu tôn trọng người xung quanh.' },
      { id: 'B', text: 'ええ、鼻の 治療を 勧めましょう。', isCorrect: false, analysis: 'SAI: Hiểu sai nghĩa đen cái mũi.' },
      { id: 'C', text: 'いいえ、匂いは しませんよ。', isCorrect: false, analysis: 'SAI: Nghĩa đen mùi hương.' },
      { id: 'D', text: '態度です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Quán dụng ngữ "鼻につく" = Khó ưa, ngứa mắt, chướng tai.',
    relatedKnowledge: 'Quán dụng ngữ N1: 鼻につく, 傲慢 (ngạo mạn).'
  },
  {
    id: 'n1-c-23',
    level: 'N1',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 6
    },
    passageOrScript: `この 提携話、相手方の 腹の内が 読めなくて 難航しているよ。

1：迂闊に 妥協せず、真意を 慎重に 見極める 必要が ありますね。
2：はい、お腹が 痛いそうですよ。
3：いいえ、本を 読んでいません。`,
    question: 'この 提携話、相手方の 腹の内が 読めなくて 難航しているよ。',
    options: [
      { id: 'A', text: '迂闊に 妥協せず、真意を 慎重に 見極める 必要が ありますね。', isCorrect: true, analysis: 'ĐÚNG: Quán dụng ngữ "腹の内" (ý đồ thực sự trong lòng) -> Khuyên không vội thỏa hiệp mà phải quan sát kỹ chân ý.' },
      { id: 'B', text: 'はい、お腹が 痛いそうですよ。', isCorrect: false, analysis: 'SAI: Nghĩa đen đau bụng.' },
      { id: 'C', text: 'いいえ、本を 読んでいません。', isCorrect: false, analysis: 'SAI: Nghĩa đen đọc sách.' },
      { id: 'D', text: '提携です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Quán dụng ngữ "腹の内が読めない" = Không đoán được tâm địa/dã tâm đối phương.',
    relatedKnowledge: 'Quán dụng ngữ đàm phán N1: 腹の内, 迂闊に (bất cẩn), 難航.'
  },
  {
    id: 'n1-c-24',
    level: 'N1',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 7
    },
    passageOrScript: `他社の 成功事例を 鵜呑みに して そのまま 模倣するなんて、芸が ないよ。

1：同感です。自社の 強みを 生かした 独自性を 打ち出すべきですね。
2：はい、鳥を 飼い始めました。
3：いいえ、手品は できません。`,
    question: '他社の 成功事例を 鵜呑みに して そのまま 模倣するなんて、芸が ないよ。',
    options: [
      { id: 'A', text: '同感です。自社の 強みを 生かした 独自性を 打ち出すべきですね。', isCorrect: true, analysis: 'ĐÚNG: "鵜呑みにする" (nuốt chửng không nhai - mù quáng tin theo) và "芸がない" (không có bản sắc/tầm thường) -> Đồng tình cần tạo tính độc đáo riêng.' },
      { id: 'B', text: 'はい、鳥を 飼い始めました。', isCorrect: false, analysis: 'SAI: Hiểu sai nghĩa đen con chim bồ nông.' },
      { id: 'C', text: 'いいえ、手品は できません。', isCorrect: false, analysis: 'SAI: Hiểu sai từ nghệ thuật diễn trò.' },
      { id: 'D', text: '会社です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Quán dụng ngữ "鵜呑みにする" (mù quáng tin) & "芸がない" (tầm thường thiếu sáng tạo).',
    relatedKnowledge: 'Quán dụng ngữ N1: 鵜呑み (うのみ), 芸がない.'
  },
  {
    id: 'n1-c-25',
    level: 'N1',
    year: '2016-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 8
    },
    passageOrScript: `彼ほどの 見識を 持つ 人材が 退職するとは、痛恨の 極みだ。

1：本当に。我が社にとって 計り知れない 損失ですね。
2：はい、とても 痛くて 泣きました。
3：いいえ、彼は 役に立ちませんでした。`,
    question: '彼ほどの 見識を 持つ 人材が 退職するとは、痛恨の 極みだ。',
    options: [
      { id: 'A', text: '本当に。我が社にとって 計り知れない 損失ですね。', isCorrect: true, analysis: 'ĐÚNG: "痛恨の極み" (nỗi đau đớn tiếc nuối tột cùng) -> Đồng cảm: Tổn thất khôn lường cho công ty.' },
      { id: 'B', text: 'はい、とても 痛くて 泣きました。', isCorrect: false, analysis: 'SAI: Nghĩa đen đau thể xác.' },
      { id: 'C', text: 'いいえ、彼は 役に立ちませんでした。', isCorrect: false, analysis: 'SAI: Mâu thuẫn.' },
      { id: 'D', text: '退職です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Mẫu ngữ pháp N1: N + の極み (cực độ, tột cùng) -> "痛恨の極み" = Vô cùng tiếc nuối.',
    relatedKnowledge: 'Ngữ pháp N1: 〜の極み (きわみ).'
  },
  {
    id: 'n1-c-26',
    level: 'N1',
    year: '2015-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_4',
      mondaiNumber: 4,
      mondaiTitle: '問題4: 即時応答',
      mondaiInstruction: '問題4では、問題用紙に何も印刷されていません。短い文を聞いて、1から3の中から、最も良いものを1つ選んでください。',
      questionInMondai: 9
    },
    passageOrScript: `長年の 悲願であった 新工場が 稼働し、感無量で ございます。

1：心より お慶び申し上げます。貴社の 益々の ご発展を 祈念いたします。
2：はい、重さを 測りました。
3：いいえ、悲しくはありません。`,
    question: '長年の 悲願であった 新工場が 稼働し、感無量で ございます。',
    options: [
      { id: 'A', text: '心より お慶び申し上げます。貴社の 益々の ご発展を 祈念いたします。', isCorrect: true, analysis: 'ĐÚNG: Đối tác bày tỏ "感無量" (vô cùng xúc động sau ước nguyện lớn thành công) -> Chúc mừng trang trọng nhất theo lễ nghi kinh doanh.' },
      { id: 'B', text: 'はい、重さを 測りました。', isCorrect: false, analysis: 'SAI: Hiểu sai nghĩa đo lường.' },
      { id: 'C', text: 'いいえ、悲しくはありません。', isCorrect: false, analysis: 'SAI.' },
      { id: 'D', text: '工場です。', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Lời chúc mừng khánh thành / thành tựu lớn: "心よりお慶び申し上げます。益々のご発展を祈念いたします".',
    relatedKnowledge: 'Kính ngữ nghi thức khánh thành N1: 悲願, 感無量, 祈念する.'
  },

  // --- MONDAI 5: 統合理解 (4 câu - Thảo luận chiến lược cấp cao / Xử lý bài toán kinh tế) ---
  {
    id: 'n1-c-27',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 1
    },
    passageOrScript: `グローバル製薬企業で 経営企画室長、研究開発担当役員、財務担当役員の 3人が、次期 大型新薬の パイプライン投資について 議論しています。

室長：我が社の 成長戦略を 左右する 4つの 新薬開発プログラムについて、投資配分の 決定を 下さねば なりません。
研究担当：プログラム1は、進行性希少疾患を 対象とする 遺伝子治療薬です。有効性は 極めて 高く 画期的ですが、臨床試験の コストが 膨大で、成功確率は 20％未満と ハイリスクです。
プログラム2は、生活習慣病の 既存薬を 改良した 新製剤です。臨床成功率は 80％と 極めて 堅実ですが、特許切れに 伴う ジェネリック医薬品との 価格競争が 必至で、大きな 利益率は 期待できません。
プログラム3は、がん免疫療法の 新規抗体薬です。世界市場の 規模が 巨大で、成功すれば 数千億円規模の ブロックバスターに 成長しますが、欧米の メガファーマとの 激しい 開発スピード競争に 晒されています。
プログラム4は、AIを 活用した ドラッグリポジショニングによる 精神神経疾患治療薬です。開発期間を 半減でき、特許網も 構築できますが、新技術ゆえに 規制当局の 承認基準が 不透明です。
財務担当：現在の 当社の 財務規律と キャッシュフローを 鑑みますと、プログラム1の ような 巨額の 不確実性に 単独で 賭ける 余力は ありません。しかし、プログラム2の ような 薄利多売では、グローバル競争から 脱落します。
室長：同感です。多少の 競争リスクは 覚悟の上で、将来の 収益の 柱となる 破壊的イノベーションを 掴み取る 必要が あります。メガファーマとの スピード勝負は 厳しいですが、当社の アカデミアとの 提携ネットワークを 総動員すれば、勝ち筋は 十分に あります。
研究担当：承知いたしました。では、あの プログラムに 開発リソースを 集中投下しましょう。

質問：経営陣は どの プログラムに 最優先で 投資することに 決定しましたか。`,
    question: '経営陣は どの プログラムに 最優先で 投資することに 決定しましたか。',
    options: [
      { id: 'A', text: 'プログラム1（希少疾患の 遺伝子治療薬）', isCorrect: false, analysis: 'SAI: Rủi ro quá cao, tài chính không gánh nổi.' },
      { id: 'B', text: 'プログラム2（生活習慣病の 改良新製剤）', isCorrect: false, analysis: 'SAI: Lợi nhuận quá mỏng, bị loại.' },
      { id: 'C', text: 'プログラム3（がん免疫療法の 新規抗体薬）', isCorrect: true, analysis: 'ĐÚNG: Dù cạnh tranh với các ông lớn dược phẩm nhưng có tiềm năng hàng ngàn tỷ yên (Blockbuster), tận dụng mạng lưới liên kết viện trường để bứt phá.' },
      { id: 'D', text: 'プログラム4（AIドラッグリポジショニング）', isCorrect: false, analysis: 'SAI: Khung pháp lý chưa rõ ràng.' }
    ],
    speed30sTip: 'Lọc điều kiện chiến lược: Loại 1 (quá rủi ro), loại 2 (lãi quá thấp), loại 4 (pháp lý mù mờ) -> Chọn số 3 (Ung thư miễn dịch Blockbuster).',
    relatedKnowledge: 'Từ vựng công nghiệp dược phẩm N1: パイプライン, ブロックバスター, メガファーマ, ドラッグリポジショニング.'
  },
  {
    id: 'n1-c-28',
    level: 'N1',
    year: '2019-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 2
    },
    passageOrScript: `メガバンクの 資産運用部門で、チーフアナリストが 3つの 投資ファンドの 特徴について 顧客企業に 説明しています。

アナリスト：貴社の 余裕資金の 運用に 際し、3つの ファンドを ご提案いたします。
ファンドAは、先進国の 高配当株式を 中心に 組み入れた「インカムゲイン型」です。年間 4％前後の 安定した 配当収入が 見込めますが、急激な 為替変動リスクが 存在します。
ファンドBは、AIや 量子技術、脱炭素など、破壊的イノベーションを 牽引する スタートアップを 網羅した「グロース型」です。年率 15％以上の キャピタルゲインが 狙える 反面、ボラティリティが 非常に 高く、元本割れリスクを 内包しています。
ファンドCは、世界各国の ソブリン債（国債）と インフラ資産に 分散投資する「ディフェンシブ型」です。リターンは 年 2％程度と 控えめですが、市場の 暴落時にも 元本保全性が 極めて 高い 設計です。
顧客企業の 財務部長：当社の 方針としては、将来の 設備投資に 備え、手元資金の 元本毀損だけは 絶対に 回避したい。多少 インフレヘッジが でき、定期的な 利回り収入が 確実に 得られる 安定志向の 運用が 大前提だ。
アナリスト：それでしたら、元本保全性を 第一義とし、手堅く 債券利回りを 享受できる あの ファンドが 貴社の 財務方針に 完璧に 合致します。

質問：顧客企業は どの ファンドを 選択することに しましたか。`,
    question: '顧客企業は どの ファンドを 選択することに しましたか。',
    options: [
      { id: 'A', text: 'ファンドA（先進国 高配当株式インカムゲイン型）', isCorrect: false, analysis: 'SAI: Có rủi ro biến động tỷ giá.' },
      { id: 'B', text: 'ファンドB（ハイテクグロース型）', isCorrect: false, analysis: 'SAI: Rủi ro thủng vốn gốc (元本割れ).' },
      { id: 'C', text: 'ファンドC（国債・インフラ資産ディフェンシブ型）', isCorrect: true, analysis: 'ĐÚNG: Đáp ứng tiêu chuẩn tuyệt đối: Không để suy chuyển vốn gốc (元本毀損回避), bảo toàn vốn cao nhất trong mọi biến động thị trường.' },
      { id: 'D', text: 'すべての ファンドに 均等に 投資する', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Yêu cầu tối cao của giám đốc tài chính: "元本毀損だけは絶対に回避したい" (Tuyệt đối không để mất vốn) -> Chọn Quỹ C phòng thủ (ディフェンシブ型).',
    relatedKnowledge: 'Tài chính đầu tư N1: インカムゲイン, ボラティリティ, 元本毀損, ソブリン債.'
  },
  {
    id: 'n1-c-29',
    level: 'N1',
    year: '2018-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 3
    },
    passageOrScript: `地方自治体の 政策企画課で、市庁舎の 建て替え計画について 3人が 議論しています。

課長：老朽化した 市庁舎の 再整備事業だが、市民アンケートと 財政状況を 踏まえ、最終案を 絞りたい。
担当A：案1は、現在の 跡地に そのまま 免震構造の 超高層タワーを 建設する 案です。利便性は 維持されますが、事業費が 300億円と 巨額で、将来世代への 債務負担が 深刻です。
担当B：案2は、郊外の 広大な 遊休地を 取得し、平屋の 分散型エコ庁舎を 新築する 案です。コストは 120億円に 抑えられ、環境性能も 抜群ですが、公共交通の アクセスが 悪化し、高齢者から 強い 反発が 予想されます。
担当A：案3は、駅前の 商業ビルの 空きフロアを 長期リースして 庁舎機能を 移転する「分散型サテライト庁舎」です。初期投資は わずか 30億円で 済み、駅直結で 利便性も 随一ですが、毎年 賃料が 発生し、恒久的な 資産には なりません。
担当B：案4は、現庁舎の 耐震補強と 大規模改修（リノベーション）を 行い、寿命を 30年 延命させる 案です。総額 60億円で 済み、歴史的景観も 保存できますが、執務スペースの 拡張は 望めません。
課長：人口減少と 税収減が 確実な 我が市の 今後を 見据えたとき、巨額の 起債で 将来に 禍根を 残すことは 断じて 許されない。かといって 郊外移転で 市民の 利便性を 犠牲にするわけにも いかない。イニシャルコストを 極限まで 抑え、現庁舎の 伝統を 活かしながら 財政規律を 守る 道を 選ぶべきだ。

質問：市庁舎の 建て替え計画は どの 案が 採用される ことになりましたか。`,
    question: '市庁舎の 建て替え計画は どの 案が 採用される ことになりましたか。',
    options: [
      { id: 'A', text: '案1：現敷地での 免震超高層タワーの新築', isCorrect: false, analysis: 'SAI: Chi phí 300 tỷ quá đắt, để lại nợ nần cho thế hệ sau.' },
      { id: 'B', text: '案2：郊外への 平屋エコ庁舎の 移転新築', isCorrect: false, analysis: 'SAI: Bị người già phản đối vì xa trạm xe buýt/tàu.' },
      { id: 'C', text: '案3：駅前商業ビルの 賃貸フロア移転', isCorrect: false, analysis: 'SAI: Không tạo thành tài sản vĩnh viễn.' },
      { id: 'D', text: '案4：現庁舎の 耐震補強と 大規模改修（リノベーション延命）', isCorrect: true, analysis: 'ĐÚNG: Giữ kỷ luật tài chính (60 tỷ yên), giữ nguyên vị trí thuận tiện và bảo tồn cảnh quan truyền thống.' }
    ],
    speed30sTip: 'Tổng hợp tiêu chí: Giữ vị trí cũ + không gánh nợ lớn + chi phí ban đầu thấp -> Chọn phương án 4 (cải tạo gia cố hiện trạng 60 tỷ).',
    relatedKnowledge: 'Hành chính công N1: 起債, 免震構造, リノベーション, 禍根を残す.'
  },
  {
    id: 'n1-c-30',
    level: 'N1',
    year: '2017-12',
    section: 'listening',
    choukaiMeta: {
      mondai: 'mondai_5',
      mondaiNumber: 5,
      mondaiTitle: '問題5: 統合理解',
      mondaiInstruction: '問題5では、長めの話を聞きます。メモをとっても構いません。話を聞いて、最も良いものを1つ選んでください。',
      questionInMondai: 4
    },
    passageOrScript: `自動車メーカーの 役員会議で、次世代 パワートレイン（動力源）の 開発ロードマップについて 議論されています。

CEO：脱炭素社会の 実現に 向け、各国の 環境規制が 激化している。我が社の 次世代の 命運を 託す 開発戦略を 確定させたい。
技術役員A：戦略1は、バッテリー式電気自動車（BEV）への「全固体電池の 早期実用化」です。航続距離と 充電時間を 劇的に 改善できますが、量産化プロセスの 難度が高く、コバルトや リチウムの サプライチェーンの 地政学リスクを 抱えます。
技術役員B：戦略2は、水素を 直接 燃焼させる「水素エンジン技術」です。既存の 内燃機関の 高度な 製造設備や サプライヤー網を そのまま 活用できますが、水素ステーションの インフラ整備が 世界的に 遅れています。
技術役員A：戦略3は、次世代バイオ燃料や 合成燃料（e-fuel）を 活用した「高効率ハイブリッド（HEV）」です。既存の ガソリンスタンド網を そのまま 使え、現実的な 炭素削減効果が 高いですが、欧州などの「内燃機関全廃」の 政策方針と 衝突する リスクが あります。
技術役員B：戦略4は、トラックや バスなどの 大型商用車に 特化した「燃料電池（FCEV）システム」です。長距離輸送での 実用性は 実証済みですが、乗用車市場への 展開には コスト障壁が あります。
CEO：環境規制の 行方は 各国で 錯綜しており、単一の 技術に 全てを 賭けるのは 経営上、極めて 危険だ。しかし、我が社が 長年 培ってきた 精密な エンジン加工技術と 系列サプライヤーの 雇用を 守りつつ、カーボンニュートラルを 達成できる 道筋こそが、我が社の 固有の 強みを 最大限に 生かす 唯一無二の 選択肢だ。インフラの 普及を 待つのではなく、自ら 主導権を 握って 実証実験を 加速させよう。

質問：CEOは どの 開発戦略を 最優先で 推進することを 決断しましたか。`,
    question: 'CEOは どの 開発戦略を 最優先で 推進することを 決断しましたか。',
    options: [
      { id: 'A', text: '戦略1：全固体電池を 搭載した バッテリーEV', isCorrect: false, analysis: 'SAI: Rủi ro chuỗi cung ứng vật liệu pin.' },
      { id: 'B', text: '戦略2：既存の エンジン技術と サプライヤーを 活用する 水素エンジン', isCorrect: true, analysis: 'ĐÚNG: Tận dụng tối đa công nghệ chế tạo động cơ tinh vi và bảo vệ việc làm chuỗi cung ứng độc quyền của hãng.' },
      { id: 'C', text: '戦略3：バイオ燃料ハイブリッド', isCorrect: false, analysis: 'SAI: Xung đột luật cấm động cơ đốt trong của châu Âu.' },
      { id: 'D', text: '戦略4：商用車専用の 燃料電池', isCorrect: false, analysis: 'SAI.' }
    ],
    speed30sTip: 'Bắt triết lý của CEO: Bảo vệ công nghệ động cơ độc quyền + bảo vệ việc làm chuỗi cung ứng -> Chọn Động cơ hydro (水素エンジン).',
    relatedKnowledge: 'Công nghiệp ô tô thế hệ mới N1: 全固体電池, 水素エンジン, e-fuel, 内燃機関.'
  }
];
