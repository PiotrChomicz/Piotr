// Warstwa dostepu / subskrypcji (role, plany, limity) — przygotowanie pod baze.
export * from "./access";

// Peer feedback + profil postepu (oceny wyboru, metryki, snapshoty) — pod baze.
export * from "./peer-feedback";

export type UserGoal =
  | "wyrazniej"
  | "pewniej"
  | "negocjacje"
  | "kamera"
  | "modulacja"
  | "storytelling"
  | "charyzma"
  | "kreatywnosc";

export type User = {
  id: string;
  name: string;
  goal: UserGoal;
  createdAt: string;
};

export type TrainingPath =
  | "dykcja"
  | "modulacja"
  | "negocjacje"
  | "creator"
  | "storytelling"
  | "pewnosc";

export type ExerciseDifficulty = "latwy" | "sredni" | "trudny";

export type Exercise = {
  id: string;
  path: TrainingPath;
  title: string;
  instruction: string;
  textToRead?: string;
  durationSec: number;
  difficulty: ExerciseDifficulty;
};

export type Recording = {
  id: string;
  exerciseId?: string;
  durationSec: number;
  createdAt: string;
  blobUrl?: string;
};

export type Transcription = {
  recordingId: string;
  text: string;
  language: "pl";
  wordsPerMinute?: number;
};

export type ScoreArea =
  | "dykcja"
  | "tempo"
  | "pauzy"
  | "modulacja"
  | "pewnosc"
  | "energia"
  | "struktura"
  | "perswazja"
  | "naturalnosc";

export type VoiceScore = {
  overall: number;
  areas: Record<ScoreArea, number>;
};

export type AIFeedback = {
  recordingId: string;
  score: VoiceScore;
  strengths: string[];
  improvements: string[];
  betterVersion?: string;
  tomorrowExercise: string;
};

export type NegotiationScenario = {
  id: string;
  title: string;
  situation: string;
  userGoal: string;
  otherPartyLine: string;
};

export type CreatorScenario = {
  id: string;
  title: string;
  description: string;
  timeLimitSec: number;
  example: string;
};

export type SceneCategory =
  | "przelam-kamere"
  | "tiktok"
  | "negocjacje"
  | "storytelling"
  | "aktorstwo"
  | "absurd"
  | "wystapienie";

export type Scene = {
  id: string;
  category: SceneCategory;
  title: string;
  situation: string;
  starter: string;
  goal: string;
  durationSec: number;
  difficulty: ExerciseDifficulty;
  instruction: string;
  tip: string;
  firstContact?: boolean;
};

export type DailyMission = {
  id: string;
  title: string;
  description: string;
  durationSec: number;
  reward: number;
  path: TrainingPath;
};

export type ProgressLog = {
  date: string;
  score: number;
  recordingsCount: number;
  streakDays: number;
};

// Dashboard Daily Loop — pojedynczy krok codziennego treningu.
// Kazdy krok niesie co/jak/przyklad, zeby instrukcja nie byla pustym haslem.
export type DailyLoopStep = {
  index: number; // 1..N
  title: string;
  task: string; // CO zrobic
  instruction: string; // JAK to zrobic
  example: string; // PRZYKLAD
  ctaLabel: string;
  href: string;
  icon: string;
};

export type DailyProgress = {
  voiceInfluenceScore: number;
  scoreMax: number;
  streakDays: number;
  todayDone: number;
  todayTotal: number;
  weekTrainings: number;
  nextGoal: string; // konkretny, z przykladem — nie puste haslo
};

export type RephraseStyle =
  | "naturalny"
  | "biznesowy"
  | "pewny-siebie"
  | "elegancki"
  | "viralowy"
  | "krotki";

export type RephraseVersion = {
  text: string;
  why: string;
};

export type RephraseExample = {
  input: string;
  weakness: string;
  outputs: Record<RephraseStyle, RephraseVersion>;
};

export type JokeType = "one-liner" | "obserwacja" | "hook" | "autoironia";

export type Joke = {
  id: string;
  type: JokeType;
  text: string;
  category: string;
  // Anatomia zartu (opcjonalna) — pod tryb Stand-up light i sekcje techniki.
  setup?: string;
  punch?: string;
  technique?: string;
  why?: string;
};

export type WordOfDay = {
  word: string;
  definition: string;
  examples: string[];
};

export type TrendStatus = "swieze" | "rosnace" | "gorace";

export type TrendWord = {
  word: string;
  note: string;
  status: TrendStatus;
};

export type WordChallenge = {
  word: string;
  task: string;
  durationSec: number;
  tip: string;
};
