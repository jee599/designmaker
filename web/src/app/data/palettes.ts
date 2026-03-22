export type PaletteId = "emerald" | "blue" | "purple" | "cyan" | "rose" | "amber" | "indigo";

export type Palette = {
  id: PaletteId;
  name: string;
  hex: string;
};

export const palettes: Palette[] = [
  { id: "emerald", name: "Emerald", hex: "#10b981" },
  { id: "blue", name: "Blue", hex: "#3b82f6" },
  { id: "purple", name: "Purple", hex: "#8b5cf6" },
  { id: "cyan", name: "Cyan", hex: "#06b6d4" },
  { id: "rose", name: "Rose", hex: "#f43f5e" },
  { id: "amber", name: "Amber", hex: "#f59e0b" },
  { id: "indigo", name: "Indigo", hex: "#6366f1" },
];

export const defaultPalette: PaletteId = "emerald";
