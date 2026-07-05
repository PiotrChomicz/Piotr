import type { TrendWord, WordChallenge, WordOfDay } from "@/types";

export const mockWordOfDay: WordOfDay = {
  word: "esencja",
  definition:
    "Najistotniejsza warstwa czegoś — to, co naprawdę się liczy, gdy odrzucisz całą resztę.",
  examples: [
    "Esencja tej oferty to nie cena, tylko zaoszczędzony czas.",
    "Jeśli wytniesz wszystko, co zbędne, zostaje esencja Twojej wypowiedzi.",
    "W trzech zdaniach pokaż mi esencję tego projektu.",
  ],
};

export const mockTrendWords: TrendWord[] = [
  {
    word: "vibe",
    note: "Klimat i energia rozmowy lub miejsca. Działa lepiej niż „atmosfera”, ale używaj rzadko.",
    status: "gorace",
  },
  {
    word: "lore",
    note: "Historia i legenda osoby lub marki — to, co ludzie o Tobie wiedzą i opowiadają dalej.",
    status: "rosnace",
  },
  {
    word: "delulu",
    note: "Ironicznie o byciu w iluzji. Świetne w humorze, zabójcze w biznesie — nie mylić kontekstów.",
    status: "gorace",
  },
  {
    word: "based",
    note: "Coś niepopularnego, ale prawdziwego. Mocny materiał na hook w krótkim wideo.",
    status: "rosnace",
  },
  {
    word: "cozy",
    note: "Przytulnie, bezpiecznie, kameralnie. Ociepla ofertę i opis produktu.",
    status: "swieze",
  },
  {
    word: "momentum",
    note: "Rozpęd, który sam się napędza. Brzmi profesjonalnie w rozmowie o wynikach.",
    status: "rosnace",
  },
];

export const mockActiveUsageChallenge: WordChallenge = {
  word: "esencja",
  task: "Nagraj 20–30 sekund, w których w naturalny sposób użyjesz słowa „esencja”. Opowiedz o czymś, co robisz, i wskaż, co jest w tym najważniejsze.",
  durationSec: 25,
  tip: "Nie wciskaj słowa na siłę. Wrzuć je tam, gdzie i tak chcesz podkreślić sedno.",
};
