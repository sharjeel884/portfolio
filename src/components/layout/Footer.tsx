import Link from "next/link";
import { profileData } from "@/content/profile";
import { Mail, FileText, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Bio & System Status */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[var(--text-main)]">
              <Terminal className="w-4 h-4 text-[var(--accent)]" />
              <span>{profileData.name}</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] max-w-sm leading-relaxed">
              {profileData.supportingStatement}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-subtle)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All client systems operational & responding</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-[var(--text-main)] uppercase tracking-wider text-[11px] font-mono">
              Directory
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[var(--text-main)] hover:underline">
                  About & Principles
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[var(--text-main)] hover:underline">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--text-main)] hover:underline">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Links & Social */}
          <div className="space-y-3 text-xs">
            <div className="font-semibold text-[var(--text-main)] uppercase tracking-wider text-[11px] font-mono">
              Connect
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[var(--text-main)] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-subtle)]" />
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[var(--text-main)] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--text-subtle)]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-1.5 hover:text-[var(--text-main)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Direct</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[var(--accent)] font-medium hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[var(--text-subtle)]">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="font-mono text-center sm:text-right">
            Engineered with Next.js 14 App Router, TypeScript & WCAG 2.2 AA standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
