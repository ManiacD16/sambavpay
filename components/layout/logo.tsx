import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Sambhav Pay home"
      className={cn(
        'group relative inline-flex items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -inset-2 -z-10 rounded-2xl bg-brand/0 blur-xl transition duration-500 group-hover:bg-brand/10 dark:group-hover:bg-cyan/10"
      />

      <Image
        src="/brand/logo.png"
        alt="Sambhav Pay"
        width={2194}
        height={748}
        priority={priority}
        sizes="(max-width: 640px) 145px, 170px"
        className="
          h-auto
          w-[145px]
          object-contain
          sm:w-[170px]
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.02]
        "
      />
    </Link>
  );
}