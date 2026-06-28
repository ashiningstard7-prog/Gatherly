import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { requireAuth, requireMinRole } from '../middleware/auth.js';
import { UserRole } from '@prisma/client';

const router = Router();

router.use(requireAuth);
router.use(requireMinRole(UserRole.ADMIN));

router.get(
  '/dashboard',
  asyncHandler(async (_req: Request, res: Response) => {
    const [
      totalUsers,
      totalHosts,
      totalFarmers,
      pendingHosts,
      pendingExperiences,
      totalBookings,
      totalRevenue,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.hostProfile.count(),
      prisma.farmerProfile.count(),
      prisma.hostProfile.count({ where: { verificationStatus: 'PENDING' } }),
      prisma.experience.count({ where: { status: 'PENDING_REVIEW' } }),
      prisma.booking.count(),
      prisma.booking.aggregate({ _sum: { total: true } }),
    ]);

    res.json({
      success: true,
      data: {
        users: totalUsers,
        hosts: totalHosts,
        farmers: totalFarmers,
        pendingHosts,
        pendingExperiences,
        bookings: totalBookings,
        revenue: totalRevenue._sum.total ?? 0,
      },
    });
  })
);

router.get(
  '/users',
  asyncHandler(async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          displayName: true,
          role: true,
          status: true,
          createdAt: true,
        },
      }),
      prisma.user.count(),
    ]);

    res.json({
      success: true,
      data: users,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  })
);

router.get(
  '/pending-hosts',
  asyncHandler(async (_req: Request, res: Response) => {
    const hosts = await prisma.hostProfile.findMany({
      where: { verificationStatus: 'PENDING' },
      include: {
        user: { select: { id: true, email: true, displayName: true, avatar: true } },
      },
    });
    res.json({ success: true, data: hosts });
  })
);

router.patch(
  '/hosts/:id/approve',
  asyncHandler(async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const host = await prisma.hostProfile.update({
      where: { id },
      data: {
        verificationStatus: 'VERIFIED',
        approvedAt: new Date(),
        approvedById: req.user!.id,
      },
    });
    res.json({ success: true, data: host });
  })
);

export default router;
