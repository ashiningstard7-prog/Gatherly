'use client';

import Link from 'next/link';
import {
  LayoutDashboard, Wheat, Calendar, Users, DollarSign,
  TreePine, Settings, Plus,
} from 'lucide-react';
import { brand } from '@/config/brand';

const SIDEBAR_LINKS = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/farmer/dashboard', active: true },
  { icon: Wheat, label: 'Farm Activities', href: '/farmer/activities' },
  { icon: Calendar, label: 'Booking Calendar', href: '/farmer/calendar' },
  { icon: TreePine, label: 'Harvest Tracking', href: '/farmer/harvest' },
  { icon: Users, label: 'Visitors', href: '/farmer/visitors' },
  { icon: DollarSign, label: 'Revenue', href: '/farmer/revenue' },
  { icon: Settings, label: 'Settings', href: '/farmer/settings' },
];

export default function FarmerDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 border-r border-border bg-card p-6 md:block">
        <Link href="/" className="flex items-center gap-2">
          <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg">
            <span className="text-sm font-bold text-white">G</span>
          </div>
          <span className="font-bold">{brand.name}</span>
        </Link>
        <p className="mt-1 text-xs text-muted">Farmer Dashboard</p>

        <nav className="mt-8 space-y-1">
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                link.active
                  ? 'bg-green-600/10 text-green-700 dark:text-green-400'
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
            <h1 className="text-2xl font-bold">Green Valley Organic Farm</h1>
            <p className="text-muted">Amritsar, Punjab, India · 50 acres</p>
          </div>
          <Link
            href="/farmer/activities/new"
            className="rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white"
          >
            + New Activity
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Visitors', value: '890' },
            { label: 'Revenue', value: '₹4,45,000' },
            { label: 'Avg Rating', value: '4.95' },
            { label: 'Upcoming Bookings', value: '12' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h2 className="font-bold">Farm Activities</h2>
            <div className="mt-4 space-y-3">
              {[
                { name: 'Weekend Farming Experience', price: '$149', guests: 20 },
                { name: 'Seasonal Fruit Picking', price: '$35', guests: 15 },
                { name: 'Animal Care & Cow Feeding', price: '$25', guests: 10 },
                { name: 'Farm Camping Under Stars', price: '$75', guests: 12 },
              ].map((a) => (
                <div key={a.name} className="flex items-center justify-between rounded-xl bg-secondary/50 p-3">
                  <div>
                    <p className="text-sm font-medium">{a.name}</p>
                    <p className="text-xs text-muted">Max {a.guests} guests</p>
                  </div>
                  <span className="text-sm font-bold text-green-600">{a.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="font-bold">Season Availability</h2>
            <div className="mt-4 space-y-3">
              {[
                { season: 'Spring', crops: 'Wheat, Mustard', status: 'Active' },
                { season: 'Monsoon', crops: 'Rice', status: 'Active' },
                { season: 'Winter', crops: 'Vegetables, Fruits', status: 'Active' },
              ].map((s) => (
                <div key={s.season} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                  <div>
                    <p className="text-sm font-medium">{s.season}</p>
                    <p className="text-xs text-muted">{s.crops}</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
