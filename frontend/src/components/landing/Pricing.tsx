'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export function Pricing() {
  return (
    <section className="py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Plans for every host
          </h2>
          <p className="mt-4 text-muted">
            Start free and upgrade as you grow. No hidden fees.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'card-hover relative rounded-2xl p-8',
                plan.popular
                  ? 'gradient-bg text-white shadow-xl shadow-indigo-500/25'
                  : 'glass'
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-primary">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className={cn('mt-1 text-sm', plan.popular ? 'text-white/80' : 'text-muted')}>
                {plan.description}
              </p>
              <div className="mt-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={cn('text-sm', plan.popular ? 'text-white/70' : 'text-muted')}>
                  /month
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className={cn('h-4 w-4 shrink-0', plan.popular ? 'text-white' : 'text-primary')} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/become-host"
                className={cn(
                  'mt-8 block rounded-xl py-3 text-center text-sm font-medium transition-opacity hover:opacity-90',
                  plan.popular
                    ? 'bg-white text-primary'
                    : 'gradient-bg text-white'
                )}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
