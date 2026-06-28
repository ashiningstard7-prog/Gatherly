'use client';

import Link from 'next/link';
import {
  LayoutDashboard, Calendar, DollarSign, Star, Users,
  Settings, Plus, TrendingUp, MessageCircle,
} from 'lucide-react';
import { brand } from '@/config/brand';

const SIDEBAR_LINKS = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/host/dashboard', active: true },
  { icon: Plus, label: 'Experiences', href: '/host/experiences' },
  { icon: Calendar, label: 'Bookings', href: '/host/bookings' },
  { icon: DollarSign, label: 'Revenue', href: '/host/revenue' },
  { icon: Star, label: 'Reviews', href: '/host/reviews' },
  { icon: MessageCircle, label: 'Messages', href: '/host/messages' },
  { icon: Settings, label: 'Settings', href: '/host/settings' },
];

const STATS = [
  { label: 'Total Revenue', value: '$12,450', change: '+12%', icon: DollarSign },
  { label: 'Bookings', value: '340', change: '+8%', icon: Calendar },
  { label: 'Avg Rating', value: '4.9', change: '+0.2', icon: Star },
  { label: 'Experiences', value: '3', change: '', icon: TrendingUp },
];

export default function HostDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 border-r border-border bg-card p-6 md:block">
        <Link href="/" className="flex items-center gap-2">
          <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg">
            <span className="text-sm font-bold text-white">G</span>
          </div>
          <span className="font-bold">{brand.name}</span>
        </Link>
        <p className="mt-1 text-xs text-muted">Host Dashboard</p>

        <nav className="mt-8 space-y-1">
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                link.active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted hover:bg-secondary hover:text-foreground'
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Sarah</h1>
            <p className="text-muted">Here&apos;s what&apos;s happening with your experiences.</p>
          </div>
          <Link
            href="/host/experiences/new"
            className="gradient-bg rounded-xl px-4 py-2 text-sm font-medium text-white"
          >
            + New Experience
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <stat.icon className="h-5 w-5 text-primary" />
                {stat.change && (
                  <span className="text-xs font-medium text-green-600">{stat.change}</span>
                )}
              </div>
              <p className="mt-3 text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h2 className="font-bold">Recent Bookings</h2>
            <div className="mt-4 space-y-4">
              {[
                { name: 'Emma Wilson', exp: 'Sunrise HIIT Bootcamp', date: 'Jun 30', status: 'Confirmed' },
                { name: 'James Park', exp: 'Sunset Yoga', date: 'Jul 2', status: 'Confirmed' },
                { name: 'Lisa Chen', exp: 'Sunrise HIIT Bootcamp', date: 'Jul 5', status: 'Pending' },
              ].map((b) => (
                <div key={b.name + b.date} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                  <div>
                    <p className="text-sm font-medium">{b.name}</p>
                    <p className="text-xs text-muted">{b.exp}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted">{b.date}</p>
                    <span className={`text-xs font-medium ${b.status === 'Confirmed' ? 'text-green-600' : 'text-amber-600'}`}>
                      {b.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="font-bold">Performance</h2>
            <div className="mt-4 space-y-4">
              {[
                { label: 'Response Rate', value: 98 },
                { label: 'Acceptance Rate', value: 95 },
                { label: 'Profile Completion', value: 85 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm">
                    <span>{m.label}</span>
                    <span className="font-medium">{m.value}%</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="gradient-bg h-full rounded-full"
                      style={{ width: `${m.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
