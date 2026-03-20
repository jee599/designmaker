---
id: 041
name: Split Screen
tags: [split, duotone, contrast, bold, layout-driven]
tone: high-contrast
inspired_by: [cosmos.network, linear.app, nothing.tech]
status: draft
---

# 041 — Split Screen

## Preview
`samples/041-split-screen.html`

## Palette
- Left Half BG: #0A0A0A (near-black)
- Right Half BG: #F5F5F0 (warm off-white)
- Left Text: #FAFAFA (white)
- Left Text Muted: #71717A (zinc-500)
- Right Text: #09090B (zinc-950)
- Right Text Muted: #71717A (zinc-500)
- Accent: #D946EF (fuchsia-500 — pops on both dark and light)
- Accent Muted: rgba(217, 70, 239, 0.15)

## Typography
- Heading: Syne (700 — geometric, bold, modern)
- Body: DM Sans (400)
- h1: text-4xl sm:text-5xl md:text-6xl (Syne 700, -0.03em tracking)
- h2: text-2xl sm:text-3xl (Syne 700)
- h3: text-lg (Syne 600)
- Body: text-base (DM Sans, leading-relaxed)
- Label: text-xs (DM Sans, uppercase, tracking-widest)

## Layout
- CORE CONCEPT: page is persistently split 50/50 vertically (left dark, right light)
- Hero: left side has h1 + description, right side has abstract geometric composition
- Features: left side lists features (text), right side shows feature visuals (one at a time, like tabs)
- Testimonial: left side has quote on dark, right side has avatar/name on light
- CTA: left side has call-to-action text, right side has the button/form
- The split is STRUCTURAL — not just a hero gimmick, it persists through ALL sections
- On mobile (<768px): stacks vertically (dark section above, light below per section)
- Max width: none — full viewport split
- Border-radius: rounded-xl (cards/elements within each half), rounded-full (buttons) — 2 types

## Split Implementation
- Container: flex with two children each 50% width
- Left: bg-[#0A0A0A] text-white
- Right: bg-[#F5F5F0] text-zinc-950
- Sticky behavior: each half scrolls independently if content overflows
- Mobile: flex-col, each half becomes full-width section

## Key Details
- Geometric composition on right hero: 3-4 CSS shapes (circles, rectangles) in fuchsia + zinc with rotate transforms
- Feature tabs: clicking left-side feature text swaps right-side visual (CSS/JS toggle)
- Divider line: 1px fuchsia line at exact center, visible on desktop
- Fuchsia accent appears on BOTH sides: left as bright highlight, right as subtle tint
- Hover: elements on dark side get fuchsia glow, elements on light side get fuchsia underline
- Scroll reveal: elements slide from center outward (left slides left, right slides right)
- Nav: fixed, also split — left half dark nav, right half light nav, joined seamlessly
- Constraint #14: all transitions 300ms ease
- Constraint #15: features have SVG icons in fuchsia stroke
- Constraint #16: Nav CTA (on right side) "Try Now" in fuchsia
- NO orange/warm tones — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO big corp names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All animations repeat on scroll (IntersectionObserver)

## Section Order
Nav (split: dark left / light right) -> Hero (split: text left / geometry right) -> Features (split: list left / visual right) -> Testimonial (split: quote left / meta right) -> CTA (split: text left / action right) -> Footer (full-width dark)

## Background Pattern
Left: #0A0A0A throughout | Right: #F5F5F0 throughout | Footer breaks split: full #0A0A0A

## Padding Pattern
hero: py-32 | features: py-24 | testimonial: py-20 | CTA: py-28 | footer: py-12

## Data from crawled sites
- cosmos.network: Black bg, Future font, modular sections, pill buttons
- linear.app: Sophisticated variable-driven design, animated grid patterns
- nothing.tech: Minimalist tech brand, monochrome, dot-matrix aesthetic
- Mapped: high-contrast split inspired by Nothing's stark aesthetic, geometric shapes from cosmos, Syne font for geometric modernity
