import type { DailyMission } from "@/types";

export const mockDailyMission: DailyMission = {
  id: "mission-2026-05-19",
  title: "Powiedz to z pauzą",
  description:
    "Nagraj 30 sekund, w których celowo zrobisz 2 pauzy po 1 sekundzie — przed każdym ważnym słowem.",
  durationSec: 30,
  reward: 8,
  path: "modulacja",
};

export const mockMissionStreak = {
  streakDays: 4,
  bestStreak: 9,
  todayCompleted: false,
};
