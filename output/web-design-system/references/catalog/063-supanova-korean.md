---
id: 063
name: Supanova Korean
tags: [korean, saas, dark, cyan, asymmetric, premium, analytics]
tone: dark
inspired_by: [toss.im, channel.io, wadiz.kr]
status: verified
---

# 063 — Supanova Korean

## Preview
`samples/063-supanova-korean.html`

## Palette
- Background: #09090b (zinc-950)
- Text: #fafafa
- Subtle BG: #18181b (zinc-900)
- Border: #27272a (zinc-800)
- Muted: #71717a (zinc-500)
- Accent: #22d3ee (cyan-400)
- Accent Dim: rgba(34, 211, 238, 0.08)
- Accent Glow: rgba(34, 211, 238, 0.12)
- Accent Hover: #06b6d4 (cyan-500)

## Typography
- Font CDN: https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css
- Korean Heading: Pretendard (700, leading-tight, word-break: keep-all, letter-spacing: -0.02em)
- Korean Body: Pretendard (400, leading-relaxed 1.7, word-break: keep-all)
- English Product Name: system monospace for "Spark" branding
- h1: 3rem / sm:3.75rem / md:4.5rem (font-weight 700, line-height 1.1)
- h2: 2.25rem / sm:3rem (font-weight 700, line-height 1.15)
- h3: 1.25rem (font-weight 600)
- Body: 1rem (line-height 1.7)
- Subtext/caption: 0.875rem (color: #71717a)

## Layout
- DESIGN_VARIANCE: 8 — no two sections share the same layout pattern
- Max width: max-w-7xl (1280px) mx-auto, px-6
- Responsive: mobile-first, breakpoints at 640px (sm), 768px (md), 1024px (lg)

## Section Map (8 unique layouts)

### 1. Nav (sticky)
- Fixed top, z-50, transparent -> rgba(9,9,11,0.85) + backdrop-blur(16px) on scroll
- Logo "Spark" left, nav links center (hidden mobile), CTA button right
- Nav links: 기능, 고객사례, 요금제, 블로그
- Height: 64px, border-bottom on scroll
- Inspired by: Channel.io 68px nav with backdrop blur

### 2. Hero — Asymmetric Split (60/40)
- Layout: grid md:grid-cols-5, left 3cols text + right 2cols dashboard mockup
- Left side: badge pill ("2,400개 팀이 선택한 분석 플랫폼"), h1 headline, body paragraph, two CTA buttons inline
- Right side: dashboard mockup card with browser chrome dots, chart visualization (SVG bar chart + line), metric cards
- Dashboard mockup: glass card with cyan glow box-shadow, contains fake analytics UI
- Background: subtle radial gradient blob (cyan, 15% opacity, blur 120px) behind dashboard
- Min-height: 100dvh, vertically centered
- CTAs: "무료로 시작하기" (primary cyan), "제품 둘러보기" (ghost border)

### 3. Social Proof — Metric Counters + Logo Strip
- Layout: horizontal row of 4 metric stat boxes, then logo ticker below
- Metrics: "2,400+" (활성 팀), "1.2억" (월간 데이터 포인트), "99.9%" (업타임), "4.8" (평균 평점)
- Each metric: large number (accent color) + label below (muted)
- Logo strip: 6 fake company logos (text-based), grayscale, horizontal scroll on mobile
- Background: #18181b
- Inspired by: Toss social proof pattern

### 4. Features — Alternating 2-Column Rows (3 features)
- Layout: each feature is a 2-col grid, alternating text-left/image-right and text-right/image-left
- Feature 1 (text left): "실시간 데이터 파이프라인" — streaming data visualization mockup
- Feature 2 (text right): "노코드 대시보드 빌더" — drag-and-drop dashboard mockup
- Feature 3 (text left): "AI 기반 이상 탐지" — anomaly detection chart mockup
- Each feature: icon (inline SVG), h3, paragraph, bullet list of sub-features
- Image side: glass card with product UI mockup (skeleton wireframe style)
- Background: #09090b
- Stagger delay: each feature row has +150ms reveal delay
- Inspired by: Toss alternating device mockup sections

### 5. Stats Highlight — Full-width Number Banner
- Layout: single full-width band, centered large stat
- Content: "매일 1.2억 건의 데이터를 안전하게 처리합니다" with animated counter
- Background: subtle cyan gradient stripe (left-to-right, 3% opacity)
- Border-top and border-bottom: 1px #27272a

### 6. Testimonials — Masonry-like Offset Grid (3-col)
- Layout: 3 columns with offset vertical positioning (col 2 shifted down 40px)
- 6 testimonial cards total (2 per column)
- Each card: quote text, avatar (pravatar.cc), name, role, company
- Card style: glass card (#18181b bg, #27272a border), left accent border (cyan 2px)
- Background: #18181b
- Inspired by: Channel.io card grid with accent badges

### 7. CTA — Full-width Banner
- Layout: centered text, full-width section
- Radial gradient blob (cyan) behind, 10% opacity
- h2: "데이터로 더 나은 결정을 내리세요"
- Subtext + single CTA button "지금 바로 체험하기"
- Button: larger size (py-4 px-10), cyan bg
- Border-top: 1px solid accent
- Background: #09090b

### 8. Footer — 4-Column Grid
- Logo + tagline left column
- 3 link columns: 제품 (기능, 요금제, 업데이트), 리소스 (문서, API, 상태), 회사 (소개, 채용, 블로그)
- Bottom bar: copyright + 개인정보처리방침, 이용약관 links
- Background: #18181b

## Key Details
- All Korean text uses word-break: keep-all (global body rule)
- Pretendard loaded via CDN (orioncactus/pretendard static)
- Cyan accent (#22d3ee) on zinc-950 (#09090b) base
- Inline SVG icons throughout
- picsum.photos for placeholder images, pravatar.cc for avatars
- Natural Korean CTAs: "무료로 시작하기", "지금 바로 체험하기", "제품 둘러보기"
- Staggered fade-in animations (IntersectionObserver, threshold 0.1, translateY 32px, 0.7s ease-out)
- Stagger delay classes: delay-1 (100ms), delay-2 (200ms), delay-3 (300ms), delay-4 (400ms)
- Dashboard mockup in hero: browser chrome dots + fake chart/metrics UI with cyan glow shadow
- Metric counters in social proof section with accent-colored numbers
- Feature sections alternate layout direction per row
- Testimonial cards with avatar + role + company, left cyan accent border
- Nav blur transition: transparent -> blurred on scroll > 50px

## Background Pattern
#09090b (hero) -> #18181b (social proof) -> #09090b (features) -> #09090b (stats banner) -> #18181b (testimonials) -> #09090b (CTA, accent border-top) -> #18181b (footer)

## Padding Pattern
hero: py-0 (full viewport) | social: py-16 | features: py-24 | stats: py-16 | testimonials: py-24 | CTA: py-20 | footer: py-16

## Crawled Design Patterns

### From toss.im
- Centered container (max ~1040px) with generous padding (250px vertical sections)
- word-break: keep-all + white-space: pre-wrap for Korean text
- Font: Toss Product Sans, system fallbacks, 60px bold headlines
- Colors: #3182f6 primary blue, #191f28 dark text, #6b7684 secondary
- Device mockups with border-radius: 22px, shadow overlays
- Scroll-triggered reveal animations with transform: translate3d
- Minimal nav: logo + language toggle + core links

### From channel.io
- 1440px max container, 140px horizontal padding desktop
- Nav: 68px height, semi-transparent backdrop-blur
- Headings: 6.4rem desktop, -2px letter-spacing
- Accent gradients: purple-to-blue (#6157EA to #6687FF)
- Radial gradient blur (110px) for atmospheric depth effects
- CTA buttons: 64px height, 18px border-radius, dark bg with white text
- 150ms cubic-bezier transitions
- word-break: keep-all globally for Korean

### From wadiz.kr
- Crowdfunding platform, card-based product grid layout
- Multi-language support, mobile-first responsive
- Progress bar components for funding goals
- Category-based navigation with horizontal scroll
