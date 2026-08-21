'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

type Theme = 'light' | 'dark';
type ThemeOrigin = { x: number; y: number };

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: (origin?: ThemeOrigin) => void;
  mounted: boolean;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('sambhav-theme') as Theme | null;
    const next = saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = (origin?: ThemeOrigin) => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    const applyTheme = () => {
      setTheme(next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      window.localStorage.setItem('sambhav-theme', next);
    };

    if (origin) {
      document.documentElement.style.setProperty('--theme-x', `${origin.x}px`);
      document.documentElement.style.setProperty('--theme-y', `${origin.y}px`);
    }

    const documentWithTransition = document as ViewTransitionDocument;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && documentWithTransition.startViewTransition) {
      documentWithTransition.startViewTransition(applyTheme);
    } else {
      applyTheme();
    }
  };

  const value = useMemo(() => ({ theme, toggleTheme, mounted }), [theme, mounted]);

  return (
    <ThemeContext.Provider value={value}>
      <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </MotionConfig>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error('useTheme must be used inside ThemeProvider');
  return value;
}
