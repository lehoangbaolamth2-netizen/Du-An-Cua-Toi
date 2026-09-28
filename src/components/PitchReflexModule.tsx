import React, { useState } from 'react';
import { PitchSentenceItem } from '../types';
import { PitchAccentVisualizer } from './PitchAccentVisualizer';
import { JapaneseSpeechEngine, AudioRecorder } from '../services/speech';
import {
  Volume2,
  Mic,
  Square,
  Play,
  RotateCcw,
  Sparkles,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Zap,
  ArrowRight
} from 'lucide-react';

interface Props {
  sentences: PitchSentenceItem[];
  currentLevel: string;
  onOpenAiAnalyzer: (initialText?: string, mode?: 'pitch' | 'listening' | 'grammar' | 'dokkai') => void;
}

export const PitchReflexModule: React.FC<Props> = ({
  sentences,
  currentLevel,
  onOpenAiAnalyzer,
}) => {
  const filtered = sentences.filter(
    (s) => currentLevel === 'ALL' || s.level === currentLevel
  );
  const activeItems = filtered.length > 0 ? filtered : sentences;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = activeItems[selectedIndex] || activeItems[0];

  // Speech & Recording states
  const [playingSpeed, setPlayingSpeed] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [recorder] = useState(() => new AudioRecorder());

  // Reflex exercise answers visibility
  const [revealedReflex, setRevealedReflex] = useState<Record<number, boolean>>({});

  const handlePlaySpeed = (speed: number) => {
    setPlayingSpeed(speed);
    JapaneseSpeechEngine.speak(current.original, speed, () => {
      setPlayingSpeed(null);
    });
  };

  const toggleRecording = async () => {
    if (isRecording) {
      const url = await recorder.stop();
      setIsRecording(false);
      setRecordedUrl(url);
    } else {
      setRecordedUrl(null);
      const started = await recorder.start();
      if (started) {
        setIsRecording(true);
      }
    }
  };

  const playRecordedAudio = () => {
    if (recordedUrl) {
      const audio = new Audio(recordedUrl);
      audio.play();
    }
  };

  const toggleReflexAnswer = (idx: number) => {
    setRevealedReflex((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner / Concept Intro */}
      <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900/80 border border-indigo-700/40 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Module 1 • Chuẩn Hóa Phát Âm & Phản Xạ
              </span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                {current?.level}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              Phân Tích Pitch Accent & Phản Xạ 4 Bước Chuẩn
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Xóa bỏ lối phát âm nhấn dấu tiếng Việt. Làm chủ cao độ (High/Low/Drop), luyện 3 dải tốc độ, chuyển đổi linh hoạt lịch sự ➔ khẩu ngữ và phản xạ đáp trả trong 1 giây.
            </p>
          </div>

          <button
            onClick={() => onOpenAiAnalyzer('', 'pitch')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 active:scale-95 transition cursor-pointer shrink-0 self-start md:self-auto"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Phân tích câu bất kỳ với AI</span>
          </button>
        </div>
      </div>

      {/* Sentence Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
        {activeItems.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedIndex(idx);
              setRevealedReflex({});
              setRecordedUrl(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border flex items-center gap-2 ${
              selectedIndex === idx
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="font-japanese font-medium max-w-[180px] truncate">{item.original}</span>
          </button>
        ))}
      </div>

      {current && (
        <div className="space-y-6">
          {/* Main Card: Sentence Showcase */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 mb-3">
              <span className="font-mono text-indigo-400">Romaji: {current.romaji}</span>
              <span className="font-japanese text-slate-400">Hiragana: {current.hiragana}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-japanese tracking-wide mb-3 leading-snug">
              {current.original}
            </h1>

            <p className="text-base sm:text-lg text-emerald-400 font-medium mb-6">
              {current.vietnamese}
            </p>

            {/* Step 1: Pitch Accent Visualizer */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold">
                  1
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Bước 1: Phân tích Trọng Âm Cao Độ (Pitch Accent)
                </h3>
              </div>
              <PitchAccentVisualizer
                moras={current.pitchAccent.moras}
                patternName={current.pitchAccent.patternName}
                description={current.pitchAccent.description}
                audioTips={current.pitchAccent.audioTips}
                onPlayFull={() => handlePlaySpeed(1.0)}
              />
            </div>

            {/* Step 2: 3 Speeds Training & Mic Shadowing */}
            <div className="mb-6 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                  2
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Bước 2: Luyện Nói 3 Tốc Độ (0.8x ➔ 1.0x ➔ 1.2x) & Shadowing
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {/* 0.8x Slow */}
                <button
                  onClick={() => handlePlaySpeed(0.8)}
                  className={`p-4 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    playingSpeed === 0.8
                      ? 'bg-amber-500/20 border-amber-500/50 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-400">
                      {current.speechSpeeds.slow08x.label}
                    </span>
                    <Volume2 className={`w-4 h-4 ${playingSpeed === 0.8 ? 'animate-pulse text-amber-400' : 'text-slate-400'}`} />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.speechSpeeds.slow08x.focus}
                  </p>
                </button>

                {/* 1.0x Natural */}
                <button
                  onClick={() => handlePlaySpeed(1.0)}
                  className={`p-4 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    playingSpeed === 1.0
                      ? 'bg-indigo-500/20 border-indigo-500/50 shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-indigo-400">
                      {current.speechSpeeds.natural10x.label}
                    </span>
                    <Volume2 className={`w-4 h-4 ${playingSpeed === 1.0 ? 'animate-pulse text-indigo-400' : 'text-slate-400'}`} />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.speechSpeeds.natural10x.focus}
                  </p>
                </button>

                {/* 1.2x Fast Native */}
                <button
                  onClick={() => handlePlaySpeed(1.2)}
                  className={`p-4 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    playingSpeed === 1.2
                      ? 'bg-rose-500/20 border-rose-500/50 shadow-lg shadow-rose-500/20'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-rose-400">
                      {current.speechSpeeds.native12x.label}
                    </span>
                    <Volume2 className={`w-4 h-4 ${playingSpeed === 1.2 ? 'animate-pulse text-rose-400' : 'text-slate-400'}`} />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.speechSpeeds.native12x.focus}
                  </p>
                </button>
              </div>

              {/* Shadowing Voice Recorder */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400">Luyện Shadowing thu âm:</span>
                <button
                  onClick={toggleRecording}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition active:scale-95 cursor-pointer ${
                    isRecording
                      ? 'bg-rose-600 text-white animate-pulse'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>Đang thu... Bấm để dừng</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-3.5 h-3.5 text-rose-400" />
                      <span>Thu âm giọng đọc của bạn</span>
                    </>
                  )}
                </button>

                {recordedUrl && (
                  <button
                    onClick={playRecordedAudio}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition cursor-pointer shadow-md shadow-emerald-600/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Nghe lại bản thu</span>
                  </button>
                )}
              </div>
            </div>

            {/* Step 3: Communication Variants */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 font-mono text-xs font-bold">
                  3
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Bước 3: Biến Thể Giao Tiếp Thực Tế (Lịch sự ➔ Thể ngắn ➔ Khẩu ngữ)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {current.communicationVariants.map((v, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700 transition"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-800/60">
                          {v.style}
                        </span>
                        <button
                          onClick={() => JapaneseSpeechEngine.speak(v.japanese)}
                          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                          title="Phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-base font-bold text-white font-japanese mt-2 leading-relaxed">
                        {v.japanese}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 border-t border-slate-800 pt-2 italic">
                      💡 {v.nuance}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Reflex Drills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-mono text-xs font-bold">
                  4
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Bước 4: Bài Tập Đối Đáp Nhanh 1 Giây (Reflex Drills)
                </h3>
              </div>

              <div className="space-y-4">
                {current.reflexDrills.map((drill, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                          Tình huống phản xạ #{idx + 1}
                        </span>
                      </div>
                      <button
                        onClick={() => JapaneseSpeechEngine.speak(drill.question)}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Nghe câu hỏi</span>
                      </button>
                    </div>

                    <p className="text-base font-bold text-white font-japanese mb-1">
                      {drill.question}
                    </p>
                    <p className="text-xs text-slate-400 mb-4">{drill.questionVi}</p>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => toggleReflexAnswer(idx)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition cursor-pointer border border-slate-700 active:scale-95"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{revealedReflex[idx] ? 'Ẩn đáp án gợi ý' : 'Xem câu phản xạ mẫu & Mẹo'}</span>
                      </button>

                      <button
                        onClick={() => JapaneseSpeechEngine.speak(drill.modelAnswer)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-xs font-medium transition cursor-pointer border border-indigo-500/30"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Nghe câu trả lời mẫu</span>
                      </button>
                    </div>

                    {revealedReflex[idx] && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 animate-fadeIn">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-semibold text-emerald-400">Câu trả lời phản xạ mẫu:</span>
                            <p className="text-sm font-bold text-white font-japanese mt-0.5">
                              {drill.modelAnswer}
                            </p>
                            <p className="text-xs text-slate-400">{drill.modelAnswerVi}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 text-xs bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-amber-200/90 mt-2">
                          <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-300 mr-1.5">Mẹo tư duy 1 giây:</span>
                            {drill.reflexTip}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
