import type { Metadata } from 'next';
import {
  BadgeCheck,
  BarChart3,
  Braces,
  CheckCircle2,
  Cloud,
  Code2,
  LayoutDashboard,
  RefreshCw,
  Route,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

import { InnerHero } from '@/components/sections/inner-hero';
import { FinalCta } from '@/components/sections/final-cta';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export const metadata: Metadata = {
  title: 'Why SambhavPay?',
  description:
    'Discover why businesses choose Sambhav Pay for unified payment APIs, intelligent routing, real-time analytics, reconciliation, security and scalable payment infrastructure.',
};

const advantages = [
  {
    icon: Braces,
    title: 'Single API Integration',
    description:
      'Connect payment capabilities through one consistent integration layer instead of maintaining fragmented provider integrations.',
  },
  {
    icon: LayoutDashboard,
    title: 'Unified Merchant Dashboard',
    description:
      'Monitor payments, payouts, provider activity and operational information from one centralized merchant experience.',
  },
  {
    icon: Route,
    title: 'Intelligent Payment Routing',
    description:
      'Route transactions across configured payment providers using intelligent rules, availability and performance signals.',
  },
  {
    icon: TrendingUp,
    title: 'High Success Rate Optimization',
    description:
      'Use intelligent routing, retry and failover strategies designed to improve eligible transaction success rates.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description:
      'Security-first infrastructure and transaction controls designed for modern enterprise payment operations.',
  },
  {
    icon: BadgeCheck,
    title: 'PCI DSS Ready Architecture',
    description:
      'Payment architecture designed around security practices and patterns required for PCI DSS-ready payment environments.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description:
      'Understand transaction activity, payment performance, provider behavior and operational trends as they happen.',
  },
  {
    icon: RefreshCw,
    title: 'Automated Reconciliation',
    description:
      'Reduce manual operational work with normalized transaction data and structured reconciliation workflows.',
  },
  {
    icon: Code2,
    title: 'Developer-Friendly APIs',
    description:
      'Build faster with consistent APIs, predictable responses, webhooks and integration patterns designed for engineering teams.',
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud-Native Infrastructure',
    description:
      'A modern infrastructure foundation designed to scale with transaction volumes, products, providers and business growth.',
  },
];

const platformLayers = [
  {
    number: '01',
    title: 'Integrate',
    description:
      'One API and developer-friendly integration layer.',
    points: ['Single API', 'Consistent interfaces', 'Developer tooling'],
  },
  {
    number: '02',
    title: 'Orchestrate',
    description:
      'Control how transactions move across payment infrastructure.',
    points: ['Smart routing', 'Retry strategies', 'Provider failover'],
  },
  {
    number: '03',
    title: 'Operate',
    description:
      'Give teams one operational view across the payment lifecycle.',
    points: ['Merchant dashboard', 'Analytics', 'Reconciliation'],
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'Build on infrastructure designed for growing payment operations.',
    points: ['Enterprise security', 'Cloud-native', 'Operational controls'],
  },
];

export default function WhySambhavPayPage() {
  return (
    <>
      <InnerHero
        eyebrow="Why SambhavPay?"
        title="One payment layer. Less complexity. More control."
        description="Sambhav Pay brings integration, intelligent routing, payment operations, analytics, reconciliation and security into one connected infrastructure layer—giving merchants greater visibility and control as they scale."
        icon={ShieldCheck}
        primaryHref="/contact"
        primaryLabel="Request a Demo"
        secondaryHref="/products/payment-orchestration"
        secondaryLabel="Explore Platform"
      />

      {/* WHY SAMBHAV PAY */}
      <section className="relative overflow-hidden pb-24 lg:pb-36">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute left-1/2 top-1/3 -z-10
            size-[44rem]
            -translate-x-1/2
            rounded-full
            bg-brand/[0.04]
            blur-3xl
            dark:bg-cyan/[0.03]
          "
        />

        <Container>
          <GsapReveal>
            <SectionHeading
              eyebrow="Built differently"
              title="The capabilities modern payment operations need in one platform."
              description="From the first API request to routing, monitoring and reconciliation, Sambhav Pay is designed to reduce payment infrastructure complexity without sacrificing operational control."
              align="center"
            />
          </GsapReveal>

          <div
            className="
              mt-14
              grid gap-4
              md:grid-cols-2
              xl:grid-cols-5
            "
          >
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;

              return (
                <GsapReveal
                  key={advantage.title}
                  delay={index * 0.035}
                >
                  <SpotlightCard
                    className="
                      group
                      relative
                      h-full
                      min-h-[285px]
                      overflow-hidden
                      rounded-[1.35rem]
                      p-5
                      transition-all
                      duration-500
                      hover:-translate-y-1.5
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        -right-12 -top-12
                        size-32
                        rounded-full
                        bg-brand/[0.04]
                        blur-2xl
                        transition
                        duration-700
                        group-hover:bg-cyan/[0.09]
                        dark:bg-cyan/[0.025]
                      "
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className="
                            flex size-11
                            shrink-0
                            items-center justify-center
                            rounded-xl
                            bg-brand/[0.09]
                            text-brand
                            transition
                            duration-500

                            group-hover:-rotate-3
                            group-hover:scale-105
                            group-hover:bg-brand
                            group-hover:text-white

                            dark:bg-cyan/10
                            dark:text-cyan
                            dark:group-hover:bg-cyan
                            dark:group-hover:text-navy
                          "
                        >
                          <Icon className="size-5" />
                        </span>

                        <span
                          className="
                            font-mono
                            text-[9px]
                            font-bold
                            tracking-[0.14em]
                            text-slate-300

                            dark:text-slate-600
                          "
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h2
                        className="
                          mt-6
                          font-display
                          text-[1.05rem]
                          font-extrabold
                          leading-6
                          tracking-[-0.035em]
                          text-ink

                          dark:text-white
                        "
                      >
                        {advantage.title}
                      </h2>

                      <p
                        className="
                          mt-3
                          text-[13px]
                          leading-6
                          text-slate-600

                          dark:text-slate-400
                        "
                      >
                        {advantage.description}
                      </p>

                      <div
                        className="
                          mt-6
                          h-px
                          overflow-hidden
                          bg-slate-100

                          dark:bg-white/[0.07]
                        "
                      >
                        <span
                          className="
                            block
                            h-full
                            w-0
                            bg-gradient-to-r
                            from-brand
                            to-cyan
                            transition-all
                            duration-700

                            group-hover:w-full
                          "
                        />
                      </div>
                    </div>
                  </SpotlightCard>
                </GsapReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CONNECTED OPERATING MODEL */}
      <section
        className="
          relative
          overflow-hidden
          border-y
          border-slate-200
          bg-[#f6faff]
          py-24

          dark:border-white/[0.08]
          dark:bg-[#03152d]

          lg:py-32
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-grid-light
            bg-[size:48px_48px]
            opacity-50

            [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]

            dark:bg-grid-dark
            dark:opacity-25
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -right-40 top-0
            size-[34rem]
            rounded-full
            bg-cyan/[0.08]
            blur-3xl

            dark:bg-cyan/[0.04]
          "
        />

        <Container className="relative">
          <div
            className="
              grid
              gap-12

              lg:grid-cols-[0.72fr_1.28fr]
              lg:items-start
              lg:gap-20
            "
          >
            <GsapReveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="One connected operating model"
                  title="From API integration to payment operations."
                  description="Sambhav Pay connects the technical and operational layers of payments so engineering, finance and operations teams can work from the same infrastructure."
                />

                <div
                  className="
                    mt-8
                    inline-flex
                    items-center gap-2
                    rounded-full
                    border border-brand/15
                    bg-brand/[0.055]
                    px-4 py-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.16em]
                    text-brand

                    dark:border-cyan/15
                    dark:bg-cyan/[0.06]
                    dark:text-cyan
                  "
                >
                  <span className="size-1.5 rounded-full bg-current" />
                  Built for modern payment teams
                </div>
              </div>
            </GsapReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {platformLayers.map((layer, index) => (
                <GsapReveal
                  key={layer.title}
                  delay={index * 0.05}
                >
                  <div
                    className="
                      group
                      relative
                      h-full
                      overflow-hidden
                      rounded-[1.5rem]
                      border border-slate-200/80
                      bg-white/80
                      p-6
                      shadow-[0_20px_55px_rgba(6,30,87,.06)]
                      backdrop-blur-xl
                      transition
                      duration-500

                      hover:-translate-y-1
                      hover:border-brand/20
                      hover:shadow-[0_28px_70px_rgba(6,30,87,.1)]

                      dark:border-white/[0.08]
                      dark:bg-white/[0.035]
                      dark:shadow-none
                      dark:hover:border-cyan/20
                    "
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className="
                          font-mono
                          text-[10px]
                          font-bold
                          tracking-[0.16em]
                          text-brand

                          dark:text-cyan
                        "
                      >
                        {layer.number}
                      </span>

                      <span
                        className="
                          h-px
                          flex-1
                          bg-gradient-to-r
                          from-brand/20
                          to-transparent

                          dark:from-cyan/20
                        "
                      />
                    </div>

                    <h3
                      className="
                        mt-7
                        font-display
                        text-2xl
                        font-extrabold
                        tracking-[-0.045em]
                        text-ink

                        dark:text-white
                      "
                    >
                      {layer.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-slate-600

                        dark:text-slate-400
                      "
                    >
                      {layer.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {layer.points.map((point) => (
                        <li
                          key={point}
                          className="
                            flex
                            items-center gap-3
                            text-xs
                            font-bold
                            text-slate-700

                            dark:text-slate-300
                          "
                        >
                          <span
                            className="
                              flex size-6
                              shrink-0
                              items-center justify-center
                              rounded-full
                              bg-brand/[0.08]
                              text-brand

                              dark:bg-cyan/10
                              dark:text-cyan
                            "
                          >
                            <CheckCircle2 className="size-3.5" />
                          </span>

                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GsapReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CLOSING POSITIONING */}
      <section className="py-24 lg:py-32">
        <Container>
          <GsapReveal>
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-[#061e57]
                px-6 py-12
                text-center
                text-white
                shadow-[0_30px_100px_rgba(6,30,87,.22)]

                sm:px-10
                lg:px-16
                lg:py-16
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-grid-dark
                  bg-[size:38px_38px]
                  opacity-30
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2 top-[-10rem]
                  size-[30rem]
                  -translate-x-1/2
                  rounded-full
                  bg-cyan/15
                  blur-3xl
                "
              />

              <div className="relative mx-auto max-w-4xl">
                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.22em]
                    text-cyan
                  "
                >
                  Why SambhavPay?
                </p>

                <h2
                  className="
                    mt-5
                    text-balance
                    font-display
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-[-0.055em]

                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Infrastructure that connects payments instead of adding
                  another layer of complexity.
                </h2>

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-300

                    sm:text-base
                  "
                >
                  One integration. One operating layer. Intelligent payment
                  control designed to grow with your business.
                </p>
              </div>
            </div>
          </GsapReveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}