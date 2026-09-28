import { JLPTExamPackage } from '../jlptExams';
import { N1_CHOUKAI_QUESTIONS } from '../choukai/n1Choukai';

export const EXAM_N1_PACKAGE: JLPTExamPackage = {
  id: 'exam-n1-2019-12',
  level: 'N1',
  year: '2019-12',
  title: 'Đề Thi Thật JLPT N1 (Kỳ Tháng 12/2019 & 2020)',
  totalTimeMinutes: 110,
  questions: [
    // --- TỪ VỰNG N1 (15 câu) ---
    {
      id: 'n1-v-1',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '新首相の 就任演説は 国民の 不安を 【払拭】 した。',
      options: [
        { id: 'A', text: 'ふっしょく', isCorrect: true, analysis: 'ĐÚNG: 払拭 (Phất Thức - xua tan hoài nghi/bất an) đọc là ふっしょく.' },
        { id: 'B', text: 'ふつしょく', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'はいしょく', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'はっしょく', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 払拭 = ふっしょく (âm ngắt). Đi với 不安・懸念を払拭する.',
      relatedKnowledge: 'Từ vựng N1: 不安を払拭する (Xua tan nỗi lo).'
    },
    {
      id: 'n1-v-2',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '景気の 回復の 兆しは （　　） 見られない。',
      options: [
        { id: 'A', text: 'いささかも', isCorrect: true, analysis: 'ĐÚNG: いささかも... ない (Một chút xíu cũng không mảy may thấy).' },
        { id: 'B', text: 'さも', isCorrect: false, analysis: 'SAI: さも... そうに (Cứ như thể là).' },
        { id: 'C', text: 'よもや', isCorrect: false, analysis: 'SAI: よもや... ないだろう (Không lẽ nào mà...).' },
        { id: 'D', text: 'いっそ', isCorrect: false, analysis: 'SAI: Thà rằng.' }
      ],
      speed30sTip: 'Mẹo: Đi với phủ định: いささかも〜ない (Mảy may một chút cũng không).',
      relatedKnowledge: 'Phó từ N1: いささかも, よもや, さも.'
    },
    {
      id: 'n1-v-3',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '激しい 議論の 末、双方が 妥協点を見出し、事態は ようやく 【しゅうそく】 に向かった。',
      options: [
        { id: 'A', text: '収束', isCorrect: true, analysis: 'ĐÚNG: 収束 (Thu Thúc - lắng xuống, dàn xếp ổn thỏa sự việc).' },
        { id: 'B', text: '終束', isCorrect: false, analysis: 'SAI chữ Hán.' },
        { id: 'C', text: '集束', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '収息', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Dàn xếp sự việc lắng dịu: 収束 (Phân biệt với 終息 là dập tắt hoàn toàn dịch bệnh).',
      relatedKnowledge: 'Cặp từ dễ nhầm lẫn N1: 収束 vs 終息.'
    },
    {
      id: 'n1-v-4',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '長年の 功績が 認められ、教授は 【栄誉】 ある 賞を 授与された。',
      options: [
        { id: 'A', text: 'えいよ', isCorrect: true, analysis: 'ĐÚNG: Vinh Dự = 栄誉 (えいよ).' },
        { id: 'B', text: 'えいゆ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'こうよ', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'こうゆ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 栄誉 = えいよ (Vinh dự cao quý).',
      relatedKnowledge: 'Chữ Hán 誉 (Dự).'
    },
    {
      id: 'n1-v-5',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '彼の 発言は 状況を （　　） 悪化させる 結果と なった。',
      options: [
        { id: 'A', text: 'いたずらに', isCorrect: true, analysis: 'ĐÚNG: 徒らに (いたずらに - vô ích, chỉ tổ làm sự việc thêm tệ hại).' },
        { id: 'B', text: 'むやみに', isCorrect: false, analysis: 'SAI: むやみに là thiếu suy nghĩ bừa bãi.' },
        { id: 'C', text: 'やたらと', isCorrect: false, analysis: 'SAI: Quá nhiều dồn dập.' },
        { id: 'D', text: 'もっぱら', isCorrect: false, analysis: 'SAI: Hầu như chuyên chú.' }
      ],
      speed30sTip: 'Mẹo: Đi với xấu đi vô ích: いたずらに悪化させる / いたずらに時を過ごす.',
      relatedKnowledge: 'Phó từ N1 cổ điển: 徒らに (いたずらに).'
    },
    {
      id: 'n1-v-6',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '大統領の 突然の 辞任表明に、政界は 一時 【きょうこう】 状態に 陥った。',
      options: [
        { id: 'A', text: '恐慌', isCorrect: true, analysis: 'ĐÚNG: Khủng Hoảng = 恐慌 (きょうこう - hoảng loạn, khủng hoảng cực độ).' },
        { id: 'B', text: '恐降', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '驚慌', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '狂慌', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Trạng thái hoảng loạn: 恐慌状態 (きょうこうじょうたい).',
      relatedKnowledge: 'Từ vựng chính trị - kinh tế: 恐慌.'
    },
    {
      id: 'n1-v-7',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: 'これまでの 慣習を （　　） 打破し、新たな 制度を 構築する。',
      options: [
        { id: 'A', text: '果敢に', isCorrect: true, analysis: 'ĐÚNG: 果敢に (かかんに - quả cảm, dũng cảm quyết đoán).' },
        { id: 'B', text: '猛烈に', isCorrect: false, analysis: 'SAI: Mãnh liệt bão tố.' },
        { id: 'C', text: '強硬に', isCorrect: false, analysis: 'SAI: Cứng rắn đối đầu.' },
        { id: 'D', text: '執拗に', isCorrect: false, analysis: 'SAI: Ngoan cố bám riết phiền toái.' }
      ],
      speed30sTip: 'Mẹo: Phá vỡ thói quen bằng sự dũng cảm: 果敢に打破する / 果敢に挑戦する.',
      relatedKnowledge: 'Từ vựng N1: 果敢 (Quả Cảm).'
    },
    {
      id: 'n1-v-8',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '相手の 策略に まんまと 【はまった】。',
      options: [
        { id: 'A', text: '嵌まった', isCorrect: true, analysis: 'ĐÚNG: 嵌まる (はまる - sập bẫy, trúng kế mưu mô).' },
        { id: 'B', text: '挟まった', isCorrect: false, analysis: 'SAI: Bị kẹp giữa.' },
        { id: 'C', text: '絡まった', isCorrect: false, analysis: 'SAI: Vướng víu quấn dây.' },
        { id: 'D', text: '留まった', isCorrect: false, analysis: 'SAI: Dừng lại.' }
      ],
      speed30sTip: 'Mẹo: Sập bẫy âm mưu: 策略・罠に嵌まる.',
      relatedKnowledge: 'Quán dụng ngữ: 罠・策略に嵌まる.'
    },
    {
      id: 'n1-v-9',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '今回の 事故の 責任を 他人に 【転嫁】 するのは 見苦しい。',
      options: [
        { id: 'A', text: 'てんか', isCorrect: true, analysis: 'ĐÚNG: Chuyển Giá = 転嫁 (てんか - đùn đẩy trách nhiệm sang người khác).' },
        { id: 'B', text: 'てんけ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'てんが', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'てんげ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Đùn đẩy trách nhiệm: 責任を転嫁する (てんか).',
      relatedKnowledge: 'Collocation N1: 責任転嫁 (Đùn đẩy trách nhiệm).'
    },
    {
      id: 'n1-v-10',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '彼の 発言は 事態の 収拾を （　　） するばかりだ。',
      options: [
        { id: 'A', text: '遅延', isCorrect: false, analysis: 'SAI: Trễ tàu.' },
        { id: 'B', text: '阻害', isCorrect: true, analysis: 'ĐÚNG: 阻害する (そがい - cản trở, cản lối giải quyết sự việc).' },
        { id: 'C', text: '拒絶', isCorrect: false, analysis: 'SAI: Khước từ.' },
        { id: 'D', text: '排斥', isCorrect: false, analysis: 'SAI: Bài xích, trục xuất.' }
      ],
      speed30sTip: 'Mẹo: Gây cản trở tiến trình: 進行・収拾を阻害する.',
      relatedKnowledge: 'Từ vựng N1: 阻害 (Trở Ngại).'
    },
    {
      id: 'n1-v-11',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '祖父の 遺志を 【ついで】、家業を 発展させる。',
      options: [
        { id: 'A', text: '継いで', isCorrect: true, analysis: 'ĐÚNG: Kế (つぐ - kế thừa ý nguyện/sự nghiệp gia đình).' },
        { id: 'B', text: '次いで', isCorrect: false, analysis: 'SAI: Tiếp theo thứ tự.' },
        { id: 'C', text: '接いで', isCorrect: false, analysis: 'SAI: Nối ghép.' },
        { id: 'D', text: '告いで', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Kế thừa ý nguyện: 遺志を継ぐ (Kế).',
      relatedKnowledge: 'Động từ N1: 継ぐ (Kế).'
    },
    {
      id: 'n1-v-12',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '彼女の ピアノの 演奏は （　　） を 極めていた。',
      options: [
        { id: 'A', text: '円熟', isCorrect: true, analysis: 'ĐÚNG: 円熟を極める (えんじゅく - đạt đến độ chín muồi hoàn hảo về nghệ thuật/tài năng).' },
        { id: 'B', text: '完成', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '熟練', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '成就', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Tài nghệ đạt độ chín viên mãn: 円熟を極める.',
      relatedKnowledge: 'Cụm từ cố định N1: 円熟.'
    },
    {
      id: 'n1-v-13',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '彼の 主張は 根拠が （　　） で、説得力に 欠ける。',
      options: [
        { id: 'A', text: '希薄', isCorrect: true, analysis: 'ĐÚNG: 希薄 (きはく - mỏng manh, nhạt nhòa, thiếu căn cứ xác đáng).' },
        { id: 'B', text: '稀少', isCorrect: false, analysis: 'SAI: Quý hiếm.' },
        { id: 'C', text: '軽薄', isCorrect: false, analysis: 'SAI: Nông nổi cợt nhả.' },
        { id: 'D', text: '浅薄', isCorrect: false, analysis: 'SAI: Thiển cận.' }
      ],
      speed30sTip: 'Mẹo: Căn cứ mỏng manh thiếu thuyết phục: 根拠・意識が希薄だ.',
      relatedKnowledge: 'Tính từ đuôi な N1: 希薄.'
    },
    {
      id: 'n1-v-14',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: '政府の 迅速な 対応が 被害の 拡大を 【くいとめた】。',
      options: [
        { id: 'A', text: '食い止めた', isCorrect: true, analysis: 'ĐÚNG: 食い止める (くいとめる - ngăn chặn kịp thời, chặn đứng đà lây lan/thiệt hại).' },
        { id: 'B', text: '締め止めた', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '噛み止めた', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '差し止めた', isCorrect: false, analysis: 'SAI: Đình chỉ pháp lý.' }
      ],
      speed30sTip: 'Mẹo: Chặn đứng thảm họa: 被害・悪化を食い止める.',
      relatedKnowledge: 'Động từ ghép N1: 食い止める.'
    },
    {
      id: 'n1-v-15',
      level: 'N1',
      year: '2019-12',
      section: 'vocabulary',
      question: 'ライバル企業の 突然の 参入に、業界内は 【動揺】 を 隠せない。',
      options: [
        { id: 'A', text: 'どうよう', isCorrect: true, analysis: 'ĐÚNG: Động Dao = 動揺 (どうよう - chao đảo, dao động bất an).' },
        { id: 'B', text: 'とうよう', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'どうとう', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'とうとう', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Dao động bất an: 動揺を隠せない (Không giấu nổi nỗi hoang mang).',
      relatedKnowledge: 'Quán dụng ngữ: 動揺を隠せない.'
    },

    // --- NGỮ PHÁP N1 (15 câu) ---
    {
      id: 'n1-g-1',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '今回の 不祥事は、組織の 管理体制の 甘さゆえの 結果に （　　）。',
      options: [
        { id: 'A', text: 'ほかならない', isCorrect: true, analysis: 'ĐÚNG: ~にほかならない = Chính là... không gì khác ngoài...' },
        { id: 'B', text: 'すぎない', isCorrect: false, analysis: 'SAI: すぎない là chỉ là mức độ nhỏ.' },
        { id: 'C', text: 'たらない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'あたらない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Khẳng định nguyên nhân cốt lõi duy nhất: ~にほかならない.',
      relatedKnowledge: 'Cấu trúc N1: ~にほかならない.'
    },
    {
      id: 'n1-g-2',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '国民の 信頼と 支持 （　　）、この 大改革を 断行することは できない。',
      options: [
        { id: 'A', text: 'なくしては', isCorrect: true, analysis: 'ĐÚNG: ~なくしては... できない (Nếu không có A thì tuyệt đối không thể có B).' },
        { id: 'B', text: 'なしには', isCorrect: false, analysis: 'SAI: Nashi ni wa là N3, câu văn chính trị N1 dùng trang trọng なくしては.' },
        { id: 'C', text: '抜きでは', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'とわず', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: A là điều kiện sinh tử bắt buộc để có B: Noun + なくして(は)... ない.',
      relatedKnowledge: 'Cấu trúc N1: ~なくして(は).'
    },
    {
      id: 'n1-g-3',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '新世代の AI技術の 登場を （　　）、IT産業は 未曾有の 激動期に 突入した。',
      options: [
        { id: 'A', text: '皮切りに', isCorrect: true, analysis: 'ĐÚNG: ~を皮切りに (Khởi đầu bằng sự xuất hiện của AI, kéo theo hàng loạt biến động liên hoàn).' },
        { id: 'B', text: '契機に', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '限りに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '機縁に', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Khởi đầu bằng A làm phát súng mở màn cho hàng loạt chuỗi sự kiện: ~を皮切りに.',
      relatedKnowledge: 'Ngữ pháp N1: ~を皮切りに(して).'
    },
    {
      id: 'n1-g-4',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '国家の 最高機密で あるが ゆえに、一般に 公開される （　　） もない。',
      options: [
        { id: 'A', text: 'べく', isCorrect: true, analysis: 'ĐÚNG: ~べくもない (Tuyệt đối không thể nào / không có cửa nào mà được công khai).' },
        { id: 'B', text: 'そう', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'はず', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'よう', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: V-dic + べくもない (Hoàn toàn không thể nào có khả năng...).',
      relatedKnowledge: 'Cấu trúc cổ N1: ~べくもない.'
    },
    {
      id: 'n1-g-5',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '世界平和の 実現を （　　）、国際社会が 一致団結して 取り組まねばならない。',
      options: [
        { id: 'A', text: '願ってやまない', isCorrect: true, analysis: 'ĐÚNG: ~てやまない (Khôn nguôi cầu chúc/nguyện ước từ tận đáy lòng).' },
        { id: 'B', text: '願ってたまらない', isCorrect: false, analysis: 'SAI: Dùng cho cảm xúc cá nhân thông thường.' },
        { id: 'C', text: '願ってならない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '願わざるをえない', isCorrect: false, analysis: 'SAI: Bắt buộc miễn cưỡng.' }
      ],
      speed30sTip: 'Mẹo: Đi với động từ nguyện ước cao cả: 祈って / 願って / 愛して + やまない.',
      relatedKnowledge: 'Cấu trúc N1: ~てやまない.'
    },
    {
      id: 'n1-g-6',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: 'どのような 困難が （　　）、初志を 貫徹する 所存です。',
      options: [
        { id: 'A', text: 'あろうと', isCorrect: true, analysis: 'ĐÚNG: Thể ý chí + と (Cho dẫu có khó khăn thế nào đi chăng nữa - あろうと/あろうが).' },
        { id: 'B', text: 'あれ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'あると', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'あっても', isCorrect: false, analysis: 'SAI: Dạng thông thường, văn phong N1 trang trọng dùng ~うと/〜が.' }
      ],
      speed30sTip: 'Mẹo: Nghi vấn từ + Thể ý chí + と/が (Dẫu có thế nào đi nữa).',
      relatedKnowledge: 'Cấu trúc N1: ~うと(も) / ~うが.'
    },
    {
      id: 'n1-g-7',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '長引く 不況に 増税が （　　）、中小企業の 経営は 逼迫している。',
      options: [
        { id: 'A', text: '相まって', isCorrect: true, analysis: 'ĐÚNG: ~と相まって (A cộng hưởng cùng với B tạo nên kết quả nhân đôi).' },
        { id: 'B', text: '伴って', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '対して', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '向かって', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Hai yếu tố tiêu cực cộng hưởng nhau: Noun + と相まって.',
      relatedKnowledge: 'Cấu trúc N1: ~と相まって.'
    },
    {
      id: 'n1-g-8',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '彼は まるで 私を 詐欺師で （　　） 目つきで 睨みつけた。',
      options: [
        { id: 'A', text: 'あるかのごとき', isCorrect: true, analysis: 'ĐÚNG: ~であるかのごとき (Như thể là kẻ lừa đảo - ごとき bổ nghĩa cho danh từ 目つき).' },
        { id: 'B', text: 'あるかのごとく', isCorrect: false, analysis: 'SAI: ごとく là phó từ, trước danh từ phải dùng ごとき.' },
        { id: 'C', text: 'あるかのように', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'あるかのごとし', isCorrect: false, analysis: 'SAI: ごとし đứng cuối câu.' }
      ],
      speed30sTip: 'Mẹo ngữ pháp cổ: ~ごとき + Danh từ (như là...); ~ごとく + Động từ; ~ごとし (kết câu).',
      relatedKnowledge: 'Ngữ pháp N1: ~かのごとき / ~かのごとく.'
    },
    {
      id: 'n1-g-9',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '今さら 後悔した （　　）、覆水は 盆に 返らない。',
      options: [
        { id: 'A', text: 'ところで', isCorrect: true, analysis: 'ĐÚNG: V-ta + ところで (Dẫu cho bây giờ có hối hận thì nước đổ cũng chẳng vớt lại được).' },
        { id: 'B', text: 'ものの', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'からには', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '反面', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Dù có làm thế nào đi nữa cũng vô ích: V-ta + ところで.',
      relatedKnowledge: 'Cấu trúc ~たところで.'
    },
    {
      id: 'n1-g-10',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: 'あの 人の 言動は 非常識 （　　） 極まりない。',
      options: [
        { id: 'A', text: '極まりない', isCorrect: true, analysis: 'ĐÚNG: Na-adj + 極まりない (Vô cùng cực kỳ vô ý thức, đạt đến đỉnh điểm chướng tai gai mắt).' },
        { id: 'B', text: 'の極み', isCorrect: false, analysis: 'SAI: の極み đi với Danh từ (còn 非常識 ở đây là Na-stem).' },
        { id: 'C', text: 'にたえない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'やまない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Tính từ đuôi な bỏ な + 極まりない.',
      relatedKnowledge: 'Phân biệt 極まりない vs の極み.'
    },
    {
      id: 'n1-g-11',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: 'これだけの 証拠が 揃っている 以上、彼の 犯行と （　　） ざるをえない。',
      options: [
        { id: 'A', text: '認め', isCorrect: true, analysis: 'ĐÚNG: V-nai (bỏ nai) + ざるをえない (Buộc phải thừa nhận, không thể không công nhận).' },
        { id: 'B', text: '認める', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '認めた', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '認めない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo kết hợp: V-nai bỏ nai + ざるをえない (Trừ する -> せざるをえない).',
      relatedKnowledge: 'Cấu trúc ~ざるを得ない.'
    },
    {
      id: 'n1-g-12',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '彼女の 誠実な 人柄は、接する 人すべてを 魅了して （　　）。',
      options: [
        { id: 'A', text: 'おかない', isCorrect: true, analysis: 'ĐÚNG: ~ておかない (Tự nhiên khiến cho... không sao tránh khỏi, nhất định làm mê hoặc lòng người).' },
        { id: 'B', text: 'やまない', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'ならない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'すまない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Động từ tác động tâm lý + ておかない (Nhất định gây rung động/cuốn hút).',
      relatedKnowledge: 'Cấu trúc N1: ~ておかない.'
    },
    {
      id: 'n1-g-13',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: 'どんなに 裕福で （　　）、心が 満たされて いなければ 幸福とは 言えない。',
      options: [
        { id: 'A', text: 'あろうとも', isCorrect: true, analysis: 'ĐÚNG: Danh từ/Na-adj + であろうとも (Dù có giàu có sung túc đến mấy đi chăng nữa).' },
        { id: 'B', text: 'あるまいと', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'あるまいに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'あるがゆえに', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: どんなに + であろうとも (Dẫu cho có... đến nhường nào).',
      relatedKnowledge: 'Cấu trúc N1: ~であろうと(も).'
    },
    {
      id: 'n1-g-14',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: '彼は まるで 飛びかから （　　） ばかりの 勢いで 詰め寄ってきた。',
      options: [
        { id: 'A', text: 'ん', isCorrect: true, analysis: 'ĐÚNG: V-nai (bỏ nai) + んばかり (Như chực nhảy bổ vào, tưởng chừng như sắp làm ngay lập tức).' },
        { id: 'B', text: 'う', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'る', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'た', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Như chực sắp bùng nổ: V-nai (bỏ nai) + んばかりに/の.',
      relatedKnowledge: 'Cấu trúc N1: ~んばかりに.'
    },
    {
      id: 'n1-g-15',
      level: 'N1',
      year: '2019-12',
      section: 'grammar',
      question: 'プロの 料理人 （　　） もの、包丁の 手入れを 怠るなど あり得ない。',
      options: [
        { id: 'A', text: 'たる', isCorrect: true, analysis: 'ĐÚNG: Noun + たるもの (Đã đứng ở cương vị/danh phận của người đầu bếp chuyên nghiệp thì...).' },
        { id: 'B', text: 'なりに', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'まじき', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ごとく', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Danh vị xã hội cao quý + たるもの (Đã là... thì phải có tư cách xứng đáng).',
      relatedKnowledge: 'Cấu trúc cổ N1: ~たるもの.'
    },

    // --- ĐỌC HIỂU DOKKAI N1 (Chuẩn 3 Phần: Văn Giải Thích/Bình Luận + Thông Báo/Email + Tra Cứu Thông Tin) ---
    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn ngắn (~200字)
    {
      id: 'n1-r-1',
      level: 'N1',
      year: '2019-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_short',
        categoryLabel: '1. 説明文・解説文 (Đoạn ngắn ~200字)',
        wordCount: 195,
        focusPoints: 'Hỏi bản chất luận điểm & tư tưởng phê phán'
      },
      passageOrScript: `学術研究の本質は、既知の事実を丹念に整理・分類することにとどまらず、既存のパラダイムそのものを根本から疑い、新たな問いを措定するところにある。常識や定説とされている強固な枠組みを果敢に打ち破る批判的精神なくして、真の知的ブレイクスルーは望むべくもない。蓄積された知を土台としながらも、それを超克しようとする知的冒険心こそが、学問を前進させる原動力なのである。`,
      question: '学術研究について、筆者は何が不可欠だと主張しているか。',
      options: [
        { id: 'A', text: '既存の常識や定説を疑い、枠組みを打破しようとする批判的精神と冒険心', isCorrect: true, analysis: 'ĐÚNG: Khớp chính xác câu kết: "批判的精神なくして、真の知的ブレイクスルーは望むべくもない... 知的冒険心こそが、学問を前進させる原動力".' },
        { id: 'B', text: '過去の膨大な学説や文献を一切批判せず、忠実に丸暗記して整理する能力', isCorrect: false, analysis: 'SAI: Ngược lại với phê phán của tác giả.' },
        { id: 'C', text: '学界の多数派や権威ある学者の意見に常に従順に従う協調性', isCorrect: false, analysis: 'SAI: Tác giả nhấn mạnh tinh thần phản biện (批判的精神).' },
        { id: 'D', text: '基礎理論の研究を中止し、即座に市場利益を生み出す実用技術だけに専念すること', isCorrect: false, analysis: 'SAI: Không có ý này trong văn bản.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn ngắn N1): Cấu trúc ngữ pháp cổ N1: "Aなくして、Bは望むべくもない" (Không có A thì B là điều không tưởng) -> A (批判的精神) chính là điều kiện tiên quyết bắt buộc!',
      relatedKnowledge: 'Đọc hiểu luận thuyết học thuật N1: Bắt cặp ngữ pháp ~なくして / ~べくもない để xác định luận điểm cốt lõi.'
    },

    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn trung (~350字)
    {
      id: 'n1-r-2',
      level: 'N1',
      year: '2019-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_medium',
        categoryLabel: '1. 説明文・解説文 (Đoạn trung ~350字)',
        wordCount: 360,
        focusPoints: 'Hỏi nguyên nhân & góc nhìn triết học phản biện xã hội'
      },
      passageOrScript: `個人の能力や努力に応じて社会的地位や報酬が配分されるべきだとする「能力主義（メリトクラシー）」は、一見すると門閥や身分による差別を排した極めて公正な原理に思える。
しかし、この思想には深刻な落とし穴が存在する。成功者が「自らの成功は100%自分の才能と努力の賜物だ」と過信するとき、他者への謙虚さや感謝は失われ、恵まれない人々を見下す傲慢さが生じる。一方で、敗者は「失敗はすべて自己責任である」という過酷な烙印を押され、尊厳を根底から砕かれることになるのだ。
個人の才能や生まれ育った環境、健康状態は、本人の努力以前の「偶然の幸運（運の配分）」に大きく左右されている。この厳然たる事実を忘却した能力主義は、社会の分断を固定化し、弱者に対する連帯や共感の倫理を決定的に侵食してしまうのである。`,
      question: '筆者は「能力主義（メリトクラシー）」の弊害について、どのように指摘しているか。',
      options: [
        { id: 'A', text: '身分制度を復活させ、個人の努力を一切評価しない社会を作るべきだということ。', isCorrect: false, analysis: 'SAI: Tác giả không hề ủng hộ chế độ phong kiến.' },
        { id: 'B', text: '成功をすべて自己の才能と努力と錯覚することで傲慢さを生み、失敗者を自己責任として追い詰め社会の連帯を壊すこと。', isCorrect: true, analysis: 'ĐÚNG: Khớp nguyên ý hai đoạn kết: "成功者が自分の才能と努力の賜物だと過信し傲慢さが生じる... 敗者は自己責任という過酷な烙印を押され... 連帯や共感の倫理を侵食する".' },
        { id: 'C', text: '能力の高い者だけに巨額の富を集中させ、競争をさらに過熱させるべきだということ。', isCorrect: false, analysis: 'SAI: Tác giả kịch liệt phản đối tư tưởng này.' },
        { id: 'D', text: '個人の成功には運の要素は全く関係なく、努力の量だけで完全に決定されるということ。', isCorrect: false, analysis: 'SAI: Tác giả nhấn mạnh thành công phụ thuộc lớn vào sự may mắn ngẫu nhiên (偶然の幸運).' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn trung N1): Sau từ nối "しかし、この思想には深刻な落とし穴が存在する", tác giả chỉ trích hai mặt: Thành công -> Ngạo mạn; Thất bại -> Bị gán mác tự chịu trách nhiệm!',
      relatedKnowledge: 'Chủ đề triết học chính trị N1: Phê phán chủ nghĩa hiệu năng (The Tyranny of Merit - Michael Sandel).'
    },

    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn dài (~550字)
    {
      id: 'n1-r-3',
      level: 'N1',
      year: '2019-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_long',
        categoryLabel: '1. 説明文・解説文 (Đoạn dài ~550字)',
        wordCount: 560,
        focusPoints: 'Bài văn tổng hợp: Phân tích lập luận trừu tượng, ẩn dụ và thông điệp triết học'
      },
      passageOrScript: `言語とは、単に頭の中にある思考を伝達するための外的な「容器」や「記号体系」ではない。人間は言葉を用いて世界を切り分け、意味を与えているのであり、我々が認識する「現実」そのものが、使用する言語の構造によってすでに枠づけられているのである。ある言語体系を我が物にすることは、その言語が歴史的に培ってきた独自の世界認識や美意識の地平を獲得することにほかならない。
ところが、情報空間がアルゴリズムによって最適化された現代において、私たちが日常的に触れる言語は、極端なまでに「記号化」され「単純化」されつつある。クリック数や閲覧時間を最大化するために、複雑で曖昧なニュアンスを含んだ言葉は削ぎ落とされ、白黒を極端に二分する刺激的なスローガンばかりが流通するようになった。
しかし、人間の生の本質は、合理性や論理だけでは割り切れないグレーゾーンの中にこそ宿っている。他者への深い哀憐や、割り切れない葛藤、言葉に詰まるほどの感動は、短縮された記号のやり取りからは決して生まれない。
言語が貧困化するとき、我々の思考力や感性そのものもまた縮小を余儀なくされる。効率性という名のアルゴリズムに抗い、言葉の持つ多義性や重層的な奥行きを回復すること。それこそが、情報に窒息しかけている現代人が人間としての豊穣な精神性を取り戻すための、不可欠な営為なのではないだろうか。`,
      question: '情報化社会における言語のあり方について、筆者が最も警鐘を鳴らし主張していることは何か。',
      options: [
        { id: 'A', text: 'アルゴリズムを活用して、すべての文章を徹底的に短縮・単純化すべきだ。', isCorrect: false, analysis: 'SAI: Đây chính là hiện tượng làm nghèo nàn ngôn ngữ mà tác giả cảnh báo.' },
        { id: 'B', text: '言語が単純化・記号化されることで人間の深い思考や感性が衰退するため、言葉の多義性と奥行きを取り戻すべきだ。', isCorrect: true, analysis: 'ĐÚNG: Khớp nguyên ý hai đoạn kết: "言語が貧困化するとき、我々の思考力や感性そのものも縮小を余儀なくされる... 言葉の持つ多義性や重層的な奥行きを回復することこそが不可欠".' },
        { id: 'C', text: '外国語の習得をやめ、自国の伝統的な古典言語だけを学ぶべきだ。', isCorrect: false, analysis: 'SAI: Tác giả bàn về chất lượng tư duy ngôn ngữ nói chung chứ không phân biệt ngoại ngữ vs tiếng mẹ đẻ.' },
        { id: 'D', text: '文字コミュニケーションを廃止し、すべて画像と動画だけで意思疎通を行うべきだ。', isCorrect: false, analysis: 'SAI: Trái ngược hoàn toàn tư tưởng phục hồi chiều sâu ngôn từ.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn dài N1): Bắt câu hỏi tu từ ở cuối bài: "〜言葉の持つ多義性や重層的な奥行きを回復すること。それこそが... 不可欠な営為なのではないだろうか" -> Chọn phương án có chứa từ khóa 多義性 (đa nghĩa) & 奥行き (chiều sâu).',
      relatedKnowledge: 'Văn nghị luận ngôn ngữ học & triết học hậu hiện đại N1.'
    },

    // 2. お知らせ・メール (Thông báo / Email / Thư từ) (~200字)
    {
      id: 'n1-r-4',
      level: 'N1',
      year: '2019-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'notice_email',
        categoryLabel: '2. お知らせ・メール (Thông báo công văn học thuật ~200字)',
        wordCount: 235,
        focusPoints: 'Trọng tâm: Mốc thời hạn nộp bài (Deadline) & điều kiện tham gia'
      },
      passageOrScript: `学会員各位
国際先端科学技術学会（IAST）事務局

【重要】第15回年次国際シンポジウム 研究論文公募（Call for Papers）のご案内

本学会では、下記の要領にて第15回国際シンポジウムの一般研究発表を募集いたします。

1. 開催期日：2020年11月12日（木）〜 14日（土）
2. 開催場所：京都国際会館およびオンラインハイブリッド開催
3. 提出期限および手続き：
・発表要旨（Abstract・800字以内）：【2020年7月31日（金） 23:59（日本時間）必着】
・本論文（Full Paper）：発表要旨の査読通過者のみ、9月15日（火）までに提出。
※若手研究者奨励賞の応募資格は、2020年4月1日時点で35歳未満の本学会正会員または学生会員に限ります。期限を過ぎた要旨提出はシステム上受理されませんので、厳守をお願いいたします。`,
      question: 'このシンポジウムで研究発表を希望する者は、まず何をいつまでに行わなければなりませんか。',
      options: [
        { id: 'A', text: '2020年7月31日までに本論文（Full Paper）を完成させて郵送する。', isCorrect: false, analysis: 'SAI: Ngày 31/7 chỉ nộp tóm tắt (Abstract). Bản toàn văn (Full Paper) đến 15/9 mới nộp đối với người đã qua vòng thẩm định.' },
        { id: 'B', text: '2020年7月31日（金）の23:59までに、800字以内の発表要旨（Abstract）を提出する。', isCorrect: true, analysis: 'ĐÚNG: Khớp mục 3: "発表要旨（Abstract・800字以内）：【2020年7月31日（金） 23:59（日本時間）必着】".' },
        { id: 'C', text: '2020年9月15日までに京都国際会館の窓口で直接登録する。', isCorrect: false, analysis: 'SAI: Thủ tục thực hiện qua hệ thống nộp trực tuyến.' },
        { id: 'D', text: '35歳未満であることを証明する住民票を事前に郵送する。', isCorrect: false, analysis: 'SAI: Đây chỉ là điều kiện xét giải thưởng nhà nghiên cứu trẻ (若手研究者奨励賞), không phải yêu cầu chung cho mọi người.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Thông báo N1): Nhìn ngay mốc thời gian đầu tiên trong mục 3: "発表要旨（Abstract）：【2020年7月31日 23:59必着】". Phân biệt rành mạch giữa Abstract (vòng 1) và Full Paper (vòng 2)!',
      relatedKnowledge: 'Thuật ngữ công văn học thuật quốc tế: 発表要旨 (Abstract), 査読 (Peer review), 必着 (Phải tới trước hạn), 厳守 (Nghiêm túc tuân thủ).'
    },

    // 3. 情報検索 (Tra cứu thông tin thực tế) - Bài 1 gồm 2 câu hỏi (Câu 1/2)
    {
      id: 'n1-r-5',
      level: 'N1',
      year: '2019-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'info_search',
        categoryLabel: '3. 情報検索 (Tra cứu thông tin thực tế)',
        infoSearchDocTitle: 'Quy Chế Tài Trợ Đề Tài Nghiên Cứu Khoa Học Quỹ JSPS',
        questionNumberInGroup: 1,
        focusPoints: 'Quét điều kiện độ tuổi, chức danh nghiên cứu & phân loại hạng mục quỹ'
      },
      passageOrScript: `【日本学術振興基金　2020年度 研究助成金 申請要項】

本基金は、独創的な学術研究を推進するため以下の枠組みで研究費を助成します。

◆ 助成種目と要件
【種目A：特別推進研究】
・助成上限額：5,000万円（研究期間：3〜5年）
・対象：国際的に顕著な実績を有する主任研究者（年齢制限なし）

【種目B：基盤研究（一般）】
・助成上限額：1,500万円（研究期間：3年）
・対象：大学または公的研究機関に所属する常勤の研究者（年齢制限なし）

【種目C：若手先駆研究】
・助成上限額：800万円（研究期間：2〜3年）
・対象：申請年度の4月1日時点で【満39歳以下】の研究者（非常勤・ポスドクも申請可能）

◆ 経費算定の制限および特記事項
・設備備品費は、助成金総額の【50%以内】に抑えること。
・人件費・謝金は助成金総額の【30%以内】とする。
※ただし、海外の研究機関との共同実験を伴う国際共同研究の場合、設備備品費の上限は【60%まで】引き上げられる。
※同一の主任研究者が同年度に複数の種目へ重複申請することは禁止されています。`,
      question: '大学の非常勤研究員であるグエン博士（36歳）が、単独で2年間の研究計画を立て、総額700万円の助成を希望しています。申請資格を満たしている最も適切な種目はどれですか。',
      options: [
        { id: 'A', text: '種目A：特別推進研究', isCorrect: false, analysis: 'SAI: Yêu cầu thành tích xuất sắc tầm quốc tế và thường dành cho lab lớn 5,000万円.' },
        { id: 'B', text: '種目B：基盤研究（一般）', isCorrect: false, analysis: 'SAI: Yêu cầu nhà nghiên cứu biên chế thường trực (常勤の研究者), trong khi グエン博士 là nhà nghiên cứu không thường trực (非常勤).' },
        { id: 'C', text: '種目C：若手先駆研究', isCorrect: true, analysis: 'ĐÚNG: Vì グエン博士 36 tuổi (thỏa mãn dưới 39 tuổi), là 非常勤 (thỏa mãn điều kiện "非常勤・ポスドクも申請可能"), và số tiền 700万円 nằm trong hạn mức trần 800万円 cho giai đoạn 2 năm.' },
        { id: 'D', text: '種目Bと種目Cの両方に同時に申請する', isCorrect: false, analysis: 'SAI: Vi phạm quy định nghiêm cấm nộp trùng lặp (重複申請することは禁止されています).' }
      ],
      speed30sTip: 'Mẹo 30 giây (Tra cứu N1): Bắt từ khóa điều kiện: "非常勤" + "36歳" -> Chỉ có 【種目C】 ghi rõ: "39歳以下" và "非常勤・ポスドクも申請可能"!',
      relatedKnowledge: 'Kỹ năng Information Retrieval N1: Đối chiếu 3 chiều giữa Địa vị (常勤/非常勤), Tuổi tác (満39歳以下) và Hạn mức kinh phí.'
    },

    // 3. 情報検索 (Tra cứu thông tin thực tế) - Bài 1 gồm 2 câu hỏi (Câu 2/2)
    {
      id: 'n1-r-6',
      level: 'N1',
      year: '2019-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'info_search',
        categoryLabel: '3. 情報検索 (Tra cứu thông tin thực tế)',
        infoSearchDocTitle: 'Quy Chế Tài Trợ Đề Tài Nghiên Cứu Khoa Học Quỹ JSPS',
        questionNumberInGroup: 2,
        focusPoints: 'Quét tỷ lệ trần phân bổ kinh phí & điều kiện ngoại lệ hợp tác quốc tế'
      },
      passageOrScript: `【日本学術振興基金　2020年度 研究助成金 申請要項】

本基金は、独創的な学術研究を推進するため以下の枠組みで研究費を助成します。

◆ 助成種目と要件
【種目A：特別推進研究】
・助成上限額：5,000万円（研究期間：3〜5年）
・対象：国際的に顕著な実績を有する主任研究者（年齢制限なし）

【種目B：基盤研究（一般）】
・助成上限額：1,500万円（研究期間：3年）
・対象：大学または公的研究機関に所属する常勤の研究者（年齢制限なし）

【種目C：若手先駆研究】
・助成上限額：800万円（研究期間：2〜3年）
・対象：申請年度の4月1日時点で【満39歳以下】の研究者（非常勤・ポスドクも申請可能）

◆ 経費算定の制限および特記事項
・設備備品費は、助成金総額の【50%以内】に抑えること。
・人件費・謝金は助成金総額の【30%以内】とする。
※ただし、海外の研究機関との共同実験を伴う国際共同研究の場合、設備備品費の上限は【60%まで】引き上げられる。
※同一の主任研究者が同年度に複数の種目へ重複申請することは禁止されています。`,
      question: '大学教授の田中氏が【種目B】で満額の1,500万円の採択を受けました。この研究計画は「ドイツの研究機関との共同実験」を含む国際共同研究です。設備備品費として計上できる最高限度額はいくらですか。',
      options: [
        { id: 'A', text: '750万円', isCorrect: false, analysis: 'SAI: Đây là 50% nếu là nghiên cứu nội địa thông thường.' },
        { id: 'B', text: '900万円', isCorrect: true, analysis: 'ĐÚNG: Khớp điều kiện ngoại lệ sau dấu ※: "海外の研究機関との共同実験を伴う国際共同研究の場合、設備備品費の上限は【60%まで】引き上げられる". Với mức trần 1,500万円: 1,500万円 x 60% = 900万円.' },
        { id: 'C', text: '450万円', isCorrect: false, analysis: 'SAI: Đây là 30% định mức trần của chi phí nhân công (人件費・謝金).' },
        { id: 'D', text: '1,500万円全額', isCorrect: false, analysis: 'SAI: Không được phép chi 100% cho thiết bị.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Tính toán trần kinh phí N1): "ドイツの研究機関との共同実験" -> Kích hoạt ngoại lệ ※: Nâng trần thiết bị từ 50% lên 60% -> 1,500万円 x 60% = 900万円!',
      relatedKnowledge: 'Bẫy đề thi N1: Luôn luôn kiểm tra xem dự án có rơi vào trường hợp ngoại lệ (※ただし...) để áp dụng tỷ lệ phần trăm được nâng mức hay không.'
    },

    // --- NGHE HIỂU CHOUKAI N1 (30 câu Chuẩn Thi Mondai 1 -> Mondai 5 - 100% Tiếng Nhật) ---
    ...N1_CHOUKAI_QUESTIONS
  ]
};
