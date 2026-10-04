import React, { useState } from 'react';
import { GrammarItem } from '../types';
import { JapaneseSpeechEngine } from '../services/speech';
import {
  HelpCircle,
  CheckCircle,
  XCircle,
  Lightbulb,
  Building,
  Users,
  Compass,
  Volume2
} from 'lucide-react';

interface Props {
  item: GrammarItem;
}

export const GrammarComparisonScenarioView: React.FC<Props> = ({ item }) => {
  const data = item.whyNotTheOther;
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  if (!data) {
    return (
      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl text-slate-400">
        Tính năng so sánh tình huống đang được cập nhật cho mẫu ngữ pháp này...
      </div>
    );
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4 space-y-1">
        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
          TÍNH NĂNG ĐẶC BIỆT • SẮC THÁI BẢN XỨ THỰC CHIẾN
        </span>
        <h3 className="text-xl font-extrabold text-white">
          "Tại Sao Không Dùng Mẫu Kia?" (Why Not The Other One?)
        </h3>
        <p className="text-xs text-slate-400">
          Người học không chỉ biết mẫu này nghĩa là gì, mà phải hiểu: Tại sao người Nhật lại chọn mẫu này thay vì mẫu gần giống?
        </p>
      </div>

      {/* Scenario Box */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
          <Compass className="w-4 h-4" />
          {data.situation}
        </span>
        <h4 className="text-base font-bold text-white leading-relaxed">
          {data.targetChoiceQuestion}
        </h4>
      </div>

      {/* Interactive Options A, B, C, D */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.options.map((opt) => {
          const isSelected = selectedOption === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => setSelectedOption(opt.id)}
              className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-slate-950 border-amber-500 ring-2 ring-amber-500/20 shadow-xl'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                        opt.isRecommended
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className="font-japanese font-bold text-white text-base">
                      {opt.text}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      JapaneseSpeechEngine.speak(opt.text);
                    }}
                    className="text-slate-400 hover:text-white p-1 rounded-md"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1 text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500">Đúng ngữ pháp:</span>
                    <span className={opt.isGrammaticallyCorrect ? 'text-emerald-400 font-semibold' : 'text-rose-400'}>
                      {opt.isGrammaticallyCorrect ? '✓ Đúng ngữ pháp' : '✕ Sai ngữ pháp'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500">Mức lịch sự:</span>
                    <span className="text-amber-300 font-semibold">{opt.politenessLevel}</span>
                  </div>

                  <div className="flex items-start gap-1.5 pt-1 border-t border-slate-800/80">
                    <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-400">Môi trường công sở:</strong> {opt.businessAppropriateness}
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 pt-1">
                    <Users className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-400">Nếu nói với bạn thân:</strong> {opt.friendAlternative}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`p-2.5 rounded-xl text-xs font-bold text-center border ${
                  opt.isRecommended
                    ? 'bg-emerald-950/60 border-emerald-700/60 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                {opt.verdict}
              </div>
            </div>
          );
        })}
      </div>

      {/* Thinking Rule Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-orange-950/30 to-slate-950 border border-amber-600/40 text-xs sm:text-sm text-amber-200 leading-relaxed space-y-2">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
          <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
          <span>QUY TẮC TƯ DUY ĐỂ TỰ CHỌN ĐÚNG TRONG MỌI TÌNH HUỐNG MỚI:</span>
        </div>
        <p className="font-medium text-slate-200">
          {data.thinkingRule}
        </p>
      </div>
    </div>
  );
};
