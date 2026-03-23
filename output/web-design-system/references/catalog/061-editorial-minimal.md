---
id: 061
name: Editorial Minimal
tags: [editorial, minimalist, premium, utilitarian, serif, clean]
tone: light
inspired_by: [notion.so, cal.com, linear.app]
status: complete
---

# 061 — Editorial Minimal

## Preview
`samples/061-editorial-minimal.html`

## Palette
- Background Primary: #FFFFFF
- Background Subtle: #F7F6F3 (warm off-white, Notion-style)
- Text Primary: #111111 (off-black, never pure black)
- Text Secondary: #888888
- Text Muted: #ABABAB
- Border: #EAEAEA (single-pixel, structural)
- Accent: #111111 (black as accent — no color accent)
- Accent Hover: #333333
- Badge Border: #EAEAEA
- Badge Text: #666666

## Typography
- Heading: Newsreader (Google Fonts, 500/600 weight, serif)
  - Warm editorial serif. Used for all h1/h2/h3 headings.
  - Italic variant available for emphasis/pull quotes.
  - Pair rationale: serif headings create editorial authority; geometric sans body keeps it utilitarian.
- Body: system-ui, -apple-system, sans-serif (400 weight)
  - System font stack for maximum rendering performance and native feel.
- Mono: ui-monospace, 'SF Mono', monospace
- h1: 3rem / md:4rem (font-weight 600, letter-spacing -0.03em, line-height 1.08)
- h2: 2rem / md:2.5rem (font-weight 600, letter-spacing -0.02em, line-height 1.15)
- h3: 1.25rem (font-weight 500, letter-spacing -0.01em)
- Body: 1rem (line-height 1.7, color #111111)
- Small/Caption: 0.875rem (color #888888)
- Badge: 0.6875rem (uppercase, letter-spacing 0.08em, font-weight 500)

## Layout
- Max width: 1120px (max-w-[1120px])
- Hero: centered single-column, max-w-[720px] for text, generous py-24 md:py-32
- Features: 3-column grid (lg:grid-cols-3), gap-6
- Cards: border 1px solid #EAEAEA, bg-white, rounded-lg (8px), NO shadows at rest
- Cards hover: translate -1px Y, add subtle shadow (0 2px 8px rgba(0,0,0,0.04))
- Buttons primary: bg-#111111 text-white rounded-md (6px), px-6 py-3, no shadows
- Buttons secondary: bg-transparent border 1px #EAEAEA text-#111111, rounded-md
- Badges: uppercase text-[11px] tracking-[0.08em], pill-shaped (rounded-full), border 1px #EAEAEA, px-3 py-1
- Dividers: 1px solid #EAEAEA, used sparingly between major sections

## Section Map

### 1. Nav (bg: #FFFFFF, border-bottom: 1px solid #EAEAEA)
- Fixed top, z-50, height 64px
- Left: product name in Newsreader 600 italic, 1.25rem
- Center (md+): 4 nav links in system sans, 0.875rem, color #888, hover #111
- Right: "Get started" button, bg-#111 text-white, rounded-md, text-sm
- Mobile: hamburger menu (3 horizontal lines, 1.5px stroke)
- On scroll: bg becomes rgba(255,255,255,0.92) + backdrop-blur(12px)

### 2. Hero (bg: #FFFFFF, py-24 md:py-32)
- Badge: pill-shaped "NOW IN BETA" above headline
- h1: Newsreader 600, 3rem/4rem, centered, max-w-[640px], letter-spacing -0.03em
- Subheadline: system sans 1.125rem, color #888, max-w-[480px], centered
- CTA row: primary black button + secondary outline button, gap-3
- Below CTA: small muted text "Free for individuals. No credit card."
- No images, no illustrations — purely typographic hero (Notion/Linear pattern)

### 3. Social Proof Strip (bg: #F7F6F3, py-10)
- Single centered line: "Trusted by 2,400+ teams" in 0.875rem #888
- Below: 5 fictional company wordmarks in #CCCCCC, horizontal row, gap-12
- Wordmarks are text-only (Inter/system sans, font-weight 600, 1rem, opacity 0.4)

### 4. Features Grid (bg: #FFFFFF, py-20 md:py-28)
- Section badge: "FEATURES" pill at top center
- h2: Newsreader, centered, "Everything you need, nothing you don't"
- Subtitle: #888, centered, max-w-[520px]
- 3-column grid (lg), 1-column (mobile), gap-6
- Each card: border #EAEAEA, rounded-lg, p-6 md:p-8
  - Top: 32x32 icon area (simple SVG line icon, stroke #111, stroke-width 1.5)
  - h3: Newsreader 500, 1.25rem, mb-2
  - Body: 0.9375rem, color #888, line-height 1.6
  - Hover: translateY(-1px), shadow 0 2px 8px rgba(0,0,0,0.04)
- 6 feature cards total (2 rows of 3)

### 5. How It Works (bg: #F7F6F3, py-20 md:py-24)
- Section badge: "HOW IT WORKS" pill
- h2: Newsreader, centered
- 3 steps in horizontal row (lg), vertical stack (mobile)
- Each step: number in Newsreader italic (2rem, color #CCCCCC), h3, body text
- Steps connected by horizontal 1px #EAEAEA line on desktop (pseudo-element)
- Step numbers: "01", "02", "03" — monospaced, large, muted

### 6. Testimonials (bg: #FFFFFF, py-20 md:py-24)
- Section badge: "FROM OUR USERS" pill
- Single large testimonial block, centered
- Pull quote in Newsreader italic, 1.5rem/1.75rem, max-w-[640px]
- Em dash + attribution below: name (600 weight), role + company (#888)
- Border-left: 2px solid #111111 on quote block (editorial style)
- Second row: 3 smaller testimonial cards in grid, each with border #EAEAEA

### 7. CTA (bg: #F7F6F3, py-24 md:py-28)
- Centered layout, max-w-[560px]
- h2: Newsreader 600, "Start building today"
- Subtitle: #888, 1 line
- Single primary black button, large (px-8 py-3.5)
- Below: muted small text "No credit card required"

### 8. Footer (bg: #FFFFFF, py-16, border-top: 1px solid #EAEAEA)
- 4-column grid (lg): brand + 3 link groups
- Brand column: product name in Newsreader italic, tagline in #888
- Link groups: "Product", "Resources", "Company" — links in 0.875rem #888
- Bottom row: copyright in 0.8125rem #ABABAB, separated by top border
- No social icons (keeping it editorial-pure)

## Background Pattern
#FFFFFF (nav) -> #FFFFFF (hero) -> #F7F6F3 (social proof) -> #FFFFFF (features) -> #F7F6F3 (how it works) -> #FFFFFF (testimonials) -> #F7F6F3 (CTA) -> #FFFFFF (footer)

## Padding Pattern
nav: h-16 | hero: py-24 md:py-32 | social: py-10 | features: py-20 md:py-28 | how-it-works: py-20 md:py-24 | testimonials: py-20 md:py-24 | CTA: py-24 md:py-28 | footer: py-16

## Animation
- Scroll reveal: translateY(12px) + opacity 0->1, duration 600ms, ease-out
- Stagger: 80ms delay between sibling grid items
- Card hover: translateY(-1px) + shadow, 200ms ease
- Nav: bg transition on scroll, 300ms ease
- No spring physics, no parallax, no scale transforms
- Prefer reduced-motion: disable all transforms, show immediately

## Key Details
- Premium utilitarian minimalism, editorial-style
- Warm monochromatic base (#FFFFFF, #F7F6F3), no gradients or neon
- Serif headings (Newsreader) + system sans body — deliberate typographic contrast
- Off-black text (#111111), never pure black
- Cards with 1px solid #EAEAEA borders only, no box-shadow at rest
- Solid black buttons without shadows
- Pill-shaped uppercase badges for labels
- No bento grids, no glassmorphism, no 3D effects
- No Inter/Roboto/Open Sans (system font stack instead)
- No icon libraries — hand-drawn SVG line icons only

## Crawled Design Patterns

### From notion.com
- Centered typographic hero with dual CTAs (primary + secondary)
- Warm off-white section backgrounds (#F7F6F3 is Notion's exact sidebar color)
- Eyebrow labels above headings (uppercase, small, muted)
- Generous whitespace — hero padding exceeds 120px vertical
- Social proof as horizontal logo strip, desaturated/muted
- System font body (native rendering feel)

### From cal.com
- High-contrast black buttons on white backgrounds
- Clean card borders without shadows (1px solid, light gray)
- Badge/pill components for status indicators
- Footer with multi-column link groups
- Monochromatic color scheme with single accent

### From linear.app
- Semantic color roles over fixed hex values
- Functional, utilitarian aesthetic — no decorative elements
- Restrained animation (subtle opacity + translate only)
- Hierarchical typography with tight letter-spacing on headings
- Text truncation patterns for clean card layouts
- Disabled user-select on UI labels for polish
