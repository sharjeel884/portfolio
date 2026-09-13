"use client";

import { useEffect } from "react";

const SELECTOR = ".fade-up, .chroma, .mask-line";

/**
 * Plays the paused entrance animations (fade-up, chromatic split, mask wipe)
 * as elements scroll into view. Animations start paused in CSS so that
 * off-screen content never animates before it is seen.
 */
export function ScrollAnimations() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR)
    );

    // A .mask-line animates its child, everything else animates itself.
    const animatedNode = (el: HTMLElement): HTMLElement =>
      el.classList.contains("mask-line")
        ? ((el.firstElementChild as HTMLElement) ?? el)
        : el;

    const pause = (el: HTMLElement) => {
      const node = animatedNode(el);
      node.style.animationPlayState = "paused";
      const stagger = el.dataset.stagger;
      if (stagger) node.style.animationDelay = `${Number(stagger) * 90}ms`;
    };

    targets.forEach(pause);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          animatedNode(el).style.animationPlayState = "running";
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
