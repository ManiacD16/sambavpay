import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SpotlightCard } from '@/components/ui/spotlight-card';

const marks = [
  {
    name: 'PCI DSS',
    category: 'Payment Security',
    href: '/security#security-compliance',
    src: '/brand/compliance/pci-dss.svg',
    width: 630,
    height: 253,
    imageClassName: 'h-10 sm:h-12',
    icon: BadgeCheck,
    label: 'Compliance',
  },
  {
    name: 'ISO 27001',
    category: 'Information Security',
    href: '/security#security-compliance',
    src: '/brand/compliance/iso-27001.png',
    width: 640,
    height: 320,
    imageClassName: 'h-11 sm:h-12',
    icon: ShieldCheck,
    label: 'Security Standard',
  },
  {
    name: 'Visa',
    category: 'Card Network',
    href: '/products/payment-gateway',
    src: '/brand/payment-networks/visa.svg',
    width: 1000,
    height: 324,
    imageClassName: 'h-8 sm:h-9',
    icon: CreditCard,
    label: 'Payment Network',
  },
  {
    name: 'Mastercard',
    category: 'Card Network',
    href: '/products/payment-gateway',
    src: '/brand/payment-networks/mastercard.png',
    width: 642,
    height: 389,
    imageClassName: 'h-11 sm:h-12',
    icon: CreditCard,
    label: 'Payment Network',
  },
] as const;

export function HomeTrustLogos() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,102,209,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.06) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.055] blur-3xl dark:bg-cyan/[0.035]"
      />

      <Container className="relative">
        <GsapReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow-pill mx-auto mb-5 w-fit">
              <Sparkles className="size-3.5" />
              Trust &amp; ecosystem
            </div>
            <h2 className="text-balance font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.055em] text-ink dark:text-white">
              Security standards and payment networks, together in one place.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
              A compact view of SambhavPay&apos;s security and payment ecosystem. Compliance marks and payment-network logos are shown within their respective scope.
            </p>
          </div>
        </GsapReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {marks.map((item, index) => {
            const Icon = item.icon;

            return (
              <GsapReveal key={item.name} delay={index * 0.04}>
                <Link href={item.href} className="block h-full focus-visible:outline-none">
                  <SpotlightCard className="group flex min-h-[190px] h-full flex-col overflow-hidden rounded-[1.45rem] p-5 [transform-style:preserve-3d] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(1000px)_translateY(-8px)_rotateX(2deg)_scale(1.018)] hover:border-brand/20 hover:shadow-[0_24px_70px_rgba(6,30,87,.10)] dark:hover:border-cyan/20">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-25 transition-opacity duration-700 group-hover:opacity-50 dark:opacity-10 dark:group-hover:opacity-25"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(16,102,209,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.09) 1px, transparent 1px)',
                        backgroundSize: '26px 26px',
                        maskImage: 'linear-gradient(to bottom left, black, transparent 72%)',
                        WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 72%)',
                      }}
                    />

                    <div className="pointer-events-none absolute -right-12 -top-16 size-40 rounded-full bg-cyan/[0.07] blur-3xl transition-all duration-700 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-125 group-hover:bg-cyan/[0.13] dark:bg-cyan/[0.03]" />

                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <span className="flex size-9 items-center justify-center rounded-xl border border-brand/10 bg-brand/[0.08] text-brand transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white dark:border-cyan/10 dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                        <Icon className="size-4" />
                      </span>
                      <span className="font-mono text-[8px] tracking-[0.16em] text-slate-300 dark:text-slate-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="relative z-10 mt-5 flex min-h-[70px] items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_12px_28px_rgba(6,30,87,.04)] transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-[1.035] group-hover:border-brand/20 dark:border-white/[0.08] dark:bg-white/[0.96]">
                      <Image
                        src={item.src}
                        alt={`${item.name} logo`}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 640px) 140px, 170px"
                        className={`${item.imageClassName} max-w-[78%] w-auto object-contain transition-transform duration-700 group-hover:scale-110`}
                      />
                    </div>

                    <div className="relative z-10 mt-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-brand dark:text-cyan">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xs font-bold text-ink dark:text-white">{item.category}</p>
                      </div>

                      <span className="flex size-7 translate-x-1 items-center justify-center rounded-full border border-brand/10 bg-white/80 text-brand opacity-65 transition-all duration-500 group-hover:translate-x-0 group-hover:-translate-y-0.5 group-hover:opacity-100 dark:border-cyan/10 dark:bg-white/[0.05] dark:text-cyan">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>

                    <div className="absolute inset-x-5 bottom-2 h-px overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="block h-full w-full -translate-x-full bg-gradient-to-r from-brand via-cyan to-brand transition-transform duration-700 group-hover:translate-x-0" />
                    </div>
                  </SpotlightCard>
                </Link>
              </GsapReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}