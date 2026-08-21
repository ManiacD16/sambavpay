'use client';

import type { HTMLAttributes, MouseEvent } from 'react';
import { useRef } from 'react';
import { cn } from '@/lib/cn';

type SpotlightCardProps = HTMLAttributes<HTMLDivElement>;

export function SpotlightCard({ children, className, onMouseMove, onMouseLeave, ...props }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (element && !window.matchMedia('(pointer: coarse)').matches) {
      const rect = element.getBoundingClientRect();
      element.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
      element.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
    }
    onMouseMove?.(event);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={onMouseLeave}
      className={cn('premium-card', className)}
      {...props}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-6 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-white/85 to-transparent opacity-70 dark:via-cyan/25" />
      {children}
    </div>
  );
}
