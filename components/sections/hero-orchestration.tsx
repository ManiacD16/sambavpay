'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import {
  Activity,
  ArrowDown,
  Check,
  ChevronRight,
  CircleAlert,
  CreditCard,
  Gauge,
  Landmark,
  Network,
  RefreshCw,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

import { useState, type MouseEvent } from 'react';

const providers = [
  { name: 'Razorpay', meta: 'Available · 0.8s', status: 'selected' as const },
  { name: 'Cashfree', meta: 'High latency · 2.4s', status: 'warning' as const },
  { name: 'Stripe', meta: 'High latency · 3.5s', status: 'warning' as const },
  { name: 'Easebuzz', meta: 'Timeout detected', status: 'failed' as const },
];

export function HeroOrchestration() {
  const [paymentMethod, setPaymentMethod] = useState<
    'upi' | 'netbanking' | 'card'
  >('upi');
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 160, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 160, damping: 22 });

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 4.5);
    rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 4.5);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <figure className="perspective-1200" aria-labelledby="hero-orchestration-caption">
      <figcaption id="hero-orchestration-caption" className="sr-only">A live orchestration simulation showing a payment request evaluated by Sambhav Pay, routed across provider paths and completed with reconciliation context.</figcaption>
      <div aria-hidden="true">
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={reset}
          style={{ rotateX, rotateY }}
          className="preserve-3d relative overflow-hidden rounded-[2.15rem] border border-white/10 bg-[#04152f] p-3 shadow-[0_44px_120px_rgba(6,30,87,.38)] will-change-transform sm:p-5 lg:min-h-[560px] lg:p-5"
        >
          <div className="absolute inset-0 bg-brand-radial" />
          <div className="decorative-grid absolute inset-0 bg-grid-dark bg-[size:34px_34px] opacity-[0.65]" />
          <motion.div
            animate={{ x: [0, 34, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="ambient-orb absolute -right-24 -top-24 size-72 rounded-full bg-cyan/20 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -26, 0], y: [0, 22, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="ambient-orb absolute -bottom-32 left-1/3 size-96 rounded-full bg-brand/25 blur-3xl"
          />

          <div className="relative z-10 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-cyan">
                  <Sparkles className="size-4" />
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan">Live orchestration</p>
                  <p className="mt-1 text-xs text-slate-400">Transaction route simulation</p>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold text-emerald-300 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              Platform healthy
            </div>
          </div>

          <div className="relative z-10 mt-5 grid gap-2.5 lg:grid-cols-[1.22fr_20px_1fr_20px_.94fr] lg:items-stretch">
            <motion.div
  initial={{ opacity: 0, x: -22 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.12,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    relative min-w-0 overflow-hidden
    rounded-2xl border border-white/10
    bg-white/[0.055] p-3
    backdrop-blur-xl
  "
>
  <div className="pointer-events-none absolute -left-16 -top-16 size-36 rounded-full bg-cyan/10 blur-3xl" />

  {/* Header */}
  <div className="relative flex items-center justify-between gap-2 px-1">
    <div className="flex min-w-0 items-center gap-2">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/10">
        <ShieldCheck className="size-4 text-cyan" />
      </span>

      <div className="min-w-0">
        <p className="whitespace-nowrap text-[11px] font-extrabold text-white">
          Secure Checkout
        </p>

        <p className="mt-0.5 whitespace-nowrap text-[8px] text-slate-400">
          Sambhav Pay • #SP-2048
        </p>
      </div>
    </div>

    <span className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[7px] font-bold text-emerald-300">
      SSL Secure
    </span>
  </div>

  {/* White checkout */}
  <div className="relative mt-3 rounded-[1.15rem] bg-white p-3.5 text-ink shadow-[0_20px_50px_rgba(0,0,0,.22)]">
    {/* Amount */}
    <div className="flex items-end justify-between gap-3 border-b border-slate-100 pb-3">
      <div>
        <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
          Amount payable
        </p>

        <p className="mt-1 whitespace-nowrap font-display text-[1.55rem] font-extrabold tracking-[-0.045em] text-[#071b3a]">
          ₹25,000
          <span className="text-[0.85rem] text-slate-400">.00</span>
        </p>
      </div>

      <span className="mb-1 rounded-md bg-slate-100 px-2 py-1 text-[7px] font-bold text-slate-500">
        INR
      </span>
    </div>

    {/* Heading */}
    <div className="mt-3">
      <p className="text-[9px] font-extrabold text-[#071b3a]">
        Choose payment method
      </p>

      <p className="mt-0.5 text-[7.5px] leading-3 text-slate-400">
        Select your preferred payment option
      </p>
    </div>

    {/* Payment methods */}
    <div className="mt-3 grid grid-cols-3 gap-1.5">
      <CheckoutMethod
        icon={Smartphone}
        title="UPI"
        selected={paymentMethod === 'upi'}
        onClick={() => setPaymentMethod('upi')}
      />

      <CheckoutMethod
        icon={Landmark}
        title="Net Banking"
        selected={paymentMethod === 'netbanking'}
        onClick={() => setPaymentMethod('netbanking')}
      />

      <CheckoutMethod
        icon={CreditCard}
        title="Card"
        selected={paymentMethod === 'card'}
        onClick={() => setPaymentMethod('card')}
      />
    </div>

    {/* Selected payment information */}
    <motion.div
      key={paymentMethod}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-2.5 rounded-xl bg-slate-50 px-3 py-2.5"
    >
      {paymentMethod === 'upi' && (
        <>
          <p className="text-[8px] font-bold text-[#071b3a]">
            Pay instantly with UPI
          </p>
          <p className="mt-1 text-[7px] text-slate-400">
            Google Pay • PhonePe • Paytm • BHIM
          </p>
        </>
      )}

      {paymentMethod === 'netbanking' && (
        <>
          <p className="text-[8px] font-bold text-[#071b3a]">
            Pay using Net Banking
          </p>
          <p className="mt-1 text-[7px] text-slate-400">
            Access all major Indian banks
          </p>
        </>
      )}

      {paymentMethod === 'card' && (
        <>
          <p className="text-[8px] font-bold text-[#071b3a]">
            Pay securely using card
          </p>
          <p className="mt-1 text-[7px] text-slate-400">
            Visa • Mastercard • RuPay
          </p>
        </>
      )}
    </motion.div>

    {/* Payment button */}
    <motion.button
      type="button"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.985 }}
      className="
        mt-3 flex w-full items-center justify-between
        rounded-xl
        bg-gradient-to-r from-[#0756b5] via-[#0874d1] to-[#04a7dc]
        px-3.5 py-2.5
        text-left text-white
        shadow-[0_10px_24px_rgba(8,116,209,.24)]
      "
    >
      <div>
        <p className="text-[7px] font-medium text-white/70">
          Total payment
        </p>

        <p className="mt-0.5 text-[10px] font-extrabold">
          Pay ₹25,000.00
        </p>
      </div>

      <span className="flex size-7 items-center justify-center rounded-full bg-white/15">
        <ChevronRight className="size-4" />
      </span>
    </motion.button>

    <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[7px] font-semibold text-slate-400">
      <ShieldCheck className="size-3 text-emerald-500" />
      Secured by Sambhav Pay
    </div>
  </div>
</motion.div>

            <Connector />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-gradient-to-b from-[#0b4ba4]/95 to-[#071d48]/95 p-4 shadow-glow"
            >
              <div className="absolute inset-0 bg-grid-dark bg-[size:24px_24px] opacity-[0.35]" />
              <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10" />
              <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 animate-[spin_14s_linear_infinite] rounded-full border border-dashed border-cyan/20" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Network className="size-4 text-cyan" /> Sambhav engine
                  </div>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.08]"
                  >
                    <RefreshCw className="size-4 text-cyan" />
                  </motion.span>
                </div>

                <div className="mt-5 grid grid-cols-2s gap-2">
                  <Rule icon={Route} title="Rules" state="Evaluated" />
                  <Rule icon={Gauge} title="Performance" state="Optimal" />
                  <Rule icon={ShieldCheck} title="Controls" state="Passed" />
                  <Rule icon={Zap} title="Failover" state="Armed" />
                </div>

                {/* <div className="mt-4 rounded-xl border border-white/10 bg-black/[0.16] p-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-300">
                    <span>Decision progress</span>
                    <span className="font-bold text-cyan">Route selected</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan via-white to-cyan"
                      animate={{ width: ['8%', '100%', '100%'], x: ['0%', '0%', '0%'] }}
                      transition={{ duration: 4.8, repeat: Infinity, times: [0, 0.7, 1], ease: 'easeInOut' }}
                    />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1 text-center">
                    {['Signal', 'Score', 'Route'].map((item, index) => (
                      <motion.div
                        key={item}
                        animate={{ opacity: [0.45, 1, 0.45] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.35 }}
                        className="rounded-lg bg-white/[0.055] py-1.5 text-[9px] font-bold text-slate-300"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div> */}
              </div>
            </motion.div>

            <Connector branching />

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-white">Connected paths</p>
                <span className="flex items-center gap-1.5 text-[9px] text-slate-400"><Activity className="size-3 text-cyan" /> Live health</span>
              </div>
              <div className="mt-4 space-y-2.5">
                {providers.map((provider, index) => (
                  <Provider key={provider.name} {...provider} delay={index * 0.16} />
                ))}
              </div>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-3 rounded-xl border border-cyan/20 bg-cyan/[0.075] p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-cyan">Auto failover</span>
                  <span className="font-mono text-[9px] text-white">182ms</span>
                </div>
                <p className="mt-1.5 text-[10px] leading-4 text-slate-300">Provider timeout detected. Eligible route recovered automatically.</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-4 overflow-hidden rounded-2xl border border-emerald-300/20 bg-gradient-to-r from-emerald-400/[0.12] via-white/[0.055] to-cyan/[0.08] p-4 backdrop-blur-xl"
          >
            <motion.div
              animate={{ x: ['-120%', '220%'] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.6, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-24 -skew-x-12 bg-white/[0.055] blur"
            />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <motion.span
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex size-11 items-center justify-center rounded-full bg-emerald-400 text-[#042e23] shadow-[0_0_30px_rgba(52,211,153,.35)]"
                >
                  <Check className="size-5 stroke-[3]" />
                </motion.span>
                <div>
                  <p className="text-xs font-extrabold text-white">Payment successful</p>
                  <p className="mt-1 text-[10px] text-slate-400">Selected route · Provider A · Reconciliation queued</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <MiniResult label="Processed" value="0.92s" />
                <MiniResult label="Attempts" value="02" />
                <MiniResult label="Status" value="200" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </figure>
  );
}

function Connector({ branching = false }: { branching?: boolean }) {
  return (
    <div className="relative flex min-h-8 items-center justify-center lg:min-h-0">
      <ArrowDown className="size-4 text-cyan lg:hidden" />
      <div className="relative hidden h-px w-full overflow-visible bg-gradient-to-r from-cyan/20 via-cyan to-cyan/20 lg:block">
        {branching ? (
          <>
            <span className="absolute -right-0 -top-4 h-4 w-px bg-cyan/40" />
            <span className="absolute -right-0 top-0 h-4 w-px bg-cyan/40" />
          </>
        ) : null}
        <motion.span
          animate={{ left: ['0%', '88%', '0%'] }}
          transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.72, 1], ease: 'easeInOut' }}
          className="absolute -top-1.5 size-3 rounded-full border-2 border-[#071d48] bg-cyan shadow-[0_0_14px_rgba(5,210,251,.9)]"
        />
      </div>
    </div>
  );
}

function Provider({ name, meta, status, delay }: { name: string; meta: string; status: 'selected' | 'warning' | 'failed'; delay: number }) {
  const classes = {
    selected: 'border-emerald-300/25 bg-emerald-300/[0.085]',
    warning: 'border-amber-300/20 bg-amber-300/[0.06]',
    failed: 'border-rose-300/20 bg-rose-300/[0.055]',
  };
  const dots = {
    selected: 'bg-emerald-300',
    warning: 'bg-amber-300',
    failed: 'bg-rose-300',
  };

  return (
    <motion.div
      animate={status === 'selected' ? { borderColor: ['rgba(110,231,183,.18)', 'rgba(110,231,183,.5)', 'rgba(110,231,183,.18)'] } : undefined}
      transition={{ duration: 2.4, repeat: Infinity, delay }}
      className={`relative overflow-hidden rounded-xl border p-3 ${classes[status]}`}
    >
      {status === 'selected' ? (
        <motion.span
          animate={{ x: ['-120%', '240%'] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
          className="absolute inset-y-0 w-12 -skew-x-12 bg-white/[0.06]"
        />
      ) : null}
      <div className="relative flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className={`size-2 rounded-full ${dots[status]} ${status === 'selected' ? 'shadow-[0_0_12px_rgba(110,231,183,.9)]' : ''}`} />
          <div>
            <p className="text-[11px] font-bold text-white">{name}</p>
            <p className="mt-1 text-[9px] text-slate-400">{meta}</p>
          </div>
        </div>
        {status === 'selected' ? <Check className="size-4 text-emerald-300" /> : <CircleAlert className={`size-4 ${status === 'warning' ? 'text-amber-300' : 'text-rose-300'}`} />}
      </div>
    </motion.div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 px-2.5 py-2">
      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-1 text-[11px] font-extrabold text-ink">{value}</p>
    </div>
  );
}

function Signal({ icon: Icon, label, value }: { icon: typeof Gauge; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-[10px]">
      <span className="flex items-center gap-2 text-slate-300">
        <Icon className="size-3.5 text-cyan" /> {label}
      </span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}

function Rule({ icon: Icon, title, state }: { icon: typeof Gauge; title: string; state: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="rounded-xl border border-white/10 bg-white/[0.06] p-3 transition hover:bg-white/[0.09]">
      <Icon className="size-4 text-cyan" />
      <p className="mt-2.5 text-[10px] font-bold text-white">{title}</p>
      <p className="mt-1 text-[9px] text-slate-400">{state}</p>
    </motion.div>
  );
}

function MiniResult({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[56px] rounded-lg bg-black/[0.16] px-2.5 py-2">
      <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500">{label}</p>
      <p className="mt-1 font-mono text-[10px] font-bold text-white">{value}</p>
    </div>
  );
}

function CheckoutMethod({
  icon: Icon,
  title,
  selected,
  onClick,
}: {
  icon: typeof Smartphone;
  title: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative flex min-w-0 flex-col items-center justify-center
        rounded-xl border px-1.5 py-2.5
        text-center
        transition-all duration-300
        ${
          selected
            ? 'border-[#1189e8]/50 bg-[#edf7ff] shadow-[0_6px_18px_rgba(10,118,213,.10)]'
            : 'border-slate-100 bg-slate-50 hover:border-[#1189e8]/20 hover:bg-[#f5faff]'
        }
      `}
    >
      {selected && (
        <span className="absolute right-1.5 top-1.5 flex size-3.5 items-center justify-center rounded-full bg-[#0874d1]">
          <Check className="size-2 stroke-[3] text-white" />
        </span>
      )}

      <span
        className={`
          flex size-7 items-center justify-center rounded-lg
          ${
            selected
              ? 'bg-[#0874d1] text-white'
              : 'bg-white text-slate-500 shadow-sm'
          }
        `}
      >
        <Icon className="size-3.5" />
      </span>

      <span
        className={`
          mt-1.5 text-[7px] font-extrabold leading-[1.15]
          ${
            selected
              ? 'text-[#0756b5]'
              : 'text-[#071b3a]'
          }
        `}
      >
        {title}
      </span>
    </button>
  );
}