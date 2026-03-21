---
id: 050
name: Mesh Gradient Hero
tags: [mesh-gradient, hero, colorful, immersive, animated, saas]
tone: gradient-immersive
inspired_by: [gamma.app, nuraform.com, stripe.com]
status: draft
---

# 050 — Mesh Gradient Hero

## Preview
`samples/050-mesh-gradient-hero.html`

## Palette
- Background: #0A0A0F (deep midnight)
- Text Primary: #FFFFFF
- Text Secondary: #A0A0B8 (muted lavender)
- Gradient Blob 1: #7C3AED (violet-600)
- Gradient Blob 2: #06B6D4 (cyan-500)
- Gradient Blob 3: #EC4899 (pink-500)
- Card BG: rgba(255,255,255,0.04) (frosted dark)
- Card Border: rgba(255,255,255,0.08)
- CTA Primary: #7C3AED (violet)
- CTA Hover: #6D28D9 (violet-700)
- Accent: #06B6D4 (cyan)

## Typography
- Heading: Space Grotesk (700 Bold)
- Body: DM Sans (400 Regular)
- Mono: Fira Code (400)
- h1: text-6xl md:text-8xl (Space Grotesk 700, -0.03em tracking)
- h2: text-3xl md:text-5xl (Space Grotesk 700, -0.02em tracking)
- h3: text-xl (Space Grotesk 600)
- Body: text-base (DM Sans 400, leading-relaxed)

## Layout
- CORE CONCEPT: full-bleed animated mesh gradient in hero — not small gradient cards but a massive, living gradient background
- Max-width: 1200px centered
- Border-radius: rounded-2xl on cards, rounded-full on buttons — 2 types
- Hero takes full viewport height with 3 animated gradient blobs behind text
- Cards have glass-dark effect: translucent bg + subtle border
- Asymmetric feature grid (1 large + 2 small stacked)

## Section Map
1. **Nav** — dark bg, transparent, logo left, links center, violet CTA button right
2. **Hero** — full-vh, 3 animated mesh gradient blobs (violet, cyan, pink) behind massive heading, subtitle, 2 CTAs (solid violet + ghost)
3. **Logo Bar** — single row of muted white logos, "Trusted by [your brands]" label
4. **Feature Grid** — asymmetric: 1 tall card left (takes 2 rows), 2 shorter cards right stacked, glass-dark cards with icon + title + description
5. **Product Demo** — full-width dark card with browser chrome mockup inside, rounded corners, subtle mesh gradient in the mockup
6. **Testimonial** — single large quote with photo circle, name, raw specific feedback
7. **Pricing** — 2 tiers side by side, glass-dark cards, violet highlight on recommended tier
8. **CTA Section** — centered heading + subtitle + single violet CTA, small mesh gradient blob behind
9. **Footer** — 4-column links, dark bg, muted text, bottom border with copyright

## Key Details
- Mesh gradient blobs animate with CSS keyframes: slow drift (30s cycle), blur(80px), mix-blend-mode: screen
- Cards: backdrop-filter: blur(12px) on glass-dark surfaces
- Different card heights in grid (constraint #2)
- Sections have varying padding (constraint #3)
- NO orange/warm tones — constraint #17
- NO radial glow behind hero — constraint #18 (mesh blobs are multi-point, not single radial)
- NO gradient text — constraint #19
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Logo Bar -> Feature Grid -> Product Demo -> Testimonial -> Pricing -> CTA -> Footer

## Padding Pattern
Hero: py-0 (full-vh) | Logo: py-16 | Features: py-28 | Demo: py-20 | Testimonial: py-24 | Pricing: py-32 | CTA: py-20 | Footer: py-12

## Data from crawled sites
- gamma.app: AI presentation maker with gradient mesh hero
- nuraform.com: Bold gradients, minimalist layouts, motion transitions
- stripe.com: Continuously flowing gradient animations that convey technical sophistication
- Mapped: full-bleed hero mesh gradient with animated blobs on deep midnight background, glass-dark cards, violet+cyan+pink palette
