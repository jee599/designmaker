---
id: 048
name: Pastel Gradient Card
tags: [pastel, gradient, cards, light, soft, friendly]
tone: soft-pastel
inspired_by: [stripo.email]
status: draft
---

# 048 — Pastel Gradient Card

## Preview
`samples/048-pastel-gradient-card.html`

## Palette
- Background: #FAFAFA (near-white)
- Card Gradients:
  - Pink→Lavender: #FDE2E4 → #E2E0F4
  - Mint→Sky: #D5F5E3 → #DBEAFE
  - Peach→Rose: #FDE8D0 → #FCE7F3
  - Lavender→Blue: #E8DDFF → #DBEAFE
  - Sky→Mint: #BAE6FD → #D1FAE5
  - Rose→Pink: #FECDD3 → #FDE2E4
- Text Primary: #1F2937 (gray-800)
- Text Muted: #6B7280 (gray-500)
- Accent: #8B5CF6 (violet-500)
- Accent Light: #EDE9FE (violet-100)

## Typography
- Heading: DM Sans (600 SemiBold)
- Body: DM Sans (400 Regular)
- h1: text-5xl md:text-6xl (DM Sans 600, -0.02em tracking)
- h2: text-3xl md:text-4xl (DM Sans 600)
- h3: text-lg (DM Sans 600)
- Body: text-base (DM Sans 400, leading-relaxed)

## Layout
- Max-width: 1100px centered
- Border-radius: rounded-2xl (cards), rounded-full (buttons/pills) — 2 types
- Cards: pastel gradient backgrounds, soft shadows
- Feature grid creates rainbow effect with different gradients
- Mobile: single column, cards full width

## Section Map
1. **Nav** — near-white bg, violet accent CTA pill, clean minimal nav links
2. **Hero** — centered text, animated pastel gradient blob behind heading (filter blur, slow rotation), violet pill CTA + ghost secondary CTA
3. **Feature Cards Grid** — 2x3 grid of cards, each a different pastel gradient (creates rainbow grid), white icon circle on each, title + short description
4. **Product Section** — centered screenshot mockup in a rounded-2xl frame with soft pastel border, light shadow
5. **How It Works** — 3-step horizontal: each step in a pastel pill, connected by dotted lines, step number in violet circle
6. **Testimonial** — pastel lavender→blue gradient card, large quote, specific raw feedback, role placeholder
7. **CTA Section** — centered, violet solid pill button, soft heading
8. **Footer** — light bg, simple links, violet hover

## Key Details
- Pastel gradient blob: 250px pseudo-element, filter blur(60px), animated rotate + scale (15s infinite), opacity 0.6
- Each card a DIFFERENT pastel gradient — no two cards the same
- Cards: rounded-2xl, padding-8, soft shadow (0 4px 20px rgba(0,0,0,0.04))
- Hover: card lifts 4px, shadow deepens slightly
- DM Sans 600 — not heavy, semi-bold for friendly weight
- Pleasant, approachable, not aggressive — "friendly productivity tool"
- Cards are different sizes in grid (constraint #2)
- Sections have varying padding (constraint #3)
- NO orange/warm tones as main — peach gradient is decorative only (constraint #17)
- NO radial glow — constraint #18
- NO gradient text — blob is behind, not on text (constraint #19)
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Feature Cards Grid -> Product Section -> How It Works -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-28 | Cards: py-24 | Product: py-20 | How It Works: py-16 | Testimonial: py-24 | CTA: py-20 | Footer: py-12

## Data from crawled sites
- stripo.email: card-based layout with color variety, email builder UI
- Mapped: pastel gradient cards for rainbow grid effect, DM Sans for friendly feel, soft shadows, approachable aesthetic
