import { Request, Response, NextFunction } from 'express';
import { UserRole } from '@prisma/client';
import { AppError } from './errorHandler.js';

export interface AuthUser {
  id: string;
  clerkId?: string;
  email: string;
  role: UserRole;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

const ROLE_HIERARCHY: Record<UserRole, number> = {
  GUEST: 0,
  USER: 1,
  CREATOR: 2,
  HOST: 3,
  FARMER: 3,
  CELEBRITY: 4,
  BUSINESS: 4,
  ADMIN: 5,
  SUPER_ADMIN: 6,
};

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  if (!req.user) {
    return next(new AppError(401, 'Authentication required'));
  }
  next();
}

export function requireRole(...roles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError(401, 'Authentication required'));
    }
    if (!roles.includes(req.user.role)) {
      return next(new AppError(403, 'Insufficient permissions'));
    }
    next();
  };
}

export function requireMinRole(minRole: UserRole) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError(401, 'Authentication required'));
    }
    if (ROLE_HIERARCHY[req.user.role] < ROLE_HIERARCHY[minRole]) {
      return next(new AppError(403, 'Insufficient permissions'));
    }
    next();
  };
}

// Dev auth middleware - attaches mock user when Clerk is not configured
export function devAuthMiddleware(req: Request, _res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith('Bearer dev-')) {
    const role = authHeader.replace('Bearer dev-', '').toUpperCase() as UserRole;
    req.user = {
      id: 'dev-user-id',
      email: 'dev@gatherly.app',
      role: Object.values(UserRole).includes(role) ? role : UserRole.USER,
    };
  }
  next();
}
