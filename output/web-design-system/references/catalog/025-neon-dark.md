---
id: 025
name: Neon Dark
tags: [neon, dark, creative, tech, flashy]
tone: dark
inspired_by: [gsap.com, roasted.design, trionn.com, flomodia.com]
status: draft
---

# 025 — Neon Dark

## Preview
`samples/025-neon-dark.html`

## Palette
- Background: #0a0a0a
- Surface: #111111
- Card BG: #141414
- Card Border: #1f1f1f (default), #06b6d4 (hover — neon glow)
- Text Primary: #f0f0f0
- Text Muted: #737373
- Accent Cyan: #06b6d4 (electric cyan — primary neon)
- Accent Pink: #ec4899 (hot pink — secondary, sparingly)
- Glow Cyan: rgba(6, 182, 212, 0.3)
- Glow Pink: rgba(236, 72, 153, 0.2)

## Typography
- Heading: Space Grotesk (600)
- Body: Inter (400)
- h1: text-5xl md:text-6xl lg:text-7xl (font-weight 600, letter-spacing -0.02em)
- h2: text-3xl md:text-4xl (font-weight 600)
- h3: text-xl (font-weight 500)
- Body: text-base (leading-relaxed)

## Layout
- Hero: centered, h1 with subtle cyan text-shadow, animated gradient border card below
- Features: 3 dark cards (not same size — 1 large + 2 small, constraint #2), neon border on hover
- Showcase: large dark panel with rotating conic-gradient border
- CTA: neon outline button that pulses
- Max width: max-w-6xl
- Border-radius: rounded-xl (cards), rounded-lg (buttons) — 2 types only

## Key Details
- Neon glow: box-shadow: 0 0 20px rgba(6,182,212,0.3), 0 0 40px rgba(6,182,212,0.1)
- Text-shadow on h1: 0 0 40px rgba(6,182,212,0.3)
- Animated gradient border: conic-gradient(from var(--angle), #06b6d4, #ec4899, #06b6d4) rotating via @property --angle animation
- Card hover: border-color transitions to cyan, glow appears
- CTA pulse: box-shadow pulsing cyan glow (2s ease-in-out infinite)
- Nav: fixed, bg-black/80 backdrop-blur-md, CTA button with cyan border
- Feature cards have SVG icons with cyan stroke (constraint #15)
- Constraint #16: Nav CTA "Get Started" with cyan border
- NO orange/warm tones (constraint #17) — cyan and pink only
- NO radial glow behind hero (constraint #18) — glow is on elements, not a bg blob
- NO gradient text (constraint #19)
- NO 4-column stat grid (constraint #26)
- All interactive elements have transitions (constraint #14)
- More flashy than 003 (Developer Terminal) — this is loud creative energy
- Code/tech snippets: small monospace text blocks in cards for tech feel

## Section Order
Nav (dark glass) -> Hero (neon h1 + gradient border card) -> Features (dark cards, neon hover) -> Showcase (large rotating border panel) -> Testimonial (single, in neon-bordered card) -> CTA (pulsing neon button) -> Footer

## Background Pattern
#0a0a0a (hero) -> #0a0a0a (features) -> #111111 (showcase) -> #0a0a0a (testimonial) -> #0a0a0a (CTA) -> #111111 (footer)

## Padding Pattern
hero: py-32 | features: py-24 | showcase: py-20 | testimonial: py-24 | CTA: py-28 | footer: py-12

## Data from crawled sites
- gsap.com: bg #0E100F, text #FFFCE1, accent green #0AE448, weight 400, nav_has_cta true
- roasted.design: dark theme confirmed
- trionn.com: dark creative portfolio
- flomodia.com: dark creative site
- Mapped: dark bg from gsap, neon accents inspired by their green/pink palette shifted to cyan/pink
