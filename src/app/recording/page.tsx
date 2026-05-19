"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  createAudioRecorder,
  type AudioRecorderHandle,
  type AudioRecording,
} from "@/services/audioService";

type Phase = "idle" | "permission-error" | "recording" | "review";

export default function RecordingPage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [recording, setRecording] = useState<AudioRecording | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const recorderRef = useRef<AudioRecorderHandle | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
      recorderRef.current?.cancel();
      if (recording?.url) URL.revokeObjectURL(recording.url);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStart = async () => {
    setErrorMsg(null);
    try {
      const r = await createAudioRecorder();
      recorderRef.current = r;
      await r.start();
      setElapsed(0);
      setPhase("recording");
      tickRef.current = setInterval(() => {
        setElapsed((e) => e + 1);
      }, 1000);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Nie udało się uruchomić mikrofonu.";
      setErrorMsg(message);
      setPhase("permission-error");
    }
  };

  const handleStop = async () => {
    if (!recorderRef.current) return;
    if (tickRef.current) clearInterval(tickRef.current);
    const result = await recorderRef.current.stop();
    setRecording(result);
    setPhase("review");
  };

  const handleRetry = () => {
    if (recording?.url) URL.revokeObjectURL(recording.url);
    setRecording(null);
    setElapsed(0);
    setPhase("idle");
  };

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-8">
        <p className="text-sm uppercase tracking-wider text-muted">
          Nagrywanie
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Powiedz to z pauzą
        </h1>
        <p className="mt-2 text-muted">
          Nagraj 30 sekund. Celowo zrób 2 pauzy po 1 sekundzie — przed każdym
          ważnym słowem.
        </p>
      </header>

      <div className="rounded-3xl border border-border/60 bg-surface p-8 text-center">
        <p className="text-xs uppercase tracking-wider text-muted">
          {phase === "recording" ? "Nagrywam" : "Gotowy"}
        </p>
        <p className="mt-2 font-mono text-5xl tabular-nums sm:text-6xl">
          {formatTime(elapsed)}
        </p>

        <Waveform active={phase === "recording"} />

        {phase === "idle" && (
          <button
            onClick={handleStart}
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-accent-gradient px-8 py-4 text-base font-medium text-white shadow-glow transition hover:opacity-90"
          >
            ● Rozpocznij nagrywanie
          </button>
        )}

        {phase === "recording" && (
          <button
            onClick={handleStop}
            className="mt-6 inline-flex items-center justify-center rounded-2xl border border-rose-500/60 bg-rose-500/10 px-8 py-4 text-base font-medium text-rose-200 transition hover:bg-rose-500/20"
          >
            ■ Zatrzymaj
          </button>
        )}

        {phase === "permission-error" && (
          <div className="mt-6 space-y-3">
            <p className="text-sm text-rose-300">
              {errorMsg ||
                "Brak dostępu do mikrofonu. Sprawdź uprawnienia przeglądarki."}
            </p>
            <button
              onClick={handleStart}
              className="rounded-xl border border-border bg-surfaceElevated px-5 py-2.5 text-sm transition hover:bg-background"
            >
              Spróbuj ponownie
            </button>
          </div>
        )}

        {phase === "review" && recording && (
          <div className="mt-6 space-y-4">
            <p className="text-sm text-muted">
              Nagranie gotowe · {recording.durationSec.toFixed(1)} sekundy
            </p>
            <audio
              controls
              src={recording.url}
              className="mx-auto w-full max-w-md"
            />
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={handleRetry}
                className="rounded-xl border border-border bg-surfaceElevated px-5 py-2.5 text-sm transition hover:bg-background"
              >
                Nagraj jeszcze raz
              </button>
              <Link
                href="/feedback"
                className="rounded-xl bg-accent-gradient px-6 py-2.5 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
              >
                Zobacz feedback →
              </Link>
            </div>
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        Nagranie nie jest wysyłane na serwer. Zostaje w Twojej przeglądarce.
      </p>
    </div>
  );
}

function Waveform({ active }: { active: boolean }) {
  return (
    <div className="mt-6 flex h-16 items-center justify-center gap-1.5">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className={`block w-1.5 rounded-full transition-all ${
            active
              ? "animate-pulse bg-accent"
              : "bg-border"
          }`}
          style={{
            height: active
              ? `${10 + ((i * 7) % 40)}px`
              : "8px",
            animationDelay: `${(i * 80) % 800}ms`,
          }}
        />
      ))}
    </div>
  );
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
