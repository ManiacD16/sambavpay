import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  CreditCard,
  ArrowDown,
  BadgeCheck,
  Database,
  Eye,
  Fingerprint,
  KeyRound,
  ListChecks,
  LockKeyhole,
  Network,
  Radar,
  Route,
  ScrollText,
  ServerCog,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { SecurityCta } from '@/components/sections/security-cta';
import { InnerHero } from '@/components/sections/inner-hero';
import { Container } from '@/components/ui/container';
import { ContextGraphic, type ContextGraphicVariant } from '@/components/ui/context-graphic';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { SecurityControlGraphic, type SecurityControlGraphicVariant } from '@/components/ui/security-control-graphic';

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Explore SambhavPay security architecture across APIs, data protection, access control, transaction security, monitoring, auditability and infrastructure resilience.',
};

const heroBadges = ['API Security', 'Data Protection', 'Access Control', 'Monitoring', 'Auditability'];

const apiSecurity = [
  'API authentication',
  'API keys',
  'OAuth / token-based authentication where applicable',
  'Rate limiting',
  'Request validation',
  'IP controls',
  'Webhook signature verification',
  'Idempotency protection',
];

const dataProtection: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
  visual: ContextGraphicVariant;
}> = [
  {
    icon: LockKeyhole,
    title: 'Encryption',
    text: 'Protect data in transit and at rest using appropriately configured encryption controls.',
    visual: 'data',
  },
  {
    icon: Fingerprint,
    title: 'Tokenization',
    text: 'Reduce exposure of sensitive payment information where tokenization is applicable.',
    visual: 'access',
  },
  {
    icon: Database,
    title: 'Data Minimization',
    text: 'Limit collection and retention to information required for the service and operating model.',
    visual: 'data',
  },
  {
    icon: KeyRound,
    title: 'Secure Secrets',
    text: 'Protect API credentials, keys and sensitive configuration through controlled secret handling.',
    visual: 'api',
  },
];

const accessControls = [
  'Role-Based Access Control',
  'Multi-Factor Authentication',
  'Privileged access controls',
  'Session management',
  'User permissions',
  'Admin activity tracking',
];

const transactionFlow = [
  'Payment Request',
  'Authentication',
  'Validation',
  'Risk / Rules',
  'Smart Routing',
  'Provider',
  'Transaction Monitoring',
  'Audit Trail',
];

const monitoringControls = [
  'Real-time API monitoring',
  'Transaction monitoring',
  'Failed transaction alerts',
  'Suspicious activity monitoring',
  'Infrastructure health monitoring',
  'Security event logging',
];

const auditCards: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  { icon: ScrollText, title: 'Audit Logs', text: 'Track important platform actions for operational review.' },
  { icon: Eye, title: 'Access Logs', text: 'Maintain visibility into administrative and privileged activity.' },
  { icon: ListChecks, title: 'Transaction Logs', text: 'Preserve transaction-level operational visibility and state history.' },
  { icon: BadgeCheck, title: 'Compliance Controls', text: 'Support applicable regulatory and security requirements with evidence-backed controls.' },
];

/* Keep ONLY controls verified as implemented in production. */
const infrastructureAreas = [
  'Secure cloud infrastructure',
  'Network segmentation',
  'Firewall / WAF controls',
  'DDoS protection',
  'Backup & recovery',
  'Disaster recovery',
  'High availability',
  'Continuous monitoring',
];

const apiControlGraphics: SecurityControlGraphicVariant[] = [
  'api-auth',
  'api-keys',
  'oauth',
  'rate-limit',
  'request-validation',
  'ip-controls',
  'webhook',
  'idempotency',
];

const accessControlGraphics: SecurityControlGraphicVariant[] = [
  'rbac',
  'mfa',
  'privileged',
  'session',
  'permissions',
  'admin-tracking',
];

const transactionGraphics: SecurityControlGraphicVariant[] = [
  'payment-request',
  'transaction-auth',
  'transaction-validation',
  'risk-rules',
  'smart-routing',
  'provider',
  'transaction-monitoring',
  'audit-trail',
];

const infrastructureGraphics: SecurityControlGraphicVariant[] = [
  'secure-cloud',
  'network-segmentation',
  'waf',
  'ddos',
  'backup',
  'disaster-recovery',
  'high-availability',
  'continuous-monitoring',
];

const transactionIcons: LucideIcon[] = [
  CreditCard,
  LockKeyhole,
  BadgeCheck,
  Radar,
  Route,
  ServerCog,
  Activity,
  ScrollText,
];

export default function SecurityPage() {
  return (
    <>
      <InnerHero
        eyebrow="Security"
        title="Security Built Into Every Payment"
        description="Protecting payment data, APIs and business operations with security controls designed for modern financial infrastructure."
        icon={ShieldCheck}
        primaryHref="mailto:legal@sambhavpay.com?subject=Security%20%26%20Compliance%20Enquiry"
        primaryLabel="Talk to Security Team"
        secondaryHref="#security-architecture"
        secondaryLabel="Explore Architecture"
      />

      <section className="-mt-12 pb-20 lg:-mt-16 lg:pb-28">
        <Container>
          <GsapReveal>
            <div className="flex flex-wrap justify-center gap-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-slate-600 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:border-brand/25 hover:bg-brand/[0.04] hover:text-brand hover:shadow-[0_10px_24px_rgba(16,102,209,.10)] dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan/25 dark:hover:bg-cyan/[0.06] dark:hover:text-cyan"
                >
                  <span className="size-1.5 rounded-full bg-brand shadow-[0_0_0_3px_rgba(16,102,209,.08)] transition-transform duration-500 group-hover:scale-125 dark:bg-cyan" />
                  {badge}
                </span>
              ))}
            </div>
          </GsapReveal>
        </Container>
      </section>

      {/* SECURITY ARCHITECTURE */}
      <section id="security-architecture" className="relative scroll-mt-24 overflow-hidden pb-24 lg:pb-36">
        <Container>
          <GsapReveal>
            <SectionHeading
              eyebrow="Security at every layer"
              title="Layered controls from the API edge to payment infrastructure."
              description="Security is most effective when identity, data, access, monitoring and transaction controls work together rather than as isolated features."
              align="center"
            />
          </GsapReveal>

          <GsapReveal delay={0.08}>
            <div className="group relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[#f7fbff] p-5 shadow-[0_28px_90px_rgba(6,30,87,.08)] transition-[transform,box-shadow,border-color] duration-700 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_38px_110px_rgba(6,30,87,.13)] dark:border-white/[0.08] dark:bg-[#03162f] dark:hover:border-cyan/20 sm:p-7 lg:p-10">
              <div aria-hidden="true" className="absolute inset-0 bg-grid-light bg-[size:42px_42px] opacity-45 dark:bg-grid-dark dark:opacity-20" />
              <div aria-hidden="true" className="absolute left-1/2 top-[-13rem] size-[34rem] -translate-x-1/2 rounded-full bg-brand/[0.09] blur-3xl transition-transform duration-1000 group-hover:scale-125 dark:bg-cyan/[0.08]" />
              <ContextGraphic variant="security" className="-right-8 bottom-0 h-[220px] w-[320px] opacity-45 group-hover:-translate-x-3 dark:opacity-25" />

              <div className="relative flex flex-col items-center">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-brand to-[#087ec8] px-6 py-4 text-sm font-extrabold text-white shadow-[0_18px_50px_rgba(16,102,209,.28)] transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-[0_22px_60px_rgba(16,102,209,.34)]">
                  <ShieldCheck className="size-5 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110" />
                  SAMBHAVPAY SECURITY
                </div>

                <ArrowDown className="my-4 size-5 text-brand transition-transform duration-500 group-hover:translate-y-1 dark:text-cyan" />

                <div className="grid w-full gap-4 lg:grid-cols-3">
                  <SecurityLayer icon={KeyRound} title="API SECURITY" items={['Authentication', 'API Keys', 'Rate Limits']} visual="api" />
                  <SecurityLayer icon={LockKeyhole} title="DATA SECURITY" items={['Encryption', 'Tokenization', 'Data Protection']} visual="data" />
                  <SecurityLayer icon={UserRoundCheck} title="ACCESS CONTROL" items={['RBAC', 'Permissions', 'MFA']} visual="access" />
                </div>

                <ArrowDown className="my-4 size-5 text-brand dark:text-cyan" />

                <SpotlightCard className="group/monitor inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl px-5 py-4 text-sm font-extrabold text-ink transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02] dark:text-white">
                  <Activity className="size-5 text-brand transition-transform duration-500 group-hover/monitor:scale-110 dark:text-cyan" />
                  MONITORING & AUDIT
                  <ContextGraphic variant="monitoring" className="-right-2 -top-4 h-20 w-28 opacity-35" />
                </SpotlightCard>

                <ArrowDown className="my-4 size-5 text-brand dark:text-cyan" />

                <SpotlightCard className="group/infra inline-flex min-w-[280px] items-center justify-center gap-3 rounded-2xl px-5 py-4 text-sm font-extrabold text-ink transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02] dark:text-white">
                  <Network className="size-5 text-brand transition-transform duration-500 group-hover/infra:scale-110 dark:text-cyan" />
                  PAYMENT INFRASTRUCTURE
                  <ContextGraphic variant="resilience" className="-right-1 -top-5 h-24 w-28 opacity-30" />
                </SpotlightCard>
              </div>
            </div>
          </GsapReveal>
        </Container>
      </section>

      {/* API SECURITY */}
      <section className="relative overflow-hidden border-y border-slate-200/70 bg-[#f7fbff] py-24 dark:border-white/[0.07] dark:bg-[#03152d] lg:py-32">
        <SectionAmbient variant="api" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-20">
            <GsapReveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="API security"
                  title="Secure every connection."
                  description="Protect API access with layered authentication, validation and abuse-prevention controls appropriate to each integration."
                />
                <ContextGraphic variant="api" className="relative mt-8 h-[150px] w-[240px] opacity-55" />
              </div>
            </GsapReveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {apiSecurity.map((item, index) => (
                <GsapReveal key={item} delay={index * 0.035}>
                  <CompactControlCard label={item} index={index} icon={ShieldCheck} graphic={apiControlGraphics[index]} />
                </GsapReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* DATA PROTECTION */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <SectionAmbient variant="data" />
        <Container className="relative">
          <GsapReveal>
            <SectionHeading
              eyebrow="Data protection"
              title="Protect sensitive data throughout its lifecycle."
              description="Reduce unnecessary exposure by combining encryption, tokenization where applicable, data minimization and secure credential handling."
              align="center"
            />
          </GsapReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dataProtection.map((item, index) => (
              <GsapReveal key={item.title} delay={index * 0.05}>
                <FeatureCard {...item} index={index} />
              </GsapReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ACCESS */}
      <section className="relative overflow-hidden border-y border-slate-200/70 bg-[#f7fbff] py-24 dark:border-white/[0.07] dark:bg-[#03152d] lg:py-32">
        <SectionAmbient variant="access" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20">
            <GsapReveal>
              <div>
                <SectionHeading
                  eyebrow="Access & identity"
                  title="The right access. For the right people."
                  description="Separate responsibilities, reduce unnecessary privilege and maintain visibility over sensitive administrative actions."
                />
                <ContextGraphic variant="access" className="relative mt-8 h-[160px] w-[240px] opacity-55" />
              </div>
            </GsapReveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {accessControls.map((item, index) => (
                <GsapReveal key={item} delay={index * 0.035}>
                  <CompactControlCard label={item} index={index} icon={UserRoundCheck} graphic={accessControlGraphics[index]} />
                </GsapReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TRANSACTION SECURITY */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <SectionAmbient variant="transaction" />
        <Container className="relative">
          <GsapReveal>
            <SectionHeading
              eyebrow="Transaction security"
              title="Security follows every transaction."
              description="Apply security and operational controls across the full transaction path—from the first request through routing, provider execution, monitoring and audit."
              align="center"
            />
          </GsapReveal>

          <div className="relative mt-14">
            <div aria-hidden="true" className="absolute left-[5%] right-[5%] top-6 hidden h-px bg-gradient-to-r from-brand/20 via-cyan to-brand/20 xl:block" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
              {transactionFlow.map((item, index) => (
                <GsapReveal key={item} delay={index * 0.035}>
                  <TransactionControlCard
                    label={item}
                    index={index}
                    icon={transactionIcons[index]}
                    graphic={transactionGraphics[index]}
                  />
                </GsapReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* MONITORING */}
      <section className="relative overflow-hidden bg-[#03152d] py-24 text-white lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-dark bg-[size:42px_42px] opacity-20" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 size-[30rem] -translate-y-1/2 rounded-full bg-cyan/[0.08] blur-3xl" />
        <ContextGraphic variant="monitoring" className="right-8 top-1/2 hidden h-[260px] w-[360px] -translate-y-1/2 text-cyan/10 opacity-45 xl:block" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-20">
            <GsapReveal>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan">Monitoring & detection</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Always know what&apos;s happening.</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Operational visibility helps teams identify failures, suspicious behavior and infrastructure issues before they become larger incidents.
                </p>
              </div>
            </GsapReveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {monitoringControls.map((item, index) => (
                <GsapReveal key={item} delay={index * 0.035}>
                  <div className="group relative flex min-h-[72px] items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan/25 hover:bg-cyan/[0.07] hover:shadow-[0_18px_40px_rgba(0,0,0,.2)]">
                    <ContextGraphic variant="monitoring" className="-bottom-7 -right-5 h-20 w-28 text-cyan/20 opacity-40 group-hover:-translate-x-1" />
                    <span className="relative z-10 flex size-9 items-center justify-center rounded-xl bg-cyan/10 text-cyan transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-cyan group-hover:text-navy">
                      <Activity className="size-4" />
                    </span>
                    <span className="relative z-10 text-sm font-extrabold text-white">{item}</span>
                  </div>
                </GsapReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* AUDIT */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <SectionAmbient variant="audit" />
        <Container className="relative">
          <GsapReveal>
            <SectionHeading
              eyebrow="Audit & compliance"
              title="Built for accountability and operational control."
              description="Keep important platform, access and transaction activity available for review while supporting evidence-backed compliance processes."
              align="center"
            />
          </GsapReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {auditCards.map((item, index) => (
              <GsapReveal key={item.title} delay={index * 0.05}>
                <FeatureCard icon={item.icon} title={item.title} text={item.text} visual="audit" index={index} />
              </GsapReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="relative overflow-hidden border-y border-slate-200/70 bg-[#f7fbff] py-24 dark:border-white/[0.07] dark:bg-[#03152d] lg:py-32">
        <SectionAmbient variant="resilience" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-20">
            <GsapReveal>
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  eyebrow="Infrastructure security"
                  title="Designed for resilience."
                  description="Production infrastructure controls should be published only after validation by your security and infrastructure teams."
                />
                <ContextGraphic variant="resilience" className="relative mt-7 h-[140px] w-[220px] opacity-55" />
                <div className="mt-7 rounded-2xl border border-amber-300/30 bg-amber-50 p-4 text-xs leading-6 text-amber-950 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-100">
                  Keep only controls in this section that are actually implemented and evidenced in your production environment.
                </div>
              </div>
            </GsapReveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {infrastructureAreas.map((item, index) => (
                <GsapReveal key={item} delay={index * 0.035}>
                  <CompactControlCard label={item} index={index} icon={ServerCog} graphic={infrastructureGraphics[index]} />
                </GsapReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CertificationsSection />
      <SecurityCta />
    </>
  );
}

function SectionAmbient({ variant }: { variant: ContextGraphicVariant }) {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-brand/[0.045] blur-3xl dark:bg-cyan/[0.03]" />
      <ContextGraphic variant={variant} className="-right-6 top-1/2 hidden h-[260px] w-[360px] -translate-y-1/2 opacity-[0.18] lg:block" />
    </>
  );
}

function SecurityLayer({
  icon: Icon,
  title,
  items,
  visual,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
  visual: ContextGraphicVariant;
}) {
  return (
    <SpotlightCard className="group min-h-[220px] rounded-[1.4rem] p-5 transition-[transform,box-shadow] duration-600 hover:-translate-y-2 hover:scale-[1.015]">
      <ContextGraphic variant={visual} className="-bottom-2 -right-3 h-[120px] w-[55%] opacity-45 group-hover:-translate-x-1" />
      <div className="relative z-10 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
          <Icon className="size-[18px]" />
        </span>
        <h3 className="text-sm font-extrabold text-ink dark:text-white">{title}</h3>
      </div>
      <div className="relative z-10 mt-5 space-y-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-slate-200/70 bg-slate-50/75 px-3 py-2.5 text-xs font-bold text-slate-600 backdrop-blur transition-colors duration-500 group-hover:border-brand/10 group-hover:bg-white/90 dark:border-white/[0.06] dark:bg-white/[0.025] dark:text-slate-400 dark:group-hover:border-cyan/10 dark:group-hover:bg-white/[0.045]">
            {item}
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}

function CompactControlCard({
  label,
  index,
  icon: Icon,
  graphic,
}: {
  label: string;
  index: number;
  icon: LucideIcon;
  graphic: SecurityControlGraphicVariant;
}) {
  return (
    <SpotlightCard className="group relative flex min-h-[92px] items-center gap-3 overflow-hidden rounded-2xl p-4 pr-[8.25rem] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(900px)_translateY(-6px)_rotateX(1deg)_rotateY(-1deg)_scale(1.018)] hover:border-brand/25 hover:shadow-[0_22px_55px_rgba(16,102,209,.13)] dark:hover:border-cyan/25 dark:hover:shadow-[0_22px_55px_rgba(0,216,255,.08)] sm:pr-[9.5rem]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.22] transition-opacity duration-700 group-hover:opacity-[0.42] dark:opacity-[0.09] dark:group-hover:opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,102,209,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.12) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'linear-gradient(to left, black, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent 70%)',
        }}
      />
      <div aria-hidden="true" className="absolute -right-10 top-1/2 size-32 -translate-y-1/2 rounded-full bg-brand/[0.055] blur-2xl transition-all duration-700 group-hover:-translate-x-2 group-hover:scale-125 group-hover:bg-cyan/[0.10] dark:bg-cyan/[0.04]" />
      <SecurityControlGraphic variant={graphic} className="-bottom-3 -right-3 h-[92px] w-[128px] sm:w-[144px]" />

      <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/[0.08] text-brand shadow-[0_8px_24px_rgba(16,102,209,.08)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(16,102,209,.2)] dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
        <Icon className="size-4" />
      </span>
      <span className="relative z-10 text-sm font-extrabold leading-5 text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">{label}</span>
      <span className="absolute right-3 top-3 z-10 font-mono text-[8px] text-slate-300 transition-colors duration-500 group-hover:text-brand/65 dark:text-slate-600 dark:group-hover:text-cyan/50">
        {String(index + 1).padStart(2, '0')}
      </span>

      <span className="absolute inset-x-4 bottom-0 z-10 h-px overflow-hidden bg-transparent">
        <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-transparent transition-all duration-700 group-hover:w-full" />
      </span>
    </SpotlightCard>
  );
}

function TransactionControlCard({
  label,
  index,
  icon: Icon,
  graphic,
}: {
  label: string;
  index: number;
  icon: LucideIcon;
  graphic: SecurityControlGraphicVariant;
}) {
  return (
    <SpotlightCard className="group relative h-full min-h-[190px] overflow-hidden rounded-2xl p-4 pt-5 text-center transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(900px)_translateY(-9px)_rotateX(2deg)_scale(1.028)] hover:border-brand/25 hover:shadow-[0_24px_60px_rgba(16,102,209,.14)] dark:hover:border-cyan/25">
      <div aria-hidden="true" className="absolute -right-10 bottom-0 size-32 rounded-full bg-brand/[0.05] blur-2xl transition-all duration-700 group-hover:-translate-x-2 group-hover:scale-125 group-hover:bg-cyan/[0.09] dark:bg-cyan/[0.035]" />
      <SecurityControlGraphic variant={graphic} className="-bottom-1 left-1/2 h-[78px] w-[118px] -translate-x-1/2 opacity-45 group-hover:opacity-100" />

      <span className="relative z-10 mx-auto flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-[#07489f] text-white shadow-[0_12px_30px_rgba(16,102,209,.2)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-[0_16px_36px_rgba(16,102,209,.3)] dark:from-cyan dark:to-brand dark:text-navy">
        <Icon className="size-[18px]" />
      </span>
      <p className="relative z-10 mt-4 min-h-[40px] text-[11px] font-extrabold leading-5 text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">{label}</p>
      <span className="relative z-10 mt-1 block font-mono text-[8px] text-slate-300 dark:text-slate-600">{String(index + 1).padStart(2, '0')}</span>

      <span className="absolute inset-x-4 bottom-0 z-10 h-px overflow-hidden">
        <span className="block h-full w-0 bg-gradient-to-r from-transparent via-cyan to-transparent transition-all duration-700 group-hover:w-full" />
      </span>
    </SpotlightCard>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text,
  visual,
  index,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  visual: ContextGraphicVariant;
  index: number;
}) {
  return (
    <SpotlightCard className="group h-full min-h-[270px] rounded-2xl p-5 transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(1000px)_translateY(-8px)_rotateX(1.5deg)_rotateY(-1.5deg)_scale(1.015)]">
      <div aria-hidden="true" className="absolute -right-14 -top-14 size-44 rounded-full bg-brand/[0.06] blur-3xl transition-transform duration-700 group-hover:scale-125 dark:bg-cyan/[0.035]" />
      <ContextGraphic variant={visual} className="-bottom-2 -right-4 h-[132px] w-[62%] opacity-45 group-hover:-translate-x-1 group-hover:-translate-y-1" />

      <div className="relative z-10 flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_14px_32px_rgba(16,102,209,.20)] dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
          <Icon className="size-5" />
        </span>
        <span className="font-mono text-[9px] text-slate-300 transition-colors duration-500 group-hover:text-brand/55 dark:text-slate-600 dark:group-hover:text-cyan/45">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10 max-w-[82%]">
        <h3 className="mt-6 font-display text-lg font-extrabold tracking-[-0.035em] text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{text}</p>
      </div>

      <div className="absolute inset-x-5 bottom-4 z-10 h-px overflow-hidden bg-slate-100 dark:bg-white/[0.06]">
        <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 group-hover:w-full" />
      </div>
    </SpotlightCard>
  );
}