export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-zinc-300">
            <span className="text-zinc-50">Carson Pimental</span> — Baseball
            Analytics & Data Science
          </p>
          <p className="text-xs text-zinc-500">
            Built with Next.js + TypeScript. Deployed on Vercel.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            href="mailto:carson.pimental@example.com"
            className="text-zinc-300 transition hover:text-zinc-50"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/carsonpimental"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 transition hover:text-zinc-50"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 transition hover:text-zinc-50"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
