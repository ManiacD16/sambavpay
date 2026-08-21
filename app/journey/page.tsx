import type { Metadata } from 'next';
import { Milestone } from 'lucide-react';

import { InnerHero } from '@/components/sections/inner-hero';
import { JourneySection } from '@/components/sections/journey-section';
import { FinalCta } from '@/components/sections/final-cta';

export const metadata: Metadata = {
  title: 'Our Journey',
  description:
    'Explore SambhavPay’s journey from its 2021 payment gateway foundation to its next-generation payment orchestration platform.',
};

export default function JourneyPage() {
  return (
    <>
      <InnerHero
        eyebrow="Our Journey"
        title="Built year by year for the future of payments."
        description="From launching our payment gateway in 2021 to building a next-generation payment orchestration platform, SambhavPay’s journey reflects our evolution toward connected enterprise payment infrastructure."
        icon={Milestone}
        primaryHref="/contact"
        primaryLabel="Talk to Our Team"
        secondaryHref="/company"
        secondaryLabel="About SambhavPay"
      />

      <JourneySection />

      <FinalCta />
    </>
  );
}