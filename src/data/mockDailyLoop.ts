import type { DailyLoopStep, DailyProgress } from "@/types";

export const dailyPlanMeta = {
  title: "Dzisiejszy trening komunikacji",
  minutes: 6,
  stepsCount: 6,
  planLabel: "Free",
  // Cel dnia = co + jak + przyklad. Zaden pusty slogan.
  goal: "Mów odrobinę wolniej, po najważniejszym zdaniu zrób 1 sekundę pauzy i zakończ konkretnym wnioskiem — np. „Dlatego zaczynam od małego testu” albo „To jest najważniejsza decyzja na dziś”.",
};

export const dailyLoopSteps: DailyLoopStep[] = [
  {
    index: 1,
    title: "Słowo dnia",
    task: "Dodaj jedno mocniejsze słowo do aktywnego słownika.",
    instruction: "Ułóż jedno zdanie z dzisiejszym słowem tak, żeby brzmiało naturalnie w rozmowie.",
    example: "Zamiast: „To jest dobre.” → „To jest konkretne rozwiązanie, które możemy szybko sprawdzić.”",
    ctaLabel: "Ćwicz słownictwo",
    href: "/vocabulary",
    icon: "📚",
  },
  {
    index: 2,
    title: "Powiedz to lepiej",
    task: "Zamień jedno słabe zdanie na jaśniejsze i pewniejsze.",
    instruction: "Wytnij asekurację i zacznij od konkretu.",
    example: "Zamiast: „wydaje mi się…” → „Moja propozycja jest taka…”",
    ctaLabel: "Powiedz to lepiej",
    href: "/vocabulary",
    icon: "✨",
  },
  {
    index: 3,
    title: "Scenka dnia",
    task: "Przełam wejście w wypowiedź jednym zdaniem otwierającym.",
    instruction: "Otwórz krótko i konkretnie, bez rozgrzewki i tłumaczenia się.",
    example: "Np. „Mam jedną konkretną myśl…” i od razu przechodzisz do rzeczy.",
    ctaLabel: "Otwórz scenkę",
    href: "/scripts",
    icon: "🎬",
  },
  {
    index: 4,
    title: "Humor / riposta dnia",
    task: "Poćwicz pauzę i timing na jednym żarcie.",
    instruction: "Powiedz setup, zatrzymaj się na 1 sekundę i dopiero potem dodaj puentę.",
    example: "Setup → [1 sekunda ciszy] → puenta. Cisza przed puentą robi połowę roboty.",
    ctaLabel: "Trenuj humor",
    href: "/jokes",
    icon: "🎤",
  },
  {
    index: 5,
    title: "Nagraj 30 sekund",
    task: "Nagraj krótką wypowiedź audio o jednej rzeczy.",
    instruction: "Wybierz jedną myśl, którą dziś chcesz powiedzieć jaśniej, i nagraj ją na głos.",
    example: "Np. „Dziś chcę jaśniej wytłumaczyć, po co robimy ten projekt.”",
    ctaLabel: "Nagraj 30 sekund",
    href: "/recording?path=daily-loop",
    icon: "🎙️",
  },
  {
    index: 6,
    title: "Feedback",
    task: "Zobacz przykładową analizę i zadanie na jutro.",
    instruction: "Przejrzyj wynik i wybierz jeden obszar, który poprawisz następnym razem.",
    example: "Zwróć uwagę na tempo, pauzy i zakończenie wypowiedzi.",
    ctaLabel: "Zobacz feedback",
    href: "/feedback",
    icon: "🧠",
  },
];

export const dailyProgress: DailyProgress = {
  voiceInfluenceScore: 42,
  scoreMax: 100,
  streakDays: 3,
  todayDone: 2,
  todayTotal: 6,
  weekTrainings: 5,
  nextGoal:
    "Zaczynaj zdania od konkretu, np. „Proponuję…”, „Moim wnioskiem jest…”, „Następny krok to…”.",
};

// Informacyjnie — bez gatingu, bez blokowania funkcji.
export const freePlanInfo = {
  planLabel: "Free",
  perks: [
    "3 nagrania dziennie",
    "podstawowy feedback",
    "ograniczona historia treningów",
  ],
};
