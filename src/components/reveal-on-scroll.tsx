"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add("revealed");
          window.setTimeout(() => {
            el.classList.remove("reveal", "revealed");
          }, 900);
        }
      },
      { threshold: 0.15 },
    );

    document
      .querySelectorAll(".reveal:not(.revealed)")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
