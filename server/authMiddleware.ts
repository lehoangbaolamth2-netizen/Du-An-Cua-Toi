import { Request, Response, NextFunction } from 'express';
import { db, DbUser, DbSession } from './db.js';

export interface AuthenticatedRequest extends Request {
  user?: DbUser;
  session?: DbSession;
}

export function extractBearerToken(req: Request): string | null {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const parts = authHeader.split(' ');
    if (parts.length === 2 && parts[0].toLowerCase() === 'bearer') {
      return parts[1];
    }
  }

  // Also extract from cookie if present
  const cookieHeader = req.headers.cookie;
  if (cookieHeader) {
    const match = cookieHeader.match(/(?:^|;\s*)nihongo_session=([^;]+)/);
    if (match && match[1]) {
      return decodeURIComponent(match[1]);
    }
  }

  return null;
}

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const token = extractBearerToken(req);
  if (!token) {
    return res.status(401).json({
      error: 'UNAUTHORIZED',
      message: 'Yêu cầu đăng nhập. Phiên làm việc không tồn tại hoặc đã hết hạn.'
    });
  }

  const sessionData = db.getSession(token);
  if (!sessionData) {
    return res.status(401).json({
      error: 'INVALID_SESSION',
      message: 'Phiên đăng nhập không hợp lệ hoặc tài khoản đã bị khóa.'
    });
  }

  const { session, user } = sessionData;

  if (user.status === 'suspended') {
    return res.status(403).json({
      error: 'ACCOUNT_SUSPENDED',
      message: 'Tài khoản của bạn hiện đang bị tạm ngưng hoạt động bởi Ban Quản Trị.'
    });
  }

  if (user.status === 'banned') {
    return res.status(403).json({
      error: 'ACCOUNT_BANNED',
      message: 'Tài khoản của bạn đã bị cấm vĩnh viễn do vi phạm chính sách sử dụng.'
    });
  }

  req.user = user;
  req.session = session;
  next();
}

export function requireAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  requireAuth(req, res, () => {
    if (!req.user) {
      return res.status(401).json({ error: 'UNAUTHORIZED', message: 'Yêu cầu đăng nhập quyền Quản trị viên.' });
    }

    if (req.user.role !== 'admin' && req.user.role !== 'superadmin') {
      // Log unauthorized attempt to audit log for security
      db.addAuditLog({
        admin_id: req.user.id,
        admin_email: req.user.email,
        action: 'UNAUTHORIZED_ACCESS_ATTEMPT',
        target_type: 'security',
        target_id: req.path,
        reason: `Người dùng quyền '${req.user.role}' cố gắng truy cập trái phép API Quản trị ${req.method} ${req.path}`,
        ip: req.ip || (req.headers['x-forwarded-for'] as string) || '127.0.0.1',
        device: req.headers['user-agent'] || 'Unknown',
        result: 'FAILED',
      });

      return res.status(403).json({
        error: 'FORBIDDEN',
        message: 'Truy cập bị từ chối! Bạn không có quyền Quản trị viên (Admin) để thực hiện thao tác này.'
      });
    }

    next();
  });
}

export function requireSuperAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  requireAuth(req, res, () => {
    if (!req.user || req.user.role !== 'superadmin') {
      return res.status(403).json({
        error: 'FORBIDDEN_SUPERADMIN_ONLY',
        message: 'Thao tác chỉ dành riêng cho Chủ Quản Hệ Thống (Super Admin) cao nhất.'
      });
    }
    next();
  });
}
