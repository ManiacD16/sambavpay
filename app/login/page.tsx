import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, KeyRound, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Merchant Login',
  description: 'Access the Sambhav Pay merchant platform through the secure merchant portal.',
};

export default function LoginPage() {
  const portalUrl = process.env.NEXT_PUBLIC_MERCHANT_PORTAL_URL || '/contact';
  const portalConfigured = portalUrl !== '/contact';

  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-28 sm:pt-32 lg:flex lg:items-center">
      <div className="absolute inset-0 -z-30 bg-mesh-light dark:bg-mesh-dark" />
      <div className="absolute inset-0 -z-20 bg-grid-light bg-[size:48px_48px] opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] dark:bg-grid-dark dark:opacity-[0.45]" />
      <div className="absolute left-1/2 top-1/2 -z-20 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/[0.06] dark:border-cyan/[0.05]" />
      <Container>
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white/90 shadow-[0_42px_120px_rgba(6,30,87,.2)] backdrop-blur-2xl lg:grid-cols-[.92fr_1.08fr] dark:border-white/10 dark:bg-[#061a38]/90">
          <div className="group relative hidden min-h-[590px] overflow-hidden bg-gradient-to-br from-[#0e67d0] via-[#0a4fae] to-[#03183f] p-10 text-white lg:flex lg:flex-col">
            <div className="absolute inset-0 bg-grid-dark bg-[size:36px_36px] opacity-[0.38]" />
            <div className="absolute -bottom-24 -right-20 size-80 rounded-full bg-cyan/25 blur-3xl transition duration-1000 group-hover:scale-125" />
            <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
            <Image src="/brand/brand-symbol.png" alt="" width={280} height={280} sizes="256px" className="pointer-events-none absolute -bottom-20 -right-16 w-64 opacity-[0.08] mix-blend-screen" />

            <div className="relative">
              <span className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-glow backdrop-blur">
                <ShieldCheck className="size-7 text-cyan" />
              </span>
              <p className="mt-8 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan"><Sparkles className="size-3.5" /> Merchant access</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.055em]">Your payment operations, one secure sign-in away.</h1>
              <p className="mt-5 text-sm leading-7 text-blue-100/78">
                Continue to the dedicated merchant workspace for transaction visibility, settlements and operational controls.
              </p>
            </div>

            <div className="relative mt-auto space-y-3 pt-12">
              {['Secure portal handoff', 'Role-aware access', 'Operational visibility'].map((item, index) => (
                <div key={item} className="group/item flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.055] p-3.5 text-sm backdrop-blur transition hover:translate-x-1 hover:bg-white/[0.09]">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-cyan/10 text-cyan"><LockKeyhole className="size-4" /></span>
                  <span><strong className="mr-2 font-mono text-[9px] text-white/[0.35]">0{index + 1}</strong>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-[590px] flex-col justify-center p-6 sm:p-10 lg:p-12">
            <Link href="/" className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-brand dark:text-slate-400 dark:hover:text-cyan">
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> Back to website
            </Link>

            <div className="mt-12">
              <div className="flex items-center gap-3 lg:hidden">
                <Image src="/brand/logo-mark.png" alt="" width={40} height={46} sizes="40px" className="h-10 w-auto" />
                <span className="font-display text-lg font-extrabold text-ink dark:text-white">Sambhav Pay</span>
              </div>
              <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.19em] text-brand lg:mt-0 dark:text-cyan">Merchant portal</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.05em] text-ink sm:text-4xl dark:text-white">Continue securely</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
                Merchant accounts use a dedicated secure workspace. Continue below to access your organization’s portal.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.035]">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-cyan/10 dark:text-cyan"><KeyRound className="size-5" /></span>
                <div>
                  <p className="text-sm font-extrabold text-ink dark:text-white">Protected merchant access</p>
                  <p className="mt-1 text-xs leading-6 text-slate-500 dark:text-slate-400">Authentication and account recovery are handled inside the merchant workspace.</p>
                </div>
              </div>
            </div>

            <Link
              href={portalUrl}
              target={portalConfigured ? '_blank' : undefined}
              rel={portalConfigured ? 'noreferrer' : undefined}
              className="group relative mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-button-glow transition duration-500 hover:-translate-y-1 hover:bg-[#0d5bbb] hover:shadow-[0_24px_64px_rgba(16,102,209,.4)]"
            >
              <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-[18deg] bg-white/20 opacity-0 blur-sm transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              <span className="relative">{portalConfigured ? 'Open Merchant Portal' : 'Request Merchant Access'}</span>
              {portalConfigured ? <ExternalLink className="relative size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1" />}
            </Link>

            <p className="mt-6 text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
              Need help accessing an existing account? <a href="mailto:sales@sambhavpay.com" className="font-bold text-brand hover:underline dark:text-cyan">Contact Sambhav Pay</a>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
