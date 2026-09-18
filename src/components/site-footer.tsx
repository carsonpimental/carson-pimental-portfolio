export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-1 px-6 py-10 text-center">
        <div className="space-y-1">
          <p className="text-sm text-zinc-300">
            <span className="text-zinc-50">Carson Pimental</span> — Baseball
            Analytics & Data Science
          </p>
          <p className="text-xs text-zinc-500">
            Built with Next.js + TypeScript. Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
