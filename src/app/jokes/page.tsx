"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/Badge";
import { RandomMachine } from "@/components/RandomMachine";
import { mockJokes } from "@/data/mockJokes";
import type { Joke, JokeType } from "@/types";

const FEATURED_ID = "joke-01";

const typeMeta: { key: JokeType; label: string; icon: string }[] = [
  { key: "one-liner", label: "One-liner", icon: "⚡" },
  { key: "obserwacja", label: "Obserwacja", icon: "👀" },
  { key: "hook", label: "Hook", icon: "🪝" },
  { key: "autoironia", label: "Autoironia", icon: "🙃" },
];

function typeLabel(key: JokeType) {
  return typeMeta.find((t) => t.key === key)?.label ?? key;
}
function typeIcon(key: JokeType) {
  return typeMeta.find((t) => t.key === key)?.icon ?? "🎤";
}

export default function JokesPage() {
  const featured = mockJokes.find((j) => j.id === FEATURED_ID) ?? mockJokes[0];

  const [activeJoke, setActiveJoke] = useState<Joke>(featured);
  const [type, setType] = useState<JokeType | "wszystkie">("wszystkie");
  const [standup, setStandup] = useState(false);

  const filtered = mockJokes.filter(
    (j) => type === "wszystkie" || j.type === type
  );

  const canStandup = Boolean(activeJoke.setup && activeJoke.punch);

  return (
    <div className="space-y-14">
      <header>
        <p className="text-sm uppercase tracking-wider text-muted">Humor Coach</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Mów tak, żeby ludzie się uśmiechali
        </h1>
        <p className="mt-2 max-w-2xl text-muted">
          Humor to nie talent, tylko struktura. Wylosuj żart, rozbierz go na
          części i przećwicz na głos — z pauzą i puentą.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col rounded-3xl border border-accent/40 bg-hero-gradient p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <Badge className="bg-accent/25 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-accent-soft">
              Żart Dnia
            </Badge>
            <span className="text-xs text-muted">
              {typeIcon(featured.type)} {typeLabel(featured.type)}
            </span>
          </div>
          <p className="mt-4 text-lg font-medium text-white">
            „{featured.text}”
          </p>
          {featured.technique && (
            <p className="mt-3 text-xs text-muted">
              Technika: {featured.technique}
            </p>
          )}
          <button
            onClick={() => setActiveJoke(featured)}
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-border bg-surface/60 px-5 py-2.5 text-sm transition hover:bg-surfaceElevated"
          >
            Rozłóż ten żart
          </button>
        </div>

        <RandomMachine
          items={mockJokes}
          getLabel={(j) => j.text}
          onReveal={setActiveJoke}
          initialItem={featured}
          title="Maszyna żartów"
          countText={`${mockJokes.length} żartów`}
          buttonLabel="🎲 Wylosuj żart"
        />
      </section>

      <section
        key={activeJoke.id}
        className="animate-scene-reveal rounded-3xl border border-border/60 bg-surface p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-accent/15 px-2.5 py-0.5 text-[11px] text-accent-soft">
            {typeIcon(activeJoke.type)} {typeLabel(activeJoke.type)}
          </Badge>
          <Badge className="border border-border px-2.5 py-0.5 text-[11px] text-muted">
            #{activeJoke.category}
          </Badge>
          {activeJoke.technique && (
            <Badge className="bg-emerald-500/15 px-2.5 py-0.5 text-[11px] text-emerald-200">
              🧩 {activeJoke.technique}
            </Badge>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-accent/30 bg-hero-gradient p-5">
          {standup && canStandup ? (
            <div className="space-y-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-accent-soft">
                  Setup
                </p>
                <p className="mt-1 text-lg font-medium text-white">
                  {activeJoke.setup}
                </p>
              </div>
              <p className="text-center text-xs uppercase tracking-[0.3em] text-muted">
                — pauza —
              </p>
              <div>
                <p className="text-xs uppercase tracking-wider text-accent-soft">
                  Puenta
                </p>
                <p className="mt-1 text-lg font-medium text-white">
                  {activeJoke.punch}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-xl font-medium text-white">
              „{activeJoke.text}”
            </p>
          )}
        </div>

        <button
          onClick={() => setStandup((v) => !v)}
          disabled={!canStandup}
          className={`mt-4 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition disabled:opacity-40 ${
            standup
              ? "border-accent bg-accent/15 text-white"
              : "border-border bg-surfaceElevated text-muted hover:bg-background"
          }`}
        >
          🎭 Tryb Stand-up light {standup ? "(włączony)" : ""}
        </button>
        {standup && (
          <p className="mt-2 text-xs text-muted">
            Powiedz setup, zrób realną pauzę na 1 sekundę, dopiero potem puenta.
            Cisza przed puentą robi połowę roboty.
          </p>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
            <p className="text-xs uppercase tracking-wider text-muted">
              Anatomia żartu
            </p>
            <p className="mt-1 text-sm">
              Technika: <span className="text-white">{activeJoke.technique ?? "—"}</span>
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
            <p className="text-xs uppercase tracking-wider text-accent-soft">
              Dlaczego to działa
            </p>
            <p className="mt-1 text-sm text-muted">{activeJoke.why ?? "—"}</p>
          </div>
        </div>

        <p className="mt-5 flex items-center gap-2 text-xs text-muted">
          <span>🎧</span>
          W tej wersji nagrywamy tylko audio. Ćwicz timing, pauzę i puentę
          głosem.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/recording?path=jokes&joke=${activeJoke.id}`}
            className="inline-flex items-center justify-center rounded-xl bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
          >
            🎙 Nagraj jako scenkę (Audio)
          </Link>
          <Link
            href="/vocabulary"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surfaceElevated px-5 py-3 text-sm transition hover:bg-background"
          >
            ✨ Powiedz to lepiej
          </Link>
          <Link
            href="/scripts"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surfaceElevated px-5 py-3 text-sm transition hover:bg-background"
          >
            🎬 Wróć do scenek
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold sm:text-2xl">Wybierz typ humoru</h2>
          <p className="text-sm text-muted">
            Każdy typ trenuje inny mięsień: skrót, obserwację, zaczepkę albo
            dystans do siebie.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setType("wszystkie")}
            className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
              type === "wszystkie"
                ? "border-accent bg-accent/15 text-accent-soft"
                : "border-border bg-surface text-muted hover:bg-surfaceElevated"
            }`}
          >
            Wszystkie
          </button>
          {typeMeta.map((t) => (
            <button
              key={t.key}
              onClick={() => setType(t.key)}
              className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                type === t.key
                  ? "border-accent bg-accent/15 text-accent-soft"
                  : "border-border bg-surface text-muted hover:bg-surfaceElevated"
              }`}
            >
              <span className="mr-1">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((j) => {
            const isActive = j.id === activeJoke.id;
            return (
              <button
                key={j.id}
                onClick={() => setActiveJoke(j)}
                className={`flex flex-col rounded-2xl border p-5 text-left transition ${
                  isActive
                    ? "border-accent bg-surfaceElevated"
                    : "border-border/60 bg-surface hover:border-accent/60 hover:bg-surfaceElevated"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">
                    {typeIcon(j.type)} {typeLabel(j.type)}
                  </span>
                  {j.technique && (
                    <span className="text-[10px] text-accent-soft">
                      {j.technique}
                    </span>
                  )}
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-white">
                  „{j.text}”
                </p>
                <span className="mt-3 text-xs text-accent-soft">
                  rozłóż żart →
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
