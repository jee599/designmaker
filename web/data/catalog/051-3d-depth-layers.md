---
id: 051
name: 3D Depth Layers
tags: [3d, depth, perspective, layers, parallax, cards, dark]
tone: spatial-dark
inspired_by: [basement.studio, obys.agency, aceternity.com]
status: draft
---

# 051 — 3D Depth Layers

## Preview
`samples/051-3d-depth-layers.html`

## Palette
- Background: #09090B (zinc-950)
- Text Primary: #FAFAFA (zinc-50)
- Text Secondary: #71717A (zinc-500)
- Card BG Front: #18181B (zinc-900)
- Card BG Mid: #27272A (zinc-800)
- Card BG Back: #3F3F46 (zinc-700)
- Accent: #3B82F6 (blue-500)
- Accent Hover: #2563EB (blue-600)
- Border: #27272A (zinc-800)
- Subtle Glow: rgba(59,130,246,0.15)

## Typography
- Heading: Syne (700 Bold)
- Body: Inter var (400 Regular)
- Mono: IBM Plex Mono (400)
- h1: text-5xl md:text-7xl (Syne 700, -0.04em tracking)
- h2: text-3xl md:text-5xl (Syne 700, -0.02em tracking)
- h3: text-lg (Syne 600)
- Body: text-base (Inter var 400, leading-relaxed)

## Layout
- CORE CONCEPT: CSS perspective + transform to create layered card stacks, parallax depth on scroll, z-axis movement
- Max-width: 1100px centered
- Border-radius: rounded-xl on cards, rounded-lg on buttons — 2 types
- Cards physically stack in 3D space using CSS perspective(1200px) + rotateX/translateZ
- Hero has 3 layered panels that fan out on scroll
- Feature section uses tilted card perspective on hover

## Section Map
1. **Nav** — fixed, zinc-950 bg with blur, blue accent CTA, glass bottom border
2. **Hero** — 3 stacked cards behind heading (translateZ -40px, -80px, -120px), large heading + subtitle, perspective container. Cards slightly rotated and offset
3. **Layered Feature Cards** — 3 cards side by side, each tilts on hover (rotateY 5deg), subtle shadow depth, icon + title + description
4. **Stacked Showcase** — center column with 3 cards stacked vertically, each overlapping the previous by 30%, creating depth illusion. On scroll, they separate
5. **Stats Inline** — single line of text: "Trusted by [your number] teams across [your count] countries" — no grid, constraint #26
6. **How It Works** — 3 steps in vertical timeline, left-aligned, each step card appears from different z-depth
7. **Testimonial** — dark card with blue left border accent, raw quote, name + role
8. **CTA Section** — large heading, 2 stacked cards behind CTA button for depth effect
9. **Footer** — simple 3-column, zinc-950, muted text

## Key Details
- CSS perspective(1200px) on container, children use translateZ for depth
- Hover: cards tilt with transform: rotateY(5deg) rotateX(-2deg)
- Shadow layers: 3 box-shadows stacked for realistic depth (8px, 24px, 48px spreads)
- Scroll-driven separation of stacked cards via IntersectionObserver
- Different card heights (constraint #2)
- Varying section padding (constraint #3)
- NO orange/warm tones — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Layered Feature Cards -> Stacked Showcase -> Stats Inline -> How It Works -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-32 | Features: py-28 | Showcase: py-20 | Stats: py-12 | How It Works: py-24 | Testimonial: py-16 | CTA: py-28 | Footer: py-12

## Data from crawled sites
- basement.studio: 3D animated sphere with scroll-driven transitions
- obys.agency: Dark portfolio with bold typography and parallax scroll
- aceternity.com: UI library with stunning animated components
- Mapped: CSS perspective-based 3D card stacking, zinc dark palette, blue accent, depth shadows
