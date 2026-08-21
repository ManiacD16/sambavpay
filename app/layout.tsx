import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ScrollExperience } from '@/components/ui/scroll-experience';
import { RouteAnnouncer } from '@/components/ui/route-announcer';
import { siteConfig } from '@/data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Sambhav Pay | Intelligent Payment Infrastructure',
    template: '%s | Sambhav Pay',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/brand/logo-mark.png', type: 'image/png' }],
    apple: [{ url: '/brand/logo-mark.png', type: 'image/png' }],
  },
  formatDetection: { email: false, address: false, telephone: false },
keywords: [
  'payment orchestration',
  'payment gateway',
  'payouts',
  'payment intelligence',
  'payment analytics',
  'payment reconciliation',
  'risk and fraud',
  'fraud prevention',
  'Sambhav Verify',
  'verification API',
  'fintech infrastructure',
  'payment routing',
  'India payments',
],
  openGraph: {
    title: 'Sambhav Pay | Intelligent Payment Infrastructure',
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/og/sambhav-pay-og.png', width: 1200, height: 630, alt: 'Sambhav Pay payment orchestration platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sambhav Pay | Intelligent Payment Infrastructure',
    description: siteConfig.description,
    images: ['/og/sambhav-pay-og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfdff' },
    { media: '(prefers-color-scheme: dark)', color: '#020f21' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
  };

  const themeScript = `(() => { try { const saved = localStorage.getItem('sambhav-theme'); const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.classList.toggle('dark', dark); } catch (_) {} })();`;

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${manrope.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-xl border border-brand/15 bg-white px-4 py-2.5 text-sm font-extrabold text-ink shadow-lg transition-transform duration-300 focus:translate-y-0 dark:border-cyan/20 dark:bg-navy dark:text-white">
          Skip to content
        </a>
        <ThemeProvider>
          <ScrollExperience />
          <RouteAnnouncer />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
