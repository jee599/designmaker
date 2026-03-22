---
id: 064
name: Neon Cinema
tags: [minimal, cinema, photography, dark]
tone: dark
inspired_by: [neonrated.com]
status: draft
---

# 064 — Neon Cinema

## Preview
`samples/064-neon-cinema.html`

## Palette
- Background: #000000
- Text: #ffffff
- Subtle BG: #111111
- Border: #333333
- Muted: #666666
- Accent: #ffffff

## Typography
- Heading: System Sans (-apple-system, SF Pro) (500, -0.02em)
- Body: System Sans (400)
- Mono: monospace
- h1: text-5xl md:text-7xl (font-weight 500, letter-spacing -0.02em, line-height 1.05)
- h2: text-3xl md:text-5xl (font-weight 500, letter-spacing -0.02em)
- h3: text-lg (font-weight 500)
- Body: text-base (leading-relaxed)

## Layout
- Hero: full-width film imagery with CTA
- Features: responsive film card grid
- Cards: image-forward with hover states
- Buttons: minimal text links
- Max width: max-w-7xl

## Key Details
- Custom cursor with state-based styling (default, hover, drag states)
- Lenis smooth scroll library for inertia-based scrolling
- Framer Motion page transitions between routes
- SVG ornamental flourishes between sections as visual separators
- Photography-centric grid layout with high-contrast imagery

## Section Order
Nav -> Hero Film -> In Theaters -> Coming Soon -> Watch Now -> Shop -> Footer

## Background Pattern
#000000 (hero) -> #111111 (in theaters) -> #000000 (coming soon) -> #111111 (watch now) -> #000000 (shop) -> #111111 (footer)

## Padding Pattern
hero: py-32 md:py-40 | in-theaters: py-20 | coming-soon: py-20 | watch-now: py-24 | shop: py-20 | footer: py-16

## Material
Film noir projected on matte black

## Rhythm
- pacing: slow
- density: sparse

## Anti-patterns
- Do not use colored accents or gradients — the entire palette is black, white, and grey; color comes only from film imagery
- Do not use heavy card shadows or glassmorphism — surfaces are flat matte, not reflective

## Reconstruction Hints
- The custom cursor is the primary interactive flourish; implement with CSS custom properties and JS mousemove to track state transitions between idle, hover-link, and drag-scroll
- SVG ornamental dividers between sections carry the editorial identity; use thin line-art flourishes (not horizontal rules) at 10–15% opacity
