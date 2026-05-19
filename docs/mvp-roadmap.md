# VoiceCharisma AI — roadmap MVP

## Strategia

Najpierw landing page i klikalny prototyp do pokazania koncepcji. Potem
działający loop nagrywania i feedbacku na mock data. Potem prawdziwa
transkrypcja i AI. Subskrypcja i B2B na końcu.

## Etap 0 — Landing page

**Cel:** sprawdzić zainteresowanie i zebrać leady.

- [x] Landing page z hero, opisem 12+ modułów i CTA.
- [x] Dark premium design, akcent fioletowy.
- [ ] Lista oczekujących (formularz email) — etap 2/3 z prostym mockiem.
- [ ] Deploy na Vercel.

## Etap 1 — Fundament (BIEŻĄCY)

**Cel:** klikalny prototyp z głównym loopem na mock data.

- [x] Setup Next.js 15 + Tailwind + TypeScript.
- [x] Landing page.
- [x] Nawigacja globalna.
- [x] Dashboard z Voice Influence Score + Dzisiejsza misja + ścieżki + moduły.
- [x] `/recording` z prawdziwym MediaRecorder API (mikrofon).
- [x] `/feedback` z mockową analizą 9 obszarów.
- [x] Typy domeny w `src/types/`.
- [x] Mock data w `src/data/`.
- [x] Service interfaces w `src/services/`.
- [x] Szkice promptów AI w `src/prompts/`.
- [x] CLAUDE.md + docs/.

## Etap 2 — Moduły MVP

**Cel:** uzupełnić brakujące moduły o mock data.

- [ ] `/scripts` — generator scenek (Camera Breaker, TikTok, Negocjacje).
- [ ] `/vocabulary` — Powiedz to lepiej (4 style) + Słowo dnia + TrendWords.
- [ ] `/jokes` — generator żartów (4 typy) + Stand-up light (timing/puenta).
- [ ] Onboarding — wybór celu treningowego (8 opcji, localStorage).
- [ ] Profil użytkownika (localStorage, bez bazy).

## Etap 3 — UX polish

**Cel:** premium feeling, bez chaosu, mobile excellence.

- [ ] Spokojne animacje (framer-motion albo CSS).
- [ ] Stany pustki ze wskazówkami.
- [ ] Audio waveform z prawdziwego mikrofonu (AnalyserNode).
- [ ] Podpowiedzi „dlaczego ten wynik" w feedbacku.
- [ ] Tryb pełnoekranowy nagrywania na mobile.
- [ ] PWA install prompt.

## Etap 4 — Backend i AI (po walidacji)

**Cel:** prawdziwa wartość AI feedbacku.

- [ ] Auth (NextAuth albo Clerk).
- [ ] Baza (Supabase albo Neon + Drizzle).
- [ ] Upload audio do storage (z RODO: zgody, usuwanie, szyfrowanie).
- [ ] Transkrypcja PL (Whisper / Deepgram / inny).
- [ ] AI feedback (Anthropic Claude albo OpenAI) z promptami z `src/prompts/`.
- [ ] Voice Influence Score wyliczany realnie z transkrypcji.

## Etap 5 — Monetyzacja

- [ ] Stripe — plany Free / Plus / Pro / Creator.
- [ ] Limity AI per plan.
- [ ] Onboarding subskrypcji.

## Etap 6 — Business panel

- [ ] Zespoły sprzedażowe.
- [ ] Roleplay negocjacyjny z raportami lidera.
- [ ] Scenariusze branżowe.

## Etap 7 — Avatar / wideo (po walidacji rynku)

- [ ] Trener wizualny.
- [ ] Analiza mowy ciała (postawa, kontakt wzrokowy, gesty).
- [ ] Zaawansowany roleplay z avatarem.

## Mierniki sukcesu MVP

- Czas do pierwszego nagrania < 60 sekund od wejścia na stronę.
- Retencja D1 > 30% (klikają drugi raz w aplikację).
- Retencja D7 > 12%.
- Średnio 3+ nagrania w pierwszym tygodniu.
- > 10% odwiedzających landing zapisuje się na waitlistę.
