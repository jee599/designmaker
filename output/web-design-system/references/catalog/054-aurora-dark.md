---
id: 054
name: Aurora Dark
tags: [aurora, northern-lights, dark, animated, blobs, atmospheric]
tone: atmospheric-dark
inspired_by: [vercel.com, linear.app, dorpascal.com]
status: draft
---

# 054 — Aurora Dark

## Preview
`samples/054-aurora-dark.html`

## Palette
- Background: #030712 (gray-950, near black)
- Text Primary: #F9FAFB (gray-50)
- Text Secondary: #6B7280 (gray-500)
- Aurora Green: #10B981 (emerald-500)
- Aurora Teal: #14B8A6 (teal-500)
- Aurora Blue: #3B82F6 (blue-500)
- Aurora Purple: #8B5CF6 (violet-500)
- Card BG: rgba(255,255,255,0.03)
- Card Border: rgba(255,255,255,0.06)
- CTA: #10B981 (emerald)
- CTA Hover: #059669 (emerald-600)

## Typography
- Heading: Plus Jakarta Sans (700 Bold)
- Body: Plus Jakarta Sans (400 Regular)
- Mono: JetBrains Mono (400)
- h1: text-5xl md:text-7xl (Plus Jakarta Sans 700, -0.03em tracking)
- h2: text-3xl md:text-5xl (Plus Jakarta Sans 700, -0.02em tracking)
- h3: text-lg (Plus Jakarta Sans 600)
- Body: text-base (Plus Jakarta Sans 400, leading-relaxed)

## Layout
- CORE CONCEPT: aurora borealis effect — large blurred, animated color blobs (green, teal, blue, purple) drifting across a near-black background, creating an atmospheric northern lights feel
- Max-width: 1200px centered
- Border-radius: rounded-xl on cards, rounded-lg on buttons — 2 types
- Aurora blobs: 4 divs with massive blur(120px), opacity 0.15, mix-blend-mode: screen, animated position
- Hero occupies full viewport with aurora behind
- Glass-dark cards with ultra-subtle borders

## Section Map
1. **Nav** — fixed, fully transparent bg with backdrop-blur on scroll, emerald CTA, clean links
2. **Hero** — full-vh, 4 aurora blobs drifting behind (green top-left, teal center, blue bottom-right, purple far-right), large heading + subtitle, emerald solid CTA + ghost CTA
3. **Feature Bento** — 2x3 bento grid (1 large spanning 2 cols, 4 small), glass-dark cards, icon + title + description, emerald accent on icons
4. **Product Showcase** — centered browser mockup frame, dark bg inside, aurora blob peeking behind the mockup frame
5. **Social Proof Line** — single centered line: "Used by [your number] developers shipping [your metric] faster" — no grid
6. **Comparison** — 2-column: "Without [product]" (muted, gray) vs "With [product]" (emerald accent), simple text lists
7. **Testimonial** — glass-dark card, emerald left border, raw specific quote, photo + name
8. **CTA Section** — centered, aurora blob behind, emerald CTA, large heading
9. **Footer** — 4-column links, near-black bg, muted gray-500 text

## Key Details
- Aurora blobs: position absolute, width 600px, height 600px, border-radius 50%, filter: blur(120px), opacity 0.15, animate position with CSS keyframes (40s cycle, different speeds per blob)
- mix-blend-mode: screen on blobs (additive blending on dark bg)
- Different from 025 Neon Dark: no neon borders or glow effects. Aurora is soft, atmospheric, blurred. 025 has sharp neon strokes
- Different from 027 Gradient SaaS: no card-level gradients. Aurora is full-page atmospheric background
- Cards: backdrop-filter: blur(16px) for glass effect
- NO orange/warm tones — constraint #17
- NO radial glow (aurora blobs are multi-point, not single centered radial) — constraint #18
- NO gradient text — constraint #19
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- Different card heights in bento (constraint #2)
- Varying section padding (constraint #3)
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Feature Bento -> Product Showcase -> Social Proof Line -> Comparison -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-0 (full-vh) | Bento: py-28 | Showcase: py-20 | Social: py-12 | Comparison: py-24 | Testimonial: py-16 | CTA: py-24 | Footer: py-12

## Data from crawled sites
- vercel.com: Dark developer-first design with subtle atmospheric effects
- linear.app: Sleek dark theme with soft lighting effects
- dorpascal.com: Aurora-inspired design with deep blue and teal palette
- Mapped: 4 animated aurora blobs on near-black bg, emerald accent, Plus Jakarta Sans, atmospheric glass cards
