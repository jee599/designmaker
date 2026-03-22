---
id: 020
name: Bold Colorful
tags: [bold, colorful, studio, typography, vivid]
tone: vibrant
inspired_by: [playground.it, owo.app, 10xdesigners.co]
status: draft
---

# 020 — Bold Colorful

## Preview
`samples/020-bold-colorful.html`

## Palette
- Hero BG: #1F42E3 (saturated electric blue)
- Accent Blue: #4C68E9 (lighter blue for cards)
- Lemon: #E5DC23 (yellow sections)
- Black: #0a0a0a (dark sections, text on light)
- White: #FFFFFF (feature sections)
- Text on Blue: #FFFFFF
- Text on Yellow: #000000
- Text Muted on Blue: rgba(255,255,255,0.70)

## Typography
- Heading: Space Grotesk (900 weight, maximum impact)
- Body: Space Grotesk (400)
- h1: clamp(80px, 12vw, 160px) — font-weight 900, tracking-tighter
- h2: clamp(48px, 7vw, 96px) — font-weight 900, tracking-tighter
- h3: text-3xl (font-weight 700)
- Body: text-lg (leading-relaxed)
- Nav: text-sm (font-weight 500, uppercase, tracking-wide)

## Layout
- Hero: full-screen, electric blue bg, HUGE h1 (3-4 words), single CTA + short blurb
- Marquee strip: black bg, scrolling service list with dot separators
- Work grid: 2-col top (blue + yellow cards), 3-col bottom (mixed colors)
- About: lemon yellow, 2-col split (huge text left, body right)
- Services: black bg, stacked rows with numbers (01-04), hover accent color change
- Testimonial: electric blue, centered large quote
- CTA: lemon yellow, centered huge text + button
- Footer: black, minimal 2-col

## Key Details
- Sharp corners everywhere (rounded-none on cards, no rounded buttons)
- Thick borders: 3-4px solid #000 between sections
- Color blocks: each section a different bold color (blue → black → white → yellow → black → blue → yellow → black)
- Slam-in animations: 200ms cubic-bezier(0.16, 1, 0.3, 1) — fast, impactful
- Marquee: 20s linear infinite scroll of service names
- Card hover: translateY(-6px) with 150ms transition
- Service rows: text color changes on hover (white → electric blue or lemon)
- Nav: fixed, blue bg, black bottom border, CTA "Let's Talk"
- NO border-radius anywhere — design studio aesthetic
- NO gradient text (constraint #19)
- NO radial glow (constraint #18)
- NO 4-column stat grid (constraint #26) — stats inline in about section
- NO warm/orange tones (constraint #17) — blue + yellow + black only
- Animations repeat on every scroll into view

## Section Order
Nav → Hero (Electric Blue) → Marquee (Black) → Work Grid (White) → About (Lemon) → Services (Black) → Testimonial (Blue) → CTA (Lemon) → Footer (Black)

## Background Pattern
#1F42E3 (hero) → #000 (marquee) → #FFF (work) → #E5DC23 (about) → #0a0a0a (services) → #1F42E3 (testimonial) → #E5DC23 (CTA) → #0a0a0a (footer)

## Padding Pattern
hero: py-32 | marquee: py-5 | work: py-28 | about: py-32 | services: py-32 | testimonial: py-32 | CTA: py-36 | footer: py-16

## Data from playground.it (css-analysis.json)
- h1_font_size: 160px, font_weight: 400 → mapped to 900 for maximum impact
- h1_body_ratio: 8.89 (extreme scale)
- body_bg_color: #1F42E3 (direct match)
- card_border_radius: 0 (sharp corners confirmed)
- button_border_radius: 0 (sharp corners confirmed)
- unique_color_count: 6 (restrained vivid palette)
- Font: "PP Neue Montreal Book" → mapped to Space Grotesk (geometric grotesk family)