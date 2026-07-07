import Link from "next/link";
import type { DailyLoopStep } from "@/types";

type Props = {
  step: DailyLoopStep;
  totalSteps: number;
};

// Jedna duza karta aktywnego kroku: co / jak / przyklad + CTA do modulu.
export function DailyTaskCard({ step, totalSteps }: Props) {
  return (
    <div className="rounded-3xl border border-accent/40 bg-hero-gradient p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{step.icon}</span>
        <p className="text-xs uppercase tracking-wider text-accent-soft">
          Krok {step.index}/{totalSteps} — {step.title}
        </p>
      </div>

      <h2 className="mt-3 text-xl font-semibold sm:text-2xl">{step.task}</h2>

      <div className="mt-4 rounded-2xl border border-border/60 bg-background/40 p-4">
        <p className="text-xs uppercase tracking-wider text-muted">Jak to zrobić</p>
        <p className="mt-1 text-sm">{step.instruction}</p>
      </div>

      <div className="mt-3 rounded-2xl border border-border/60 bg-background/40 p-4">
        <p className="text-xs uppercase tracking-wider text-accent-soft">Przykład</p>
        <p className="mt-1 text-sm text-muted">{step.example}</p>
      </div>

      <Link
        href={step.href}
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
      >
        {step.ctaLabel} →
      </Link>
    </div>
  );
}
