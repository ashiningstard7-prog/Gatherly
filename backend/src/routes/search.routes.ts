import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma.js';
import { asyncHandler, validateQuery } from '../middleware/errorHandler.js';

const router = Router();

const searchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  city: z.string().optional(),
  lat: z.coerce.number().optional(),
  lng: z.coerce.number().optional(),
  radius: z.coerce.number().optional().default(50),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  minRating: z.coerce.number().optional(),
  difficulty: z.string().optional(),
  hostType: z.string().optional(),
  isFarm: z.coerce.boolean().optional(),
  featured: z.coerce.boolean().optional(),
  sort: z.enum(['popular', 'rating', 'price_asc', 'price_desc', 'newest']).optional().default('popular'),
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().optional().default(12),
});

router.get(
  '/',
  validateQuery(searchSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as z.infer<typeof searchSchema>;
    const skip = (query.page - 1) * query.limit;

    const where: Record<string, unknown> = {
      status: 'PUBLISHED',
    };

    if (query.q) {
      where.OR = [
        { title: { contains: query.q, mode: 'insensitive' } },
        { description: { contains: query.q, mode: 'insensitive' } },
        { tags: { has: query.q.toLowerCase() } },
        { city: { contains: query.q, mode: 'insensitive' } },
      ];
    }

    if (query.city) where.city = { contains: query.city, mode: 'insensitive' };
    if (query.minPrice) where.price = { ...(where.price as object), gte: query.minPrice };
    if (query.maxPrice) where.price = { ...(where.price as object), lte: query.maxPrice };
    if (query.minRating) where.averageRating = { gte: query.minRating };
    if (query.difficulty) where.difficulty = query.difficulty;
    if (query.hostType) where.hostType = query.hostType;
    if (query.isFarm) where.isFarmExperience = true;
    if (query.featured) where.isFeatured = true;

    if (query.category) {
      where.categories = {
        some: { category: { slug: query.category } },
      };
    }

    const orderBy = {
      popular: [{ totalBookings: 'desc' as const }, { viewCount: 'desc' as const }],
      rating: [{ averageRating: 'desc' as const }],
      price_asc: [{ price: 'asc' as const }],
      price_desc: [{ price: 'desc' as const }],
      newest: [{ publishedAt: 'desc' as const }],
    }[query.sort];

    const [experiences, total] = await Promise.all([
      prisma.experience.findMany({
        where,
        skip,
        take: query.limit,
        orderBy,
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
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    });
  })
);

router.get(
  '/featured',
  asyncHandler(async (_req: Request, res: Response) => {
    const experiences = await prisma.experience.findMany({
      where: { status: 'PUBLISHED', isFeatured: true },
      take: 8,
      orderBy: { totalBookings: 'desc' },
      include: {
        host: {
          select: { id: true, displayName: true, avatar: true },
        },
        categories: { include: { category: true } },
      },
    });
    res.json({ success: true, data: experiences });
  })
);

router.get(
  '/trending',
  asyncHandler(async (_req: Request, res: Response) => {
    const experiences = await prisma.experience.findMany({
      where: { status: 'PUBLISHED' },
      take: 8,
      orderBy: [{ viewCount: 'desc' }, { totalBookings: 'desc' }],
      include: {
        host: { select: { id: true, displayName: true, avatar: true } },
        categories: { include: { category: true } },
      },
    });
    res.json({ success: true, data: experiences });
  })
);

router.get(
  '/farms',
  asyncHandler(async (_req: Request, res: Response) => {
    const farms = await prisma.experience.findMany({
      where: { status: 'PUBLISHED', isFarmExperience: true },
      take: 6,
      orderBy: { averageRating: 'desc' },
      include: {
        host: {
          select: {
            id: true,
            displayName: true,
            avatar: true,
            farmerProfile: true,
          },
        },
        categories: { include: { category: true } },
      },
    });
    res.json({ success: true, data: farms });
  })
);

export default router;
