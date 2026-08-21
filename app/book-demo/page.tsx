import type {
  Metadata,
} from 'next';

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MessagesSquare,
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
  title: 'Book a Demo',

  description:
    'Book a SambhavPay product demo and discuss your payment infrastructure, providers and operational requirements.',
};

export default function BookDemoPage() {
  return (
    <>
      <InnerHero
        eyebrow="Book a Demo"
        title="See how SambhavPay fits your payment stack."
        description="Tell us about your current payment setup and the challenge you want to solve. After submitting, choose a preferred demo date and time."
        icon={CalendarDays}
        primaryHref="#book-demo-form"
        primaryLabel="Book My Demo"
        secondaryHref="/get-started"
        secondaryLabel="Get Started"
      />

      <section
        id="book-demo-form"
        className="
          relative
          scroll-mt-28
          overflow-hidden
          pb-24

          lg:pb-36
        "
      >
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
                  Demo flow
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
                  Tell us the
                  challenge, then
                  choose your time.
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
                  Your form details
                  are sent to
                  sales@sambhavpay.com
                  before you continue
                  to the demo calendar.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    {
                      icon:
                        MessagesSquare,

                      title:
                        'Share requirements',

                      text:
                        'Give us enough context to make the demo relevant.',
                    },

                    {
                      icon:
                        CalendarDays,

                      title:
                        'Choose a date',

                      text:
                        'After submitting the form, select a preferred business day.',
                    },

                    {
                      icon:
                        Clock3,

                      title:
                        'Select a time',

                      text:
                        'Choose a demo time in India Standard Time and submit your request.',
                    },

                    {
                      icon:
                        CheckCircle2,

                      title:
                        'Confirmation',

                      text:
                        'The sales team receives the selected slot and follows up to confirm.',
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
              <LeadForm variant="book-demo" />
            </GsapReveal>
          </div>
        </Container>
      </section>
    </>
  );
}