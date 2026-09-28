import React from 'react';
import { ChoukaiIllustration } from '../types';
import { ArrowRight, FileSpreadsheet, MessageSquare, Sparkles, CheckCircle2, User, Users, Briefcase } from 'lucide-react';

interface ChoukaiIllustrationViewProps {
  illustration: ChoukaiIllustration;
  level: string;
  mondaiTitle?: string;
  questionNumber?: number;
}

export const ChoukaiIllustrationView: React.FC<ChoukaiIllustrationViewProps> = ({
  illustration,
  level,
  mondaiTitle,
  questionNumber,
}) => {
  const { type, title, caption, imageUrl, sceneDescription, speakerWithArrow, visualChoices, memoSheet, dialogueContext } = illustration;

  return (
    <div className="my-4 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950/90 shadow-lg shadow-cyan-950/20">
      {/* Header bar matching JLPT Question Booklet style */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-slate-950 px-4 py-2.5 border-b border-cyan-800/40 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            問題用紙イラスト (Hình Minh Họa Đề Thi)
          </span>
          <span className="text-xs font-semibold text-slate-300 font-japanese">
            {title || mondaiTitle || `${level} Choukai`}
            {questionNumber ? ` ・ 第${questionNumber}問` : ''}
          </span>
        </div>

        {speakerWithArrow && (
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold animate-pulse">
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            <span>{speakerWithArrow}</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        {/* If custom image is provided, display it */}
        {imageUrl && (
          <div className="mb-4 rounded-xl overflow-hidden border border-slate-800 bg-black/60 flex items-center justify-center max-h-72">
            <img
              src={imageUrl}
              alt={title || 'JLPT Choukai Illustration'}
              referrerPolicy="no-referrer"
              className="max-h-72 w-full object-contain mx-auto"
            />
          </div>
        )}

        {/* Scene Description / Prompt Context */}
        {sceneDescription && (
          <div className="mb-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-japanese">
            <strong className="text-cyan-400 block mb-1">【場面説明 - Tình huống diễn ra】:</strong>
            {sceneDescription}
          </div>
        )}

        {/* TYPE 1: Arrow Scene (N5/N4 Mondai 3: 発話表現) */}
        {type === 'arrow_scene' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-indigo-950/30 border border-cyan-800/40 text-center relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3">
                <span className="text-base font-black">➜</span>
                <span>矢印の人は何と言いますか。(Người có mũi tên sẽ nói gì?)</span>
              </div>

              {visualChoices && visualChoices.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 text-left">
                  {visualChoices.map((choice) => (
                    <div
                      key={choice.num}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-cyan-900 text-cyan-200 text-xs font-bold flex items-center justify-center">
                          {choice.num}
                        </span>
                        <span className="font-bold text-sm text-white font-japanese">{choice.title}</span>
                      </div>
                      {choice.description && (
                        <p className="text-xs text-slate-400 pl-7">{choice.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TYPE 2: Choice Diagrams (N5/N4 Mondai 1: 課題理解 - 4 visual choice options) */}
        {type === 'choice_diagrams' && visualChoices && (
          <div className="space-y-3">
            <div className="text-xs text-slate-400 font-japanese flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>問題用紙の選択肢 (4 hình ảnh / phương án tương ứng trên đề thi):</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {visualChoices.map((choice) => (
                <div
                  key={choice.num}
                  className="group p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center">
                        {choice.num}
                      </span>
                      {choice.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-medium">
                          {choice.badge}
                        </span>
                      )}
                    </div>

                    {choice.icon && (
                      <div className="text-2xl mb-2 text-center py-1 bg-slate-950/60 rounded-lg">
                        {choice.icon}
                      </div>
                    )}

                    <h4 className="font-bold text-sm text-slate-100 font-japanese leading-snug">
                      {choice.title}
                    </h4>
                  </div>

                  {choice.description && (
                    <p className="text-[11px] text-slate-400 mt-1.5 pt-1.5 border-t border-slate-800/80 leading-tight">
                      {choice.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TYPE 3: Task Memo / Flowchart / Checklist (N3/N2/N1 Mondai 1: 課題理解) */}
        {type === 'task_memo' && memoSheet && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 font-japanese">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800 text-amber-300 font-bold text-xs sm:text-sm">
              <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
              <span>{memoSheet.header}</span>
            </div>

            <div className="space-y-2">
              {memoSheet.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg text-xs sm:text-sm gap-1 transition ${
                    item.isFocus
                      ? 'bg-cyan-950/40 border border-cyan-500/30 text-cyan-200'
                      : 'bg-slate-950/60 border border-slate-800/60 text-slate-300'
                  }`}
                >
                  <span className="font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-mono flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <span className="font-mono text-xs text-slate-400 sm:text-right pl-7 sm:pl-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {memoSheet.footerNote && (
              <p className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-800 italic">
                ※ {memoSheet.footerNote}
              </p>
            )}
          </div>
        )}

        {/* TYPE 4: Dialogue Scene (N3/N2/N1 Mondai 4: 即時応答 - Quick response context) */}
        {type === 'dialogue_scene' && dialogueContext && (
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-950 border border-indigo-900/40 space-y-3 font-japanese">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-slate-400 font-semibold">Tình huống:</span>
                <span className="text-white font-bold">{dialogueContext.setting}</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50">
                <Users className="w-3 h-3" />
                <span>{dialogueContext.characters}</span>
              </div>
            </div>

            {dialogueContext.speechBubble && (
              <div className="relative p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-100 text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-cyan-300 font-bold block mb-0.5">
                      【相手の一言・Câu nói mở đầu】:
                    </span>
                    <span className="font-bold text-white text-base">
                      「{dialogueContext.speechBubble}」
                    </span>
                  </div>
                </div>
              </div>
            )}

            {dialogueContext.atmosphere && (
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{dialogueContext.atmosphere}</span>
              </p>
            )}
          </div>
        )}

        {caption && (
          <p className="text-xs text-slate-400 mt-2.5 text-center italic font-japanese">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
