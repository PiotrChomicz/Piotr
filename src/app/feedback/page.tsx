import Link from "next/link";
import { mockFeedback } from "@/data/mockFeedback";

const areaLabels: Record<string, string> = {
  dykcja: "Dykcja",
  tempo: "Tempo",
  pauzy: "Pauzy",
  modulacja: "Modulacja",
  pewnosc: "Pewność",
  energia: "Energia",
  struktura: "Struktura",
  perswazja: "Perswazja",
  naturalnosc: "Naturalność",
};

export default function FeedbackPage() {
  const f = mockFeedback;
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm uppercase tracking-wider text-muted">Feedback</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Wynik nagrania
        </h1>
        <p className="mt-2 text-muted">
          Mock data — w MVP feedback zwracany jest z przykładowego zestawu.
        </p>
      </header>

      <section className="grid gap-5 lg:grid-cols-5">
        <div className="lg:col-span-2 rounded-3xl border border-border/60 bg-hero-gradient p-6 sm:p-8">
          <p className="text-xs uppercase tracking-wider text-muted">
            Voice Influence Score
          </p>
          <p className="mt-2 text-6xl font-semibold">{f.score.overall}</p>
          <p className="mt-1 text-sm text-muted">na 100</p>
        </div>

        <div className="lg:col-span-3 rounded-3xl border border-border/60 bg-surface p-6 sm:p-8">
          <p className="text-xs uppercase tracking-wider text-muted">
            Wyniki cząstkowe
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {Object.entries(f.score.areas).map(([key, value]) => (
              <div key={key}>
                <div className="flex items-center justify-between text-sm">
                  <span>{areaLabels[key] ?? key}</span>
                  <span className="font-mono tabular-nums text-muted">
                    {value}
                  </span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-background">
                  <div
                    className="h-full rounded-full bg-accent-gradient"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-surface p-6">
          <h2 className="text-base font-semibold">Mocne strony</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {f.strengths.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border/60 bg-surface p-6">
          <h2 className="text-base font-semibold">Do poprawy</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {f.improvements.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {f.betterVersion && (
        <section className="rounded-3xl border border-border/60 bg-surface p-6">
          <h2 className="text-base font-semibold">Lepsza wersja wypowiedzi</h2>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm text-muted">
            {f.betterVersion}
          </pre>
        </section>
      )}

      <section className="rounded-3xl border border-accent/40 bg-surface p-6">
        <p className="text-xs uppercase tracking-wider text-accent-soft">
          Ćwiczenie na jutro
        </p>
        <p className="mt-2 text-base">{f.tomorrowExercise}</p>
      </section>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/recording"
          className="rounded-xl border border-border bg-surfaceElevated px-5 py-2.5 text-sm transition hover:bg-background"
        >
          Powtórz ćwiczenie
        </Link>
        <Link
          href="/dashboard"
          className="rounded-xl bg-accent-gradient px-6 py-2.5 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
        >
          Następna misja →
        </Link>
      </div>
    </div>
  );
}
