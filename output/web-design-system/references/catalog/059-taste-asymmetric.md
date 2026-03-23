---
id: 059
name: Taste Asymmetric
tags: [asymmetric, split-hero, premium, saas, modern]
tone: dark
inspired_by: [floria-landing-page.vercel.app, linear.app, vercel.com]
status: refined
---

# 059 — Taste Asymmetric

## Preview
`samples/059-taste-asymmetric.html`

## Palette
- Background: #0a0a0b (deep zinc, never pure black)
- Subtle BG: #141416 (alternating sections)
- Text Primary: #fafafa (zinc-50)
- Text Secondary: #a1a1aa (zinc-400)
- Text Muted: #71717a (zinc-500)
- Border: #27272a (zinc-800)
- Card BG: rgba(255,255,255, 0.03)
- Card Border: rgba(255,255,255, 0.06)
- Accent: #34d399 (emerald-400, saturation < 80%)
- Accent Hover: #10b981 (emerald-500)
- Accent Subtle BG: rgba(52,211,153,0.08)
- Accent Subtle Border: rgba(52,211,153,0.15)

## Typography
- Heading: Cabinet Grotesk (700, tracking-tighter) — via Google Fonts fallback to system sans
- Body: Geist Sans (400) — via CDN
- Mono: Geist Mono (400) — via CDN
- h1: 3rem md:3.75rem (font-weight 700, letter-spacing -0.04em, line-height 1.05)
- h2: 2.25rem md:2.75rem (font-weight 700, letter-spacing -0.03em)
- h3: 1.25rem (font-weight 600)
- Body: 1rem (leading-relaxed, 1.7 line-height)
- Label/Badge: 0.75rem (font-weight 500)

## Layout
- CORE CONCEPT: asymmetric split hero with left-heavy text and right floating UI mockup; bento feature grid with varied card sizes; generous negative space
- Hero: CSS Grid lg:grid-cols-[1.2fr_0.8fr], left text block + right floating UI card with subtle rotation
- Features: 3-column bento, first card spans 2 cols with taller height, remaining cards vary
- Cards: border border-zinc-800/50, bg rgba(255,255,255,0.03), hover:translate-y-[-2px] with cubic-bezier(0.34, 1.56, 0.64, 1) spring transition
- Buttons: rounded-lg, accent solid primary with active:scale-[0.98] transition-transform duration-150
- Ghost button: border border-zinc-700, hover:border-emerald-400/50, hover:text-emerald-400
- Border-radius: rounded-lg (cards, buttons) + rounded-full (badges, avatars) — 2 types only
- Max width: max-w-7xl (1280px)
- CSS Grid for all layouts, not flexbox grids

## Section Map
1. **Nav** — fixed top, transparent bg → backdrop-blur(12px) + bg-[#0a0a0b]/85 on scroll >50px. Left: logo text. Center: 4 links (zinc-400, hover:white). Right: emerald solid CTA "Get early access". Height 64px.
2. **Hero (Asymmetric Split)** — lg:grid-cols-[1.2fr_0.8fr]. Left: emerald badge "Now in private beta" + h1 "Ship interfaces that feel inevitable" + body text (zinc-400, max-w-lg) + 2 buttons (emerald solid + ghost). Right: floating UI mockup card with 3deg rotation, showing a mock dashboard with skeleton bars and emerald accent elements. Mockup has browser chrome dots. Min-height 100vh, content centered vertically.
3. **Social Proof** — single centered line on #141416 bg. "[number] teams already building with Framekit" with the number in white font-semibold, rest in zinc-500. No logo grid, no cards.
4. **Features (Bento)** — 3-col grid on #0a0a0b. Card 1 spans 2 cols (taller, has inline code snippet). Cards 2-4 are 1 col each with different internal heights. Each card: icon (emerald accent bg) + h3 + body text. Card 5 spans 2 cols at bottom row. Glass-dark style with hover lift.
5. **How It Works** — 3-step horizontal on #141416. Each step: large number (emerald-400, text-5xl, opacity 0.3) + h3 + description. Connected by thin dashed line (zinc-800). No cards, clean layout.
6. **Testimonials** — 2-column asymmetric grid on #0a0a0b. Left: large quote card with emerald left border (3px). Right: 2 stacked smaller quote cards. Each has specific realistic quote, avatar circle (gradient), name, role. No generic praise.
7. **CTA** — gradient bg from #141416 to #0a0a0b. Centered layout. h2 + subtitle + single emerald CTA button. Subtle emerald glow behind button (radial gradient, opacity 0.08).
8. **Footer** — #0a0a0b, border-top zinc-800. 4-column grid: brand + tagline | Product links | Resources links | Company links. Bottom bar: copyright left, social icons right.

## Key Details
- Asymmetric hero grid ratio 1.2:0.8 — left column dominates, right column is lighter visual weight
- Floating mockup card: transform: rotate(3deg), box-shadow with emerald tint at 0.05 opacity, hover removes rotation smoothly
- Spring hover on feature cards: transition uses cubic-bezier(0.34, 1.56, 0.64, 1) for overshoot bounce feel
- Tactile button feedback: active:scale-[0.98] with transition-transform duration-150ms
- Staggered scroll reveal: IntersectionObserver with threshold 0.1, each child gets +100ms delay (max 400ms), opacity 0→1 + translateY 24px→0
- Reveal animations repeat on scroll (remove .visible when not intersecting)
- Badge: rounded-full, emerald bg at 0.08 opacity, emerald border at 0.15 opacity, emerald text
- Nav scroll behavior: transparent → blurred dark bg transition at 50px scroll
- How It Works numbers: font-size 3rem, emerald-400, opacity 0.3, positioned as visual anchor
- Testimonial quotes: specific, technical, with numbers — never "Great product, love it"
- NO purple-blue gradients on backgrounds
- NO equal-height cards (at least 1 card is visually different in size)
- NO equal padding on all sections (min 3 different py values)
- NO gradient text
- NO real company names
- NO round numbers in social proof or testimonials
- NO 4-column stat grid
- NO generic copy ("Supercharge your workflow", "All-in-one platform")
- Border-radius: only rounded-lg and rounded-full across entire page

## Section Order
Nav -> Hero (Asymmetric Split) -> Social Proof -> Features (Bento) -> How It Works -> Testimonials -> CTA -> Footer

## Background Pattern
#0a0a0b (hero) -> #141416 (social proof) -> #0a0a0b (features) -> #141416 (how it works) -> #0a0a0b (testimonials) -> gradient #141416->#0a0a0b (CTA) -> #0a0a0b (footer)

## Padding Pattern
hero: py-0 (full-vh) | social: py-14 | features: py-24 md:py-32 | how-it-works: py-20 md:py-28 | testimonials: py-20 md:py-24 | CTA: py-24 md:py-32 | footer: py-16

## Data from crawled sites
- floria-landing-page.vercel.app: Deep zinc-950 bg, emerald accents, asymmetric grid with md:col-span-5/md:col-start-7, border-white/5 subtle borders, serif+sans font pairing, dramatic footer text at 22vw, selection:bg-emerald-200, mix-blend-screen on decorative elements, opacity-[0.02] background textures
- linear.app: Dark theme with semantic color tokens (--color-text-primary/secondary/tertiary/quaternary), step-based animations with steps(1, end) timing, hardware detection for animation quality (hardwareConcurrency check), tabular-nums for data display, text-wrap: balance on headings, underline-offset-2.5px link styling, 9-level title hierarchy
- vercel.com: Geist font family (mono + sans), dark hero-first approach, mega-menu nav with 5 categories, container queries for responsive scaling, globe visualization with node pulses, framework showcase cards, asymmetric content blocks with mixed typography sizes, Next.js routing patterns
- Mapped: asymmetric split hero from Floria's grid system, deep zinc bg + emerald accent from Floria's palette, spring hover animations inspired by Linear's snappy feel, Geist font family from Vercel, bento feature grid with varied card sizes, glass-dark cards with ultra-subtle borders
