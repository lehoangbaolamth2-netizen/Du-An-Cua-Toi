/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { PitchReflexModule } from './components/PitchReflexModule';
import { ListeningDictationModule } from './components/ListeningDictationModule';
import { SRSFlashcardModule } from './components/SRSFlashcardModule';
import { GrammarDeepDiveModule } from './components/GrammarDeepDiveModule';
import { JLPTSimulatorModule } from './components/JLPTSimulatorModule';
import { DokkaiStrategyModule } from './components/DokkaiStrategyModule';
import { AIAnalyzerModal } from './components/AIAnalyzerModal';

import {
  PITCH_SENTENCE_PRESETS,
  LISTENING_LESSON_PRESETS,
  FLASHCARD_PRESETS,
  GRAMMAR_PRESETS,
  DOKKAI_PRESETS,
} from './data/mockData';

import {
  loadFlashcardsFromStorage,
  saveFlashcardsToStorage,
  countDueCards,
} from './services/srs';
import { Flashcard, PitchSentenceItem, ListeningLesson } from './types';
import { Sparkles, Brain, Headphones, Mic2, Compass, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('pitch');
  const [currentLevel, setCurrentLevel] = useState<string>('ALL');

  // Load and manage Flashcards with SRS
  const [cards, setCards] = useState<Flashcard[]>(() =>
    loadFlashcardsFromStorage(FLASHCARD_PRESETS)
  );

  useEffect(() => {
    saveFlashcardsToStorage(cards);
  }, [cards]);

  // Manage presets
  const [sentences, setSentences] = useState<PitchSentenceItem[]>(PITCH_SENTENCE_PRESETS);
  const [listeningLessons, setListeningLessons] = useState<ListeningLesson[]>(LISTENING_LESSON_PRESETS);
  const [grammarList] = useState(GRAMMAR_PRESETS);
  const [dokkaiArticles] = useState(DOKKAI_PRESETS);

  // AI Modal
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiModalInitialText, setAiModalInitialText] = useState('');
  const [aiModalMode, setAiModalMode] = useState<'pitch' | 'listening' | 'grammar' | 'dokkai'>('pitch');

  const openAiAnalyzer = (
    initialText: string = '',
    mode: 'pitch' | 'listening' | 'grammar' | 'dokkai' = 'pitch'
  ) => {
    setAiModalInitialText(initialText);
    setAiModalMode(mode);
    setIsAiModalOpen(true);
  };

  const handleAddCustomSentence = (newItem: PitchSentenceItem) => {
    setSentences((prev) => [newItem, ...prev]);
  };

  const handleAddCustomListening = (newLesson: ListeningLesson) => {
    setListeningLessons((prev) => [newLesson, ...prev]);
  };

  const dueCount = countDueCards(cards);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
        dueCardsCount={dueCount}
        onOpenAiAnalyzer={() => openAiAnalyzer('', 'pitch')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'pitch' && (
          <PitchReflexModule
            sentences={sentences}
            currentLevel={currentLevel}
            onOpenAiAnalyzer={openAiAnalyzer}
          />
        )}

        {activeTab === 'listening' && (
          <ListeningDictationModule
            lessons={listeningLessons}
            currentLevel={currentLevel}
            onOpenAiAnalyzer={openAiAnalyzer}
          />
        )}

        {activeTab === 'flashcards' && (
          <SRSFlashcardModule
            cards={cards}
            onUpdateCards={setCards}
            currentLevel={currentLevel}
            onOpenAiAnalyzer={openAiAnalyzer}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarDeepDiveModule
            grammarList={grammarList}
            currentLevel={currentLevel}
            onOpenAiAnalyzer={openAiAnalyzer}
          />
        )}

        {activeTab === 'jlpt' && (
          <JLPTSimulatorModule
            currentLevel={currentLevel}
            onOpenAiAnalyzer={openAiAnalyzer}
          />
        )}

        {activeTab === 'dokkai' && (
          <DokkaiStrategyModule
            articles={dokkaiArticles}
            currentLevel={currentLevel}
            onOpenAiAnalyzer={openAiAnalyzer}
          />
        )}
      </main>

      {/* Global AI Analyzer Modal */}
      <AIAnalyzerModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        initialText={aiModalInitialText}
        initialMode={aiModalMode}
        onAddCustomSentence={handleAddCustomSentence}
        onAddCustomListening={handleAddCustomListening}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-400">NihonGo Reflex Engine</span>
            <span>• Chuẩn hóa ngữ âm & tư duy giải đề JLPT N5 - N1</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>Pitch Accent (High/Low/Drop)</span>
            <span>•</span>
            <span>SRS SM-2 Spaced Repetition</span>
            <span>•</span>
            <span>Dokkai 30s Speed Tip</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
