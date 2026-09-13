import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { personalProjects } from "@/content/personal-projects";
import { getBreadcrumbJsonLd, siteBaseUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal and client projects — mobile apps, real-time multiplayer games, published npm packages, and headless commerce storefronts.",
  alternates: {
    canonical: `${siteBaseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);

  const featured = personalProjects[0];
  const mobileProjects = personalProjects.filter((p) => p.category === "Mobile App");
  const webProjects = personalProjects.filter((p) => p.category === "Web");
  const webRest = featured?.category === "Web" ? webProjects.slice(1) : webProjects;

  return (
    <main id="main-content" tabIndex={-1} className="relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="projects-heading"
        className="shell pt-32 pb-16 sm:pb-20"
      >
        {/* Back link */}
        <Link
          href="/#projects"
          className="tap-row t-link link-underline w-fit hover:text-(--ink-hi) transition-colors duration-300"
        >
          ← Back to home
        </Link>

        {/* Page title */}
        <div className="mt-10 flex items-baseline gap-[0.34em]">
          <span className="section-num" aria-hidden="true">03.</span>
          <h1 id="projects-heading" className="t-h2">PROJECTS</h1>
        </div>

        <p className="mt-6 t-body measure" style={{ marginLeft: "var(--indent-lg)" }}>
          Things I have designed, built, and shipped outside of client work —
          from real-time multiplayer systems to published packages.
        </p>


      </section>

      {/* ── FEATURED PROJECT ────────────────────────────────────── */}
      {featured && (
        <section
          aria-label={`Featured project: ${featured.name}`}
          className="shell pb-20 sm:pb-24"
        >
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-featured-card group"
            aria-label={`Open ${featured.name}`}
          >
            {/* Badge */}
            <span className="project-featured-badge">Featured</span>

            {/* Arrow */}
            <span className="project-featured-arrow" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>

            <div className="project-featured-inner">
              {/* Left: text */}
              <div className="project-featured-text">
                <p className="t-meta mb-3" style={{ color: "var(--ink-3)" }}>
                  01 / {String(personalProjects.length).padStart(2, "0")}
                </p>
                <h2 className="project-featured-title">{featured.name}</h2>
                <p className="project-featured-desc">{featured.description}</p>

                <div className="project-stack-tags mt-6">
                  {featured.stack.split("+").map((tag) => (
                    <span key={tag} className="project-stack-tag">
                      {tag.trim()}
                    </span>
                  ))}
                </div>

                <span className="project-featured-link">
                  {featured.urlLabel}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>

              {/* Right: image */}
              {featured.image && (
                <div className="project-featured-img-wrap">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt ?? `${featured.name} screenshot`}
                    width={1010}
                    height={1024}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="project-featured-img"
                    priority
                  />
                  {/* Overlay shimmer on hover */}
                  <span className="project-featured-img-overlay" aria-hidden="true" />
                </div>
              )}
            </div>
          </a>
        </section>
      )}

      {/* ── MOBILE APPS ─────────────────────────────────────────── */}
      {mobileProjects.length > 0 && (
        <section aria-labelledby="mobile-apps-heading" className="shell pb-20 sm:pb-24">
          <h2
            id="mobile-apps-heading"
            className="t-meta mb-8 sm:mb-10 flex items-center gap-3"
            style={{ color: "var(--ink-3)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            Mobile Apps
          </h2>
          <div className="project-cards-grid">
            {mobileProjects.map((project, i) => (
              <div key={project.name} className="project-card group">
                {/* Card number */}
                <span className="project-card-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Body */}
                <div className="project-card-body">
                  <h3 className="project-card-title">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-title-link"
                    >
                      {project.name}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="inline ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </h3>
                  <p className="project-card-desc">{project.description}</p>

                  {/* Platform store badges */}
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-platform-badge"
                          aria-label={`${project.name} on ${link.label}`}
                        >
                          {link.platform === "ios" ? (
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                          ) : (
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M3.18 23.76c.3.17.64.2.96.09l13.05-7.6-2.77-2.79-11.24 10.3zM.35 1.13C.13 1.47 0 1.92 0 2.46v19.08c0 .54.13.99.35 1.33l.07.07 10.69-10.69v-.25L.42 1.06l-.07.07zM23.27 10.3l-2.96-1.72-3.11 3.11 3.11 3.11 2.98-1.73c.85-.49.85-1.29-.02-1.77zM4.14.24L17.19 7.84l-2.77 2.79L3.18.27c.31-.11.66-.1.96-.03z"/>
                            </svg>
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
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
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── WEB PROJECTS ────────────────────────────────────────── */}
      {webRest.length > 0 && (
        <section aria-labelledby="web-projects-heading" className="shell pb-28 sm:pb-36">
          <h2
            id="web-projects-heading"
            className="t-meta mb-8 sm:mb-10 flex items-center gap-3"
            style={{ color: "var(--ink-3)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Web
          </h2>
          <div className="project-cards-grid">
            {webRest.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group"
                aria-label={`${project.name} — ${project.urlLabel}`}
              >
                {/* Card number */}
                <span className="project-card-num" aria-hidden="true">
                  {String(i + 2).padStart(2, "0")}
                </span>

                {/* Arrow icon */}
                <span className="project-card-arrow" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>

                {/* Body */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.name}</h3>
                  <p className="project-card-desc">{project.description}</p>
                </div>

                {/* Footer */}
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
        </section>
      )}
    </main>
  );
}
