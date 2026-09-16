import { Container, SectionTitle, Tag } from "@/components/ui";

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-12">
        <SectionTitle
          title="About"
          subtitle="Baseball analytics and data science with an emphasis on building reliable systems, rigorous models, and tools that translate analysis into decisions."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              I’m Carson Pimental, an early-career baseball analytics and data
              science professional pursuing MLB front-office roles. My work
              focuses on end-to-end analytics: ingesting and validating data,
              engineering features, building statistical and ML models, and
              turning results into practical tools and clear communication.
            </p>
            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              I’m especially interested in pitcher evaluation, pitch-level value
              modeling, and building data products that enable fast, repeatable
              decision support.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-zinc-50">What I ship</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300 sm:text-base">
                {[
                  "Reliable pipelines and validated datasets",
                  "Modeling workflows with clear evaluation",
                  "Dashboards and web tools for exploration",
                  "Coach-friendly summaries and visuals",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6">
              <p className="text-sm font-medium text-zinc-50">Core Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "R",
                  "PostgreSQL",
                  "Modeling",
                  "Data Engineering",
                  "Visualization",
                ].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-zinc-50">Resume</p>
              <a
                href="/images/projects/resume/Carson%20Pimental%20Resume%20Sep.pdf"
                className="mt-4 inline-flex items-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-50 transition hover:border-white/25 hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                View / Download
              </a>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}
