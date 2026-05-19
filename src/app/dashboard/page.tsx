import Link from "next/link";
import { modules, trainingPaths } from "@/lib/modules";
import { ScoreCard } from "@/components/ScoreCard";
import { MissionCard } from "@/components/MissionCard";
import { mockVoiceInfluenceScore } from "@/data/mockProgress";
import { mockDailyMission, mockMissionStreak } from "@/data/mockDailyMissions";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-sm uppercase tracking-wider text-muted">Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Cześć! Co dziś trenujemy?
        </h1>
        <p className="mt-2 text-muted">
          Wybierz ścieżkę albo wskocz w dzisiejszą misję.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ScoreCard
            score={mockVoiceInfluenceScore.current}
            delta={mockVoiceInfluenceScore.delta}
            level={mockVoiceInfluenceScore.level}
          />
        </div>
        <div className="lg:col-span-3">
          <MissionCard
            mission={mockDailyMission}
            streakDays={mockMissionStreak.streakDays}
          />
        </div>
      </div>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Ścieżki treningowe</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {trainingPaths.map((p) => (
            <Link
              key={p.slug}
              href={`/recording?path=${p.slug}`}
              className="rounded-2xl border border-border/60 bg-surface p-4 text-center transition hover:border-accent/60 hover:bg-surfaceElevated"
            >
              <div className="text-2xl">{p.icon}</div>
              <div className="mt-2 text-sm">{p.label}</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Wszystkie moduły</h2>
          <span className="text-xs text-muted">
            {modules.filter((m) => m.available).length} dostępne ·{" "}
            {modules.filter((m) => !m.available).length} wkrótce
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.slug}
              href={m.href}
              className="group flex flex-col rounded-2xl border border-border/60 bg-surface p-5 transition hover:border-accent/60 hover:bg-surfaceElevated"
            >
              <div className="flex items-start justify-between">
                <div className="text-2xl">{m.icon}</div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                    m.available
                      ? "bg-accent/20 text-accent-soft"
                      : "border border-border text-muted"
                  }`}
                >
                  {m.available ? "Dostępne" : "Wkrótce"}
                </span>
              </div>
              <h3 className="mt-3 text-base font-medium">{m.title}</h3>
              <p className="mt-1 text-sm text-muted">{m.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
