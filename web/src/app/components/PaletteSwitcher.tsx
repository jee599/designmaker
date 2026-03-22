"use client";

import { useState, useRef, useEffect } from "react";
import { palettes } from "@/app/data/palettes";
import { usePalette } from "./PaletteProvider";

export default function PaletteSwitcher() {
  const { palette, setPalette } = usePalette();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = palettes.find((p) => p.id === palette) ?? palettes[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 py-1.5 font-[family-name:var(--font-jetbrains-mono)] text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-300"
      >
        <span
          className="h-3 w-3 rounded-full ring-1 ring-white/20"
          style={{ backgroundColor: current.hex }}
        />
        <span className="hidden sm:inline">{current.name}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow-xl shadow-black/40">
          <div className="border-b border-zinc-800 px-3 py-2 font-[family-name:var(--font-jetbrains-mono)] text-xs text-zinc-500">
            palette
          </div>
          {palettes.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setPalette(p.id);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-3 py-2 text-left font-[family-name:var(--font-jetbrains-mono)] text-sm transition-colors ${
                palette === p.id
                  ? "bg-zinc-800 text-zinc-50"
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
              }`}
            >
              <span
                className="h-3.5 w-3.5 rounded-full ring-1 ring-white/20"
                style={{ backgroundColor: p.hex }}
              />
              <span>{p.name}</span>
              {palette === p.id && (
                <span className="ml-auto text-xs" style={{ color: p.hex }}>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
