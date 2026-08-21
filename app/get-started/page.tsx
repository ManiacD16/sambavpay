import type {
  Metadata,
} from 'next';

import {
  ArrowRight,
  Building2,
  Layers3,
  Sparkles,
} from 'lucide-react';

import {
  InnerHero,
} from '@/components/sections/inner-hero';

import {
  LeadForm,
} from '@/components/forms/lead-form';

import {
  Container,
} from '@/components/ui/container';

import {
  GsapReveal,
} from '@/components/ui/gsap-reveal';

export const metadata: Metadata = {
  title: 'Get Started',

  description:
    'Tell SambhavPay about your business, payment volume and the payment infrastructure services you need.',
};

export default function GetStartedPage() {
  return (
    <>
      <InnerHero
        eyebrow="Get Started"
        title="Start with the payment infrastructure your business needs."
        description="Share a few details about your business, payment volumes and required services. Our team will route your request to the right SambhavPay specialist."
        icon={Sparkles}
        primaryHref="#get-started-form"
        primaryLabel="Get Started"
        secondaryHref="/book-demo"
        secondaryLabel="Book a Demo"
      />

      <section
        id="get-started-form"
        className="
          relative
          scroll-mt-28
          overflow-hidden
          pb-24

          lg:pb-36
        "
      >
        <div
          className="
            absolute
            -left-48
            top-1/3
            -z-10
            size-[32rem]
            rounded-full
            bg-brand/[0.055]
            blur-3xl

            dark:bg-cyan/[0.04]
          "
        />

        <Container>
          <div
            className="
              grid gap-12

              lg:grid-cols-[.68fr_1.32fr]
              lg:gap-20
            "
          >
            <GsapReveal>
              <div
                className="
                  lg:sticky
                  lg:top-28
                "
              >
                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.19em]
                    text-brand

                    dark:text-cyan
                  "
                >
                  What happens next
                </p>

                <h2
                  className="
                    mt-4
                    font-display
                    text-3xl
                    font-semibold
                    tracking-[-0.05em]
                    text-ink

                    sm:text-4xl

                    dark:text-white
                  "
                >
                  A short form. A
                  focused commercial
                  conversation.
                </h2>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-slate-600

                    dark:text-slate-400
                  "
                >
                  Your request is
                  delivered to
                  sales@sambhavpay.com
                  with the context our
                  team needs to respond
                  efficiently.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    {
                      icon:
                        Building2,

                      title:
                        'Share business context',

                      text:
                        'Tell us about your company, business type and current provider.',
                    },

                    {
                      icon:
                        Layers3,

                      title:
                        'Choose capabilities',

                      text:
                        'Select the payment, payout, orchestration or verification services you need.',
                    },

                    {
                      icon:
                        ArrowRight,

                      title:
                        'Move to next steps',

                      text:
                        'Our team reviews the requirement and responds with the right commercial and technical path.',
                    },
                  ].map(
                    (
                      item,
                      index,
                    ) => {
                      const Icon =
                        item.icon;

                      return (
                        <div
                          key={
                            item.title
                          }
                          className="
                            flex gap-3
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white/80
                            p-4
                            shadow-[0_12px_36px_rgba(6,30,87,.04)]

                            dark:border-white/10
                            dark:bg-white/[0.035]
                          "
                        >
                          <span
                            className="
                              flex
                              size-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              bg-brand
                              text-white

                              dark:bg-cyan
                              dark:text-navy
                            "
                          >
                            <Icon className="size-4" />
                          </span>

                          <div>
                            <p
                              className="
                                text-sm
                                font-extrabold
                                text-ink

                                dark:text-white
                              "
                            >
                              <span
                                className="
                                  mr-2
                                  font-mono
                                  text-[9px]
                                  text-slate-300

                                  dark:text-slate-600
                                "
                              >
                                0
                                {index +
                                  1}
                              </span>

                              {
                                item.title
                              }
                            </p>

                            <p
                              className="
                                mt-1
                                text-xs
                                leading-6
                                text-slate-500

                                dark:text-slate-400
                              "
                            >
                              {
                                item.text
                              }
                            </p>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </GsapReveal>

            <GsapReveal delay={0.08}>
              <LeadForm variant="get-started" />
            </GsapReveal>
          </div>
        </Container>
      </section>
    </>
  );
}