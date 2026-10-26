"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type ShowcaseImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ShowcaseFeature = {
  kicker: string;
  title: string;
  description: string;
  images: ShowcaseImage[];
};

function FadeIn({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className ?? ""} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export function FeatureShowcase({ features }: { features: ShowcaseFeature[] }) {
  const [expanded, setExpanded] = useState<ShowcaseImage | null>(null);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <div className="space-y-10">
      {features.map((f) => (
        <FadeIn key={f.title}>
          <div className="space-y-3">
            <p className="text-xs tracking-[0.22em] text-zinc-500 [font-family:var(--font-mono)]">
              {f.kicker}
            </p>
            <p className="text-base font-semibold text-zinc-50 sm:text-lg">
              {f.title}
            </p>
            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              {f.description}
            </p>
          </div>

          <div className="mt-4 grid gap-4">
            {f.images.map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setExpanded(img)}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition hover:border-white/25"
              >
                {img.caption ? (
                  <div className="border-b border-white/10 px-5 py-3">
                    <p className="text-xs leading-6 text-zinc-500 [font-family:var(--font-mono)]">
                      {img.caption}
                    </p>
                  </div>
                ) : null}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block h-auto w-full cursor-zoom-in"
                />
              </button>
            ))}
          </div>
        </FadeIn>
      ))}

      {expanded ? (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={() => setExpanded(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={expanded.src}
            alt={expanded.alt}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
