---
id: 044
name: Ultra Bold Round
tags: [rounded, bold, playful, chunky, purple, white]
tone: playful-bold
inspired_by: [redocly.com, storylane.io]
status: draft
---

# 044 — Ultra Bold Round

## Preview
`samples/044-ultra-bold-round.html`

## Palette
- Background: #FFFFFF (pure white)
- Surface: #F5F3FF (violet-50)
- Card BG: #FFFFFF
- Card Shadow: 0 8px 32px rgba(124, 58, 237, 0.08)
- Text Primary: #1E1B4B (indigo-950)
- Text Muted: #6B7280 (gray-500)
- Accent: #7C3AED (violet-600)
- Accent Light: #EDE9FE (violet-100)

## Typography
- Heading: Plus Jakarta Sans (800 ExtraBold)
- Body: Plus Jakarta Sans (500 Medium)
- h1: text-6xl md:text-7xl lg:text-8xl (Plus Jakarta Sans 800, -0.02em tracking)
- h2: text-4xl md:text-5xl (Plus Jakarta Sans 800)
- h3: text-xl (Plus Jakarta Sans 700)
- Body: text-base (Plus Jakarta Sans 500, leading-relaxed)

## Layout
- CORE CONCEPT: 32px border-radius on EVERYTHING — cards, buttons, sections, images
- All containers: rounded-[32px]
- Buttons: rounded-full (pill shape)
- Cards: rounded-[32px] with playful shadow
- Max-width: 1200px centered
- Border-radius: rounded-[32px] (cards/sections), rounded-full (buttons/pills) — 2 types
- Mobile: stacked, rounded maintained

## Section Map
1. **Nav** — white bg, pill-shaped nav items, violet CTA pill button
2. **Hero** — massive text-8xl bold heading, violet gradient word highlight, rounded-[32px] product mockup below
3. **Logo Bar** — abstract placeholder logos, "Trusted by [your clients]" — NO real company names
4. **Features Grid** — 3 cards (different sizes: 1 large + 2 stacked), rounded-[32px], colorful icon containers (violet bg circles), bouncy hover scale(1.05)
5. **Product Showcase** — full-width rounded-[32px] screenshot container with violet border accent
6. **Testimonial** — single large quote in rounded-[32px] violet-50 bg card, specific raw feedback, NOT generic praise
7. **CTA Section** — violet-50 bg rounded-[32px] container, large heading, pill CTA
8. **Footer** — simple, links + copyright

## Key Details
- Bouncy micro-animations: hover scale(1.05) with cubic-bezier(0.34, 1.56, 0.64, 1) spring ease
- Icon containers: 56px circles with violet-100 bg, violet-600 SVG icons
- Cards have varying sizes in grid — NOT all same size (constraint #2)
- Sections have varying padding — py-16, py-24, py-32 (constraint #3)
- NO orange/warm tones — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO big corp names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Logo Bar -> Features Grid -> Product Showcase -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-32 | Logo Bar: py-12 | Features: py-24 | Showcase: py-20 | Testimonial: py-28 | CTA: py-16 | Footer: py-12

## Data from crawled sites
- redocly.com: 92px H1, ultra-bold 800, 32px card radius — extremely rounded
- storylane.io: 96px H1, "Interdisplay", playful bold
- Mapped: extreme rounded-[32px] everywhere, ultra-bold 800 weight, vibrant purple accent, bouncy hover animations
