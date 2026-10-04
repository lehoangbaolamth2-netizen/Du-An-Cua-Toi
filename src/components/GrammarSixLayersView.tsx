import React, { useState } from 'react';
import { GrammarItem } from '../types';
import { JapaneseSpeechEngine } from '../services/speech';
import {
  Compass,
  Table,
  GitCompare,
  Volume2,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Lightbulb,
  Layers,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';

interface Props {
  item: GrammarItem;
}

export const GrammarSixLayersView: React.FC<Props> = ({ item }) => {
  const [showRomaji, setShowRomaji] = useState(true);
  const [isDeepDiveExpanded, setIsDeepDiveExpanded] = useState(false);
  const [masteryLevel, setMasteryLevel] = useState<number>(3); // 1 to 5

  const masteryLabels = [
    { level: 1, label: '⚪ Awareness', desc: 'Nhận biết khi người Nhật sử dụng' },
    { level: 2, label: '🔵 Comprehension', desc: 'Hiểu điều kiện sử dụng' },
    { level: 3, label: '🟡 Apply', desc: 'Tự tạo câu' },
    { level: 4, label: '🟠 Distinguish', desc: 'Phân biệt mẫu gần giống' },
    { level: 5, label: '🔴 Master', desc: 'Hiểu sắc thái và sử dụng tự nhiên' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* 5-Level Mastery Ladder Bar */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            Thang đo 5 Cấp Độ Thành Thục Mẫu Ngữ Pháp Này:
          </span>
          <span className="text-xs font-mono font-bold text-emerald-400">
            {masteryLabels[masteryLevel - 1].label}: {masteryLabels[masteryLevel - 1].desc}
          </span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {masteryLabels.map((m) => (
            <button
              key={m.level}
              onClick={() => setMasteryLevel(m.level)}
              className={`p-2 rounded-xl text-center text-xs font-semibold transition cursor-pointer border ${
                masteryLevel >= m.level
                  ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300 font-bold'
                  : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:text-slate-400'
              }`}
            >
              <div className="truncate text-[11px]">{m.label.split(' ')[0]} {m.label.split(' ')[1]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* TẦNG 1: GIẢI THÍCH SIÊU CƠ BẢN */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/30 border border-emerald-500/30 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
            TẦNG 1
          </span>
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-400" />
            Giải Thích Siêu Cơ Bản (Dễ Hiểu - Không Thuật Ngữ)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-1.5">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
              ❓ 1. Mẫu này dùng để làm gì?
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {item.simpleExplanation?.whatFor || item.essenceMeaning.coreMindset}
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-1.5">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
              👥 2. Người Nhật dùng nó trong tình huống nào?
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {item.simpleExplanation?.whenToUse || item.essenceMeaning.literalVsReal}
            </p>
          </div>
        </div>

        {item.simpleExplanation?.plainSummary && (
          <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-emerald-900/40 text-xs text-slate-300 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-emerald-300">Tóm tắt bình dân:</strong> {item.simpleExplanation.plainSummary}
            </div>
          </div>
        )}
      </div>

      {/* TẦNG 2: CẤU TRÚC & PHÂN TÍCH THÀNH PHẦN */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
            TẦNG 2
          </span>
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <Table className="w-4 h-4 text-cyan-400" />
            Cấu Trúc & Phân Tích Từng Thành Phần
          </h3>
        </div>

        {/* Formula Box */}
        <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              Công thức nối ngữ pháp:
            </span>
            <span className="text-base sm:text-lg font-mono font-black text-white font-japanese">
              {item.structures?.formula || item.grammar}
            </span>
          </div>
          <button
            onClick={() => JapaneseSpeechEngine.speak(item.grammar)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer self-start sm:self-auto"
          >
            <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Phát âm mẫu</span>
          </button>
        </div>

        {/* Detailed Component Breakdown Examples */}
        {item.structures?.breakdownExamples && (
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Phân tích mổ xẻ từng thành phần trong câu mẫu:
            </span>

            {item.structures.breakdownExamples.map((ex, idx) => (
              <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white font-japanese">{ex.sentence}</div>
                    <div className="text-xs text-slate-400">{ex.translation}</div>
                  </div>
                  <button
                    onClick={() => JapaneseSpeechEngine.speak(ex.sentence)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2 border-t border-slate-800">
                  {ex.components.map((comp, cIdx) => (
                    <div key={cIdx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                      <div className="font-japanese font-bold text-cyan-300">{comp.part}</div>
                      <div className="text-[11px] font-semibold text-amber-400">{comp.role}</div>
                      <div className="text-[11px] text-slate-400">{comp.explanation}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rules Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-2.5 px-3">Từ loại</th>
                <th className="py-2.5 px-3">Quy tắc biến thể</th>
                <th className="py-2.5 px-3">Ví dụ thực tế</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {item.connectionRules.map((rule, idx) => (
                <tr key={idx} className="hover:bg-slate-900/50 transition">
                  <td className="py-3 px-3 font-semibold text-cyan-300 whitespace-nowrap">{rule.form}</td>
                  <td className="py-3 px-3 font-mono font-bold text-white whitespace-nowrap">{rule.rule}</td>
                  <td className="py-3 px-3 font-japanese text-slate-300">{rule.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TẦNG 3: VÍ DỤ THEO 3 CẤP ĐỘ */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
              TẦNG 3
            </span>
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Ví Dụ Theo 3 Cấp Độ (Cơ bản - Trung cấp - Nâng cao)
            </h3>
          </div>

          <button
            onClick={() => setShowRomaji(!showRomaji)}
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:text-white cursor-pointer font-medium"
          >
            {showRomaji ? 'Ẩn Romaji' : 'Hiện Romaji'}
          </button>
        </div>

        {item.threeTierExamples ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Level 1: Basic */}
            <div className="bg-slate-950/80 border border-emerald-900/40 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                    🟢 CƠ BẢN (N5 - N4)
                  </span>
                  <button
                    onClick={() => JapaneseSpeechEngine.speak(item.threeTierExamples!.basic.japanese)}
                    className="text-slate-400 hover:text-white cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="text-base font-bold text-white font-japanese leading-relaxed">
                  {item.threeTierExamples.basic.japanese}
                </h4>
                {showRomaji && (
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {item.threeTierExamples.basic.romaji}
                  </p>
                )}
                <p className="text-xs text-slate-200 mt-2 font-medium">
                  {item.threeTierExamples.basic.vietnamese}
                </p>
              </div>
              <div className="text-[11px] text-emerald-400/90 pt-2 border-t border-slate-800/80">
                <strong>Tại sao dùng mẫu này:</strong> {item.threeTierExamples.basic.whyThisPattern}
              </div>
            </div>

            {/* Level 2: Intermediate */}
            <div className="bg-slate-950/80 border border-amber-900/40 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-bold">
                    🟡 TRUNG CẤP (N3)
                  </span>
                  <button
                    onClick={() => JapaneseSpeechEngine.speak(item.threeTierExamples!.intermediate.japanese)}
                    className="text-slate-400 hover:text-white cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="text-base font-bold text-white font-japanese leading-relaxed">
                  {item.threeTierExamples.intermediate.japanese}
                </h4>
                {showRomaji && (
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {item.threeTierExamples.intermediate.romaji}
                  </p>
                )}
                <p className="text-xs text-slate-200 mt-2 font-medium">
                  {item.threeTierExamples.intermediate.vietnamese}
                </p>
              </div>
              <div className="text-[11px] text-amber-400/90 pt-2 border-t border-slate-800/80">
                <strong>Tại sao dùng mẫu này:</strong> {item.threeTierExamples.intermediate.whyThisPattern}
              </div>
            </div>

            {/* Level 3: Advanced */}
            <div className="bg-slate-950/80 border border-rose-900/40 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 text-[11px] font-bold">
                    🔴 NÂNG CAO (N2 - N1)
                  </span>
                  <button
                    onClick={() => JapaneseSpeechEngine.speak(item.threeTierExamples!.advanced.japanese)}
                    className="text-slate-400 hover:text-white cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="text-base font-bold text-white font-japanese leading-relaxed">
                  {item.threeTierExamples.advanced.japanese}
                </h4>
                {showRomaji && (
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {item.threeTierExamples.advanced.romaji}
                  </p>
                )}
                <p className="text-xs text-slate-200 mt-2 font-medium">
                  {item.threeTierExamples.advanced.vietnamese}
                </p>
              </div>
              <div className="text-[11px] text-rose-400/90 pt-2 border-t border-slate-800/80">
                <strong>Tại sao dùng mẫu này:</strong> {item.threeTierExamples.advanced.whyThisPattern}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.connectionRules.map((cr, i) => (
              <div key={i} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                <div className="font-bold text-white font-japanese mb-1">{cr.example}</div>
                <div className="text-slate-400">{cr.form} - {cr.rule}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TẦNG 4: SO SÁNH MẪU DỄ NHẦM & KHI KHÔNG NÊN DÙNG */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold">
            TẦNG 4
          </span>
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <GitCompare className="w-4 h-4 text-purple-400" />
            Bảng So Sánh Các Mẫu Dễ Gây Nhầm Lẫn
          </h3>
        </div>

        {item.confusingComparisons ? (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider bg-slate-950/80">
                    <th className="py-3 px-3">Mẫu Ngữ Pháp</th>
                    <th className="py-3 px-3">Ý nghĩa cốt lõi</th>
                    <th className="py-3 px-3">Mức lịch sự</th>
                    <th className="py-3 px-3">Sắc thái</th>
                    <th className="py-3 px-3">Tình huống dùng chuẩn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {item.confusingComparisons.patterns.map((p, idx) => (
                    <tr key={idx} className="hover:bg-slate-950/60 transition">
                      <td className="py-3 px-3 font-japanese font-bold text-white whitespace-nowrap">{p.pattern}</td>
                      <td className="py-3 px-3 text-slate-300">{p.meaning}</td>
                      <td className="py-3 px-3 font-semibold text-amber-400 whitespace-nowrap">{p.politenessLevel}</td>
                      <td className="py-3 px-3 text-slate-400">{p.nuance}</td>
                      <td className="py-3 px-3 text-cyan-300">{p.usageSituation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Warning Box: When NOT to use */}
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-600/40 text-xs text-rose-200 leading-relaxed flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-300 block mb-1">
                  CẢNH BÁO TỐI QUAN TRỌNG: KHI NÀO KHÔNG NÊN DÙNG MẪU NÀY?
                </strong>
                {item.confusingComparisons.whenNotToUse}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-2">
            <span className="font-bold text-amber-300 block">So sánh với {item.comparison.confusingWith}:</span>
            <p className="text-slate-300">{item.comparison.keyDifference}</p>
          </div>
        )}
      </div>

      {/* TẦNG 7: SẮC THÁI NGƯỜI NHẬT (NUANCE SPECTRUM) */}
      {item.nuanceSpectrum && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold">
              TẦNG 7
            </span>
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Phổ Sắc Thái Người Nhật: Không Đánh Đồng "Đúng Ngữ Pháp" Với "Tự Nhiên"
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-900/40 space-y-2">
              <span className="text-xs font-bold text-emerald-400 block">{item.nuanceSpectrum.casual.levelLabel}</span>
              <div className="font-japanese font-bold text-white text-sm">{item.nuanceSpectrum.casual.japanese}</div>
              <p className="text-[11px] text-slate-400">{item.nuanceSpectrum.casual.situation}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-blue-900/40 space-y-2">
              <span className="text-xs font-bold text-blue-400 block">{item.nuanceSpectrum.polite.levelLabel}</span>
              <div className="font-japanese font-bold text-white text-sm">{item.nuanceSpectrum.polite.japanese}</div>
              <p className="text-[11px] text-slate-400">{item.nuanceSpectrum.polite.situation}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-purple-900/40 space-y-2">
              <span className="text-xs font-bold text-purple-400 block">{item.nuanceSpectrum.respectful.levelLabel}</span>
              <div className="font-japanese font-bold text-white text-sm">{item.nuanceSpectrum.respectful.japanese}</div>
              <p className="text-[11px] text-slate-400">{item.nuanceSpectrum.respectful.situation}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-rose-900/40 space-y-2">
              <span className="text-xs font-bold text-rose-400 block">{item.nuanceSpectrum.businessKeigo.levelLabel}</span>
              <div className="font-japanese font-bold text-white text-sm">{item.nuanceSpectrum.businessKeigo.japanese}</div>
              <p className="text-[11px] text-slate-400">{item.nuanceSpectrum.businessKeigo.situation}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-200 leading-relaxed">
            💡 <strong>Tâm thức người Nhật:</strong> {item.nuanceSpectrum.insight}
          </div>
        </div>
      )}

      {/* TẦNG 8: PHẦN "HỌC KĨ" (COLLAPSIBLE ACCORDION) */}
      {item.deepDive && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <button
            onClick={() => setIsDeepDiveExpanded(!isDeepDiveExpanded)}
            className="w-full flex items-center justify-between text-left cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold">
                TẦNG 8
              </span>
              <h3 className="text-base font-extrabold text-white flex items-center gap-2 group-hover:text-indigo-400 transition">
                🔬 HỌC KĨ: Nguồn Gốc, Điều Kiện Ngặt Nghèo & Lỗi Người Việt Thường Mắc
              </h3>
            </div>
            {isDeepDiveExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>

          {isDeepDiveExpanded && (
            <div className="space-y-4 pt-3 border-t border-slate-800 animate-fadeIn text-xs leading-relaxed text-slate-300">
              {item.deepDive.originEtymology && (
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-indigo-300 block mb-1">📜 Nguồn gốc & Cấu trúc ngữ pháp cốt lõi:</span>
                  <p>{item.deepDive.originEtymology}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-emerald-400 block mb-1">⚖️ Điều kiện sử dụng ngặt nghèo:</span>
                  <p>{item.deepDive.usageConditions}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-amber-400 block mb-1">⚡ Ngoại lệ cần nhớ:</span>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-400">
                    {item.deepDive.exceptions.map((ex, i) => (
                      <li key={i}>{ex}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-900/40">
                <span className="font-bold text-rose-300 block mb-1">🇻🇳 Những lỗi người Việt Nam hay mắc nhất:</span>
                <ul className="list-disc pl-4 space-y-1 text-rose-200">
                  {item.deepDive.commonVietnameseMistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* GRAMMAR MAP & LỘ TRÌNH TƯ DUY */}
      {item.grammarMap && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <h3 className="text-base font-extrabold text-white">
              Bản Đồ Ngữ Pháp (Grammar Map) & Lộ Trình Tư Duy
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="font-bold text-emerald-400 block">✓ Đã biết:</span>
              <ul className="list-disc pl-4 text-slate-300 space-y-0.5">
                {item.grammarMap.prerequisites.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="font-bold text-cyan-400 block">→ Nên học tiếp:</span>
              <ul className="list-disc pl-4 text-slate-300 space-y-0.5">
                {item.grammarMap.nextRecommendations.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="font-bold text-amber-400 block">⚠️ Dễ nhầm với:</span>
              <ul className="list-disc pl-4 text-slate-300 space-y-0.5">
                {item.grammarMap.easyToConfuseWith.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="font-bold text-purple-400 block">👑 Kiến thức nâng cao:</span>
              <ul className="list-disc pl-4 text-slate-300 space-y-0.5">
                {item.grammarMap.advancedKnowledge.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {item.grammarMap.branchDiagramText && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 whitespace-pre overflow-x-auto">
              {item.grammarMap.branchDiagramText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
