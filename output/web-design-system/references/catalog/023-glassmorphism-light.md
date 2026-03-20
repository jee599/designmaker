---
id: 023
name: Glassmorphism Light
tags: [glassmorphism, light, dreamy, productivity, modern]
tone: light
inspired_by: [reflect.app, cosmos.so, endless.design]
status: draft
---

# 023 — Glassmorphism Light

## Preview
`samples/023-glassmorphism-light.html`

## Palette
- Background: linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%)
- Card Surface: rgba(255, 255, 255, 0.60)
- Card Border: rgba(255, 255, 255, 0.80)
- Text Primary: #1e1b4b (deep indigo-black)
- Text Muted: #6b7280
- Accent: #6366f1 (indigo-500, used at 60% feel)
- Accent Hover: #4f46e5
- Decorative Blob 1: rgba(99, 102, 241, 0.15) (blue-indigo)
- Decorative Blob 2: rgba(192, 132, 252, 0.12) (purple)
- Decorative Blob 3: rgba(96, 165, 250, 0.10) (sky blue)

## Typography
- Heading: DM Sans (300-400 weight, light feel)
- Body: DM Sans (400)
- h1: text-5xl md:text-6xl lg:text-7xl (font-weight 300, letter-spacing -0.02em)
- h2: text-3xl md:text-4xl (font-weight 300)
- h3: text-xl (font-weight 400)
- Body: text-base (leading-relaxed, font-weight 400)

## Layout
- Hero: centered text + floating glass card below showing product preview placeholder
- Cards: bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg rounded-2xl
- Floating cards overlap each other slightly (negative margin-top or absolute positioning)
- Features: 3 glass cards in staggered layout (not grid — offset vertically)
- Max width: max-w-6xl
- Spacious — generous padding everywhere
- Border-radius: rounded-2xl (cards), rounded-xl (buttons) — 2 types only

## Key Details
- Background blobs: 3-4 position:absolute divs, w-64 h-64 rounded-full, blur-3xl, slowly animate position
- Cards float gently: translateY animation (2-3px range, 3s ease-in-out infinite alternate)
- Blob animation: slow drift (20-30s ease-in-out infinite alternate) changing translate
- Nav: glass style (bg-white/40 backdrop-blur-lg), fixed, with CTA button
- CTA button: bg-indigo-500 text-white rounded-xl, hover:bg-indigo-600, with transition
- Product preview card: glass card with inner content placeholders (lines, dots simulating UI)
- NOT dark glassmorphism — light, airy, 2025 aesthetic
- NO purple-to-blue gradient background (constraint #1) — it's a very subtle, near-white gradient
- NO orange/warm tones (constraint #17)
- NO radial glow behind hero (constraint #18)
- NO white→gray gradient text (constraint #19)
- NO 4-column stat grid (constraint #26)
- Feature cards have SVG icons (constraint #15)
- Nav has CTA button (constraint #16)
- All interactive elements have transitions (constraint #14)

## Section Order
Nav (glass) -> Hero (centered text + glass card) -> Features (staggered glass cards) -> Product Showcase (overlapping glass panels) -> Testimonial (single quote in glass card) -> CTA -> Footer

## Background Pattern
gradient base throughout, blobs shift position per section

## Padding Pattern
hero: py-32 | features: py-24 | showcase: py-20 | testimonial: py-28 | CTA: py-24 | footer: py-12

## Data from crawled sites
- reflect.app: h1 72px, weight 500, backdrop_blur true, AeonikPro font → mapped to DM Sans
- cosmos.so: backdrop_blur true, dark theme (inverted to light for this ref)
- endless.design: backdrop_blur support confirmed
- Letter-spacing: tight (-0.02em) from reflect.app style
