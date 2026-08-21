import Link from 'next/link';

import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Building2,
  Braces,
  Code2,
  Phone,
  Handshake,
  Landmark,
  LifeBuoy,
  Linkedin,
  Instagram,
  Network,
  Mail,
  MapPin,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import {
  products,
} from '@/data/products';

import {
  Container,
} from '@/components/ui/container';

import {
  Logo,
} from '@/components/layout/logo';

import {
  Button,
} from '@/components/ui/button';

const companyLinks = [
  {
    href: '/company',
    label: 'About',
  },
  {
    href: '/industries',
    label: 'Industries',
  },
  {
    href: '/security',
    label: 'Security',
  },
  {
    href: '/journey',
    label: 'Our Journey',
  },
  {
    href: '/why-sambhavpay',
    label: 'Why SambhavPay?',
  },
  {
    href: '/book-demo',
    label: 'Book a Demo',
  },
];

const developerLinks = [
  {
    href:
      '/developers#documentation',
    label: 'Documentation',
  },
  {
    href:
      '/developers#api-reference',
    label: 'API Reference',
  },
  {
    href: '/developers#sdks',
    label: 'SDKs',
  },
  {
    href:
      '/developers#sandbox',
    label: 'Sandbox',
  },
  {
    href:
      '/developers#webhooks',
    label: 'Webhooks',
  },
  {
    href:
      '/developers#status',
    label: 'Status',
  },
];

const socialLinks = [
  {
    href:
      'https://www.linkedin.com/company/sambhav-pay/',

    label: 'LinkedIn',

    icon: Linkedin,
  },

  {
    href:
      'https://www.instagram.com/sambhavpay/?hl=en',

    label: 'Instagram',

    icon: Instagram,
  },
];

const contactOptions = [
  {
    icon: Building2,

    title:
      'Sales & Business',

    text:
      'Discuss payment orchestration, enterprise solutions and commercial requirements.',

    email:
      'sales@sambhavpay.com',
  },

  {
    icon: Handshake,

    title: 'Partnerships',

    text:
      'Banks, PSPs, technology providers and strategic partnerships.',

    email:
      'partnerships@sambhavpay.com',
  },

  {
    icon: Code2,

    title:
      'Developer & Technical Support',

    text:
      'API integration, sandbox, documentation and technical assistance.',

    email:
      'developers@sambhavpay.com',
  },

  {
    icon: Scale,

    title:
      'Compliance & Regulatory',

    text:
      'Regulatory, licensing, merchant and banking-partner queries.',

    email:
      'legal@sambhavpay.com',
  },

  {
    icon: LifeBuoy,

    title:
      'Merchant Support',

    text:
      'Transaction, settlement and operational assistance.',

    email:
      'support@sambhavpay.com',
  },
];

const offices = [
  {
    city: 'Gurgaon',

    address:
      '596, 2nd Floor, Phase V, Udyog Vihar, Gurugram Sector 19, Haryana - 122016',
  },

  {
    city: 'Bhubaneswar',

    address:
      'Plot No-1181, Near Santoshi Maa Temple, Bomikhal, Bhubaneswar, Odisha - 751001, India',
  },
];

export function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200
        bg-[#f7fbff]

        dark:border-white/10
        dark:bg-[#020f20]
      "
    >
      <div
        className="
          absolute inset-0
          bg-grid-light
          bg-[size:54px_54px]
          opacity-[0.35]
          [mask-image:linear-gradient(to_bottom,black,transparent_75%)]

          dark:bg-grid-dark
          dark:opacity-20
        "
      />

      <div
        className="
          absolute
          -right-40 -top-40
          size-[30rem]
          rounded-full
          bg-brand/[0.06]
          blur-3xl

          dark:bg-cyan/[0.04]
        "
      />

      <Container
        className="
          relative
          py-16

          lg:py-20
        "
      >
        {/* top CTA */}
        <div
          className="
            mb-14
            flex
            flex-col
            gap-7
            border-b
            border-slate-200
            pb-10

            md:flex-row
            md:items-center
            md:justify-between

            dark:border-white/10
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-brand

                dark:text-cyan
              "
            >
              <Sparkles className="size-3.5" />

              Payment infrastructure,
              simplified
            </p>

            <h2
              className="
                mt-3
                font-display
                text-2xl
                font-semibold
                tracking-[-0.045em]
                text-ink

                sm:text-3xl

                dark:text-white
              "
            >
              Start building or
              schedule a focused
              product conversation.
            </h2>
          </div>

          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
            "
          >
            <Button
              href="/get-started"
              variant="secondary"
            >
              Get Started
            </Button>

            <Button href="/book-demo">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* normal footer navigation */}
        <div
          className="
            grid gap-12

            lg:grid-cols-[1.35fr_.9fr_.9fr_.9fr]
          "
        >
          <div className="max-w-sm">
            <Logo />

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-slate-600

                dark:text-slate-400
              "
            >
              Intelligent payment
              infrastructure for
              orchestration,
              acceptance, payouts,
              verification and
              financial API
              workflows.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:sales@sambhavpay.com"
                className="flex items-center gap-3 font-bold text-brand transition-colors duration-300 hover:text-cyan"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand/[0.08] text-brand">
                  <Mail className="size-5" />
                </span>

                <span>sales@sambhavpay.com</span>
              </a>

              <a
                href="tel:+918882484147"
                className="flex items-center gap-3 font-bold text-brand transition-colors duration-300 hover:text-cyan"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand/[0.08] text-brand">
                  <Phone className="size-5" />
                </span>

                <span>+91 88824 84147</span>
              </a>
            </div>
            <div className="mt-6">
              <p
                className="
      text-[10px]
      font-extrabold
      uppercase
      tracking-[0.18em]
      text-slate-400

      dark:text-slate-500
    "
              >
                Follow SambhavPay
              </p>

              <div
                className="
      mt-3
      flex
      items-center
      gap-3
    "
              >
                {socialLinks.map(
                  (social) => {
                    const Icon =
                      social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`SambhavPay on ${social.label}`}
                        className="
              group
              flex
              size-11
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white/80
              text-brand
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-brand/25
              hover:bg-brand
              hover:text-white
              hover:shadow-[0_14px_30px_rgba(16,102,209,.2)]

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-cyan

              dark:hover:border-cyan/30
              dark:hover:bg-cyan
              dark:hover:text-navy
            "
                      >
                        <Icon
                          className="
                size-5
                transition-transform
                duration-300

                group-hover:scale-110
              "
                        />
                      </a>
                    );
                  },
                )}
              </div>
            </div>
          </div>

          <FooterGroup
            title="Products"
            links={products.map(
              (product) => ({
                href:
                  `/products/${product.slug}`,

                label:
                  product.name,
              }),
            )}
          />

          <FooterGroup
            title="Developers"
            links={developerLinks}
          />

          <FooterGroup
            title="Company"
            links={companyLinks}
          />
        </div>

        {/* IMPORTANT INFORMATION */}
        <div
          className="
            group
            relative
            mt-14
            overflow-hidden
            rounded-[1.9rem]
            border
            border-slate-200/80
            bg-white/80
            p-6
            shadow-[0_18px_55px_rgba(6,30,87,.05)]
            backdrop-blur-xl
            [transform-style:preserve-3d]
            transition-[transform,box-shadow,border-color]
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]

            hover:[transform:perspective(1200px)_translateY(-6px)_scale(1.008)]
            hover:border-brand/20
            hover:shadow-[0_30px_90px_rgba(6,30,87,.09)]

            sm:p-8

            dark:border-white/[0.08]
            dark:bg-[#061629]/[0.92]
            dark:hover:border-cyan/[0.18]
            dark:hover:shadow-[0_32px_95px_rgba(0,196,255,.06)]
          "
        >
          {/* premium regulatory atmosphere */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              opacity-[0.34]
              transition-opacity duration-700
              group-hover:opacity-[0.55]
              dark:opacity-[0.14]
              dark:group-hover:opacity-[0.26]
            "
            style={{
              backgroundImage:
                'linear-gradient(rgba(16,102,209,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.07) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
              maskImage:
                'linear-gradient(to right, black, rgba(0,0,0,.55) 48%, transparent 84%)',
              WebkitMaskImage:
                'linear-gradient(to right, black, rgba(0,0,0,.55) 48%, transparent 84%)',
            }}
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -left-24 -top-24
              size-72 rounded-full
              bg-brand/[0.08]
              blur-3xl
              transition-all duration-700
              group-hover:translate-x-8
              group-hover:translate-y-5
              group-hover:scale-125
              group-hover:bg-cyan/[0.11]
              dark:bg-cyan/[0.045]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -bottom-36 right-[18%]
              size-80 rounded-full
              bg-cyan/[0.055]
              blur-3xl
              transition-all duration-700
              group-hover:-translate-y-4
              group-hover:scale-110
              dark:bg-brand/[0.04]
            "
          />

          <div
            className="
              relative z-10
              grid gap-9

              lg:grid-cols-[.36fr_.64fr]
              lg:items-center
              lg:gap-14
            "
          >
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-4">
                <span
                  className="
                    flex size-11
                    items-center justify-center
                    rounded-xl
                    border border-brand/10
                    bg-brand/10
                    text-brand
                    shadow-[0_10px_28px_rgba(16,102,209,.08)]
                    transition-all duration-500

                    group-hover:-rotate-6
                    group-hover:scale-110
                    group-hover:border-transparent
                    group-hover:bg-brand
                    group-hover:text-white
                    group-hover:shadow-[0_16px_36px_rgba(16,102,209,.22)]

                    dark:border-cyan/10
                    dark:bg-cyan/10
                    dark:text-cyan
                    dark:group-hover:bg-cyan
                    dark:group-hover:text-navy
                  "
                >
                  <Landmark className="size-5" />
                </span>

                <span
                  className="
                    rounded-full
                    border border-emerald-400/20
                    bg-emerald-400/[0.08]
                    px-2.5 py-1
                    text-[8px]
                    font-extrabold uppercase
                    tracking-[0.14em]
                    text-emerald-600
                    transition-all duration-500
                    group-hover:bg-emerald-400/[0.13]
                    dark:text-emerald-300
                  "
                >
                  Regulated partner model
                </span>
              </div>

              <p
                className="
                  mt-5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-brand

                  dark:text-cyan
                "
              >
                Important Information
              </p>

              <h3
                className="
                  mt-2
                  max-w-sm
                  font-display
                  text-2xl
                  font-extrabold
                  tracking-[-0.04em]
                  text-ink

                  dark:text-white
                "
              >
                For Merchants &
                Banking Partners
              </h3>

              <p className="mt-3 max-w-sm text-xs leading-6 text-slate-500 dark:text-slate-400">
                A clear separation between SambhavPay&apos;s technology layer and the regulated institutions that process and settle funds.
              </p>

              <CompliancePlatformVisual />
            </div>

            <div
              className="
                relative
                space-y-4
                rounded-[1.35rem]
                border border-slate-200/70
                bg-white/55
                p-5
                text-sm
                leading-7
                text-slate-600
                shadow-[0_18px_45px_rgba(6,30,87,.045)]
                backdrop-blur-md
                transition-all duration-700
                group-hover:border-brand/15
                group-hover:bg-white/70

                sm:p-6

                dark:border-white/[0.07]
                dark:bg-white/[0.025]
                dark:text-slate-400
                dark:group-hover:border-cyan/[0.12]
                dark:group-hover:bg-white/[0.035]
              "
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-5 flex size-16 items-center justify-center rounded-full border border-brand/10 text-brand/[0.08] transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 group-hover:text-brand/[0.13] dark:border-cyan/10 dark:text-cyan/[0.08] dark:group-hover:text-cyan/[0.14]"
              >
                <ShieldCheck className="size-8" />
              </div>

              <p className="relative pr-14">
                <strong className="text-ink dark:text-white">
                  SambhavPay is a technology and payment infrastructure platform and is not a bank.
                </strong>
              </p>

              <p>
                SambhavPay does not itself accept deposits or provide banking services. Payment processing and settlement activities are carried out through appropriately regulated and authorized banking and payment partners, subject to applicable laws, regulations and contractual arrangements.
              </p>

              <p>
                Where applicable, merchant funds are processed and settled through designated accounts maintained with regulated banking partners. SambhavPay does not represent itself as a bank, financial institution, or holder of a banking license.
              </p>

              <p>
                For merchants and partners, the availability of specific payment methods, settlement services and financial products depends on the applicable regulated partner, authorization and commercial arrangement.
              </p>

              <div className="h-px overflow-hidden bg-slate-100 dark:bg-white/[0.07]">
                <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 group-hover:w-full" />
              </div>

              <p className="font-semibold text-ink dark:text-slate-200">
                For regulatory, licensing and settlement-related information, please contact our compliance team:{' '}
                <a
                  href="mailto:legal@sambhavpay.com"
                  className="inline-flex items-center gap-1 text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:text-[#0b4f9f] dark:text-cyan dark:hover:text-white"
                >
                  legal@sambhavpay.com
                  <ArrowRight className="size-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT OPTIONS */}
        <div className="mt-14">
          <p
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-brand

              dark:text-cyan
            "
          >
            Contact SambhavPay
          </p>

          <h3
            className="
              mt-2
              font-display
              text-2xl
              font-extrabold
              tracking-[-0.04em]
              text-ink

              dark:text-white
            "
          >
            Reach the right team
            directly.
          </h3>

          <div
            className="
              mt-6
              grid gap-3

              md:grid-cols-2

              xl:grid-cols-5
            "
          >
            {contactOptions.map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.email}
                    href={`mailto:${item.email}`}
                    className="
                      group
                      relative
                      flex h-full
                      min-h-[238px]
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200/80
                      bg-white/[0.78]
                      p-5
                      [transform-style:preserve-3d]
                      transition-[transform,box-shadow,border-color]
                      duration-700
                      ease-[cubic-bezier(.22,1,.36,1)]

                      hover:[transform:perspective(1000px)_translateY(-8px)_rotateX(2deg)_rotateY(-2deg)_scale(1.018)]
                      hover:border-brand/25
                      hover:shadow-[0_24px_70px_rgba(6,30,87,.10)]

                      dark:border-white/[0.08]
                      dark:bg-white/[0.025]
                      dark:hover:border-cyan/20
                      dark:hover:shadow-[0_28px_80px_rgba(0,196,255,.08)]
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        absolute inset-0
                        opacity-[0.24]
                        transition-opacity duration-500
                        group-hover:opacity-[0.48]
                        dark:opacity-[0.10]
                        dark:group-hover:opacity-[0.26]
                      "
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(16,102,209,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.08) 1px, transparent 1px)',
                        backgroundSize: '26px 26px',
                        maskImage:
                          'linear-gradient(to bottom left, black, transparent 68%)',
                        WebkitMaskImage:
                          'linear-gradient(to bottom left, black, transparent 68%)',
                      }}
                    />

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute -right-16 -top-16
                        size-44 rounded-full
                        bg-cyan/[0.07]
                        blur-3xl
                        transition-all duration-700
                        group-hover:-translate-x-4
                        group-hover:translate-y-4
                        group-hover:scale-125
                        group-hover:bg-cyan/[0.13]
                        dark:bg-cyan/[0.045]
                      "
                    />

                    <ContactCardVisual index={index} />

                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <span
                        className="
                          flex size-10
                          items-center justify-center
                          rounded-xl
                          border border-brand/10
                          bg-brand/10
                          text-brand
                          shadow-[0_8px_22px_rgba(16,102,209,.07)]
                          transition-all duration-500

                          group-hover:-rotate-6
                          group-hover:scale-110
                          group-hover:border-transparent
                          group-hover:bg-brand
                          group-hover:text-white
                          group-hover:shadow-[0_14px_30px_rgba(16,102,209,.22)]

                          dark:border-cyan/10
                          dark:bg-cyan/10
                          dark:text-cyan
                          dark:group-hover:bg-cyan
                          dark:group-hover:text-navy
                        "
                      >
                        <Icon className="size-[18px]" />
                      </span>

                      <span
                        className="
                          flex size-7
                          translate-x-2
                          items-center justify-center
                          rounded-full
                          border border-brand/10
                          bg-white/75
                          text-brand
                          opacity-0
                          shadow-sm
                          backdrop-blur
                          transition-all duration-500

                          group-hover:translate-x-0
                          group-hover:opacity-100

                          dark:border-cyan/10
                          dark:bg-white/[0.05]
                          dark:text-cyan
                        "
                      >
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>

                    <div className="relative z-10 mt-5 max-w-[78%]">
                      <h4
                        className="
                          text-sm
                          font-extrabold
                          text-ink
                          transition-colors duration-500
                          group-hover:text-brand

                          dark:text-white
                          dark:group-hover:text-cyan
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-2
                          text-xs
                          leading-6
                          text-slate-500

                          dark:text-slate-400
                        "
                      >
                        {item.text}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto pt-5">
                      <div className="mb-4 h-px overflow-hidden bg-slate-100 dark:bg-white/[0.07]">
                        <span className="block h-full w-0 bg-gradient-to-r from-brand via-cyan to-brand transition-all duration-700 group-hover:w-full" />
                      </div>

                      <span
                        className="
                          flex items-center justify-between gap-2
                          text-xs
                          font-extrabold
                          text-brand
                          transition-colors duration-500

                          dark:text-cyan
                        "
                      >
                        <span className="truncate">{item.email}</span>
                        <ArrowRight className="size-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                    </div>
                  </a>
                );
              },
            )}          </div>
        </div>

        {/* LOCATIONS */}
        <div
          className="
            mt-10
            grid gap-3

            md:grid-cols-2
          "
        >
          {offices.map(
            (office, index) => (
              <div
                key={office.city}
                className="
                  group
                  relative
                  flex min-h-[128px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/80
                  bg-white/[0.72]
                  p-5
                  [transform-style:preserve-3d]
                  transition-[transform,box-shadow,border-color]
                  duration-700
                  ease-[cubic-bezier(.22,1,.36,1)]

                  hover:[transform:perspective(1000px)_translateY(-6px)_scale(1.012)]
                  hover:border-brand/25
                  hover:shadow-[0_22px_60px_rgba(6,30,87,.09)]

                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:hover:border-cyan/20
                "
              >
                <OfficeMapVisual index={index} />

                <div className="relative z-10 flex gap-4">
                  <span
                    className="
                      flex size-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border border-brand/10
                      bg-brand/10
                      text-brand
                      shadow-sm
                      transition-all duration-500

                      group-hover:-rotate-6
                      group-hover:scale-110
                      group-hover:bg-brand
                      group-hover:text-white

                      dark:border-cyan/10
                      dark:bg-cyan/10
                      dark:text-cyan
                      dark:group-hover:bg-cyan
                      dark:group-hover:text-navy
                    "
                  >
                    <MapPin className="size-[18px]" />
                  </span>

                  <div className="max-w-[78%]">
                    <p
                      className="
                        text-sm
                        font-extrabold
                        text-ink
                        transition-colors duration-500
                        group-hover:text-brand

                        dark:text-white
                        dark:group-hover:text-cyan
                      "
                    >
                      {office.city}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-6
                        text-slate-500

                        dark:text-slate-400
                      "
                    >
                      {office.address}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}        </div>

        <div
          className="
            mt-14
            overflow-hidden
            border-y
            border-slate-200
            py-4

            dark:border-white/10
          "
        >
          <div
            aria-hidden="true"
            className="
              flex
              w-max
              animate-marquee
              items-center
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.24em]
              text-slate-300

              dark:text-slate-700
            "
          >
            {[0, 1].map(
              (set) => (
                <div
                  key={set}
                  className="
                    flex
                    items-center
                    gap-8
                    pr-8
                  "
                >
                  {[
                    'One API',
                    'Smart routing',
                    'Unified operations',
                    'Payment resilience',
                    'Developer-first',
                    'Real-time visibility',
                  ].map(
                    (item) => (
                      <span
                        key={`${set}-${item}`}
                        className="
                          flex
                          items-center
                          gap-8
                          whitespace-nowrap
                        "
                      >
                        {item}

                        <span
                          className="
                            size-1
                            rounded-full
                            bg-brand/40

                            dark:bg-cyan/30
                          "
                        />
                      </span>
                    ),
                  )}
                </div>
              ),
            )}
          </div>
        </div>

        <div
          className="
            mt-7
            flex
            flex-col
            gap-4
            text-xs
            text-slate-500

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            ©{' '}
            {new Date().getFullYear()}{' '}
            SambhavPay. All rights
            reserved.
          </p>

          <p>
            SambhavPay — Building
            the Future of Enterprise
            Payments.
          </p>
        </div>
      </Container>
    </footer>
  );
}



function CompliancePlatformVisual() {
  return (
    <div
      aria-hidden="true"
      className="
        relative mt-6
        h-[150px]
        overflow-hidden
        rounded-[1.25rem]
        border border-brand/10
        bg-gradient-to-br
        from-brand/[0.055]
        via-white/45
        to-cyan/[0.07]
        p-3
        shadow-[0_16px_42px_rgba(16,102,209,.07)]
        transition-all duration-700
        group-hover:-translate-y-1
        group-hover:scale-[1.015]
        group-hover:border-brand/[0.18]

        dark:border-cyan/10
        dark:from-cyan/[0.055]
        dark:via-white/[0.025]
        dark:to-brand/[0.045]
      "
    >
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.14]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(16,102,209,.18) 1px, transparent 1.5px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="relative flex h-full items-center justify-between gap-2">
        <PlatformNode
          icon={Network}
          label="SambhavPay"
          sublabel="Technology layer"
          active
        />

        <FlowLink label="routes" />

        <PlatformNode
          icon={Landmark}
          label="Bank / PSP"
          sublabel="Regulated partner"
        />

        <FlowLink label="settles" />

        <PlatformNode
          icon={ShieldCheck}
          label="Merchant"
          sublabel="Designated flow"
        />
      </div>

      <span className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-[7px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
        <Activity className="size-3 text-emerald-500" />
        Clear role separation
      </span>
    </div>
  );
}

function PlatformNode({
  icon: Icon,
  label,
  sublabel,
  active = false,
}: {
  icon: typeof Network;
  label: string;
  sublabel: string;
  active?: boolean;
}) {
  return (
    <div className="relative z-10 flex w-[29%] min-w-0 flex-col items-center text-center">
      <span
        className={`flex size-9 items-center justify-center rounded-xl border shadow-sm backdrop-blur transition-all duration-500 group-hover:scale-110 ${active
          ? 'border-brand/15 bg-brand text-white shadow-[0_10px_24px_rgba(16,102,209,.18)] dark:border-cyan/20 dark:bg-cyan dark:text-navy'
          : 'border-brand/10 bg-white/75 text-brand dark:border-cyan/10 dark:bg-white/[0.055] dark:text-cyan'
          }`}
      >
        <Icon className="size-4" />
      </span>

      <span className="mt-2 truncate text-[8px] font-extrabold text-ink dark:text-white">
        {label}
      </span>

      <span className="mt-0.5 truncate text-[6.5px] text-slate-400">
        {sublabel}
      </span>
    </div>
  );
}

function FlowLink({ label }: { label: string }) {
  return (
    <div className="relative z-10 flex min-w-0 flex-1 items-center gap-1">
      <span className="h-px flex-1 bg-gradient-to-r from-brand/15 to-brand/50 dark:from-cyan/10 dark:to-cyan/45" />
      <ArrowRight className="size-3 shrink-0 text-brand/55 dark:text-cyan/55" />
      <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap text-[5.5px] font-bold uppercase tracking-[0.1em] text-slate-300 dark:text-slate-600">
        {label}
      </span>
    </div>
  );
}

function ContactCardVisual({ index }: { index: number }) {
  const shell = `
    pointer-events-none
    absolute right-4 top-[4.5rem]
    z-[2]
    h-[92px] w-[42%]
    origin-center
    opacity-[0.42]
    transition-all duration-700
    ease-[cubic-bezier(.22,1,.36,1)]
    group-hover:-translate-x-1
    group-hover:-translate-y-1
    group-hover:scale-[1.08]
    group-hover:opacity-100
    dark:opacity-[0.24]
    dark:group-hover:opacity-[0.72]
  `;

  if (index === 0) {
    return (
      <div aria-hidden="true" className={shell}>
        <div className="absolute inset-x-0 bottom-2 flex items-end justify-between gap-1.5">
          {[42, 68, 54, 82, 72].map((height, itemIndex) => (
            <span
              key={height}
              className="w-full origin-bottom rounded-t-md bg-gradient-to-t from-brand/20 to-brand/60 transition-transform duration-700 group-hover:scale-y-110 dark:from-cyan/15 dark:to-cyan/55"
              style={{
                height: `${height}px`,
                transitionDelay: `${itemIndex * 35}ms`,
              }}
            />
          ))}
        </div>
        <span className="absolute right-0 top-0 flex size-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 dark:bg-cyan/10 dark:text-cyan">
          <Building2 className="size-4" />
        </span>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div aria-hidden="true" className={shell}>
        <span className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rounded-full bg-brand dark:bg-cyan" />
        <span className="absolute left-3 top-1/2 h-px w-[58%] bg-gradient-to-r from-brand/55 to-cyan/20" />
        <span className="absolute right-0 top-[6%] size-7 rounded-xl border border-brand/15 bg-white/75 dark:border-cyan/10 dark:bg-white/[0.04]" />
        <span className="absolute right-0 top-[38%] size-7 rounded-xl border border-cyan/20 bg-cyan/10" />
        <span className="absolute right-0 bottom-[3%] size-7 rounded-xl border border-brand/10 bg-brand/[0.05] dark:border-cyan/10 dark:bg-cyan/[0.04]" />
        <span className="absolute left-[45%] top-[37%] flex size-8 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-500 group-hover:rotate-12 dark:bg-cyan/10 dark:text-cyan">
          <Network className="size-4" />
        </span>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div aria-hidden="true" className={shell}>
        <div className="absolute inset-0 overflow-hidden rounded-xl border border-brand/10 bg-white/60 shadow-sm backdrop-blur-sm dark:border-cyan/10 dark:bg-white/[0.035]">
          <div className="flex h-6 items-center gap-1.5 border-b border-brand/10 px-2 dark:border-cyan/10">
            <span className="size-1.5 rounded-full bg-rose-400/60" />
            <span className="size-1.5 rounded-full bg-amber-400/60" />
            <span className="size-1.5 rounded-full bg-emerald-400/60" />
          </div>
          <div className="p-2 font-mono text-[7px] leading-4 text-brand/70 dark:text-cyan/65">
            <p>POST /v1/payments</p>
            <p className="text-slate-400">status: 200 OK</p>
            <p className="text-emerald-500">webhook delivered</p>
          </div>
        </div>
        <Braces className="absolute -right-2 -top-2 size-5 text-brand transition-transform duration-500 group-hover:rotate-6 dark:text-cyan" />
      </div>
    );
  }

  if (index === 3) {
    return (
      <div aria-hidden="true" className={shell}>
        <div className="absolute right-1 top-0 size-[76px] rounded-full border border-brand/10 dark:border-cyan/10" />
        <div className="absolute right-[9px] top-[8px] size-[60px] rounded-full border border-dashed border-brand/25 transition-transform duration-[1200ms] group-hover:rotate-180 dark:border-cyan/25" />
        <span className="absolute right-[21px] top-[20px] flex size-9 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-cyan/10 dark:text-cyan">
          <ShieldCheck className="size-4" />
        </span>
        <div className="absolute bottom-1 left-0 space-y-2">
          {[62, 78, 48].map((width) => (
            <div key={width} className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-400/70" />
              <span className="h-1.5 rounded-full bg-brand/15 dark:bg-cyan/15" style={{ width: `${width}px` }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={shell}>
      <div className="absolute inset-0 rounded-xl border border-brand/10 bg-white/55 p-2.5 shadow-sm backdrop-blur-sm dark:border-cyan/10 dark:bg-white/[0.035]">
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-9 rounded-full bg-brand/15 dark:bg-cyan/15" />
          <span className="flex items-center gap-1 text-[7px] font-bold text-emerald-500"><span className="size-1.5 rounded-full bg-emerald-400" /> ONLINE</span>
        </div>
        <div className="mt-3 space-y-2">
          {[74, 58, 82].map((width, itemIndex) => (
            <div key={width} className="flex items-center gap-2">
              <span className={`size-2.5 rounded-full ${itemIndex === 1 ? 'bg-cyan' : 'bg-brand/20 dark:bg-cyan/20'}`} />
              <span className="h-1.5 rounded-full bg-brand/15 dark:bg-cyan/15" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
        <Activity className="absolute bottom-2 right-2 size-4 text-brand dark:text-cyan" />
      </div>
    </div>
  );
}

function OfficeMapVisual({ index }: { index: number }) {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-y-0 right-0
        w-[48%]
        opacity-[0.36]
        transition-all duration-700
        group-hover:scale-[1.06]
        group-hover:opacity-[0.72]
        dark:opacity-[0.18]
        dark:group-hover:opacity-[0.48]
      "
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,102,209,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,102,209,.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to left, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
        }}
      />

      <span className={`absolute ${index === 0 ? 'right-[16%] top-[28%]' : 'right-[26%] top-[22%]'} size-3 rounded-full bg-brand shadow-[0_0_0_6px_rgba(16,102,209,.10)] dark:bg-cyan`} />
      <span className={`absolute ${index === 0 ? 'right-[42%] bottom-[28%]' : 'right-[10%] bottom-[24%]'} size-2 rounded-full bg-cyan/80`} />
      <span className={`absolute ${index === 0 ? 'right-[19%] top-[35%] w-[28%] rotate-[20deg]' : 'right-[13%] top-[46%] w-[34%] -rotate-[18deg]'} h-px border-t border-dashed border-brand/45 dark:border-cyan/45`} />
    </div>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;

  links: {
    href: string;
    label: string;
  }[];
}) {
  return (
    <div>
      <h2
        className="
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.18em]
          text-slate-400

          dark:text-slate-500
        "
      >
        {title}
      </h2>

      <ul className="mt-5 space-y-3.5">
        {links.map(
          (link) => (
            <li
              key={`${link.href}-${link.label}`}
            >
              <Link
                href={link.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-1.5
                  text-sm
                  font-semibold
                  text-slate-600
                  transition

                  hover:translate-x-1
                  hover:text-brand

                  dark:text-slate-400
                  dark:hover:text-cyan
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
                    duration-300

                    group-hover:translate-x-0
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                />
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}