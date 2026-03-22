# Refmade Freemium Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 무료 모드(프롬프트 출력)를 추가하고, LemonSqueezy 결제 뼈대를 준비한다.

**Architecture:** generate/improve 페이지에 format="prompt" 옵션을 추가. API route에서 format=prompt일 때 Claude API 호출을 스킵하고 조합된 프롬프트를 리턴. 프롬프트 조합 로직은 `lib/promptAssembler.ts`로 추출하여 양쪽 route에서 공유. LemonSqueezy webhook과 크레딧 타입은 비활성 상태로 코드만 준비.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, LemonSqueezy API

---

### Task 1: 프롬프트 조합 유틸리티 생성

**Files:**
- Create: `web/src/lib/promptAssembler.ts`

- [ ] **Step 1: Create lib directory and promptAssembler.ts**

```typescript
// web/src/lib/promptAssembler.ts

export function assembleGeneratePrompt(params: {
  skillContent: string;
  referenceContent: string;
  brandColor: string;
  description: string;
  outputFormat: "code" | "markdown";
}): string {
  const { skillContent, referenceContent, brandColor, description, outputFormat } = params;

  const formatInstruction =
    outputFormat === "code"
      ? `Generate complete, standalone HTML with Tailwind CDN (<script src="https://cdn.tailwindcss.com"></script>).
Include Google Fonts links as specified in the reference.
Output ONLY the HTML code, no explanations.`
      : `Create a detailed design specification document in Markdown (한국어).
Include: 페이지 구조, 색상 팔레트, 타이포그래피, 컴포넌트 명세, 반응형 처리, 접근성 체크리스트.
Output ONLY the Markdown, no explanations.`;

  const systemPrompt = `You are a senior frontend designer. You generate production-quality web designs.
Follow the SKILL.md rules exactly. Use the selected reference's palette, typography, and layout.
The user's brand color (${brandColor}) replaces the reference's accent color.
${formatInstruction}

=== SKILL.md ===
${skillContent}

=== Selected Reference ===
${referenceContent}`;

  const userMessage = `다음 사이트를 만들어주세요:\n\n${description}\n\n브랜드 색상: ${brandColor}\n출력 형식: ${outputFormat === "code" ? "HTML 코드" : "Markdown 설계서"}`;

  return `[System Prompt]\n${systemPrompt}\n\n---\n\n[User Message]\n${userMessage}`;
}

export function assembleImprovePrompt(params: {
  skillContent: string;
  referenceSummaries: string;
  input: string;
  inputType: "url" | "code";
}): string {
  const { skillContent, referenceSummaries, input, inputType } = params;

  const userInput =
    inputType === "url"
      ? `분석 대상 URL: ${input}\n\n이 URL의 사이트를 SKILL.md 규칙 기준으로 분석해주세요.`
      : `분석 대상 HTML 코드:\n\`\`\`html\n${input}\n\`\`\``;

  const systemPrompt = `You are a web design expert. Analyze the given code/site against the SKILL.md rules.
Respond with valid JSON:
{
  "score": <1-10>,
  "issues": [{ "id": "<id>", "description": "<Korean>", "severity": "high"|"medium"|"low" }],
  "closestReference": { "id": "<NNN>", "name": "<name>" },
  "summary": "<Korean summary>",
  "improvedCode": "<full HTML with Tailwind CDN>"
}

Score criteria: anti-pattern violations (-1 each), typography scale, section padding variance, card diversity, interactive states, semantic HTML, accessibility, responsive design.

References:
${referenceSummaries}

=== SKILL.md ===
${skillContent}`;

  return `[System Prompt]\n${systemPrompt}\n\n---\n\n[User Message]\n${userInput}`;
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/lib/promptAssembler.ts
git commit -m "feat: add prompt assembler utility for free mode"
```

---

### Task 2: Generate API route에 prompt 모드 추가

**Files:**
- Modify: `web/src/app/api/generate/route.ts`

- [ ] **Step 1: Import promptAssembler and add prompt format handling**

`route.ts`에서 format="prompt"일 때 Claude API 호출을 스킵하고 `assembleGeneratePrompt`로 조합된 텍스트를 리턴하는 분기를 추가한다.

변경 내용:
1. `GenerateRequest`의 `format` 타입에 `"prompt"` 추가
2. `assembleGeneratePrompt` import
3. Claude API 호출 전에 format=prompt 분기 추가

```typescript
// GenerateRequest 변경
interface GenerateRequest {
  referenceId: string;
  description: string;
  brandColor: string;
  format: "code" | "markdown" | "prompt";
  model?: "haiku" | "sonnet";
}

// POST 함수 내, skillContent 로드 후, Claude API 호출 전에 추가:
if (format === "prompt") {
  const assembled = assembleGeneratePrompt({
    skillContent,
    referenceContent,
    brandColor,
    description,
    outputFormat: "code",
  });
  return new Response(assembled, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/jidong/designmaker/web && npm run build`
Expected: No TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add web/src/app/api/generate/route.ts
git commit -m "feat: add prompt-only mode to generate API (no API call)"
```

---

### Task 3: Generate 페이지 UI에 prompt 모드 추가

**Files:**
- Modify: `web/src/app/generate/page.tsx`

- [ ] **Step 1: Add prompt to OutputFormat type and format toggle UI**

변경 내용:
1. `OutputFormat` 타입에 `"prompt"` 추가: `type OutputFormat = "code" | "markdown" | "prompt";`
2. format 토글에 3번째 버튼 추가: `prompt`
3. prompt 모드일 때 버튼 라벨 변경: `$ export --prompt`
4. prompt 모드일 때 출력 영역: 코드블록 + 복사 버튼 + 안내 문구
5. prompt 모드일 때 터미널 타이틀: `prompt.md`
6. prompt 모드일 때 다운로드 확장자: `.md`
7. prompt 모드일 때 code/preview 탭 숨기기
8. prompt 모드일 때 "open in new tab" 숨기기

- [ ] **Step 2: Update handleDownload for prompt format**

```typescript
const handleDownload = () => {
  const ext = format === "code" ? "html" : "md";
  const mimeType = format === "code" ? "text/html" : "text/markdown";
  // ... rest stays the same
};
```

- [ ] **Step 3: Add prompt output rendering**

output 표시 영역에 prompt 모드용 렌더링 추가:

```tsx
{output && format === "prompt" && (
  <div className="p-6">
    <div className="mb-4 rounded-lg border border-accent-30 bg-accent-10 px-4 py-3 font-[family-name:var(--font-jetbrains-mono)] text-xs text-accent-light">
      이 프롬프트를 Claude, ChatGPT 등 AI에 붙여넣으세요.
    </div>
    <pre className="font-[family-name:var(--font-jetbrains-mono)] text-xs leading-relaxed text-zinc-300 whitespace-pre-wrap break-words">
      {output}
    </pre>
  </div>
)}
```

- [ ] **Step 4: Verify build**

Run: `cd /Users/jidong/designmaker/web && npm run build`
Expected: No TypeScript errors

- [ ] **Step 5: Commit**

```bash
git add web/src/app/generate/page.tsx
git commit -m "feat: add prompt mode UI to generate page"
```

---

### Task 4: Improve API route에 prompt 모드 추가

**Files:**
- Modify: `web/src/app/api/improve/route.ts`

- [ ] **Step 1: Add prompt mode parameter and handling**

변경 내용:
1. `ImproveRequest`에 `format?: "analyze" | "prompt"` 추가
2. `assembleImprovePrompt` import
3. format=prompt일 때 Claude API 호출 스킵, 조합된 프롬프트 리턴

```typescript
interface ImproveRequest {
  url?: string;
  code?: string;
  model?: "haiku" | "sonnet";
  format?: "analyze" | "prompt";
}

// POST 함수 내, referenceSummaries 로드 후, Claude API 호출 전:
if (body.format === "prompt") {
  const assembled = assembleImprovePrompt({
    skillContent,
    referenceSummaries,
    input: (url || code) as string,
    inputType: url ? "url" : "code",
  });
  return new Response(assembled, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/jidong/designmaker/web && npm run build`

- [ ] **Step 3: Commit**

```bash
git add web/src/app/api/improve/route.ts
git commit -m "feat: add prompt-only mode to improve API"
```

---

### Task 5: Improve 페이지 UI에 prompt 모드 추가

**Files:**
- Modify: `web/src/app/improve/page.tsx`

- [ ] **Step 1: Add prompt mode toggle and state**

변경 내용:
1. `outputMode` state 추가: `"analyze" | "prompt"` (기본값: "analyze")
2. `promptOutput` state 추가: `string`
3. 입력 영역 아래에 모드 토글 추가
4. prompt 모드일 때 `handleAnalyze`에서 format: "prompt" 전송
5. prompt 모드일 때 스트리밍 응답을 JSON 파싱 대신 텍스트로 표시
6. prompt 모드일 때 분석 결과(score, issues) 대신 프롬프트 텍스트 + 복사 버튼 표시
7. 버튼 라벨: prompt 모드일 때 `$ export --prompt`

- [ ] **Step 2: Add prompt output UI**

분석 결과 영역 대신 프롬프트 표시:

```tsx
{promptOutput && outputMode === "prompt" && !loading && (
  <div className="mx-auto max-w-4xl px-6 py-8">
    <div className="mb-4 rounded-lg border border-accent-30 bg-accent-10 px-4 py-3 font-[family-name:var(--font-jetbrains-mono)] text-xs text-accent-light">
      이 프롬프트를 Claude, ChatGPT 등 AI에 붙여넣으세요.
    </div>
    <div className="flex justify-end mb-3">
      <CopyButton text={promptOutput} />
    </div>
    <pre className="rounded-lg border border-zinc-800 bg-[#0c0c0e] p-6 font-[family-name:var(--font-jetbrains-mono)] text-xs leading-relaxed text-zinc-300 whitespace-pre-wrap break-words overflow-auto max-h-[600px]">
      {promptOutput}
    </pre>
  </div>
)}
```

- [ ] **Step 3: Verify build**

Run: `cd /Users/jidong/designmaker/web && npm run build`

- [ ] **Step 4: Commit**

```bash
git add web/src/app/improve/page.tsx
git commit -m "feat: add prompt mode UI to improve page"
```

---

### Task 6: 크레딧 타입 정의

**Files:**
- Create: `web/src/types/credits.ts`

- [ ] **Step 1: Create credits type file**

```typescript
// web/src/types/credits.ts

export interface CreditPack {
  id: string;
  name: string;
  credits: number;
  price: number; // USD cents
  lemonSqueezyVariantId: string;
}

export const CREDIT_PACKS: CreditPack[] = [
  {
    id: "starter",
    name: "10 Credits",
    credits: 10,
    price: 500,
    lemonSqueezyVariantId: "", // LemonSqueezy 상품 생성 후 채우기
  },
  {
    id: "pro",
    name: "50 Credits",
    credits: 50,
    price: 2000,
    lemonSqueezyVariantId: "", // LemonSqueezy 상품 생성 후 채우기
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add web/src/types/credits.ts
git commit -m "feat: add credit pack type definitions"
```

---

### Task 7: LemonSqueezy 유틸리티 생성

**Files:**
- Create: `web/src/lib/lemonsqueezy.ts`

- [ ] **Step 1: Create LemonSqueezy utility**

```typescript
// web/src/lib/lemonsqueezy.ts
import crypto from "crypto";

const LEMONSQUEEZY_API_URL = "https://api.lemonsqueezy.com/v1";

export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}

export async function createCheckout(params: {
  storeId: string;
  variantId: string;
  userId: string;
  creditPackId: string;
}): Promise<string> {
  const { storeId, variantId, userId, creditPackId } = params;

  const response = await fetch(`${LEMONSQUEEZY_API_URL}/checkouts`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
    },
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: { user_id: userId, credit_pack_id: creditPackId },
          },
        },
        relationships: {
          store: { data: { type: "stores", id: storeId } },
          variant: { data: { type: "variants", id: variantId } },
        },
      },
    }),
  });

  const data = await response.json();
  return data.data.attributes.url as string;
}
```

- [ ] **Step 2: Commit**

```bash
git add web/src/lib/lemonsqueezy.ts
git commit -m "feat: add LemonSqueezy utility (checkout, webhook verification)"
```

---

### Task 8: LemonSqueezy Webhook 핸들러 생성

**Files:**
- Create: `web/src/app/api/webhooks/lemonsqueezy/route.ts`

- [ ] **Step 1: Create webhook route**

```typescript
// web/src/app/api/webhooks/lemonsqueezy/route.ts
import { NextRequest } from "next/server";
import { verifyWebhookSignature } from "@/lib/lemonsqueezy";
import { CREDIT_PACKS } from "@/types/credits";

export async function POST(request: NextRequest) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return Response.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-signature") ?? "";

  if (!verifyWebhookSignature(rawBody, signature, secret)) {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody);
  const eventName = event.meta?.event_name;

  if (eventName === "order_created") {
    const customData = event.meta?.custom_data;
    const userId = customData?.user_id;
    const creditPackId = customData?.credit_pack_id;

    if (!userId || !creditPackId) {
      return Response.json(
        { error: "Missing custom data" },
        { status: 400 }
      );
    }

    const pack = CREDIT_PACKS.find((p) => p.id === creditPackId);
    if (!pack) {
      return Response.json(
        { error: "Unknown credit pack" },
        { status: 400 }
      );
    }

    // TODO: DB 연동 시 활성화
    // await db.user.update({
    //   where: { id: userId },
    //   data: { credits: { increment: pack.credits } },
    // });

    console.log(
      `[LemonSqueezy] Order created: userId=${userId}, pack=${creditPackId}, credits=${pack.credits}`
    );
  }

  return Response.json({ received: true });
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/jidong/designmaker/web && npm run build`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add web/src/app/api/webhooks/lemonsqueezy/route.ts
git commit -m "feat: add LemonSqueezy webhook handler (inactive, awaiting DB)"
```

---

### Task 9: 빌드 검증 및 최종 커밋

**Files:**
- All modified/created files

- [ ] **Step 1: Full build verification**

Run: `cd /Users/jidong/designmaker/web && npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 2: Manual smoke test**

Run: `cd /Users/jidong/designmaker/web && npm run dev`
Test:
1. /generate 페이지에서 prompt 탭 선택 → "프롬프트 받기" 클릭 → 프롬프트 출력 확인
2. /improve 페이지에서 prompt 모드 → 프롬프트 출력 확인
3. 기존 code/markdown 모드가 여전히 정상 동작하는지 확인

- [ ] **Step 3: Commit all remaining changes if any**

```bash
git add -A
git commit -m "feat: Refmade freemium model - free prompt mode + LemonSqueezy skeleton"
```
