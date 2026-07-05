import type { PlanEntitlements, SubscriptionPlan } from "@/types/access";

// PRZYGOTOWANIE ARCHITEKTONICZNE — NIE JEST JESZCZE EGZEKWOWANE.
// Zadna funkcja UI ani API nie sprawdza teraz tych limitow. Docelowo wartosci
// przejda do bazy (definicje planow) i beda weryfikowane po stronie serwera.
// TODO(Supabase): przeniesc do tabeli plan definitions + sprawdzac w API.
// TODO(Stripe): mapowac plan subskrypcji na SubscriptionPlan po webhooku.

export const PLAN_ENTITLEMENTS: Record<SubscriptionPlan, PlanEntitlements> = {
  free: {
    plan: "free",
    maxContentAccessLevel: "free",
    limits: [
      { feature: "recordings", dailyLimit: 3 },
      { feature: "scene_shuffles", dailyLimit: 5 },
      { feature: "jokes", dailyLimit: 5 },
      { feature: "vocabulary_rephrase", dailyLimit: 3 },
      { feature: "ai_feedback", dailyLimit: 1 },
      { feature: "progress_history", dailyLimit: 0 },
    ],
    advancedAiFeedback: false,
    advancedReports: false,
    teamPanel: false,
  },
  plus: {
    plan: "plus",
    maxContentAccessLevel: "plus",
    limits: [
      { feature: "recordings", dailyLimit: 20 },
      { feature: "scene_shuffles", dailyLimit: 50 },
      { feature: "jokes", dailyLimit: 50 },
      { feature: "vocabulary_rephrase", dailyLimit: 30 },
      { feature: "ai_feedback", dailyLimit: 10 },
      { feature: "progress_history", dailyLimit: null },
    ],
    advancedAiFeedback: false,
    advancedReports: false,
    teamPanel: false,
  },
  pro: {
    plan: "pro",
    maxContentAccessLevel: "pro",
    limits: [
      { feature: "recordings", dailyLimit: null },
      { feature: "scene_shuffles", dailyLimit: null },
      { feature: "jokes", dailyLimit: null },
      { feature: "vocabulary_rephrase", dailyLimit: null },
      { feature: "ai_feedback", dailyLimit: null },
      { feature: "progress_history", dailyLimit: null },
    ],
    advancedAiFeedback: true,
    advancedReports: true,
    teamPanel: false,
  },
  business: {
    plan: "business",
    maxContentAccessLevel: "business",
    limits: [
      { feature: "recordings", dailyLimit: null },
      { feature: "scene_shuffles", dailyLimit: null },
      { feature: "jokes", dailyLimit: null },
      { feature: "vocabulary_rephrase", dailyLimit: null },
      { feature: "ai_feedback", dailyLimit: null },
      { feature: "progress_history", dailyLimit: null },
    ],
    advancedAiFeedback: true,
    advancedReports: true,
    teamPanel: true,
  },
};
