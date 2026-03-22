export type DesignPalette = {
  id: string;
  name: string;
  category: PaletteCategory;
  accent: string;
  bg: string;
  text: string;
};

export type PaletteCategory =
  | "modern"
  | "warm"
  | "cool"
  | "nature"
  | "neon"
  | "pastel"
  | "monochrome"
  | "luxury";

export const paletteCategories: { id: PaletteCategory; label: string }[] = [
  { id: "modern", label: "Modern" },
  { id: "warm", label: "Warm" },
  { id: "cool", label: "Cool" },
  { id: "nature", label: "Nature" },
  { id: "neon", label: "Neon" },
  { id: "pastel", label: "Pastel" },
  { id: "monochrome", label: "Mono" },
  { id: "luxury", label: "Luxury" },
];

export const designPalettes: DesignPalette[] = [
  // ── Modern ──
  { id: "m01", name: "Stripe Blue", category: "modern", accent: "#635bff", bg: "#ffffff", text: "#0a2540" },
  { id: "m02", name: "Vercel Black", category: "modern", accent: "#0070f3", bg: "#000000", text: "#ededed" },
  { id: "m03", name: "Linear Purple", category: "modern", accent: "#5e6ad2", bg: "#ffffff", text: "#1d1d1f" },
  { id: "m04", name: "Supabase Green", category: "modern", accent: "#3ecf8e", bg: "#1c1c1c", text: "#ededed" },
  { id: "m05", name: "Figma Coral", category: "modern", accent: "#f24e1e", bg: "#ffffff", text: "#1e1e1e" },
  { id: "m06", name: "Notion Ivory", category: "modern", accent: "#000000", bg: "#ffffff", text: "#37352f" },
  { id: "m07", name: "Arc Teal", category: "modern", accent: "#00a4b8", bg: "#fbfbfb", text: "#1a1a2e" },
  { id: "m08", name: "Raycast Red", category: "modern", accent: "#ff6363", bg: "#0e0e10", text: "#eeeeee" },

  // ── Warm ──
  { id: "w01", name: "Sunset Orange", category: "warm", accent: "#f97316", bg: "#fffbf5", text: "#1c1917" },
  { id: "w02", name: "Terracotta", category: "warm", accent: "#c2410c", bg: "#fef2e8", text: "#431407" },
  { id: "w03", name: "Golden Hour", category: "warm", accent: "#d97706", bg: "#fffdf0", text: "#292524" },
  { id: "w04", name: "Rose Blush", category: "warm", accent: "#e11d48", bg: "#fff1f2", text: "#1c1917" },
  { id: "w05", name: "Amber Honey", category: "warm", accent: "#b45309", bg: "#fefce8", text: "#422006" },
  { id: "w06", name: "Burnt Sienna", category: "warm", accent: "#9a3412", bg: "#0c0a09", text: "#fafaf9" },
  { id: "w07", name: "Coral Reef", category: "warm", accent: "#fb7185", bg: "#ffffff", text: "#1f2937" },
  { id: "w08", name: "Cinnamon", category: "warm", accent: "#a16207", bg: "#1a1a18", text: "#fef3c7" },

  // ── Cool ──
  { id: "c01", name: "Ocean Blue", category: "cool", accent: "#2563eb", bg: "#f8fafc", text: "#0f172a" },
  { id: "c02", name: "Arctic Ice", category: "cool", accent: "#06b6d4", bg: "#ecfeff", text: "#164e63" },
  { id: "c03", name: "Sapphire Dark", category: "cool", accent: "#3b82f6", bg: "#020617", text: "#e2e8f0" },
  { id: "c04", name: "Indigo Night", category: "cool", accent: "#6366f1", bg: "#0f0720", text: "#e0e7ff" },
  { id: "c05", name: "Sky Light", category: "cool", accent: "#0ea5e9", bg: "#ffffff", text: "#0c4a6e" },
  { id: "c06", name: "Slate Pro", category: "cool", accent: "#6366f1", bg: "#0f172a", text: "#cbd5e1" },
  { id: "c07", name: "Frost Blue", category: "cool", accent: "#38bdf8", bg: "#f0f9ff", text: "#1e293b" },
  { id: "c08", name: "Deep Teal", category: "cool", accent: "#14b8a6", bg: "#042f2e", text: "#ccfbf1" },

  // ── Nature ──
  { id: "n01", name: "Forest Green", category: "nature", accent: "#16a34a", bg: "#fafdf7", text: "#14532d" },
  { id: "n02", name: "Earth Sage", category: "nature", accent: "#65a30d", bg: "#f5f0e8", text: "#365314" },
  { id: "n03", name: "Moss Dark", category: "nature", accent: "#22c55e", bg: "#0a0f0a", text: "#dcfce7" },
  { id: "n04", name: "Desert Sand", category: "nature", accent: "#92400e", bg: "#fef7ed", text: "#451a03" },
  { id: "n05", name: "Ocean Mist", category: "nature", accent: "#0d9488", bg: "#f0fdfa", text: "#134e4a" },
  { id: "n06", name: "Clay Brown", category: "nature", accent: "#78716c", bg: "#faf5f0", text: "#292524" },
  { id: "n07", name: "Pine Night", category: "nature", accent: "#4ade80", bg: "#052e16", text: "#bbf7d0" },
  { id: "n08", name: "Lavender Field", category: "nature", accent: "#a855f7", bg: "#faf5ff", text: "#3b0764" },

  // ── Neon ──
  { id: "ne01", name: "Neon Green", category: "neon", accent: "#00ff41", bg: "#0a0a0a", text: "#e0e0e0" },
  { id: "ne02", name: "Cyber Pink", category: "neon", accent: "#ff2d78", bg: "#0d0015", text: "#f0e0ff" },
  { id: "ne03", name: "Electric Blue", category: "neon", accent: "#00d4ff", bg: "#050510", text: "#e0f0ff" },
  { id: "ne04", name: "Toxic Yellow", category: "neon", accent: "#ccff00", bg: "#0a0a00", text: "#e0e0c0" },
  { id: "ne05", name: "UV Purple", category: "neon", accent: "#bf00ff", bg: "#08000f", text: "#e8d0ff" },
  { id: "ne06", name: "Hot Orange", category: "neon", accent: "#ff6600", bg: "#0a0500", text: "#ffe0c0" },
  { id: "ne07", name: "Plasma Cyan", category: "neon", accent: "#00ffcc", bg: "#000a0a", text: "#c0ffe0" },
  { id: "ne08", name: "Neon Rose", category: "neon", accent: "#ff0080", bg: "#0a0008", text: "#ffd0e8" },

  // ── Pastel ──
  { id: "p01", name: "Baby Blue", category: "pastel", accent: "#7dd3fc", bg: "#f0f9ff", text: "#1e3a5f" },
  { id: "p02", name: "Peach Puff", category: "pastel", accent: "#fda4af", bg: "#fff5f5", text: "#4a2532" },
  { id: "p03", name: "Mint Cream", category: "pastel", accent: "#86efac", bg: "#f0fdf4", text: "#1a3a2a" },
  { id: "p04", name: "Lilac Dream", category: "pastel", accent: "#c4b5fd", bg: "#f5f3ff", text: "#3b2d60" },
  { id: "p05", name: "Buttercup", category: "pastel", accent: "#fde68a", bg: "#fffef0", text: "#4a3f1a" },
  { id: "p06", name: "Cotton Candy", category: "pastel", accent: "#f9a8d4", bg: "#fdf2f8", text: "#4a1d3d" },
  { id: "p07", name: "Seafoam", category: "pastel", accent: "#99f6e4", bg: "#f0fdfa", text: "#1a3b35" },
  { id: "p08", name: "Apricot", category: "pastel", accent: "#fdba74", bg: "#fff7ed", text: "#4a2c10" },

  // ── Monochrome ──
  { id: "mo01", name: "Pure Black", category: "monochrome", accent: "#000000", bg: "#ffffff", text: "#111111" },
  { id: "mo02", name: "Pure White", category: "monochrome", accent: "#ffffff", bg: "#000000", text: "#eeeeee" },
  { id: "mo03", name: "Warm Gray", category: "monochrome", accent: "#57534e", bg: "#fafaf9", text: "#1c1917" },
  { id: "mo04", name: "Cool Gray", category: "monochrome", accent: "#64748b", bg: "#f8fafc", text: "#0f172a" },
  { id: "mo05", name: "Zinc Dark", category: "monochrome", accent: "#a1a1aa", bg: "#09090b", text: "#fafafa" },
  { id: "mo06", name: "Paper Ink", category: "monochrome", accent: "#292524", bg: "#f5f5f4", text: "#1c1917" },
  { id: "mo07", name: "Charcoal", category: "monochrome", accent: "#404040", bg: "#171717", text: "#d4d4d4" },
  { id: "mo08", name: "Silver Mist", category: "monochrome", accent: "#9ca3af", bg: "#f3f4f6", text: "#1f2937" },

  // ── Luxury ──
  { id: "l01", name: "Gold & Black", category: "luxury", accent: "#d4a574", bg: "#0c0a09", text: "#fef3c7" },
  { id: "l02", name: "Royal Purple", category: "luxury", accent: "#7c3aed", bg: "#0c0015", text: "#e9d5ff" },
  { id: "l03", name: "Champagne", category: "luxury", accent: "#b8860b", bg: "#fffdf5", text: "#2c1a05" },
  { id: "l04", name: "Midnight Blue", category: "luxury", accent: "#60a5fa", bg: "#0a1628", text: "#c7d8f0" },
  { id: "l05", name: "Emerald Dark", category: "luxury", accent: "#10b981", bg: "#022c22", text: "#a7f3d0" },
  { id: "l06", name: "Ruby Wine", category: "luxury", accent: "#be123c", bg: "#1a0010", text: "#fecdd3" },
  { id: "l07", name: "Ivory Pearl", category: "luxury", accent: "#a3a3a3", bg: "#fafaf5", text: "#262626" },
  { id: "l08", name: "Obsidian", category: "luxury", accent: "#c084fc", bg: "#0a0a0a", text: "#e4e4e7" },
];
