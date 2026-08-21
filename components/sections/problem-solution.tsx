import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  CheckCircle2,
  DatabaseZap,
  Layers3,
  RefreshCcw,
  Route,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';

const fragments = [
  { icon: Boxes, label: 'Multiple providers', meta: 'Separate integrations' },
  { icon: AlertTriangle, label: 'Failed transactions', meta: 'Disconnected recovery' },
  { icon: RefreshCcw, label: 'Manual retries', meta: 'Operational overhead' },
  { icon: Layers3, label: 'Fragmented reporting', meta: 'No single source of truth' },
];

export function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-24 lg:py-36 dark:bg-[#03152d]">
      <span aria-hidden="true" className="section-divider" />
      <div className="absolute inset-0 bg-grid-light bg-[size:54px_54px] opacity-[0.55] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)] dark:bg-grid-dark dark:opacity-[0.35]" />
      <div className="absolute -left-40 top-1/3 size-96 rounded-full bg-brand/[0.08] blur-3xl dark:bg-cyan/[0.06]" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <GsapReveal>
            <SectionHeading
              eyebrow="From fragmentation to control"
              title="More providers should not mean more complexity."
              description="Sambhav Pay gives businesses a single control layer for connected payment paths, routing rules, transaction visibility and reconciliation workflows."
            />
            <div className="mt-9 space-y-4">
              {[
                'Connect through one platform layer',
                'Evaluate routes using operational signals',
                'Recover eligible failures with retry and failover logic',
                'Standardize visibility across payment journeys',
              ].map((item, index) => (
                <div key={item} className="group flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/[0.08] text-brand transition group-hover:bg-brand group-hover:text-white dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                    <CheckCircle2 className="size-3.5" />
                  </span>
                  <span><strong className="mr-2 font-mono text-[10px] text-slate-300 dark:text-slate-600">0{index + 1}</strong>{item}</span>
                </div>
              ))}
            </div>
          </GsapReveal>

          <GsapReveal delay={0.1} className="relative">
            <div className="absolute inset-x-10 top-1/2 h-28 -translate-y-1/2 rounded-full bg-brand/[0.15] blur-3xl dark:bg-cyan/10" />
            <div className="relative grid gap-4 md:grid-cols-[1fr_64px_1.08fr] md:items-center">
              <div className="space-y-3">
                {fragments.map((fragment, index) => {
                  const Icon = fragment.icon;
                  return (
                    <SpotlightCard key={fragment.label} className="group rounded-2xl p-4 hover:-translate-x-1">
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/[0.08] text-rose-500 transition group-hover:bg-rose-500 group-hover:text-white dark:bg-rose-400/10 dark:text-rose-300">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <span className="block text-sm font-bold text-ink dark:text-white">{fragment.label}</span>
                          <span className="mt-1 block text-[10px] text-slate-400">{fragment.meta}</span>
                        </div>
                        <span className="ml-auto font-mono text-[9px] text-slate-300 dark:text-slate-600">0{index + 1}</span>
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>

              <div className="relative hidden h-full items-center justify-center md:flex">
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent" />
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-4 border-[#f7fbff] bg-brand text-white shadow-[0_16px_36px_rgba(16,102,209,.34)] dark:border-[#03152d]">
                  <ArrowRight className="size-5" />
                </span>
              </div>

              <div className="group relative overflow-hidden rounded-[1.9rem] border border-brand/20 bg-gradient-to-br from-[#0d62c8] via-[#084897] to-[#041b4d] p-6 text-white shadow-[0_34px_90px_rgba(6,30,87,.25)] transition duration-700 hover:-translate-y-1 hover:shadow-[0_44px_110px_rgba(6,30,87,.34)] sm:p-7">
                <div className="absolute inset-0 bg-grid-dark bg-[size:30px_30px] opacity-30" />
                <div className="absolute -right-20 -top-20 size-64 rounded-full bg-cyan/20 blur-3xl transition duration-700 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan shadow-glow backdrop-blur">
                      <Route className="size-7" />
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[9px] font-bold text-emerald-200">
                      <span className="size-1.5 animate-pulse rounded-full bg-emerald-300" /> Active layer
                    </span>
                  </div>
                  <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan">Sambhav Pay</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em]">One intelligent control layer.</h3>
                  <p className="mt-4 text-sm leading-7 text-blue-100/75">One integration, configurable routing and unified operational visibility.</p>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <Mini icon={DatabaseZap} label="Unified data" meta="Normalized events" />
                    <Mini icon={RefreshCcw} label="Failover ready" meta="Recovery logic" />
                  </div>
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] p-3 text-[10px] text-blue-100/75">
                    <Sparkles className="size-4 text-cyan" /> Orchestrate without rebuilding your payment stack.
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

function Mini({ icon: Icon, label, meta }: { icon: typeof Route; label: string; meta: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 transition hover:bg-white/[0.1]">
      <Icon className="size-4 text-cyan" />
      <p className="mt-3 text-xs font-bold">{label}</p>
      <p className="mt-1 text-[9px] text-slate-400">{meta}</p>
    </div>
  );
}
