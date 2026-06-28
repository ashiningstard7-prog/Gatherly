import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma.js';
import { asyncHandler, AppError, validateBody } from '../middleware/errorHandler.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 12;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = { status: 'PUBLISHED' };
    if (req.query.category) {
      where.categories = { some: { category: { slug: req.query.category } } };
    }
    if (req.query.hostId) where.hostId = req.query.hostId;

    const [experiences, total] = await Promise.all([
      prisma.experience.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          host: {
            select: {
              id: true,
              displayName: true,
              firstName: true,
              lastName: true,
              avatar: true,
              hostProfile: { select: { isSuperhost: true, averageRating: true } },
            },
          },
          categories: { include: { category: true } },
        },
      }),
      prisma.experience.count({ where }),
    ]);

    res.json({
      success: true,
      data: experiences,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  })
);

router.get(
  '/:slug',
  asyncHandler(async (req: Request, res: Response) => {
    const slug = String(req.params.slug);
    const experience = await prisma.experience.findUnique({
      where: { slug },
      include: {
        host: {
          select: {
            id: true,
            displayName: true,
            firstName: true,
            lastName: true,
            avatar: true,
            bio: true,
            hostProfile: true,
            farmerProfile: true,
          },
        },
        categories: { include: { category: true } },
        schedules: {
          where: { startTime: { gte: new Date() }, isCancelled: false },
          orderBy: { startTime: 'asc' },
          take: 20,
        },
        reviews: {
          take: 10,
          orderBy: { createdAt: 'desc' },
          include: {
            user: { select: { id: true, displayName: true, avatar: true } },
          },
        },
        farmActivity: true,
      },
    });

    if (!experience) throw new AppError(404, 'Experience not found');

    await prisma.experience.update({
      where: { id: experience.id },
      data: { viewCount: { increment: 1 } },
    });

    res.json({ success: true, data: experience });
  })
);

const bookingSchema = z.object({
  scheduleId: z.string(),
  participants: z.number().min(1).default(1),
  specialRequests: z.string().optional(),
  couponCode: z.string().optional(),
});

router.post(
  '/:id/book',
  requireAuth,
  validateBody(bookingSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const experience = await prisma.experience.findUnique({
      where: { id },
      include: { schedules: true },
    });
    if (!experience) throw new AppError(404, 'Experience not found');

    const schedule = await prisma.experienceSchedule.findUnique({
      where: { id: req.body.scheduleId },
    });
    if (!schedule || schedule.experienceId !== experience.id) {
      throw new AppError(400, 'Invalid schedule');
    }
    if (schedule.spotsBooked + req.body.participants > schedule.spotsTotal) {
      throw new AppError(400, 'Not enough spots available');
    }

    const subtotal = Number(experience.price) * req.body.participants;
    const bookingNumber = `GL-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

    const booking = await prisma.$transaction(async (tx) => {
      const newBooking = await tx.booking.create({
        data: {
          bookingNumber,
          userId: req.user!.id,
          experienceId: experience.id,
          scheduleId: schedule.id,
          participants: req.body.participants,
          subtotal,
          total: subtotal,
          specialRequests: req.body.specialRequests,
          qrCode: `QR-${bookingNumber}`,
          status: 'PENDING',
        },
        include: { experience: true, schedule: true },
      });

      await tx.experienceSchedule.update({
        where: { id: schedule.id },
        data: { spotsBooked: { increment: req.body.participants } },
      });

      return newBooking;
    });

    res.status(201).json({ success: true, data: booking });
  })
);

export default router;
