'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, BadgeCheck, ArrowRight } from 'lucide-react';
import { MOCK_CREATORS } from '@/lib/mock-data';

export function FeaturedCreators() {
  return (
    <section className="bg-secondary/30 py-24" id="creators">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Featured Creators
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Learn from the best
            </h2>
            <p className="mt-2 max-w-lg text-muted">
              Verified hosts, creators, and experts ready to share their passion with you.
            </p>
          </div>
          <Link href="/creators" className="text-sm font-medium text-primary hover:underline">
            View all creators →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_CREATORS.map((creator, i) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <img
                  src={creator.user.avatar}
                  alt={creator.user.displayName}
                  className="h-16 w-16 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{creator.user.displayName}</h3>
                    {creator.isSuperhost && (
                      <BadgeCheck className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted">{creator.tagline}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted line-clamp-2">{creator.user.bio}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">{creator.averageRating}</span>
                  <span className="text-sm text-muted">· {creator.totalBookings} bookings</span>
                </div>
                <Link
                  href={`/creators/${creator.id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
