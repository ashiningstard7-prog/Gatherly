'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Wheat, TreePine, Tractor, Flame, ArrowRight, Leaf,
} from 'lucide-react';

const FARM_FEATURES = [
  { icon: Wheat, label: 'Plant & Harvest' },
  { icon: Tractor, label: 'Tractor Rides' },
  { icon: TreePine, label: 'Tree Plantation' },
  { icon: Flame, label: 'Bonfire Nights' },
  { icon: Leaf, label: 'Organic Workshops' },
];

export function FarmWeekends() {
  return (
    <section className="relative overflow-hidden py-24" id="farms">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/5 via-transparent to-emerald-950/5" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-400">
              <Leaf className="h-4 w-4" />
              Farm Weekends — Exclusive to Gatherly
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
              Escape to the countryside
            </h2>
            <p className="mt-4 text-lg text-muted">
              Book authentic farm experiences. Plant crops, harvest vegetables, milk cows,
              learn traditional cooking, camp under the stars — and take home your harvest.
              Farmers earn extra income. You get an unforgettable rural adventure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {FARM_FEATURES.map((f) => (
                <span
                  key={f.label}
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <f.icon className="h-4 w-4 text-green-600" />
                  {f.label}
                </span>
              ))}
            </div>

            <Link
              href="/experiences?category=farming"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-green-600/25 transition-opacity hover:opacity-90"
            >
              Explore Farm Weekends
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
                alt="Farm landscape"
                className="rounded-2xl object-cover aspect-square"
              />
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500"
                alt="Harvesting"
                className="rounded-2xl object-cover aspect-square mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87b765?w=500"
                alt="Fresh produce"
                className="rounded-2xl object-cover aspect-square -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1574943327769-4a64f367f678?w=500"
                alt="Rice fields"
                className="rounded-2xl object-cover aspect-square"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
