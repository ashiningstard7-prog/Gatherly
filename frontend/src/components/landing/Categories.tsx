'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Dumbbell, Wheat, ChefHat, Camera, Mountain, Music,
  Sparkles, Home, Code, Heart, Palette, Gamepad2,
} from 'lucide-react';
import { MOCK_CATEGORIES } from '@/lib/mock-data';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  dumbbell: Dumbbell,
  wheat: Wheat,
  'chef-hat': ChefHat,
  camera: Camera,
  mountain: Mountain,
  music: Music,
  sparkles: Sparkles,
  home: Home,
  code: Code,
  heart: Heart,
  palette: Palette,
  'gamepad-2': Gamepad2,
};

export function Categories() {
  const categories = MOCK_CATEGORIES.filter((c) => c.isFeatured);

  return (
    <section className="py-24" id="categories">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Categories
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Explore by interest
            </h2>
            <p className="mt-2 max-w-lg text-muted">
              From fitness to farming, find experiences that match your passions.
            </p>
          </div>
          <Link
            href="/categories"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all categories →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] ?? Sparkles;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  href={`/categories/${cat.slug}`}
                  className="glass card-hover group flex flex-col items-center rounded-2xl p-6 text-center"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}20` }}
                  >
                    <Icon className="h-7 w-7" style={{ color: cat.color }} />
                  </div>
                  <span className="mt-3 text-sm font-semibold">{cat.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
