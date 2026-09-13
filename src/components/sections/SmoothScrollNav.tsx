"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "about", num: "00", label: "ABOUT" },
  { id: "skills", num: "01", label: "SKILLS" },
  { id: "experience", num: "02", label: "EXP" },
  { id: "projects", num: "03", label: "PROJECTS" },
  { id: "contact", num: "04", label: "CONTACT" },
];

interface Props {
  name: string;
}

export function SmoothScrollNav({ name }: Props) {
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll spy: a section is active while it crosses a horizontal band set
  // just above the middle of the viewport. Tracking ratios directly is more
  // reliable than comparing scroll offsets, which break whenever a section
  // is taller than the viewport.
  useEffect(() => {
    const crossing = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) crossing.add(entry.target.id);
          else crossing.delete(entry.target.id);
        }

        // Comparing intersection ratios would favour short sections, since a
        // section taller than the band can only ever cover part of itself.
        // Document order is what actually matters: when two sections meet at
        // the band, the later one is the one being scrolled into.
        const current = sections.filter((s) => crossing.has(s.id)).at(-1);
        if (current) setActive(current.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  // Lock the page behind the mobile menu and allow Escape to dismiss it
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.classList.add("is-locked");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop: floating index, top right ─────────────────── */}
      <nav
        className="hidden md:flex fixed top-12 right-(--gutter) z-50 flex-col gap-1"
        aria-label="Section navigation"
      >
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              aria-current={isActive ? "true" : undefined}
              className={`group flex items-center gap-4 py-1.5 text-left cursor-pointer transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-35 hover:opacity-75"
              }`}
            >
              <span className="font-mono text-[11px] tracking-widest text-(--ink-3) w-5">
                {s.num}
              </span>
              <span className="font-mono text-[11px] font-bold tracking-[0.22em] text-(--ink-hi)">
                {s.label}
              </span>
              <span
                aria-hidden="true"
                className={`h-px bg-(--rule-strong) transition-all duration-500 ${
                  isActive ? "w-6" : "w-0"
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* ── Mobile: top bar ────────────────────────────────────── */}
      <header
        className="md:hidden fixed top-0 inset-x-0 z-50 border-b border-(--rule) pt-[env(safe-area-inset-top)]"
        style={{ background: "rgba(10,10,10,0.88)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex items-center justify-between px-6 h-14">
          <button
            onClick={() => scrollTo("about")}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--ink-2) cursor-pointer"
            aria-label="Back to top"
          >
            {name}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="-mr-2 w-11 h-11 flex flex-col justify-center items-center gap-1.25 cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-5 h-px bg-(--ink-1) block transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-0.75" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-(--ink-1) block transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-0.75" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile: full-screen menu ───────────────────────────── */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="md:hidden fixed inset-0 z-40 flex flex-col justify-center gap-2 px-10"
        style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(24px)" }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="flex items-baseline gap-5 py-3 cursor-pointer group"
          >
            <span className="font-mono text-[11px] text-(--ink-4) w-6">
              {s.num}
            </span>
            <span
              className={`text-[32px] font-light tracking-tight transition-colors duration-300 ${
                active === s.id ? "text-(--ink-hi)" : "text-(--ink-2)"
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
