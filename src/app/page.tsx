import { profileData } from "@/content/profile";
import { experienceData } from "@/content/experience";
import { skillCategories } from "@/content/skills";
import { personalProjects, homeProjectCount } from "@/content/personal-projects";
import Link from "next/link";
import { SmoothScrollNav } from "@/components/sections/SmoothScrollNav";
import { ScrollAnimations } from "@/components/sections/ScrollAnimations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${profileData.name} — ${profileData.role}`,
  description: profileData.supportingStatement,
};

interface ContactLink {
  href: string;
  label: string;
  srLabel: string;
  icon: React.ReactNode;
  outline?: boolean;
  external?: boolean;
}

/** Strips the scheme and any www. so a URL reads as a plain handle. */
function urlLabel(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

export default function HomePage() {
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => s.name)
  );

  const contactLinks: ContactLink[] = [
    {
      href: `mailto:${profileData.email}`,
      label: profileData.email,
      srLabel: "Email me",
      outline: true,
      icon: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </>
      ),
    },
    {
      href: `tel:${profileData.phone.replace(/\s/g, "")}`,
      label: profileData.phone,
      srLabel: "Call me",
      outline: true,
      icon: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      ),
    },
    {
      href: profileData.linkedin,
      label: urlLabel(profileData.linkedin),
      srLabel: "LinkedIn profile",
      external: true,
      icon: (
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.75 2.6 4.75 6V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4z" />
      ),
    },
    {
      href: profileData.github,
      label: urlLabel(profileData.github),
      srLabel: "GitHub profile",
      external: true,
      icon: (
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
      ),
    },
  ];

  const featuredProjects = personalProjects.slice(0, homeProjectCount);
  const hasMoreProjects = personalProjects.length > homeProjectCount;

  const [firstName, ...rest] = profileData.name.split(" ");
  const lastName = rest.join(" ");
  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`;

  return (
    <>
      <ScrollAnimations />
      <SmoothScrollNav name={profileData.name} />

      <main id="main-content" tabIndex={-1} className="relative z-10">
        {/* ── 00. ABOUT ──────────────────────────────────────────── */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="section shell pt-32 md:pt-(--section-y)"
        >
          {/* Name */}
          <h1 id="about-heading" className="t-display">
            <span className="mask-line">
              <span>{firstName.toUpperCase()}</span>
            </span>
            <span className="flex items-baseline gap-[0.3em]">
              <span className="mask-line" data-stagger="1">
                <span>{lastName.toUpperCase()}</span>
              </span>

            </span>
          </h1>

          {/* Offset intro column */}
          <div className="mt-12 sm:mt-16 md:ml-[38%] measure space-y-5">
            <p className="chroma t-lead" data-stagger="1">
              {profileData.role}
            </p>
            <p className="chroma t-body" data-stagger="2">
              {profileData.supportingStatement}
            </p>
            <p className="chroma t-body-dim" data-stagger="3">
              {profileData.backendPositioning}
            </p>
            <p className="chroma t-meta pt-2" data-stagger="4">
              {profileData.location}
            </p>
          </div>
        </section>

        {/* ── 01. SKILLS ─────────────────────────────────────────── */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="section shell"
        >
          <div className="indent-sm flex items-baseline gap-[0.34em]">
            <span className="section-num" aria-hidden="true">01.</span>
            <span className="mask-line">
              <h2 id="skills-heading" className="t-h2">SKILLS</h2>
            </span>
          </div>

          <div className="mt-12 sm:mt-16 indent-lg grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <p className="chroma t-body measure-tight">
              Scalable component systems, REST API integration, performance
              work, and code review across React, React Native, and Next.js.
            </p>

            <ul className="col-list">
              {allSkills.map((skill, i) => (
                <li
                  key={skill}
                  className="chroma t-list hover:text-(--ink-hi) transition-colors duration-300"
                  data-stagger={i % 8}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 02. EXPERIENCE ─────────────────────────────────────── */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="section shell"
        >
          <div className="indent-sm flex items-baseline gap-[0.34em]">
            <span className="section-num" aria-hidden="true">02.</span>
            <span className="mask-line">
              <h2 id="experience-heading" className="t-h2">
                EXP—
                <br />
                ERIENCE
              </h2>
            </span>
          </div>

          <div className="mt-12 sm:mt-16 indent-lg space-y-12 sm:space-y-14">
            {experienceData.map((exp, i) => (
              <article
                key={exp.id}
                className="grid gap-4 lg:gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] pb-12 sm:pb-14 border-b border-(--rule)"
              >
                <header className="lg:text-right">
                  <h3
                    className="chroma text-[clamp(1.125rem,1.6vw,1.375rem)] font-light text-(--ink-1)"
                    data-stagger={i}
                  >
                    {exp.company}
                  </h3>
                  <p
                    className="chroma t-meta mt-1.5 text-(--ink-3)"
                    data-stagger={i + 1}
                  >
                    {exp.role}
                  </p>
                  <p className="chroma t-meta mt-1" data-stagger={i + 1}>
                    {exp.period} · {exp.location}
                  </p>
                </header>

                <div className="space-y-4">
                  <p className="chroma t-body" data-stagger={i + 1}>
                    {exp.context}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="chroma t-body-dim pl-4 relative before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-(--ink-5)"
                        data-stagger={i + 2}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="t-meta">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            {/* Education */}
            <div className="grid gap-4 lg:gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
              <header className="lg:text-right">
                <h3 className="chroma t-meta text-(--ink-3)">Education</h3>
              </header>
              <div>
                <p className="chroma text-[clamp(1rem,1.4vw,1.1875rem)] font-light text-(--ink-1)">
                  {profileData.education.degree}
                </p>
                <p className="chroma t-meta mt-1.5">
                  {profileData.education.institution} ·{" "}
                  {profileData.education.location}
                </p>
                <p className="chroma t-meta mt-1">
                  {profileData.education.period}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. PROJECTS ───────────────────────────────────────── */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="section shell"
        >
          <div className="indent-sm flex items-baseline gap-[0.34em]">
            <span className="section-num" aria-hidden="true">03.</span>
            <span className="mask-line">
              <h2 id="projects-heading" className="t-h2">PROJECTS</h2>
            </span>
          </div>

          <div className="mt-12 sm:mt-16 indent-lg">
            {/* Sub-heading row */}
            <div className="flex items-end justify-between gap-6 mb-10 sm:mb-12">
              <p className="chroma t-body measure-tight">
                Handpicked work — shipped to production and used by real users.
              </p>
              <Link
                href="/projects"
                className="chroma project-cta-btn shrink-0"
                aria-label={hasMoreProjects ? `View all ${personalProjects.length} projects` : "View all projects"}
              >
                <span>{hasMoreProjects ? `All ${personalProjects.length}` : "All"}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card grid */}
            <div className="project-cards-grid">
              {featuredProjects.map((project, i) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chroma project-card group"
                  data-stagger={i}
                  aria-label={`${project.name} — ${project.urlLabel}`}
                >
                  {/* Card number */}
                  <span className="project-card-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Arrow icon — top right, shows on hover */}
                  <span className="project-card-arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>

                  {/* Content */}
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.name}</h3>
                    <p className="project-card-desc">{project.description}</p>
                  </div>

                  {/* Footer: stack tags + domain */}
                  <footer className="project-card-footer">
                    <div className="project-stack-tags">
                      {project.stack.split("+").map((tag) => (
                        <span key={tag} className="project-stack-tag">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                    <span className="project-card-domain">{project.urlLabel}</span>
                  </footer>
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-10 flex justify-center sm:hidden">
              <Link
                href="/projects"
                className="chroma project-cta-btn"
              >
                <span>{hasMoreProjects ? `View all ${personalProjects.length} projects` : "View all projects"}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 04. CONTACT ────────────────────────────────────────── */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="section shell"
        >
          <div className="indent-sm flex items-baseline gap-[0.34em]">
            <span className="section-num" aria-hidden="true">04.</span>
            <span className="mask-line">
              <h2 id="contact-heading" className="t-h2">CONTACT</h2>
            </span>
          </div>

          <div className="mt-12 sm:mt-16 indent-lg grid gap-10 lg:gap-14 sm:grid-cols-2">
            <p className="chroma t-body measure-tight">
              Always open to new work — whether you have a project in mind, a
              role to fill, or just want to talk engineering.
            </p>

            <ul className="space-y-2">
              {contactLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={link.srLabel}
                    className="chroma tap-row gap-4 sm:gap-5 group w-fit"
                    data-stagger={i + 1}
                  >
                    <span className="w-10 h-10 shrink-0 rounded-full border border-(--rule) flex items-center justify-center text-(--ink-3) group-hover:border-(--rule-strong) group-hover:text-(--ink-hi) transition-colors duration-500">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill={link.outline ? "none" : "currentColor"}
                        stroke={link.outline ? "currentColor" : "none"}
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {link.icon}
                      </svg>
                    </span>
                    <span className="link-underline t-link break-all group-hover:text-(--ink-hi) transition-colors duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* -mr-36 cancels the lane the shell reserves for the fixed nav, so
              the footer centres on the page rather than on the text column. */}
          <footer className="mt-20 sm:mt-28 md:-mr-36 pt-8 border-t border-(--rule) flex flex-col items-center gap-1.5 text-center">
            <p className="t-meta normal-case">
              Designed &amp; built by {profileData.name}
            </p>
            <p className="t-meta normal-case text-(--ink-4)">
              © {new Date().getFullYear()} — All rights reserved
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}
