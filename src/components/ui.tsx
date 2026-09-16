import Link from "next/link";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}

type PillProps = {
  children: ReactNode;
};

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  target?: string;
  rel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition will-change-transform";

  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-b from-white/16 to-white/6 text-zinc-50 border border-white/15 hover:border-white/25 hover:from-white/20 hover:to-white/8",
    secondary:
      "bg-white/5 text-zinc-50 border border-white/10 hover:bg-white/10 hover:border-white/20",
    ghost: "text-zinc-300 hover:text-zinc-50 hover:bg-white/5",
  };

  const cls = `${base} ${styles[variant]}`;

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={cls} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl [font-family:var(--font-display)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
