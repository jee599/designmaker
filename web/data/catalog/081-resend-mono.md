---
id: 081
name: Resend Mono
tags: [dark, minimal, code-centric, email, monochrome]
tone: dark
inspired_by: [resend.com]
status: draft
---

# 081 — Resend Mono

## Preview
`samples/081-resend-mono.html`

## Palette
- Background: #000000
- Text: #ededed
- Subtle BG: #111111
- Border: #222222
- Muted: #666666
- Accent: #ffffff

## Typography
- Heading: Inter (600, -0.03em)
- Body: Inter (400)
- Mono: JetBrains Mono
- h1: text-5xl md:text-6xl (font-weight 600, letter-spacing -0.03em, line-height 1.1)
- h2: text-3xl (font-weight 600, letter-spacing -0.02em)
- h3: text-lg (font-weight 500)
- Body: text-base (line-height 1.7)

## Layout
- Hero: center, pure black background, white text, code snippet preview
- Features: minimal grid with code examples
- Cards: dark bg (#111), 1px border (#222), rounded-lg
- Buttons: rounded-md, white solid primary, border outline secondary
- Border-radius: rounded-lg (cards) + rounded-md (buttons)
- Max width: max-w-5xl

## Key Details
- Pure black (#000) background — ultra minimal
- Monochrome palette — white accent on black
- Code snippet as hero visual (not screenshots)
- Email preview UI component showcase
- Inline code blocks with JetBrains Mono
- API documentation feel — clean, structured
- Minimal animations — opacity transitions only
- 1px borders as primary visual separator
- Zero gradients, zero shadows — pure flat
- High contrast for readability

## Section Order
Nav -> Hero (with code) -> Features (code examples) -> Email Preview -> SDK Languages -> API Demo -> Pricing -> CTA -> Footer

## Background Pattern
#000000 (hero) -> #111111 (features) -> #000000 (email preview) -> #111111 (SDK) -> #000000 (API) -> #111111 (pricing) -> #000000 (CTA) -> #000000 (footer)

## Padding Pattern
hero: py-28 md:py-36 | features: py-20 | preview: py-24 | SDK: py-16 | API: py-20 | pricing: py-24 | CTA: py-20 | footer: py-12
