import Link from 'next/link';
import { ArrowLeft, Star, MapPin, Clock, Users, Shield, Check } from 'lucide-react';
import { MOCK_EXPERIENCES } from '@/lib/mock-data';
import { formatPrice, formatDuration } from '@/lib/utils';
import { brand } from '@/config/brand';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = MOCK_EXPERIENCES.find((e) => e.slug === slug) ?? MOCK_EXPERIENCES[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-4">
          <Link href="/" className="text-muted hover:text-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Link href="/" className="font-bold">{brand.name}</Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={experience.coverImage}
                alt={experience.title}
                className="aspect-video w-full object-cover"
              />
            </div>

            <h1 className="mt-6 text-3xl font-bold">{experience.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {experience.averageRating} ({experience.totalReviews} reviews)
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatDuration(experience.duration, experience.durationUnit)}
              </span>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold">About this experience</h2>
              <p className="mt-3 leading-relaxed text-muted">
                {experience.shortDescription}. Join {experience.host.displayName} for an unforgettable
                experience. All skill levels welcome. Materials and equipment provided where applicable.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold">What&apos;s included</h2>
              <ul className="mt-3 space-y-2">
                {['Professional guidance', 'All materials & equipment', 'Refreshments', 'Certificate of completion'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <Check className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="glass sticky top-8 rounded-2xl p-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">
                  {formatPrice(experience.price, experience.currency)}
                </span>
                <span className="text-muted">/ person</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-secondary/50 p-3">
                  <label className="text-xs font-medium text-muted">Date</label>
                  <input type="date" className="mt-1 w-full bg-transparent text-sm outline-none" />
                </div>
                <div className="rounded-xl bg-secondary/50 p-3">
                  <label className="text-xs font-medium text-muted">Guests</label>
                  <select className="mt-1 w-full bg-transparent text-sm outline-none">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="gradient-bg mt-6 w-full rounded-xl py-3 text-sm font-semibold text-white">
                Book Now
              </button>

              <p className="mt-3 text-center text-xs text-muted">
                Free cancellation up to 48 hours before
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                {experience.host.avatar && (
                  <img
                    src={experience.host.avatar}
                    alt={experience.host.displayName}
                    className="h-12 w-12 rounded-xl object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold">{experience.host.displayName}</p>
                  <p className="text-xs text-muted">Verified Host</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                <Shield className="h-4 w-4" />
                Identity verified · GPS check-in · QR ticket
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
