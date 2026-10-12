"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ProjectScreenshot, ScreenshotLayout } from "@/content/personal-projects";

const ProjectScreenshots = dynamic(
  () => import("@/components/ui/ProjectScreenshots").then((mod) => mod.ProjectScreenshots),
  {
    ssr: false,
    loading: () => <div className="project-shots-viewport" aria-hidden="true" />,
  },
);

interface LazyProjectMediaProps {
  name: string;
  screenshots: ProjectScreenshot[];
  layout?: ScreenshotLayout;
}

/** Loads the gallery chunk only when the card is near the viewport. */
export function LazyProjectMedia({ name, screenshots, layout }: LazyProjectMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShow(true);
        observer.disconnect();
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {show ? (
        <ProjectScreenshots name={name} screenshots={screenshots} layout={layout} />
      ) : (
        <div className="project-shots-viewport" aria-hidden="true" />
      )}
    </div>
  );
}
