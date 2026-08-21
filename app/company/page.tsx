import type { Metadata } from 'next';
import { Building2, Compass, Layers3, Network, UsersRound } from 'lucide-react';
import { InnerHero } from '@/components/sections/inner-hero';
import { JourneySection } from '@/components/sections/journey-section';
import { FinalCta } from '@/components/sections/final-cta';
import { Container } from '@/components/ui/container';
import { ContextGraphic, type ContextGraphicVariant } from '@/components/ui/context-graphic';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export const metadata: Metadata = {
  title: 'Company',
  description: 'Learn how Sambhav Pay is evolving from payment acceptance to enterprise payment orchestration.',
};

const principles: Array<{
  icon: typeof Compass;
  title: string;
  text: string;
  visual: ContextGraphicVariant;
}> = [
  {
    icon: Compass,
    title: 'Clarity over complexity',
    text: 'Turn fragmented payment operations into understandable workflows and consistent platform experiences.',
    visual: 'clarity',
  },
  {
    icon: Layers3,
    title: 'Infrastructure mindset',
    text: 'Design reusable capabilities that can support multiple products, providers and business models.',
    visual: 'infrastructure',
  },
  {
    icon: Network,
    title: 'Connected by design',
    text: 'Create one operational layer across transaction routing, status, analytics and reconciliation.',
    visual: 'connected',
  },
  {
    icon: UsersRound,
    title: 'Built around operators',
    text: 'Give product, engineering, finance and operations teams the context they need to act confidently.',
    visual: 'operators',
  },
];

export default function CompanyPage() {
  return (
    <>
      <InnerHero
        eyebrow="About Sambhav Pay"
        title="Building the future of enterprise payments."
        description="Sambhav Pay is evolving from a payment solutions provider into a connected infrastructure platform for acceptance, payouts, APIs and payment orchestration."
        icon={Building2}
        secondaryHref="/products/payment-orchestration"
        secondaryLabel="Explore Orchestration"
      />

      <section className="relative overflow-hidden pb-24 lg:pb-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-10 size-[32rem] rounded-full bg-brand/[0.05] blur-3xl dark:bg-cyan/[0.035]"
        />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[.76fr_1.24fr] lg:gap-20">
            <GsapReveal>
              <SectionHeading
                eyebrow="Our direction"
                title="One infrastructure layer for a more connected payment ecosystem."
                description="The platform direction combines merchant acceptance, API-led financial products and intelligent transaction orchestration into a single operating experience."
              />
            </GsapReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <GsapReveal key={principle.title} delay={index * 0.05}>
                    <SpotlightCard
                      className="group min-h-[278px] rounded-[1.4rem] p-5 transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(1000px)_translateY(-8px)_rotateX(1.5deg)_rotateY(-1.5deg)_scale(1.015)]"
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-0 opacity-45 transition-opacity duration-500 group-hover:opacity-75 dark:opacity-20 dark:group-hover:opacity-45"
                        style={{
                          backgroundImage:
                            'linear-gradient(rgba(16,102,209,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.08) 1px, transparent 1px)',
                          backgroundSize: '30px 30px',
                          maskImage: 'linear-gradient(to bottom left, black, transparent 72%)',
                          WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 72%)',
                        }}
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand/[0.08] blur-3xl transition-all duration-700 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:scale-125 group-hover:bg-cyan/[0.12] dark:bg-cyan/[0.04]"
                      />

                      <ContextGraphic
                        variant={principle.visual}
                        className="-bottom-1 right-0 h-[132px] w-[58%] opacity-70 group-hover:-translate-x-1 group-hover:-translate-y-1"
                      />

                      <div className="relative z-10 flex items-start justify-between">
                        <span className="flex size-11 items-center justify-center rounded-xl border border-brand/10 bg-brand/10 text-brand shadow-[0_10px_28px_rgba(16,102,209,.08)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-brand/0 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_14px_36px_rgba(16,102,209,.24)] dark:border-cyan/10 dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                          <Icon className="size-5 transition-transform duration-500 group-hover:scale-110" />
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.16em] text-slate-300 transition-colors duration-500 group-hover:text-brand/55 dark:text-slate-600 dark:group-hover:text-cyan/45">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="relative z-10 mt-5 max-w-[78%]">
                        <h2 className="font-display text-lg font-extrabold tracking-[-0.035em] text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">
                          {principle.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                          {principle.text}
                        </p>
                      </div>

                      <div className="absolute inset-x-5 bottom-5 z-10 h-px overflow-hidden bg-slate-100 dark:bg-white/[0.07]">
                        <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                      </div>
                    </SpotlightCard>
                  </GsapReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <JourneySection />
      <FinalCta />
    </>
  );
}