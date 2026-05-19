# CLAUDE.md — instrukcje dla AI pracującej nad projektem

## O projekcie

**VoiceCharisma AI** to webowa aplikacja do treningu głosu, dykcji, pewności
siebie, modulacji, słownictwa, mówienia przed kamerą, generowania scenek,
żartów, skryptów TikTok/Reels, negocjacji i autoprezentacji.

**Główna obietnica:** mów wyraźniej, ciekawiej, zabawniej i pewniej —
do kamery, ludzi, klientów i publiczności.

**Główny loop produktowy:**
`wybierz cel → zrób ćwiczenie głosowe → nagraj wypowiedź → dostań AI feedback →
zobacz Voice Influence Score → dostań kolejną misję → zobacz progres`

Etap obecny: **MVP / klikalny prototyp** — bez bazy, bez płatności, bez
prawdziwego API AI. Wszystkie odpowiedzi AI generowane z mock data.

## Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS 3**
- **React 19**
- **MediaRecorder API** dla nagrywania głosu w przeglądarce
- Mobile-first, responsywny design
- Język interfejsu: **polski**

## Tone of voice — bardzo ważne

VoiceCharisma AI **NIE** jest aplikacją medyczną, logopedyczną ani
psychologiczną. Nie wolno używać sformułowań typu:

- ❌ „wylecz wadę wymowy"
- ❌ „diagnoza zaburzeń mowy"
- ❌ „terapia głosu"
- ❌ „wykrywamy kłamstwo / emocje"
- ❌ „leczenie nieśmiałości"

Należy używać:

- ✅ trening głosu / dykcji / komunikacji
- ✅ modulacja głosu
- ✅ pewność mówienia
- ✅ wpływ w rozmowie
- ✅ ekspresja przed kamerą
- ✅ wskaźniki, sugestie, trening

Feedback ma być **konkretny**: 1 błąd, 1 poprawka, 1 ćwiczenie. Nigdy ogólny.

## Konwencje kodu

- Wszystko w `src/`.
- Strony: `src/app/<route>/page.tsx`.
- Komponenty: `src/components/` (PascalCase).
- Mock data: `src/data/`.
- Typy domeny: `src/types/`.
- Serwisy (API/AI mocki): `src/services/`.
- Szkice promptów AI: `src/prompts/`.
- Konfiguracja: `src/lib/`.
- Alias ścieżki: `@/*` → `src/*`.
- Tylko niezbędne komentarze (WHY, nie WHAT).
- Emoji tylko w UI list/kart modułów; nie w nazwach funkcji ani komentarzach.

## Stylistyka wizualna (dark premium + akcent fioletowy)

- `background` (#0a0a0f), `surface` (#121221), `surfaceElevated` (#1a1a2e).
- `border` (#2a2a3d), `muted` (#8b8ba7).
- Akcent: `#a855f7` → `#7c3aed`.
- Gradienty: `bg-hero-gradient`, `bg-accent-gradient`.
- Cień akcentu: `shadow-glow`.

## Struktura folderów

```
src/
  app/                        # Next.js App Router
    layout.tsx
    page.tsx                  # landing
    globals.css
    dashboard/page.tsx
    recording/page.tsx        # MediaRecorder API
    scripts/page.tsx
    vocabulary/page.tsx
    jokes/page.tsx
    feedback/page.tsx
  components/                 # komponenty UI
    Navbar.tsx
    Footer.tsx
    ScoreCard.tsx
    MissionCard.tsx
    ComingSoon.tsx
  data/                       # mock data
    mockExercises.ts
    mockScenarios.ts          # camera-breaker, negocjacje, creator
    mockRephrase.ts           # Powiedz to lepiej
    mockJokes.ts
    mockVocabulary.ts         # słowo dnia, trendwords
    mockFeedback.ts
    mockDailyMissions.ts
    mockProgress.ts
  lib/
    modules.ts                # 14 modułów + ścieżki treningowe
  services/                   # interfejsy do AI/audio (mocki)
    audioService.ts           # MediaRecorder
    feedbackService.ts        # generateVoiceFeedback, transcribeRecording
  prompts/
    voiceFeedbackPrompt.ts    # szkice promptów AI na później
  types/
    index.ts                  # User, Exercise, AIFeedback, VoiceScore...
```

## Trasy aplikacji

- `/` — landing premium
- `/dashboard` — Voice Influence Score + Dzisiejsza misja + ścieżki + moduły
- `/recording` — realny MediaRecorder, timer, waveform, playback
- `/feedback` — przykładowa analiza nagrania (9 obszarów scoringu)
- `/scripts` — generator scenek (etap 2)
- `/vocabulary` — Powiedz to lepiej, słowo dnia, TrendWords (etap 2)
- `/jokes` — generator żartów, stand-up light (etap 2)

## Voice Influence Score — 9 obszarów

`dykcja, tempo, pauzy, modulacja, pewność, energia, struktura, perswazja, naturalność`

Skala 0–100 dla każdego obszaru i jeden overall.

## Czego NIE robić w obecnym etapie

- Bez Supabase, Postgresa, żadnej bazy.
- Bez Stripe, płatności, planów.
- Bez prawdziwego API AI (OpenAI, Anthropic) — mock data.
- Bez avatara AI / video.
- Bez autoryzacji użytkowników.
- Bez wysyłania nagrań na serwer — wszystko zostaje w przeglądarce.
- Bez tworzenia plików `.md` bez wyraźnej prośby.

## Praca etapami

1. **Etap 1 — fundament**: setup, dokumentacja, landing, dashboard, recording,
   feedback. ✅
2. **Etap 2 — moduły MVP**: `/scripts`, `/vocabulary` (Powiedz to lepiej + słowo
   dnia), `/jokes` — wszystko z mock data.
3. **Etap 3 — UX polish**: animacje, stany pustki, mobilne polerowanie,
   on-boarding (wybór celu).
4. **Etap 4 — integracje** (później): baza, auth, prawdziwe AI (Whisper +
   Anthropic/OpenAI), płatności.

## Uruchomienie lokalne

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```
