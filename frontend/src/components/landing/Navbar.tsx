'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Sun, Moon, Search, ChevronDown,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Categories', href: '#categories' },
  { label: 'Farm Weekends', href: '#farms' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-4 mt-4 rounded-2xl px-6 py-3 md:mx-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl">
              <span className="text-lg font-bold text-white">G</span>
            </div>
            <span className="text-xl font-bold tracking-tight">{brand.name}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleTheme}
              className="rounded-xl p-2 transition-colors hover:bg-secondary"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <Link
              href="/sign-in"
              className="rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Sign In
            </Link>
            <Link
              href="/become-host"
              className="gradient-bg rounded-xl px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-opacity hover:opacity-90"
            >
              Become a Host
            </Link>
          </div>

          <button
            className="rounded-xl p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden border-t border-border pt-4 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/sign-in" className="rounded-xl bg-secondary px-4 py-2 text-center text-sm font-medium">
                  Sign In
                </Link>
                <Link href="/become-host" className="gradient-bg rounded-xl px-4 py-2 text-center text-sm font-medium text-white">
                  Become a Host
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
