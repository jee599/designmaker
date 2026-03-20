---
id: 021
name: Warm Scroll Story
tags: [warm, scroll, luxury, editorial, nature]
tone: luxury
inspired_by: [verholy.com, hadaka.jp, homesociete.ca]
status: draft
---

# 021 — Warm Scroll Story

## Preview
`samples/021-warm-scroll.html`

## Palette
- Background: #122223 (deep forest)
- Surface: #1a1714 (warm dark, alternate sections)
- Accent: #c4a97d (muted gold)
- Text Primary: #e8dcc8 (warm cream)
- Text Muted: rgba(232, 220, 200, 0.50)
- Text Dim: rgba(232, 220, 200, 0.20)
- Footer BG: #0d1a1b (deepest dark)
- Overlay: rgba(18, 34, 35, 0.85-0.95) (image overlays)

## Typography
- Heading: Cormorant Garamond (300 weight, elegant serif)
- Body: DM Sans (400)
- h1: clamp(48px, 8vw, 96px) — font-weight 300, slight tracking
- h2: clamp(36px, 5vw, 72px) — font-weight 300
- h3: text-3xl md:text-4xl — font-weight 300
- Body: text-base (leading-relaxed)
- Labels: DM Sans text-sm uppercase tracking-widest (gold)
- Nav: Cormorant Garamond text-2xl, tracking-widest, weight 300

## Layout
- Full-height sections (min-h-screen each) — one idea per screen
- Hero: full screen, bg image (warm gradient overlay), text at bottom left
- Story section: centered text only, massive whitespace, single thought
- Full-bleed image section: parallax-like fixed bg, centered text overlay
- Experience: 2-col alternating (text + image), reversed on second block
- Gallery: horizontal scroll of tall (2:3 ratio) image placeholders
- Details: 3-col sparse info (rooms, dining, wellness)
- CTA: full-screen dark overlay, centered elegant text
- Footer: ultra-minimal (logo + address + 2 social links)

## Key Details
- Parallax effect: background-attachment: fixed on image sections
- Warm gradient overlays: linear-gradient with forest/brown tones for image placeholders
- Slow animations: 1000-1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Reveal line: gold 1px line animates from 0 to 80px width (1200ms)
- Minimal nav: just logo (left) + "Menu" text + hamburger icon (right)
- Full-screen menu overlay: dark forest bg (97% opacity), 500ms fade
- Menu links: huge serif text (text-5xl md:text-7xl), gold on hover
- Horizontal gallery: scroll-snap, no scrollbar, tall image cards
- CTA button: outlined (border gold/40), fills gold on hover with 500ms transition
- NO bright colors — everything muted, warm, natural
- NO orange/warm MAIN palette (constraint #17) — gold is accent only, forest green is primary
- NO radial glow (constraint #18)
- NO gradient text (constraint #19)
- NO 4-column stat grid (constraint #26) — info in 3-col sparse layout with label/heading/body
- Animations repeat on every scroll into view

## Section Order
Nav (fixed) → Hero (Full Screen Image) → Story (Text Only) → Image (Full Bleed) → Experience (2-col Alt) → Gallery (H-Scroll) → Details (3-col) → CTA (Full Screen) → Footer

## Background Pattern
#122223 with warm overlay (hero) → #122223 (story) → warm gradient (image) → #1a1714 (experience) → #122223 (gallery) → #1a1714 (details) → #122223 with overlay (CTA) → #0d1a1b (footer)

## Padding Pattern
hero: pb-20 md:pb-28 | story: py-32 | image: min-h-screen | experience: py-32 | gallery: py-32 | details: py-32 | CTA: min-h-screen | footer: py-16

## Data from verholy.com (css-analysis.json)
- h1_font_size: 76px, font_weight: 400
- h1_body_ratio: 4.75 (elegant hierarchy)
- body_bg_color: #122223 (direct match — deep forest)
- Font: "kudryashev" (elegant serif) → mapped to Cormorant Garamond
- Body font: "apercu pro" → mapped to DM Sans (clean sans)
- button_border_radius: 0 (sharp)
- hero_type: fullscreen, has_real_photo: true
- has_animation: true, has_testimonials: true
- unique_color_count: 8 (restrained warm palette)