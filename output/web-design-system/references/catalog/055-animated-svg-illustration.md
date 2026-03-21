---
id: 055
name: Animated SVG Illustration
tags: [svg, illustration, animated, playful, motion, light]
tone: playful-illustrated
inspired_by: [duolingo.com, play.date, notion.com]
status: draft
---

# 055 — Animated SVG Illustration

## Preview
`samples/055-animated-svg-illustration.html`

## Palette
- Background: #FFFFFF (white)
- Text Primary: #1E293B (slate-800)
- Text Secondary: #64748B (slate-500)
- Accent Primary: #6366F1 (indigo-500)
- Accent Hover: #4F46E5 (indigo-600)
- Accent Secondary: #F59E0B (amber — used sparingly for SVG illustration fills, NOT as main palette)
- Card BG: #F8FAFC (slate-50)
- Card Border: #E2E8F0 (slate-200)
- SVG Stroke: #1E293B (slate-800)
- SVG Fill Highlight: #6366F1 (indigo-500)
- Success: #22C55E (green-500, for checkmarks in SVGs)

## Typography
- Heading: Outfit (700 Bold)
- Body: Outfit (400 Regular)
- Mono: Fira Code (400)
- h1: text-5xl md:text-7xl (Outfit 700, -0.02em tracking)
- h2: text-3xl md:text-4xl (Outfit 700, -0.01em tracking)
- h3: text-xl (Outfit 600)
- Body: text-base (Outfit 400, leading-relaxed)

## Layout
- CORE CONCEPT: hand-drawn-style SVG illustrations that animate on scroll — paths draw themselves, elements bounce in, icons wiggle. Playful but professional
- Max-width: 1100px centered
- Border-radius: rounded-2xl on cards, rounded-xl on buttons — 2 types
- Each section has an accompanying SVG illustration that animates when it enters viewport
- Hero has a large animated SVG scene (dashboard sketch that draws itself)
- Feature cards have small animated SVG icons

## Section Map
1. **Nav** — white bg, Outfit logo, indigo CTA pill, clean horizontal links, bottom border
2. **Hero** — left: large heading + body + indigo CTA pill + ghost outline button, right: animated SVG illustration (dashboard wireframe that draws its paths on load, then fills with color)
3. **Feature Cards** — 3 cards in row (different heights), each with animated SVG icon (gear spinning, chart bars growing, checkmark drawing), slate-50 bg, slate-200 border
4. **How It Works** — 3 steps horizontal, each with a small animated SVG scene connected by dashed SVG lines between them
5. **Showcase** — large centered SVG illustration that animates piece by piece on scroll (building blocks assembling), below: heading + description
6. **Testimonial** — slate-50 card, indigo left border, raw specific quote, small animated SVG speech bubble icon, name + role
7. **CTA Section** — centered heading + subtitle + indigo CTA, animated SVG confetti/stars around the button on hover
8. **Footer** — white bg, 3-column links, thin top border, muted text, small animated SVG wave at top of footer

## Key Details
- SVG animations: stroke-dasharray + stroke-dashoffset for path drawing effect
- CSS @keyframes for: draw-path (2s), bounce-in (0.6s), wiggle (1.5s loop), grow-bar (1s)
- Each SVG illustration triggers animation when entering viewport via IntersectionObserver
- Animations repeat when re-entering viewport (scroll back up, animations replay)
- SVGs are inline (not img tags) for animation control
- Hand-drawn feel: SVG paths have slight irregularity (not perfectly straight)
- NO orange as main palette (amber only in SVG illustration fills, indigo is primary) — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- Different card heights (constraint #2)
- Varying section padding (constraint #3)

## Section Order
Nav -> Hero -> Feature Cards -> How It Works -> Showcase -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-24 | Features: py-28 | How It Works: py-20 | Showcase: py-24 | Testimonial: py-16 | CTA: py-28 | Footer: py-12

## Data from crawled sites
- duolingo.com: Playful animated mascot and learning interface
- play.date: Quirky design language with playful interactions
- notion.com: Clean design with illustrative elements
- Mapped: inline SVG illustrations with draw-path + bounce animations, indigo accent, Outfit font, playful but professional light theme
