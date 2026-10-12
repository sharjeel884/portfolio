import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Sparkle } from "@/components/ui/Graphics";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative flex flex-1 items-center justify-center overflow-hidden px-6 pt-36 pb-24 text-center"
    >
      <Sparkle className="left-[20%] top-[30%] size-6" />
      <Sparkle className="right-[22%] bottom-[28%] size-4 text-accent-light!" style={{ animationDelay: "-1.2s" }} />
      <div className="space-y-6">
        <p className="font-display text-[clamp(7rem,24vw,14rem)] font-bold leading-none text-gradient-anim">
          404
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">This page drifted out of orbit</h1>
        <p className="mx-auto max-w-md text-ink-2">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back home
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            Explore projects
          </Link>
        </div>
      </div>
    </main>
  );
}
