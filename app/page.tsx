import { Hero } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { PartnersMarquee } from '@/components/sections/partners-marquee';
import { HomeTrustLogos } from '@/components/sections/home-trust-logos';
import { ProblemSolution } from '@/components/sections/problem-solution';
import { ProductsGrid } from '@/components/sections/products-grid';
import { DashboardShowcase } from '@/components/sections/dashboard-showcase';
import { DeveloperShowcase } from '@/components/sections/developer-showcase';
import { SecuritySection } from '@/components/sections/security-section';
import { FounderMessage } from '@/components/sections/founder-message';
import { JourneySection } from '@/components/sections/journey-section';
import { FinalCta } from '@/components/sections/final-cta';

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustStrip />

      <PartnersMarquee />

      <HomeTrustLogos />

      <ProblemSolution />

      <ProductsGrid />

      <DashboardShowcase />

      <DeveloperShowcase />

      <SecuritySection />

      <JourneySection />
      <FounderMessage />
      <FinalCta />
    </>
  );
}