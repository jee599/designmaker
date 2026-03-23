---
id: 060
name: Ethereal Glass
tags: [glassmorphism, premium, agency, luxury, animated]
tone: dark
inspired_by: [apple.com, stripe.com, linear.app]
status: refined
---

# 060 — Ethereal Glass

## Preview
`samples/060-ethereal-glass.html`

## Palette
- Background: #0c0c0f (deep void black)
- Surface: #16161a (elevated panels)
- Text Primary: #f4f4f5 (zinc-100)
- Text Muted: #71717a (zinc-500)
- Border Outer: rgba(255,255,255,0.06)
- Border Inner: rgba(255,255,255,0.10)
- Accent: #a78bfa (violet-400)
- Accent Glow: rgba(167,139,250,0.15)
- Glass BG: rgba(255,255,255,0.03)

## Typography
- Heading: Outfit (700, tracking-tight) — Google Fonts CDN
- Body: system-ui, -apple-system, sans-serif (fallback stack)
- Mono: 'SF Mono', 'Fira Code', monospace
- h1: clamp(2.5rem, 6vw, 4.5rem) — font-weight 700, letter-spacing -0.03em, line-height 1.02
- h2: clamp(1.875rem, 4vw, 3rem) — font-weight 700, letter-spacing -0.02em, line-height 1.1
- h3: 1.25rem — font-weight 600, line-height 1.4
- Body: 1rem — line-height 1.7, color #71717a
- Overline: 0.75rem uppercase, letter-spacing 0.1em, color #a78bfa

## Layout
- Hero: Z-Axis Cascade — three overlapping glass panels at translateZ depths (0, -40px, -80px), rotated 2-4deg, creating parallax depth. Central headline floats above.
- Features: Asymmetrical Bento — 2-col + 1-col alternating, with double-bezel card containers
- Cards: Double-bezel pattern — outer container (border rgba(255,255,255,0.06), rounded-2xl, p-[1px]), inner container (border rgba(255,255,255,0.10), rounded-[15px], backdrop-blur-xl, bg rgba(255,255,255,0.03))
- Buttons: Pill with inner icon circle — outer rounded-full with bg-white/5, inner circle with accent bg, scale(1.02) on hover
- Nav: Fluid Island — centered pill, backdrop-blur-2xl, bg-white/[0.04], border rgba(255,255,255,0.08), max-w-fit mx-auto
- Border-radius: 16px (cards outer), 15px (cards inner), 9999px (buttons, nav, badges)
- Max width: 1280px (80rem)

## Key Details
- Floating glass nav with backdrop-blur-2xl and bg-white/[0.04] border, fixed top-6 with horizontal centering
- Double-bezel cards: 1px gap between outer and inner border creates depth illusion
- Z-axis layered hero with 3 glass panels using CSS perspective(1200px) and translateZ
- Custom cubic-bezier(0.34, 1.56, 0.64, 1) for spring-like overshoot on hovers
- Magnetic hover: cards lift with translateY(-4px) and box-shadow expansion
- Staggered IntersectionObserver reveal: 0ms, 80ms, 160ms, 240ms delays
- Gradient mesh: 3 radial-gradient layers (violet, indigo, transparent) composited
- Noise texture via inline SVG data URI (fractalNoise, 0.65 baseFrequency, 0.4 opacity)
- Violet accent (#a78bfa) used only for: badge borders, overline text, button accents, hover glows

## Section Map

### 1. Nav (Fluid Island)
Centered floating pill navbar, fixed 24px from top. Contains logo left, 4 nav links center, CTA button right. backdrop-blur-2xl with bg-white/[0.04]. Border: 1px solid rgba(255,255,255,0.08). On scroll > 50px, slightly increases bg opacity. Nav items have magnetic hover (color transitions to white from muted).

### 2. Hero (Z-Axis Cascade)
Full viewport height. Three decorative glass panels positioned absolutely behind the headline, each rotated slightly (1deg, -2deg, 3deg) and offset with translateZ for depth. CSS perspective(1200px) on parent. Central content: overline badge ("Precision design studio"), h1 two-line headline, subtitle paragraph, two CTA buttons (primary violet pill + ghost outline pill). Gradient mesh background with 3 overlapping radial-gradients.

### 3. Logos
py-12, bg #16161a. Single row of 6 muted SVG/text logos at opacity 0.4, grayscale. Simple horizontal flex with gap-12, centered.

### 4. Features (Asymmetric Bento)
py-24 md:py-32, bg #0c0c0f. Section heading centered. 3-column bento grid: first card spans 2 cols (wide), remaining 4 cards are 1-col each arranged in 2x2. All cards use double-bezel pattern. Each card has: icon (24x24 in violet-tinted circle), h3, description, optional code snippet or metric.

### 5. Product Showcase
py-24, bg #16161a. Large centered glass panel mimicking a browser/app window. Window chrome (3 dots, URL bar). Inside: abstract dashboard wireframe built from colored rectangles. Slight rotate-x(2deg) perspective tilt.

### 6. Testimonials
py-20, bg #0c0c0f. Two testimonial cards side by side, each with large quote, avatar gradient circle, name, role. Left border accent in violet. Double-bezel card pattern.

### 7. Pricing
py-24, bg #16161a. Three pricing tiers in equal columns. Middle tier "Pro" is highlighted with violet border glow and "Popular" badge. Each card: plan name, price, feature list with check icons, CTA button. Double-bezel cards.

### 8. CTA
py-28, gradient mesh background (violet/indigo radials over #0c0c0f). Centered h2, subtitle, single large CTA button. Decorative glass panels flanking at low opacity.

### 9. Footer
py-16, bg #0c0c0f, border-top rgba(255,255,255,0.06). 4-column grid: brand + tagline, Product links, Resources links, Company links. Bottom row: copyright + social icons.

## Background Pattern
#0c0c0f (hero, gradient mesh overlay) -> #16161a (logos) -> #0c0c0f (features) -> #16161a (showcase) -> #0c0c0f (testimonials) -> #16161a (pricing) -> gradient mesh (CTA) -> #0c0c0f (footer)

## Padding Pattern
hero: py-32 md:py-40 | logos: py-12 | features: py-24 md:py-32 | showcase: py-24 | testimonials: py-20 | pricing: py-24 | CTA: py-28 | footer: py-16

## Animation Details
- Spring easing: cubic-bezier(0.34, 1.56, 0.64, 1) — used on button/card hovers
- Smooth easing: cubic-bezier(0.4, 0, 0.2, 1) — used on scroll reveals
- Reveal: translateY(24px) + opacity(0) -> translateY(0) + opacity(1), 600ms
- Stagger: each child delays +80ms (via data-delay attribute)
- Nav bg transition: 300ms ease
- Card hover lift: translateY(-4px), 400ms spring easing
- Glass panel float: subtle 20s ease-in-out infinite translateY oscillation (8px range)

## Crawled Site Patterns Applied
- **Apple**: Full-viewport hero with centered text, generous whitespace, product-image-as-hero approach adapted to glass panels, systematic dark bg
- **Stripe**: Dual-CTA hero pattern, bento feature grid with varied spans, enterprise-grade pricing table layout, gradient mesh backgrounds
- **Linear**: Dark-first palette, hardware-conscious animations (prefers-reduced-motion respected), modular type scale with clamp(), CSS custom properties for theming, performance-optimized loading
