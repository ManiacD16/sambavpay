'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > Math.max(620, window.innerHeight * 0.8));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.92 }}
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
          aria-label="Back to top"
          className="group fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[#08265a]/95 text-white shadow-[0_18px_55px_rgba(6,30,87,.28)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-brand focus-visible:ring-2 focus-visible:ring-cyan sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 bg-gradient-to-tr from-brand/30 to-cyan/15 opacity-0 transition group-hover:opacity-100" />
          <ArrowUp className="relative size-4 stroke-[2.2] transition-transform duration-500 group-hover:-translate-y-0.5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
