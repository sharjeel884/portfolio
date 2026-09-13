import Link from "next/link";
import { ArrowLeft, Terminal, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-12 h-12 rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center mx-auto">
        <FileQuestion className="w-6 h-6" />
      </div>

      <div className="space-y-2">
        <div className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
          404 · Route Not Found
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
          The requested resource does not exist
        </h1>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          The page or case study you are looking for may have been moved, renamed, or is currently in draft mode.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-xs font-medium hover:bg-[var(--accent-hover)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-main)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
        >
          <span>Explore Projects</span>
        </Link>
      </div>
    </div>
  );
}
