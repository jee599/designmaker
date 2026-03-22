---
id: 079
name: Arc Browser
tags: [colorful, gradient, playful, premium, browser]
tone: light
inspired_by: [arc.net]
status: draft
---

# 079 — Arc Browser

## Preview
`samples/079-arc-browser.html`

## Palette
- Background: #FFFCEC
- Text: #000000
- Subtle BG: #f5f0e0
- Border: rgba(20, 13, 7, 0.08)
- Muted: rgba(0, 0, 0, 0.5)
- Accent: #3139FB
- Secondary Accent: #2702C2
- Accent Red: #FB3A4D

## Typography
- Heading: Inter (700, -0.04em)
- Body: Inter (400)
- Mono: ABC Favorit Mono / JetBrains Mono
- h1: text-5xl md:text-7xl (font-weight 700, letter-spacing -0.04em, line-height 1.05)
- h2: text-3xl sm:text-4xl (font-weight 700, letter-spacing -0.03em)
- h3: text-xl (font-weight 600)
- Body: text-base (line-height 1.6)

## Layout
- Hero: center, warm off-white background (#FFFCEC), py-28 md:py-36
- Features: bento grid with colorful gradient cards
- Cards: rounded-2xl, subtle shadow, hover:scale(1.02)
- Buttons: pill (rounded-full), blue solid primary, border outline secondary
- Border-radius: rounded-2xl (cards) + rounded-full (buttons, badges)
- Max width: max-w-6xl

## Key Details
- Warm off-white background (#FFFCEC) — distinctive non-pure-white
- Vibrant blue accent (#3139FB) contrasting warm background
- SVG wavy dividers between sections
- Noise texture overlay (subtle grain)
- Scale transforms on hover (1.02-1.05)
- Colorful gradient product screenshots
- Bold, playful typography with tight letter-spacing
- Smooth 150ms transitions on interactive elements
- Focus states with #96C4FF outline
- Scroll-triggered fade-in animations

## Section Order
Nav -> Hero -> Social Proof (logos) -> Features (bento) -> Product Showcase -> How It Works -> Testimonials -> CTA -> Footer

## Background Pattern
#FFFCEC (hero) -> #f5f0e0 (social proof) -> #FFFCEC (features) -> #f5f0e0 (showcase) -> #FFFCEC (how it works) -> #f5f0e0 (testimonials) -> #2702C2 (CTA) -> #1a1a2e (footer)

## Padding Pattern
hero: py-28 md:py-36 | social: py-14 | features: py-24 | showcase: py-20 | how-it-works: py-20 | testimonials: py-20 | CTA: py-24 | footer: py-16
