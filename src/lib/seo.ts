import { profileData } from "@/content/profile";

export const siteBaseUrl = "https://sharjeelkhalid.dev";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.role,
    description: profileData.supportingStatement,
    url: siteBaseUrl,
    sameAs: [profileData.github, profileData.linkedin],
    email: profileData.email,
    telephone: profileData.phone,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profileData.education.institution,
    },
    knowsAbout: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "REST APIs",
      "Node.js",
      "Frontend Architecture",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profileData.name} - Frontend Engineer Portfolio`,
    url: siteBaseUrl,
    description: profileData.supportingStatement,
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteBaseUrl}${item.url}`,
    })),
  };
}
