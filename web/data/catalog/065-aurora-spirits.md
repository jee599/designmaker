---
id: 065
name: Aurora Spirits
tags: [luxury, animated, serif, spirits, dark]
tone: dark
inspired_by: [aupalevodka.com]
status: draft
---

# 065 — Aurora Spirits

## Preview
`samples/065-aurora-spirits.html`

## Palette
- Background: #000000
- Text: #ffffff
- Subtle BG: #0a0a0a
- Border: #1a1a1a
- Muted: #888888
- Accent: #2d6b4a (green iridescent)

## Typography
- Heading: Instrument Serif (500, -0.01em)
- Body: Helvetica Now Display (400)
- Mono: Martha
- h1: text-5xl md:text-7xl (font-weight 500, letter-spacing -0.01em, line-height 1.08)
- h2: text-3xl md:text-5xl (font-weight 500, letter-spacing -0.01em)
- h3: text-xl (font-weight 400)
- Body: text-base (leading-relaxed)

## Layout
- Hero: full-viewport film with overlay text
- Features: stacked card layouts
- Cards: image + descriptive text
- Buttons: pill with subtle border
- Max width: max-w-6xl

## Key Details
- clip-path inset + skew(12deg) text reveal animations on scroll entry
- Staggered line reveals on scroll with 50ms delay per line
- Ripple and glass texture patterns on bottle imagery
- Instrument Serif + Helvetica Now Display font pairing for luxury feel
- Tailwind CSS v4 with custom design tokens

## Section Order
Nav -> Hero Film -> Brand Story -> Products Grid -> Community -> Footer

## Background Pattern
#000000 (hero, full-film) -> #0a0a0a (brand story) -> #000000 (products) -> #0a0a0a (community) -> #000000 (footer)

## Padding Pattern
hero: py-0 (full viewport) | brand-story: py-24 | products: py-24 | community: py-20 | footer: py-16

## Material
Frost on emerald glass bottle

## Rhythm
- pacing: slow
- density: balanced

## Anti-patterns
- Do not use sans-serif headings — the Instrument Serif + Helvetica Now pairing is load-bearing for the luxury spirits identity
- Do not use bright or saturated accent colors — the green iridescent (#2d6b4a) is deliberately muted and botanical, not vivid

## Reconstruction Hints
- The clip-path + skew text reveal is the signature animation; implement with clip-path: inset(0 100% 0 0) transitioning to inset(0 0% 0 0) plus transform: skewX(12deg) → skewX(0) on IntersectionObserver trigger
- Stagger line reveals at exactly 50ms intervals using CSS animation-delay or JS setTimeout chains for the organic word-by-word effect
