---
id: 043
name: Horizontal Scroll
tags: [horizontal, scroll, sideways, cinematic, wide, dark]
tone: dark-cinematic
inspired_by: [cosmos.network, rainbow.me, audius.co]
status: draft
---

# 043 — Horizontal Scroll

## Preview
`samples/043-horizontal-scroll.html`

## Palette
- Background: #0C0C0C (near-black)
- Surface: #161616
- Panel BG: #1C1C1C
- Panel Border: #2A2A2A
- Text Primary: #EDEDED
- Text Muted: #666666
- Accent: #A78BFA (violet-400 — cinematic purple)
- Accent Glow: rgba(167, 139, 250, 0.2)
- Accent Secondary: #F472B6 (pink-400 — for highlights, sparingly)

## Typography
- Heading: Space Grotesk (500)
- Body: Inter (400)
- Mono: JetBrains Mono (400 — for section numbers)
- h1: text-5xl md:text-6xl lg:text-8xl (Space Grotesk 500, -0.04em tracking)
- h2: text-3xl md:text-5xl (Space Grotesk 500)
- h3: text-xl (Space Grotesk 500)
- Body: text-base (Inter, leading-relaxed)
- Section Number: text-8xl mono, violet-400 at 15% opacity (large decorative)

## Layout
- CORE CONCEPT: vertical scroll is converted to horizontal scroll via CSS transform
- Container: outer wrapper is 100vh fixed, inner wrapper scrolls horizontally
- Sections are laid out as horizontal panels (100vw each or variable widths)
- Total horizontal length: ~5 screens wide (500vw)
- Mobile (<768px): reverts to normal vertical scroll (horizontal is desktop-only)
- Max height: 100vh per panel
- Border-radius: rounded-xl (panels/cards), rounded-full (buttons) — 2 types

## Panel Map (left to right)
1. **Hero Panel** (100vw) — massive h1 text filling viewport, small subtitle below, section number "01" in bg
2. **Features Panel** (120vw) — 3 feature blocks laid out horizontally with generous spacing, each has icon + text
3. **Showcase Panel** (100vw) — large product screenshot placeholder centered, thin violet border
4. **Testimonial Panel** (80vw) — single large quote, serif-sized quotation mark, attribution in mono
5. **CTA Panel** (100vw) — centered call to action with violet button, minimal

## Horizontal Scroll Implementation
- Outer container: height: 500vh (creates scroll room); position: relative
- Inner container: position: sticky; top: 0; height: 100vh; display: flex; overflow: hidden
- Transform: translateX(calc(-100vw * scrollProgress)) — driven by scroll position
- scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
- Scroll progress bar: horizontal thin violet line at bottom of viewport

## Key Details
- Large section numbers: "01" "02" etc., text-8xl mono, positioned absolute, violet at 15% opacity — decorative
- Parallax within panels: bg elements move at 0.5x scroll speed for depth
- Panel transitions: vertical violet line (1px) between panels, fades in/out
- Cursor indicator: custom CSS cursor shows horizontal arrows on desktop ("← →")
- Elements within panels have staggered fade-in as panel scrolls into view
- Cinematic feel: generous whitespace, oversized typography, dramatic scale
- Nav: fixed on top, bg-transparent initially → bg-[#0C0C0C]/90 on scroll, violet CTA
- Scroll indicator on hero: animated horizontal arrow suggesting sideways scroll
- Constraint #14: smooth transitions (300ms)
- Constraint #15: feature blocks have violet-stroke SVG icons
- Constraint #16: Nav CTA "Get Access" in violet
- NO orange/warm tones — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO big corp names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order (horizontal)
Hero Panel -> Features Panel -> Showcase Panel -> Testimonial Panel -> CTA Panel
(All in one horizontal strip; footer appears after horizontal section ends, in normal vertical flow)

## Background Pattern
#0C0C0C throughout all panels — monolithic dark, cinematic

## Padding Pattern
Each panel: px-16 md:px-24 (horizontal padding within panels) | footer: py-12 (vertical, after horizontal section)

## Data from crawled sites
- cosmos.network: Black bg, Future custom font, modular sections, pill buttons
- rainbow.me: Dark navy #0f101a, SF Pro Rounded, pink + orange accents
- audius.co: Decentralized music streaming with creative design
- Mapped: dark cinematic from cosmos, violet accent for differentiation from other dark refs, Space Grotesk for tech feel, horizontal scroll mechanics from scroll-driven-animations.style
