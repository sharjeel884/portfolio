import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, MapPin, Package } from "lucide-react";
import { profileData } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blobby, RingDashed } from "@/components/ui/Graphics";

export function AboutSection() {
  const [experience, role, pkg] = profileData.metrics;

  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="shell space-y-12">
        <SectionHeading
          id="about-heading"
          eyebrow="About me"
          tone="tone-blue-light"
          title={
            <>
              Turning product ideas into <span className="text-gradient">delightful</span> interfaces
            </>
          }
          action={
            <Link href="/about" className="btn btn-ghost">
              More about me
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="grid gap-5 md:grid-cols-3">
          <article className="card card-glow tone-blue reveal relative overflow-hidden p-8 md:col-span-2 md:row-span-2 sm:p-10">
            <Blobby className="pointer-events-none absolute -right-16 -bottom-16 size-64 opacity-30 blur-2xl" />
            <div className="relative space-y-5">
              <p className="text-xl leading-relaxed text-ink sm:text-2xl">
                {profileData.supportingStatement}
              </p>
              <p className="text-ink-2">{profileData.backendPositioning}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {profileData.coreTechnologies.map((tech, i) => (
                  <span
                    key={tech.name}
                    className={`chip ${["tone-blue", "tone-blue-light", "tone-blue-light", "tone-blue"][i % 4]}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article
            className="card card-hover tone-blue-light reveal relative overflow-hidden p-7"
            style={{ ["--stagger" as string]: 1 }}
          >
            <RingDashed className="absolute -right-8 -top-8 size-36 text-accent-light/40" />
            <p className="text-sm text-ink-3">{experience.label}</p>
            <p className="mt-2 font-display text-5xl font-bold text-gradient">{experience.value}</p>
            <p className="mt-3 text-sm text-ink-2">{experience.description}</p>
          </article>

          <article
            className="card card-hover tone-blue reveal p-7"
            style={{ ["--stagger" as string]: 2 }}
          >
            <span className="icon-tile">
              <Briefcase className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm text-ink-3">{role.label}</p>
            <p className="mt-1 font-display text-xl font-bold text-ink">{role.value}</p>
            <p className="mt-2 text-sm text-ink-2">{role.description}</p>
          </article>

          <article
            className="card card-hover tone-blue reveal p-7"
            style={{ ["--stagger" as string]: 1 }}
          >
            <span className="icon-tile">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm text-ink-3">Education</p>
            <p className="mt-1 font-display text-lg font-bold text-ink">
              {profileData.education.degree}
            </p>
            <p className="mt-2 text-sm text-ink-2">
              {profileData.education.institution} · {profileData.education.period}
            </p>
          </article>

          <article
            className="card card-hover tone-blue-light reveal p-7"
            style={{ ["--stagger" as string]: 2 }}
          >
            <span className="icon-tile">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm text-ink-3">Location</p>
            <p className="mt-1 font-display text-lg font-bold text-ink">{profileData.location}</p>
            <p className="mt-2 text-sm text-ink-2">{profileData.workArrangement}</p>
          </article>

          <article
            className="card card-hover tone-blue-light reveal p-7"
            style={{ ["--stagger" as string]: 3 }}
          >
            <span className="icon-tile">
              <Package className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm text-ink-3">{pkg.label}</p>
            <p className="mt-1 font-mono text-lg font-semibold text-ink">{pkg.value}</p>
            <p className="mt-2 text-sm text-ink-2">{pkg.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
