import type { ReactNode } from "react";
import { Sparkle, Squiggle } from "@/components/ui/Graphics";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  watermark: string;
  tone?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  watermark,
  tone = "tone-blue-light",
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20" aria-labelledby="page-title">
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-4 top-24 select-none font-display text-[clamp(5rem,18vw,15rem)] font-bold leading-none opacity-40"
      >
        {watermark}
      </span>
      <Sparkle className="right-[12%] top-[38%] size-6" />
      <Sparkle className="left-[46%] top-[22%] size-3 text-accent!" style={{ animationDelay: "-1.4s" }} />

      <div className="shell relative">
        <div className="reveal max-w-3xl space-y-6">
          <p className={`eyebrow ${tone}`}>{eyebrow}</p>
          <h1 id="page-title" className="text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.98]">
            {title}
          </h1>
          <Squiggle className="h-5 w-28" />
          <p className="lead">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
