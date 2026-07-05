# Database & subscription plan — VoiceCharisma AI

Status: **PLAN / TODO.** To jest wyłącznie przygotowanie architektoniczne.

Na tym etapie (MVP, Etap 2) **nie ma** bazy, auth, płatności ani gatingu:

- ❌ brak Supabase connect / klienta produkcyjnego,
- ❌ brak Supabase Auth,
- ❌ brak Stripe,
- ❌ brak RLS w implementacji,
- ❌ brak realnego blokowania funkcji premium,
- ✅ tylko typy (`src/types/access.ts`), konfiguracja planów
  (`src/lib/entitlements.ts`, nieegzekwowana) oraz ten dokument.

Sekrety, klucze API i connection stringi **nie trafiają do repo** — dopiero do
zmiennych środowiskowych przy realnym podłączaniu.

---

## 1. Role użytkowników (`UserRole`)

| Rola | Opis |
|---|---|
| `user` | Zwykły użytkownik (domyślnie plan `free`). |
| `premium_user` | Użytkownik z aktywną płatną subskrypcją (`plus` / `pro` / `business`). |
| `admin` | Dostęp do przyszłego panelu `/admin`, moderacji i audytu. |

Rola trzymana jako pole `role` w `profiles` (prosto) **lub** w osobnej tabeli
`user_roles` (gdy pojawi się wiele ról na użytkownika). Na start: pole w `profiles`.

## 2. Plany subskrypcji (`SubscriptionPlan`)

`free` · `plus` · `pro` · `business`

Mapowanie planu na uprawnienia: `PLAN_ENTITLEMENTS` w `src/lib/entitlements.ts`
(dziś tylko dane, docelowo definicje w bazie + weryfikacja po stronie serwera).

## 3. Access level treści (`AccessLevel`)

Każda treść treningowa (`scene`, `joke`, `vocabulary_item`, `rephrase_example`,
`exercise`, `prompt`) dostaje `access_level`: `free` / `plus` / `pro` / `business`.

Reguła (docelowo, po stronie serwera): użytkownik widzi treść, gdy
`plan.maxContentAccessLevel >= content.access_level` (porządek: free < plus < pro < business).

## 4. Modele / typy (już przygotowane w `src/types/access.ts`)

`UserRole`, `SubscriptionPlan`, `AccessLevel`, `FeatureKey`, `FeatureLimit`,
`PlanEntitlements`, `UserProfile`, `AdminUser`, `FeatureUsage`, `DailyUsageLimit`.

## 5. Przyszłe tabele (szkic)

> Nazewnictwo: snake_case, liczba mnoga. Typy poglądowe (Postgres/Supabase).

| Tabela | Rola | Kluczowe kolumny (szkic) |
|---|---|---|
| `profiles` | profil użytkownika | `id (uuid, = auth.users.id)`, `display_name`, `email`, `role`, `plan`, `created_at` |
| `user_roles` | (opcjonalnie) wiele ról | `user_id`, `role` — jeśli nie trzymamy roli w `profiles` |
| `user_plans` | aktualny plan usera | `user_id`, `plan`, `valid_from`, `valid_to` |
| `subscriptions` | źródło prawdy o płatności | `user_id`, `provider` (np. stripe), `external_id`, `status`, `plan`, `current_period_end` |
| `feature_usage` | zużycie funkcji | `user_id`, `feature`, `date`, `used` |
| `daily_usage_limits` | efektywne limity dnia | `user_id`, `feature`, `daily_limit`, `used` (materializowane z planu) |
| `admin_audit_logs` | audyt akcji admina | `admin_id`, `action`, `target_id`, `meta`, `created_at` |
| `content_items` | wspólny rejestr treści | `id`, `kind` (scene/joke/...), `access_level`, `ref_id`, `status` |
| `content_moderation_queue` | moderacja treści | `content_id`, `status`, `reason`, `reviewed_by`, `reviewed_at` |
| `training_sessions` | sesja treningowa | `id`, `user_id`, `path`, `started_at`, `duration_sec` |
| `recordings` | metadane nagrań (audio-only) | `id`, `session_id`, `user_id`, `duration_sec`, `created_at`, `storage_ref?` |
| `feedback_reports` | wynik feedbacku | `id`, `recording_id`, `overall`, `areas (jsonb)`, `created_at` |
| `scenes` | scenki | `id`, `category`, `title`, `starter`, ..., `access_level` |
| `jokes` | żarty | `id`, `type`, `text`, `setup`, `punch`, `technique`, `access_level` |
| `vocabulary_items` | słowo dnia / trend / słownictwo | `id`, `word`, `definition`, `kind`, `access_level` |
| `rephrase_examples` | „Powiedz to lepiej” | `id`, `input`, `outputs (jsonb)`, `access_level` |
| `daily_training_progress` | progres dnia | `user_id`, `date`, `score`, `recordings_count`, `streak_days` |

Nagrania w MVP zostają w przeglądarce. `recordings.storage_ref` jest opcjonalne —
upload audio na serwer to decyzja na później (prywatność), nadal **tylko audio**.

## 6. Plan Free (docelowo)

Limity startowe odzwierciedla `PLAN_ENTITLEMENTS.free`:

- ograniczona liczba nagrań dziennie (szkic: 3),
- ograniczona liczba losowań scenek (szkic: 5),
- ograniczona liczba żartów / ripost (szkic: 5),
- podstawowe ćwiczenia słownictwa (szkic: 3 rephrase / dzień),
- podstawowy feedback (bez zaawansowanego AI),
- brak zaawansowanej historii postępu,
- brak pełnego AI feedbacku,
- brak zaawansowanych raportów.

## 7. Plany płatne (docelowo)

**Plus** — więcej ćwiczeń, więcej historii, więcej scenek, więcej humoru,
więcej słownictwa.

**Pro** — zaawansowany AI feedback, negocjacje, scenariusze premium, trening
wystąpień, lepsze raporty postępu.

**Business** — panel zespołu, raporty dla zespołów, trening handlowców,
scenariusze firmowe, zarządzanie użytkownikami.

## 8. Przyszłe route'y

| Route | Status | Opis |
|---|---|---|
| `/dashboard` | **istnieje** | Panel użytkownika (Voice Influence Score, misje, moduły). Docelowo dołoży plan usera, zużycie i historię. |
| `/pricing` | do zrobienia później | Plany i porównanie. Połączy się z `PLAN_ENTITLEMENTS` i checkoutem (Stripe) — nie teraz. |
| `/account` | do zrobienia później | Konto: dane, aktualny plan, zarządzanie subskrypcją, limity. |
| `/admin` | do zrobienia później | Panel admina: moderacja (`content_moderation_queue`), użytkownicy, audyt (`admin_audit_logs`). Chroniony rolą `admin`. |

Żaden z route'ów `/admin`, `/account`, `/pricing` nie jest w tym etapie budowany.

## 9. Czego świadomie NIE robimy teraz

- Auth (Supabase Auth / logowanie) — dopiero Etap 4.
- Stripe / checkout / webhooki — dopiero Etap 4.
- Realny Supabase connect + RLS — dopiero Etap 4.
- Egzekwowanie limitów i gatingu premium w UI/API — dopiero po auth + bazie.
- Panel `/admin` i `/account` jako działające strony.

## 10. Kolejność podłączania (later)

1. Supabase projekt + `profiles` + Auth → logowanie.
2. `user_plans` / `subscriptions` + Stripe webhook → realny `SubscriptionPlan`.
3. `feature_usage` + `daily_usage_limits` → egzekwowanie limitów (serwer).
4. `access_level` na treściach → gating treści premium.
5. `/pricing`, `/account`, `/admin`.
6. RLS na wszystkich tabelach użytkownika.
