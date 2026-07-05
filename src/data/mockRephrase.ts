import type { RephraseExample } from "@/types";

export const mockRephraseExamples: RephraseExample[] = [
  {
    input: "Nie wiem, czy to ma sens.",
    weakness: "Brzmi niepewnie i zrzuca decyzję na drugą osobę.",
    outputs: {
      naturalny: {
        text: "Mam wątpliwości, czy to najlepszy kierunek.",
        why: "Mówisz jak człowiek, ale nazywasz wątpliwość zamiast się chować.",
      },
      biznesowy: {
        text: "Warto to jeszcze zweryfikować, zanim ruszymy dalej.",
        why: "Zamiast „nie wiem” proponujesz konkretny następny krok.",
      },
      "pewny-siebie": {
        text: "Na razie nie widzę argumentów, żeby w to wchodzić.",
        why: "Bierzesz stanowisko. Wątpliwość brzmi jak decyzja, nie jak lęk.",
      },
      elegancki: {
        text: "Zanim pójdziemy dalej, chciałbym to lepiej zrozumieć.",
        why: "Spokój i kultura słowa — pytasz, nie krytykujesz.",
      },
      viralowy: {
        text: "Wszyscy to robią. Może właśnie dlatego warto się zatrzymać.",
        why: "Kontrast i lekki prowokacyjny hook — zatrzymuje uwagę.",
      },
      krotki: {
        text: "Jeszcze mnie to nie przekonuje.",
        why: "Jedno zdanie, zero waty. Punkt postawiony.",
      },
    },
  },
  {
    input: "Ten pomysł jest fajny.",
    weakness: "„Fajny” nic nie znaczy — nie wiadomo, co konkretnie działa.",
    outputs: {
      naturalny: {
        text: "Ten pomysł naprawdę mnie wciąga.",
        why: "Pokazujesz reakcję, nie pustą ocenę.",
      },
      biznesowy: {
        text: "Ten pomysł ma realny potencjał komercyjny.",
        why: "Zamieniasz emocję na wartość, którą można obronić.",
      },
      "pewny-siebie": {
        text: "Ten pomysł jest mocny i wart pierwszej iteracji.",
        why: "Ocena plus rekomendacja działania — brzmisz jak decydent.",
      },
      elegancki: {
        text: "To pomysł, do którego chętnie wrócę na spokojnie.",
        why: "Docenienie bez przesady, z klasą.",
      },
      viralowy: {
        text: "Ten pomysł jest tak prosty, że aż podejrzanie dobry.",
        why: "Zaskoczenie w drugiej połowie zdania — chce się słuchać dalej.",
      },
      krotki: {
        text: "To ma potencjał.",
        why: "Trzy słowa, konkret. Reszta jest zbędna.",
      },
    },
  },
  {
    input: "Trochę się tym zajmę.",
    weakness: "„Trochę” rozmywa odpowiedzialność i termin.",
    outputs: {
      naturalny: {
        text: "Wezmę to na siebie.",
        why: "Krótko i po ludzku bierzesz temat.",
      },
      biznesowy: {
        text: "Przejmuję ten temat i wracam z planem do piątku.",
        why: "Odpowiedzialność plus termin — druga strona wie, czego oczekiwać.",
      },
      "pewny-siebie": {
        text: "Ja to ogarniam. Dam znać, jak będzie gotowe.",
        why: "Zero asekuracji, pełna własność zadania.",
      },
      elegancki: {
        text: "Chętnie się tym zajmę i zadbam o szczegóły.",
        why: "Deklaracja z kulturą i troską o jakość.",
      },
      viralowy: {
        text: "Nikt tego nie ruszył. Dobra, biorę.",
        why: "Napięcie i decyzja w jednym — brzmi jak scena, nie mail.",
      },
      krotki: {
        text: "Biorę to.",
        why: "Dwa słowa. Maksimum decyzji, minimum słów.",
      },
    },
  },
  {
    input: "Chciałbym może kiedyś nagrać film.",
    weakness: "„Może kiedyś” zabija każdy plan, zanim się zaczął.",
    outputs: {
      naturalny: {
        text: "Chcę w końcu nagrać ten pierwszy film.",
        why: "„W końcu” zamienia marzenie w zamiar.",
      },
      biznesowy: {
        text: "Planuję nagrać pierwszy materiał w tym miesiącu.",
        why: "Konkretny zakres i ramy czasowe zamiast mgły.",
      },
      "pewny-siebie": {
        text: "Nagrywam pierwszy film w ten weekend.",
        why: "Czas teraźniejszy plus termin — deklaracja, nie życzenie.",
      },
      elegancki: {
        text: "Dojrzałem do tego, żeby nagrać swój pierwszy film.",
        why: "Spokojna pewność, bez chełpliwości.",
      },
      viralowy: {
        text: "Zero doświadczenia, kamera w telefonie. Nagrywam.",
        why: "Szczery kontrast — to formuła, która niesie się w sieci.",
      },
      krotki: {
        text: "Nagrywam. W ten weekend.",
        why: "Urwane zdania dają rytm i determinację.",
      },
    },
  },
  {
    input: "Przepraszam, że zawracam głowę, mam małe pytanie.",
    weakness: "Nadmiar przeprosin osłabia Cię, zanim cokolwiek powiesz.",
    outputs: {
      naturalny: {
        text: "Hej, mam do Ciebie krótkie pytanie.",
        why: "Ciepło, bez zbędnych przeprosin za samo istnienie.",
      },
      biznesowy: {
        text: "Mam jedno pytanie, które przyspieszy nam decyzję.",
        why: "Ramujesz pytanie jako wartość, nie jako kłopot.",
      },
      "pewny-siebie": {
        text: "Mam pytanie — zajmie nam minutę.",
        why: "Szacunek do czasu obu stron, zero podłażenia.",
      },
      elegancki: {
        text: "Czy mógłbym prosić o chwilę na jedno pytanie?",
        why: "Uprzejmie i z klasą, ale bez umniejszania sobie.",
      },
      viralowy: {
        text: "Jedno pytanie, które pewnie też sobie zadajesz.",
        why: "Wciągasz rozmówcę do wspólnej ciekawości.",
      },
      krotki: {
        text: "Mam szybkie pytanie.",
        why: "Bez wstępu. Od razu do rzeczy.",
      },
    },
  },
];
