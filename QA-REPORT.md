# Sambhav Pay Website — Senior QA Report

**Review scope:** visual quality, responsive behavior, interaction architecture, accessibility, performance risks, spacing consistency, content integrity and production handoff.

## Executive result

The reviewed build now has a consistent enterprise-fintech visual system across every public route, a stable tablet breakpoint, accessible keyboard focus, a non-blocking transition model, reduced-motion support, safer form behavior and a production-oriented merchant portal handoff.

The final browser evidence covers:

- 14 routes rendered at **1440 × 900**
- 14 routes rendered at **390 × 844**
- Homepage rendered at **1024 × 768**
- Homepage rendered in **desktop and mobile dark mode**
- Three representative full-page captures
- Automated DOM, responsive-overflow, image, heading, control-name and link-integrity checks

## Execution environment and limitation

A native `npm install` was attempted, but the execution environment's package registry returned a `404` for required packages, including `@types/node`. Because Next.js, React, Framer Motion and GSAP could not be installed in this environment, a native `next dev`, Playwright interaction pass, production `next build` and Lighthouse run were not available.

To continue QA without fabricating results, the exact project TSX was transpiled with TypeScript, rendered through a purpose-built React-compatible static harness, styled with generated Tailwind CSS, and opened in headless Chromium through the Chrome DevTools Protocol. This validates the component structure, route output, responsive layout, dark styling, source-level animation cleanup and accessibility markup. Runtime animation timing and production bundle metrics still require the normal dependency-enabled environment.

## Critical defects fixed

### 1. Tablet navigation and hero collision

**Before:** At 1024 px, the desktop header, CTA group and two-column hero activated too early. The logo/tagline wrapped, navigation became cramped, and the orchestration engine was squeezed into a narrow multi-column layout.

**Fix:** Desktop navigation and the split hero now activate at the `xl` breakpoint. At tablet width, the mobile navigation remains available and the hero stacks cleanly before the orchestration visual.

### 2. Page transition could obscure content

**Before:** A full-screen fixed transition began in a covering state while the main content began transparent. A hydration or JavaScript failure could leave the page hidden.

**Fix:** Replaced the blocking curtain with a non-blocking three-pixel route progress sweep. Main content is visible by default, so progressive rendering remains safe.

### 3. Keyboard focus was globally removed

**Before:** `:focus-visible { outline: none; }` removed the browser fallback for interactive controls that lacked a component-specific ring.

**Fix:** Added a global high-contrast focus outline for light and dark themes while preserving the custom input focus treatment. Chromium verification reports a `3px` visible outline with a `3px` offset on keyboard focus.

### 4. Mobile dialog focus behavior

**Before:** The mobile menu trapped focus inside the dialog but did not provide an explicit close control inside that focus boundary.

**Fix:** Added dialog semantics, initial focus, focus trapping, Escape handling, focus return to the trigger and an explicit in-dialog Close button.

### 5. Reduced-motion coverage was incomplete

**Before:** GSAP reveals respected reduced motion, but Framer Motion loops, hero tilt and the pointer glow were not governed from one global policy.

**Fix:** Added `MotionConfig reducedMotion="user"`, retained GSAP media-query handling, disabled pointer tracking for reduced-motion users and disabled the hero's cursor tilt when reduced motion is requested.

### 6. Internal implementation notes leaked into public copy

**Before:** Several pages exposed messages such as “connect this endpoint,” “final public copy,” “illustrative API,” “unverified claims” and “connect actual authentication.”

**Fix:** Replaced those notes with polished, customer-facing content while keeping product and compliance language appropriately cautious.

### 7. Contact form reported success without delivery

**Before:** The API returned success after validation but did not forward the request anywhere.

**Fix:** The endpoint now validates and normalizes fields, limits payload size, includes a honeypot, forwards to a configurable webhook with an eight-second timeout, supports an optional bearer token, disables caching and returns an honest service-unavailable response when not configured.

### 8. Login form implied authentication that did not exist

**Before:** A credential form submitted to `#` and displayed internal implementation guidance.

**Fix:** Replaced it with a secure merchant-portal handoff. The page opens the configured merchant portal when available and otherwise routes users to request access. It no longer collects credentials without an authentication backend.

### 9. Loading experience lacked assistive status

**Before:** The branded loader was decorative only.

**Fix:** Added `role="status"`, polite live-region behavior, a meaningful accessible label, screen-reader loading text and reduced-motion fallbacks.

## Automated QA results

| Check | Result |
|---|---:|
| Routes opened | 14 / 14 |
| Responsive route renders | 28 / 28 |
| Additional tablet/dark renders | 3 / 3 |
| Internal links checked | 378 |
| Broken internal routes or anchors | 0 |
| Referenced static assets missing | 0 |
| Contact API validation/forwarding cases | 5 / 5 passed |
| Pages with exactly one H1 | 14 / 14 at both viewports |
| Images failing to load in the harness | 0 |
| Visible unnamed buttons | 0 |
| Visible unnamed links | 0 |
| Visible unlabeled form controls | 0 |
| Duplicate IDs | 0 |
| Body-level horizontal overflow | 0 |

The overflow scanner detects only intentional content inside clipped or horizontally scrollable components, such as the footer marquee and the mobile code sample. Document and body widths remain within the viewport.

## Visual review against the intended design

The final implementation closely follows the supplied blue-and-cyan Sambhav Pay identity and reference direction:

- Strong white-space-led enterprise layout rather than a crowded fintech template
- Blue/cyan gradient used selectively for routing intelligence and conversion moments
- Hero places the live orchestration system beside the value proposition on desktop
- Tablet presentation stacks instead of compressing the orchestration graphic
- Mobile typography remains prominent without clipping or horizontal scrolling
- Dashboard and routing graphics use a deep-navy operational canvas that matches the logo palette
- Product pages share a clear system while preserving product-specific messaging
- Dark mode maintains hierarchy, readable copy and brand distinction

## Performance review

Implemented safeguards include:

- CSS/SVG interface visuals instead of video or WebGL
- `next/font` with swap behavior
- Request-animation-frame pointer tracking
- Passive pointer and scroll listeners
- Effect cleanup for listeners, frames and GSAP contexts
- Reduced-motion behavior
- No smooth-scroll dependency or scroll hijacking
- Responsive layouts that avoid duplicated desktop visual trees
- AVIF/WebP support through Next image configuration
- Contact webhook timeout and no-store responses

Native bundle sizes, Core Web Vitals and Lighthouse scores are intentionally not claimed because the dependency-enabled production build could not run in this environment.

## Final production configuration

Set these variables before launch:

```env
CONTACT_WEBHOOK_URL=https://your-secure-endpoint.example/contact
CONTACT_WEBHOOK_TOKEN=optional-secret-token
NEXT_PUBLIC_MERCHANT_PORTAL_URL=https://merchant.sambhavpay.com
```

Then run:

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run dev
```

A final device/browser pass should include current Chrome, Safari, Firefox, Edge, iOS Safari and Android Chrome, plus Lighthouse and an automated accessibility engine in the deployment environment.

## Evidence

- `qa/final-desktop-contact-sheet.jpg`
- `qa/final-mobile-contact-sheet.jpg`
- `qa/screenshots/final/`
- `qa/final-metrics.json`
- `qa/link-integrity.json`
- `qa/contact-api-test.json`
