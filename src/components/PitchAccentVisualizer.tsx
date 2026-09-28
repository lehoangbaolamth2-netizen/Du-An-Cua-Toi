import React from 'react';
import { MoraPitch } from '../types';
import { Volume2, ArrowDownRight } from 'lucide-react';
import { JapaneseSpeechEngine } from '../services/speech';

interface Props {
  moras: MoraPitch[];
  patternName: string;
  description: string;
  audioTips?: string;
  onPlayFull?: () => void;
}

export const PitchAccentVisualizer: React.FC<Props> = ({
  moras,
  patternName,
  description,
  audioTips,
  onPlayFull,
}) => {
  if (!moras || moras.length === 0) return null;

  // Calculate SVG curve coordinates
  const width = Math.max(380, moras.length * 52);
  const height = 90;
  const paddingX = 36;
  const stepX = (width - paddingX * 2) / Math.max(1, moras.length - 1);

  const points = moras.map((m, index) => {
    const x = paddingX + index * stepX;
    // High = y 25, Low = y 65, Drop = y 65 with drop mark
    const y = m.pitch === 'H' ? 24 : 64;
    return { x, y, ...m };
  });

  // Construct SVG path string
  const pathD = points.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    return `${acc} L ${pt.x} ${pt.y}`;
  }, '');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Trọng Âm Cao Độ
            </span>
            <span className="text-sm font-bold text-white tracking-wide">{patternName}</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">{description}</p>
        </div>

        {onPlayFull && (
          <button
            onClick={onPlayFull}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition shadow-md shadow-indigo-600/20 active:scale-95 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe mẫu chuẩn</span>
          </button>
        )}
      </div>

      {/* Pitch Curve Diagram */}
      <div className="overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-slate-700">
        <div style={{ minWidth: `${width}px` }} className="relative select-none">
          <svg width={width} height={height} className="overflow-visible">
            {/* Horizontal guideline levels */}
            <line
              x1={paddingX - 15}
              y1={24}
              x2={width - paddingX + 15}
              y2={24}
              stroke="#38bdf8"
              strokeDasharray="3 3"
              strokeOpacity="0.25"
            />
            <text x={10} y={28} fill="#38bdf8" fontSize="10" fontWeight="600" opacity="0.6">
              HIGH
            </text>

            <line
              x1={paddingX - 15}
              y1={64}
              x2={width - paddingX + 15}
              y2={64}
              stroke="#94a3b8"
              strokeDasharray="3 3"
              strokeOpacity="0.25"
            />
            <text x={12} y={68} fill="#94a3b8" fontSize="10" fontWeight="600" opacity="0.6">
              LOW
            </text>

            {/* Connecting curve gradient line */}
            <path
              d={pathD}
              fill="none"
              stroke="url(#pitchGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <defs>
              <linearGradient id="pitchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>

            {/* Mora Nodes */}
            {points.map((pt, idx) => (
              <g key={idx} className="cursor-pointer">
                {/* Node Circle */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={pt.pitch === 'H' ? 7 : 6}
                  className={
                    pt.pitch === 'H'
                      ? 'fill-cyan-400 stroke-slate-900 stroke-2 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]'
                      : pt.pitch === 'D'
                      ? 'fill-rose-400 stroke-slate-900 stroke-2 filter drop-shadow-[0_0_8px_rgba(251,113,133,0.7)]'
                      : 'fill-slate-400 stroke-slate-900 stroke-2'
                  }
                  onClick={() => JapaneseSpeechEngine.speak(pt.mora)}
                />

                {/* Drop accent indicator icon */}
                {pt.pitch === 'D' && (
                  <path
                    d={`M ${pt.x + 8} ${pt.y - 4} L ${pt.x + 14} ${pt.y + 4}`}
                    stroke="#f43f5e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Mora Labels and Phonetic Below */}
          <div className="flex justify-between items-start" style={{ width: `${width}px` }}>
            {points.map((pt, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: `${pt.x}px`,
                  transform: 'translateX(-50%)',
                }}
                className="flex flex-col items-center text-center mt-1 cursor-pointer group"
                onClick={() => JapaneseSpeechEngine.speak(pt.mora)}
              >
                <div
                  className={`text-sm font-bold font-mono px-2 py-0.5 rounded-lg transition-colors ${
                    pt.pitch === 'H'
                      ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 group-hover:bg-cyan-900'
                      : pt.pitch === 'D'
                      ? 'text-rose-300 bg-rose-950/60 border border-rose-800/60 group-hover:bg-rose-900'
                      : 'text-slate-300 bg-slate-800/60 border border-slate-700/60 group-hover:bg-slate-700'
                  }`}
                >
                  {pt.mora}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-0.5">
                  {pt.pitch === 'H' ? 'High' : pt.pitch === 'D' ? 'Drop' : 'Low'}
                </span>
                {pt.note && (
                  <span className="text-[9px] text-amber-300/80 max-w-[70px] leading-tight line-clamp-1 mt-0.5">
                    {pt.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {audioTips && (
        <div className="mt-8 flex items-start gap-2 text-xs bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 text-slate-300">
          <ArrowDownRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-cyan-300 mr-1.5">Mẹo mở khẩu hình & hơi thở:</span>
            {audioTips}
          </div>
        </div>
      )}
    </div>
  );
};
