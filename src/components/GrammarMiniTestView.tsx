import React, { useState } from 'react';
import { GrammarItem } from '../types';
import {
  Award,
  CheckCircle,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface Props {
  item: GrammarItem;
}

export const GrammarMiniTestView: React.FC<Props> = ({ item }) => {
  const questions = item.miniTest?.questions || [];
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl text-slate-400">
        Bài kiểm tra 5 câu đang được biên soạn cho mẫu này...
      </div>
    );
  }

  const handleSelect = (qId: string, optId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      const chosen = selectedAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (chosen && correctOpt && chosen === correctOpt.id) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();

  const getEvaluation = (s: number) => {
    if (s <= 2) {
      return {
        verdict: 'Cần học lại',
        color: 'text-rose-400 border-rose-500/50 bg-rose-950/40',
        advice: 'Bạn chưa nắm vững cấu trúc cơ bản hoặc dễ dính bẫy chia thể. Hãy ôn lại Tầng 1 và Tầng 2!',
      };
    }
    if (s === 3) {
      return {
        verdict: 'Đang hình thành',
        color: 'text-amber-400 border-amber-500/50 bg-amber-950/40',
        advice: 'Bạn đã hiểu đại ý nhưng còn lúng túng khi gặp các câu hỏi vận dụng ngữ cảnh. Hãy làm thêm bài tập Tầng 5!',
      };
    }
    if (s === 4) {
      return {
        verdict: 'Nắm khá tốt',
        color: 'text-blue-400 border-blue-500/50 bg-blue-950/40',
        advice: 'Kiến thức rất vững! Chỉ cần chú ý thêm một chút về phổ sắc thái quan hệ người nói - người nghe.',
      };
    }
    return {
      verdict: 'Có thể chuyển sang bài nâng cao',
      color: 'text-emerald-400 border-emerald-500/50 bg-emerald-950/40',
      advice: 'Tuyệt đỉnh! Bạn đã làm chủ 100% bản chất, sắc thái và điều kiện sử dụng mẫu ngữ pháp này.',
    };
  };

  const evalResult = getEvaluation(score);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4 space-y-1">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
          TẦNG 9 • ĐÁNH GIÁ CHUẨN SƯ PHẠM
        </span>
        <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-cyan-400" />
          Mini-Test 5 Câu: 2 Cơ Bản + 2 Vận Dụng + 1 Phân Biệt Sắc Thái
        </h3>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const selected = selectedAnswers[q.id];

          return (
            <div key={q.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    q.tier === 'basic'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : q.tier === 'application'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}
                >
                  {q.tier === 'basic' ? 'Cơ bản' : q.tier === 'application' ? 'Vận dụng' : 'Sắc thái'}
                </span>
                <span className="text-xs text-slate-500 font-mono">Câu {qIndex + 1}/5</span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white font-japanese leading-relaxed">
                {q.question}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt) => {
                  const isChosen = selected === opt.id;
                  let style = 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300';

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      style = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isChosen && !opt.isCorrect) {
                      style = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    }
                  } else if (isChosen) {
                    style = 'bg-cyan-600 text-white font-bold border-cyan-500 shadow-md';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={`p-3.5 rounded-xl border text-left text-xs transition flex items-start gap-2.5 cursor-pointer ${style}`}
                    >
                      <span className="w-5 h-5 rounded-md bg-slate-800 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {opt.id}
                      </span>
                      <span className="font-japanese font-medium leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 space-y-1">
                  {q.options.map((opt) => (
                    <div key={opt.id} className={opt.isCorrect ? 'text-emerald-300 font-medium' : ''}>
                      [{opt.id}]: {opt.explanation}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action / Result */}
      {!isSubmitted ? (
        <button
          onClick={() => setIsSubmitted(true)}
          disabled={Object.keys(selectedAnswers).length < questions.length}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white font-extrabold text-sm shadow-xl shadow-cyan-600/30 cursor-pointer"
        >
          Nộp bài chấm điểm & Xem phân loại trình độ ({Object.keys(selectedAnswers).length}/5 câu đã chọn)
        </button>
      ) : (
        <div className="p-6 rounded-3xl border-2 space-y-4 text-center animate-fadeIn shadow-2xl bg-slate-950">
          <div className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
            KẾT QUẢ MINI-TEST NGỮ PHÁP
          </div>
          <div className="text-4xl font-mono font-black text-white">
            {score} / 5 <span className="text-sm font-normal text-slate-400">điểm</span>
          </div>

          <div className={`p-4 rounded-2xl border ${evalResult.color} space-y-1 text-left`}>
            <div className="font-bold text-sm">Phân loại: {evalResult.verdict}</div>
            <p className="text-xs leading-relaxed opacity-90">{evalResult.advice}</p>
          </div>

          <button
            onClick={() => {
              setSelectedAnswers({});
              setIsSubmitted(false);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Làm lại bài kiểm tra này</span>
          </button>
        </div>
      )}
    </div>
  );
};
