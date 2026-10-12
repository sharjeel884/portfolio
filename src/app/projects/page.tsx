import type { Metadata } from "next";
import { personalProjects } from "@/content/personal-projects";
import { getBreadcrumbJsonLd, siteBaseUrl } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Mobile apps in the App Store and Google Play, production web platforms, real-time multiplayer games, headless commerce, and a published npm package.",
  alternates: {
    canonical: `${siteBaseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);
  const mobileCount = personalProjects.filter((p) => p.category === "Mobile App").length;
  const webCount = personalProjects.length - mobileCount;

  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        eyebrow="Portfolio"
        watermark="WORK"
        tone="tone-blue"
        title={
          <>
            Things I&apos;ve <span className="text-gradient-anim">designed &amp; shipped</span>
          </>
        }
        description="From App Store releases to production dashboards, real-time games, and open-source packages."
      >
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="chip tone-blue-light">{mobileCount} mobile apps</span>
          <span className="chip tone-blue">{webCount} web products</span>
          <span className="chip tone-blue">1 npm package</span>
        </div>
      </PageHero>

      <section aria-label="All projects" className="section pt-0!">
        <div className="shell">
          <ProjectsGrid projects={personalProjects} />
        </div>
      </section>
    </main>
  );
}
