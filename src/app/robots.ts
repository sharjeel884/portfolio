import { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteBaseUrl}/sitemap.xml`,
  };
}
