import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#071C3B',
        navy: '#061E57',
        brand: '#1066D1',
        cyan: '#05D2FB',
        ice: '#EAF4FF',
        electric: '#4CA8FF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 26px 90px rgba(6, 30, 87, 0.13)',
        lift: '0 34px 90px rgba(6, 30, 87, 0.18)',
        glow: '0 0 72px rgba(5, 210, 251, 0.24)',
        'button-glow': '0 18px 48px rgba(16, 102, 209, 0.34)',
      },
      backgroundImage: {
        'brand-radial': 'radial-gradient(circle at 50% 20%, rgba(5,210,251,.22), transparent 48%)',
        'grid-light': 'linear-gradient(rgba(16,102,209,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.055) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)',
        'mesh-light': 'radial-gradient(circle at 12% 8%, rgba(5,210,251,.14), transparent 25%), radial-gradient(circle at 88% 14%, rgba(16,102,209,.13), transparent 26%)',
        'mesh-dark': 'radial-gradient(circle at 12% 8%, rgba(5,210,251,.10), transparent 25%), radial-gradient(circle at 88% 14%, rgba(16,102,209,.20), transparent 28%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(16px,-10px,0) rotate(4deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '100%': { transform: 'translateX(240%) skewX(-18deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        routeDash: {
          to: { strokeDashoffset: '-72' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        orbit: {
          to: { transform: 'rotate(360deg)' },
        },
        loadingSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        loadingProgress: {
          '0%': { transform: 'scaleX(.08)', opacity: '.7' },
          '70%': { transform: 'scaleX(.82)', opacity: '1' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        loadingPacket: {
          '0%': { left: '0%', opacity: '0' },
          '18%': { opacity: '1' },
          '82%': { opacity: '1' },
          '100%': { left: 'calc(100% - .5rem)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 9s ease-in-out infinite',
        shimmer: 'shimmer 1.25s ease-out',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'route-dash': 'routeDash 2.2s linear infinite',
        marquee: 'marquee 24s linear infinite',
        orbit: 'orbit 16s linear infinite',
        'loading-sweep': 'loadingSweep 1.6s ease-in-out infinite',
        'loading-progress': 'loadingProgress 1.65s cubic-bezier(.22,1,.36,1) infinite alternate',
        'loading-packet': 'loadingPacket 1.55s cubic-bezier(.22,1,.36,1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
