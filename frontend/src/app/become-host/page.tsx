import Link from 'next/link';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import { brand } from '@/config/brand';

export default function BecomeHostPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center gap-4">
          <Link href="/" className="text-muted hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <span className="font-bold">{brand.name}</span>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-center">
          <Sparkles className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-4 text-4xl font-bold">Become a Host on {brand.name}</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Share your passion, skills, or farm with the world. Join 850+ creators earning on their own terms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { step: '1', title: 'Create Profile', desc: 'Sign up and complete identity verification' },
            { step: '2', title: 'List Experience', desc: 'Add photos, pricing, and availability' },
            { step: '3', title: 'Start Earning', desc: 'Get approved and receive bookings' },
          ].map((s) => (
            <div key={s.step} className="glass rounded-2xl p-6 text-center">
              <span className="gradient-bg inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        <form className="glass mx-auto mt-12 max-w-lg rounded-2xl p-8">
          <h2 className="text-xl font-bold">Get started</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input type="text" className="mt-1 w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-sm font-medium">Host Type</label>
              <select className="mt-1 w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50">
                <option>Individual / Creator</option>
                <option>Farmer</option>
                <option>Business</option>
                <option>Community</option>
              </select>
            </div>
          </div>
          <button type="submit" className="gradient-bg mt-6 w-full rounded-xl py-3 text-sm font-semibold text-white">
            Continue to Verification
          </button>
        </form>

        <ul className="mx-auto mt-8 max-w-lg space-y-2">
          {['Free to list your first 2 experiences', 'Secure payments via Stripe & Razorpay', 'Dedicated host support', 'Analytics & performance insights'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted">
              <Check className="h-4 w-4 text-green-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
