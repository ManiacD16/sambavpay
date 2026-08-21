'use client';

import Link from 'next/link';
import type { ComponentProps, PointerEvent, ReactNode } from 'react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  className?: string;
  showArrow?: boolean;
} & Omit<ComponentProps<typeof Link>, 'href' | 'children'>;

export function Button({
  href,
  children,
  variant = 'primary',
  className,
  showArrow = true,
  onPointerMove,
  onPointerLeave,
  ...props
}: ButtonProps) {
  const magneticRef = useRef<HTMLSpanElement>(null);

  const variants = {
    primary:
      'border border-white/15 bg-[linear-gradient(115deg,#0f62c9_0%,#0d72df_48%,#04bfe7_100%)] text-white shadow-[0_18px_48px_rgba(16,102,209,.30)] hover:border-white/30 hover:shadow-[0_26px_74px_rgba(16,102,209,.42)]',
    secondary:
      'border border-brand/[0.16] bg-white/[0.76] text-ink shadow-[0_12px_34px_rgba(6,30,87,.07)] hover:border-brand/35 hover:bg-white hover:shadow-[0_24px_66px_rgba(6,30,87,.14)] dark:border-white/[0.13] dark:bg-white/[0.045] dark:text-white dark:hover:border-cyan/25 dark:hover:bg-white/[0.085]',
    ghost:
      'border border-transparent text-ink hover:border-brand/10 hover:bg-brand/[0.055] dark:text-white dark:hover:border-white/[0.08] dark:hover:bg-white/[0.06]',
    light:
      'border border-white/55 bg-white text-ink shadow-[0_18px_46px_rgba(0,0,0,.18)] hover:border-white hover:bg-[#f4fbff] hover:shadow-[0_28px_72px_rgba(0,0,0,.25)]',
  };

  const move = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerMove?.(event);
    if (event.defaultPrevented || event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 5;
    if (magneticRef.current) magneticRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const reset = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerLeave?.(event);
    if (magneticRef.current) magneticRef.current.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <Link
      href={href}
      onPointerMove={move}
      onPointerLeave={reset}
      className={cn(
        'group relative isolate inline-flex min-h-[52px] items-center justify-center overflow-hidden rounded-[1rem] px-5 py-3 text-sm font-extrabold tracking-[-0.01em] transition-[transform,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 active:translate-y-0 active:scale-[.985] focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy',
        variants[variant],
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="absolute -left-10 top-1/2 size-28 -translate-y-1/2 rounded-full bg-cyan/20 blur-2xl" />
        <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-[18deg] bg-white/25 opacity-0 blur-sm transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
      </span>
      <span
        ref={magneticRef}
        className="relative inline-flex items-center gap-3 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]"
      >
        <span>{children}</span>
        {showArrow ? (
          <span className="flex size-7 items-center justify-center rounded-full border border-black/10 bg-black/[0.055] transition duration-500 group-hover:rotate-45 group-hover:scale-105 dark:border-white/10 dark:bg-white/10">
            <ArrowUpRight className="size-3.5 stroke-[2.2]" />
          </span>
        ) : null}
      </span>
    </Link>
  );
}
