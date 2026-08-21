'use client';

import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { HeroOrchestration } from '@/components/sections/hero-orchestration';

const proof = ['One API integration', 'Unified operations', 'Real-time visibility'];
const words = ['One', 'platform.', 'Every', 'payment.'];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-32 sm:pt-36 xl:flex xl:items-center xl:pb-24 xl:pt-36">
      <div className="absolute inset-0 -z-30 bg-mesh-light dark:bg-mesh-dark" />
      <div className="decorative-grid absolute inset-0 -z-20 bg-grid-light bg-[size:48px_48px] opacity-80 [mask-image:linear-gradient(to_bottom,black,transparent_78%)] dark:bg-grid-dark dark:opacity-60" />
      <div className="ambient-orb absolute left-1/2 top-[9%] -z-20 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full border border-brand/[0.06] dark:border-cyan/[0.05]" />
      <div className="ambient-orb absolute left-1/2 top-[14%] -z-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-brand/[0.07] dark:border-cyan/[0.06]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 select-none overflow-hidden text-center font-display text-[18vw] font-extrabold leading-none tracking-[-0.09em] text-brand/[0.025] dark:text-white/[0.018]">
        ROUTE
      </div>

      <Container>
        <div className="grid items-center gap-14 xl:grid-cols-[.72fr_1.28fr] xl:gap-10 2xl:grid-cols-[.76fr_1.24fr] 2xl:gap-14">
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow-pill"
            >
              <Sparkles className="size-3.5" />
              Intelligent payment infrastructure
            </motion.div>

            <h1
              aria-label="One platform. Every payment. Infinite possibilities."
              className="mt-7 text-balance font-display text-[clamp(2.05rem,4.45vw,4.55rem)] font-semibold leading-[0.99] tracking-[-0.069em] text-ink dark:text-white"
            >
              <span aria-hidden="true" className="block">
                {words.map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 36, rotateX: -24 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.78, delay: 0.08 + index * 0.075, ease: [0.22, 1, 0.36, 1] }}
                    className="mr-[0.19em] inline-block origin-bottom"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient mt-1 block pb-1"
              >
                Infinite possibilities.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-[38rem] text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300"
            >
              Connect multiple payment gateways, PSPs, processors and acquiring partners through one intelligent orchestration layer. Route, retry, recover and reconcile every transaction from a single platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                href="/get-started"
                className="sm:min-w-[160px]"
              >
                Get Started
              </Button>

              <Button
                href="/book-demo"
                variant="secondary"
                className="sm:min-w-[160px]"
              >
                Book a Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3"
            >
              {proof.map((item) => (
                <div key={item} className="group inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                  <span className="flex size-5 items-center justify-center rounded-full bg-brand/[0.08] text-brand transition group-hover:bg-brand group-hover:text-white dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                    <CheckCircle2 className="size-3.5" />
                  </span>
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.92, duration: 0.7 }}
              className="mt-10 hidden items-center gap-3 xl:flex"
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white/75 text-brand shadow-sm dark:border-white/10 dark:bg-white/[0.045] dark:text-cyan">
                <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">Explore the payment journey</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto w-full max-w-[1080px] xl:max-w-none"
          >
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand/[0.08] blur-3xl dark:bg-cyan/[0.07]" />
            <HeroOrchestration />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
