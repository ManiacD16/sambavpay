import {
  ArrowDown,
  Braces,
  CheckCircle2,
  KeyRound,
  Route,
  Send,
  TerminalSquare,
  WalletCards,
  Webhook,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

const capabilities = [
  { icon: Route, label: 'Orchestration' },
  { icon: WalletCards, label: 'Payments' },
  { icon: Send, label: 'Payouts' },
  { icon: CheckCircle2, label: 'Verification' },
  { icon: Webhook, label: 'Webhooks' },
  { icon: KeyRound, label: 'API Keys' },
];

export function DeveloperShowcase() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <span
        aria-hidden="true"
        className="section-divider"
      />

      <div
        aria-hidden="true"
        className="
          absolute
          -left-52 top-1/3
          size-[36rem]
          rounded-full
          bg-brand/[0.05]
          blur-3xl

          dark:bg-cyan/[0.04]
        "
      />

      <Container className="relative">
        <div
          className="
            grid
            items-center
            gap-14

            lg:grid-cols-[.78fr_1.22fr]
            lg:gap-20
          "
        >
          <GsapReveal>
            <SectionHeading
              eyebrow="For developers"
              title="Build Payments. Your Way."
              description="Powerful APIs and developer tools to connect payments, providers, routing, payouts and verification through one unified platform."
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/developers#documentation">
                View API Docs
              </Button>

              <Button
                href="/contact"
                variant="secondary"
              >
                Get API Keys
              </Button>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      flex
                      items-center gap-2
                      rounded-xl
                      border border-slate-200
                      bg-white/75
                      px-3 py-3
                      text-xs
                      font-extrabold
                      text-slate-700
                      shadow-sm

                      dark:border-white/10
                      dark:bg-white/[0.035]
                      dark:text-slate-300
                    "
                  >
                    <Icon className="size-4 text-brand dark:text-cyan" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.9rem]
                border border-slate-200
                bg-[#04152f]
                p-5
                shadow-[0_38px_100px_rgba(6,30,87,.25)]

                dark:border-white/10

                sm:p-7
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-grid-dark
                  bg-[size:28px_28px]
                  opacity-20
                "
              />

              <div className="relative">
                <div
                  className="
                    flex
                    items-center justify-between
                    border-b border-white/10
                    pb-4
                  "
                >
                  <div
                    className="
                      flex
                      items-center gap-3
                      text-[10px]
                      font-bold
                      text-slate-400
                    "
                  >
                    <TerminalSquare className="size-4 text-cyan" />
                    Unified API architecture
                  </div>

                  <span
                    className="
                      rounded-full
                      border border-cyan/15
                      bg-cyan/10
                      px-2.5 py-1
                      text-[8px]
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      text-cyan
                    "
                  >
                    Developer ready
                  </span>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <div
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.05]
                      px-5 py-3
                      text-xs
                      font-extrabold
                      text-white
                    "
                  >
                    Your Application
                  </div>

                  <ArrowDown className="my-3 size-4 text-cyan" />

                  <div
                    className="
                      flex
                      items-center gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-brand
                      to-cyan
                      px-5 py-3
                      text-xs
                      font-extrabold
                      text-white
                    "
                  >
                    <Braces className="size-4" />
                    SambhavPay API
                  </div>

                  <ArrowDown className="my-3 size-4 text-cyan" />

                  <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      'Orchestration',
                      'Smart Routing',
                      'Gateway',
                      'Payouts',
                      'Verification',
                      'Reconciliation',
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          rounded-xl
                          border border-white/10
                          bg-white/[0.045]
                          px-3 py-3
                          text-center
                          text-[10px]
                          font-extrabold
                          text-slate-200
                        "
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <ArrowDown className="my-3 size-4 text-cyan" />

                  <div
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.05]
                      px-5 py-3
                      text-xs
                      font-extrabold
                      text-slate-200
                    "
                  >
                    Banks · PSPs · Gateways
                  </div>
                </div>
              </div>
            </div>
          </GsapReveal>
        </div>
      </Container>
    </section>
  );
}