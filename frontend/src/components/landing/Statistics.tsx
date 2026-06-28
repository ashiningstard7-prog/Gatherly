'use client';

import { motion } from 'framer-motion';
import { MOCK_STATS } from '@/lib/mock-data';

const STAT_ITEMS = [
  { key: 'experiences', label: 'Experiences' },
  { key: 'hosts', label: 'Hosts & Creators' },
  { key: 'cities', label: 'Cities' },
  { key: 'bookings', label: 'Bookings' },
  { key: 'rating', label: 'Avg Rating' },
  { key: 'countries', label: 'Countries' },
] as const;

export function Statistics() {
  return (
    <section className="gradient-bg py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {STAT_ITEMS.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-white md:text-4xl">
                {MOCK_STATS[item.key]}
              </p>
              <p className="mt-1 text-sm text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
