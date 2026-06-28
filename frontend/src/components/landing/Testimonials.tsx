'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { MOCK_TESTIMONIALS } from '@/lib/mock-data';

export function Testimonials() {
  return (
    <section className="py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Loved by thousands of adventurers
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {MOCK_TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass card-hover rounded-2xl p-6"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-muted leading-relaxed">&ldquo;{t.comment}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.user.displayName.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.user.displayName}</p>
                  <p className="text-xs text-muted">{t.experience.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
