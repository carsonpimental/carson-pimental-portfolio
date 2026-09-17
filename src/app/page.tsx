import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container, Tag } from "@/components/ui";
import { projects } from "@/content/projects";

export default function Home() {
  const total = projects.length;

  const feed = [
    "ncaa-pitcher-evaluation",
    "mlb-deviations",
    "scouts-defensive-alignments",
    "farmer-boys-forecasting",
    "mlb-allstar-2026-ml",
  ]
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<(typeof projects)[number]> => Boolean(p));

  return (
    <div>
      <section className="border-b border-white/10">
        <Container className="py-10 sm:py-12">
          <div className="mx-auto max-w-4xl space-y-7 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl [font-family:var(--font-display)]">
                Carson Pimental
              </h1>
              <p className="text-sm text-zinc-300 sm:text-base">
                <span className="text-zinc-50">Baseball Analytics</span> &{" "}
                <span className="text-zinc-50">Data Science</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm text-zinc-400 [font-family:var(--font-mono)]">
              {[
                "Python",
                "SQL",
                "R",
                "Machine Learning",
                "Statistical Modeling",
                "Baseball Analytics",
              ].map((x, idx) => (
                <span key={x} className="inline-flex items-center">
                  {idx === 0 ? null : (
                    <span className="mx-2 text-zinc-700">·</span>
                  )}
                  <span>{x}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="mailto:carson.pimental@example.com">
                Email / Contact
              </ButtonLink>
              <ButtonLink
                href="/images/projects/resume/Carson%20Pimental%20Resume%20Sep.pdf"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/in/carsonpimental"
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

            <div className="border-t border-white/10 pt-6">
              <p className="text-xs tracking-[0.22em] text-zinc-500 [font-family:var(--font-mono)]">
                EDUCATION
              </p>
              <div className="mt-4 grid gap-4 text-sm text-zinc-300">
                <div className="space-y-1">
                  <p className="text-zinc-50">
                    University of California, Irvine — Paul Merage School of
                    Business
                  </p>
                  <p className="text-zinc-400">
                    Master of Science in Business Analytics
                  </p>
                  <p className="text-zinc-500 [font-family:var(--font-mono)]">
                    Data Science · Machine Learning · Statistical Modeling ·
                    Python · SQL
                  </p>
                  <p className="text-zinc-400">GPA: 3.9</p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-50">University of California, Irvine</p>
                  <p className="text-zinc-400">
                    Bachelor of Arts in Business Economics
                  </p>
                  <p className="text-zinc-500 [font-family:var(--font-mono)]">
                    Quantitative Economics · Econometrics · Statistics
                  </p>
                  <p className="text-zinc-400">GPA: 3.7</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-8 sm:py-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-2 text-center">
              <p className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl [font-family:var(--font-display)]">
                Work Preview
              </p>
            </div>
            <div
              className="reel group relative flex cursor-grab gap-4 overflow-x-auto overscroll-x-contain scroll-smooth py-2 [scroll-snap-type:x_proximity] sm:gap-5 [scrollbar-width:none] [-ms-overflow-style:none] active:cursor-grabbing"
            >
              <style>{`.reel::-webkit-scrollbar{display:none;}`}</style>

              {[
                "/images/projects/banner/Screenshot 2026-09-17 134623.png",
                "/images/projects/banner/Screenshot 2026-09-17 134808.png",
                "/images/projects/banner/Screenshot 2026-09-17 134648.png",
                "/images/projects/banner/Screenshot 2026-09-17 134722.png",
                "/images/projects/banner/Screenshot 2026-09-17 134605.png",
              ].map((src) => (
                <div
                  key={src}
                  className="shrink-0 [scroll-snap-align:start]"
                >
                  <div className="h-[280px] w-[85vw] overflow-hidden rounded-md border border-white/10 bg-black sm:h-[320px] sm:w-auto lg:h-[360px]">
                    <Image
                      src={src}
                      alt="Project screenshot"
                      width={1600}
                      height={900}
                      className="h-full w-auto object-contain"
                      draggable={false}
                      priority={src.includes("134623")}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex justify-end">
              <p className="text-sm font-semibold text-zinc-50 [font-family:var(--font-mono)]">
                Scroll →
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects">
        <Container className="py-10 sm:py-12">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl [font-family:var(--font-display)]">
                Projects
              </h2>
            </div>

            {feed.map((p, idx) => (
              <article key={p.slug} className="space-y-6">
                <div className="flex items-baseline justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-xs text-zinc-500 [font-family:var(--font-mono)]">
                      {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </p>
                    <p className="text-xs tracking-[0.22em] text-zinc-400 [font-family:var(--font-mono)]">
                      {p.category.toUpperCase()}
                    </p>
                  </div>
                  {p.featured ? (
                    <p className="text-xs tracking-[0.22em] text-zinc-500 [font-family:var(--font-mono)]">
                      FEATURED
                    </p>
                  ) : null}
                </div>

                <div className="mx-auto w-full max-w-md overflow-hidden border border-white/10 bg-black">
                  <div className="relative aspect-square">
                    <Image
                      src={
                        p.slug === "mlb-allstar-2026-ml"
                          ? "/images/projects/yw1y9vmsrfvay3ciqisb.jpg"
                          : p.image.src
                      }
                      alt={p.image.alt}
                      fill
                      className={
                        p.slug === "ncaa-pitcher-evaluation"
                          ? "object-contain"
                          : "object-cover"
                      }
                      style={p.slug === "ncaa-pitcher-evaluation" ? { objectPosition: "50% 50%" } : undefined}
                      sizes="(min-width: 1024px) 900px, 100vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>

                <div className="space-y-3 text-center">
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl [font-family:var(--font-display)]">
                    {p.title}
                  </h2>
                  <p className="mx-auto max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {p.technologies.slice(0, 8).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="flex justify-center pt-1">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-sm text-zinc-200 transition hover:text-zinc-50 [font-family:var(--font-mono)]"
                  >
                    View Project →
                  </Link>
                </div>

                {idx === feed.length - 1 ? null : (
                  <div className="border-b border-white/10 pt-4" />
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <footer className="border-t border-white/10">
        <Container className="py-10">
          <p className="text-xs text-zinc-500 [font-family:var(--font-mono)]">
            © Carson Pimental
          </p>
        </Container>
      </footer>
    </div>
  );
}

