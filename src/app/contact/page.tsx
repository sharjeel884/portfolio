import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { profileData } from "@/content/profile";
import { contactLinks } from "@/lib/contact-links";
import { getBreadcrumbJsonLd, siteBaseUrl } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { ResumeLinks } from "@/components/ui/ResumeLinks";
export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profileData.name} — ${profileData.availability.toLowerCase()}, ${profileData.workArrangement.toLowerCase()}.`,
  alternates: {
    canonical: `${siteBaseUrl}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        eyebrow="Get in touch"
        watermark="HELLO"
        tone="tone-blue-light"
        title={
          <>
            Let&apos;s create something <span className="text-gradient-anim">bold</span>
          </>
        }
        description="Have a role to fill, a product to build, or just want to talk engineering? Reach out on any of the channels below — I usually reply within a day or two."
      />

      <section aria-label="Contact options" className="section pt-0!">
        <div className="shell grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <div className="card tone-blue reveal p-6">
              <span className="chip">
                <span className="dot dot--pulse" aria-hidden="true" />
                {profileData.availability}
              </span>
              <div className="mt-5 space-y-3 text-sm text-ink-2">
                <p className="flex items-center gap-3">
                  <MapPin className="size-4 text-accent-light" aria-hidden="true" />
                  {profileData.location}
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="size-4 text-accent" aria-hidden="true" />
                  {profileData.workArrangement}
                </p>
              </div>
            </div>

            <ResumeLinks stacked />
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">

              {contactLinks.map((link, i) => (
                <li key={link.href} className="reveal" style={{ ["--stagger" as string]: i + 1 }}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`card card-hover group flex items-center gap-4 p-4 ${link.tone}`}
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
      </section>
    </main>
  );
}
