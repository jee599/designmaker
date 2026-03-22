---
id: 022
name: Dashboard Dark
tags: [dashboard, dark, ui, product, app]
tone: dark
inspired_by: [reflect.app, status.app, phantom.app, mobbin.com]
status: draft
---

# 022 — Dashboard Dark

## Preview
`samples/022-dashboard-dark.html`

## Palette
- Background: #0c0c0e (near-black with slight warmth)
- Surface Light: #141418
- Surface Lighter: #1c1c22
- Accent: #8b5cf6 (soft muted purple)
- Accent Muted: #7c3aed
- Border: rgba(255, 255, 255, 0.08)
- Border Hover: rgba(255, 255, 255, 0.15)
- Text Primary: #e4e4e7
- Text Muted: #71717a
- Text Dim: #52525b
- Positive: #22c55e
- Negative: #ef4444

## Typography
- UI: Inter (300-700) — for all UI elements
- Data: JetBrains Mono (400-600) — for numbers, timestamps, codes
- h1: text-2xl (font-weight 600, tracking-tight) — dashboard title, not massive
- Card title: text-base (font-weight 600)
- Body: text-sm (font-weight 400)
- Data/numbers: JetBrains Mono text-3xl (font-weight 600) for big metrics
- Labels: Inter text-xs (font-weight 600, uppercase, tracking-wider)
- Timestamps: JetBrains Mono text-xs

## Layout — DASHBOARD (not landing page)
- Fixed sidebar (240px): dark bg, nav icons + labels, user section at bottom
- Top bar: sticky, backdrop-blur, search (cmd+K), notification bell, avatar
- Main content: padded card grid
  - 3-col metric cards (Revenue, Users, Conversion)
  - 5-col split: Revenue chart (3 cols) + Quick Stats (2 cols)
  - 5-col split: User table (3 cols) + Activity feed (2 cols)

## Card Map
1. Revenue Card (1/3) — mono big number, green/red delta badge, vs-last-period text
2. Active Users Card (1/3) — mono big number, delta badge
3. Conversion Card (1/3) — mono percentage, delta badge
4. Revenue Chart (3/5) — CSS bar chart (7 bars), monthly/weekly toggle, animated grow
5. Quick Stats (2/5) — key:value pairs with horizontal dividers (Avg Session, Bounce Rate, Pages/Session, Top Channel, MRR Growth)
6. User Table (3/5) — 5 rows (avatar initial + name + email, plan, status dot + label, monospace spend)
7. Activity Feed (2/5) — 6 events with colored icon boxes, event text, mono timestamp

## Key Details
- Sidebar: w-60, dark bg, grouped nav (Overview: Dashboard/Analytics/Users; Manage: Messages/Settings), active state with purple tint
- Sidebar user: avatar initials, name, email at bottom
- Top bar: backdrop-blur-xl, bg-surface/80, search with cmd+K hint, notification with purple pulse dot
- Cards: bg-white/3, border-white/8, rounded-xl (16px), hover to bg-white/6 + brighter border
- Bar chart: CSS bars with staggered growBar animation (600ms), purple fill, hover brightens
- Table: alternating nothing (dark enough), hover row bg, status dots with pulse animation
- Activity feed: colored icon boxes (green/purple/gray/red), monospace timestamps
- Numbers: ALL use JetBrains Mono, all use [N] placeholders
- Live pulse: revenue/user numbers pulse opacity (2s ease infinite)
- NO orange/warm tones (constraint #17)
- NO radial glow (constraint #18)
- NO gradient text (constraint #19)
- NO 4-column stat grid (constraint #26) — metrics in 3-col cards (different content each), stats in key:value list
- NO Inter as sole font (constraint #5) — paired with JetBrains Mono for data
- Animations repeat on every scroll into view
- Custom scrollbar: 6px, transparent track, white/10 thumb

## Section Order
Sidebar (fixed) + Top Bar (sticky) → Metric Cards (3) → Chart + Stats (2) → Table + Activity (2)

## Background Pattern
#0c0c0e everywhere (sidebar, main), cards use rgba(255,255,255,0.03-0.06)

## Padding Pattern
sidebar: px-3 py-2 | topbar: px-6 py-3 | main: p-6 lg:p-8 | cards: p-6

## Data from reflect.app (css-analysis.json)
- h1_font_size: 72px, font_weight: 500
- body_bg_color: #030014 (very dark, matched to #0c0c0e)
- Font: "AeonikPro" (headings) + "Inter V" (body) → mapped to Inter (unified UI) + JetBrains Mono (data)
- has_backdrop_blur: true (confirmed glass topbar)
- is_dark_theme: true
- unique_color_count: 17 (rich but dark palette)
- container_max_width: 1296px → sidebar + fluid main