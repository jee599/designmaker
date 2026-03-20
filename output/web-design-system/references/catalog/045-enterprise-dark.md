---
id: 045
name: Enterprise Dark
tags: [dark, enterprise, corporate, premium, AI, video]
tone: dark-enterprise
inspired_by: [scale.com, windsurf.com]
status: draft
---

# 045 — Enterprise Dark

## Preview
`samples/045-enterprise-dark.html`

## Palette
- Background: #0B0F19 (near-black with blue undertone)
- Surface: #111827 (gray-900)
- Card BG: rgba(255, 255, 255, 0.05)
- Card Border: rgba(255, 255, 255, 0.08)
- Card Hover Glow: rgba(79, 143, 247, 0.1)
- Text Primary: #F1F5F9 (slate-100)
- Text Muted: #94A3B8 (slate-400)
- Accent: #4F8FF7 (muted corporate blue)
- Accent Dim: rgba(79, 143, 247, 0.15)

## Typography
- Heading: Space Grotesk (500 Medium)
- Body: Space Grotesk (400 Regular)
- h1: text-5xl md:text-6xl lg:text-7xl (Space Grotesk 500, -0.03em tracking)
- h2: text-3xl md:text-4xl (Space Grotesk 500)
- h3: text-lg (Space Grotesk 500)
- Body: text-base (Space Grotesk 400, leading-relaxed)
- Mono: JetBrains Mono (for small labels/tags)

## Layout
- Max-width: 1200px centered
- Border-radius: rounded-xl (cards), rounded-lg (buttons) — 2 types
- Dark glass cards: bg-white/5 backdrop-blur, border border-white/8
- Mobile: single column, responsive

## Section Map
1. **Nav** — transparent → #0B0F19/90 on scroll, blue CTA "Request Demo"
2. **Hero** — large h1 "Enterprise AI Infrastructure" style, subtitle, two CTAs (primary blue, secondary ghost), video placeholder (dark rect with play button icon, rounded-xl)
3. **Logo Bar** — abstract geometric placeholder logos (squares, circles, triangles), "Trusted by enterprise teams" — NO real company names
4. **Feature Grid** — 2x3 grid of dark glass cards (bg-white/5), each with icon + title + description, hover: border glow blue
5. **Security/Trust Section** — single row: shield icon + "SOC 2 Type II" | lock icon + "[your uptime]% Uptime" | cert icon + "GDPR Compliant" — inline, not 4-col grid
6. **Product Deep Dive** — left text + right dark screenshot mockup, alternating layout
7. **Testimonial** — dark glass card, specific technical feedback, role: "[Your Title], [Your Company]"
8. **CTA Section** — centered, blue button on dark bg, minimal
9. **Footer** — dark, columns with links

## Key Details
- Video placeholder: 16:9 ratio dark rectangle (#111827), centered play button (circle with triangle), subtle blue border
- Dark glass cards: hover transition — border color shifts to blue/15, subtle outer glow
- Enterprise feel: medium weight (500), restrained animations, professional spacing
- Trust section: inline badges, NOT a 4-column stat grid (constraint #26)
- NO orange/warm tones — constraint #17
- NO radial glow behind hero — constraint #18
- NO gradient text — constraint #19
- NO real company names in logos — constraint #22
- NO generic testimonial — constraint #23
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav -> Hero -> Logo Bar -> Feature Grid -> Security/Trust -> Product Deep Dive -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-32 | Logo Bar: py-16 | Features: py-24 | Trust: py-12 | Deep Dive: py-28 | Testimonial: py-20 | CTA: py-24 | Footer: py-12

## Data from crawled sites
- scale.com: "Aeonik", video hero, enterprise AI, serious
- windsurf.com: "tomatoGrotesk" custom font, video hero, coding AI
- Mapped: near-black with blue undertone, muted blue accent, Space Grotesk for premium sans, video placeholder hero, enterprise glass cards
