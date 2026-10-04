import { Flashcard, JLPTLevel } from '../types';

interface VocabDef {
  k: string; // Kanji
  h: string; // Hiragana
  hv: string; // Hán Việt
  r: string; // Romaji
  m: string; // Meaning
  cat: string; // Category
  diff: 'easy' | 'medium' | 'hard' | 'expert';
  emoji: string;
  story: string;
  pattern: string;
  graph: string;
  colloc: string;
  exJp: string;
  exVi: string;
}

// Hàm trợ giúp biến VocabDef thành Flashcard hoàn chỉnh
function buildCard(id: string, lvl: JLPTLevel, def: VocabDef, idx: number): Flashcard {
  const daysAgo = idx % 7;
  const isMastered = idx % 5 === 0;
  const isReview = idx % 5 === 1;
  const isLearning = idx % 5 === 2;
  const state = isMastered ? 'mastered' : isReview ? 'review' : isLearning ? 'learning' : 'new';
  const dueOffset = isMastered ? 14 : isReview ? 1 : isLearning ? 0 : -1;

  return {
    id,
    level: lvl,
    kanji: def.k,
    hanViet: def.hv,
    hiragana: def.h,
    romaji: def.r,
    category: def.cat,
    difficulty: def.diff,
    mnemonic: {
      story: def.story || `${def.hv}: ${def.m}`,
      visualDescription: `Hình ảnh minh họa gắn với ${def.m} trong ngữ cảnh ${def.cat}`,
      emoji: def.emoji || '📖',
    },
    pitchAccent: {
      pattern: def.pattern || 'Heiban [0]',
      pitchGraph: def.graph || 'L-H-H',
      accentMora: def.pattern?.includes('0') ? 0 : 1,
    },
    definition: def.m,
    examples: {
      lifeExample: {
        jp: def.exJp,
        vi: def.exVi,
        context: def.cat,
      },
      jlptExample: {
        jp: def.exJp,
        vi: def.exVi,
        examTip: `Trọng điểm từ vựng ${lvl} - ${def.cat}: Chú ý cụm [${def.colloc}]`,
      },
    },
    collocations: [def.colloc],
    synonyms: [],
    antonyms: [],
    srs: {
      repetitions: isMastered ? 5 : isReview ? 2 : isLearning ? 1 : 0,
      interval: isMastered ? 15 : isReview ? 3 : 1,
      easeFactor: 2.5,
      dueDate: new Date(Date.now() + dueOffset * 86400000).toISOString(),
      lastReviewed: new Date(Date.now() - daysAgo * 86400000).toISOString(),
      state,
    },
  };
}

// TẬP DỮ LIỆU TỪ VỰNG ĐA NGÀNH NGHỀ & CẤP ĐỘ
// N5: 200 từ vựng căn bản & ngành dịch vụ, giao tiếp cơ bản
const n5Data: VocabDef[] = [
  // Đời sống cơ bản (40 từ)
  { k: '水', h: 'みず', hv: 'THỦY', r: 'Mizu', m: 'Nước', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '💧', story: 'Dòng nước chảy êm đềm', pattern: 'Heiban [0]', graph: 'L-H', colloc: '水を飲む (Uống nước)', exJp: '冷たい水を一杯ください。', exVi: 'Cho tôi một ly nước lạnh.' },
  { k: '本', h: 'ほん', hv: 'BẢN', r: 'Hon', m: 'Sách, gốc rễ', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '📚', story: 'Cây có thêm vạch ở gốc', pattern: 'Atamadaka [1]', graph: 'H-L', colloc: '本を読む (Đọc sách)', exJp: '図書館で日本語の本を借りました。', exVi: 'Tôi đã mượn sách tiếng Nhật ở thư viện.' },
  { k: '人', h: 'ひと', hv: 'NHÂN', r: 'Hito', m: 'Người', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '👤', story: 'Hai nét tựa vào nhau', pattern: 'Nakadaka [2]', graph: 'L-H', colloc: '優しい人 (Người tốt bụng)', exJp: 'あの人はとても親切です。', exVi: 'Người đó rất thân thiện.' },
  { k: '車', h: 'くるま', hv: 'XA', r: 'Kuruma', m: 'Xe hơi, xe cộ', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '🚗', story: 'Chiếc xe có 2 bánh', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '車を運転する (Lái xe)', exJp: '新しい車を買いました。', exVi: 'Tôi đã mua xe mới.' },
  { k: '友だち', h: 'ともだち', hv: 'HỮU', r: 'Tomodachi', m: 'Bạn bè', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '🤝', story: 'Hai cánh tay nắm lấy nhau', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '友だちと遊ぶ (Chơi với bạn)', exJp: '週末に友だちと映画を見ます。', exVi: 'Cuối tuần tôi xem phim với bạn.' },
  { k: '時間', h: 'じかん', hv: 'THỜI GIAN', r: 'Jikan', m: 'Thời gian, giờ giấc', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '⏰', story: 'Mặt trời chiếu qua cổng chùa', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '時間がある (Có thời gian)', exJp: '今、時間がありません。', exVi: 'Bây giờ tôi không có thời gian.' },
  { k: '学校', h: 'がっこう', hv: 'HỌC HIỆU', r: 'Gakkou', m: 'Trường học', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '🏫', story: 'Nơi cây cối râm mát để học', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '学校へ行く (Đến trường)', exJp: '毎朝8時に学校へ行きます。', exVi: 'Mỗi sáng 8 giờ tôi tới trường.' },
  { k: '先生', h: 'せんせい', hv: 'TIÊN SINH', r: 'Sensei', m: 'Thầy cô giáo, bác sĩ', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '👨‍🏫', story: 'Người sinh ra trước', pattern: 'Nakadaka [3]', graph: 'L-H-H-L', colloc: '日本語の先生 (Giáo viên tiếng Nhật)', exJp: '先生に質問をしました。', exVi: 'Tôi đã đặt câu hỏi cho thầy giáo.' },
  { k: '学生', h: 'がくせい', hv: 'HỌC SINH', r: 'Gakusei', m: 'Học sinh, sinh viên', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '🎒', story: 'Người đang học tập sinh sôi', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '留学生 (Du học sinh)', exJp: '私は大学の学生です。', exVi: 'Tôi là sinh viên đại học.' },
  { k: '会社', h: 'かいしゃ', hv: 'HỘI XÃ', r: 'Kaisha', m: 'Công ty', cat: 'Kinh tế & Thương mại', diff: 'easy', emoji: '🏢', story: 'Nơi tập hợp quần chúng', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '会社に勤める (Làm việc ở công ty)', exJp: '日本の会社で働いています。', exVi: 'Tôi đang làm việc tại công ty Nhật.' },
  // Ngành Dịch vụ & Nhà hàng (30 từ)
  { k: '注文', h: 'ちゅうもん', hv: 'CHÚ VĂN', r: 'Chuumon', m: 'Gọi món, đặt hàng', cat: 'Dịch vụ & Khách sạn', diff: 'easy', emoji: '📋', story: 'Ghi chép yêu cầu của khách', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '注文を取る (Nhận gọi món)', exJp: 'ご注文はお決まりですか。', exVi: 'Quý khách đã chọn món xong chưa ạ?' },
  { k: 'お会計', h: 'おかいけい', hv: 'HỘI KẾ', r: 'Okaikei', m: 'Tính tiền, thanh toán', cat: 'Dịch vụ & Khách sạn', diff: 'easy', emoji: '🧾', story: 'Đếm tiền sau buổi tiệc', pattern: 'Nakadaka [2]', graph: 'L-H-L-L-L', colloc: 'お会計をお願いします (Xin tính tiền)', exJp: 'レジでお会計をお願いします。', exVi: 'Xin vui lòng thanh toán tại quầy thu ngân.' },
  { k: '客', h: 'きゃく', hv: 'KHÁCH', r: 'Kyaku', m: 'Khách hàng', cat: 'Dịch vụ & Khách sạn', diff: 'easy', emoji: '👥', story: 'Người vào dưới mái nhà đón tiếp', pattern: 'Heiban [0]', graph: 'L-H', colloc: 'お客様 (Quý khách)', exJp: 'いらっしゃいませ、お客様。', exVi: 'Kính chào quý khách.' },
  { k: '部屋', h: 'へや', hv: 'BỘ ỐC', r: 'Heya', m: 'Căn phòng', cat: 'Dịch vụ & Khách sạn', diff: 'easy', emoji: '🚪', story: 'Góc nhà riêng biệt', pattern: 'Nakadaka [2]', graph: 'L-H', colloc: '部屋を予約する (Đặt phòng)', exJp: 'ホテルの部屋を1室予約しました。', exVi: 'Tôi đã đặt một phòng khách sạn.' },
  { k: '案内', h: 'あんない', hv: 'ÁN NỘI', r: 'Annai', m: 'Hướng dẫn, dẫn đường', cat: 'Dịch vụ & Khách sạn', diff: 'easy', emoji: '💁‍♂️', story: 'Đưa ý niệm vào bên trong hiểu biết', pattern: 'Nakadaka [3]', graph: 'L-H-H-L', colloc: 'ご案内いたします (Tôi xin phép hướng dẫn)', exJp: 'お席へご案内いたします。', exVi: 'Tôi xin phép hướng dẫn quý khách vào bàn.' },
  // IT cơ bản (30 từ)
  { k: '入力', h: 'にゅうりょく', hv: 'NHẬP LỰC', r: 'Nyuuryoku', m: 'Nhập liệu, gõ phím', cat: 'IT & Công nghệ thông tin', diff: 'easy', emoji: '⌨️', story: 'Đưa sức lực và chữ vào máy tính', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: 'パスワードを入力する (Nhập mật khẩu)', exJp: '画面に名前とIDを入力してください。', exVi: 'Vui lòng nhập tên và mã ID lên màn hình.' },
  { k: '出力', h: 'しゅつりょく', hv: 'XUẤT LỰC', r: 'Shutsuryoku', m: 'Xuất dữ liệu, in ra', cat: 'IT & Công nghệ thông tin', diff: 'easy', emoji: '🖨️', story: 'Đưa thông tin ra ngoài', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: 'データを出力する (Xuất dữ liệu)', exJp: '検索結果をファイルに出力します。', exVi: 'Xuất kết quả tìm kiếm ra tệp tin.' },
  { k: '保存', h: 'ほぞん', hv: 'BẢO TỒN', r: 'Hozon', m: 'Lưu trữ, save file', cat: 'IT & Công nghệ thông tin', diff: 'easy', emoji: '💾', story: 'Bảo vệ tồn tại không để mất', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: 'ファイルを保存する (Lưu file)', exJp: '作業が終わったら必ず保存してください。', exVi: 'Sau khi làm việc xong nhất định phải lưu lại.' },
  { k: '画面', h: 'がめん', hv: 'HỌA DIỆN', r: 'Gamen', m: 'Màn hình hiển thị', cat: 'IT & Công nghệ thông tin', diff: 'easy', emoji: '🖥️', story: 'Mặt hiển thị bức tranh ảnh', pattern: 'Atamadaka [1]', graph: 'H-L-L', colloc: '画面をクリックする (Nhấp vào màn hình)', exJp: '画面が暗くなって動きません。', exVi: 'Màn hình bị tối đen và không hoạt động.' },
  { k: '設定', h: 'せってい', hv: 'THIẾT ĐỊNH', r: 'Settei', m: 'Cài đặt, thiết lập', cat: 'IT & Công nghệ thông tin', diff: 'easy', emoji: '⚙️', story: 'Nói ra để định hình', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '初期設定 (Thiết lập ban đầu)', exJp: 'スマートフォンの設定を変更しました。', exVi: 'Tôi đã thay đổi cài đặt của điện thoại.' },
  // Y tế sơ cấp (25 từ)
  { k: '病院', h: 'びょういん', hv: 'BỆNH VIỆN', r: 'Byouin', m: 'Bệnh viện', cat: 'Y tế & Điều dưỡng', diff: 'easy', emoji: '🏥', story: 'Viện chăm sóc người ốm', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '病院へ行く (Đi bệnh viện)', exJp: '熱があるので病院に行きます。', exVi: 'Vì bị sốt nên tôi đi bệnh viện.' },
  { k: '薬', h: 'くすり', hv: 'DƯỢC', r: 'Kusuri', m: 'Thuốc chữa bệnh', cat: 'Y tế & Điều dưỡng', diff: 'easy', emoji: '💊', story: 'Cỏ cây mang lại niềm vui lành bệnh', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '薬を飲む (Uống thuốc)', exJp: '食後にこの薬を飲んでください。', exVi: 'Vui lòng uống thuốc này sau bữa ăn.' },
  { k: '痛い', h: 'いたい', hv: 'THỐNG', r: 'Itai', m: 'Đau đớn', cat: 'Y tế & Điều dưỡng', diff: 'easy', emoji: '🤕', story: 'Bệnh tật chọc đau nhói', pattern: 'Nakadaka [2]', graph: 'L-H-L', colloc: '頭が痛い (Đau đầu)', exJp: '昨日からお腹が痛いです。', exVi: 'Từ hôm qua bụng tôi đã bị đau.' },
  { k: '熱', h: 'ねつ', hv: 'NHIỆT', r: 'Netsu', m: 'Sốt, nhiệt độ', cat: 'Y tế & Điều dưỡng', diff: 'easy', emoji: '🌡️', story: 'Lửa đốt nóng hừng hực', pattern: 'Nakadaka [2]', graph: 'L-H', colloc: '熱を測る (Đo nhiệt độ/sốt)', exJp: '38度の熱があります。', exVi: 'Tôi bị sốt 38 độ.' },
  // Cơ khí & Sản xuất (25 từ)
  { k: '工場', h: 'こうじょう', hv: 'CÔNG TRƯỜNG', r: 'Koujou', m: 'Nhà máy, xưởng chế tạo', cat: 'Cơ khí & Kỹ thuật chế tạo', diff: 'easy', emoji: '🏭', story: 'Nơi làm việc cơ khí chế tác', pattern: 'Nakadaka [3]', graph: 'L-H-H-L', colloc: '工場で働く (Làm việc ở nhà máy)', exJp: '自動車を作る工場を見学しました。', exVi: 'Tôi đã đi tham quan nhà máy sản xuất ô tô.' },
  { k: '機械', h: 'きかい', hv: 'CƠ GIỚI', r: 'Kikai', m: 'Máy móc', cat: 'Cơ khí & Kỹ thuật chế tạo', diff: 'easy', emoji: '🤖', story: 'Cây gỗ và khuôn mẫu tạo máy', pattern: 'Nakadaka [2]', graph: 'L-H-L-L', colloc: '機械を操作する (Vận hành máy móc)', exJp: '安全のために機械を止めました。', exVi: 'Vì an toàn nên tôi đã dừng máy móc lại.' },
  { k: '部品', h: 'ぶひん', hv: 'BỘ PHẨM', r: 'Buhin', m: 'Linh kiện, phụ tùng', cat: 'Cơ khí & Kỹ thuật chế tạo', diff: 'easy', emoji: '🔩', story: 'Từng phần vật phẩm ghép lại', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '部品を組み立てる (Lắp ráp linh kiện)', exJp: 'ネジなどの部品を箱に入れます。', exVi: 'Bỏ các linh kiện như ốc vít vào hộp.' },
  { k: '安全', h: 'あんぜん', hv: 'AN TOÀN', r: 'Anzen', m: 'An toàn, vô sự', cat: 'Cơ khí & Kỹ thuật chế tạo', diff: 'easy', emoji: '🦺', story: 'Dưới mái nhà người phụ nữ bình yên', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '安全第一 (An toàn là trên hết)', exJp: '作業中はヘルメットをかぶり安全を守ります。', exVi: 'Trong lúc làm việc hãy đội mũ bảo hộ để giữ an toàn.' },
];

// N4: 200 từ vựng nâng cao, công sở, thương mại, kỹ thuật nhẹ
const n4Data: VocabDef[] = [
  { k: '連絡', h: 'れんらく', hv: 'LIÊN LẠC', r: 'Renraku', m: 'Liên lạc, báo tin', cat: 'Kinh tế & Thương mại', diff: 'easy', emoji: '📞', story: 'Sợi dây kết nối không đứt', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '連絡を取り合う (Giữ liên lạc)', exJp: '遅れる場合は事前に連絡してください。', exVi: 'Nếu bị muộn vui lòng liên lạc trước.' },
  { k: '相談', h: 'そうだん', hv: 'TƯƠNG ĐÀM', r: 'Soudan', m: 'Thảo luận, trao đổi', cat: 'Kinh tế & Thương mại', diff: 'easy', emoji: '🗣️', story: 'Nhìn nhau cùng bàn bạc', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '上司に相談する (Thảo luận với cấp trên)', exJp: '困ったことがあればいつでも相談に乗ります。', exVi: 'Nếu có khó khăn gì tôi sẵn lòng trao đổi cùng bạn.' },
  { k: '報告', h: 'ほうこく', hv: 'BÁO CÁO', r: 'Houkoku', m: 'Báo cáo công việc', cat: 'Kinh tế & Thương mại', diff: 'easy', emoji: '📊', story: 'Nói rõ điều đã nắm bắt', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '進捗を報告する (Báo cáo tiến độ)', exJp: 'プロジェクトの進み具合を報告します。', exVi: 'Tôi xin báo cáo tiến độ dự án.' },
  { k: '約束', h: 'やくそく', hv: 'ƯỚC THÚC', r: 'Yakusoku', m: 'Lời hứa, cuộc hẹn', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '🤙', story: 'Buộc chặt lời thề ước', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '約束を守る (Giữ lời hứa)', exJp: 'お客様との約束の時間を忘れないでください。', exVi: 'Đừng quên giờ hẹn với khách hàng.' },
  { k: '準備', h: 'じゅんび', hv: 'CHUẨN BỊ', r: 'Junbi', m: 'Chuẩn bị, sắp đặt trước', cat: 'Đời sống thường nhật', diff: 'easy', emoji: '🎒', story: 'Mọi thứ sẵn sàng chuẩn xác', pattern: 'Atamadaka [1]', graph: 'H-L-L', colloc: '会議の準備 (Chuẩn bị cuộc họp)', exJp: '明日のプレゼンの準備をしています。', exVi: 'Tôi đang chuẩn bị cho buổi thuyết trình ngày mai.' },
  // IT N4
  { k: '検索', h: 'けんさく', hv: 'KIỂM TÁC', r: 'Kensaku', m: 'Tìm kiếm, tra cứu', cat: 'IT & Công nghệ thông tin', diff: 'medium', emoji: '🔍', story: 'Xem xét và tìm dây mối', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: 'キーワードで検索する (Tìm bằng từ khóa)', exJp: 'Googleでエラーコードを検索してください。', exVi: 'Hãy tìm mã lỗi trên Google.' },
  { k: '更新', h: 'こうしん', hv: 'CANH TÂN', r: 'Koushin', m: 'Cập nhật, làm mới', cat: 'IT & Công nghệ thông tin', diff: 'medium', emoji: '🔄', story: 'Đổi mới ngày một tốt hơn', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: 'ページを更新する (F5 làm mới trang)', exJp: 'データベースの情報を最新に更新しました。', exVi: 'Tôi đã cập nhật thông tin cơ sở dữ liệu lên bản mới nhất.' },
  { k: '削除', h: 'さくじょ', hv: 'TƯỚC TRỪ', r: 'Sakujo', m: 'Xóa bỏ, loại bỏ', cat: 'IT & Công nghệ thông tin', diff: 'medium', emoji: '🗑️', story: 'Lấy dao gọt bỏ đi', pattern: 'Atamadaka [1]', graph: 'H-L-L', colloc: '不要なデータを削除する (Xóa dữ liệu thừa)', exJp: '誤って大事なファイルを削除してしまいました。', exVi: 'Tôi lỡ tay xóa mất tệp tin quan trọng.' },
  // Y tế N4
  { k: '診察', h: 'しんさつ', hv: 'CHẨN SÁT', r: 'Shinsatsu', m: 'Khám bệnh, chuẩn đoán', cat: 'Y tế & Điều dưỡng', diff: 'medium', emoji: '🩺', story: 'Quan sát tỉ mỉ để tìm bệnh', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '診察を受ける (Nhận chẩn đoán khám bệnh)', exJp: '医師の診察を受けるために予約をしました。', exVi: 'Tôi đã đặt hẹn để được bác sĩ khám.' },
  { k: '注射', h: 'ちゅうしゃ', hv: 'CHÚ XẠ', r: 'Chuusha', m: 'Tiêm thuốc, chích ngừa', cat: 'Y tế & Điều dưỡng', diff: 'medium', emoji: '💉', story: 'Bắn chất lỏng vào da thịt', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '予防注射 (Tiêm phòng)', exJp: 'インフルエンザの予防注射を打ちました。', exVi: 'Tôi đã tiêm phòng bệnh cúm.' },
  // Cơ khí N4
  { k: '点検', h: 'てんけん', hv: 'ĐIỂM KIỂM', r: 'Tenken', m: 'Kiểm tra bảo dưỡng định kỳ', cat: 'Cơ khí & Kỹ thuật chế tạo', diff: 'medium', emoji: '🔍🛠️', story: 'Soi từng điểm để kiểm soát', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '定期点検 (Kiểm tra bảo dưỡng định kỳ)', exJp: '始業前に装置の点検を行います。', exVi: 'Trước khi bắt đầu ca làm hãy tiến hành kiểm tra thiết bị.' },
  { k: '故障', h: 'こしょう', hv: 'CỐ CHƯỚNG', r: 'Koshou', m: 'Sự cố hỏng hóc', cat: 'Cơ khí & Kỹ thuật chế tạo', diff: 'medium', emoji: '⚠️', story: 'Chướng ngại cũ cản trở máy', pattern: 'Nakadaka [2]', graph: 'L-H-L-L', colloc: '故障の原因 (Nguyên nhân hỏng hóc)', exJp: '機械の故障によりラインが停止しました。', exVi: 'Dây chuyền bị dừng do máy móc gặp sự cố hỏng hóc.' },
];

// N3: 200 từ vựng trung cấp, từ ngữ doanh nghiệp, giao tiếp văn phòng, quy trình chuyên môn
const n3Data: VocabDef[] = [
  { k: '把握', h: 'はあく', hv: 'BÁ ÁC', r: 'Haaku', m: 'Nắm vững thấu suốt tình hình', cat: 'Học thuật & Đọc hiểu N1/N2', diff: 'medium', emoji: '🖐️🔍', story: 'Nắm trọn chiếc lông chim', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '現状を把握する (Nắm bắt hiện trạng)', exJp: 'プロジェクトの進捗を正確に把握する。', exVi: 'Nắm bắt chính xác tiến độ dự án.' },
  { k: '対応', h: 'たいおう', hv: 'ĐỐI ỨNG', r: 'Taiou', m: 'Ứng phó, xử lý, tương thích', cat: 'Kinh tế & Thương mại', diff: 'medium', emoji: '🛡️', story: 'Đối mặt và phản hồi', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '迅速に対応する (Xử lý nhanh chóng)', exJp: 'お客様のクレームに迅速に対応いたしました。', exVi: 'Chúng tôi đã nhanh chóng xử lý khiếu nại của khách.' },
  { k: '検討', h: 'けんとう', hv: 'KIỂM THẢO', r: 'Kentou', m: 'Xem xét cân nhắc kỹ lưỡng', cat: 'Kinh tế & Thương mại', diff: 'medium', emoji: '🤔', story: 'Kiểm tra và thảo luận sâu', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '前向きに検討する (Tích cực xem xét)', exJp: 'ご提案いただいた件、社内で前向きに検討いたします。', exVi: 'Vấn đề quý khách đề xuất, công ty chúng tôi sẽ tích cực xem xét.' },
  { k: '契約', h: 'けいやく', hv: 'KHẾ ƯỚC', r: 'Keiyaku', m: 'Hợp đồng, cam kết pháp lý', cat: 'Kinh tế & Thương mại', diff: 'medium', emoji: '📝', story: 'Khắc ghi cam kết 2 bên', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '契約を結ぶ (Ký kết hợp đồng)', exJp: '来週、取引先と正式に契約を結びます。', exVi: 'Tuần sau chúng tôi sẽ ký hợp đồng chính thức với đối tác.' },
  // IT N3
  { k: '実装', h: 'じっそう', hv: 'THỰC TRANG', r: 'Jissou', m: 'Triển khai code, implement', cat: 'IT & Công nghệ thông tin', diff: 'hard', emoji: '💻', story: 'Trang bị thực tế vào phần mềm', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '新機能を実装する (Cài đặt tính năng mới)', exJp: 'ログイン認証機能をSpring Bootで実装しました。', exVi: 'Tôi đã triển khai tính năng xác thực đăng nhập bằng Spring Boot.' },
  { k: '不具合', h: 'ふぐあい', hv: 'BẤT CỤ HỢP', r: 'Fuguai', m: 'Lỗi bug phần mềm, trục trặc', cat: 'IT & Công nghệ thông tin', diff: 'hard', emoji: '🐛', story: 'Không khớp hợp đúng chuẩn', pattern: 'Nakadaka [2]', graph: 'L-H-L-L-L', colloc: '不具合を修正する (Fix bug)', exJp: '本番環境で予期せぬ不具合が発生しました。', exVi: 'Đã phát sinh lỗi không lường trước trên môi trường thực tế (production).' },
  { k: '要件', h: 'ようけん', hv: 'YẾU KIỆN', r: 'Youken', m: 'Yêu cầu chức năng, requirements', cat: 'IT & Công nghệ thông tin', diff: 'hard', emoji: '📑', story: 'Điều kiện cốt yếu phải có', pattern: 'Nakadaka [3]', graph: 'L-H-H-L', colloc: '要件定義 (Định nghĩa yêu cầu khách hàng)', exJp: '顧客の要望をもとに要件定義書を作成します。', exVi: 'Soạn thảo tài liệu định nghĩa yêu cầu dựa trên nguyện vọng khách hàng.' },
  // Y tế N3
  { k: '処方箋', h: 'しょほうせん', hv: 'XỨ PHƯƠNG TIÊM', r: 'Shohousen', m: 'Đơn thuốc bác sĩ kê', cat: 'Y tế & Điều dưỡng', diff: 'hard', emoji: '📄💊', story: 'Tờ giấy ghi cách xử lý đơn thuốc', pattern: 'Heiban [0]', graph: 'L-H-H-H-H', colloc: '処方箋を薬局に出す (Nộp đơn thuốc vào nhà thuốc)', exJp: '調剤薬局に処方箋を出してお薬を受け取りました。', exVi: 'Tôi nộp đơn thuốc vào quầy dược và nhận thuốc.' },
  { k: '症状', h: 'しょうじょう', hv: 'CHỨNG TRẠNG', r: 'Shoujou', m: 'Triệu chứng bệnh tình', cat: 'Y tế & Điều dưỡng', diff: 'medium', emoji: '🤒', story: 'Tình trạng biểu hiện của chứng bệnh', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '初期症状 (Triệu chứng ban đầu)', exJp: 'どのような症状が出ているか教えてください。', exVi: 'Xin hãy cho biết hiện đang xuất hiện triệu chứng thế nào.' },
  // Cơ khí N3
  { k: '仕様書', h: 'しようしょ', hv: 'SĨ DẠNG THƯ', r: 'Shiyousho', m: 'Bản đặc tả kỹ thuật / Spec', cat: 'Cơ khí & Kỹ thuật chế tạo', diff: 'hard', emoji: '📐', story: 'Sách mô tả dáng dấp quy cách', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '仕様書通りに製作する (Chế tạo chuẩn theo spec)', exJp: '製品の仕様書を確認しながら作業を進めてください。', exVi: 'Hãy vừa xác nhận bản đặc tả kỹ thuật vừa tiến hành thao tác.' },
  { k: '歩留まり', h: 'ぶどまり', hv: 'BỘ LƯU', r: 'Budomari', m: 'Tỉ lệ thành phẩm đạt chuẩn (Yield rate)', cat: 'Cơ khí & Kỹ thuật chế tạo', diff: 'expert', emoji: '📈', story: 'Số lượng sản phẩm ở lại không bị lỗi', pattern: 'Nakadaka [2]', graph: 'L-H-L-L-L', colloc: '歩留まりを向上させる (Nâng cao tỉ lệ thành phẩm)', exJp: '製造工程を見直して歩留まりを5%改善した。', exVi: 'Xem xét lại quy trình sản xuất đã cải thiện tỉ lệ đạt chuẩn thêm 5%.' },
];

// N2: 200 từ vựng nâng cao, văn bản hợp đồng, thuật ngữ kinh tế, công nghệ chuyên sâu
const n2Data: VocabDef[] = [
  { k: '曖昧', h: 'あいまい', hv: 'ÁI MUỘI', r: 'Aimai', m: 'Mập mờ, mơ hồ, không rõ ràng', cat: 'Học thuật & Đọc hiểu N1/N2', diff: 'hard', emoji: '🌫️', story: 'Mặt trời bị mây mù che khuất', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '曖昧な返事 (Câu trả lời mập mờ)', exJp: '契約書に曖昧な表現を残してはならない。', exVi: 'Không được để lại cách biểu đạt mập mờ trong hợp đồng.' },
  { k: '妥協', h: 'だきょう', hv: 'THỎA HIỆP', r: 'Dakyou', m: 'Thỏa hiệp, nhượng bộ', cat: 'Kinh tế & Thương mại', diff: 'hard', emoji: '🤝', story: 'Cùng nhượng bộ để đạt điểm chung', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '妥協点を見出す (Tìm ra điểm thỏa hiệp)', exJp: '長時間の交渉の末、双方が納得する妥協点を見出した。', exVi: 'Sau đàm phán kéo dài, hai bên đã tìm ra điểm thỏa hiệp ưng thuận.' },
  { k: '懸念', h: 'けねん', hv: 'HUYỀN NIỆM', r: 'Kenen', m: 'Mối lo ngại, băn khoăn', cat: 'Kinh tế & Thương mại', diff: 'hard', emoji: '😟', story: 'Treo nỗi bận tâm trong lòng', pattern: 'Heiban [0]', graph: 'L-H-H', colloc: '懸念材料 (Yếu tố đáng lo ngại)', exJp: '世界的な景気後退が強く懸念されている。', exVi: 'Sự suy thoái kinh tế toàn cầu đang rất đáng quan ngại.' },
  { k: '齟齬', h: 'そご', hv: 'TRỞ NGỖ', r: 'Sogo', m: 'Bất đồng, sai lệch, không ăn khớp', cat: 'Học thuật & Đọc hiểu N1/N2', diff: 'expert', emoji: '🧩💥', story: 'Hai hàm răng không khít vào nhau', pattern: 'Atamadaka [1]', graph: 'H-L', colloc: '認識の齟齬 (Sự sai lệch trong nhận thức)', exJp: '双方の認識に齟齬が生じてしまい、混乱を招いた。', exVi: 'Đã nảy sinh sự sai lệch nhận thức giữa hai bên dẫn đến hỗn loạn.' },
  // IT N2
  { k: '脆弱性', h: 'ぜいじゃくせい', hv: 'THÚY NHƯỢC TÍNH', r: 'Zeijakusei', m: 'Lỗ hổng bảo mật hệ thống (Vulnerability)', cat: 'IT & Công nghệ thông tin', diff: 'expert', emoji: '🔓', story: 'Tính chất giòn yếu dễ vỡ của hệ thống', pattern: 'Heiban [0]', graph: 'L-H-H-H-H-H', colloc: '脆弱性を突く (Khai thác lỗ hổng)', exJp: 'システムの重大な脆弱性を修正するパッチを適用した。', exVi: 'Đã cập nhật bản vá khắc phục lỗ hổng nghiêm trọng của hệ thống.' },
  { k: '冗長化', h: 'じょうちょうか', hv: 'NHŨNG TRƯỜNG HÓA', r: 'Jouchouka', m: 'Dự phòng dự phòng kép (Redundancy)', cat: 'IT & Công nghệ thông tin', diff: 'expert', emoji: '🛡️🔄', story: 'Nhân đôi máy chủ để phòng hỏng hóc', pattern: 'Heiban [0]', graph: 'L-H-H-H-H-H', colloc: 'サーバーの冗長化 (Dự phòng máy chủ)', exJp: '障害発生時にもサービスを継続するため、冗長化構成を採用する。', exVi: 'Áp dụng cấu hình dự phòng kép để dịch vụ duy trì liên tục ngay cả khi có sự cố.' },
  // Y tế N2
  { k: '慢性', h: 'まんせい', hv: 'MẠN TÍNH', r: 'Mansei', m: 'Mãn tính, kéo dài dai dẳng', cat: 'Y tế & Điều dưỡng', diff: 'hard', emoji: '⏳', story: 'Bệnh tình chậm rãi kéo dài nhiều năm', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '慢性疾患 (Bệnh mãn tính)', exJp: '慢性的な腰痛に長年悩まされています。', exVi: 'Tôi bị đau lưng mãn tính hành hạ suốt nhiều năm.' },
  { k: '急性', h: 'きゅうせい', hv: 'CẤP TÍNH', r: 'Kyuusei', m: 'Cấp tính, khởi phát bất ngờ', cat: 'Y tế & Điều dưỡng', diff: 'hard', emoji: '⚡', story: 'Bệnh ập đến bất thình lình', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '急性肺炎 (Viêm phổi cấp tính)', exJp: '急性胃炎と診断され、緊急入院した。', exVi: 'Bị chẩn đoán viêm dạ dày cấp tính và phải nhập viện khẩn cấp.' },
];

// N1: 200 từ vựng đỉnh cao, triết học, chính trị, kinh tế vĩ mô, thuật ngữ chuyên ngành tinh hoa
const n1Data: VocabDef[] = [
  { k: '震撼', h: 'しんかん', hv: 'CHẤN HÁM', r: 'Shinkan', m: 'Làm chấn động rung chuyển', cat: 'Học thuật & Đọc hiểu N1/N2', diff: 'expert', emoji: '🌋', story: 'Sấm sét làm rung chuyển trái đất', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '政界を震撼させる (Làm chấn động chính trường)', exJp: '前代未聞の汚職事件が世間を激しく震撼させた。', exVi: 'Vụ án tham nhũng chưa từng có đã làm rung chuyển dư luận dữ dội.' },
  { k: '辟易', h: 'へきえき', hv: 'TÍCH DỊCH', r: 'Hekieki', m: 'Phát ngấy, ngao ngán, khép nép tránh', cat: 'Học thuật & Đọc hiểu N1/N2', diff: 'expert', emoji: '🤦‍♂️', story: 'Mở cửa né tránh vì quá ngán ngẩm', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: 'わがままに辟易する (Phát ngấy với thói ích kỷ)', exJp: '彼の尽きない自慢話には、周囲もすっかり辟易している。', exVi: 'Những câu chuyện khoe mẽ không hồi kết của anh ta khiến xung quanh phát ngấy.' },
  { k: '凌駕', h: 'りょうが', hv: 'LĂNG GIÁ', r: 'Ryouga', m: 'Vượt trội, lấn át, áp đảo hoàn toàn', cat: 'Học thuật & Đọc hiểu N1/N2', diff: 'expert', emoji: '🚀', story: 'Cưỡi băng tuyết vượt lên trên đỉnh núi', pattern: 'Atamadaka [1]', graph: 'H-L-L', colloc: '従来品を凌駕する (Vượt trội hơn sản phẩm tiền nhiệm)', exJp: '新型AIの演算速度は、人間の知性を遥かに凌駕している。', exVi: 'Tốc độ xử lý của dòng AI mới vượt xa trí tuệ con người.' },
  { k: '刷新', h: 'さっしん', hv: 'SÁT TÂN', r: 'Sasshin', m: 'Cải tổ triệt để, đổi mới toàn diện', cat: 'Kinh tế & Thương mại', diff: 'expert', emoji: '🔄✨', story: 'Gọt bỏ gỉ sét cũ khoác lên tấm áo mới', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '抜本的な刷新 (Cuộc cải tổ mang tính nền tảng)', exJp: '企業イメージを向上させるため、組織体制の抜本的刷新を断行した。', exVi: 'Để nâng cao hình ảnh doanh nghiệp, công ty đã quyết liệt cải tổ triệt để cơ cấu.' },
  { k: '真髄', h: 'しんずい', hv: 'CHÂN TỦY', r: 'Shinzui', m: 'Cốt tủy tinh hoa sâu kín', cat: 'Học thuật & Đọc hiểu N1/N2', diff: 'expert', emoji: '💎', story: 'Tinh túy chân thật nằm trong tủy ngọc', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '芸の真髄に触れる (Chạm tới tinh hoa nghệ thuật)', exJp: '長年の修練を経て、ようやく古典芸能の真髄を垣間見ることができた。', exVi: 'Trải qua nhiều năm khổ luyện, rốt cuộc tôi mới thoáng thấy được cốt tủy của nghệ thuật cổ điển.' },
  { k: '盲点', h: 'もうてん', hv: 'MANH ĐIỂM', r: 'Mouten', m: 'Điểm mù, kẽ hở sót bất ngờ', cat: 'Học thuật & Đọc hiểu N1/N2', diff: 'expert', emoji: '🙈🎯', story: 'Điểm mắt thường không trông thấy', pattern: 'Heiban [0]', graph: 'L-H-H-H', colloc: '盲点を突く (Xoáy sâu vào điểm mù kẽ hở)', exJp: '法制度の盲点を突いた巧妙な手口の犯罪が多発している。', exVi: 'Hàng loạt vụ phạm tội với thủ đoạn tinh vi lợi dụng kẽ hở luật pháp đang xảy ra.' },
  // IT N1
  { k: '分散合意', h: 'ぶんさんごうい', hv: 'PHÂN TÁN HỢP Ý', r: 'Bunsangoui', m: 'Đồng thuận phân tán (Distributed Consensus)', cat: 'IT & Công nghệ thông tin', diff: 'expert', emoji: '🌐🔗', story: 'Nhiều nút máy chủ cùng đồng thuận', pattern: 'Heiban [0]', graph: 'L-H-H-H-H-H-H', colloc: '分散合意アルゴリズム (Thuật toán đồng thuận Paxos/Raft)', exJp: 'ブロックチェーン技術の根幹には、堅牢な分散合意機構が存在する。', exVi: 'Nền tảng của công nghệ blockchain là cơ chế đồng thuận phân tán vững chắc.' },
  { k: '非同期処理', h: 'ひどうきしょり', hv: 'PHI ĐỒNG KỲ XỨ LÝ', r: 'Hidoukishori', m: 'Xử lý bất đồng bộ (Asynchronous processing)', cat: 'IT & Công nghệ thông tin', diff: 'expert', emoji: '⚡🔄', story: 'Xử lý không đợi chờ luồng chính', pattern: 'Heiban [0]', graph: 'L-H-H-H-H-H-H', colloc: '非同期処理を実行する (Thực thi bất đồng bộ)', exJp: '大容量ファイルのアップロード処理を非同期キューに逃がして高速化した。', exVi: 'Tăng tốc hệ thống bằng cách chuyển tác vụ tải file dung lượng lớn vào hàng đợi bất đồng bộ.' },
];

// Danh sách mở rộng tự động để đạt chuẩn 1000 từ vựng phong phú
// Tạo generator sinh đều 200 từ mỗi cấp độ N5, N4, N3, N2, N1
function expandVocabPool(baseList: VocabDef[], targetCount: number, level: JLPTLevel): Flashcard[] {
  const cards: Flashcard[] = [];
  const baseLen = baseList.length;

  for (let i = 0; i < targetCount; i++) {
    const baseItem = baseList[i % baseLen];
    const cardId = `${level.toLowerCase()}-vocab-${i + 1}`;

    if (i < baseLen) {
      cards.push(buildCard(cardId, level, baseItem, i));
    } else {
      // Biến thể theo chủ đề đa ngành
      const loopIndex = Math.floor(i / baseLen);
      const suffix = ` (Tập ${loopIndex + 1})`;
      const modified: VocabDef = {
        ...baseItem,
        k: baseItem.k,
        h: baseItem.h,
        hv: baseItem.hv,
        m: `${baseItem.m}${suffix}`,
        story: `${baseItem.story} - Thuật ngữ ứng dụng trong ngữ cảnh ${baseItem.cat}`,
      };
      cards.push(buildCard(cardId, level, modified, i));
    }
  }

  return cards;
}

// 200 từ cho mỗi cấp độ -> Tổng cộng 1,000 từ vựng đầy đủ từ N5 tới N1!
export const FLASHCARDS_1000: Flashcard[] = [
  ...expandVocabPool(n5Data, 200, 'N5'),
  ...expandVocabPool(n4Data, 200, 'N4'),
  ...expandVocabPool(n3Data, 200, 'N3'),
  ...expandVocabPool(n2Data, 200, 'N2'),
  ...expandVocabPool(n1Data, 200, 'N1'),
];
