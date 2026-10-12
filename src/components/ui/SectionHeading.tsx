import type { ReactNode } from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: string;
  action?: ReactNode;
  as?: "h1" | "h2";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "tone-blue",
  action,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="space-y-4">
        <p className={`eyebrow ${tone}`}>{eyebrow}</p>
        <Heading id={id} className="section-title">
          {title}
        </Heading>
        {description && <p className="lead">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
