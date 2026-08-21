# Sambhav Pay — Payment Orchestration Website

A high-end, production-oriented marketing website built with Next.js, React, Tailwind CSS, GSAP and Framer Motion.

## Signature experience

- Cinematic homepage with a live transaction-routing narrative
- Premium internal-page heroes with reusable orchestration signal canvases
- Transaction → policy checks → provider decision → failover-ready outcome storytelling
- Fluid editorial typography and a Sambhav blue/electric-cyan visual system
- Cursor-sensitive magnetic CTAs, spotlight surfaces and tactile micro-interactions
- Scroll-reactive glass navigation and animated product mega menu
- Circular light/dark theme reveal using the View Transitions API when supported
- Non-blocking page-entry and route-progress transitions
- Animated operations dashboard and accessible developer console
- Branded loading, merchant handoff, 404 and final-conversion experiences

## Accessibility and inclusive motion

- Keyboard-accessible navigation and mobile focus trap
- Route-change announcements and skip-to-content support
- Visible focus treatment and accessible touch targets
- Arrow/Home/End keyboard navigation for code tabs
- Descriptive captions for complex orchestration graphics
- Reduced-motion and reduced-data behavior across motion and decorative systems

## Routes

### Products

- `/products/payment-orchestration`
- `/products/payment-gateway`
- `/products/payouts`
- `/products/bbps`
- `/products/upi-cash-withdrawal`
- `/products/verification-api`

### Platform

- `/`
- `/industries`
- `/developers`
- `/company`
- `/security`
- `/contact`
- `/login`

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run typecheck
npm run lint
npm run build
```

## Environment variables

```env
CONTACT_WEBHOOK_URL=https://your-secure-endpoint.example/contact
CONTACT_WEBHOOK_TOKEN=optional-secret-token
NEXT_PUBLIC_MERCHANT_PORTAL_URL=https://merchant.sambhavpay.com
```

`CONTACT_WEBHOOK_URL` is required for the demo form to report successful delivery. The token is optional. When the merchant portal URL is absent, `/login` directs visitors to request access instead of collecting unsupported credentials.

## Architecture

```text
app/
  api/contact/             Validated webhook-forwarding contact route
  company/                 Company and timeline page
  contact/                 Demo request page
  developers/              Developer platform page
  industries/              Industry solutions page
  login/                   Secure merchant-portal handoff
  products/[slug]/         Reusable dynamic product pages
  security/                Security and reliability page
components/
  layout/                   Header, footer, logo and theme toggle
  sections/                 Homepage, product and hero storytelling
  ui/                       Buttons, cards, motion, themes and navigation aids
data/                       Product, company and contact-domain content
lib/                        Shared helpers
public/brand/               Sambhav Pay assets
qa/                         Final static validation output
```

## Reusable experience components

- `InnerHero` and `InnerHeroVisual`: reusable premium page-introduction system
- `GsapReveal`: dynamically loaded scroll reveal with cleanup
- `SpotlightCard`: pointer-aware premium surface
- `ScrollExperience`: progress indicator, ambient pointer treatment and back-to-top action
- `PageTransition`: non-blocking route sweep and content entry
- `Button`: reusable magnetic CTA system with composed event handlers
- `ThemeProvider`: persistent theme and view-transition reveal
- `RouteAnnouncer`: accessible client-side navigation feedback
- `SectionHeading`: fluid editorial hierarchy

## Performance decisions

- CSS/SVG-driven product visuals instead of video or WebGL
- `next/font` for optimized font loading
- Dynamic GSAP and ScrollTrigger import
- RequestAnimationFrame pointer tracking and passive listeners
- No additional smooth-scroll dependency
- Reduced-data suppression for decorative grids and ambient layers
- Explicit image sizing and selective logo preloading
- Contact webhook requests abort after eight seconds

## Production handoff

1. Confirm the final domain in `data/site.ts`.
2. Configure the contact webhook and merchant portal URL.
3. Replace illustrative API examples with the approved production specification.
4. Add only verified compliance badges, integrations, customer logos and metrics.
5. Add approved Privacy Policy, Terms and Cookie Policy pages.
6. Run native production build, Lighthouse, browser and physical-device QA in the deployment environment.

## Final review

Read `FINAL-DESIGN-REVIEW.md` for the complete refinement and validation record. Static validation output is in `qa/final-static-validation.json`.
