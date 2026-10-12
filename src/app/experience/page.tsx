import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { profileData } from "@/content/profile";
import { experienceData } from "@/content/experience";
import { getBreadcrumbJsonLd, siteBaseUrl } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { ResumeLinks } from "@/components/ui/ResumeLinks";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience",
  description: `${profileData.yearsOfExperience} years of frontend engineering across ${experienceData
    .map((e) => e.company)
    .join(" and ")} — React, React Native, Next.js, and TypeScript.`,
  alternates: {
    canonical: `${siteBaseUrl}/experience`,
  },
};

export default function ExperiencePage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Experience", url: "/experience" },
  ]);

  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        eyebrow="Career path"
        watermark="WORK"
        tone="tone-blue-light"
        title={
          <>
            {profileData.yearsOfExperience} years of <span className="text-gradient">shipping</span>
          </>
        }
        description="Web and mobile products delivered with React, React Native, Next.js, and TypeScript — from intern to senior engineer."
      >
        <div className="pt-2">
          <ResumeLinks />
        </div>
      </PageHero>

      <section aria-label="Work history" className="section pt-0!">
        <div className="shell max-w-5xl!">
          <ExperienceTimeline detailed />

          <div className="timeline mt-8">
            <div className="tone-blue reveal relative">
              <span className="timeline-node" aria-hidden="true" />
              <article className="card card-glow card-hover flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:p-9">
                <span className="icon-tile shrink-0">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">Education</p>
                  <h2 className="mt-2 text-2xl font-bold">{profileData.education.degree}</h2>
                  <p className="mt-1 text-ink-2">
                    {profileData.education.institution}, {profileData.education.location}
                  </p>
                </div>
                <span className="chip">{profileData.education.period}</span>
              </article>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link href="/projects" className="btn btn-ghost">
              See what I&apos;ve built
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
