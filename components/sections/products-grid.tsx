import Link from 'next/link';
import {
  Activity,
  ArrowUpRight,
  BadgeIndianRupee,
  Building2,
  Check,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Gauge,
  Landmark,
  Route,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  UserCheck,
} from 'lucide-react';
import { products } from '@/data/products';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export function ProductsGrid() {
  const [orchestration, ...rest] = products;
  const OrchestrationIcon = orchestration.icon;

  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      <span aria-hidden="true" className="section-divider" />
      <div className="pointer-events-none absolute right-[-12rem] top-24 size-[34rem] rounded-full bg-brand/[0.06] blur-3xl dark:bg-cyan/[0.045]" />
      <Container className="relative">
        <GsapReveal>
          <SectionHeading
            eyebrow="Product ecosystem"
            title="Powerful payment products. One connected platform."
            description="Build the payment stack your business needs without giving up centralized visibility and operational control."
            align="center"
          />
        </GsapReveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2 xl:grid-cols-12">
          <GsapReveal className="lg:col-span-2 xl:col-span-8">
            <SpotlightCard className="group h-full rounded-[2rem] border-brand/[0.15] bg-gradient-to-br from-white via-white to-ice/60 p-7 hover:-translate-y-1.5 sm:p-8 dark:from-white/[0.055] dark:via-white/[0.035] dark:to-cyan/[0.03]">
              <Link href={`/products/${orchestration.slug}`} className="relative grid h-full min-h-[430px] gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex size-[3.25rem] items-center justify-center rounded-2xl bg-brand text-white shadow-button-glow transition duration-500 group-hover:-rotate-3 group-hover:scale-105 dark:bg-cyan dark:text-navy">
                      <OrchestrationIcon className="size-6" />
                    </span>
                    <span className="rounded-full border border-brand/[0.15] bg-brand/[0.055] px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-brand dark:border-cyan/20 dark:bg-cyan/10 dark:text-cyan">Flagship product</span>
                  </div>
                  <h3 className="mt-8 max-w-md font-display text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-[2.4rem] dark:text-white">{orchestration.hero}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">{orchestration.description}</p>
                  <div className="mt-7 grid gap-2 sm:grid-cols-2">
                    {orchestration.capabilities.slice(0, 4).map((capability) => (
                      <span key={capability} className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                        <span className="flex size-5 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-cyan/10 dark:text-cyan"><Check className="size-3" /></span>
                        {capability}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-extrabold text-brand dark:text-cyan">
                    Explore orchestration
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>

                <div className="relative min-h-[330px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#04152f] p-5 shadow-[0_28px_70px_rgba(6,30,87,.28)]">
                  <div className="absolute inset-0 bg-grid-dark bg-[size:28px_28px] opacity-50" />
                  <div className="absolute -right-16 -top-16 size-56 rounded-full bg-cyan/20 blur-3xl" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan">Routing intelligence</span>
                      <span className="flex items-center gap-2 text-[9px] text-emerald-300"><span className="size-1.5 animate-pulse rounded-full bg-emerald-300" /> Live</span>
                    </div>
                    <div className="mt-7 grid grid-cols-[.75fr_40px_1fr] items-center">
                      <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                        <CircleDollarSign className="size-5 text-cyan" />
                        <p className="mt-3 text-xs font-bold text-white">₹25,000</p>
                        <p className="mt-1 text-[9px] text-slate-400">UPI request</p>
                      </div>
                      <div className="relative h-px bg-cyan/40"><span className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 animate-pulse rounded-full bg-cyan shadow-[0_0_14px_rgba(5,210,251,.8)]" /></div>
                      <div className="rounded-xl border border-cyan/20 bg-brand/30 p-3 shadow-glow">
                        <Route className="size-5 text-cyan" />
                        <p className="mt-3 text-xs font-bold text-white">Best route</p>
                        <p className="mt-1 text-[9px] text-slate-300">Selected in 182ms</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <MiniPanel icon={Gauge} title="Provider health" value="Optimal" />
                      <MiniPanel icon={Route} title="Failover" value="Armed" />
                    </div>
                    <div className="mt-auto rounded-xl border border-emerald-300/20 bg-emerald-300/[0.08] p-3">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-bold text-white">Transaction completed</span>
                        <span className="font-mono text-emerald-300">0.92s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SpotlightCard>
          </GsapReveal>

          {rest.map((product, index) => {
            const Icon = product.icon;

            return (
              <GsapReveal
                key={product.slug}
                delay={index * 0.045}
                className={
                  product.slug === 'payment-gateway'
                    ? 'xl:col-span-4'
                    : product.slug === 'sambhav-verify'
                      ? 'lg:col-span-2 xl:col-span-3'
                      : 'xl:col-span-3'
                }
              >
                <SpotlightCard
                  className="group h-full rounded-[1.75rem] p-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:scale-[1.012]"
                >
                  {/*  */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative flex min-h-[360px] h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-7"
                  >
                    <ProductCardBackdrop slug={product.slug} />

                    <div className="relative z-20 flex items-start justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-brand/10 bg-brand/10 text-brand shadow-[0_10px_30px_rgba(16,102,209,.08)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:border-brand/0 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_16px_36px_rgba(16,102,209,.28)] dark:border-cyan/10 dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                        <Icon className="size-6 transition-transform duration-700 group-hover:scale-110" />
                      </span>

                      <span className="flex size-8 items-center justify-center rounded-full border border-transparent text-slate-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-brand/15 group-hover:bg-brand/10 group-hover:text-brand dark:text-slate-600 dark:group-hover:border-cyan/15 dark:group-hover:bg-cyan/10 dark:group-hover:text-cyan">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>

                    <div className="relative z-20 mt-7 max-w-[78%] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-brand dark:text-cyan">{product.eyebrow}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.045em] text-ink dark:text-white">{product.name}</h3>
                      <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{product.description}</p>
                    </div>

                    <div className="relative z-20 mt-auto pt-8">
                      <div className="h-px overflow-hidden bg-slate-100 dark:bg-white/[0.07]">
                        <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                      </div>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-brand dark:text-cyan">
                        Explore product
                        <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </SpotlightCard>
              </GsapReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProductCardBackdrop({ slug }: { slug: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.26] transition-opacity duration-700 group-hover:opacity-[0.48] dark:opacity-[0.12] dark:group-hover:opacity-[0.28]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,102,209,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.11) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom left, black, transparent 66%)',
          WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 66%)',
        }}
      />

      <div className="pointer-events-none absolute -right-16 -top-14 z-0 size-52 rounded-full bg-brand/[0.07] blur-3xl transition-all duration-700 group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:scale-125 group-hover:bg-cyan/[0.11] dark:bg-cyan/[0.045]" />

      <div className="pointer-events-none absolute bottom-[3.8rem] right-5 z-10 h-[132px] w-[48%] origin-bottom-right opacity-[0.54] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-1 group-hover:-translate-y-2 group-hover:scale-[1.12] group-hover:opacity-100 dark:opacity-[0.42] dark:group-hover:opacity-[0.9]">
        {slug === 'payment-gateway' && <GatewayVisual />}
        {slug === 'payouts' && <PayoutVisual />}
        {slug === 'payment-intelligence' && <IntelligenceVisual />}
        {slug === 'risk-fraud' && <RiskVisual />}
        {slug === 'sambhav-verify' && <VerifyVisual />}
      </div>
    </>
  );
}

function GatewayVisual() {
  return (
    <div className="absolute inset-0 rounded-2xl border border-brand/15 bg-white/75 p-3 shadow-[0_18px_48px_rgba(6,30,87,.12)] backdrop-blur-md transition-transform duration-700 group-hover:-rotate-1 dark:border-cyan/15 dark:bg-[#08223d]/80 dark:shadow-[0_18px_48px_rgba(0,0,0,.28)]">
      <div className="flex items-center justify-between">
        <span className="text-[7px] font-extrabold uppercase tracking-[0.16em] text-brand dark:text-cyan">Checkout</span>
        <span className="flex items-center gap-1 text-[6px] font-bold text-emerald-500"><span className="size-1.5 rounded-full bg-emerald-400" /> Secure</span>
      </div>

      <p className="mt-2 text-[12px] font-extrabold tracking-[-0.03em] text-ink dark:text-white">₹25,000</p>

      <div className="mt-3 grid grid-cols-3 gap-1.5">
        <MethodPill icon={Smartphone} label="UPI" active />
        <MethodPill icon={Landmark} label="Bank" />
        <MethodPill icon={CreditCard} label="Card" />
      </div>

      <div className="mt-3 flex items-center justify-between rounded-lg bg-brand px-2.5 py-2 text-white shadow-[0_8px_18px_rgba(16,102,209,.22)] dark:bg-cyan dark:text-navy">
        <span className="text-[7px] font-extrabold">Pay securely</span>
        <ArrowUpRight className="size-3" />
      </div>
    </div>
  );
}

function MethodPill({ icon: Icon, label, active = false }: { icon: typeof Smartphone; label: string; active?: boolean }) {
  return (
    <span className={`flex min-w-0 flex-col items-center justify-center rounded-lg border px-1 py-1.5 ${active ? 'border-brand/30 bg-brand/10 text-brand dark:border-cyan/30 dark:bg-cyan/10 dark:text-cyan' : 'border-slate-200/80 bg-white/70 text-slate-400 dark:border-white/10 dark:bg-white/[0.04]'}`}>
      <Icon className="size-3" />
      <span className="mt-1 text-[6px] font-bold">{label}</span>
    </span>
  );
}

function PayoutVisual() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-1 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-2xl border border-brand/15 bg-white/80 text-brand shadow-sm backdrop-blur dark:border-cyan/15 dark:bg-white/[0.06] dark:text-cyan">
        <BadgeIndianRupee className="size-5" />
      </div>

      <div className="absolute left-10 top-[37%] h-px w-[48%] bg-gradient-to-r from-brand/50 to-brand/10 dark:from-cyan/55 dark:to-cyan/10">
        <span className="absolute -top-1 left-[48%] size-2 animate-pulse rounded-full bg-cyan shadow-[0_0_12px_rgba(5,210,251,.8)]" />
      </div>
      <div className="absolute bottom-[31%] left-10 h-px w-[48%] -rotate-[11deg] bg-gradient-to-r from-brand/35 to-brand/5 dark:from-cyan/35" />

      <PayoutNode icon={Smartphone} label="UPI" className="right-0 top-1" />
      <PayoutNode icon={Building2} label="Bank" className="bottom-0 right-2" />

      <span className="absolute left-[43%] top-[16%] rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[6px] font-extrabold text-emerald-500">AUTO</span>
    </div>
  );
}

function PayoutNode({ icon: Icon, label, className }: { icon: typeof Smartphone; label: string; className: string }) {
  return (
    <span className={`absolute flex h-10 w-[62px] items-center gap-1.5 rounded-xl border border-brand/12 bg-white/75 px-2 text-brand shadow-sm backdrop-blur dark:border-cyan/12 dark:bg-white/[0.055] dark:text-cyan ${className}`}>
      <Icon className="size-3.5 shrink-0" />
      <span className="text-[6px] font-extrabold">{label}</span>
    </span>
  );
}

function IntelligenceVisual() {
  const bars = [34, 52, 45, 72, 58, 88, 76];

  return (
    <div className="absolute inset-0 rounded-2xl border border-brand/15 bg-white/70 p-3 shadow-[0_18px_44px_rgba(6,30,87,.1)] backdrop-blur-md dark:border-cyan/15 dark:bg-[#08223d]/75">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[7px] font-extrabold text-brand dark:text-cyan"><Activity className="size-3" /> Live analytics</span>
        <span className="text-[6px] font-bold text-emerald-500">+18.4%</span>
      </div>

      <div className="mt-3 flex h-[58px] items-end gap-1.5">
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="w-full origin-bottom rounded-t-[3px] bg-gradient-to-t from-brand/20 to-brand/75 transition-transform duration-700 group-hover:scale-y-110 dark:from-cyan/15 dark:to-cyan/70"
            style={{ height: `${height}%`, transitionDelay: `${index * 35}ms` }}
          />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-brand/10 pt-2 dark:border-cyan/10">
        <span className="text-[6px] text-slate-400">Success rate</span>
        <span className="text-[7px] font-extrabold text-ink dark:text-white">98.7%</span>
      </div>
    </div>
  );
}

function RiskVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute size-[116px] rounded-full border border-brand/10 dark:border-cyan/10" />
      <div className="absolute size-[88px] rounded-full border border-dashed border-brand/20 transition-transform duration-[1200ms] group-hover:rotate-180 dark:border-cyan/25" />
      <div className="absolute size-[58px] rounded-full bg-brand/[0.07] blur-[1px] dark:bg-cyan/[0.08]" />

      <span className="relative flex size-12 items-center justify-center rounded-2xl border border-brand/15 bg-white/80 text-brand shadow-[0_14px_34px_rgba(16,102,209,.14)] backdrop-blur-md transition-transform duration-700 group-hover:scale-110 dark:border-cyan/15 dark:bg-[#08223d]/80 dark:text-cyan">
        <ShieldCheck className="size-6" />
      </span>

      <span className="absolute right-0 top-2 flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[6px] font-extrabold text-emerald-500">
        <CheckCircle2 className="size-2.5" /> Clear
      </span>
      <span className="absolute bottom-1 left-0 rounded-full border border-brand/10 bg-white/75 px-2 py-1 text-[6px] font-bold text-slate-500 backdrop-blur dark:border-cyan/10 dark:bg-white/[0.05] dark:text-slate-300">24 signals</span>
    </div>
  );
}

function VerifyVisual() {
  return (
    <div className="absolute inset-0 rounded-2xl border border-brand/15 bg-white/70 p-3 shadow-[0_18px_44px_rgba(6,30,87,.1)] backdrop-blur-md dark:border-cyan/15 dark:bg-[#08223d]/75">
      <div className="relative h-full overflow-hidden rounded-xl border border-brand/10 bg-brand/[0.035] dark:border-cyan/10 dark:bg-cyan/[0.03]">
        <span className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-cyan/10 dark:text-cyan">
          <UserCheck className="size-4" />
        </span>

        <span className="absolute right-3 top-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[6px] font-extrabold text-emerald-500">VERIFIED</span>

        <div className="absolute inset-x-3 bottom-3 space-y-2">
          <VerifyRow icon={ScanSearch} label="Identity" />
          <VerifyRow icon={Landmark} label="Bank account" />
          <VerifyRow icon={Building2} label="Business" />
        </div>

        <span className="absolute inset-x-2 top-[48%] h-px bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 shadow-[0_0_10px_rgba(5,210,251,.7)] transition-all duration-700 group-hover:translate-y-6 group-hover:opacity-100" />
      </div>
    </div>
  );
}

function VerifyRow({ icon: Icon, label }: { icon: typeof ScanSearch; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[6px] font-bold text-slate-500 dark:text-slate-300">
      <Icon className="size-3 text-brand dark:text-cyan" />
      {label}
      <Check className="ml-auto size-2.5 text-emerald-500" />
    </span>
  );
}

function MiniPanel({ icon: Icon, title, value }: { icon: typeof Gauge; title: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.055] p-3">
      <Icon className="size-4 text-cyan" />
      <p className="mt-2 text-[9px] text-slate-400">{title}</p>
      <p className="mt-1 text-[10px] font-bold text-white">{value}</p>
    </div>
  );
}