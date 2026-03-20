---
id: 040
name: Organic Blob
tags: [organic, blob, fluid, svg, curves, warm-neutral]
tone: warm-neutral
inspired_by: [family.co, wisprflow.ai, celestia.org]
status: draft
---

# 040 — Organic Blob

## Preview
`samples/040-organic-blob.html`

## Palette
- Background: #FFFDF7 (warm off-white)
- Surface: #F5F0E8 (warm sand)
- Card BG: #FFFFFF
- Blob Color 1: #E8D5B7 (warm beige — bg blob)
- Blob Color 2: #B8D4E3 (soft sky blue — bg blob)
- Blob Color 3: #D4E8D0 (soft sage — bg blob)
- Text Primary: #1C1917 (stone-900)
- Text Muted: #78716C (stone-500)
- Accent: #2563EB (blue-600 — clean contrast against warm bg)
- Accent Light: #DBEAFE (blue-100)

## Typography
- Heading: DM Serif Display (400 — elegant serif for organic feel)
- Body: DM Sans (400)
- h1: text-4xl sm:text-5xl md:text-6xl (DM Serif Display, normal weight, -0.01em)
- h2: text-3xl sm:text-4xl (DM Serif Display)
- h3: text-lg (DM Sans, font-weight 500)
- Body: text-base (DM Sans, leading-relaxed)

## Layout
- Hero: centered text with 3 large animated SVG blobs behind (z-index -1), text sits on top of organic shapes
- Features: 2-column alternating (image-left/text-right, then swap) — flowing layout, NO grid
- Blob Dividers: instead of straight lines, SVG blob shapes separate sections
- Testimonial: offset left with large quotation mark in serif, blob shape behind avatar
- CTA: centered with organic blob border (SVG clip-path on container)
- Max width: max-w-6xl
- Border-radius: rounded-3xl (cards — very round), rounded-full (buttons) — 2 types

## SVG Blob Specifications
- Hero blobs: 3 overlapping SVG shapes (400x400px each), animated with CSS transform
- Blob shape: SVG path with smooth curves, border-radius won't achieve this — actual SVG paths
- Blob animation: slow morph using CSS keyframes that shift transform: translate + scale (12s ease-in-out infinite)
- Colors: semi-transparent fills (opacity 0.4) so blobs layer beautifully
- Each blob has a different animation timing (12s, 15s, 18s) to avoid sync

## Key Details
- SVG blobs use clipPath for organic section shapes (top/bottom wave-like curves)
- Feature images: organic blob-shaped clip-path on placeholder image divs
- Alternating feature layout: flexbox with md:flex-row-reverse on even items
- Testimonial has an organic quotation mark (DM Serif Display, text-8xl, opacity 0.1)
- Cards have very generous padding (p-8 md:p-12) — breathing room
- Hover: cards lift with translateY(-4px) + shadow deepens
- Nav: fixed, bg-white/80 backdrop-blur-lg, blue CTA with rounded-full
- Section bg clips use SVG viewBox paths for organic transitions
- Constraint #14: all interactive elements have 300ms transitions
- Constraint #15: feature sections have simple line-drawn SVG icons
- Constraint #16: Nav CTA "Get Started" blue rounded-full
- NO orange/warm tones as MAIN ACCENT — warm is in bg only, accent is blue — constraint #17
- NO radial glow behind hero — constraint #18 — blobs are shape, not glow
- NO gradient text — constraint #19
- NO big corp names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All animations repeat on scroll (IntersectionObserver)

## Section Order
Nav (light glass) -> Hero (blobs + centered serif text) -> Blob Divider -> Features (alternating 2-col) -> Blob Divider -> Testimonial (offset left + blob bg) -> Blob Divider -> CTA (blob-clipped container) -> Footer

## Background Pattern
#FFFDF7 (hero, with colored blobs) -> #FFFFFF (features) -> #F5F0E8 (testimonial) -> #FFFDF7 (CTA) -> #1C1917 (footer, dark)

## Padding Pattern
hero: py-32 | features: py-24 | testimonial: py-20 | CTA: py-28 | footer: py-12

## Data from crawled sites
- family.co: Warm beige #FBFAF9, custom font, blue #3784F4 accent, organic animations, generous spacing
- wisprflow.ai: Cream #FFFFEB, animated SVG paths, split text animations
- celestia.org: Light gray #F6F6F6, Untitled Sans, clean card-based layout
- Mapped: warm bg from family.co, organic SVG shapes inspired by wispr's animations, serif heading for organic feel
