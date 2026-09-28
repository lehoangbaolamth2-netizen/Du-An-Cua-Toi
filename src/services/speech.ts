/**
 * Audio synthesis & Speech utilities for Japanese pronunciation
 */

export class JapaneseSpeechEngine {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static cachedJapaneseVoice: SpeechSynthesisVoice | null = null;

  static getJapaneseVoice(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    if (this.cachedJapaneseVoice) return this.cachedJapaneseVoice;

    const voices = this.synth.getVoices();
    // Prefer natural Japanese voices
    const jaVoices = voices.filter(
      (v) => v.lang.startsWith('ja') || v.lang.includes('JP') || v.name.toLowerCase().includes('japan')
    );

    if (jaVoices.length > 0) {
      // Prioritize natural voices like Google, Kyoko, Otoya, Sayaka
      const preferred = jaVoices.find(
        (v) =>
          v.name.includes('Google') ||
          v.name.includes('Kyoko') ||
          v.name.includes('Otoya') ||
          v.name.includes('Siri')
      );
      this.cachedJapaneseVoice = preferred || jaVoices[0];
      return this.cachedJapaneseVoice;
    }

    return null;
  }

  static speak(text: string, rate: number = 1.0, onEnd?: () => void) {
    if (!this.synth) {
      onEnd?.();
      return;
    }

    // Cancel ongoing speech
    this.synth.cancel();

    // Clean text of parentheses or markdown artifacts
    const cleanText = text.replace(/\[.*?\]|\(.*?\)/g, '').trim();
    if (!cleanText) {
      onEnd?.();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = rate; // 0.8, 1.0, 1.2
    utterance.pitch = 1.0;

    const voice = this.getJapaneseVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      onEnd?.();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      onEnd?.();
    };

    this.synth.speak(utterance);
  }

  static stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  static isSpeaking(): boolean {
    return !!this.synth && this.synth.speaking;
  }
}

// Media recorder helper for user pitch recording & shadow playback
export class AudioRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private audioBlob: Blob | null = null;
  private audioUrl: string | null = null;

  async start(): Promise<boolean> {
    try {
      this.audioChunks = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start();
      return true;
    } catch (err) {
      console.error('Error starting audio recorder:', err);
      return false;
    }
  }

  stop(): Promise<string> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder) {
        resolve('');
        return;
      }

      this.mediaRecorder.onstop = () => {
        this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        if (this.audioUrl) {
          URL.revokeObjectURL(this.audioUrl);
        }
        this.audioUrl = URL.createObjectURL(this.audioBlob);

        // Stop all audio tracks
        this.mediaRecorder?.stream.getTracks().forEach((track) => track.stop());
        resolve(this.audioUrl);
      };

      this.mediaRecorder.stop();
    });
  }

  getAudioUrl(): string | null {
    return this.audioUrl;
  }
}
