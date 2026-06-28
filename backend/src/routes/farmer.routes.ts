import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { requireAuth, requireMinRole } from '../middleware/auth.js';
import { UserRole } from '@prisma/client';

const router = Router();

router.use(requireAuth);
router.use(requireMinRole(UserRole.FARMER));

router.get(
  '/dashboard',
  asyncHandler(async (req: Request, res: Response) => {
    const farmerProfile = await prisma.farmerProfile.findUnique({
      where: { userId: req.user!.id },
      include: {
        farmActivities: true,
        harvestRecords: { take: 5, orderBy: { harvestDate: 'desc' } },
        user: { select: { displayName: true, avatar: true, email: true } },
      },
    });

    res.json({ success: true, data: farmerProfile });
  })
);

router.get(
  '/activities',
  asyncHandler(async (req: Request, res: Response) => {
    const profile = await prisma.farmerProfile.findUnique({
      where: { userId: req.user!.id },
    });
    if (!profile) {
      res.json({ success: true, data: [] });
      return;
    }

    const activities = await prisma.farmActivity.findMany({
      where: { farmerProfileId: profile.id },
      include: { experience: true },
    });
    res.json({ success: true, data: activities });
  })
);

export default router;
