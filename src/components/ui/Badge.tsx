import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "emerald" | "amber";
}

export function Badge({ children, variant = "default", className, ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] border-[var(--border-subtle)]",
    outline: "bg-transparent text-[var(--text-muted)] border-[var(--border-strong)]",
    accent: "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]/30",
    emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
