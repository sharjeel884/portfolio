import { Download } from "lucide-react";
import { profileData } from "@/content/profile";

interface ResumeLinksProps {
  stacked?: boolean;
}

export function ResumeLinks({ stacked = false }: ResumeLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${stacked ? "flex-col" : ""}`}>
      {profileData.resumes.map((resume, index) => (
        <a
          key={resume.id}
          href={resume.url}
          download={resume.filename}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${index === 0 ? "btn-primary" : "btn-ghost"} ${stacked ? "w-full" : ""}`}
        >
          {resume.label}
          <Download className="size-4" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
