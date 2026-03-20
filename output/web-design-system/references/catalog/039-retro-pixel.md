---
id: 039
name: Retro Pixel
tags: [retro, pixel, gaming, monospace, 8bit, dark]
tone: dark-retro
inspired_by: [poolsuite.net, composio.dev, curve.fi]
status: draft
---

# 039 — Retro Pixel

## Preview
`samples/039-retro-pixel.html`

## Palette
- Background: #1a1a2e (deep navy, CRT-like)
- Surface: #16213e (slightly lighter navy)
- Card BG: #0f3460 (dark blue panel)
- Card Border: #533483 (muted purple)
- Text Primary: #e0fbfc (bright cyan-white)
- Text Muted: #7b8794
- Accent Primary: #00ff41 (matrix green — terminal feel)
- Accent Secondary: #ff00ff (magenta — retro 80s)
- Scanline Overlay: rgba(0, 0, 0, 0.03) repeating 2px lines

## Typography
- Heading: Press Start 2P (400 — pixel font, NO other weights exist)
- Body: JetBrains Mono (400)
- h1: text-2xl sm:text-3xl md:text-4xl (Press Start 2P — pixel fonts render large, smaller sizes needed)
- h2: text-xl sm:text-2xl (Press Start 2P)
- h3: text-sm (Press Start 2P, uppercase)
- Body: text-sm (JetBrains Mono, leading-relaxed)
- Small: text-xs (JetBrains Mono)

## Layout
- Hero: centered, "booting" text animation (typewriter effect), pixel art decorative border (CSS box-shadow pixel art), blinking cursor
- Features: 3 "window" panels styled like retro OS windows (title bar with dots + content area), asymmetric sizes — constraint #2
- ASCII Art Section: large pre-formatted ASCII logo/graphic in monospace
- Stats: 3 data readouts in terminal-style blocks (NOT 4-col grid — constraint #26), green monospace numbers
- CTA: pixelated button with box-shadow border (no border-radius — sharp pixels)
- Max width: max-w-5xl
- Border-radius: rounded-none EVERYWHERE — pixel aesthetic demands sharp corners

## Key Details
- CRT scanline overlay: repeating-linear-gradient(transparent 50%, rgba(0,0,0,0.03) 50%) with background-size: 100% 4px on body
- Typewriter hero: text reveals character by character (CSS animation with steps())
- Blinking cursor: |  character with opacity toggle (1s steps(1) infinite)
- Retro window panels: title bar with colored dots (close/minimize/maximize), 2px solid border
- ASCII art: pre-formatted text art using █ ▓ ░ characters, green on dark
- Pixel button: box-shadow creates pixel-art border (multiple 2px offsets)
- Hover: elements get 1px translate + shadow shift (like pressing a pixel button)
- CRT flicker: subtle opacity variation (0.97 to 1.0, 0.1s, only on hero)
- Star field: CSS dots on hero bg (like space invaders backdrop)
- Nav: fixed, bg-[#1a1a2e]/95, monospace links, green CTA "[ENTER]"
- Constraint #14: transitions on all interactive elements
- Constraint #15: feature panels have monospace icon representations ([ ] checkmarks, >> arrows)
- Constraint #16: Nav CTA "[ENTER]" in green
- NO orange/warm tones — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO big corp names — constraint #22
- NO generic testimonial — constraint #23
- NO round numbers — constraint #25
- All animations repeat on scroll (IntersectionObserver)

## Section Order
Nav (dark, monospace) -> Hero (typewriter boot + pixel border) -> Features (retro OS windows) -> ASCII Art Section -> Stats (terminal readouts) -> CTA (pixel button) -> Footer (minimal monospace)

## Background Pattern
#1a1a2e + scanlines throughout (monolithic dark, CRT feel)

## Padding Pattern
hero: py-28 | features: py-24 | ascii: py-16 | stats: py-20 | CTA: py-28 | footer: py-12

## Data from crawled sites
- poolsuite.net: Retro 90s OS simulation, pixelated icons, skeuomorphic dialog boxes
- composio.dev: Dark #1e1e1e, Menlo monospace, ASCII art blocks, minimal cards
- curve.fi: DeFi with retro/unique aesthetic, custom illustration style
- Mapped: pixel font from retro trend, ASCII art from composio, CRT aesthetic inspired by poolsuite
