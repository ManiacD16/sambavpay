'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { BackToTop } from '@/components/ui/back-to-top';

export function ScrollExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 170, damping: 30, mass: 0.22 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (
      !cursor ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${x - 160}px, ${y - 160}px, 0)`;
        cursor.style.opacity = '1';
        frame = 0;
      });
    };

    const leave = () => {
      cursor.style.opacity = '0';
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-brand via-electric to-cyan shadow-[0_0_18px_rgba(5,210,251,.55)]"
      />
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[4] hidden size-80 rounded-full bg-[radial-gradient(circle,rgba(5,210,251,.075),rgba(16,102,209,.025)_42%,transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 will-change-transform xl:block dark:bg-[radial-gradient(circle,rgba(5,210,251,.06),rgba(16,102,209,.025)_42%,transparent_70%)]"
      />
      <BackToTop />
    </>
  );
}
