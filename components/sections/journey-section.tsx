'use client';

import {
  ArrowRight,
  Braces,
  Building2,
  CheckCircle2,
  Landmark,
  MousePointer2,
  Network,
  Rocket,
  ShieldCheck,
  Store,
} from 'lucide-react';
import { useLayoutEffect, useMemo, useRef } from 'react';

import { journey } from '@/data/site';
import { Container } from '@/components/ui/container';
import { GsapReveal } from '@/components/ui/gsap-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

const milestoneIcons = [
  Rocket,
  Store,
  ShieldCheck,
  Landmark,
  Braces,
  Network,
];

const journeyLabels = [
  'Gateway',
  'Expansion',
  'Regulatory',
  'Banking',
  'B2B APIs',
  'Orchestration',
];

const HORIZONTAL_BREAKPOINT = 1024;
const STEP_GAP = 390;
const START_X = 190;
const ROAD_BASE_Y = 310;

function buildRoadPath(points: Array<{ x: number; y: number }>, width: number) {
  if (!points.length) return `M 24 ${ROAD_BASE_Y} L ${width - 24} ${ROAD_BASE_Y}`;

  let path = `M 24 ${ROAD_BASE_Y}`;
  let previousX = 24;
  let previousY = ROAD_BASE_Y;

  points.forEach((point) => {
    const span = point.x - previousX;
    path += ` C ${previousX + span * 0.42} ${previousY}, ${point.x - span * 0.42} ${point.y}, ${point.x} ${point.y}`;
    previousX = point.x;
    previousY = point.y;
  });

  const finalX = width - 24;
  const finalSpan = finalX - previousX;
  path += ` C ${previousX + finalSpan * 0.4} ${previousY}, ${finalX - finalSpan * 0.4} ${ROAD_BASE_Y}, ${finalX} ${ROAD_BASE_Y}`;

  return path;
}

export function JourneySection({ compact = false }: { compact?: boolean }) {
  const items = compact ? journey.slice(-4) : journey;
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  const originalStartIndex = compact ? journey.length - items.length : 0;

  const roadmap = useMemo(() => {
    const points = items.map((_, index) => ({
      x: START_X + index * STEP_GAP,
      y: index % 2 === 0 ? 255 : 355,
    }));

    const width = Math.max(1600, START_X * 2 + Math.max(0, items.length - 1) * STEP_GAP + 240);

    return {
      points,
      width,
      path: buildRoadPath(points, width),
    };
  }, [items]);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!stage || !viewport || !track || !progress) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([gsapModule, triggerModule]) => {
        if (cancelled || !stage || !viewport || !track || !progress) return;

        const gsap = gsapModule.gsap;
        const ScrollTrigger = triggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();
        cleanup = () => mm.revert();

        mm.add(
          `(min-width: ${HORIZONTAL_BREAKPOINT}px) and (prefers-reduced-motion: no-preference)`,
          () => {
            const getDistance = () =>
              Math.max(0, track.scrollWidth - viewport.clientWidth);

            gsap.set(track, { x: 0 });
            gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });

            const timeline = gsap.timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: stage,
                start: 'top top',
                end: () => `+=${Math.max(getDistance() * 1.06, 900)}`,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            timeline.to(
              track,
              {
                x: () => -getDistance(),
              },
              0,
            );

            timeline.to(
              progress,
              {
                scaleX: 1,
              },
              0,
            );

            return () => {
              timeline.scrollTrigger?.kill();
              timeline.kill();
              gsap.set(track, { clearProps: 'transform' });
              gsap.set(progress, { clearProps: 'transform' });
            };
          },
        );
      },
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [roadmap.width]);

  return (
    <section
      ref={sectionRef}
      id="our-journey"
      className="relative overflow-hidden border-y border-slate-200/70 bg-[#f7faff] py-24 dark:border-white/[0.07] dark:bg-[#031326] lg:py-32"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:56px_56px] opacity-[0.45] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] dark:bg-grid-dark dark:opacity-[0.18]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-16 size-[34rem] rounded-full bg-brand/[0.07] blur-[110px] dark:bg-brand/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-10 size-[36rem] rounded-full bg-cyan/[0.07] blur-[120px] dark:bg-cyan/[0.045]"
      />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
          <GsapReveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="From a payment gateway to payment orchestration."
              description="Six years of building payment, banking and financial infrastructure for businesses across India. Follow the road from our 2021 foundation to our orchestration platform today."
            />
          </GsapReveal>

          <GsapReveal delay={0.08}>
            <div className="hidden items-center gap-3 rounded-full border border-brand/10 bg-white/80 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand shadow-[0_12px_35px_rgba(6,30,87,.06)] backdrop-blur-xl dark:border-cyan/15 dark:bg-white/[0.035] dark:text-cyan lg:flex">
              <MousePointer2 className="size-3.5" />
              Scroll to travel the roadmap
              <ArrowRight className="size-3.5" />
            </div>
          </GsapReveal>
        </div>
      </Container>

      {/* Pinned horizontal roadmap */}
      <div ref={stageRef} className="relative mt-14 lg:mt-16">
        <div className="relative mx-auto flex min-h-[820px] w-full max-w-[1680px] flex-col justify-center lg:min-h-[900px]">
          {/* progress / years */}
          <Container className="relative z-20 mb-5 w-full">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                  SambhavPay evolution
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-semibold tracking-[-0.05em] text-ink dark:text-white">
                    {items[0]?.year}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                    to
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-[-0.05em] text-brand dark:text-cyan">
                    {items[items.length - 1]?.year}
                  </span>
                </div>
              </div>

              <span className="hidden items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/[0.06] px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300 sm:inline-flex">
                <span className="size-1.5 rounded-full bg-current shadow-[0_0_9px_currentColor]" />
                Building forward
              </span>
            </div>

            <div className="mt-4 h-px overflow-hidden bg-slate-200/80 dark:bg-white/[0.08]">
              <span
                ref={progressRef}
                className="block h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand via-cyan to-brand shadow-[0_0_16px_rgba(5,210,251,.7)]"
              />
            </div>
          </Container>

          <div
            ref={viewportRef}
            className="roadmap-scrollbar relative w-full overflow-x-auto overflow-y-hidden pb-6 lg:overflow-hidden lg:pb-0"
          >
            <div
              ref={trackRef}
              className="relative h-[760px] min-w-max will-change-transform"
              style={{ width: roadmap.width }}
            >
              {/* road shadow */}
              <svg
                aria-hidden="true"
                viewBox={`0 0 ${roadmap.width} 760`}
                className="pointer-events-none absolute inset-x-0 top-[-22px] h-[760px] w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="road-edge-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1066D1" stopOpacity="0.8" />
                    <stop offset="52%" stopColor="#05D2FB" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#1066D1" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="road-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d={roadmap.path}
                  fill="none"
                  stroke="url(#road-edge-gradient)"
                  strokeWidth="78"
                  strokeLinecap="round"
                  opacity="0.22"
                  filter="url(#road-glow)"
                />
                <path
                  d={roadmap.path}
                  fill="none"
                  stroke="#061a38"
                  strokeWidth="68"
                  strokeLinecap="round"
                  className="dark:stroke-[#061a38]"
                />
                <path
                  d={roadmap.path}
                  fill="none"
                  stroke="url(#road-edge-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <path
                  d={roadmap.path}
                  fill="none"
                  stroke="#d7f7ff"
                  strokeWidth="2"
                  strokeDasharray="14 18"
                  strokeLinecap="round"
                  opacity="0.72"
                />
              </svg>

              {/* decorative directional arrows on the road */}
              {roadmap.points.slice(0, -1).map((point, index) => (
                <div
                  key={`direction-${index}`}
                  aria-hidden="true"
                  className="absolute z-[2] flex items-center gap-1 text-cyan/70"
                  style={{
                    left: point.x + 90,
                    top: point.y + (index % 2 === 0 ? 42 : -52),
                  }}
                >
                  <ArrowRight className="size-3.5" />
                  <ArrowRight className="-ml-2 size-3.5 opacity-50" />
                </div>
              ))}

              {items.map((item, index) => {
                const originalIndex = originalStartIndex + index;
                const Icon = milestoneIcons[originalIndex] ?? Building2;
                const point = roadmap.points[index];
                const cardAbove = index % 2 === 0;
                const isCurrent = item.year === '2026';

                return (
                  <article
                    key={item.year}
                    className="group absolute z-10 w-[332px]"
                    style={{
                      left: point.x - 166,
                      top: cardAbove ? 8 : 360,
                    }}
                  >
                    {/* connector from road to card */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-cyan/70 via-brand/35 to-transparent ${
                        cardAbove ? 'top-full h-[62px]' : '-top-[54px] h-[54px] rotate-180'
                      }`}
                    />

                    {/* road milestone node */}
                    <div
                      className="absolute left-1/2 z-20 -translate-x-1/2"
                      style={{
                        top: cardAbove ? point.y - 8 : point.y - 360 - 8,
                      }}
                    >
                      <div
                        className={`relative flex size-[58px] items-center justify-center rounded-full border-[5px] border-[#f7faff] shadow-[0_16px_40px_rgba(6,30,87,.24)] transition-all duration-500 group-hover:scale-110 dark:border-[#031326] ${
                          isCurrent
                            ? 'bg-gradient-to-br from-cyan to-brand text-[#031326] shadow-[0_0_0_7px_rgba(5,210,251,.10),0_18px_45px_rgba(5,210,251,.35)]'
                            : 'bg-gradient-to-br from-[#0d7be8] to-[#06448e] text-white'
                        }`}
                      >
                        <span className="absolute inset-0 rounded-full bg-white/0 transition duration-500 group-hover:bg-white/10" />
                        <Icon className="relative size-5 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* milestone card */}
                    <div
                      className={`relative overflow-hidden rounded-[1.55rem] border p-5 shadow-[0_22px_60px_rgba(6,30,87,.10)] backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] [transform-style:preserve-3d] group-hover:-translate-y-2 group-hover:scale-[1.025] group-hover:shadow-[0_30px_80px_rgba(6,30,87,.16)] dark:shadow-[0_24px_70px_rgba(0,0,0,.18)] ${
                        isCurrent
                          ? 'border-cyan/30 bg-[#eef8ff] dark:border-cyan/35 dark:bg-[#071a34]'
                          : 'border-slate-200/80 bg-white hover:border-brand/25 dark:border-white/[0.10] dark:bg-[#0a1b31] dark:hover:border-cyan/25'
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                          isCurrent
                            ? 'bg-gradient-to-br from-cyan/[0.06] via-transparent to-brand/[0.05] opacity-80 dark:from-cyan/[0.10] dark:via-transparent dark:to-brand/[0.10]'
                            : 'bg-gradient-to-br from-brand/[0.025] via-transparent to-cyan/[0.035] opacity-70 dark:from-brand/[0.08] dark:via-transparent dark:to-cyan/[0.06]'
                        }`}
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-brand/[0.08] blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-cyan/[0.14] dark:bg-cyan/[0.07]"
                      />

                      <Icon
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-7 -right-4 size-28 rotate-[-10deg] text-brand/[0.035] transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:scale-110 group-hover:text-cyan/[0.08] dark:text-cyan/[0.035]"
                      />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-brand dark:text-cyan">
                              {'phase' in item ? item.phase : journeyLabels[originalIndex]}
                            </p>
                            <p className="mt-1.5 font-display text-[2rem] font-semibold leading-none tracking-[-0.06em] text-ink dark:text-white">
                              {item.year}
                            </p>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <span className="font-mono text-[8px] font-bold tracking-[0.15em] text-slate-300 dark:text-slate-600">
                              {String(originalIndex + 1).padStart(2, '0')}
                            </span>

                            {isCurrent && (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/20 bg-cyan/[0.08] px-2.5 py-1 text-[7px] font-extrabold uppercase tracking-[0.14em] text-brand dark:text-cyan">
                                <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(5,210,251,.8)]" />
                                Current
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="my-4 h-px overflow-hidden bg-slate-200/70 dark:bg-white/[0.08]">
                          <span className="block h-full w-12 bg-gradient-to-r from-brand to-cyan transition-all duration-700 group-hover:w-full" />
                        </div>

                        <h3 className="font-display text-[17px] font-extrabold leading-6 tracking-[-0.035em] text-ink dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 line-clamp-4 text-[11px] leading-[1.7] text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.highlights?.slice(0, 2).map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center gap-1 rounded-full border border-brand/10 bg-brand/[0.045] px-2 py-1 text-[7px] font-bold text-brand dark:border-cyan/10 dark:bg-cyan/[0.05] dark:text-cyan"
                            >
                              <CheckCircle2 className="size-2.5" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}

              {/* beginning / destination labels */}
              <div className="absolute left-8 top-[285px] z-10 rounded-full border border-white/10 bg-[#071d3b]/90 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.15em] text-white/70 shadow-lg backdrop-blur">
                Start
              </div>
              <div className="absolute right-10 top-[285px] z-10 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-[#071d3b]/90 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.15em] text-cyan shadow-lg backdrop-blur">
                Orchestration era
                <ArrowRight className="size-3" />
              </div>
            </div>
          </div>

          <Container className="relative z-20 mt-3 w-full lg:hidden">
            <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
              Swipe horizontally to explore
              <ArrowRight className="size-3.5 text-brand dark:text-cyan" />
            </p>
          </Container>
        </div>
      </div>

      {/* Destination panel */}
      {!compact && (
        <Container className="relative mt-8 lg:mt-12">
          <GsapReveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-cyan/15 bg-[#061e57] px-6 py-8 text-white shadow-[0_28px_80px_rgba(6,30,87,.2)] sm:px-8 lg:px-10 lg:py-9">
              <div aria-hidden="true" className="absolute inset-0 bg-grid-dark bg-[size:40px_40px] opacity-20" />
              <div aria-hidden="true" className="absolute -right-24 -top-44 size-[28rem] rounded-full bg-cyan/15 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-40 left-1/4 size-[24rem] rounded-full bg-brand/20 blur-3xl" />

              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-cyan">
                    Where the road leads
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.045em] sm:text-3xl">
                    2026: one connected payment orchestration layer.
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                    Intelligent routing, multi-acquirer connectivity, failover, reconciliation and a single API now come together as the next chapter of SambhavPay infrastructure.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 backdrop-blur-xl">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cyan text-[#031326] shadow-[0_10px_30px_rgba(5,210,251,.22)]">
                    <Network className="size-4.5" />
                  </div>
                  <div>
                    <p className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-white/45">
                      Current direction
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-white">Payment orchestration</p>
                  </div>
                </div>
              </div>
            </div>
          </GsapReveal>
        </Container>
      )}

      <style jsx global>{`
        .roadmap-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(16, 102, 209, 0.45) transparent;
        }

        .roadmap-scrollbar::-webkit-scrollbar {
          height: 5px;
        }

        .roadmap-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .roadmap-scrollbar::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(16, 102, 209, 0.5), rgba(5, 210, 251, 0.75));
        }
      `}</style>
    </section>
  );
}