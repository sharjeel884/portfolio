import { Metadata } from "next";
import Link from "next/link";
import { experienceData } from "@/content/experience";
import { Badge } from "@/components/ui/Badge";
import { getBreadcrumbJsonLd, siteBaseUrl } from "@/lib/seo";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work Experience & Measurable Outcomes",
  description:
    "Chronological engineering history, technical decisions, and measurable outcomes in enterprise SaaS and mobile applications.",
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Schema.org Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <header className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
          Engineering Career
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
          Work Experience & Technical Wins
        </h1>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
          A track record of technical decisions, state architecture refactors, and performance wins across 4+ years of shipping software.
        </p>
      </header>

      {/* Timeline List */}
      <div className="space-y-12 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-[var(--border-subtle)]">
        {experienceData.map((exp, idx) => (
          <article
            key={exp.id}
            className="relative pl-8 sm:pl-12 space-y-6 group"
          >
            {/* Timeline Node Icon */}
            <div className="absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] shadow-xs group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            </div>

            {/* Main Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all space-y-6 shadow-xs">
              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-main)]">
                    {exp.role}
                  </h2>
                  <div className="text-sm font-semibold text-[var(--accent)] font-mono mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-subtle)]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Product / Business Context */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-[var(--text-subtle)] uppercase tracking-wider">
                  Product Context
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed italic">
                  &ldquo;{exp.context}&rdquo;
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold text-[var(--text-main)] uppercase tracking-wider">
                  Key Responsibilities
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] font-bold mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Decisions & Impact — omitted unless recorded */}
              {exp.technicalDecisions && exp.technicalDecisions.length > 0 && (
                <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--text-main)] uppercase tracking-wider">
                    <Cpu className="w-4 h-4 text-[var(--accent)]" />
                    <span>Technical Decisions & Trade-offs</span>
                  </div>
                  <div className="space-y-2.5">
                    {exp.technicalDecisions.map((td, tdIdx) => (
                      <div key={tdIdx} className="text-xs space-y-0.5">
                        <div className="font-semibold text-[var(--text-main)] font-mono">
                          {td.decision}
                        </div>
                        <div className="text-[var(--text-muted)] pl-2 border-l border-[var(--accent)]">
                          Impact: {td.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Measurable Outcomes — omitted unless recorded */}
              {exp.measurableOutcomes && exp.measurableOutcomes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>Measurable Outcomes</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.measurableOutcomes.map((mo, moIdx) => (
                      <div
                        key={moIdx}
                        className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15 text-xs text-[var(--text-main)] flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{mo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Stack */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-[var(--border-subtle)]">
                {exp.technologies.map((t, tIdx) => (
                  <Badge key={tIdx} variant="default" className="text-[11px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="pt-6 flex items-center justify-between border-t border-[var(--border-subtle)]">
        <Link
          href="/about"
          className="text-xs text-[var(--text-subtle)] hover:text-[var(--text-main)] hover:underline"
        >
          ← About & Principles
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
        >
          <span>View Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
