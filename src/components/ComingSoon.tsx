import Link from "next/link";

type Props = {
  title: string;
  description: string;
  icon?: string;
};

export function ComingSoon({ title, description, icon = "🛠️" }: Props) {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-surface p-10 text-center">
      <div className="text-4xl">{icon}</div>
      <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">{title}</h1>
      <p className="mt-3 text-muted">{description}</p>
      <p className="mt-6 text-xs uppercase tracking-wider text-accent-soft">
        Moduł w przygotowaniu — etap 2 MVP
      </p>
      <div className="mt-8">
        <Link
          href="/dashboard"
          className="inline-block rounded-xl border border-border bg-surfaceElevated px-5 py-2.5 text-sm transition hover:bg-background"
        >
          ← Wróć do dashboardu
        </Link>
      </div>
    </div>
  );
}
