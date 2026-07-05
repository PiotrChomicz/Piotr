"use client";

import { useRef, useState } from "react";

type Props<T> = {
  items: T[];
  getLabel: (item: T) => string;
  onReveal: (item: T) => void;
  initialItem?: T;
  title?: string;
  countText?: string;
  buttonLabel?: string;
  className?: string;
};

// Wspolna "maszyna losujaca" dla /scripts i /jokes.
// Math.random zyje wylacznie w handlerze klikniecia (nie w renderze),
// wiec nie ma ryzyka hydration mismatch.
export function RandomMachine<T>({
  items,
  getLabel,
  onReveal,
  initialItem,
  title = "Maszyna Losująca",
  countText,
  buttonLabel = "🎲 Wylosuj",
  className = "",
}: Props<T>) {
  const [display, setDisplay] = useState<T>(initialItem ?? items[0]);
  const [isShuffling, setIsShuffling] = useState(false);
  const busyRef = useRef(false);

  const pick = () => items[Math.floor(Math.random() * items.length)];

  const handleShuffle = () => {
    if (busyRef.current || items.length === 0) return;
    busyRef.current = true;
    setIsShuffling(true);
    let ticks = 0;
    const iv = setInterval(() => {
      setDisplay(pick());
      ticks += 1;
      if (ticks > 9) {
        clearInterval(iv);
        const final = pick();
        setDisplay(final);
        onReveal(final);
        setIsShuffling(false);
        busyRef.current = false;
      }
    }, 75);
  };

  return (
    <div
      className={`flex flex-col rounded-3xl border border-border/60 bg-surface p-6 sm:p-7 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted">
          {title}
        </span>
        {countText && <span className="text-xs text-muted">{countText}</span>}
      </div>

      <div className="mt-4 flex flex-1 items-center justify-center">
        <div className="relative w-full">
          <div className="absolute inset-0 -rotate-6 rounded-2xl border border-border/50 bg-surfaceElevated/60" />
          <div className="absolute inset-0 rotate-3 rounded-2xl border border-border/50 bg-surfaceElevated/80" />
          <div className="relative rounded-2xl border border-accent/40 bg-background/70 p-5 text-center">
            <p className="text-[10px] uppercase tracking-wider text-muted">
              {isShuffling ? "Tasuję…" : "Gotowe do losowania"}
            </p>
            <p
              className={`mt-2 min-h-[2.5rem] text-base font-medium text-white ${isShuffling ? "animate-shuffle" : ""}`}
            >
              {getLabel(display)}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleShuffle}
        disabled={isShuffling}
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-accent-gradient px-5 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90 disabled:opacity-60"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
