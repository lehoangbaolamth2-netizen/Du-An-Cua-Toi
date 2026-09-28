import React, { useState } from 'react';
import { ListeningLesson } from '../types';
import { JapaneseSpeechEngine } from '../services/speech';
import {
  Headphones,
  Volume2,
  Sparkles,
  AlertTriangle,
  Key,
  Layers,
  FileEdit,
  CheckCircle,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight
} from 'lucide-react';

interface Props {
  lessons: ListeningLesson[];
  currentLevel: string;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
}

export const ListeningDictationModule: React.FC<Props> = ({
  lessons,
  currentLevel,
  onOpenAiAnalyzer,
}) => {
  const filtered = lessons.filter(
    (l) => currentLevel === 'ALL' || l.level === currentLevel
  );
  const activeLessons = filtered.length > 0 ? filtered : lessons;

  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const current = activeLessons[selectedLessonIndex] || activeLessons[0];

  // Active sub-step in training: 1 (Keywords), 2 (Chunking), 3 (Dictation)
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Dictation user input answers { [blankId]: string }
  const [dictationInputs, setDictationInputs] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [dictationScore, setDictationScore] = useState<number | null>(null);

  const handlePlayScript = (speed: number = playbackSpeed) => {
    setIsPlaying(true);
    JapaneseSpeechEngine.speak(current.script, speed, () => {
      setIsPlaying(false);
    });
  };

  const handlePlayText = (text: string) => {
    JapaneseSpeechEngine.speak(text, playbackSpeed);
  };

  const handleDictationInputChange = (id: number, val: string) => {
    setDictationInputs((prev) => ({ ...prev, [id]: val }));
  };

  const handleSubmitDictation = () => {
    if (!current?.threeStepTraining?.step3Dictation?.blanks) return;

    const blanks = current.threeStepTraining.step3Dictation.blanks;
    let correctCount = 0;

    blanks.forEach((b) => {
      const userVal = (dictationInputs[b.id] || '').trim().toLowerCase();
      const isMatch =
        userVal === b.answer.trim().toLowerCase() ||
        (b.acceptableVariants &&
          b.acceptableVariants.some((v) => v.trim().toLowerCase() === userVal));
      if (isMatch) correctCount++;
    });

    const scorePercent = Math.round((correctCount / blanks.length) * 100);
    setDictationScore(scorePercent);
    setIsSubmitted(true);
  };

  const handleResetDictation = () => {
    setDictationInputs({});
    setIsSubmitted(false);
    setDictationScore(null);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-900/60 via-blue-900/40 to-slate-900/80 border border-cyan-700/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Module 2 • Luyện Nghe Chuyên Sâu
              </span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                {current?.level}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              Xóa Triệt Để Hiện Tượng "Nghe Không Kịp"
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Giải mã hiện tượng nối âm, nuốt âm, âm ngắt và rút gọn của người Nhật. Luyện nghe theo quy trình 3 bước chuẩn JLPT: Bắt từ khóa ➔ Tách cụm ý nghĩa ➔ Chép chính tả (Dictation) có chấm điểm.
            </p>
          </div>

          <button
            onClick={() => onOpenAiAnalyzer('', 'listening')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-600/30 active:scale-95 transition cursor-pointer shrink-0 self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Phân tích đoạn nghe với AI</span>
          </button>
        </div>
      </div>

      {/* Lesson Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
        {activeLessons.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedLessonIndex(idx);
              handleResetDictation();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border flex items-center gap-2 ${
              selectedLessonIndex === idx
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-600/30'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span className="truncate max-w-[220px]">{item.title}</span>
          </button>
        ))}
      </div>

      {current && (
        <div className="space-y-6">
          {/* Audio Player & Situation Control Bar */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Bối cảnh hội thoại:
                </span>
                <p className="text-sm text-slate-200 font-medium mt-0.5">{current.situation}</p>
              </div>

              {/* Multi-speed Audio Player */}
              <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800 shrink-0">
                <button
                  onClick={() => handlePlayScript(playbackSpeed)}
                  disabled={isPlaying}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white text-xs font-bold transition shadow-md shadow-cyan-600/20 active:scale-95 cursor-pointer"
                >
                  <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-amber-300' : ''}`} />
                  <span>{isPlaying ? 'Đang phát...' : 'Phát âm thanh'}</span>
                </button>

                <div className="flex items-center bg-slate-900 rounded-xl p-1 border border-slate-800">
                  {[0.8, 1.0, 1.2].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => {
                        setPlaybackSpeed(spd);
                        handlePlayScript(spd);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                        playbackSpeed === spd
                          ? 'bg-cyan-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sound Modifications (Nối âm & nuốt âm) */}
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Nhận Diện Nối Âm, Nuốt Âm & Biến Đổi Âm Thanh
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {current.soundModifications.map((sm, i) => (
                  <div
                    key={i}
                    className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded-md border border-amber-800/40">
                          {sm.type}
                        </span>
                        <span className="text-xs font-mono font-semibold text-slate-400">
                          Vị trí: {sm.location}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white font-japanese my-2 p-2 bg-slate-900 rounded-xl border border-slate-800/80">
                        {sm.phoneticRealization}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2 border-t border-slate-800/80 pt-2">
                      {sm.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Keywords Highlight */}
            <div className="mt-5 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <Key className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Từ Vựng Trọng Tâm Quyết Định Nội Dung
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.focusKeywords.map((kw, i) => (
                  <div
                    key={i}
                    className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-white font-japanese">{kw.word}</span>
                      <button
                        onClick={() => handlePlayText(kw.word)}
                        className="text-slate-400 hover:text-white p-1 rounded-md cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-xs text-cyan-300 font-japanese mt-0.5">{kw.hiragana}</span>
                    <span className="text-xs font-medium text-slate-300 mt-1">{kw.meaning}</span>
                    <span className="text-[10px] text-slate-400 mt-2 italic border-t border-slate-800/80 pt-1">
                      🎯 {kw.importance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3-Step Training Workflow */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Quy trình huấn luyện tai nghe 3 bước
                </span>
                <h3 className="text-xl font-extrabold text-white mt-0.5">
                  Lần 1: Bắt Từ Khóa ➔ Lần 2: Tách Cụm Ý Nghĩa ➔ Lần 3: Dictation
                </h3>
              </div>

              <div className="flex items-center bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setActiveStep(1)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    activeStep === 1
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>Bước 1: Từ Khóa</span>
                </button>
                <button
                  onClick={() => setActiveStep(2)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    activeStep === 2
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Bước 2: Tách Cụm</span>
                </button>
                <button
                  onClick={() => setActiveStep(3)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    activeStep === 3
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileEdit className="w-3.5 h-3.5" />
                  <span>Bước 3: Dictation</span>
                </button>
              </div>
            </div>

            {/* STEP 1: KEYWORDS */}
            {activeStep === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
                  <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wide mb-1">
                    {current.threeStepTraining.step1Keywords.task}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {current.threeStepTraining.step1Keywords.instructions}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-5">
                    {current.threeStepTraining.step1Keywords.targetKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl text-sm font-bold bg-cyan-950/80 text-cyan-200 border border-cyan-800/80 font-japanese flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handlePlayScript(1.0)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-600/20 cursor-pointer active:scale-95"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Nghe thử lần 1 để bắt từ khóa</span>
                    </button>
                    <button
                      onClick={() => setActiveStep(2)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 cursor-pointer"
                    >
                      <span>Chuyển sang Bước 2</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: CHUNKING */}
            {activeStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
                  <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wide mb-1">
                    {current.threeStepTraining.step2Chunking.task}
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Người bản xứ xử lý thông tin theo từng cụm ý nghĩa (Chunk). Bấm vào từng cụm để nghe ngữ điệu và tiếp thu ngữ nghĩa trực tiếp mà không cần dịch từng từ riêng lẻ:
                  </p>

                  <div className="space-y-3">
                    {current.threeStepTraining.step2Chunking.chunks.map((chk, idx) => (
                      <div
                        key={idx}
                        onClick={() => handlePlayText(chk.chunkJp)}
                        className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-950 text-cyan-300 text-xs font-mono font-bold border border-cyan-800">
                            {idx + 1}
                          </span>
                          <div>
                            <p className="text-base font-bold text-white font-japanese group-hover:text-cyan-200 transition">
                              {chk.chunkJp}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">{chk.chunkVi}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                          <span className="text-[11px] text-amber-300/80 bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-800/40">
                            {chk.intonation}
                          </span>
                          <span className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-cyan-600 text-slate-300 group-hover:text-white transition">
                            <Volume2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setActiveStep(1)}
                      className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
                    >
                      ← Quay lại Bước 1
                    </button>
                    <button
                      onClick={() => setActiveStep(3)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-600/20 cursor-pointer"
                    >
                      <span>Sẵn sàng làm Dictation Test</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: DICTATION TEST */}
            {activeStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wide">
                        {current.threeStepTraining.step3Dictation.task}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Nghe đoạn hội thoại và gõ từ còn thiếu vào các ô trống bên dưới (có thể gõ Kanji hoặc Hiragana).
                      </p>
                    </div>

                    <button
                      onClick={() => handlePlayScript(0.8)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold border border-cyan-800/50 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe tốc độ chậm 0.8x</span>
                    </button>
                  </div>

                  {/* Masked Script Showcase */}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-japanese text-lg font-bold text-white mb-6 leading-loose">
                    {current.threeStepTraining.step3Dictation.maskedScript}
                  </div>

                  {/* Inputs for each blank */}
                  <div className="space-y-4 mb-6">
                    {current.threeStepTraining.step3Dictation.blanks.map((b) => {
                      const userVal = dictationInputs[b.id] || '';
                      const isCorrect =
                        userVal.trim().toLowerCase() === b.answer.trim().toLowerCase() ||
                        (b.acceptableVariants &&
                          b.acceptableVariants.some(
                            (v) => v.trim().toLowerCase() === userVal.trim().toLowerCase()
                          ));

                      return (
                        <div
                          key={b.id}
                          className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 transition"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold">
                                [{b.id}]
                              </span>
                              <span className="text-xs text-slate-400">Gợi ý: {b.hint}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                disabled={isSubmitted}
                                value={userVal}
                                onChange={(e) => handleDictationInputChange(b.id, e.target.value)}
                                placeholder="Gõ từ nghe được..."
                                className={`px-4 py-2 rounded-xl text-sm font-japanese font-bold text-white bg-slate-950 border focus:outline-none focus:ring-2 transition ${
                                  isSubmitted
                                    ? isCorrect
                                      ? 'border-emerald-500/60 bg-emerald-950/20 ring-emerald-500'
                                      : 'border-rose-500/60 bg-rose-950/20 ring-rose-500'
                                    : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/30'
                                }`}
                              />

                              {isSubmitted && (
                                <span className="shrink-0">
                                  {isCorrect ? (
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                  ) : (
                                    <XCircle className="w-5 h-5 text-rose-400" />
                                  )}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Post-submission detailed error explanation */}
                          {isSubmitted && (
                            <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-1.5 animate-fadeIn">
                              <div className="flex items-center gap-2 text-xs">
                                <span className="font-semibold text-slate-400">Đáp án chuẩn:</span>
                                <span className="font-japanese font-bold text-emerald-400 text-sm">
                                  {b.answer}
                                </span>
                                {b.acceptableVariants?.length > 0 && (
                                  <span className="text-slate-500 font-japanese">
                                    (Chấp nhận: {b.acceptableVariants.join(', ')})
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                                💡 <span className="font-semibold text-cyan-300">Phân tích lỗi sai tai nghe:</span>{' '}
                                {b.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Submission & Score Report */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                    {!isSubmitted ? (
                      <button
                        onClick={handleSubmitDictation}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 cursor-pointer active:scale-95"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Chấm điểm bài Dictation</span>
                      </button>
                    ) : (
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-cyan-950/80 border border-cyan-700/60">
                          <Award className="w-5 h-5 text-amber-400" />
                          <div>
                            <span className="text-xs text-slate-400 block leading-tight">Điểm chính tả</span>
                            <span className="text-lg font-extrabold text-white font-mono">
                              {dictationScore}% / 100%
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={handleResetDictation}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Làm lại bài nghe</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
