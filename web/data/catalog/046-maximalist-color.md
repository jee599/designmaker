---
id: 046
name: Maximalist Color
tags: [colorful, maximalist, vibrant, playful, multi-color, white]
tone: playful-maximalist
inspired_by: [tavus.io, kissflow.com]
status: draft
---

# 046 — Maximalist Color

## Preview
`samples/046-maximalist-color.html`

## Palette
- Background: #FFFFFF (white)
- Section Colors (rotating):
  - Purple section: #7C3AED accent, #F5F3FF bg
  - Teal section: #0D9488 accent, #F0FDFA bg
  - Amber section: #D97706 accent, #FFFBEB bg (used sparingly, NOT main palette — constraint #17)
  - Rose section: #E11D48 accent, #FFF1F2 bg
- Text Primary: #111827 (gray-900)
- Text Muted: #6B7280 (gray-500)
- Card BG: #FFFFFF
- Card Top Border: 4px solid [section color]

## Typography
- Heading: Outfit (800 ExtraBold)
- Body: Outfit (400 Regular)
- h1: text-6xl md:text-7xl lg:text-8xl (Outfit 800, -0.02em tracking)
- h2: text-3xl md:text-5xl (Outfit 800)
- h3: text-xl (Outfit 700)
- Body: text-base (Outfit 400, leading-relaxed)

## Layout
- Max-width: 1200px centered
- Border-radius: rounded-2xl (cards), rounded-full (buttons/pills) — 2 types
- Each feature section has its own color theme
- Cards: white bg with 4px colored top border
- Mobile: stacked single column

## Section Map
1. **Nav** — white bg, multi-color nav underline on hover (each link a different color), CTA pill in purple
2. **Hero** — white bg, massive text-8xl heading, animated gradient mesh blob behind text (purple→teal→rose CSS animation, NOT gradient text — actual bg element), two CTAs
3. **Feature Section 1 (Purple)** — violet-50 bg, 3 cards with purple top border, purple icon containers
4. **Feature Section 2 (Teal)** — teal-50 bg, large image placeholder left + text right, teal accent
5. **Feature Section 3 (Rose)** — rose-50 bg, 2 cards (different sizes), rose top border, rose icons
6. **Social Proof** — white bg, single testimonial with colorful quotation mark, raw specific feedback
7. **Integration/Partners** — abstract logos in a horizontal scroll, colored borders
8. **CTA Section** — gradient bg (purple→teal), white text, white pill button
9. **Footer** — white bg, simple links

## Key Details
- Animated gradient mesh blob: 300px CSS pseudo-element, filter blur(80px), animated rotation + scale, purple→teal→rose
- Each section clearly different color theme — creates rainbow sectioning
- Cards vary in size within sections (constraint #2)
- Sections have varying padding (constraint #3)
- Bold font (800) for energy and startup feel
- Hover: card lifts with shadow + colored border intensifies
- NO orange as main palette — amber used sparingly in one spot only (constraint #17)
- NO radial glow — constraint #18
- NO gradient text — blob is bg element, not text (constraint #19)
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Feature Section 1 (Purple) -> Feature Section 2 (Teal) -> Feature Section 3 (Rose) -> Social Proof -> Integration -> CTA -> Footer

## Padding Pattern
Hero: py-32 | Features 1: py-24 | Features 2: py-20 | Features 3: py-28 | Social Proof: py-16 | Integration: py-12 | CTA: py-24 | Footer: py-12

## Data from crawled sites
- tavus.io: "Perfectlynineties" retro-futuristic font, 28 colors, maximalist
- kissflow.com: 112px H1, "Graphik Web Super", video hero, 63 sections, 19 colors
- Mapped: multi-color sectioning from kissflow's 19 colors, bold weight from tavus, rotating accent per section, energetic startup feel
