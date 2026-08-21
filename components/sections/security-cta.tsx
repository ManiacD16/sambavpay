import { Activity, LockKeyhole, Network, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ContextGraphic } from '@/components/ui/context-graphic';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { Button } from '@/components/ui/button';

export function SecurityCta() {
  return (
    <section className="pb-24 lg:pb-32">
      <Container>
        <GsapReveal>
          <div className="group relative overflow-hidden rounded-[2rem] bg-[#061e57] px-6 py-12 text-center text-white shadow-[0_30px_100px_rgba(6,30,87,.22)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:shadow-[0_42px_120px_rgba(6,30,87,.32)] sm:px-10 lg:px-16 lg:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-grid-dark bg-[size:38px_38px] opacity-25" />
            <div aria-hidden="true" className="absolute left-1/2 top-[-12rem] size-[34rem] -translate-x-1/2 rounded-full bg-cyan/15 blur-3xl transition-transform duration-1000 group-hover:scale-125" />
            <div aria-hidden="true" className="absolute -bottom-32 -left-16 size-[24rem] rounded-full border border-cyan/10 transition-transform duration-1000 group-hover:scale-110" />
            <div aria-hidden="true" className="absolute -bottom-40 -left-24 size-[32rem] rounded-full border border-cyan/[0.06]" />

            <ContextGraphic
              variant="security"
              className="-right-8 top-1/2 h-[230px] w-[330px] -translate-y-1/2 text-cyan/20 opacity-60 group-hover:-translate-x-3 group-hover:text-cyan/35"
            />

            <div className="pointer-events-none absolute left-8 top-8 hidden gap-3 opacity-65 md:flex">
              <span className="flex size-10 items-center justify-center rounded-xl border border-cyan/10 bg-cyan/[0.07] text-cyan transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110">
                <LockKeyhole className="size-4" />
              </span>
              <span className="flex size-10 items-center justify-center rounded-xl border border-cyan/10 bg-cyan/[0.07] text-cyan transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">
                <Network className="size-4" />
              </span>
              <span className="flex size-10 items-center justify-center rounded-xl border border-cyan/10 bg-cyan/[0.07] text-cyan transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-110">
                <Activity className="size-4" />
              </span>
            </div>

            <div className="relative mx-auto max-w-3xl">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-cyan/15 bg-cyan/10 text-cyan shadow-[0_16px_44px_rgba(5,210,251,.12)] transition-all duration-700 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-cyan group-hover:text-navy group-hover:shadow-[0_20px_50px_rgba(5,210,251,.24)]">
                <ShieldCheck className="size-7" />
              </span>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Trust your payments to infrastructure built for security.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Have questions about our security architecture, compliance or integration requirements?
              </p>

              <div className="mt-8">
                <Button href="mailto:legal@sambhavpay.com?subject=Security%20%26%20Compliance%20Enquiry" variant="light">
                  Talk to Security Team
                </Button>
              </div>
            </div>
          </div>
        </GsapReveal>
      </Container>
    </section>
  );
}
