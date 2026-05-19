import type { ProgressLog } from "@/types";

export const mockProgress: ProgressLog[] = [
  { date: "2026-05-13", score: 62, recordingsCount: 1, streakDays: 1 },
  { date: "2026-05-14", score: 65, recordingsCount: 2, streakDays: 2 },
  { date: "2026-05-15", score: 68, recordingsCount: 1, streakDays: 3 },
  { date: "2026-05-16", score: 70, recordingsCount: 2, streakDays: 4 },
  { date: "2026-05-17", score: 73, recordingsCount: 3, streakDays: 5 },
  { date: "2026-05-18", score: 71, recordingsCount: 1, streakDays: 6 },
  { date: "2026-05-19", score: 74, recordingsCount: 1, streakDays: 7 },
];

export const mockVoiceInfluenceScore = {
  current: 74,
  delta: 3,
  level: "Pewny mówca",
};
