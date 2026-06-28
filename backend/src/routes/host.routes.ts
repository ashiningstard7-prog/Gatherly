import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma.js';
import { asyncHandler, AppError } from '../middleware/errorHandler.js';
import { requireAuth, requireMinRole } from '../middleware/auth.js';
import { UserRole } from '@prisma/client';

const router = Router();

router.use(requireAuth);
router.use(requireMinRole(UserRole.HOST));

router.get(
  '/dashboard',
  asyncHandler(async (req: Request, res: Response) => {
    const hostProfile = await prisma.hostProfile.findUnique({
      where: { userId: req.user!.id },
      include: {
        user: { select: { displayName: true, avatar: true, email: true } },
      },
    });

    const experiences = await prisma.experience.count({
      where: { hostId: req.user!.id },
    });

    const recentBookings = await prisma.booking.findMany({
      where: { experience: { hostId: req.user!.id } },
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { displayName: true, avatar: true } },
        experience: { select: { title: true } },
      },
    });

    res.json({
      success: true,
      data: {
        profile: hostProfile,
        stats: {
          totalExperiences: experiences,
          totalBookings: hostProfile?.totalBookings ?? 0,
          totalRevenue: hostProfile?.totalRevenue ?? 0,
          averageRating: hostProfile?.averageRating ?? 0,
        },
        recentBookings,
      },
    });
  })
);

router.get(
  '/experiences',
  asyncHandler(async (req: Request, res: Response) => {
    const experiences = await prisma.experience.findMany({
      where: { hostId: req.user!.id },
      orderBy: { updatedAt: 'desc' },
      include: {
        categories: { include: { category: true } },
        _count: { select: { bookings: true, reviews: true } },
      },
    });
    res.json({ success: true, data: experiences });
  })
);

router.get(
  '/bookings',
  asyncHandler(async (req: Request, res: Response) => {
    const bookings = await prisma.booking.findMany({
      where: { experience: { hostId: req.user!.id } },
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { id: true, displayName: true, email: true, avatar: true } },
        experience: { select: { title: true, coverImage: true } },
        schedule: true,
        payment: true,
      },
    });
    res.json({ success: true, data: bookings });
  })
);

export default router;
