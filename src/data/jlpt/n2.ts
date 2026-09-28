import { JLPTExamPackage } from '../jlptExams';
import { N2_CHOUKAI_QUESTIONS } from '../choukai/n2Choukai';

export const EXAM_N2_PACKAGE: JLPTExamPackage = {
  id: 'exam-n2-2018-07',
  level: 'N2',
  year: '2018-07',
  title: 'Đề Thi Thật JLPT N2 (Kỳ Tháng 07/2018 & 2020)',
  totalTimeMinutes: 105,
  questions: [
    // --- TỪ VỰNG N2 (15 câu) ---
    {
      id: 'n2-v-1',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: 'この 計画には 【妥協】 の 余地が ない。',
      options: [
        { id: 'A', text: 'だきょう', isCorrect: true, analysis: 'ĐÚNG: 妥協 (Thỏa hiệp) đọc là だきょう.' },
        { id: 'B', text: 'たいきょう', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'だぎょう', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'たいぎょう', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 妥協 = だきょう (Thỏa hiệp).',
      relatedKnowledge: 'Từ vựng N2: 妥協する (Thỏa hiệp, nhượng bộ).'
    },
    {
      id: 'n2-v-2',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '彼の 発言は いつも 【曖昧】 だ。',
      options: [
        { id: 'A', text: 'あいまい', isCorrect: true, analysis: 'ĐÚNG: 曖昧 đọc là あいまい (mập mờ, mơ hồ, không rõ ràng).' },
        { id: 'B', text: 'あんまい', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'あいめい', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'あんめい', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 曖昧 = あいまい.',
      relatedKnowledge: 'Tính từ đuôi な N2: 曖昧な態度, 曖昧な返事.'
    },
    {
      id: 'n2-v-3',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '景気の 低迷により、企業の 倒産が 【あいついで】 いる。',
      options: [
        { id: 'A', text: '相次いで', isCorrect: true, analysis: 'ĐÚNG: 相次ぐ (あいつぐ - liên tiếp, dồn dập xảy ra).' },
        { id: 'B', text: '合次いで', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '連次いで', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '続次いで', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Sự kiện xấu dồn dập: 相次ぐ (あいつぐ).',
      relatedKnowledge: 'Động từ N2 báo chí: 相次いで発生する.'
    },
    {
      id: 'n2-v-4',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: 'どんなに 困難でも、最後まで やり抜く （　　） が ある。',
      options: [
        { id: 'A', text: '覚悟', isCorrect: true, analysis: 'ĐÚNG: 覚悟 (かくご - giác ngộ, sự chuẩn bị tâm lý sẵn sàng đối mặt).' },
        { id: 'B', text: '意識', isCorrect: false, analysis: 'SAI: Ý thức.' },
        { id: 'C', text: '念頭', isCorrect: false, analysis: 'SAI: Tâm niệm.' },
        { id: 'D', text: '予期', isCorrect: false, analysis: 'SAI: Dự đoán trước.' }
      ],
      speed30sTip: 'Mẹo: Cụm từ cố định: 覚悟がある / 覚悟を決める.',
      relatedKnowledge: 'Collocation N2: 覚悟を決める.'
    },
    {
      id: 'n2-v-5',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '彼女の 鋭い 指摘に、ぐうの 音も 出ず （　　） になった。',
      options: [
        { id: 'A', text: 'たじたじ', isCorrect: true, analysis: 'ĐÚNG: たじたじ (lúng túng, cứng họng, luống cuống không đáp trả được).' },
        { id: 'B', text: 'うろうろ', isCorrect: false, analysis: 'SAI: Đi loanh quanh.' },
        { id: 'C', text: 'おどおど', isCorrect: false, analysis: 'SAI: Rụt rè lo sợ.' },
        { id: 'D', text: 'いらいら', isCorrect: false, analysis: 'SAI: Bực bội sốt ruột.' }
      ],
      speed30sTip: 'Mẹo: Bị chỉ trích sắc sảo đến cứng họng -> たじたじ.',
      relatedKnowledge: 'Từ tượng hình N2: たじたじになる.'
    },
    {
      id: 'n2-v-6',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '新商品の 開発は （　　） に 進んでいる。',
      options: [
        { id: 'A', text: '順調', isCorrect: true, analysis: 'ĐÚNG: 順調に (じゅんちょうに - thuận lợi, trôi chảy đúng tiến độ).' },
        { id: 'B', text: '良好', isCorrect: false, analysis: 'SAI: 良好 đi với 健康/関係良好.' },
        { id: 'C', text: '好調', isCorrect: false, analysis: 'SAI: 好調 đi với 業績/景気が好調.' },
        { id: 'D', text: '適切', isCorrect: false, analysis: 'SAI: Thích đáng.' }
      ],
      speed30sTip: 'Mẹo: Tiến độ trôi chảy: 順調に進む.',
      relatedKnowledge: 'Phân biệt 順調 vs 好調 vs 良好.'
    },
    {
      id: 'n2-v-7',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '会議が （　　） して、結論が 出なかった。',
      options: [
        { id: 'A', text: '紛糾', isCorrect: true, analysis: 'ĐÚNG: 紛糾する (ふんきゅう - tranh cãi hỗn loạn, bất đồng gay gắt).' },
        { id: 'B', text: '混乱', isCorrect: false, analysis: 'SAI: 混乱 là mất trật tự thông thường.' },
        { id: 'C', text: '混雑', isCorrect: false, analysis: 'SAI: Đông đúc người xe.' },
        { id: 'D', text: '摩擦', isCorrect: false, analysis: 'SAI: Ma sát, xích mích.' }
      ],
      speed30sTip: 'Mẹo: Cuộc họp bế tắc tranh cãi: 会議が紛糾する.',
      relatedKnowledge: 'Từ vựng thời sự N2: 議会・会議が紛糾する.'
    },
    {
      id: 'n2-v-8',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '先輩の 助言を 【しんし】 に 受け止める。',
      options: [
        { id: 'A', text: '真摯', isCorrect: true, analysis: 'ĐÚNG: Chân Chí = 真摯 (しんし - chân thành, nghiêm túc tiếp thu).' },
        { id: 'B', text: '紳士', isCorrect: false, analysis: 'SAI: Quý ông lịch lãm.' },
        { id: 'C', text: '真至', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '信摯', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Tiếp thu chân thành: 真摯に受け止める.',
      relatedKnowledge: 'Chữ Hán N2: 真摯 (Chân Chí).'
    },
    {
      id: 'n2-v-9',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '彼の 主張は 理論的に （　　） している。',
      options: [
        { id: 'A', text: '破綻', isCorrect: true, analysis: 'ĐÚNG: 破綻する (はたん - đổ vỡ, phá sản về mặt lập luận logic).' },
        { id: 'B', text: '破損', isCorrect: false, analysis: 'SAI: Hư hại đồ vật.' },
        { id: 'C', text: '破滅', isCorrect: false, analysis: 'SAI: Hủy diệt cuộc đời.' },
        { id: 'D', text: '破壊', isCorrect: false, analysis: 'SAI: Phá hoại kiến trúc.' }
      ],
      speed30sTip: 'Mẹo: Logic/lập luận đổ vỡ: 理論・論理が破綻する.',
      relatedKnowledge: 'Từ vựng N2: 財政・理論が破綻する.'
    },
    {
      id: 'n2-v-10',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '事態が 【緊迫】 してきた。',
      options: [
        { id: 'A', text: 'きんぱく', isCorrect: true, analysis: 'ĐÚNG: Khẩn Bách = 緊迫 (きんぱく - căng thẳng, nghẹt thở).' },
        { id: 'B', text: 'きんぽく', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'けんぱく', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'きんはく', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 緊迫 = きんぱく.',
      relatedKnowledge: 'Collocation thời sự: 情勢・事態が緊迫する.'
    },
    {
      id: 'n2-v-11',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: 'この 機械は 【精密】 に 作られている。',
      options: [
        { id: 'A', text: 'せいみつ', isCorrect: true, analysis: 'ĐÚNG: 精密 (せいみつ - tinh vi, chính xác tuyệt đối).' },
        { id: 'B', text: 'しょうみつ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'せいぶつ', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'しょうぶつ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Máy móc tinh vi: 精密機械 (せいみつきかい).',
      relatedKnowledge: 'Từ vựng công nghệ: 精密 (Tinh Mật).'
    },
    {
      id: 'n2-v-12',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '昔の アルバムを 見て、懐かしさに （　　） 浸った。',
      options: [
        { id: 'A', text: 'どっぷり', isCorrect: true, analysis: 'ĐÚNG: どっぷり浸る (chìm đắm hoàn toàn trong cảm xúc hoài niệm).' },
        { id: 'B', text: 'ぎっしり', isCorrect: false, analysis: 'SAI: Nhồi nhét chật ních.' },
        { id: 'C', text: 'すっきり', isCorrect: false, analysis: 'SAI: Sảng khoái nhẹ nhõm.' },
        { id: 'D', text: 'きっかり', isCorrect: false, analysis: 'SAI: Đúng chuẩn giờ giấc.' }
      ],
      speed30sTip: 'Mẹo: Chìm sâu trong cảm xúc/nước -> どっぷり浸る.',
      relatedKnowledge: 'Quán dụng ngữ tâm trạng N2.'
    },
    {
      id: 'n2-v-13',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '不況の 影響で、給料が 【大幅】 に カットされた。',
      options: [
        { id: 'A', text: 'おおはば', isCorrect: true, analysis: 'ĐÚNG: 大幅 (おおはば - mức độ lớn, đáng kể).' },
        { id: 'B', text: 'だいふく', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'おおふく', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'だいば', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Cắt giảm biên độ lớn: 大幅に (おおはばに).',
      relatedKnowledge: 'Phó từ N2: 大幅に増加 / 減少する.'
    },
    {
      id: 'n2-v-14',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '彼の 発言は 信用するに （　　）。',
      options: [
        { id: 'A', text: '足らない', isCorrect: true, analysis: 'ĐÚNG: 信用するに足らない (Không đáng để tin tưởng).' },
        { id: 'B', text: '堪えない', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '及ばない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '余儀ない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Không đáng để làm gì: ~に足らない.',
      relatedKnowledge: 'Cấu trúc N2: ~に足る / ~に足らない.'
    },
    {
      id: 'n2-v-15',
      level: 'N2',
      year: '2018-07',
      section: 'vocabulary',
      question: '彼は どんな 逆境にも 【屈しない】 強い 精神力の 持ち主だ。',
      options: [
        { id: 'A', text: 'くっしない', isCorrect: true, analysis: 'ĐÚNG: 屈する (くっする - khuất phục). 屈しない = Không chịu khuất phục.' },
        { id: 'B', text: 'けっしない', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'かっしない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'こうしない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Không khuất phục: 逆境に屈しない.',
      relatedKnowledge: 'Động từ N2: 屈する (Khuất).'
    },

    // --- NGỮ PHÁP N2 (15 câu) ---
    {
      id: 'n2-g-1',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: 'どんなに 困難な 状況で あれ、最後まで （　　） 抜く 覚悟が ある。',
      options: [
        { id: 'A', text: 'やり', isCorrect: true, analysis: 'ĐÚNG: V-masu (bỏ masu) + 抜く (Làm đến cùng).' },
        { id: 'B', text: 'やせ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'やれ', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'やろう', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo 30 giây: Cụm cố định やり抜く (làm kiên trì đến cùng).',
      relatedKnowledge: 'Hậu tố ~抜く.'
    },
    {
      id: 'n2-g-2',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '彼の 話は いつも 誇張が 多くて、信用するに （　　）。',
      options: [
        { id: 'A', text: 'たえない', isCorrect: false, analysis: 'SAI.' },
        { id: 'B', text: '足らない', isCorrect: true, analysis: 'ĐÚNG: 信用するに足らない = Không đáng để tin cậy.' },
        { id: 'C', text: 'あたらない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'かたくない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo 30 giây: 信用する + に足らない (không đáng tin).',
      relatedKnowledge: 'Ngữ pháp ~に足る / ~に足らない.'
    },
    {
      id: 'n2-g-3',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '一度 引き受けた （　　）、途中で 投げ出す わけには いかない。',
      options: [
        { id: 'A', text: 'からには', isCorrect: true, analysis: 'ĐÚNG: Một khi đã nhận lời thì phải có trách nhiệm làm đến cùng.' },
        { id: 'B', text: 'からといって', isCorrect: false, analysis: 'SAI: Dù nói là.' },
        { id: 'C', text: 'ばかりに', isCorrect: false, analysis: 'SAI: Chỉ tại vì.' },
        { id: 'D', text: 'ものの', isCorrect: false, analysis: 'SAI: Mặc dù.' }
      ],
      speed30sTip: 'Mẹo: V-ta + からには (Một khi đã... thì đương nhiên phải).',
      relatedKnowledge: 'Cấu trúc ~からには / ~以上は / ~上は.'
    },
    {
      id: 'n2-g-4',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: 'あの日、彼に 会わ （　　）、今の 私は なかっただろう。',
      options: [
        { id: 'A', text: 'なかったら', isCorrect: true, analysis: 'ĐÚNG: Nếu ngày hôm đó không gặp anh ấy thì đã không có tôi ngày hôm nay.' },
        { id: 'B', text: 'ないなら', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'なくては', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ないでは', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Giả định ngược quá khứ: V-nakattara... ~darou.',
      relatedKnowledge: 'Câu điều kiện giả định trái thực tế quá khứ.'
    },
    {
      id: 'n2-g-5',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '親の 期待に （　　）、見事に 第一志望の 大学に 合格した。',
      options: [
        { id: 'A', text: 'こたえて', isCorrect: true, analysis: 'ĐÚNG: 期待に応えて (Đáp lại kỳ vọng của cha mẹ).' },
        { id: 'B', text: 'めぐって', isCorrect: false, analysis: 'SAI: Xoay quanh tranh cãi.' },
        { id: 'C', text: 'つれて', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '反して', isCorrect: false, analysis: 'SAI: Trái với mong đợi (nếu thi rớt).' }
      ],
      speed30sTip: 'Mẹo: Đỗ nguyện vọng 1 -> Đáp ứng kỳ vọng: 期待に応えて.',
      relatedKnowledge: 'Cấu trúc ~に応えて.'
    },
    {
      id: 'n2-g-6',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: 'この 作品は、世界的に 有名な 画家の 手 （　　） 描かれた ものだ。',
      options: [
        { id: 'A', text: 'によって', isCorrect: true, analysis: 'ĐÚNG: ~によって (Được sáng tác bởi danh họa nổi tiếng - tác giả bị động).' },
        { id: 'B', text: 'について', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'にとって', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'にかけて', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Tác phẩm được tạo ra BỞI ai -> ~によって.',
      relatedKnowledge: 'Trợ từ によって chỉ tác giả tạo tác.'
    },
    {
      id: 'n2-g-7',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '台風の 接近に （　　）、明日の イベントは 中止と なります。',
      options: [
        { id: 'A', text: 'ともない', isCorrect: true, analysis: 'ĐÚNG: ~に伴い (Cùng với/do bão tiến gần kéo theo sự kiện bị hủy).' },
        { id: 'B', text: 'おいて', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '関して', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '対して', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Văn bản trang trọng chỉ sự kéo theo: ~に伴い.',
      relatedKnowledge: 'Ngữ pháp ~に伴って / ~に伴い.'
    },
    {
      id: 'n2-g-8',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '合格したと 聞いて、嬉しさの （　　） 涙が 出てしまった。',
      options: [
        { id: 'A', text: 'あまり', isCorrect: true, analysis: 'ĐÚNG: ~のあまり (Vì quá đỗi vui mừng nên bật khóc).' },
        { id: 'B', text: 'かぎり', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'おかげ', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'せいで', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Danh từ cảm xúc (嬉しさ, 悲しみ) + のあまり (Vì quá đỗi...).',
      relatedKnowledge: 'Cấu trúc ~あまり (Mức độ cảm xúc thái quá).'
    },
    {
      id: 'n2-g-9',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '彼は 黙って いるが、怒って いるに （　　）。',
      options: [
        { id: 'A', text: 'きまっている', isCorrect: true, analysis: 'ĐÚNG: ~にきまっている (Nhất định/chắc chắn 100% là đang giận).' },
        { id: 'B', text: 'すぎない', isCorrect: false, analysis: 'SAI: Chỉ là.' },
        { id: 'C', text: 'ほかならない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '相違ない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Khẳng định chủ quan chắc chắn: ~に決まっている.',
      relatedKnowledge: 'Cấu trúc ~に決まっている.'
    },
    {
      id: 'n2-g-10',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: 'この レストランは 味は ともかく、サービスが （　　）。',
      options: [
        { id: 'A', text: '最悪だ', isCorrect: true, analysis: 'ĐÚNG: A はともかく B (Khoan bàn đến hương vị ngon hay dở, phục vụ tệ nhất).' },
        { id: 'B', text: '素晴らしい', isCorrect: false, analysis: 'SAI: Cụm 味はともかく thường hướng tới điểm trừ nổi cộm.' },
        { id: 'C', text: 'おいしい', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '普通だ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: A はともかく B (A thì khoan bàn, điểm nhấn nằm ở B).',
      relatedKnowledge: 'Cấu trúc ~はともかく.'
    },
    {
      id: 'n2-g-11',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '最近の スマホは 多機能 （　　）、使いこなせない 人も 多い。',
      options: [
        { id: 'A', text: 'である反面', isCorrect: true, analysis: 'ĐÚNG: ~である反面 (Một mặt thì đa năng nhưng mặt trái là nhiều người không dùng hết tính năng).' },
        { id: 'B', text: 'である一方', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'であるわりに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'であるからして', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Hai mặt ưu - nhược điểm đối lập của một sự vật: ~反面.',
      relatedKnowledge: 'Cấu trúc ~反面 (Ngược lại, mặt khác).'
    },
    {
      id: 'n2-g-12',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '彼は 英語は （　　）、中国語や フランス語も 流暢に 話せる。',
      options: [
        { id: 'A', text: 'もとより', isCorrect: true, analysis: 'ĐÚNG: ~はもとより (Tiếng Anh thì là đương nhiên rồi, ngay cả tiếng Trung hay Pháp cũng lưu loát).' },
        { id: 'B', text: 'かぎり', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'ぬきにして', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'とわず', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: A là hiển nhiên, ngay cả B cũng... -> ~はもとより.',
      relatedKnowledge: 'Cấu trúc ~はもとより / ~はもちろん.'
    },
    {
      id: 'n2-g-13',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: 'こんな 大切な 書類を 紛失するなんて、うっかり では （　　）。',
      options: [
        { id: 'A', text: '済まされない', isCorrect: true, analysis: 'ĐÚNG: ~では済まされない (Không thể giải quyết/bỏ qua chỉ bằng một câu lỡ đãng sơ suất được).' },
        { id: 'B', text: 'いられない', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'たまらない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ほかならない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Mức độ nghiêm trọng không thể bỏ qua: ~では済まされない.',
      relatedKnowledge: 'Cấu trúc ~では済まない / ~では済まされない.'
    },
    {
      id: 'n2-g-14',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '彼は まるで 自分で 見て きた （　　） 自慢げに 話した。',
      options: [
        { id: 'A', text: 'かのように', isCorrect: true, analysis: 'ĐÚNG: まるで... かのように (Cứ như thể là chính mắt mình chứng kiến).' },
        { id: 'B', text: 'かぎりに', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'そうに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'とおりに', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Cặp từ: まるで + V + かのように (Y như thể là).',
      relatedKnowledge: 'Cấu trúc ~かのように.'
    },
    {
      id: 'n2-g-15',
      level: 'N2',
      year: '2018-07',
      section: 'grammar',
      question: '彼を 信頼して （　　）、この 秘密の プロジェクトを 打ち明けたのだ。',
      options: [
        { id: 'A', text: 'こそ', isCorrect: true, analysis: 'ĐÚNG: V-te + こそ (Chính vì tin tưởng tuyệt đối nên mới thổ lộ dự án mật này).' },
        { id: 'B', text: 'さえ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'すら', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'のみ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Nhấn mạnh lý do duy nhất dẫn đến hành động: V-te + こそ.',
      relatedKnowledge: 'Ngữ pháp ~てこそ (Chính vì... mới).'
    },

    // --- ĐỌC HIỂU DOKKAI N2 (Chuẩn 3 Phần: Văn Giải Thích/Bình Luận + Thông Báo/Email + Tra Cứu Thông Tin) ---
    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn ngắn (~200字)
    {
      id: 'n2-r-1',
      level: 'N2',
      year: '2018-07',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_short',
        categoryLabel: '1. 説明文・解説文 (Đoạn ngắn ~200字)',
        wordCount: 198,
        focusPoints: 'Hỏi ý chính & câu hỏi tu từ của tác giả'
      },
      passageOrScript: `現代社会はあらゆる分野において「効率」と「スピード」を最優先する傾向にある。しかし、深い思考力や独自の創造性を育むためには、一見すると無駄に思える「遠回り」や「試行錯誤」こそが不可欠なのではないだろうか。最短ルートだけを進んでいては、予期せぬ発見も、失敗から得られる血肉となった生きた知恵も手に入らない。回り道をした経験の蓄積こそが、人間の器を大きく育てるのである。`,
      question: '筆者の考えとして最も適切なものはどれか。',
      options: [
        { id: 'A', text: '効率性とスピードを極限まで追求し、失敗を最小限に抑えるべきだ。', isCorrect: false, analysis: 'SAI: Ngược lại với quan điểm phê phán của tác giả.' },
        { id: 'B', text: '一見無駄に見える遠回りや試行錯誤の中にこそ、真の創造性と生きた知恵の源泉がある。', isCorrect: true, analysis: 'ĐÚNG: Khớp chính xác câu hỏi tu từ: "遠回りや試行錯誤こそが不可欠なのではないだろうか... 回り道をした経験の蓄積こそが、人間の器を大きく育てる".' },
        { id: 'C', text: '最短ルートを選ぶことが、現代のビジネスで成功するための唯一の法則だ。', isCorrect: false, analysis: 'SAI: Tác giả nhấn mạnh đi đường tắt sẽ làm mất đi khả năng sáng tạo độc đáo.' },
        { id: 'D', text: 'スピードについていけない旧態依然の考え方は、社会から淘汰されるべきだ。', isCorrect: false, analysis: 'SAI: Không có ý này trong văn bản.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn ngắn N2): Bắt cấu trúc câu hỏi tu từ: "...こそが不可欠なのではないだろうか" -> Mệnh đề trước đó (遠回りや試行錯誤) chính là thông điệp tác giả muốn khẳng định!',
      relatedKnowledge: 'Kỹ thuật đọc hiểu câu hỏi tu từ N2 (〜ではないだろうか / 〜ではなかろうか).'
    },

    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn trung (~350字)
    {
      id: 'n2-r-2',
      level: 'N2',
      year: '2018-07',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_medium',
        categoryLabel: '1. 説明文・解説文 (Đoạn trung ~350字)',
        wordCount: 355,
        focusPoints: 'Hỏi nguyên nhân & định nghĩa bản chất sự việc'
      },
      passageOrScript: `ソーシャルメディアの普及により、私たちは他人の華やかな生活や成功体験を24時間リアルタイムで目撃できるようになった。その結果、「自分だけが何か価値ある体験を取り残されているのではないか」という不安、いわゆるFOMO（取り残されることへの恐れ）に苛まれる現代人が急増している。
しかし、画面越しに見える他者の生活は、人生の最も輝かしい一瞬だけを巧みに切り取った「編集された現実」に過ぎない。他者との際限のない比較は、自己肯定感を摩耗させ、本来自分が大切にすべき足元の幸福を見失わせる。
自立した精神とは、他者の評価や承認に依存することではない。他人のタイムラインを羨むのをやめ、自分自身の内なる声と判断基準に誠実に向き合うことこそが、精神的な平穏を手に入れる唯一の道なのである。`,
      question: '筆者はSNS時代における精神的な自立について、どのように述べているか。',
      options: [
        { id: 'A', text: '他人に取り残されないよう、より多くのコミュニティに参加して情報を集め続けるべきだ。', isCorrect: false, analysis: 'SAI: Đây chính là biểu hiện của chứng bệnh FOMO mà tác giả cảnh báo.' },
        { id: 'B', text: '他人の切り取られた情報との比較をやめ、自分自身の内なる価値基準に向き合うべきだ。', isCorrect: true, analysis: 'ĐÚNG: Khớp kết luận câu cuối: "他人のタイムラインを羨むのをやめ、自分自身の内なる声と判断基準に誠実に向き合うことこそが...".' },
        { id: 'C', text: '自分の生活もSNS上で華やかに演出し、他者からの承認を多く集めるべきだ。', isCorrect: false, analysis: 'SAI: Tác giả khẳng định tinh thần tự lập không phụ thuộc vào sự承認 của người khác.' },
        { id: 'D', text: 'インターネット接続を完全に遮断し、社会から孤立して生活すべきだ。', isCorrect: false, analysis: 'SAI: Tác giả chỉ bàn về thái độ nội tâm chứ không cổ xúy cô lập vật lý.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn trung N2): Tìm liên từ chuyển tiếp "しかし" ở đoạn 2 để nắm bắt luận điểm phản biện, sau đó nhìn câu kết đoạn mang từ nhấn mạnh "〜ことこそが唯一の道である".',
      relatedKnowledge: 'Đọc hiểu đoạn trung N2: Nhận diện cấu trúc luận thuyết tâm lý - xã hội hiện đại.'
    },

    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn dài (~550字)
    {
      id: 'n2-r-3',
      level: 'N2',
      year: '2018-07',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_long',
        categoryLabel: '1. 説明文・解説文 (Đoạn dài ~550字)',
        wordCount: 540,
        focusPoints: 'Bài văn tổng hợp: Phân tích lập luận đa tầng và giá trị nhân văn'
      },
      passageOrScript: `AIやロボット工学の急速な進展によって、かつて人間にしかできないと思われていた知的労働の多くが機械によって代替されようとしている。高度な計算や医療画像の診断、定型的な文章作成に至るまで、処理速度と正確さにおいて人間が機械に敵わない領域は今後も拡大し続けるだろう。これに伴い、「人間の労働価値は失われるのではないか」という悲観論も広がっている。
しかし、この技術革新は、皮肉にも「人間らしさとは何か」という根源的な問いを浮き彫りにした。機械は膨大な過去データに基づいて最適解を提示することはできるが、相手の痛みや悲しみに寄り添う「共感」や、正解のない倫理的ジレンマに直面した際の「覚悟ある決断」を下すことはできない。また、無意味に見える日常の機微に心を震わせ、新たな問いそのものを生み出す創造性も、生命体である人間に固有のものだ。
つまり、定型的な業務から解放された人間が今後担うべき役割は、効率性の追求ではなく、心を通わせるケアや感情の共有、そして未知の価値を模索する対話である。道具の進化を恐れるのではなく、道具にはない人間固有の感性を磨き上げることこそが、これからの時代を生き抜く希望となるのではないだろうか。`,
      question: 'AI技術が進化する時代において、筆者が人間に求められる役割として最も強調していることはどれか。',
      options: [
        { id: 'A', text: '機械の処理スピードと正確さに負けないよう、暗記力と計算力を鍛え上げること。', isCorrect: false, analysis: 'SAI: Tác giả thừa nhận ở mặt này con người không thể thắng được máy móc.' },
        { id: 'B', text: '共感や倫理的決断、心を通わせる対話など、機械には代替できない人間固有の感性を発揮すること。', isCorrect: true, analysis: 'ĐÚNG: Khớp nguyên ý hai đoạn kết: "相手の痛みに寄り添う共感... 覚悟ある決断... 心を通わせるケアや感情の共有、未知の価値を模索する対話".' },
        { id: 'C', text: '技術革新を法律で厳しく規制し、AIの開発を直ちに停止させること。', isCorrect: false, analysis: 'SAI: Tác giả nói không nên sợ hãi tiến bộ công nghệ (道具の進化を恐れるのではなく).' },
        { id: 'D', text: 'すべての意思決定をAIの最適解に委ね、労働から完全に引退すること。', isCorrect: false, analysis: 'SAI: Ngược lại với thông điệp tích cực của tác giả.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn dài N2): Đọc nhanh câu đầu đoạn cuối bắt đầu bằng "つまり" -> Nắm ngay định hướng giải pháp của tác giả đối với tương lai công nghệ.',
      relatedKnowledge: 'Kỹ thuật xử lý bài đọc dài tổng hợp N2: Tìm cấu trúc đối sánh giữa "Hạn chế của AI (過去データ)" vs "Ưu thế của con người (共感・倫理・感性)".'
    },

    // 2. お知らせ・メール (Thông báo / Email / Thư từ) (~200字)
    {
      id: 'n2-r-4',
      level: 'N2',
      year: '2018-07',
      section: 'reading',
      dokkaiMeta: {
        category: 'notice_email',
        categoryLabel: '2. お知らせ・メール (Thông báo công văn ~200字)',
        wordCount: 225,
        focusPoints: 'Trọng tâm: Lý do, mốc thời gian cúp điện & hành động người thuê phải thực hiện'
      },
      passageOrScript: `テナント企業各位
サンシャインビジネスビル管理事務所

【重要】電気設備法定点検に伴う全館停電のお知らせ

平素は格別のご高配を賜り、厚く御礼申し上げます。
電気事業法に基づく年次法定点検の実施に伴い、下記の日程においてビル全館の停電を実施いたします。

1. 停電日時：11月18日（土） 22:00 〜 11月19日（日） 6:00
2. 対象範囲：当ビル全フロア（エレベーター、空調、照明、コンセント）
※注意事項：
・停電中は安全確保のため、ビル内への立ち入りは一切禁止となります。
・サーバーやパソコン等の精密機器は、故障を防ぐため【11月18日（土）20:00まで】に必ず電源を遮断してください。
ご不便をおかけいたしますが、何卒ご理解とご協力のほどお願い申し上げます。`,
      question: 'このビルのテナント企業の社員は、停電に備えて何をしなければなりませんか。',
      options: [
        { id: 'A', text: '11月18日（土）の夜22時にビル内に集まって点検に立ち会う。', isCorrect: false, analysis: 'SAI: Thông báo ghi rõ: "ビル内への立ち入りは一切禁止となります" (Cấm tuyệt đối vào tòa nhà).' },
        { id: 'B', text: 'サーバーやパソコンの電源を、11月18日（土）の20:00までに確実に切っておく。', isCorrect: true, analysis: 'ĐÚNG: Khớp chính xác chú ý: "サーバーやパソコン等の精密機器は... 11月18日（土）20:00までに必ず電源を遮断してください".' },
        { id: 'C', text: '11月19日（日）の朝6時までに電気事業法の手続きを行う。', isCorrect: false, analysis: 'SAI: Đó là việc của ban quản lý.' },
        { id: 'D', text: '停電中もエレベーターだけは利用できるように予約する。', isCorrect: false, analysis: 'SAI: Toàn bộ thang máy đều bị ngắt điện.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Thông báo/Email N2): Tìm ngay dấu ※注意事項 -> Đọc hạn giờ của hành động quan trọng: "【11月18日（土）20:00までに】必ず電源を遮断".',
      relatedKnowledge: 'Từ vựng văn bản hành chính công sở Nhật: 法定点検 (Kiểm định luật định), 停電 (Cúp điện), 立ち入り禁止 (Cấm vào), 電源を遮断する (Ngắt nguồn điện).'
    },

    // 3. 情報検索 (Tra cứu thông tin thực tế) - Bài 1 gồm 2 câu hỏi (Câu 1/2)
    {
      id: 'n2-r-5',
      level: 'N2',
      year: '2018-07',
      section: 'reading',
      dokkaiMeta: {
        category: 'info_search',
        categoryLabel: '3. 情報検索 (Tra cứu thông tin thực tế)',
        infoSearchDocTitle: 'Bảng Chỉ Dẫn Tour Kyoto Mùa Thu & Quy Định Hoàn Hủy Vé',
        questionNumberInGroup: 1,
        focusPoints: 'Quét điều kiện ngày khởi hành, đặt sớm & tính toán tổng chi phí'
      },
      passageOrScript: `【ひまわり観光　秋の京都日帰りバスツアーのご案内】

◆ ツアー料金（1名様・昼食付き・税込）
・平日コース（月〜金）：大人 10,000円 ／ 子ども（小学生以下） 6,000円
・休日コース（土・日・祝）：大人 12,000円 ／ 子ども（小学生以下） 7,500円

◆ 割引制度（重複適用は不可）
・早割30：出発日の30日前までに予約・入金完了で、1名につき【1,000円引き】。
・ファミリー割：大人2名＋子ども1名以上で申し込むと、合計金額から【2,000円引き】。

◆ キャンセル料（取消日と手数料）
・出発日の21日前まで：無料
・出発日の20日〜8日前：旅行代金の20%
・出発日の7日〜2日前：旅行代金の30%
・前日（出発日前日）：旅行代金の40%
・当日（出発前）：旅行代金の50%
・旅行開始後または無連絡不参加：100%
※病気や怪我により医師の診断書を提出した場合は、手数料一律1,000円のみで残額を全額返金いたします。`,
      question: '山田さんは家族（夫、妻、小学生の息子の計3名）で、40日前に「平日コース」を予約・入金しました。最も安くなる割引を適用した場合、家族3人の合計旅行代金はいくらになりますか。',
      options: [
        { id: 'A', text: '26,000円', isCorrect: false, analysis: 'SAI: Đây là giá gốc chưa áp dụng bất kỳ giảm giá nào (10,000 x 2 + 6,000).' },
        { id: 'B', text: '24,000円', isCorrect: false, analysis: 'SAI: Đây là mức giá nếu chỉ áp dụng ファミリー割 (giảm 2,000円), nhưng chưa phải mức rẻ nhất.' },
        { id: 'C', text: '23,000円', isCorrect: true, analysis: 'ĐÚNG: Giá gốc: 10,000 x 2 (người lớn) + 6,000 (trẻ em) = 26,000円. Vì đặt trước 40 ngày (>30 ngày), có thể dùng 早割30 (giảm 1,000円/người x 3 người = 3,000円). Nếu dùng ファミリー割 chỉ giảm 2,000円. Vì "重複適用は不可" (không áp dụng cùng lúc), chọn 早割30 để tiết kiệm nhất: 26,000 - 3,000 = 23,000円.' },
        { id: 'D', text: '21,000円', isCorrect: false, analysis: 'SAI: Cộng gộp cả 2 chương trình giảm giá vi phạm quy định "重複適用は不可".' }
      ],
      speed30sTip: 'Mẹo 30 giây (Tra cứu N2): So sánh 2 mức giảm: 早割30 (1,000 x 3 = 3,000円) vs ファミリー割 (2,000円). Chọn 早割30 -> 26,000 - 3,000 = 23,000円!',
      relatedKnowledge: 'Quy tắc tra cứu nâng cao JLPT: Chú ý điều kiện cấm cộng dồn ưu đãi (重複適用は不可 / 他の割引との併用はできません).'
    },

    // 3. 情報検索 (Tra cứu thông tin thực tế) - Bài 1 gồm 2 câu hỏi (Câu 2/2)
    {
      id: 'n2-r-6',
      level: 'N2',
      year: '2018-07',
      section: 'reading',
      dokkaiMeta: {
        category: 'info_search',
        categoryLabel: '3. 情報検索 (Tra cứu thông tin thực tế)',
        infoSearchDocTitle: 'Bảng Chỉ Dẫn Tour Kyoto Mùa Thu & Quy Định Hoàn Hủy Vé',
        questionNumberInGroup: 2,
        focusPoints: 'Quét bảng tỷ lệ hoàn hủy & điều kiện ngoại lệ có giấy chứng nhận y tế'
      },
      passageOrScript: `【ひまわり観光　秋の京都日帰りバスツアーのご案内】

◆ ツアー料金（1名様・昼食付き・税込）
・平日コース（月〜金）：大人 10,000円 ／ 子ども（小学生以下） 6,000円
・休日コース（土・日・祝）：大人 12,000円 ／ 子ども（小学生以下） 7,500円

◆ 割引制度（重複適用は不可）
・早割30：出発日の30日前までに予約・入金完了で、1名につき【1,000円引き】。
・ファミリー割：大人2名＋子ども1名以上で申し込むと、合計金額から【2,000円引き】。

◆ キャンセル料（取消日と手数料）
・出発日の21日前まで：無料
・出発日の20日〜8日前：旅行代金の20%
・出発日の7日〜2日前：旅行代金の30%
・前日（出発日前日）：旅行代金の40%
・当日（出発前）：旅行代金の50%
・旅行開始後または無連絡不参加：100%
※病気や怪我により医師の診断書を提出した場合は、手数料一律1,000円のみで残額を全額返金いたします。`,
      question: '休日コース（大人1名 12,000円）に申し込んでいた鈴木さんは、出発の3日前にインフルエンザにかかり、病院で医師の診断書を発行してもらってツアーを取り消しました。返金される金額はいくらですか。',
      options: [
        { id: 'A', text: '8,400円', isCorrect: false, analysis: 'SAI: Đây là mức tiền hoàn lại nếu bị trừ 30% hủy thường (trừ 3,600円), bỏ qua quy định ưu đãi y tế.' },
        { id: 'B', text: '11,000円', isCorrect: true, analysis: 'ĐÚNG: Khớp điều kiện ngoại lệ sau dấu ※: "病気や怪我により医師の診断書を提出した場合は、手数料一律1,000円のみで残額を全額返金いたします". Do đó, tiền hoàn lại = 12,000 - 1,000 = 11,000円.' },
        { id: 'C', text: '12,000円', isCorrect: false, analysis: 'SAI: Vẫn phải mất khoản phí thủ tục cố định 1,000円.' },
        { id: 'D', text: '6,000円', isCorrect: false, analysis: 'SAI: Tính theo biểu phí hủy trong ngày.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Quét ngoại lệ tra cứu): Có cụm "医師の診断書" (Giấy chứng nhận bác sĩ) -> Quét ngay dòng ghi chú ※ ở cuối cùng: Trừ đúng 1,000円 phí thủ tục -> Hoàn lại 12,000 - 1,000 = 11,000円!',
      relatedKnowledge: 'Bẫy đề thi JLPT N2: Trường hợp ngoại lệ y tế/thiên tai luôn được ghi ở chú thích dấu sao `※` phía dưới bảng biểu.'
    },

    // --- NGHE HIỂU CHOUKAI N2 (30 câu Chuẩn Thi Mondai 1 -> Mondai 5 - 100% Tiếng Nhật) ---
    ...N2_CHOUKAI_QUESTIONS
  ]
};
