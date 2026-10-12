import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section">
      <div className="shell space-y-12">
        <SectionHeading
          id="experience-heading"
          eyebrow="Career path"
          tone="tone-blue-light"
          title={
            <>
              Where I&apos;ve been <span className="text-gradient">building</span>
            </>
          }
          action={
            <Link href="/experience" className="btn btn-ghost">
              Full experience
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          }
        />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
