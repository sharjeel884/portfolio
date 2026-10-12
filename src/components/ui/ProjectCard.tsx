import { ArrowUpRight, Globe, Smartphone } from "lucide-react";
import type { PersonalProject } from "@/content/personal-projects";
import { LazyProjectMedia } from "@/components/ui/LazyProjectMedia";
import { AppleIcon, PlayStoreIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: PersonalProject;
  index: number;
  tone: string;
  stagger?: number;
  className?: string;
}

export function ProjectCard({ project, index, tone, stagger = 0, className = "" }: ProjectCardProps) {
  const stack = project.stack.split("+").map((s) => s.trim());
  const hasShots = Boolean(project.screenshots?.length);
  const CategoryIcon = project.category === "Mobile App" ? Smartphone : Globe;

  return (
    <article
      className={`card card-glow card-hover project-card group reveal ${tone} ${className}`}
      style={{ ["--stagger" as string]: stagger }}
    >
      <div className="project-media">
        {hasShots ? (
          <LazyProjectMedia
            name={project.name}
            screenshots={project.screenshots!}
            layout={project.screenshotLayout}
          />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <div className="dots-pattern absolute inset-0 opacity-40" />
            <span className="project-placeholder-word">{project.name.split(" ")[0]}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
          <span className="chip">
            <CategoryIcon className="size-3.5" aria-hidden="true" />
            {project.category}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold sm:text-[1.7rem]">{project.name}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-arrow"
            aria-label={`Open ${project.name} (${project.urlLabel})`}
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <p className="text-[0.95rem] leading-relaxed text-ink-2">{project.description}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.72rem] text-ink-2"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge"
                aria-label={`${project.name} on ${link.label}`}
              >
                {link.platform === "ios" ? (
                  <AppleIcon className="size-3.5" />
                ) : link.platform === "android" ? (
                  <PlayStoreIcon className="size-3.5" />
                ) : (
                  <Globe className="size-3.5" aria-hidden="true" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
