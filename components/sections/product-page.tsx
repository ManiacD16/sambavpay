import {
  Activity,
  ArrowRight,
  Check,
  CircleDot,
  Gauge,
  Network,
  RefreshCcw,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import type { Product } from '@/data/products';
import { InnerHero } from '@/components/sections/inner-hero';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { FinalCta } from '@/components/sections/final-cta';
import { PaymentNetworkStrip } from '@/components/sections/payment-network-strip';

type CapabilityVisualType =
  | 'route'
  | 'rules'
  | 'retry'
  | 'failover'
  | 'signals'
  | 'visibility';

export function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <InnerHero
        eyebrow={product.eyebrow}
        title={product.hero}
        description={product.description}
        icon={product.icon}
        secondaryHref="/developers"
        secondaryLabel="Explore APIs"
      />

      {product.slug === 'payment-gateway' ? <PaymentNetworkStrip /> : null}

      <section className="relative overflow-hidden pb-24 lg:pb-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 74% 20%, rgba(0,196,255,.10), transparent 22%), radial-gradient(circle at 88% 76%, rgba(16,102,209,.08), transparent 26%)',
          }}
        />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <GsapReveal>
              <SectionHeading
                eyebrow="Core capabilities"
                title={`Core capabilities built into ${product.name}.`}
                description="A connected set of capabilities designed to simplify integration, improve visibility and give your teams greater operational control."
              />
            </GsapReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {product.capabilities.map((capability, index) => (
                <GsapReveal key={capability} delay={index * 0.04}>
                  <SpotlightCard
                    className="group relative min-h-[200px] overflow-hidden rounded-2xl p-5 [transform-style:preserve-3d] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(1000px)_translateY(-7px)_rotateX(2deg)_rotateY(-2deg)_scale(1.018)] hover:shadow-[0_24px_70px_rgba(6,30,87,.10)] dark:hover:shadow-[0_26px_80px_rgba(0,196,255,.08)]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.28] transition-opacity duration-500 group-hover:opacity-[0.52] dark:opacity-[0.12] dark:group-hover:opacity-[0.28]"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(16,102,209,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.08) 1px, transparent 1px)',
                        backgroundSize: '26px 26px',
                        maskImage:
                          'linear-gradient(to bottom left, black, transparent 68%)',
                        WebkitMaskImage:
                          'linear-gradient(to bottom left, black, transparent 68%)',
                      }}
                    />

                    <div className="pointer-events-none absolute -right-14 -top-16 size-44 rounded-full bg-cyan/[0.08] blur-3xl transition-all duration-700 group-hover:-translate-x-4 group-hover:translate-y-3 group-hover:scale-125 group-hover:bg-cyan/[0.14] dark:bg-cyan/[0.05]" />

                    <CapabilityVisual
                      type={getCapabilityVisualType(capability, index)}
                    />

                    <div className="relative z-10 flex items-start gap-3">
                      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand/10 bg-brand/10 text-brand shadow-[0_8px_24px_rgba(16,102,209,.07)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-transparent group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(16,102,209,.22)] dark:border-cyan/10 dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                        <Check className="size-4" />
                      </span>

                      <div className="min-w-0 max-w-[72%]">
                        <span className="font-mono text-[9px] tracking-[0.15em] text-slate-300 transition-colors duration-500 group-hover:text-brand/55 dark:text-slate-600 dark:group-hover:text-cyan/50">
                          0{index + 1}
                        </span>
                        <p className="mt-1 text-sm font-bold leading-6 text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">
                          {capability}
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-x-5 bottom-5 z-10 h-px overflow-hidden bg-slate-100 dark:bg-white/[0.07]">
                      <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                    </div>
                  </SpotlightCard>
                </GsapReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbff] py-24 lg:py-36 dark:bg-[#03152d]">
        <div className="absolute inset-0 bg-grid-light bg-[size:54px_54px] opacity-[0.45] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] dark:bg-grid-dark dark:opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.06] blur-3xl dark:bg-cyan/[0.04]" />

        <Container className="relative">
          <GsapReveal>
            <SectionHeading
              eyebrow="How it works"
              title="A clear flow from request to operational outcome."
              description="Each stage is visible, structured and designed to integrate with your product and operations."
              align="center"
            />
          </GsapReveal>

          <div className="relative mt-14 grid gap-4 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-slate-200 lg:block dark:bg-white/10" />
            <div className="absolute left-[12.5%] right-[25%] top-8 hidden h-px bg-gradient-to-r from-brand via-cyan to-brand/20 lg:block" />

            {product.flow.map((step, index) => (
              <GsapReveal key={step.title} delay={index * 0.06}>
                <SpotlightCard className="group relative min-h-[285px] overflow-hidden rounded-2xl p-5 [transform-style:preserve-3d] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(1000px)_translateY(-8px)_scale(1.018)] hover:shadow-[0_24px_70px_rgba(6,30,87,.10)] dark:hover:shadow-[0_28px_80px_rgba(0,196,255,.08)]">
                  <FlowVisual index={index} />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-full bg-brand font-mono text-xs font-extrabold text-white shadow-[0_14px_34px_rgba(16,102,209,.28)] transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan group-hover:text-navy dark:bg-cyan dark:text-navy">
                      0{index + 1}
                    </span>
                    {index < product.flow.length - 1 ? (
                      <ArrowRight className="size-4 text-slate-300 lg:hidden" />
                    ) : (
                      <Sparkles className="size-4 text-brand transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125 dark:text-cyan" />
                    )}
                  </div>

                  <div className="relative z-10 mt-20 max-w-[84%]">
                    <h3 className="font-display text-lg font-extrabold tracking-[-0.035em] text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 z-10 h-px bg-slate-100 dark:bg-white/[0.07]">
                    <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 group-hover:w-full" />
                  </div>
                </SpotlightCard>
              </GsapReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <GsapReveal>
              <SectionHeading
                eyebrow="Business outcomes"
                title="Built for control, resilience and scale."
                description="Measure the outcomes that matter across reliability, operational control and integration velocity."
              />
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {product.outcomes.map((outcome, index) => (
                  <div key={outcome} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-bold text-ink transition duration-500 hover:-translate-y-1 hover:border-brand/20 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.035] dark:text-white dark:hover:border-cyan/20">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy"><CircleDot className="size-4" /></span>
                    <span><strong className="mr-2 font-mono text-[9px] text-slate-300 dark:text-slate-600">0{index + 1}</strong>{outcome}</span>
                  </div>
                ))}
              </div>
            </GsapReveal>

            <GsapReveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#04152f] p-6 text-white shadow-[0_38px_100px_rgba(6,30,87,.3)] sm:p-8">
                <div className="absolute inset-0 bg-grid-dark bg-[size:34px_34px] opacity-[0.45]" />
                <div className="absolute -right-20 -top-20 size-72 rounded-full bg-cyan/[0.16] blur-3xl transition duration-1000 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-xl border border-cyan/[0.15] bg-cyan/10 text-cyan shadow-glow">
                        <Workflow className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-extrabold">Unified platform workflow</p>
                        <p className="mt-1 text-[10px] text-slate-400">Connected product architecture</p>
                      </div>
                    </div>
                    <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[9px] font-bold text-emerald-200 sm:inline-flex">Operational</span>
                  </div>
                  <div className="relative mt-8 space-y-3">
                    <div className="absolute bottom-6 left-4 top-6 w-px bg-gradient-to-b from-cyan via-brand to-transparent" />
                    {[product.name, 'Operational controls', 'Normalized events', 'Analytics & reconciliation'].map((item, index) => (
                      <div key={item} className="group/row relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:translate-x-1 hover:border-cyan/20 hover:bg-white/[0.08]">
                        <span className="relative z-10 flex size-8 items-center justify-center rounded-lg bg-[#09275a] font-mono text-[10px] font-bold text-cyan ring-4 ring-[#04152f]">0{index + 1}</span>
                        <span className="text-sm font-bold">{item}</span>
                        <ArrowRight className="ml-auto size-4 text-slate-500 transition group-hover/row:translate-x-1 group-hover/row:text-cyan" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GsapReveal>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

function getCapabilityVisualType(
  capability: string,
  index: number,
): CapabilityVisualType {
  const value = capability.toLowerCase();

  if (value.includes('route') || value.includes('provider')) return 'route';
  if (value.includes('rule') || value.includes('control')) return 'rules';
  if (value.includes('retry') || value.includes('recover')) return 'retry';
  if (value.includes('failover')) return 'failover';
  if (
    value.includes('health') ||
    value.includes('performance') ||
    value.includes('signal') ||
    value.includes('analytics')
  ) return 'signals';
  if (
    value.includes('visibility') ||
    value.includes('status') ||
    value.includes('reconciliation') ||
    value.includes('report')
  ) return 'visibility';

  return (['route', 'rules', 'retry', 'failover', 'signals', 'visibility'] as const)[index % 6];
}

function CapabilityVisual({ type }: { type: CapabilityVisualType }) {
  const shell = 'pointer-events-none absolute right-4 top-[4.3rem] z-[2] h-[104px] w-[42%] origin-center opacity-[0.48] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-[1.08] group-hover:opacity-100 dark:opacity-[0.28] dark:group-hover:opacity-[0.78]';

  if (type === 'route') {
    return (
      <div aria-hidden="true" className={shell}>
        <span className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_0_5px_rgba(16,102,209,.10)] dark:bg-cyan" />
        <span className="absolute left-3 top-[21px] h-[30px] w-[58%] rounded-tr-3xl border-r border-t border-brand/35 dark:border-cyan/35" />
        <span className="absolute left-3 top-1/2 h-px w-[66%] bg-gradient-to-r from-brand/55 to-brand/10 dark:from-cyan/55" />
        <span className="absolute bottom-[18px] left-3 h-[32px] w-[52%] rounded-br-3xl border-b border-r border-brand/20 dark:border-cyan/25" />
        {[12, 47, 82].map((top, i) => (
          <span key={top} className={`absolute right-0 flex size-6 items-center justify-center rounded-lg border text-[7px] font-bold shadow-sm ${i === 0 ? 'border-brand/20 bg-brand text-white dark:border-cyan/20 dark:bg-cyan dark:text-navy' : 'border-brand/10 bg-white/80 text-brand dark:border-cyan/10 dark:bg-white/[0.05] dark:text-cyan'}`} style={{ top }}>
            {String.fromCharCode(65 + i)}
          </span>
        ))}
        <span className="absolute left-[45%] top-[40%] flex size-7 items-center justify-center rounded-full bg-brand/10 text-brand transition-all duration-500 group-hover:rotate-12 group-hover:bg-brand group-hover:text-white dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy"><Route className="size-3.5" /></span>
      </div>
    );
  }

  if (type === 'rules') {
    return (
      <div aria-hidden="true" className={shell}>
        <div className="absolute inset-x-0 top-2 space-y-2.5">
          {[72, 58, 84].map((width, index) => (
            <div key={width} className="flex items-center gap-2">
              <span className={`flex size-6 shrink-0 items-center justify-center rounded-lg border ${index === 1 ? 'border-cyan/20 bg-cyan/10 text-cyan' : 'border-brand/10 bg-white/70 text-brand dark:border-cyan/10 dark:bg-white/[0.04] dark:text-cyan'}`}>
                <CircleDot className="size-3" />
              </span>
              <span className="h-1.5 rounded-full bg-brand/15 dark:bg-cyan/15" style={{ width: `${width}%` }} />
              <span className="size-2 rounded-full bg-emerald-400/70" />
            </div>
          ))}
        </div>
        <span className="absolute bottom-0 right-2 flex size-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-500 group-hover:rotate-12 dark:bg-cyan/10 dark:text-cyan"><ShieldCheck className="size-4" /></span>
      </div>
    );
  }

  if (type === 'retry') {
    return (
      <div aria-hidden="true" className={shell}>
        <div className="absolute right-2 top-0 size-[82px] rounded-full border border-brand/10 dark:border-cyan/10" />
        <div className="absolute right-[12px] top-[10px] size-[62px] rounded-full border border-dashed border-brand/30 transition-transform duration-[1200ms] group-hover:rotate-180 dark:border-cyan/30" />
        <span className="absolute right-[25px] top-[23px] flex size-9 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-cyan/10 dark:text-cyan"><RefreshCcw className="size-4 transition-transform duration-700 group-hover:rotate-180" /></span>
        <div className="absolute bottom-2 left-0 flex items-center gap-1.5">
          {[0, 1, 2].map((item) => <span key={item} className={`h-2.5 rounded-full ${item === 2 ? 'w-8 bg-emerald-400/55' : 'w-5 bg-brand/15 dark:bg-cyan/15'}`} />)}
        </div>
      </div>
    );
  }

  if (type === 'failover') {
    return (
      <div aria-hidden="true" className={shell}>
        <span className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rounded-full bg-brand dark:bg-cyan" />
        <span className="absolute left-3 top-1/2 h-px w-[42%] bg-brand/40 dark:bg-cyan/40" />
        <span className="absolute left-[42%] top-[22%] h-[28%] w-[28%] rounded-tr-3xl border-r border-t border-cyan/45" />
        <span className="absolute bottom-[22%] left-[42%] h-[28%] w-[28%] rounded-br-3xl border-b border-r border-brand/25 dark:border-cyan/25" />
        <span className="absolute right-0 top-[7%] flex h-7 w-12 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-[7px] font-bold text-emerald-500">LIVE</span>
        <span className="absolute bottom-[6%] right-0 flex h-7 w-12 items-center justify-center rounded-lg border border-amber-400/20 bg-amber-400/10 text-[7px] font-bold text-amber-500">BACKUP</span>
        <span className="absolute left-[37%] top-[39%] flex size-8 items-center justify-center rounded-full bg-cyan/10 text-cyan transition-transform duration-500 group-hover:scale-110"><Network className="size-4" /></span>
      </div>
    );
  }

  if (type === 'signals') {
    return (
      <div aria-hidden="true" className={shell}>
        <div className="absolute inset-0 rounded-xl border border-brand/10 bg-white/55 p-2.5 shadow-sm backdrop-blur-sm dark:border-cyan/10 dark:bg-white/[0.035]">
          <div className="flex items-center justify-between"><span className="h-1.5 w-10 rounded-full bg-brand/15 dark:bg-cyan/15" /><span className="flex items-center gap-1 text-[7px] font-bold text-emerald-500"><span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" /> LIVE</span></div>
          <div className="mt-3 flex h-[52px] items-end gap-1.5">{[28, 46, 36, 64, 51, 78, 68].map((height, index) => <span key={`${height}-${index}`} className="w-full origin-bottom rounded-t-[3px] bg-gradient-to-t from-brand/25 to-brand/70 transition-transform duration-700 group-hover:scale-y-110 dark:from-cyan/20 dark:to-cyan/65" style={{ height: `${height}%`, transitionDelay: `${index * 35}ms` }} />)}</div>
          <span className="absolute left-2 right-2 top-[58%] h-px -rotate-[7deg] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-70" />
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={shell}>
      <div className="absolute inset-0 grid grid-cols-2 gap-2 rounded-xl border border-brand/10 bg-white/55 p-2.5 shadow-sm backdrop-blur-sm dark:border-cyan/10 dark:bg-white/[0.035]">
        {[0, 1, 2, 3].map((item) => <span key={item} className="relative rounded-lg border border-brand/10 bg-brand/[0.045] dark:border-cyan/10 dark:bg-cyan/[0.04]"><span className={`absolute left-2 top-2 h-1.5 rounded-full bg-brand/20 dark:bg-cyan/20 ${item % 2 === 0 ? 'w-8' : 'w-5'}`} /><span className="absolute bottom-2 left-2 right-2 h-1 rounded-full bg-brand/10 dark:bg-cyan/10" /></span>)}
      </div>
      <span className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_24px_rgba(16,102,209,.22)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 dark:bg-cyan dark:text-navy"><Gauge className="size-4" /></span>
    </div>
  );
}

function FlowVisual({ index }: { index: number }) {
  const base = 'pointer-events-none absolute right-4 top-14 z-[2] h-[92px] w-[44%] opacity-[0.46] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-[1.08] group-hover:opacity-100 dark:opacity-[0.28] dark:group-hover:opacity-[0.74]';

  if (index === 0) {
    return <div aria-hidden="true" className={base}><span className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rounded-full bg-brand dark:bg-cyan" /><span className="absolute left-3 top-1/2 h-px w-[52%] bg-gradient-to-r from-brand/60 to-cyan/20" /><span className="absolute right-0 top-[24%] flex h-12 w-16 items-center justify-center rounded-xl border border-brand/10 bg-white/70 text-brand shadow-sm backdrop-blur dark:border-cyan/10 dark:bg-white/[0.04] dark:text-cyan"><ArrowRight className="size-4" /></span></div>;
  }
  if (index === 1) {
    return <div aria-hidden="true" className={base}><div className="absolute inset-0 rounded-xl border border-brand/10 bg-white/55 p-2 dark:border-cyan/10 dark:bg-white/[0.035]"><div className="space-y-2">{[72, 54, 82].map((w, i) => <div key={w} className="flex items-center gap-2"><span className={`size-2.5 rounded-full ${i === 1 ? 'bg-cyan' : 'bg-brand/30 dark:bg-cyan/30'}`} /><span className="h-1.5 rounded-full bg-brand/15 dark:bg-cyan/15" style={{ width: `${w}%` }} /></div>)}</div><Activity className="absolute bottom-2 right-2 size-4 text-brand dark:text-cyan" /></div></div>;
  }
  if (index === 2) {
    return <div aria-hidden="true" className={base}><span className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rounded-full bg-brand dark:bg-cyan" /><span className="absolute left-3 top-[24%] h-[28%] w-[55%] rounded-tr-3xl border-r border-t border-brand/30 dark:border-cyan/30" /><span className="absolute bottom-[22%] left-3 h-[28%] w-[55%] rounded-br-3xl border-b border-r border-brand/18 dark:border-cyan/20" /><span className="absolute right-0 top-[10%] h-7 w-11 rounded-lg border border-emerald-400/20 bg-emerald-400/10" /><span className="absolute bottom-[8%] right-0 h-7 w-11 rounded-lg border border-brand/10 bg-brand/5 dark:border-cyan/10 dark:bg-cyan/5" /><Route className="absolute left-[43%] top-[39%] size-4 text-brand dark:text-cyan" /></div>;
  }
  return <div aria-hidden="true" className={base}><div className="absolute right-1 top-0 size-[74px] rounded-full border border-brand/10 dark:border-cyan/10" /><div className="absolute right-[9px] top-[8px] size-[58px] rounded-full border border-dashed border-brand/30 transition-transform duration-[1200ms] group-hover:rotate-180 dark:border-cyan/30" /><span className="absolute right-[21px] top-[20px] flex size-8 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-cyan/10 dark:text-cyan"><RefreshCcw className="size-4 transition-transform duration-700 group-hover:rotate-180" /></span><span className="absolute bottom-3 left-0 flex items-center gap-1.5 text-[7px] font-bold text-emerald-500"><span className="size-1.5 rounded-full bg-emerald-400" /> RECOVERED</span></div>;
}