import { Flashcard, JLPTLevel } from '../types';
import { FLASHCARDS_1000 } from './flashcards1000';

interface RawCard {
  id: string;
  level: JLPTLevel;
  kanji: string;
  hanViet: string;
  hiragana: string;
  romaji: string;
  emoji: string;
  story: string;
  visual: string;
  pattern: string;
  pitchGraph: string;
  definition: string;
  lifeJp: string;
  lifeVi: string;
  lifeContext: string;
  jlptJp: string;
  jlptVi: string;
  examTip: string;
  collocations: string[];
  synonyms: string[];
  antonyms: string[];
  interval: number;
  repetitions: number;
  state: 'new' | 'learning' | 'review' | 'mastered';
}

function makeCard(r: RawCard): Flashcard {
  const daysAgo = Math.floor(Math.random() * 5);
  const dueOffset = r.state === 'mastered' ? 14 : r.state === 'review' ? 1 : r.state === 'learning' ? 0 : -1;
  return {
    id: r.id,
    level: r.level,
    kanji: r.kanji,
    hanViet: r.hanViet,
    hiragana: r.hiragana,
    romaji: r.romaji,
    mnemonic: {
      story: r.story,
      visualDescription: r.visual,
      emoji: r.emoji
    },
    pitchAccent: {
      pattern: r.pattern,
      pitchGraph: r.pitchGraph,
      accentMora: r.pattern.includes('0') ? 0 : 1
    },
    definition: r.definition,
    examples: {
      lifeExample: {
        jp: r.lifeJp,
        vi: r.lifeVi,
        context: r.lifeContext
      },
      jlptExample: {
        jp: r.jlptJp,
        vi: r.jlptVi,
        examTip: r.examTip
      }
    },
    collocations: r.collocations,
    synonyms: r.synonyms,
    antonyms: r.antonyms,
    srs: {
      repetitions: r.repetitions,
      interval: r.interval,
      easeFactor: 2.5,
      dueDate: new Date(Date.now() + dueOffset * 86400000).toISOString(),
      lastReviewed: new Date(Date.now() - daysAgo * 86400000).toISOString(),
      state: r.state
    }
  };
}

export const FLASHCARD_PRESETS: Flashcard[] = [
  // --- N5 (20 từ cơ bản) ---
  makeCard({
    id: 'n5-1', level: 'N5', kanji: '食べる', hanViet: 'THỰC', hiragana: 'たべる', romaji: 'Taberu', emoji: '🍱',
    story: 'Người ngồi dưới mái nhà ăn từng hạt gạo no nê.', visual: 'Hộp cơm bento nghi ngút khói.',
    pattern: 'Nakadaka [2]', pitchGraph: 'L-H-L (Ta-BE-ru)', definition: 'Ăn (Động từ nhóm 2)',
    lifeJp: '毎朝、パンと卵を食べます。', lifeVi: 'Mỗi sáng tôi ăn bánh mì và trứng.', lifeContext: 'Giao tiếp thường nhật',
    jlptJp: '何を食べてから出かけますか。', jlptVi: 'Sau khi ăn gì thì bạn sẽ ra ngoài?', examTip: 'Trọng điểm cấu trúc ~てから trong đề thi N5',
    collocations: ['朝ご飯を食べる', 'おいしく食べる'], synonyms: ['食事する'], antonyms: ['飲む'],
    interval: 8, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n5-2', level: 'N5', kanji: '飲む', hanViet: 'ẨM', hiragana: 'のむ', romaji: 'Nomu', emoji: '🍵',
    story: 'Khát nước há to miệng đón dòng nước mát lành.', visual: 'Tách trà xanh nóng.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L (NO-mu)', definition: 'Uống (Động từ nhóm 1)',
    lifeJp: '温かいお茶を飲みましょう。', lifeVi: 'Chúng ta cùng uống trà nóng nhé.', lifeContext: 'Mời mọc bạn bè',
    jlptJp: '薬を食後に飲んでください。', jlptVi: 'Hãy uống thuốc sau bữa ăn.', examTip: 'Uống thuốc trong tiếng Nhật dùng 飲む chứ không dùng 食べる',
    collocations: ['薬を飲む', '水を飲む'], synonyms: ['服用する'], antonyms: ['吐く'],
    interval: 12, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n5-3', level: 'N5', kanji: '行く', hanViet: 'HÀNH', hiragana: 'いく', romaji: 'Iku', emoji: '🚶',
    story: 'Bước chân dứt khoát đi về phía ngã tư đường.', visual: 'Biển chỉ đường ngã tư.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H (I-ku)', definition: 'Đi đến một địa điểm',
    lifeJp: '明日、友達と京都へ行きます。', lifeVi: 'Ngày mai tôi đi Kyoto với bạn.', lifeContext: 'Kế hoạch du lịch',
    jlptJp: '駅へはどうやって行きますか。', jlptVi: 'Đi đến nhà ga bằng cách nào?', examTip: 'Trợ từ chỉ hướng đi là へ hoặc に',
    collocations: ['学校へ行く', '旅行に行く'], synonyms: ['向かう'], antonyms: ['来る', '帰る'],
    interval: 15, repetitions: 6, state: 'mastered'
  }),
  makeCard({
    id: 'n5-4', level: 'N5', kanji: '友達', hanViet: 'HỮU ĐẠT', hiragana: 'ともだち', romaji: 'Tomodachi', emoji: '🤝',
    story: 'Hai bàn tay nắm chặt kết tình thân hữu đạt đến chân thành.', visual: 'Hai bạn trẻ khoác vai nhau.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (To-mo-da-chi)', definition: 'Bạn bè, đồng môn',
    lifeJp: '週末に友達と映画を見ました。', lifeVi: 'Cuối tuần tôi đã xem phim với bạn.', lifeContext: 'Kể chuyện cuối tuần',
    jlptJp: '親しい友達に手紙を書きます。', jlptVi: 'Tôi viết thư cho người bạn thân thiết.', examTip: 'Trợ từ と dùng khi làm cùng bạn bè',
    collocations: ['友達ができる', '友達と遊ぶ'], synonyms: ['友人'], antonyms: ['敵'],
    interval: 6, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n5-5', level: 'N5', kanji: '時間', hanViet: 'THỜI GIAN', hiragana: 'じかん', romaji: 'Jikan', emoji: '⏰',
    story: 'Mặt trời chiếu qua khe cửa đo từng khoảnh khắc thời gian trôi.', visual: 'Đồng hồ cát cổ điển.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Ji-ka-n)', definition: 'Thời gian, giờ giấc',
    lifeJp: 'もうすぐ会議の時間です。', lifeVi: 'Sắp đến giờ họp rồi.', lifeContext: 'Nhắc nhở công việc',
    jlptJp: '試験の時間は何分ですか。', jlptVi: 'Thời gian thi là bao nhiêu phút?', examTip: 'Phân biệt 3時 (3 giờ) và 3時間 (3 tiếng đồng hồ)',
    collocations: ['時間がある', '時間を守る'], synonyms: ['時刻'], antonyms: ['空間'],
    interval: 14, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n5-6', level: 'N5', kanji: '家族', hanViet: 'GIA TỘC', hiragana: 'かぞく', romaji: 'Kazoku', emoji: '👨‍👩‍👧',
    story: 'Dưới mái nhà chung tụ họp đông đúc con cháu ruột thịt.', visual: 'Cả gia đình quây quần bên bàn ăn.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (KA-zo-ku)', definition: 'Gia đình, người thân',
    lifeJp: '家族と一緒に晩ご飯を食べます。', lifeVi: 'Tôi ăn tối cùng với gia đình.', lifeContext: 'Bữa cơm sum họp',
    jlptJp: '私の家族は四人です。', jlptVi: 'Gia đình tôi gồm 4 người.', examTip: 'Cách đếm người: 一人, 二人, 三人...',
    collocations: ['家族思い', '家族と暮らす'], synonyms: ['身内'], antonyms: ['他人'],
    interval: 10, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n5-7', level: 'N5', kanji: '勉強', hanViet: 'MIỄN CƯỠNG', hiragana: 'べんきょう', romaji: 'Benkyou', emoji: '📚',
    story: 'Dốc hết sức lực vượt qua khó khăn để gặt hái tri thức.', visual: 'Ngọn đèn bàn thắp sáng khuya.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Be-n-kyo-u)', definition: 'Học tập, nghiên cứu',
    lifeJp: '毎日二時間日本語を勉強します。', lifeVi: 'Mỗi ngày tôi học tiếng Nhật hai tiếng.', lifeContext: 'Mục tiêu hàng ngày',
    jlptJp: '図書館で静かに勉強してください。', jlptVi: 'Xin hãy học tập yên tĩnh trong thư viện.', examTip: 'Đi kèm động từ する thành 勉強する',
    collocations: ['日本語を勉強する', '一生懸命勉強する'], synonyms: ['学習'], antonyms: ['怠惰'],
    interval: 20, repetitions: 6, state: 'mastered'
  }),
  makeCard({
    id: 'n5-8', level: 'N5', kanji: '病院', hanViet: 'BỆNH VIỆN', hiragana: 'びょういん', romaji: 'Byouin', emoji: '🏥',
    story: 'Tòa viện chăm sóc người ốm để sớm khỏe mạnh xuất viện.', visual: 'Bệnh viện chữ thập đỏ.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Byo-u-i-n)', definition: 'Bệnh viện',
    lifeJp: '熱があるから病院へ行きます。', lifeVi: 'Vì bị sốt nên tôi đi bệnh viện.', lifeContext: 'Báo ốm xin nghỉ',
    jlptJp: '病院は何時に開きますか。', jlptVi: 'Bệnh viện mở cửa lúc mấy giờ?', examTip: 'Tránh nhầm 病院 (byouin - bệnh viện) với 美容院 (biyouin - tiệm tóc)',
    collocations: ['病院にかかる', '総合病院'], synonyms: ['医院', 'クリニック'], antonyms: ['自宅'],
    interval: 5, repetitions: 2, state: 'review'
  }),
  makeCard({
    id: 'n5-9', level: 'N5', kanji: '電車', hanViet: 'ĐIỆN XA', hiragana: 'でんしゃ', romaji: 'Densha', emoji: '🚃',
    story: 'Xe chạy bằng năng lượng điện vụt qua các tuyến đường ray.', visual: 'Chuyến tàu điện màu xanh lục.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (De-n-sha)', definition: 'Tàu điện',
    lifeJp: '電車に乗って会社へ通います。', lifeVi: 'Tôi đi làm bằng tàu điện.', lifeContext: 'Đi làm mỗi sáng',
    jlptJp: '満員電車で本を読むのは難しい。', jlptVi: 'Đọc sách trên tàu điện đông đúc rất khó.', examTip: 'Lên tàu dùng 電車に乗る, xuống tàu dùng 電車を降りる',
    collocations: ['電車に乗る', '電車を降りる'], synonyms: ['列車'], antonyms: ['徒歩'],
    interval: 9, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n5-10', level: 'N5', kanji: '先生', hanViet: 'TIÊN SINH', hiragana: 'せんせい', romaji: 'Sensei', emoji: '👨‍🏫',
    story: 'Người sinh ra trước truyền dạy đạo lý cho đời sau.', visual: 'Thầy giáo đứng bên bảng đen.',
    pattern: 'Nakadaka [3]', pitchGraph: 'L-H-H-L (Se-n-SE-i)', definition: 'Thầy cô giáo, bác sĩ',
    lifeJp: '日本語の先生に質問しました。', lifeVi: 'Tôi đã đặt câu hỏi cho giáo viên tiếng Nhật.', lifeContext: 'Trong lớp học',
    jlptJp: '先生、この漢字は何と読みますか。', jlptVi: 'Thưa thầy, chữ Hán này đọc là gì ạ?', examTip: 'Dùng xưng hô trực tiếp với thầy cô, không gọi là あなた',
    collocations: ['先生に相談する', '担任の先生'], synonyms: ['教師'], antonyms: ['生徒', '学生'],
    interval: 18, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n5-11', level: 'N5', kanji: '言葉', hanViet: 'NGÔN DIỆP', hiragana: 'ことば', romaji: 'Kotoba', emoji: '💬',
    story: 'Lời nói như những chiếc lá mùa thu truyền tải tâm tư.', visual: 'Bong bóng lời nói.',
    pattern: 'Nakadaka [3]', pitchGraph: 'L-H-H-L (Ko-to-BA)', definition: 'Từ ngữ, ngôn ngữ, lời nói',
    lifeJp: '日本の文化と言葉を学びたいです。', lifeVi: 'Tôi muốn tìm hiểu ngôn ngữ và văn hóa Nhật Bản.', lifeContext: 'Giới thiệu bản thân',
    jlptJp: '丁寧な言葉を使って話しましょう。', jlptVi: 'Hãy nói chuyện bằng từ ngữ lịch sự nhé.', examTip: 'Xuất hiện ở Mondai 1 tìm từ đồng nghĩa',
    collocations: ['言葉を交わす', '優しい言葉'], synonyms: ['単語', '言語'], antonyms: ['無言'],
    interval: 7, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n5-12', level: 'N5', kanji: '始める', hanViet: 'THỦY', hiragana: 'はじめる', romaji: 'Hajimeru', emoji: '🏁',
    story: 'Người phụ nữ sinh nở là khởi đầu cho một sự sống mới.', visual: 'Vạch xuất phát cuộc đua.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ha-ji-me-ru)', definition: 'Bắt đầu (Tha động từ)',
    lifeJp: '新しい趣味を始めました。', lifeVi: 'Tôi đã bắt đầu một sở thích mới.', lifeContext: 'Chia sẻ thói quen mới',
    jlptJp: '何時から試験を始めますか。', jlptVi: 'Mấy giờ thì bắt đầu bài thi?', examTip: 'Đi sau V-masu bỏ masu: V+始める (bắt đầu làm V)',
    collocations: ['仕事を始める', '勉強を始める'], synonyms: ['開始する'], antonyms: ['終わる'],
    interval: 4, repetitions: 2, state: 'learning'
  }),
  makeCard({
    id: 'n5-13', level: 'N5', kanji: '終わる', hanViet: 'CHUNG', hiragana: 'おわる', romaji: 'Owaru', emoji: '🎯',
    story: 'Sợi tơ mùa đông đã dệt xong trọn vẹn tấm áo.', visual: 'Chuông báo hết giờ học.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (O-wa-ru)', definition: 'Kết thúc, xong xuôi',
    lifeJp: '今日の仕事が全部終わりました。', lifeVi: 'Toàn bộ công việc hôm nay đã xong.', lifeContext: 'Tan sở chiều tối',
    jlptJp: '授業が終わったらすぐ帰ります。', jlptVi: 'Học xong tiết học là tôi về ngay.', examTip: 'Cấu trúc ~たら biểu thị thứ tự hành động xong mới làm việc khác',
    collocations: ['仕事が終わる', '一日が終わる'], synonyms: ['終了する'], antonyms: ['始まる'],
    interval: 11, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n5-14', level: 'N5', kanji: '買う', hanViet: 'MÃI', hiragana: 'かう', romaji: 'Kau', emoji: '🛍️',
    story: 'Dùng vỏ sò (tiền cổ) để đổi lấy món đồ yêu thích.', visual: 'Túi mua sắm siêu thị.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H (Ka-u)', definition: 'Mua hàng',
    lifeJp: 'スーパーで野菜と果物を買いました。', lifeVi: 'Tôi đã mua rau và hoa quả ở siêu thị.', lifeContext: 'Đi chợ hàng ngày',
    jlptJp: 'この辞書はどこで買えますか。', jlptVi: 'Cuốn từ điển này mua được ở đâu?', examTip: 'Thể khả năng 買える (có thể mua)',
    collocations: ['服を買う', '買い出しに行く'], synonyms: ['購入する'], antonyms: ['売る'],
    interval: 16, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n5-15', level: 'N5', kanji: '会う', hanViet: 'HỘI', hiragana: 'あう', romaji: 'Au', emoji: '👥',
    story: 'Nhiều người tụ tập chung dưới mái hiên cùng bàn chuyện.', visual: 'Hai người bạn bắt tay gặp mặt.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L (A-u)', definition: 'Gặp gỡ',
    lifeJp: '午後三時に駅で田中さんと会います。', lifeVi: 'Ba giờ chiều tôi gặp anh Tanaka ở ga.', lifeContext: 'Hẹn gặp đối tác/bạn',
    jlptJp: '久しぶりに高校の友人に会った。', jlptVi: 'Lâu lắm mới gặp lại bạn cấp ba.', examTip: 'Gặp ai đó dùng trợ từ に: 人に会う',
    collocations: ['友達に会う', '約束して会う'], synonyms: ['対面する'], antonyms: ['別れる'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n5-16', level: 'N5', kanji: '働く', hanViet: 'ĐỘNG', hiragana: 'はたらく', romaji: 'Hataraku', emoji: '💼',
    story: 'Con người dùng sức lực và trí tuệ để tạo ra giá trị lao động.', visual: 'Nhân viên công sở chăm chỉ bên máy tính.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ha-ta-ra-ku)', definition: 'Làm việc, lao động',
    lifeJp: '日本のIT企業で働いています。', lifeVi: 'Tôi đang làm việc tại công ty IT của Nhật.', lifeContext: 'Giới thiệu nghề nghiệp',
    jlptJp: '将来どこで働きたいですか。', jlptVi: 'Tương lai bạn muốn làm việc ở đâu?', examTip: 'Làm việc tại đâu dùng trợ từ で: 会社で働く',
    collocations: ['一生懸命働く', '夜遅くまで働く'], synonyms: ['勤める'], antonyms: ['休む', '遊ぶ'],
    interval: 13, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n5-17', level: 'N5', kanji: '部屋', hanViet: 'BỘ ỐC', hiragana: 'へや', romaji: 'Heya', emoji: '🚪',
    story: 'Căn phòng nhỏ ấm cúng trong ngôi nhà của mình.', visual: 'Căn phòng sàn chiếu tatami ngăn nắp.',
    pattern: 'Nakadaka [2]', pitchGraph: 'L-H-L (He-YA)', definition: 'Căn phòng',
    lifeJp: '自分の部屋をきれいに掃除しました。', lifeVi: 'Tôi đã dọn dẹp sạch sẽ phòng của mình.', lifeContext: 'Dọn dẹp cuối tuần',
    jlptJp: '部屋を出るときは電気を消してください。', jlptVi: 'Khi rời khỏi phòng hãy tắt điện nhé.', examTip: 'Rời khỏi phòng dùng trợ từ を: 部屋を出る',
    collocations: ['部屋を片付ける', '明るい部屋'], synonyms: ['室'], antonyms: ['屋外'],
    interval: 6, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n5-18', level: 'N5', kanji: '車', hanViet: 'XA', hiragana: 'くるま', romaji: 'Kuruma', emoji: '🚗',
    story: 'Chiếc xe ngựa thời cổ có trục xoay và hai bánh lớn.', visual: 'Xe ô tô màu đỏ lăn bánh.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Ku-ru-ma)', definition: 'Xe cộ, ô tô',
    lifeJp: '父は毎日車で通勤しています。', lifeVi: 'Bố tôi mỗi ngày đều đi làm bằng ô tô.', lifeContext: 'Kể chuyện gia đình',
    jlptJp: '車に気をつけて道を渡りましょう。', jlptVi: 'Hãy chú ý xe cộ khi qua đường nhé.', examTip: 'Phương tiện đi lại dùng trợ từ で: 車で行く',
    collocations: ['車を運転する', '車を止める'], synonyms: ['自動車'], antonyms: ['歩行者'],
    interval: 17, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n5-19', level: 'N5', kanji: '毎朝', hanViet: 'MỖI TRIÊU', hiragana: 'まいあさ', romaji: 'Maiasa', emoji: '🌅',
    story: 'Mỗi khi bình minh ló rạng thì một ngày mới lại mở ra.', visual: 'Ánh nắng ban mai rót vào ban công.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L-L (MA-i-a-sa)', definition: 'Mỗi buổi sáng',
    lifeJp: '毎朝六時に起きてジョギングします。', lifeVi: 'Mỗi sáng tôi dậy lúc 6 giờ để chạy bộ.', lifeContext: 'Thói quen lành mạnh',
    jlptJp: '毎朝新聞を読みますか。', jlptVi: 'Mỗi sáng bạn có đọc báo không?', examTip: 'Từ chỉ thói quen tuần hoàn không cần thêm trợ từ に phía sau',
    collocations: ['毎朝の習慣', '毎朝早く起きる'], synonyms: ['毎朝'], antonyms: ['毎晩'],
    interval: 12, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n5-20', level: 'N5', kanji: '電話', hanViet: 'ĐIỆN THOẠI', hiragana: 'でんわ', romaji: 'Denwa', emoji: '📞',
    story: 'Dùng sóng điện thoại truyền lời nói qua vạn dặm xa xôi.', visual: 'Chiếc điện thoại thông minh rung chuông.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (De-n-wa)', definition: 'Điện thoại, cuộc gọi',
    lifeJp: '母に電話をかけて近況を話しました。', lifeVi: 'Tôi gọi điện cho mẹ kể chuyện gần đây.', lifeContext: 'Tâm sự gia đình',
    jlptJp: '後でもう一度電話をかけ直します。', jlptVi: 'Lát nữa tôi sẽ gọi điện lại.', examTip: 'Cụm từ cố định: 電話をかける (gọi điện), 電話に出る (bắt máy)',
    collocations: ['電話をかける', '電話に出る', '電話を切る'], synonyms: ['通話'], antonyms: ['対面'],
    interval: 5, repetitions: 2, state: 'learning'
  }),

  // --- N4 (20 từ then chốt) ---
  makeCard({
    id: 'n4-1', level: 'N4', kanji: '案内', hanViet: 'ÁN NỘI', hiragana: 'あんない', romaji: 'Annai', emoji: '💁‍♂️',
    story: 'Đưa khách vào bên trong chỉ dẫn tận tình từng phương án.', visual: 'Quầy tiếp tân hướng dẫn viên du lịch.',
    pattern: 'Odaka [3]', pitchGraph: 'L-H-H-H (A-n-na-I)', definition: 'Hướng dẫn, chỉ đường',
    lifeJp: '東京の観光地を友達に案内した。', lifeVi: 'Tôi đã dẫn bạn đi tham quan các danh lam ở Tokyo.', lifeContext: 'Dẫn bạn đi chơi',
    jlptJp: '工場見学のご案内を差し上げます。', jlptVi: 'Tôi xin phép gửi bản hướng dẫn tham quan nhà máy.', examTip: 'Kính ngữ khiêm nhường: ご案内いたします',
    collocations: ['道案内をする', '会場を案内する'], synonyms: ['誘導', '手引き'], antonyms: ['放置'],
    interval: 7, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n4-2', level: 'N4', kanji: '遠慮', hanViet: 'VIỄN LỰ', hiragana: 'えんりょ', romaji: 'Enryo', emoji: '🙇',
    story: 'Biết nghĩ xa lo lắng thấu đáo nên luôn giữ ý tứ nhã nhặn.', visual: 'Người khách từ chối miếng bánh cuối cùng vì ngại.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (E-n-ryo)', definition: 'Ngại ngần, giữ ý, kiêng dè',
    lifeJp: 'どうぞ遠慮しないでたくさん食べてください。', lifeVi: 'Xin mời cứ tự nhiên ăn nhiều vào đừng ngại nhé.', lifeContext: 'Chủ nhà mời cơm',
    jlptJp: '車内での通話はご遠慮ください。', jlptVi: 'Xin quý khách vui lòng không nói chuyện điện thoại trên tàu.', examTip: 'Mẫu câu cấm đoán lịch sự: ~はご遠慮ください',
    collocations: ['遠慮なくいただく', '遠慮がちに言う'], synonyms: ['気兼ね', '控える'], antonyms: ['図々しい', '無遠慮'],
    interval: 10, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n4-3', level: 'N4', kanji: '準備', hanViet: 'CHUẨN BỊ', hiragana: 'じゅんび', romaji: 'Junbi', emoji: '🎒',
    story: 'Chuẩn bị đầy đủ nước ngọt và đồ đạc trước khi lên đường.', visual: 'Vali hành lý xếp đồ ngăn nắp.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (JU-n-bi)', definition: 'Chuẩn bị, sắp đặt trước',
    lifeJp: '明日のプレゼンの準備をしています。', lifeVi: 'Tôi đang chuẩn bị cho bài thuyết trình ngày mai.', lifeContext: 'Công việc công sở',
    jlptJp: '準備運動をしてからプールに入りましょう。', jlptVi: 'Hãy khởi động chuẩn bị rồi mới xuống hồ bơi.', examTip: 'Khác với 用意 (dành cho đồ vật nhỏ có sẵn)',
    collocations: ['準備を整える', '心の準備'], synonyms: ['用意', '手配'], antonyms: ['不備'],
    interval: 15, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n4-4', level: 'N4', kanji: '連絡', hanViet: 'LIÊN LẠC', hiragana: 'れんらく', romaji: 'Renraku', emoji: '📱',
    story: 'Dây tơ liên kết chằng chịt giữ nhịp thông tin liên tục.', visual: 'Tin nhắn gửi thành công.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Re-n-ra-ku)', definition: 'Liên lạc, thông báo',
    lifeJp: '駅に着いたらすぐに連絡してください。', lifeVi: 'Đến ga thì hãy liên lạc ngay cho tôi nhé.', lifeContext: 'Hẹn gặp nhau',
    jlptJp: '電車の遅延について会社に連絡を入れた。', jlptVi: 'Tôi đã liên lạc báo công ty về việc tàu điện trễ chuyến.', examTip: 'Quy tắc công sở Nhật ほうれんそう (Hou-Ren-Sou): 報告・連絡・相談',
    collocations: ['連絡を取る', '連絡を待つ'], synonyms: ['通知', 'コンタクト'], antonyms: ['音信不通'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n4-5', level: 'N4', kanji: '習慣', hanViet: 'TẬP QUÁN', hiragana: 'しゅうかん', romaji: 'Shuukan', emoji: '🔄',
    story: 'Cánh chim non tập vỗ cánh hàng ngày thành thói quen bay lượn.', visual: 'Cuốn sổ theo dõi thói quen đọc sách.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Shu-u-ka-n)', definition: 'Tập quán, thói quen',
    lifeJp: '毎晩寝る前に読書をする習慣があります。', lifeVi: 'Tôi có thói quen đọc sách mỗi tối trước khi ngủ.', lifeContext: 'Thói quen sống',
    jlptJp: '国の習慣によってマナーが大きく異なる。', jlptVi: 'Quy tắc ứng xử khác biệt lớn tùy theo tập quán mỗi quốc gia.', examTip: 'Đề thi đọc hiểu N4 rất hay bàn về sự khác biệt tập quán văn hóa',
    collocations: ['習慣を身につける', '生活習慣'], synonyms: ['風習', '癖'], antonyms: ['奇行'],
    interval: 14, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n4-6', level: 'N4', kanji: '複雑', hanViet: 'PHỨC TẠP', hiragana: 'ふくざつ', romaji: 'Fukuzatsu', emoji: '🧩',
    story: 'Nhiều lớp áo đan xen cùng muôn loài tạp nham rắc rối.', visual: 'Mê cung rắc rối nhiều lối rẽ.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Fu-ku-za-tsu)', definition: 'Phức tạp, rắc rối (Tính từ đuôi な)',
    lifeJp: 'この機械の操作は少し複雑ですね。', lifeVi: 'Cách vận hành cỗ máy này hơi phức tạp nhỉ.', lifeContext: 'Hướng dẫn sử dụng máy tính',
    jlptJp: '複雑な文法も基本から学べば理解できる。', jlptVi: 'Ngữ pháp phức tạp nếu học từ cơ bản thì sẽ hiểu được.', examTip: 'Mondai 3 thường hỏi từ trái nghĩa của 複雑 (là 単純)',
    collocations: ['複雑な気持ち', '複雑な構造'], synonyms: ['難解', '入り組んだ'], antonyms: ['単純', 'シンプル'],
    interval: 3, repetitions: 2, state: 'learning'
  }),
  makeCard({
    id: 'n4-7', level: 'N4', kanji: '経験', hanViet: 'KINH NGHIỆM', hiragana: 'けいけん', romaji: 'Keiken', emoji: '🧗',
    story: 'Đã từng đi qua sợi tơ và trải nghiệm thử thách thực tế.', visual: 'Bản lý lịch đầy đặn các dự án.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ke-i-ke-n)', definition: 'Kinh nghiệm, trải nghiệm thực tế',
    lifeJp: '留学で素晴らしい経験ができました。', lifeVi: 'Tôi đã có trải nghiệm tuyệt vời nhờ đi du học.', lifeContext: 'Chia sẻ kỷ niệm',
    jlptJp: '日本で働いた経験がありますか。', jlptVi: 'Bạn đã từng có kinh nghiệm làm việc ở Nhật chưa?', examTip: 'Đi với ngữ pháp ~たことがある biểu thị kinh nghiệm đã từng làm gì',
    collocations: ['経験を積む', '貴重な経験'], synonyms: ['体験'], antonyms: ['未経験'],
    interval: 18, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n4-8', level: 'N4', kanji: '相談', hanViet: 'TƯƠNG ĐÀM', hiragana: 'そうだん', romaji: 'Soudan', emoji: '🗣️',
    story: 'Cùng nhìn nhau trao đổi những lời đàm đạo chân thành.', visual: 'Hai người ngồi thảo luận bên bàn cà phê.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (So-u-da-n)', definition: 'Trao đổi, thảo luận, xin ý kiến',
    lifeJp: '進路について先輩に相談しました。', lifeVi: 'Tôi đã xin ý kiến đàn anh về định hướng tương lai.', lifeContext: 'Tâm sự học tập',
    jlptJp: '困ったときは一人で悩まず相談してください。', jlptVi: 'Khi gặp khó khăn đừng ôm buồn một mình mà hãy trao đổi nhé.', examTip: 'Xin tư vấn từ ai đó dùng trợ từ に: 人に相談する',
    collocations: ['相談に乗る', '医師に相談する'], synonyms: ['協議', '打ち合わせ'], antonyms: ['独断'],
    interval: 9, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n4-9', level: 'N4', kanji: '注意', hanViet: 'CHÚ Ý', hiragana: 'ちゅうい', romaji: 'Chuui', emoji: '⚠️',
    story: 'Rót trọn ý nghĩ và tâm trí vào một điểm cảnh giác.', visual: 'Biển báo nguy hiểm màu vàng.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (CHU-u-i)', definition: 'Chú ý, cẩn thận, nhắc nhở',
    lifeJp: '車が多いので、足元に注意して歩きましょう。', lifeVi: 'Vì nhiều xe nên hãy chú ý bước chân khi đi bộ nhé.', lifeContext: 'Cảnh báo an toàn',
    jlptJp: '先生に遅刻を注意されて反省した。', jlptVi: 'Bị thầy giáo nhắc nhở vì đi muộn nên tôi đã kiểm điểm sâu sắc.', examTip: 'Có hai nét nghĩa: tự mình cẩn thận hoặc bị người khác khiển trách',
    collocations: ['注意を払う', '注意人物'], synonyms: ['用心', '警戒'], antonyms: ['油断', '不注意'],
    interval: 6, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n4-10', level: 'N4', kanji: '予定', hanViet: 'DỰ ĐỊNH', hiragana: 'よてい', romaji: 'Yotei', emoji: '🗓️',
    story: 'Đo lường trước rồi ấn định ngày giờ rõ ràng.', visual: 'Trang lịch ghi chú các mốc hẹn.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Yo-te-i)', definition: 'Dự định, kế hoạch đã lên lịch',
    lifeJp: '来週の出張予定を確認してください。', lifeVi: 'Xin hãy kiểm tra lịch trình công tác tuần tới.', lifeContext: 'Lên lịch công tác',
    jlptJp: '会議は午後二時から始まる予定です。', jlptVi: 'Cuộc họp dự kiến bắt đầu từ hai giờ chiều.', examTip: 'Cấu trúc V-ru + 予定だ (dự định theo kế hoạch khách quan)',
    collocations: ['予定が入る', '予定通り'], synonyms: ['スケジュール', '計画'], antonyms: ['未定'],
    interval: 16, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n4-11', level: 'N4', kanji: '危険', hanViet: 'NGUY HIỂM', hiragana: 'きけん', romaji: 'Kiken', emoji: '⚡',
    story: 'Đứng trên bờ vực hiểm trở gập ghềnh ranh giới sinh tử.', visual: 'Hàng rào dây thép gai cảnh báo điện cao thế.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Ki-ke-n)', definition: 'Nguy hiểm, rủi ro cao',
    lifeJp: '夜遅くに一人で歩くのは危険です。', lifeVi: 'Đi bộ một mình đêm khuya rất nguy hiểm.', lifeContext: 'Cảnh báo sinh hoạt',
    jlptJp: 'この川は流れが速く、泳ぐのは危険だ。', jlptVi: 'Dòng sông này chảy xiết, bơi ở đây là rất nguy hiểm.', examTip: 'Trái nghĩa trực tiếp là 安全 (An toàn)',
    collocations: ['危険を冒す', '危険物'], synonyms: ['危ない', '物騒'], antonyms: ['安全', '無事'],
    interval: 5, repetitions: 2, state: 'learning'
  }),
  makeCard({
    id: 'n4-12', level: 'N4', kanji: '約束', hanViet: 'ƯỚC THÚC', hiragana: 'やくそく', romaji: 'Yakusoku', emoji: '🤙',
    story: 'Dùng dây thừng buộc chặt lời thề ước không bao giờ nuốt lời.', visual: 'Ngoéo tay giữ lời hứa.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ya-ku-so-ku)', definition: 'Lời hứa, cuộc hẹn',
    lifeJp: '友達と六時に会う約束をしました。', lifeVi: 'Tôi đã hẹn gặp bạn lúc 6 giờ.', lifeContext: 'Hẹn hò bạn bè',
    jlptJp: '一度した約束は必ず守らなければならない。', jlptVi: 'Lời hứa một khi đã thề thì nhất định phải giữ gìn.', examTip: 'Cụm từ hay gặp: 約束を守る (giữ lời), 約束を破る (thất hứa)',
    collocations: ['約束を守る', '約束を破る'], synonyms: ['契り'], antonyms: ['違約'],
    interval: 11, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n4-13', level: 'N4', kanji: '故障', hanViet: 'CỐ CHƯỚNG', hiragana: 'こしょう', romaji: 'Koshou', emoji: '🔧',
    story: 'Nguyên cớ hư hỏng tạo thành vật chướng ngại không chạy được.', visual: 'Cỗ máy bốc khói cần gọi thợ sửa.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ko-sho-u)', definition: 'Hỏng hóc, sự cố máy móc',
    lifeJp: 'エアコンが故障して動かなくなりました。', lifeVi: 'Máy điều hòa bị hỏng không chạy nữa rồi.', lifeContext: 'Báo hỏng đồ dùng gia đình',
    jlptJp: '機械の故障により列車の運行が停止した。', jlptVi: 'Do sự cố máy móc nên tàu hỏa đã tạm dừng vận hành.', examTip: 'Chỉ dùng cho máy móc, không dùng cho cơ thể người (người ốm dùng 病気/怪我)',
    collocations: ['故障の原因', '故障を直す'], synonyms: ['不具合', '破損'], antonyms: ['快調', '正常'],
    interval: 7, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n4-14', level: 'N4', kanji: '説明', hanViet: 'THUYẾT MINH', hiragana: 'せつめい', romaji: 'Setsumei', emoji: '🗣️📋',
    story: 'Dùng lời nói giảng giải rõ ràng sáng tỏ như trăng rằm.', visual: 'Bản vẽ sơ đồ minh họa rõ ràng.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Se-tsu-me-i)', definition: 'Giải thích, thuyết minh',
    lifeJp: '分かりやすい言葉でルールを説明した。', lifeVi: 'Tôi đã giải thích luật chơi bằng những từ ngữ dễ hiểu.', lifeContext: 'Hướng dẫn tân binh',
    jlptJp: '理由を詳しく説明してください。', jlptVi: 'Xin hãy giải thích chi tiết lý do.', examTip: 'Cấu trúc nhờ vả lịch sự: 説明していただけませんか',
    collocations: ['詳しく説明する', '説明書を読む'], synonyms: ['解説', '釈明'], antonyms: ['黙秘'],
    interval: 13, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n4-15', level: 'N4', kanji: '失敗', hanViet: 'THẤT BẠI', hiragana: 'しっぱい', romaji: 'Shippai', emoji: '📉',
    story: 'Lỡ tay đánh rơi bảo vật quý giá nhận lấy thất bại cay đắng.', visual: 'Bình hoa vỡ tan tành dưới đất.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Shi-p-pa-i)', definition: 'Thất bại, sai sót',
    lifeJp: '料理に塩を入れすぎて失敗しました。', lifeVi: 'Tôi cho quá nhiều muối vào món ăn nên bị hỏng mất.', lifeContext: 'Nấu ăn tại nhà',
    jlptJp: '失敗から学んで次のチャンスに生かそう。', jlptVi: 'Hãy học hỏi từ thất bại để vận dụng vào cơ hội tiếp theo.', examTip: 'Tục ngữ quen thuộc trong đề thi: 失敗は成功のもと (Thất bại là mẹ thành công)',
    collocations: ['失敗を恐れる', '大失敗する'], synonyms: ['ミス', '挫折'], antonyms: ['成功'],
    interval: 4, repetitions: 2, state: 'learning'
  }),
  makeCard({
    id: 'n4-16', level: 'N4', kanji: '世話', hanViet: 'THẾ THOẠI', hiragana: 'せわ', romaji: 'Sewa', emoji: '🐕',
    story: 'Nhiều đời kể chuyện truyền nhau lòng chăm sóc đùm bọc ân cần.', visual: 'Cô bé cho chú cún con ăn hạt.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (SE-wa)', definition: 'Chăm sóc, giúp đỡ, quan tâm',
    lifeJp: '毎朝飼っている犬の世話をしています。', lifeVi: 'Mỗi sáng tôi đều chăm sóc chú chó nuôi.', lifeContext: 'Chăm sóc thú cưng',
    jlptJp: '日本滞在中は大変お世話になりました。', jlptVi: 'Trong thời gian ở Nhật tôi đã được giúp đỡ rất nhiều.', examTip: 'Lời chào cảm ơn cực kỳ phổ biến: お世話になっております',
    collocations: ['世話を焼く', 'お世話になる'], synonyms: ['面倒', '介助'], antonyms: ['放置', '邪魔'],
    interval: 12, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n4-17', level: 'N4', kanji: '賛成', hanViet: 'TÁN THÀNH', hiragana: 'さんせい', romaji: 'Sansei', emoji: '👍',
    story: 'Cùng góp lời ca ngợi giúp sự việc hoàn thành tốt đẹp.', visual: 'Đồng loạt giơ tay đồng thuận.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Sa-n-se-i)', definition: 'Tán thành, đồng ý',
    lifeJp: '彼の素晴らしい提案に全員が賛成した。', lifeVi: 'Mọi người đều tán thành đề xuất xuất sắc của anh ấy.', lifeContext: 'Biểu quyết nhóm',
    jlptJp: 'その意見には賛成しかねます。', jlptVi: 'Ý kiến đó tôi khó lòng mà đồng tình được.', examTip: 'Ngữ pháp N3/N4: V-masu + かねる (khó lòng làm được)',
    collocations: ['賛成の意を示す', '満場一致で賛成'], synonyms: ['同意', '賛同'], antonyms: ['反対'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n4-18', level: 'N4', kanji: '反対', hanViet: 'PHẢN ĐỐI', hiragana: 'はんたい', romaji: 'Hantai', emoji: '🙅',
    story: 'Quay lưng chống đối lại hàng ngũ đối diện.', visual: 'Hai mũi tên đi ngược chiều nhau.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ha-n-ta-i)', definition: 'Phản đối, ngược lại',
    lifeJp: '計画の変更には強く反対します。', lifeVi: 'Tôi kịch liệt phản đối việc thay đổi kế hoạch.', lifeContext: 'Tranh luận công việc',
    jlptJp: '予想とは反対の結果になった。', jlptVi: 'Kết quả đã hoàn toàn trái ngược với dự đoán.', examTip: 'Cấu trúc ~に反対する (phản đối điều gì)',
    collocations: ['反対意見', '反対方向に進む'], synonyms: ['異議', '抗議'], antonyms: ['賛成'],
    interval: 9, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n4-19', level: 'N4', kanji: '経済', hanViet: 'KINH TẾ', hiragana: 'けいざい', romaji: 'Keizai', emoji: '💹',
    story: 'Kinh bang tế thế, định hướng dòng tiền cứu giúp nhân dân.', visual: 'Biểu đồ tăng trưởng tài chính đi lên.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L-L (KE-i-za-i)', definition: 'Kinh tế, tài chính tiết kiệm',
    lifeJp: '大学で国際経済を専攻しています。', lifeVi: 'Tôi đang học chuyên ngành kinh tế quốc tế tại đại học.', lifeContext: 'Giới thiệu chuyên môn',
    jlptJp: '景気の回復により経済が安定してきた。', jlptVi: 'Kinh tế đã ổn định trở lại nhờ phục hồi kinh doanh.', examTip: 'Đọc báo và bài đọc hiểu Dokkai N4/N3 luôn có từ này',
    collocations: ['経済的な余裕', '世界経済'], synonyms: ['財政'], antonyms: ['浪費'],
    interval: 16, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n4-20', level: 'N4', kanji: '法律', hanViet: 'PHÁP LUẬT', hiragana: 'ほうりつ', romaji: 'Houritsu', emoji: '⚖️',
    story: 'Nước phẳng như gương thực thi kỷ luật chuẩn xác công bằng.', visual: 'Cán cân công lý và chiếc búa thẩm phán.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ho-u-ri-tsu)', definition: 'Pháp luật, luật lệ nhà nước',
    lifeJp: '社会の秩序を守るために法律を守ろう。', lifeVi: 'Hãy tuân thủ pháp luật để giữ gìn trật tự xã hội.', lifeContext: 'Giáo dục công dân',
    jlptJp: '新しい法律が国会で成立した。', jlptVi: 'Đạo luật mới đã được Quốc hội thông qua.', examTip: 'Đi với cụm từ: 法律を守る (tuân thủ luật), 法律に違反する (vi phạm luật)',
    collocations: ['法律を守る', '法律に違反する'], synonyms: ['法規', '法令'], antonyms: ['不法'],
    interval: 6, repetitions: 2, state: 'learning'
  }),

  // --- N3 (20 từ trọng tâm) ---
  makeCard({
    id: 'n3-1', level: 'N3', kanji: '把握', hanViet: 'BÁ ÁC', hiragana: 'はあく', romaji: 'Haaku', emoji: '🖐️🔍',
    story: 'Tay (扌 - Thủ) CẦM chắc chiếc Lông chim (羽 - Vũ) thì đã BẮT (把握) trọn được bản chất vấn đề.', visual: 'Bàn tay nắm chặt lấy chìa khóa thấu suốt tình hình.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ha-a-ku)', definition: 'Nắm vững, hiểu thấu suốt bản chất tình hình',
    lifeJp: '新しいプロジェクトの現状を正確に把握しておこう。', lifeVi: 'Hãy nắm bắt thật chính xác hiện trạng của dự án mới nhé.', lifeContext: 'Công việc văn phòng',
    jlptJp: '筆者の主張を的確に把握することが高得点を取る鍵である。', jlptVi: 'Nắm bắt chính xác chủ trương của tác giả là chìa khóa đạt điểm cao.', examTip: 'Xuất hiện liên tục trong câu hỏi đọc hiểu Dokkai N3/N2',
    collocations: ['現状を把握する', '実態を把握する'], synonyms: ['理解', 'つかむ'], antonyms: ['見落とし', '無知'],
    interval: 14, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n3-2', level: 'N3', kanji: '傾向', hanViet: 'KHUYNH HƯỚNG', hiragana: 'けいこう', romaji: 'Keikou', emoji: '📈',
    story: 'Nghiêng người hướng nhìn theo chiều gió thổi của xu thế.', visual: 'Đường xu hướng dốc đứng trên bảng phân tích.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ke-i-ko-u)', definition: 'Khuynh hướng, chiều hướng, xu thế',
    lifeJp: '最近は若者がテレビを見ない傾向にある。', lifeVi: 'Gần đây giới trẻ có xu hướng ít xem tivi.', lifeContext: 'Nhận xét xã hội',
    jlptJp: 'JLPTの出題傾向を分析して対策を立てる。', jlptVi: 'Phân tích xu hướng ra đề JLPT để lập chiến lược ôn luyện.', examTip: 'Cấu trúc quen thuộc: ~傾向にある (có xu hướng làm sao đó)',
    collocations: ['傾向がある', '出題傾向'], synonyms: ['トレンド', '趨勢'], antonyms: ['定常'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n3-3', level: 'N3', kanji: '解決', hanViet: 'GIẢI QUYẾT', hiragana: 'かいけつ', romaji: 'Kaiketsu', emoji: '🗝️',
    story: 'Dùng dao mổ xẻ tháo gỡ từng nút thắt và dứt khoát quyết định.', visual: 'Ổ khóa mở tung sau khi tìm thấy chìa đúng.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ka-i-ke-tsu)', definition: 'Giải quyết êm xuôi vấn đề',
    lifeJp: 'チーム全員で話し合ってトラブルを解決した。', lifeVi: 'Cả nhóm đã thảo luận và giải quyết êm xuôi sự cố.', lifeContext: 'Họp xử lý khủng hoảng',
    jlptJp: 'この問題の根本的な解決には時間がかかる。', jlptVi: 'Giải quyết tận gốc vấn đề này sẽ mất nhiều thời gian.', examTip: 'Giải quyết căn cơ gọi là 根本的な解決',
    collocations: ['問題を解決する', '円満に解決する'], synonyms: ['解消', '処理'], antonyms: ['悪化', '紛糾'],
    interval: 11, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n3-4', level: 'N3', kanji: '影響', hanViet: 'ẢNH HƯỞNG', hiragana: 'えいきょう', romaji: 'Eikyou', emoji: '🌊',
    story: 'Bóng râm và tiếng vang lan tỏa làm lay động mọi vật xung quanh.', visual: 'Hiệu ứng gợn sóng lan tỏa trên mặt hồ.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (E-i-kyo-u)', definition: 'Tác động, ảnh hưởng chi phối',
    lifeJp: '親の言動は子どもの成長に大きな影響を与える。', lifeVi: 'Lời nói và hành vi của cha mẹ tác động lớn đến sự phát triển của con.', lifeContext: 'Tâm lý giáo dục',
    jlptJp: '台風の影響で午後の電車が運休となった。', jlptVi: 'Do ảnh hưởng của bão nên các chuyến tàu chiều bị dừng chạy.', examTip: 'Cặp cụm từ chuẩn thi: 影響を与える (gây ảnh hưởng) vs 影響を受ける (chịu ảnh hưởng)',
    collocations: ['影響を与える', '影響を受ける'], synonyms: ['波及', '作用'], antonyms: ['無関係'],
    interval: 17, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n3-5', level: 'N3', kanji: '集中', hanViet: 'TẬP TRUNG', hiragana: 'しゅうちゅう', romaji: 'Shuuchuu', emoji: '🎯',
    story: 'Nhiều loài chim tụ lại một điểm chính giữa hồng tâm.', visual: 'Mũi tên cắm thẳng vào vòng tròn đỏ trung tâm.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Shu-u-chu-u)', definition: 'Tập trung cao độ',
    lifeJp: '静かなカフェで勉強に集中できました。', lifeVi: 'Tại quán cà phê yên tĩnh tôi đã tập trung cao độ vào việc học.', lifeContext: 'Học tập cuối tuần',
    jlptJp: '集中力を高めるために十分な睡眠を取ろう。', jlptVi: 'Hãy ngủ đủ giấc để nâng cao khả năng tập trung.', examTip: 'Trợ từ に: ~に集中する (tập trung vào điều gì)',
    collocations: ['集中力を高める', '意識を集中する'], synonyms: ['専念', '没頭'], antonyms: ['散漫', '分散'],
    interval: 5, repetitions: 2, state: 'learning'
  }),
  makeCard({
    id: 'n3-6', level: 'N3', kanji: '努力', hanViet: 'NỖ LỰC', hiragana: 'どりょく', romaji: 'Doryoku', emoji: '💪',
    story: 'Dùng cả tấm lòng và sức lực kiên trì vượt qua gian nan.', visual: 'Vận động viên leo dốc chạy về đích.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (DO-ryo-ku)', definition: 'Nỗ lực, cố gắng bền bỉ',
    lifeJp: '毎日コツコツ努力することが合格の秘訣です。', lifeVi: 'Kiên trì nỗ lực từng chút mỗi ngày là bí quyết thi đỗ.', lifeContext: 'Lời khuyên học tập',
    jlptJp: '努力が実を結び、第一志望の大学に合格した。', jlptVi: 'Nỗ lực đã đơm hoa kết trái, đỗ vào trường đại học nguyện vọng một.', examTip: 'Quán dụng ngữ: 努力が実を結ぶ (nỗ lực gặt hái thành quả)',
    collocations: ['努力を重ねる', '努力が報われる'], synonyms: ['奮闘', '精進'], antonyms: ['怠慢'],
    interval: 22, repetitions: 6, state: 'mastered'
  }),
  makeCard({
    id: 'n3-7', level: 'N3', kanji: '目的', hanViet: 'MỤC ĐÍCH', hiragana: 'もくてき', romaji: 'Mokuteki', emoji: '🏹',
    story: 'Đôi mắt nhắm chuẩn vào đích ngắm chiếc bia trắng.', visual: 'Hồng tâm bảng bắn cung tên.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Mo-ku-te-ki)', definition: 'Mục đích, ý định hướng tới',
    lifeJp: '日本へ来た目的はビジネスを学ぶためです。', lifeVi: 'Mục đích tôi đến Nhật là để học kinh doanh.', lifeContext: 'Phỏng vấn xin visa',
    jlptJp: '目的を達成するために綿密な計画を立てる。', jlptVi: 'Lập kế hoạch chu đáo để đạt được mục đích đề ra.', examTip: 'Khác với 目標 (Mục tiêu - có con số định lượng cụ thể)',
    collocations: ['目的を果たす', '目的意識'], synonyms: ['目標', '狙い'], antonyms: ['手段'],
    interval: 10, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n3-8', level: 'N3', kanji: '評価', hanViet: 'BÌNH GIÁ', hiragana: 'ひょうか', romaji: 'Hyouka', emoji: '⭐',
    story: 'Dùng lời lẽ công tâm định giá phẩm chất của một sự vật.', visual: 'Biểu tượng xếp hạng 5 sao.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (HYO-u-ka)', definition: 'Đánh giá, ghi nhận giá trị',
    lifeJp: '上司から仕事の成果を高く評価された。', lifeVi: 'Tôi được cấp trên đánh giá cao thành quả công việc.', lifeContext: 'Đánh giá cuối năm',
    jlptJp: '客観的な基準に基づいて作品を評価する。', jlptVi: 'Đánh giá tác phẩm dựa trên các tiêu chí khách quan.', examTip: 'Cụm từ hay gặp: 高く評価する (đánh giá cao)',
    collocations: ['高い評価を得る', '正当に評価する'], synonyms: ['査定', '鑑定'], antonyms: ['酷評'],
    interval: 6, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n3-9', level: 'N3', kanji: '状況', hanViet: 'TRẠNG HUỐNG', hiragana: 'じょうきょう', romaji: 'Joukyou', emoji: '🌐',
    story: 'Hình trạng và bối cảnh nước trôi phản ánh tình thế hiện tại.', visual: 'Bảng theo dõi thị trường theo thời gian thực.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Jo-u-kyo-u)', definition: 'Tình trạng, hoàn cảnh, cục diện',
    lifeJp: '道路の混雑状況をスマートフォンで確認した。', lifeVi: 'Tôi kiểm tra tình hình kẹt xe trên điện thoại.', lifeContext: 'Trước khi lái xe',
    jlptJp: '状況の変化に応じて柔軟に対応してください。', jlptVi: 'Xin hãy linh hoạt ứng phó tùy theo thay đổi của hoàn cảnh.', examTip: 'Ngữ pháp ~に応じて (tùy theo, tương ứng với)',
    collocations: ['状況を判断する', '厳しい状況'], synonyms: ['事態', '情勢'], antonyms: ['結末'],
    interval: 12, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n3-10', level: 'N3', kanji: '成果', hanViet: 'THÀNH QUẢ', hiragana: 'せいか', romaji: 'Seika', emoji: '🍎',
    story: 'Cây cối lớn lên đơm hoa và kết thành hoa thơm trái ngọt.', visual: 'Giỏ quả ngọt thu hoạch bội thu.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (SE-i-ka)', definition: 'Thành quả, kết quả đạt được',
    lifeJp: '日頃の練習の成果を試合で発揮できた。', lifeVi: 'Tôi đã phát huy được thành quả tập luyện hàng ngày trong trận đấu.', lifeContext: 'Sau giải thể thao',
    jlptJp: '新技術の研究開発が大きな成果を上げた。', jlptVi: 'Nghiên cứu phát triển công nghệ mới đã đem lại thành quả to lớn.', examTip: 'Đi với động từ 上げる: 成果を上げる (gặt hái thành quả)',
    collocations: ['成果を上げる', '目覚ましい成果'], synonyms: ['結実', '実績'], antonyms: ['無駄'],
    interval: 19, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n3-11', level: 'N3', kanji: '協力', hanViet: 'HIỆP LỰC', hiragana: 'きょうりょく', romaji: 'Kyouryoku', emoji: '🤝⚡',
    story: 'Ba chữ thập cùng ba cánh tay đồng lòng dồn sức tạo sức mạnh vô song.', visual: 'Cả nhóm ghép các mảnh ghép lớn.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Kyo-u-ryo-ku)', definition: 'Hợp tác, chung sức',
    lifeJp: '地域の人々と協力して清掃活動を行った。', lifeVi: 'Chúng tôi chung sức cùng người dân địa phương dọn dẹp vệ sinh.', lifeContext: 'Hoạt động cộng đồng',
    jlptJp: 'ご協力いただき、心より感謝申し上げます。', jlptVi: 'Tôi xin chân thành cảm ơn sự hợp tác giúp đỡ của quý vị.', examTip: 'Trong đề nghe Choukai hay dùng: ご協力お願いいたします',
    collocations: ['協力を求める', '協力を惜しまない'], synonyms: ['提携', '共同'], antonyms: ['対立'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n3-12', level: 'N3', kanji: '選択', hanViet: 'TUYỂN TRẠCH', hiragana: 'せんたく', romaji: 'Sentaku', emoji: '🔀',
    story: 'Chọn lựa kỹ càng từng hạt ngọc quý trong dòng nước chảy.', visual: 'Ngã ba đường với các biển chỉ hướng khác nhau.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Se-n-ta-ku)', definition: 'Lựa chọn, tuyển chọn',
    lifeJp: '自分の意志で将来の道を選択しました。', lifeVi: 'Tôi đã lựa chọn con đường tương lai bằng chính ý chí của mình.', lifeContext: 'Tự lập',
    jlptJp: '次の四つの選択肢から最も適切なものを選べ。', jlptVi: 'Hãy chọn đáp án thích hợp nhất từ bốn lựa chọn dưới đây.', examTip: 'Đề bài thi luôn có chữ 選択肢 (Lựa chọn đáp án)',
    collocations: ['選択肢がある', '正しい選択'], synonyms: ['選出', 'チョイス'], antonyms: ['強制'],
    interval: 13, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n3-13', level: 'N3', kanji: '改善', hanViet: 'CẢI THIỆN', hiragana: 'かいぜん', romaji: 'Kaizen', emoji: '🔄✨',
    story: 'Sửa đổi thói quen xấu để hướng tới điều thiện lành tiến bộ.', visual: 'Mũi tên cải tiến quy trình xoắn ốc.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ka-i-ze-n)', definition: 'Cải thiện, nâng cao chất lượng (Kaizen)',
    lifeJp: '業務プロセスを改善して効率を高めた。', lifeVi: 'Chúng tôi cải tiến quy trình nghiệp vụ để nâng cao hiệu suất.', lifeContext: 'Văn hóa Kaizen công sở',
    jlptJp: '生活習慣を改善すれば体調も良くなる。', jlptVi: 'Nếu cải thiện thói quen sinh hoạt thì sức khỏe cũng sẽ tốt lên.', examTip: 'Triết lý Kaizen nổi tiếng toàn cầu của các doanh nghiệp Nhật Bản',
    collocations: ['待遇を改善する', '環境の改善'], synonyms: ['改良', '改革'], antonyms: ['改悪', '悪化'],
    interval: 16, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n3-14', level: 'N3', kanji: '延期', hanViet: 'DUYÊN KỲ', hiragana: 'えんき', romaji: 'Enki', emoji: '⏳',
    story: 'Kéo dài bước chân dời thời hạn đã định sang một kỳ khác.', visual: 'Con dấu dập lùi ngày trên lịch hẹn.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (E-n-ki)', definition: 'Hoãn lại, dời ngày',
    lifeJp: '雨天のため、サッカーの試合は来週に延期された。', lifeVi: 'Do trời mưa nên trận bóng đá bị hoãn sang tuần sau.', lifeContext: 'Hoạt động thể thao',
    jlptJp: '諸般の事情により出発期日を延期せざるを得ない。', jlptVi: 'Do muôn vàn lý do nên đành phải lùi ngày khởi hành.', examTip: 'Đi kèm ngữ pháp N2/N3: ~ざるを得ない (đành phải làm gì)',
    collocations: ['出発を延期する', '無期延期'], synonyms: ['繰り延べ', '先送り'], antonyms: ['前倒し', '前倒し実行'],
    interval: 7, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n3-15', level: 'N3', kanji: '尊重', hanViet: 'TÔN TRỌNG', hiragana: 'そんちょう', romaji: 'Sonchou', emoji: '🙇‍♂️',
    story: 'Cung kính quý trọng phẩm giá và ý kiến của người khác.', visual: 'Bắt tay hữu nghị tôn trọng sự khác biệt.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (So-n-cho-u)', definition: 'Tôn trọng, đề cao',
    lifeJp: '相手の意見や文化の違いを尊重することが大切です。', lifeVi: 'Tôn trọng sự khác biệt về văn hóa và ý kiến của đối phương là rất quan trọng.', lifeContext: 'Giao lưu quốc tế',
    jlptJp: '個人のプライバシーは最大限尊重されるべきだ。', jlptVi: 'Quyền riêng tư cá nhân cần phải được tôn trọng tối đa.', examTip: 'Cấu trúc ~べきだ (đương nhiên nên làm gì)',
    collocations: ['人権を尊重する', '個性を尊重する'], synonyms: ['敬重', '配慮'], antonyms: ['軽視', '無視'],
    interval: 11, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n3-16', level: 'N3', kanji: '実現', hanViet: 'THỰC HIỆN', hiragana: 'じつげん', romaji: 'Jitsugen', emoji: '🌟',
    story: 'Biến ước mơ chân thực hiển hiện ngay trước mắt.', visual: 'Ngôi sao mơ ước biến thành hiện thực cầm trên tay.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ji-tsu-ge-n)', definition: 'Hiện thực hóa, biến ước mơ thành hiện thực',
    lifeJp: '長年の夢だった日本留学をついに実現させた。', lifeVi: 'Cuối cùng tôi đã hiện thực hóa ước mơ du học Nhật Bản ấp ủ bấy lâu.', lifeContext: 'Chia sẻ thành công',
    jlptJp: '平和な社会の実現に向けて努力を続ける。', jlptVi: 'Tiếp tục nỗ lực hướng tới việc hiện thực hóa xã hội hòa bình.', examTip: 'Cấu trúc ~に向けて (hướng tới mục tiêu phía trước)',
    collocations: ['夢を実現する', '計画の実現'], synonyms: ['具現化', '達成'], antonyms: ['破綻', '頓挫'],
    interval: 20, repetitions: 6, state: 'mastered'
  }),
  makeCard({
    id: 'n3-17', level: 'N3', kanji: '優先', hanViet: 'ƯU TIÊN', hiragana: 'ゆうせん', romaji: 'Yuusen', emoji: '🥇',
    story: 'Người xuất sắc đi trước được đặt lên hàng đầu.', visual: 'Ghế ngồi ưu tiên trên tàu điện ngầm.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Yu-u-se-n)', definition: 'Ưu tiên vị trí số một',
    lifeJp: '仕事よりも健康を最優先に考えて生活しよう。', lifeVi: 'Hãy sống với suy nghĩ sức khỏe là ưu tiên số một hơn cả công việc.', lifeContext: 'Cân bằng cuộc sống',
    jlptJp: 'お年寄りや妊婦の方に優先席を譲りましょう。', jlptVi: 'Hãy nhường ghế ưu tiên cho người già và phụ nữ mang thai.', examTip: 'Từ vựng thực tế đời sống: 優先席 (Ghế ưu tiên)',
    collocations: ['最優先事項', '優先順位をつける'], synonyms: ['先決', '重視'], antonyms: ['劣後', '後回し'],
    interval: 9, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n3-18', level: 'N3', kanji: '具体的', hanViet: 'CỤ THỂ ĐÍCH', hiragana: 'ぐたいてき', romaji: 'Gutaiteki', emoji: '📐',
    story: 'Có hình thù dụng cụ rõ ràng chạm tay vào được.', visual: 'Bản vẽ kỹ thuật chi tiết từng milimet.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H-H (Gu-ta-i-te-ki)', definition: 'Cụ thể, rõ ràng rành mạch',
    lifeJp: 'もっと具体的な例を挙げて説明してください。', lifeVi: 'Xin hãy nêu ví dụ cụ thể hơn để giải thích.', lifeContext: 'Thảo luận báo cáo',
    jlptJp: '目標は具体的に数値化することで達成しやすくなる。', jlptVi: 'Mục tiêu một khi được số hóa cụ thể thì sẽ càng dễ đạt được hơn.', examTip: 'Từ trái nghĩa kinh điển trong đề thi là 抽象的 (Trừu tượng)',
    collocations: ['具体例を挙げる', '具体的な提案'], synonyms: ['明確', '明瞭'], antonyms: ['抽象的', '曖昧'],
    interval: 15, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n3-19', level: 'N3', kanji: '克服', hanViet: 'KHẮC PHỤC', hiragana: 'こくふく', romaji: 'Kokufuku', emoji: '🧗‍♂️',
    story: 'Khắc chế khó khăn khuất phục gian truân để vươn lên đỉnh.', visual: 'Leo lên đỉnh núi băng qua dông bão.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ko-ku-fu-ku)', definition: 'Khắc phục, vượt qua điểm yếu',
    lifeJp: '苦手だったリスニングを猛特訓で克服した。', lifeVi: 'Tôi đã khắc phục kỹ năng nghe yếu kém nhờ luyện tập điên cuồng.', lifeContext: 'Kinh nghiệm luyện thi',
    jlptJp: '幾多の困難を克服して事業を成功に導いた。', jlptVi: 'Vượt qua muôn vàn gian nan, đưa sự nghiệp đến thành công rực rỡ.', examTip: 'Khắc phục điểm yếu: 弱点を克服する',
    collocations: ['弱点を克服する', '病気を克服する'], synonyms: ['乗り越える', '打破'], antonyms: ['屈服', '挫折'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n3-20', level: 'N3', kanji: '発揮', hanViet: 'PHÁT HUY', hiragana: 'はっき', romaji: 'Hakki', emoji: '⚡🔥',
    story: 'Phát lộ hào quang phất cờ chỉ huy tài năng bộc lộ.', visual: 'Cầu thủ tỏa sáng ghi bàn quyết định phút bù giờ.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ha-k-ki)', definition: 'Phát huy tiềm năng năng lực',
    lifeJp: '本番の試験で実力を存分に発揮できた。', lifeVi: 'Trong bài thi thật tôi đã phát huy trọn vẹn thực lực của mình.', lifeContext: 'Sau ngày thi cử',
    jlptJp: 'リーダーシップを遺憾なく発揮してチームを率いる。', jlptVi: 'Phát huy tài năng lãnh đạo không chút tiếc nuối để dẫn dắt đội ngũ.', examTip: 'Cụm từ cao cấp N3/N2: 遺憾なく発揮する (phát huy trọn vẹn)',
    collocations: ['実力を発揮する', '才能を発揮する'], synonyms: ['示す', '表す'], antonyms: ['埋没', '隠蔽'],
    interval: 14, repetitions: 4, state: 'mastered'
  }),

  // --- N2 (20 từ cao tần) ---
  makeCard({
    id: 'n2-1', level: 'N2', kanji: '曖昧', hanViet: 'ÁI MUỘI', hiragana: 'あいまい', romaji: 'Aimai', emoji: '🌫️❓',
    story: 'Mặt trời che khuất trời tối mờ (曖), cây trong đêm mờ mịt (昧) -> Mơ hồ, mập mờ.', visual: 'Biển sương mù bao quanh ngã ba đường.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (A-i-ma-i)', definition: 'Mập mờ, mơ hồ, không dứt khoát',
    lifeJp: '彼の返事はいつも曖昧で、行くのか行かないのか分からない。', lifeVi: 'Câu trả lời của anh ấy lúc nào cũng mập mờ, chẳng biết có đi hay không.', lifeContext: 'Giao tiếp hàng ngày',
    jlptJp: '契約書に曖昧な表現を残しておくとトラブルの原因になりかねない。', jlptVi: 'Để cách diễn đạt mập mờ trong hợp đồng rất dễ dẫn tới tranh chấp sau này.', examTip: 'Đi với ngữ pháp N2: ~になりかねない (có nguy cơ dẫn tới hậu quả xấu)',
    collocations: ['曖昧な態度', '曖昧な返事'], synonyms: ['不明瞭', 'うやむや'], antonyms: ['明確', 'はっきり'],
    interval: 10, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n2-2', level: 'N2', kanji: '慎重', hanViet: 'THẬN TRỌNG', hiragana: 'しんちょう', romaji: 'Shinchou', emoji: '🧐',
    story: 'Giữ trọn con tim chân thật cân nhắc từng li từng tí.', visual: 'Bước đi thận trọng trên cầu kính trên cao.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Shi-n-cho-u)', definition: 'Thận trọng, cẩn mật cân nhắc kỹ',
    lifeJp: '転職を決める前に慎重に情報を集めた。', lifeVi: 'Tôi đã thận trọng thu thập thông tin trước khi quyết định chuyển việc.', lifeContext: 'Quyết định lớn đời người',
    jlptJp: '新規事業への投資は慎重を期すべきである。', jlptVi: 'Đầu tư vào dự án mới cần phải hướng tới sự thận trọng cao nhất.', examTip: 'Quán dụng ngữ N2: 慎重を期す (hết sức thận trọng)',
    collocations: ['慎重に検討する', '慎重な姿勢'], synonyms: ['用心深い', '念入り'], antonyms: ['軽率', '軽はずみ'],
    interval: 16, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n2-3', level: 'N2', kanji: '柔軟', hanViet: 'NHU NHUYỄN', hiragana: 'じゅうなん', romaji: 'Juunan', emoji: '🤸',
    story: 'Cây cỏ mềm dẻo uốn lượn trước bão táp mà không gãy đổ.', visual: 'Vận động viên uốn dẻo mềm mại.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ju-u-na-n)', definition: 'Linh hoạt, mềm dẻo, uyển chuyển',
    lifeJp: '予期せぬトラブルにも柔軟に対応できる人材が求められる。', lifeVi: 'Người có thể linh hoạt ứng phó cả với những sự cố bất ngờ rất được săn đón.', lifeContext: 'Yêu cầu tuyển dụng',
    jlptJp: '固定観念にとらわれず、柔軟な発想を持つことが大切だ。', jlptVi: 'Không bị gò bó bởi định kiến mà sở hữu tư duy linh hoạt là điều cốt yếu.', examTip: 'Cụm từ hay gặp: 柔軟な発想 (tư duy linh hoạt)',
    collocations: ['柔軟に対応する', '柔軟な思考'], synonyms: ['臨機応変', 'しなやか'], antonyms: ['頑固', '硬直'],
    interval: 12, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n2-4', level: 'N2', kanji: '徹底', hanViet: 'TRIỆT ĐỂ', hiragana: 'てってい', romaji: 'Tettei', emoji: '🧹✨',
    story: 'Đào sâu đến tận đáy giếng không để sót một hạt bụi.', visual: 'Vết bẩn bị tẩy sạch đến tận chân tơ kẽ tóc.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Te-t-te-i)', definition: 'Triệt để, thấu đáo đến cùng',
    lifeJp: '感染症を防ぐため、手洗いを徹底しよう。', lifeVi: 'Để phòng tránh bệnh truyền nhiễm, hãy rửa tay thật triệt để.', lifeContext: 'Y tế phòng dịch',
    jlptJp: '原因究明を徹底的に行った結果、真相が判明した。', jlptVi: 'Kết quả của việc truy cứu nguyên nhân đến cùng là chân tướng đã được làm sáng tỏ.', examTip: 'Dùng như phó từ: 徹底的に (một cách triệt để)',
    collocations: ['徹底的に調べる', '周知徹底を図る'], synonyms: ['完全', 'とことん'], antonyms: ['中途半端'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n2-5', level: 'N2', kanji: '妥当', hanViet: 'THỎA ĐƯƠNG', hiragana: 'だとう', romaji: 'Datou', emoji: '⚖️👌',
    story: 'Cân đo thỏa đáng đạt đúng lẽ phải tự nhiên.', visual: 'Mức giá hợp lý khiến cả người mua lẫn người bán hài lòng.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Da-to-u)', definition: 'Thỏa đáng, hợp lý, đúng đắn',
    lifeJp: 'このサービスに対する月額料金は妥当だと思う。', lifeVi: 'Tôi nghĩ mức phí hàng tháng cho dịch vụ này là hoàn toàn thỏa đáng.', lifeContext: 'Đánh giá chi tiêu',
    jlptJp: '提出された証拠から判断して、その判決は妥当である。', jlptVi: 'Phán đoán từ chứng cứ được nộp, phán quyết đó là hoàn toàn đúng đắn.', examTip: 'Từ trái nghĩa: 不当 (Bất công, phi lý)',
    collocations: ['妥当な判断', '妥当な価格'], synonyms: ['適切', '適正'], antonyms: ['不当', '無理'],
    interval: 14, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n2-6', level: 'N2', kanji: '契機', hanViet: 'KHẾ CƠ', hiragana: 'けいき', romaji: 'Keiki', emoji: '🚪🔑',
    story: 'Mốc hợp đồng mở ra cơ hội xoay chuyển vận mệnh.', visual: 'Cánh cửa cơ hội mở toang trước mắt.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (KE-i-ki)', definition: 'Thời cơ, cơ duyên, bước ngoặt',
    lifeJp: '病気を契機に、健康管理を見直すようになった。', lifeVi: 'Lấy lần ốm làm cơ duyên, tôi bắt đầu nhìn nhận lại việc giữ gìn sức khỏe.', lifeContext: 'Bước ngoặt thói quen',
    jlptJp: 'オリンピック開催を契機として、都市のインフラ整備が進んだ。', jlptVi: 'Lấy việc tổ chức Olympic làm cơ hội, cơ sở hạ tầng đô thị đã phát triển vượt bậc.', examTip: 'Mẫu ngữ pháp N2 cốt lõi: ~を契機に / ~を契機として (nhân cơ hội/lấy cớ là)',
    collocations: ['これを契機に', '転機の契機'], synonyms: ['きっかけ', '転機'], antonyms: ['停滞'],
    interval: 20, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n2-7', level: 'N2', kanji: '促進', hanViet: 'XÚC TIẾN', hiragana: 'そくしん', romaji: 'Sokushin', emoji: '⏩',
    story: 'Thúc giục bước chân tiến lên phía trước nhanh hơn.', visual: 'Tên lửa tăng tốc bay vào không gian.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (So-ku-shi-n)', definition: 'Thúc đẩy, xúc tiến gia tăng tiến độ',
    lifeJp: '適度な運動は新陳代謝を促進する。', lifeVi: 'Vận động điều độ sẽ thúc đẩy quá trình trao đổi chất.', lifeContext: 'Sức khỏe',
    jlptJp: '政府は中小企業のデジタル化を促進するための補助金を創設した。', jlptVi: 'Chính phủ đã thành lập gói trợ cấp nhằm thúc đẩy chuyển đổi số cho doanh nghiệp vừa và nhỏ.', examTip: 'Trái nghĩa với 阻害 (Trở ngại, ngăn cản)',
    collocations: ['販売促進', '成長を促進する'], synonyms: ['推進', '奨励'], antonyms: ['阻害', '抑制'],
    interval: 9, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n2-8', level: 'N2', kanji: '顕著', hanViet: 'HIỂN TRỨ', hiragana: 'けんちょ', romaji: 'Kencho', emoji: '💡✨',
    story: 'Hiện rõ mồn một viết trên giấy trắng mực đen ai cũng thấy.', visual: 'Biểu đồ nhảy vọt rõ rệt giữa hai cột mốc.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (KE-n-cho)', definition: 'Rõ rệt, nổi bật, đáng kể',
    lifeJp: '薬を服用してから症状の改善が顕著に見られる。', lifeVi: 'Sau khi uống thuốc, sự thuyên giảm triệu chứng được nhìn thấy rất rõ rệt.', lifeContext: 'Y học lâm sàng',
    jlptJp: '少子高齢化の影響が地方都市において顕著に現れている。', jlptVi: 'Tác động của già hóa dân số đang hiện lên rõ rệt tại các thành phố địa phương.', examTip: 'Rất hay xuất hiện dưới dạng phó từ 顕著に (một cách rõ rệt)',
    collocations: ['顕著な例', '顕著な成果'], synonyms: ['著しい', '目立つ'], antonyms: ['僅微', '潜在的'],
    interval: 15, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n2-9', level: 'N2', kanji: '懸念', hanViet: 'HUYỀN NIỆM', hiragana: 'けねん', romaji: 'Kenen', emoji: '😟💭',
    story: 'Treo lơ lửng một mối âu lo canh cánh trong tim.', visual: 'Đám mây đen lơ lửng trên đầu.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ke-ne-n)', definition: 'Lo ngại, băn khoăn về nguy cơ tiềm ẩn',
    lifeJp: '原材料の高騰による業績への影響が懸念されている。', lifeVi: 'Tác động đến kết quả kinh doanh do giá nguyên liệu tăng vọt đang bị lo ngại.', lifeContext: 'Báo cáo tài chính',
    jlptJp: '住民の間で環境汚染への懸念が急速に広がっている。', jlptVi: 'Mối lo ngại về ô nhiễm môi trường đang lan rộng nhanh chóng trong cộng đồng cư dân.', examTip: 'Cụm từ thi cử: 懸念を示す (bày tỏ mối lo ngại)',
    collocations: ['懸念を抱く', '懸念材料'], synonyms: ['心配', '危惧'], antonyms: ['安心', '安堵'],
    interval: 6, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n2-10', level: 'N2', kanji: '考慮', hanViet: 'KHẢO LỰ', hiragana: 'こうりょ', romaji: 'Kouryo', emoji: '🤔📊',
    story: 'Suy đi tính lại thấu đáo mọi góc cạnh khía cạnh.', visual: 'Cân nhắc nhiều biến số trên bàn tính.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (KO-u-ryo)', definition: 'Cân nhắc, xem xét kỹ lưỡng các yếu tố',
    lifeJp: '相手の立場を考慮して言葉を選ぶべきだ。', lifeVi: 'Nên cân nhắc vị thế của đối phương để lựa chọn lời nói.', lifeContext: 'Kỹ năng giao tiếp',
    jlptJp: '天候の急変も考慮に入れてスケジュールを組んだ。', jlptVi: 'Tôi đã lên lịch trình có tính đến cả trường hợp thời tiết thay đổi đột ngột.', examTip: 'Quán dụng ngữ N2: ~を考慮に入れる (tính đến/đưa vào cân nhắc)',
    collocations: ['考慮に入れる', '考慮を重ねる'], synonyms: ['斟酌', '配慮'], antonyms: ['無視', '度外視'],
    interval: 11, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n2-11', level: 'N2', kanji: '是正', hanViet: 'THỊ CHÍNH', hiragana: 'ぜせい', romaji: 'Zesei', emoji: '⚖️🔧',
    story: 'Nhìn nhận cái đúng để sửa chữa điều sai lệch cho ngay thẳng.', visual: 'Chỉnh chiếc thước thợ bị lệch về đúng độ thăng bằng.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ze-se-i)', definition: 'Chấn chỉnh, sửa sai, khắc phục chênh lệch',
    lifeJp: '男女間の賃金格差を是正する取り組みが進んでいる。', lifeVi: 'Các nỗ lực chấn chỉnh khoảng cách tiền lương giữa nam và nữ đang được tiến hành.', lifeContext: 'Xã hội học',
    jlptJp: '不公正な取引慣行を速やかに是正しなければならない。', jlptVi: 'Phải nhanh chóng chấn chỉnh những tập quán giao dịch bất công.', examTip: 'Chấn chỉnh sự chênh lệch: 格差を是正する',
    collocations: ['格差を是正する', '是正勧告'], synonyms: ['修正', '改善'], antonyms: ['改悪', '放置'],
    interval: 7, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n2-12', level: 'N2', kanji: '配慮', hanViet: 'PHỐI LỰ', hiragana: 'はいりょ', romaji: 'Hairyo', emoji: '🤲',
    story: 'Phân phối mối quan tâm lo lắng chu đáo cho từng người.', visual: 'Tấm che nắng được chuẩn bị sẵn cho người cao tuổi.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (HA-i-ryo)', definition: 'Quan tâm, chu đáo, săn sóc để ý',
    lifeJp: '周囲への細やかな配慮ができる人は尊敬される。', lifeVi: 'Người biết quan tâm chu đáo tinh tế đến xung quanh luôn được kính trọng.', lifeContext: 'Văn hóa công sở',
    jlptJp: '環境に配慮したエコ商品の開発に力を入れている。', jlptVi: 'Chúng tôi đang dồn lực phát triển các sản phẩm sinh thái quan tâm đến môi trường.', examTip: 'Mẫu ngữ pháp: ~に配慮する (để ý/quan tâm tới)',
    collocations: ['配慮が行き届く', '配慮を欠く'], synonyms: ['気配り', '心遣い'], antonyms: ['無配慮', '無神経'],
    interval: 18, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n2-13', level: 'N2', kanji: '該当', hanViet: 'CAI ĐƯƠNG', hiragana: 'がいとう', romaji: 'Gaitou', emoji: '🎯✔️',
    story: 'Khớp đúng vào tiêu chuẩn tương xứng đã đề ra.', visual: 'Tích dấu kiểm đúng vào ô điều kiện hợp lệ.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ga-i-to-u)', definition: 'Tương ứng, thỏa mãn tiêu chí, thuộc diện',
    lifeJp: '該当する項目にチェックを入れてください。', lifeVi: 'Xin hãy tích dấu vào những mục tương ứng.', lifeContext: 'Điền đơn khảo sát',
    jlptJp: '本給付金の受給資格に該当するかどうか審査する。', jlptVi: 'Thẩm định xem liệu có thuộc diện đủ tư cách nhận khoản trợ cấp này hay không.', examTip: 'Thuộc diện đối tượng: 該当者 (người thuộc diện)',
    collocations: ['該当事項なし', '該当者に通知する'], synonyms: ['相当', '適合'], antonyms: ['非該当'],
    interval: 13, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n2-14', level: 'N2', kanji: '躊躇', hanViet: 'TRÙ TRỪ', hiragana: 'ちゅうちょ', romaji: 'Chuucho', emoji: '🚶‍♂️❓',
    story: 'Hai chân ngập ngừng nửa muốn bước tới nửa muốn lùi lại.', visual: 'Đứng tần ngần trước cửa thang máy sắp đóng.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (CHU-u-cho)', definition: 'Trù trừ, do dự, lưỡng lự',
    lifeJp: '危険を感じたら、躊躇せずにすぐに通報してください。', lifeVi: 'Nếu cảm thấy nguy hiểm, đừng ngập ngừng mà hãy báo cảnh sát ngay lập tức.', lifeContext: 'Cảnh báo an toàn',
    jlptJp: '迷っている暇はない。躊躇しているとチャンスを逃す。', jlptVi: 'Không có thời gian để phân vân. Nếu do dự thì sẽ vuột mất cơ hội.', examTip: 'Cụm từ phổ biến: 躊躇なく (không chút do dự)',
    collocations: ['躊躇なく決断する', '一瞬躊躇する'], synonyms: ['ためらい', '逡巡'], antonyms: ['即決', '果断'],
    interval: 5, repetitions: 2, state: 'learning'
  }),
  makeCard({
    id: 'n2-15', level: 'N2', kanji: '模索', hanViet: 'MÔ TÁC', hiragana: 'もさく', romaji: 'Mosaku', emoji: '🔦',
    story: 'Mò mẫm tìm kiếm trong bóng tối để dựng nên lối đi.', visual: 'Cầm đèn pin soi tìm lối thoát trong hang động.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Mo-sa-ku)', definition: 'Tìm tòi, lần mò tìm giải pháp',
    lifeJp: 'コロナ禍における新しい働き方を模索している。', lifeVi: 'Chúng tôi đang tìm tòi phương thức làm việc mới trong bối cảnh đại dịch.', lifeContext: 'Chiến lược kinh doanh',
    jlptJp: '暗中模索の状態からようやく打開策を見出した。', jlptVi: 'Từ tình cảnh mò mẫm trong đêm tối rốt cuộc đã tìm ra được kế sách khai thông.', examTip: 'Thành ngữ bốn chữ quen thuộc: 暗中模索 (mò mẫm trong đêm tối)',
    collocations: ['解決策を模索する', '道を模索する'], synonyms: ['探求', '摸索'], antonyms: ['確立'],
    interval: 10, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n2-16', level: 'N2', kanji: '充実', hanViet: 'SUNG THỰC', hiragana: 'じゅうじつ', romaji: 'Juujitsu', emoji: '✨🍇',
    story: 'Được lấp đầy tràn trề sung túc không thiếu thứ gì.', visual: 'Giỏ hoa quả tròn trịa căng mọng.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ju-u-ji-tsu)', definition: 'Đầy đủ, trọn vẹn, phong phú ý nghĩa',
    lifeJp: '大学で毎日充実した日々を過ごしています。', lifeVi: 'Tại đại học mỗi ngày tôi đều trải qua những tháng ngày vô cùng ý nghĩa trọn vẹn.', lifeContext: 'Cảm nhận cuộc sống',
    jlptJp: '福利厚生が充実している企業に就職したい。', jlptVi: 'Tôi muốn xin việc vào doanh nghiệp có chế độ phúc lợi phong phú đầy đủ.', examTip: 'Thường miêu tả cuộc sống hoặc cơ sở vật chất: 充実した生活',
    collocations: ['充実感を味わう', '設備が充実している'], synonyms: ['満喫', '豊か'], antonyms: ['空虚', '貧弱'],
    interval: 17, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n2-17', level: 'N2', kanji: '連携', hanViet: 'LIÊN HUỀ', hiragana: 'れんけい', romaji: 'Renkei', emoji: '🔗🤝',
    story: 'Nối kết và dắt tay nhau cùng tiến bước về phía trước.', visual: 'Hai mắt xích gắn kết bền chặt.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Re-n-ke-i)', definition: 'Liên kết, phối hợp tác chiến',
    lifeJp: '警察と医療機関が緊密に連携して捜査を進めた。', lifeVi: 'Cảnh sát và cơ quan y tế đã phối hợp chặt chẽ đẩy mạnh điều tra.', lifeContext: 'Tin tức báo chí',
    jlptJp: '各部署の連携が不足していると業務効率が落ちる。', jlptVi: 'Nếu sự phối hợp giữa các phòng ban bị thiếu thốn thì hiệu quả nghiệp vụ sẽ giảm sút.', examTip: 'Cụm từ chuẩn thi: 緊密に連携する (phối hợp chặt chẽ)',
    collocations: ['連携を強化する', '緊密な連携'], synonyms: ['協力', 'タイアップ'], antonyms: ['孤立', '分断'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n2-18', level: 'N2', kanji: '反映', hanViet: 'PHẢN ÁNH', hiragana: 'はんえい', romaji: 'Hanei', emoji: '🪞',
    story: 'Mặt gương soi rọi phản chiếu hình ảnh trung thực.', visual: 'Hình ảnh bầu trời phản chiếu dưới mặt nước trong veo.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ha-n-e-i)', definition: 'Phản ánh, phản chiếu trung thực',
    lifeJp: '顧客の声を新商品の設計に反映させた。', lifeVi: 'Chúng tôi đã phản ánh tiếng nói của khách hàng vào thiết kế sản phẩm mới.', lifeContext: 'Phát triển sản phẩm',
    jlptJp: '世論調査の結果は国民の不安を如実に反映している。', jlptVi: 'Kết quả thăm dò dư luận phản ánh rất chân thực nỗi bất an của quốc dân.', examTip: 'Cụm từ cao cấp: 如実に反映する (phản ánh như thật)',
    collocations: ['民意を反映する', '価格に反映される'], synonyms: ['投影', '照応'], antonyms: ['遮断'],
    interval: 12, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n2-19', level: 'N2', kanji: '端的', hanViet: 'ĐOAN ĐÍCH', hiragana: 'たんてき', romaji: 'Tanteki', emoji: '🎯⚡',
    story: 'Đi thẳng vào đầu mối mấu chốt không vòng vo tam quốc.', visual: 'Mũi tên chỉ thẳng vào điểm cốt tử.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ta-n-te-ki)', definition: 'Ngắn gọn, thẳng thắn, trực diện',
    lifeJp: '端的に言うと、今回の計画は失敗でした。', lifeVi: 'Nói một cách ngắn gọn thẳng thắn thì kế hoạch lần này đã thất bại.', lifeContext: 'Báo cáo trung thực',
    jlptJp: '彼の言葉はこの時代の本質を端的に表している。', jlptVi: 'Lời nói của ông ấy đã thể hiện một cách trực diện bản chất của thời đại này.', examTip: 'Thường dùng dạng phó từ: 端的に言えば / 端的に言うと (Nói toẹt ra là)',
    collocations: ['端的に述べる', '端的な表現'], synonyms: ['簡潔', '率直'], antonyms: ['遠回し', '冗長'],
    interval: 6, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n2-20', level: 'N2', kanji: '把握', hanViet: 'BÁ ÁC', hiragana: 'はあく', romaji: 'Haaku', emoji: '💡',
    story: 'Tay nắm chắc lông vũ thấu suốt toàn cảnh.', visual: 'Nhìn thấu mạng lưới thông tin.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ha-a-ku)', definition: 'Nắm bắt bản chất',
    lifeJp: '問題の本質を正しく把握することが第一歩だ。', lifeVi: 'Nắm bắt đúng đắn bản chất vấn đề là bước đi đầu tiên.', lifeContext: 'Giải quyết vấn đề',
    jlptJp: '現場の実態を把握せずに指示を出すのは危険である。', jlptVi: 'Đưa ra chỉ thị mà không nắm bắt thực tế hiện trường là điều nguy hại.', examTip: 'Chủ đề quen thuộc trong đề thi quản lý doanh nghiệp',
    collocations: ['実態把握', '要点を把握する'], synonyms: ['看破'], antonyms: ['誤認'],
    interval: 14, repetitions: 4, state: 'mastered'
  }),

  // --- N1 (20 từ tinh hoa) ---
  makeCard({
    id: 'n1-1', level: 'N1', kanji: '妥協', hanViet: 'THỎA HIỆP', hiragana: 'だきょう', romaji: 'Dakyou', emoji: '🤝⚖️',
    story: 'Nữ nâng niu đồng lòng hiệp lực bớt một bước để hòa giải.', visual: 'Hai nhà đàm phán bắt tay sau khi nhượng bộ lẫn nhau.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Da-kyo-u)', definition: 'Thỏa hiệp, nhượng bộ đôi bên cùng có lợi',
    lifeJp: 'デザイン性と実用性の間で妥協点を見出す必要がある。', lifeVi: 'Cần tìm ra điểm thỏa hiệp giữa tính thẩm mỹ và tính ứng dụng thực tế.', lifeContext: 'Thiết kế sản phẩm',
    jlptJp: '妥協を許さない職人のこだわりが、最高峰の製品を生み出す。', jlptVi: 'Sự kiên định không chấp nhận bất kỳ sự thỏa hiệp nào của người nghệ nhân đã tạo nên kiệt tác.', examTip: 'Cụm từ xuất hiện liên tục trong bài đọc Dokkai: 妥協を許さない',
    collocations: ['妥協点を探る', '安易な妥協'], synonyms: ['歩み寄り', '折衷'], antonyms: ['決裂', '固執'],
    interval: 16, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n1-2', level: 'N1', kanji: '隠蔽', hanViet: 'ẨN TẾ', hiragana: 'いんぺい', romaji: 'Inpei', emoji: '🙈📦',
    story: 'Giấu kín dưới tấm bạt che đậy không cho ai nhìn thấy.', visual: 'Tập hồ sơ bí mật bị giấu dưới ngăn kéo khóa.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (I-n-pe-i)', definition: 'Che giấu, bưng bít sự thật',
    lifeJp: '企業の不正を隠蔽しようとした幹部が告発された。', lifeVi: 'Các cán bộ cố tình bưng bít sai phạm của doanh nghiệp đã bị tố cáo.', lifeContext: 'Tin tức kinh tế',
    jlptJp: '真実の隠蔽はさらなる不信感を招く結果となった。', jlptVi: 'Việc che giấu chân tướng đã chuốc lấy hậu quả là sự ngờ vực càng thêm sâu sắc.', examTip: 'Từ cao cấp về đạo đức doanh nghiệp (Corporate Governance)',
    collocations: ['事実を隠蔽する', '隠蔽工作'], synonyms: ['隠蔽', 'もみ消し'], antonyms: ['開示', '公表'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n1-3', level: 'N1', kanji: '乖離', hanViet: 'QUAI LY', hiragana: 'かいり', romaji: 'Kairi', emoji: '⚡↔️',
    story: 'Mâu thuẫn quay lưng tách rời nhau ngày một xa vời vợi.', visual: 'Hai lục địa tách rời nhau bởi hẻm vực sâu.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Ka-i-ri)', definition: 'Tách rời, xa rời, phân kỳ cách biệt lớn',
    lifeJp: '理想と現実の乖離に苦しむ若者が少なくない。', lifeVi: 'Không ít người trẻ đau khổ trước sự xa rời giữa lý tưởng và thực tế.', lifeContext: 'Tâm lý xã hội',
    jlptJp: '理論と実際の現場データとの間に著しい乖離が見られる。', jlptVi: 'Có thể thấy sự phân kỳ cách biệt rõ rệt giữa lý thuyết và dữ liệu thực tế hiện trường.', examTip: 'Cấu trúc bài Dokkai N1: 理想と現実の乖離',
    collocations: ['世論と乖離する', '大幅な乖離'], synonyms: ['隔たり', '不一致'], antonyms: ['合致', '密着'],
    interval: 11, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n1-4', level: 'N1', kanji: '払拭', hanViet: 'PHẤT THỨC', hiragana: 'ふっしょく', romaji: 'Fusshoku', emoji: '🧹✨',
    story: 'Dùng khăn vung tay quét sạch mọi tàn dư u tối.', visual: 'Quét tan đám mây đen để đón ánh mặt trời chiếu sáng.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Fu-s-sho-ku)', definition: 'Quét sạch, xua tan mối nghi ngại',
    lifeJp: '安全性を実証して消費者の不安を払拭した。', lifeVi: 'Chúng tôi chứng minh tính an toàn để xua tan nỗi bất an của người tiêu dùng.', lifeContext: 'Truyền thông xử lý khủng hoảng',
    jlptJp: '過去のネガティブなイメージを一挙に払拭することに成功した。', jlptVi: 'Đã thành công trong việc quét sạch một lần hình ảnh tiêu cực trong quá khứ.', examTip: 'Đi kèm với từ 不安, 懸念, 疑惑: 不安を払拭する',
    collocations: ['不安を払拭する', '疑惑を払拭する'], synonyms: ['一掃', '消し去る'], antonyms: ['助長', '増幅'],
    interval: 15, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n1-5', level: 'N1', kanji: '固執', hanViet: 'CỐ CHẤP', hiragana: 'こしつ', romaji: 'Koshitsu', emoji: '🔒',
    story: 'Cầm chặt khư khư không chịu buông tay đổi mới.', visual: 'Khóa chặt cánh cửa cố hữu không nghe ai khuyên can.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Ko-shi-tsu)', definition: 'Cố chấp, khư khư giữ định kiến',
    lifeJp: '過去の成功体験に固執すると、新しい波に乗り遅れる。', lifeVi: 'Nếu cứ khư khư ôm lấy trải nghiệm thành công quá khứ, bạn sẽ chậm chân trước làn sóng mới.', lifeContext: 'Kinh doanh công nghệ',
    jlptJp: '自説に固執するあまり、他者の有益な忠告を聞き入れなかった。', jlptVi: 'Chính vì quá cố chấp vào chủ kiến của mình nên đã không lắng nghe lời khuyên hữu ích của người khác.', examTip: 'Cấu trúc ~あまり (vì quá... dẫn đến kết cục không mong muốn)',
    collocations: ['自説に固執する', '権利に固執する'], synonyms: ['執着', '拘泥'], antonyms: ['妥協', '柔軟'],
    interval: 7, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n1-6', level: 'N1', kanji: '脆弱', hanViet: 'THÚY NHƯỢC', hiragana: 'ぜいじゃく', romaji: 'Zeijaku', emoji: '🥚⚠️',
    story: 'Mỏng manh yếu ớt như vỏ trứng dễ vỡ trước va đập.', visual: 'Lớp băng mỏng nứt toác dưới chân.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ze-i-ja-ku)', definition: 'Mong manh, dễ tổn thương, có lỗ hổng bảo mật',
    lifeJp: 'このシステムのセキュリティには重大な脆弱性が存在する。', lifeVi: 'Hệ thống an ninh này đang tồn tại lỗ hổng bảo mật nghiêm trọng.', lifeContext: 'An ninh mạng IT',
    jlptJp: '脆弱な地盤の上に建物を建てるのは極めて危険である。', jlptVi: 'Xây dựng công trình trên nền đất mong manh yếu ớt là cực kỳ nguy hiểm.', examTip: 'Thuật ngữ CNTT rất hay gặp: 脆弱性 (vulnerability - lỗ hổng an ninh)',
    collocations: ['脆弱な基盤', 'セキュリティの脆弱性'], synonyms: ['脆い', '貧弱'], antonyms: ['強靭', '堅固'],
    interval: 9, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n1-7', level: 'N1', kanji: '卓越', hanViet: 'TRÁC VIỆT', hiragana: 'たくえつ', romaji: 'Takuetsu', emoji: '👑🏆',
    story: 'Vượt lên đỉnh cao xuất chúng bỏ xa mọi kẻ tầm thường.', visual: 'Đứng trên đỉnh núi cao ngạo nghễ.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ta-ku-e-tsu)', definition: 'Xuất chúng, trác tuyệt, vượt trội',
    lifeJp: '彼の卓越した技術とリーダーシップがチームを優勝へ導いた。', lifeVi: 'Kỹ năng trác tuyệt và tài năng lãnh đạo của anh ấy đã dẫn dắt đội bóng đến ngôi vô địch.', lifeContext: 'Ca ngợi tài năng',
    jlptJp: '卓越した洞察力をもって時代の先を見通す。', jlptVi: 'Nhìn thấu tương lai của thời đại bằng năng lực thấu suốt trác việt.', examTip: 'Thường đi với: 卓越した才能, 卓越した技術',
    collocations: ['卓越した見識', '他を卓越する'], synonyms: ['傑出', '抜群'], antonyms: ['平凡', '凡庸'],
    interval: 18, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n1-8', level: 'N1', kanji: '斡旋', hanViet: 'OÁT TOÀN', hiragana: 'あっせん', romaji: 'Assen', emoji: '🤝🏛️',
    story: 'Xoay xở đứng giữa làm trung gian hòa giải kết nối đôi bên.', visual: 'Người hòa giải chốt hợp đồng giữa hai tập đoàn.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (A-s-se-n)', definition: 'Môi giới, làm trung gian điều đình',
    lifeJp: 'ハローワークは求職者に適切な就職先を斡旋する機関だ。', lifeVi: 'Trung tâm dịch vụ việc làm là cơ quan môi giới việc làm thích hợp cho người tìm việc.', lifeContext: 'Pháp luật lao động',
    jlptJp: '第三者の斡旋によって労使紛争が平和裏に解決した。', jlptVi: 'Nhờ sự điều đình hòa giải của bên thứ ba, tranh chấp lao động đã được giải quyết trong hòa bình.', examTip: 'Cụm từ pháp lý: 職の斡旋 (giới thiệu việc làm), 紛争の斡旋',
    collocations: ['就職を斡旋する', '紛争の斡旋'], synonyms: ['仲介', '媒介'], antonyms: ['妨害'],
    interval: 12, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n1-9', level: 'N1', kanji: '矛盾', hanViet: 'MÂU THUẪN', hiragana: 'むじゅん', romaji: 'Mujun', emoji: '🛡️⚔️',
    story: 'Ngọn giáo đâm thủng mọi thứ đâm vào chiếc khiên chắn được mọi ngọn giáo -> Nghịch lý mâu thuẫn.', visual: 'Ngọn giáo va đập vào tấm khiên.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Mu-ju-n)', definition: 'Mâu thuẫn, nghịch lý tiền hậu bất nhất',
    lifeJp: '彼の言っていることと行動には明らかな矛盾がある。', lifeVi: 'Giữa lời anh ta nói và hành động đang có mâu thuẫn rành rành.', lifeContext: 'Phản biện tranh luận',
    jlptJp: '論理的な矛盾を指摘され、弁明に窮した。', jlptVi: 'Bị chỉ ra mâu thuẫn logic nên đã lúng túng cùng đường phân bua.', examTip: 'Quán dụng ngữ: 弁明に窮する (cùng đường thanh minh)',
    collocations: ['自己矛盾に陥る', '矛盾を孕む'], synonyms: ['背反', '不条理'], antonyms: ['整合', '調和'],
    interval: 21, repetitions: 6, state: 'mastered'
  }),
  makeCard({
    id: 'n1-10', level: 'N1', kanji: '捏造', hanViet: 'NIẾT TẠO', hiragana: 'ねつぞう', romaji: 'Netsuzou', emoji: '🧪❌',
    story: 'Dùng tay nhào nặn bùn đất bịa đặt dựng chuyện sai trái.', visual: 'Số liệu giả mạo bị gạch chéo đỏ.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ne-tsu-zo-u)', definition: 'Bịa đặt, ngụy tạo, làm giả chứng cứ',
    lifeJp: '研究データの捏造が発覚し、教授の職を追われた。', lifeVi: 'Hành vi ngụy tạo số liệu nghiên cứu bị bại lộ nên đã bị tước học hàm giáo sư.', lifeContext: 'Đạo đức khoa học',
    jlptJp: '悪意ある記事によって事実が無惨にも捏造された。', jlptVi: 'Sự thật đã bị bài báo ác ý ngụy tạo một cách không thương tiếc.', examTip: 'Cách đọc đặc biệt: 捏造 (Đọc là ねつぞう, không đọc là でつぞう)',
    collocations: ['データを捏造する', '証拠の捏造'], synonyms: ['偽造', '改ざん'], antonyms: ['実証', '真実'],
    interval: 7, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n1-11', level: 'N1', kanji: '凌駕', hanViet: 'LĂNG GIÁ', hiragana: 'りょうが', romaji: 'Ryouga', emoji: '🦅',
    story: 'Lên xe vượt dốc cao đè bẹp đối thủ đứng lên đỉnh cao.', visual: 'Chim đại bàng bay lượn trên tầng mây vượt muôn loài.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (RYO-u-ga)', definition: 'Áp đảo, vượt trội hơn hẳn',
    lifeJp: 'AIの画像認識能力はすでに人間の目を凌駕している。', lifeVi: 'Khả năng nhận diện hình ảnh của AI đã vượt trội hơn hẳn mắt người.', lifeContext: 'Khoa học công nghệ AI',
    jlptJp: '新製品の売上は前作の実績を遥かに凌駕する勢いを見せている。', jlptVi: 'Doanh số của sản phẩm mới đang cho thấy khí thế vượt xa thành tích của tiền nhiệm.', examTip: 'Đi với phó từ 遥かに: 遥かに凌駕する (vượt trội hơn hẳn)',
    collocations: ['他を凌駕する', '想像を凌駕する'], synonyms: ['凌ぐ', '圧倒'], antonyms: ['屈する', '下回る'],
    interval: 14, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n1-12', level: 'N1', kanji: '震撼', hanViet: 'CHẤN HÁM', hiragana: 'しんかん', romaji: 'Shinkan', emoji: '🌋',
    story: 'Tiếng sét kinh hoàng làm rung chuyển cả đất trời và lòng người.', visual: 'Cơn địa chấn làm lay động toàn bộ mặt đất.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Shi-n-ka-n)', definition: 'Làm chấn động, rung chuyển kinh hoàng',
    lifeJp: 'その汚職事件は政界全体を激しく震撼させた。', lifeVi: 'Vụ án tham nhũng đó đã làm chấn động dữ dội toàn bộ chính giới.', lifeContext: 'Tin tức thời sự lớn',
    jlptJp: '世界を震撼させた大恐慌の教訓を忘れてはならない。', jlptVi: 'Không được quên bài học của cuộc đại khủng hoảng từng làm chấn động toàn cầu.', examTip: 'Cụm từ báo chí: 世間を震撼させる (làm chấn động dư luận)',
    collocations: ['世を震撼させる', '全土を震撼させる'], synonyms: ['動矢', '激震'], antonyms: ['鎮静', '平穏'],
    interval: 9, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n1-13', level: 'N1', kanji: '辟易', hanViet: 'TÍCH DỊCH', hiragana: 'へきえき', romaji: 'Hekieki', emoji: '🤦‍♂️💨',
    story: 'Bị dồn vào chân tường mệt mỏi ngán ngẩm không chịu nổi.', visual: 'Lắc đầu ngao ngán ôm trán vì chán nản.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (He-ki-e-ki)', definition: 'Phát ngán, chán ngấy, thoái thác chịu thua',
    lifeJp: '彼の自慢話にはもううんざりで、皆辟易している。', lifeVi: 'Chuyện khoe khoang của anh ta phát ngán rồi, ai nấy đều chán ngấy.', lifeContext: 'Quan hệ xã giao',
    jlptJp: '連日の猛暑の厳しさに誰もが辟易していた。', jlptVi: 'Ai nấy đều phát ngấy trước sự gay gắt của đợt nắng nóng kéo dài nhiều ngày.', examTip: 'Cách dùng: ~に辟易する (phát ngán trước điều gì)',
    collocations: ['辟易させられる', '不満に辟易する'], synonyms: ['うんざり', '閉口'], antonyms: ['熱中', '歓迎'],
    interval: 6, repetitions: 2, state: 'learning'
  }),
  makeCard({
    id: 'n1-14', level: 'N1', kanji: '齟齬', hanViet: 'TRỞ NGỮ', hiragana: 'そご', romaji: 'Sogo', emoji: '⚙️💥',
    story: 'Răng trên răng dưới lệch khớp cắn vào nhau tạo va chạm.', visual: 'Hai bánh răng cưa lệch răng không thể ăn khớp.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L (SO-go)', definition: 'Bất đồng, mâu thuẫn lệch khớp, không ăn ý',
    lifeJp: 'コミュニケーション不足から両者の認識に齟齬が生じた。', lifeVi: 'Do thiếu trao đổi nên giữa nhận thức đôi bên đã nảy sinh sự cọc cạch mâu thuẫn.', lifeContext: 'Đàm phán thương mại',
    jlptJp: '契約の条項に齟齬がないか綿密に精査する。', jlptVi: 'Rà soát kỹ lưỡng xem có sự cọc cạch mâu thuẫn nào trong các điều khoản hợp đồng hay không.', examTip: 'Cụm từ xuất hiện trong Mondai từ vựng N1: 齟齬をきたす / 齟齬が生じる',
    collocations: ['認識の齟齬', '齟齬をきたす'], synonyms: ['食い違い', '不和'], antonyms: ['一致', '整合'],
    interval: 10, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n1-15', level: 'N1', kanji: '忌避', hanViet: 'KỴ TỴ', hiragana: 'きひ', romaji: 'Kihi', emoji: '🙅‍♂️',
    story: 'Kiêng kỵ xa lánh tránh né những điều xui rủi nguy hiểm.', visual: 'Khoát tay kiên quyết né tránh.',
    pattern: 'Atamadaka [1]', pitchGraph: 'H-L-L (KI-hi)', definition: 'Lẩn tránh, trốn tránh nghĩa vụ, kiêng dè',
    lifeJp: '兵役の忌避は重い刑罰の対象となる国もある。', lifeVi: 'Có những quốc gia mà việc trốn tránh nghĩa vụ quân sự sẽ bị xử phạt nặng.', lifeContext: 'Chính trị quốc tế',
    jlptJp: 'リスクを忌避するあまり、イノベーションが停滞している。', jlptVi: 'Chính vì quá né tránh rủi ro nên sự đổi mới sáng tạo đang bị đình trệ.', examTip: 'Thuật ngữ tài chính: リスク忌避 (Risk-averse - né tránh rủi ro)',
    collocations: ['責任を忌避する', 'リスク忌避'], synonyms: ['回避', '敬遠'], antonyms: ['受容', '直面'],
    interval: 13, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n1-16', level: 'N1', kanji: '拘泥', hanViet: 'CÂU NÊ', hiragana: 'こうでい', romaji: 'Koudei', emoji: '🪨⛓️',
    story: 'Bị sa lầy bùn đất dính chặt câu thúc câu nệ chi tiết vụn vặt.', visual: 'Bàn chân bị lún bùn không nhấc lên được.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Ko-u-de-i)', definition: 'Câu nệ, quá để tâm vào tiểu tiết vụn vặt',
    lifeJp: '過去の形式に拘泥せず、大胆な改革を断行すべきだ。', lifeVi: 'Không nên câu nệ hình thức cũ mà cần dứt khoát thực hiện cuộc cải cách táo bạo.', lifeContext: 'Quản trị đổi mới',
    jlptJp: '細かい勝敗に拘泥することなく、大局的な視点を見失うな。', jlptVi: 'Đừng câu nệ vào những thắng thua vụn vặt mà đánh mất tầm nhìn đại cục.', examTip: 'Cấu trúc phủ định thường gặp: ~に拘泥することなく (không câu nệ vào)',
    collocations: ['形式に拘泥する', '勝敗に拘泥しない'], synonyms: ['こだわる', '執着'], antonyms: ['達観', '豁達'],
    interval: 8, repetitions: 3, state: 'review'
  }),
  makeCard({
    id: 'n1-17', level: 'N1', kanji: '盲点', hanViet: 'MANH ĐIỂM', hiragana: 'もうてん', romaji: 'Mouten', emoji: '🙈🎯',
    story: 'Điểm mù võng mạc mà mắt thường không bao giờ nhìn thấy.', visual: 'Góc khuất gương chiếu hậu xe tải.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Mo-u-te-n)', definition: 'Điểm mù, lỗ hổng sót không ngờ tới',
    lifeJp: '完璧に見えた計画にも思わぬ盲点が存在していた。', lifeVi: 'Kế hoạch ngỡ như hoàn hảo cũng đã tồn tại điểm mù không ngờ tới.', lifeContext: 'Phân tích dự án',
    jlptJp: '法制度の盲点を突いた巧妙な手口の犯罪が多発している。', jlptVi: 'Hàng loạt vụ phạm tội với thủ đoạn tinh vi lợi dụng kẽ hở điểm mù luật pháp đang xảy ra.', examTip: 'Quán dụng ngữ: 盲点を突く (xoáy vào điểm mù/kẽ hở)',
    collocations: ['盲点を突く', '思わぬ盲点'], synonyms: ['死角', '落とし穴'], antonyms: ['全方位'],
    interval: 16, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n1-18', level: 'N1', kanji: '示唆', hanViet: 'THỊ TA', hiragana: 'しさ', romaji: 'Shisa', emoji: '💡👉',
    story: 'Chỉ tay gợi mở bóng gió dẫn dắt tư duy.', visual: 'Ngọn hải đăng nhấp nháy dẫn lối tàu thuyền.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H (Shi-sa)', definition: 'Gợi ý, hàm ý bóng gió, gợi mở',
    lifeJp: '教授の何気ない一言が、研究の突破口を示唆してくれた。', lifeVi: 'Một câu nói vô tình của giáo sư đã gợi mở bước đột phá cho nghiên cứu.', lifeContext: 'Nghiên cứu học thuật',
    jlptJp: 'この実験結果は、未知の素粒子が存在する可能性を強く示唆している。', jlptVi: 'Kết quả thí nghiệm này hàm ý mạnh mẽ về khả năng tồn tại hạt cơ bản chưa từng biết.', examTip: 'Từ vựng văn phong học thuật cao cấp trong Dokkai N1',
    collocations: ['可能性を示唆する', '示唆に富む'], synonyms: ['暗示', '匂わせる'], antonyms: ['明示'],
    interval: 19, repetitions: 5, state: 'mastered'
  }),
  makeCard({
    id: 'n1-19', level: 'N1', kanji: '刷新', hanViet: 'SÁT TÂN', hiragana: 'さっしん', romaji: 'Sasshin', emoji: '🔄✨',
    story: 'Cạo sạch gỉ sét cũ kỹ khoác lên diện mạo hoàn toàn mới.', visual: 'Lột xác thay mới toàn bộ giao diện hiện đại.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Sa-s-shi-n)', definition: 'Đổi mới toàn diện, cải tổ triệt để',
    lifeJp: 'イメージを刷新するため、ブランドロゴを新しくした。', lifeVi: 'Để làm mới toàn diện hình ảnh, chúng tôi đã thay mới logo thương hiệu.', lifeContext: 'Chiến dịch tái định vị',
    jlptJp: '経営陣の顔ぶれを一新し、企業風土の抜本的刷新を図る。', jlptVi: 'Thay mới toàn bộ ban điều hành, hướng tới cuộc cải tổ triệt để văn hóa doanh nghiệp.', examTip: 'Cụm từ báo chí: 抜本的刷新 (Cải tổ mang tính nền tảng)',
    collocations: ['人事の刷新', '制度を刷新する'], synonyms: ['一新', 'リニューアル'], antonyms: ['旧態依然'],
    interval: 11, repetitions: 4, state: 'mastered'
  }),
  makeCard({
    id: 'n1-20', level: 'N1', kanji: '真髄', hanViet: 'CHÂN TỦY', hiragana: 'しんずい', romaji: 'Shinzui', emoji: '💎✨',
    story: 'Tinh hoa cốt tủy chân thực lắng đọng tận cùng.', visual: 'Viên kim cương tinh khiết nằm trong lõi đá quý.',
    pattern: 'Heiban [0]', pitchGraph: 'L-H-H-H (Shi-n-zu-i)', definition: 'Tinh hoa, cốt tủy, tinh túy cốt lõi',
    lifeJp: '何十年もの修行を経て、ようやく芸の真髄に触れた。', lifeVi: 'Trải qua mấy mươi năm tu nghiệp, rốt cuộc tôi đã chạm tới cốt tủy tinh hoa của nghệ thuật.', lifeContext: 'Nghệ thuật trà đạo/võ đạo',
    jlptJp: '古典文学を精読することこそが、日本語表現の真髄を味わう最良の道である。', jlptVi: 'Chính việc đọc sâu văn học cổ điển mới là con đường tuyệt hảo nhất để thưởng thức tinh hoa biểu đạt tiếng Nhật.', examTip: 'Cụm từ xuất hiện ở bài văn triết lý Dokkai N1: ~の真髄に迫る',
    collocations: ['芸の真髄', '真髄を極める'], synonyms: ['神髄', 'エッセンス', '真骨頂'], antonyms: ['皮相', '表面'],
    interval: 25, repetitions: 7, state: 'mastered'
  }),
  ...FLASHCARDS_1000
];
