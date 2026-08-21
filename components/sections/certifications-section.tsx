import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, FileCheck2, ShieldCheck } from 'lucide-react';

import { certifications } from '@/data/certifications';
import { Container } from '@/components/ui/container';
import { ContextGraphic } from '@/components/ui/context-graphic';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export function CertificationsSection() {
  return (
    <section id="security-compliance" className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-light bg-[size:52px_52px] opacity-30 dark:bg-grid-dark dark:opacity-15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-3xl dark:bg-cyan/[0.035]"
      />

      <Container className="relative">
        <GsapReveal>
          <SectionHeading
            eyebrow="Security & Compliance"
            title="Verified documents, published with clear scope."
            description="Security-first infrastructure designed with industry-standard security practices. Certification, authorization and registration documents are published here only after the supporting files have been verified."
            align="center"
          />
        </GsapReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item, index) => (
            <GsapReveal key={item.name} delay={index * 0.04}>
              <SpotlightCard className="group flex h-full min-h-[310px] flex-col rounded-[1.5rem] p-5 transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:[transform:perspective(1000px)_translateY(-8px)_rotateX(1.5deg)_rotateY(-1.5deg)_scale(1.015)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-35 transition-opacity duration-500 group-hover:opacity-60 dark:opacity-15 dark:group-hover:opacity-35"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(16,102,209,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.07) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                    maskImage: 'linear-gradient(to bottom left, black, transparent 70%)',
                    WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 70%)',
                  }}
                />

                <ContextGraphic
                  variant="compliance"
                  className="-bottom-1 -right-3 h-[138px] w-[62%] opacity-55 group-hover:-translate-x-1 group-hover:-translate-y-1"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-brand/[0.07] blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-cyan/[0.12] dark:bg-cyan/[0.035]"
                />

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/10 bg-brand/10 text-brand transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_14px_32px_rgba(16,102,209,.22)] dark:border-cyan/10 dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                    <BadgeCheck className="size-5" />
                  </span>

                  <div className="flex min-w-0 items-start gap-2">
                    {item.logoUrl ? (
                      <div className="flex h-12 min-w-[96px] max-w-[118px] items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 px-2.5 py-1.5 shadow-[0_10px_25px_rgba(6,30,87,.05)] transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-brand/20 dark:border-white/[0.10]">
                        <Image
                          src={item.logoUrl}
                          alt={item.logoAlt ?? item.name}
                          width={180}
                          height={72}
                          sizes="118px"
                          className="max-h-9 w-auto max-w-full object-contain"
                        />
                      </div>
                    ) : null}

                    <span className="pt-1 font-mono text-[9px] text-slate-300 transition-colors duration-500 group-hover:text-brand/55 dark:text-slate-600 dark:group-hover:text-cyan/45">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 max-w-[86%]">
                  <p className="mt-6 text-[9px] font-extrabold uppercase tracking-[0.16em] text-brand dark:text-cyan">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold tracking-[-0.04em] text-ink transition-colors duration-500 group-hover:text-brand dark:text-white dark:group-hover:text-cyan">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-6">
                  {item.documentUrl ? (
                    <Link
                      href={item.documentUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-brand transition hover:text-[#0b4f9f] dark:text-cyan dark:hover:text-white"
                    >
                      <FileCheck2 className="size-4" />
                      View verified document
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-amber-700 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-200">
                      <ShieldCheck className="size-3.5" />
                      Document pending upload
                    </span>
                  )}
                </div>

                <div className="absolute inset-x-5 bottom-3 z-10 h-px overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="block h-full w-full -translate-x-full bg-gradient-to-r from-brand via-cyan to-brand transition-transform duration-700 group-hover:translate-x-0" />
                </div>
              </SpotlightCard>
            </GsapReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
