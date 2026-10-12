import type { CSSProperties } from "react";

interface ShapeProps {
  className?: string;
  style?: CSSProperties;
}

export function Sparkle({ className = "", style }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`sparkle ${className}`}
      style={style}
    >
      <path d="M12 0c.6 5.6 3.4 9.4 12 12-8.6 2.6-11.4 6.4-12 12-.6-5.6-3.4-9.4-12-12C8.6 9.4 11.4 5.6 12 0z" />
    </svg>
  );
}

export function Squiggle({ className = "", style }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="squiggle-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <path
        d="M2 12c9-10 18-10 27 0s18 10 27 0 18-10 27 0 18 10 27 0"
        stroke="url(#squiggle-grad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RingDashed({ className = "", style }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className} style={style}>
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
    </svg>
  );
}

export function Blobby({ className = "", style }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} style={style}>
      <defs>
        <linearGradient id="blobby-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blobby-grad)"
        d="M44.7,-58.8C57.1,-48.1,66,-34.2,70.6,-18.6C75.2,-3,75.5,14.3,68.5,27.9C61.5,41.5,47.2,51.4,32.1,58.6C17,65.8,1.1,70.3,-15.5,68.7C-32.1,67.1,-49.4,59.4,-60.5,46.2C-71.6,33,-76.6,14.3,-74.4,-3.1C-72.2,-20.5,-62.8,-36.6,-49.6,-47.4C-36.4,-58.2,-19.4,-63.7,-2.4,-60.8C14.6,-57.9,32.3,-69.5,44.7,-58.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
