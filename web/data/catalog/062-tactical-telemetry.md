---
id: 062
name: Tactical Telemetry
tags: [brutalist, terminal, cybersecurity, monospace, industrial, dark-crt]
tone: dark
inspired_by: [military-radar-displays, old-terminal-uis, aerospace-telemetry]
status: draft
---

# 062 — Tactical Telemetry

## Preview
`samples/062-tactical-telemetry.html`

## Palette
- Background: #0a0a0a
- Text: #00ff41 (CRT green)
- Subtle BG: #111111
- Border: #333333
- Muted: #666666
- Accent: #ff3333

## Typography
- Macro: Space Grotesk (700, tight tracking, massive sizing) — headlines, hero text
- Micro: JetBrains Mono (400, small, uppercase) — labels, metadata, navigation
- Textural: Georgia (serif, sparse) — rare pull quotes only
- h1: text-5xl md:text-7xl (font-weight 700, letter-spacing -0.02em, uppercase)
- h2: text-2xl md:text-4xl (font-weight 700, uppercase)
- h3: text-sm (font-weight 500, uppercase, tracking-widest, JetBrains Mono)
- Body: text-sm (JetBrains Mono, leading-relaxed)

## Layout
- Strict CSS Grid with visible solid borders (#333333)
- All 90-degree corners — no border-radius anywhere
- Compartmentalized panels resembling instrument dashboards
- Nav: fixed top bar, monospace, uppercase, bordered bottom
- Hero: full-width grid with ASCII frame decorations
- Features: 2x2 or 3-column grid with visible cell borders
- Max width: max-w-6xl

## Key Details
- CRT scanline overlay via CSS repeating-linear-gradient on ::after pseudo-element
- ASCII frame characters (┌ ┐ └ ┘ │ ─ ├ ┤) for decorative borders
- Typewriter CSS animation on hero text
- Registration marks (◉ ◎ ▣) as visual texture
- Simulated CRT flicker via subtle opacity animation
- Monospace dominant — serif used only for rare textural contrast
- Red accent (#ff3333) reserved for warnings, alerts, CTAs
- No shadows, no gradients (except scanline overlay), no curves

## Section Order
Nav (fixed top bar) -> Hero (ASCII-framed, typewriter) -> Status Bar (telemetry readout) -> Features (bordered grid) -> Threat Dashboard (data panels) -> CTA (red accent) -> Footer (registration marks)

## Background Pattern
#0a0a0a (hero) -> #111111 (status bar) -> #0a0a0a (features) -> #111111 (dashboard) -> #0a0a0a (CTA) -> #111111 (footer)

## Padding Pattern
hero: py-24 md:py-32 | status: py-6 | features: py-16 md:py-24 | dashboard: py-16 | CTA: py-20 | footer: py-12
