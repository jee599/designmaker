---
id: 047
name: Code Editor Theme
tags: [dark, code, IDE, editor, developer, syntax]
tone: dark-ide
inspired_by: [codeium.com, tabnine.com, windsurf.com]
status: draft
---

# 047 — Code Editor Theme

## Preview
`samples/047-code-editor.html`

## Palette
- Background: #1E1E2E (VS Code Catppuccin-style dark)
- Surface: #181825 (deeper dark)
- Editor BG: #1E1E2E
- Sidebar: #11111B (darkest)
- Tab Bar: #181825
- Tab Active: #1E1E2E
- Tab Inactive: #181825
- Line Numbers: #45475A
- Text Primary: #CDD6F4 (light lavender)
- Text Muted: #6C7086 (overlay0)
- Accent Blue: #89B4FA (VS Code blue)
- String Orange: #FAB387 (peach — for syntax strings)
- Keyword Purple: #CBA6F7 (mauve — for syntax keywords)
- Function Green: #A6E3A1 (green — for syntax functions)
- Comment Gray: #585B70 (surface2)

## Typography
- Heading: JetBrains Mono (700 Bold)
- Body: JetBrains Mono (400 Regular)
- Code: JetBrains Mono (400)
- h1: text-4xl md:text-5xl lg:text-6xl (JetBrains Mono 700, -0.02em tracking)
- h2: text-2xl md:text-3xl (JetBrains Mono 700)
- h3: text-lg (JetBrains Mono 600)
- Body: text-sm md:text-base (JetBrains Mono 400, leading-relaxed)

## Layout
- CORE CONCEPT: entire page looks like an IDE/code editor
- Tab bar at very top (file tabs)
- Optional sidebar (file explorer) on desktop
- Max-width: full-width IDE look
- Border-radius: rounded-lg (panels/cards), rounded-md (buttons/tabs) — 2 types
- Mobile: sidebar hidden, single column

## Section Map
1. **Tab Bar** (acts as nav) — file tabs: "index.tsx", "features.tsx", "pricing.tsx", active tab highlighted, CTA as a "Run" button (green)
2. **Hero (Editor Panel)** — full code editor mockup: line numbers on left, syntax-highlighted "code" that is actually marketing copy, minimap sidebar on right, cursor blink animation
3. **Features (Extensions Panel)** — each feature styled as an IDE extension card: icon + name + description + "Install" button, 3 extension cards
4. **Terminal Output** — dark terminal section (#11111B), green prompt text, "building features..." output lines that type in
5. **Code Comparison** — side-by-side panels (before/after or with/without), diff-style with green(+) and red(-) lines
6. **Testimonial** — styled as a code comment block (// comment syntax), specific raw feedback
7. **CTA** — terminal prompt style: `$ [your-product] init --start`, blue accent button
8. **Footer** — status bar style (VS Code bottom bar), file info, encoding, line count

## Key Details
- Line numbers: sequential, #45475A color, monospace
- Syntax highlighting: keywords in purple, strings in orange, functions in green, comments in gray
- Cursor: blinking animation (1s infinite), thin line
- Minimap: narrow sidebar with abstract colored blocks (represents code structure)
- Tab underline: blue accent for active tab
- Terminal typing animation: lines appear sequentially
- Different from 003 (terminal theme): 003 is green-on-black terminal. 047 is full IDE with syntax colors, tabs, sidebar, minimap
- Different from 006 (AI product): 006 has typing animation but is a product landing. 047 is IDE-themed throughout
- NO orange as main palette (peach is syntax only) — constraint #17
- NO radial glow — constraint #18
- NO gradient text — constraint #19
- NO real company names — constraint #22
- NO generic testimonial — constraint #23
- NO 4-col stat grid — constraint #26
- NO round numbers — constraint #25
- All reveal animations repeat on scroll (IntersectionObserver)

## Section Order
Tab Bar -> Hero (Editor) -> Features (Extensions) -> Terminal Output -> Code Comparison -> Testimonial -> CTA -> Footer (Status Bar)

## Padding Pattern
Hero: py-0 (full IDE look) | Features: py-24 | Terminal: py-16 | Comparison: py-20 | Testimonial: py-16 | CTA: py-24 | Footer: py-0 (status bar)

## Data from crawled sites
- codeium.com: "tomatoGrotesk" custom font, video hero, AI coding assistant
- tabnine.com: AI code completion, developer-focused
- windsurf.com: AI coding with IDE integration
- Mapped: full IDE aesthetic from actual coding tools, Catppuccin-inspired color scheme, JetBrains Mono throughout, editor/terminal/diff panels
