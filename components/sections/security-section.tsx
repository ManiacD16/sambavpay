import {
  Activity,
  Eye,
  Fingerprint,
  KeyRound,
  ListChecks,
  LockKeyhole,
  ShieldCheck,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { SpotlightCard } from '@/components/ui/spotlight-card';

const controls = [
  {
    icon: KeyRound,
    title: 'API Security',
    text: 'Authentication, credentials, validation and abuse-prevention controls.',
    visual: 'api',
    status: 'AUTHENTICATED',
  },
  {
    icon: LockKeyhole,
    title: 'Data Protection',
    text: 'Encryption, tokenization where applicable and secure data handling.',
    visual: 'data',
    status: 'ENCRYPTED',
  },
  {
    icon: Fingerprint,
    title: 'Access Control',
    text: 'Role-aware permissions, identity controls and administrative visibility.',
    visual: 'access',
    status: 'ROLE VERIFIED',
  },
  {
    icon: Activity,
    title: 'Monitoring',
    text: 'Operational visibility across APIs, transactions and platform health.',
    visual: 'monitoring',
    status: 'LIVE',
  },
  {
    icon: ListChecks,
    title: 'Auditability',
    text: 'Trace important platform, access and transaction activity.',
    visual: 'audit',
    status: 'TRACEABLE',
  },
  {
    icon: Eye,
    title: 'Transaction Security',
    text: 'Security controls that follow each transaction through its lifecycle.',
    visual: 'transaction',
    status: 'PROTECTED',
  },
] as const;

type VisualType = (typeof controls)[number]['visual'];

export function SecuritySection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f7fbff] py-24 dark:bg-[#03152d] lg:py-36"
    >
      <span aria-hidden="true" className="section-divider" />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-light bg-[size:56px_56px] opacity-[0.45] [mask-image:radial-gradient(circle_at_25%_50%,black,transparent_70%)] dark:bg-grid-dark dark:opacity-30"
      />

      {/* Ambient security halo behind the card matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[12%] size-[620px] rounded-full bg-brand/[0.055] blur-[120px] dark:bg-cyan/[0.045]"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20">
          <GsapReveal>
            <SectionHeading
              eyebrow="Security"
              title="Security Built Into Every Payment"
              description="Protecting payment data, APIs and business operations with security controls designed for modern financial infrastructure."
            />

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                'API Security',
                'Data Protection',
                'Access Control',
                'Monitoring',
                'Auditability',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand/15 bg-brand/[0.05] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-brand dark:border-cyan/15 dark:bg-cyan/[0.05] dark:text-cyan"
                >
                  {item}
                </span>
              ))}
            </div>

            <Button href="/security" variant="secondary" className="mt-8">
              Explore Security
            </Button>
          </GsapReveal>

          <div className="grid gap-4 sm:grid-cols-2 [perspective:1200px]">
            {controls.map((control, index) => {
              const Icon = control.icon;

              return (
                <GsapReveal key={control.title} delay={index * 0.04}>
                  <SpotlightCard
                    className="group min-h-[220px] rounded-2xl p-5 [transform-style:preserve-3d] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:translateY(-7px)_rotateX(1.4deg)_rotateY(-1.6deg)_scale(1.018)]"
                  >
                    {/* Product-specific visual: intentionally behind the content */}
                    <SecurityVisual type={control.visual} />

                    {/* Soft bloom that appears on hover */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-16 -right-16 z-0 size-44 rounded-full bg-brand/0 blur-3xl transition-all duration-700 group-hover:bg-brand/10 dark:group-hover:bg-cyan/10"
                    />

                    <div className="relative z-10 flex items-start justify-between">
                      <span
                        className="flex size-11 items-center justify-center rounded-xl border border-brand/10 bg-brand/10 text-brand shadow-[0_10px_28px_rgba(16,102,209,.08)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-brand/0 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_16px_34px_rgba(16,102,209,.22)] dark:border-cyan/10 dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy"
                      >
                        <Icon className="size-5 transition-transform duration-500 group-hover:scale-110" />
                      </span>

                      <span className="font-mono text-[9px] tracking-[0.16em] text-slate-300 transition-colors duration-500 group-hover:text-brand/60 dark:text-slate-600 dark:group-hover:text-cyan/50">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="relative z-10 mt-5 max-w-[82%] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0.5">
                      <h3 className="font-display text-lg font-extrabold tracking-[-0.03em] text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">
                        {control.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                        {control.text}
                      </p>
                    </div>

                    <div className="relative z-10 mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-white/[0.07]">
                      <span className="flex items-center gap-1.5 text-[8px] font-extrabold uppercase tracking-[0.13em] text-slate-400 transition-colors duration-500 group-hover:text-brand dark:text-slate-500 dark:group-hover:text-cyan">
                        <ShieldCheck className="size-3.5" />
                        {control.status}
                      </span>

                      <span className="relative h-px flex-1 overflow-hidden bg-slate-100 dark:bg-white/[0.07]">
                        <span className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                      </span>
                    </div>
                  </SpotlightCard>
                </GsapReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SecurityVisual({ type }: { type: VisualType }) {
  const base =
    'pointer-events-none absolute bottom-3 right-3 z-[1] h-[128px] w-[48%] origin-bottom-right opacity-[0.18] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-[1.08] group-hover:opacity-[0.7] dark:opacity-[0.2] dark:group-hover:opacity-[0.72]';

  if (type === 'api') {
    return (
      <div aria-hidden="true" className={base}>
        <svg viewBox="0 0 240 140" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="apiLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.08" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.72" />
            </linearGradient>
          </defs>

          <g className="text-brand dark:text-cyan">
            <path d="M24 72H88" stroke="url(#apiLine)" strokeWidth="2" strokeDasharray="5 6" />
            <path d="M145 70H212" stroke="url(#apiLine)" strokeWidth="2" strokeDasharray="5 6" />
            <path d="M115 48V18" stroke="url(#apiLine)" strokeWidth="2" strokeDasharray="5 6" />
            <path d="M115 94V122" stroke="url(#apiLine)" strokeWidth="2" strokeDasharray="5 6" />

            <circle cx="24" cy="72" r="9" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
            <circle cx="212" cy="70" r="9" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
            <circle cx="115" cy="18" r="7" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
            <circle cx="115" cy="122" r="7" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />

            <rect x="86" y="47" width="60" height="48" rx="14" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.55" />
            <circle cx="112" cy="68" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M118 68H132M127 68v7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M99 84H133" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'data') {
    return (
      <div aria-hidden="true" className={base}>
        <svg viewBox="0 0 240 140" className="h-full w-full overflow-visible">
          <g className="text-brand dark:text-cyan">
            {[0, 1, 2].map((row) =>
              [0, 1, 2].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={22 + col * 26}
                  y={35 + row * 24}
                  width="17"
                  height="13"
                  rx="3"
                  fill="currentColor"
                  fillOpacity={0.06 + (row + col) * 0.025}
                  stroke="currentColor"
                  strokeOpacity="0.22"
                />
              )),
            )}

            <path d="M100 70H142" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="5 6" />
            <path d="M135 63l10 7-10 7" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            <rect x="150" y="43" width="62" height="60" rx="16" fill="currentColor" fillOpacity="0.075" stroke="currentColor" strokeOpacity="0.55" />
            <rect x="169" y="67" width="24" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2.6" />
            <path d="M174 67v-8a7 7 0 0 1 14 0v8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            <circle cx="181" cy="77" r="2.7" fill="currentColor" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'access') {
    return (
      <div aria-hidden="true" className={`${base} group-hover:rotate-2`}>
        <svg viewBox="0 0 240 140" className="h-full w-full overflow-visible">
          <g className="text-brand dark:text-cyan" fill="none" strokeLinecap="round">
            <circle cx="166" cy="72" r="51" stroke="currentColor" strokeOpacity="0.1" />
            <circle cx="166" cy="72" r="38" stroke="currentColor" strokeOpacity="0.16" strokeDasharray="4 6" />

            <path d="M152 96c-10-16-8-45 14-47 17-2 31 14 28 34" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2.4" />
            <path d="M144 87c-4-16 0-34 12-43 17-12 42-4 49 14" stroke="currentColor" strokeOpacity="0.38" strokeWidth="2.2" />
            <path d="M161 103c-9-15-7-34 5-39 12-5 23 5 22 18-1 9-4 18-1 26" stroke="currentColor" strokeOpacity="0.72" strokeWidth="2.5" />
            <path d="M171 96c-4-9-5-22 3-24 8-2 11 8 8 19" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2.6" />

            <rect x="19" y="45" width="59" height="18" rx="9" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.2" />
            <rect x="19" y="70" width="74" height="18" rx="9" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.2" />
            <rect x="19" y="95" width="50" height="18" rx="9" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.2" />
            <circle cx="30" cy="54" r="3" fill="currentColor" stroke="none" opacity="0.7" />
            <circle cx="30" cy="79" r="3" fill="currentColor" stroke="none" opacity="0.45" />
            <circle cx="30" cy="104" r="3" fill="currentColor" stroke="none" opacity="0.32" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'monitoring') {
    return (
      <div aria-hidden="true" className={base}>
        <svg viewBox="0 0 240 140" className="h-full w-full overflow-visible">
          <g className="text-brand dark:text-cyan">
            <rect x="18" y="27" width="204" height="88" rx="18" fill="currentColor" fillOpacity="0.045" stroke="currentColor" strokeOpacity="0.18" />

            {[49, 72, 95].map((y) => (
              <line key={y} x1="30" y1={y} x2="210" y2={y} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
            ))}

            <path
              d="M31 87L58 79L77 86L98 52L117 75L136 66L154 71L178 45L208 56"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.76"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {[31, 98, 178, 208].map((x, index) => {
              const y = [87, 52, 45, 56][index];
              return <circle key={x} cx={x} cy={y} r="4" fill="currentColor" fillOpacity="0.75" />;
            })}

            <circle cx="202" cy="39" r="4" fill="#34d399" className="animate-pulse" />
            <rect x="159" y="33" width="33" height="11" rx="5.5" fill="currentColor" fillOpacity="0.08" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'audit') {
    return (
      <div aria-hidden="true" className={base}>
        <svg viewBox="0 0 240 140" className="h-full w-full overflow-visible">
          <g className="text-brand dark:text-cyan">
            <line x1="56" y1="25" x2="56" y2="118" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />

            {[35, 69, 103].map((y, index) => (
              <g key={y}>
                <circle cx="56" cy={y} r="8" fill="currentColor" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.45" />
                <path d={`M52 ${y}l3 3 6-7`} fill="none" stroke="currentColor" strokeOpacity="0.82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="78" y={y - 8} width={index === 1 ? 112 : 94} height="8" rx="4" fill="currentColor" fillOpacity="0.11" />
                <rect x="78" y={y + 5} width={index === 2 ? 72 : 58} height="5" rx="2.5" fill="currentColor" fillOpacity="0.06" />
              </g>
            ))}

            <path d="M201 29h18v18" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" />
            <path d="M219 29l-24 24" fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={base}>
      <svg viewBox="0 0 240 140" className="h-full w-full overflow-visible">
        <g className="text-brand dark:text-cyan">
          <path d="M25 73H205" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5 7" />

          {[32, 78, 124, 170, 208].map((x, index) => (
            <g key={x}>
              <circle cx={x} cy="73" r={index === 2 ? 14 : 9} fill="currentColor" fillOpacity={index === 2 ? 0.12 : 0.07} stroke="currentColor" strokeOpacity={index === 2 ? 0.65 : 0.32} />
              {index !== 2 && <circle cx={x} cy="73" r="3" fill="currentColor" fillOpacity="0.55" />}
            </g>
          ))}

          <path d="M124 58l13 5v10c0 10-6 17-13 20-7-3-13-10-13-20V63l13-5Z" fill="currentColor" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.75" strokeWidth="2" />
          <path d="M118 73l4 4 8-10" fill="none" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />

          <path d="M47 45h23M84 45h18M148 45h25M187 45h19" stroke="currentColor" strokeOpacity="0.12" strokeWidth="5" strokeLinecap="round" />
          <path d="M47 101h17M76 101h25M148 101h19M180 101h26" stroke="currentColor" strokeOpacity="0.08" strokeWidth="5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}