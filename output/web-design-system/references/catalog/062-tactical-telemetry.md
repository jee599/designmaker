---
id: 062
name: Tactical Telemetry
tags: [brutalist, terminal, cybersecurity, monospace, industrial, dark-crt]
tone: dark
inspired_by: [military-radar-displays, old-terminal-uis, aerospace-telemetry]
status: refined
---

# 062 — Tactical Telemetry

## Preview
`samples/062-tactical-telemetry.html`

## Palette
- Background: #0a0a0a (primary black)
- Text: #00ff41 (CRT phosphor green)
- Subtle BG: #111111 (alternating section background)
- Border: #333333 (grid dividers, panel outlines)
- Muted: #666666 (secondary labels, dimmed readouts)
- Accent: #ff3333 (warnings, alerts, CTA buttons only)

## Typography
- Macro: Space Grotesk (700, tight tracking, massive sizing) — headlines, hero text
- Micro: JetBrains Mono (400, small, uppercase) — labels, metadata, navigation, body
- Textural: Georgia (serif, sparse) — rare pull quotes only
- h1: text-5xl md:text-7xl (font-weight 700, letter-spacing -0.02em, uppercase)
- h2: text-2xl md:text-4xl (font-weight 700, uppercase)
- h3: text-sm (font-weight 500, uppercase, tracking-widest, JetBrains Mono)
- Body: text-sm (JetBrains Mono, leading-relaxed)

## Layout
- Strict CSS Grid with visible solid borders (#333333, 1px)
- All 90-degree corners — NO border-radius anywhere
- Compartmentalized panels resembling instrument dashboards
- Nav: fixed top bar, monospace, uppercase, bordered bottom
- Hero: full-width with ASCII frame decorations (┌─┐ └─┘)
- Features: 2x2 or 3-column grid with visible cell borders
- Max width: max-w-6xl

## Key Details

### CRT Scanline Overlay
Applied via `::after` pseudo-element on `body`:
```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 3px
  );
}
```

### ASCII Frame Decoration
Box-drawing characters used as decorative borders around panels:
```
┌─── SECTION TITLE ────────────────────────────────────┐
│                                                       │
│  Content here                                         │
│                                                       │
└───────────────────────────────────────────────────────┘
```
Characters: ┌ ┐ └ ┘ │ ─ ├ ┤ ┬ ┴ ┼

### Typewriter Animation
CSS-only typewriter on hero text via `steps()` and `ch` width:
```css
@keyframes typewriter {
  from { width: 0; }
  to { width: 20ch; }
}
@keyframes blink-caret {
  0%, 100% { border-color: #00ff41; }
  50% { border-color: transparent; }
}
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #00ff41;
  width: 0;
  animation: typewriter 2s steps(20) 0.5s forwards,
             blink-caret 0.8s step-end infinite;
}
```

### Registration Marks
Unicode symbols scattered as visual texture in margins and between sections:
- ◉ (U+25C9) — filled circle target
- ◎ (U+25CE) — bullseye
- ▣ (U+25A3) — square with inner square
- ⊕ (U+2295) — circled plus
- ▪ (U+25AA) — small black square

### CRT Flicker Effect
Subtle opacity oscillation simulating CRT display instability:
```css
@keyframes crt-flicker {
  0%, 100% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.8; }
  94% { opacity: 1; }
  96% { opacity: 0.9; }
  97% { opacity: 1; }
}
body { animation: crt-flicker 4s infinite; }
```

### Design Constraints
- Monospace dominant — serif used only for rare textural contrast
- Red accent (#ff3333) reserved for warnings, alerts, CTAs
- No shadows, no gradients (except scanline overlay), no curves
- All corners 90 degrees — zero border-radius

## Section Map

### 1. Nav (fixed top bar)
- Fixed position, full-width, #0a0a0a background, 1px #333333 bottom border
- Left: site identifier in uppercase JetBrains Mono (e.g., "[PRODUCT_NAME]//SYS")
- Right: nav links uppercase monospace ("MODULES", "TELEMETRY", "DEPLOY", "DOCS")
- Registration mark ◉ before site name as visual decoration
- Timestamp readout on far right (e.g., "UTC 2024.03.15 14:32:07")

### 2. Hero (ASCII-framed, typewriter)
- py-24 md:py-32, #0a0a0a background
- ASCII frame border using ┌─┐ └─┘ characters around the content block
- Top-left corner label: "SYS.INIT" in muted text
- h1: Product name in Space Grotesk 700, uppercase, CRT green (#00ff41)
- Typewriter animation on a subtitle line (e.g., "> INITIALIZING TACTICAL INTERFACE_")
- Below: 3 inline stats in bordered cells ("UPTIME: 99.97%", "LATENCY: 12ms", "NODES: 2,048")
- Registration marks ◎ ▣ scattered in margins

### 3. Status Bar (telemetry readout)
- py-6, #111111 background, top and bottom 1px #333333 borders
- Horizontal scrolling ticker-style readout
- Data points separated by " │ " dividers
- Example: "◉ CORE_TEMP: 42°C │ MEM_ALLOC: 78.3% │ NET_IO: 1.2Gb/s │ THREAT_LVL: LOW │ DISK_RW: 340MB/s"
- All uppercase JetBrains Mono, muted green (#00ff41 at 60% opacity)

### 4. Features (bordered grid panels)
- py-16 md:py-24, #0a0a0a background
- Section header: "// SYSTEM MODULES" in muted comment style
- 2x2 grid on desktop (2 columns), stacked on mobile
- Each cell: 1px #333333 border on all sides, no border-radius
- Cell structure:
  - Top-left: module code (e.g., "MOD.01") in muted text
  - Title: feature name in Space Grotesk 700 uppercase
  - Body: description in JetBrains Mono, muted green
  - Bottom-right: status indicator ("● ONLINE" in green or "▲ ALERT" in red)
- Features: "[Real-time Monitoring]", "[Threat Detection]", "[Auto-Scaling]", "[Data Pipeline]"

### 5. Threat Dashboard (data panels)
- py-16, #111111 background
- Section header: "// THREAT ANALYSIS" in muted comment style
- Left panel (60%): simulated log output with timestamps
  - Lines like "[14:32:07] SCAN COMPLETE — 0 vulnerabilities detected"
  - Color-coded: green for OK, red for warnings
- Right panel (40%): vertical stat bars or key metrics
  - "REQUESTS/SEC: [12,847]"
  - "ERROR_RATE: [0.02%]"
  - "P99_LATENCY: [23ms]"
- All panels have visible 1px #333333 borders

### 6. CTA (red accent)
- py-20, #0a0a0a background
- ASCII frame border around CTA block
- Headline: "DEPLOY NOW" in Space Grotesk 700, #ff3333
- Subtext: command-line style "[your-product] deploy --production" in green monospace
- Button: solid #ff3333 background, black text, uppercase, no border-radius
- Blinking cursor after command text
- Registration marks ⊕ in corners

### 7. Footer (registration marks)
- py-12, #111111 background, top 1px #333333 border
- Three columns: links, links, copyright
- All text JetBrains Mono, muted (#666666)
- Registration marks row: "◉ ◎ ▣ ⊕ ▪" centered as decorative divider above content
- Bottom: "© 2024 [PRODUCT_NAME] // ALL SYSTEMS NOMINAL"

## Background Pattern
#0a0a0a (nav) -> #0a0a0a (hero) -> #111111 (status bar) -> #0a0a0a (features) -> #111111 (dashboard) -> #0a0a0a (CTA) -> #111111 (footer)

## Padding Pattern
nav: py-3 | hero: py-24 md:py-32 | status: py-6 | features: py-16 md:py-24 | dashboard: py-16 | CTA: py-20 | footer: py-12

## Inspiration Sources
- **Military Radar Displays**: Circular sweep patterns, green phosphor on black, grid overlays, alphanumeric readouts in fixed-width fonts, blip markers
- **Old Terminal UIs**: VT100/VT220 character sets, 80-column layouts, box-drawing characters for borders, inverse video for selection, cursor blink
- **Aerospace Telemetry**: MFD (Multi-Function Display) panel layouts, caution/warning color coding (green=nominal, red=alert), compartmentalized data readouts, system status indicators, countdown timers
