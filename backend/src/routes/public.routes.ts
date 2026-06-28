import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma.js';
import { asyncHandler, validateBody } from '../middleware/errorHandler.js';

const router = Router();

router.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    const stats = await prisma.platformStat.findMany();
    const statMap = Object.fromEntries(stats.map((s) => [s.key, s.value]));

    res.json({
      success: true,
      data: {
        experiences: statMap.experiences ?? '2,500+',
        hosts: statMap.hosts ?? '850+',
        cities: statMap.cities ?? '120+',
        bookings: statMap.bookings ?? '50,000+',
        rating: statMap.rating ?? '4.9',
        countries: statMap.countries ?? '35+',
      },
    });
  })
);

const newsletterSchema = z.object({
  email: z.string().email(),
});

router.post(
  '/newsletter',
  validateBody(newsletterSchema),
  asyncHandler(async (req: Request, res: Response) => {
    await prisma.newsletterSubscriber.upsert({
      where: { email: req.body.email },
      create: { email: req.body.email },
      update: { isActive: true },
    });
    res.json({ success: true, message: 'Subscribed successfully' });
  })
);

router.get(
  '/testimonials',
  asyncHandler(async (_req: Request, res: Response) => {
    const reviews = await prisma.review.findMany({
      where: { rating: { gte: 4 }, comment: { not: null } },
      take: 6,
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { displayName: true, firstName: true, avatar: true } },
        experience: { select: { title: true, coverImage: true } },
      },
    });
    res.json({ success: true, data: reviews });
  })
);

router.get(
  '/creators',
  asyncHandler(async (_req: Request, res: Response) => {
    const hosts = await prisma.hostProfile.findMany({
      where: { verificationStatus: 'VERIFIED' },
      take: 8,
      orderBy: [{ isSuperhost: 'desc' }, { averageRating: 'desc' }],
      include: {
        user: {
          select: {
            id: true,
            displayName: true,
            firstName: true,
            lastName: true,
            avatar: true,
            bio: true,
          },
        },
      },
    });
    res.json({ success: true, data: hosts });
  })
);

export default router;
