import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, ArrowRight, Compass, GraduationCap, Layers, ShieldCheck, Users } from "lucide-react";
import { profileData } from "@/content/profile";
import { experienceData } from "@/content/experience";
import { getBreadcrumbJsonLd, siteBaseUrl } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { ResumeLinks } from "@/components/ui/ResumeLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Blobby, RingDashed } from "@/components/ui/Graphics";

export const metadata: Metadata = {
  title: "About",
  description: `${profileData.supportingStatement} ${profileData.backendPositioning}`,
  alternates: {
    canonical: `${siteBaseUrl}/about`,
  },
};

const principleIcons = [Accessibility, Layers, ShieldCheck, Users];
const principleTones = ["tone-blue", "tone-blue", "tone-blue", "tone-blue-light"];

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);
  const firstJob = experienceData[experienceData.length - 1];
  const currentJob = experienceData[0];

  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        eyebrow="About me"
        watermark="ABOUT"
        tone="tone-blue-light"
        title={
          <>
            Engineering with <span className="text-gradient-anim">intent</span> and colour
          </>
        }
        description={`${profileData.role} with ${profileData.yearsOfExperience} years of experience, based in ${profileData.location}.`}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <ResumeLinks />
          <Link href="/contact" className="btn btn-ghost">
            Get in touch
          </Link>
        </div>
      </PageHero>

      <section aria-labelledby="story-heading" className="section pt-0!">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card tone-blue reveal relative flex min-h-[22rem] flex-col justify-end overflow-hidden p-8 sm:p-10">
            <Blobby className="pointer-events-none absolute -right-10 -top-10 size-72 opacity-60 blur-xl" />
            <RingDashed className="absolute left-8 top-8 size-24 text-accent/60" />
            <div className="relative">
              <p className="font-display text-7xl font-bold text-gradient sm:text-8xl">
                {profileData.yearsOfExperience}
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-ink">years of building for the web &amp; mobile</p>
              <p className="mt-3 text-sm text-ink-2">
                From {firstJob.company} in {firstJob.period.split("—")[0].trim()} to {currentJob.role} at{" "}
                {currentJob.company} today.
              </p>
            </div>
          </div>

          <div className="card reveal space-y-5 p-8 sm:p-10" style={{ ["--stagger" as string]: 1 }}>
            <p className="eyebrow tone-blue-light">My story</p>
            <h2 id="story-heading" className="text-3xl font-bold sm:text-4xl">
              Product requirements in, <span className="text-gradient">reliable experiences</span> out
            </h2>
            <p className="text-ink-2">{profileData.supportingStatement}</p>
            <p className="text-ink-2">{profileData.backendPositioning}</p>
            <p className="text-ink-2">
              At {firstJob.company}, I {firstJob.context.charAt(0).toLowerCase() + firstJob.context.slice(1)} Today at{" "}
              {currentJob.company}, I lead technical delivery for mid-size projects — sprint planning, code
              reviews, architecture decisions, and mentoring junior developers.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="section">
        <div className="shell space-y-12">
          <SectionHeading
            id="principles-heading"
            eyebrow="How I work"
            tone="tone-blue"
            title={
              <>
                Principles I <span className="text-gradient-cool">build by</span>
              </>
            }
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {profileData.engineeringPrinciples.map((principle, i) => {
              const Icon = principleIcons[i % principleIcons.length];
              return (
                <article
                  key={principle.title}
                  className={`card card-glow card-hover reveal p-8 ${principleTones[i % principleTones.length]}`}
                  style={{ ["--stagger" as string]: i % 2 }}
                >
                  <div className="flex items-start justify-between">
                    <span className="icon-tile">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-5xl font-bold text-outline">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{principle.title}</h3>
                  <p className="mt-3 text-ink-2">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SkillsSection />

      <section aria-label="Education and learning" className="section pt-0!">
        <div className="shell grid gap-5 md:grid-cols-2">
          <article className="card card-hover tone-blue-light reveal p-8">
            <span className="icon-tile">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <p className="eyebrow tone-blue-light mt-6">Education</p>
            <h2 className="mt-3 text-2xl font-bold">{profileData.education.degree}</h2>
            <p className="mt-2 text-ink-2">
              {profileData.education.institution}, {profileData.education.location}
            </p>
            <p className="mt-1 font-mono text-sm text-ink-3">{profileData.education.period}</p>
          </article>

          <article className="card card-hover tone-blue reveal p-8" style={{ ["--stagger" as string]: 1 }}>
            <span className="icon-tile">
              <Compass className="size-5" aria-hidden="true" />
            </span>
            <p className="eyebrow tone-blue mt-6">Currently exploring</p>
            <ul className="mt-4 space-y-3">
              {profileData.learningGoals.map((goal) => (
                <li key={goal} className="flex gap-3 text-ink-2">
                  <span className="dot mt-2 shrink-0" aria-hidden="true" />
                  {goal}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="shell mt-10 flex justify-center">
          <Link href="/experience" className="btn btn-ghost">
            See my experience
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
