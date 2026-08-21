import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BookOpen,
  Box,
  Braces,
  CheckCircle2,
  CircleDot,
  CloudCog,
  Code2,
  FileJson2,
  Gauge,
  KeyRound,
  Network,
  RadioTower,
  RefreshCw,
  Route,
  Send,
  TerminalSquare,
  TestTube2,
  WalletCards,
  Webhook,
} from 'lucide-react';

import { InnerHero } from '@/components/sections/inner-hero';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Developers',
  description:
    'Build with SambhavPay APIs for payments, orchestration, payouts, verification, reconciliation and real-time webhooks.',
};

const apiCapabilities = [
  { icon: Route, label: 'Payment Orchestration' },
  { icon: Gauge, label: 'Smart Routing' },
  { icon: WalletCards, label: 'Payment Gateway' },
  { icon: Send, label: 'Payouts' },
  { icon: CheckCircle2, label: 'Verification APIs' },
  { icon: RefreshCw, label: 'Reconciliation' },
];

const apiProducts = [
  {
    icon: WalletCards,
    title: 'Payment API',
    text: 'Accept and manage digital payments.',
    anchor: 'payment-api',
  },
  {
    icon: Route,
    title: 'Orchestration API',
    text: 'Route transactions across multiple payment providers.',
    anchor: 'orchestration-api',
  },
  {
    icon: Send,
    title: 'Payout API',
    text: 'Send funds to bank accounts and supported payment rails.',
    anchor: 'payout-api',
  },
  {
    icon: CheckCircle2,
    title: 'Verification API',
    text:
      'Verify identity, business and financial information through APIs.',
    anchor: 'verification-api',
  },
  {
    icon: RefreshCw,
    title: 'Reconciliation API',
    text:
      'Access transaction and settlement data programmatically.',
    anchor: 'reconciliation-api',
  },
  {
    icon: Webhook,
    title: 'Webhook API',
    text: 'Receive real-time payment events.',
    anchor: 'webhook-api',
  },
];

const developerExperience = [
  {
    icon: Braces,
    title: 'REST APIs',
    text: 'Predictable resource-oriented endpoints.',
  },
  {
    icon: Box,
    title: 'SDKs',
    text: 'Integration helpers for supported environments.',
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    text: 'Real-time lifecycle events for your systems.',
  },
  {
    icon: TestTube2,
    title: 'Sandbox Environment',
    text: 'Test flows safely before production.',
  },
  {
    icon: Activity,
    title: 'API Logs',
    text: 'Inspect requests, responses and events.',
  },
  {
    icon: KeyRound,
    title: 'API Keys & Authentication',
    text: 'Environment-aware credentials and access.',
  },
];

const sandboxSteps = [
  {
    icon: KeyRound,
    title: 'Create API Key',
    text: 'Generate credentials for your test environment.',
  },
  {
    icon: TestTube2,
    title: 'Test',
    text: 'Run payment and payout scenarios safely.',
  },
  {
    icon: Activity,
    title: 'Monitor',
    text: 'Inspect API logs, states and webhook events.',
  },
  {
    icon: CloudCog,
    title: 'Go Live',
    text: 'Move to production after your integration is ready.',
  },
];

const webhookEvents = [
  'payment.created',
  'payment.processing',
  'payment.success',
  'payment.failed',
  'payment.refunded',
  'payout.success',
  'payout.failed',
];

const documentation = [
  {
    icon: BookOpen,
    title: 'Quick Start',
    href: '#api-reference',
  },
  {
    icon: FileJson2,
    title: 'API Reference',
    href: '#api-reference',
  },
  {
    icon: KeyRound,
    title: 'Authentication',
    href: '#developer-experience',
  },
  {
    icon: Box,
    title: 'SDKs',
    href: '#sdks',
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    href: '#webhooks',
  },
  {
    icon: CircleDot,
    title: 'Error Codes',
    href: '#code-example',
  },
  {
    icon: TestTube2,
    title: 'Test Environment',
    href: '#sandbox',
  },
];

const requestCode = `POST /v1/payments

{
  "amount": 25000,
  "currency": "INR",
  "method": "upi",
  "order_id": "ORD_102938"
}`;

const responseCode = `{
  "payment_id": "pay_8F29X",
  "status": "success",
  "route": "provider_a",
  "transaction_id": "TXN_728291"
}`;

export default function DevelopersPage() {
  return (
    <>
      <InnerHero
        eyebrow="Developers"
        title="Build Payments. Your Way."
        description="Powerful APIs and developer tools to connect payments, providers, routing, payouts and verification through one unified platform."
        icon={Braces}
        primaryHref="#documentation"
        primaryLabel="View API Docs"
        secondaryHref="/contact"
        secondaryLabel="Get API Keys"
      />

      {/* ONE API */}
      <section
        id="api-reference"
        className="relative scroll-mt-24 overflow-hidden pb-24 lg:pb-36"
      >
        <Container>
          <GsapReveal>
            <SectionHeading
              eyebrow="Unified API layer"
              title="One API. Multiple Payment Capabilities."
              description="Connect your application once, then access SambhavPay payment capabilities through one consistent platform layer."
              align="center"
            />
          </GsapReveal>

          <GsapReveal delay={0.08}>
            <div
              className="
                relative
                mx-auto mt-14
                max-w-5xl
                overflow-hidden
                rounded-[2rem]
                border border-slate-200/80
                bg-[#f7fbff]
                p-5
                shadow-[0_28px_90px_rgba(6,30,87,.08)]

                dark:border-white/[0.08]
                dark:bg-[#03162f]

                sm:p-7
                lg:p-10
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-grid-light
                  bg-[size:42px_42px]
                  opacity-50

                  dark:bg-grid-dark
                  dark:opacity-20
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2 top-1/2
                  size-[28rem]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-cyan/[0.08]
                  blur-3xl

                  dark:bg-cyan/[0.045]
                "
              />

              <div className="relative flex flex-col items-center">
                <ArchitectureNode
                  icon={Code2}
                  label="Your Application"
                />

                <ArrowDown className="my-4 size-5 text-brand dark:text-cyan" />

                <div
                  className="
                    relative
                    inline-flex
                    min-w-[250px]
                    items-center justify-center gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-brand
                    to-[#087ec8]
                    px-6 py-4
                    text-sm font-extrabold
                    text-white
                    shadow-[0_18px_50px_rgba(16,102,209,.3)]
                  "
                >
                  <Braces className="size-5" />
                  SambhavPay API

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -inset-2 -z-10
                      rounded-[1.4rem]
                      border border-brand/10

                      dark:border-cyan/10
                    "
                  />
                </div>

                <ArrowDown className="my-4 size-5 text-brand dark:text-cyan" />

                <div
                  className="
                    w-full
                    rounded-[1.6rem]
                    border border-brand/15
                    bg-white/80
                    p-4
                    backdrop-blur-xl

                    dark:border-cyan/15
                    dark:bg-white/[0.035]

                    sm:p-5
                  "
                >
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {apiCapabilities.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="
                            group
                            flex min-h-20
                            items-center gap-3
                            rounded-2xl
                            border border-slate-200/80
                            bg-white
                            px-4 py-3
                            transition duration-300

                            hover:-translate-y-1
                            hover:border-brand/20
                            hover:shadow-[0_16px_40px_rgba(6,30,87,.08)]

                            dark:border-white/[0.08]
                            dark:bg-white/[0.04]
                            dark:hover:border-cyan/20
                          "
                        >
                          <span
                            className="
                              flex size-9
                              shrink-0
                              items-center justify-center
                              rounded-xl
                              bg-brand/[0.09]
                              text-brand
                              transition

                              group-hover:bg-brand
                              group-hover:text-white

                              dark:bg-cyan/10
                              dark:text-cyan
                              dark:group-hover:bg-cyan
                              dark:group-hover:text-navy
                            "
                          >
                            <Icon className="size-4" />
                          </span>

                          <div>
                            <span
                              className="
                                block
                                font-mono
                                text-[8px]
                                text-slate-300

                                dark:text-slate-600
                              "
                            >
                              {String(index + 1).padStart(2, '0')}
                            </span>

                            <span
                              className="
                                mt-1 block
                                text-xs
                                font-extrabold
                                text-ink

                                dark:text-white
                              "
                            >
                              {item.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <ArrowDown className="my-4 size-5 text-brand dark:text-cyan" />

                <div
                  className="
                    inline-flex
                    flex-wrap
                    items-center justify-center
                    gap-3
                    rounded-2xl
                    border border-slate-200
                    bg-white/80
                    px-6 py-4
                    shadow-sm

                    dark:border-white/10
                    dark:bg-white/[0.05]
                  "
                >
                  <Network className="size-5 text-brand dark:text-cyan" />

                  <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                    Banks
                  </span>

                  <span className="size-1 rounded-full bg-cyan" />

                  <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                    PSPs
                  </span>

                  <span className="size-1 rounded-full bg-cyan" />

                  <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                    Gateways
                  </span>
                </div>
              </div>
            </div>
          </GsapReveal>
        </Container>
      </section>

      {/* API PRODUCTS */}
      <section
        className="
          relative
          overflow-hidden
          border-y border-slate-200/70
          bg-[#f7fbff]
          py-24

          dark:border-white/[0.07]
          dark:bg-[#03152d]

          lg:py-32
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-grid-light
            bg-[size:54px_54px]
            opacity-35

            dark:bg-grid-dark
            dark:opacity-20
          "
        />

        <Container className="relative">
          <GsapReveal>
            <SectionHeading
              eyebrow="API products"
              title="Purpose-built APIs across the payment lifecycle."
              description="Use only the capabilities you need today, while keeping one consistent integration model as your product expands."
              align="center"
            />
          </GsapReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {apiProducts.map((product, index) => {
              const Icon = product.icon;

              return (
                <GsapReveal
                  key={product.title}
                  delay={index * 0.04}
                >
                  <SpotlightCard
                    className="
                      group
                      h-full
                      min-h-[235px]
                      rounded-2xl
                      p-5

                      hover:-translate-y-1.5
                    "
                  >
                    <div
                      id={product.anchor}
                      className="scroll-mt-28"
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className="
                            flex size-11
                            items-center justify-center
                            rounded-xl
                            bg-brand/10
                            text-brand
                            transition duration-500

                            group-hover:-rotate-3
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
                          text-xl
                          font-extrabold
                          tracking-[-0.04em]
                          text-ink

                          dark:text-white
                        "
                      >
                        {product.title}
                      </h2>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-7
                          text-slate-600

                          dark:text-slate-400
                        "
                      >
                        {product.text}
                      </p>

                      <CardLine />
                    </div>
                  </SpotlightCard>
                </GsapReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* DEVELOPER EXPERIENCE */}
      <section
        id="developer-experience"
        className="scroll-mt-24 py-24 lg:py-32"
      >
        <Container>
          <div
            className="
              grid gap-14

              lg:grid-cols-[.74fr_1.26fr]
              lg:items-start
              lg:gap-20
            "
          >
            <GsapReveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Developer experience"
                  title="Tools that make integration easier to build and operate."
                  description="From authentication to testing and event delivery, SambhavPay gives engineering teams a consistent surface across the payment stack."
                />

                <Button
                  href="#code-example"
                  variant="secondary"
                  className="mt-8"
                >
                  See Code Example
                </Button>
              </div>
            </GsapReveal>

            <div
              id="sdks"
              className="
                grid
                scroll-mt-28
                gap-4

                sm:grid-cols-2
              "
            >
              {developerExperience.map((item, index) => {
                const Icon = item.icon;

                return (
                  <GsapReveal
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div
                      className="
                        group
                        h-full
                        rounded-2xl
                        border border-slate-200/80
                        bg-white
                        p-5
                        shadow-[0_14px_44px_rgba(6,30,87,.05)]
                        transition duration-500

                        hover:-translate-y-1
                        hover:border-brand/20
                        hover:shadow-[0_22px_60px_rgba(6,30,87,.08)]

                        dark:border-white/[0.08]
                        dark:bg-white/[0.025]
                        dark:hover:border-cyan/20
                      "
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className="
                            flex size-10
                            items-center justify-center
                            rounded-xl
                            bg-brand/[0.08]
                            text-brand

                            dark:bg-cyan/10
                            dark:text-cyan
                          "
                        >
                          <Icon className="size-[18px]" />
                        </span>

                        <span
                          className="
                            font-mono
                            text-[9px]
                            text-slate-300

                            dark:text-slate-600
                          "
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-5
                          text-sm
                          font-extrabold
                          text-ink

                          dark:text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-6
                          text-slate-500

                          dark:text-slate-400
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </GsapReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CODE EXAMPLE */}
      <section
        id="code-example"
        className="
          relative
          scroll-mt-24
          overflow-hidden
          bg-[#03152d]
          py-24
          text-white

          lg:py-32
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-grid-dark
            bg-[size:40px_40px]
            opacity-20
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -left-40 top-20
            size-[30rem]
            rounded-full
            bg-brand/20
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -right-40 bottom-0
            size-[30rem]
            rounded-full
            bg-cyan/10
            blur-3xl
          "
        />

        <Container className="relative">
          <GsapReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-cyan
                "
              >
                Code example
              </p>

              <h2
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-semibold
                  tracking-[-0.05em]

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                From request to routed payment in one clean API flow.
              </h2>
            </div>
          </GsapReveal>

          <GsapReveal delay={0.08}>
            <div
              className="
                mx-auto
                mt-12
                max-w-6xl
                overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-[#041a37]
                shadow-[0_38px_120px_rgba(0,0,0,.35)]
              "
            >
              <div
                className="
                  flex
                  items-center justify-between
                  border-b border-white/10
                  px-5 py-4

                  sm:px-6
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-rose-400" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <span
                    className="
                      hidden
                      items-center gap-2
                      text-[10px]
                      font-bold
                      text-slate-400

                      sm:inline-flex
                    "
                  >
                    <TerminalSquare className="size-3.5 text-cyan" />
                    API request
                  </span>
                </div>

                <span
                  className="
                    rounded-full
                    border border-cyan/20
                    bg-cyan/10
                    px-3 py-1.5
                    font-mono
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-cyan
                  "
                >
                  POST /v1/payments
                </span>
              </div>

              <div className="grid lg:grid-cols-2">
                <CodePanel
                  title="Request"
                  code={requestCode}
                />

                <CodePanel
                  title="Response"
                  code={responseCode}
                  response
                />
              </div>

              <div
                className="
                  flex flex-col gap-4
                  border-t border-white/10
                  bg-white/[0.025]
                  px-5 py-5

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:px-7
                "
              >
                <p className="text-xs leading-6 text-slate-400">
                  Use sandbox credentials to test this flow before
                  moving to production.
                </p>

                <Button
                  href="#sandbox"
                  variant="light"
                >
                  Try in Sandbox
                </Button>
              </div>
            </div>
          </GsapReveal>
        </Container>
      </section>

      {/* SANDBOX */}
      <section
        id="sandbox"
        className="scroll-mt-24 py-24 lg:py-32"
      >
        <Container>
          <GsapReveal>
            <SectionHeading
              eyebrow="Sandbox"
              title="Build. Test. Go Live."
              description="Test payment flows safely in our sandbox environment before moving to production."
              align="center"
            />
          </GsapReveal>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="
                absolute
                left-[10%] right-[10%]
                top-7
                hidden h-px
                bg-gradient-to-r
                from-brand/20
                via-cyan
                to-brand/20

                lg:block
              "
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {sandboxSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <GsapReveal
                    key={step.title}
                    delay={index * 0.05}
                  >
                    <div
                      className="
                        group
                        relative
                        h-full
                        rounded-2xl
                        border border-slate-200/80
                        bg-white
                        p-5 pt-7
                        shadow-[0_14px_44px_rgba(6,30,87,.05)]
                        transition

                        hover:-translate-y-1
                        hover:border-brand/20

                        dark:border-white/[0.08]
                        dark:bg-white/[0.025]
                        dark:hover:border-cyan/20
                      "
                    >
                      <div
                        className="
                          relative z-10
                          flex size-14
                          items-center justify-center
                          rounded-2xl
                          border-4 border-white
                          bg-gradient-to-br
                          from-brand
                          to-[#07489f]
                          text-white
                          shadow-[0_14px_34px_rgba(16,102,209,.25)]

                          dark:border-[#031326]
                          dark:from-cyan
                          dark:to-brand
                          dark:text-navy
                        "
                      >
                        <Icon className="size-5" />
                      </div>

                      <p
                        className="
                          mt-5
                          font-mono
                          text-[9px]
                          font-bold
                          tracking-[0.16em]
                          text-slate-300

                          dark:text-slate-600
                        "
                      >
                        STEP {String(index + 1).padStart(2, '0')}
                      </p>

                      <h3
                        className="
                          mt-2
                          font-display
                          text-lg
                          font-extrabold
                          tracking-[-0.035em]
                          text-ink

                          dark:text-white
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-7
                          text-slate-600

                          dark:text-slate-400
                        "
                      >
                        {step.text}
                      </p>

                      {index < sandboxSteps.length - 1 ? (
                        <ArrowRight
                          className="
                            absolute
                            right-4 top-6
                            hidden size-4
                            text-slate-300

                            dark:text-slate-600

                            lg:block
                          "
                        />
                      ) : null}
                    </div>
                  </GsapReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* WEBHOOKS */}
      <section
        id="webhooks"
        className="
          scroll-mt-24
          border-y border-slate-200/70
          bg-[#f7fbff]
          py-24

          dark:border-white/[0.07]
          dark:bg-[#03152d]

          lg:py-32
        "
      >
        <Container>
          <div
            className="
              grid gap-12

              lg:grid-cols-[.75fr_1.25fr]
              lg:items-center
              lg:gap-20
            "
          >
            <GsapReveal>
              <SectionHeading
                eyebrow="Webhooks"
                title="Know what happens in real time."
                description="Receive structured lifecycle events so your application and downstream systems can react as soon as payment state changes."
              />

              <Button
                href="#documentation"
                variant="secondary"
                className="mt-8"
              >
                Read Webhook Docs
              </Button>
            </GsapReveal>

            <GsapReveal delay={0.08}>
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border border-slate-200/80
                  bg-white
                  p-5
                  shadow-[0_24px_70px_rgba(6,30,87,.07)]

                  dark:border-white/[0.08]
                  dark:bg-white/[0.03]

                  sm:p-7
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    items-center justify-between
                    border-b border-slate-200
                    pb-5

                    dark:border-white/10
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex size-10
                        items-center justify-center
                        rounded-xl
                        bg-brand/10
                        text-brand

                        dark:bg-cyan/10
                        dark:text-cyan
                      "
                    >
                      <Webhook className="size-5" />
                    </span>

                    <div>
                      <p className="text-sm font-extrabold text-ink dark:text-white">
                        Event stream
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Real-time lifecycle notifications
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {webhookEvents.map((event) => (
                    <div
                      key={event}
                      className="
                        flex
                        items-center justify-between
                        rounded-xl
                        border border-slate-200/80
                        bg-slate-50/70
                        px-4 py-3

                        dark:border-white/[0.07]
                        dark:bg-white/[0.025]
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[11px]
                          font-bold
                          text-slate-700

                          dark:text-slate-300
                        "
                      >
                        {event}
                      </span>

                      <span
                        className={
                          event.includes('failed')
                            ? 'size-2 rounded-full bg-rose-400'
                            : event.includes('processing')
                              ? 'size-2 rounded-full bg-amber-400'
                              : 'size-2 rounded-full bg-emerald-400'
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </GsapReveal>
          </div>
        </Container>
      </section>

      {/* DOCUMENTATION */}
      <section
        id="documentation"
        className="scroll-mt-24 py-24 lg:py-32"
      >
        <Container>
          <GsapReveal>
            <SectionHeading
              eyebrow="API documentation"
              title="Everything developers need to integrate."
              description="Start quickly, understand authentication, inspect endpoint behavior and move from test to production with a clear integration path."
              align="center"
            />
          </GsapReveal>

          <div
            className="
              mx-auto
              mt-14
              grid
              max-w-5xl
              gap-3

              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {documentation.map((item, index) => {
              const Icon = item.icon;

              return (
                <GsapReveal
                  key={item.title}
                  delay={index * 0.035}
                >
                  <Link
                    href={item.href}
                    className="
                      group
                      flex min-h-20
                      items-center gap-3
                      rounded-2xl
                      border border-slate-200/80
                      bg-white
                      px-4 py-4
                      shadow-[0_10px_34px_rgba(6,30,87,.04)]
                      transition duration-300

                      hover:-translate-y-1
                      hover:border-brand/20
                      hover:shadow-[0_18px_50px_rgba(6,30,87,.07)]

                      dark:border-white/[0.08]
                      dark:bg-white/[0.025]
                      dark:hover:border-cyan/20
                    "
                  >
                    <span
                      className="
                        flex size-10
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-brand/[0.08]
                        text-brand

                        dark:bg-cyan/10
                        dark:text-cyan
                      "
                    >
                      <Icon className="size-[18px]" />
                    </span>

                    <span
                      className="
                        text-sm
                        font-extrabold
                        text-ink

                        dark:text-white
                      "
                    >
                      {item.title}
                    </span>

                    <ArrowRight
                      className="
                        ml-auto
                        size-4
                        text-slate-300
                        transition

                        group-hover:translate-x-1
                        group-hover:text-brand

                        dark:text-slate-600
                        dark:group-hover:text-cyan
                      "
                    />
                  </Link>
                </GsapReveal>
              );
            })}
          </div>

          {/* Status navigation destination */}
          <GsapReveal delay={0.1}>
            <div
              id="status"
              className="
                mx-auto
                mt-6
                flex
                max-w-5xl
                flex-col gap-5
                scroll-mt-28
                rounded-[1.6rem]
                border border-brand/15
                bg-brand/[0.045]
                p-5

                dark:border-cyan/15
                dark:bg-cyan/[0.04]

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-4">
                <span
                  className="
                    flex size-11
                    items-center justify-center
                    rounded-xl
                    bg-white
                    text-brand
                    shadow-sm

                    dark:bg-white/[0.06]
                    dark:text-cyan
                  "
                >
                  <RadioTower className="size-5" />
                </span>

                <div>
                  <p className="text-sm font-extrabold text-ink dark:text-white">
                    Platform Status
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Connect your production status page here when the
                    live status endpoint is available.
                  </p>
                </div>
              </div>
            </div>
          </GsapReveal>

          <div className="mt-9 flex justify-center">
            <Button href="#api-reference">
              Open Documentation
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
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
                  opacity-25
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2 top-[-12rem]
                  size-[34rem]
                  -translate-x-1/2
                  rounded-full
                  bg-cyan/15
                  blur-3xl
                "
              />

              <div className="relative mx-auto max-w-3xl">
                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.2em]
                    text-cyan
                  "
                >
                  Developers
                </p>

                <h2
                  className="
                    mt-5
                    font-display
                    text-3xl
                    font-semibold
                    tracking-[-0.05em]

                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Start building with SambhavPay
                </h2>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-7
                    text-slate-300

                    sm:text-base
                  "
                >
                  Get your API credentials and start integrating
                  payment infrastructure today.
                </p>

                <div
                  className="
                    mt-8
                    flex flex-col
                    justify-center gap-3

                    sm:flex-row
                  "
                >
                  <Button
                    href="/contact"
                    variant="light"
                  >
                    Get API Keys
                  </Button>

                  <Button
                    href="#documentation"
                    variant="secondary"
                    className="
                      border-white/15
                      bg-white/[0.06]
                      text-white

                      hover:bg-white/[0.1]
                    "
                  >
                    Read Documentation
                  </Button>
                </div>
              </div>
            </div>
          </GsapReveal>
        </Container>
      </section>
    </>
  );
}

function ArchitectureNode({
  icon: Icon,
  label,
}: {
  icon: typeof Code2;
  label: string;
}) {
  return (
    <div
      className="
        inline-flex
        min-w-[220px]
        items-center justify-center
        gap-3
        rounded-2xl
        border border-slate-200
        bg-white
        px-5 py-4
        text-sm
        font-extrabold
        text-ink
        shadow-sm

        dark:border-white/10
        dark:bg-white/[0.05]
        dark:text-white
      "
    >
      <Icon className="size-5 text-brand dark:text-cyan" />
      {label}
    </div>
  );
}

function CardLine() {
  return (
    <div className="mt-6 h-px bg-slate-100 dark:bg-white/[0.07]">
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
  );
}

function CodePanel({
  title,
  code,
  response = false,
}: {
  title: string;
  code: string;
  response?: boolean;
}) {
  return (
    <div
      className={`
        relative
        p-5

        sm:p-7

        ${
          response
            ? ''
            : 'border-b border-white/10 lg:border-b-0 lg:border-r'
        }
      `}
    >
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-grid-dark
          bg-[size:28px_28px]
          opacity-10
        "
      />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <span
            className="
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              text-slate-500
            "
          >
            {title}
          </span>

          {response ? (
            <span
              className="
                rounded-full
                bg-emerald-400/10
                px-2.5 py-1
                text-[9px]
                font-bold
                text-emerald-300
              "
            >
              200 Success
            </span>
          ) : (
            <span
              className="
                flex items-center gap-2
                text-[9px]
                font-bold
                text-emerald-300
              "
            >
              <span className="size-1.5 rounded-full bg-emerald-300" />
              Ready
            </span>
          )}
        </div>

        <pre
          className="
            overflow-x-auto
            font-mono
            text-[12px]
            leading-7
            text-blue-100

            sm:text-[13px]
          "
        >
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}