import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/content/profile";

export interface ContactLink {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  tone: string;
  external?: boolean;
}

function stripUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

export const contactLinks: ContactLink[] = [
  {
    href: `mailto:${profileData.email}`,
    label: "Email",
    value: profileData.email,
    icon: <Mail className="size-5" aria-hidden="true" />,
    tone: "tone-blue-light",
  },
  {
    href: `tel:${profileData.phone.replace(/\s/g, "")}`,
    label: "Phone",
    value: profileData.phone,
    icon: <Phone className="size-5" aria-hidden="true" />,
    tone: "tone-blue-light",
  },
  {
    href: profileData.linkedin,
    label: "LinkedIn",
    value: stripUrl(profileData.linkedin),
    icon: <LinkedinIcon className="size-5" />,
    tone: "tone-blue",
    external: true,
  },
  {
    href: profileData.github,
    label: "GitHub",
    value: stripUrl(profileData.github),
    icon: <GithubIcon className="size-5" />,
    tone: "tone-blue",
    external: true,
  },
];
