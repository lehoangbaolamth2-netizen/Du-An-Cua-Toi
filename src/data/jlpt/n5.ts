import { JLPTExamPackage } from '../jlptExams';
import { N5_CHOUKAI_QUESTIONS } from '../choukai/n5Choukai';

export const EXAM_N5_PACKAGE: JLPTExamPackage = {
  id: 'exam-n5-2018-12',
  level: 'N5',
  year: '2018-12',
  title: 'Đề Thi Thật JLPT N5 (Kỳ Tháng 12/2018 & 2020)',
  totalTimeMinutes: 75,
  questions: [
    // --- TỪ VỰNG N5 (15 câu) ---
    {
      id: 'n5-v-1',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'あそこで 本を 【よんで】 います。',
      options: [
        { id: 'A', text: '読んで', isCorrect: true, analysis: 'ĐÚNG: Chữ Hán của よむ (đọc) là 読 (Độc).' },
        { id: 'B', text: '休んで', isCorrect: false, analysis: 'SAI: Chữ Hưu (やすんで - nghỉ ngơi).' },
        { id: 'C', text: '飲んで', isCorrect: false, analysis: 'SAI: Chữ Ẩm (のんで - uống).' },
        { id: 'D', text: '呼んで', isCorrect: false, analysis: 'SAI: Chữ Hô (よんで - gọi ai đó).' }
      ],
      speed30sTip: 'Mẹo: Đi kèm 本 (sách) thì chỉ có thể là 読 (Đọc).',
      relatedKnowledge: 'Động từ 読む (よむ - Độc).'
    },
    {
      id: 'n5-v-2',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'この 【くるま】 は とても あたらしいです。',
      options: [
        { id: 'A', text: '東', isCorrect: false, analysis: 'SAI: Chữ Đông (phía đông).' },
        { id: 'B', text: '車', isCorrect: true, analysis: 'ĐÚNG: Chữ Xa (くるま - ô tô/xe hơi).' },
        { id: 'C', text: '重', isCorrect: false, analysis: 'SAI: Chữ Trọng (nặng).' },
        { id: 'D', text: '魚', isCorrect: false, analysis: 'SAI: Chữ Ngư (cá).' }
      ],
      speed30sTip: 'Mẹo: くるま là chữ 車.',
      relatedKnowledge: 'Chữ Hán 車 (Xa).'
    },
    {
      id: 'n5-v-3',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'あしたは 【なんようび】 ですか。',
      options: [
        { id: 'A', text: '何日', isCorrect: false, analysis: 'SAI: なん日 (ngày mấy).' },
        { id: 'B', text: '何曜日', isCorrect: true, analysis: 'ĐÚNG: Chữ Hà Diệu Nhật (thứ mấy trong tuần).' },
        { id: 'C', text: '何月', isCorrect: false, analysis: 'SAI: なんがつ (tháng mấy).' },
        { id: 'D', text: '何年', isCorrect: false, analysis: 'SAI: なんねん (năm nào).' }
      ],
      speed30sTip: 'Mẹo: ようび luôn có chữ 曜日.',
      relatedKnowledge: 'Từ vựng các ngày trong tuần: 月曜日, 火曜日, 水曜日...'
    },
    {
      id: 'n5-v-4',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'えきの 【まえ】 で ともだちに あいました。',
      options: [
        { id: 'A', text: '前', isCorrect: true, analysis: 'ĐÚNG: Chữ Tiền (まえ - phía trước).' },
        { id: 'B', text: '後', isCorrect: false, analysis: 'SAI: Chữ Hậu (うしろ - phía sau).' },
        { id: 'C', text: '右', isCorrect: false, analysis: 'SAI: Chữ Hữu (みぎ - bên phải).' },
        { id: 'D', text: '左', isCorrect: false, analysis: 'SAI: Chữ Tả (ひだり - bên trái).' }
      ],
      speed30sTip: 'Mẹo: 前 = Tiền = phía trước.',
      relatedKnowledge: 'Phương vị từ: 前, 後, 右, 左, 上, 下, 中, 外.'
    },
    {
      id: 'n5-v-5',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'まいあさ、こうえんを （　　） します。',
      options: [
        { id: 'A', text: 'さんぽ', isCorrect: true, analysis: 'ĐÚNG: さんぽする (散歩 - đi dạo).' },
        { id: 'B', text: 'べんきょう', isCorrect: false, analysis: 'SAI: Đi công viên thì đi dạo là tự nhiên nhất.' },
        { id: 'C', text: 'しゅくだい', isCorrect: false, analysis: 'SAI: Bài tập về nhà.' },
        { id: 'D', text: 'そうじ', isCorrect: false, analysis: 'SAI: Dọn dẹp vệ sinh.' }
      ],
      speed30sTip: 'Mẹo: Cụm từ cố định: 公園を散歩する (Đi dạo công viên).',
      relatedKnowledge: 'Động từ nhóm 3: 散歩する, 買い物する, 旅行する.'
    },
    {
      id: 'n5-v-6',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'あついですから、まどを （　　） ください。',
      options: [
        { id: 'A', text: 'しめて', isCorrect: false, analysis: 'SAI: Nóng thì phải mở cửa sổ, không đóng.' },
        { id: 'B', text: 'あけて', isCorrect: true, analysis: 'ĐÚNG: あける (開ける - mở cửa).' },
        { id: 'C', text: 'つけて', isCorrect: false, analysis: 'SAI: Bật đèn/điều hòa, không dùng cho cửa sổ.' },
        { id: 'D', text: 'けして', isCorrect: false, analysis: 'SAI: Tắt thiết bị điện.' }
      ],
      speed30sTip: 'Mẹo: まど (cửa sổ) + あつい (nóng) -> 開けて (mở ra).',
      relatedKnowledge: 'Cặp tha động từ: 開ける (mở) vs 閉める (đóng).'
    },
    {
      id: 'n5-v-7',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'きのうは かぜを （　　） ので、がっこうを やすみました。',
      options: [
        { id: 'A', text: 'ひいた', isCorrect: true, analysis: 'ĐÚNG: Cụm cố định: 風邪をひく (かぜをひく - bị cảm cúm).' },
        { id: 'B', text: 'とった', isCorrect: false, analysis: 'SAI: Lấy/cầm.' },
        { id: 'C', text: 'のんだ', isCorrect: false, analysis: 'SAI: Uống.' },
        { id: 'D', text: 'かけた', isCorrect: false, analysis: 'SAI: Treo/đeo.' }
      ],
      speed30sTip: 'Mẹo: 風邪 (cảm lạnh) luôn đi với 引く (ひく).',
      relatedKnowledge: 'Collocation y tế: 風邪をひく, 熱がある, 薬を飲む.'
    },
    {
      id: 'n5-v-8',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'きのうの パーティーは とても （　　） です。',
      options: [
        { id: 'A', text: 'にぎやか', isCorrect: true, analysis: 'ĐÚNG: にぎやか (nhộn nhịp, vui vẻ đông vui).' },
        { id: 'B', text: 'しずか', isCorrect: false, analysis: 'SAI: Tiệc tùng đông người không yên tĩnh.' },
        { id: 'C', text: 'ひま', isCorrect: false, analysis: 'SAI: Rảnh rỗi.' },
        { id: 'D', text: 'べんり', isCorrect: false, analysis: 'SAI: Tiện lợi.' }
      ],
      speed30sTip: 'Mẹo: パーティー (bữa tiệc) -> にぎやか (náo nhiệt).',
      relatedKnowledge: 'Tính từ đuôi な N5: にぎやか, しずか, べんり, ひま.'
    },
    {
      id: 'n5-v-9',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'これは わたしの 【ちち】 の しゃしんです。',
      options: [
        { id: 'A', text: '父', isCorrect: true, analysis: 'ĐÚNG: Chữ Phụ (ちち - bố tôi).' },
        { id: 'B', text: '母', isCorrect: false, analysis: 'SAI: Chữ Mẫu (はは - mẹ tôi).' },
        { id: 'C', text: '兄', isCorrect: false, analysis: 'SAI: Chữ Huynh (あに - anh trai tôi).' },
        { id: 'D', text: '弟', isCorrect: false, analysis: 'SAI: Chữ Đệ (おとうと - em trai tôi).' }
      ],
      speed30sTip: 'Mẹo: ちち = 父 (Bố).',
      relatedKnowledge: 'Cách xưng hô gia đình mình: 父, 母, 兄, 姉, 弟, 妹.'
    },
    {
      id: 'n5-v-10',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'つくえの うえに えんぴつが 3（　　） あります。',
      options: [
        { id: 'A', text: 'ほん', isCorrect: true, analysis: 'ĐÚNG: 3本 (さんぼん) đếm vật dài thon như bút chì.' },
        { id: 'B', text: 'まい', isCorrect: false, analysis: 'SAI: Đếm tờ giấy mỏng.' },
        { id: 'C', text: 'さつ', isCorrect: false, analysis: 'SAI: Đếm cuốn sách.' },
        { id: 'D', text: 'だい', isCorrect: false, analysis: 'SAI: Đếm xe cộ máy móc.' }
      ],
      speed30sTip: 'Mẹo: えんぴつ (bút chì - thon dài) -> 本 (ほん/ぼん).',
      relatedKnowledge: 'Lượng từ đếm N5: 本, 枚, 冊, 台, 匹, 個.'
    },
    {
      id: 'n5-v-11',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'あのみせは りょうりが おいしいですが、ねだんが （　　） です。',
      options: [
        { id: 'A', text: 'たかい', isCorrect: true, analysis: 'ĐÚNG: が biểu thị sự đối lập: ngon nhưng đắt (たかい).' },
        { id: 'B', text: 'やすい', isCorrect: false, analysis: 'SAI: Nếu rẻ thì dùng そして.' },
        { id: 'C', text: 'ひくい', isCorrect: false, analysis: 'SAI: Không nói giá thấp bằng ひくい.' },
        { id: 'D', text: 'ちいさい', isCorrect: false, analysis: 'SAI: Nhỏ bé.' }
      ],
      speed30sTip: 'Mẹo: おいしい (ngon) + が (nhưng) -> たかい (đắt).',
      relatedKnowledge: 'Tính từ trái nghĩa: 高い vs 安い.'
    },
    {
      id: 'n5-v-12',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'きょうは とても つかれましたから、 （　　） ねます。',
      options: [
        { id: 'A', text: 'はやく', isCorrect: true, analysis: 'ĐÚNG: はやく (早く - đi ngủ sớm).' },
        { id: 'B', text: 'おそく', isCorrect: false, analysis: 'SAI: Đi ngủ muộn.' },
        { id: 'C', text: 'ゆっくり', isCorrect: false, analysis: 'SAI: Thong thả.' },
        { id: 'D', text: 'あまり', isCorrect: false, analysis: 'SAI: Đi với phủ định.' }
      ],
      speed30sTip: 'Mẹo: つかれた (mệt) -> 早く寝る (ngủ sớm).',
      relatedKnowledge: 'Phó từ: 早く, 遅く, ゆっくり, ぜひ.'
    },
    {
      id: 'n5-v-13',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: '【がいこく】 の ことばを べんきょうします。',
      options: [
        { id: 'A', text: '外国', isCorrect: true, analysis: 'ĐÚNG: Chữ Ngoại Quốc (nước ngoài).' },
        { id: 'B', text: '外人', isCorrect: false, analysis: 'SAI: Người nước ngoài.' },
        { id: 'C', text: '外車', isCorrect: false, analysis: 'SAI: Xe nhập khẩu.' },
        { id: 'D', text: '外門', isCorrect: false, analysis: 'SAI: Cửa ngoài.' }
      ],
      speed30sTip: 'Mẹo: がいこく = 外国 (Ngoại quốc).',
      relatedKnowledge: 'Từ vựng N5: 外国人, 外国語, 海外.'
    },
    {
      id: 'n5-v-14',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'ぎゅうにゅうを 【かって】 きました。',
      options: [
        { id: 'A', text: '買って', isCorrect: true, analysis: 'ĐÚNG: Chữ Mãi (かって - mua).' },
        { id: 'B', text: '待って', isCorrect: false, analysis: 'SAI: Chữ Đãi (まって - chờ).' },
        { id: 'C', text: '持って', isCorrect: false, analysis: 'SAI: Chữ Trì (もって - cầm/mang).' },
        { id: 'D', text: '帰って', isCorrect: false, analysis: 'SAI: Chữ Quy (かえって - về).' }
      ],
      speed30sTip: 'Mẹo: Sữa bò thì phải là 買って (mua).',
      relatedKnowledge: 'Chữ Hán 買 (Mãi - mua) vs 売 (Mại - bán).'
    },
    {
      id: 'n5-v-15',
      level: 'N5',
      year: '2018-12',
      section: 'vocabulary',
      question: 'きのうは あめが （　　） ふりました。',
      options: [
        { id: 'A', text: 'たくさん', isCorrect: true, analysis: 'ĐÚNG: たくさん (nhiều).' },
        { id: 'B', text: 'だんだん', isCorrect: false, analysis: 'SAI: Dần dần.' },
        { id: 'C', text: 'ちょうど', isCorrect: false, analysis: 'SAI: Vừa đúng.' },
        { id: 'D', text: 'ぜんぜん', isCorrect: false, analysis: 'SAI: Đi kèm phủ định.' }
      ],
      speed30sTip: 'Mẹo: Mưa rơi nhiều -> たくさん.',
      relatedKnowledge: 'Phó từ chỉ lượng: たくさん, すこし, ぜんぜん.'
    },

    // --- NGỮ PHÁP N5 (15 câu) ---
    {
      id: 'n5-g-1',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: 'わたしは 毎朝 7時 （　　） おきます。',
      options: [
        { id: 'A', text: 'に', isCorrect: true, analysis: 'ĐÚNG: Trợ từ に đi sau mốc thời gian cụ thể (7時に起きる).' },
        { id: 'B', text: 'で', isCorrect: false, analysis: 'SAI: Nơi chốn hành động hoặc phương tiện.' },
        { id: 'C', text: 'を', isCorrect: false, analysis: 'SAI: Tân ngữ.' },
        { id: 'D', text: 'へ', isCorrect: false, analysis: 'SAI: Hướng di chuyển.' }
      ],
      speed30sTip: 'Mẹo 30 giây: Giờ giấc cụ thể (7時) bắt buộc dùng trợ từ に.',
      relatedKnowledge: 'Quy tắc trợ từ thời gian: 曜日/時間 + に.'
    },
    {
      id: 'n5-g-2',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: 'きのう デパートへ バス （　　） 行きました。',
      options: [
        { id: 'A', text: 'で', isCorrect: true, analysis: 'ĐÚNG: Trợ từ で chỉ phương tiện giao thông (バスで).' },
        { id: 'B', text: 'に', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'を', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'から', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Phương tiện đi lại (xe buýt, tàu điện) -> で.',
      relatedKnowledge: 'Trợ từ で chỉ phương tiện di chuyển.'
    },
    {
      id: 'n5-g-3',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: 'つくえの 上に 本 （　　） ペンなどが あります。',
      options: [
        { id: 'A', text: 'や', isCorrect: true, analysis: 'ĐÚNG: Cặp trợ từ や...など dùng liệt kê không đầy đủ.' },
        { id: 'B', text: 'と', isCorrect: false, analysis: 'SAI: と là liệt kê toàn bộ, không đi với など.' },
        { id: 'C', text: 'も', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'か', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo 30 giây: Thấy chữ など ở sau -> 99% chọn や ở trước (cụm や...など).',
      relatedKnowledge: 'Liệt kê: A や B など.'
    },
    {
      id: 'n5-g-4',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: '教室に 田中先生 （　　） 学生が います。',
      options: [
        { id: 'A', text: 'と', isCorrect: true, analysis: 'ĐÚNG: と dùng liệt kê A và B đầy đủ.' },
        { id: 'B', text: 'や', isCorrect: false, analysis: 'SAI: Thiếu など ở sau.' },
        { id: 'C', text: 'に', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'で', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: A と B (A và B).',
      relatedKnowledge: 'Trợ từ と.'
    },
    {
      id: 'n5-g-5',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: 'わたしは 日曜日、どこ （　　） 行きませんでした。',
      options: [
        { id: 'A', text: 'へも', isCorrect: true, analysis: 'ĐÚNG: どこへも + phủ định (Không đi bất cứ đâu cả).' },
        { id: 'B', text: 'でも', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'にも', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'を', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Đi đâu (へ行く) -> Phủ định hoàn toàn: どこへも行きませんでした.',
      relatedKnowledge: 'Nghi vấn từ + も + phủ định.'
    },
    {
      id: 'n5-g-6',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: 'この りんごは ひとつ 100円 （　　） です。',
      options: [
        { id: 'A', text: 'だ', isCorrect: false, analysis: 'SAI.' },
        { id: 'B', text: 'です', isCorrect: true, analysis: 'ĐÚNG: Lịch sự: 100円です.' },
        { id: 'C', text: 'ます', isCorrect: false, analysis: 'SAI: ます chỉ đi sau động từ.' },
        { id: 'D', text: 'でした', isCorrect: false, analysis: 'SAI: Thời hiện tại.' }
      ],
      speed30sTip: 'Mẹo: Danh từ/số từ đi với です.',
      relatedKnowledge: 'Trợ động từ です.'
    },
    {
      id: 'n5-g-7',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: '日本料理の なかで すしが いちばん （　　） です。',
      options: [
        { id: 'A', text: '好き', isCorrect: true, analysis: 'ĐÚNG: いちばん好きです (Thích nhất).' },
        { id: 'B', text: '好きな', isCorrect: false, analysis: 'SAI: Trước です dùng 好き, không dùng 好きな.' },
        { id: 'C', text: '好きに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '好きだ', isCorrect: false, analysis: 'SAI: Trùng đuôi だです.' }
      ],
      speed30sTip: 'Mẹo: Mẫu so sánh nhất: [Phạm vi] の中で [Đối tượng] が いちばん 好きです.',
      relatedKnowledge: 'Minna bài 12: So sánh hơn nhất.'
    },
    {
      id: 'n5-g-8',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: 'この部屋は （　　） あかるいです。',
      options: [
        { id: 'A', text: 'ひろくて', isCorrect: true, analysis: 'ĐÚNG: Tính từ đuôi い chia thể て: 広い -> 広くて (Rộng và sáng sủa).' },
        { id: 'B', text: 'ひろい', isCorrect: false, analysis: 'SAI: Nối hai tính từ đuôi い phải đổi đuôi い thành くて.' },
        { id: 'C', text: 'ひろく', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ひろいで', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Nối 2 tính từ い: Bỏ い thêm くて.',
      relatedKnowledge: 'Chia thể て của tính từ đuôi い.'
    },
    {
      id: 'n5-g-9',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: '日本語の 勉強は （　　） ですが、おもしろいです。',
      options: [
        { id: 'A', text: 'むずかしい', isCorrect: true, analysis: 'ĐÚNG: Khó nhưng mà thú vị (むずかしいですが).' },
        { id: 'B', text: 'むずかしくない', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'むずかしくて', isCorrect: false, analysis: 'SAI: て dùng nối đồng thuận, nhưng ở đây có ですが.' },
        { id: 'D', text: 'むずかしかった', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Tính từ đuôi い + ですが.',
      relatedKnowledge: 'Nối tính từ đối lập: A-i ですが, B です.'
    },
    {
      id: 'n5-g-10',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: '父は わたし （　　） とけいを くれました。',
      options: [
        { id: 'A', text: 'に', isCorrect: true, analysis: 'ĐÚNG: Người khác cho tôi: [Người] が わたし に くれました.' },
        { id: 'B', text: 'で', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'を', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'へ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: わたし に くれる (Ai đó cho tôi cái gì).',
      relatedKnowledge: 'Mẫu câu cho nhận N5: あげる, もらう, くれる.'
    },
    {
      id: 'n5-g-11',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: '日本へ 来て （　　）、毎日 日本語を つかっています。',
      options: [
        { id: 'A', text: 'から', isCorrect: true, analysis: 'ĐÚNG: V-te + から (Kể từ sau khi đến Nhật).' },
        { id: 'B', text: 'あとで', isCorrect: false, analysis: 'SAI: あとで đi với V-ta.' },
        { id: 'C', text: 'まえに', isCorrect: false, analysis: 'SAI: まえに đi với V-dic.' },
        { id: 'D', text: 'とき', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: V-te から (Sau khi làm V thì luôn luôn...).',
      relatedKnowledge: 'Minna bài 16: V-te kara.'
    },
    {
      id: 'n5-g-12',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: '山田さんは ピアノを ひく （　　）が できます。',
      options: [
        { id: 'A', text: 'こと', isCorrect: true, analysis: 'ĐÚNG: Danh từ hóa động từ: V-dic + ことが できます (Có thể chơi đàn piano).' },
        { id: 'B', text: 'もの', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'の', isCorrect: false, analysis: 'SAI: Mẫu chuẩn N5 là ことができる.' },
        { id: 'D', text: 'とき', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: V-dic + ことができる (Thể khả năng cơ bản).',
      relatedKnowledge: 'Minna bài 18: Thể khả năng V-dic + ことができる.'
    },
    {
      id: 'n5-g-13',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: 'わたしは いちども 日本料理を （　　） ことが ありません。',
      options: [
        { id: 'A', text: '食べた', isCorrect: true, analysis: 'ĐÚNG: V-ta + ことがある (Đã từng / chưa từng có kinh nghiệm làm V).' },
        { id: 'B', text: '食べる', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '食べて', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '食べない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Trải nghiệm trong quá khứ: V-ta + ことがある.',
      relatedKnowledge: 'Minna bài 19: Kinh nghiệm V-ta koto ga aru.'
    },
    {
      id: 'n5-g-14',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: '休みの 日は 掃除を したり、洗濯を （　　） します。',
      options: [
        { id: 'A', text: 'したり', isCorrect: true, analysis: 'ĐÚNG: Cặp mẫu câu: ~たり ~たり します (Khi thì dọn dẹp, khi thì giặt đồ).' },
        { id: 'B', text: 'して', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'する', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'した', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Đã có 掃除をしたり thì vế sau bắt buộc là 洗濯をしたり.',
      relatedKnowledge: 'Minna bài 19: Liệt kê hành động V-tari, V-tari shimasu.'
    },
    {
      id: 'n5-g-15',
      level: 'N5',
      year: '2018-12',
      section: 'grammar',
      question: 'ここは 図書館ですから、大きな 声で （　　） ください。',
      options: [
        { id: 'A', text: '話さないで', isCorrect: true, analysis: 'ĐÚNG: V-nai + ないでください (Xin đừng nói chuyện to trong thư viện).' },
        { id: 'B', text: '話して', isCorrect: false, analysis: 'SAI: Thư viện không được yêu cầu nói to.' },
        { id: 'C', text: '話さなくて', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '話しません', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 図書館 (thư viện) -> Yêu cầu lịch sự không làm gì: ~ないでください.',
      relatedKnowledge: 'Minna bài 17: V-naide kudasai.'
    },

    // --- ĐỌC HIỂU N5 (5 câu) ---
    {
      id: 'n5-r-1',
      level: 'N5',
      year: '2018-12',
      section: 'reading',
      passageOrScript: `わたしは 毎朝 6時半に おきます。顔を あらって、パンと たまごを 食べます。それから、7時20分に うちを 出て、電車で 会社へ 行きます。会社は 8時半から 5時までです。`,
      question: 'この人は 何時に うちを 出ますか。',
      options: [
        { id: 'A', text: '6時半', isCorrect: false, analysis: 'SAI: 6h30 là giờ thức dậy (おきます).' },
        { id: 'B', text: '7時20分', isCorrect: true, analysis: 'ĐÚNG: Khớp chính xác câu: "7時20分に うちを 出て".' },
        { id: 'C', text: '8時半', isCorrect: false, analysis: 'SAI: 8h30 là giờ bắt đầu làm việc ở công ty.' },
        { id: 'D', text: '5時', isCorrect: false, analysis: 'SAI: 5h chiều là giờ tan làm.' }
      ],
      speed30sTip: 'Mẹo 30 giây: Bắt từ khóa "うちを出て" -> số giờ đứng ngay trước đó là 7時20分.',
      relatedKnowledge: 'Đọc hiểu mốc thời gian hành động thường nhật.'
    },
    {
      id: 'n5-r-2',
      level: 'N5',
      year: '2018-12',
      section: 'reading',
      passageOrScript: `きのう 田中さんと レストランへ 行きました。田中さんは 魚を 食べました。わたしは 肉を 食べました。料理は とても おいしかったです。田中さんが お金を はらいました。`,
      question: 'だれが お金を はらいましたか。',
      options: [
        { id: 'A', text: '田中さん', isCorrect: true, analysis: 'ĐÚNG: Khớp chính xác câu cuối: "田中さんが お金を はらいました".' },
        { id: 'B', text: 'わたし', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'レストランの 人', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ふたりとも はらわなかった', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Nhìn câu cuối cùng chứa cụm "お金を はらいました".',
      relatedKnowledge: 'Chủ ngữ thực hiện hành động với trợ từ が.'
    },
    {
      id: 'n5-r-3',
      level: 'N5',
      year: '2018-12',
      section: 'reading',
      passageOrScript: `わたしの へやは あまり ひろくないですが、あかるくて きれいです。つくえと ベッドが あります。本だなはありません。本は つくえの 下の はこに 入れて あります。`,
      question: '本は どこに ありますか。',
      options: [
        { id: 'A', text: '本だなの 中', isCorrect: false, analysis: 'SAI: Trong phòng không có giá sách (本だなはありません).' },
        { id: 'B', text: 'つくえの 下の はこの 中', isCorrect: true, analysis: 'ĐÚNG: Khớp câu: "本は つくえの 下の はこに 入れて あります".' },
        { id: 'C', text: 'ベッドの 上', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'パソコンの よこ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Bắt bẫy phủ định "本だなはありません" -> Chọn "つくえの下のはこ".',
      relatedKnowledge: 'Bẫy thông tin phủ định trong đề thi đọc hiểu.'
    },
    {
      id: 'n5-r-4',
      level: 'N5',
      year: '2018-12',
      section: 'reading',
      passageOrScript: `【留学生センターの お知らせ】
今週の 土曜日に 富士山へ 行きます。
・集まる 時間： 朝 8時
・集まる 場所： 留学生センターの まえ
※ 参加する 人は 金曜日の 5時までに 2000円を 払ってください。雨の ときは 日曜日に 行きます。`,
      question: 'お金は いつまでに 払わなければ なりませんか。',
      options: [
        { id: 'A', text: '土曜日の 朝 8時', isCorrect: false, analysis: 'SAI: Đó là giờ tập trung.' },
        { id: 'B', text: '金曜日の 5時まで', isCorrect: true, analysis: 'ĐÚNG: "金曜日の 5時までに 2000円を 払ってください".' },
        { id: 'C', text: '日曜日の 朝', isCorrect: false, analysis: 'SAI: Đó là ngày dự phòng nếu trời mưa.' },
        { id: 'D', text: '今すぐ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Đọc phần điều kiện hạn nộp tiền sau dấu ※.',
      relatedKnowledge: 'Đọc hiểu bảng thông báo (Infographic / Notice).'
    },
    {
      id: 'n5-r-5',
      level: 'N5',
      year: '2018-12',
      section: 'reading',
      passageOrScript: `田中さんは 犬が 大好きです。白い 犬を 2ぴき かっています。毎朝 1時間 いっしょに さんぽします。休みの 日には 車で 広い こうえんへ 行って、ボールで あそびます。`,
      question: '田中さんは 休みの 日に 何を しますか。',
      options: [
        { id: 'A', text: '犬を かいに行きます。', isCorrect: false, analysis: 'SAI.' },
        { id: 'B', text: '広い こうえんで 犬と ボールで あそびます。', isCorrect: true, analysis: 'ĐÚNG: "休みの 日には 車で 広い こうえんへ 行って、ボールで あそびます".' },
        { id: 'C', text: '家で ずっと 寝ます。', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '新しい 車を 買います。', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Bắt từ "休みの 日には" -> làm gì ở công viên rộng.',
      relatedKnowledge: 'Đọc hiểu tìm ý chính hành động của nhân vật.'
    },

    // --- NGHE HIỂU CHOUKAI N5 (30 câu Chuẩn Thi Mondai 1 -> Mondai 4 - 100% Tiếng Nhật) ---
    ...N5_CHOUKAI_QUESTIONS
  ]
};
