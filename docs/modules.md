# VoiceCharisma AI — moduły

Konfiguracja techniczna w `src/lib/modules.ts`.

## Priorytety

- **core** — w MVP od początku.
- **premium** — w MVP, ale dla planów płatnych (gdy dojdą płatności).
- **fun** — dodatek bez obietnicy profesjonalnego efektu.
- **later** — etap po walidacji.

## Moduły

### 1. Dykcja i wyraźna mowa (core)

Łamańce językowe, praca aparatu mowy (język, szczęka, podniebienie), oddech,
końcówki wyrazów. Trzy poziomy: łatwy / średni / trudny.

**Przykład:** „W Szczebrzeszynie chrząszcz brzmi w trzcinie."

### 2. Głos i modulacja (core)

Tempo, pauzy, intonacja, energia, rytm. Jedno zdanie wypowiadane w różnych
stylach: spokojnie, pewnie, energicznie, jak lider, jak storyteller, z humorem,
z tajemnicą.

### 3. Nagrywanie i AI feedback (core)

Główny moduł produktu. Użytkownik nagrywa 30–60 sekund w przeglądarce
(MediaRecorder API). System zwraca:

- Voice Influence Score 0–100.
- 9 obszarów cząstkowych: dykcja, tempo, pauzy, modulacja, pewność, energia,
  struktura, perswazja, naturalność.
- 3 mocne strony.
- 3 rzeczy do poprawy.
- Lepszą wersję wypowiedzi.
- Ćwiczenie na jutro.

### 4. Powiedz to lepiej (core)

Użytkownik wpisuje swoje zdanie, dostaje 4 alternatywy w stylach:

- naturalny
- biznesowy
- pewny siebie
- ekspercki

Mock data: `src/data/mockRephrase.ts`.

### 5. Rozbudowa słownictwa (core)

- Słowo dnia (definicja + 3 przykłady użycia).
- Synonimy sytuacyjne.
- Bank metafor.
- Tryb erudycji / tryb prostoty.

### 6. Generator scenek (core)

Gotowe scenariusze 15–60 sekund do nagrywania.

**Kategorie:**

- Pierwszy kontakt z kamerą
- Absurdalna scenka
- Inwestycje / biznes
- Stand-up light

### 7. Camera Breaker (core)

Pierwsze ćwiczenia przed kamerą bez presji. Zabawne, krótkie, niskie progi.
Cringe detox — celowo zabawne zadania, żeby przełamać wstyd.

### 8. TikTok / Reels scripts (core)

Hooki, mini-skrypty, serie contentowe. Ćwiczenia:

- Hook w 5 sekund
- Teza w 15 sekund
- Historia w 30 sekund
- Call to action
- Intro do rolki
- Kontrowersyjna teza bez agresji
- Powiedz to z energią
- Powiedz to spokojnie i magnetycznie

**Feedback creator mode:** hook score, energia, jasność, naturalność,
potencjał retencji, mocniejszy hook.

### 9. TrendWords Radar (premium)

Wyszukiwarka słów i zwrotów, które zaczynają być popularne w social media,
biznesie i technologii. W MVP — mock data; w etapie 4 — integracja z Google
Trends + ręczna kuracja.

### 10. Generator żartów (premium)

Typy:

- one-liner
- obserwacja
- hook
- autoironia

Mock data: `src/data/mockJokes.ts`.

### 11. Stand-up light (premium)

Timing, pauzy, puenta, kontrast, przesada, odwrócenie, callback. Ćwiczenia
60-sekundowe z analizą struktury.

### 12. Negocjacje i roleplay (premium)

Roleplay tekstowy. Scenariusze:

1. Klient mówi: za drogo
2. Szef odmawia podwyżki
3. Rekruter pyta o oczekiwania finansowe
4. Kontrahent chce rabatu
5. Klient zwleka z decyzją
6. Ktoś próbuje zdominować rozmowę
7. Obrona ceny
8. Domknięcie sprzedaży

**Feedback:** siła pozycji, pewność, perswazja, błędy negocjacyjne, lepsza
odpowiedź, porada taktyczna (cisza, pytanie kalibrowane, kotwiczenie).

### 13. Pewność siebie i mowa ciała (premium)

Mimika, kontakt wzrokowy, postawa, gesty, wewnętrzna swoboda. Ćwiczenia
oddechowe i postawy. **Bez** kamery w MVP — kamera dopiero w etapie 7
(avatar/wideo) po walidacji rynku.

### 14. AI feedback po nagraniu (core)

Patrz moduł #3. Tu trzymamy w roadmapie jako oddzielną wartość, bo realnie
to serce produktu — to za to ludzie mają wracać i płacić.

## Później (po walidacji)

- **Śpiew/beatbox light (fun)** — kontrola oddechu i rytmu. Bez obietnicy
  profesjonalnej nauki śpiewu.
- **Avatar AI (later)** — animowany mentor wideo, dopiero po walidacji rynku.
