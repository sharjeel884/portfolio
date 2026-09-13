import { Metadata } from "next";
import Link from "next/link";
import { profileData } from "@/content/profile";
import { skillCategories } from "@/content/skills";
import { Badge } from "@/components/ui/Badge";
import { getBreadcrumbJsonLd, siteBaseUrl } from "@/lib/seo";
import {
  Code2,
  Cpu,
  Layers,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight,
  Terminal,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy",
  description:
    "Professional journey, engineering principles, problems solved, team collaboration, and pragmatic backend competence.",
  alternates: {
    canonical: `${siteBaseUrl}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      {/* Schema.org Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <header className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
          Background & Capabilities
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
          Engineering with Intent: Fast, Accessible, and Maintainable Systems
        </h1>
        <p className="text-base text-[var(--text-muted)] leading-relaxed">
          A deeper look into my 4+ year trajectory, architectural standards, team leadership, and pragmatic backend competence.
        </p>
      </header>

      {/* 1. Professional Journey */}
      <section aria-labelledby="journey-heading" className="space-y-4">
        <h2 id="journey-heading" className="text-xl font-bold text-[var(--text-main)] flex items-center gap-2 font-mono">
          <Terminal className="w-5 h-5 text-[var(--accent)]" />
          <span>01. Professional Journey</span>
        </h2>
        <div className="text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
          <p>
            Over the past 4+ years, I have specialized in building robust client-side web and mobile architectures.
            My journey began in fast-paced agency and SaaS environments where delivering clean UI components taught me the
            subtleties of CSS rendering, responsive breakpoints, and semantic HTML structure.
          </p>
          <p>
            As I progressed into enterprise applications, my focus shifted toward the architectural backbone of frontend engineering:
            managing high-density data tables, designing resilient optimistic state flows with TanStack Query, guaranteeing
            WCAG 2.2 AA accessibility, and building cross-platform React Native companion apps with offline-first synchronization.
          </p>
          <p>
            I treat frontend development as a rigorous engineering discipline. A great user interface is not just visually appealing;
            it is fast, predictable under flaky network conditions, intuitive for assistive technologies, and architected so other
            engineers can extend it without fear.
          </p>
        </div>
      </section>

      {/* 2. Type of Problems I Solve */}
      <section aria-labelledby="problems-heading" className="space-y-6">
        <h2 id="problems-heading" className="text-xl font-bold text-[var(--text-main)] flex items-center gap-2 font-mono">
          <Code2 className="w-5 h-5 text-[var(--accent)]" />
          <span>02. The Problems I Solve</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
            <h3 className="text-sm font-semibold text-[var(--text-main)]">High-Density Data & Virtualization</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Eliminating UI lag and memory leaks in tables handling 50k+ rows through windowing (TanStack Virtual), Web Worker computations, and debounced filters.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
            <h3 className="text-sm font-semibold text-[var(--text-main)]">Optimistic UI & Cache Synchronization</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Designing instant optimistic updates with automatic rollback snapshot buffers and accessible screen reader alerts upon network rejection.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
            <h3 className="text-sm font-semibold text-[var(--text-main)]">Offline-First Mobile Architecture</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Engineering React Native applications with SQLite / WatermelonDB reactive models, background sync queues, and three-way conflict merge resolvers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
            <h3 className="text-sm font-semibold text-[var(--text-main)]">Complex Dynamic Form Engines</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Compiling JSON schema definitions into strongly-typed Zod validators and uncontrolled React Hook Form fields with zero input latency.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Backend Competence (Honest, Practical Context) */}
      <section aria-labelledby="backend-heading" className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[var(--accent)]" />
          <h2 id="backend-heading" className="text-lg font-bold text-[var(--text-main)]">
            Practical Backend Competence
          </h2>
        </div>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          I position myself clearly as a <strong>Frontend Engineer with 4+ years of core client experience and practical backend capability</strong>.
          My 6 months of focused Node.js and Express development allow me to:
        </p>
        <ul className="space-y-2 text-xs text-[var(--text-muted)]">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Design consistent RESTful API contracts with standardized pagination, filtering, and error payloads.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Implement JWT token authentication, refresh rotation, and RBAC authorization middleware.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Model indexed MongoDB collections and relational SQL schemas to minimize frontend roundtrips.</span>
          </li>
        </ul>
        <p className="text-[11px] font-mono text-[var(--text-subtle)] pt-1">
          This full-stack literacy eliminates handoff friction between frontend and backend teams without overclaiming backend specialization.
        </p>
      </section>

      {/* 4. Team Leadership & Mentorship */}
      <section aria-labelledby="leadership-heading" className="space-y-4">
        <h2 id="leadership-heading" className="text-xl font-bold text-[var(--text-main)] flex items-center gap-2 font-mono">
          <Users className="w-5 h-5 text-[var(--accent)]" />
          <span>03. Collaboration & Mentorship</span>
        </h2>
        <div className="text-sm text-[var(--text-muted)] leading-relaxed space-y-3">
          <p>
            Engineering is a multiplayer effort. Throughout my roles, I have mentored 6+ junior engineers in TypeScript strict-mode practices, component decomposition, and writing deterministic integration tests.
          </p>
          <p>
            I champion structured RFCs (Requests for Comments) for major technical shifts—such as adopting TanStack Query or migrating to Next.js App Router—ensuring the team aligns on trade-offs before writing code.
          </p>
        </div>
      </section>

      {/* 5. Complete Skills Matrix */}
      <section aria-labelledby="skills-heading" className="space-y-6">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
          <h2 id="skills-heading" className="text-xl font-bold text-[var(--text-main)] font-mono">
            04. Skills by Capability
          </h2>
          <span className="text-xs text-[var(--text-subtle)]">Grouped by domain</span>
        </div>

        <div className="space-y-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-[var(--text-main)]">{cat.area}</h3>
                <span className="text-xs text-[var(--text-subtle)]">{cat.description}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-main)] flex items-center gap-1.5 shadow-2xs"
                  >
                    <span className="font-medium">{s.name}</span>
                    {s.highlights && (
                      <span className="text-[10px] text-[var(--text-subtle)] hidden sm:inline">
                        ({s.highlights})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Learning Goals */}
      <section aria-labelledby="learning-heading" className="p-6 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-4">
        <h2 id="learning-heading" className="text-sm font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
          Active Exploration & Learning
        </h2>
        <ul className="space-y-2">
          {profileData.learningGoals.map((goal, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Actions */}
      <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)]">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-xs font-medium text-[var(--accent)] hover:underline"
        >
          <span>Explore Timeline & Achievements</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href={profileData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-main)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
        >
          <FileText className="w-4 h-4 text-[var(--accent)]" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>
    </div>
  );
}
