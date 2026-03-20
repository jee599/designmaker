---
id: 049
name: Monochrome Brutalist
tags: [monochrome, brutalist, black, white, typography, grid]
tone: monochrome-structural
inspired_by: [grafbase.com]
status: draft
---

# 049 — Monochrome Brutalist

## Preview
`samples/049-monochrome-brutalist.html`

## Palette
- Background: #FFFFFF (pure white)
- Text: #000000 (pure black)
- Border: #000000 (2-3px thick)
- Card Header BG: #000000
- Card Header Text: #FFFFFF
- Code Block BG: #000000
- Code Block Text: #E5E7EB
- Hover Invert BG: #000000
- Hover Invert Text: #FFFFFF
- NO color at all — purely black and white

## Typography
- Heading: Instrument Sans (400 Regular — thin, not bold)
- Body: Instrument Sans (400 Regular)
- Mono: JetBrains Mono (400)
- h1: text-7xl md:text-8xl (Instrument Sans 400, -0.04em tight tracking)
- h2: text-4xl md:text-5xl (Instrument Sans 400, -0.03em tracking)
- h3: text-xl (Instrument Sans 400)
- Body: text-base (Instrument Sans 400, leading-relaxed)

## Layout
- CORE CONCEPT: pure black/white, thick borders, grid structure — NOT empty minimal
- Max-width: 1200px centered
- Border-radius: rounded-none (sharp corners everywhere), only exception: rounded-sm on code blocks — 2 types
- Thick black borders (2-3px) on cards, sections, buttons
- Feature grid with thick-bordered cards
- Different from eliminated 024 (Monochrome Type): 024 was empty/minimal. 049 has structure — cards, grids, layouts, content

## Section Map
1. **Nav** — white bg, 2px black bottom border, black text logo, black bordered CTA button, hover: fills black + white text
2. **Hero** — massive text-8xl heading (thin weight 400), tight tracking, subtitle below, large black solid CTA button, 2px black border section divider
3. **Feature Grid** — 2x2 grid of thick-bordered cards, each card: black header bar (with white title text) + white body with description, different card heights
4. **Code Section** — black bg code block with light text, monospace, surrounded by 3px black border frame, section heading above
5. **Product Showcase** — full-width image placeholder inside thick black border frame, caption below
6. **Process Steps** — numbered steps in a horizontal row, each in a black-bordered box, number in large text
7. **Testimonial** — thick-bordered card, monospace quote, raw specific feedback
8. **CTA Section** — large black solid button centered, heading above, 2px top border
9. **Footer** — 2px top border, simple text links, copyright

## Key Details
- Typography-driven but WITH grid structure — not empty
- Hover inversion: background fills black, text becomes white (transition 200ms)
- Thick borders (2-3px) create visual weight and structure
- Weight 400 (thin/regular) — brutalist contrast: large size + thin weight
- Tight tracking (-0.04em) on headings for impact
- Cards have different heights in grid (constraint #2)
- Sections have varying padding (constraint #3)
- Pure monochrome — NO color exceptions
- NO orange/warm tones — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26 (2x2 feature grid is structural, not stat grid)
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Feature Grid -> Code Section -> Product Showcase -> Process Steps -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-32 | Features: py-24 | Code: py-16 | Showcase: py-20 | Process: py-28 | Testimonial: py-16 | CTA: py-24 | Footer: py-12

## Data from crawled sites
- grafbase.com: Dark minimal, monochrome approach, developer tool
- Mapped: pushed to pure black/white brutalist, thick borders for structure, thin weight typography for contrast, grid layouts to differentiate from eliminated 024
