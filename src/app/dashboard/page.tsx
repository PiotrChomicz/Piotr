"use client";

import Link from "next/link";
import { useState } from "react";
import { DailyTaskCard } from "@/components/DailyTaskCard";
import { DailyLoopStepper } from "@/components/DailyLoopStepper";
import { ProgressSummary } from "@/components/ProgressSummary";
import { PlanPreview } from "@/components/PlanPreview";
import { FuturePreview } from "@/components/FuturePreview";
import {
  dailyLoopSteps,
  dailyPlanMeta,
  dailyProgress,
  freePlanInfo,
} from "@/data/mockDailyLoop";

export default function DashboardPage() {
  const total = dailyLoopSteps.length;
  const nextStep = Math.min(dailyProgress.todayDone + 1, total);

  const [activeIndex, setActiveIndex] = useState(nextStep);
  const activeStep =
    dailyLoopSteps.find((s) => s.index === activeIndex) ?? dailyLoopSteps[0];

  const started = dailyProgress.todayDone > 0;
  const finished = dailyProgress.todayDone >= total;
  const primaryLabel = finished
    ? "Powtórz trening"
    : started
      ? "Kontynuuj trening"
      : "Zacznij dzisiejszy trening";

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-accent/40 bg-hero-gradient p-6 sm:p-8">
        <p className="text-sm uppercase tracking-wider text-accent-soft">
          Trener dnia
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          {dailyPlanMeta.title}
        </h1>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full border border-border px-2.5 py-0.5 text-muted">
            ≈ {dailyPlanMeta.minutes} min
          </span>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-muted">
            {dailyPlanMeta.stepsCount} kroków
          </span>
          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-accent-soft">
            Plan: {dailyPlanMeta.planLabel}
          </span>
        </div>

        <div className="mt-4 rounded-2xl border border-border/60 bg-background/40 p-4">
          <p className="text-xs uppercase tracking-wider text-accent-soft">
            Cel na dziś
          </p>
          <p className="mt-1 text-sm">{dailyPlanMeta.goal}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => setActiveIndex(nextStep)}
            className="inline-flex items-center justify-center rounded-xl bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
          >
            {primaryLabel}
          </button>
          <Link
            href="/recording?path=daily-loop"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm transition hover:bg-surfaceElevated"
          >
            🎙 Nagraj 30 sekund
          </Link>
        </div>
      </section>

      <DailyTaskCard step={activeStep} totalSteps={total} />

      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-semibold">Dzisiejsza ścieżka</h2>
          <DailyLoopStepper
            steps={dailyLoopSteps}
            activeIndex={activeIndex}
            doneCount={dailyProgress.todayDone}
            onSelect={setActiveIndex}
          />
        </div>
        <ProgressSummary progress={dailyProgress} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <PlanPreview
          planLabel={freePlanInfo.planLabel}
          perks={freePlanInfo.perks}
        />
        <FuturePreview />
      </div>
    </div>
  );
}
