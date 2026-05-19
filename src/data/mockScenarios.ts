import type { CreatorScenario, NegotiationScenario } from "@/types";

export const mockCameraBreakers = [
  "Powiedz swoje imię i jedno zdanie o sobie w 10 sekund.",
  "Zrób reklamę zwykłej łyżki, jakby była produktem premium.",
  "Wytłumacz kotu, dlaczego nie kupiłeś Bitcoina wcześniej.",
  "Przedstaw swój pomysł tak, jakbyś miał 20 sekund przed inwestorem.",
  "Opowiedz o porannej kawie jak o misji NASA.",
];

export const mockNegotiationScenarios: NegotiationScenario[] = [
  {
    id: "neg-01",
    title: "Klient mówi: za drogo",
    situation: "Klient właśnie usłyszał Twoją ofertę i mówi, że to za drogie.",
    userGoal: "Obronić cenę bez agresji i pokazać wartość.",
    otherPartyLine: "Hmm, to za drogo. Konkurencja ma taniej.",
  },
  {
    id: "neg-02",
    title: "Szef odmawia podwyżki",
    situation: "Prosisz o podwyżkę po roku pracy, szef mówi 'nie ma budżetu'.",
    userGoal: "Nie zamykać rozmowy, otworzyć następny krok.",
    otherPartyLine: "Nie mamy w tym roku budżetu na podwyżki.",
  },
  {
    id: "neg-03",
    title: "Rekruter pyta o oczekiwania finansowe",
    situation: "Pierwsza rozmowa, padło pytanie o widełki.",
    userGoal: "Nie zaniżyć i nie spalić procesu.",
    otherPartyLine: "Jakie są Twoje oczekiwania finansowe?",
  },
  {
    id: "neg-04",
    title: "Kontrahent chce rabatu",
    situation: "Stały klient prosi o 15% rabatu na kolejne zamówienie.",
    userGoal: "Zachować marżę i relację.",
    otherPartyLine: "Damy zamówienie, ale potrzebujemy 15% rabatu.",
  },
  {
    id: "neg-05",
    title: "Klient zwleka z decyzją",
    situation: "Wysłałeś ofertę 2 tygodnie temu, klient milczy.",
    userGoal: "Domknąć decyzję bez nacisku.",
    otherPartyLine: "Muszę jeszcze pomyśleć.",
  },
];

export const mockCreatorScenarios: CreatorScenario[] = [
  {
    id: "cre-01",
    title: "Hook w 5 sekund",
    description: "Otwórz nagranie zdaniem, które zatrzyma kciuk widza.",
    timeLimitSec: 5,
    example: "Gdybym wiedział to 5 lat temu, oszczędziłbym 30 tysięcy złotych.",
  },
  {
    id: "cre-02",
    title: "Teza w 15 sekund",
    description: "Postaw mocną tezę i obroń ją jednym argumentem.",
    timeLimitSec: 15,
    example:
      "Większość ludzi nie umie negocjować, bo boi się ciszy. A cisza to najtańszy argument świata.",
  },
  {
    id: "cre-03",
    title: "Historia w 30 sekund",
    description: "Sytuacja → napięcie → puenta. 30 sekund.",
    timeLimitSec: 30,
    example:
      "Mój pierwszy klient zapłacił mi 50 zł. Drugi 5000. Różnica? Jedno pytanie, które zadałem przed ofertą.",
  },
  {
    id: "cre-04",
    title: "Call to action",
    description: "Zakończ nagranie konkretnym CTA bez błagania.",
    timeLimitSec: 10,
    example: "Jeśli to brzmi sensownie, zostaw komentarz: 'chcę więcej'.",
  },
];
