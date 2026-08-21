'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {!reduceMotion ? (
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.92, times: [0, 0.32, 0.72, 1], ease: [0.76, 0, 0.24, 1] }}
          className="pointer-events-none fixed inset-x-0 top-0 z-[85] h-[3px] origin-left bg-gradient-to-r from-brand via-electric to-cyan shadow-[0_0_24px_rgba(5,210,251,.75)]"
        />
      ) : null}
      <motion.main
        id="main-content"
        tabIndex={-1}
        initial={reduceMotion ? false : { opacity: 0.84, y: 7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        className="relative isolate"
      >
        {children}
      </motion.main>
    </>
  );
}
