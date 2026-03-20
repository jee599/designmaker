---
id: 042
name: Card Stack
tags: [cards, scroll, stack, depth, z-index, dark]
tone: dark-sophisticated
inspired_by: [linear.app, vercel.com, layerzero.network]
status: draft
---

# 042 — Card Stack

## Preview
`samples/042-card-stack.html`

## Palette
- Background: #09090B (zinc-950)
- Surface: #18181B (zinc-900)
- Card BG: #27272A (zinc-800)
- Card Border: #3F3F46 (zinc-700)
- Text Primary: #FAFAFA (zinc-50)
- Text Muted: #A1A1AA (zinc-400)
- Accent: #38BDF8 (sky-400 — bright on dark)
- Accent Glow: rgba(56, 189, 248, 0.15)

## Typography
- Heading: Outfit (600 — geometric, modern)
- Body: Outfit (300)
- Mono: JetBrains Mono (400 — for labels/tags)
- h1: text-5xl md:text-6xl lg:text-7xl (Outfit 600, -0.03em)
- h2: text-3xl md:text-4xl (Outfit 600)
- h3: text-xl (Outfit 500)
- Body: text-base (Outfit 300, leading-relaxed)
- Tag: text-xs mono, uppercase, tracking-widest

## Layout
- Hero: centered h1 + subtitle, minimal
- CARD STACK SECTION: the centerpiece — 5 large cards that stack on top of each other as you scroll
  - Each card is position: sticky, top: varies (20px increment per card)
  - As you scroll, new cards overlap previous ones
  - Each card scales down slightly when a new card stacks on top (scale 0.95)
  - Cards have different content: feature, testimonial, stat, product showcase, CTA
- Post-stack: simple footer section
- Max width: max-w-4xl (cards) within full-width dark bg
- Border-radius: rounded-2xl (all cards) — 1 type only

## Card Stack Implementation
- Container: tall scrollable div (height: 300vh to create scroll room)
- Each card: position: sticky; top: calc(80px + index * 24px)
- On scroll, previous cards get transform: scale(0.95 - 0.02 * depth) via IntersectionObserver
- Cards have increasing z-index (card 1 = z-10, card 5 = z-50)
- Shadow deepens per card layer: card 1 has lightest shadow, card 5 has deepest

## Card Content Map
1. **Feature Card** — icon grid (3x2) with sky-400 accent icons + short descriptions
2. **Showcase Card** — large product UI placeholder (dark dashboard mockup)
3. **Testimonial Card** — single quote with monospace attribution
4. **Stats Card** — 3-column monospace readout (NOT 4-col — constraint #26), placeholder values [N]
5. **CTA Card** — centered h2 + sky-400 button + subtle tagline

## Key Details
- Card scale-down animation: when next card enters viewport, previous card smoothly scales to 0.95
- Card shadow: 0 8px 32px rgba(0,0,0,0.4), increases per layer
- Sky-400 accent: used for icons, buttons, active states, and card number badges
- Card number badge: top-left corner, small mono label "01" "02" etc. in sky-400
- Each card has a thin top border (1px sky-400 at 20% opacity) for separation
- Background: subtle noise texture overlay (CSS gradient noise) at 2% opacity
- Nav: fixed, bg-zinc-950/80 backdrop-blur-md, sky CTA "Explore"
- Scroll progress indicator: thin sky-400 line at very top, width grows with scroll %
- Constraint #14: smooth transitions on all interactive elements (300ms)
- Constraint #15: feature card has SVG icons with sky stroke
- Constraint #16: Nav CTA in sky-400
- NO orange/warm tones — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO big corp names — constraint #22
- NO generic testimonial — constraint #23
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Nav (dark glass + sky CTA) -> Hero (centered minimal) -> Card Stack Section (5 sticky cards) -> Footer (minimal dark)

## Background Pattern
#09090B throughout — monolithic dark with noise texture

## Padding Pattern
hero: py-32 | card-stack container: py-0 (height-driven) | footer: py-12

## Data from crawled sites
- linear.app: Sophisticated variable-driven design, animated grid patterns, semantic colors
- vercel.com: Dark/light mode, developer-first minimal, no ornaments
- layerzero.network: Dark #1e1e1e, sharp corners, monospace elements
- Mapped: zinc scale from vercel's dark mode, sky accent for differentiation, Outfit font for geometric modernity, card stack interaction from scroll-driven-animations.style
