'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

/**
 * ThemeToggle
 *
 * Reads/writes the theme via:
 *   1. localStorage ("theme" key) for persistence
 *   2. html.light / html.dark class for CSS token switching
 *
 * Uses a sun↔moon SVG swap with a smooth scale+rotate transition.
 * Suppresses hydration mismatch with an `mounted` guard.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial: Theme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    applyTheme(initial);
    setTheme(initial);
  }, []);

  const applyTheme = (t: Theme) => {
    const html = document.documentElement;
    if (t === 'light') {
      html.classList.add('light');
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
      html.classList.remove('light');
    }
  };

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  };

  // Render a fixed-size placeholder until client-side to avoid layout shift
  if (!mounted) {
    return <span className="theme-toggle-btn" aria-hidden="true" style={{ width: 36, height: 36, display: 'inline-block' }} />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="theme-toggle-btn"
    >
      {/* Sun icon — visible in dark mode */}
      <svg
        key="sun"
        xmlns="http://www.w3.org/2000/svg"
        width="15" height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{
          position: 'absolute',
          transition: 'opacity 0.3s ease, transform 0.4s ease',
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
        }}
      >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </svg>

      {/* Moon icon — visible in light mode */}
      <svg
        key="moon"
        xmlns="http://www.w3.org/2000/svg"
        width="14" height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{
          position: 'absolute',
          transition: 'opacity 0.3s ease, transform 0.4s ease',
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
        }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
