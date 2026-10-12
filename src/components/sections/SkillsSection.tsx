import { Code2, Plug, Smartphone, Type } from "lucide-react";
import { profileData } from "@/content/profile";
import { skillCategories } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { toneAt } from "@/lib/tones";

const techIcons = [Code2, Smartphone, Type, Plug];
const techTones = ["tone-blue", "tone-blue-light", "tone-blue", "tone-blue-light"];

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section">
      <div className="shell space-y-12">
        <SectionHeading
          id="skills-heading"
          eyebrow="What I do"
          tone="tone-blue"
          title={
            <>
              A colourful <span className="text-gradient-cool">toolbox</span>
            </>
          }
          description="Scalable component systems, REST API integration, performance work, and code review across React, React Native, and Next.js."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profileData.coreTechnologies.map((tech, i) => {
            const Icon = techIcons[i % techIcons.length];
            return (
              <article
                key={tech.name}
                className={`card card-glow card-hover reveal p-7 ${techTones[i % techTones.length]}`}
                style={{ ["--stagger" as string]: i }}
              >
                <span className="icon-tile">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-6 font-mono text-[0.7rem] tracking-[0.14em] text-ink-3 uppercase">
                  {tech.category}
                </p>
                <h3 className="mt-2 text-xl font-bold">{tech.name}</h3>
                <p className="mt-3 text-sm text-ink-2">{tech.tagline}</p>
              </article>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.area}
              className={`card reveal p-6 ${toneAt(i + 1)}`}
              style={{ ["--stagger" as string]: i }}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-bold">{cat.area}</h3>
                <span className="font-mono text-xs text-ink-3">
                  {String(cat.skills.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-3">{cat.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="chip">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
