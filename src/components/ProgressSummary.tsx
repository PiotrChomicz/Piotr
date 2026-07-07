import type { DailyProgress } from "@/types";

type Props = {
  progress: DailyProgress;
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

// Prosty panel progresu na mock data. Najblizszy cel jest KONKRETNY, z przykladem.
export function ProgressSummary({ progress }: Props) {
  const pct = Math.max(
    0,
    Math.min(100, Math.round((progress.voiceInfluenceScore / progress.scoreMax) * 100))
  );
  return (
    <div className="rounded-3xl border border-border/60 bg-surface p-6">
      <p className="text-xs uppercase tracking-wider text-muted">Twój postęp</p>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat
          label="Voice Influence Score"
          value={`${progress.voiceInfluenceScore}/${progress.scoreMax}`}
        />
        <Stat label="Streak" value={`${progress.streakDays} dni 🔥`} />
        <Stat
          label="Dziś"
          value={`${progress.todayDone}/${progress.todayTotal} kroków`}
        />
        <Stat label="Ten tydzień" value={`${progress.weekTrainings} treningów`} />
      </div>

      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-background">
        <div
          className="h-full rounded-full bg-accent-gradient transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-5 rounded-2xl border border-accent/30 bg-background/40 p-4">
        <p className="text-xs uppercase tracking-wider text-accent-soft">
          Najbliższy cel
        </p>
        <p className="mt-1 text-sm text-muted">{progress.nextGoal}</p>
      </div>
    </div>
  );
}
