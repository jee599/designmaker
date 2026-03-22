---
id: 024
name: Monochrome Type
tags: [typography, monochrome, minimal, portfolio, agency]
tone: minimal
inspired_by: [aristidebenoist.com, springsummer.dk, burocratik.com]
status: draft
---

# 024 — Monochrome Type

## Preview
`samples/024-monochrome-type.html`

## Palette
- Background: #ffffff
- Text: #000000
- Hover Invert BG: #000000
- Hover Invert Text: #ffffff
- ZERO other colors. Pure black and white only.

## Typography
- Heading: Space Grotesk (400 weight — thin large text, NOT bold)
- Body: Space Grotesk (400)
- h1: text-8xl md:text-9xl (128-160px+, font-weight 400, letter-spacing -0.04em)
- h2: text-6xl md:text-7xl (font-weight 400, letter-spacing -0.03em)
- Body: text-lg (leading-relaxed)
- Nav links: text-base (font-weight 400)

## Layout
- ONLY text. No cards, no mockups, no icons, no images.
- Each section: one giant text block, alignment alternates (left, right, center)
- Navigation: fixed position, single-word links "Work" "About" "Contact" spread in corners
- Total DOM elements: <20 (extreme restraint)
- Footer: just an email address in large text
- Max width: max-w-7xl (but text bleeds edge-to-edge with px-8)
- Border-radius: rounded-none (nothing rounded — there are no cards or buttons to round)

## Key Details
- Hover effect: entire section bg inverts to black, text to white, transition-colors duration-500
- Text reveal on scroll: words appear one by one via IntersectionObserver + opacity/translateY
- Each section is min-h-screen or close to it — dramatic use of whitespace
- NO icons, NO SVGs, NO images — pure typography (exception: constraint #15 is N/A since no feature section)
- Nav has CTA: "Contact" link functions as CTA (styled differently — underline on hover)
- Constraint #16: Nav CTA = "Contact" word with border-b-2 on hover
- NO orange/warm tones (constraint #17) — black and white only
- NO radial glow (constraint #18)
- NO gradient text (constraint #19)
- System font fallback chain but Space Grotesk is the personality font (constraint #20)
- All interactive elements have transitions (constraint #14)
- h1 minimum 128px+ (constraint #4 — well above 40px minimum)
- Constraint #24: not empty minimal — each section has a real text block (project description, philosophy statement, contact info)

## Section Order
Nav (fixed corners) -> Hero (giant name/title) -> Work (left-aligned) -> Philosophy (right-aligned) -> Contact (centered) -> Footer (email only)

## Background Pattern
#ffffff throughout — monochrome, no variation

## Padding Pattern
hero: py-0 (full viewport) | work: py-0 (full viewport) | philosophy: py-0 (full viewport) | contact: py-0 (full viewport) | footer: py-8

## Data from crawled sites
- aristidebenoist.com: h1 337.5px, weight 400, letter-spacing -8.1px (-0.024em), total_section_count 3, ZERO cards
- springsummer.dk: h1 386.24px (!), weight 400, Montreal font, h1_body_ratio 27.59 (extreme hierarchy)
- burocratik.com: typography-forward, minimal elements
- Mapped: extreme font sizes, weight 400, tight letter-spacing from real data
