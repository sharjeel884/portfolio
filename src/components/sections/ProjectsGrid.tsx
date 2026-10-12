"use client";

import { useState } from "react";
import { Globe, LayoutGrid, Smartphone } from "lucide-react";
import type { PersonalProject, ProjectCategory } from "@/content/personal-projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { toneAt } from "@/lib/tones";

type Filter = "All" | ProjectCategory;

const filters: { value: Filter; label: string; icon: typeof Globe }[] = [
  { value: "All", label: "All", icon: LayoutGrid },
  { value: "Mobile App", label: "Mobile apps", icon: Smartphone },
  { value: "Web", label: "Web", icon: Globe },
];

export function ProjectsGrid({ projects }: { projects: PersonalProject[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by platform">
        {filters.map(({ value, label, icon: Icon }) => {
          const count =
            value === "All" ? projects.length : projects.filter((p) => p.category === value).length;
          return (
            <button
              key={value}
              type="button"
              className="filter-tab"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
              <span className="rounded-full bg-black/25 px-2 py-0.5 font-mono text-[0.7rem]">{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            tone={toneAt(i)}
            className="is-visible"
          />
        ))}
      </div>
    </div>
  );
}
