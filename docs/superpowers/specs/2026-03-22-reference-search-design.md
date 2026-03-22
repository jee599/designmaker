# reference-search 스킬 설계

## Overview

`/reference-search` — 디자인 어워드 갤러리(Awwwards, CSSDA, SiteInspire 등)에서 새 레퍼런스를 탐색하고, 인터랙티브 큐레이션을 거쳐 카탈로그에 등록하는 Claude Code 스킬.

사용자가 Claude Code 세션에서 `/reference-search`를 실행하면 Phase 1~4가 순차 실행된다.

## 산출물

1. **스킬 파일**: `.claude/commands/reference-search.md`
2. **데이터 파일**: `web/data/sources.json`, `web/data/seen.json`, `web/data/taste-profile.md`
3. **레퍼런스 파일**: `web/data/catalog/0XX-*.md` + `web/src/app/data/references.ts` 자동 업데이트

---

## Phase 1 — 소스 탐색

### 흐름

```
모든 소스 → WebSearch "site:{source} {날짜필터}" → URL 목록 확보
  ↓
실제 수상작 사이트 URL만 추출 (갤러리 URL ≠ 최종 사이트 URL)
  ↓
seen.json 대조 → 새 URL 5개 선별 (1라운드 분량)
```

### 핵심 원칙

- **WebSearch가 기본 경로.** 갤러리 사이트(Awwwards 등)는 SPA/JS 렌더링이라 WebFetch가 안 먹힌다.
- **WebFetch는 최종 수상작 사이트에만** 사용한다.
- **소스별 파싱 전략 분기 없음.** 검색 쿼리만 소스별로 다르고 나머지는 동일 파이프라인.

### sources.json 구조

```json
[
  {
    "name": "Awwwards",
    "searchQuery": "site:awwwards.com site of the day {year}-{month}",
    "metaPath": "/sites/"
  },
  {
    "name": "CSSDA",
    "searchQuery": "site:cssdesignawards.com website of the day {year}",
    "metaPath": null
  },
  {
    "name": "SiteInspire",
    "searchQuery": "site:siteinspire.com {year} {month}",
    "metaPath": null
  },
  {
    "name": "Dribbble",
    "searchQuery": "site:dribbble.com web design {year}",
    "metaPath": null
  },
  {
    "name": "Godly",
    "searchQuery": "site:godly.website {year}",
    "metaPath": null
  }
]
```

### seen.json 구조

```json
{
  "urls": {
    "https://example.com": {
      "source": "Awwwards",
      "firstSeen": "2026-03-22",
      "status": "kept" | "deleted" | "rejected"
    }
  },
  "lastCycle": "2026-03-22",
  "totalCycles": 0
}
```

---

## Phase 2 — 디자인 분석

URL당 3단계 분석. 멀티모달 분석이 주력이고 CSS 직접 파싱은 보너스.

### Step A: 갤러리 메타데이터 (보너스)

```
WebSearch로 갤러리 상세 페이지 찾기 ("site:awwwards.com {사이트명}")
  → WebFetch로 메타데이터 추출 (색상, 기술 스택, 카테고리)
  → 실패 시 스킵, Step B에 의존
```

### Step B: 실제 사이트 분석

```
WebFetch로 실제 사이트 HTML 가져오기
  → CSS custom properties 추출 시도
  → 실패 시 (해시 클래스 등) → og:image 또는 갤러리 프리뷰 이미지로 폴백
  → Claude 멀티모달 분석: 톤, 레이아웃, 타이포그래피, 컬러 추출
```

멀티모달 분석 추출 항목:
- tone: light | dark
- style: [minimal, editorial, brutalist, glassmorphism, ...]
- layout: [centered, asymmetric, bento, long-scroll, horizontal, ...]
- density: sparse | balanced | dense
- pacing: slow | medium | fast
- palette: HEX 색상 3~6개
- typography: heading/body 폰트 추정, weight, spacing
- material: 한 문장 메타포 ("ink on matte black paper")
- signature_moves: 3~5개 시각적 특징

### Step C: 병합 → 레퍼런스 MD 초안

메타데이터 + 사이트 분석 결과를 기존 카탈로그 구조로 병합:

```markdown
---
id: {next_id}
name: {name}
tags: [{tag1}, {tag2}, ...]
tone: {light|dark}
inspired_by: [{source_url}]
status: draft
---

# {id} — {name}

## Palette
- Background: {bg}
- Text: {text}
- Accent: {accent}
...

## Typography
- Heading: {font} ({weight}, {letter-spacing})
- Body: {font} ({weight})
...

## Layout
- Hero: {description}
- Features: {description}
...

## Material
{one-line metaphor}

## Rhythm
- pacing: {slow|medium|fast}
- density: {sparse|balanced|dense}

## Key Details
- {signature_move_1}
- {signature_move_2}
- {signature_move_3}
...

## Section Order
{nav → hero → ... → footer}

## Background Pattern
{bg color alternation}

## Padding Pattern
{section padding values}

## Anti-patterns
- {이 디자인에서 하지 말 것 1}
- {이 디자인에서 하지 말 것 2}

## Reconstruction Hints
- {재구현 핵심 포인트 1}
- {재구현 핵심 포인트 2}
```

---

## Phase 3 — 큐레이션

### 라운드 구조

- **최대 2라운드** (컨텍스트 보호)
- **라운드당 5개 후보** (토큰 절약)
- **매 라운드 후 taste-profile.md 중간 저장** (세션 끊겨도 이어갈 수 있음)

### 라운드 흐름

```
라운드 1: 5개 후보 카드 제시
  ┌────────────────────────────────────┐
  │ [064] Noir Editorial               │
  │ Material: "Ink on matte black"     │
  │ tone:dark / style:editorial        │
  │ density:sparse / pacing:slow       │
  │ Palette: #0a0a0a, #f5f5f0, #c8a97e│
  │ 시그니처: letter-spacing 0.2em h1, │
  │   stagger reveal 0.12s,           │
  │   extreme py-40 hero              │
  │                                    │
  │ → keep ✓  /  delete ✗             │
  └────────────────────────────────────┘
  ↓
사용자 판단 (예: "1,3 keep / 2,4,5 delete")
  ↓
구조화 필드 집계:
  kept:    { tone.dark: 2, style.editorial: 1, density.sparse: 2 }
  deleted: { layout.card-heavy: 3, style.gradient-text: 2 }
  ↓
taste-profile.md 중간 저장
  ↓
라운드 2: 학습 반영하여 다음 소스에서 5개 탐색
  → tone.dark 우선, layout.card-heavy 스킵
  ↓
taste-profile.md 최종 저장
```

### 사용자 입력 형식

```
> 1,3 keep
```
또는
```
> keep 1 3 / delete 2 4 5
```

숫자만 입력하면 keep으로 간주. 나머지는 자동 delete.

---

## Phase 4 — 산출물 & 품질 게이트

### 품질 게이트 (4개)

| # | 게이트 | 조건 | 결과 |
|---|--------|------|------|
| 1 | 시그니처 부족 | signature_moves < 3개 | reject |
| 2 | 소스 노후 | 소스 사이트 18개월 초과 | reject |
| 3 | 스타일 중복 | 기존 레퍼런스와 tone+style+layout 유사도 > 0.8 | 경고 (사용자 판단) |
| 4 | 차별성 부족 | 시그니처가 기존과 겹침 | reject |

스타일 유사도 계산:
```
유사도 = (tone 일치 × 0.3) + (style 교집합/합집합 × 0.4) + (layout 일치 × 0.3)
```

### 산출물

1. **taste-profile.md** — 누적 업데이트

```markdown
## Hard Constraints
- hero word count: 6-15
- font weight range: 400-600
- max accent saturation: 80%

## Soft Preferences
- dark tone: 0.85
- serif headings: 0.4
- asymmetric layout: 0.7

## Anti-taste
- stock photo heroes
- gradient text headings
- card-heavy layouts (>6 cards)

## Reference Anchors
- 011 Dark Luxury, 064 Noir Editorial, ...

## 2026-03-22 사이클 기록
- kept: [064, 066, 069]
- deleted: [065, 067, 068, 070, 071, 072, 073]
- 패턴: dark editorial + sparse density 강화
```

2. **레퍼런스 MD 파일들** → `web/data/catalog/`
3. **references.ts** → 새 엔트리 자동 추가
4. **seen.json** → URL 기록

### taste-profile 업데이트 로직

지수가중이동평균 (최신 사이클 가중치 높게):

```
새 사이클 가중치 = 0.7
기존 누적 가중치 = 0.3

예: tone.dark 기존 0.6, 이번 사이클 0.9
→ 0.6 × 0.3 + 0.9 × 0.7 = 0.81
```

첫 사이클에서는 초기값이 없으므로 이번 사이클 값이 그대로 적용.

---

## 스킬 파일 구조

`.claude/commands/reference-search.md`는 위 Phase 1~4를 Claude Code 에이전트가 순차 실행하는 프롬프트로 구성한다.

스킬 실행 시 필요한 도구:
- WebSearch (갤러리 검색)
- WebFetch (실제 사이트 HTML + og:image)
- Read (sources.json, seen.json, taste-profile.md, 기존 카탈로그)
- Write (새 레퍼런스 MD, references.ts, seen.json, taste-profile.md)
- AskUserQuestion (큐레이션 keep/delete 입력)

---

## 레퍼런스 누적 전략

```
사이클 1 (3월): 63개 → 65~68개 (+2~5 keep, 게이트 통과분)
사이클 2 (3월): 68개 → 70~73개
...
목표: 150-180개 (12-15개 버티컬 커버)
```

매 사이클 종료 시:
```
"N개 레퍼런스 등록 완료. 다음 사이클 실행하시겠습니까?"
```
