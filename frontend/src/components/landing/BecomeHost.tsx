'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export function BecomeHost() {
  return (
    <section className="py-24" id="become-host">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-bg relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Share your passion. Earn on your terms.
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Whether you&apos;re a fitness trainer, farmer, photographer, or chef — turn your skills
              into unforgettable experiences and build your creator business on Gatherly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/become-host"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg transition-opacity hover:opacity-90"
              >
                Start Hosting Today
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/host/dashboard"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Host Dashboard
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-xl px-6 text-center md:px-8">
        <Mail className="mx-auto h-8 w-8 text-primary" />
        <h3 className="mt-4 text-2xl font-bold">Stay in the loop</h3>
        <p className="mt-2 text-muted">
          Get the latest experiences, farm weekends, and creator spotlights in your inbox.
        </p>
        {submitted ? (
          <p className="mt-6 text-sm font-medium text-green-600">
            Thanks for subscribing! Check your inbox soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="glass flex-1 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="gradient-bg rounded-xl px-6 py-3 text-sm font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
