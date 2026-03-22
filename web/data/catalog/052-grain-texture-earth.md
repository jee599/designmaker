---
id: 052
name: Grain Texture Earth
tags: [grain, texture, earth-tones, organic, muted, warm-neutral]
tone: organic-textured
inspired_by: [lush.com, minna-tea.com, granola.ai]
status: draft
---

# 052 — Grain Texture Earth

## Preview
`samples/052-grain-texture-earth.html`

## Palette
- Background: #F5F0EB (warm linen)
- Text Primary: #2C2418 (dark walnut)
- Text Secondary: #6B5E4F (warm stone)
- Accent: #5E7A5E (sage green)
- Accent Hover: #4A664A (darker sage)
- Card BG: #EDE7DF (lighter linen)
- Card Border: #D4C9BC (warm sand border)
- Divider: #C4B8A8
- Footer BG: #2C2418 (dark walnut)
- Footer Text: #D4C9BC

## Typography
- Heading: Fraunces (600 SemiBold, opsz 9-144)
- Body: Source Sans 3 (400 Regular)
- h1: text-5xl md:text-7xl (Fraunces 600, -0.02em tracking)
- h2: text-3xl md:text-4xl (Fraunces 600, -0.01em tracking)
- h3: text-xl (Fraunces 500)
- Body: text-base (Source Sans 3 400, leading-relaxed, text-warm-stone)
- Optical size variation on Fraunces for display vs text

## Layout
- CORE CONCEPT: grain texture SVG filter overlay on the entire page + muted earth tone palette, creating an organic, craft-like feel
- Max-width: 1000px centered (narrower for editorial feel)
- Border-radius: rounded-lg on cards, rounded-full on CTAs — 2 types
- SVG noise filter overlaid at 0.03 opacity across full page
- Sections divided by organic wavy SVG dividers, not straight lines
- Feature layout: 2-column with text left, illustration placeholder right, alternating

## Section Map
1. **Nav** — warm linen bg, Fraunces logo, sage green CTA, simple horizontal links
2. **Hero** — full-width with grain overlay, large Fraunces heading, body text below, sage green pill CTA, decorative botanical SVG line art to the right
3. **Philosophy Section** — centered narrow text block, Fraunces italic pull quote, divider above and below (wavy SVG)
4. **Feature Alternating** — 3 rows alternating: image placeholder left + text right, then reversed. Each row slightly different height. Warm sand borders on image containers
5. **Ingredients Bar** — horizontal scroll of icon + label pairs (leaf, water, sun icons as simple SVG strokes)
6. **Testimonial** — card on warm linen, sage green left border, raw specific quote with an awkward but real compliment, name + context
7. **CTA Section** — dark walnut bg, light text, sage green pill CTA, grain overlay on this section too
8. **Footer** — dark walnut bg, 3-column links, warm sand text, thin top border

## Key Details
- SVG noise filter: <filter><feTurbulence baseFrequency="0.65" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter> at opacity 0.03
- Wavy SVG dividers between sections for organic feel
- NO orange (sage green is the accent — not warm) — constraint #17 satisfied (sage is cool-neutral, not amber/orange)
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- Cards have different heights (constraint #2)
- Sections have varying padding (constraint #3)
- All reveal animations repeat on scroll (IntersectionObserver)
- Hover on cards: subtle translateY(-4px) + shadow increase

## Section Order
Nav -> Hero -> Philosophy -> Feature Alternating -> Ingredients Bar -> Testimonial -> CTA -> Footer

## Padding Pattern
Hero: py-28 | Philosophy: py-20 | Features: py-24 | Ingredients: py-16 | Testimonial: py-20 | CTA: py-28 | Footer: py-12

## Data from crawled sites
- lush.com: Earth tones with high-contrast CTAs
- minna-tea.com: Organic tea brand with earthy warm design
- granola.ai: AI notepad for meetings with warm earthy design
- Mapped: grain texture overlay, warm linen background, sage green accent, Fraunces serif headings, organic wavy dividers
