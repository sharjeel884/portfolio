import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { profileData } from "@/content/profile";
import { contactLinks } from "@/lib/contact-links";

const footerNav = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-white/10 bg-bg/60 backdrop-blur-xl">
      <div className="h-px w-full" style={{ background: "var(--grad-rainbow)" }} aria-hidden="true" />
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Let&apos;s build something <span className="text-gradient">vivid</span>.
            </p>
            <p className="max-w-sm text-sm text-ink-3">
              {profileData.role} in {profileData.location}. {profileData.availability} —{" "}
              {profileData.workArrangement.toLowerCase()}.
            </p>
          </div>

          <div>
            <p className="eyebrow tone-blue mb-4">Explore</p>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-2 transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow tone-blue-light mb-4">Connect</p>
            <ul className="space-y-2.5">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-ink"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow tone-blue-light mb-4">CVs</p>
            <ul className="space-y-2.5">
              {profileData.resumes.map((resume) => (
                <li key={resume.id}>
                  <a
                    href={resume.url}
                    download={resume.filename}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-ink"
                  >
                    {resume.label}
                    <Download
                      className="size-3.5 opacity-50 transition-transform group-hover:translate-y-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink-3 sm:flex-row">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="font-mono">Designed &amp; built with Next.js + TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
