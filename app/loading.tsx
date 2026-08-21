import Image from 'next/image';
import { Check, Route, ShieldCheck, Zap } from 'lucide-react';

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Sambhav Pay"
      className="fixed inset-0 z-[95] flex min-h-screen items-center justify-center overflow-hidden bg-[#020f21] px-5 text-white"
    >
      <div className="decorative-grid absolute inset-0 bg-grid-dark bg-[size:42px_42px] opacity-[0.28]" />
      <div className="ambient-orb absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/18 blur-3xl" />
      <div className="ambient-orb absolute right-[12%] top-[18%] size-56 rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="mx-auto flex size-20 items-center justify-center rounded-[1.55rem] border border-white/10 bg-white/[0.055] shadow-glow backdrop-blur-xl">
          <span className="absolute size-[5.8rem] animate-spin rounded-[1.85rem] border border-transparent border-t-cyan/80 [animation-duration:1.8s] motion-reduce:hidden" />
          <Image src="/brand/logo-mark.png" alt="" width={48} height={56} sizes="48px" priority className="h-12 w-auto" />
        </div>

        <div className="mt-7 text-center">
          <p className="font-display text-base font-extrabold tracking-[-0.02em]">Preparing your payment journey</p>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Sambhav Pay orchestration layer</p>
        </div>

        <div className="relative mt-8 grid grid-cols-[1fr_34px_1fr_34px_1fr] items-center" aria-hidden="true">
          <LoadNode icon={ShieldCheck} label="Validate" />
          <LoadConnector delay="0s" />
          <LoadNode icon={Route} label="Route" />
          <LoadConnector delay=".36s" />
          <LoadNode icon={Check} label="Ready" />
        </div>

        <div className="mt-8 overflow-hidden rounded-full border border-white/10 bg-white/[0.055] p-1" aria-hidden="true">
          <div className="h-1.5 w-full origin-left animate-loading-progress rounded-full bg-gradient-to-r from-brand via-cyan to-emerald-300 motion-reduce:animate-none" />
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600" aria-hidden="true">
          <span>Initializing</span>
          <span className="flex items-center gap-1.5 text-cyan"><Zap className="size-3" /> Secure path</span>
        </div>
        <span className="sr-only">Loading, please wait.</span>
      </div>
    </div>
  );
}

function LoadNode({ icon: Icon, label }: { icon: typeof Route; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="icon-badge flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-cyan shadow-[0_12px_34px_rgba(0,0,0,.2)]">
        <Icon className="size-4" />
      </span>
      <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</span>
    </div>
  );
}

function LoadConnector({ delay }: { delay: string }) {
  return (
    <div className="relative mb-5 h-px bg-cyan/20">
      <span className="absolute -top-1 left-0 size-2 animate-loading-packet rounded-full bg-cyan shadow-[0_0_12px_rgba(5,210,251,.9)] motion-reduce:hidden" style={{ animationDelay: delay }} />
    </div>
  );
}
