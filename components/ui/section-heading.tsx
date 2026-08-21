import { cn } from '@/lib/cn';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn('max-w-[52rem]', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <div className="eyebrow-pill mb-6">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-[0.28] motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
          </span>
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance font-display text-[clamp(2.2rem,4.65vw,4.15rem)] font-semibold leading-[1.035] tracking-[-0.058em] text-ink dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-6 max-w-[42rem] text-pretty text-base leading-8 text-slate-600 sm:text-[1.075rem] dark:text-slate-300', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
