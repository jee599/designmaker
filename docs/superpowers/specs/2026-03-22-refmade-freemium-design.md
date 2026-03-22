# Refmade Freemium Model Design

## Overview

Refmade(구 designmaker)에 프리미엄 모델을 도입한다.
- **무료 모드**: API 호출 없이 조합된 프롬프트를 출력. 사용자가 Claude/ChatGPT에 복붙해서 사용.
- **유료 모드**: Claude API로 직접 생성 + 대화형 고도화. 크레딧 기반 (10회/$5, 50회/$20).
- **결제**: LemonSqueezy (MoR, 세금 자동 처리). 지금은 뼈대만 구현.

## Phase 1: 무료 모드 (지금 구현)

### 1-1. Generate 페이지 변경

**format 옵션 추가**: 기존 `"code" | "markdown"` → `"code" | "markdown" | "prompt"`

**prompt 모드 동작**:
1. 사용자가 레퍼런스 선택 + 설명 + 브랜드색 입력 (기존과 동일)
2. format을 "prompt"로 선택
3. "프롬프트 받기" 버튼 클릭
4. `/api/generate`에 `format: "prompt"` 전송
5. 서버에서 SKILL.md + 레퍼런스 MD + 브랜드색을 조합
6. Claude API 호출 없이 조합된 텍스트를 리턴
7. 프론트엔드에서 복사 가능한 형태로 표시

**UI 변경**:
- format 선택에 "prompt" 탭 추가 (아이콘: 클립보드 또는 터미널)
- prompt 모드일 때 버튼 라벨: `$ export --prompt`
- 출력 영역: 코드블록 스타일로 프롬프트 표시 + 복사 버튼
- "이 프롬프트를 Claude나 ChatGPT에 붙여넣으세요" 안내 문구

### 1-2. API Route 변경 (`/api/generate`)

```
if (format === "prompt") {
  // SKILL.md + 레퍼런스 + 사용자 입력 조합
  // Claude API 호출 안 함
  // 조합된 시스템 프롬프트 + 유저 메시지를 텍스트로 리턴
  return new Response(assembledPrompt, { headers: { "Content-Type": "text/plain" } });
}
```

### 1-3. Improve 페이지 변경

동일한 패턴으로 prompt 모드 추가. 분석 프롬프트를 조합해서 리턴.

### 1-4. 프롬프트 조합 유틸리티

`web/src/lib/promptAssembler.ts` 생성:
- `assembleGeneratePrompt(referenceContent, skillContent, brandColor, description, format)`
- `assembleImprovePrompt(skillContent, code, referencesSummary)`
- API route와 공유하여 중복 제거

## Phase 2: 결제 뼈대 (지금 구현, 비활성 상태)

### 2-1. LemonSqueezy 연동 파일

- `web/src/app/api/webhooks/lemonsqueezy/route.ts` — webhook 핸들러
- `web/src/lib/lemonsqueezy.ts` — checkout URL 생성, 서명 검증 유틸리티

### 2-2. 크레딧 타입 정의

```typescript
// web/src/types/credits.ts
interface CreditPack {
  id: string;
  name: string;
  credits: number;
  price: number; // USD cents
  lemonSqueezyVariantId: string;
}

const CREDIT_PACKS: CreditPack[] = [
  { id: "starter", name: "10 Credits", credits: 10, price: 500, lemonSqueezyVariantId: "" },
  { id: "pro", name: "50 Credits", credits: 50, price: 2000, lemonSqueezyVariantId: "" },
];
```

### 2-3. Webhook 플로우 (비활성, 코드만 준비)

```
POST /api/webhooks/lemonsqueezy
  → 서명 검증
  → event_name === "order_created"
  → custom_data에서 userId, creditPackId 추출
  → DB에 크레딧 추가 (DB 연결 시 활성화)
  → 200 리턴
```

## Phase 3: 유료 모드 활성화 (나중에)

- Supabase 등 DB 연동
- 유저 인증 (NextAuth 또는 Supabase Auth)
- 크레딧 잔량 확인 → API 생성 허용/차단
- LemonSqueezy 상품 생성 및 variant ID 연결
- 대화형 고도화 (멀티턴 API 호출)

## 변경 파일 목록

| 파일 | 변경 유형 | 설명 |
|------|----------|------|
| `web/src/app/generate/page.tsx` | 수정 | prompt format 추가, UI 분기 |
| `web/src/app/api/generate/route.ts` | 수정 | format=prompt 처리 분기 |
| `web/src/app/improve/page.tsx` | 수정 | prompt 모드 추가 |
| `web/src/app/api/improve/route.ts` | 수정 | format=prompt 처리 분기 |
| `web/src/lib/promptAssembler.ts` | 신규 | 프롬프트 조합 유틸리티 |
| `web/src/types/credits.ts` | 신규 | 크레딧 타입 정의 |
| `web/src/lib/lemonsqueezy.ts` | 신규 | LemonSqueezy 유틸리티 |
| `web/src/app/api/webhooks/lemonsqueezy/route.ts` | 신규 | Webhook 핸들러 |

## 프로젝트 이름

**Refmade** (refmade.com)
- Reference + Made
- "레퍼런스로 만들었다"
