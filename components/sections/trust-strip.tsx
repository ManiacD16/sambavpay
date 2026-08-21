import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart3,
  Braces,
  Check,
  CircleDollarSign,
  RefreshCcw,
  Route,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { SpotlightCard } from '@/components/ui/spotlight-card';

const items = [
  {
    icon: Braces,
    number: '01',
    title: 'One API',
    text: 'A consistent integration layer',
    visual: 'api',
  },
  {
    icon: Route,
    number: '02',
    title: 'Smart routing',
    text: 'Configurable payment paths',
    visual: 'routing',
  },
  {
    icon: RefreshCcw,
    number: '03',
    title: 'Unified reconciliation',
    text: 'Central operational visibility',
    visual: 'reconciliation',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Real-time insight',
    text: 'Status and performance signals',
    visual: 'insight',
  },
] as const;

export function TrustStrip() {
  return (
    <section className="relative z-10 pb-20 lg:-mt-1 lg:pb-28">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <SpotlightCard
                key={item.title}
                className="
                  group
                  min-h-[218px]
                  rounded-[1.35rem]
                  p-5
                  [transform-style:preserve-3d]
                  transition-[transform,box-shadow,border-color]
                  duration-700
                  ease-[cubic-bezier(.22,1,.36,1)]
                  hover:[transform:perspective(1000px)_translateY(-8px)_rotateX(2deg)_rotateY(-2deg)_scale(1.018)]
                "
              >
                {/* Ambient glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-20
                    size-48
                    rounded-full
                    bg-brand/[0.07]
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:-translate-x-4
                    group-hover:translate-y-4
                    group-hover:scale-125
                    group-hover:bg-cyan/[0.11]
                    dark:bg-cyan/[0.05]
                  "
                />

                {/* Technical grid */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.26]
                    transition-opacity
                    duration-500
                    group-hover:opacity-[0.48]
                    dark:opacity-[0.12]
                    dark:group-hover:opacity-[0.28]
                  "
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(16,102,209,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.10) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                    maskImage:
                      'linear-gradient(to bottom left, black, transparent 62%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom left, black, transparent 62%)',
                  }}
                />

                {/* Contextual visual */}
                <CardVisual type={item.visual} />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span
                    className="
                      flex
                      size-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[0.9rem]
                      border
                      border-brand/10
                      bg-brand/[0.085]
                      text-brand
                      shadow-[0_8px_22px_rgba(16,102,209,.08)]
                      transition-all
                      duration-500
                      group-hover:-rotate-6
                      group-hover:scale-110
                      group-hover:border-brand/0
                      group-hover:bg-brand
                      group-hover:text-white
                      group-hover:shadow-[0_14px_30px_rgba(16,102,209,.24)]
                      dark:border-cyan/10
                      dark:bg-cyan/10
                      dark:text-cyan
                      dark:group-hover:bg-cyan
                      dark:group-hover:text-navy
                    "
                  >
                    <Icon className="size-5 transition-transform duration-500 group-hover:scale-110" />
                  </span>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-bold
                      tracking-[0.2em]
                      text-slate-300
                      transition-colors
                      duration-500
                      group-hover:text-brand/55
                      dark:text-slate-600
                      dark:group-hover:text-cyan/45
                    "
                  >
                    {item.number}
                  </span>
                </div>

                {/* Text */}
                <div
                  className="
                    relative
                    z-10
                    mt-5
                    max-w-[72%]
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]
                    group-hover:translate-x-0.5
                  "
                >
                  <p
                    className="
                      text-sm
                      font-extrabold
                      tracking-[-0.025em]
                      text-ink
                      transition-colors
                      duration-500
                      group-hover:text-brand
                      dark:text-white
                      dark:group-hover:text-cyan
                    "
                  >
                    {item.title}
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>

                {/* Animated bottom line */}
                <div
                  className="
                    absolute
                    inset-x-5
                    bottom-5
                    z-10
                    h-px
                    overflow-hidden
                    bg-slate-100
                    dark:bg-white/[0.06]
                  "
                >
                  <span
                    className="
                      block
                      h-full
                      w-0
                      bg-gradient-to-r
                      from-brand
                      via-cyan
                      to-brand
                      transition-all
                      duration-700
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:w-full
                    "
                  />
                </div>

                {/* Hover arrow */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-4
                    right-5
                    z-10
                    flex
                    size-7
                    translate-x-2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-brand/10
                    bg-white/80
                    text-brand
                    opacity-0
                    shadow-sm
                    backdrop-blur
                    transition-all
                    duration-500
                    group-hover:translate-x-0
                    group-hover:opacity-100
                    dark:border-cyan/10
                    dark:bg-white/[0.06]
                    dark:text-cyan
                  "
                >
                  <ArrowRight className="size-3.5" />
                </span>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CardVisual({
  type,
}: {
  type: (typeof items)[number]['visual'];
}) {
  const shell = `
    pointer-events-none
    absolute
    right-4
    top-[4.2rem]
    z-[2]
    h-[108px]
    w-[42%]
    origin-center
    opacity-[0.52]
    transition-all
    duration-700
    ease-[cubic-bezier(.22,1,.36,1)]
    group-hover:-translate-x-[3px]
    group-hover:-translate-y-[2px]
    group-hover:scale-[1.08]
    group-hover:opacity-100
    dark:opacity-[0.34]
    dark:group-hover:opacity-[0.72]
  `;

  /*
   * --------------------------------------------------
   * ONE API
   * --------------------------------------------------
   */

  if (type === 'api') {
    return (
      <div aria-hidden="true" className={shell}>
        {/* center API */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            size-11
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-2xl
            border
            border-brand/15
            bg-white/80
            text-brand
            shadow-[0_12px_35px_rgba(16,102,209,.12)]
            backdrop-blur-md
            transition-transform
            duration-700
            group-hover:rotate-6
            dark:bg-white/[0.07]
            dark:text-cyan
          "
        >
          <Braces className="size-5" />
        </div>

        {/* external services */}
        <ConnectorDot
          icon={Server}
          className="left-0 top-2"
        />

        <ConnectorDot
          icon={ShieldCheck}
          className="right-0 top-1"
        />

        <ConnectorDot
          icon={CircleDollarSign}
          className="bottom-0 left-2"
        />

        {/* connectors */}
        <span
          className="
            absolute
            left-[22%]
            top-[29%]
            h-px
            w-[29%]
            -rotate-[15deg]
            bg-gradient-to-r
            from-brand/10
            to-brand/55
            dark:to-cyan/55
          "
        />

        <span
          className="
            absolute
            right-[21%]
            top-[29%]
            h-px
            w-[29%]
            rotate-[13deg]
            bg-gradient-to-l
            from-brand/10
            to-brand/55
            dark:to-cyan/55
          "
        />

        <span
          className="
            absolute
            bottom-[27%]
            left-[24%]
            h-px
            w-[29%]
            rotate-[18deg]
            bg-gradient-to-r
            from-brand/10
            to-brand/55
            dark:to-cyan/55
          "
        />
      </div>
    );
  }

  /*
   * --------------------------------------------------
   * SMART ROUTING
   * --------------------------------------------------
   */

  if (type === 'routing') {
    return (
      <div aria-hidden="true" className={shell}>
        {/* starting transaction */}
        <div
          className="
            absolute
            left-0
            top-1/2
            size-3
            -translate-y-1/2
            rounded-full
            border-[3px]
            border-white
            bg-brand
            shadow-[0_0_0_5px_rgba(16,102,209,.10)]
            dark:border-navy
            dark:bg-cyan
          "
        />

        {/* routes */}
        <div
          className="
            absolute
            left-3
            top-[22px]
            h-[31px]
            w-[60%]
            rounded-tr-[22px]
            border-r
            border-t
            border-brand/30
            dark:border-cyan/30
          "
        />

        <div
          className="
            absolute
            left-3
            top-[52px]
            h-px
            w-[68%]
            bg-gradient-to-r
            from-brand/45
            to-brand/10
            dark:from-cyan/45
          "
        />

        <div
          className="
            absolute
            bottom-[20px]
            left-3
            h-[31px]
            w-[56%]
            rounded-br-[22px]
            border-b
            border-r
            border-brand/20
            dark:border-cyan/25
          "
        />

        {/* providers */}
        <RouteEndpoint
          top="9px"
          label="A"
          active
        />

        <RouteEndpoint
          top="44px"
          label="B"
        />

        <RouteEndpoint
          top="79px"
          label="C"
        />

        {/* intelligent route */}
        <span
          className="
            absolute
            left-[44%]
            top-[45%]
            flex
            size-7
            items-center
            justify-center
            rounded-full
            bg-brand/10
            text-brand
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:bg-brand
            group-hover:text-white
            dark:bg-cyan/10
            dark:text-cyan
            dark:group-hover:bg-cyan
            dark:group-hover:text-navy
          "
        >
          <Zap className="size-3.5" />
        </span>
      </div>
    );
  }

  /*
   * --------------------------------------------------
   * RECONCILIATION
   * --------------------------------------------------
   */

  if (type === 'reconciliation') {
    return (
      <div aria-hidden="true" className={shell}>
        {/* rotating reconciliation visual */}
        <div
          className="
            absolute
            right-1
            top-0
            size-[88px]
            rounded-full
            border
            border-brand/10
            dark:border-cyan/10
          "
        />

        <div
          className="
            absolute
            right-[13px]
            top-[12px]
            size-[64px]
            rounded-full
            border
            border-dashed
            border-brand/25
            transition-transform
            duration-[1200ms]
            group-hover:rotate-180
            dark:border-cyan/25
          "
        />

        <div
          className="
            absolute
            right-[27px]
            top-[26px]
            flex
            size-9
            items-center
            justify-center
            rounded-full
            bg-brand/[0.09]
            text-brand
            dark:bg-cyan/10
            dark:text-cyan
          "
        >
          <RefreshCcw className="size-4 transition-transform duration-700 group-hover:rotate-180" />
        </div>

        {/* reconciliation records */}
        <div
          className="
            absolute
            bottom-1
            left-0
            w-[64%]
            space-y-2
            rounded-xl
            border
            border-brand/10
            bg-white/65
            p-2
            shadow-[0_12px_28px_rgba(16,102,209,.08)]
            backdrop-blur-sm
            dark:border-cyan/10
            dark:bg-white/[0.04]
          "
        >
          {[82, 63, 74].map((width, index) => (
            <div
              key={width}
              className="flex items-center gap-1.5"
            >
              <span
                className="
                  flex
                  size-3
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-400/15
                  text-emerald-500
                "
              >
                <Check className="size-2" />
              </span>

              <span
                className="h-1.5 rounded-full bg-brand/10 dark:bg-cyan/10"
                style={{
                  width: `${width}%`,
                }}
              />

              <span
                className="h-1.5 rounded-full bg-brand/25 dark:bg-cyan/25"
                style={{
                  width: `${24 - index * 4}%`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  /*
   * --------------------------------------------------
   * REAL-TIME INSIGHTS
   * --------------------------------------------------
   */

  return (
    <div aria-hidden="true" className={shell}>
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          top-1
          rounded-xl
          border
          border-brand/10
          bg-white/55
          p-2.5
          shadow-[0_12px_30px_rgba(16,102,209,.08)]
          backdrop-blur-sm
          dark:border-cyan/10
          dark:bg-white/[0.035]
        "
      >
        {/* chart header */}
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-10 rounded-full bg-brand/15 dark:bg-cyan/15" />

          <span className="flex items-center gap-1 text-[7px] font-bold text-emerald-500">
            <span
              className="
                size-1.5
                rounded-full
                bg-emerald-400
                shadow-[0_0_8px_rgba(52,211,153,.8)]
              "
            />

            LIVE
          </span>
        </div>

        {/* chart */}
        <div className="mt-3 flex h-[52px] items-end gap-1.5">
          {[28, 46, 36, 64, 51, 78, 68].map(
            (height, index) => (
              <span
                key={`${height}-${index}`}
                className="
                  w-full
                  origin-bottom
                  rounded-t-[3px]
                  bg-gradient-to-t
                  from-brand/25
                  to-brand/70
                  transition-transform
                  duration-700
                  group-hover:scale-y-110
                  dark:from-cyan/20
                  dark:to-cyan/65
                "
                style={{
                  height: `${height}%`,
                  transitionDelay: `${index * 35}ms`,
                }}
              />
            ),
          )}
        </div>

        {/* signal line */}
        <div
          className="
            absolute
            left-2
            right-2
            top-[56%]
            h-px
            -rotate-[7deg]
            bg-gradient-to-r
            from-transparent
            via-cyan
            to-transparent
            opacity-70
          "
        />
      </div>
    </div>
  );
}

function ConnectorDot({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className: string;
}) {
  return (
    <span
      className={`
        absolute
        flex
        size-7
        items-center
        justify-center
        rounded-xl
        border
        border-brand/10
        bg-white/75
        text-brand
        shadow-sm
        backdrop-blur
        transition-all
        duration-500
        group-hover:scale-110
        dark:border-cyan/10
        dark:bg-white/[0.055]
        dark:text-cyan
        ${className}
      `}
    >
      <Icon className="size-3.5" />
    </span>
  );
}

function RouteEndpoint({
  top,
  label,
  active = false,
}: {
  top: string;
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`
        absolute
        right-0
        flex
        h-6
        w-7
        items-center
        justify-center
        rounded-lg
        border
        text-[7px]
        font-extrabold
        shadow-sm
        backdrop-blur
        ${
          active
            ? `
              border-brand/20
              bg-brand
              text-white
              shadow-[0_8px_18px_rgba(16,102,209,.18)]
              dark:border-cyan/20
              dark:bg-cyan
              dark:text-navy
            `
            : `
              border-brand/10
              bg-white/75
              text-brand
              dark:border-cyan/10
              dark:bg-white/[0.055]
              dark:text-cyan
            `
        }
      `}
      style={{ top }}
    >
      {label}
    </span>
  );
}