---
id: 053
name: Outlined Wireframe
tags: [outlined, wireframe, blueprint, line-art, minimal, technical]
tone: technical-outlined
inspired_by: [excalidraw.com, tldraw.com, play.date]
status: draft
---

# 053 — Outlined Wireframe

## Preview
`samples/053-outlined-wireframe.html`

## Palette
- Background: #FAFBFC (cold white)
- Text Primary: #1A1A2E (deep navy)
- Text Secondary: #6C6C8A (muted purple-gray)
- Line/Border: #1A1A2E (deep navy, 1.5-2px strokes)
- Accent: #FF6B35 (burnt coral — warm but not orange-dominant)
- Accent Hover: #E55A2B
- Card BG: transparent (outlined only)
- Fill on Hover: #1A1A2E (invert)
- Dash Pattern: 4px dash, 4px gap (for decorative borders)
- Grid Dot: #D0D0E0

## Typography
- Heading: Architects Daughter (400 Regular — hand-drawn feel)
- Body: Nunito Sans (400 Regular)
- Mono: Source Code Pro (400)
- h1: text-5xl md:text-7xl (Architects Daughter 400, tracking-normal)
- h2: text-3xl md:text-4xl (Architects Daughter 400)
- h3: text-lg (Nunito Sans 700)
- Body: text-base (Nunito Sans 400, leading-relaxed)

## Layout
- CORE CONCEPT: everything is outlined, not filled. Cards are wireframe-style with visible stroke borders, no solid backgrounds. Blueprint/schematic feel
- Max-width: 1100px centered
- Border-radius: rounded-none on cards (sharp = blueprint), rounded-full on CTA pills — 2 types
- Dot grid background pattern (CSS radial-gradient dots)
- Cards: 2px navy border, no fill, dashed decorative borders on some elements
- Feature grid: 3 columns with varying heights, outlined cards

## Section Map
1. **Nav** — cold white bg, hand-drawn logo text (Architects Daughter), burnt coral pill CTA, thin bottom border
2. **Hero** — dot grid background, large hand-drawn heading, body text in Nunito Sans, burnt coral pill CTA + outlined ghost button, decorative dashed border frame around subtitle
3. **Feature Grid** — 3 outlined cards (no fill, 2px navy border), each with SVG line icon (simple strokes), title, description. Different heights. On hover: fills navy, text inverts to white
4. **Blueprint Section** — full-width outlined container with dashed border, inside: centered diagram-like layout showing product flow with SVG arrows connecting boxes
5. **Code Block** — mono text in outlined container, Source Code Pro, navy bg inverted section
6. **Testimonial** — outlined card with dashed left border, raw quote, hand-drawn quotation mark SVG
7. **CTA Section** — centered, large hand-drawn heading, burnt coral pill CTA, decorative corner brackets (SVG) around the section
8. **Footer** — thin top border (2px), 3 columns, muted text, outlined social icon circles

## Key Details
- Dot grid: background-image: radial-gradient(#D0D0E0 1px, transparent 1px); background-size: 20px 20px
- All cards are outlined (no fill), invert on hover
- SVG icons are stroke-only (no fill), matching the wireframe aesthetic
- Dashed borders: border-style: dashed on decorative elements
- Hand-drawn font (Architects Daughter) for headings creates sketch feel
- NO orange as primary palette (burnt coral is an accent, not amber/orange dominant) — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- Different card heights (constraint #2)
- Varying section padding (constraint #3)
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Feature Grid -> Blueprint Section -> Code Block -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-28 | Features: py-24 | Blueprint: py-16 | Code: py-20 | Testimonial: py-24 | CTA: py-20 | Footer: py-12

## Data from crawled sites
- excalidraw.com: Hand-drawn whiteboard with sketch aesthetic
- tldraw.com: Infinite canvas with wireframe tools
- play.date: Playful gaming device with quirky design language
- Mapped: wireframe outlined cards, dot grid bg, hand-drawn font, stroke-only SVG icons, blueprint aesthetic
