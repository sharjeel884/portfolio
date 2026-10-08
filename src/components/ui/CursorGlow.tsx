'use client';

import { useEffect, useRef } from 'react';

/**
 * CursorGlow
 *
 * Paints a soft radial spotlight that lazily follows the mouse.
 * The glow element is inserted once as a `position:fixed` layer
 * (z-index 2, above the film-grain but below page content) and
 * its background-position is driven by a lerp'd rAF loop so
 * the light feels liquid rather than mechanical.
 *
 * No external dependencies; no impact on layout.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Target position (raw mouse)
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;

    // Current rendered position (lerped)
    let cx = tx;
    let cy = ty;

    let rafId = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;

      if (!visible) {
        // Snap to cursor immediately on first move so there is no
        // "catch-up" from the centre of the screen.
        cx = tx;
        cy = ty;
        visible = true;
        el.style.opacity = '1';
      }
    };

    const onLeave = () => {
      visible = false;
      el.style.opacity = '0';
    };

    const tick = () => {
      // Ease factor — lower = slower / more liquid
      const ease = 0.072;
      cx += (tx - cx) * ease;
      cy += (ty - cy) * ease;

      el.style.setProperty('--gx', `${cx}px`);
      el.style.setProperty('--gy', `${cy}px`);

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={
        {
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0,
          transition: 'opacity 0.6s ease',
          background:
            'radial-gradient(700px circle at var(--gx, 50%) var(--gy, 50%), rgba(99,102,241,0.10) 0%, rgba(99,102,241,0.04) 35%, transparent 70%)',
          '--gx': '50%',
          '--gy': '50%',
        } as React.CSSProperties
      }
    />
  );
}
