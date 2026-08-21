import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  CreditCard,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  ReceiptText,
  Repeat2,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Users,
  WalletCards,
  Zap,
} from 'lucide-react';

import { InnerHero } from '@/components/sections/inner-hero';
import { FinalCta } from '@/components/sections/final-cta';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Payment infrastructure for e-commerce, fintech, marketplaces, travel, SaaS, education, healthcare, logistics, BFSI, NBFCs, government and utility businesses.',
};

const industries = [
  {
    icon: ShoppingBag,
    title: 'E-Commerce & Retail',
    text:
      'Build resilient checkout experiences across UPI, cards, net banking, wallets and other supported payment methods while maintaining clear transaction visibility.',
  },
  {
    icon: WalletCards,
    title: 'Fintech & Financial Services',
    text:
      'Power digital financial products with connected payment, payout, verification and transaction-control infrastructure.',
  },
  {
    icon: Store,
    title: 'Marketplaces',
    text:
      'Manage collections and disbursements across buyers, sellers, partners and complex marketplace payment flows.',
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    text:
      'Support high-value bookings, peak transaction volumes and reliable payment experiences across travel and hospitality journeys.',
  },
  {
    icon: Repeat2,
    title: 'SaaS & Subscription',
    text:
      'Create dependable payment experiences for recurring digital services, subscriptions and growing software platforms.',
  },
  {
    icon: GraduationCap,
    title: 'Education & EdTech',
    text:
      'Simplify fee collections, digital payments, transaction tracking and reconciliation across institutions and education platforms.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & HealthTech',
    text:
      'Enable secure and reliable payment journeys for hospitals, clinics, healthcare platforms, diagnostics and digital health services.',
  },
  {
    icon: Truck,
    title: 'Logistics & Mobility',
    text:
      'Support collections, partner payouts and high-frequency transaction workflows across logistics, transport and mobility networks.',
  },
  {
    icon: Building2,
    title: 'BFSI & Enterprises',
    text:
      'Create scalable payment infrastructure with centralized controls, visibility and provider connectivity for complex enterprise operations.',
  },
  {
    icon: Landmark,
    title: 'Government & Public Services',
    text:
      'Power structured digital payment journeys for citizen services, public platforms and government-led collection workflows.',
  },
  {
    icon: ReceiptText,
    title: 'Utilities & Bill Payments',
    text:
      'Enable streamlined collections and payment visibility across utilities, recurring bills and service-payment ecosystems.',
  },
  {
    icon: CircleDollarSign,
    title: 'NBFC',
    text:
      'Support digital collections, customer payments, disbursements, verification and operational payment workflows for NBFC platforms.',
  },
] as const;

export default function IndustriesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Industry solutions"
        title="Payment infrastructure shaped around real operating models."
        description="From digital commerce and fintech to healthcare, mobility, BFSI and public services, Sambhav Pay provides a connected payment layer designed to adapt to different operating models."
        icon={Building2}
        secondaryHref="/contact"
        secondaryLabel="Talk to Sales"
      />

      <section className="relative overflow-hidden pb-24 lg:pb-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-24 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,196,255,.08),transparent_56%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(0,196,255,.055),transparent_58%)]"
        />

        <Container className="relative">
          <GsapReveal>
            <SectionHeading
              eyebrow="Built for diverse payment ecosystems"
              title="Payment infrastructure built around your industry."
              description="Different industries have different transaction journeys, operational requirements and payment challenges. Sambhav Pay brings orchestration, acceptance, payouts, intelligence, controls and verification into one connected platform."
              align="center"
            />
          </GsapReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <GsapReveal key={industry.title} delay={index * 0.04}>
                  <SpotlightCard
                    className="group relative h-full min-h-[308px] overflow-hidden rounded-[1.35rem] p-5 [transform-style:preserve-3d] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(1100px)_translateY(-9px)_rotateX(2deg)_rotateY(-2deg)_scale(1.018)] hover:border-brand/25 hover:shadow-[0_26px_75px_rgba(6,30,87,.11)] dark:hover:border-cyan/20 dark:hover:shadow-[0_28px_90px_rgba(0,196,255,.08)]"
                  >
                    <IndustryAtmosphere />
                    <IndustryVisual index={index} />

                    <div className="relative z-10 flex items-start justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl border border-brand/10 bg-brand/10 text-brand shadow-[0_8px_20px_rgba(16,102,209,.07)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-transparent group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(16,102,209,.22)] dark:border-cyan/10 dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                        <Icon className="size-5" />
                      </span>

                      <span className="font-mono text-[9px] font-bold tracking-[0.14em] text-slate-300 transition-colors duration-500 group-hover:text-brand/60 dark:text-slate-600 dark:group-hover:text-cyan/50">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="relative z-10 mt-6 max-w-[74%] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0.5">
                      <h2 className="font-display text-[1.02rem] font-extrabold tracking-[-0.035em] text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">
                        {industry.title}
                      </h2>

                      <p className="mt-3 text-[13px] leading-6 text-slate-600 dark:text-slate-400">
                        {industry.text}
                      </p>
                    </div>

                    <div className="absolute inset-x-5 bottom-5 z-10 h-px overflow-hidden bg-slate-100 dark:bg-white/[0.07]">
                      <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                    </div>

                    <span className="pointer-events-none absolute bottom-[14px] right-5 z-10 flex size-7 translate-x-2 items-center justify-center rounded-full border border-brand/10 bg-white/80 text-brand opacity-0 shadow-sm backdrop-blur transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 dark:border-cyan/10 dark:bg-white/[0.06] dark:text-cyan">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </SpotlightCard>
                </GsapReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

function IndustryAtmosphere() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.24] transition-opacity duration-500 group-hover:opacity-[0.45] dark:opacity-[0.09] dark:group-hover:opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,102,209,.075) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.075) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom left, black, transparent 68%)',
          WebkitMaskImage:
            'linear-gradient(to bottom left, black, transparent 68%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-cyan/[0.07] blur-3xl transition-all duration-700 group-hover:-translate-x-5 group-hover:translate-y-5 group-hover:scale-125 group-hover:bg-cyan/[0.13] dark:bg-cyan/[0.04]"
      />
    </>
  );
}

function IndustryVisual({ index }: { index: number }) {
  const shell =
    'pointer-events-none absolute right-4 top-[4.8rem] z-[2] h-[126px] w-[42%] origin-center opacity-[0.52] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-[1.09] group-hover:opacity-100 dark:opacity-[0.30] dark:group-hover:opacity-[0.72]';

  switch (index) {
    case 0:
      return (
        <div aria-hidden="true" className={shell}>
          <MiniPanel>
            <div className="flex items-center justify-between">
              <ShoppingBag className="size-4 text-brand dark:text-cyan" />
              <span className="text-[7px] font-bold text-slate-400">CHECKOUT</span>
            </div>
            <div className="mt-2 rounded-lg bg-brand/[0.06] px-2 py-1.5 dark:bg-cyan/[0.06]">
              <div className="text-[7px] text-slate-400">Order value</div>
              <div className="mt-0.5 text-[10px] font-extrabold text-ink dark:text-white">₹2,450</div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {['UPI', 'Card', 'Bank'].map((label) => (
                <span key={label} className="rounded-md border border-brand/10 bg-white/70 py-1 text-center text-[6px] font-bold text-brand dark:border-cyan/10 dark:bg-white/[0.04] dark:text-cyan">
                  {label}
                </span>
              ))}
            </div>
          </MiniPanel>
        </div>
      );

    case 1:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-brand/15 bg-white/80 text-brand shadow-[0_12px_30px_rgba(16,102,209,.12)] backdrop-blur dark:bg-white/[0.06] dark:text-cyan">
            <WalletCards className="size-5" />
          </div>
          <OrbitDot icon={CreditCard} className="left-0 top-2" />
          <OrbitDot icon={ShieldCheck} className="right-0 top-3" />
          <OrbitDot icon={CircleDollarSign} className="bottom-0 left-4" />
          <span className="absolute left-[18%] top-[31%] h-px w-[34%] rotate-[12deg] bg-gradient-to-r from-brand/10 to-brand/55 dark:to-cyan/55" />
          <span className="absolute right-[18%] top-[32%] h-px w-[34%] -rotate-[12deg] bg-gradient-to-l from-brand/10 to-brand/55 dark:to-cyan/55" />
          <span className="absolute bottom-[27%] left-[27%] h-px w-[28%] -rotate-[17deg] bg-gradient-to-r from-brand/10 to-brand/55 dark:to-cyan/55" />
        </div>
      );

    case 2:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-brand text-white shadow-[0_12px_30px_rgba(16,102,209,.18)] dark:bg-cyan dark:text-navy">
            <Store className="size-5" />
          </div>
          <OrbitDot icon={Users} className="left-0 top-3" />
          <OrbitDot icon={Building2} className="right-0 top-2" />
          <OrbitDot icon={CircleDollarSign} className="bottom-0 right-5" />
          <span className="absolute left-[20%] top-[35%] h-px w-[32%] bg-brand/35 dark:bg-cyan/35" />
          <span className="absolute right-[20%] top-[35%] h-px w-[32%] bg-brand/35 dark:bg-cyan/35" />
          <span className="absolute bottom-[29%] right-[29%] h-px w-[25%] rotate-[20deg] bg-brand/30 dark:bg-cyan/30" />
        </div>
      );

    case 3:
      return (
        <div aria-hidden="true" className={shell}>
          <span className="absolute left-1 top-[66px] size-2 rounded-full bg-brand shadow-[0_0_0_5px_rgba(16,102,209,.10)] dark:bg-cyan" />
          <span className="absolute right-2 top-[22px] size-2 rounded-full bg-cyan shadow-[0_0_0_5px_rgba(0,196,255,.10)]" />
          <div className="absolute left-3 right-4 top-[30px] h-[50px] rounded-tr-[55px] border-r border-t border-dashed border-brand/35 dark:border-cyan/35" />
          <span className="absolute right-[32%] top-[31px] flex size-8 items-center justify-center rounded-full bg-white/80 text-brand shadow-sm backdrop-blur transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-1 dark:bg-white/[0.06] dark:text-cyan">
            <Plane className="size-4 rotate-[18deg]" />
          </span>
          <span className="absolute bottom-2 left-3 rounded-full border border-brand/10 bg-white/70 px-2 py-1 text-[6px] font-bold text-brand dark:border-cyan/10 dark:bg-white/[0.04] dark:text-cyan">BOOKING CONFIRMED</span>
        </div>
      );

    case 4:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute left-[14%] top-[15%] size-[84px] rounded-full border border-brand/10 dark:border-cyan/10" />
          <div className="absolute left-[23%] top-[24%] size-[62px] rounded-full border border-dashed border-brand/30 transition-transform duration-[1100ms] group-hover:rotate-180 dark:border-cyan/30" />
          <span className="absolute left-[37%] top-[38%] flex size-8 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-cyan/10 dark:text-cyan">
            <Repeat2 className="size-4 transition-transform duration-700 group-hover:rotate-180" />
          </span>
          <div className="absolute bottom-1 right-0 w-[58%] rounded-xl border border-brand/10 bg-white/70 p-2 shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.04]">
            <div className="flex items-center justify-between text-[6px] text-slate-400"><span>Subscription</span><span>₹999</span></div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-brand/10"><span className="block h-full w-[76%] rounded-full bg-gradient-to-r from-brand to-cyan" /></div>
          </div>
        </div>
      );

    case 5:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute left-1 top-3 flex size-10 items-center justify-center rounded-xl border border-brand/10 bg-white/75 text-brand shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.05] dark:text-cyan">
            <GraduationCap className="size-5" />
          </div>
          <div className="absolute bottom-1 right-0 w-[70%] rounded-xl border border-brand/10 bg-white/70 p-2 shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.04]">
            {['Tuition fee', 'Transport', 'Activities'].map((label, i) => (
              <div key={label} className="mb-1.5 flex items-center gap-1.5 last:mb-0">
                <Check className="size-2.5 text-emerald-500" />
                <span className="text-[6px] text-slate-400">{label}</span>
                <span className="ml-auto h-1 w-7 rounded-full bg-brand/15 dark:bg-cyan/15" style={{ opacity: 1 - i * 0.15 }} />
              </div>
            ))}
          </div>
          <span className="absolute left-[30%] top-[36%] h-px w-[34%] bg-gradient-to-r from-brand/35 to-transparent dark:from-cyan/35" />
        </div>
      );

    case 6:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute right-1 top-1 flex size-11 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10 text-emerald-500 shadow-sm backdrop-blur">
            <ShieldCheck className="size-5" />
          </div>
          <svg className="absolute left-0 top-8 h-16 w-full overflow-visible" viewBox="0 0 160 64" fill="none">
            <path d="M2 34h26l9-20 12 39 11-25 8 6h24l8-13 10 25 10-12h38" stroke="currentColor" strokeWidth="2" className="text-brand/60 dark:text-cyan/60" />
          </svg>
          <span className="absolute bottom-1 left-1 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2 py-1 text-[6px] font-bold text-emerald-500">SECURE PAYMENT</span>
        </div>
      );

    case 7:
      return (
        <div aria-hidden="true" className={shell}>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 120" fill="none">
            <path d="M12 94C42 94 37 36 76 36s34 51 70 51" stroke="currentColor" strokeWidth="2" strokeDasharray="5 6" className="text-brand/45 dark:text-cyan/45" />
          </svg>
          <span className="absolute left-1 bottom-4 size-2 rounded-full bg-brand dark:bg-cyan" />
          <span className="absolute right-2 bottom-5 size-2 rounded-full bg-cyan" />
          <span className="absolute left-[45%] top-[26%] flex size-9 items-center justify-center rounded-xl bg-white/80 text-brand shadow-sm backdrop-blur transition-transform duration-700 group-hover:translate-x-2 dark:bg-white/[0.06] dark:text-cyan">
            <Truck className="size-4" />
          </span>
          <span className="absolute right-0 top-0 rounded-lg border border-brand/10 bg-white/70 px-2 py-1 text-[6px] font-bold text-brand dark:border-cyan/10 dark:bg-white/[0.04] dark:text-cyan">PAYOUT READY</span>
        </div>
      );

    case 8:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute left-1/2 top-[42%] flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-brand/15 bg-white/80 text-brand shadow-sm backdrop-blur dark:bg-white/[0.06] dark:text-cyan">
            <Landmark className="size-5" />
          </div>
          <OrbitDot icon={ShieldCheck} className="right-0 top-1" />
          <OrbitDot icon={Activity} className="left-0 top-3" />
          <OrbitDot icon={CircleDollarSign} className="bottom-0 right-6" />
          <span className="absolute left-[17%] top-[31%] h-px w-[35%] bg-brand/30 dark:bg-cyan/30" />
          <span className="absolute right-[17%] top-[31%] h-px w-[35%] bg-brand/30 dark:bg-cyan/30" />
          <span className="absolute bottom-[27%] right-[29%] h-px w-[24%] rotate-[20deg] bg-brand/30 dark:bg-cyan/30" />
        </div>
      );

    case 9:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute left-1 top-1 flex size-10 items-center justify-center rounded-xl border border-brand/10 bg-white/75 text-brand shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.05] dark:text-cyan">
            <Landmark className="size-5" />
          </div>
          <div className="absolute bottom-1 right-0 w-[72%] rounded-xl border border-brand/10 bg-white/70 p-2 shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.04]">
            {['Citizen fee', 'Permit', 'Service'].map((label, i) => (
              <div key={label} className="flex items-center gap-1.5 border-b border-slate-100 py-1 last:border-b-0 dark:border-white/[0.06]">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span className="text-[6px] text-slate-400">{label}</span>
                <span className="ml-auto text-[6px] font-bold text-brand dark:text-cyan">{i === 1 ? 'LIVE' : 'OK'}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 10:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute left-1 top-2 flex size-10 items-center justify-center rounded-xl border border-brand/10 bg-white/75 text-brand shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.05] dark:text-cyan">
            <ReceiptText className="size-5" />
          </div>
          <div className="absolute right-0 top-1 w-[62%] rounded-xl border border-brand/10 bg-white/70 p-2 shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.04]">
            <div className="text-[6px] font-bold text-slate-400">BILL PAYMENT</div>
            <div className="mt-1 text-[10px] font-extrabold text-ink dark:text-white">₹1,860</div>
            <div className="mt-2 h-1.5 rounded-full bg-brand/10"><span className="block h-full w-[88%] rounded-full bg-gradient-to-r from-brand to-cyan" /></div>
          </div>
          <div className="absolute bottom-1 left-[24%] flex items-end gap-1">
            {[24, 42, 31, 58, 46].map((h) => <span key={h} className="w-2 rounded-t bg-brand/25 transition-transform duration-700 group-hover:scale-y-110 dark:bg-cyan/25" style={{ height: `${h}px` }} />)}
          </div>
        </div>
      );

    default:
      return (
        <div aria-hidden="true" className={shell}>
          <div className="absolute left-0 top-4 flex size-10 items-center justify-center rounded-xl border border-brand/10 bg-white/75 text-brand shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.05] dark:text-cyan">
            <CircleDollarSign className="size-5" />
          </div>
          <div className="absolute left-[29%] top-[31px] flex items-center gap-1">
            <span className="h-px w-7 bg-brand/30 dark:bg-cyan/30" />
            <ArrowRight className="size-3 text-brand/50 dark:text-cyan/50" />
            <span className="h-px w-7 bg-brand/30 dark:bg-cyan/30" />
          </div>
          <div className="absolute right-0 top-1 w-[50%] rounded-xl border border-brand/10 bg-white/70 p-2 shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.04]">
            <div className="flex items-center justify-between"><span className="text-[6px] text-slate-400">Collection</span><Check className="size-2.5 text-emerald-500" /></div>
            <div className="mt-2 flex items-center justify-between"><span className="text-[6px] text-slate-400">Verification</span><ShieldCheck className="size-2.5 text-brand dark:text-cyan" /></div>
            <div className="mt-2 flex items-center justify-between"><span className="text-[6px] text-slate-400">Disbursement</span><Zap className="size-2.5 text-brand dark:text-cyan" /></div>
          </div>
          <span className="absolute bottom-1 right-1 rounded-full border border-brand/10 bg-brand/[0.06] px-2 py-1 text-[6px] font-bold text-brand dark:border-cyan/10 dark:bg-cyan/[0.06] dark:text-cyan">NBFC WORKFLOW</span>
        </div>
      );
  }
}

function MiniPanel({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-x-0 top-0 rounded-xl border border-brand/10 bg-white/[0.72] p-2.5 shadow-[0_12px_30px_rgba(16,102,209,.08)] backdrop-blur dark:border-cyan/10 dark:bg-white/[0.04]">
      {children}
    </div>
  );
}

function OrbitDot({ icon: Icon, className }: { icon: LucideIcon; className: string }) {
  return (
    <span className={`absolute flex size-7 items-center justify-center rounded-xl border border-brand/10 bg-white/75 text-brand shadow-sm backdrop-blur transition-transform duration-500 group-hover:scale-110 dark:border-cyan/10 dark:bg-white/[0.055] dark:text-cyan ${className}`}>
      <Icon className="size-3.5" />
    </span>
  );
}