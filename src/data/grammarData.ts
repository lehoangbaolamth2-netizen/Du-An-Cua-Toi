import { GrammarItem } from '../types';

export const COMPREHENSIVE_GRAMMAR_PRESETS: GrammarItem[] = [
  // 1. MINNA NO NIHONGO N5: 〜てください
  {
    id: 'gram-minna-1',
    level: 'N5',
    textbookSource: 'Minna no Nihongo Sơ cấp',
    lessonNumber: 'Bài 14 - Minna I',
    grammar: '〜てください (~te kudasai)',
    meaning: 'Xin hãy... / Hãy vui lòng làm V (Yêu cầu lịch sự nhẹ nhàng)',

    // 1. GIẢI THÍCH SIÊU CƠ BẢN
    simpleExplanation: {
      whatFor: 'Dùng để đưa ra lời yêu cầu, chỉ dẫn hoặc mời ai đó làm gì một cách lịch sự, nhẹ nhàng trong cuộc sống hàng ngày.',
      whenToUse: 'Dùng khi nói với người ngang hàng (bạn bè mới quen), người dưới (học sinh, con cháu), hoặc trong bảng chỉ dẫn dịch vụ công cộng. TUYỆT ĐỐI không dùng để nhờ vả cấp trên hoặc khách hàng.',
      plainSummary: 'Giống như khi bạn nói: "Bạn làm giúp tôi việc này nhé!" hay "Xin mời bạn ngồi đây!".'
    },

    // 2. CẤU TRÚC
    structures: {
      formula: 'Động từ thể て (V-te) + ください',
      verbRule: '• Nhóm 1: Chia theo đuôi (kaku -> kaite, nomu -> yonde)\n• Nhóm 2: Bỏ ru + te (taberu -> tabete)\n• Nhóm 3: suru -> shite, kuru -> kite',
      adjectiveRule: 'Không đi trực tiếp với tính từ. Muốn dùng phải đổi sang dạng động từ (ví dụ: Shizuka ni shite kudasai).',
      nounRule: 'Không đi trực tiếp với danh từ.',
      relatedForms: 'Phủ định yêu cầu: 〜ないでください (Xin đừng làm V).',
      exceptions: ['Tuyệt đối không dùng cho sếp, bề trên, đối tác vì mang tính mệnh lệnh ngầm.'],
      breakdownExamples: [
        {
          sentence: 'ここに 名前を 書いてください。',
          furigana: 'ここに なまえを かいてください。',
          translation: 'Xin hãy viết tên của bạn vào đây.',
          components: [
            { part: 'ここに (koko ni)', role: 'Trạng từ chỉ nơi chốn', explanation: 'Chỉ địa điểm cần tác động vào' },
            { part: '名前を (namae o)', role: 'Tân ngữ + trợ từ を', explanation: 'Đối tượng được viết' },
            { part: '書いて (kaite)', role: 'Động từ 書く chia thể て', explanation: 'Gốc hành động viết' },
            { part: 'ください (kudasai)', role: 'Tiếp vị từ lịch sự', explanation: 'Biến câu thành lời yêu cầu nhã nhặn' }
          ]
        },
        {
          sentence: 'どうぞ 温かいお茶を 飲んでください。',
          furigana: 'どうぞ あたたかいおちゃを のんでください。',
          translation: 'Xin mời bạn dùng trà ấm nhé.',
          components: [
            { part: 'どうぞ (douzo)', role: 'Phó từ mời mọc', explanation: 'Tạo cảm giác hiếu khách, chân thành' },
            { part: '温かいお茶を', role: 'Tính từ + Danh từ + trợ từ を', explanation: 'Trà còn nóng' },
            { part: '飲んで (nonde)', role: 'Động từ 飲む chia thể て', explanation: 'Uống' },
            { part: 'ください (kudasai)', role: 'Hậu tố yêu cầu/mời', explanation: 'Lời mời thân thiện' }
          ]
        }
      ]
    },

    // 3. VÍ DỤ THEO 3 CẤP ĐỘ
    threeTierExamples: {
      basic: {
        japanese: 'ちょっと 待ってください。',
        furigana: 'ちょっと まってください。',
        romaji: 'Chotto matte kudasai.',
        vietnamese: 'Xin hãy chờ tôi một chút.',
        whyThisPattern: 'Câu giao tiếp cơ bản N5, dùng động từ 待つ (chờ) thể て để xin đối phương tạm dừng.'
      },
      intermediate: {
        japanese: 'パスポートの コピーを 1部 提出してください。',
        furigana: 'パスポートの コピーを いちぶ ていしゅつしてください。',
        romaji: 'Pasupooto no kopii o ichibu teishutsu shite kudasai.',
        vietnamese: 'Xin vui lòng nộp một bản sao hộ chiếu của bạn.',
        whyThisPattern: 'Dùng trong ngữ cảnh hành chính, nộp hồ sơ xin việc hoặc đăng ký giấy tờ.'
      },
      advanced: {
        japanese: '詳細につきましては、添付の 資料をご参照ください。',
        furigana: 'しょうさいにつきましては、てんぷの しりょうをごさんしょうください。',
        romaji: 'Shousai ni tsukimashite wa, tempu no shiryou o gosanshou kudasai.',
        vietnamese: 'Về thông tin chi tiết, xin vui lòng tham khảo tài liệu đính kèm.',
        whyThisPattern: 'Mẫu văn phòng cao cấp N2/N1: chuyển sang ご〜ください để trang trọng trong email công việc.'
      }
    },

    // 4. SO SÁNH MẪU DỄ NHẦM
    confusingComparisons: {
      patterns: [
        {
          pattern: '〜てください',
          meaning: 'Hãy làm V',
          politenessLevel: '⭐ (Lịch sự cơ bản)',
          nuance: 'Yêu cầu, chỉ dẫn, có sắc thái áp đặt nhẹ',
          usageSituation: 'Nói với bạn bè, người dưới, giáo viên chỉ dẫn học trò'
        },
        {
          pattern: '〜てもらえませんか',
          meaning: 'Bạn có thể làm V giúp tôi được không?',
          politenessLevel: '⭐⭐ (Lịch sự thân thiện)',
          nuance: 'Hỏi xem đối phương có thể giúp không, bớt tính áp đặt',
          usageSituation: 'Đồng nghiệp cùng cấp, người quen ở mức độ vừa phải'
        },
        {
          pattern: '〜ていただけませんか',
          meaning: 'Liệu ngài có thể vui lòng làm V giúp tôi không?',
          politenessLevel: '⭐⭐⭐ (Rất lịch sự / Tôn kính)',
          nuance: 'Khiêm tốn, tôn trọng quyền quyết định của đối phương',
          usageSituation: 'Dùng với cấp trên, giáo viên, tiền bối, người lớn tuổi'
        },
        {
          pattern: '〜ていただけるでしょうか',
          meaning: 'Liệu ngài có thể rộng lòng xem xét giúp tôi được chăng?',
          politenessLevel: '⭐⭐⭐⭐ (Trang trọng công việc tột bậc)',
          nuance: 'Thận trọng tối đa, hạ mình khiêm nhường chuẩn business',
          usageSituation: 'Gửi đối tác kinh doanh, giám đốc công ty, khách hàng VIP'
        }
      ],
      whenNotToUse: '⚠️ Tuyệt đối KHÔNG dùng 〜てください với Giám đốc (社長), Trưởng phòng (部長), Giáo viên (先生) hoặc Khách hàng khi muốn nhờ họ làm việc gì. Người Nhật sẽ cảm thấy bạn đang ra lệnh cho họ!'
    },

    // 5 & 6. HỌC CHỦ ĐỘNG & CHẨN ĐOÁN LỖI THÔNG MINH
    activeLearning: {
      recognition: {
        question: 'Đâu là câu sử dụng mẫu 〜てください ĐÚNG ngữ pháp và chuẩn văn hóa Nhật?',
        options: [
          { id: 'A', text: '社長、この契約書を読んでください。', isCorrect: false, explanation: 'Sai ngữ cảnh! Không dùng てください để yêu cầu cấp trên/Giám đốc đọc tài liệu.' },
          { id: 'B', text: 'すみません、もう少しゆっくり話してください。', isCorrect: true, explanation: 'Hoàn toàn chính xác! Lời đề nghị lịch sự với người nói chuyện để mình nghe rõ hơn.' },
          { id: 'C', text: '先生、明日の宿題を教えてください。', isCorrect: false, explanation: 'Dùng với giáo viên nên dùng 〜教えていただけませんか để giữ lễ phép.' },
          { id: 'D', text: '早く行ください。', isCorrect: false, explanation: 'Sai ngữ pháp chia thể! Phải chia thể Te (行って) chứ không được gắn vào dạng từ điển.' }
        ]
      },
      fillInBlank: {
        prompt: 'Chia động từ 待つ (chờ) vào chỗ trống để tạo câu yêu cầu:「ここで少々（　　　）。」',
        rawSentence: 'ここで少々（　　　）。',
        targetForm: 'V-te kudasai',
        expectedAnswer: '待ってください',
        acceptableVariants: ['まってください', '待って下さい', 'matte kudasai'],
        hint: 'Động từ 待つ (matsu) thuộc nhóm 1, tận cùng là tsu -> chia âm ngắt thành tte.',
        errorDiagnosis: {
          commonMistake: '待ちてください / 待つください',
          errorType: 'conjugation',
          analysis: 'Bạn đã nhầm lẫn quy tắc biến âm thể て của nhóm 1 (các đuôi う, つ, る biến thành âm ngắt 〜って).',
          ruleToRemember: 'Nhớ câu vần: "U, tsu, ru -> tte". Do đó: 待つ (matsu) -> 待って (matte) + ください.',
          similarExample: '立つ (tatsu - đứng) -> 立ってください (tatte kudasai).'
        }
      },
      fixError: {
        wrongSentence: '× 社長、このプレゼン資料をチェックしてください。',
        errorHighlight: 'チェックしてください',
        correctSentence: '○ 社長、このプレゼン資料をご確認いただけますでしょうか。',
        errorType: 'keigo',
        diagnosticAnalysis: 'Lỗi kính ngữ và sắc thái quan hệ: Người nói dùng mẫu てください với cấp trên (社長 - Giám đốc), tạo cảm giác sỗ sàng và sai quy tắc ứng xử công sở Nhật Bản.',
        ruleToRemember: 'Khi giao tiếp với người trên trong môi trường công sở: Hãy dùng thể nhờ vả khiêm kính ngữ 〜ていただけますでしょうか hoặc cụm từ trân trọng ご確認.',
        similarExample: '部長、明日のお時間をご確認いただけますでしょうか。'
      },
      translation: {
        vietnamese: 'Xin hãy mở cửa sổ ra một chút vì trong phòng hơi ngột ngạt.',
        expectedJapanese: '部屋が少し蒸し暑いので、窓を開けてください。',
        sampleCorrect: '窓を少し開けてください。',
        keywords: ['窓 (mado)', '開ける (akeru -> akete)', '少し (sukoshi)'],
        tip: 'Động từ 開ける là nhóm 2, bỏ る thêm て -> 開けてください.'
      },
      reflex: {
        scenario: 'Tình huống: Bạn ở phòng trọ và người bạn Nhật đang bật TV quá to lúc nửa đêm. Bạn muốn nhờ bạn ấy giảm âm lượng xuống một chút.',
        taskPrompt: 'Hãy phản xạ một câu nói bằng tiếng Nhật vừa lịch sự, vừa không làm sứt mẻ tình bạn:',
        sampleSpeech: 'すみません、もう遅いので、テレビの音を少し小さくしてください。',
        reflexMindset: 'Bắt đầu bằng từ đệm「すみません」(xin lỗi làm phiền) + nêu lý do ngắn「もう遅いので」(đã muộn rồi) + đưa ra yêu cầu nhẹ nhàng.'
      }
    },

    // 7. SẮC THÁI NGƯỜI NHẬT (NUANCE SPECTRUM)
    nuanceSpectrum: {
      casual: {
        japanese: 'ちょっと待って！ (Chotto matte!)',
        situation: 'Nói với bạn thân, người yêu, người trong gia đình',
        levelLabel: '🟢 Bạn bè / Thân mật'
      },
      polite: {
        japanese: 'ちょっと待ってください。 (Chotto matte kudasai.)',
        situation: 'Nói với đồng nghiệp cùng trang lứa, người lạ ngoài đường',
        levelLabel: '🔵 Lịch sự chuẩn mực'
      },
      respectful: {
        japanese: '少々お待ちいただけますか。 (Shoushou omachi itadakemasu ka.)',
        situation: 'Nói với tiền bối, cấp trên phòng ban, khách vãng lai',
        levelLabel: '🟣 Lịch sự trang trọng'
      },
      businessKeigo: {
        japanese: '少々お待ちいただけますでしょうか。 (Shoushou omachi itadakemasu deshou ka.)',
        situation: 'Nói với khách hàng VIP, giám đốc, đối tác ký hợp đồng',
        levelLabel: '🔴 Tối kính / Chuẩn công việc'
      },
      writtenFormal: {
        japanese: 'ご査収のほど、よろしくお願い申し上げます。',
        situation: 'Văn viết trang trọng cuối email công ty',
        levelLabel: '📜 Văn phong viết công vụ'
      },
      insight: 'Người Nhật luôn tính toán khoảng cách tâm lý (Maai - 間合い). Đúng ngữ pháp chưa chắc đã đúng văn hóa nếu bạn dùng sai tầng lịch sự!'
    },

    // 8. PHẦN "HỌC KĨ"
    deepDive: {
      originEtymology: 'Động từ「ください」vốn là dạng tôn kính cổ của「くれる」(ban cho tôi). Ban đầu mang nghĩa "Xin ngài hãy rộng lòng ban ân huệ hành động này cho tôi", nhưng theo thời gian đã bị bình thường hóa thành mệnh lệnh yêu cầu.',
      nuanceDetails: 'Tính chất của てください là câu cầu khiến trực tiếp (Direct Request). Mặc dù có "kudasai" nghe lịch sự, nhưng bản chất vẫn là người nói bảo đối phương phải làm hành động đó.',
      usageConditions: 'Chỉ dùng khi người nghe có nghĩa vụ hoặc tự nguyện sẵn lòng làm, hoặc chỉ dẫn người khác cách làm một việc có lợi cho họ (ví dụ: Hãy dùng thuốc này nhé).',
      exceptions: ['Không dùng cho người trên', 'Không dùng khi đối phương chưa hề đồng ý giúp'],
      equivalentPatterns: ['〜ておくれ (tiếng địa phương/người già nói)', '〜てちょうだい (phụ nữ/mẹ nói với con)'],
      oppositePatterns: ['〜ないでください (Xin đừng làm)', '〜てはいけません (Cấm làm)'],
      commonVietnameseMistakes: [
        'Người Việt hay dịch từ "Làm ơn" trong tiếng Anh (Please) thành "てください" và dùng bừa bãi với cả sếp Nhật.',
        'Quên biến âm thể て của nhóm 1 (ví dụ nhầm 書く thành 書きてください).'
      ]
    },

    // TÍNH NĂNG "TẠI SAO KHÔNG DÙNG MẪU KIA?"
    whyNotTheOther: {
      situation: 'Tình huống: Bạn vừa viết xong bản báo cáo tài chính và muốn nhờ Trưởng phòng (部長) duyệt qua trước khi gửi khách hàng.',
      targetChoiceQuestion: 'Trong tình huống này, tại sao nên dùng C hoặc D mà KHÔNG ĐƯỢC dùng A hay B?',
      options: [
        {
          id: 'A',
          text: '見てください (Mite kudasai)',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Thấp so với sếp',
          relationshipFit: 'Chỉ hợp với đồng nghiệp ngang hàng hoặc cấp dưới',
          businessAppropriateness: 'Bị coi là vô lễ, như ra lệnh cho sếp',
          friendAlternative: 'ちょっと見て (Chotto mite)',
          verdict: '❌ Bị trừ điểm văn hóa công sở nặng',
          isRecommended: false
        },
        {
          id: 'B',
          text: '見てもらえませんか (Mite moraemasen ka)',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Trung bình',
          relationshipFit: 'Dùng cho tiền bối thân thiết',
          businessAppropriateness: 'Chưa đủ độ khiêm nhường đối với Trưởng phòng',
          friendAlternative: '見てくれる？ (Mite kureru?)',
          verdict: '⚠️ Tạm chấp nhận nhưng chưa tối ưu',
          isRecommended: false
        },
        {
          id: 'C',
          text: '見ていただけませんか (Mite itadakemasen ka)',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Cao (Khiêm nhường ngữ chuẩn)',
          relationshipFit: 'Hoàn hảo đối với Trưởng phòng',
          businessAppropriateness: 'Tôn trọng tối đa thời gian của sếp',
          friendAlternative: 'Không dùng cho bạn thân vì quá khách sáo',
          verdict: '✅ Rất chuẩn mực',
          isRecommended: true
        },
        {
          id: 'D',
          text: 'ご確認いただけますでしょうか (Gokakunin itadakemasu deshou ka)',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Cực cao (Keigo thương mại)',
          relationshipFit: 'Dành cho báo cáo quan trọng gửi Ban Giám Đốc',
          businessAppropriateness: 'Đạt điểm 10/10 tác phong công sở Nhật Bản',
          friendAlternative: 'Không dùng cho bạn thân',
          verdict: '🌟 Tối ưu nhất trong môi trường chuyên nghiệp',
          isRecommended: true
        }
      ],
      thinkingRule: '💡 Quy tắc tư duy: Bất cứ khi nào muốn nhờ người trên làm gì: Không dùng "Hãy làm" (てください), mà phải đổi góc nhìn thành "Liệu tôi có vinh hạnh được ngài giúp hay không" (〜ていただけますでしょうか).'
    },

    // 9. KIỂM TRA SAU BÀI (MINI-TEST 5 CÂU)
    miniTest: {
      questions: [
        {
          id: 'mt-1',
          tier: 'basic',
          question: 'Câu 1 (Cơ bản): Điền dạng đúng của động từ「話す」(nói) vào câu:「すみません、英語で（　　）ください。」',
          options: [
            { id: 'A', text: '話し', isCorrect: false, explanation: 'Chưa đổi sang thể て.' },
            { id: 'B', text: '話して', isCorrect: true, explanation: 'Chính xác! Động từ đuôi す chia thành して -> 話して.' },
            { id: 'C', text: '話した', isCorrect: false, explanation: 'Đây là thể quá khứ た.' },
            { id: 'D', text: '話すて', isCorrect: false, explanation: 'Không có dạng biến âm này.' }
          ]
        },
        {
          id: 'mt-2',
          tier: 'basic',
          question: 'Câu 2 (Cơ bản): Mẫu「〜てください」KHÔNG nên dùng trong trường hợp nào sau đây?',
          options: [
            { id: 'A', text: 'Bảo bạn cùng lớp cho mượn tẩy.', isCorrect: false, explanation: 'Được phép dùng với bạn bè cùng trang lứa.' },
            { id: 'B', text: 'Mời khách ăn bánh quy tại nhà.', isCorrect: false, explanation: 'Được dùng làm lời mời thân mật: どうぞ食べてください.' },
            { id: 'C', text: 'Nhờ sếp phê duyệt đơn xin nghỉ phép.', isCorrect: true, explanation: 'Chính xác! Với sếp phải dùng kính ngữ 〜ていただけますでしょうか.' },
            { id: 'D', text: 'Bác sĩ dặn bệnh nhân uống thuốc đều đặn.', isCorrect: false, explanation: 'Được dùng làm lời chỉ dẫn có ích cho người nghe.' }
          ]
        },
        {
          id: 'mt-3',
          tier: 'application',
          question: 'Câu 3 (Vận dụng): Khi làm thủ tục ngân hàng, nhân viên nói「こちらにご署名ください」nghĩa là gì?',
          options: [
            { id: 'A', text: 'Bạn đã ký tên vào đây chưa?', isCorrect: false, explanation: 'Sai nghĩa.' },
            { id: 'B', text: 'Xin vui lòng ký tên vào vị trí này.', isCorrect: true, explanation: 'Chính xác! ご署名ください là dạng rút gọn lịch sự của 署名してください.' },
            { id: 'C', text: 'Không được ký tên vào chỗ này.', isCorrect: false, explanation: 'Đây là câu cấm đoán, sai.' },
            { id: 'D', text: 'Tôi sẽ ký thay cho bạn.', isCorrect: false, explanation: 'Sai chủ ngữ.' }
          ]
        },
        {
          id: 'mt-4',
          tier: 'application',
          question: 'Câu 4 (Vận dụng): Chọn phương án tự nhiên nhất khi bạn muốn tài xế taxi dừng xe tại ngã tư phía trước:',
          options: [
            { id: 'A', text: 'あの交差点で止まってください。', isCorrect: true, explanation: 'Chính xác! Lời chỉ đường lịch sự tiêu chuẩn với tài xế.' },
            { id: 'B', text: 'あの交差点で止まれ！', isCorrect: false, explanation: 'Mệnh lệnh thô thiển, cực kỳ thất lễ.' },
            { id: 'C', text: 'あの交差点で止まっていただけますでしょうか。', isCorrect: false, explanation: 'Quá mức khách sáo không cần thiết khi đi taxi.' },
            { id: 'D', text: 'あの交差点で止まるべきです。', isCorrect: false, explanation: 'べき mang tính dạy bảo đạo đức, sai.' }
          ]
        },
        {
          id: 'mt-5',
          tier: 'nuance',
          question: 'Câu 5 (Sắc thái): Sự khác biệt cốt lõi giữa「〜てください」và「〜てもらえませんか」là gì?',
          options: [
            { id: 'A', text: '〜てください nhấn mạnh vào việc đối phương có rảnh hay không.', isCorrect: false, explanation: 'Sai, đó là sắc thái của もらえませんか.' },
            { id: 'B', text: '〜てください mang tính chỉ dẫn trực tiếp, còn〜てもらえませんか hỏi xem đối phương có thể giúp không, giảm bớt tính áp đặt.', isCorrect: true, explanation: 'Chính xác tuyệt đối! Giúp người nói ứng xử tế nhị hơn.' },
            { id: 'C', text: 'Hai mẫu này giống hệt nhau, người Nhật dùng thay thế nhau tùy thích.', isCorrect: false, explanation: 'Sai hoàn toàn, sắc thái và đối tượng rất khác nhau.' },
            { id: 'D', text: '〜てもらえませんか chỉ dùng trong văn viết.', isCorrect: false, explanation: 'Dùng rất phổ biến trong hội thoại giao tiếp hàng ngày.' }
          ]
        }
      ]
    },

    // 10. HỆ THỐNG GHI NHỚ (FLASHCARDS / SRS INTEGRATION)
    takeawayMemory: {
      goldenQuote: '💡 V-te kudasai: Nhờ bạn thì được, cấm nhờ sếp!',
      avoidTrap: 'Tuyệt đối không dùng cho bề trên; chia nhóm 1 phải chuẩn biến âm て (U, tsu, ru -> tte).',
      realLifeScenario: 'Khi đi du lịch Nhật Bản:「写真を撮ってください」(Xin chụp giúp tôi bức ảnh).',
      srsCards: [
        {
          front: '〜てください Dùng trong trường hợp nào và KHÔNG dùng cho ai?',
          back: 'Dùng đưa ra yêu cầu lịch sự, chỉ dẫn, mời mọc nhẹ nhàng. CẤM dùng cho cấp trên, giáo viên, khách hàng!',
          mnemonic: 'Kudasai là cho tôi, nhưng bảo sếp cho là vô lễ.',
          level: 'N5'
        },
        {
          front: 'Muốn nhờ SẾP xem tài liệu thì KHÔNG nói "見てください", mà phải nói câu gì?',
          back: '見ていただけませんか hoặc ご確認いただけますでしょうか。',
          mnemonic: 'Với sếp luôn chuyển sang dạng khiêm tốn: Itadakemasu deshou ka.',
          level: 'N5'
        },
        {
          front: 'Công thức chia động từ nhóm 1 với 〜てください:',
          back: 'Đổi sang thể て + ください (u, tsu, ru -> tte; mu, bu, nu -> nde; ku -> ite; gu -> ide; su -> shite).',
          mnemonic: 'Hát bài đồng dao thể Te trước khi gắn Kudasai!',
          level: 'N5'
        }
      ]
    },

    // GRAMMAR MAP & LỘ TRÌNH TƯ DUY
    grammarMap: {
      current: '〜てください',
      prerequisites: ['Động từ thể て (V-te)', 'Quy tắc chia 3 nhóm động từ tiếng Nhật'],
      nextRecommendations: ['〜てもらえませんか (Nhờ vả thân mật)', '〜ていただけませんか (Nhờ vả lịch sự)'],
      easyToConfuseWith: ['〜ないでください (Xin đừng làm)', '〜てほしい (Muốn ai đó làm)'],
      advancedKnowledge: ['Kính ngữ Keigo công sở', 'Mẫu ご〜ください (Tôn kính thương mại)'],
      branchDiagramText: `てください (Yêu cầu cơ bản)
   │
   ├── てもらえませんか (Hỏi ý kiến bạn/đồng nghiệp)
   │       └── ていただけませんか (Lịch sự với cấp trên)
   │              └── ていただけるでしょうか (Tối kính công sở)
   │
   ├── ないでください (Yêu cầu phủ định: Xin đừng)
   └── てほしい (Mong muốn cá nhân, không mang tính lễ nghi)`
    },

    // Legacy fields preserved
    essenceMeaning: {
      coreMindset: 'Tư duy "Mở ngỏ để người khác ban phát ơn huệ cho mình". Động từ ください vốn là dạng tôn kính của くれる (cho tôi). Khi nói V-te kudasai, trong tâm thức người Nhật là "Xin bạn vui lòng làm việc này vì tôi".',
      literalVsReal: 'Nghĩa đen: "Hãy ban cho tôi hành động V này" -> Nghĩa thực tế: "Xin hãy làm V giúp tôi nhé".'
    },
    connectionRules: [
      { form: 'Động từ Nhóm 1 (Godan)', rule: 'Đổi đuôi [i] -> [te/de] + ください', example: 'ここに名前を書いてください (Xin hãy viết tên vào đây).' },
      { form: 'Động từ Nhóm 2 (Ichidan)', rule: 'Bỏ [ru] + てください', example: 'もっとたくさん食べてください (Xin hãy ăn nhiều vào nhé).' },
      { form: 'Động từ Nhóm 3 (Fukisoku)', rule: 'Suru -> Shite kudasai / Kuru -> Kite kudasai', example: '明日9時に来てください (Xin hãy đến lúc 9 giờ sáng mai).' }
    ],
    comparison: {
      confusingWith: '〜ていただけませんか',
      keyDifference: 'てください vẫn mang sắc thái áp đặt nhẹ. Với bề trên phải dùng 〜ていただけませんか.',
      sideBySide: [
        { structure: '〜てください', usage: 'Dùng cho người ngang hàng, người dưới, bảng chỉ dẫn.', nuance: 'Chỉ dẫn, yêu cầu lịch sự.' },
        { structure: '〜ていただけませんか', usage: 'Dùng với sếp, giáo viên, đối tác.', nuance: 'Khiêm tốn tột cùng, hỏi ý kiến đối phương.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Tàu điện đông đúc, muốn người khác ngồi dịch vào.', prompt: 'Dùng すわる hoặc つめる với 〜てください.', modelSentence: 'すみません、もう少し詰めて座ってください。', explanation: 'Yêu cầu lịch sự ở nơi công cộng.' },
      { context: 'Ngữ cảnh 2: Nhân viên sân bay xem hộ chiếu.', prompt: 'Dùng 見せる với 〜てください.', modelSentence: 'パスポートを見せてください。', explanation: 'Thủ tục hành chính chuẩn.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 社長、この書類をチェックしてください',
        correctSentence: '○ 社長、この書類をご確認いただけますでしょうか',
        whyWrong: 'Tuyệt đối không dùng 〜てください với cấp trên.'
      }
    ]
  },

  // 2. MINNA N4: 〜ています (Tự động từ) vs 〜てあります (Tha động từ)
  {
    id: 'gram-minna-3',
    level: 'N4',
    textbookSource: 'Minna no Nihongo Sơ cấp',
    lessonNumber: 'Bài 29 - Minna II',
    grammar: '〜ています (Tự ĐT) vs 〜てあります (Tha ĐT)',
    meaning: 'Trạng thái tự nhiên đang diễn ra vs Trạng thái có chủ đích chuẩn bị của con người',

    simpleExplanation: {
      whatFor: 'Dùng để phân biệt rạch ròi giữa một hiện tượng tự nhiên đang đập vào mắt bạn (Cửa đang mở) với một trạng thái do ai đó đã dày công chuẩn bị trước cho một mục đích (Cửa đã được mở sẵn cho thoáng).',
      whenToUse: 'Dùng khi miêu tả đồ vật xung quanh. Nhìn thấy đèn sáng, quạt quay đơn thuần -> ています. Thấy tài liệu đã in sẵn, bàn ăn đã dọn sẵn -> てあります.',
      plainSummary: 'ています = "Nó đang như thế đấy!" (khách quan). てあります = "Có người đã chuẩn bị sẵn việc này rồi đấy!" (có mục đích).'
    },

    structures: {
      formula: 'Tự động từ: Noun が + V(jidoushi)-te + います | Tha động từ: Noun が + V(tadoushi)-te + あります',
      verbRule: 'Tự động từ đi với trợ từ が + ています (開く -> 開いています). Tha động từ đi với trợ từ が + てあります (開ける -> 開けてあります).',
      breakdownExamples: [
        {
          sentence: '窓が 開いています。',
          furigana: 'まどが あいています。',
          translation: 'Cửa sổ đang mở (chỉ miêu tả cảnh tượng trước mắt).',
          components: [
            { part: '窓が (mado ga)', role: 'Chủ thể tự nhiên', explanation: 'Cửa sổ là vật tự ở trạng thái mở' },
            { part: '開いて (aite)', role: 'Tự động từ 開く chia thể て', explanation: 'Hành vi tự mở' },
            { part: 'います (imasu)', role: 'Trợ động từ trạng thái', explanation: 'Diễn tả trạng thái tĩnh kéo dài' }
          ]
        },
        {
          sentence: '窓が 開けてあります。',
          furigana: 'まどが あけてあります。',
          translation: 'Cửa sổ đã được mở sẵn (ai đó mở sẵn để phòng thoáng khí).',
          components: [
            { part: '窓が (mado ga)', role: 'Tân ngữ trở thành chủ đề', explanation: 'Cửa sổ nhận tác động chuẩn bị' },
            { part: '開けて (akete)', role: 'Tha động từ 開ける chia thể て', explanation: 'Hành động mở có chủ đích' },
            { part: 'あります (arimasu)', role: 'Trợ động từ kết quả chuẩn bị', explanation: 'Dấu vết chuẩn bị còn lưu lại' }
          ]
        }
      ]
    },

    threeTierExamples: {
      basic: {
        japanese: '電気が ついています。',
        furigana: 'でんきが ついています。',
        romaji: 'Denki ga tsuite imasu.',
        vietnamese: 'Đèn đang sáng.',
        whyThisPattern: 'Tự động từ つく miêu tả trạng thái khách quan bóng đèn đang phát sáng.'
      },
      intermediate: {
        japanese: '会議室の 机の上に 資料が 並べてあります。',
        furigana: 'かいぎしつの つくえのうえに しりょうが ならべてあります。',
        romaji: 'Kaigishitsu no tsukue no ue ni shiryou ga narabete arimasu.',
        vietnamese: 'Trên bàn phòng họp tài liệu đã được xếp sẵn ngăn nắp.',
        whyThisPattern: 'Tha động từ 並べる + てあります nhấn mạnh việc nhân viên đã chuẩn bị sẵn sàng cho cuộc họp.'
      },
      advanced: {
        japanese: '万が一の 災害に備えて、非常食が 倉庫に 備蓄してあります。',
        furigana: 'まんがいちの さいがいにそなえて、ひじょうしょくが そうこに びちくしてあります。',
        romaji: 'Man\'gaichi no saigai ni sonaete, hijoushoku ga souko ni bichiku shite arimasu.',
        vietnamese: 'Đề phòng thảm họa bất trắc, lương thực khẩn cấp đã được dự trữ sẵn trong kho.',
        whyThisPattern: 'Cấu trúc N2/N1: 備えて + 備蓄してあります (chuẩn bị phòng bị chuyên nghiệp).'
      }
    },

    confusingComparisons: {
      patterns: [
        {
          pattern: 'Noun が + Tự động từ-ています',
          meaning: 'Đang ở trạng thái...',
          politenessLevel: 'Trung tính',
          nuance: 'Khách quan, người quan sát nhìn sao nói vậy',
          usageSituation: 'Cửa hỏng, lá rụng, đèn bật'
        },
        {
          pattern: 'Noun が + Tha động từ-てあります',
          meaning: 'Đã được làm sẵn...',
          politenessLevel: 'Lịch sự / Công sở',
          nuance: 'Nhấn mạnh mục đích chuẩn bị của con người',
          usageSituation: 'Đặt trước vé, dọn sẵn bàn, viết sẵn lịch trình'
        },
        {
          pattern: 'Noun を + Tha động từ-ています',
          meaning: 'Đang thực hiện hành động...',
          politenessLevel: 'Trung tính',
          nuance: 'Hành động đang tiếp diễn tại thời điểm nói',
          usageSituation: 'Tôi đang viết báo cáo (レポートを書いています)'
        }
      ],
      whenNotToUse: '⚠️ Không dùng Tha động từ + ています để miêu tả hiện trạng đồ vật tĩnh (Ví dụ cấm nói: ドアが開けています - vì câu này mang nghĩa kỳ quặc "Cửa đang tự tay mở cửa")!'
    },

    activeLearning: {
      recognition: {
        question: 'Muốn nói "Lịch công tác tuần này đã được dán sẵn trên bảng thông báo", câu nào chuẩn xác?',
        options: [
          { id: 'A', text: '掲示板にスケジュールが貼っています。', isCorrect: false, explanation: 'Sai! 貼る là tha động từ, không đi với ています để tả kết quả chuẩn bị.' },
          { id: 'B', text: '掲示板にスケジュールが貼ってあります。', isCorrect: true, explanation: 'Chính xác! Tha động từ 貼る + てあります diễn tả việc đã dán sẵn.' },
          { id: 'C', text: '掲示板にスケジュールを貼ってあります。', isCorrect: false, explanation: 'Trong cấu trúc てあります, trợ từ を thường chuyển thành が.' },
          { id: 'D', text: '掲示板にスケジュールが貼られます。', isCorrect: false, explanation: 'Bị động đơn thuần, không nhấn mạnh trạng thái sẵn sàng.' }
        ]
      },
      fillInBlank: {
        prompt: 'Điền trợ từ thích hợp:「カレンダー（　）壁にかけてあります。」',
        rawSentence: 'カレンダー（　）壁にかけてあります。',
        targetForm: 'Trợ từ が',
        expectedAnswer: 'が',
        acceptableVariants: ['ga'],
        hint: 'Trong mẫu 〜てあります, đối tượng được làm sẵn trở thành chủ ngữ của trạng thái, đi với trợ từ が.',
        errorDiagnosis: {
          commonMistake: 'を',
          errorType: 'particle',
          analysis: 'Người học hay giữ nguyên trợ từ を của tha động từ. Khi chuyển sang trạng thái 〜てあります, trợ từ bắt buộc chuyển thành が.',
          ruleToRemember: 'Quy tắc vàng: [Noun が + Tha động từ-て + あります].',
          similarExample: 'ホワイトボードに予定が書いてあります (Kế hoạch đã được viết sẵn).'
        }
      },
      fixError: {
        wrongSentence: '× 鍵がもう閉めていますから、入れません。',
        errorHighlight: '閉めています',
        correctSentence: '○ 鍵がもう閉まっています (Tự ĐT) hoặc 閉めてあります (Tha ĐT)',
        errorType: 'conjugation',
        diagnosticAnalysis: 'Nhầm lẫn giữa Tự động từ 閉まる (tự đóng) và Tha động từ 閉める (lấy tay đóng). Khi dùng が và ています, bắt buộc dùng Tự động từ.',
        ruleToRemember: 'Cặp đôi: 閉まる (tự đóng -> 閉まっている) vs 閉める (đóng sẵn -> 閉めてある).',
        similarExample: 'ドアが閉まっています (Cửa đang đóng).'
      },
      translation: {
        vietnamese: 'Nhà hàng tối nay đã được đặt chỗ trước rồi, nên bạn cứ yên tâm.',
        expectedJapanese: '今夜のレストランはもう予約してありますから、安心してください。',
        sampleCorrect: 'レストランはもう予約してあります。',
        keywords: ['予約する (yoyaku suru -> yoyaku shite arimasu)', '安心 (anshin)'],
        tip: 'Việc đặt bàn là hành động có chủ đích chuẩn bị -> dùng 予約してあります.'
      },
      reflex: {
        scenario: 'Tình huống: Bạn bước vào phòng học và thấy chiếc ví của ai đó bị rơi trên sàn nhà.',
        taskPrompt: 'Hãy thốt lên câu thông báo cho mọi người biết:',
        sampleSpeech: 'あ、床に誰かの財布が落ちていますよ！',
        reflexMindset: 'Rơi là hiện tượng tự nhiên khách quan -> dùng Tự động từ 落ちる + ています (落ちています).'
      }
    },

    nuanceSpectrum: {
      casual: {
        japanese: '窓、開いてるよ。 (Mado, aiteru yo.)',
        situation: 'Bạn bè nói chuyện ở phòng trọ',
        levelLabel: '🟢 Thân mật'
      },
      polite: {
        japanese: '窓が開いていますね。 (Mado ga aite imasu ne.)',
        situation: 'Đồng nghiệp nói chuyện lịch sự',
        levelLabel: '🔵 Lịch sự chuẩn mực'
      },
      respectful: {
        japanese: '換気のため、窓が開けてございます。 (Mado ga akete gozaimasu.)',
        situation: 'Khách sạn, hội trường tiếp khách quý',
        levelLabel: '🟣 Trân trọng lễ nghi'
      },
      businessKeigo: {
        japanese: '資料はすでに机上にご用意申し上げてございます。',
        situation: 'Báo cáo khách hàng phòng họp VIP',
        levelLabel: '🔴 Tối kính thương mại'
      },
      insight: 'Người Nhật luôn để ý "vết tích chuẩn bị" (てある) như một lời chào ngầm thể hiện sự chu đáo (Omotenashi).'
    },

    deepDive: {
      originEtymology: 'ています vốn là て + います (có mặt ở đó). てあります vốn là て + あります (vật đó tồn tại sau khi có người tác động).',
      nuanceDetails: 'てあります mang tinh thần văn hóa Omotenashi: mọi thứ đã được chuẩn bị sẵn sàng chu đáo trước khi khách bước vào.',
      usageConditions: 'てあります chỉ đi với Tha động từ có ý thức con người. Không đi với hiện tượng tự nhiên như mưa, tuyết.',
      exceptions: ['Tự động từ tuyệt đối không đi với てあります (Không có: 落ちてあります).'],
      equivalentPatterns: ['〜ておく (chuẩn bị trước)', '〜済みの (đã hoàn tất)'],
      oppositePatterns: ['〜たばかり (vừa mới làm xong, chưa chuẩn bị sẵn)'],
      commonVietnameseMistakes: [
        'Người Việt hay nhầm lẫn cặp tự/tha động từ: 開く/開ける, 閉まる/閉める, つく/つける, 消える/消す.',
        'Nhầm trợ từ を và が trong mẫu てあります.'
      ]
    },

    whyNotTheOther: {
      situation: 'Tình huống: Bạn vào phòng họp thấy nước uống và sổ tay đã được xếp ngay ngắn trước từng ghế.',
      targetChoiceQuestion: 'Tại sao trong tình huống này nói「お茶が用意してあります」lại tự nhiên hơn「お茶が用意しています」?',
      options: [
        {
          id: 'A',
          text: 'お茶が用意しています (Ocha ga youi shite imasu)',
          isGrammaticallyCorrect: false,
          politenessLevel: 'Sai cấu trúc',
          relationshipFit: 'Không phù hợp',
          businessAppropriateness: 'Trà không thể tự mình chuẩn bị nó được',
          friendAlternative: 'Không dùng',
          verdict: '❌ Sai logic chủ thể hành động',
          isRecommended: false
        },
        {
          id: 'B',
          text: 'お茶を用意しています (Ocha o youi shite imasu)',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Đúng',
          relationshipFit: 'Phù hợp khi người phục vụ ĐANG làm hành động dọn nước',
          businessAppropriateness: 'Nhưng đây là nước ĐÃ dọn xong từ trước rồi',
          friendAlternative: 'Dùng khi đang bận pha nước',
          verdict: '⚠️ Nhầm lẫn giữa hành động đang làm và kết quả đã sẵn sàng',
          isRecommended: false
        },
        {
          id: 'C',
          text: 'お茶が用意してあります (Ocha ga youi shite arimasu)',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Chuẩn mực 100%',
          relationshipFit: 'Khen ngợi sự chu đáo của ban tổ chức',
          businessAppropriateness: 'Thể hiện rõ: ai đó đã chuẩn bị sẵn sàng đón tiếp',
          friendAlternative: 'お茶、用意してあるよ',
          verdict: '✅ Chuẩn bản xứ nhất',
          isRecommended: true
        }
      ],
      thinkingRule: '💡 Quy tắc tư duy: Nếu nhấn mạnh "sự chu đáo chuẩn bị đã hoàn tất đón người đến sau" -> Luôn chọn Tha động từ + てあります.'
    },

    miniTest: {
      questions: [
        {
          id: 'mt2-1',
          tier: 'basic',
          question: 'Câu 1 (Cơ bản):「エアコンが（　　）。」Điền dạng đúng của tự động từ つく (bật/hoạt động):',
          options: [
            { id: 'A', text: 'つけてあります', isCorrect: false, explanation: 'つけ là tha động từ, mà câu này dùng tự động từ つく.' },
            { id: 'B', text: 'ついています', isCorrect: true, explanation: 'Chính xác! Tự động từ つく chia て là ついて + います.' },
            { id: 'C', text: 'つきています', isCorrect: false, explanation: 'Sai biến âm.' },
            { id: 'D', text: 'つけています', isCorrect: false, explanation: 'Đây là tha động từ.' }
          ]
        },
        {
          id: 'mt2-2',
          tier: 'basic',
          question: 'Câu 2 (Cơ bản): Mẫu nào dưới đây ĐÚNG cấu trúc [Noun が + Tha ĐT-te + あります]?',
          options: [
            { id: 'A', text: '窓が開いています。', isCorrect: false, explanation: 'Đây là Tự ĐT + ています.' },
            { id: 'B', text: '壁に絵が掛けてあります。', isCorrect: true, explanation: 'Chính xác! 掛ける (treo) là tha ĐT + てあります (Tranh đã được treo sẵn trên tường).' },
            { id: 'C', text: '雨が降ってあります。', isCorrect: false, explanation: 'Mưa là hiện tượng tự nhiên, không thể dùng てあります.' },
            { id: 'D', text: 'パンを食べてあります。', isCorrect: false, explanation: 'Sai trợ từ và sai ngữ cảnh chuẩn bị.' }
          ]
        },
        {
          id: 'mt2-3',
          tier: 'application',
          question: 'Câu 3 (Vận dụng): Khi chuẩn bị tiệc sinh nhật xong xuôi, bạn gọi điện báo bạn bè:「料理はもう（　　）よ！」',
          options: [
            { id: 'A', text: '作っている (tsukutte iru)', isCorrect: false, explanation: 'Nghĩa là "vẫn đang nấu dở", chưa xong.' },
            { id: 'B', text: '作ってある (tsukutte aru)', isCorrect: true, explanation: 'Tuyệt vời! "Đã nấu sẵn sàng hết rồi, chỉ việc tới ăn thôi".' },
            { id: 'C', text: '作られる (tsukurareru)', isCorrect: false, explanation: 'Thể bị động, sai ý.' },
            { id: 'D', text: '作るつもり (tsukuru tsumori)', isCorrect: false, explanation: 'Dự định nấu, chưa nấu.' }
          ]
        },
        {
          id: 'mt2-4',
          tier: 'application',
          question: 'Câu 4 (Vận dụng): Phân biệt nghĩa:「黒板の字が消えています」khác「黒板の字が消してあります」ở điểm nào?',
          options: [
            { id: 'A', text: 'Không có điểm khác biệt.', isCorrect: false, explanation: 'Khác nhau hoàn toàn về tâm thức người nói.' },
            { id: 'B', text: '消えています chỉ thấy chữ mờ mất; 消してあります nhấn mạnh có ai đó đã cố tình lau sạch bảng từ trước.', isCorrect: true, explanation: 'Chính xác! Tự ĐT chỉ trạng thái; Tha ĐT chỉ hành vi có chủ đích.' },
            { id: 'C', text: '消してあります nghĩa là chữ vẫn còn nguyên.', isCorrect: false, explanation: 'Sai nghĩa.' },
            { id: 'D', text: '消えています là thể cấm đoán.', isCorrect: false, explanation: 'Sai ngữ pháp.' }
          ]
        },
        {
          id: 'mt2-5',
          tier: 'nuance',
          question: 'Câu 5 (Sắc thái): Tại sao người Nhật thích dùng「〜てあります」trong dịch vụ khách sạn / ẩm thực?',
          options: [
            { id: 'A', text: 'Vì cấu trúc này ngắn hơn.', isCorrect: false, explanation: 'Không phải.' },
            { id: 'B', text: 'Vì nó ngầm truyền tải thông điệp chu đáo: "Chúng tôi đã chuẩn bị tươm tất mọi thứ để đón tiếp quý khách".', isCorrect: true, explanation: 'Chính xác! Thể hiện đỉnh cao tinh thần hiếu khách Omotenashi.' },
            { id: 'C', text: 'Vì nó mang nghĩa ra lệnh cho khách.', isCorrect: false, explanation: 'Hoàn toàn sai.' },
            { id: 'D', text: 'Vì luật ngữ pháp bắt buộc thế.', isCorrect: false, explanation: 'Đây là sự tinh tế về văn hóa.' }
          ]
        }
      ]
    },

    takeawayMemory: {
      goldenQuote: '💡 Tự ĐT + ています: Tự nó thế! / Tha ĐT + てあります: Đã dọn sẵn!',
      avoidTrap: 'Tuyệt đối không nói「ドアが開けています」, phải là「ドアが開いています」.',
      realLifeScenario: 'Nhìn thấy vali đã đóng gói sẵn:「荷物はもうまとめてあります」(Hành lý đã gói sẵn sàng).',
      srsCards: [
        {
          front: 'Sự khác biệt cốt lõi giữa [Tự ĐT + ています] và [Tha ĐT + てあります]:',
          back: 'Tự ĐT + ています: Trạng thái tự nhiên trước mắt (Cửa đang mở). Tha ĐT + てあります: Trạng thái có ai đó cố tình chuẩn bị sẵn từ trước (Cửa được mở sẵn cho thoáng).',
          mnemonic: 'ています = Trạng thái tĩnh; てあります = Ai đó đã chuẩn bị!',
          level: 'N4'
        },
        {
          front: 'Cặp đôi: 窓が（開く/開ける）＋ てあります -> Điền từ nào?',
          back: '開けてあります (Dùng Tha động từ 開ける)',
          mnemonic: 'てあります luôn đi với Tha động từ biểu thị sự chuẩn bị.',
          level: 'N4'
        },
        {
          front: 'Tại sao câu「ドアが開けています」bị người Nhật coi là kỳ quặc?',
          back: 'Vì tha động từ 開ける + ています nghĩa là "ai đó đang lấy tay mở cửa". Nếu chỉ nhìn thấy cánh cửa đang mở thì phải dùng tự động từ 開く -> 開いています.',
          mnemonic: 'Nhìn vật tĩnh thì dùng Tự động từ + ています.',
          level: 'N4'
        }
      ]
    },

    grammarMap: {
      current: '〜ています vs 〜てあります',
      prerequisites: ['Phân biệt cặp Tự động từ & Tha động từ', 'Thể て của động từ'],
      nextRecommendations: ['〜ておく (Chuẩn bị làm sẵn)', '〜てしまう (Lỡ làm / Hoàn tất)'],
      easyToConfuseWith: ['Tha động từ + ています (Đang làm)', 'Thể bị động 〜られる'],
      advancedKnowledge: ['Thể kính ngữ 〜てございます (Khách sạn/Nhà hàng)', 'Bẫy tự/tha động từ trong bài thi JLPT Dokkai'],
      branchDiagramText: `Diễn tả trạng thái đồ vật
   │
   ├── Tự ĐT + ています (Khách quan: Đèn đang sáng, Cửa đang mở)
   │
   └── Tha ĐT + てあります (Chủ đích: Đã đặt chỗ sẵn, Đã dán thông báo sẵn)
           └── ておく (Hành động chuẩn bị trước khi sự việc diễn ra)`
    },

    essenceMeaning: {
      coreMindset: 'Tư duy "Chủ thể & Dấu vết hành vi". Tự ĐT + ています miêu tả trạng thái khách quan trước mắt. Tha ĐT + てあります nhấn mạnh kết quả của hành động có mục đích chuẩn bị từ trước.',
      literalVsReal: 'Nghĩa đen: "Đang ở trạng thái đó" vs "Đã được làm sẵn và còn nguyên đó".'
    },
    connectionRules: [
      { form: 'Tự động từ (Jidoushi) + が', rule: 'Noun が + Tự động từ-te + います', example: '窓が開いています (Cửa sổ đang mở).' },
      { form: 'Tha động từ (Tadoushi) + が', rule: 'Noun が + Tha động từ-te + あります', example: '窓が開けてあります (Cửa sổ đã được mở sẵn).' }
    ],
    comparison: {
      confusingWith: 'Tha động từ + ています (Đang tiếp diễn)',
      keyDifference: 'Tha động từ + ています là người đang làm dở (đang viết). Tha động từ + てあります là đã làm xong sẵn rồi (đã viết sẵn).',
      sideBySide: [
        { structure: 'Tự ĐT + ています', usage: 'Trạng thái tĩnh khách quan trước mắt.', nuance: 'Khách quan, không rõ ai làm.' },
        { structure: 'Tha ĐT + てあります', usage: 'Kết quả của hành vi có chủ đích chuẩn bị.', nuance: 'Chu đáo, sẵn sàng.' }
      ]
    },
    creativeDrills: [
      { context: 'Ngữ cảnh 1: Lịch trình ghim trên bảng trắng.', prompt: 'Dùng はる với 〜てあります.', modelSentence: 'ホワイトボードに今週のスケジュールが貼ってあります。', explanation: 'Có người đã dán sẵn.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× ドアが開けています',
        correctSentence: '○ ドアが開いています',
        whyWrong: 'Mô tả cánh cửa tĩnh phải dùng tự động từ 開く.'
      }
    ]
  },

  // 3. MIMIKARAOBOERU N3: 〜うちに
  {
    id: 'gram-mimi-n3-1',
    level: 'N3',
    textbookSource: 'Mimikaraoboeru N3',
    lessonNumber: 'Unit 1 - Mimi N3',
    grammar: '〜うちに (~uchi ni)',
    meaning: 'Trong lúc còn... / Tranh thủ khi... / Trong khi đang... thì bỗng nhiên...',

    simpleExplanation: {
      whatFor: 'Dùng để diễn tả: 1. Tranh thủ thời gian điều kiện thuận lợi còn tồn tại để làm ngay kẻo lỡ. 2. Trong lúc đang làm việc gì đó kéo dài thì bất ngờ có biến đổi xảy ra ngoài ý muốn.',
      whenToUse: 'Dùng khi muốn nói: Tranh thủ lúc trà còn nóng hãy uống, tranh thủ lúc còn trẻ hãy đi du lịch, hoặc nghe nhạc một lúc thì ngủ thiếp đi lúc nào không biết.',
      plainSummary: 'Ý niệm cốt lõi: Thời cơ có hạn! Nếu không làm ngay thì điều kiện tốt sẽ biến mất mãi mãi.'
    },

    structures: {
      formula: 'V-dic / V-nai / V-teiru / A-i / A-na + な / Noun + の + うちに',
      verbRule: 'Đi với thể từ điển (V-dic), thể phủ định (V-nai), hoặc thể tiếp diễn (V-teiru).',
      adjectiveRule: 'Tính từ đuôi い giữ nguyên + うちに. Tính từ đuôi な giữ な + うちに (Genki na uchi ni).',
      nounRule: 'Noun + の + うちに (Wakasa no uchi ni - trong lúc còn trẻ).',
      breakdownExamples: [
        {
          sentence: 'スープが 熱いうちに、どうぞ 召し上がってください。',
          furigana: 'スープが あついうちに、どうぞ めしあがってください。',
          translation: 'Xin mời dùng súp khi còn đang nóng hổi.',
          components: [
            { part: 'スープが (suupu ga)', role: 'Chủ ngữ', explanation: 'Bát súp' },
            { part: '熱い (atsui)', role: 'Tính từ đuôi い', explanation: 'Đang nóng' },
            { part: 'うちに (uchi ni)', role: 'Liên từ thời cơ', explanation: 'Trong lúc trạng thái nóng còn duy trì' },
            { part: '召し上がってください', role: 'Kính ngữ ăn uống', explanation: 'Xin mời dùng bữa' }
          ]
        },
        {
          sentence: '本を 読んでいるうちに、いつの間にか 眠ってしまった。',
          furigana: 'ほんを よんでいるうちに、いつのまにか ねむってしまった。',
          translation: 'Trong lúc đang đọc sách, tôi đã ngủ thiếp đi lúc nào không hay.',
          components: [
            { part: '読んでいる (yonde iru)', role: 'V-teiru tiếp diễn', explanation: 'Đang diễn ra hành vi đọc sách' },
            { part: 'うちに (uchi ni)', role: 'Khoảng thời gian biến đổi', explanation: 'Trong tiến trình đó' },
            { part: 'いつの間にか (itsu no ma ni ka)', role: 'Phó từ chỉ sự bất ngờ', explanation: 'Không biết tự lúc nào' },
            { part: '眠ってしまった', role: 'V-te shimatta', explanation: 'Lỡ ngủ thiếp đi' }
          ]
        }
      ]
    },

    threeTierExamples: {
      basic: {
        japanese: '忘れないうちに、メモをしておこう。',
        furigana: 'わすれないうちに、メモをしておこう。',
        romaji: 'Wasurenai uchi ni, memo o shite okou.',
        vietnamese: 'Nhân lúc chưa quên, mình ghi chú lại ngay thôi.',
        whyThisPattern: 'Dùng V-nai + うちに: Tranh thủ lúc ký ức chưa phai mờ.'
      },
      intermediate: {
        japanese: '日本に いるうちに、一度 富士山に 登ってみたいです。',
        furigana: 'にほんに いるうちに、いちど ふじさんに のぼってみたいです。',
        romaji: 'Nihon ni iru uchi ni, ichido Fujisan ni nobotte mitai desu.',
        vietnamese: 'Trong lúc còn ở Nhật Bản, tôi muốn thử một lần leo núi Phú Sĩ.',
        whyThisPattern: 'Khoảng thời gian ở Nhật có hạn, nếu về nước thì hết cơ hội.'
      },
      advanced: {
        japanese: '時代の 変化が 激しい現代においては、市場が 安定しているうちに 次の 手を 打たねばならない。',
        furigana: 'じだいの へんかが はげしいげんだいにおいては、しじょうが あんていしているうちに つぎの てを うたねばならない。',
        romaji: 'Jidai no henka ga hageshii gendai ni oite wa, shijou ga antei shite iru uchi ni tsugi no te o utaneba naranai.',
        vietnamese: 'Trong thời đại biến động khốc liệt, tranh thủ khi thị trường còn ổn định ta phải tung ra nước đi tiếp theo.',
        whyThisPattern: 'Ngữ cảnh kinh doanh N1: Tận dụng thời cơ vàng trước khi thị trường biến động.'
      }
    },

    confusingComparisons: {
      patterns: [
        {
          pattern: '〜うちに (~uchi ni)',
          meaning: 'Tranh thủ khi còn... (kẻo lỡ)',
          politenessLevel: 'Tự nhiên / Cảm xúc',
          nuance: 'Nhấn mạnh tính khẩn trương chủ quan: điều kiện tốt sẽ biến mất',
          usageSituation: 'Ăn khi còn nóng, học khi còn trẻ, ghi lại kẻo quên'
        },
        {
          pattern: '〜間に (~aida ni)',
          meaning: 'Trong khoảng thời gian...',
          politenessLevel: 'Trung tính / Khách quan',
          nuance: 'Chỉ đơn thuần là mốc thời gian khách quan có điểm đầu và cuối',
          usageSituation: 'Trong khi mẹ đang nấu cơm (間に), con ngồi xem hoạt hình'
        },
        {
          pattern: '〜までに (~made ni)',
          meaning: 'Trước thời hạn...',
          politenessLevel: 'Chuẩn mực',
          nuance: 'Hạn chót (Deadline) dứt khoát',
          usageSituation: 'Phải nộp báo cáo trước 5 giờ chiều (5時までに)'
        }
      ],
      whenNotToUse: '⚠️ Không dùng うちに với một hành động xảy ra trong chớp mắt (Ví dụ: Không nói "Tiết học vừa bắt đầu うちに thì tôi vào lớp"). Bắt buộc phải là một trạng thái kéo dài!'
    },

    activeLearning: {
      recognition: {
        question: 'Câu nào diễn tả đúng ý niệm "Tranh thủ thời cơ trước khi điều kiện thay đổi"?',
        options: [
          { id: 'A', text: '子供が寝ている間に、テレビを見ました。', isCorrect: false, explanation: 'Đây là 間に miêu tả khoảng thời gian khách quan, không nhấn mạnh tính khẩn trương tiếc nuối.' },
          { id: 'B', text: '若くて元気なうちに、たくさん色々な国を旅したい。', isCorrect: true, explanation: 'Chính xác! Tranh thủ lúc còn trẻ khỏe (vì tuổi trẻ sẽ qua đi).' },
          { id: 'C', text: '雨が止んだうちに、出かけましょう。', isCorrect: false, explanation: '止んだ là hành động chớp mắt, không đi với うちに.' },
          { id: 'D', text: '会議が終わるうちに、質問してください。', isCorrect: false, explanation: 'Sai ngữ pháp.' }
        ]
      },
      fillInBlank: {
        prompt: 'Điền dạng đúng của tính từ「明るい」(sáng sủa):「外が（　　　）うちに、家に帰りましょう。」',
        rawSentence: '外が（　　　）うちに、家に帰りましょう。',
        targetForm: 'A-i + uchi ni',
        expectedAnswer: '明るい',
        acceptableVariants: ['あかるい', 'akarui'],
        hint: 'Tính từ đuôi い giữ nguyên khi ghép với うちに.',
        errorDiagnosis: {
          commonMistake: '明るく / 明るいな',
          errorType: 'conjugation',
          analysis: 'Bạn đã biến âm tính từ い sai quy tắc. Tính từ い bổ nghĩa trực tiếp cho danh từ うち mà không cần đổi đuôi.',
          ruleToRemember: 'A-i + うちに (giữ nguyên い). Ví dụ: 寒いうちに, 近いうちに.',
          similarExample: '温かいうちに食べてください (Ăn lúc còn ấm).'
        }
      },
      fixError: {
        wrongSentence: '× 彼は暇のうちに、ゲームばかりしている。',
        errorHighlight: '暇のうちに',
        correctSentence: '○ 彼は暇なうちに (A-na) hoặc 暇なときに',
        errorType: 'conjugation',
        diagnosticAnalysis: '暇 (hima - rảnh rỗi) là tính từ đuôi な, khi ghép với うちに bắt buộc phải dùng な (暇なうちに), không dùng の.',
        ruleToRemember: 'Quy tắc từ loại: Danh từ + の うちに; Tính từ đuôi な + な うちに.',
        similarExample: '元気なうちに (Lúc còn khỏe mạnh).'
      },
      translation: {
        vietnamese: 'Nhân lúc giá vé máy bay chưa tăng, chúng ta hãy đặt vé sớm đi.',
        expectedJapanese: '航空券の値段が上がらないうちに、早く予約してしまいましょう。',
        sampleCorrect: 'チケットが高くならないうちに、早く予約しよう。',
        keywords: ['上がらない (agaranai)', 'うちに (uchi ni)', '予約 (yoyaku)'],
        tip: 'Chưa tăng giá = 上がらない うちに.'
      },
      reflex: {
        scenario: 'Tình huống: Đĩa bánh pizza vừa nướng xong nóng hổi, phô mai đang tan chảy. Bạn giục bạn mình ăn ngay kẻo nguội.',
        taskPrompt: 'Hãy nói một câu tự nhiên:',
        sampleSpeech: '熱いうちに早く食べて！冷めたらチーズが固くなっちゃうよ！',
        reflexMindset: 'Phản xạ ngay cụm: 熱いうちに (Atsui uchi ni - nhân lúc còn nóng)!'
      }
    },

    nuanceSpectrum: {
      casual: {
        japanese: 'あったかいうちに食べよ！ (Attakai uchi ni tabeyo!)',
        situation: 'Nói với bạn bè bên bàn ăn',
        levelLabel: '🟢 Thân mật'
      },
      polite: {
        japanese: '温かいうちにどうぞお召し上がりください。',
        situation: 'Mời khách ăn lịch sự',
        levelLabel: '🔵 Lịch sự'
      },
      respectful: {
        japanese: 'ご記憶の鮮明なうちに、詳細をお伺いできればと存じます。',
        situation: 'Hỏi nhân chứng hoặc khách hàng khi ký ức còn rõ',
        levelLabel: '🟣 Lịch sự trang trọng'
      },
      businessKeigo: {
        japanese: '市況の好調なうちに、新規事業への投資を実行すべきかと存じます。',
        situation: 'Báo cáo chiến lược Hội đồng Quản trị',
        levelLabel: '🔴 Tối kính thương mại'
      },
      insight: 'うちに mang hơi thở của triết lý vô thường (Mono no aware): mọi khoảnh khắc đẹp đều trôi qua, hãy trân trọng nắm lấy khi còn có thể.'
    },

    deepDive: {
      originEtymology: 'Từ「内」(uchi) nghĩa là bên trong giới hạn một không gian/thời gian. うちに là ở bên trong phạm vi điều kiện đó.',
      nuanceDetails: 'Sắc thái tâm lý khẩn trương, sợ tiếc nuối: "Nếu không làm thì lát nữa sẽ không còn cơ hội này nữa".',
      usageConditions: 'Mệnh đề trước phải là trạng thái kéo dài (chưa mưa, còn nóng, đang học).',
      exceptions: ['Không đi với động từ kết thúc trong tích tắc như: 始まった, 死んだ.'],
      equivalentPatterns: ['〜の間に (trung tính hơn)', '〜今のうちに (ngay lúc này)'],
      oppositePatterns: ['〜てから (sau khi đã biến đổi xong)'],
      commonVietnameseMistakes: [
        'Nhầm lẫn với 間に: dùng うちに cho các sự việc khách quan không hề có tính khẩn trương.',
        'Quên trợ từ な của tính từ đuôi な (viết nhầm thành 暇のうちに).'
      ]
    },

    whyNotTheOther: {
      situation: 'Tình huống: Người mẹ nhắc con ăn bát cháo vừa nấu xong kẻo nguội ngắt mất ngon.',
      targetChoiceQuestion: 'Tại sao mẹ nói「温かいうちに食べなさい」mà KHÔNG nói「温かい間に食べなさい」?',
      options: [
        {
          id: 'A',
          text: '温かい間に食べなさい (Attakai aida ni)',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Đúng ngữ pháp nhưng không tự nhiên',
          relationshipFit: 'Khách quan như đo bằng đồng hồ nhiệt kế',
          businessAppropriateness: 'Không có cảm xúc lo lắng cháo nguội',
          friendAlternative: 'Không dùng',
          verdict: '⚠️ Nghe máy móc, vô cảm',
          isRecommended: false
        },
        {
          id: 'B',
          text: '温かいうちに食べなさい (Attakai uchi ni)',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Chuẩn xác tuyệt đối',
          relationshipFit: 'Mang trọn vẹn tình cảm người mẹ nhắc con tranh thủ lúc ngon nhất',
          businessAppropriateness: 'Thể hiện đúng tâm thức trân trọng hương vị đồ ăn nóng',
          friendAlternative: 'あったかいうちに食べてね',
          verdict: '✅ Chuẩn bản xứ 100%',
          isRecommended: true
        }
      ],
      thinkingRule: '💡 Quy tắc tư duy: Hễ có sắc thái "Tranh thủ lúc còn ngon/còn trẻ/chưa muộn kẻo tiếc" -> Nhắm mắt chọn ngay うちに!'
    },

    miniTest: {
      questions: [
        {
          id: 'mt3-1',
          tier: 'basic',
          question: 'Câu 1 (Cơ bản): Mẫu「〜うちに」phù hợp nhất với ý niệm nào?',
          options: [
            { id: 'A', text: 'Bắt buộc phải làm theo pháp luật.', isCorrect: false, explanation: 'Đó là なければならない.' },
            { id: 'B', text: 'Tranh thủ làm việc gì khi điều kiện thuận lợi vẫn còn.', isCorrect: true, explanation: 'Chính xác! Tận dụng thời cơ trước khi biến mất.' },
            { id: 'C', text: 'Làm việc gì sau khi đã hoàn tất.', isCorrect: false, explanation: 'Đó là てから.' },
            { id: 'D', text: 'Cấm đoán người khác.', isCorrect: false, explanation: 'Đó là てはいけない.' }
          ]
        },
        {
          id: 'mt3-2',
          tier: 'basic',
          question: 'Câu 2 (Cơ bản): Điền dạng đúng của Danh từ「独身」(độc thân):「（　　）うちに、貯金をしておきたい。」',
          options: [
            { id: 'A', text: '独身な', isCorrect: false, explanation: '独身 là Danh từ, không phải tính từ な.' },
            { id: 'B', text: '独身の', isCorrect: true, explanation: 'Chính xác! Danh từ + の + うちに.' },
            { id: 'C', text: '独身で', isCorrect: false, explanation: 'Sai trợ từ.' },
            { id: 'D', text: '独身だ', isCorrect: false, explanation: 'Không kết hợp với だ.' }
          ]
        },
        {
          id: 'mt3-3',
          tier: 'application',
          question: 'Câu 3 (Vận dụng): Câu「テレビを見ているうちに、寝てしまった」mang sắc thái gì?',
          options: [
            { id: 'A', text: 'Cố tình đi ngủ khi đang xem TV.', isCorrect: false, explanation: 'Sai.' },
            { id: 'B', text: 'Trong lúc đang xem TV thì ngủ thiếp đi lúc nào không hay (sự biến đổi ngoài dự tính).', isCorrect: true, explanation: 'Chính xác! Sắc thái thứ 2 của うちに: biến đổi tự nhiên không chủ đích.' },
            { id: 'C', text: 'Xem TV xong rồi mới đi ngủ.', isCorrect: false, explanation: 'Sai.' },
            { id: 'D', text: 'Không được phép vừa xem TV vừa ngủ.', isCorrect: false, explanation: 'Sai.' }
          ]
        },
        {
          id: 'mt3-4',
          tier: 'application',
          question: 'Câu 4 (Vận dụng): Chọn câu tự nhiên nhất cho biển cảnh báo an toàn:',
          options: [
            { id: 'A', text: '雨が降らないうちに、工事を終わらせましょう。', isCorrect: true, explanation: 'Chính xác! Tranh thủ khi trời chưa đổ mưa để hoàn thành công trình.' },
            { id: 'B', text: '雨が降るうちに、工事をしましょう。', isCorrect: false, explanation: 'Trời mưa thì sao thi công được.' },
            { id: 'C', text: '雨が降ったうちに、工事をやめましょう。', isCorrect: false, explanation: '降った là hành vi kết thúc, không đi với うちに.' },
            { id: 'D', text: '雨が降るまでに、工事を始まります。', isCorrect: false, explanation: 'Sai ngữ pháp.' }
          ]
        },
        {
          id: 'mt3-5',
          tier: 'nuance',
          question: 'Câu 5 (Sắc thái): Tại sao câu「授業が始まったうちに、教室に入った」là câu SAI?',
          options: [
            { id: 'A', text: 'Vì 授業 là từ vựng khó.', isCorrect: false, explanation: 'Không liên quan.' },
            { id: 'B', text: 'Vì hành động "bắt đầu" (始まった) xảy ra trong tích tắc, không phải trạng thái có độ dài để dùng うちに.', isCorrect: true, explanation: 'Chính xác tuyệt đối! Phải dùng: 始まらないうちに (trước khi bắt đầu) hoặc 授業の間に.' },
            { id: 'C', text: 'Vì うちに chỉ dùng cho thời tiết.', isCorrect: false, explanation: 'Sai.' },
            { id: 'D', text: 'Vì thiếu kính ngữ.', isCorrect: false, explanation: 'Sai.' }
          ]
        }
      ]
    },

    takeawayMemory: {
      goldenQuote: '💡 うちに: Thời cơ có hạn, tranh thủ làm ngay kẻo tiếc!',
      avoidTrap: 'Không dùng cho hành động xảy ra chớp mắt; danh từ phải có の (独身のうちに).',
      realLifeScenario: 'Ghi chép kẻo quên:「忘れないうちにメモします」(Ghi lại khi chưa quên).',
      srsCards: [
        {
          front: '〜うちに (~uchi ni) có 2 sắc thái lớn nào?',
          back: '1. Tranh thủ thời cơ khi điều kiện thuận lợi còn duy trì (trà còn nóng, còn trẻ).\n2. Trong lúc một hành động đang tiếp diễn thì có biến đổi bất ngờ ngoài dự tính (ngủ thiếp đi).',
          mnemonic: 'Uchi = Bên trong thời cơ vàng!',
          level: 'N3'
        },
        {
          front: 'Phân biệt 〜うちに và 〜間に:',
          back: 'うちに: Chủ quan, mang tính khẩn trương sợ mất thời cơ.\n間に: Khách quan, chỉ mốc thời gian diễn ra song song bình thường.',
          mnemonic: 'Ăn súp nóng -> うちに; Mẹ nấu cơm con xem TV -> 間に.',
          level: 'N3'
        },
        {
          front: 'Công thức nối Danh từ và Tính từ な với 〜うちに:',
          back: 'Noun + の + うちに (休みのうちに)\nTính từ đuôi な + な + うちに (元気なうちに)',
          mnemonic: 'Danh từ cần の, tính từ な giữ nguyên な.',
          level: 'N3'
        }
      ]
    },

    grammarMap: {
      current: '〜うちに',
      prerequisites: ['Thể từ điển V-dic & Phủ định V-nai', 'Thể tiếp diễn V-teiru'],
      nextRecommendations: ['〜あいだに (Mốc thời gian khách quan)', '〜か〜ないかのうちに (Vừa mới... thì ngay lập tức)'],
      easyToConfuseWith: ['〜間に (~aida ni)', '〜までに (Hạn chót deadline)'],
      advancedKnowledge: ['〜か〜ないかのうちに (N2)', 'Ngữ pháp thời gian N2: 〜際 / 〜折'],
      branchDiagramText: `Diễn tả khoảng thời gian
   │
   ├── 〜うちに (Tranh thủ điều kiện còn thuận lợi kẻo lỡ)
   ├── 〜間に (Hai hành động diễn ra song song khách quan)
   └── 〜までに (Hạn chót thời gian: Trước mốc này)`
    },

    essenceMeaning: {
      coreMindset: 'Tư duy tận dụng khoảng thời gian hữu hạn trước khi điều kiện thay đổi.',
      literalVsReal: 'Nghĩa đen: "Trong nội bộ khoảng thời gian đó" -> Nghĩa thực tế: "Nhân lúc còn...".'
    },
    connectionRules: [
      { form: 'Động từ V', rule: 'V-dic / V-nai / V-teiru + うちに', example: '忘れないうちにメモしよう。' },
      { form: 'Tính từ い', rule: 'A-i + うちに', example: '温かいうちにどうぞ。' }
    ],
    comparison: {
      confusingWith: '〜間に',
      keyDifference: 'うちに có sắc thái tiếc nuối khẩn trương; 間に là khách quan.',
      sideBySide: [
        { structure: '〜うちに', usage: 'Tranh thủ lúc còn cơ hội.', nuance: 'Chủ quan khẩn trương.' },
        { structure: '〜間に', usage: 'Hai việc xảy ra song song.', nuance: 'Khách quan.' }
      ]
    },
    creativeDrills: [
      { context: 'Ramen vừa bưng ra.', prompt: 'Dùng 熱い với うちに.', modelSentence: '熱いうちに早く食べてね！', explanation: 'Tranh thủ ăn khi còn nóng.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 授業が始まったうちに',
        correctSentence: '○ 授業が始まる前に / 始まらないうちに',
        whyWrong: 'Hành động bắt đầu diễn ra chớp nhoáng không dùng うちに.'
      }
    ]
  },

  // 4. MIMIKARAOBOERU N2: 〜ざるを得ない
  {
    id: 'gram-mimi-n2-1',
    level: 'N2',
    textbookSource: 'Mimikaraoboeru N2',
    lessonNumber: 'Bài 3 - Mimikara N2',
    grammar: '〜ざるを得ない (~zaru o enai)',
    meaning: 'Đành phải... / Buộc phải làm V (Dù trong lòng không hề muốn)',

    // 1. GIẢI THÍCH SIÊU CƠ BẢN
    simpleExplanation: {
      whatFor: 'Diễn tả việc bản thân không hề muốn làm, nhưng vì tình thế, áp lực hoàn cảnh hoặc lý do khách quan bắt buộc nên không còn cách nào khác ngoài việc đành phải làm.',
      whenToUse: 'Dùng khi nói về việc miễn cưỡng chấp nhận một quyết định đau lòng hoặc khó khăn (như hủy kế hoạch, xin nghỉ việc, đồng ý yêu cầu khắt khe). Mang văn phong trang trọng, chín chắn.',
      plainSummary: 'Giống như khi bạn thở dài nói: "Dù chẳng thích tí nào, nhưng tình thế này thì tôi đành phải cắn răng mà làm thôi!".'
    },

    // 2. CẤU TRÚC
    structures: {
      formula: 'Động từ thể ない (bỏ ない) + ざるを得ない (Riêng する -> せざるを得ない)',
      verbRule: '• Nhóm 1: iku -> ika-zaru o enai, kaku -> kaka-zaru o enai\n• Nhóm 2: taberu -> tabe-zaru o enai\n• Nhóm 3: kuru -> ko-zaru o enai (Đọc là こざるを得ない)\n• BẤT QUY TẮC ĐẶC BIỆT: する -> せざるを得ない (KHÔNG PHẢI しざる)',
      adjectiveRule: 'Không đi trực tiếp với tính từ. Nếu muốn dùng phải biến đổi thành động từ.',
      nounRule: 'Không đi trực tiếp với danh từ.',
      relatedForms: '〜ないわけにはいかない (Mang tính trách nhiệm đạo đức/xã hội hơn), 〜ずにはいられない (Không kìm nén được cảm xúc).',
      exceptions: ['Tuyệt đối nhớ trường hợp của Động từ する: bắt buộc là せざるを得ない, thi JLPT N2 rất hay bẫy dạng này.'],
      breakdownExamples: [
        {
          sentence: '台風が接近しているため、明日の野外イベントは 中止せざるを得ない。',
          furigana: 'たいふうが せっきんしているため、あすの やがいいべんとは ちゅうしせざるをえない。',
          translation: 'Vì bão đang tiến gần, chúng tôi đành phải hủy bỏ sự kiện ngoài trời ngày mai.',
          components: [
            { part: '台風が接近しているため', role: 'Vế chỉ nguyên nhân khách quan', explanation: 'Thời tiết xấu đe dọa an toàn' },
            { part: '明日の野外イベントは', role: 'Chủ đề của câu', explanation: 'Sự kiện ngoài trời ngày mai' },
            { part: '中止せ (chuushi-se)', role: 'Gốc 中止する biến đổi', explanation: 'Động từ nhóm 3 chia dạng せ' },
            { part: 'ざるを得ない (zaru o enai)', role: 'Mẫu ngữ pháp đành phải', explanation: 'Biểu thị sự tiếc nuối và miễn cưỡng' }
          ]
        },
        {
          sentence: 'これだけ証拠が揃っては、彼の意見を 認めざるを得ない。',
          furigana: 'これだけ しょうこがそろっては、かれの いけんを みとめざるをえない。',
          translation: 'Khi chứng cứ đã đầy đủ thế này, tôi đành phải thừa nhận ý kiến của anh ấy.',
          components: [
            { part: 'これだけ証拠が揃っては', role: 'Điều kiện thực tế bắt buộc', explanation: 'Không thể chối cãi được nữa' },
            { part: '彼の意見を', role: 'Tân ngữ của hành động', explanation: 'Quan điểm/ý kiến của anh ta' },
            { part: '認め (mitome)', role: 'Động từ 認める bỏ ない', explanation: 'Công nhận, thừa nhận' },
            { part: 'ざるを得ない', role: 'Đành phải công nhận', explanation: 'Dù ban đầu không đồng tình' }
          ]
        }
      ]
    },

    // 3. VÍ DỤ THEO 3 CẤP ĐỘ
    threeTierExamples: {
      basic: {
        japanese: '雨が ひどいので、タクシーに 乗らざるを得ない。',
        furigana: 'あめが ひどいので、たくしーに のらざるをえない。',
        romaji: 'Ame ga hidoi node, takushii ni norazaru o enai.',
        vietnamese: 'Vì mưa to quá nên tôi đành phải đi taxi.',
        whyThisPattern: 'Dù muốn tiết kiệm tiền đi bộ, nhưng vì mưa tầm tã nên bất đắc dĩ phải tốn tiền đi taxi.'
      },
      intermediate: {
        japanese: '原料費の高騰により、製品価格を 引き上げざるを得ない状況です。',
        furigana: 'げんりょうひの こうとうにより、せいひんかかくを ひきあげざるをえない じょうきょうです。',
        romaji: 'Genryouhi no koutou ni yori, seihinkakaku o hikiagezaru o enai joukyou desu.',
        vietnamese: 'Do giá nguyên vật liệu leo thang, chúng tôi đang ở vào tình thế đành phải tăng giá sản phẩm.',
        whyThisPattern: 'Ngữ cảnh kinh doanh và báo chí N2: doanh nghiệp không muốn tăng giá sợ mất khách nhưng bị hoàn cảnh ép buộc.'
      },
      advanced: {
        japanese: '今回の不祥事の責任の重さを鑑みれば、代表取締役を 辞任せざるを得ないとの結論に至った。',
        furigana: 'こんかいの ふしょうじの せきにんのおもさを かんがみれば、だいひょうとりしまりやくを じにんせざるをえないとの けつろんに いたった。',
        romaji: 'Konkai no fushouji no sekinin no omosa o kangamireba, daihyoutorishimariyaku o jininsezaru o enai to no ketsuron ni itatta.',
        vietnamese: 'Xét thấy mức độ nghiêm trọng của vụ bê bối lần này, chúng tôi đã đi đến kết luận rằng đành phải từ chức Giám đốc đại diện.',
        whyThisPattern: 'Văn phong họp báo, tuyên bố chính thức N1/N2: thể hiện quyết định đau đớn mang tính đạo nghĩa và trách nhiệm cao nhất.'
      }
    },

    // 4. SO SÁNH MẪU DỄ NHẦM
    confusingComparisons: {
      patterns: [
        {
          pattern: '〜ざるを得ない',
          meaning: 'Đành phải làm (miễn cưỡng)',
          politenessLevel: '⭐⭐⭐ (Trang trọng/Văn viết)',
          nuance: 'Bản thân KHÔNG MUỐN, hoàn cảnh ép buộc, tâm lý miễn cưỡng',
          usageSituation: 'Báo cáo công việc, đưa ra quyết định khó khăn, họp báo'
        },
        {
          pattern: '〜ないわけにはいかない',
          meaning: 'Không thể không làm (vì đạo lý/trách nhiệm)',
          politenessLevel: '⭐⭐ (Lịch sự hội thoại/viết)',
          nuance: 'Xét về chuẩn mực xã hội, quan hệ người với người thì PHẢI LÀM',
          usageSituation: 'Được sếp mời đi nhậu, bạn thân cưới, nghĩa vụ công dân'
        },
        {
          pattern: '〜ずにはいられない',
          meaning: 'Không thể kìm nén được cảm xúc',
          politenessLevel: '⭐⭐ (Diễn đạt cảm xúc tự nhiên)',
          nuance: 'Cảm xúc bột phát từ bên trong (buồn cười, khóc, giận dữ), không kiềm chế được',
          usageSituation: 'Xem phim cảm động rơi nước mắt, nghe chuyện cười thú vị'
        },
        {
          pattern: '〜べきだ',
          meaning: 'Nên / Phải làm (lời khuyên đạo đức)',
          politenessLevel: '⭐ (Đánh giá cá nhân mạnh mẽ)',
          nuance: 'Ý thức đạo đức, ý kiến chủ quan của người nói cho rằng đó là lẽ đương nhiên',
          usageSituation: 'Đưa ra lời khuyên mạnh mẽ hoặc lên án hành vi sai trái'
        }
      ],
      whenNotToUse: '⚠️ TUYỆT ĐỐI KHÔNG DÙNG khi bản thân tự nguyện, hào hứng muốn làm việc đó (ví dụ: "Vì đồ ăn ngon nên tôi đành phải ăn hết" là sai sắc thái). Cũng không dùng cho quy định pháp luật hiển nhiên như "Phải dừng khi đèn đỏ" (dùng なければならない).'
    },

    // 5 & 6. HỌC CHỦ ĐỘNG & CHẨN ĐOÁN LỖI THÔNG MINH
    activeLearning: {
      recognition: {
        question: 'Trong các câu sau, câu nào sử dụng mẫu 〜ざるを得ない đúng ngữ pháp và đúng tâm thức tự nhiên của người Nhật?',
        options: [
          { id: 'A', text: '今日は天気が良くて気持ちがいいので、散歩せざるを得ない。', isCorrect: false, explanation: 'Sai ngữ cảnh! Đi dạo vì thời tiết đẹp là hành động vui vẻ tự nguyện, không dùng ざるを得ない (vốn mang sắc thái miễn cưỡng đau lòng).' },
          { id: 'B', text: '赤信号だから、車を止めざるを得ない。', isCorrect: false, explanation: 'Sai ngữ cảnh! Dừng đèn đỏ là luật giao thông cơ bản hiển nhiên, dùng ~なければならない chứ không phải đành lòng miễn cưỡng.' },
          { id: 'C', text: '主力選手が怪我をしたため、作戦を変更せざるを得なくなった。', isCorrect: true, explanation: 'Chính xác 100%! Cầu thủ chủ lực chấn thương là hoàn cảnh bất khả kháng, khiến ban huấn luyện đành phải thay đổi chiến thuật.' },
          { id: 'D', text: '母の手料理がとても美味しいので、たくさん食べざるを得ない。', isCorrect: false, explanation: 'Sai sắc thái! Cơm mẹ nấu ngon muốn ăn nhiều không phải việc đau lòng ép buộc.' }
        ]
      },
      fillInBlank: {
        prompt: 'Chia động từ する trong ngoặc sang mẫu ngữ pháp "đành phải làm":',
        rawSentence: '予算が大幅に削減されたため、プロジェクトの規模を 縮小（する）_________。',
        targetForm: '縮小せざるを得ない',
        expectedAnswer: 'せざるを得ない',
        acceptableVariants: ['せざるをえない'],
        hint: 'Chú ý động từ する là bất quy tắc duy nhất, chuyển thành せ... chứ KHÔNG PHẢI し...',
        errorDiagnosis: {
          commonMistake: 'しざるを得ない (sai do chia nhầm theo thể ない thông thường しない)',
          errorType: 'conjugation',
          analysis: 'Bạn đã chia する thành しざるを得ない. Trong tiếng Nhật cổ và hiện đại, gốc phủ định của する đi với trợ từ cổ ざる bắt buộc là せ (gốc 未然形 của sa-hen).',
          ruleToRemember: 'Quy tắc vàng N2: Động từ する khi đi với ざるを得ない DUY NHẤT chỉ có dạng: せざるを得ない.',
          similarExample: '妥協せざるを得ない (đành phải thỏa hiệp), 延期せざるを得ない (đành phải hoãn lại).'
        }
      },
      fixError: {
        wrongSentence: '× 給料が上がって嬉しいので、友達に奢らざるを得ない。',
        errorHighlight: '奢らざるを得ない',
        correctSentence: '○ 給料が上がって嬉しいので、友達に奢らないわけにはいかない / 奢ってあげたい。',
        errorType: 'nuance',
        diagnosticAnalysis: 'Mẫu ざるを得ない mang tâm lý "thực sự không muốn nhưng đành phải chịu". Khi được tăng lương và vui mừng chiêu đãi bạn bè, đó là sự phấn khởi hoặc trách nhiệm xã giao vui vẻ, dùng ざるを得ない khiến người Nhật cảm thấy bạn keo kiệt và miễn cưỡng cay đắng.',
        ruleToRemember: 'Chỉ dùng ざるを得ない khi hành động đó gây thiệt hại, đau lòng, tổn thất hoặc đi ngược lại mong muốn cá nhân ban đầu.',
        similarExample: '○ 資金不足のため、計画を断念せざるを得ない (Vì thiếu vốn đành phải từ bỏ kế hoạch).'
      },
      translation: {
        vietnamese: 'Trước những bằng chứng xác thực như vậy, chúng tôi đành phải thừa nhận sự thật đau lòng này.',
        expectedJapanese: 'これほどの確かな証拠を前にしては、このつらい事実を認めざるを得ない。',
        sampleCorrect: 'これほどの証拠を前にしては、つらい事実を認めざるを得ない。',
        keywords: ['確かな証拠 (chứng cứ xác thực)', 'つらい事実 (sự thật đau lòng)', '認めざるを得ない (đành phải công nhận)'],
        tip: 'Dùng 〜を前にしては để tạo tiền đề hoàn cảnh không thể chối cãi, sau đó kết thúc bằng 認めざるを得ない.'
      },
      reflex: {
        scenario: 'Bạn là giám đốc một công ty khởi nghiệp. Do ảnh hưởng của suy thoái kinh tế và chi phí server tăng gấp 3, bạn phải thông báo với toàn bộ nhân viên rằng công ty đành phải cắt giảm 20% nhân sự.',
        taskPrompt: 'Hãy dùng mẫu ざるを得ない để phát biểu một câu vừa chuyên nghiệp, vừa thể hiện sự đau lòng và bất đắc dĩ của ban lãnh đạo:',
        sampleSpeech: '苦渋の決断ではございますが、現在の財務状況を鑑み、人員削減に踏み切らざるを得ない状況となってしまいました。',
        reflexMindset: 'Tư duy của người Nhật ở cấp quản lý: dùng 苦渋の決断 (quyết định cay đắng) kết hợp với 〜ざるを得ない để khẳng định đây là giải pháp đường cùng, không phải ý muốn cá nhân.'
      }
    },

    // 7. SẮC THÁI NGƯỜI NHẬT
    nuanceSpectrum: {
      casual: {
        japanese: 'もう やるしかないよね。',
        situation: 'Nói với bạn thân khi không còn đường lui (chỉ còn cách làm thôi)',
        levelLabel: 'Hội thoại thường nhật (Thân mật)'
      },
      polite: {
        japanese: 'そうせざるを得ませんね。',
        situation: 'Nói với đồng nghiệp trong công việc hàng ngày',
        levelLabel: 'Lịch sự chuẩn mực (Desu/Masu)'
      },
      respectful: {
        japanese: '受け入れざるを得ないかと存じます。',
        situation: 'Trao đổi ý kiến với cấp trên hoặc đối tác kinh doanh',
        levelLabel: 'Tôn kính & Khiêm nhường (Keigo)'
      },
      businessKeigo: {
        japanese: '誠に遺憾ながら、見送らざるを得ない運びとなりました。',
        situation: 'Văn bản email từ chối dự án hoặc thông cáo báo chí chính thức',
        levelLabel: 'Văn phong văn phòng tối cao (Business)'
      },
      writtenFormal: {
        japanese: '計画の抜本的見直しを余儀なくされ、延期せざるを得ない。',
        situation: 'Báo cáo phân tích kinh tế hoặc xã luận báo chí',
        levelLabel: 'Văn viết học thuật / Báo luận'
      },
      insight: 'Người Nhật rất nhạy cảm với việc đổ lỗi hay nhận trách nhiệm. Dùng ざるを得ない là cách tinh tế thông báo rằng: "Mọi nỗ lực cứu vãn đã được thực hiện, nhưng ngoại lực quá lớn buộc chúng tôi phải làm điều này".'
    },

    // 8. PHẦN "HỌC KĨ"
    deepDive: {
      originEtymology: 'ざる là dạng liên thể phủ định trong tiếng Nhật cổ (tương đương với ない hiện đại). を得ない xuất phát từ động từ 得る (eru - có được, làm được), ざるを得ない nghĩa gốc là "không thể có được con đường không làm" -> Bắt buộc phải làm.',
      nuanceDetails: 'Sắc thái cốt lõi: Mang tính tiêu cực, miễn cưỡng, tiếc nuối (Negative / Reluctant mindset). Chủ ngữ thường là ngôi thứ nhất (tôi / chúng tôi) hoặc một tập thể mà người nói đại diện.',
      usageConditions: 'Chỉ đi với động từ chỉ ý chí. Không đi với động từ vô ý chí hoặc hiện tượng tự nhiên đơn thuần.',
      exceptions: ['Động từ する -> せざるを得ない (ngoại lệ duy nhất bắt buộc nhớ).', 'Không dùng cho những việc mang tính vui tươi, tự nguyện.'],
      equivalentPatterns: ['〜ないわけにはいかない (Xét về mặt xã hội không thể không làm)', '〜ほかない / 〜よりほかない (Chỉ còn cách duy nhất là)'],
      oppositePatterns: ['〜わけにはいかない (Tuyệt đối không thể làm)', '〜てはならない (Cấm làm)'],
      commonVietnameseMistakes: [
        'Nhầm chia する thành しざるを得ない (bẫy kinh điển thi JLPT N2).',
        'Dùng lầm trong hoàn cảnh vui mừng, tự nguyện (nhầm với "phải ăn nhiều vì ngon").',
        'Lẫn lộn với 〜ずにはいられない (vốn dùng cho cảm xúc bộc phát như cười/khóc).'
      ]
    },

    // TÍNH NĂNG "TẠI SAO KHÔNG DÙNG MẪU KIA?"
    whyNotTheOther: {
      situation: 'Công ty bạn gặp sự cố rò rỉ dữ liệu nghiêm trọng. Với tư cách Giám đốc kỹ thuật, bạn cần thông báo với Ban Giám đốc rằng toàn bộ hệ thống phải tạm ngừng hoạt động trong 48 giờ để rà soát.',
      targetChoiceQuestion: 'Tại sao câu C là lựa chọn hoàn hảo nhất, và tại sao không nên dùng các mẫu A, B, D?',
      options: [
        {
          id: 'A',
          text: 'システムを停止しなければなりません。',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Lịch sự cơ bản N5',
          relationshipFit: 'Mang tính áp đặt, như đọc luật, thiếu sắc thái đồng cảm với tổn thất kinh doanh.',
          businessAppropriateness: 'Kém tinh tế, nghe như báo cáo máy móc.',
          friendAlternative: 'システム止めなきゃ。',
          verdict: 'Không nên dùng: Quá thô và cứng nhắc.',
          isRecommended: false
        },
        {
          id: 'B',
          text: 'システムを停止しないわけにはいきません。',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Lịch sự N3/N2',
          relationshipFit: 'Nhấn mạnh về mặt đạo nghĩa / trách nhiệm đối với khách hàng.',
          businessAppropriateness: 'Khá tốt, nhưng tập trung vào trách nhiệm hơn là hoàn cảnh kỹ thuật bất khả kháng.',
          friendAlternative: '止めないわけにはいかないよ。',
          verdict: 'Chấp nhận được nhưng chưa nêu bật sự bất khả kháng về kỹ thuật.',
          isRecommended: false
        },
        {
          id: 'C',
          text: 'セキュリティ確保のため、システムを一時停止せざるを得ません。',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Chuẩn mực Business N2/N1',
          relationshipFit: 'Thể hiện rõ: chúng ta không hề muốn ngừng trệ kinh doanh nhưng vì an ninh nên bắt buộc đành phải làm.',
          businessAppropriateness: 'Xuất sắc: Thể hiện tính chuyên nghiệp, đau lòng vì tổn thất nhưng kiên quyết bảo vệ an toàn.',
          friendAlternative: '止めるしかないね。',
          verdict: 'LỰA CHỌN TỐI ƯU NHẤT: Thấu tình đạt lý trong kinh doanh.',
          isRecommended: true
        },
        {
          id: 'D',
          text: 'システムを停止ずにはいられません。',
          isGrammaticallyCorrect: false,
          politenessLevel: 'Sai ngữ pháp nghiêm trọng',
          relationshipFit: 'Mẫu 〜ずにはいられない chỉ dùng cho cảm xúc bột phát (buồn cười, thương xót), không đi với hành động kỹ thuật.',
          businessAppropriateness: 'Hoàn toàn sai: Biến người nói thành kẻ thiếu hiểu biết tiếng Nhật.',
          friendAlternative: 'Sai hoàn toàn.',
          verdict: 'Sai ngữ pháp: Không thể dùng cho hành động có chủ đích.',
          isRecommended: false
        }
      ],
      thinkingRule: 'Khi đưa ra một giải pháp gây tổn thất cho công ty/đối tác mà bạn không còn cách nào khác, LUÔN CHỌN 〜ざるを得ない để vừa giữ tính nghiêm túc, vừa chia sẻ nỗi đau lòng và khẳng định đây là phương án đường cùng.'
    },

    // 9. KIỂM TRA SAU BÀI (MINI-TEST 5 CÂU)
    miniTest: {
      questions: [
        {
          id: 'mt-n2-1',
          tier: 'basic',
          question: 'Động từ 「行く」 khi kết hợp với cấu trúc 〜ざるを得ない sẽ có dạng chia nào?',
          options: [
            { id: 'A', text: '行きざるを得ない', isCorrect: false, explanation: 'Sai thể! Phải chia sang thể Nai bỏ Nai.' },
            { id: 'B', text: '行かざるを得ない', isCorrect: true, explanation: 'Chính xác! 行く -> 行かない -> 行かざるを得ない.' },
            { id: 'C', text: '行ってざるを得ない', isCorrect: false, explanation: 'Không kết hợp với thể て.' },
            { id: 'D', text: '行かざる得ない', isCorrect: false, explanation: 'Thiếu trợ từ を.' }
          ]
        },
        {
          id: 'mt-n2-2',
          tier: 'basic',
          question: 'Động từ bất quy tắc 「する」 kết hợp với 〜ざるを得ない là gì?',
          options: [
            { id: 'A', text: 'しざるを得ない', isCorrect: false, explanation: 'Bẫy thường gặp! する không chia thành し.' },
            { id: 'B', text: 'せざるを得ない', isCorrect: true, explanation: 'Chính xác! する chuyển thành せざるを得ない.' },
            { id: 'C', text: 'すざるを得ない', isCorrect: false, explanation: 'Không có dạng chia này.' },
            { id: 'D', text: 'されざるを得ない', isCorrect: false, explanation: 'Đây là dạng bị động, không phải quy tắc gốc.' }
          ]
        },
        {
          id: 'mt-n2-3',
          tier: 'application',
          question: 'Điền vào chỗ trống: 「これだけ多くの欠陥が見つかった以上、リコールを（　）。」',
          options: [
            { id: 'A', text: '発表せざるを得ない', isCorrect: true, explanation: 'Chính xác! Đã tìm thấy nhiều lỗi thì đành phải công bố thu hồi sản phẩm (recall).' },
            { id: 'B', text: '発表してほしい', isCorrect: false, explanation: 'Bày tỏ mong muốn không phù hợp với ngữ cảnh chịu trách nhiệm.' },
            { id: 'C', text: '発表ずにはいられない', isCorrect: false, explanation: 'Sai ngữ pháp và sai ngữ cảnh cảm xúc.' },
            { id: 'D', text: '発表するはずがない', isCorrect: false, explanation: 'Nghĩa là "chắc chắn không công bố", vô lý.' }
          ]
        },
        {
          id: 'mt-n2-4',
          tier: 'application',
          question: 'Câu nào sau đây KHÔNG THỂ sử dụng mẫu 〜ざるを得ない?',
          options: [
            { id: 'A', text: '赤字が続いたため、工場を閉鎖せざるを得ない。', isCorrect: false, explanation: 'Dùng rất đúng: thua lỗ đành đóng cửa nhà máy.' },
            { id: 'B', text: '先輩に強く勧められて、お酒を飲まざるを得なかった。', isCorrect: false, explanation: 'Dùng đúng: bị ép uống rượu đành phải uống.' },
            { id: 'C', text: '天気がとてもいいので、ピクニックに行かざるを得ない。', isCorrect: true, explanation: 'Chính xác (đây là câu sai)! Đi dã ngoại vui vẻ không thể dùng mẫu miễn cưỡng đau lòng này.' },
            { id: 'D', text: '証拠を突きつけられ、罪を認めざるを得なかった。', isCorrect: false, explanation: 'Dùng rất đúng: trước chứng cứ đành nhận tội.' }
          ]
        },
        {
          id: 'mt-n2-5',
          tier: 'nuance',
          question: 'Sự khác biệt lớn nhất giữa 「〜ざるを得ない」 và 「〜ないわけにはいかない」 là gì?',
          options: [
            { id: 'A', text: 'ざるを得ない nhấn mạnh tâm lý miễn cưỡng/bất đắc dĩ, còn ないわけにはいかない nhấn mạnh nghĩa vụ/đạo đức xã hội.', isCorrect: true, explanation: 'Hoàn toàn chính xác! ざるを得ない là "lòng tôi không muốn nhưng hoàn cảnh ép", còn ないわけにはいかない là "vì phép lịch sự/đạo nghĩa tôi phải làm".' },
            { id: 'B', text: 'ざるを得ない dùng cho bạn bè, ないわけにはいかない chỉ dùng trong văn viết.', isCorrect: false, explanation: 'Sai mức độ trang trọng.' },
            { id: 'C', text: 'Hai mẫu này hoàn toàn giống nhau 100% về mọi mặt.', isCorrect: false, explanation: 'Sai lầm cơ bản của người học đơn giản hóa quá mức.' },
            { id: 'D', text: 'ざるを得ない chỉ dùng cho sự việc vui vẻ tích cực.', isCorrect: false, explanation: 'Ngược hoàn toàn với bản chất.' }
          ]
        }
      ]
    },

    // 10. HỆ THỐNG GHI NHỚ & SRS
    takeawayMemory: {
      goldenQuote: 'ざるを得ない = "Đành cắn răng mà làm": Bản thân KHÔNG MUỐN nhưng hoàn cảnh ép!',
      avoidTrap: 'Tuyệt đối nhớ: する -> せざるを得ない (KHÔNG PHẢI しざる). Không dùng cho việc vui vẻ tự nguyện.',
      realLifeScenario: 'Hủy chuyến bay do bão tuyết, đóng cửa chi nhánh do khủng hoảng kinh tế, thừa nhận sai lầm khi có bằng chứng.',
      srsCards: [
        {
          front: 'Cấu trúc & Ý nghĩa cốt lõi của 〜ざるを得ない',
          back: 'V-ない (bỏ ない) + ざるを得ない (する -> せざるを得ない). Ý nghĩa: Đành phải... dù trong lòng không muốn.',
          mnemonic: 'ざる là KHÔNG (cổ) + 得ない là KHÔNG THỂ. "Không thể không làm" -> Đành cắn răng làm.',
          level: 'N2'
        },
        {
          front: 'Bẫy chia động từ nguy hiểm nhất của 〜ざるを得ない là gì?',
          back: 'Động từ する -> せざるを得ない (Cực kỳ lưu ý: KHÔNG BAO GIỜ là しざるを得ない).',
          mnemonic: 'Chữ "SE" trong せざる - nhớ câu: "SE lòng cắn răng mà làm".',
          level: 'N2'
        },
        {
          front: 'Phân biệt 〜ざるを得ない vs 〜ないわけにはいかない',
          back: 'ざるを得ない: Miễn cưỡng, bất đắc dĩ do ngoại cảnh ép. ないわけにはいかない: Phải làm vì nghĩa vụ đạo đức, phép tắc xã hội.',
          mnemonic: 'ざる: đau khổ miễn cưỡng. わけ: có lý do đạo đức rõ ràng.',
          level: 'N2'
        }
      ]
    },

    // GRAMMAR MAP
    grammarMap: {
      current: '〜ざるを得ない',
      prerequisites: ['Động từ thể ない', '〜なければならない (N5)', '〜わけにはいかない (N3)'],
      nextRecommendations: ['〜を余儀なくされる (N1 - Bị buộc phải)', '〜ずにはいられない (N2 - Không kìm nén được cảm xúc)'],
      easyToConfuseWith: ['〜ないわけにはいかない', '〜ずにはいられない', '〜べきだ'],
      advancedKnowledge: ['Thể phủ định cổ ざる trong tiếng Nhật cổ điển', 'Biến thể trang trọng trong văn bản: 〜せざるを得ぬ'],
      branchDiagramText: `Diễn tả sự bắt buộc / không thể tránh khỏi
   │
   ├── 〜ざるを得ない (Bất đắc dĩ, lòng không muốn nhưng hoàn cảnh ép)
   ├── 〜ないわけにはいかない (Vì đạo nghĩa / chuẩn mực xã hội nên phải làm)
   ├── 〜ずにはいられない (Cảm xúc nội tâm trào dâng không kìm được)
   └── 〜を余儀なくされる (N1: Bị đẩy vào thế đường cùng do ngoại lực cực đại)`
    },

    essenceMeaning: {
      coreMindset: 'Tâm thức miễn cưỡng chấp nhận nghịch cảnh không mong muốn.',
      literalVsReal: 'Nghĩa đen: "Không thể có được việc không làm" -> Nghĩa thực: "Đành phải ngậm ngùi chấp nhận làm".'
    },
    connectionRules: [
      { form: 'Động từ nhóm 1', rule: 'V-a + ざるを得ない', example: '行かざるを得ない (Đành phải đi)' },
      { form: 'Động từ nhóm 2', rule: 'V (bỏ ru) + ざるを得ない', example: '諦めざるを得ない (Đành phải từ bỏ)' },
      { form: 'Động từ nhóm 3', rule: 'する -> せざるを得ない / くる -> こざるを得ない', example: '延期せざるを得ない (Đành phải hoãn)' }
    ],
    comparison: {
      confusingWith: '〜ないわけにはいかない',
      keyDifference: 'ざるを得ない là hoàn cảnh ép buộc dù lòng không muốn; ないわけにはいかない là do đạo đức xã hội.',
      sideBySide: [
        { structure: '〜ざるを得ない', usage: 'Tình thế éo le, bất khả kháng.', nuance: 'Tiếc nuối, miễn cưỡng đau lòng.' },
        { structure: '〜ないわけにはいかない', usage: 'Phép lịch sự, trách nhiệm con người.', nuance: 'Đạo nghĩa xã giao.' }
      ]
    },
    creativeDrills: [
      { context: 'Xe hỏng giữa đường vắng đêm khuya.', prompt: 'Dùng 歩く với ざるを得ない.', modelSentence: '終電もなく車も故障したので、歩かざるを得ない。', explanation: 'Đành phải cuốc bộ về nhà.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× しざるを得ない',
        correctSentence: '○ せざるを得ない',
        whyWrong: 'Động từ する chia với ざる bắt buộc là せざる.'
      }
    ]
  },

  // 5. MIMIKARAOBOERU N1: 〜を余儀なくされる
  {
    id: 'gram-mimi-n1-1',
    level: 'N1',
    textbookSource: 'Mimikaraoboeru N1',
    lessonNumber: 'Bài 1 - Mimikara N1',
    grammar: '〜を余儀なくされる (~o yogi naku sareru)',
    meaning: 'Bị buộc phải... / Rơi vào tình thế không thể không làm (Do yếu tố ngoại cảnh tột cùng)',

    // 1. GIẢI THÍCH SIÊU CƠ BẢN
    simpleExplanation: {
      whatFor: 'Biểu thị việc một người, một tổ chức hoặc một quốc gia bị hoàn cảnh khách quan cực kỳ khắc nghiệt (như thiên tai, chiến tranh, khủng hoảng kinh tế) đẩy vào tình thế đường cùng, không còn lựa chọn nào khác ngoài việc phải làm điều đó.',
      whenToUse: 'Dùng chủ yếu trong văn viết trang trọng bậc nhất, xã luận báo chí, bản tin thời sự thời sự và báo cáo phân tích cấp cao. KHÔNG dùng trong hội thoại suồng sã hàng ngày.',
      plainSummary: 'Giống như ngôn ngữ thời sự: "Do thiên tai tàn phá, hàng ngàn hộ dân đã bị buộc phải sơ tán khẩn cấp".'
    },

    // 2. CẤU TRÚC
    structures: {
      formula: 'Danh từ (hoặc Danh từ hóa Động từ) + を余儀なくされる / を余儀なくさせる',
      verbRule: 'Thường đi với Danh từ hành động (Suru-noun) chỉ sự việc nghiêm trọng như: 変更, 延期, 中止, 撤退, 辞任, 避難.',
      adjectiveRule: 'Không đi trực tiếp với tính từ.',
      nounRule: 'Danh từ + を余儀なくされる (Bị ép buộc) / Danh từ + を余儀なくさせる (Khiến cho ai đó bị ép buộc).',
      relatedForms: '〜を余儀なくさせる: Chủ ngữ là hoàn cảnh gây ra (Ví dụ: Đại dịch đã buộc chúng tôi phải đóng cửa cửa hàng).',
      exceptions: ['Tuyệt đối không dùng cho các vấn đề vặt vãnh hàng ngày của cá nhân (như "hết tiền nên buộc phải ăn mì tôm").'],
      breakdownExamples: [
        {
          sentence: '突如の火山噴火により、住民は 長期にわたる避難生活を 余儀なくされた。',
          furigana: 'とつじょの かざんふんかにより、じゅうみんは ちょうきにわたる ひなんせいかつを よぎなくされた。',
          translation: 'Do núi lửa đột ngột phun trào, người dân đã bị buộc phải sống trong cảnh sơ tán kéo dài.',
          components: [
            { part: '突如の火山噴火により', role: 'Nguyên nhân thiên tai cực độ', explanation: 'Tác nhân ngoại cảnh bất khả kháng' },
            { part: '住民は', role: 'Chủ ngữ chịu tác động', explanation: 'Người dân địa phương' },
            { part: '避難生活を (hinan seikatsu o)', role: 'Danh từ chỉ hành động bị ép', explanation: 'Cuộc sống đi lánh nạn' },
            { part: '余儀なくされた (yogi naku sareta)', role: 'Bị động: bị đẩy vào thế đường cùng', explanation: 'Không có bất cứ lựa chọn nào khác' }
          ]
        },
        {
          sentence: '急激な為替変動が、同社に 事業計画の大幅な見直しを 余儀なくさせた。',
          furigana: 'きゅうげきな かわせへんどうが、どうしゃに じぎょうけいかくの おおはばな みなおしを よぎなくさせた。',
          translation: 'Biến động tỷ giá hối đoái đột ngột đã buộc công ty này phải xem xét lại toàn diện kế hoạch kinh doanh.',
          components: [
            { part: '急激な為替変動が', role: 'Chủ ngữ tác nhân (Ngoại cảnh)', explanation: 'Tỷ giá thay đổi mạnh' },
            { part: '同社に (dousha ni)', role: 'Đối tượng bị tác động', explanation: 'Doanh nghiệp đó' },
            { part: '見直しを', role: 'Tân ngữ hành động', explanation: 'Việc rà soát, xem xét lại' },
            { part: '余儀なくさせた (sai khiến)', role: 'Bắt buộc đối phương phải làm', explanation: 'Dạng chủ động gây áp lực' }
          ]
        }
      ]
    },

    // 3. VÍ DỤ THEO 3 CẤP ĐỘ
    threeTierExamples: {
      basic: {
        japanese: '大雪のため、飛行機は 出発の延期を 余儀なくされた。',
        furigana: 'おおゆきのため、ひこうきは しゅっぱつのえんきを よぎなくされた。',
        romaji: 'Ooyuki no tame, hikouki wa shuppatsu no enki o yogi naku sareta.',
        vietnamese: 'Do tuyết rơi dày, chuyến bay đã buộc phải hoãn giờ khởi hành.',
        whyThisPattern: 'Dù ở cấp độ cơ bản, mẫu này luôn gắn với sự kiện công cộng trang trọng bị tác động bởi thời tiết khắc nghiệt.'
      },
      intermediate: {
        japanese: '度重なる赤字決算により、同社は 海外事業からの撤退を 余儀なくされた。',
        furigana: 'たびかさなる あかじけっさんに より、どうしゃは かいがいじぎょうからの てったいを よぎなくされた.',
        romaji: 'Tabikasanaru akaji kessan ni yori, dousha wa kaigai jigyou kara no tettai o yogi naku sareta.',
        vietnamese: 'Do liên tục thua lỗ trong các kỳ quyết toán, công ty đã buộc phải rút lui khỏi mảng kinh doanh ở nước ngoài.',
        whyThisPattern: 'Bản tin kinh tế tài chính N2/N1: thể hiện bước ngoặt chiến lược đau đớn của tập đoàn kinh tế.'
      },
      advanced: {
        japanese: '長引く紛争と深刻な食糧危機は、罪なき何百万もの市民に 故郷を離れることを余儀なくさせている。',
        furigana: 'ながびく ふんそうと しんこくな しょくりょうききは、つみなき なんびゃくまんもの しみんに こきょうを はなれることを よぎなくさせている。',
        romaji: 'Nagabiku funsou to shinkoku na shokuryou kiki wa, tsumi naki nanbyakuman mono shimin ni kokyou o hanareru koto o yogi naku sasete iru.',
        vietnamese: 'Xung đột kéo dài cùng cuộc khủng hoảng lương thực trầm trọng đang buộc hàng triệu thường dân vô tội phải rời bỏ quê hương.',
        whyThisPattern: 'Văn phong chính luận thời sự quốc tế chuẩn N1: dùng dạng sai khiến を余儀なくさせている để miêu tả thảm họa nhân đạo do hoàn cảnh gây ra.'
      }
    },

    // 4. SO SÁNH MẪU DỄ NHẦM
    confusingComparisons: {
      patterns: [
        {
          pattern: '〜を余儀なくされる',
          meaning: 'Bị buộc phải làm (do ngoại lực tột cùng)',
          politenessLevel: '⭐⭐⭐⭐ (Văn viết trang trọng đỉnh cao N1)',
          nuance: 'Sự kiện lớn, tầm cỡ xã hội/tổ chức, hoàn cảnh cực kỳ khắc nghiệt, không dùng cho việc nhỏ',
          usageSituation: 'Báo chí, xã luận, tin tức quốc tế, bản cáo bạch tài chính'
        },
        {
          pattern: '〜ざるを得ない',
          meaning: 'Đành phải làm (miễn cưỡng cá nhân/tổ chức)',
          politenessLevel: '⭐⭐⭐ (Trang trọng N2)',
          nuance: 'Có thể dùng cho cả quyết định cá nhân hoặc công việc hàng ngày, mang tính miễn cưỡng',
          usageSituation: 'Họp công ty, viết báo cáo nội bộ, đưa ra quyết định khó khăn'
        },
        {
          pattern: '〜を強いられる (~o shiirareru)',
          meaning: 'Bị ép buộc / Bị áp đặt gánh nặng',
          politenessLevel: '⭐⭐⭐⭐ (Văn viết N1)',
          nuance: 'Nhấn mạnh vào nỗi khổ cực, gánh nặng, bất công mà nạn nhân phải chịu đựng',
          usageSituation: 'Miêu tả cuộc sống gian khổ, làm việc quá sức, chính sách áp bức'
        }
      ],
      whenNotToUse: '⚠️ TUYỆT ĐỐI KHÔNG DÙNG trong văn nói thường ngày hoặc cho những việc nhỏ nhặt của đời sống cá nhân (ví dụ: "Vì quên ví nên tôi bị buộc phải nhịn ăn trưa" là sai văn phong hoàn toàn, nghe vô cùng kỳ quặc và kệch cỡm). Phải dùng cho sự kiện có sức nặng lớn.'
    },

    // 5 & 6. HỌC CHỦ ĐỘNG & CHẨN ĐOÁN LỖI THÔNG MINH
    activeLearning: {
      recognition: {
        question: 'Trong các tình huống sau, trường hợp nào sử dụng mẫu 〜を余儀なくされる là tự nhiên và đúng tầm văn phong N1 nhất?',
        options: [
          { id: 'A', text: '雨で靴が濡れたので、新しい靴の購入を余儀なくされた。', isCorrect: false, explanation: 'Sai ngữ cảnh! Việc ướt giày mua giày mới là việc sinh hoạt vụn vặt cá nhân, không xứng tầm dùng mẫu trang trọng N1 này.' },
          { id: 'B', text: '新型コロナウイルスの世界的感染拡大により、東京五輪は 異例の1年延期を余儀なくされた。', isCorrect: true, explanation: 'Tuyệt đối chính xác! Đại dịch toàn cầu làm hoãn Thế vận hội Olympic là sự kiện tầm cỡ thế giới có sức ảnh hưởng cực đại.' },
          { id: 'C', text: '宿題を忘れたため、先生に謝罪を余儀なくされた。', isCorrect: false, explanation: 'Sai tầm văn phong! Quên bài tập xin lỗi cô giáo chỉ là sinh hoạt học sinh, nghe rất gượng gạo.' },
          { id: 'D', text: 'お腹が空いたので、夜食を食べることを余儀なくされた。', isCorrect: false, explanation: 'Sai hoàn toàn! Đói bụng ăn khuya là hành động sinh lý tự nguyện, cấm dùng.' }
        ]
      },
      fillInBlank: {
        prompt: 'Phân biệt dạng Bị động (される) và Sai khiến (させる) trong câu sau:',
        rawSentence: '世界的な半導体不足が、自動車メーカー各社に 減産を_________。',
        targetForm: '余儀なくさせた',
        expectedAnswer: '余儀なくさせた',
        acceptableVariants: ['よぎなくさせた'],
        hint: 'Chủ ngữ trong câu là "Sự thiếu hụt chip bán dẫn (ngoại cảnh)" và đối tượng nhận là "các hãng xe (に)", nên phải dùng dạng SAI KHIẾN (させる).',
        errorDiagnosis: {
          commonMistake: '余儀なくされた (chia nhầm sang bị động)',
          errorType: 'nuance',
          analysis: 'Bạn đã chọn dạng bị động 余儀なくされた. Chú ý cấu trúc: Nếu chủ ngữ là THỦ PHẠM/HOÀN CẢNH (半導体不足が) và đối tượng là (...に), ta phải dùng dạng sai khiến: [Hoàn cảnh] が [Đối tượng] に [Hành động] を 余儀なくさせた.',
          ruleToRemember: 'A が B に 〜を余儀なくさせる (A buộc B phải làm). Ngược lại: B は 〜を余儀なくされる (B bị buộc phải làm).',
          similarExample: '戦争が 人々に 避難を余儀なくさせた (Chiến tranh đã buộc người dân phải lánh nạn).'
        }
      },
      fixError: {
        wrongSentence: '× 財布を落としてお金がないから、友達にお金を借りることを余儀なくされた。',
        errorHighlight: '借りることを余儀なくされた',
        correctSentence: '○ 財布を落としてお金がないから、友達にお金を借りざるを得なかった / 借りるしかなかった。',
        errorType: 'nuance',
        diagnosticAnalysis: 'Mất ví mượn tiền bạn là việc cá nhân thường nhật. Mẫu を余儀なくされる là văn phong chính luận N1, dùng trong trường hợp này bị người Nhật đánh giá là nói quá lố bịch (誇張しすぎ) hoặc không hiểu văn phong.',
        ruleToRemember: 'Việc cá nhân hàng ngày -> Dùng ざるを得ない hoặc しかない. Sự kiện lớn, thiên tai, tập đoàn, quốc gia -> Mới dùng を余儀なくされる.',
        similarExample: '○ 財政破綻により、自治体は 財政再建計画の策定を余儀なくされた (Do vỡ nợ, chính quyền địa phương buộc phải lập kế hoạch tái thiết).'
      },
      translation: {
        vietnamese: 'Do ảnh hưởng nặng nề của trận động đất, nhà máy buộc phải tạm dừng vận hành vô thời hạn.',
        expectedJapanese: '大地震の甚大な被害により、工場は 無期限の操業停止を 余儀なくされた。',
        sampleCorrect: '地震の甚大な被害により、工場は 無期限の操業停止を余儀なくされた。',
        keywords: ['甚大な被害 (thiệt hại nặng nề)', '無期限の操業停止 (tạm dừng vận hành vô thời hạn)', '余儀なくされた (bị buộc phải)'],
        tip: 'Dùng từ vựng cao cấp N1 như 甚大 (jindai) và 操業停止 (sougyou teishi) để tương xứng với độ trang trọng của mẫu ngữ pháp.'
      },
      reflex: {
        scenario: 'Bạn là phát ngôn viên của một hãng hàng không quốc tế. Do tro bụi núi lửa bao phủ toàn bộ không phận khu vực, bạn cần đưa ra thông cáo báo chí chính thức giải thích việc hủy toàn bộ 120 chuyến bay trong hôm nay.',
        taskPrompt: 'Hãy sử dụng mẫu 〜を余儀なくされる trong thông cáo báo chí để thể hiện sự tôn nghiêm và tính bất khả kháng:',
        sampleSpeech: '火山灰による視界不良と航空機の安全確保の観点から、本日発着予定の全便につきまして、運航の取りやめを余儀なくされましたことを深くお詫び申し上げます。',
        reflexMindset: 'Tư duy thông cáo báo chí N1: nêu rõ nguyên nhân an toàn (安全確保の観点から) + Danh từ hóa hành động (運航の取りやめ) + を余儀なくされました + Lời tạ lỗi chân thành.'
      }
    },

    // 7. SẮC THÁI NGƯỜI NHẬT
    nuanceSpectrum: {
      casual: {
        japanese: 'どうしようもなくて、諦めるしかなかったよ。',
        situation: 'Nói chuyện phiếm với bạn bè (không có cách nào khác ngoài việc từ bỏ)',
        levelLabel: 'Hội thoại thông thường (Văn nói)'
      },
      polite: {
        japanese: '中止せざるを得なくなりました。',
        situation: 'Thông báo trong nhóm làm việc hoặc email nội bộ',
        levelLabel: 'Lịch sự thường dùng'
      },
      respectful: {
        japanese: '見直しを余儀なくされる事態となりました。',
        situation: 'Báo cáo với Hội đồng Quản trị hoặc cổ đông',
        levelLabel: 'Trang trọng công sở'
      },
      businessKeigo: {
        japanese: '断腸の思いで、事業の凍結を余儀なくされた次第でございます。',
        situation: 'Họp báo chính thức tuyên bố đóng băng dự án',
        levelLabel: 'Văn phong nghi lễ tối thượng'
      },
      writtenFormal: {
        japanese: '地政学的リスクの高まりは、多国籍企業に サプライチェーンの再構築を 余儀なくさせている。',
        situation: 'Bài viết xã luận trên báo Nikkei hoặc luận văn kinh tế',
        levelLabel: 'Văn luận học thuật N1'
      },
      insight: 'Đối với người Nhật, việc phân biệt đúng trường hợp sử dụng của ngữ pháp N1 phản ánh trực tiếp học vấn và sự am hiểu văn hóa xã hội. Đem ngữ pháp N1 vào chuyện vụn vặt cá nhân bị coi là thiếu hiểu biết về không gian ngôn ngữ (場).'
    },

    // 8. PHẦN "HỌC KĨ"
    deepDive: {
      originEtymology: '余儀 (yogi) là từ Hán cổ nghĩa là "kế sách khác", "con đường khác" (yogi = dư nghi). 余儀なく nghĩa là "không có con đường nào khác". Kết hợp với dạng bị động される trở thành: "bị đẩy vào tình thế không còn con đường nào khác".',
      nuanceDetails: 'Sức nặng văn phong: Cực kỳ nặng nề, chỉ dùng cho các biến cố lớn mang tính bước ngoặt, thảm họa, hoặc khủng hoảng nghiêm trọng.',
      usageConditions: 'Chỉ đi với Danh từ (đặc biệt là Danh từ Hán tự hai chữ biểu thị hành động lớn như 延期, 中止, 撤退, 辞任, 解散).',
      exceptions: ['Không dùng cho chủ ngữ cá nhân trong sinh hoạt bình thường.', 'Cần chú ý cặp chủ - tớ: 〜を余儀なくされる (Bị động) vs 〜を余儀なくさせる (Sai khiến).'],
      equivalentPatterns: ['〜を強いられる (Bị ép buộc chịu gánh nặng)', '〜に追い込まれる (Bị dồn vào chân tường)'],
      oppositePatterns: ['〜を自発的に行う (Tự nguyện chủ động làm)', '〜の選択肢に恵まれる (Có nhiều lựa chọn thuận lợi)'],
      commonVietnameseMistakes: [
        'Nhầm lẫn giữa thể Bị động (される) và thể Sai khiến (させる) trong các câu hỏi ngữ pháp JLPT N1.',
        'Lạm dụng mẫu này cho việc cá nhân (như đi muộn, hết tiền, ốm nhẹ).',
        'Quên mất trợ từ を đi kèm trước cụm từ (viết nhầm thành が余儀なくされる).'
      ]
    },

    // TÍNH NĂNG "TẠI SAO KHÔNG DÙNG MẪU KIA?"
    whyNotTheOther: {
      situation: 'Trận bão lũ lịch sử cuốn trôi cây cầu huyết mạch duy nhất nối liền thị trấn. Là thị trưởng, bạn viết báo cáo khẩn gửi lên Thủ tướng Chính phủ.',
      targetChoiceQuestion: 'Tại sao câu B là câu văn chuẩn mực nhất trong bản báo cáo gửi Thủ tướng?',
      options: [
        {
          id: 'A',
          text: '橋が壊れたので、迂回ルートを通らなければなりません。',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Lịch sự N5',
          relationshipFit: 'Quá đơn giản và ngô nghê, giống như học sinh tiểu học viết văn.',
          businessAppropriateness: 'Kém: Báo cáo công quyền gửi Thủ tướng không thể dùng văn phong sơ cấp này.',
          friendAlternative: '橋壊れたから遠回りしなきゃ。',
          verdict: 'Không phù hợp: Quá sơ cấp và thiếu tính nghiêm trọng của thảm họa.',
          isRecommended: false
        },
        {
          id: 'B',
          text: '唯一の架橋流失に伴い、住民は 危険な山岳ルートへの迂回を 余儀なくされております。',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Văn phong hành chính công N1 đỉnh cao',
          relationshipFit: 'Trang trọng tuyệt đối, thể hiện rõ tính cấp bách của thảm họa thiên tai và sự bất khả kháng.',
          businessAppropriateness: 'Hoàn hảo: Đúng chuẩn mực văn kiện nhà nước gửi lãnh đạo cấp cao.',
          friendAlternative: '山道回るしかないんだよ。',
          verdict: 'LỰA CHỌN TỐI ƯU NHẤT: Thể hiện đẳng cấp ngôn ngữ chính luận N1.',
          isRecommended: true
        },
        {
          id: 'C',
          text: '橋が流されたから、迂回せざるを得ないですね。',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Hội thoại công việc N2',
          relationshipFit: 'Nghe giống như cuộc trò chuyện giữa hai đồng nghiệp bình thường hơn là văn bản chính thức gửi cấp trên.',
          businessAppropriateness: 'Chưa đủ tầm trang trọng cho báo cáo thảm họa quốc gia.',
          friendAlternative: '迂回せざるを得ないね。',
          verdict: 'Chưa đủ độ trang trọng đối với văn kiện chính phủ.',
          isRecommended: false
        },
        {
          id: 'D',
          text: '橋がないので、迂回しないわけにはいかないです。',
          isGrammaticallyCorrect: true,
          politenessLevel: 'Lịch sự thông thường',
          relationshipFit: 'Mẫu ないわけにはいかない nhấn mạnh vào trách nhiệm xã hội, không phù hợp để miêu tả tình trạng bị dồn vào chân tường vì thiên tai.',
          businessAppropriateness: 'Sai lệch sắc thái: Thiên tai không phải là vấn đề nghĩa vụ xã giao.',
          friendAlternative: '迂回しないわけにはいかないよ。',
          verdict: 'Sai sắc thái cốt lõi: Không toát lên sự đe dọa của thiên tai.',
          isRecommended: false
        }
      ],
      thinkingRule: 'Trong các văn kiện chính trị, kinh tế, báo cáo thiên tai và thông cáo báo chí cấp cao: LUÔN DÙNG 〜を余儀なくされる khi muốn truyền tải thông điệp về sự bất khả kháng và mức độ nghiêm trọng mang tính lịch sử.'
    },

    // 9. KIỂM TRA SAU BÀI (MINI-TEST 5 CÂU)
    miniTest: {
      questions: [
        {
          id: 'mt-n1-1',
          tier: 'basic',
          question: 'Điền trợ từ chính xác: 「予期せぬトラブルにより、計画の変更（　）余儀なくされた。」',
          options: [
            { id: 'A', text: 'に', isCorrect: false, explanation: 'Sai trợ từ! Mẫu chuẩn đi với を.' },
            { id: 'B', text: 'を', isCorrect: true, explanation: 'Chính xác! Cấu trúc chuẩn là: [Danh từ] + を余儀なくされる.' },
            { id: 'C', text: 'が', isCorrect: false, explanation: 'Không dùng が trong mẫu này.' },
            { id: 'D', text: 'で', isCorrect: false, explanation: 'Không dùng で.' }
          ]
        },
        {
          id: 'mt-n1-2',
          tier: 'basic',
          question: 'Ý nghĩa gốc của từ Hán 「余儀 (yogi)」 trong mẫu ngữ pháp này là gì?',
          options: [
            { id: 'A', text: 'Kế sách khác / Phương án khác', isCorrect: true, explanation: 'Chính xác! 余 (dư) + 儀 (nghi - suy tính/kế sách). 余儀なく = không còn kế sách nào khác.' },
            { id: 'B', text: 'Sự nghi ngờ dư thừa', isCorrect: false, explanation: 'Hiểu sai chữ Hán.' },
            { id: 'C', text: 'Thời gian rảnh rỗi', isCorrect: false, explanation: 'Nhầm sang 余暇 (yoka).' },
            { id: 'D', text: 'Nghi lễ chính thức', isCorrect: false, explanation: 'Nhầm sang 儀式 (gishiki).' }
          ]
        },
        {
          id: 'mt-n1-3',
          tier: 'application',
          question: 'Chọn câu chia dạng SAI KHIẾN (させる) đúng ngữ pháp:',
          options: [
            { id: 'A', text: '長引く不況が、多くの企業に 倒産を余儀なくさせた。', isCorrect: true, explanation: 'Chính xác! [Hoàn cảnh bất khả kháng (不況が)] + [Đối tượng (企業に)] + [Hành động を] + 余儀なくさせた.' },
            { id: 'B', text: '多くの企業が、不況に 倒産を余儀なくさせた。', isCorrect: false, explanation: 'Sai chủ ngữ! Doanh nghiệp là nạn nhân, phải dùng bị động (余儀なくされた).' },
            { id: 'C', text: '不況は、企業を 倒産に余儀なくさせた。', isCorrect: false, explanation: 'Sai vị trí trợ từ に và を.' },
            { id: 'D', text: '企業に倒産を余儀なくされた不況。', isCorrect: false, explanation: 'Câu tối nghĩa, đảo lộn logic.' }
          ]
        },
        {
          id: 'mt-n1-4',
          tier: 'application',
          question: 'Trường hợp nào sau đây là TỰ NHIÊN NHẤT khi sử dụng 〜を余儀なくされる?',
          options: [
            { id: 'A', text: '風邪を引いたので、学校を休むことを余儀なくされた。', isCorrect: false, explanation: 'Nghỉ học vì cảm cúm là việc nhỏ, dùng mẫu N1 này là gượng gạo thái quá.' },
            { id: 'B', text: '戦争の激化に伴い、大使館員らは 国外への緊急退避を 余儀なくされた。', isCorrect: true, explanation: 'Hoàn toàn chính xác! Chiến tranh ác liệt khiến nhân viên đại sứ quán phải sơ tán khẩn cấp là sự kiện lớn chuẩn mực N1.' },
            { id: 'C', text: '傘が壊れたので、濡れて帰ることを余儀なくされた。', isCorrect: false, explanation: 'Hỏng ô đi mưa về là chuyện vụn vặt, không phù hợp.' },
            { id: 'D', text: 'ゲームで負けたので、罰ゲームを余儀なくされた。', isCorrect: false, explanation: 'Chơi game bị phạt không thể dùng mẫu văn phong chính luận này.' }
          ]
        },
        {
          id: 'mt-n1-5',
          tier: 'nuance',
          question: 'Phát biểu nào sau đây đúng nhất về không gian sử dụng (場) của ngữ pháp N1 〜を余儀なくされる?',
          options: [
            { id: 'A', text: 'Có thể dùng tự do trong mọi cuộc tán gẫu bạn bè và tin nhắn thường nhật.', isCorrect: false, explanation: 'Hoàn toàn sai, sẽ bị người Nhật coi là kỳ quặc.' },
            { id: 'B', text: 'Chỉ dành riêng cho văn viết báo chí, xã luận, thông cáo báo chí cấp cao và sự kiện có tính bước ngoặt nghiêm trọng.', isCorrect: true, explanation: 'Chính xác 100%! Đây là quy chuẩn thẩm mỹ và sắc thái ngôn ngữ của người Nhật bản xứ.' },
            { id: 'C', text: 'Chỉ dùng cho các sự kiện vui tươi, kỷ niệm ngày hội.', isCorrect: false, explanation: 'Mẫu này mang sắc thái bi kịch và bất khả kháng, không dùng cho sự kiện vui vẻ.' },
            { id: 'D', text: 'Nghĩa y hệt 100% như 〜てください nhưng thêm chữ Kanji cho đẹp.', isCorrect: false, explanation: 'Hoàn toàn sai lầm.' }
          ]
        }
      ]
    },

    // 10. HỆ THỐNG GHI NHỚ & SRS
    takeawayMemory: {
      goldenQuote: '〜を余儀なくされる = "Bước đường cùng do ngoại cảnh lớn": Thiên tai, chiến tranh, khủng hoảng ép buộc!',
      avoidTrap: 'CẤM dùng cho việc cá nhân vặt vãnh. Phân biệt kỹ: [Chủ thể] は 〜を余儀なくされる (bị ép) vs [Hoàn cảnh] が 〜を余儀なくさせる (ép buộc).',
      realLifeScenario: 'Sơ tán khẩn cấp do núi lửa, hủy bỏ Olympic do đại dịch, rút vốn đầu tư do chiến tranh thương mại.',
      srsCards: [
        {
          front: 'Cấu trúc & Cấp độ ngữ cảm của 〜を余儀なくされる',
          back: 'Danh từ + を余儀なくされる (Bị động) / を余儀なくさせる (Sai khiến). Cấp độ: Văn viết chính luận báo chí N1 đỉnh cao.',
          mnemonic: '余儀 (Không còn cách nào khác) + なく + される (Bị đẩy vào thế đường cùng).',
          level: 'N1'
        },
        {
          front: 'Phân biệt 〜を余儀なくされる vs 〜を余儀なくさせる',
          back: '• される (Bị động): [Nạn nhân] は [Hành động] を余儀なくされる.\n• させる (Sai khiến): [Hoàn cảnh] が [Đối tượng] に [Hành động] を余儀なくさせる.',
          mnemonic: 'SARETA = Nạn nhân BỊ ép. SASETA = Hoàn cảnh ÉP người khác.',
          level: 'N1'
        },
        {
          front: 'Tại sao không được dùng 〜を余儀なくされる cho việc cá nhân (như mất ví, hỏng ô)?',
          back: 'Vì mẫu này mang sức nặng chính luận lịch sử. Dùng cho việc vặt sẽ bị đánh giá là lố bịch, không hiểu không gian ngôn ngữ.',
          mnemonic: 'Chỉ dùng khi có "sự kiện chấn động" tầm cỡ xã hội / tổ chức.',
          level: 'N1'
        }
      ]
    },

    // GRAMMAR MAP
    grammarMap: {
      current: '〜を余儀なくされる',
      prerequisites: ['〜ざるを得ない (N2)', 'Thể bị động & thể sai khiến (N4)', '〜ないわけにはいかない (N3)'],
      nextRecommendations: ['〜を強いられる (N1 - Bị ép buộc gánh nặng)', '〜に至っては (N1 - Đến mức như...)'],
      easyToConfuseWith: ['〜ざるを得ない', '〜を強いられる', '〜に追い込まれる'],
      advancedKnowledge: ['Cấu trúc từ Hán cổ 余儀 (yogi)', 'Dạng văn học cổ: 〜余儀なくせらる'],
      branchDiagramText: `Diễn tả sự ép buộc từ hoàn cảnh (Cấp độ N2 -> N1)
   │
   ├── 〜ざるを得ない (N2: Miễn cưỡng cá nhân / công việc hàng ngày)
   ├── 〜ないわけにはいかない (N3: Đạo nghĩa xã hội)
   └── 〜を余儀なくされる (N1: Thiên tai, chiến tranh, biến cố lịch sử đẩy vào thế đường cùng)`
    },

    essenceMeaning: {
      coreMindset: 'Tâm thức trước sức mạnh bất khả kháng của thiên nhiên, thời thế và vận mệnh.',
      literalVsReal: 'Nghĩa đen: "Không còn kế sách nào khác" -> Nghĩa thực: "Rơi vào bước đường cùng do hoàn cảnh lịch sử/thiên tai".'
    },
    connectionRules: [
      { form: 'Danh từ hành động', rule: 'Danh từ + を余儀なくされる', example: '避難を余儀なくされた (Buộc phải đi sơ tán)' },
      { form: 'Dạng sai khiến', rule: 'Ngoại cảnh + が + Ai đó + に + を余儀なくさせる', example: '不況が企業に縮小を余儀なくさせた (Khủng hoảng buộc công ty phải thu hẹp)' }
    ],
    comparison: {
      confusingWith: '〜ざるを得ない',
      keyDifference: 'ざるを得ない dùng được cho quyết định cá nhân đời thường; を余儀なくされる chỉ dùng cho biến cố tầm cỡ xã hội/thiên tai/kinh tế vĩ mô.',
      sideBySide: [
        { structure: '〜を余儀なくされる', usage: 'Biến cố lớn, văn viết báo chí N1.', nuance: 'Tính chất lịch sử, bất khả kháng cao nhất.' },
        { structure: '〜ざるを得ない', usage: 'Công việc, quyết định cá nhân N2.', nuance: 'Miễn cưỡng đau lòng.' }
      ]
    },
    creativeDrills: [
      { context: 'Tro bụi núi lửa làm tê liệt sân bay quốc tế.', prompt: 'Dùng 全便の欠航 với を余儀なくされる.', modelSentence: '火山灰の影響により、空港は全便の欠航を余儀なくされた。', explanation: 'Tất cả chuyến bay buộc phải bị hủy do tro bụi.' }
    ],
    commonMistakes: [
      {
        wrongSentence: '× 雨が降ったから、傘を買うことを余儀なくされた。',
        correctSentence: '○ 雨が降ったから、傘を買わざるを得なかった / 買うしかなかった。',
        whyWrong: 'Việc mưa mua ô là chuyện nhỏ nhặt cá nhân, không xứng tầm ngữ pháp N1.'
      }
    ]
  }
];
