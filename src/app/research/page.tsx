import Link from "next/link";
import { Container, SectionTitle, Tag } from "@/components/ui";

const researchItems = [
  {
    title: "Predicting the 2026 MLB All-Star Team with Machine Learning",
    description:
      "Formal graduate-school ML research focused on dataset design, feature engineering, model comparison, validation, and baseball interpretation.",
    tags: [
      "Machine Learning",
      "Feature Engineering",
      "Model Comparison",
      "Validation",
    ],
    reportPdf: "/documents/all-star-report.pdf",
    projectHref: "/projects/mlb-allstar-2026-ml",
  },
];

export default function ResearchPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="space-y-10">
        <SectionTitle
          title="Research & Writing"
          subtitle="Long-form work: formal research, methodological write-ups, and technical baseball articles (coming soon)."
        />

        <div className="grid gap-6">
          {researchItems.map((r) => (
            <article
              key={r.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-50">
                {r.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {r.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={r.reportPdf}
                  className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-50 transition hover:border-white/25 hover:bg-white/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Research Report
                </a>
                <Link
                  href={r.projectHref}
                  className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-50 transition hover:border-white/20 hover:bg-white/10"
                >
                  View Project Page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
