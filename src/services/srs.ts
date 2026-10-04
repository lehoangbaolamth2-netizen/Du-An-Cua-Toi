/**
 * Spaced Repetition System (SRS) using SuperMemo-2 (SM-2) algorithm
 */
import { Flashcard } from '../types';

export type ReviewRating = 'again' | 'hard' | 'good' | 'easy';

export interface ReviewResult {
  repetitions: number;
  interval: number; // in days
  easeFactor: number;
  dueDate: string;
  state: 'new' | 'learning' | 'review' | 'mastered';
}

/**
 * Calculates new SRS parameters based on user rating:
 * - again (rating 1): reset repetitions, interval = 1, ease decreases
 * - hard (rating 2): small interval, ease decreases slightly
 * - good (rating 3): normal SM-2 progression
 * - easy (rating 4): large interval bonus, ease increases
 */
export function calculateSM2(
  rating: ReviewRating,
  currentRepetitions: number,
  currentInterval: number,
  currentEaseFactor: number
): ReviewResult {
  let repetitions = currentRepetitions;
  let interval = currentInterval;
  let easeFactor = currentEaseFactor;
  let state: 'new' | 'learning' | 'review' | 'mastered' = 'learning';

  // Numerical rating equivalent (1 - 4)
  const qualityMap: Record<ReviewRating, number> = {
    again: 1,
    hard: 2,
    good: 3,
    easy: 5,
  };
  const q = qualityMap[rating];

  if (q < 3) {
    // Failed recall
    repetitions = 0;
    interval = 1;
    easeFactor = Math.max(1.3, easeFactor - 0.2);
    state = 'learning';
  } else {
    // Successful recall
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = rating === 'easy' ? 4 : 2;
    } else {
      const bonus = rating === 'easy' ? 1.3 : 1.0;
      interval = Math.round(interval * easeFactor * bonus);
    }

    repetitions += 1;
    // SM-2 Ease Factor formula
    easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    easeFactor = Math.max(1.3, Math.min(2.8, easeFactor));

    if (repetitions >= 4 && interval >= 21) {
      state = 'mastered';
    } else {
      state = 'review';
    }
  }

  const now = new Date();
  const nextDate = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000);

  return {
    repetitions,
    interval,
    easeFactor: Math.round(easeFactor * 100) / 100,
    dueDate: nextDate.toISOString(),
    state,
  };
}

export function isCardDue(dueDateStr: string): boolean {
  if (!dueDateStr) return true;
  const dueDate = new Date(dueDateStr);
  const now = new Date();
  return dueDate.getTime() <= now.getTime();
}

export function countDueCards(cards: Flashcard[]): number {
  return cards.filter((card) => isCardDue(card.srs.dueDate)).length;
}

// Storage key for device sync & local persistence
const STORAGE_KEY = 'nihongo_reflex_flashcards_v1';
const HISTORY_KEY = 'nihongo_reflex_jlpt_history_v1';
const MISTAKES_KEY = 'nihongo_reflex_jlpt_mistakes_v1';

export function loadFlashcardsFromStorage(fallback: Flashcard[]): Flashcard[] {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // If parsed cards have less than the full presets, merge to include all cards
        const storedMap = new Map<string, Flashcard>();
        parsed.forEach((c) => {
          if (c && c.id) storedMap.set(c.id, c);
        });

        // Merge: take stored version if exists (to preserve review progress), otherwise take fallback card
        const merged: Flashcard[] = fallback.map((fbCard) => {
          const storedCard = storedMap.get(fbCard.id);
          if (storedCard) {
            return {
              ...fbCard,
              srs: storedCard.srs || fbCard.srs
            };
          }
          return fbCard;
        });

        // Also keep any custom created cards that were added by user but not in fallback
        parsed.forEach((c) => {
          if (c && c.id && !fallback.some((fb) => fb.id === c.id)) {
            merged.push(c);
          }
        });

        return merged;
      }
    }
  } catch (e) {
    console.error('Error loading flashcards:', e);
  }
  return fallback;
}

export function saveFlashcardsToStorage(cards: Flashcard[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  } catch (e) {
    console.error('Error saving flashcards:', e);
  }
}

export function exportCardsAsJSON(cards: Flashcard[]) {
  const jsonStr = JSON.stringify(cards, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `nihongo-flashcards-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importCardsFromJSON(file: File): Promise<Flashcard[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) {
          resolve(parsed);
        } else {
          reject(new Error('Định dạng tệp không hợp lệ: phải là mảng flashcards.'));
        }
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Lỗi đọc tệp'));
    reader.readAsText(file);
  });
}
