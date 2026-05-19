type Props = {
  score: number;
  delta: number;
  level: string;
};

export function ScoreCard({ score, delta, level }: Props) {
  const pct = Math.max(0, Math.min(100, score));
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-hero-gradient p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted">
            Voice Influence Score
          </p>
          <p className="mt-2 text-5xl font-semibold sm:text-6xl">{score}</p>
          <p className="mt-1 text-sm text-muted">
            <span
              className={
                delta >= 0 ? "text-accent-soft" : "text-rose-400"
              }
            >
              {delta >= 0 ? "+" : ""}
              {delta}
            </span>{" "}
            od ostatniego treningu · {level}
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="grid h-20 w-20 place-items-center rounded-full border border-accent/60 bg-surface text-2xl shadow-glow">
            🎙️
          </div>
        </div>
      </div>

      <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-full bg-accent-gradient transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
