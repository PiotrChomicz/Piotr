import type { RephraseExample } from "@/types";

export const mockRephraseExamples: RephraseExample[] = [
  {
    input: "Nie wiem, czy to ma sens.",
    outputs: {
      naturalny: "Mam wątpliwości, czy ten kierunek jest najlepszy.",
      biznesowy: "Warto jeszcze zweryfikować opłacalność tego rozwiązania.",
      "pewny-siebie":
        "Na tym etapie nie widzę wystarczających argumentów, żeby w to wejść.",
      ekspercki:
        "Ten kierunek wymaga dodatkowej walidacji w trzech wymiarach: rynku, kosztu i ryzyka.",
    },
  },
  {
    input: "Ten pomysł jest fajny.",
    outputs: {
      naturalny: "Ten pomysł naprawdę mnie wciąga.",
      biznesowy: "Ten pomysł ma sensowny potencjał komercyjny.",
      "pewny-siebie": "Ten pomysł jest mocny i wart pierwszej iteracji.",
      ekspercki:
        "Ten pomysł jest obiecujący, prosty komunikacyjnie i ma potencjał komercyjny.",
    },
  },
  {
    input: "Trochę się tym zajmę.",
    outputs: {
      naturalny: "Wezmę to na siebie.",
      biznesowy: "Przejmuję odpowiedzialność za ten temat.",
      "pewny-siebie": "Ja to ogarniam, dam znać w piątek.",
      ekspercki:
        "Przejmuję ten obszar i wracam z planem działania do końca tygodnia.",
    },
  },
];
