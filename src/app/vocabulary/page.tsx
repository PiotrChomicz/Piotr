"use client";

import Link from "next/link";
import { useState } from "react";
import { mockRephraseExamples } from "@/data/mockRephrase";
import {
  mockActiveUsageChallenge,
  mockTrendWords,
  mockWordOfDay,
} from "@/data/mockVocabulary";
import type { RephraseStyle, TrendStatus } from "@/types";

const styleMeta: { key: RephraseStyle; label: string; icon: string }[] = [
  { key: "naturalny", label: "Naturalna", icon: "💬" },
  { key: "biznesowy", label: "Biznesowa", icon: "💼" },
  { key: "pewny-siebie", label: "Pewna siebie", icon: "🔥" },
  { key: "elegancki", label: "Elegancka", icon: "🎩" },
  { key: "viralowy", label: "Viralowa", icon: "🚀" },
  { key: "krotki", label: "Krótka i mocna", icon: "⚡" },
];

const trendMeta: Record<TrendStatus, { label: string; className: string }> = {
  swieze: {
    label: "Świeże",
    className: "border border-border text-muted",
  },
  rosnace: {
    label: "Rosnące",
    className: "bg-accent/20 text-accent-soft",
  },
  gorace: {
    label: "Gorące",
    className: "bg-rose-500/15 text-rose-200",
  },
};

export default function VocabularyPage() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [style, setStyle] = useState<RephraseStyle>("naturalny");
  const [showAll, setShowAll] = useState(false);

  const example = mockRephraseExamples[exampleIndex];
  const active = example.outputs[style];
  const activeLabel = styleMeta.find((s) => s.key === style)?.label ?? "";

  return (
    <div className="space-y-16">
      <header>
        <p className="text-sm uppercase tracking-wider text-muted">
          Słownictwo
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Mów ciekawiej, mądrzej i naturalniej
        </h1>
        <p className="mt-2 max-w-2xl text-muted">
          Filar językowy VoiceCharisma. Weź zwykłe zdanie i zobacz, jak to samo
          brzmi z charyzmą — bez sztuczności i profesorskiego bełkotu.
        </p>
      </header>

      <section id="powiedz-lepiej" className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold sm:text-2xl">Powiedz to lepiej</h2>
          <p className="text-sm text-muted">
            Wybierz zdanie, potem przełączaj style i porównuj wersje.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {mockRephraseExamples.map((ex, i) => (
            <button
              key={ex.input}
              onClick={() => setExampleIndex(i)}
              className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                i === exampleIndex
                  ? "border-accent bg-accent/15 text-accent-soft"
                  : "border-border bg-surface text-muted hover:bg-surfaceElevated"
              }`}
            >
              {ex.input}
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-rose-500/30 bg-surface p-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-rose-500/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-rose-200">
                Przed
              </span>
              <span className="text-xs text-muted">wersja słabsza</span>
            </div>
            <p className="mt-4 text-lg text-white">„{example.input}”</p>
            <p className="mt-3 text-sm text-muted">{example.weakness}</p>
          </div>

          <div className="rounded-3xl border border-accent/50 bg-hero-gradient p-6 shadow-glow">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-accent/25 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-accent-soft">
                Po
              </span>
              <span className="text-xs text-muted">{activeLabel}</span>
            </div>
            <p className="mt-4 text-lg font-medium text-white">
              „{active.text}”
            </p>
            <div className="mt-4 rounded-2xl border border-border/60 bg-background/40 p-3">
              <p className="text-xs uppercase tracking-wider text-accent-soft">
                Dlaczego działa
              </p>
              <p className="mt-1 text-sm text-muted">{active.why}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {styleMeta.map((s) => (
            <button
              key={s.key}
              onClick={() => setStyle(s.key)}
              className={`rounded-xl border px-3.5 py-2 text-sm transition ${
                s.key === style
                  ? "border-accent bg-accent/15 text-white"
                  : "border-border bg-surface text-muted hover:bg-surfaceElevated"
              }`}
            >
              <span className="mr-1.5">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        <div>
          <button
            onClick={() => setShowAll((v) => !v)}
            className="text-sm text-accent-soft hover:underline"
          >
            {showAll ? "Ukryj porównanie" : "Pokaż wszystkie wersje obok siebie"}
          </button>

          {showAll && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {styleMeta.map((s) => {
                const v = example.outputs[s.key];
                return (
                  <div
                    key={s.key}
                    className="flex flex-col rounded-2xl border border-border/60 bg-surface p-4"
                  >
                    <div className="text-xs uppercase tracking-wider text-accent-soft">
                      <span className="mr-1">{s.icon}</span>
                      {s.label}
                    </div>
                    <p className="mt-2 text-sm text-white">„{v.text}”</p>
                    <p className="mt-2 text-xs text-muted">{v.why}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section id="slowo-dnia" className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-2 rounded-3xl border border-accent/40 bg-hero-gradient p-6 sm:p-8">
          <p className="text-xs uppercase tracking-wider text-accent-soft">
            Słowo dnia
          </p>
          <p className="mt-2 text-4xl font-semibold text-white">
            {mockWordOfDay.word}
          </p>
          <p className="mt-3 text-sm text-muted">{mockWordOfDay.definition}</p>
        </div>
        <div className="lg:col-span-3 rounded-3xl border border-border/60 bg-surface p-6 sm:p-8">
          <p className="text-xs uppercase tracking-wider text-muted">
            Użyj tego w zdaniu
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {mockWordOfDay.examples.map((ex) => (
              <li key={ex} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="trendwords" className="space-y-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold sm:text-2xl">TrendWords Radar</h2>
          <p className="text-sm text-muted">
            Słowa, które właśnie zyskują na popularności. Używaj świadomie — moc
            znika, gdy wrzucasz je wszędzie.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mockTrendWords.map((t) => (
            <div
              key={t.word}
              className="flex flex-col rounded-2xl border border-border/60 bg-surface p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-white">
                  {t.word}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider ${trendMeta[t.status].className}`}
                >
                  {trendMeta[t.status].label}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="cwiczenie"
        className="rounded-3xl border border-accent/40 bg-surface p-6 sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-5 sm:items-center">
          <div className="sm:col-span-3">
            <p className="text-xs uppercase tracking-wider text-accent-soft">
              Ćwiczenie aktywnego użycia
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              Użyj słowa „{mockActiveUsageChallenge.word}” na głos
            </h2>
            <p className="mt-3 text-sm text-muted">
              {mockActiveUsageChallenge.task}
            </p>
            <p className="mt-3 rounded-2xl border border-border/60 bg-background/40 p-3 text-sm text-muted">
              Wskazówka: {mockActiveUsageChallenge.tip}
            </p>
          </div>
          <div className="sm:col-span-2">
            <div className="rounded-3xl border border-border/60 bg-hero-gradient p-6 text-center">
              <p className="text-5xl font-semibold text-white">
                {mockActiveUsageChallenge.durationSec}s
              </p>
              <p className="mt-1 text-xs text-muted">tyle wystarczy</p>
              <Link
                href="/recording?path=creator"
                className="mt-5 inline-block w-full rounded-xl bg-accent-gradient px-5 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
              >
                Przejdź do scenki i nagraj wypowiedź →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
