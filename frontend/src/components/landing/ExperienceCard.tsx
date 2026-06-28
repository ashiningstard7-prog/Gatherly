'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { MOCK_EXPERIENCES } from '@/lib/mock-data';
import { formatPrice, formatDuration, cn } from '@/lib/utils';

interface ExperienceCardProps {
  experience: (typeof MOCK_EXPERIENCES)[0];
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <Link
      href={`/experiences/${experience.slug}`}
      className={cn('card-hover group block overflow-hidden rounded-2xl bg-card shadow-sm', className)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={experience.coverImage}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {experience.isFeatured && (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
        {experience.isFarmExperience && (
          <span className="absolute top-3 right-3 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
            Farm
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5" />
          <span>{experience.city}</span>
          <span>·</span>
          <Clock className="h-3.5 w-3.5" />
          <span>{formatDuration(experience.duration, experience.durationUnit)}</span>
        </div>
        <h3 className="mt-2 line-clamp-2 font-semibold leading-snug group-hover:text-primary">
          {experience.title}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {experience.host.avatar && (
              <img
                src={experience.host.avatar}
                alt={experience.host.displayName}
                className="h-6 w-6 rounded-full object-cover"
              />
            )}
            <span className="text-sm text-muted">{experience.host.displayName}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium">{experience.averageRating}</span>
            <span className="text-sm text-muted">({experience.totalReviews})</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <span className="text-lg font-bold">
            {formatPrice(experience.price, experience.currency)}
            <span className="text-sm font-normal text-muted"> / person</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

interface ExperienceGridProps {
  title: string;
  subtitle?: string;
  experiences?: typeof MOCK_EXPERIENCES;
  id?: string;
  viewAllHref?: string;
}

export function ExperienceGrid({
  title,
  subtitle,
  experiences = MOCK_EXPERIENCES,
  id,
  viewAllHref = '/experiences',
}: ExperienceGridProps) {
  return (
    <section className="py-24" id={id}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
          </div>
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
