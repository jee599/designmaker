---
id: 069
name: Interfere
tags: [dev-tool, gradient, glassmorphism, dark, multi-color]
tone: dark
inspired_by: [interfere.com]
status: draft
---

# 069 — Interfere

## Preview
`samples/069-interfere.html`

## Palette
- Background: #000000
- Text: #ffffff
- Subtle BG: #111111
- Border: #222222
- Muted: #888888
- Accent: #FF3B00 (orange-red)
- Additional: #F6009D (magenta), #973AC6 (purple), #008EFF (blue)

## Typography
- Heading: Heldane Text (700, serif)
- Body: Inter Variable (400, sans-serif)
- Mono: Berkeley Mono Variable
- h1: text-5xl md:text-7xl (font-weight 700, line-height 1.05)
- h2: text-3xl md:text-5xl (font-weight 700)
- h3: text-xl (font-weight 600)
- Body: text-base (Inter Variable, leading-relaxed)

## Layout
- Hero: radial gradient backdrop with tagline centered
- Features: card-based dashboards
- Cards: glassmorphic (backdrop-filter blur)
- Buttons: rounded-full with gradient fill
- Max width: max-w-[1200px]

## Key Details
- Radial gradient backdrop: blur(100px) bleeding orange → magenta → purple → blue
- Glassmorphism cards with semi-transparent borders (rgba white/10)
- Heldane serif + Inter sans + Berkeley Mono — three-font system for hierarchy
- Dual light/dark theme support with prefers-color-scheme media query
- Marquee animations with gradient fade masks on left/right edges for sponsor logos

## Section Order
Nav -> Hero Gradient -> Features Dashboard -> Code Demo -> Sponsors Marquee -> Pricing -> Footer

## Background Pattern
#000000 (hero, gradient overlay) -> #111111 (features) -> #000000 (code demo) -> #111111 (sponsors) -> #000000 (pricing) -> #111111 (footer)

## Padding Pattern
hero: py-28 md:py-40 | features: py-24 | code-demo: py-20 | sponsors: py-12 | pricing: py-24 | footer: py-16

## Material
Neon ink bleeding through frosted glass

## Rhythm
- pacing: medium
- density: balanced

## Anti-patterns
- Do not reduce to a single accent color — the four-color gradient system (orange, magenta, purple, blue) is the core visual identity and must bleed together in the hero backdrop
- Do not use a single typeface — the three-font system (serif display, sans body, mono code) signals a professional developer tool and cannot be collapsed

## Reconstruction Hints
- The hero backdrop is a single div with multiple radial-gradient layers at 30–40% opacity each, then filter: blur(100px) applied — stack them at different positions (top-left, center-right, bottom-center) for the bleed effect
- Marquee sponsor logos need both CSS animation (translateX) and gradient masks (linear-gradient transparent → opaque → transparent) on the container's ::before and ::after pseudo-elements to create the fade-in/out at edges
