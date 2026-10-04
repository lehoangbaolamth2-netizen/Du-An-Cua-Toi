import React, { useState } from 'react';
import { GrammarItem } from '../types';
import { JapaneseSpeechEngine } from '../services/speech';
import { recordNewGrammarError, PersonalErrorCategory } from '../services/grammarErrorTracker';
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  PenTool,
  RotateCcw,
  Volume2,
  Sparkles
} from 'lucide-react';

interface Props {
  item: GrammarItem;
}

export const GrammarActivePracticeView: React.FC<Props> = ({ item }) => {
  const [activeSubTab, setActiveSubTab] = useState<'A' | 'B' | 'C' | 'D' | 'E'>('A');

  // Exercise A: Recognition
  const [selectedOptionA, setSelectedOptionA] = useState<string | null>(null);
  const [isAnsweredA, setIsAnsweredA] = useState(false);

  // Exercise B: Fill in blank
  const [inputAnswerB, setInputAnswerB] = useState('');
  const [isSubmittedB, setIsSubmittedB] = useState(false);
  const [showHintB, setShowHintB] = useState(false);

  // Exercise C: Fix Error
  const [revealedSolutionC, setRevealedSolutionC] = useState(false);

  // Exercise D: Translation
  const [inputAnswerD, setInputAnswerD] = useState('');
  const [isSubmittedD, setIsSubmittedD] = useState(false);

  // Exercise E: Reflex
  const [inputAnswerE, setInputAnswerE] = useState('');
  const [revealedReflexE, setRevealedReflexE] = useState(false);

  const practiceData = item.activeLearning;

  if (!practiceData) {
    return (
      <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl text-slate-400">
        Đang cập nhật các bài tập chủ động cho mẫu ngữ pháp này...
      </div>
    );
  }

  const handleCheckB = () => {
    setIsSubmittedB(true);
    const isCorrect =
      inputAnswerB.trim().toLowerCase() === practiceData.fillInBlank.expectedAnswer.trim().toLowerCase() ||
      (practiceData.fillInBlank.acceptableVariants || []).some(
        (v) => v.trim().toLowerCase() === inputAnswerB.trim().toLowerCase()
      );

    if (!isCorrect && practiceData.fillInBlank.errorDiagnosis) {
      const diag = practiceData.fillInBlank.errorDiagnosis;
      recordNewGrammarError(
        item.id,
        item.grammar,
        diag.errorType,
        inputAnswerB || '(để trống)',
        practiceData.fillInBlank.expectedAnswer,
        diag.analysis,
        diag.ruleToRemember,
        diag.similarExample
      );
    }
  };

  const isCorrectB =
    inputAnswerB.trim().toLowerCase() === practiceData.fillInBlank.expectedAnswer.trim().toLowerCase() ||
    (practiceData.fillInBlank.acceptableVariants || []).some(
      (v) => v.trim().toLowerCase() === inputAnswerB.trim().toLowerCase()
    );

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-fadeIn">
      {/* Exercise Sub-Tabs A -> E */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
            TẦNG 5 & 6 • ACTIVE LEARNING & ERROR DIAGNOSTICS
          </span>
          <h3 className="text-lg font-extrabold text-white">
            5 Dạng Bài Học Chủ Động Theo Thứ Tự Sư Phạm Chuẩn
          </h3>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800 overflow-x-auto">
          {[
            { id: 'A', label: 'A. Nhận diện' },
            { id: 'B', label: 'B. Điền chỗ trống' },
            { id: 'C', label: 'C. Sửa câu sai' },
            { id: 'D', label: 'D. Dịch Việt - Nhật' },
            { id: 'E', label: 'E. Phản xạ tình huống' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                activeSubTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* DẠNG A: NHẬN DIỆN */}
      {activeSubTab === 'A' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block mb-1">
              DẠNG A: NHẬN DIỆN CÂU SỬ DỤNG ĐÚNG MẪU
            </span>
            <p className="text-sm font-semibold text-white">{practiceData.recognition.question}</p>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {practiceData.recognition.options.map((opt) => {
              const isSelected = selectedOptionA === opt.id;
              let style = 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300';

              if (isAnsweredA) {
                if (opt.isCorrect) {
                  style = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                } else if (isSelected && !opt.isCorrect) {
                  style = 'bg-rose-950/80 border-rose-500 text-rose-200';
                }
              } else if (isSelected) {
                style = 'bg-emerald-600 text-white font-bold';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    if (isAnsweredA) return;
                    setSelectedOptionA(opt.id);
                  }}
                  className={`p-4 rounded-2xl border text-left transition flex items-start gap-3 cursor-pointer ${style}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {opt.id}
                  </span>
                  <div className="flex-1">
                    <div className="font-japanese text-sm font-semibold">{opt.text}</div>
                    {isAnsweredA && (
                      <p className="text-xs mt-2 pt-2 border-t border-slate-800/80 opacity-90">
                        {opt.explanation}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {!isAnsweredA ? (
            <button
              onClick={() => {
                if (!selectedOptionA) return;
                setIsAnsweredA(true);
                const chosen = practiceData.recognition.options.find((o) => o.id === selectedOptionA);
                if (chosen && !chosen.isCorrect) {
                  recordNewGrammarError(
                    item.id,
                    item.grammar,
                    'nuance',
                    chosen.text,
                    practiceData.recognition.options.find((o) => o.isCorrect)?.text || '',
                    chosen.explanation,
                    'Chú ý ngữ cảnh và đối tượng giao tiếp khi dùng mẫu ngữ pháp.',
                    item.threeTierExamples?.basic.japanese || item.grammar
                  );
                }
              }}
              disabled={!selectedOptionA}
              className="px-6 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-emerald-600/30 cursor-pointer"
            >
              Kiểm tra câu trả lời
            </button>
          ) : (
            <button
              onClick={() => {
                setIsAnsweredA(false);
                setSelectedOptionA(null);
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 cursor-pointer"
            >
              Làm lại câu này
            </button>
          )}
        </div>
      )}

      {/* DẠNG B: ĐIỀN CHỖ TRỐNG & CHẨN ĐOÁN THÔNG MINH */}
      {activeSubTab === 'B' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide block">
              DẠNG B: ĐIỀN CHỖ TRỐNG (TỰ CHIA THỂ)
            </span>
            <p className="text-sm font-semibold text-white leading-relaxed">{practiceData.fillInBlank.prompt}</p>
            <div className="font-japanese text-lg font-bold text-amber-300 p-3 bg-slate-900 rounded-xl">
              {practiceData.fillInBlank.rawSentence}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={inputAnswerB}
              onChange={(e) => setInputAnswerB(e.target.value)}
              placeholder="Nhập dạng chia bằng Hiragana hoặc Kanji..."
              className="flex-1 px-4 py-3 rounded-2xl bg-slate-950 border border-slate-700 text-white font-japanese text-sm focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={handleCheckB}
              disabled={!inputAnswerB.trim()}
              className="px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-bold text-xs cursor-pointer shadow-md"
            >
              Kiểm tra
            </button>
            <button
              onClick={() => setShowHintB(!showHintB)}
              className="px-4 py-3 rounded-2xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold cursor-pointer"
            >
              {showHintB ? 'Ẩn gợi ý' : 'Gợi ý'}
            </button>
          </div>

          {showHintB && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200">
              💡 <strong>Gợi ý:</strong> {practiceData.fillInBlank.hint}
            </div>
          )}

          {/* Phân tích lỗi thông minh khi nộp bài */}
          {isSubmittedB && (
            <div className="animate-fadeIn space-y-3 pt-2">
              {isCorrectB ? (
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    🎉 <strong>Xuất sắc!</strong> Bạn đã chia thể hoàn toàn chính xác:「{practiceData.fillInBlank.expectedAnswer}」
                  </span>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-rose-950/40 border border-rose-600/50 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span>PHÂN TÍCH LỖI THÔNG MINH (INTELLIGENT ERROR DIAGNOSIS)</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-rose-400 font-bold block mb-1">❌ Câu bạn viết:</span>
                      <span className="font-japanese font-mono">{inputAnswerB || '(chưa nhập)'}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-emerald-400 font-bold block mb-1">✅ Đáp án chuẩn:</span>
                      <span className="font-japanese font-bold text-white">{practiceData.fillInBlank.expectedAnswer}</span>
                    </div>
                  </div>

                  {practiceData.fillInBlank.errorDiagnosis && (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <strong className="text-amber-400 block mb-0.5">🔎 Bạn đang sai ở đâu?</strong>
                        {practiceData.fillInBlank.errorDiagnosis.analysis}
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <strong className="text-cyan-400 block mb-0.5">💡 Quy tắc cần khắc cốt ghi tâm:</strong>
                        {practiceData.fillInBlank.errorDiagnosis.ruleToRemember}
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <strong className="text-purple-400 block mb-0.5">🧠 Ví dụ tương tự để nhớ sâu:</strong>
                        <span className="font-japanese text-slate-200">{practiceData.fillInBlank.errorDiagnosis.similarExample}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* DẠNG C: SỬA LỖI */}
      {activeSubTab === 'C' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wide block">
              DẠNG C: BẮT LỖI SAI (TÌM & SỬA ĐIỂM BẪY)
            </span>
            <p className="text-xs text-slate-300">
              Câu sau đây có lỗi sai ngữ pháp hoặc sai sắc thái giao tiếp. Hãy suy nghĩ xem lỗi nằm ở đâu trước khi bấm xem chẩn đoán:
            </p>
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 text-rose-300 font-japanese font-bold text-base">
              {practiceData.fixError.wrongSentence}
            </div>
          </div>

          {!revealedSolutionC ? (
            <button
              onClick={() => {
                setRevealedSolutionC(true);
                recordNewGrammarError(
                  item.id,
                  item.grammar,
                  practiceData.fixError.errorType,
                  practiceData.fixError.wrongSentence,
                  practiceData.fixError.correctSentence,
                  practiceData.fixError.diagnosticAnalysis,
                  practiceData.fixError.ruleToRemember,
                  practiceData.fixError.similarExample
                );
              }}
              className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-rose-600 to-orange-600 text-white font-bold text-xs shadow-lg shadow-rose-600/30 cursor-pointer"
            >
              Lật mở lời giải & Phân tích nguyên nhân sai
            </button>
          ) : (
            <div className="space-y-3 p-5 rounded-2xl bg-slate-950 border border-slate-800 animate-fadeIn text-xs text-slate-300">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>CÂU ĐÃ SỬA CHUẨN XÁC:</span>
              </div>
              <div className="p-3 bg-emerald-950/40 border border-emerald-700/60 rounded-xl text-emerald-200 font-japanese font-bold text-sm">
                {practiceData.fixError.correctSentence}
              </div>

              <div className="space-y-2 pt-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <strong className="text-amber-400 block mb-0.5">🔎 Bản chất lỗi sai:</strong>
                  {practiceData.fixError.diagnosticAnalysis}
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <strong className="text-cyan-400 block mb-0.5">💡 Quy tắc cần nhớ:</strong>
                  {practiceData.fixError.ruleToRemember}
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <strong className="text-purple-400 block mb-0.5">🧠 Ví dụ đối chiếu:</strong>
                  <span className="font-japanese text-slate-200">{practiceData.fixError.similarExample}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* DẠNG D: DỊCH VIỆT - NHẬT */}
      {activeSubTab === 'D' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide block">
              DẠNG D: DỊCH TƯ DUY TỪ VIỆT SANG NHẬT
            </span>
            <p className="text-base font-bold text-white leading-relaxed">
              "{practiceData.translation.vietnamese}"
            </p>
            <div className="text-xs text-slate-400 flex flex-wrap gap-2 pt-1">
              <span>Từ khóa gợi ý:</span>
              {practiceData.translation.keywords.map((kw, i) => (
                <span key={i} className="px-2 py-0.5 bg-slate-900 rounded-md text-slate-300 font-japanese">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <textarea
              rows={3}
              value={inputAnswerD}
              onChange={(e) => setInputAnswerD(e.target.value)}
              placeholder="Gõ bản dịch tiếng Nhật của bạn vào đây..."
              className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 text-white font-japanese text-sm focus:outline-none focus:border-indigo-500"
            />
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSubmittedD(true)}
                className="px-6 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer shadow-md"
              >
                Đối chiếu câu dịch chuẩn bản xứ
              </button>
            </div>
          </div>

          {isSubmittedD && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 animate-fadeIn text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-400">Câu dịch chuẩn của người Nhật:</span>
                <button
                  onClick={() => JapaneseSpeechEngine.speak(practiceData.translation.expectedJapanese)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="font-japanese font-bold text-white text-base">
                {practiceData.translation.expectedJapanese}
              </div>
              <p className="text-slate-400 pt-1 border-t border-slate-800">
                💡 <strong>Bí quyết dịch:</strong> {practiceData.translation.tip}
              </p>
            </div>
          )}
        </div>
      )}

      {/* DẠNG E: PHẢN XẠ TÌNH HUỐNG */}
      {activeSubTab === 'E' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wide block">
              DẠNG E: PHẢN XẠ GIAO TIẾP TÌNH HUỐNG THỰC TẾ
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {practiceData.reflex.scenario}
            </p>
            <div className="p-3 rounded-xl bg-teal-950/20 border border-teal-800/40 text-xs text-teal-300">
              🎯 <strong>Nhiệm vụ:</strong> {practiceData.reflex.taskPrompt}
            </div>
          </div>

          <div className="space-y-3">
            <textarea
              rows={3}
              value={inputAnswerE}
              onChange={(e) => setInputAnswerE(e.target.value)}
              placeholder="Hãy nhập câu phản xạ ngay lập tức của bạn..."
              className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 text-white font-japanese text-sm focus:outline-none focus:border-teal-500"
            />
            <button
              onClick={() => setRevealedReflexE(true)}
              className="px-6 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs cursor-pointer shadow-md"
            >
              Xem câu phản xạ mẫu & Tâm thức bản xứ
            </button>
          </div>

          {revealedReflexE && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 animate-fadeIn text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-teal-400">Câu nói phản xạ mẫu:</span>
                <button
                  onClick={() => JapaneseSpeechEngine.speak(practiceData.reflex.sampleSpeech)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="font-japanese font-bold text-white text-base">
                {practiceData.reflex.sampleSpeech}
              </div>
              <p className="text-slate-300 pt-1 border-t border-slate-800 leading-relaxed">
                🧠 <strong>Tư duy phản xạ:</strong> {practiceData.reflex.reflexMindset}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
