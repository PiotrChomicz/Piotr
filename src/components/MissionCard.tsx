import Link from "next/link";
import type { DailyMission } from "@/types";

type Props = {
  mission: DailyMission;
  streakDays: number;
};

export function MissionCard({ mission, streakDays }: Props) {
  return (
    <div className="rounded-3xl border border-border/60 bg-surface p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wider text-muted">
          Dzisiejsza misja
        </p>
        <span className="rounded-full border border-border bg-surfaceElevated px-2.5 py-0.5 text-xs text-accent-soft">
          Seria: {streakDays} dni 🔥
        </span>
      </div>
      <h2 className="mt-3 text-xl font-semibold sm:text-2xl">
        {mission.title}
      </h2>
      <p className="mt-2 text-sm text-muted">{mission.description}</p>

      <div className="mt-5 flex items-center gap-3 text-xs text-muted">
        <span className="rounded-md border border-border bg-surfaceElevated px-2 py-1">
          ⏱ {mission.durationSec}s
        </span>
        <span className="rounded-md border border-border bg-surfaceElevated px-2 py-1">
          +{mission.reward} pkt
        </span>
      </div>

      <Link
        href="/recording?mission=today"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-accent-gradient px-4 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90 sm:w-auto"
      >
        Rozpocznij trening →
      </Link>
    </div>
  );
}
