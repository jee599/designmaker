---
id: 067
name: Elastic Museum
tags: [playful, interactive, museum, physics, light]
tone: light
inspired_by: [museumofmoney.com]
status: draft
---

# 067 — Elastic Museum

## Preview
`samples/067-elastic-museum.html`

## Palette
- Background: #ffffff
- Text: #1a1a1a
- Subtle BG: #f5f5f5
- Border: #e5e5e5
- Muted: #666666
- Accent: #22c55e (green)

## Typography
- Heading: System Sans (700, -0.02em)
- Body: System Sans (400)
- Mono: monospace
- h1: text-5xl md:text-8xl (font-weight 700, letter-spacing -0.02em, line-height 1.0)
- h2: text-3xl md:text-5xl (font-weight 700, tracking-tight)
- h3: text-xl (font-weight 600)
- Body: text-base (line-height 1.6)

## Layout
- Hero: large video with CTA buttons
- Features: card grid with hover scaling
- Cards: article cards with 500ms ease transitions
- Buttons: elastic scaleX/Y on active state
- Max width: max-w-6xl

## Key Details
- Elastic ease-out transitions with custom cubic-bezier on all interactive elements
- 3D perspective flip effects on card hover (rotateY 85deg)
- Color-trail interactive grid canvas using Matter.js physics engine
- Bounce physics on button active states (scale down then overshoot)
- Scrollbar hiding across all browsers (webkit, Firefox, IE)

## Section Order
Nav -> Hero Video -> Exhibits -> Articles -> Gallery Slider -> Visit Info -> Footer

## Background Pattern
#ffffff (hero) -> #f5f5f5 (exhibits) -> #ffffff (articles) -> #f5f5f5 (gallery slider) -> #ffffff (visit info) -> #1a1a1a (footer)

## Padding Pattern
hero: py-0 (full-viewport video) | exhibits: py-20 | articles: py-16 | gallery: py-16 | visit: py-20 | footer: py-16

## Material
Rubber typography bouncing off mint walls

## Rhythm
- pacing: fast
- density: dense

## Anti-patterns
- Do not use slow, linear transitions — all motion must use custom cubic-bezier curves with overshoot (bounce/elastic feel); ease-in-out is too tame for this identity
- Do not flatten the interactivity — the physics canvas and 3D card flips are core to the museum experience, not decorative extras

## Reconstruction Hints
- For the elastic button effect: use transform: scale(0.92) on :active with transition cubic-bezier(0.34, 1.56, 0.64, 1) 300ms — the overshoot creates the bounce
- The Matter.js color-trail canvas sits as a fixed background layer; initialize with circular bodies that respond to mouse velocity and leave colored trails using canvas 2D compositing
