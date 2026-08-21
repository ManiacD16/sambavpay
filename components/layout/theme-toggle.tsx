'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ui/theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const dark = mounted && theme === 'dark';

  return (
    <button
      type="button"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={dark}
      className="group relative inline-flex size-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200/90 bg-white/75 text-ink shadow-[0_10px_28px_rgba(6,30,87,.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand/[0.055] active:translate-y-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:bg-white/[0.055] dark:text-white dark:hover:border-cyan/25 dark:hover:bg-white/[0.09]"
    >
      <span aria-hidden="true" className="absolute inset-0 translate-y-full bg-gradient-to-t from-brand/15 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -70, scale: 0.62 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.62 }}
          transition={{ duration: 0.24 }}
          className="relative"
        >
          {dark ? <Sun className="size-[18px] stroke-[1.9]" /> : <Moon className="size-[18px] stroke-[1.9]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
