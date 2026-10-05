import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export type UserRole = 'user' | 'admin' | 'superadmin';
export type UserStatus = 'active' | 'suspended' | 'banned';
export type AvatarSource = 'google' | 'custom';

export interface DbUser {
  id: string;
  google_sub: string;
  email: string;
  name: string;
  avatar_url: string; // Ảnh đại diện hiển thị hiện tại
  google_avatar_url: string; // Lưu vĩnh viễn ảnh gốc từ tài khoản Google
  avatar_source: AvatarSource; // 'google' | 'custom'
  role: UserRole;
  status: UserStatus;
  created_at: string;
  last_login_at: string;
  updated_at: string;
  target_level?: string;
  total_study_minutes?: number;
  completed_lessons?: number;
}

export interface DbSession {
  token: string;
  user_id: string;
  google_sub: string;
  role: UserRole;
  created_at: string;
  expires_at: string;
  ip: string;
  user_agent: string;
}

export interface DbAuditLog {
  id: string;
  admin_id: string;
  admin_email: string;
  action: string;
  target_type: 'user' | 'content' | 'settings' | 'security';
  target_id: string;
  target_name?: string;
  reason: string;
  ip: string;
  device: string;
  result: 'SUCCESS' | 'FAILED';
  timestamp: string;
}

export interface DbContentItem {
  id: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  module: 'grammar' | 'listening' | 'pitch' | 'flashcard' | 'dokkai';
  title: string;
  summary: string;
  status: 'published' | 'draft';
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface DbSystemSettings {
  maintenance_mode: boolean;
  registration_open: boolean;
  max_daily_ai_requests: number;
  allow_guest_preview: boolean;
  app_name: string;
  support_email: string;
  updated_at: string;
}

interface DatabaseSchema {
  users: DbUser[];
  sessions: DbSession[];
  audit_logs: DbAuditLog[];
  contents: DbContentItem[];
  settings: DbSystemSettings;
}

const isVercelEnvironment = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.LAMBDA_TASK_ROOT);
const DB_DIR = isVercelEnvironment
  ? path.join('/tmp', 'nihongo_data')
  : path.resolve(__dirname, '..', 'data_server');
const DB_FILE = path.join(DB_DIR, 'db.json');

// Initial Superadmin email configured from environment or default (empty if not configured)
const ADMIN_DEFAULT_EMAIL = (process.env.INITIAL_ADMIN_EMAIL || '').trim();
const ADMIN_DEFAULT_SUB = (process.env.INITIAL_ADMIN_GOOGLE_SUB || '').trim();

const INITIAL_DATA: DatabaseSchema = {
  users: [],
  sessions: [],
  audit_logs: [],
  contents: [
    {
      id: 'cnt_001',
      level: 'N5',
      module: 'grammar',
      title: 'Mẫu 〜てください (Yêu cầu lịch sự nhẹ nhàng)',
      summary: 'Khởi đầu mẫu câu chỉ dẫn và nhờ vả chuẩn mực trong giao tiếp sơ cấp',
      status: 'published',
      created_by: 'system_sensei',
      created_at: '2026-01-10T00:00:00.000Z',
      updated_at: '2026-01-10T00:00:00.000Z',
    },
    {
      id: 'cnt_002',
      level: 'N4',
      module: 'grammar',
      title: 'Mẫu 〜てしまう / 〜ちゃう (Tiếc nuối & Hoàn tất triệt để)',
      summary: 'Biểu thị sự việc lỡ xảy ra ngoài ý muốn hoặc hoàn thành trọn vẹn',
      status: 'published',
      created_by: 'system_sensei',
      created_at: '2026-01-15T00:00:00.000Z',
      updated_at: '2026-01-15T00:00:00.000Z',
    },
    {
      id: 'cnt_003',
      level: 'N3',
      module: 'grammar',
      title: 'Mẫu 〜わけではない (Phủ định một phần / Không hẳn là)',
      summary: 'Giải tỏa hiểu lầm tinh tế, không cực đoan trong đàm thoại đời thường',
      status: 'published',
      created_by: 'system_sensei',
      created_at: '2026-02-01T00:00:00.000Z',
      updated_at: '2026-02-01T00:00:00.000Z',
    },
    {
      id: 'cnt_004',
      level: 'N2',
      module: 'grammar',
      title: 'Mẫu 〜ざるを得ない (Đành phải làm dù lòng không muốn)',
      summary: 'Tâm thức miễn cưỡng trước tình thế éo le và nghịch cảnh công việc',
      status: 'published',
      created_by: 'system_sensei',
      created_at: '2026-03-01T00:00:00.000Z',
      updated_at: '2026-03-01T00:00:00.000Z',
    },
    {
      id: 'cnt_005',
      level: 'N1',
      module: 'grammar',
      title: 'Mẫu 〜を余儀なくされる (Bị dồn vào chân tường bởi biến cố lớn)',
      summary: 'Văn phong chính luận trang trọng bậc nhất dành cho báo chí và văn kiện',
      status: 'published',
      created_by: 'system_sensei',
      created_at: '2026-03-15T00:00:00.000Z',
      updated_at: '2026-03-15T00:00:00.000Z',
    }
  ],
  settings: {
    maintenance_mode: false,
    registration_open: true,
    max_daily_ai_requests: 50,
    allow_guest_preview: true,
    app_name: 'NihonGo Reflex - Hệ Thống JLPT & RBAC Mastery',
    support_email: process.env.SUPPORT_EMAIL || 'support@nihongoreflex.internal',
    updated_at: new Date().toISOString(),
  }
};

class DatabaseManager {
  private data: DatabaseSchema;

  constructor() {
    this.ensureDirectory();
    this.data = this.loadDatabase();
  }

  private ensureDirectory() {
    try {
      if (!fs.existsSync(DB_DIR)) {
        fs.mkdirSync(DB_DIR, { recursive: true });
      }
    } catch (err) {
      console.warn('[DB_INIT] Directory creation warning in serverless environment:', err);
    }
  }

  private loadDatabase(): DatabaseSchema {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(raw);

        // Clean out any legacy mock accounts with old hardcoded emails or IDs
        if (Array.isArray(parsed.users)) {
          parsed.users = parsed.users.filter((u: DbUser) => {
            const emailLower = (u.email || '').toLowerCase();
            const subStr = u.google_sub || '';
            const isOldMock = emailLower.includes('lehoangbaolamth2@gmail.com') ||
                              subStr === '109823485720194857201' ||
                              u.id === 'usr_superadmin_001';
            return !isOldMock;
          });

          parsed.users.forEach((u: DbUser) => {
            if (!u.google_avatar_url) {
              u.google_avatar_url = u.avatar_url;
            }
            if (!u.avatar_source) {
              u.avatar_source = 'google';
            }
          });
        }

        // If an initial admin email is specified in environment variables, ensure that account has superadmin role
        if (ADMIN_DEFAULT_EMAIL && Array.isArray(parsed.users)) {
          const adminIndex = parsed.users.findIndex(
            (u: DbUser) => u.email.toLowerCase() === ADMIN_DEFAULT_EMAIL.toLowerCase() || (ADMIN_DEFAULT_SUB && u.google_sub === ADMIN_DEFAULT_SUB)
          );
          if (adminIndex !== -1 && parsed.users[adminIndex].role !== 'superadmin') {
            parsed.users[adminIndex].role = 'superadmin';
          }
        }
        this.saveDatabase(parsed);
        return parsed;
      }
    } catch (err) {
      console.warn('[DB_LOAD] Notice loading file, starting with default seeded database:', err);
    }

    this.saveDatabase(INITIAL_DATA);
    return INITIAL_DATA;
  }

  private saveDatabase(dataToSave?: DatabaseSchema) {
    try {
      this.ensureDirectory();
      const content = JSON.stringify(dataToSave || this.data, null, 2);
      fs.writeFileSync(DB_FILE, content, 'utf-8');
    } catch (err) {
      console.warn('[DB_SAVE] Persistent disk write notice (normal on serverless read-only functions, data kept in memory):', err);
    }
  }

  // --- USER OPERATIONS ---
  public getUsers(): DbUser[] {
    return this.data.users;
  }

  public getUserById(id: string): DbUser | undefined {
    return this.data.users.find((u) => u.id === id);
  }

  public getUserByGoogleSub(googleSub: string): DbUser | undefined {
    return this.data.users.find((u) => u.google_sub === googleSub);
  }

  public getUserByEmail(email: string): DbUser | undefined {
    return this.data.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  }

  public upsertGoogleUser(userData: {
    google_sub: string;
    email: string;
    name: string;
    avatar_url: string;
  }): { user: DbUser; isNew: boolean } {
    const existingIndex = this.data.users.findIndex(
      (u) => u.google_sub === userData.google_sub || (userData.email && u.email.toLowerCase() === userData.email.toLowerCase())
    );

    const now = new Date().toISOString();
    const isOwnerEmail = Boolean(
      (ADMIN_DEFAULT_EMAIL && userData.email.toLowerCase() === ADMIN_DEFAULT_EMAIL.toLowerCase()) ||
      (ADMIN_DEFAULT_SUB && userData.google_sub === ADMIN_DEFAULT_SUB)
    );

    if (existingIndex !== -1) {
      const existing = this.data.users[existingIndex];
      // Luôn cập nhật hoặc bảo tồn URL ảnh gốc của Google
      const freshGoogleAvatar = userData.avatar_url || existing.google_avatar_url || existing.avatar_url;

      // QUY TẮC QUAN TRỌNG:
      // Nếu user đã đổi sang avatar tùy chỉnh (avatar_source === 'custom'), KHÔNG ghi đè ảnh riêng bằng ảnh Google!
      // Nếu user đang dùng avatar Google (avatar_source === 'google'), cập nhật theo ảnh Google mới nhất.
      const isCustomAvatar = existing.avatar_source === 'custom' && !!existing.avatar_url;
      const displayAvatar = isCustomAvatar ? existing.avatar_url : freshGoogleAvatar;

      const updated: DbUser = {
        ...existing,
        google_sub: userData.google_sub, // Khóa ID Google bất biến
        name: userData.name || existing.name,
        google_avatar_url: freshGoogleAvatar,
        avatar_url: displayAvatar,
        avatar_source: existing.avatar_source || 'google',
        last_login_at: now,
        updated_at: now,
        role: isOwnerEmail ? 'superadmin' : existing.role,
      };
      this.data.users[existingIndex] = updated;
      this.saveDatabase();
      return { user: updated, isNew: false };
    }

    // Đăng ký tài khoản mới: Mặc định dùng ảnh Google, lưu Google sub làm ID liên kết
    const initialGoogleAvatar = userData.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150';
    const newUser: DbUser = {
      id: `usr_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`,
      google_sub: userData.google_sub,
      email: userData.email,
      name: userData.name || 'Người học Nhật ngữ',
      avatar_url: initialGoogleAvatar,
      google_avatar_url: initialGoogleAvatar,
      avatar_source: 'google',
      role: isOwnerEmail ? 'superadmin' : 'user',
      status: 'active',
      created_at: now,
      last_login_at: now,
      updated_at: now,
      target_level: 'N3',
      total_study_minutes: 0,
      completed_lessons: 0,
    };

    this.data.users.push(newUser);
    this.saveDatabase();
    return { user: newUser, isNew: true };
  }

  public updateUser(id: string, updates: Partial<DbUser>): DbUser | null {
    const idx = this.data.users.findIndex((u) => u.id === id);
    if (idx === -1) return null;

    const current = this.data.users[idx];

    // QUY TẮC BẢO MẬT BẤT BIẾN:
    // Email Google và Google sub (ID) không được sửa tùy tiện
    const safeUpdates: Partial<DbUser> = { ...updates };
    delete (safeUpdates as any).google_sub;
    delete (safeUpdates as any).email;
    delete (safeUpdates as any).id;

    // Xử lý luồng avatar riêng vs ảnh Google:
    if (safeUpdates.avatar_source === 'google') {
      // Người dùng chọn "Dùng lại ảnh Google": khôi phục ảnh từ google_avatar_url
      safeUpdates.avatar_url = current.google_avatar_url || current.avatar_url;
      safeUpdates.avatar_source = 'google';
    } else if (safeUpdates.avatar_url && safeUpdates.avatar_url !== current.google_avatar_url) {
      // Người dùng tải lên/nhập ảnh riêng mới
      safeUpdates.avatar_source = 'custom';
    }

    const updated: DbUser = {
      ...current,
      ...safeUpdates,
      updated_at: new Date().toISOString(),
    };
    this.data.users[idx] = updated;
    this.saveDatabase();
    return updated;
  }

  public deleteUser(id: string): boolean {
    const idx = this.data.users.findIndex((u) => u.id === id);
    if (idx === -1) return false;
    // Cannot delete superadmin
    if (this.data.users[idx].role === 'superadmin') {
      return false;
    }
    this.data.users.splice(idx, 1);
    // Remove active sessions for deleted user
    this.data.sessions = this.data.sessions.filter((s) => s.user_id !== id);
    this.saveDatabase();
    return true;
  }

  // --- SESSION OPERATIONS ---
  public createSession(user: DbUser, ip: string = '', userAgent: string = ''): string {
    const token = `sess_${crypto.randomBytes(32).toString('hex')}`;
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days session

    const session: DbSession = {
      token,
      user_id: user.id,
      google_sub: user.google_sub,
      role: user.role,
      created_at: now.toISOString(),
      expires_at: expiresAt.toISOString(),
      ip,
      user_agent: userAgent,
    };

    // Clean expired sessions
    this.data.sessions = this.data.sessions.filter(
      (s) => new Date(s.expires_at).getTime() > Date.now()
    );

    this.data.sessions.push(session);
    this.saveDatabase();
    return token;
  }

  public getSession(token: string): { session: DbSession; user: DbUser } | null {
    if (!token) return null;
    const session = this.data.sessions.find((s) => s.token === token);
    if (!session) return null;

    if (new Date(session.expires_at).getTime() <= Date.now()) {
      // Expired
      this.data.sessions = this.data.sessions.filter((s) => s.token !== token);
      this.saveDatabase();
      return null;
    }

    const user = this.getUserById(session.user_id);
    if (!user) return null;

    // Check user status
    if (user.status !== 'active') {
      return null;
    }

    return { session, user };
  }

  public removeSession(token: string): void {
    this.data.sessions = this.data.sessions.filter((s) => s.token !== token);
    this.saveDatabase();
  }

  // --- AUDIT LOG OPERATIONS ---
  public addAuditLog(entry: Omit<DbAuditLog, 'id' | 'timestamp'>): DbAuditLog {
    const log: DbAuditLog = {
      id: `aud_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
      ...entry,
      timestamp: new Date().toISOString(),
    };
    this.data.audit_logs.unshift(log);
    // Keep max 500 audit logs
    if (this.data.audit_logs.length > 500) {
      this.data.audit_logs = this.data.audit_logs.slice(0, 500);
    }
    this.saveDatabase();
    return log;
  }

  public getAuditLogs(): DbAuditLog[] {
    return this.data.audit_logs;
  }

  // --- CONTENT OPERATIONS ---
  public getContents(): DbContentItem[] {
    return this.data.contents;
  }

  public addContent(content: Omit<DbContentItem, 'id' | 'created_at' | 'updated_at'>): DbContentItem {
    const newContent: DbContentItem = {
      id: `cnt_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
      ...content,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.data.contents.unshift(newContent);
    this.saveDatabase();
    return newContent;
  }

  public updateContent(id: string, updates: Partial<DbContentItem>): DbContentItem | null {
    const idx = this.data.contents.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    const updated = {
      ...this.data.contents[idx],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    this.data.contents[idx] = updated;
    this.saveDatabase();
    return updated;
  }

  public deleteContent(id: string): boolean {
    const idx = this.data.contents.findIndex((c) => c.id === id);
    if (idx === -1) return false;
    this.data.contents.splice(idx, 1);
    this.saveDatabase();
    return true;
  }

  // --- SETTINGS OPERATIONS ---
  public getSettings(): DbSystemSettings {
    return this.data.settings;
  }

  public updateSettings(updates: Partial<DbSystemSettings>): DbSystemSettings {
    this.data.settings = {
      ...this.data.settings,
      ...updates,
      updated_at: new Date().toISOString(),
    };
    this.saveDatabase();
    return this.data.settings;
  }
}

export const db = new DatabaseManager();
