import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Categories } from '@/components/landing/Categories';
import { ExperienceGrid } from '@/components/landing/ExperienceCard';
import { FeaturedCreators } from '@/components/landing/FeaturedCreators';
import { FarmWeekends } from '@/components/landing/FarmWeekends';
import { Testimonials } from '@/components/landing/Testimonials';
import { Statistics } from '@/components/landing/Statistics';
import { FAQ } from '@/components/landing/FAQ';
import { Pricing } from '@/components/landing/Pricing';
import { BecomeHost, Newsletter } from '@/components/landing/BecomeHost';
import { Footer } from '@/components/landing/Footer';
import { MOCK_EXPERIENCES } from '@/lib/mock-data';

export default function HomePage() {
  const farmExperiences = MOCK_EXPERIENCES.filter((e) => e.isFarmExperience);
  const trendingExperiences = [...MOCK_EXPERIENCES].reverse();

  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <ExperienceGrid
        id="experiences"
        title="Featured Experiences"
        subtitle="Hand-picked adventures from our top hosts and creators"
        experiences={MOCK_EXPERIENCES}
      />
      <FeaturedCreators />
      <FarmWeekends />
      <ExperienceGrid
        id="farms-list"
        title="Popular Farms"
        subtitle="Authentic rural experiences on working organic farms"
        experiences={farmExperiences.length ? farmExperiences : MOCK_EXPERIENCES.slice(0, 2)}
        viewAllHref="/experiences?category=farming"
      />
      <ExperienceGrid
        title="Trending Activities"
        subtitle="What everyone's booking this week"
        experiences={trendingExperiences}
      />
      <Testimonials />
      <Statistics />
      <FAQ />
      <Pricing />
      <BecomeHost />
      <Newsletter />
      <Footer />
    </main>
  );
}
