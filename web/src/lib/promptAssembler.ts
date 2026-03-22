export interface FreePromptParams {
  referenceContent: string;
  brandColor: string;
}

export interface ProPromptParams {
  skillContent: string;
  referenceContent: string;
  brandColor: string;
  description: string;
  outputFormat: "code";
}

/** hex → r,g,b */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const match = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!match) return null;
  return { r: parseInt(match[1], 16), g: parseInt(match[2], 16), b: parseInt(match[3], 16) };
}

/** 레퍼런스 마크다운에서 accent 색상을 유저 팔레트로 치환 */
export function replaceAccentColor(referenceContent: string, originalAccent: string, newAccent: string): string {
  let result = referenceContent;

  // hex 치환 (대소문자 무시)
  const escapedHex = originalAccent.replace("#", "\\#?");
  result = result.replace(new RegExp(escapedHex, "gi"), newAccent);

  // rgba 치환: 원래 accent의 rgb 값을 새 accent의 rgb로
  const origRgb = hexToRgb(originalAccent);
  const newRgb = hexToRgb(newAccent);
  if (origRgb && newRgb) {
    const rgbaPattern = new RegExp(
      `rgba\\(\\s*${origRgb.r}\\s*,\\s*${origRgb.g}\\s*,\\s*${origRgb.b}\\s*,`,
      "g"
    );
    result = result.replace(rgbaPattern, `rgba(${newRgb.r}, ${newRgb.g}, ${newRgb.b},`);
  }

  return result;
}

/** 레퍼런스에서 "- Accent: #hex" 라인의 색상값 추출 */
export function extractAccentColor(referenceContent: string): string | null {
  const match = referenceContent.match(/^-\s*Accent:\s*(#[0-9a-fA-F]{6})/m);
  return match ? match[1] : null;
}

/**
 * 무료 프롬프트: 레퍼런스 스펙 + 팔레트 치환 → 복붙 프롬프트 1개
 * API 호출 없이 클라이언트에서 정적 조립
 */
export function assembleFreePrompt(params: FreePromptParams): string {
  const { referenceContent, brandColor } = params;

  const originalAccent = extractAccentColor(referenceContent);
  const spec = originalAccent
    ? replaceAccentColor(referenceContent, originalAccent, brandColor)
    : referenceContent;

  return `Build a complete, single HTML file following the design spec below.

## Rules
- Use Tailwind CDN: <script src="https://cdn.tailwindcss.com"></script>
- Include Google Fonts specified in the spec via <link>
- Follow the spec exactly: colors, fonts, sizes, spacing, layout, and section order
- Implement responsive design (mobile / tablet / desktop)
- Include interaction states: hover, transition, focus-visible
- Do not modify or omit anything from the spec
- Output ONLY the HTML code, no explanations

## Design Spec

${spec}`;
}

/**
 * 유료 프롬프트: SKILL.md + 레퍼런스 + 유저 설명 → Claude API용
 */
export function assembleProPrompt(params: ProPromptParams): string {
  const { skillContent, referenceContent, brandColor, description, outputFormat } = params;

  const systemPrompt = `You are a senior frontend designer. You generate production-quality HTML code.
Follow the SKILL.md rules exactly. Use the selected reference's palette, typography, and layout.
The user's brand color (${brandColor}) replaces the reference's accent color.
Generate complete, standalone HTML with Tailwind CDN (use <script src="https://cdn.tailwindcss.com"></script>).
Include Google Fonts links as specified in the reference.
Output ONLY the HTML code, no explanations.

=== SKILL.md ===
${skillContent}

=== Selected Reference ===
${referenceContent}`;

  const userMessage = description
    ? `Create this site:\n\n${description}\n\nBrand color: ${brandColor}\nOutput format: HTML code`
    : `Generate a landing page using the reference design above.\n\nBrand color: ${brandColor}\nOutput format: HTML code`;

  return `[System Prompt]\n${systemPrompt}\n\n---\n\n[User Message]\n${userMessage}`;
}
