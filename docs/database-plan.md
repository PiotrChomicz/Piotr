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

---

# Future module: Peer Feedback & Progress Profile

Status: **PLAN / TODO.** Wyłącznie architektura, typy i plan bazy.
Typy: `src/types/peer-feedback.ts` (wszystkie oceny jako String Literal Types).

**Świadomie NIE budujemy teraz:** social feedu, komentarzy, publicznych profili,
działającego peer review UI, auth, Stripe, Supabase connect, uploadu nagrań.

## A. Co użytkownik widzi na swoim profilu (docelowo)

- Voice Influence Score (aktualny),
- liczba treningów,
- streak,
- postęp per obszar (dykcja, pewność, słownictwo, storytelling, humor/timing,
  negocjacje),
- historia nagrań,
- ostatnie feedbacki (AI + ewentualnie peer),
- odznaki (`badges` / `user_badges`),
- plan subskrypcji.

## B. Jak działa historia postępu

- zapis sesji treningowych (`training_sessions`),
- zapis nagrań (`recordings`, audio-only),
- zapis feedbacków (`feedback_reports`),
- porównanie **pierwszego i ostatniego** nagrania,
- metryki tygodniowe / miesięczne (agregacja z serii punktów),
- **historia Voice Influence Score jako snapshoty z timestampami**
  (`voice_influence_snapshots`).

## C. WAŻNE — `user_progress_metrics` i `voice_influence_snapshots` są HISTORYCZNE

Tabela `user_progress_metrics` **nie może** przechowywać jednej nadpisywanej
wartości. Musi wspierać historyczne snapshoty metryk z timestampami. W
szczególności Voice Influence Score zapisujemy jako **serię punktów w czasie**:

```
user_progress_metrics / voice_influence_snapshots:
- user_id
- metric_type            (ProgressMetric, np. voice_influence, diction, ...)
- score_value
- score_max
- source                 (ProgressSource: ai_feedback | peer_review | self | system)
- related_training_session_id   (wskazane powiązanie)
- related_recording_id          (dla snapshotów VIS)
- created_at             (timestamp — OBOWIĄZKOWY)
```

Zasady:
- dane są **historyczne**,
- **nie nadpisujemy** wyłącznie ostatniego wyniku,
- każdy pomiar ma **timestamp**,
- powiązanie z `training_session` / `recording` jest wskazane,
- struktura ma umożliwiać **wykresy progresu w czasie**, trendy tygodniowe/
  miesięczne oraz porównanie pierwszego i ostatniego nagrania (Etap 3C/4).

Odpowiadające typy: `UserProgressMetric`, `VoiceInfluenceSnapshot`,
`ProgressMetric`, `ProgressSource`.

## D. Jak działa przyszły peer feedback

- użytkownik **sam decyduje**, czy udostępnia nagranie do oceny,
- **domyślnie nagrania są prywatne** (`PrivacySettings.defaultRecordingVisibility = "private"`),
- **oceniamy nagranie, nie osobę**,
- pierwsza wersja używa **wyborów zamkniętych** (ratingi + best/improvement),
- komentarze tekstowe **dopiero później, po moderacji** (`PeerReview.note` opcjonalny).

Struktura recenzji (typy): `PeerReview`, `PeerReviewRating`, `PeerReviewChoice`,
`PeerReviewScore`. Recenzja zawiera: oceny wg kryteriów, jedną rzecz najlepszą
(`BestElement`), jedną do poprawy (`ImprovementArea`), opcjonalną radę (później).

## E. Jak chronimy użytkownika

- brak toksycznych rankingów (`PrivacySettings.showInLeaderboards = false` domyślnie),
- brak publicznego zawstydzania,
- opcja zgłoszenia nadużycia (`abuse_reports` / `AbuseReport`),
- moderacja (`moderation_queue` / `review_queue`, `ModerationStatus`),
- możliwość usunięcia nagrania,
- jasne `privacy_settings` / `PrivacySettings`.

Profil ma **motywować do rozwoju, nie zawstydzać**. Publiczne porównywanie
użytkowników **nie jest** częścią MVP.

## F. Powiązanie z planami

- **Free:** podstawowy profil, krótka historia, ograniczona liczba nagrań/ocen.
- **Plus:** dłuższa historia, więcej nagrań, podstawowy peer feedback.
- **Pro:** zaawansowane metryki, porównania, pełny AI feedback.
- **Business:** zespoły, panel lidera, raporty, oceny w ramach zespołu.

## G. Przyszłe tabele (peer feedback + progres)

> Historyczne, snapshotowe; nazewnictwo snake_case.

| Tabela | Rola |
|---|---|
| `user_progress_metrics` | **historyczne** snapshoty metryk (patrz sekcja C) |
| `voice_influence_snapshots` | **historyczne** punkty Voice Influence Score w czasie |
| `peer_reviews` | recenzje nagrań (nie osób) |
| `peer_review_scores` | pochodne wyniki liczbowe recenzji (agregacja/wykresy) |
| `peer_review_ratings` | zamknięte oceny kryteriów (clarity, pace, ...) |
| `peer_review_choices` | wybory: best element + improvement area |
| `review_queue` | kolejka nagrań zgłoszonych do oceny |
| `privacy_settings` | ustawienia prywatności użytkownika |
| `abuse_reports` | zgłoszenia nadużyć |
| `moderation_queue` | kolejka moderacji treści/recenzji |
| `badges` | katalog odznak |
| `user_badges` | odznaki przyznane użytkownikom |
| `teams` | zespoły (plan Business) |
| `team_members` | członkostwo w zespole |
| `team_reviews` | oceny w ramach zespołu |

**Adnotacja dla `user_progress_metrics` i `voice_influence_snapshots`:** dane są
historyczne, nie nadpisujemy wyłącznie ostatniego wyniku, każdy pomiar ma
timestamp, powiązanie z `training_session`/`recording` jest wskazane, a struktura
ma umożliwiać wykresy progresu w czasie.

## H. Zasady bezpieczeństwa peer feedback

1. Oceniamy nagranie, nie człowieka.
2. Feedback ma być konstruktywny.
3. Preferujemy wybory zamknięte zamiast otwartych komentarzy.
4. Domyślnie nagrania są prywatne.
5. Użytkownik sam wybiera, czy chce peer review.
6. Przyszła opcja zgłoszenia nadużycia.
7. Przyszła kolejka moderacji.
8. Bez toksycznych rankingów i publicznego zawstydzania.
9. Tryb zespołowy dopiero później (plan Business).
10. Publiczne porównywanie użytkowników nie jest częścią MVP.
11. Profil ma motywować do rozwoju, nie zawstydzać.
