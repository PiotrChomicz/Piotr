import type { Exercise } from "@/types";

export const mockExercises: Exercise[] = [
  {
    id: "ex-dyk-01",
    path: "dykcja",
    title: "Stół z powyłamywanymi nogami",
    instruction:
      "Powiedz łamaniec 3 razy, za każdym razem wolniej i wyraźniej. Pilnuj końcówek wyrazów.",
    textToRead: "Stół z powyłamywanymi nogami.",
    durationSec: 30,
    difficulty: "latwy",
  },
  {
    id: "ex-dyk-02",
    path: "dykcja",
    title: "Chrząszcz brzmi w trzcinie",
    instruction: "Skup się na zbitkach spółgłosek. Nie zjadaj 'sz' i 'cz'.",
    textToRead: "W Szczebrzeszynie chrząszcz brzmi w trzcinie.",
    durationSec: 30,
    difficulty: "sredni",
  },
  {
    id: "ex-mod-01",
    path: "modulacja",
    title: "Powiedz to spokojnie i magnetycznie",
    instruction:
      "Powiedz: 'To jest najważniejsza decyzja w tym tygodniu.' z pauzami przed słowem 'najważniejsza'.",
    textToRead: "To jest najważniejsza decyzja w tym tygodniu.",
    durationSec: 20,
    difficulty: "sredni",
  },
  {
    id: "ex-mod-02",
    path: "modulacja",
    title: "Powiedz to z energią",
    instruction: "To samo zdanie, ale z energią lidera otwierającego spotkanie.",
    textToRead: "To jest najważniejsza decyzja w tym tygodniu.",
    durationSec: 20,
    difficulty: "sredni",
  },
  {
    id: "ex-pew-01",
    path: "pewnosc",
    title: "Postawa i oddech",
    instruction:
      "Stań prosto, weź wdech przez nos przez 4 sek, powiedz swoje imię i jedną rzecz, którą umiesz dobrze.",
    durationSec: 30,
    difficulty: "latwy",
  },
  {
    id: "ex-cre-01",
    path: "creator",
    title: "Hook w 5 sekund",
    instruction:
      "Otwórz nagranie jednym zdaniem, które zatrzyma kciuk widza w 5 sekund.",
    durationSec: 15,
    difficulty: "sredni",
  },
  {
    id: "ex-sto-01",
    path: "storytelling",
    title: "Historia w 60 sekund",
    instruction:
      "Opowiedz historię z trzech kroków: sytuacja → napięcie → puenta.",
    durationSec: 60,
    difficulty: "trudny",
  },
];
