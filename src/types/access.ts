// Warstwa dostepu / subskrypcji — WYLACZNIE przygotowanie architektoniczne.
// Brak auth, brak Stripe, brak Supabase connect, brak RLS, brak gatingu w UI.
// Te typy opisuja przyszly model danych, zeby dalo sie go pozniej podlaczyc.

export type UserRole = "user" | "premium_user" | "admin";

export type SubscriptionPlan = "free" | "plus" | "pro" | "business";

// Poziom dostepu przypisany do pojedynczej tresci treningowej
// (scena, zart, slowo, cwiczenie, prompt...).
export type AccessLevel = "free" | "plus" | "pro" | "business";

// Funkcje, ktore docelowo beda limitowane per plan.
export type FeatureKey =
  | "recordings"
  | "scene_shuffles"
  | "jokes"
  | "vocabulary_rephrase"
  | "ai_feedback"
  | "progress_history";

// Pojedynczy limit funkcji. null = bez limitu.
export type FeatureLimit = {
  feature: FeatureKey;
  dailyLimit: number | null;
};

// Zestaw uprawnien wynikajacy z planu subskrypcji.
export type PlanEntitlements = {
  plan: SubscriptionPlan;
  maxContentAccessLevel: AccessLevel;
  limits: FeatureLimit[];
  advancedAiFeedback: boolean;
  advancedReports: boolean;
  teamPanel: boolean;
};

export type UserProfile = {
  id: string;
  displayName: string;
  email: string;
  role: UserRole;
  plan: SubscriptionPlan;
  createdAt: string;
};

export type AdminUser = {
  id: string;
  profileId: string;
  grantedBy: string;
  grantedAt: string;
};

// Licznik zuzycia funkcji w danym dniu (zrodlo pod tabele feature_usage).
export type FeatureUsage = {
  userId: string;
  feature: FeatureKey;
  date: string; // YYYY-MM-DD
  used: number;
};

// Efektywny limit dzienny dla uzytkownika = plan + ewentualne nadpisania.
export type DailyUsageLimit = {
  feature: FeatureKey;
  dailyLimit: number | null;
  used: number;
  remaining: number | null;
};
