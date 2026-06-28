'use client';

import Link from 'next/link';
import {
  LayoutDashboard, Users, Shield, DollarSign, FileText,
  Bell, Settings, AlertTriangle,
} from 'lucide-react';
import { brand } from '@/config/brand';

const SIDEBAR_LINKS = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard', active: true },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: Shield, label: 'Approvals', href: '/admin/approvals' },
  { icon: DollarSign, label: 'Payments', href: '/admin/payments' },
  { icon: FileText, label: 'CMS', href: '/admin/cms' },
  { icon: Bell, label: 'Notifications', href: '/admin/notifications' },
  { icon: AlertTriangle, label: 'Fraud Detection', href: '/admin/fraud' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 border-r border-border bg-card p-6 md:block">
        <Link href="/" className="flex items-center gap-2">
          <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg">
            <span className="text-sm font-bold text-white">G</span>
          </div>
          <span className="font-bold">{brand.name}</span>
        </Link>
        <p className="mt-1 text-xs text-muted">Admin Panel</p>

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
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-muted">Platform overview and management</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Users', value: '12,450' },
            { label: 'Active Hosts', value: '850' },
            { label: 'Pending Approvals', value: '23', alert: true },
            { label: 'Total Revenue', value: '$1.2M' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5">
              <p className={`text-2xl font-bold ${stat.alert ? 'text-amber-600' : ''}`}>
                {stat.value}
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h2 className="font-bold">Pending Host Approvals</h2>
            <div className="mt-4 space-y-3">
              {[
                { name: 'Alex Turner', type: 'Fitness Trainer', date: '2 days ago' },
                { name: 'Maria Santos', type: 'Chef', date: '1 day ago' },
                { name: 'David Kim', type: 'Photographer', date: '5 hours ago' },
              ].map((h) => (
                <div key={h.name} className="flex items-center justify-between rounded-xl bg-secondary/50 p-3">
                  <div>
                    <p className="text-sm font-medium">{h.name}</p>
                    <p className="text-xs text-muted">{h.type} · {h.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-lg bg-green-600 px-3 py-1 text-xs font-medium text-white">
                      Approve
                    </button>
                    <button className="rounded-lg bg-red-100 px-3 py-1 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="font-bold">Recent Activity</h2>
            <div className="mt-4 space-y-3">
              {[
                { action: 'New host registration', user: 'Alex Turner', time: '2h ago' },
                { action: 'Experience submitted for review', user: 'Sarah Chen', time: '4h ago' },
                { action: 'Refund processed', user: 'Emma Wilson', time: '6h ago' },
                { action: 'Farmer profile approved', user: 'Raj Patel', time: '1d ago' },
              ].map((a) => (
                <div key={a.action + a.time} className="border-b border-border pb-3 last:border-0">
                  <p className="text-sm font-medium">{a.action}</p>
                  <p className="text-xs text-muted">{a.user} · {a.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
