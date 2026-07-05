// Peer Feedback & Progress Profile — WYLACZNIE przygotowanie architektoniczne.
// Brak UI, brak auth, brak Supabase connect, brak uploadu nagran, brak social feedu.
// Zasada: oceniamy NAGRANIE / cwiczenie, nie czlowieka. Domyslnie prywatne.
//
// UWAGA: wszystkie opcje ocen to String Literal Types (unie stringow), NIE enumy.
// Powod: lzejsze, lepiej mapuja sie na wartosci tekstowe w Supabase, brak
// problemow z serializacja, prostsze w przyszlym shared core dla web/mobile.

// --- Zamkniete oceny kryteriow (String Literal Types) ---

export type ClarityRating = "weak" | "ok" | "good" | "excellent";

export type PaceRating = "too_slow" | "good" | "too_fast";

export type EnergyRating = "low" | "natural" | "strong";

export type ConfidenceRating = "unsure" | "stable" | "confident";

export type NaturalnessRating = "stiff" | "natural" | "very_natural";

export type UnderstandingRating = "unclear" | "clear" | "very_clear";

export type PauseRating = "too_few" | "good" | "too_many";

export type CharismaRating = "neutral" | "interesting" | "engaging";

// --- Wybory zamkniete ---

export type BestElement =
  | "voice"
  | "pace"
  | "energy"
  | "wording"
  | "humor"
  | "naturalness"
  | "confidence";

export type ImprovementArea =
  | "slow_down"
  | "add_pauses"
  | "articulate_endings"
  | "add_energy"
  | "shorten_message"
  | "reduce_fillers"
  | "stronger_ending";

// --- Peer review (oceny nagrania, glownie wybory zamkniete) ---

// Komplet ocen kryteriow dla jednej recenzji (kazde kryterium opcjonalne).
export type PeerReviewRating = {
  clarity?: ClarityRating;
  pace?: PaceRating;
  energy?: EnergyRating;
  confidence?: ConfidenceRating;
  naturalness?: NaturalnessRating;
  understanding?: UnderstandingRating;
  pause?: PauseRating;
  charisma?: CharismaRating;
};

// Wybory: jedna rzecz najlepsza + jedna do poprawy.
export type PeerReviewChoice = {
  bestElement?: BestElement;
  improvementArea?: ImprovementArea;
};

// Znormalizowany, POCHODNY wynik liczbowy (do wykresow/agregacji, liczony pozniej).
export type PeerReviewScore = {
  metric: ProgressMetric;
  value: number; // 0-100
  max: number; // zwykle 100
};

// Widocznosc nagrania/recenzji. Domyslnie "private".
// Publiczne porownywanie uzytkownikow NIE jest czescia MVP.
export type ReviewVisibility = "private" | "unlisted" | "peer_pool";

// Status moderacji (wspolny dla kolejek i zgloszen).
export type ModerationStatus = "pending" | "approved" | "rejected" | "flagged";

export type PeerReview = {
  id: string;
  recordingId: string; // oceniamy nagranie, nie osobe
  reviewerId: string;
  ratings: PeerReviewRating;
  choice: PeerReviewChoice;
  scores?: PeerReviewScore[]; // opcjonalne, wyliczane pozniej
  // Komentarz tekstowy DOPIERO PO moderacji, w przyszlosci — na razie opcjonalny.
  note?: string;
  visibility: ReviewVisibility;
  moderation: ModerationStatus;
  createdAt: string;
};

export type ReviewQueueItem = {
  id: string;
  recordingId: string;
  submittedBy: string;
  status: ModerationStatus;
  createdAt: string;
};

// --- Prywatnosc i bezpieczenstwo ---

export type PrivacySettings = {
  userId: string;
  defaultRecordingVisibility: ReviewVisibility; // domyslnie "private"
  allowPeerReview: boolean; // domyslnie false — user sam wybiera
  showInLeaderboards: boolean; // domyslnie false — brak toksycznych rankingow
};

export type AbuseReport = {
  id: string;
  targetType: "recording" | "peer_review";
  targetId: string;
  reportedBy: string;
  reason: string;
  status: ModerationStatus;
  createdAt: string;
};

// --- Profil postepu / metryki (HISTORYCZNE snapshoty, nie nadpisywanie) ---

// Obszary umiejetnosci sledzone w czasie.
export type ProgressMetric =
  | "voice_influence"
  | "diction"
  | "confidence"
  | "vocabulary"
  | "storytelling"
  | "humor_timing"
  | "negotiation";

// Skad pochodzi pomiar.
export type ProgressSource = "ai_feedback" | "peer_review" | "self" | "system";

// Pojedynczy HISTORYCZNY punkt metryki (timestamp obowiazkowy).
// Nie nadpisujemy ostatniej wartosci — kazdy pomiar to nowy wiersz.
export type UserProgressMetric = {
  userId: string;
  metric: ProgressMetric;
  scoreValue: number;
  scoreMax: number;
  source: ProgressSource;
  relatedTrainingSessionId?: string;
  createdAt: string; // timestamp — seria punktow w czasie
};

// Snapshot Voice Influence Score jako punkt w czasie (pod wykresy trendu).
export type VoiceInfluenceSnapshot = {
  userId: string;
  scoreValue: number;
  scoreMax: number;
  source: ProgressSource;
  relatedTrainingSessionId?: string;
  relatedRecordingId?: string;
  createdAt: string; // timestamp — dane historyczne
};

export type UserBadge = {
  id: string;
  userId: string;
  badgeKey: string;
  awardedAt: string;
};
