"use client";

import { useState, useEffect } from "react";

export type ModelChoice = "haiku" | "sonnet";

const STORAGE_KEY = "designmaker-model";
export const MODEL_CHANGE_EVENT = "designmaker-model-change";

export function getStoredModel(): ModelChoice {
  if (typeof window === "undefined") return "sonnet";
  return (localStorage.getItem(STORAGE_KEY) as ModelChoice) || "sonnet";
}

export default function ModelSwitcher() {
  const [model, setModel] = useState<ModelChoice>("sonnet");

  useEffect(() => {
    setModel(getStoredModel());
  }, []);

  const handleChange = (next: ModelChoice) => {
    setModel(next);
    localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new CustomEvent(MODEL_CHANGE_EVENT, { detail: next }));
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-zinc-700 p-0.5 font-[family-name:var(--font-jetbrains-mono)] text-xs">
      <button
        onClick={() => handleChange("haiku")}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          model === "haiku"
            ? "bg-emerald-500/20 text-emerald-400"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        haiku
      </button>
      <button
        onClick={() => handleChange("sonnet")}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          model === "sonnet"
            ? "bg-emerald-500/20 text-emerald-400"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        sonnet
      </button>
    </div>
  );
}
