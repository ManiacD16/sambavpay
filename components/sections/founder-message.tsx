import Image from 'next/image';
import {
  Linkedin,
  Quote,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

export function FounderMessage() {
  return (
    <section
      id="founders-message"
      className="
        relative
        overflow-hidden
        border-y border-slate-200
        bg-[#f6faff]
        py-24

        dark:border-white/[0.08]
        dark:bg-[#03152d]

        lg:py-36
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-grid-light
          bg-[size:52px_52px]
          opacity-45
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]

          dark:bg-grid-dark
          dark:opacity-20
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48 top-20
          size-[32rem]
          rounded-full
          bg-brand/[0.07]
          blur-3xl

          dark:bg-brand/[0.08]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48 bottom-0
          size-[36rem]
          rounded-full
          bg-cyan/[0.07]
          blur-3xl

          dark:bg-cyan/[0.04]
        "
      />

      <Container className="relative">
        <GsapReveal>
          <SectionHeading
            eyebrow="Founder’s Message"
            title="Building simpler, smarter payment infrastructure for India."
            description="A message from the founder on the vision behind SambhavPay and the infrastructure we are building for India's digital economy."
          />
        </GsapReveal>

        <div
          className="
            mt-14
            grid gap-6

            lg:grid-cols-[1.15fr_.85fr]
            lg:gap-8
          "
        >
          {/* Message */}
          <GsapReveal>
            <article
              className="
                relative
                h-full
                overflow-hidden
                rounded-[2rem]
                bg-[#061e57]
                px-6 py-9
                text-white
                shadow-[0_32px_100px_rgba(6,30,87,.22)]

                sm:px-9
                sm:py-11

                lg:px-12
                lg:py-12
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-grid-dark
                  bg-[size:42px_42px]
                  opacity-20
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-32 -top-40
                  size-[28rem]
                  rounded-full
                  bg-cyan/15
                  blur-3xl
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[-4rem]
                  right-[-1rem]
                  select-none
                  font-display
                  text-[12rem]
                  font-black
                  leading-none
                  text-white/[0.025]

                  sm:text-[16rem]
                "
              >
                “
              </div>

              <div className="relative">
                <div
                  className="
                    flex size-12
                    items-center justify-center
                    rounded-2xl
                    border border-cyan/15
                    bg-cyan/10
                    text-cyan
                  "
                >
                  <Quote className="size-5" />
                </div>

                <p
                  className="
                    mt-8
                    text-lg
                    font-medium
                    leading-8
                    tracking-[-0.02em]
                    text-white

                    sm:text-xl
                    sm:leading-9
                  "
                >
                  At SambhavPay, we believe payments should be simple for
                  businesses, reliable for customers, and intelligent enough
                  to adapt to a rapidly evolving digital economy.
                </p>

                <div
                  className="
                    mt-7
                    space-y-5
                    text-sm
                    leading-7
                    text-slate-300

                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  <p>
                    We started with a clear vision: to reduce the complexity
                    businesses face when managing multiple payment providers,
                    payment methods, transactions and financial operations.
                  </p>

                  <p>
                    Today, we are building SambhavPay as a connected payment
                    infrastructure platform—bringing{' '}
                    <strong className="font-bold text-white">
                      payment orchestration, intelligent routing, APIs,
                      pay-ins, payouts, verification and payment intelligence
                    </strong>{' '}
                    together through technology designed for scale.
                  </p>

                  <p>
                    Our journey is driven by one principle:{' '}
                    <strong className="font-bold text-cyan">
                      make payment infrastructure simpler, smarter and more
                      resilient.
                    </strong>
                  </p>

                  <p>
                    We are building not just for today&apos;s payments, but for
                    the next generation of India&apos;s digital economy.
                  </p>
                </div>

                <div
                  className="
                    mt-9
                    flex flex-col gap-5
                    border-t border-white/10
                    pt-7

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        font-display
                        text-xl
                        font-extrabold
                        tracking-[-0.035em]
                        text-white
                      "
                    >
                      Jayant Mallick
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.13em]
                        text-cyan
                      "
                    >
                      Founder & CEO, SambhavPay
                    </p>
                  </div>

                  <div
                    className="
                      inline-flex
                      items-center gap-2
                      self-start
                      rounded-full
                      border border-white/10
                      bg-white/[0.055]
                      px-3.5 py-2
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.15em]
                      text-slate-300
                    "
                  >
                    <Sparkles className="size-3.5 text-cyan" />
                    Building for India
                  </div>
                </div>
              </div>
            </article>
          </GsapReveal>

          {/* Founder / LinkedIn visual */}
          <GsapReveal delay={0.08}>
            <aside
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-[2rem]
                border border-slate-200/80
                bg-white
                p-4
                shadow-[0_30px_90px_rgba(6,30,87,.1)]

                dark:border-white/[0.08]
                dark:bg-white/[0.035]
                dark:shadow-none

                sm:p-5
              "
            >
              {/* Founder image */}
              <div
                className="
                  relative
                  min-h-[390px]
                  overflow-hidden
                  rounded-[1.55rem]
                  bg-[#061e57]

                  sm:min-h-[450px]
                "
              >
                <Image
                  src="/founder/jayant-mallick.png"
                  alt="Jayant Mallick, Founder and CEO of SambhavPay"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="
                    object-cover
                    object-center
                    transition
                    duration-700

                    group-hover:scale-[1.025]
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#03152d]
                    via-[#03152d]/10
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0 bottom-0
                    p-6

                    sm:p-7
                  "
                >
                  <div
                    className="
                      inline-flex
                      items-center gap-2
                      rounded-full
                      border border-white/15
                      bg-[#03152d]/60
                      px-3 py-1.5
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.15em]
                      text-cyan
                      backdrop-blur-xl
                    "
                  >
                    <ShieldCheck className="size-3.5" />
                    Founder & CEO
                  </div>

                  <h3
                    className="
                      mt-3
                      font-display
                      text-3xl
                      font-semibold
                      tracking-[-0.05em]
                      text-white
                    "
                  >
                    Jayant Mallick
                  </h3>
                </div>
              </div>

              {/* LinkedIn QR */}
              <div
                className="
                  relative
                  mt-4
                  overflow-hidden
                  rounded-[1.55rem]
                  border border-slate-200
                  bg-[#f8fbff]
                  p-5

                  dark:border-white/[0.08]
                  dark:bg-[#06182f]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-brand/[0.025]
                    via-transparent
                    to-cyan/[0.055]
                  "
                />

                <div
                  className="
                    relative
                    flex flex-col gap-5

                    sm:flex-row
                    sm:items-center
                  "
                >
                  <div
                    className="
                      relative
                      mx-auto
                      size-36
                      shrink-0
                      overflow-hidden
                      rounded-2xl
                      border border-brand/15
                      bg-white
                      p-2
                      shadow-sm

                      sm:mx-0
                    "
                  >
                    <Image
                      src="/founder/jayant-mallick-linkedin-qr.png"
                      alt="LinkedIn QR code for Jayant Mallick"
                      width={144}
                      height={144}
                      className="size-full object-contain"
                    />

                    {/* Scanner effect */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-x-2 top-1/2
                        h-px
                        bg-cyan
                        shadow-[0_0_12px_rgba(5,210,251,.9)]
                        animate-pulse
                      "
                    />

                    <span
                      aria-hidden="true"
                      className="
                        absolute left-1.5 top-1.5
                        size-4
                        border-l-2 border-t-2
                        border-cyan
                      "
                    />

                    <span
                      aria-hidden="true"
                      className="
                        absolute right-1.5 top-1.5
                        size-4
                        border-r-2 border-t-2
                        border-cyan
                      "
                    />

                    <span
                      aria-hidden="true"
                      className="
                        absolute bottom-1.5 left-1.5
                        size-4
                        border-b-2 border-l-2
                        border-cyan
                      "
                    />

                    <span
                      aria-hidden="true"
                      className="
                        absolute bottom-1.5 right-1.5
                        size-4
                        border-b-2 border-r-2
                        border-cyan
                      "
                    />
                  </div>

                  <div>
                    <div
                      className="
                        flex items-center gap-2
                        text-brand

                        dark:text-cyan
                      "
                    >
                      <Linkedin className="size-5" />

                      <p
                        className="
                          text-[10px]
                          font-extrabold
                          uppercase
                          tracking-[0.17em]
                        "
                      >
                        Connect on LinkedIn
                      </p>
                    </div>

                    <h4
                      className="
                        mt-3
                        font-display
                        text-xl
                        font-extrabold
                        tracking-[-0.035em]
                        text-ink

                        dark:text-white
                      "
                    >
                      Scan to connect
                    </h4>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-6
                        text-slate-500

                        dark:text-slate-400
                      "
                    >
                      Scan the QR code with your phone camera to open Jayant
                      Mallick&apos;s LinkedIn profile.
                    </p>

                    <div
                      className="
                        mt-4
                        inline-flex
                        items-center gap-2
                        text-[9px]
                        font-extrabold
                        uppercase
                        tracking-[0.14em]
                        text-slate-400
                      "
                    >
                      <ScanLine className="size-3.5" />
                      LinkedIn profile
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </GsapReveal>
        </div>
      </Container>
    </section>
  );
}