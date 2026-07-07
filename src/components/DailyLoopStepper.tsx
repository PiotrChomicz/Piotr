"use client";

import { Badge } from "@/components/Badge";
import type { DailyLoopStep } from "@/types";

type Props = {
  steps: DailyLoopStep[];
  activeIndex: number;
  doneCount: number;
  onSelect: (index: number) => void;
};

// Lekka kaskada krokow. Jeden aktywny wyrozniony; ukonczone maja znacznik.
export function DailyLoopStepper({
  steps,
  activeIndex,
  doneCount,
  onSelect,
}: Props) {
  return (
    <ol className="space-y-2">
      {steps.map((s) => {
        const done = s.index <= doneCount;
        const active = s.index === activeIndex;
        const mark = done ? "✓" : active ? "●" : "○";
        return (
          <li key={s.index}>
            <button
              onClick={() => onSelect(s.index)}
              className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                active
                  ? "border-accent bg-surfaceElevated"
                  : "border-border/60 bg-surface hover:bg-surfaceElevated"
              }`}
            >
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm ${
                  done
                    ? "bg-accent/20 text-accent-soft"
                    : active
                      ? "bg-accent text-white"
                      : "border border-border text-muted"
                }`}
              >
                {mark}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="text-base">{s.icon}</span>
                  <span className="text-sm font-medium text-white">
                    Krok {s.index} — {s.title}
                  </span>
                </span>
                <span className="mt-0.5 block truncate text-xs text-muted">
                  {s.task}
                </span>
              </span>
              {active && (
                <Badge className="bg-accent/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent-soft">
                  Teraz
                </Badge>
              )}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
