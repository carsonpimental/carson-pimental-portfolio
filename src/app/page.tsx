import { ProjectCard } from "@/components/project-card";
import { ButtonLink, Container, Pill, SectionTitle, Tag } from "@/components/ui";
import { projects } from "@/content/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div>
      <section className="border-b border-white/10">
        <Container className="py-14 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-7">
              <div className="flex flex-wrap gap-2">
                <Pill>Baseball Analytics</Pill>
                <Pill>Data Science</Pill>
                <Pill>ML Systems</Pill>
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl [font-family:var(--font-display)]">
                  Carson Pimental
                </h1>
                <p className="text-lg leading-8 text-zinc-200 sm:text-xl">
                  <span className="text-zinc-50">Baseball Analytics</span> &{" "}
                  <span className="text-zinc-50">Data Science</span>
                </p>
                <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                  I build data pipelines, statistical models, machine-learning
                  systems, and analytical tools for baseball evaluation and
                  decision-making.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Python",
                  "SQL",
                  "R",
                  "Machine Learning",
                  "Statistical Modeling",
                  "Baseball Data",
                ].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <ButtonLink href="/#projects">View Projects</ButtonLink>
                <ButtonLink
                  href="/documents/resume.pdf"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </ButtonLink>
                <ButtonLink
                  href="https://www.linkedin.com/"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="space-y-4">
                <p className="text-sm font-medium text-zinc-50">
                  Focus Areas
                </p>
                <div className="grid gap-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-sky-300" />
                    <div>
                      <p className="text-zinc-50">Pipelines & Warehousing</p>
                      <p className="text-zinc-400">
                        Ingestion, validation, feature tables, and reproducible
                        workflows.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-violet-300" />
                    <div>
                      <p className="text-zinc-50">Modeling</p>
                      <p className="text-zinc-400">
                        Stuff+/Location+ style modeling, forecasting, and ML
                        evaluation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-300" />
                    <div>
                      <p className="text-zinc-50">Tools & Communication</p>
                      <p className="text-zinc-400">
                        Dashboards, web apps, and coach-friendly outputs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects">
        <Container className="py-14 sm:py-20">
          <div className="space-y-10">
            <SectionTitle
              title="Featured Work"
              subtitle="A selection of projects focused on pipeline rigor, model quality, and shipping usable tools."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {featured.map((p, idx) => (
                <div
                  key={p.slug}
                  className={idx === 0 ? "lg:col-span-2" : ""}
                >
                  <ProjectCard project={p} size={idx === 0 ? "featured" : "normal"} />
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <SectionTitle
                title="Experience"
                subtitle="Roles spanning independent research, baseball operations support, and applied analytics delivery."
              />
              <div className="space-y-3">
                {[
                  {
                    role: "Independent Analytics Project",
                    org: "Sig Mejdal / Baltimore Orioles",
                  },
                  {
                    role: "Data Coordinator",
                    org: "Aberdeen IronBirds — MLB Draft League",
                  },
                  { role: "Student Analytics Manager", org: "UCI Baseball" },
                  { role: "Student Data Analyst", org: "Farmer Boys" },
                ].map((x) => (
                  <div
                    key={x.role}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-medium text-zinc-50">{x.role}</p>
                    <p className="text-sm text-zinc-400">{x.org}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <SectionTitle
                title="Research & Writing"
                subtitle="A home for technical baseball articles, formal research, and deeper method write-ups."
              />

              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6">
                <p className="text-sm font-medium text-zinc-50">
                  Featured: Predicting the 2026 MLB All-Star Team with Machine
                  Learning
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Formal graduate-school ML research focused on dataset design,
                  feature engineering, model comparison, validation, and
                  baseball interpretation.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/research" variant="secondary">
                    View Research
                  </ButtonLink>
                  <ButtonLink
                    href="/documents/all-star-report.pdf"
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Research Report
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <SectionTitle
                title="About"
                subtitle="Early-career baseball analytics and data science professional with MS training and experience building tools that translate analysis into decisions."
              />
              <p className="text-sm leading-7 text-zinc-400">
                I’m focused on building reliable data systems and models that
                support evaluation and decision-making—then packaging results
                into dashboards, apps, and clear communication for coaches,
                analysts, and decision-makers.
              </p>
              <ButtonLink href="/about" variant="secondary">
                More About Me
              </ButtonLink>
            </div>

            <div className="space-y-5">
              <SectionTitle
                title="Contact"
                subtitle="Best way to reach me is email. I’m also active on LinkedIn and GitHub."
              />
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="mailto:carson.pimental@example.com">
                  Email
                </ButtonLink>
                <ButtonLink
                  href="https://www.linkedin.com/"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </ButtonLink>
              </div>
              <p className="text-xs text-zinc-500">
                Replace placeholder links and email with your real contact info.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
