'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Database,
  Route,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

const bars = [42, 58, 48, 72, 64, 83, 71, 91, 78, 98];

export function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#031225] py-24 text-white lg:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-16 bg-gradient-to-b from-[var(--background)] to-transparent opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-gradient-to-t from-[var(--background)] to-transparent opacity-65" />
      <div className="decorative-grid absolute inset-0 bg-grid-dark bg-[size:46px_46px] opacity-[0.38] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <div className="ambient-orb absolute -left-40 top-1/4 size-[32rem] rounded-full bg-brand/20 blur-3xl" />
      <div className="ambient-orb absolute -right-40 bottom-0 size-[34rem] rounded-full bg-cyan/[0.1] blur-3xl" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <GsapReveal>
            <SectionHeading
              eyebrow="Unified operations"
              title="See the payment journey, not just the endpoint."
              description="Bring transaction status, provider signals, routing decisions and reconciliation activity into one operational view."
              className="[&_h2]:text-white [&_p]:text-slate-300"
            />
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                { icon: Route, text: 'Route and provider visibility' },
                { icon: Activity, text: 'Live operational signals' },
                { icon: Database, text: 'Reconciliation workflows' },
                { icon: ShieldCheck, text: 'Role-aware controls' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-3.5 text-sm text-slate-200 backdrop-blur transition hover:border-cyan/20 hover:bg-white/[0.075]"
                  >
                    <span className="flex size-8 items-center justify-center rounded-lg bg-cyan/10 text-cyan transition group-hover:bg-cyan group-hover:text-navy">
                      <Icon className="size-4" />
                    </span>
                    <span><strong className="mr-2 font-mono text-[9px] text-slate-600">0{index + 1}</strong>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <div className="perspective-1200 relative py-8 lg:py-12">
              <motion.div
                initial={{ rotateX: 6, rotateY: -4, y: 22 }}
                whileInView={{ rotateX: 0, rotateY: 0, y: 0 }}
                whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="preserve-3d relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#f8fbff] shadow-[0_48px_130px_rgba(0,0,0,.48)]"
              >
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-rose-400" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden text-[10px] font-semibold text-slate-400 sm:inline">Operations dashboard</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-700">
                      <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> Live
                    </span>
                  </div>
                </div>
                <div className="grid lg:grid-cols-[190px_1fr]">
                  <div className="hidden bg-[#082b64] p-4 lg:block">
                    <div className="mb-7 flex items-center gap-2 text-sm font-bold text-white">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-white/10"><Sparkles className="size-4 text-cyan" /></span>
                      Sambhav Pay
                    </div>
                    {['Overview', 'Transactions', 'Routes', 'Providers', 'Reconciliation', 'Reports'].map((item, index) => (
                      <div key={item} className={`mb-1 flex items-center justify-between rounded-lg px-3 py-2.5 text-xs transition ${index === 0 ? 'bg-white/[0.12] text-white' : 'text-blue-100/[0.55] hover:bg-white/[0.06] hover:text-white'}`}>
                        {item}
                        {index === 0 ? <span className="size-1.5 rounded-full bg-cyan" /> : null}
                      </div>
                    ))}
                    <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.06] p-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyan">Platform health</p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan to-emerald-300" /></div>
                      <p className="mt-2 text-[9px] text-blue-100/60">All systems operational</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <Stat title="Platform status" value="Healthy" icon={CheckCircle2} accent="success" />
                      <Stat title="Route latency" value="0.8s" icon={Clock3} accent="brand" />
                      <Stat title="Reconciliation" value="In sync" icon={Database} accent="brand" />
                    </div>

                    <div className="mt-4 grid gap-4 xl:grid-cols-[1.27fr_.73fr]">
                      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(6,30,87,.06)]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-extrabold text-ink">Transaction activity</p>
                            <p className="mt-1 text-[10px] text-slate-400">Illustrative operational view</p>
                          </div>
                          <span className="rounded-lg bg-brand/5 px-2 py-1 text-[9px] font-bold text-brand">Last 24h</span>
                        </div>
                        <div className="relative mt-6 h-44">
                          <div className="absolute inset-0 flex flex-col justify-between">
                            {[0, 1, 2, 3].map((line) => <span key={line} className="h-px w-full bg-slate-100" />)}
                          </div>
                          <div className="absolute inset-0 flex items-end gap-2 px-1">
                            {bars.map((height, index) => (
                              <motion.div
                                key={index}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.045, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative flex-1 rounded-t-md bg-gradient-to-t from-brand to-cyan/70"
                              >
                                <span className="absolute -top-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-cyan opacity-0 shadow-[0_0_10px_rgba(5,210,251,.8)] transition group-hover:opacity-100" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(6,30,87,.06)]">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-extrabold text-ink">Recent routes</p>
                          <Zap className="size-4 text-brand" />
                        </div>
                        <div className="mt-4 space-y-2.5">
                          {[
                            ['UPI', 'RazorPay', 'Success'],
                            ['Card', 'Cashfree', 'Rerouted'],
                            ['Net banking', 'Easebuzz', 'Success'],
                          ].map(([method, provider, status]) => (
                            <div key={`${method}-${provider}`} className="group flex items-center justify-between rounded-xl bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:bg-blue-50">
                              <div className="flex items-center gap-2.5">
                                <span className="flex size-8 items-center justify-center rounded-lg bg-white text-brand shadow-sm"><Route className="size-4" /></span>
                                <div>
                                  <p className="text-[11px] font-extrabold text-ink">{method}</p>
                                  <p className="mt-1 text-[9px] text-slate-400">{provider}</p>
                                </div>
                              </div>
                              <span className={`rounded-full px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.08em] ${status === 'Rerouted' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>{status}</span>
                            </div>
                          ))}
                        </div>
                        <button className="group mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-brand" type="button">
                          View operations <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-5 top-0 hidden rounded-2xl border border-white/10 bg-[#09275a]/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,.36)] backdrop-blur-xl xl:block"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-cyan">Route recovered</p>
                <p className="mt-2 text-sm font-extrabold text-white">Provider B → A</p>
                <p className="mt-1 font-mono text-[9px] text-slate-400">182ms failover</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-5 hidden rounded-2xl border border-emerald-300/20 bg-[#062d2a]/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,.36)] backdrop-blur-xl xl:block"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-300">Reconciliation</p>
                <p className="mt-2 text-sm font-extrabold text-white">Batch in sync</p>
                <p className="mt-1 font-mono text-[9px] text-emerald-200/60">No exceptions</p>
              </motion.div>
            </div>
          </GsapReveal>
        </div>
      </Container>
    </section>
  );
}

function Stat({ title, value, icon: Icon, accent }: { title: string; value: string; icon: typeof Activity; accent: 'success' | 'brand' }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-3.5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(6,30,87,.08)]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-slate-400">{title}</span>
        <span className={`flex size-7 items-center justify-center rounded-lg ${accent === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-brand/5 text-brand'}`}><Icon className="size-3.5" /></span>
      </div>
      <p className="mt-2 font-display text-lg font-extrabold tracking-[-0.035em] text-ink">{value}</p>
    </div>
  );
}
