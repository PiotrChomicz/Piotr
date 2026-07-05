"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/Badge";
import { RandomMachine } from "@/components/RandomMachine";
import { mockScenes } from "@/data/mockScenarios";
import type { ExerciseDifficulty, Scene, SceneCategory } from "@/types";

const FEATURED_ID = "cam-02";

const categoryMeta: {
  key: SceneCategory;
  label: string;
  icon: string;
}[] = [
  { key: "przelam-kamere", label: "Przełam kamerę", icon: "🎥" },
  { key: "tiktok", label: "TikTok / Reels", icon: "📱" },
  { key: "negocjacje", label: "Negocjacje", icon: "🤝" },
  { key: "storytelling", label: "Storytelling", icon: "🎬" },
  { key: "aktorstwo", label: "Aktorstwo / impro", icon: "🎭" },
  { key: "absurd", label: "Absurd / humor", icon: "🤪" },
  { key: "wystapienie", label: "Wystąpienie", icon: "🎤" },
];

const difficultyMeta: Record<
  ExerciseDifficulty,
  { label: string; className: string }
> = {
  latwy: { label: "Łatwy", className: "bg-emerald-500/15 text-emerald-200" },
  sredni: { label: "Średni", className: "bg-accent/20 text-accent-soft" },
  trudny: { label: "Trudny", className: "bg-rose-500/15 text-rose-200" },
};

function categoryLabel(key: SceneCategory) {
  return categoryMeta.find((c) => c.key === key)?.label ?? key;
}
function categoryIcon(key: SceneCategory) {
  return categoryMeta.find((c) => c.key === key)?.icon ?? "🎬";
}

export default function ScriptsPage() {
  const featured =
    mockScenes.find((s) => s.id === FEATURED_ID) ?? mockScenes[0];

  const [activeScene, setActiveScene] = useState<Scene>(featured);
  const [category, setCategory] = useState<SceneCategory | "wszystkie">(
    "wszystkie"
  );
  const [firstOnly, setFirstOnly] = useState(false);

  const filtered = mockScenes.filter((s) => {
    if (firstOnly && !s.firstContact) return false;
    if (category !== "wszystkie" && s.category !== category) return false;
    return true;
  });

  return (
    <div className="space-y-14">
      <header>
        <p className="text-sm uppercase tracking-wider text-muted">Scenki</p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Przełam się. To tylko 30 sekund.
        </h1>
        <p className="mt-2 max-w-2xl text-muted">
          Wylosuj wyzwanie, przeczytaj tekst startowy i nagraj swoją wersję.
          Nie chodzi o perfekcję — chodzi o start.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col rounded-3xl border border-accent/40 bg-hero-gradient p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <Badge className="bg-accent/25 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-accent-soft">
              Scenka Dnia
            </Badge>
            <span className="text-xs text-muted">
              {categoryIcon(featured.category)} {categoryLabel(featured.category)}
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            {featured.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{featured.situation}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
            <Badge className="border border-border px-2.5 py-0.5 text-muted">
              ⏱ {featured.durationSec}s
            </Badge>
            <Badge
              className={`px-2.5 py-0.5 ${difficultyMeta[featured.difficulty].className}`}
            >
              {difficultyMeta[featured.difficulty].label}
            </Badge>
          </div>
          <button
            onClick={() => setActiveScene(featured)}
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-border bg-surface/60 px-5 py-2.5 text-sm transition hover:bg-surfaceElevated"
          >
            Otwórz tę scenkę
          </button>
        </div>

        <RandomMachine
          items={mockScenes}
          getLabel={(s) => s.title}
          onReveal={setActiveScene}
          initialItem={featured}
          countText={`${mockScenes.length} scenek`}
          buttonLabel="🎲 Wylosuj wyzwanie"
        />
      </section>

      <section
        key={activeScene.id}
        className="animate-scene-reveal rounded-3xl border border-border/60 bg-surface p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-accent/15 px-2.5 py-0.5 text-[11px] text-accent-soft">
            {categoryIcon(activeScene.category)} {categoryLabel(activeScene.category)}
          </Badge>
          <Badge className="border border-border px-2.5 py-0.5 text-[11px] text-muted">
            ⏱ {activeScene.durationSec}s
          </Badge>
          <Badge
            className={`px-2.5 py-0.5 text-[11px] ${difficultyMeta[activeScene.difficulty].className}`}
          >
            {difficultyMeta[activeScene.difficulty].label}
          </Badge>
          {activeScene.firstContact && (
            <Badge className="bg-emerald-500/15 px-2.5 py-0.5 text-[11px] text-emerald-200">
              🔰 Pierwszy kontakt
            </Badge>
          )}
        </div>

        <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
          {activeScene.title}
        </h2>
        <p className="mt-2 text-muted">{activeScene.situation}</p>

        <div className="mt-6 rounded-2xl border border-accent/30 bg-hero-gradient p-5">
          <p className="text-xs uppercase tracking-wider text-accent-soft">
            Tekst startowy
          </p>
          <p className="mt-2 text-lg font-medium text-white">
            „{activeScene.starter}”
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
            <p className="text-xs uppercase tracking-wider text-muted">
              Cel ćwiczenia
            </p>
            <p className="mt-1 text-sm">{activeScene.goal}</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
            <p className="text-xs uppercase tracking-wider text-muted">
              Jak to zrobić
            </p>
            <p className="mt-1 text-sm">{activeScene.instruction}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-border/60 bg-background/40 p-4">
          <p className="text-xs uppercase tracking-wider text-accent-soft">
            Wskazówka głosowa
          </p>
          <p className="mt-1 text-sm text-muted">{activeScene.tip}</p>
        </div>

        <p className="mt-5 flex items-center gap-2 text-xs text-muted">
          <span>🎧</span>
          W tej wersji nagrywamy tylko audio. Wyobraź sobie kamerę, a trenuj
          głos.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/recording?path=scripts&scenario=${activeScene.id}`}
            className="inline-flex items-center justify-center rounded-xl bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
          >
            🎙 Nagraj swoją wersję (Audio)
          </Link>
          <Link
            href="/vocabulary"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surfaceElevated px-5 py-3 text-sm transition hover:bg-background"
          >
            ✨ Powiedz to lepiej
          </Link>
          <Link
            href="/jokes"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-surfaceElevated px-5 py-3 text-sm transition hover:bg-background"
          >
            🎤 Dodaj humor do scenki
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Wybierz kategorię
          </h2>
          <p className="text-sm text-muted">
            Albo włącz tryb pierwszego kontaktu, jeśli dopiero zaczynasz.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("wszystkie")}
            className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
              category === "wszystkie"
                ? "border-accent bg-accent/15 text-accent-soft"
                : "border-border bg-surface text-muted hover:bg-surfaceElevated"
            }`}
          >
            Wszystkie
          </button>
          {categoryMeta.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                category === c.key
                  ? "border-accent bg-accent/15 text-accent-soft"
                  : "border-border bg-surface text-muted hover:bg-surfaceElevated"
              }`}
            >
              <span className="mr-1">{c.icon}</span>
              {c.label}
            </button>
          ))}
          <button
            onClick={() => setFirstOnly((v) => !v)}
            className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
              firstOnly
                ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-200"
                : "border-border bg-surface text-muted hover:bg-surfaceElevated"
            }`}
          >
            🔰 Pierwszy kontakt z kamerą
          </button>
        </div>

        {firstOnly && (
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/5 p-4 text-sm text-emerald-100">
            Nie chodzi o perfekcję. Chodzi o start. Proste zadania na 10–30
            sekund — żeby po prostu usłyszeć swój głos.
          </div>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => {
            const isActive = s.id === activeScene.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveScene(s)}
                className={`flex flex-col rounded-2xl border p-5 text-left transition ${
                  isActive
                    ? "border-accent bg-surfaceElevated"
                    : "border-border/60 bg-surface hover:border-accent/60 hover:bg-surfaceElevated"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">
                    {categoryIcon(s.category)} {categoryLabel(s.category)}
                  </span>
                  <Badge
                    className={`px-2 py-0.5 text-[10px] ${difficultyMeta[s.difficulty].className}`}
                  >
                    {difficultyMeta[s.difficulty].label}
                  </Badge>
                </div>
                <h3 className="mt-3 text-base font-medium text-white">
                  {s.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted">
                  {s.situation}
                </p>
                <span className="mt-3 text-xs text-accent-soft">
                  ⏱ {s.durationSec}s · otwórz →
                </span>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-muted">
            Brak scenek dla tego filtra. Wyłącz „Pierwszy kontakt” albo wybierz
            inną kategorię.
          </p>
        )}
      </section>
    </div>
  );
}
