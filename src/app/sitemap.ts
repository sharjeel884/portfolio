import { MetadataRoute } from "next";
import { profileData } from "@/content/profile";
import { siteBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: `${siteBaseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteBaseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...profileData.resumes.map((resume) => ({
      url: `${siteBaseUrl}${resume.url}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
