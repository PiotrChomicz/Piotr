import Link from "next/link";
import { modules } from "@/lib/modules";

export default function LandingPage() {
  return (
    <div className="space-y-20 sm:space-y-28">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-hero-gradient px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs uppercase tracking-wider text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Prototyp MVP · v0.1
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Mów{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              wyraźniej, ciekawiej i pewniej
            </span>
            <br className="hidden sm:block" /> — do kamery, klientów i publiczności.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg">
            VoiceCharisma AI to Twój osobisty trener głosu, charyzmy i języka.
            Nagraj 30 sekund, dostań konkretny feedback i ćwiczenie na jutro.
            Bez teorii. Bez wstydu. Bez wymówek.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/recording"
              className="w-full rounded-xl bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90 sm:w-auto"
            >
              Nagraj pierwsze ćwiczenie
            </Link>
            <Link
              href="/dashboard"
              className="w-full rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-white transition hover:bg-surfaceElevated sm:w-auto"
            >
              Otwórz dashboard
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Jak to działa</h2>
          <p className="mt-2 text-sm text-muted">W pięciu krokach.</p>
        </div>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { n: 1, t: "Wybierz cel", d: "Wyraźniej, pewniej, na kamerze, w negocjacjach." },
            { n: 2, t: "Dostań ćwiczenie", d: "Krótkie 30–60 sek zadanie na dziś." },
            { n: 3, t: "Nagraj się", d: "Mikrofon w przeglądarce, bez instalacji." },
            { n: 4, t: "Zobacz feedback", d: "Konkretny: 1 błąd, 1 poprawka, 1 ćwiczenie." },
            { n: 5, t: "Wracaj jutro", d: "Voice Influence Score rośnie z dnia na dzień." },
          ].map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-border/60 bg-surface p-5"
            >
              <div className="text-xs uppercase tracking-wider text-accent-soft">
                Krok {step.n}
              </div>
              <h3 className="mt-2 text-base font-medium">{step.t}</h3>
              <p className="mt-1 text-sm text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="mb-8 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Wszystkie moduły treningowe
            </h2>
            <p className="mt-2 text-sm text-muted">
              Od dykcji po negocjacje — jedna siłownia komunikacji.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="text-sm text-accent-soft hover:underline"
          >
            Otwórz dashboard →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <article
              key={m.slug}
              className="group rounded-2xl border border-border/60 bg-surface p-5 transition hover:border-accent/60 hover:bg-surfaceElevated"
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
              <h3 className="mt-3 text-base font-medium text-white">
                {m.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{m.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-surface p-8 sm:p-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Dla kogo jest VoiceCharisma AI?
            </h2>
            <p className="mt-3 text-muted">
              Dla twórców treści, sprzedawców, prezenterów, podcasterów,
              nauczycieli, kandydatów do pracy — i każdego, kto chce mówić
              pewniej i ciekawiej.
            </p>
            <p className="mt-3 text-sm text-muted">
              VoiceCharisma AI to trener komunikacji, nie aplikacja medyczna.
              Nie diagnozujemy wad wymowy. Trenujemy głos, dykcję, modulację
              i pewność mówienia.
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            {[
              "Krótkie ćwiczenia 3–5 minut dziennie",
              "Mobile-first — trenuj z telefonu",
              "Polski język i polskie konteksty",
              "Voice Influence Score 0–100",
              "Codzienna misja z serią dni 🔥",
              "Nagrania zostają w przeglądarce",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
