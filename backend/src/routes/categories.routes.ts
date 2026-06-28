import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma.js';
import { asyncHandler, AppError, validateBody } from '../middleware/errorHandler.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    const categories = await prisma.category.findMany({
      where: { isActive: true, parentId: null },
      include: {
        children: { where: { isActive: true }, orderBy: { sortOrder: 'asc' } },
        _count: { select: { experiences: true } },
      },
      orderBy: { sortOrder: 'asc' },
    });
    res.json({ success: true, data: categories });
  })
);

router.get(
  '/featured',
  asyncHandler(async (_req: Request, res: Response) => {
    const categories = await prisma.category.findMany({
      where: { isActive: true, isFeatured: true },
      take: 12,
      orderBy: { sortOrder: 'asc' },
    });
    res.json({ success: true, data: categories });
  })
);

router.get(
  '/:slug',
  asyncHandler(async (req: Request, res: Response) => {
    const slug = String(req.params.slug);
    const category = await prisma.category.findUnique({
      where: { slug },
      include: {
        children: { where: { isActive: true } },
        experiences: {
          include: {
            experience: {
              include: {
                host: { select: { id: true, displayName: true, avatar: true } },
              },
            },
          },
        },
      },
    });
    if (!category) throw new AppError(404, 'Category not found');
    res.json({ success: true, data: category });
  })
);

export default router;
