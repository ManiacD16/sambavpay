import type { LucideIcon } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { InnerHeroVisual } from '@/components/sections/inner-hero-visual';

export function InnerHero({
  eyebrow,
  title,
  description,
  icon: Icon,
  primaryHref = '/contact',
  primaryLabel = 'Request a Demo',
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden pb-24 pt-32 sm:pt-36 xl:flex xl:items-center xl:pb-28 xl:pt-36">
      <div className="absolute inset-0 -z-30 bg-mesh-light dark:bg-mesh-dark" />
      <div className="decorative-grid absolute inset-0 -z-20 bg-grid-light bg-[size:48px_48px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_88%)] dark:bg-grid-dark dark:opacity-45" />
      <div className="ambient-orb absolute -left-48 top-[18%] -z-20 size-[34rem] rounded-full bg-brand/[0.065] blur-3xl dark:bg-cyan/[0.045]" />
      <div className="ambient-orb absolute right-[-16rem] top-[4%] -z-20 size-[38rem] rounded-full bg-cyan/[0.07] blur-3xl dark:bg-brand/[0.09]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-2vw] -z-20 select-none overflow-hidden text-center font-display text-[16vw] font-extrabold leading-none tracking-[-0.09em] text-brand/[0.022] dark:text-white/[0.016]">
        SAMBHAV
      </div>

      <Container>
        <div className="grid items-center gap-14 xl:grid-cols-[.88fr_1.12fr] xl:gap-12 2xl:gap-16">
          <GsapReveal y={28}>
            <div className="mx-auto max-w-3xl text-center xl:mx-0 xl:text-left">
              <div className="flex flex-col items-center gap-5 xl:items-start">
                {Icon ? (
                  <div className="icon-badge relative flex size-16 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-brand to-[#07489f] text-white shadow-[0_24px_60px_rgba(16,102,209,.3)] dark:from-cyan dark:to-brand dark:text-navy">
                    <div className="absolute -inset-3 -z-10 rounded-[1.8rem] border border-brand/10 dark:border-cyan/10" />
                    <Icon className="size-7" />
                  </div>
                ) : null}
                <div className="eyebrow-pill">
                  <span aria-hidden="true" className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-[0.28] motion-reduce:hidden" />
                    <span className="relative inline-flex size-2 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
                  </span>
                  {eyebrow}
                </div>
              </div>

              <h1 className="mt-7 text-balance font-display text-[clamp(2.75rem,5.2vw,5.2rem)] font-semibold leading-[0.99] tracking-[-0.064em] text-ink dark:text-white">
                {title}
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:text-lg xl:mx-0 dark:text-slate-300">
                {description}
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row xl:justify-start">
                <Button href={primaryHref}>{primaryLabel}</Button>
                {secondaryHref && secondaryLabel ? (
                  <Button href={secondaryHref} variant="secondary">{secondaryLabel}</Button>
                ) : null}
              </div>
              <div className="mt-10 hidden items-center justify-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400 lg:flex xl:justify-start">
                <span className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white/75 text-brand shadow-sm dark:border-white/10 dark:bg-white/[0.045] dark:text-cyan">
                  <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
                </span>
                Scroll to explore
              </div>
            </div>
          </GsapReveal>

          <GsapReveal delay={0.1} y={30}>
            <div className="relative">
              <InnerHeroVisual label={eyebrow} />
            </div>
          </GsapReveal>
        </div>
      </Container>
    </section>
  );
}
