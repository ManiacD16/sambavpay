'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/layout/logo';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { cn } from '@/lib/cn';

const navItems = [
  { href: '/industries', label: 'Industries' },
  { href: '/developers', label: 'Developers' },
  { href: '/company', label: 'Company' },
  { href: '/security', label: 'Security' },
];


const companyLinks = [
  {
    href: '/#founders-message',
    label: 'Founder Message',
    description: 'A note from the founder on SambhavPay’s vision and direction.',
  },
  {
    href: '/journey',
    label: 'Our Journey',
    description: 'Explore the milestones that shaped SambhavPay from 2021 to today.',
  },
  {
    href: '/why-sambhavpay',
    label: 'Why SambhavPay',
    description: 'See what makes the platform different for modern payment teams.',
  },
];

const developerLinks = [
  {
    href: '/developers#documentation',
    label: 'Documentation',
  },
  {
    href: '/developers#api-reference',
    label: 'API Reference',
  },
  {
    href: '/developers#sdks',
    label: 'SDKs',
  },
  {
    href: '/developers#sandbox',
    label: 'Sandbox',
  },
  {
    href: '/developers#webhooks',
    label: 'Webhooks',
  },
  {
    href: '/developers#status',
    label: 'Status',
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsNavRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const wasMobileOpen = useRef(false);
  const productsActive = pathname.startsWith('/products/');
  const companyActive = ['/company', '/journey', '/why-sambhavpay'].includes(pathname);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (productsNavRef.current && !productsNavRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      if (wasMobileOpen.current) mobileTriggerRef.current?.focus();
      wasMobileOpen.current = false;
      return;
    }

    wasMobileOpen.current = true;
    const menu = mobileMenuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    focusable?.[0]?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    menu?.addEventListener('keydown', trapFocus);
    return () => menu?.removeEventListener('keydown', trapFocus);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        `
      fixed
      inset-x-0
      top-0
      z-[100]
      overflow-visible
      transition-all
      duration-500
      ease-[cubic-bezier(.22,1,.36,1)]
    `,
        scrolled
          ? 'border-b border-slate-200/70 bg-white/[0.86] shadow-[0_14px_54px_rgba(6,30,87,.085)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#02142c]/[0.88]'
          : 'border-b border-transparent bg-white/[0.38] backdrop-blur-lg dark:bg-[#02142c]/35',
      )}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/15 to-transparent opacity-0 transition-opacity duration-500 dark:via-cyan/15" style={{ opacity: scrolled ? 1 : 0 }} />
      <Container className={cn('flex h-[72px] items-center justify-between gap-5 transition-[height] duration-500', scrolled ? 'xl:h-[68px]' : 'xl:h-[82px]')}>
        <Logo priority />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          <div
            ref={productsNavRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            onFocus={() => setProductsOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setProductsOpen(false);
            }}
          >
            <button
              type="button"
              id="products-menu-button"
              aria-controls="products-menu"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen((open) => !open)}
              className={cn('group inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3.5 text-sm font-bold transition hover:bg-brand/5 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand dark:hover:bg-white/[0.06] dark:hover:text-white', productsActive ? 'text-brand dark:text-cyan' : 'text-slate-700 dark:text-slate-200')}
            >
              Products
              <ChevronDown className={cn('size-4 transition-transform duration-300', productsOpen && 'rotate-180')} />
            </button>

            <AnimatePresence>
              {productsOpen ? (
                <motion.div
                  id="products-menu"
                  aria-labelledby="products-menu-button"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.985 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-full w-[790px] -translate-x-1/2 pt-4"
                >
                  <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/[0.96] shadow-[0_30px_90px_rgba(6,30,87,.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#061a37]/[0.97]">
                    <div className="grid grid-cols-[1.42fr_.58fr]">
                      <div className="grid grid-cols-2 gap-1 p-3">
                        {products.map((product) => {
                          const Icon = product.icon;
                          const active = pathname === `/products/${product.slug}`;
                          return (
                            <Link
                              key={product.slug}
                              href={`/products/${product.slug}`}
                              aria-current={active ? 'page' : undefined}
                              className={cn(
                                'group flex gap-3 rounded-2xl p-3.5 transition duration-300 hover:bg-brand/[0.055] focus-visible:ring-2 focus-visible:ring-brand dark:hover:bg-white/[0.055]',
                                active && 'bg-brand/[0.07] dark:bg-cyan/[0.07]',
                              )}
                            >
                              <span className="flex size-11 shrink-0 items-center justify-center rounded-[0.9rem] bg-brand/[0.09] text-brand transition duration-300 group-hover:-rotate-3 group-hover:bg-brand group-hover:text-white dark:bg-cyan/10 dark:text-cyan dark:group-hover:bg-cyan dark:group-hover:text-navy">
                                <Icon className="size-5" />
                              </span>
                              <span>
                                <span className="flex items-center gap-1.5 text-sm font-extrabold text-ink dark:text-white">
                                  {product.name}
                                  <ArrowUpRight className="size-3 -translate-x-1 translate-y-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                                </span>
                                <span className="mt-1.5 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                                  {product.description.slice(0, 82)}…
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      <Link
                        href="/products/payment-orchestration"
                        className="group relative overflow-hidden border-l border-slate-200 bg-gradient-to-br from-[#0d62c8] to-[#041b4d] p-6 text-white dark:border-white/10"
                      >
                        <div className="absolute inset-0 bg-grid-dark bg-[size:28px_28px] opacity-[0.35]" />
                        <div className="absolute -right-16 -top-16 size-44 rounded-full bg-cyan/25 blur-3xl transition duration-700 group-hover:scale-125" />
                        <div className="relative">
                          <span className="flex size-11 items-center justify-center rounded-2xl border border-white/[0.15] bg-white/10 text-cyan backdrop-blur">
                            <Sparkles className="size-5" />
                          </span>
                          <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan">Flagship platform</p>
                          <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.04em]">Control every payment path.</p>
                          <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-white">
                            Explore orchestration
                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {navItems.map((item) => {
            const active = pathname === item.href;

            if (item.href === '/company') {
              return (
                <div
                  key={item.href}
                  className="group relative"
                >
                  <Link
                    href="/company"
                    aria-current={companyActive ? 'page' : undefined}
                    className={cn(
                      `
              relative
              inline-flex
              min-h-11
              items-center gap-1.5
              rounded-xl
              px-3.5
              text-sm
              font-bold
              transition

              hover:bg-brand/5
              hover:text-brand

              focus-visible:ring-2
              focus-visible:ring-brand

              dark:hover:bg-white/[0.06]
            `,
                      companyActive
                        ? 'text-brand dark:text-cyan'
                        : 'text-slate-700 dark:text-slate-200',
                    )}
                  >
                    Company

                    <ChevronDown
                      className="
              size-4
              transition-transform
              duration-300

              group-hover:rotate-180
              group-focus-within:rotate-180
            "
                    />

                    <span
                      className={cn(
                        `
                absolute
                bottom-1.5 left-1/2
                h-0.5
                -translate-x-1/2
                rounded-full
                bg-current
                transition-all
                duration-300
              `,
                        companyActive ? 'w-4' : 'w-0 group-hover:w-3',
                      )}
                    />
                  </Link>

                  <div
                    className="
            invisible
            absolute
            left-1/2 top-full
            w-[410px]
            -translate-x-1/2
            translate-y-3
            pt-4
            opacity-0
            transition-all
            duration-300

            group-hover:visible
            group-hover:translate-y-0
            group-hover:opacity-100

            group-focus-within:visible
            group-focus-within:translate-y-0
            group-focus-within:opacity-100
          "
                  >
                    <div
                      className="
              overflow-hidden
              rounded-[1.4rem]
              border border-slate-200/80
              bg-white/[0.97]
              p-3
              shadow-[0_28px_80px_rgba(6,30,87,.16)]
              backdrop-blur-2xl

              dark:border-white/10
              dark:bg-[#061a37]/[0.97]
            "
                    >
                      <div className="grid gap-1">
                        {companyLinks.map((link, index) => {
                          const linkActive =
                            link.href === '/journey'
                              ? pathname === '/journey'
                              : link.href === '/why-sambhavpay'
                                ? pathname === '/why-sambhavpay'
                                : false;

                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              aria-current={linkActive ? 'page' : undefined}
                              className={cn(
                                `
                        group/link
                        grid
                        grid-cols-[34px_1fr_auto]
                        items-start
                        gap-3
                        rounded-2xl
                        px-3.5 py-3
                        transition
                        duration-300

                        hover:bg-brand/[0.055]
                        focus-visible:ring-2
                        focus-visible:ring-brand

                        dark:hover:bg-white/[0.055]
                      `,
                                linkActive &&
                                  'bg-brand/[0.06] dark:bg-cyan/[0.06]',
                              )}
                            >
                              <span
                                className="
                        flex
                        size-[34px]
                        items-center
                        justify-center
                        rounded-xl
                        bg-brand/[0.08]
                        font-mono
                        text-[8px]
                        font-bold
                        text-brand
                        transition
                        duration-300

                        group-hover/link:bg-brand
                        group-hover/link:text-white

                        dark:bg-cyan/10
                        dark:text-cyan
                        dark:group-hover/link:bg-cyan
                        dark:group-hover/link:text-navy
                      "
                              >
                                {String(index + 1).padStart(2, '0')}
                              </span>

                              <span className="min-w-0">
                                <span className="block text-sm font-extrabold text-ink dark:text-white">
                                  {link.label}
                                </span>
                                <span className="mt-1 block text-[11px] leading-5 text-slate-500 dark:text-slate-400">
                                  {link.description}
                                </span>
                              </span>

                              <ArrowUpRight
                                className="
                        mt-1
                        size-3.5
                        -translate-x-1
                        translate-y-1
                        text-slate-400
                        opacity-0
                        transition
                        duration-300

                        group-hover/link:translate-x-0
                        group-hover/link:translate-y-0
                        group-hover/link:text-brand
                        group-hover/link:opacity-100

                        dark:group-hover/link:text-cyan
                      "
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.href === '/developers') {
              return (
                <div
                  key={item.href}
                  className="group relative"
                >
                  <Link
                    href="/developers"
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      `
              relative
              inline-flex
              min-h-11
              items-center gap-1.5
              rounded-xl
              px-3.5
              text-sm
              font-bold
              transition

              hover:bg-brand/5
              hover:text-brand

              focus-visible:ring-2
              focus-visible:ring-brand

              dark:hover:bg-white/[0.06]
            `,
                      active
                        ? 'text-brand dark:text-cyan'
                        : 'text-slate-700 dark:text-slate-200',
                    )}
                  >
                    Developers

                    <ChevronDown
                      className="
              size-4
              transition-transform
              duration-300

              group-hover:rotate-180
              group-focus-within:rotate-180
            "
                    />
                  </Link>

                  <div
                    className="
            invisible
            absolute
            left-1/2 top-full
            w-[430px]
            -translate-x-1/2
            translate-y-3
            pt-4
            opacity-0
            transition-all
            duration-300

            group-hover:visible
            group-hover:translate-y-0
            group-hover:opacity-100

            group-focus-within:visible
            group-focus-within:translate-y-0
            group-focus-within:opacity-100
          "
                  >
                    <div
                      className="
              overflow-hidden
              rounded-[1.4rem]
              border border-slate-200/80
              bg-white/[0.97]
              p-3
              shadow-[0_28px_80px_rgba(6,30,87,.16)]
              backdrop-blur-2xl

              dark:border-white/10
              dark:bg-[#061a37]/[0.97]
            "
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {developerLinks.map((link, index) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="
                    group/link
                    rounded-xl
                    p-3.5
                    transition

                    hover:bg-brand/[0.055]

                    focus-visible:ring-2
                    focus-visible:ring-brand

                    dark:hover:bg-white/[0.055]
                  "
                          >
                            <span
                              className="
                      block
                      font-mono
                      text-[8px]
                      text-slate-300

                      dark:text-slate-600
                    "
                            >
                              {String(index + 1).padStart(2, '0')}
                            </span>

                            <span
                              className="
                      mt-1.5
                      flex
                      items-center gap-2
                      text-sm
                      font-extrabold
                      text-ink

                      dark:text-white
                    "
                            >
                              {link.label}

                              <ArrowUpRight
                                className="
                        size-3
                        -translate-x-1
                        translate-y-1
                        opacity-0
                        transition

                        group-hover/link:translate-x-0
                        group-hover/link:translate-y-0
                        group-hover/link:opacity-100
                      "
                              />
                            </span>
                          </Link>
                        ))}
                      </div>

                      <Link
                        href="/developers"
                        className="
                mt-2
                flex
                items-center justify-between
                rounded-xl
                bg-[#061e57]
                px-4 py-3
                text-xs
                font-extrabold
                text-white
                transition

                hover:bg-brand
              "
                      >
                        Developer Platform

                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  `
          group
          relative
          inline-flex
          min-h-11
          items-center
          rounded-xl
          px-3.5
          text-sm
          font-bold
          transition

          hover:bg-brand/5
          hover:text-brand

          focus-visible:ring-2
          focus-visible:ring-brand

          dark:hover:bg-white/[0.06]
        `,
                  active
                    ? 'text-brand dark:text-cyan'
                    : 'text-slate-700 dark:text-slate-200',
                )}
              >
                {item.label}

                <span
                  className={cn(
                    `
            absolute
            bottom-1.5 left-1/2
            h-0.5
            -translate-x-1/2
            rounded-full
            bg-current
            transition-all
            duration-300
          `,
                    active
                      ? 'w-4'
                      : 'w-0 group-hover:w-3',
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <ThemeToggle />

          <Button
            href="/login"
            variant="ghost"
            showArrow={false}
            className="min-w-[76px]"
          >
            Login
          </Button>

          <Button
            href="/get-started"
            variant="secondary"
            className="min-w-[122px]"
          >
            Get Started
          </Button>

          {/* <Button
            href="/book-demo"
            className="min-w-[122px]"
          >
            Book Demo
          </Button> */}
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            ref={mobileTriggerRef}
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-ink shadow-sm backdrop-blur transition hover:border-brand/30 hover:bg-brand/5 focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            {/* Mobile menu backdrop */}
            <motion.button
              type="button"
              aria-label="Close mobile navigation"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
          fixed inset-0
          z-[80]
          bg-[#02142c]/45
          backdrop-blur-[3px]

          xl:hidden
        "
            />

            {/* Mobile navigation panel */}
            <motion.div
              ref={mobileMenuRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{
                opacity: 0,
                y: -18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -14,
              }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
          absolute
          left-0 right-0
          top-full
          z-[90]

          h-[calc(100dvh-72px)]
          overflow-y-auto
          overscroll-contain

          border-t border-slate-200/80
          bg-white/[0.99]
          shadow-[0_30px_80px_rgba(6,30,87,.18)]
          backdrop-blur-2xl

          dark:border-white/10
          dark:bg-[#03152d]/[0.99]

          xl:hidden
        "
            >
              <Container className="relative py-6 pb-10">
                {/* menu header */}
                <div
                  className="
              sticky
              top-0
              z-20
              -mx-2
              mb-5
              flex
              items-center
              justify-between
              gap-4
              border-b
              border-slate-200/80
              bg-white/[0.96]
              px-2
              pb-4
              backdrop-blur-xl

              dark:border-white/10
              dark:bg-[#03152d]/[0.96]
            "
                >
                  <div>
                    <p
                      className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-brand

                  dark:text-cyan
                "
                    >
                      SambhavPay
                    </p>

                    <p
                      className="
                  mt-1
                  font-display
                  text-lg
                  font-extrabold
                  tracking-[-0.03em]
                  text-ink

                  dark:text-white
                "
                    >
                      Navigation
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close navigation"
                    className="
                inline-flex
                size-10
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                text-ink
                shadow-sm
                transition

                hover:border-brand/30
                hover:bg-brand/5

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand

                dark:border-white/10
                dark:bg-white/[0.06]
                dark:text-white
                dark:hover:border-cyan/30
                dark:hover:bg-white/[0.09]
              "
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Products */}
                <div>
                  <p
                    className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-slate-400

                dark:text-slate-500
              "
                  >
                    Products
                  </p>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {products.map((product, index) => {
                      const Icon = product.icon;

                      const active =
                        pathname === `/products/${product.slug}`;

                      return (
                        <motion.div
                          key={product.slug}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.04 + index * 0.035,
                          }}
                        >
                          <Link
                            href={`/products/${product.slug}`}
                            aria-current={active ? 'page' : undefined}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              `
                          group
                          flex
                          min-h-[68px]
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          px-3.5
                          py-3
                          text-sm
                          font-bold
                          transition
                          duration-300

                          active:scale-[0.99]
                        `,
                              active
                                ? `
                              border-brand/20
                              bg-brand/[0.07]
                              text-brand

                              dark:border-cyan/20
                              dark:bg-cyan/[0.08]
                              dark:text-cyan
                            `
                                : `
                              border-slate-200/80
                              bg-slate-50/70
                              text-ink

                              hover:border-brand/20
                              hover:bg-brand/[0.05]

                              dark:border-white/[0.08]
                              dark:bg-white/[0.035]
                              dark:text-white
                              dark:hover:border-cyan/20
                            `,
                            )}
                          >
                            <span
                              className="
                          flex
                          size-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-brand/10
                          text-brand
                          transition

                          group-hover:bg-brand
                          group-hover:text-white

                          dark:bg-cyan/10
                          dark:text-cyan
                          dark:group-hover:bg-cyan
                          dark:group-hover:text-navy
                        "
                            >
                              <Icon className="size-[17px]" />
                            </span>

                            <span className="min-w-0">
                              <span className="block leading-5">
                                {product.name}
                              </span>
                            </span>

                            <ArrowUpRight
                              className="
                          ml-auto
                          size-4
                          shrink-0
                          text-slate-400
                          transition

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-brand

                          dark:group-hover:text-cyan
                        "
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-200 dark:bg-white/10" />

                {/* Main navigation */}
                <div>
                  <p
                    className="
                mb-2
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-slate-400

                dark:text-slate-500
              "
                  >
                    Explore
                  </p>

                  <div className="grid gap-1">
                    {navItems.map((item, index) => {
                      const active =
                        item.href === '/company'
                          ? companyActive
                          : pathname === item.href;

                      if (item.href === '/company') {
                        return (
                          <motion.div
                            key={item.href}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: 0.12 + index * 0.035,
                            }}
                            className="rounded-2xl border border-slate-200/70 bg-slate-50/55 p-1.5 dark:border-white/[0.08] dark:bg-white/[0.025]"
                          >
                            <Link
                              href="/company"
                              aria-current={active ? 'page' : undefined}
                              onClick={() => setMobileOpen(false)}
                              className={cn(
                                `
                            group
                            flex
                            min-h-[50px]
                            items-center
                            justify-between
                            rounded-xl
                            px-3.5
                            text-[15px]
                            font-bold
                            transition
                          `,
                                active
                                  ? 'bg-brand/[0.07] text-brand dark:bg-cyan/[0.07] dark:text-cyan'
                                  : 'text-ink hover:bg-brand/5 hover:text-brand dark:text-white dark:hover:bg-white/[0.05] dark:hover:text-cyan',
                              )}
                            >
                              Company

                              <ChevronDown className="size-4 text-slate-400" />
                            </Link>

                            <div className="mt-1 grid gap-1 border-l border-brand/15 pl-2 dark:border-cyan/15">
                              {companyLinks.map((link, companyIndex) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="group/link flex min-h-[46px] items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-white hover:text-brand dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-cyan"
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="font-mono text-[8px] text-slate-300 dark:text-slate-600">
                                      {String(companyIndex + 1).padStart(2, '0')}
                                    </span>
                                    {link.label}
                                  </span>

                                  <ArrowUpRight className="size-3.5 text-slate-400 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-brand dark:group-hover/link:text-cyan" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        );
                      }

                      return (
                        <motion.div
                          key={item.href}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: 0.12 + index * 0.035,
                          }}
                        >
                          <Link
                            href={item.href}
                            aria-current={active ? 'page' : undefined}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              `
                          group
                          flex
                          min-h-[50px]
                          items-center
                          justify-between
                          rounded-xl
                          px-3.5
                          text-[15px]
                          font-bold
                          transition
                        `,
                              active
                                ? `
                              bg-brand/[0.07]
                              text-brand

                              dark:bg-cyan/[0.07]
                              dark:text-cyan
                            `
                                : `
                              text-ink

                              hover:bg-brand/5
                              hover:text-brand

                              dark:text-white
                              dark:hover:bg-white/[0.05]
                              dark:hover:text-cyan
                            `,
                            )}
                          >
                            {item.label}

                            <ArrowUpRight
                              className="
                          size-4
                          text-slate-400
                          transition

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="
              mt-7
              rounded-[1.4rem]
              border
              border-slate-200/80
              bg-slate-50/70
              p-3

              dark:border-white/[0.08]
              dark:bg-white/[0.03]
            "
                >
                  <div className="grid grid-cols-2 gap-2.5">
                    <Button
                      href="/login"
                      variant="secondary"
                      showArrow={false}
                      onClick={() => setMobileOpen(false)}
                    >
                      Login
                    </Button>

                    <Button
                      href="/get-started"
                      variant="secondary"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get Started
                    </Button>

                    <Button
                      href="/book-demo"
                      className="col-span-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Book a Demo
                    </Button>
                  </div>
                </div>

                <p
                  className="
              mt-5
              text-center
              text-[10px]
              leading-5
              text-slate-400

              dark:text-slate-500
            "
                >
                  Payment infrastructure for modern businesses.
                </p>
              </Container>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}