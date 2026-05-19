export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted sm:px-6">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} VoiceCharisma AI · Prototyp MVP</p>
          <p className="text-xs">Wersja 0.1 · bez bazy danych · bez płatności</p>
        </div>
      </div>
    </footer>
  );
}
