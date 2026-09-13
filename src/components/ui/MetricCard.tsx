import React from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  className?: string;
}

export function MetricCard({ label, value, description, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between shadow-xs",
        className
      )}
    >
      <div className="space-y-1">
        <span className="text-xs font-mono text-[var(--text-subtle)] uppercase tracking-wider">
          {label}
        </span>
        <div className="text-3xl font-bold font-mono text-[var(--accent)] tracking-tight">
          {value}
        </div>
      </div>
      <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
