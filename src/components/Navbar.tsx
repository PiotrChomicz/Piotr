import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/recording", label: "Nagrywanie" },
  { href: "/scripts", label: "Scenki" },
  { href: "/vocabulary", label: "Słownictwo" },
  { href: "/jokes", label: "Żarty" },
  { href: "/feedback", label: "Feedback" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-gradient text-white shadow-glow">
            V
          </span>
          <span className="hidden sm:inline">VoiceCharisma AI</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted transition hover:bg-surface hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/dashboard"
          className="rounded-md bg-accent-gradient px-3 py-1.5 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
        >
          Otwórz aplikację
        </Link>
      </nav>
    </header>
  );
}
