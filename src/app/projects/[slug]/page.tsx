import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, SectionTitle, Tag } from "@/components/ui";
import { getProject } from "@/content/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <section className="border-b border-white/10">
        <Container className="py-12 sm:py-16">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tag>{project.category}</Tag>
              {project.featured ? <Tag>Featured</Tag> : null}
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl [font-family:var(--font-display)]">
              {project.title}
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr]">
            <div className="space-y-10">
              <div className="space-y-4">
                <SectionTitle title="Overview" />
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.sections.overview}
                </p>
              </div>

              <div className="space-y-4">
                <SectionTitle title="Problem / Question" />
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.sections.problem}
                </p>
              </div>

              <div className="space-y-4">
                <SectionTitle title="Data" />
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.sections.data}
                </p>
              </div>

              <div className="space-y-4">
                <SectionTitle title="Approach" />
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.sections.approach}
                </p>
              </div>

              <div className="space-y-4">
                <SectionTitle title="Methods & Technology" />
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.sections.methods}
                </p>
              </div>

              <div className="space-y-4">
                <SectionTitle title="Results" />
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.sections.results}
                </p>
              </div>

              <div className="space-y-4">
                <SectionTitle title="Baseball / Business Application" />
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.sections.application}
                </p>
              </div>

              <div className="space-y-4">
                <SectionTitle title="Visuals" />
                <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.sections.visuals}
                </p>
              </div>

              <div className="space-y-4">
                <SectionTitle title="Key Takeaways" />
                <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
                  {project.sections.takeaways.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                      <span className="text-zinc-300">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative h-56">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 400px, 100vw"
                    priority
                  />
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-sm font-medium text-zinc-50">Links</p>
                  <div className="space-y-2 text-sm">
                    {project.links?.github ? (
                      <a
                        href={project.links.github}
                        className="block text-zinc-300 transition hover:text-zinc-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {project.links?.external ? (
                      <a
                        href={project.links.external}
                        className="block text-zinc-300 transition hover:text-zinc-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Project Link
                      </a>
                    ) : null}
                    {project.links?.reportPdf ? (
                      <a
                        href={project.links.reportPdf}
                        className="block text-zinc-300 transition hover:text-zinc-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Full Research Report
                      </a>
                    ) : null}
                    {!project.links?.github &&
                    !project.links?.external &&
                    !project.links?.reportPdf ? (
                      <p className="text-zinc-500">
                        Add GitHub / external links in the project config.
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
