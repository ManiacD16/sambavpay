import Image from 'next/image';
import { CreditCard, ShieldCheck, Sparkles } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';

const networks = [
  {
    name: 'Visa',
    src: '/brand/payment-networks/visa.svg',
    width: 1000,
    height: 324,
    imageClassName: 'h-8 w-auto sm:h-9',
  },
  {
    name: 'Mastercard',
    src: '/brand/payment-networks/mastercard.png',
    width: 642,
    height: 389,
    imageClassName: 'h-11 w-auto sm:h-12',
  },
] as const;

export function PaymentNetworkStrip() {
  return (
    <section className="relative overflow-hidden pb-20 lg:pb-24">
      <Container>
        <GsapReveal>
          <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_60px_rgba(6,30,87,.06)] backdrop-blur-xl sm:p-6 lg:p-7 dark:border-white/[0.08] dark:bg-white/[0.025]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-35 transition-opacity duration-700 group-hover:opacity-60 dark:opacity-15 dark:group-hover:opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(16,102,209,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.07) 1px, transparent 1px)',
                backgroundSize: '34px 34px',
                maskImage: 'linear-gradient(to right, transparent, black 32%, black 100%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 32%, black 100%)',
              }}
            />

            <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-cyan/[0.08] blur-3xl transition-all duration-1000 group-hover:scale-125 group-hover:bg-cyan/[0.13] dark:bg-cyan/[0.045]" />

            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand dark:text-cyan">
                  <Sparkles className="size-3.5" />
                  Card payment support
                </div>

                <h2 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.045em] text-ink sm:text-3xl dark:text-white">
                  Familiar card networks, one SambhavPay integration.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Card payments can be presented through supported networks such as Visa and Mastercard, subject to your configured acquiring/payment partners and merchant setup.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-emerald-700 dark:border-emerald-300/15 dark:bg-emerald-300/10 dark:text-emerald-200">
                  <ShieldCheck className="size-3.5" />
                  Secure card acceptance workflow
                </div>
              </div>

              <div className="grid min-w-0 grid-cols-2 gap-3 sm:min-w-[360px]">
                {networks.map((network) => (
                  <div
                    key={network.name}
                    className="group/network relative flex min-h-[126px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_16px_38px_rgba(6,30,87,.05)] [transform-style:preserve-3d] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(900px)_translateY(-6px)_rotateX(3deg)_scale(1.025)] hover:border-brand/20 hover:shadow-[0_24px_55px_rgba(6,30,87,.09)] dark:border-white/[0.08] dark:bg-white/[0.04] dark:hover:border-cyan/20"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/[0.025] via-transparent to-cyan/[0.07] opacity-0 transition-opacity duration-500 group-hover/network:opacity-100" />
                    <div className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-lg bg-brand/[0.07] text-brand transition-all duration-500 group-hover/network:-rotate-6 group-hover/network:scale-110 group-hover/network:bg-brand group-hover/network:text-white dark:bg-cyan/10 dark:text-cyan dark:group-hover/network:bg-cyan dark:group-hover/network:text-navy">
                      <CreditCard className="size-4" />
                    </div>
                    <span className="absolute right-3 top-3 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-300 dark:text-slate-600">
                      Network
                    </span>

                    <Image
                      src={network.src}
                      alt={`${network.name} card network`}
                      width={network.width}
                      height={network.height}
                      sizes="(max-width: 640px) 120px, 150px"
                      className={`${network.imageClassName} relative z-10 object-contain transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover/network:scale-110`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GsapReveal>
      </Container>
    </section>
  );
}
