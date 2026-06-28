'use client';

import { motion } from 'framer-motion';
import {
  Shield, Sparkles, MapPin, CreditCard, MessageCircle,
  Star, QrCode, Brain, Users, Globe,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Globe,
    title: 'Discover Anywhere',
    description: 'Find unique experiences in 120+ cities across 35 countries, from urban adventures to rural farm retreats.',
  },
  {
    icon: Shield,
    title: 'Verified & Safe',
    description: 'Every host is identity-verified with KYC, GPS check-in, QR tickets, and 24/7 live support.',
  },
  {
    icon: Brain,
    title: 'AI Recommendations',
    description: 'Smart matching learns your preferences to suggest experiences you\'ll love.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Stripe & Razorpay with escrow protection, automatic refunds, and wallet support.',
  },
  {
    icon: QrCode,
    title: 'Instant Booking',
    description: 'Book in seconds with QR tickets, calendar sync, and real-time availability.',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Message hosts directly before and after booking for a seamless experience.',
  },
  {
    icon: Star,
    title: 'Reviews & Ratings',
    description: 'Transparent reviews from verified guests help you choose with confidence.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Follow creators, share experiences, earn badges, and join a vibrant community.',
  },
];

export function Features() {
  return (
    <section className="py-24" id="features">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Why Gatherly
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold tracking-tight md:text-5xl"
          >
            Everything you need for{' '}
            <span className="gradient-text">unforgettable experiences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted"
          >
            A premium platform built for discovery, booking, and hosting — all in one place.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="gradient-bg flex h-12 w-12 items-center justify-center rounded-xl">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
