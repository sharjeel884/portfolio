"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { profileData } from "@/content/profile";
import { ResumeMenu } from "@/components/layout/ResumeMenu";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navItems)[number]["id"];

function scrollToSection(id: SectionId) {
  const el =
    id === "home"
      ? document.getElementById("home") ?? document.getElementById("main-content")
      : document.getElementById(id);

  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<SectionId>("home");
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const hash = window.location.hash.replace(/^#/, "") as SectionId | "";
    if (hash && navItems.some((item) => item.id === hash)) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      if (pathname === "/projects") setActiveId("projects");
      return;
    }

    const sectionIds = navItems.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome, pathname]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    if (!isHome) return;

    event.preventDefault();
    scrollToSection(id);
    window.history.replaceState(null, "", id === "home" ? "/" : `/#${id}`);
    setActiveId(id);
    setOpen(false);
  };

  const initials = profileData.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell">
        <nav className="nav-pill" aria-label="Primary">
          <Link href="/" className="flex items-center gap-3" aria-label={`${profileData.name} — home`}>
            <span className="logo-mark">{initials}</span>
            <span className="hidden sm:block font-display text-[0.95rem] font-semibold text-ink">
              {profileData.name}
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.id === "home" ? "/" : `/#${item.id}`}
                  className="nav-link"
                  aria-current={activeId === item.id ? "page" : undefined}
                  onClick={(event) => handleNavClick(event, item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ResumeMenu compact />
            <button
              type="button"
              className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-ink"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-menu" className="mobile-menu md:hidden">
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.id === "home" ? "/" : `/#${item.id}`}
                    className="nav-link block py-3! text-base"
                    aria-current={activeId === item.id ? "page" : undefined}
                    onClick={(event) => {
                      handleNavClick(event, item.id);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <ResumeMenu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
