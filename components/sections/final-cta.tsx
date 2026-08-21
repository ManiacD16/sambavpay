import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';

export function FinalCta() {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <GsapReveal>
          <div className="group relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#0e67d0] via-[#0a4fae] to-[#03183f] px-6 py-16 text-center text-white shadow-[0_44px_120px_rgba(6,30,87,.34)] sm:px-10 lg:py-24">
            <div className="absolute inset-0 bg-grid-dark bg-[size:38px_38px] opacity-[0.32]" />
            <div className="absolute -left-24 -top-24 size-80 rounded-full bg-cyan/25 blur-3xl transition duration-1000 group-hover:translate-x-12 group-hover:translate-y-8" />
            <div className="absolute -bottom-24 right-0 size-96 rounded-full bg-blue-300/[0.16] blur-3xl transition duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-6" />
            <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
            <div className="absolute left-1/2 top-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
            <Image
              src="/brand/brand-symbol.png"
              alt=""
              width={320}
              height={320}
              sizes="288px"
              className="pointer-events-none absolute -bottom-28 -right-8 w-72 opacity-[0.08] mix-blend-screen transition-transform duration-1000 group-hover:-rotate-3 group-hover:scale-110"
            />

            <div className="absolute left-5 top-5 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan backdrop-blur sm:flex">
              <Sparkles className="size-3" /> Intelligent infrastructure
            </div>
            <div className="absolute bottom-5 right-5 hidden items-center gap-2 font-mono text-[9px] text-white/[0.35] sm:flex">
              ONE API <ArrowRight className="size-3" /> EVERY PAYMENT
            </div>

            <div className="relative mx-auto max-w-4xl">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-cyan">Build with Sambhav Pay</p>
              <h2 className="mx-auto mt-5 max-w-3xl text-balance font-display text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.058em] sm:text-5xl lg:text-[4rem]">
                Build your payment infrastructure on one intelligent platform.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100/78 sm:text-lg">
                Discuss your payment, payout and orchestration requirements with the Sambhav Pay team.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  href="/get-started"
                  variant="light"
                >
                  Get Started
                </Button>

                <Button
                  href="/book-demo"
                  variant="secondary"
                  className="border-white/20 bg-white/[0.055] text-white hover:border-white/30 hover:bg-white/10 dark:text-white"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </GsapReveal>
      </Container>
    </section>
  );
}
