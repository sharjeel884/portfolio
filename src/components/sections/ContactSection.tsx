import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profileData } from "@/content/profile";
import { contactLinks } from "@/lib/contact-links";
import { Sparkle } from "@/components/ui/Graphics";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section">
      <div className="shell">
        <div className="reveal relative isolate overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-14 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 10% 10%, rgb(59 130 246 / 0.5), transparent 50%), radial-gradient(circle at 90% 90%, rgb(96 165 250 / 0.4), transparent 50%), #0f1d3d",
            }}
          />
          <div aria-hidden="true" className="dots-pattern absolute inset-0 -z-10 opacity-25" />
          <Sparkle className="right-[8%] top-[12%] size-8" />
          <Sparkle className="bottom-[14%] left-[48%] size-4 text-accent!" style={{ animationDelay: "-1.6s" }} />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div className="space-y-6">
              <p className="eyebrow tone-blue-light">Get in touch</p>
              <h2 id="contact-heading" className="text-[clamp(2.5rem,6vw,4.75rem)] font-bold">
                Have an idea? <br />
                Let&apos;s make it <span className="text-gradient-anim">shine</span>.
              </h2>
              <p className="lead text-ink">
                Always open to new work — whether you have a project in mind, a role to fill, or
                just want to talk engineering.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${profileData.email}`} className="btn btn-primary">
                  Say hello
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-bg/50 p-4 backdrop-blur-md transition-colors hover:border-white/30 ${link.tone}`}
                  >
                    <span className="icon-tile size-11! shrink-0">{link.icon}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-ink-3">{link.label}</span>
                      <span className="block truncate font-semibold text-ink">{link.value}</span>
                    </span>
                    <ArrowUpRight
                      className="size-4 text-ink-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
