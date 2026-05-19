import type { AIFeedback } from "@/types";

export const mockFeedback: AIFeedback = {
  recordingId: "rec-mock-01",
  score: {
    overall: 74,
    areas: {
      dykcja: 78,
      tempo: 65,
      pauzy: 60,
      modulacja: 70,
      pewnosc: 80,
      energia: 85,
      struktura: 72,
      perswazja: 68,
      naturalnosc: 82,
    },
  },
  strengths: [
    "Otwarcie wypowiedzi z dobrą energią.",
    "Wyraźna artykulacja głosek 'sz' i 'cz'.",
    "Naturalny, konwersacyjny ton.",
  ],
  improvements: [
    "Mówisz odrobinę za szybko — zwolnij o około 15%.",
    "Brakuje pauzy przed puentą — daj sobie 1 sekundę przed ostatnim zdaniem.",
    "Masz 6 wypełniaczy w 60 sekund (eee, yyy, no). Cel: schodzić do 3.",
  ],
  betterVersion:
    "Powiedziałeś: 'no więc generalnie chciałbym powiedzieć, że ten produkt jest naprawdę fajny'.\nLepsza wersja: 'Ten produkt rozwiązuje konkretny problem. Pokażę Ci jaki, w 30 sekund.'",
  tomorrowExercise:
    "Jutro: nagraj to samo zdanie 3 razy, za każdym razem z dłuższą pauzą przed ostatnim wyrazem.",
};
