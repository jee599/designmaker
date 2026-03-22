---
id: 059
name: Taste Asymmetric
tags: [asymmetric, split-hero, premium, saas, modern]
tone: dark
inspired_by: [floria-landing-page.vercel.app, linear.app, vercel.com]
status: draft
---

# 059 — Taste Asymmetric

## Preview
`samples/059-taste-asymmetric.html`

## Palette
- Background: #0a0a0b
- Text: #fafafa
- Subtle BG: #141416
- Border: #27272a
- Muted: #71717a
- Accent: #34d399

## Typography
- Heading: Cabinet Grotesk (700, tracking-tighter)
- Body: Geist Sans (400)
- Mono: Geist Mono
- h1: text-4xl md:text-6xl (font-weight 700, letter-spacing -0.04em, line-height 1.05)
- h2: text-3xl md:text-4xl (font-weight 700, tracking-tight)
- h3: text-xl (font-weight 600)
- Body: text-base (leading-relaxed)

## Layout
- Hero: asymmetric split (lg:grid-cols-[1.2fr_0.8fr]), left text + right floating UI mockup
- Features: 2-column asymmetric bento (first card col-span-2, varied heights)
- Cards: border border-zinc-800 bg-zinc-900/50, hover:translate-y-[-2px] with spring transition
- Buttons: rounded-lg, accent solid primary with scale-[0.98] active state
- Border-radius: rounded-lg (cards), rounded-full (badges, avatars)
- Max width: max-w-7xl

## Key Details
- Split hero with asymmetric grid, no centered layout
- Tactile button feedback: active:scale-[0.98] transition-transform
- Spring-based hover animations on cards
- Staggered reveal on scroll (IntersectionObserver)
- Single accent color (emerald-400), saturation < 80%
- Deep zinc background (#0a0a0b), never pure black
- Negative space prioritized over card-heavy layouts
- CSS Grid for layout, not flexbox grids

## Section Order
Nav -> Hero (Asymmetric Split) -> Social Proof -> Features (Bento) -> How It Works -> Testimonials -> CTA -> Footer

## Background Pattern
#0a0a0b (hero) -> #141416 (social proof) -> #0a0a0b (features) -> #141416 (how it works) -> #0a0a0b (testimonials) -> gradient #141416->#0a0a0b (CTA) -> #0a0a0b (footer)

## Padding Pattern
hero: py-24 md:py-32 | social: py-12 | features: py-20 md:py-28 | how-it-works: py-20 | testimonials: py-20 | CTA: py-24 | footer: py-16
