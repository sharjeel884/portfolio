"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profileData } from "@/content/profile";
import { ResumeMenu } from "@/components/layout/ResumeMenu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={pathname === item.href ? "page" : undefined}
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
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link block py-3! text-base"
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
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
