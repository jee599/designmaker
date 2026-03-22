---
id: 066
name: Reality Interface
tags: [portfolio, colorful, tech, dark, multi-accent]
tone: dark
inspired_by: [sutera.ch]
status: draft
---

# 066 — Reality Interface

## Preview
`samples/066-reality-interface.html`

## Palette
- Background: #0a0a0a
- Text: #ffffff
- Subtle BG: #111111
- Border: #222222
- Muted: #999999
- Accent: #BCD4FD (blue-lavender)
- Additional: #E3C0A9 (tan), #C9C1FF (lavender), #E88150 (coral), #59E7CA (mint), #91B394 (sage)

## Typography
- Heading: System Sans (600, -0.02em)
- Body: System Sans (400)
- Mono: monospace
- h1: text-5xl md:text-8xl (font-weight 600, letter-spacing -0.02em, line-height 1.0)
- h2: text-3xl md:text-5xl (font-weight 600, tracking-tight)
- h3: text-lg (font-weight 600)
- Body: text-base (leading-relaxed)

## Layout
- Hero: large heading "Reality, By Design" with animated loader
- Features: 9-project responsive grid (3-col desktop, 2-col tablet, 1-col mobile)
- Cards: each project card has a unique accent color
- Buttons: minimal, no heavy styling
- Max width: max-w-7xl

## Key Details
- Unique accent color per project card (6+ distinct colors across the grid)
- GIF-heavy visual language for project previews — motion at rest
- Animated loader with aspect-ratio blocks and filter effects on page entry
- Easter egg interactions with hidden content triggered by user discovery
- Multi-accent color system: each project owns one color from the palette

## Section Order
Nav -> Hero Loader -> Project Grid -> About -> Team -> Contact -> Footer

## Background Pattern
#0a0a0a (hero) -> #0a0a0a (project grid, cards break up space) -> #111111 (about) -> #0a0a0a (team) -> #111111 (contact) -> #0a0a0a (footer)

## Padding Pattern
hero: py-24 md:py-32 | project-grid: py-16 | about: py-20 | team: py-16 | contact: py-20 | footer: py-16

## Material
Holographic cards on obsidian table

## Rhythm
- pacing: medium
- density: balanced

## Anti-patterns
- Do not use a single global accent color — the multi-accent system is the identity; each card must have its own distinct color assignment
- Do not use static thumbnails for project cards — GIF previews and motion-at-rest are essential to the portfolio language

## Reconstruction Hints
- Assign accent colors from the 6-color palette sequentially or by project category; use the accent as card border, label background, and hover highlight simultaneously
- The loader animation on page entry uses filter + aspect-ratio blocks; implement as a full-screen overlay that dissolves after 1.5–2s before revealing the main content
