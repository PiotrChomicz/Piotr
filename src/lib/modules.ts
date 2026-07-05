export type ModulePriority = "core" | "premium" | "fun" | "later";

export type AppModule = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  priority: ModulePriority;
  available: boolean;
};

export const modules: AppModule[] = [
  {
    slug: "dykcja",
    title: "Dykcja i wyraźna mowa",
    description: "Łamańce, praca języka, szczęki, oddechu, wyrazistość końcówek.",
    icon: "🎯",
    href: "/recording?path=dykcja",
    priority: "core",
    available: true,
  },
  {
    slug: "modulacja",
    title: "Głos i modulacja",
    description: "Tempo, pauzy, intonacja, energia, rytm wypowiedzi.",
    icon: "🎚️",
    href: "/recording?path=modulacja",
    priority: "core",
    available: true,
  },
  {
    slug: "nagrywanie-feedback",
    title: "Nagrywanie i AI feedback",
    description: "Nagraj 30–60 sekund i zobacz ocenę tempa, pauz i wypełniaczy.",
    icon: "🎙️",
    href: "/recording",
    priority: "core",
    available: true,
  },
  {
    slug: "powiedz-lepiej",
    title: "Powiedz to lepiej",
    description: "Zamień zwykłe zdanie w wersję naturalną, biznesową, pewną lub viralową.",
    icon: "✨",
    href: "/vocabulary",
    priority: "core",
    available: true,
  },
  {
    slug: "slownictwo",
    title: "Rozbudowa słownictwa",
    description: "Słowo dnia, synonimy sytuacyjne, metafory, tryb erudycji.",
    icon: "📚",
    href: "/vocabulary#slowo-dnia",
    priority: "core",
    available: true,
  },
  {
    slug: "scenki",
    title: "Generator scenek",
    description: "Gotowe scenariusze 15–60 sekund do nagrywania.",
    icon: "🎬",
    href: "/scripts",
    priority: "core",
    available: true,
  },
  {
    slug: "camera-breaker",
    title: "Camera Breaker",
    description: "Pierwsze ćwiczenia przed kamerą bez presji.",
    icon: "🎥",
    href: "/scripts?mode=camera-breaker",
    priority: "core",
    available: true,
  },
  {
    slug: "tiktok-reels",
    title: "TikTok / Reels scripts",
    description: "Hooki, formaty krótkich nagrań, serie contentowe.",
    icon: "📱",
    href: "/scripts?mode=tiktok",
    priority: "core",
    available: true,
  },
  {
    slug: "trendwords",
    title: "TrendWords Radar",
    description: "Słowa i zwroty, które właśnie zaczynają być popularne.",
    icon: "📡",
    href: "/vocabulary?tab=trendwords",
    priority: "premium",
    available: false,
  },
  {
    slug: "zarty",
    title: "Generator żartów",
    description: "One-linery, obserwacje, setupy, riposty, humor branżowy.",
    icon: "🎤",
    href: "/jokes",
    priority: "premium",
    available: false,
  },
  {
    slug: "standup",
    title: "Stand-up light",
    description: "Timing, pauzy, puenta, kontrast, callback.",
    icon: "🎭",
    href: "/jokes?mode=standup",
    priority: "premium",
    available: false,
  },
  {
    slug: "negocjacje",
    title: "Negocjacje i roleplay",
    description: "Symulacje rozmów: za drogo, podwyżka, obiekcje, domknięcie.",
    icon: "🤝",
    href: "/scripts?mode=negocjacje",
    priority: "premium",
    available: false,
  },
  {
    slug: "pewnosc",
    title: "Pewność siebie i mowa ciała",
    description: "Mimika, kontakt wzrokowy, postawa, oddech, swoboda.",
    icon: "💪",
    href: "/recording?path=pewnosc",
    priority: "premium",
    available: false,
  },
  {
    slug: "feedback",
    title: "AI feedback po nagraniu",
    description: "Analiza tempa, pauz, wypełniaczy, wyrazistości i energii.",
    icon: "🧠",
    href: "/feedback",
    priority: "core",
    available: true,
  },
];

export const trainingPaths = [
  { slug: "dykcja", label: "Dykcja", icon: "🎯" },
  { slug: "modulacja", label: "Modulacja", icon: "🎚️" },
  { slug: "negocjacje", label: "Negocjacje", icon: "🤝" },
  { slug: "creator", label: "Creator Mode", icon: "📱" },
  { slug: "storytelling", label: "Storytelling", icon: "🎬" },
];
