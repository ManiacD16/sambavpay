import Link from 'next/link';
import { ArrowLeft, Route } from 'lucide-react';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-20 bg-mesh-light dark:bg-mesh-dark" />
      <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:48px_48px] opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] dark:bg-grid-dark dark:opacity-40" />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand text-white shadow-button-glow dark:bg-cyan dark:text-navy"><Route className="size-7" /></span>
          <p className="mt-6 font-mono text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand dark:text-cyan">Error 404 · Route unavailable</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl dark:text-white">This payment route could not be found.</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">Return to the Sambhav Pay website and continue exploring the platform.</p>
          <Link href="/" className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-button-glow transition duration-500 hover:-translate-y-1 hover:bg-[#0d5bbb]">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}
