'use client';

import { motion } from 'framer-motion';
import { Search, CalendarCheck, Star, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    description: 'Browse thousands of experiences by category, location, date, or let AI recommend the perfect match for you.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Book',
    description: 'Choose your date, pay securely with Stripe or Razorpay, and receive an instant QR ticket for check-in.',
  },
  {
    icon: Star,
    step: '03',
    title: 'Experience',
    description: 'Show up, check in with GPS or QR, enjoy your experience, and share your review with the community.',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-secondary/30 py-24" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Three steps to your next adventure
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < STEPS.length - 1 && (
                <div className="absolute top-12 left-[60%] hidden h-0.5 w-[80%] bg-border md:block" />
              )}
              <div className="glass mx-auto flex h-24 w-24 items-center justify-center rounded-2xl">
                <step.icon className="h-10 w-10 text-primary" />
              </div>
              <span className="mt-6 block text-sm font-bold text-primary">{step.step}</span>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
