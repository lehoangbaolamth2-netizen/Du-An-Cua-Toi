// Service quản lý thông báo nhắc nhở ôn tập SRS
export interface SRSReminderConfig {
  enabled: boolean;
  reminderTimes: string[]; // ['08:00', '12:30', '20:00']
  notifyOnDue: boolean;
  soundEnabled: boolean;
  lastNotifiedDate?: string;
}

const REMINDER_STORAGE_KEY = 'nihongo_srs_reminder_config_v1';

export const DEFAULT_REMINDER_CONFIG: SRSReminderConfig = {
  enabled: false,
  reminderTimes: ['08:30', '19:30'],
  notifyOnDue: true,
  soundEnabled: true,
};

export function loadReminderConfig(): SRSReminderConfig {
  if (typeof window === 'undefined') return DEFAULT_REMINDER_CONFIG;
  try {
    const raw = localStorage.getItem(REMINDER_STORAGE_KEY);
    if (raw) {
      return { ...DEFAULT_REMINDER_CONFIG, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.error('Error loading reminder config:', e);
  }
  return DEFAULT_REMINDER_CONFIG;
}

export function saveReminderConfig(config: SRSReminderConfig) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(REMINDER_STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Error saving reminder config:', e);
  }
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied';
  }
  try {
    const permission = await Notification.requestPermission();
    return permission;
  } catch (e) {
    console.error('Notification permission error:', e);
    return 'denied';
  }
}

export function sendPushNotification(title: string, body: string, icon?: string) {
  if (typeof window === 'undefined' || !('Notification' in window)) return;
  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body,
        icon: icon || 'https://api.iconify.design/twemoji:brain.svg',
        badge: 'https://api.iconify.design/twemoji:books.svg',
        tag: 'srs-reminder',
      });
    } catch (e) {
      console.error('Error sending push notification:', e);
    }
  }
}

// Phát âm thanh chuông nhẹ nhắc nhở ôn bài
export function playChimeSound() {
  if (typeof window === 'undefined') return;
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5

    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  } catch (e) {
    // Audio context may require user interaction
  }
}
