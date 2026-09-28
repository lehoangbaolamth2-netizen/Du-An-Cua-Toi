import React, { useState } from 'react';
import { PitchSentenceItem, ListeningLesson, GrammarItem, DokkaiArticle, Flashcard } from '../types';
import { PitchAccentVisualizer } from './PitchAccentVisualizer';
import { JapaneseSpeechEngine } from '../services/speech';
import {
  X,
  Sparkles,
  Loader2,
  Volume2,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  BookPlus,
  RefreshCw,
  Send
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialText?: string;
  initialMode?: 'pitch' | 'listening' | 'grammar' | 'dokkai';
  onAddCustomSentence?: (item: PitchSentenceItem) => void;
  onAddCustomListening?: (lesson: ListeningLesson) => void;
}

export const AIAnalyzerModal: React.FC<Props> = ({
  isOpen,
  onClose,
  initialText = '',
  initialMode = 'pitch',
  onAddCustomSentence,
  onAddCustomListening,
}) => {
  const [mode, setMode] = useState<'pitch' | 'listening' | 'grammar' | 'dokkai'>(initialMode);
  const [inputText, setInputText] = useState(initialText);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    let endpoint = '/api/ai/pitch-reflex';
    let payloadKey = 'sentence';

    if (mode === 'listening') {
      endpoint = '/api/ai/listening-analysis';
      payloadKey = 'script';
    } else if (mode === 'grammar') {
      endpoint = '/api/ai/grammar-deep-dive';
      payloadKey = 'grammarPoint';
    } else if (mode === 'dokkai') {
      endpoint = '/api/ai/dokkai-analysis';
      payloadKey = 'passage';
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [payloadKey]: inputText }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.data);
      }
    } catch (err) {
      console.error(err);
      setError('Có lỗi xảy ra khi phân tích. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const sampleInputs = {
    pitch: [
      'お疲れ様でした (Tan ca / Hoàn thành công việc)',
      'どういたしまして (Không có chi)',
      '明日、暇だったら映画でも見に行かない？ (Rủ đi xem phim khẩu ngữ)'
    ],
    listening: [
      '昨日の会議、部長は何ておっしゃってた？',
      '田中さん、その書類ちょっと見せてもらってもいいですか？',
      '今度の週末、バーベキューする予定なんだけど来ない？'
    ],
    grammar: [
      '~てください (Minna no Nihongo Bài 14)',
      '~てもいいです / ~てはいけません (Minna no Nihongo Bài 15)',
      '~ています vs ~てあります (Minna no Nihongo Bài 29)',
      '~うちに (~uchi ni - Mimikaraoboeru N3)',
      '~わけがない (~wake ga nai - Mimikaraoboeru N3)',
      '~てたまらない (~te tamaranai - Mimikaraoboeru N2)',
      '~にすぎない (~ni suginai - Mimikaraoboeru N2)',
      '~ざるを得ない (~zaru o enai - Mimikaraoboeru N2)',
      '~を皮切りに (~o kawakiri ni - Mimikaraoboeru N1)'
    ],
    dokkai: [
      '失敗を恐れずに挑戦し続けることこそが、真の成長につながる道である。しかし、多くの人は他人の目を気にして立ち止まってしまう。つまり、勇気を持つことが何よりも求められているのだ。'
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 animate-fadeIn">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                AI Engine: Phân Tích Tiếng Nhật Chuyên Sâu
              </h3>
              <p className="text-xs text-slate-400">
                Nhập bất kỳ câu, đoạn nghe, ngữ pháp hoặc bài đọc nào để nhận phân tích 4 bước chuẩn
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(
            [
              { id: 'pitch', label: 'Pitch & Phản Xạ' },
              { id: 'listening', label: 'Nghe & Nuốt Âm' },
              { id: 'grammar', label: 'Bản Chất Ngữ Pháp' },
              { id: 'dokkai', label: 'Đọc Hiểu Dokkai' },
            ] as const
          ).map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setMode(m.id);
                setResult(null);
                setError(null);
              }}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                mode === m.id
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Quick Sample Chips */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Gợi ý mẫu nhanh:
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleInputs[mode].map((s, idx) => (
              <button
                key={idx}
                onClick={() => setInputText(s.split(' (')[0])}
                className="text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-xl border border-slate-700/80 transition cursor-pointer truncate max-w-full"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Nội dung tiếng Nhật cần phân tích:
          </label>
          <textarea
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              mode === 'pitch'
                ? 'Ví dụ: 明日のプレゼン、どうぞよろしくお願いいたします。'
                : mode === 'listening'
                ? 'Ví dụ: 昨日の会議、部長は何ておっしゃってた？'
                : mode === 'grammar'
                ? 'Ví dụ: ~わけがない hoặc ~てたまらない'
                : 'Ví dụ: Đoạn văn đọc hiểu N3-N1...'
            }
            className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-700 text-white font-japanese text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500">Mô hình: Gemini 3.8 Flash • Phản xạ & Pitch Engine</span>

            <button
              onClick={handleAnalyze}
              disabled={loading || !inputText.trim()}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 cursor-pointer active:scale-95 transition"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang bóc tách & phân tích...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Bắt đầu phân tích</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs">
            {error}
          </div>
        )}

        {/* Result Showcase */}
        {result && (
          <div className="border-t border-slate-800 pt-6 space-y-6 animate-fadeIn">
            {/* MODE 1: PITCH & REFLEX */}
            {mode === 'pitch' && (
              <div className="space-y-5">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono mb-1">
                    Romaji: {result.romaji} • Hiragana: {result.hiragana}
                  </div>
                  <h4 className="text-2xl font-bold text-white font-japanese">
                    {result.original}
                  </h4>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">
                    {result.vietnamese}
                  </p>
                </div>

                {result.pitchAccent && (
                  <PitchAccentVisualizer
                    moras={result.pitchAccent.moras}
                    patternName={result.pitchAccent.patternName}
                    description={result.pitchAccent.description}
                    audioTips={result.pitchAccent.audioTips}
                    onPlayFull={() => JapaneseSpeechEngine.speak(result.original)}
                  />
                )}

                {/* 3 Speeds */}
                {result.speechSpeeds && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => JapaneseSpeechEngine.speak(result.original, 0.8)}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-left transition cursor-pointer"
                    >
                      <span className="text-xs font-bold text-amber-400 block mb-1">
                        0.8x Chậm:
                      </span>
                      <p className="text-xs text-slate-300">{result.speechSpeeds.slow08x?.focus}</p>
                    </button>
                    <button
                      onClick={() => JapaneseSpeechEngine.speak(result.original, 1.0)}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 text-left transition cursor-pointer"
                    >
                      <span className="text-xs font-bold text-indigo-400 block mb-1">
                        1.0x Tự nhiên:
                      </span>
                      <p className="text-xs text-slate-300">{result.speechSpeeds.natural10x?.focus}</p>
                    </button>
                    <button
                      onClick={() => JapaneseSpeechEngine.speak(result.original, 1.2)}
                      className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 text-left transition cursor-pointer"
                    >
                      <span className="text-xs font-bold text-rose-400 block mb-1">
                        1.2x Bản xứ nhanh:
                      </span>
                      <p className="text-xs text-slate-300">{result.speechSpeeds.native12x?.focus}</p>
                    </button>
                  </div>
                )}

                {/* Communication Variants */}
                {result.communicationVariants && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {result.communicationVariants.map((v: any, idx: number) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                        <span className="text-[10px] font-bold text-purple-400 block mb-1">
                          {v.style}
                        </span>
                        <p className="text-sm font-bold text-white font-japanese mb-1">
                          {v.japanese}
                        </p>
                        <p className="text-xs text-slate-400 italic">💡 {v.nuance}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* MODE 2: LISTENING */}
            {mode === 'listening' && (
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                  <p className="text-base font-bold text-white font-japanese">{result.script}</p>
                  <button
                    onClick={() => JapaneseSpeechEngine.speak(result.script)}
                    className="p-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {result.soundModifications && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-400 uppercase">
                      Biến đổi âm thanh & Nuốt âm:
                    </span>
                    {result.soundModifications.map((sm: any, idx: number) => (
                      <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                        <span className="font-bold text-white mr-2">[{sm.type}]</span>
                        <span className="text-slate-300">{sm.phoneticRealization}</span> — {sm.explanation}
                      </div>
                    ))}
                  </div>
                )}

                {result.threeStepTraining?.step3Dictation && (
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                    <span className="text-xs font-bold text-cyan-400 uppercase block mb-1">
                      Kịch bản Dictation Test tự động:
                    </span>
                    <p className="text-sm font-japanese text-white font-bold leading-relaxed mb-3">
                      {result.threeStepTraining.step3Dictation.maskedScript}
                    </p>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      {result.threeStepTraining.step3Dictation.blanks?.map((b: any) => (
                        <div key={b.id} className="p-2 bg-slate-900 rounded-lg">
                          [{b.id}] <strong className="text-emerald-400">{b.answer}</strong> — {b.explanation}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* MODE 3: GRAMMAR */}
            {mode === 'grammar' && (
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <span className="text-xs font-bold text-emerald-400 uppercase block mb-1">
                    Cốt lõi tư duy người Nhật (Mindset):
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {result.essenceMeaning?.coreMindset}
                  </p>
                </div>

                {result.comparison && (
                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-200">
                    <strong className="text-amber-300 block mb-1">
                      ⚡ So sánh với {result.comparison.confusingWith}:
                    </strong>
                    {result.comparison.keyDifference}
                  </div>
                )}

                {result.creativeDrills && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">
                      3 Ngữ cảnh thực hành câu:
                    </span>
                    {result.creativeDrills.map((d: any, idx: number) => (
                      <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                        <strong className="text-indigo-300 block mb-0.5">{d.context}</strong>
                        <p className="text-slate-300">{d.prompt}</p>
                        <p className="text-emerald-400 font-japanese font-bold mt-1">
                          Câu mẫu: {d.modelSentence}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* MODE 4: DOKKAI */}
            {mode === 'dokkai' && (
              <div className="space-y-4">
                <div className="p-4 bg-blue-950/40 border border-blue-800/50 rounded-2xl">
                  <span className="text-xs font-bold text-blue-300 block mb-1 uppercase">
                    Main Idea của tác giả:
                  </span>
                  <p className="text-sm text-slate-200">{result.mainIdea}</p>
                </div>

                {result.keyConjunctions && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {result.keyConjunctions.map((c: any, idx: number) => (
                      <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                        <span className="font-bold text-cyan-300 font-japanese mr-2">{c.word}</span>
                        <span className="text-slate-300">{c.signalRole}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
