type Props = {
  planLabel: string;
  perks: string[];
};

// Wylacznie informacyjnie — bez gatingu, bez blokowania funkcji, bez Stripe.
export function PlanPreview({ planLabel, perks }: Props) {
  return (
    <div className="rounded-3xl border border-border/60 bg-surface p-6">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wider text-muted">Twój plan</p>
        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] text-accent-soft">
          {planLabel}
        </span>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-muted">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">
        Plany Plus / Pro / Business pojawią się później. Na tym etapie nic nie
        jest blokowane.
      </p>
    </div>
  );
}
