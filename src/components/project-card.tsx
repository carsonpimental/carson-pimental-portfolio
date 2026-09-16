import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";
import { Tag } from "@/components/ui";

export function ProjectCard({
  project,
  size = "normal",
}: {
  project: Project;
  size?: "featured" | "normal";
}) {
  const isFarmerBoys = project.slug === "farmer-boys-forecasting";
  const wrapper =
    size === "featured"
      ? "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-white/20 hover:bg-white/[0.07]"
      : "rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]";

  const imageClass = "aspect-square";

  return (
    <article className={wrapper}>
      <div className={`relative mb-5 overflow-hidden rounded-xl ${imageClass}`}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className={
            isFarmerBoys
              ? "object-contain object-center bg-black opacity-95"
              : "object-cover opacity-90"
          }
          sizes={
            size === "featured"
              ? "(min-width: 1024px) 900px, 100vw"
              : "(min-width: 1024px) 420px, 100vw"
          }
          priority={size === "featured"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{project.category}</Tag>
          {project.featured ? <Tag>Featured</Tag> : null}
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
          {project.title}
        </h3>
        <p className="text-sm leading-7 text-zinc-400">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, size === "featured" ? 8 : 6).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-50 transition hover:border-white/20 hover:bg-white/10"
          >
            View Project
            <span aria-hidden className="translate-y-[-1px]">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
