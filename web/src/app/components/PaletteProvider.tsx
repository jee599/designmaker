"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { PaletteId } from "@/app/data/palettes";
import { defaultPalette } from "@/app/data/palettes";

type PaletteContextType = {
  palette: PaletteId;
  setPalette: (id: PaletteId) => void;
};

const PaletteContext = createContext<PaletteContextType>({
  palette: defaultPalette,
  setPalette: () => {},
});

export function usePalette() {
  return useContext(PaletteContext);
}

export default function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = useState<PaletteId>(defaultPalette);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("palette") as PaletteId | null;
    if (saved) {
      setPaletteState(saved);
      document.documentElement.setAttribute("data-palette", saved);
    }
    setMounted(true);
  }, []);

  const setPalette = useCallback((id: PaletteId) => {
    setPaletteState(id);
    localStorage.setItem("palette", id);
    document.documentElement.setAttribute("data-palette", id);
  }, []);

  // Set initial data-palette on mount
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-palette", palette);
    }
  }, [mounted, palette]);

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
}
