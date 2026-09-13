"use client";

import { useState } from "react";
import { profileData } from "@/content/profile";
import { Badge } from "@/components/ui/Badge";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  FileText,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit message.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again or reach out directly via email.");
    }
  };

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      {/* Schema.org Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <header className="space-y-3 border-b border-[var(--border-subtle)] pb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
          Get in Touch
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
          Let&apos;s Discuss Engineering & Opportunities
        </h1>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
          Interested in discussing a role, technical architecture, or consulting project? Send a message below or connect via direct channels.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Direct Connect & Details */}
        <aside className="space-y-6">
          {/* Status card */}
          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 shadow-xs">
            <div className="text-xs font-mono font-semibold text-[var(--text-subtle)] uppercase tracking-wider">
              Current Availability
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Roles</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Open to full-time Frontend Engineer positions, senior React/Next.js roles, and high-impact contracts.
            </p>
          </div>

          {/* Location & Timezone */}
          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 shadow-xs text-xs">
            <div className="text-xs font-mono font-semibold text-[var(--text-subtle)] uppercase tracking-wider">
              Work Logistics
            </div>
            <div className="space-y-2 text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <span>Arrangement: {profileData.workArrangement}</span>
              </div>
            </div>
          </div>

          {/* Direct channels */}
          <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 shadow-xs text-xs">
            <div className="text-xs font-mono font-semibold text-[var(--text-subtle)] uppercase tracking-wider">
              Direct Channels
            </div>
            <div className="space-y-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent)] text-left transition-colors cursor-pointer"
              >
                <div className="truncate pr-2">
                  <div className="text-[10px] text-[var(--text-subtle)] font-mono">Email Direct</div>
                  <div className="font-mono text-xs font-medium text-[var(--text-main)] truncate">
                    {profileData.email}
                  </div>
                </div>
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-[var(--text-subtle)] shrink-0" />
                )}
              </button>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors"
              >
                <span className="flex items-center gap-2 text-[var(--text-main)] font-medium">
                  <LinkedinIcon className="w-4 h-4 text-sky-500" /> LinkedIn Profile
                </span>
                <span className="text-[10px] text-[var(--text-subtle)] font-mono">Connect →</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors"
              >
                <span className="flex items-center gap-2 text-[var(--text-main)] font-medium">
                  <GithubIcon className="w-4 h-4 text-[var(--text-main)]" /> GitHub Repositories
                </span>
                <span className="text-[10px] text-[var(--text-subtle)] font-mono">Follow →</span>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-[var(--accent)] font-medium transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Download Resume (PDF)
                </span>
                <span className="text-[10px] font-mono">View →</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Right Column: Contact Form */}
        <section aria-labelledby="form-heading" className="lg:col-span-2">
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 shadow-xs">
            <div className="space-y-1">
              <h2 id="form-heading" className="text-xl font-bold text-[var(--text-main)] font-mono">
                Send a Direct Message
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                All inquiries go straight to my primary inbox. I typically respond within 24 hours.
              </p>
            </div>

            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-[var(--text-main)]">
                    Message Delivered Successfully
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Thank you for reaching out. I have received your message and will reply shortly.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-main)] hover:bg-[var(--bg-surface-elevated)] cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-600 dark:text-rose-400 flex items-start gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-[var(--text-main)]"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:border-[var(--accent)] focus:outline-hidden transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-[var(--text-main)]"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:border-[var(--accent)] focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-[var(--text-main)]"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Frontend Engineer Opportunity / Architecture Consulting"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:border-[var(--accent)] focus:outline-hidden transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-[var(--text-main)]"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share some details about the role, project requirements, or question..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:border-[var(--accent)] focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-medium transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
