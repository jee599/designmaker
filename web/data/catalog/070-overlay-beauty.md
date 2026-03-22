---
id: 070
name: Overlay Beauty
tags: [luxury, glassmorphism, pastel, beauty, light]
tone: light
inspired_by: [overlay.com]
status: draft
---

# 070 — Overlay Beauty

## Preview
`samples/070-overlay-beauty.html`

## Palette
- Background: #ffffff
- Text: #2E2F53 (deep navy)
- Subtle BG: #f8f6f4
- Border: rgba(255,255,255,0.30)
- Muted: rgba(46,47,83,0.60)
- Accent: #B07A71 (rose)
- Additional: #F1E0DD (blush), #C7A6B4 (mauve), #C5D9FF (sky), #FBD9F5 (pink)

## Typography
- Heading: Geist Mono (500, monospace)
- Body: Roboto Flex (400, sans-serif)
- Mono: Geist Mono
- h1: text-5xl md:text-7xl (font-weight 500, line-height 1.1)
- h2: text-3xl md:text-5xl (font-weight 500)
- h3: text-xl (font-weight 500)
- Body: text-base (Roboto Flex, leading-relaxed)

## Layout
- Hero: sticky sections with scroll-triggered animations (pin + scrub)
- Features: carousel/splide sliders with fade transitions
- Cards: glassmorphic (backdrop blur 18px, border-radius 1.875rem)
- Buttons: rounded-full with pastel background fills
- Max width: max-w-7xl

## Key Details
- WebGL blob gradients with Gaussian distribution particle systems in hero
- Staggered word blur→clear (filter: blur(8px) → blur(0)) transitions on scroll entry
- Glassmorphic UI cards with backdrop-filter: blur(18px) and rgba white borders
- Circular card arrangements positioned via trigonometry (sin/cos for x/y offsets)
- Lenis smooth scroll at 1.1s duration for ultra-fluid feel

## Section Order
Nav -> Hero Sticky -> Product Carousel -> Technology -> Before/After Gallery -> Testimonials -> Footer

## Background Pattern
#ffffff (hero) -> #f8f6f4 (product carousel) -> #ffffff (technology) -> #f8f6f4 (before/after) -> #ffffff (testimonials) -> #f8f6f4 (footer)

## Padding Pattern
hero: py-0 (sticky, full viewport) | carousel: py-20 | technology: py-24 | before-after: py-20 | testimonials: py-20 | footer: py-16

## Material
Watercolor wash on frosted crystal

## Rhythm
- pacing: slow
- density: sparse

## Anti-patterns
- Do not use sharp corners or hard edges — every surface has border-radius 1.875rem (30px) minimum; brutalist geometry breaks the beauty product softness
- Do not use a monochrome palette — the multi-pastel system (blush, mauve, sky, pink) layered over deep navy text creates the luxury beauty identity

## Reconstruction Hints
- The circular card layout uses CSS custom properties --angle: calc(var(--i) * (360deg / var(--total))); transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle))) to orbit cards around a center point
- WebGL blob gradient: use Three.js ShaderMaterial with a vertex shader that displaces a sphere mesh by Gaussian noise, driven by time uniform — render to canvas, position absolute behind hero text
