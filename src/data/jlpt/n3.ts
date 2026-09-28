import { JLPTExamPackage } from '../jlptExams';
import { N3_CHOUKAI_QUESTIONS } from '../choukai/n3Choukai';

export const EXAM_N3_PACKAGE: JLPTExamPackage = {
  id: 'exam-n3-2017-12',
  level: 'N3',
  year: '2017-12',
  title: 'Đề Thi Thật JLPT N3 (Kỳ Tháng 12/2017 & 2019)',
  totalTimeMinutes: 105,
  questions: [
    // --- TỪ VỰNG N3 (15 câu) ---
    {
      id: 'n3-v-1',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: 'この 機械の 【操作】 は とても 簡単です。',
      options: [
        { id: 'A', text: 'そうさ', isCorrect: true, analysis: 'ĐÚNG: 操作 đọc là そうさ (thao tác, vận hành).' },
        { id: 'B', text: 'さくさ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'そうざ', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'さくざ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Thao tác = そうさ.',
      relatedKnowledge: 'Chữ Hán N3: 操 (Thao) + 作 (Tác).'
    },
    {
      id: 'n3-v-2',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '地震の 被害は 【想像】 以上に 大きかった。',
      options: [
        { id: 'A', text: 'そうぞう', isCorrect: true, analysis: 'ĐÚNG: 想像 đọc là そうぞう (tưởng tượng).' },
        { id: 'B', text: 'しょうぞう', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'そうしょう', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'しょうしょう', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Tưởng tượng = そうぞう. Chú ý âm đục ぞう.',
      relatedKnowledge: 'Chữ Hán 像 (Tượng).'
    },
    {
      id: 'n3-v-3',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '部長は 書類を 【確認】 した。',
      options: [
        { id: 'A', text: 'かくにん', isCorrect: true, analysis: 'ĐÚNG: 確認 đọc là かくにん (xác nhận, kiểm tra).' },
        { id: 'B', text: 'こうにん', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'かくみん', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'こうみん', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Xác nhận = かくにん.',
      relatedKnowledge: 'Xác nhận trong công sở: 確認する.'
    },
    {
      id: 'n3-v-4',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '父は 毎朝 新聞の 【けいざい】 欄を 読んでいます。',
      options: [
        { id: 'A', text: '経済', isCorrect: true, analysis: 'ĐÚNG: Kinh Tế = 経済.' },
        { id: 'B', text: '経剤', isCorrect: false, analysis: 'SAI chữ Hán Tế.' },
        { id: 'C', text: '係済', isCorrect: false, analysis: 'SAI chữ Hệ.' },
        { id: 'D', text: '競済', isCorrect: false, analysis: 'SAI chữ Cạnh.' }
      ],
      speed30sTip: 'Mẹo: Kinh tế = 経済.',
      relatedKnowledge: 'Chữ Hán 経 (Kinh) + 済 (Tế).'
    },
    {
      id: 'n3-v-5',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '急な 用事で 出発を 【えんき】 した。',
      options: [
        { id: 'A', text: '延期', isCorrect: true, analysis: 'ĐÚNG: Diên Kỳ = 延期 (hoãn lại).' },
        { id: 'B', text: '遠期', isCorrect: false, analysis: 'SAI chữ Viễn.' },
        { id: 'C', text: '延長', isCorrect: false, analysis: 'SAI: えんちょう (kéo dài).' },
        { id: 'D', text: '延着', isCorrect: false, analysis: 'SAI: えんちゃく (đến trễ).' }
      ],
      speed30sTip: 'Mẹo: Hoãn lại = 延期 (えんき).',
      relatedKnowledge: 'Từ vựng N3: 延期する, 中止する.'
    },
    {
      id: 'n3-v-6',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '彼は どんな 困難にも （　　） 強い 人だ。',
      options: [
        { id: 'A', text: '耐えられる', isCorrect: true, analysis: 'ĐÚNG: 耐える (たえる - chịu đựng được khó khăn).' },
        { id: 'B', text: '堪える', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '抑えられる', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '支えられる', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 困難に耐える (Chịu đựng được nghịch cảnh).',
      relatedKnowledge: 'Collocation: 困難・プレッシャーに耐える.'
    },
    {
      id: 'n3-v-7',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '旅行の 費用を 大雑把に （　　） してみた。',
      options: [
        { id: 'A', text: '計算', isCorrect: true, analysis: 'ĐÚNG: 計算する (けいさん - tính toán chi phí).' },
        { id: 'B', text: '測定', isCorrect: false, analysis: 'SAI: Đo lường kích thước.' },
        { id: 'C', text: '決算', isCorrect: false, analysis: 'SAI: Quyết toán tài chính công ty.' },
        { id: 'D', text: '勘定', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 費用を計算する (Tính toán chi phí).',
      relatedKnowledge: 'Từ vựng kinh tế tài chính đời sống N3.'
    },
    {
      id: 'n3-v-8',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '彼の 発言は 信用に （　　） ない。',
      options: [
        { id: 'A', text: '値し', isCorrect: true, analysis: 'ĐÚNG: 値する (あたいする - xứng đáng để tin cậy).' },
        { id: 'B', text: '足し', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '達し', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '及ば', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 信用に値しない (Không đáng để tin tưởng).',
      relatedKnowledge: 'Cụm từ trang trọng N3: ~に値する.'
    },
    {
      id: 'n3-v-9',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '彼女の 努力が （　　） 結びついた。',
      options: [
        { id: 'A', text: '成果に', isCorrect: true, analysis: 'ĐÚNG: 成果に結びつく (Nỗ lực kết tinh thành thành quả tốt đẹp).' },
        { id: 'B', text: '効果に', isCorrect: false, analysis: 'SAI: 効果 là hiệu quả thuốc/biện pháp.' },
        { id: 'C', text: '結果に', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '功績に', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Cụm cố định: 成果に結びつく (Đạt được thành quả).',
      relatedKnowledge: 'Collocation N3: 成果に結びつく.'
    },
    {
      id: 'n3-v-10',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '【具体的】 な 例を 挙げて 説明してください。',
      options: [
        { id: 'A', text: 'ぐたいてき', isCorrect: true, analysis: 'ĐÚNG: 具体 đọc là ぐたい (cụ thể).' },
        { id: 'B', text: 'ぐていてき', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'くたいてき', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'くていてき', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Cụ thể mang âm đục ぐ (ぐたいてき).',
      relatedKnowledge: 'Cặp từ trái nghĩa: 具体的 vs 抽象的.'
    },
    {
      id: 'n3-v-11',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: 'この 仕事は 私には （　　） すぎる。',
      options: [
        { id: 'A', text: '荷が重', isCorrect: true, analysis: 'ĐÚNG: 荷が重い (にがおもい - quá sức, gánh nặng vượt khả năng).' },
        { id: 'B', text: '肩が重', isCorrect: false, analysis: 'SAI: Mỏi vai.' },
        { id: 'C', text: '気が重', isCorrect: false, analysis: 'SAI: Tâm trạng nặng nề uể oải.' },
        { id: 'D', text: '腰が重', isCorrect: false, analysis: 'SAI: Chần chừ không muốn hành động.' }
      ],
      speed30sTip: 'Mẹo: Trách nhiệm công việc quá sức -> 荷が重い (Gánh nặng quá tải).',
      relatedKnowledge: 'Quán dụng ngữ cơ thể N3.'
    },
    {
      id: 'n3-v-12',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '雨で 濡れた 道で 足を （　　） そうになった。',
      options: [
        { id: 'A', text: '滑らせ', isCorrect: true, analysis: 'ĐÚNG: 足を滑らせる (あしをすべらせる - trượt chân).' },
        { id: 'B', text: '転ばせ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '倒れ', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'つまずかせ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Đường trơn -> 足を滑らせる (Trượt chân).',
      relatedKnowledge: 'Quán dụng ngữ: 足を滑らせる.'
    },
    {
      id: 'n3-v-13',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '【深刻】 な 問題に 直面している。',
      options: [
        { id: 'A', text: 'しんこく', isCorrect: true, analysis: 'ĐÚNG: Thâm Khắc = しんこく (nghiêm trọng).' },
        { id: 'B', text: 'じんこく', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'しんごく', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'しんきょく', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 深刻 = しんこく (Vấn đề nghiêm trọng).',
      relatedKnowledge: 'Tính từ đuôi な N3: 深刻な問題.'
    },
    {
      id: 'n3-v-14',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '渋滞に 巻き込まれて、約束の 時間に （　　） しまった。',
      options: [
        { id: 'A', text: '遅れて', isCorrect: true, analysis: 'ĐÚNG: 約束の時間に遅れる (Đến muộn giờ hẹn).' },
        { id: 'B', text: '過ぎて', isCorrect: false, analysis: 'SAI: Thời gian trôi qua.' },
        { id: 'C', text: '間に合って', isCorrect: false, analysis: 'SAI: Kịp giờ.' },
        { id: 'D', text: '外れて', isCorrect: false, analysis: 'SAI: Lệch khỏi.' }
      ],
      speed30sTip: 'Mẹo: Kẹt xe (渋滞) -> muộn hẹn (遅れる).',
      relatedKnowledge: 'Collocation: 約束・時間に遅れる.'
    },
    {
      id: 'n3-v-15',
      level: 'N3',
      year: '2017-12',
      section: 'vocabulary',
      question: '彼女は いつも （　　） としていて、誰からも 好かれている。',
      options: [
        { id: 'A', text: 'はきはき', isCorrect: true, analysis: 'ĐÚNG: はきはき (rõ ràng, hoạt bát, nhanh nhẹn).' },
        { id: 'B', text: 'のろのろ', isCorrect: false, analysis: 'SAI: Chậm chạp như sên.' },
        { id: 'C', text: 'ぶつぶつ', isCorrect: false, analysis: 'SAI: Cằn nhằn lẩm bẩm.' },
        { id: 'D', text: 'うろうろ', isCorrect: false, analysis: 'SAI: Đi lang thang quanh quẩn.' }
      ],
      speed30sTip: 'Mẹo: Được mọi người yêu quý -> Tính cách hoạt bát: はきはき.',
      relatedKnowledge: 'Từ tượng hình tượng thanh miêu tả tính cách con người.'
    },

    // --- NGỮ PHÁP N3 (15 câu) ---
    {
      id: 'n3-g-1',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '熱が 39度も あるんだから、今日は 会社を 休む （　　）。',
      options: [
        { id: 'A', text: 'べきだ', isCorrect: true, analysis: 'ĐÚNG: ~べきだ (Đương nhiên phải nghỉ, lời khuyên đạo lý xác đáng).' },
        { id: 'B', text: 'わけがない', isCorrect: false, analysis: 'SAI: Tuyệt đối không thể nào.' },
        { id: 'C', text: 'はずがない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'にちがいない', isCorrect: false, analysis: 'SAI: Chắc chắn là.' }
      ],
      speed30sTip: 'Mẹo: Sốt 39 độ thì đương nhiên nên nghỉ ngơi: V-dic + べきだ.',
      relatedKnowledge: 'Ngữ pháp ~べきだ / ~べきではない.'
    },
    {
      id: 'n3-g-2',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: 'あの まじめな 田中さんが 嘘を つく （　　）。',
      options: [
        { id: 'A', text: 'わけがない', isCorrect: true, analysis: 'ĐÚNG: ~わけがない (Làm sao mà nói dối cho được, tuyệt đối không có lý nào).' },
        { id: 'B', text: 'わけではない', isCorrect: false, analysis: 'SAI: Không hẳn là nói dối.' },
        { id: 'C', text: 'わけだ', isCorrect: false, analysis: 'SAI: Thảo nào.' },
        { id: 'D', text: 'はずだ', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo 30 giây: Người nghiêm túc (まじめ) -> Tuyệt đối không thể làm việc xấu: ~わけがない.',
      relatedKnowledge: 'Phân biệt わけがない vs わけではない.'
    },
    {
      id: 'n3-g-3',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '日本に いる （　　）、一度は 京都の 桜を 見に 行きたい。',
      options: [
        { id: 'A', text: 'うちに', isCorrect: true, analysis: 'ĐÚNG: Trong lúc còn ở Nhật (tranh thủ thời gian có giới hạn).' },
        { id: 'B', text: 'あいだ', isCorrect: false, analysis: 'SAI: あいだ đòi hỏi hành động diễn ra suốt thời gian dài song song.' },
        { id: 'C', text: 'かぎり', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'までに', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Tranh thủ nhân lúc trạng thái chưa đổi -> ~うちに.',
      relatedKnowledge: 'Ngữ pháp ~うちに (Tranh thủ nhân lúc).'
    },
    {
      id: 'n3-g-4',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '彼は 日本に 10年も 住んで いる （　　）、漢字が ほとんど 読めない。',
      options: [
        { id: 'A', text: 'わりに', isCorrect: true, analysis: 'ĐÚNG: So với việc ở 10 năm thì hầu như không đọc được chữ Hán (bất ngờ, nghịch lý).' },
        { id: 'B', text: 'ために', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'とおりに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ように', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Vế trước là tiêu chuẩn đánh giá cao (10 năm), vế sau nghịch lý -> わりに / にしては.',
      relatedKnowledge: 'Cấu trúc ~わりに(は).'
    },
    {
      id: 'n3-g-5',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '子どもに （　　）、親の 愛情は 何よりも 大切な ものだ。',
      options: [
        { id: 'A', text: 'とって', isCorrect: true, analysis: 'ĐÚNG: Noun + にとって (Đối với quan điểm/lập trường của đứa trẻ).' },
        { id: 'B', text: 'たいして', isCorrect: false, analysis: 'SAI: Hướng hành động tác động tới đối tượng.' },
        { id: 'C', text: 'ついて', isCorrect: false, analysis: 'SAI: Về vấn đề gì.' },
        { id: 'D', text: 'よって', isCorrect: false, analysis: 'SAI: Tùy vào.' }
      ],
      speed30sTip: 'Mẹo: Đứng trên lập trường nhận định giá trị -> ~にとって.',
      relatedKnowledge: 'Phân biệt にとって vs に対して.'
    },
    {
      id: 'n3-g-6',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '合格の 知らせを 聞いて、うれしくて （　　）。',
      options: [
        { id: 'A', text: 'たまらない', isCorrect: true, analysis: 'ĐÚNG: Vui không chịu nổi (cảm xúc bộc phát tột cùng).' },
        { id: 'B', text: 'かねない', isCorrect: false, analysis: 'SAI: Có nguy cơ xảy ra chuyện xấu.' },
        { id: 'C', text: 'わけがない', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'きまらない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Tính từ cảm xúc + くてたまらない (Cực kỳ, không chịu nổi).',
      relatedKnowledge: 'Cấu trúc ~てたまらない / ~てならない.'
    },
    {
      id: 'n3-g-7',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '先生の ご指導の （　　）、無事に 合格できました。',
      options: [
        { id: 'A', text: 'おかげで', isCorrect: true, analysis: 'ĐÚNG: Nhờ có ơn hướng dẫn của thầy (おかげで).' },
        { id: 'B', text: 'せいで', isCorrect: false, analysis: 'SAI: せいで dùng cho kết quả tồi tệ.' },
        { id: 'C', text: 'ために', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'わりに', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Biết ơn kết quả tốt -> おかげで.',
      relatedKnowledge: 'Cấu trúc ~おかげで vs ~せいで.'
    },
    {
      id: 'n3-g-8',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '彼女は 歌が うまい （　　）、ダンスも プロ並みだ。',
      options: [
        { id: 'A', text: 'ばかりか', isCorrect: true, analysis: 'ĐÚNG: Không chỉ hát hay mà khiêu vũ cũng đỉnh (ばかりか).' },
        { id: 'B', text: 'ばかりに', isCorrect: false, analysis: 'SAI: Chỉ vì nguyên nhân xấu.' },
        { id: 'C', text: 'ばかりで', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'ばかりは', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Không chỉ A mà còn B -> ばかりか / だけでなく.',
      relatedKnowledge: 'Cấu trúc ~ばかりか (Không những mà còn).'
    },
    {
      id: 'n3-g-9',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '赤ちゃんが 眠ったので、起こさない （　　） 静かに 歩いた。',
      options: [
        { id: 'A', text: 'ように', isCorrect: true, analysis: 'ĐÚNG: V-nai + ように (Để không đánh thức bé).' },
        { id: 'B', text: 'ために', isCorrect: false, analysis: 'SAI: ために không đi với thể phủ định V-nai.' },
        { id: 'C', text: 'そうに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'らしく', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo kinh điển: V-nai chỉ đi với ように, không bao giờ đi với ために!',
      relatedKnowledge: 'Phân biệt ように vs ために.'
    },
    {
      id: 'n3-g-10',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '最近、運動不足の （　　） 体重が 増えて きた。',
      options: [
        { id: 'A', text: 'せいで', isCorrect: true, analysis: 'ĐÚNG: Do tại thiếu vận động nên bị tăng cân.' },
        { id: 'B', text: 'おかげで', isCorrect: false, analysis: 'SAI: Tăng cân không phải là điều vui để cảm ơn.' },
        { id: 'C', text: 'かぎりで', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'もとで', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Kết quả xấu (体重が増えた) -> せいで.',
      relatedKnowledge: 'Cấu trúc Noun + のせいで.'
    },
    {
      id: 'n3-g-11',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: 'この 時計は 20年間 故障 （　　） 動いて いる。',
      options: [
        { id: 'A', text: 'なしに', isCorrect: true, analysis: 'ĐÚNG: Noun + なしに (Không có một hỏng hóc nào suốt 20 năm).' },
        { id: 'B', text: 'ぬきで', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'かぎり', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'とわず', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: 故障なしに動く (Chạy không hề hỏng hóc).',
      relatedKnowledge: 'Cấu trúc ~なしに / ~なしで.'
    },
    {
      id: 'n3-g-12',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '子どもの ころは、よく 川で 魚を とって （　　） ものだ。',
      options: [
        { id: 'A', text: '遊んだ', isCorrect: true, analysis: 'ĐÚNG: V-ta + ものだ (Hồi tưởng thói quen sâu sắc trong quá khứ).' },
        { id: 'B', text: '遊ぶ', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: '遊んで', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: '遊ばない', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Có cụm "子どものころ" (Hồi nhỏ) -> V-ta + ものだ (Nhớ lại quá khứ).',
      relatedKnowledge: 'Cấu trúc ~たものだ (Hồi tưởng).'
    },
    {
      id: 'n3-g-13',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: 'いくら 頼まれた （　　）、不正な ことは できない。',
      options: [
        { id: 'A', text: 'からといって', isCorrect: true, analysis: 'ĐÚNG: Dù có bị nhờ vả thế nào chăng nữa thì việc sai trái cũng không thể làm.' },
        { id: 'B', text: 'からには', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'ばかりに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'わりに', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: いくら... からといって (Cho dẫu có... thì cũng không thể).',
      relatedKnowledge: 'Cặp liên từ: いくら / たとえ + からといって.'
    },
    {
      id: 'n3-g-14',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '彼は 医者の （　　）、自分の 健康管理が 全くなって いない。',
      options: [
        { id: 'A', text: 'くせに', isCorrect: true, analysis: 'ĐÚNG: Mặc dù là bác sĩ thế mà lại không biết tự chăm sóc sức khỏe (くせに thể hiện mỉa mai, trách móc).' },
        { id: 'B', text: 'せいで', isCorrect: false, analysis: 'SAI.' },
        { id: 'C', text: 'とおりに', isCorrect: false, analysis: 'SAI.' },
        { id: 'D', text: 'たびに', isCorrect: false, analysis: 'SAI.' }
      ],
      speed30sTip: 'Mẹo: Vế trước là danh phận, vế sau làm trái ngược đáng chê trách -> くせに.',
      relatedKnowledge: 'Cấu trúc Noun + のくせに (Thế mà lại - chê trách).'
    },
    {
      id: 'n3-g-15',
      level: 'N3',
      year: '2017-12',
      section: 'grammar',
      question: '試験が 近づく （　　）、プレッシャーが 大きく なってきた。',
      options: [
        { id: 'A', text: 'につれて', isCorrect: true, analysis: 'ĐÚNG: Càng gần ngày thi thì áp lực càng lớn (A biến đổi kéo theo B biến đổi).' },
        { id: 'B', text: 'にとって', isCorrect: false, analysis: 'SAI: Đối với.' },
        { id: 'C', text: 'によって', isCorrect: false, analysis: 'SAI: Tùy vào.' },
        { id: 'D', text: 'にかわって', isCorrect: false, analysis: 'SAI: Thay mặt.' }
      ],
      speed30sTip: 'Mẹo: Biến đổi tỷ lệ thuận song hành -> につれて / にしたがって.',
      relatedKnowledge: 'Cấu trúc ~につれて.'
    },

    // --- ĐỌC HIỂU DOKKAI N3 (Chuẩn 3 Phần: Văn Giải Thích/Bình Luận + Thông Báo/Email + Tra Cứu Thông Tin) ---
    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn ngắn (~200字)
    {
      id: 'n3-r-1',
      level: 'N3',
      year: '2017-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_short',
        categoryLabel: '1. 説明文・解説文 (Đoạn ngắn ~200字)',
        wordCount: 195,
        focusPoints: 'Hỏi ý chính & tư tưởng cốt lõi của tác giả'
      },
      passageOrScript: `コミュニケーションにおいて最も重要なのは、言葉そのものよりも「聞き方」である。相手の話を途中で遮らず、うなずきながら最後まで聞くことで、互いの間に強い信頼関係が生まれる。多くの人は自分がどう上手に話すかばかりを気にしがちだが、良き話し手になるための第一歩は、まず「良き聞き手」になることなのだ。相手の言葉に耳を傾ける姿勢こそが、会話を深める鍵である。`,
      question: '筆者が最も主張したいことは何か。',
      options: [
        { id: 'A', text: '相手の話を遮ってでも自分の意見を分かりやすく伝えるべきだ。', isCorrect: false, analysis: 'SAI: Ngược hoàn toàn với quan điểm tác giả (相手の話を途中で遮らず).' },
        { id: 'B', text: '信頼関係を築くためには、上手な話し手になる前にまず「良き聞き手」になることが不可欠だ。', isCorrect: true, analysis: 'ĐÚNG: Khớp chính xác câu chốt: "良き話し手になるための第一歩は、まず「良き聞き手」になることなのだ".' },
        { id: 'C', text: '話すスピードを速くして多くの情報を伝えることが大切だ。', isCorrect: false, analysis: 'SAI: Bài viết không đề cập đến tốc độ nói.' },
        { id: 'D', text: '語彙や難しい言葉をたくさん知っている人が最も優れている。', isCorrect: false, analysis: 'SAI: Bài viết nhấn mạnh cách lắng nghe (聞き方) chứ không phải số lượng từ vựng.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn ngắn): Nhìn câu kết luận đứng sau từ nối "〜だが、... の第一歩は、まず「...」になることなのだ". Cụm từ trong ngoặc kép thường chứa đáp án.',
      relatedKnowledge: 'Kỹ năng đọc hiểu đoạn ngắn: Bắt từ khóa cốt lõi (良き聞き手) và các câu khẳng định mạnh (〜こそが鍵である).'
    },

    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn trung (~350字)
    {
      id: 'n3-r-2',
      level: 'N3',
      year: '2017-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_medium',
        categoryLabel: '1. 説明文・解説文 (Đoạn trung ~350字)',
        wordCount: 340,
        focusPoints: 'Hỏi nguyên nhân & tư tưởng phản biện của tác giả'
      },
      passageOrScript: `日本には昔から贈り物をもらった際に、お礼として別の品を贈る「お返し」の習慣が根付いている。お中元やお歳暮、結婚祝いに対する内祝いなどがその典型である。
この習慣に対して、最近では「お互いに気を遣いすぎて面倒だ」「無駄な出費になるのではないか」という否定的な見方をする若者も増えてきた。
しかし、このお返しの本質は、単なる物の交換ではない。相手の厚意や気遣いを当たり前のこととして受け流すのではなく、「あなたからのお気持ちを確かに受け取り、深く感謝しています」という敬意のサインを可視化することにある。
つまり、お返しとは儀礼的な義務ではなく、人と人との絆を円滑に維持するための大切な社会的知恵なのである。`,
      question: '筆者は「お返し」の習慣について、どのように考えているか。',
      options: [
        { id: 'A', text: '金銭的な負担が大きいため、現代の若者の意見通り早急に廃止すべきだ。', isCorrect: false, analysis: 'SAI: Tác giả không hề ủng hộ việc bãi bỏ phong tục này.' },
        { id: 'B', text: '単なる形式的な義務ではなく、相手への感謝と敬意を可視化し絆を保つための知恵である。', isCorrect: true, analysis: 'ĐÚNG: Khớp nguyên ý hai câu cuối: "相手の厚意への敬意のサインを可視化... 人と人との絆を円滑に維持するための大切な社会的知恵".' },
        { id: 'C', text: 'もらった物と全く同じ値段の物をすぐに買い直して返す義務である。', isCorrect: false, analysis: 'SAI: Tác giả nhấn mạnh đây không phải là "単なる物の交換" hay "儀礼的な義務".' },
        { id: 'D', text: '結婚祝いの時だけに行うべき特別な行事である。', isCorrect: false, analysis: 'SAI: お返し áp dụng trong nhiều hoàn cảnh (お中元, お歳暮, 内祝い...).' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn trung): Tìm liên từ chuyển ý "しかし" (Nhưng) ở đoạn 3 -> Tác giả phản bác lại định kiến của giới trẻ, và đưa ra định nghĩa bản chất sau "つまり、お返しとは...".',
      relatedKnowledge: 'Đọc hiểu đoạn trung N3: Cấu trúc 3 đoạn (Hiện tượng -> Phản bác sau "しかし" -> Đúc kết sau "つまり").'
    },

    // 1. 説明文・解説文 (Văn giải thích / Bình luận) - Đoạn dài (~550字)
    {
      id: 'n3-r-3',
      level: 'N3',
      year: '2017-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'setsumei_long',
        categoryLabel: '1. 説明文・解説文 (Đoạn dài ~550字)',
        wordCount: 520,
        focusPoints: 'Bài văn tổng hợp: Giải mã luận đề, nguyên nhân & giải pháp toàn diện'
      },
      passageOrScript: `スマートフォンやインターネットの普及によって、私たちの日常は隙間時間すら情報で埋め尽くされるようになった。電車を待つ数分間、誰かを待つわずかな時間にも、無意識に画面を開いてニュースやSNSをチェックしてしまう。一見すると、時間を1分たりとも無駄にせず有効活用しているように思えるかもしれない。
しかし、人間の脳は常に新しい刺激を受け続けていると、インプットされた情報を整理し、深く熟考する余裕を失ってしまう。ぼんやりと窓の外を眺めたり、ただ静かに考えに耽ったりするような「何もしない時間」、いわゆる【余白の時間】こそが、新しい発想や独創的なアイデアを生み出すために不可欠なのである。
歴史上の多くの偉大な科学者や芸術家も、散歩中や入浴中など、仕事から離れて心が無防備になった瞬間に、ひらめきを得ていることが多い。
効率性やスピードばかりを至上命題とする現代社会において、意識的に「余白」を作り出す勇気を持つこと。それこそが、情報に振り回されずに自分自身の思考の深さを取り戻すための最良の方法なのではないだろうか。`,
      question: '筆者が述べている【余白の時間】の重要性として、最も合致するものはどれか。',
      options: [
        { id: 'A', text: 'スマホで常に最新ニュースをチェックして隙間時間を埋めること。', isCorrect: false, analysis: 'SAI: Đây là thói quen bị tác giả phê phán làm mất đi sự suy ngẫm.' },
        { id: 'B', text: '何もしない静かな時間を持つことで、脳が情報を整理し独創的なひらめきを生み出せる。', isCorrect: true, analysis: 'ĐÚNG: Khớp câu: "「何もしない時間」、いわゆる【余白の時間】こそが、新しい発想や独創的なアイデアを生み出すために不可欠".' },
        { id: 'C', text: '仕事を休んで毎日長時間入浴や散歩だけに専念すること。', isCorrect: false, analysis: 'SAI: Đoạn văn chỉ nêu ví dụ về khoảnh khắc vô thức lúc tản bộ chứ không khuyên bỏ việc.' },
        { id: 'D', text: '情報化社会から完全に孤立してデジタル機器を一切買わないこと。', isCorrect: false, analysis: 'SAI: Tác giả chỉ khuyên có "ý thức tạo khoảng trống" chứ không phải từ bỏ công nghệ cực đoan.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Đoạn dài): Xác định cụm từ trong ngoặc vuông 【余白の時間】 -> Đọc ngay câu văn chứa từ này và câu đúc kết cuối bài "〜のではないだろうか" để chọn phương án đồng nghĩa.',
      relatedKnowledge: 'Kỹ thuật đọc hiểu đoạn dài tổng hợp: Bắt cấu trúc câu hỏi tu từ kết bài (〜ではないだろうか) để nắm giữ 100% tư tưởng tác giả.'
    },

    // 2. お知らせ・メール (Thông báo / Email / Thư từ) (~200字)
    {
      id: 'n3-r-4',
      level: 'N3',
      year: '2017-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'notice_email',
        categoryLabel: '2. お知らせ・メール (Thông báo / Email ~200字)',
        wordCount: 210,
        focusPoints: 'Trọng tâm: Lý do, mốc thời gian (Deadline), đối tượng hướng tới'
      },
      passageOrScript: `宛先：営業部社員各位
送信者：営業部課長　山田健一
件名：【重要】来週の定例会議の日時変更および資料提出のお願い

営業部の皆様、お疲れ様です。山田です。
来週月曜日（10月15日）に予定していた定例会議ですが、他社との急な商談が入ったため、下記のとおり日時を変更いたします。

・日時：10月17日（水） 14:00〜15:30
・場所：第2会議室
・提出物：月間営業進捗レポート
※発表資料は、10月16日（火）の17:00までに山田宛てにメールで提出してください。会議当日の配布は不要です。`,
      question: '営業部の社員は、会議の準備としていつまでに何をしなければなりませんか。',
      options: [
        { id: 'A', text: '10月15日の会議に出席する。', isCorrect: false, analysis: 'SAI: Cuộc họp ngày 15 đã bị đổi lịch do bận thương đàm với đối tác.' },
        { id: 'B', text: '10月16日（火）の17:00までに、進捗レポートを山田課長にメールで送る。', isCorrect: true, analysis: 'ĐÚNG: Khớp chính xác ghi chú: "発表資料は、10月16日（火）の17:00までに山田宛てにメールで提出してください".' },
        { id: 'C', text: '10月17日の会議当日に資料を紙で印刷して全員に配る。', isCorrect: false, analysis: 'SAI: Email ghi rõ: "会議当日の配布は不要です" (Không cần in phát ngày họp).' },
        { id: 'D', text: '他社との商談に立ち会う。', isCorrect: false, analysis: 'SAI: Đó là việc của山田課長.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Thông báo/Email): Đọc ngay câu hỏi trước -> Bắt cụm "いつまでに (Hạn chót nào)" -> Quét ngay dấu ※ hoặc dòng "提出期限/までに" trong email: "10月16日（火）17:00まで".',
      relatedKnowledge: 'Đọc hiểu Email thương mại: Nhận diện cấu trúc 宛先 (Người nhận), 件名 (Chủ đề), 日時変更 (Đổi lịch), 提出期限 (Hạn nộp).'
    },

    // 3. 情報検索 (Tra cứu thông tin thực tế) - Bài 1 gồm 2 câu hỏi (Câu 1/2)
    {
      id: 'n3-r-5',
      level: 'N3',
      year: '2017-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'info_search',
        categoryLabel: '3. 情報検索 (Tra cứu thông tin thực tế)',
        infoSearchDocTitle: 'Tờ rơi: Bảng Giá & Ưu Đãi Đăng Ký Phòng Tập Sakura Fitness',
        questionNumberInGroup: 1,
        focusPoints: 'Quét nhanh thông tin đối tượng & điều kiện gói tập'
      },
      passageOrScript: `【さくらフィットネスクラブ 入会案内】
当クラブは最新マシンとプール、スタジオプログラムを完備しています。

◆ 会員プラン（月会費・税込）
① レギュラー会員：8,000円
   利用時間：平日・土日祝の全営業時間（9:00〜22:00）利用可能
② デイタイム会員：5,500円
   利用時間：平日の9:00〜17:00限定（土日祝は利用不可）
③ ナイト＆ホリデー会員：6,500円
   利用時間：平日の18:00〜22:00、および土日祝の終日利用可能
④ 学生会員：5,000円
   利用時間：平日・土日祝の全営業時間（※入会時に学生証の提示が必須）

◆ 入会キャンペーン（今月末まで）
・入会金（通常5,000円）が【無料】！
・2名以上で同時に申し込むと、初月の月会費がさらに【1,000円引き】。
※注意：学生会員には「初月1,000円引き」のペア割引は適用されません。`,
      question: '大学生のタンさんは、平日の昼間は授業があるため「平日の夜（19時以降）と日曜日」だけ利用したいと考えています。最も月会費が安くなるプランはどれですか。',
      options: [
        { id: 'A', text: 'レギュラー会員（8,000円）', isCorrect: false, analysis: 'SAI: Giá đắt hơn và không tận dụng ưu đãi sinh viên.' },
        { id: 'B', text: 'デイタイム会員（5,500円）', isCorrect: false, analysis: 'SAI: Gói này chỉ cho tập giờ hành chính 9:00〜17:00 ngày thường, cuối tuần không được vào.' },
        { id: 'C', text: '学生会員（5,000円）', isCorrect: true, analysis: 'ĐÚNG: Vì タン là sinh viên đại học (大学生), có thể đăng ký gói 学生会員 với giá chỉ 5,000円 mà được tập toàn thời gian kể cả tối và chủ nhật (rẻ hơn gói ナイト＆ホリデー 6,500円).' },
        { id: 'D', text: 'ナイト＆ホリデー会員（6,500円）', isCorrect: false, analysis: 'SAI: Dù đáp ứng được khung giờ nhưng giá 6,500円 đắt hơn gói Sinh viên 5,000円.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Tra cứu thông tin): Đọc điều kiện người hỏi: "大学生" (sinh viên) -> So sánh ngay gói ④ 学生会員 (5,000円) với gói ③ (6,500円) -> Chọn gói rẻ nhất 5,000円!',
      relatedKnowledge: 'Kỹ năng Information Retrieval (情報検索): So sánh chéo giữa điều kiện khung giờ và tư cách đối tượng đặc biệt (Học sinh/Sinh viên/Người cao tuổi).'
    },

    // 3. 情報検索 (Tra cứu thông tin thực tế) - Bài 1 gồm 2 câu hỏi (Câu 2/2)
    {
      id: 'n3-r-6',
      level: 'N3',
      year: '2017-12',
      section: 'reading',
      dokkaiMeta: {
        category: 'info_search',
        categoryLabel: '3. 情報検索 (Tra cứu thông tin thực tế)',
        infoSearchDocTitle: 'Tờ rơi: Bảng Giá & Ưu Đãi Đăng Ký Phòng Tập Sakura Fitness',
        questionNumberInGroup: 2,
        focusPoints: 'Quét điều kiện miễn giảm & tính toán chính xác chi phí thực tế'
      },
      passageOrScript: `【さくらフィットネスクラブ 入会案内】
当クラブは最新マシンとプール、スタジオプログラムを完備しています。

◆ 会員プラン（月会費・税込）
① レギュラー会員：8,000円
   利用時間：平日・土日祝の全営業時間（9:00〜22:00）利用可能
② デイタイム会員：5,500円
   利用時間：平日の9:00〜17:00限定（土日祝は利用不可）
③ ナイト＆ホリデー会員：6,500円
   利用時間：平日の18:00〜22:00、および土日祝の終日利用可能
④ 学生会員：5,000円
   利用時間：平日・土日祝の全営業時間（※入会時に学生証の提示が必須）

◆ 入会キャンペーン（今月末まで）
・入会金（通常5,000円）が【無料】！
・2名以上で同時に申し込むと、初月の月会費がさらに【1,000円引き】。
※注意：学生会員には「初月1,000円引き」のペア割引は適用されません。`,
      question: '会社員の佐藤さんと鈴木さんの2人が、今月中に一緒に「レギュラー会員」として申し込む場合、初月に2人で支払う合計金額はいくらになりますか。',
      options: [
        { id: 'A', text: '16,000円', isCorrect: false, analysis: 'SAI: Chưa áp dụng giảm giá 1,000円 cho mỗi người khi đăng ký từ 2 người trở lên.' },
        { id: 'B', text: '14,000円', isCorrect: true, analysis: 'ĐÚNG: Phí vào cửa: 0円 (do có chiến dịch miễn phí). Gói レギュラー là 8,000円/người. Vì 2 người cùng đăng ký (2名以上で同時に申し込む), mỗi người được giảm 1,000円 còn 7,000円/người. Tổng 2 người = 7,000 x 2 = 14,000円.' },
        { id: 'C', text: '21,000円', isCorrect: false, analysis: 'SAI: Tính cả tiền nhập hội 5,000円 vốn đã được miễn phí.' },
        { id: 'D', text: '15,000円', isCorrect: false, analysis: 'SAI: Chỉ giảm giá cho 1 người thay vì cả hai.' }
      ],
      speed30sTip: 'Mẹo 30 giây (Tính toán tra cứu): Phí vào cửa = 0円. Giá gốc = 8,000円. Đăng ký nhóm 2 người -> trừ 1,000円/người -> còn 7,000円 x 2 = 14,000円!',
      relatedKnowledge: 'Bẫy tính toán số tiền trong đề thi JLPT: Bắt chiến dịch miễn phí (無料) + Điều kiện giảm giá theo cặp (ペア割/2名以上).'
    },

    // --- NGHE HIỂU CHOUKAI N3 (30 câu Chuẩn Thi Mondai 1 -> Mondai 5 - 100% Tiếng Nhật) ---
    ...N3_CHOUKAI_QUESTIONS
  ]
};
