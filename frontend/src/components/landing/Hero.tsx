'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { brand } from '@/config/brand';

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-primary" />
              Discover experiences beyond the ordinary
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            Book Real-Life{' '}
            <span className="gradient-text">Experiences</span>{' '}
            with Amazing People
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
          >
            {brand.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass mx-auto mt-10 max-w-2xl rounded-2xl p-2 shadow-xl"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3">
                <Search className="h-5 w-5 text-muted" />
                <input
                  type="text"
                  placeholder="Search experiences..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
                />
              </div>
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3">
                <MapPin className="h-5 w-5 text-muted" />
                <input
                  type="text"
                  placeholder="Location"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
                />
              </div>
              <div className="hidden items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3 md:flex">
                <Calendar className="h-5 w-5 text-muted" />
                <input
                  type="text"
                  placeholder="Date"
                  className="w-24 bg-transparent text-sm outline-none placeholder:text-muted"
                />
              </div>
              <button className="gradient-bg flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25">
                Search
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#experiences"
              className="gradient-bg inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-opacity hover:opacity-90"
            >
              Explore Experiences
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/become-host"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Start Hosting
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400', label: 'Farm Weekends' },
            { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400', label: 'Fitness' },
            { src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400', label: 'Photography' },
            { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87b765?w=400', label: 'Cooking' },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`card-hover relative overflow-hidden rounded-2xl ${i % 2 === 1 ? 'md:mt-8' : ''}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
