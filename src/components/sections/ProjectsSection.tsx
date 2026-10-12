import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeProjectNames, personalProjects } from "@/content/personal-projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { toneAt } from "@/lib/tones";

export function ProjectsSection() {
  const featured = homeProjectNames
    .map((name) => personalProjects.find((p) => p.name === name))
    .filter((p): p is (typeof personalProjects)[number] => Boolean(p));

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section">
      <div className="shell space-y-12">
        <SectionHeading
          id="projects-heading"
          eyebrow="Selected work"
          tone="tone-blue"
          title={
            <>
              Products shipped to <span className="text-gradient-anim">real users</span>
            </>
          }
          description="A handful of favourites — mobile apps in the stores and web platforms in production."
          action={
            <Link href="/projects" className="btn btn-primary">
              All {personalProjects.length} projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              tone={toneAt(i)}
              stagger={i % 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
