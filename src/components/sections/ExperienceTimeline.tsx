import { Calendar, MapPin } from "lucide-react";
import { experienceData } from "@/content/experience";

const timelineTones = ["tone-blue", "tone-blue-light", "tone-blue-light", "tone-blue"];

export function ExperienceTimeline({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="timeline space-y-8">
      {experienceData.map((exp, i) => {
        const tone = timelineTones[i % timelineTones.length];
        const items = detailed ? exp.responsibilities : exp.responsibilities.slice(0, 3);

        return (
          <li key={exp.id} className={`relative reveal ${tone}`} style={{ ["--stagger" as string]: i }}>
            <span className="timeline-node" aria-hidden="true" />
            <article className="card card-glow card-hover p-7 sm:p-9">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs tracking-[0.14em] uppercase" style={{ color: "rgb(var(--tone))" }}>
                    {exp.employmentType}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{exp.role}</h3>
                  <p className="mt-1 text-lg font-semibold text-ink-2">@ {exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                  <span className="chip">
                    <Calendar className="size-3.5" aria-hidden="true" />
                    {exp.period}
                  </span>
                  <span className="chip">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-ink-2">{exp.context}</p>

              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] text-ink-2">
                    <span
                      className="mt-2.5 size-1.5 shrink-0 rounded-full"
                      style={{ background: "rgb(var(--tone))" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {exp.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.72rem] text-ink-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
