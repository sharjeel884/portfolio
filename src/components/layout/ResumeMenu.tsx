"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { profileData } from "@/content/profile";

interface ResumeMenuProps {
  compact?: boolean;
}

export function ResumeMenu({ compact = false }: ResumeMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`resume-menu${compact ? " resume-menu--compact" : " resume-menu--block"}${open ? " is-open" : ""}`}
    >
      <button
        type="button"
        className={`btn btn-primary${compact ? " hidden sm:inline-flex min-h-0! py-2.5! px-4! text-sm!" : " w-full"}`}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        Resume
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
      {open && (
        <ul id={menuId} role="menu" className="resume-menu-list">
          {profileData.resumes.map((resume) => (
            <li key={resume.id} role="none">
              <a
                role="menuitem"
                href={resume.url}
                download={resume.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-menu-item"
                onClick={() => setOpen(false)}
              >
                <Download className="size-4 shrink-0" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-semibold text-ink">{resume.label}</span>
                  <span className="block text-xs font-normal text-ink-3">{resume.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
