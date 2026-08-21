'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Check,
  CircleDollarSign,
  GitBranch,
  LockKeyhole,
  RadioTower,
  Route,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

const paths = [
  { name: 'Primary route', state: 'Selected', tone: 'emerald' },
  { name: 'Fallback route', state: 'Ready', tone: 'cyan' },
  { name: 'Recovery path', state: 'Standby', tone: 'slate' },
] as const;

export function InnerHeroVisual({ label }: { label: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <figure className="relative mx-auto w-full max-w-[720px]" aria-labelledby="inner-visual-caption">
      <figcaption id="inner-visual-caption" className="sr-only">
        Sambhav Pay visual showing a payment request moving through policy checks, route selection and an operational result.
      </figcaption>

      <div aria-hidden="true" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#03152f] p-4 shadow-[0_44px_120px_rgba(6,30,87,.32)] sm:p-5 lg:p-6">
        <div className="decorative-grid absolute inset-0 bg-grid-dark bg-[size:34px_34px] opacity-[0.52]" />
        <div className="ambient-orb absolute -right-24 -top-24 size-72 rounded-full bg-cyan/20 blur-3xl" />
        <div className="ambient-orb absolute -bottom-32 left-8 size-80 rounded-full bg-brand/25 blur-3xl" />
        <motion.div
          animate={reduceMotion ? undefined : { x: [0, 24, 0], y: [0, -14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="ambient-orb absolute right-[18%] top-[28%] size-40 rounded-full border border-cyan/10"
        />

        <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="icon-badge flex size-10 items-center justify-center rounded-xl border border-cyan/15 bg-cyan/10 text-cyan">
              <Sparkles className="size-4" />
            </span>
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-cyan">Sambhav intelligence</p>
              <p className="mt-1 text-[10px] text-slate-400">{label}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[9px] font-bold text-emerald-200">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-45 motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-300" />
            </span>
            Live signal
          </span>
        </div>

        <div className="relative mt-5 grid gap-3 md:grid-cols-[.92fr_34px_1.08fr] md:items-stretch">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, delay: 0.12 }}
            className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-xs font-extrabold text-white"><CircleDollarSign className="size-4 text-cyan" /> Payment request</p>
              <span className="font-mono text-[8px] text-slate-500">#SP-6124</span>
            </div>
            <div className="mt-4 rounded-xl bg-white p-4 text-ink shadow-[0_18px_46px_rgba(0,0,0,.22)]">
              <p className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Transaction value</p>
              <p className="font-tabular mt-1 font-display text-2xl font-extrabold tracking-[-0.05em]">₹25,000.00</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Signal label="Method" value="UPI" />
                <Signal label="Currency" value="INR" />
              </div>
            </div>
            <div className="mt-3 grid gap-2">
              <OperationalRow icon={LockKeyhole} label="Policy controls" value="Passed" />
              <OperationalRow icon={Activity} label="Provider health" value="Measured" />
              <OperationalRow icon={RadioTower} label="Event stream" value="Connected" />
            </div>
          </motion.div>

          <FlowConnector reduceMotion={Boolean(reduceMotion)} />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, delay: 0.22 }}
            className="relative overflow-hidden rounded-2xl border border-cyan/20 bg-gradient-to-b from-[#0a4599]/95 to-[#061d48]/95 p-4 shadow-[0_0_58px_rgba(5,210,251,.12)]"
          >
            <div className="decorative-grid absolute inset-0 bg-grid-dark bg-[size:24px_24px] opacity-30" />
            <div className="relative flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-xs font-extrabold text-white"><GitBranch className="size-4 text-cyan" /> Decision layer</p>
              <motion.span
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="icon-badge flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-cyan"
              >
                <Route className="size-3.5" />
              </motion.span>
            </div>

            <div className="relative mt-4 space-y-2.5">
              {paths.map((path, index) => (
                <motion.div
                  key={path.name}
                  animate={!reduceMotion && index === 0 ? { borderColor: ['rgba(110,231,183,.18)', 'rgba(110,231,183,.48)', 'rgba(110,231,183,.18)'] } : undefined}
                  transition={{ duration: 2.6, repeat: Infinity }}
                  className={`relative overflow-hidden rounded-xl border p-3 ${
                    path.tone === 'emerald'
                      ? 'border-emerald-300/25 bg-emerald-300/[0.085]'
                      : path.tone === 'cyan'
                        ? 'border-cyan/20 bg-cyan/[0.07]'
                        : 'border-white/10 bg-white/[0.045]'
                  }`}
                >
                  {index === 0 ? <span className="absolute inset-y-0 left-0 w-1 bg-emerald-300" /> : null}
                  <div className="flex items-center gap-3">
                    <span className={`size-2 rounded-full ${index === 0 ? 'bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.9)]' : index === 1 ? 'bg-cyan' : 'bg-slate-500'}`} />
                    <div>
                      <p className="text-[10px] font-bold text-white">{path.name}</p>
                      <p className="mt-1 text-[8px] text-slate-400">Latency · availability · control rules</p>
                    </div>
                    <span className={`ml-auto text-[8px] font-bold ${index === 0 ? 'text-emerald-300' : index === 1 ? 'text-cyan' : 'text-slate-400'}`}>{path.state}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-black/[0.16] p-3">
              <span className="icon-badge flex size-9 items-center justify-center rounded-xl bg-cyan/10 text-cyan"><Zap className="size-4" /></span>
              <div>
                <p className="text-[9px] font-bold text-white">Route selected in 182ms</p>
                <p className="mt-1 text-[8px] text-slate-400">Operational result normalized</p>
              </div>
              <Check className="ml-auto size-4 text-emerald-300" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.36 }}
          className="relative mt-3 flex flex-col gap-3 overflow-hidden rounded-2xl border border-emerald-300/20 bg-gradient-to-r from-emerald-300/[0.12] via-white/[0.05] to-cyan/[0.07] p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="icon-badge flex size-10 items-center justify-center rounded-full bg-emerald-300 text-[#043229] shadow-[0_0_28px_rgba(110,231,183,.3)]"><ShieldCheck className="size-[18px]" /></span>
            <div>
              <p className="text-[10px] font-extrabold text-white">Operational outcome ready</p>
              <p className="mt-1 text-[8px] text-slate-400">Status, route and reconciliation context available</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[8px] text-cyan">
            REQUEST <ArrowRight className="size-3" /> DECISION <ArrowRight className="size-3" /> RESULT
          </div>
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute -bottom-5 left-10 right-10 -z-10 h-16 rounded-full bg-brand/20 blur-3xl dark:bg-cyan/10" />
    </figure>
  );
}

function FlowConnector({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative flex min-h-8 items-center justify-center md:min-h-0">
      <ArrowRight className="size-4 rotate-90 text-cyan md:rotate-0" />
      <div className="absolute hidden h-px w-full bg-gradient-to-r from-cyan/20 via-cyan to-cyan/20 md:block">
        <motion.span
          animate={reduceMotion ? undefined : { left: ['2%', '82%', '2%'] }}
          transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.72, 1], ease: 'easeInOut' }}
          className="absolute -top-1.5 size-3 rounded-full border-2 border-[#071d48] bg-cyan shadow-[0_0_14px_rgba(5,210,251,.9)]"
        />
      </div>
    </div>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 px-2.5 py-2">
      <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-1 text-[10px] font-extrabold text-ink">{value}</p>
    </div>
  );
}

function OperationalRow({ icon: Icon, label, value }: { icon: typeof Activity; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-[9px]">
      <Icon className="size-3.5 text-cyan" />
      <span className="text-slate-300">{label}</span>
      <span className="ml-auto font-bold text-white">{value}</span>
    </div>
  );
}
