import {
  PitchSentenceItem,
  ListeningLesson,
  Flashcard,
  GrammarItem,
  JLPTQuestion,
  DokkaiArticle
} from '../types';

export const PITCH_SENTENCE_PRESETS: PitchSentenceItem[] = [
  {
    id: 'pitch-1',
    level: 'N5',
    original: 'はじめまして、どうぞよろしくおねがいします。',
    hiragana: 'はじめまして、どうぞよろしくおねがいします。',
    romaji: 'Hajimemashite, douzo yoroshiku onegaishimasu.',
    vietnamese: 'Rất vui được gặp bạn lần đầu, mong được bạn giúp đỡ nhiều.',
    pitchAccent: {
      patternName: 'Nakadaka & Odaka kết hợp',
      description: 'Hajimemashite: Đỉnh ở mora "め" (me) rồi rơi nhẹ. Yoroshiku: Đi phẳng Heiban. Onegaishimasu: Lên ở "ね" (ne) rồi đi ngang hạ ở đuôi.',
      moras: [
        { mora: 'は (ha)', pitch: 'L', note: 'Khởi đầu thấp' },
        { mora: 'じ (ji)', pitch: 'H', note: 'Nâng lên' },
        { mora: 'め (me)', pitch: 'H', note: 'Đỉnh cao độ' },
        { mora: 'ま (ma)', pitch: 'L', note: 'Bắt đầu rơi' },
        { mora: 'し (shi)', pitch: 'L', note: 'Thấp' },
        { mora: 'て (te)', pitch: 'L', note: 'Thấp' },
        { mora: 'ど (dou)', pitch: 'H', note: 'Trường âm cao' },
        { mora: 'う (u)', pitch: 'L', note: 'Hạ nhẹ' },
        { mora: 'ぞ (zo)', pitch: 'L', note: 'Thấp' },
        { mora: 'よ (yo)', pitch: 'L', note: 'Khởi đầu phẳng' },
        { mora: 'ろ (ro)', pitch: 'H', note: 'Nâng' },
        { mora: 'し (shi)', pitch: 'H', note: 'Giữ ngang' },
        { mora: 'く (ku)', pitch: 'H', note: 'Giữ' },
        { mora: 'お (o)', pitch: 'L', note: 'Tiếp đầu ngữ thấp' },
        { mora: 'ね (ne)', pitch: 'H', note: 'Nâng cao' },
        { mora: 'が (ga)', pitch: 'H', note: 'Giữ' },
        { mora: 'い (i)', pitch: 'H', note: 'Giữ' },
        { mora: 'し (shi)', pitch: 'L', note: 'Vô thanh hóa nhẹ' },
        { mora: 'ま (ma)', pitch: 'L', note: 'Thấp' },
        { mora: 'す (su)', pitch: 'L', note: 'Thở nhẹ cuối câu' }
      ],
      audioTips: 'Khi nói "よろしくお願いします", đừng ngắt giữa chừng. Giữ hơi thở đều, hạ giọng ở "ます" (không lên giọng như câu hỏi tiếng Việt).'
    },
    speechSpeeds: {
      slow08x: { label: 'Chậm (0.8x)', focus: 'Phát âm rõ từng mora, tránh nuốt trường âm "ど-う-ぞ".' },
      natural10x: { label: 'Tự nhiên (1.0x)', focus: 'Nối mượt cụm "よろしく" sang "おねがいします".' },
      native12x: { label: 'Bản xứ nhanh (1.2x)', focus: 'Âm "shite" và "shimasu" vô thanh hóa rất nhanh.' }
    },
    communicationVariants: [
      {
        style: 'Lịch sự trang trọng (Polite / Business)',
        japanese: 'はじめまして、どうぞよろしくお願い申し上げます。',
        nuance: 'Dùng trong phỏng vấn tuyển dụng hoặc đối tác khách hàng.'
      },
      {
        style: 'Thân mật hàng ngày (Casual / Thể ngắn)',
        japanese: 'よろしくね！ / よろしくー！',
        nuance: 'Dùng khi làm quen bạn bè cùng tuổi, bạn học trong trường.'
      },
      {
        style: 'Khẩu ngữ / Slang giới trẻ (Spoken / Slang)',
        japanese: 'よろ〜 (Yoro~)',
        nuance: 'Nhắn tin qua mạng xã hội, game chat siêu ngắn gọn.'
      }
    ],
    reflexDrills: [
      {
        question: '相手から「はじめまして、田中です。よろしくお願いします」と言われたら？',
        questionVi: 'Khi đối phương nói: "Chào bạn, tôi là Tanaka. Rất mong được giúp đỡ", bạn phản xạ gì ngay?',
        modelAnswer: 'こちらこそ、よろしくお願いします！',
        modelAnswerVi: 'Chính tôi mới là người cần nhờ bạn giúp đỡ ạ!',
        reflexTip: 'Phản xạ ngay cụm từ khóa "こちらこそ" (Kochirakoso) trong 1 giây.'
      },
      {
        question: '同世代の新しいクラスメイトにフランクに挨拶する時は？',
        questionVi: 'Khi chào bạn cùng lớp mới bằng cách thân mật, tự nhiên?',
        modelAnswer: 'あ、はじめまして！よろしくね！',
        modelAnswerVi: 'A, chào bạn nhé! Giúp đỡ nhau nha!',
        reflexTip: 'Bắt đầu bằng từ đệm cảm thán "あ" (a) tạo độ tự nhiên tức thì.'
      }
    ]
  },
  {
    id: 'pitch-2',
    level: 'N3',
    original: 'すみません、ちょっとお伺いしたいことがあるんですが。',
    hiragana: 'すみません、ちょっとおうかがいしたいことがあるんですが。',
    romaji: 'Sumimasen, chotto oukagai shitai koto ga arun desu ga.',
    vietnamese: 'Xin lỗi, tôi có một chút chuyện muốn thỉnh giáo / hỏi ý kiến ạ.',
    pitchAccent: {
      patternName: 'Odaka & Nakadaka kết hợp uyển chuyển',
      description: 'Sumimasen: Đỉnh ở "ま" (ma). Oukagai: Lên ở "う" (u) và "か" (ka). Cụm "あるんですが" hạ dần tạo âm hưởng ngập ngừng khiêm tốn đặc trưng của người Nhật.',
      moras: [
        { mora: 'す (su)', pitch: 'L', note: 'Thấp' },
        { mora: 'み (mi)', pitch: 'H', note: 'Lên' },
        { mora: 'ま (ma)', pitch: 'H', note: 'Đỉnh' },
        { mora: 'せ (se)', pitch: 'L', note: 'Rơi' },
        { mora: 'ん (n)', pitch: 'L', note: 'Âm mũi ngân nhẹ' },
        { mora: 'ちょ (cho)', pitch: 'H', note: 'Âm ghép bật cao' },
        { mora: 'っ (tsu)', pitch: 'H', note: 'Âm ngắt giữ hơi' },
        { mora: 'と (to)', pitch: 'L', note: 'Hạ' },
        { mora: 'お (o)', pitch: 'L', note: 'Khiêm nhường' },
        { mora: 'う (u)', pitch: 'H', note: 'Lên' },
        { mora: 'か (ka)', pitch: 'H', note: 'Giữ' },
        { mora: 'が (ga)', pitch: 'H', note: 'Giữ' },
        { mora: 'い (i)', pitch: 'L', note: 'Hạ nhẹ' },
        { mora: 'し (shi)', pitch: 'L', note: 'Vô thanh' },
        { mora: 'た (ta)', pitch: 'H', note: 'Lên' },
        { mora: 'い (i)', pitch: 'H', note: 'Giữ' },
        { mora: 'こ (ko)', pitch: 'L', note: 'Hạ' },
        { mora: 'と (to)', pitch: 'H', note: 'Lên' },
        { mora: 'が (ga)', pitch: 'L', note: 'Trợ từ hạ' },
        { mora: 'あ (a)', pitch: 'H', note: 'Lên' },
        { mora: 'る (ru)', pitch: 'H', note: 'Giữ' },
        { mora: 'ん (n)', pitch: 'H', note: 'Giải thích' },
        { mora: 'で (de)', pitch: 'L', note: 'Hạ xuống' },
        { mora: 'す (su)', pitch: 'L', note: 'Thấp' },
        { mora: 'が (ga)', pitch: 'L', note: 'Đuôi lửng lơ ngập ngừng' }
      ],
      audioTips: 'Đuôi câu "~んですが" đừng dứt dứt khoát. Người Nhật hạ giọng và để ngỏ nhằm thể hiện sự tế nhị, tạo khoảng trống cho đối phương trả lời "Vâng, chuyện gì thế ạ?".'
    },
    speechSpeeds: {
      slow08x: { label: 'Chậm (0.8x)', focus: 'Luyện âm ngắt "ちょっ-と" và khiêm nhường ngữ "お伺い".' },
      natural10x: { label: 'Tự nhiên (1.0x)', focus: 'Tạo ngữ điệu mềm mại, đuôi câu để lửng tự nhiên.' },
      native12x: { label: 'Bản xứ nhanh (1.2x)', focus: 'Nghe như "Summasen, chotto okagai shitaindesga".' }
    },
    communicationVariants: [
      {
        style: 'Lịch sự trang trọng (Keigo / Kinh doanh)',
        japanese: '恐れ入りますが、少々お尋ねしたい儀がございます。',
        nuance: 'Dùng với khách hàng VIP hoặc đối tác công ty lớn.'
      },
      {
        style: 'Thân mật hàng ngày (Casual / Thể ngắn)',
        japanese: 'ねえ、ちょっと聞きたいことあるんだけど。',
        nuance: 'Hỏi bạn bè, đồng nghiệp thân thiết.'
      },
      {
        style: 'Khẩu ngữ / Siêu ngắn',
        japanese: 'ちょっといい？ / 聞いていい？',
        nuance: 'Hỏi nhanh khi thấy bạn bè đang rảnh tay.'
      }
    ],
    reflexDrills: [
      {
        question: '街中で道に迷った時、通行人に声をかける第一声は？',
        questionVi: 'Khi bị lạc đường ở Tokyo, bạn mở lời thế nào với người đi đường trong 1 giây?',
        modelAnswer: 'すみません、駅はどっちか教えていただけますか？',
        modelAnswerVi: 'Xin lỗi, bạn có thể chỉ giúp tôi nhà ga ở hướng nào không ạ?',
        reflexTip: 'Mở đầu bằng "すみません" với ngữ điệu nhẹ nhàng là mở khóa 90% thiện cảm.'
      },
      {
        question: '相手から「ちょっとお伺いしたいんですが」と言われたら何と受ける？',
        questionVi: 'Khi đối phương nói câu này với bạn, bạn phản xạ nhận lời thế nào?',
        modelAnswer: 'はい、何でしょうか？ どうぞ！',
        modelAnswerVi: 'Vâng, chuyện gì vậy ạ? Bạn cứ nói đi ạ!',
        reflexTip: 'Đáp ngay "はい、何でしょうか？" (Hai, nan deshou ka?).'
      }
    ]
  },
  {
    id: 'pitch-3',
    level: 'N2',
    original: 'そんなこと、言われなくても分かってるってば。',
    hiragana: 'そんなこと、いわれなくてもわかってるってば。',
    romaji: 'Sonna koto, iwarenakutemo wakatteru tteba.',
    vietnamese: 'Chuyện đó ấy, dù không bị nói thì tôi cũng thừa biết rồi mà!',
    pitchAccent: {
      patternName: 'Khẩu ngữ biểu cảm cảm xúc (Emphatic spoken drop)',
      description: 'Nhấn mạnh ở "そ" (so) trong Sonna. Wakatteru lên ở "かっ" (ka) và "て" (te). Đuôi "ってば" (tteba) lên giọng thể hiện chút hờn dỗi hoặc nôn nóng.',
      moras: [
        { mora: 'そ (so)', pitch: 'H', note: 'Nhấn mạnh cảm xúc' },
        { mora: 'ん (n)', pitch: 'L', note: 'Hạ' },
        { mora: 'な (na)', pitch: 'L', note: 'Thấp' },
        { mora: 'こ (ko)', pitch: 'L', note: 'Thấp' },
        { mora: 'と (to)', pitch: 'H', note: 'Lên' },
        { mora: 'い (i)', pitch: 'L', note: 'Khởi đầu' },
        { mora: 'わ (wa)', pitch: 'H', note: 'Lên' },
        { mora: 'れ (re)', pitch: 'H', note: 'Giữ' },
        { mora: 'な (na)', pitch: 'H', note: 'Giữ' },
        { mora: 'く (ku)', pitch: 'L', note: 'Hạ' },
        { mora: 'て (te)', pitch: 'L', note: 'Thấp' },
        { mora: 'も (mo)', pitch: 'L', note: 'Thấp' },
        { mora: 'わ (wa)', pitch: 'L', note: 'Khởi đầu' },
        { mora: 'か (ka)', pitch: 'H', note: 'Lên' },
        { mora: 'っ (tsu)', pitch: 'H', note: 'Âm ngắt giữ' },
        { mora: 'て (te)', pitch: 'H', note: 'Đỉnh cao độ' },
        { mora: 'る (ru)', pitch: 'L', note: 'Hạ' },
        { mora: 'っ (tsu)', pitch: 'H', note: 'Âm ngắt nảy' },
        { mora: 'て (te)', pitch: 'H', note: 'Cao' },
        { mora: 'ば (ba)', pitch: 'H', note: 'Giữ cao đuôi câu nhấn mạnh' }
      ],
      audioTips: 'Hạt nhân cảm xúc nằm ở âm ngắt [っ] trước "てば". Âm ngắt tạo ra độ giật nảy trong giọng nói, thể hiện cảm giác người nói đang bị giục giã hoặc nhắc nhở thừa thãi.'
    },
    speechSpeeds: {
      slow08x: { label: 'Chậm (0.8x)', focus: 'Cảm nhận 2 âm ngắt: [わかっ-てる] và [-ってば].' },
      natural10x: { label: 'Tự nhiên (1.0x)', focus: 'Ngữ điệu tự nhiên, dứt khoát của người bản xứ khi trò chuyện thân mật.' },
      native12x: { label: 'Bản xứ nhanh (1.2x)', focus: 'Tốc độ phản xạ tức thì khi bị nhắc nhở nhiều lần.' }
    },
    communicationVariants: [
      {
        style: 'Lịch sự trang trọng (Desu/Masu)',
        japanese: 'その件につきましては、重々承知いたしております。',
        nuance: 'Khi trả lời sếp hoặc khách hàng: "Về vấn đề đó tôi đã nắm rất rõ rồi ạ".'
      },
      {
        style: 'Thân mật hàng ngày (Casual chuẩn)',
        japanese: 'そんなこと、言われなくても分かってるよ。',
        nuance: 'Nói với bạn bè, giọng êm hơn không có đuôi giận dỗi ってば.'
      },
      {
        style: 'Khẩu ngữ giới trẻ (Slang / Anime)',
        japanese: '分かってるっての！ / うっさいなーもう！',
        nuance: 'Nói đùa hoặc dỗi với người yêu, bạn bè cực kỳ thân thiết.'
      }
    ],
    reflexDrills: [
      {
        question: '親や友達から「宿題やったの？早くしなさい」と何回も言われたら？',
        questionVi: 'Khi bị bố mẹ hay bạn nhắc bài tập nhiều lần, bạn buột miệng phản xạ câu gì tự nhiên nhất?',
        modelAnswer: '今やろうと思ってたところだってば！',
        modelAnswerVi: 'Con đang định làm ngay đây này mà cứ giục!',
        reflexTip: 'Cấu trúc "~ところだってば" là câu cửa miệng phản xạ của người Nhật khi bị hối thúc.'
      },
      {
        question: '友達から「あの映画もう見た？」と聞かれて、もちろん知ってるよと強調する時は？',
        questionVi: 'Khi bạn bè hỏi "Cậu xem phim đó chưa?", bạn muốn đáp "Biết thừa rồi mà" thế nào?',
        modelAnswer: '当たり前じゃん！初日に見たってば！',
        modelAnswerVi: 'Đương nhiên rồi! Tớ xem ngay ngày công chiếu rồi đấy chứ!',
        reflexTip: 'Kết hợp "当たり前じゃん" + "~ってば" tạo độ tự nhiên 100% bản xứ.'
      }
    ]
  }
];

export const LISTENING_LESSON_PRESETS: ListeningLesson[] = [
  {
    id: 'listen-1',
    title: 'Xóa hiện tượng "Nuốt âm & Rút gọn" trong hội thoại công sở',
    level: 'N3',
    situation: 'Đồng nghiệp hỏi thăm tình hình chuẩn bị cuộc họp dự án sắp tới.',
    script: '明日のプレゼンの資料、もうコピーしといた？まだならやっとくよ。',
    soundModifications: [
      {
        type: 'Rút gọn thể tiếp diễn chuẩn bị (~ておく -> ~とく)',
        location: 'しといた (Shitoita) & やっとく (Yattoku)',
        phoneticRealization: 'しておいた (shite oita) -> しといた (shitoita) ; やっておく (yatte oku) -> やっとく (yattoku)',
        explanation: 'Người Nhật hầu như không bao giờ phát âm đầy đủ "shite oita" trong đời sống. Âm [te o] luôn co rút lại thành [to], biến thành [shitoita]. Tai người Việt chờ nghe "te oita" nên bị rơi vào bẫy "nghe không kịp".'
      },
      {
        type: 'Lược bỏ trợ từ liên kết',
        location: 'まだなら (Mada nara)',
        phoneticRealization: 'もし、まだ準備していないのであれば -> まだなら',
        explanation: 'Cắt gọt tối đa từ vựng phụ, chỉ giữ lại từ khóa và giả định [nara].'
      }
    ],
    focusKeywords: [
      { word: 'プレゼン (Purezen)', hiragana: 'ぷれぜん', meaning: 'Buổi thuyết trình (Presentation)', importance: 'Bối cảnh công việc chính' },
      { word: '資料 (Shiryou)', hiragana: 'しりょう', meaning: 'Tài liệu', importance: 'Đối tượng hành động' },
      { word: 'コピーしといた', hiragana: 'こぴーしといた', meaning: 'Đã photo sẵn từ trước chưa?', importance: 'Hành động chuẩn bị V-teoku' }
    ],
    threeStepTraining: {
      step1Keywords: {
        task: 'Lần 1: Nghe bắt từ khóa (Keywords)',
        instructions: 'Nhắm mắt nghe lần 1, không cần dịch câu, chỉ cố gắng bắt được 3 từ khóa sau trong đầu.',
        targetKeywords: ['プレゼン', '資料', 'コピー']
      },
      step2Chunking: {
        task: 'Lần 2: Nghe từng cụm ý nghĩa (Chunking)',
        chunks: [
          { chunkJp: '明日のプレゼンの資料、', chunkVi: 'Tài liệu cho buổi thuyết trình ngày mai,', intonation: 'Lên giọng nhẹ ngắt nhịp' },
          { chunkJp: 'もうコピーしといた？', chunkVi: 'cậu đã photo sẵn chưa?', intonation: 'Hỏi dứt khoát lên giọng đuôi câu' },
          { chunkJp: 'まだならやっとくよ。', chunkVi: 'nếu chưa thì tớ làm hộ cho nhé.', intonation: 'Hạ giọng thân thiện thể hiện sự giúp đỡ' }
        ]
      },
      step3Dictation: {
        task: 'Lần 3: Nghe chép chính tả (Dictation test)',
        maskedScript: '明日のプレゼンの[___1___]、もうコピー[___2___]？まだなら[___3___]よ。',
        blanks: [
          { id: 1, answer: '資料', acceptableVariants: ['しりょう', 'shiryou'], hint: 'Hán tự: Tư Liệu', explanation: 'Trường âm [ou]. Tránh nhầm với しろ (lâu đài).' },
          { id: 2, answer: 'しといた', acceptableVariants: ['しておいた'], hint: 'Rút gọn của しておいた', explanation: 'Rút gọn thể ~teoku trong quá khứ.' },
          { id: 3, answer: 'やっとく', acceptableVariants: ['やっておく'], hint: 'Rút gọn của やっておく', explanation: 'Âm ngắt [っ] và rút gọn [とく].' }
        ]
      }
    }
  },
  {
    id: 'listen-2',
    title: 'Bắt bẫy Đề thi Chokai JLPT N2: Hiện tượng 連声 (Liên tượng) và Âm ngắt',
    level: 'N2',
    situation: 'Trưởng phòng giao việc tế nhị nhưng không nói thẳng kết luận.',
    script: '今回の企画案、悪くはないんだけど、もうひとひねり欲しいところだね。',
    soundModifications: [
      {
        type: 'Đọc nối cụm thành ngữ & nuốt phụ âm',
        location: 'ひとひねり (Hito-hineri)',
        phoneticRealization: 'もう一捻り (Hito-hineri) -> [Hto-hineri]',
        explanation: 'Âm [i] trong [hito] bị nuốt nguyên âm vô thanh, nghe rất nhanh như "htohineri". Mang nghĩa là "cần thêm một chút sáng tạo, vắt óc thêm một chút nữa".'
      },
      {
        type: 'Cách nói giảm nói tránh phủ định kép (Khen trước chê sau)',
        location: '悪くはないんだけど (Waruku wa nai n dakedo)',
        phoneticRealization: 'Nối âm [n] biểu thị trần thuật cảm xúc',
        explanation: 'Bẫy đề thi JLPT: Khi người Nhật nói "Không tệ đâu NHƯNG MÀ...", đáp án ĐÚNG luôn nằm ở mệnh đề sau [dakedo] (nghĩa là bản đề án VẪN CHƯA ĐẠT yêu cầu).'
      }
    ],
    focusKeywords: [
      { word: '企画案 (Kikakuan)', hiragana: 'きかくあん', meaning: 'Bản kế hoạch / Đề án', importance: 'Đối tượng đánh giá' },
      { word: '悪くはない (Waruku wa nai)', hiragana: 'わるくはない', meaning: 'Không đến nỗi tệ (Khen ngoại giao)', importance: 'Bẫy đánh lạc hướng thí sinh' },
      { word: 'もうひとひねり (Mou hito hineri)', hiragana: 'もうひとひねり', meaning: 'Thêm một chút biến tấu/sáng tạo nữa', importance: 'Ý đồ thực sự của sếp' }
    ],
    threeStepTraining: {
      step1Keywords: {
        task: 'Lần 1: Nghe bắt từ khóa (Keywords)',
        instructions: 'Bắt lấy liên từ "nhưng mà" (んだけど) và từ khóa "hito-hineri" để không bị lừa.',
        targetKeywords: ['企画案', '悪くはない', 'ひとひねり']
      },
      step2Chunking: {
        task: 'Lần 2: Nghe từng cụm ý nghĩa (Chunking)',
        chunks: [
          { chunkJp: '今回の企画案、', chunkVi: 'Bản kế hoạch lần này,', intonation: 'Trầm ấm, mở đầu trung tính' },
          { chunkJp: '悪くはないんだけど、', chunkVi: 'không đến nỗi tồi đâu nhưng mà...', intonation: 'Kéo dài đuôi けど biểu thị sự ngập ngừng' },
          { chunkJp: 'もうひとひねり欲しいところだね。', chunkVi: 'vẫn muốn có thêm một điểm sáng tạo đột phá nữa đấy.', intonation: 'Nhấn vào từ ひとひねり' }
        ]
      },
      step3Dictation: {
        task: 'Lần 3: Nghe chép chính tả (Dictation test)',
        maskedScript: '今回の[___1___]、悪くはないんだけど、もう[___2___]欲しい[___3___]だね。',
        blanks: [
          { id: 1, answer: '企画案', acceptableVariants: ['きかくあん', 'kikakuan'], hint: 'Hán tự: Xí Họa Án', explanation: 'Âm [kikaku] có âm ngắt hay trường âm không? Không, là [ki-ka-ku-an].' },
          { id: 2, answer: 'ひとひねり', acceptableVariants: ['一捻り'], hint: 'Cụm từ cố định: thêm chút sáng tạo', explanation: 'Thường bị nghe nhầm do nguyên âm i bị vô thanh hóa.' },
          { id: 3, answer: 'ところ', acceptableVariants: ['トコロ'], hint: 'Ý nghĩa: thời điểm / trạng thái hiện tại', explanation: 'Ngữ pháp ~たいところだ (rất mong muốn điều này).' }
        ]
      }
    }
  }
];

import { FLASHCARD_PRESETS } from './flashcards';
import { COMPREHENSIVE_GRAMMAR_PRESETS } from './grammarData';
export { FLASHCARD_PRESETS };

const RAW_GRAMMAR_PRESETS: GrammarItem[] = [
  ...COMPREHENSIVE_GRAMMAR_PRESETS,
  // MINNA NO NIHONGO SƠ CẤP (N5 / N4) - Bổ sung
  {
    id: 'gram-minna-1',
    level: 'N5',
    textbookSource: 'Minna no Nihongo Sơ cấp',
    lessonNumber: 'Bài 14 - Minna I',
    grammar: '~てください (~te kudasai)',
    meaning: 'Xin hãy... / Hãy vui lòng làm V (Yêu cầu lịch sự nhẹ nhàng)',
    essenceMeaning: {
      coreMindset: 'Tư duy "Mở ngỏ để người khác ban phát ơn huệ cho mình". Động từ ください vốn là dạng tôn kính khiêm nhường của くれる (cho tôi). Khi người Nhật nói V-te kudasai, trong tâm thức họ không phải ra lệnh, mà là "Xin bạn hãy thực hiện hành động này vì lợi ích của tôi". Vì vậy không được dùng cho cấp trên trong công việc.',
      literalVsReal: 'Nghĩa đen: "Hãy ban cho tôi hành động V này" -> Nghĩa thực tế: "Xin hãy làm V giúp tôi nhé".'
    },
    connectionRules: [
      { form: 'Động từ Nhóm 1 (Godan)', rule: 'Đổi đuôi [i] -> [te/de] (kaku -> kaite, yomu -> yonde) + ください', example: 'ここに名前を書いてください (Xin hãy viết tên vào đây).' },
      { form: 'Động từ Nhóm 2 (Ichidan)', rule: 'Bỏ [ru] + てください (taberu -> tabete kudasai)', example: 'もっとたくさん食べてください (Xin hãy ăn nhiều vào nhé).' },
      { form: 'Động từ Nhóm 3 (Fukisoku)', rule: 'Suru -> Shite kudasai / Kuru -> Kite kudasai', example: '明日9時に来てください (Xin hãy đến lúc 9 giờ sáng mai).' }
    ],
    comparison: {
      confusingWith: '~てくださいません / ~ていただけませんか',
      keyDifference: 'てください vẫn có sắc thái yêu cầu (mệnh lệnh nhẹ), tuyệt đối KHÔNG dùng với sếp hoặc khách hàng (sẽ bị coi là thất lễ). Với bề trên phải dùng ~ていただけませんか (Liệu ngài có thể làm giúp tôi được không?).',
      sideBySide: [
        { structure: '~てください', usage: 'Dùng cho người ngang hàng, người dưới, bảng chỉ dẫn công cộng.', nuance: 'Chỉ dẫn, yêu cầu lịch sự thông thường.' },
        { structure: '~ていただけませんか', usage: 'Dùng với sếp, giáo viên, đối tác, khách hàng.', nuance: 'Khiêm tốn tột cùng, hỏi ý kiến đối phương có sẵn lòng giúp không.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Bạn muốn hành khách trên tàu điện ngồi dịch sang một chút để mình có chỗ ngồi.', prompt: 'Hãy dùng động từ すわる (ngồi) hoặc つめる (ngồi dịch vào) với ~てください.', modelSentence: 'すみません、もう少し詰めて座ってください。', explanation: 'Lời nhờ vả người lạ lịch sự ở nơi công cộng.' },
      { context: 'Ngữ cảnh 2: Bạn đang làm thủ tục tại sân bay, nhân viên quầy yêu cầu xem hộ chiếu.', prompt: 'Nhân viên sẽ nói gì với bạn dùng động từ 見せる (cho xem)?', modelSentence: 'パスポートを見せてください。', explanation: 'Yêu cầu hành chính theo thủ tục chuẩn.' },
      { context: 'Ngữ cảnh 3: Bạn bè đến nhà chơi, bạn muốn mời họ tự nhiên dùng đồ uống.', prompt: 'Hãy dùng động từ 飲む (uống) với ~てください.', modelSentence: '冷たいお茶をどうぞ飲んでください。', explanation: 'Lời mời thân thiện, hiếu khách trong gia đình.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 社長、この書類をチェックしてください (Nói với Giám đốc công ty)',
        correctSentence: '○ 社長、この書類をご確認いただけますでしょうか',
        whyWrong: 'Tuyệt đối không dùng ~てください với cấp trên, phải dùng thể nhờ vả khiêm kính ngữ ~ていただけますでしょうか hoặc ~ご確認ください.'
      }
    ]
  },
  {
    id: 'gram-minna-2',
    level: 'N5',
    textbookSource: 'Minna no Nihongo Sơ cấp',
    lessonNumber: 'Bài 15 - Minna I',
    grammar: '~てもいいです (~te mo ii desu) / ~てはいけません (~te wa ikemasen)',
    meaning: 'Được phép làm... / Tuyệt đối không được phép làm... (Cho phép & Cấm đoán)',
    essenceMeaning: {
      coreMindset: 'Tư duy "Ranh giới của sự hòa nhập tập thể (Wa - 和)". "V-te mo ii" biểu thị hành động đó dù xảy ra cũng "tốt, không gây phương hại đến xung quanh". Ngược lại, "V-te wa ikemasen" là lời cảnh cáo nghiêm khắc rằng hành vi này phá vỡ quy chuẩn trật tự xã hội.',
      literalVsReal: 'Nghĩa đen: "Dù làm V thì cũng tốt / Nếu làm V thì không trôi chảy được" -> Nghĩa thực tế: "Được phép / Cấm tiệt".'
    },
    connectionRules: [
      { form: 'Động từ thể Te (V-te)', rule: 'V-te + もいいです (Được phép làm)', example: 'ここで写真を撮ってもいいですか (Tôi chụp ảnh ở đây có được không?).' },
      { form: 'Động từ thể Te (V-te)', rule: 'V-te + はいけません (Cấm đoán)', example: '美術館の中で大声で話してはいけません (Trong bảo tàng cấm nói to).' }
    ],
    comparison: {
      confusingWith: '~なければなりません (~nakereba narimasen)',
      keyDifference: 'てはいけません là cấm làm (Negative ban: Don\'t do it!). Còn なければなりません là bắt buộc phải làm (Must do: Nghĩa vụ bắt buộc). Tránh nhầm lẫn 2 thái cực cấm và phải.',
      sideBySide: [
        { structure: '~てはいけません', usage: 'Cấm đoán theo luật lệ, nội quy trường học hoặc biển báo.', nuance: 'Cấm tiệt, mệnh lệnh từ người có thẩm quyền.' },
        { structure: '~なければなりません', usage: 'Bổn phận, trách nhiệm bắt buộc phải thực thi.', nuance: 'Nếu không làm thì sẽ không xong / Bắt buộc phải làm.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Bạn đang trong phòng thi chứng chỉ JLPT và thấy một thí sinh mở điện thoại.', prompt: 'Hãy dùng cấu trúc cấm đoán với động từ 使う (sử dụng).', modelSentence: '試験中にスマートフォンを使ってはいけません！', explanation: 'Lời cấm đoán nghiêm khắc dựa trên nội quy phòng thi.' },
      { context: 'Ngữ cảnh 2: Bạn muốn hỏi đồng nghiệp xem mình có thể mượn chiếc bút trên bàn không.', prompt: 'Hãy hỏi xin phép với động từ 借りる (mượn).', modelSentence: 'このペン、ちょっと借りてもいいですか？', explanation: 'Hỏi xin phép một cách khiêm tốn trước khi động vào đồ người khác.' },
      { context: 'Ngữ cảnh 3: Biển báo cấm hút thuốc ở trạm xăng.', prompt: 'Hãy đặt câu cảnh báo với động từ 吸う (hút thuốc).', modelSentence: '危険ですから、ここでタバコを吸ってはいけません。', explanation: 'Cảnh báo an toàn tuyệt đối.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 私はタバコを吸ってはいけません (Tự cấm bản thân một cách gượng gạo)',
        correctSentence: '○ 私は医者に止められているので、タバコを吸わないようにしています',
        whyWrong: 'てはいけません là lời cấm áp đặt từ bề trên/quy tắc lên người khác. Tự nói về thói quen kiêng cữ của bản thân thì dùng V-nai you ni shite iru.'
      }
    ]
  },
  {
    id: 'gram-minna-3',
    level: 'N4',
    textbookSource: 'Minna no Nihongo Sơ cấp',
    lessonNumber: 'Bài 29 - Minna II',
    grammar: '~ています (Tự động từ) vs ~てあります (Tha động từ)',
    meaning: 'Trạng thái tự nhiên đang diễn ra vs Trạng thái có chủ đích chuẩn bị của con người',
    essenceMeaning: {
      coreMindset: 'Tư duy "Chủ thể & Dấu vết hành vi (Intention vs State)". Tự động từ + ています miêu tả bức tranh trước mắt người quan sát một cách khách quan (cửa đang mở, đèn đang sáng). Trong khi Tha động từ + てあります nhấn mạnh rằng có ai đó ĐÃ CỐ TÌNH làm việc này từ trước để phục vụ một mục đích cụ thể.',
      literalVsReal: 'Nghĩa đen: "Đang ở trạng thái đó" vs "Đã được làm sẵn và còn nguyên đó" -> Bẫy phân biệt kinh điển nhất của người học.'
    },
    connectionRules: [
      { form: 'Tự động từ (Jidoushi) + が', rule: 'Noun が + Tự động từ-te + います', example: '窓が開いています (Cửa sổ đang mở - chỉ miêu tả hiện trạng).' },
      { form: 'Tha động từ (Tadoushi) + が', rule: 'Noun が + Tha động từ-te + あります', example: '窓が開けてあります (Cửa sổ đã được mở sẵn - để thông thoáng phòng).' }
    ],
    comparison: {
      confusingWith: 'Tha động từ + ています (Hành động đang tiếp diễn)',
      keyDifference: 'Tha động từ + ています (đang viết báo cáo: レポートを書いています - người đang cầm bút viết). Còn Tha động từ + てあります (báo cáo đã được viết sẵn rồi: レポートが書いてあります - nhấn mạnh kết quả chuẩn bị).',
      sideBySide: [
        { structure: 'Tự động từ + ています', usage: 'Miêu tả trạng thái tĩnh khách quan trước mắt (cửa vỡ, điện bật).', nuance: 'Khách quan, không rõ ai làm.' },
        { structure: 'Tha động từ + てあります', usage: 'Nhấn mạnh kết quả của hành động có mục đích chuẩn bị từ trước.', nuance: 'Chủ đích chuẩn bị sẵn sàng.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Bước vào phòng họp, bạn thấy lịch trình dự án đã được ghim ngay ngắn trên bảng trắng.', prompt: 'Hãy dùng tha động từ はる (dán/ghim) với ~てあります.', modelSentence: 'ホワイトボードに今週のスケジュールが貼ってあります。', explanation: 'Có ai đó đã cố tình chuẩn bị dán sẵn lịch trình.' },
      { context: 'Ngữ cảnh 2: Bạn thấy chiếc túi của ai đó bị rơi trên sàn xe buýt.', prompt: 'Hãy dùng tự động từ おちる (rơi) với ~ています.', modelSentence: '足元に誰かのカバンが落ちていますよ。', explanation: 'Miêu tả hiện trạng khách quan trước mắt.' },
      { context: 'Ngữ cảnh 3: Đã đặt trước nhà hàng cho buổi tiệc tối nay.', prompt: 'Hãy dùng tha động từ よやくする (đặt chỗ) với ~てあります.', modelSentence: '今夜のレストランはもう予約してありますから、大丈夫です。', explanation: 'Việc đặt chỗ đã được chuẩn bị xong xuôi.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× ドアが開けています (Dùng tha động từ với ています để tả cửa)',
        correctSentence: '○ ドアが開いています (Tự động từ 開く) hoặc ドアが開けてあります',
        whyWrong: 'Tha động từ 開ける đi với ています nghĩa là "ai đó ĐANG lấy tay mở cửa". Nếu chỉ nhìn thấy cánh cửa ở trạng thái mở, bắt buộc phải dùng tự động từ 開く -> 開いています.'
      }
    ]
  },
  {
    id: 'gram-minna-4',
    level: 'N4',
    textbookSource: 'Minna no Nihongo Sơ cấp',
    lessonNumber: 'Bài 43 - Minna II',
    grammar: '~そうです (Dự đoán / Dấu hiệu sắp sửa)',
    meaning: 'Có vẻ như sắp... / Trông có vẻ... (Đánh giá trực quan tức thời)',
    essenceMeaning: {
      coreMindset: 'Tư duy "Trực giác thị giác chưa qua chứng thực". Khi người Nhật nhìn thấy một hiện tượng mắt thấy tai nghe ngay trước mặt (trời đen kịt, cành cây trĩu quả), não bộ họ đưa ra phán đoán tức thì "sắp xảy ra đến nơi".',
      literalVsReal: 'Nghĩa đen: "Có tướng mạo/bộ dạng như vậy" -> Nghĩa thực tế: "Trông sắp sửa / Nhìn có vẻ".'
    },
    connectionRules: [
      { form: 'Động từ V (Bỏ masu)', rule: 'V-masu (bỏ masu) + そうです', example: '今にも雨が降りそうです (Trông như sắp mưa đến nơi rồi).' },
      { form: 'Tính từ đuôi い (Bỏ i)', rule: 'A-i (bỏ い) + そうです (Riêng いい -> よさそう)', example: 'このケーキ、とても美味しそうですね (Bánh này trông ngon thế!).' },
      { form: 'Tính từ đuôi な (Bỏ na)', rule: 'A-na (bỏ な) + そうです', example: '彼はいつも元気そうですね (Anh ấy trông có vẻ khỏe mạnh năng nổ nhỉ).' }
    ],
    comparison: {
      confusingWith: '~そうです (Truyền đạt: Nghe nói là...) - Bài 47 Minna II',
      keyDifference: 'Cực kỳ dễ nhầm: V-thể từ điển + そうです là "Nghe đài/người ta nói là..." (Truyền đạt). Còn V-bỏ masu + そうです là "Mắt tôi nhìn thấy trông sắp..." (Trực quan). Ví dụ: 雨が降るそうです (Nghe nói sẽ mưa) vs 雨が降りそうです (Trời âm u trông sắp mưa rồi).',
      sideBySide: [
        { structure: 'V-bỏ masu + そうです', usage: 'Phán đoán bằng mắt nhìn trực tiếp tại thời điểm nói.', nuance: 'Sắp xảy ra, trông có vẻ thế.' },
        { structure: 'Thể thông thường + そうです', usage: 'Truyền đạt lại thông tin nghe được từ báo đài, người khác.', nuance: 'Nghe nói là... (nguồn gián tiếp).' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Nhìn túi nylon đựng đồ siêu thị của bạn sắp bị đứt quai.', prompt: 'Hãy dùng động từ やぶれる (rách/đứt) với ~そうです để cảnh báo.', modelSentence: '袋が破れそうですよ！気をつけて！', explanation: 'Trực giác nhìn thấy dấu hiệu nguy cơ sắp xảy ra.' },
      { context: 'Ngữ cảnh 2: Thấy một chiếc áo len trông có vẻ rất ấm áp trong cửa hàng mùa đông.', prompt: 'Hãy dùng tính từ あたたかい (ấm áp) với ~そうです.', modelSentence: 'このセーター、とても暖かそうですね。', explanation: 'Đánh giá vẻ ngoài bằng thị giác.' },
      { context: 'Ngữ cảnh 3: Đồng nghiệp ngáp liên tục, mắt lờ đờ.', prompt: 'Hãy dùng tính từ ねむい (buồn ngủ) với ~そうです.', modelSentence: '田中さん、昨夜あまり寝ていなくて眠そうですね。', explanation: 'Cảm nhận trạng thái người khác qua cử chỉ.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 明日は雨が降りそうです (Dự đoán thời tiết ngày mai theo đài báo)',
        correctSentence: '○ 明日は雨が降るそうです (Truyền đạt) hoặc 降るでしょう',
        whyWrong: '降るそうです là nghe dự báo thời tiết. Không thể dùng 降りそうです cho ngày mai vì mắt bạn không thể "nhìn thấy dấu hiệu đám mây ngày mai" ngay tại chỗ được.'
      }
    ]
  },

  // MIMIKARAOBOERU N3 & MINNA TRUNG CẤP
  {
    id: 'gram-mimi-n3-1',
    level: 'N3',
    textbookSource: 'Mimikaraoboeru N3',
    lessonNumber: 'Unit 1 - Mimi N3',
    grammar: '~うちに (~uchi ni)',
    meaning: 'Trong lúc còn... / Tranh thủ khi... / Trong khi đang... thì bỗng nhiên...',
    essenceMeaning: {
      coreMindset: 'Tư duy "Tận dụng khoảng thời gian hữu hạn trước khi điều kiện thay đổi". Người Nhật dùng うちに với 2 sắc thái lớn: 1. Tranh thủ làm việc gì đó khi trạng thái thuận lợi vẫn còn (trời chưa mưa, còn trẻ, trà còn nóng). 2. Trong khi một hành động đang kéo dài liên tục, một sự biến đổi bất ngờ diễn ra ngoài ý muốn.',
      literalVsReal: 'Nghĩa đen: "Trong nội bộ khoảng thời gian đó" -> Nghĩa thực tế: "Nhân lúc còn... / Trong lúc đang... thì bất ngờ...".'
    },
    connectionRules: [
      { form: 'Động từ V (Khẳng định/Phủ định)', rule: 'V-dic / V-nai / V-teiru + うちに', example: '忘れないうちにメモしておこう (Tranh thủ lúc chưa quên thì ghi chú lại nào).' },
      { form: 'Tính từ đuôi い', rule: 'A-i + うちに', example: '温かいうちに召し上がってください (Xin hãy dùng bữa khi còn đang nóng hổi).' },
      { form: 'Tính từ đuôi な', rule: 'A-na + な + うちに', example: '元気なうちに世界一周旅行に行きたい (Tranh thủ lúc còn khỏe mạnh muốn đi vòng quanh thế giới).' },
      { form: 'Danh từ (Noun)', rule: 'Noun + の + うちに', example: '休みのうちにやりたいことを全部やる (Tranh thủ kỳ nghỉ làm hết những gì muốn làm).' }
    ],
    comparison: {
      confusingWith: '~間に (~aida ni)',
      keyDifference: '間に dùng cho một mốc thời gian khách quan có điểm bắt đầu và kết thúc cố định (ví dụ: trong khi mẹ đang ngủ 間に, tôi đi siêu thị). Còn うちに có sắc thái tâm lý chủ quan: "Nếu không tranh thủ làm ngay thì lát nữa trạng thái đó sẽ biến mất không làm được nữa" (trà nguội mất, già mất).',
      sideBySide: [
        { structure: '~うちに', usage: 'Nhấn mạnh tính khẩn trương: nếu quá thời điểm này thì sẽ tiếc nuối.', nuance: 'Chủ quan, tranh thủ tận dụng thời cơ.' },
        { structure: '~間に', usage: 'Chỉ đơn thuần là việc B diễn ra trong khoảng thời gian việc A đang tiếp diễn.', nuance: 'Khách quan, mốc thời gian thực tế.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Đĩa mì ramen vừa được bưng ra, bạn nhắc bạn mình ăn ngay.', prompt: 'Hãy dùng tính từ あつい (nóng) với ~うちに.', modelSentence: 'スープが熱いうちに早く食べてね！冷めたら美味しくないよ。', explanation: 'Nhắc nhở tranh thủ thưởng thức khi điều kiện thơm ngon vẫn còn.' },
      { context: 'Ngữ cảnh 2: Bạn đang sống tại Nhật Bản, bạn muốn đi leo núi Phú Sĩ trước khi về nước.', prompt: 'Hãy dùng cụm từ 日本にいる (ở Nhật) với ~うちに.', modelSentence: '日本にいるうちに、一度は富士山に登ってみたい。', explanation: 'Khoảng thời gian lưu trú ở Nhật là có hạn.' },
      { context: 'Ngữ cảnh 3: Ngồi nghe nhạc du dương một lúc thì tự nhiên thiếp đi ngủ mất lúc nào không hay.', prompt: 'Hãy dùng V-teiru với ~うちに để diễn tả sự thay đổi ngoài ý muốn.', modelSentence: '音楽を聴いているうちに、いつの間にか眠ってしまった。', explanation: 'Sắc thái thứ 2: sự biến đổi diễn ra trong lúc đang làm V.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 授業が始まったうちに、教室に入った (Dùng cho mốc điểm ngắn ngủi)',
        correctSentence: '○ 授業が始まる前に / 授業の間に',
        whyWrong: 'うちに đòi hỏi một khoảng trạng thái có độ dài (trong lúc chưa bắt đầu thì được: 始まらないうちに). Không đi với hành động xảy ra trong chớp mắt như 始まった.'
      }
    ]
  },
  {
    id: 'gram-mimi-n3-2',
    level: 'N3',
    textbookSource: 'Mimikaraoboeru N3',
    lessonNumber: 'Unit 2 - Mimi N3',
    grammar: '~わけがない (~wake ga nai)',
    meaning: 'Tuyệt đối không thể nào... / Làm sao mà... cho được!',
    essenceMeaning: {
      coreMindset: 'Tư duy "Bác bỏ bằng lý trí & chứng cứ không thể chối cãi". Người Nhật chỉ dùng わけがない khi họ có trong tay một chân lý hiển nhiên hoặc logic vững vàng, khiến khả năng đó là con số 0 tròn trĩnh.',
      literalVsReal: 'Nghĩa đen: "Không tồn tại nguyên cớ/lý lẽ nào" -> Nghĩa thực tế: "Chắc chắn 100% không thể xảy ra".'
    },
    connectionRules: [
      { form: 'Động từ V (Thể thông thường)', rule: 'V-dic / V-nai / V-ta + わけがない', example: 'あんな真面目な人が遅刻するわけがない (Người nghiêm túc thế làm sao đi muộn được).' },
      { form: 'Tính từ đuôi い', rule: 'A-i + わけがない', example: 'こんなに安くて美味しいわけがない (Rẻ thế này sao ngon nổi chứ).' },
      { form: 'Tính từ đuôi な', rule: 'A-na + な + わけがない', example: '試験の前日なのに、暇なわけがない (Sát ngày thi sao rảnh rỗi được).' },
      { form: 'Danh từ (Noun)', rule: 'Noun + である / の + わけがない', example: '彼が犯人であるわけがない (Anh ta làm sao có thể là thủ phạm được).' }
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
      }
    ]
  },
  {
    id: 'gram-minna-chu-1',
    level: 'N3',
    textbookSource: 'Minna no Nihongo Trung cấp',
    lessonNumber: 'Bài 3 - Minna Trung cấp I',
    grammar: '~おかげで (~okage de) vs ~せいで (~sei de)',
    meaning: 'Nhờ có ơn... (Kết quả tốt) vs Tại vì / Do tại... (Kết quả xấu, đổ lỗi)',
    essenceMeaning: {
      coreMindset: 'Tư duy "Ơn nghĩa (On - 恩) & Đổ lỗi trách nhiệm". Trong văn hóa Nhật Bản, khi nhận được điều tốt lành, người ta lập tức quy công cho ơn huệ của người khác hoặc thần linh (Kage = bóng râm che chở). Ngược lại, Sei = nguồn cơn tội lỗi, dùng khi ấm ức trách móc nguyên nhân gây ra hậu quả tồi tệ.',
      literalVsReal: 'Nghĩa đen: "Nhờ bóng râm che mát của..." vs "Do tội lỗi của..." -> Phân biệt rạch ròi 2 thái cực cảm xúc tích cực và tiêu cực.'
    },
    connectionRules: [
      { form: 'Thể thông thường (Futsuukei)', rule: 'V/A/N + おかげで (Noun + のおかげで / A-na + なおかげで)', example: '先生が熱心に教えてくださったおかげで、N3に合格できました。' },
      { form: 'Thể thông thường (Futsuukei)', rule: 'V/A/N + せいで (Noun + のせいで / A-na + なせいで)', example: '台風のせいで、楽しみにしていた旅行が中止になった。' }
    ],
    comparison: {
      confusingWith: '~ために (~tame ni - Chỉ nguyên nhân)',
      keyDifference: 'ために là từ chỉ nguyên nhân khách quan trung tính (do động đất tàu dừng). Còn おかげで luôn kèm lòng biết ơn sâu sắc (kết quả may mắn), và せいで luôn kèm cảm giác bực bội, oán trách (kết quả xui xẻo).',
      sideBySide: [
        { structure: '~おかげで', usage: 'Nguyên nhân đem lại kết quả vui vẻ, thành công, may mắn.', nuance: 'Biết ơn, cảm kích.' },
        { structure: '~せいで', usage: 'Nguyên nhân dẫn tới thất bại, thiệt hại, phiền toái.', nuance: 'Oán giận, đổ lỗi trách móc.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Bạn đỗ phỏng vấn xin việc nhờ bạn thân luyện tập cùng.', prompt: 'Hãy dùng ~おかげで để cảm ơn bạn bè.', modelSentence: '君が面接の練習に付き合ってくれたおかげで、無事に合格できたよ！', explanation: 'Bày tỏ lòng biết ơn chân thành về kết quả tốt đẹp.' },
      { context: 'Ngữ cảnh 2: Đến muộn cuộc hẹn quan trọng do tàu điện bị trễ chuyến.', prompt: 'Hãy dùng ~せいで để giải thích nguyên nhân khách quan gây bực mình.', modelSentence: '電車の遅延のせいで、約束の時間に遅れてしまいました。', explanation: 'Đổ lỗi do biến cố xe điện.' },
      { context: 'Ngữ cảnh 3: Mỉa mai một ai đó làm hỏng chuyện (nói đểu dùng おかげで).', prompt: 'Người Nhật đôi khi mỉa mai bằng おかげで, hãy thử đặt câu.', modelSentence: 'お前の余計な一言のおかげで、雰囲気が台無しになったよ (Mỉa mai).', explanation: 'Ngoại lệ: dùng おかげで với giọng điệu mỉa mai châm biếm.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 事故のおかげで、怪我をして入院した (Dùng nhầm おかげ cho tai nạn thương tích)',
        correctSentence: '○ 事故のせいで、怪我をして入院した',
        whyWrong: 'Bị thương nhập viện là điều tồi tệ, không thể "cảm ơn" vụ tai nạn được, bắt buộc phải dùng せいで.'
      }
    ]
  },

  // MIMIKARAOBOERU N2
  {
    id: 'gram-mimi-n2-1',
    level: 'N2',
    textbookSource: 'Mimikaraoboeru N2',
    lessonNumber: 'Unit 3 - Mimi N2',
    grammar: '~てたまらない (~te tamaranai)',
    meaning: '...vô cùng / không thể chịu nổi / phát điên lên được!',
    essenceMeaning: {
      coreMindset: 'Tư duy "Cảm xúc hoặc cảm giác sinh lý trào dâng từ sâu bên trong cơ thể mà ý chí lý trí không thể kìm nén (tamaru = chịu đựng, kìm giữ)". Người Nhật dùng cấu trúc này để diễn tả những khát khao, nỗi nhớ, cơn đau hay sự lo âu trào dâng tự nhiên.',
      literalVsReal: 'Nghĩa đen: "Không thể nhẫn nhịn nổi" -> Nghĩa thực tế: "Rất... đến mức ngột ngạt / cực kỳ muốn...".'
    },
    connectionRules: [
      { form: 'Động từ V (Mong muốn)', rule: 'V-tai -> V-takute + たまらない', example: '家族に会いたくてたまらない (Nhớ gia đình không chịu nổi).' },
      { form: 'Tính từ đuôi い (Cảm giác/Cảm xúc)', rule: 'A-kute + たまらない', example: '喉が渇いてたまらない (Khát khô cả cổ không chịu được).' },
      { form: 'Tính từ đuôi な (Tâm trạng)', rule: 'A-de + たまらない', example: '合格できるか心配でたまらない (Lo lắng vô cùng không biết có đỗ hay không).' }
    ],
    comparison: {
      confusingWith: '~てならない (~te naranai)',
      keyDifference: 'てたまらない dùng cho cảm giác sinh lý cụ thể (nóng, ngứa, đói, khát) hoặc cảm xúc cá nhân trực tiếp. Còn てならない thường dùng cho linh cảm tâm linh, dự cảm mơ hồ hoặc cảm xúc triết lý sâu xa (ví dụ: 気になってならない - cảm giác bứt rứt không yên; 哀れに思えてならない - cảm thấy xót xa vô hạn).',
      sideBySide: [
        { structure: '~てたまらない', usage: 'Cảm giác sinh lý (đói, khát) & cảm xúc trào dâng trực tiếp.', nuance: 'Bản năng cơ thể, bức bối, không kìm được.' },
        { structure: '~てならない', usage: 'Dự cảm, linh tính, cảm xúc trừu tượng trang trọng hơn.', nuance: 'Ý thức tự nhiên trào lên từ đáy lòng một cách sâu lắng.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Chạy bộ 10km dưới trời nắng gắt giữa mùa hè và hết nước.', prompt: 'Hãy dùng tính từ "nóng" hoặc "khát" với ~てたまらない.', modelSentence: '喉が渇いてたまらないから、冷たい水が飲みたい！', explanation: 'Diễn tả cảm giác sinh lý tự nhiên cực độ.' },
      { context: 'Ngữ cảnh 2: Vừa nghe tin người bạn thân bị tai nạn nhập viện.', prompt: 'Hãy diễn tả sự lo lắng với ~心配でたまらない.', modelSentence: '友人の容態がどうなのか、心配でたまらない。', explanation: 'Cảm xúc lo âu không thể dằn lòng.' },
      { context: 'Ngữ cảnh 3: Xa quê hương đã 3 năm chưa được ăn món mẹ nấu.', prompt: 'Hãy dùng V-takute + たまらない để diễn tả mong ước.', modelSentence: 'お母さんが作った料理が食べたくてたまらない。', explanation: 'Nỗi thèm và nỗi nhớ gia đình tha thiết.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 彼はお腹が空いてたまらない (Dùng trực tiếp cho ngôi thứ 3 mà không chia thể gián tiếp)',
        correctSentence: '○ 彼は〜たまらないようだ / たまらないらしい',
        whyWrong: 'Trong tiếng Nhật, cảm xúc nội tâm của bản thân mới dùng trực tiếp. Khi miêu tả người khác phải thêm ようだ (có vẻ) hoặc らしい (nghe nói).'
      }
    ]
  },
  {
    id: 'gram-mimi-n2-2',
    level: 'N2',
    textbookSource: 'Mimikaraoboeru N2',
    lessonNumber: 'Unit 5 - Mimi N2',
    grammar: '~にすぎない (~ni suginai)',
    meaning: 'Chẳng qua chỉ là... / Không hơn không kém / Chỉ dừng lại ở mức...',
    essenceMeaning: {
      coreMindset: 'Tư duy "Thu hẹp đánh giá, không để bị thổi phồng". Động từ 過ぎる nghĩa là vượt quá, và にすぎない nghĩa là "hoàn toàn không vượt quá một giới hạn nhỏ bé tầm thường". Người Nhật dùng cấu trúc này để thể hiện sự khiêm tốn về thành tựu của mình hoặc hạ thấp bản chất của một sự việc bị làm quá lên.',
      literalVsReal: 'Nghĩa đen: "Không vượt quá điều đó" -> Nghĩa thực tế: "Chỉ là... mà thôi, đừng quan trọng hóa".'
    },
    connectionRules: [
      { form: 'Động từ V (Thể thông thường)', rule: 'V-dic / V-ta + にすぎない', example: '私は自分の義務を果たしたにすぎません (Tôi chỉ làm tròn bổn phận của mình mà thôi).' },
      { form: 'Danh từ (Noun)', rule: 'Noun + にすぎない (Không cần trợ từ)', example: 'それは単なる噂にすぎないから、気にしないで (Đó chỉ là lời đồn đơn thuần thôi, đừng bận tâm).' }
    ],
    comparison: {
      confusingWith: '~にほかならない (~ni hokanaranai)',
      keyDifference: '2 cấu trúc có vẻ ngoài tựa tựa nhưng ý nghĩa hoàn toàn đối lập! にすぎない là hạ thấp (chỉ là thứ nhỏ nhoi). Còn にほかならない là khẳng định tột cùng: "Chính là... không gì khác ngoài...!" (ví dụ: Thành công này chính là nhờ sự nỗ lực: 努力の結果にほかならない).',
      sideBySide: [
        { structure: '~にすぎない', usage: 'Giảm nhẹ mức độ, coi đó là điều bình thường không đáng kể.', nuance: 'Chẳng qua chỉ là, tầm thường.' },
        { structure: '~にほかならない', usage: 'Nhấn mạnh nguyên nhân duy nhất, quyết định nhất.', nuance: 'Chính xác là, đích thực là.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Được khen ngợi vì một phát hiện nhỏ trong phòng thí nghiệm.', prompt: 'Hãy dùng ~にすぎない với cụm từ "bước đầu tiên" (第一歩) để bày tỏ sự khiêm tốn.', modelSentence: 'これは長い研究の第一歩にすぎません。これからが本番です。', explanation: 'Khiêm nhường đúng mực văn hóa công sở Nhật.' },
      { context: 'Ngữ cảnh 2: Trấn an bạn bè khi họ hoang mang vì đọc tin đồn giật gân trên mạng xã hội.', prompt: 'Hãy dùng danh từ 噂 (tin đồn) hoặc 憶測 (suy đoán) với ~にすぎない.', modelSentence: 'ネットの憶測にすぎないから、公式発表を待とう。', explanation: 'Khẳng định tin đồn không có giá trị sự thật.' },
      { context: 'Ngữ cảnh 3: Đánh giá một trò chơi may rủi.', prompt: 'Hãy dùng cụm từ "trò chơi may mắn" (運試し) với ~にすぎない.', modelSentence: '宝くじなんて、運試しにすぎないよ。', explanation: 'Xem nhẹ trò cờ bạc may rủi.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 彼は社長にすぎない (Nói về chức vị cao nhất công ty)',
        correctSentence: '○ 彼は一社員にすぎない (Chỉ là một nhân viên quèn) / 彼は単なる名目上の社長にすぎない (Chỉ là giám đốc bù nhìn)',
        whyWrong: 'にすぎない luôn dùng để giảm nhẹ mức độ. Nếu dùng cho chức vị cao như 社長 thì câu đó mang hàm ý mỉa mai "chỉ là bù nhìn trên danh nghĩa".'
      }
    ]
  },
  {
    id: 'gram-mimi-n2-3',
    level: 'N2',
    textbookSource: 'Mimikaraoboeru N2',
    lessonNumber: 'Unit 7 - Mimi N2',
    grammar: '~ざるを得ない (~zaru o enai)',
    meaning: 'Đành phải... / Buộc phải... / Không thể không làm (Dù trong lòng không hề muốn)',
    essenceMeaning: {
      coreMindset: 'Tư duy "Thế cục ép buộc, ý chí cá nhân phải nhượng bộ". Cấu trúc xuất phát từ tiếng Nhật cổ (ざる = ない: không). "Không làm thì không thể được (không đặng)". Người Nhật dùng cấu trúc này khi đối diện với tình thế tiến thoái lưỡng nan: dù bản thân phản đối hay đau xót nhưng hoàn cảnh bắt buộc phải chấp nhận hành động đó.',
      literalVsReal: 'Nghĩa đen: "Không thể có được việc không làm" -> Nghĩa thực tế: "Hoàn cảnh ép buộc đành phải làm".'
    },
    connectionRules: [
      { form: 'Động từ V (Chia thể Nai bỏ nai)', rule: 'V-nai (bỏ ない) + ざるを得ない', example: '証拠がある以上、罪を認めざるを得ない (Khi chứng cứ đã rõ, đành phải nhận tội).' },
      { form: 'Động từ する (Bất quy tắc đặc biệt)', rule: 'する -> せざるを得ない (Bẫy đề thi JLPT số 1!)', example: '計画を変更せざるを得ない (Đành phải thay đổi kế hoạch).' }
    ],
    comparison: {
      confusingWith: '~ねばならない (~neba naranai) & ~なければならない',
      keyDifference: 'なければならない là nghĩa vụ đạo đức/pháp lý bình thường (phải đóng thuế, phải làm bài tập). Còn ざるを得ない mang nặng tâm trạng bất đắc dĩ: "Tôi cực kỳ ghét/không muốn làm điều này, nhưng nếu không làm thì hậu quả sẽ khôn lường nên đành cắn răng làm".',
      sideBySide: [
        { structure: '~ざるを得ない', usage: 'Tình huống bất đắc dĩ, miễn cưỡng bị hoàn cảnh dồn vào chân tường.', nuance: 'Tiếc nuối, cay đắng, buộc phải chấp nhận.' },
        { structure: '~なければならない', usage: 'Bổn phận, trách nhiệm thông thường của công dân/học sinh.', nuance: 'Quy chuẩn trung tính, việc đương nhiên phải làm.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Trời bão tuyết dữ dội, các chuyến bay bị hủy toàn bộ.', prompt: 'Hãy dùng động từ 中止する (hủy bỏ) với ~せざるを得ない.', modelSentence: 'この悪天候では、楽しみにしていたイベントも中止せざるを得ない。', explanation: 'Tình thế thời tiết ép buộc hủy bỏ sự kiện.' },
      { context: 'Ngữ cảnh 2: Công ty cắt giảm ngân sách, bạn phải chia tay một dự án tâm huyết.', prompt: 'Hãy dùng động từ あきらめる (từ bỏ) với ~ざるを得ない.', modelSentence: '予算削減のため、長年温めてきた企画を諦めざるを得なかった。', explanation: 'Bất đắc dĩ phải từ bỏ điều tâm huyết.' },
      { context: 'Ngữ cảnh 3: Khách hàng chỉ ra lỗi sai mười mươi trong hợp đồng.', prompt: 'Hãy dùng động từ 謝罪する (xin lỗi) với ~せざるを得ない.', modelSentence: 'こちらの不手際なので、誠心誠意謝罪せざるを得ない。', explanation: 'Buộc phải cúi đầu nhận lỗi.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 勉強しざるを得ない (Sai cách chia động từ する)',
        correctSentence: '○ 勉強せざるを得ない (Bắt buộc là せざるを得ない)',
        whyWrong: 'Động từ する khi ghép với ~ざるを得ない KHÔNG chia thành し mà chuyển thành せざるを得ない. Đây là bẫy chia thể 100% người ra đề JLPT hay gài!'
      }
    ]
  },

  // MIMIKARAOBOERU N1
  {
    id: 'gram-mimi-n1-1',
    level: 'N1',
    textbookSource: 'Mimikaraoboeru N1',
    lessonNumber: 'Unit 2 - Mimi N1',
    grammar: '~を皮切りに（して） (~o kawakiri ni shite)',
    meaning: 'Khởi đầu với... rồi liên tiếp bùng nổ theo sau (Mở màn cho một chuỗi sự kiện)',
    essenceMeaning: {
      coreMindset: 'Tư duy "Vết cắt đầu tiên mở màn cho sự lan tỏa mạnh mẽ". Từ "皮切り" (Kawakiri) vốn xuất phát từ thuật châm cứu ngải cứu (moxibustion) truyền thống Nhật Bản: vết bỏng châm cứu đầu tiên lên da (da mở màn) luôn là nhát đau nhất, sau đó cơ thể quen dần. Trong ngữ pháp, nó diễn tả một phát pháo lệnh đầu tiên mở đường cho hàng loạt sự kiện quy mô lớn dồn dập diễn ra.',
      literalVsReal: 'Nghĩa đen: "Lấy vết cắt da đầu tiên làm mốc" -> Nghĩa thực tế: "Mở đầu bằng... và sau đó bùng nổ liên tiếp các sự kiện tương tự".'
    },
    connectionRules: [
      { form: 'Danh từ (Noun)', rule: 'Noun + を皮切りに（して） / を皮切りとして', example: '東京公演を皮切りに、全国ツアーがスタートした。' }
    ],
    comparison: {
      confusingWith: '~をはじめ（として） (~o hajime to shite)',
      keyDifference: 'をはじめ dùng để đưa ra một ví dụ tiêu biểu nhất trong tập hợp (ví dụ: Gia đình tôi, đầu tiên phải kể đến bố...). Còn を皮切りに nhấn mạnh yếu tố THỜI GIAN VÀ SỰ BÙNG NỔ LAN RỘNG liên tiếp của cùng một hành động theo sau.',
      sideBySide: [
        { structure: '~を皮切りに', usage: 'Sự kiện mở màn kích hoạt một chuỗi hành động cùng loại lan tỏa.', nuance: 'Năng động, bùng nổ, chuỗi diễn tiến theo thời gian.' },
        { structure: '~をはじめ', usage: 'Liệt kê đại diện tiêu biểu nhất trong một danh sách.', nuance: 'Phân loại tập hợp, tĩnh hơn.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Một ca sĩ thần tượng bắt đầu tour diễn vòng quanh châu Á từ concert tại Tokyo Dome.', prompt: 'Hãy dùng ~を皮切りに với danh từ 東京公演 (buổi diễn Tokyo).', modelSentence: '東京ドーム公演を皮切りに、アジア主要都市でのワールドツアーが幕を開けた。', explanation: 'Khai màn cho chuỗi lưu diễn toàn cầu.' },
      { context: 'Ngữ cảnh 2: Một sản phẩm trà sữa nổi tiếng mở chi nhánh đầu tiên ở quận Shibuya rồi mở thêm 50 quán khắp nước.', prompt: 'Hãy dùng ~を皮切りに để mô tả sự mở rộng chuỗi cửa hàng.', modelSentence: '渋谷店のオープンを皮切りに、全国展開を急速に進めている。', explanation: 'Khởi đầu cho chuỗi bành trướng kinh doanh.' },
      { context: 'Ngữ cảnh 3: Một cuộc biểu tình nổ ra từ thủ đô và lan sang các thành phố lân cận.', prompt: 'Hãy dùng ~を皮切りに với danh từ 首都のデモ (biểu tình ở thủ đô).', modelSentence: '首都での抗議活動を皮切りに、全国各地で市民運動が活発化した。', explanation: 'Phát súng hiệu cho làn sóng xã hội.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 雨が降ったのを皮切りに、台風が来た (Dùng cho hiện tượng thiên tai ngẫu nhiên)',
        correctSentence: '○ 首相の辞任を皮切りに、政局が大きく動き出した',
        whyWrong: 'を皮切りに thường dùng cho các sự kiện xã hội, hoạt động quy mô có chủ đích hoặc làn sóng hành động, không dùng cho hiện tượng thiên tai ngẫu nhiên thuần túy.'
      }
    ]
  },
  {
    id: 'gram-mimi-n1-2',
    level: 'N1',
    textbookSource: 'Mimikaraoboeru N1',
    lessonNumber: 'Unit 4 - Mimi N1',
    grammar: '~極まりない (~kiwamarinai) / ~の極み (~no kiwami)',
    meaning: 'Cực kỳ... / Hết sức... / Đạt đến đỉnh điểm của sự... (Trang trọng văn viết)',
    essenceMeaning: {
      coreMindset: 'Tư duy "Đạt đến giới hạn tột cùng không thể đo lường hơn được nữa". Chữ Hán CỰC (極) tượng trưng cho đỉnh núi cao nhất hoặc điểm giới hạn của vũ trụ. Người Nhật dùng cấu trúc này trong văn nghị luận hoặc diễn thuyết ngoại giao để miêu tả một trạng thái cảm xúc (vui sướng, phẫn nộ, vô lễ) đạt đến đỉnh điểm 100%.',
      literalVsReal: 'Nghĩa đen: "Không có giới hạn cùng cực nào hơn" -> Nghĩa thực tế: "Vô cùng... / Tột cùng của sự...".'
    },
    connectionRules: [
      { form: 'Tính từ đuôi な (A-na)', rule: 'A-na + 極まりない (hoặc A-na + 極まる)', example: 'あのような不誠実な対応は、失礼極まりない (Cách ứng xử thiếu thành ý như vậy là vô lễ tột cùng).' },
      { form: 'Danh từ (Noun)', rule: 'Noun + の極み', example: 'このような名誉ある賞をいただき、感激の極みです (Được nhận giải thưởng danh giá này, tôi xúc động khôn xiết).' }
    ],
    comparison: {
      confusingWith: '~てたまらない (~te tamaranai - N2/N3)',
      keyDifference: 'てたまらない là văn nói đời thường miêu tả cảm giác sinh lý cá nhân (đói, khát, nhớ người yêu). Còn 極まりない / の極み là văn phong tao nhã, trang trọng đỉnh cao (Formal/Literary), thường dùng trong văn bản chính luận, thư từ ngoại giao hoặc phát biểu trước công chúng.',
      sideBySide: [
        { structure: '~極まりない / の極み', usage: 'Văn bản trang trọng, phê phán gay gắt hoặc bày tỏ cảm xúc tột đỉnh.', nuance: 'Tao nhã, triết lý, uy nghi.' },
        { structure: '~てたまらない', usage: 'Hội thoại đời thường, cảm xúc sinh lý bộc phát.', nuance: 'Gần gũi, đời thường.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Lên án một hành vi lừa đảo người già trắng trợn trong bài xã luận.', prompt: 'Hãy dùng tính từ ひきょう (hèn hạ) hoặc 危険 (nguy hiểm) với ~極まりない.', modelSentence: '高齢者を騙すような手口は、卑劣極まりない行為である。', explanation: 'Phê phán đạo đức ở cấp độ cao nhất.' },
      { context: 'Ngữ cảnh 2: Diễn thuyết khi nhận học bổng toàn phần danh giá của chính phủ Nhật.', prompt: 'Hãy dùng danh từ 光栄 (vinh dự) với ~の極み.', modelSentence: '日本政府奨学金を賜り、身に余る光栄の極みでございます。', explanation: 'Bày tỏ lòng biết ơn tột bậc theo phong cách Keigo N1.' },
      { context: 'Ngữ cảnh 3: Một tài xế vừa bấm còi inh ỏi vừa vượt đèn đỏ suýt đâm vào người đi bộ.', prompt: 'Hãy dùng tính từ きけん (nguy hiểm) với ~極まりない.', modelSentence: '人通りの多い道での暴走運転は、危険極まりない。', explanation: 'Lên án hành vi coi thường tính mạng.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× お腹が空いて極まりない (Dùng cho cảm giác đói bụng)',
        correctSentence: '○ お腹が空いてたまらない / 死にそうだ',
        whyWrong: '極まりない không dùng cho các cảm giác sinh lý tầm thường hàng ngày như đói, buồn ngủ hay mệt mỏi.'
      }
    ]
  }
];

export const GRAMMAR_PRESETS: GrammarItem[] = Array.from(
  new Map(RAW_GRAMMAR_PRESETS.map((item) => [item.id, item])).values()
);

export const JLPT_QUESTION_PRESETS: { level: string; questions: JLPTQuestion[] }[] = [
  {
    level: 'N3',
    questions: [
      {
        id: 'q-n3-1',
        level: 'N3',
        question: 'あんなに練習したんだから、明日の試合、絶対に（　　）。',
        options: [
          { id: 'A', text: '勝つわけがない', isCorrect: false, analysis: 'SAI: "わけがない" nghĩa là tuyệt đối KHÔNG THẮNG, mâu thuẫn hoàn toàn với vế trước "đã luyện tập nhiều như thế".' },
          { id: 'B', text: '勝つはずがない', isCorrect: false, analysis: 'SAI: Giống A, phủ định việc chiến thắng là phi lý.' },
          { id: 'C', text: '負けるわけがない', isCorrect: true, analysis: 'ĐÚNG: "Đã luyện tập nhiều như thế thì làm sao mà THUA cho được (負けるわけがない)!" Khớp hoàn hảo về logic nhân quả.' },
          { id: 'D', text: '負けるにすぎない', isCorrect: false, analysis: 'SAI: "にすぎない" nghĩa là chỉ là/chẳng qua chỉ là, không tạo nên câu khích lệ hợp lý.' }
        ],
        speed30sTip: 'Mẹo 30 giây: Bắt từ khóa vế 1 "あんなに練習した" (tập nhiều thế) -> Vế 2 phải là kết quả tích cực. Muốn dùng phủ định "わけがない" thì động từ phải là "負ける" (thua) -> 負けるわけがない (sao thua được = nhất định thắng).',
        relatedKnowledge: 'Cấu trúc ~わけがない (Tuyệt đối không thể nào...). Phân biệt với ~わけではない (Không hẳn là...).'
      },
      {
        id: 'q-n3-2',
        level: 'N3',
        question: '父は毎朝、散歩（　　）パン屋に寄って朝食を買ってくる。',
        options: [
          { id: 'A', text: 'ついでに', isCorrect: true, analysis: 'ĐÚNG: Noun + の / V-dic + ついでに mang nghĩa "Nhân tiện làm việc A thì tiện thể làm luôn việc B". Ở đây bố đi dạo, tiện đường ghé tiệm bánh.' },
          { id: 'B', text: 'たびに', isCorrect: false, analysis: 'SAI: "たびに" nghĩa là "Mỗi lần... thì luôn...", không đi với sắc thái nhân tiện trên đường.' },
          { id: 'C', text: 'とおりに', isCorrect: false, analysis: 'SAI: "とおりに" nghĩa là "Theo đúng như...", không hợp nghĩa.' },
          { id: 'D', text: 'わりに', isCorrect: false, analysis: 'SAI: "わりに" nghĩa là "Dù... nhưng so ra lại...", biểu thị sự trái ngược ngạc nhiên.' }
        ],
        speed30sTip: 'Mẹo 30 giây: Đi dạo (散歩) + Ghé tiệm bánh (パン屋に寄る) là hành động tiện đường ghé qua -> Chọn ngay ついでに không cần suy nghĩ!',
        relatedKnowledge: 'Cấu trúc ~ついでに (Nhân tiện, tiện thể). So sánh với ~がてら (vừa làm việc A vừa kiêm làm việc B - trình độ N1/N2).'
      },
      {
        id: 'q-n3-3',
        level: 'N3',
        question: '日本に来た（　　）は、ぜひ富士山に登ってみたい。',
        options: [
          { id: 'A', text: 'からには', isCorrect: true, analysis: 'ĐÚNG: V-ta + からには nghĩa là "Một khi đã... thì nhất định/đương nhiên sẽ...". Đã cất công sang Nhật thì nhất định phải leo núi Phú Sĩ.' },
          { id: 'B', text: 'せいで', isCorrect: false, analysis: 'SAI: "せいで" dùng cho nguyên nhân dẫn tới hậu quả xấu.' },
          { id: 'C', text: 'おかげで', isCorrect: false, analysis: 'SAI: "おかげで" dùng cho kết quả đã hoàn thành nhờ ơn ai đó, không đi với mong muốn tương lai "〜てみたい".' },
          { id: 'D', text: '反面', isCorrect: false, analysis: 'SAI: "反面" nghĩa là "Mặt khác, ngược lại".' }
        ],
        speed30sTip: 'Mẹo 30 giây: Đuôi câu chứa nguyện vọng mạnh mẽ "〜てみたい / 〜べきだ / 〜つもりだ" đi kèm V-ta -> 90% chọn からには!',
        relatedKnowledge: 'Cấu trúc ~からには (Một khi đã... thì phải/sẽ...). Đồng nghĩa: ~以上は, ~上は.'
      },
      {
        id: 'q-n3-4',
        level: 'N3',
        question: 'この部屋は窓が小さくて、昼間でも暗い（　　）。',
        options: [
          { id: 'A', text: 'ことになっている', isCorrect: false, analysis: 'SAI: Quy định, tập quán.' },
          { id: 'B', text: 'くらいだ', isCorrect: true, analysis: 'ĐÚNG: ~くらいだ / ぐらいだ diễn đạt mức độ đến nỗi mà: "Tối đến mức dù là ban ngày cũng tối".' },
          { id: 'C', text: '一方だ', isCorrect: false, analysis: 'SAI: Có xu hướng ngày càng... (thường đi với động từ biến đổi như 増える, 減る).' },
          { id: 'D', text: 'にちがいない', isCorrect: false, analysis: 'SAI: Phán đoán chắc chắn, nhưng ở đây người nói đang trực tiếp chứng kiến mức độ của căn phòng.' }
        ],
        speed30sTip: 'Mẹo 30 giây: Cụm từ "昼間でも暗い" (ngay cả ban ngày cũng tối) đưa ra một ví dụ cực đoan để nói về mức độ -> Đáp án là くらいだ (đến mức).',
        relatedKnowledge: 'Cấu trúc ~くらいだ / ~ほどだ (Đến mức mà...).'
      },
      {
        id: 'q-n3-5',
        level: 'N3',
        question: '彼はまるで何事もなかったかのように、平気な（　　）をしている。',
        options: [
          { id: 'A', text: '顔', isCorrect: true, analysis: 'ĐÚNG: Quán dụng ngữ 平気な顔をする (Heiki na kao o suru) nghĩa là "Thản nhiên làm như không có chuyện gì xảy ra / Mặt tỉnh bơ".' },
          { id: 'B', text: '目', isCorrect: false, analysis: 'SAI: Không có quán dụng ngữ 平気な目をする.' },
          { id: 'C', text: '気', isCorrect: false, analysis: 'SAI: Cụm từ là 平気でいる hoặc 平気な顔をする.' },
          { id: 'D', text: '手', isCorrect: false, analysis: 'SAI: Không hợp quán dụng ngữ.' }
        ],
        speed30sTip: 'Mẹo 30 giây: Cụm cố định của người Nhật: "まるで〜かのように平気な顔をする" (Mặt bình chân như vại như thể chưa có chuyện gì).',
        relatedKnowledge: 'Quán dụng ngữ về bộ phận cơ thể: 顔が広い (Quan hệ rộng), 顔をつぶす (Làm mất mặt).'
      }
    ]
  },
  {
    level: 'N2',
    questions: [
      {
        id: 'q-n2-1',
        level: 'N2',
        question: 'どんなに困難な状況であれ、最後まで（　　）抜く覚悟がある。',
        options: [
          { id: 'A', text: 'やり', isCorrect: true, analysis: 'ĐÚNG: V-masu (bỏ masu) + 抜く (nuku) nghĩa là "Làm đến cùng vượt qua bao gian nan thử thách". やり抜く = Quyết tâm làm đến cùng.' },
          { id: 'B', text: 'やせ', isCorrect: false, analysis: 'SAI: Sai dạng động từ.' },
          { id: 'C', text: 'やれ', isCorrect: false, analysis: 'SAI: Thể khả năng không ghép với nuku dạng này.' },
          { id: 'D', text: 'やろう', isCorrect: false, analysis: 'SAI: Thể ý chí không ghép với nuku.' }
        ],
        speed30sTip: 'Mẹo 30 giây: Cụm từ "最後まで" (đến cùng) + "抜く" -> Bắt buộc dùng V-masu bỏ masu: やり抜く (kiên trì đến cùng).',
        relatedKnowledge: 'Trợ động từ hậu tố ~抜く (làm tới cùng dù khổ cực). So sánh với ~通す (làm suốt một mạch).'
      },
      {
        id: 'q-n2-2',
        level: 'N2',
        question: '彼の話はいつも誇張が多くて、信用するに（　　）。',
        options: [
          { id: 'A', text: 'たえない', isCorrect: false, analysis: 'SAI: ~にたえない nghĩa là "Không chịu nổi (kinh tởm, xấu hổ)" hoặc "Vô cùng... (cảm kích, biết ơn)".' },
          { id: 'B', text: '足らない', isCorrect: true, analysis: 'ĐÚNG: ~に足る / ~に足らない nghĩa là "Đáng để... / Không đáng để...". 信用するに足らない = Không đáng để tin cậy.' },
          { id: 'C', text: 'あたらない', isCorrect: false, analysis: 'SAI: ~にあたらない nghĩa là "Không có gì đáng phải... (ngạc nhiên, khen ngợi)".' },
          { id: 'D', text: 'かたくない', isCorrect: false, analysis: 'SAI: ~に難くない nghĩa là "Không khó để... (tưởng tượng, thấu hiểu)".' }
        ],
        speed30sTip: 'Mẹo 30 giây: Bẫy 4 cấu trúc "に...ない" của N2! Bắt cặp từ: 信用する + に足らない (Không đáng để tin tưởng). Nhớ mẹo: 足る = đáng giá.',
        relatedKnowledge: 'Bộ tứ ngữ pháp N2: に足らない (không đáng), にあたらない (không đáng phải làm quá lên), に難くない (không khó để), にたえない (không nỡ/vô cùng).'
      },
      {
        id: 'q-n2-3',
        level: 'N2',
        question: 'あの政治家の発言は、国民の怒りを（　　）ざるを得ない。',
        options: [
          { id: 'A', text: '買い', isCorrect: true, analysis: 'ĐÚNG: Quán dụng ngữ 怒りを買う (rước lấy sự giận dữ). Ghép với ~ざるを得ない (đành phải/buộc phải) -> 怒りを買わざるを得ない.' },
          { id: 'B', text: '買わ', isCorrect: false, analysis: 'SAI: Dạng chia thiếu động từ.' },
          { id: 'C', text: '売ら', isCorrect: false, analysis: 'SAI: Sai quán dụng ngữ.' },
          { id: 'D', text: '得', isCorrect: false, analysis: 'SAI: Sai ngữ pháp.' }
        ],
        speed30sTip: 'Mẹo 30 giây: Cụm từ cố định "怒りを買う" (mua lấy cơn thịnh nộ = chuốc lấy sự tức giận).',
        relatedKnowledge: 'Cấu trúc ~ざるを得ない (Đành phải, không thể không làm vì hoàn cảnh ép buộc).'
      },
      {
        id: 'q-n2-4',
        level: 'N2',
        question: '時間がないので、詳しい説明は（　　）として、結論から申し上げます。',
        options: [
          { id: 'A', text: 'ぬき', isCorrect: true, analysis: 'ĐÚNG: Noun + はぬきにして / はぬきとして nghĩa là "Tạm thời bỏ qua / không tính đến...".' },
          { id: 'B', text: 'わけ', isCorrect: false, analysis: 'SAI: Không có dạng này.' },
          { id: 'C', text: 'もの', isCorrect: false, analysis: 'SAI: Sai cấu trúc.' },
          { id: 'D', text: 'こと', isCorrect: false, analysis: 'SAI: Sai cấu trúc.' }
        ],
        speed30sTip: 'Mẹo 30 giây: "詳しい説明は...として" + "結論から" (đi thẳng vào kết luận) -> Bỏ qua phần giải thích chi tiết -> 抜きにする (bỏ qua).',
        relatedKnowledge: 'Cấu trúc ~ぬきで / ~ぬきにして (Dẹp qua một bên, không tính đến).'
      },
      {
        id: 'q-n2-5',
        level: 'N2',
        question: 'これだけの証拠が揃っている以上、彼が犯人であることは疑い（　　）。',
        options: [
          { id: 'A', text: 'ようがない', isCorrect: true, analysis: 'ĐÚNG: V-masu (bỏ masu) + ようがない nghĩa là "Không còn cách nào để...". 疑いようがない = Không thể nào nghi ngờ được nữa (rõ như ban ngày).' },
          { id: 'B', text: 'かねない', isCorrect: false, analysis: 'SAI: Có nguy cơ xảy ra việc xấu.' },
          { id: 'C', text: 'っこない', isCorrect: false, analysis: 'SAI: Tuyệt đối không thể (khẩu ngữ suồng sã).' },
          { id: 'D', text: 'がたい', isCorrect: false, analysis: 'SAI: Khó lòng mà... (về mặt tâm lý).' }
        ],
        speed30sTip: 'Mẹo 30 giây: Cụm từ bất hủ trong đề thi N2: "疑いようがない" (Không còn chỗ nào để hoài nghi).',
        relatedKnowledge: 'Cấu trúc ~ようがない (Không thể nào làm được vì thiếu phương thức).'
      }
    ]
  }
];

export const DOKKAI_PRESETS: DokkaiArticle[] = [
  {
    id: 'dokkai-1',
    level: 'N2',
    title: '現代社会における「遠回り」の価値 (Giá trị của "Đường vòng" trong xã hội hiện đại)',
    passage: `現代社会は、あらゆる分野において「効率」と「スピード」を最優先する傾向にある。インターネットを開けば数秒で答えが手に入り、目的地へは最短ルートで案内される。無駄を省き、いかに短時間で成果を出すかが称賛される時代である。

しかし、人間が本当に深い思考力や独自の創造性を育むためには、この「無駄」や「遠回り」こそが不可欠なのではないだろうか。最短ルートだけを辿っていては、道端に咲く予期せぬ花に気づくことも、迷った末に偶然出会う新しい発見もない。試行錯誤し、時には失敗して立ち止まる時間の中にこそ、教科書には載っていない生きた知恵が宿る。

つまり、私たちが今見直すべきなのは、効率の追求そのものを否定することではなく、「効率化によって生み出された余白の時間を、いかに豊かな遠回りに使えるか」という生き方の質なのである。`,
    mainIdea: 'Tác giả khẳng định rằng sự "đi đường vòng", thử sai và trải nghiệm không mục đích trước mắt chính là cội nguồn cốt lõi nuôi dưỡng tư duy sáng tạo sâu sắc của con người, chứ không phải chỉ có tốc độ và hiệu suất.',
    articleStructure: {
      paragraphBreakdown: [
        {
          part: 'Đoạn 1 (Nêu hiện trạng & Tiền đề)',
          contentSummary: 'Xã hội ngày nay sùng bái hiệu suất cao, tốc độ nhanh và triệt tiêu mọi sự lãng phí thời gian.',
          logicRole: 'Đưa ra góc nhìn phổ biến để làm đòn bẩy phản biện.'
        },
        {
          part: 'Đoạn 2 (Chuyển ý phản biện bằng しかし)',
          contentSummary: 'Tuy nhiên, chính sự "đi đường vòng" và những lần thử sai mới mang lại sự sáng tạo thực sự và tri thức sống động.',
          logicRole: 'Luận điểm cốt lõi và lập luận chính của tác giả.'
        },
        {
          part: 'Đoạn 3 (Đúc kết thông điệp bằng つまり)',
          contentSummary: 'Tóm lại, điều cần làm không phải là bài trừ hiệu suất, mà là dùng thời gian tiết kiệm được để trải nghiệm những hành trình phong phú hơn.',
          logicRole: 'Kết luận chốt hạ, định hướng hành động cho người đọc.'
        }
      ],
      logicFlow: 'Nêu định kiến xã hội (Hiệu suất là số 1) ➔ Bẻ gãy bằng liên từ しかし (Đường vòng mới sinh ra sáng tạo) ➔ Quy tụ bằng つまり (Nâng tầm chất lượng sống)'
    },
    keyConjunctions: [
      {
        word: 'しかし (Shikashi)',
        meaning: 'Tuy nhiên / Nhưng mà',
        signalRole: 'TÍN HIỆU VÀNG: Báo hiệu toàn bộ quan điểm thật sự của tác giả bắt đầu từ đây. Câu hỏi JLPT gần như chắc chắn xoay quanh vế sau chữ này.'
      },
      {
        word: 'つまり (Tsumari)',
        meaning: 'Tóm lại / Nói cách khác',
        signalRole: 'TÍN HIỆU CHỐT: Tác giả tóm lược toàn bài trong một câu ngắn. Đây chính là "đáp án mẫu" cho câu hỏi "Điều tác giả muốn nói nhất".'
      }
    ],
    chunkingTranslation: [
      {
        japaneseChunk: '現代社会は、あらゆる分野において「効率」と「スピード」を最優先する傾向にある。',
        vietnameseChunk: 'Xã hội hiện đại có xu hướng ưu tiên hàng đầu "hiệu suất" và "tốc độ" trong mọi lĩnh vực.',
        note: 'Cấu trúc ~において (Trong phạm vi) & ~傾向にある (Có xu hướng).'
      },
      {
        japaneseChunk: 'しかし、人間が本当に深い思考力や独自の創造性を育むためには、',
        vietnameseChunk: 'Tuy nhiên, để con người có thể nuôi dưỡng tư duy thực sự sâu sắc và tính sáng tạo độc đáo,',
        note: 'V-tame ni wa (Để nhằm mục đích).'
      },
      {
        japaneseChunk: 'この「無駄」や「遠回り」こそが不可欠なのではないだろうか。',
        vietnameseChunk: 'thì chẳng phải chính "sự lãng phí" hay "đường vòng" này mới là thứ không thể thiếu hay sao?',
        note: 'Cấu trúc nghi vấn tu từ ~ではないだろうか (Chẳng phải là... hay sao? = Khẳng định ngầm).'
      }
    ],
    comprehensionQuiz: {
      question: '筆者がこの文章で最も主張したいことは何か。(Điều tác giả muốn chủ trương nhất trong bài viết này là gì?)',
      options: [
        {
          id: 'A',
          text: '効率やスピードばかりを求める現代社会は間違っており、インターネットの利用を制限すべきだ。',
          isCorrect: false,
          whyWrongOrRight: 'SAI (Bẫy cực đoan): Tác giả không hề nói phải "hạn chế internet" hay phủ nhận sạch trơn hiệu suất.'
        },
        {
          id: 'B',
          text: '創造性を育むためには、効率化によって得られた時間を活用して、試行錯誤や寄り道を楽しむことが大切だ。',
          isCorrect: true,
          whyWrongOrRight: 'ĐÚNG: Khớp chính xác 100% với câu chốt của tác giả ở đoạn 3 sau từ nối つまり.'
        },
        {
          id: 'C',
          text: '失敗を重ねて遠回りをすることは無駄であり、教科書に従って最短ルートを進むべきである。',
          isCorrect: false,
          whyWrongOrRight: 'SAI: Ngược hoàn toàn với ý của tác giả.'
        },
        {
          id: 'D',
          text: '成果を出すためには、どのような手段を使ってでも短時間で目的地に到達することが不可欠である。',
          isCorrect: false,
          whyWrongOrRight: 'SAI: Đây là quan niệm xã hội nông cạn mà tác giả đang phê phán ở đoạn 1.'
        }
      ],
      speedEliminationTip: 'Mẹo 30 giây: Đọc lướt tìm từ nối "つまり" ở đoạn cuối. Đối chiếu trực tiếp câu sau "つまり" với 4 đáp án. Đáp án B dùng từ đồng nghĩa "試行錯誤" và "効率化によって得られた時間" trùng khớp hoàn toàn!'
    },
    advancedVocabGrammar: [
      { term: 'あらゆる (Arayuru)', reading: 'あらゆる', meaning: 'Tất cả, mọi (Từ vựng N2)' },
      { term: '省く (Habuku)', reading: 'はぶく', meaning: 'Lược bớt, cắt giảm (Âm Hán: Tỉnh)' },
      { term: '不可欠 (Fukaketsu)', reading: 'ふかけつ', meaning: 'Không thể thiếu được (Âm Hán: Bất Khả Khiếm)' },
      { term: '試行錯誤 (Shikousakugo)', reading: 'しこうさくご', meaning: 'Quá trình thử sai và rút kinh nghiệm (Thành ngữ 4 chữ Yojijukugo)' }
    ]
  }
];
