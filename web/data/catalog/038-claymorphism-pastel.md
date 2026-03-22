---
id: 038
name: Claymorphism Pastel
tags: [claymorphism, pastel, 3d, soft, playful, light]
tone: light-playful
inspired_by: [matterapp.com, family.co, rainbow.me]
status: draft
---

# 038 — Claymorphism Pastel

## Preview
`samples/038-claymorphism-pastel.html`

## Palette
- Background: #F8F5FF (soft lavender white)
- Surface: #FFFFFF
- Card BG: #FFFFFF with dual shadows (inner highlight + outer drop)
- Text Primary: #2D1B69 (deep purple)
- Text Muted: #8B7FA8
- Accent Primary: #7C5CFC (vivid purple)
- Accent Secondary: #FF6B9D (coral pink — sparingly, for badges/dots)
- Accent Tertiary: #4ECDC4 (mint — for success states only)
- Clay Shadow Light: rgba(255, 255, 255, 0.8) — inner top-left highlight
- Clay Shadow Dark: rgba(124, 92, 252, 0.15) — outer drop shadow

## Typography
- Heading: Nunito (800 — extra bold, feels rounded/soft)
- Body: Nunito (400)
- h1: text-4xl sm:text-5xl md:text-6xl (font-weight 800, -0.02em tracking)
- h2: text-2xl sm:text-3xl (font-weight 800)
- h3: text-lg (font-weight 700)
- Body: text-base (leading-relaxed)

## Layout
- Hero: centered, large clay-styled "pill" shape behind h1, floating 3D-look geometric shapes (sphere, cube, torus) around text — all CSS-only
- Features: 3 clay cards (1 large spanning 2 cols + 2 small stacked — constraint #2), each with puffy inner shadow
- How It Works: numbered steps in clay pills, connected by dotted line
- Testimonial: single clay card, slightly rotated (-1deg), with avatar circle
- CTA: large clay button with press-down effect on hover
- Max width: max-w-5xl
- Border-radius: rounded-2xl (cards), rounded-full (buttons, pills) — 2 types only

## Clay CSS Recipe
- Card base: background: #fff; border-radius: 1rem; box-shadow: inset 2px 2px 4px rgba(255,255,255,0.8), inset -2px -2px 4px rgba(124,92,252,0.08), 4px 8px 24px rgba(124,92,252,0.12), 0 2px 4px rgba(124,92,252,0.06);
- Button press: on hover, shadow shrinks + translateY(2px) — feels like pressing clay
- Floating shapes: CSS border-radius morphing (60% 40% 70% 30% / 40% 60% 30% 70%) + slow rotation
- Shapes are pure CSS divs with gradient backgrounds and clay shadows

## Key Details
- 3D floating shapes: 3 geometric blobs with animated border-radius morph (8s ease-in-out infinite)
- Shapes use linear-gradient fills: purple→pink, mint→cyan, pink→coral
- Clay press effect: button hover reduces box-shadow spread + adds translateY(2px)
- Cards have dual inner shadows: top-left bright (white) + bottom-right subtle (purple tint)
- Section transitions: gentle wavy SVG divider between sections (not straight line)
- Dotted connector between how-it-works steps
- Nav: fixed, bg-white/90 backdrop-blur-md, clay-styled CTA button with rounded-full
- Constraint #14: all interactive elements have smooth transitions (300ms)
- Constraint #15: feature cards have simple SVG icons with purple stroke
- Constraint #16: Nav has CTA "Start Free"
- NO orange/warm tones — constraint #17
- NO radial glow behind hero — constraint #18
- NO gradient text — constraint #19
- NO big corp names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All animations repeat on scroll (IntersectionObserver removes class on exit)

## Section Order
Nav (light glass + clay CTA) -> Hero (centered text + floating shapes) -> Wavy Divider -> Features (clay cards, 1+2 layout) -> How It Works (clay pills + dots) -> Testimonial (rotated clay card) -> CTA (clay button) -> Footer

## Background Pattern
#F8F5FF (hero) -> #FFFFFF (features) -> #F8F5FF (how-it-works) -> #FFFFFF (testimonial) -> #F0ECFF (CTA, slightly deeper) -> #F8F5FF (footer)

## Padding Pattern
hero: py-28 | features: py-24 | how-it-works: py-20 | testimonial: py-24 | CTA: py-28 | footer: py-12

## Data from crawled sites
- matterapp.com: Purple #25277a accent, PT Serif + Open Sans, 3D geometric shapes, playful
- family.co: Warm beige, blue accent, organic animations, generous spacing
- rainbow.me: SF Pro Rounded, pink #ff54bb + orange accents, rounded corners
- Mapped: purple accent from matterapp, rounded/soft aesthetic inspired by all three, Nunito 800 for soft bold feel
