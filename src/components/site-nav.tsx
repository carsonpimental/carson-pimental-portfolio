import Link from "next/link";

const links = [
  { href: "/#projects", label: "Projects" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/45">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-3"
          aria-label="Home"
        >
          <span className="font-semibold tracking-tight text-zinc-50 [font-family:var(--font-display)]">
            Carson Pimental
          </span>
          <span className="hidden text-sm text-zinc-400 sm:inline">
            Baseball Analytics
          </span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-zinc-50"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
