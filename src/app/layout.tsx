import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profileData } from "@/content/profile";
import { getPersonJsonLd, getWebSiteJsonLd, siteBaseUrl } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: `${profileData.name} | ${profileData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description: `${profileData.supportingStatement} ${profileData.backendPositioning}`,
  keywords: [
    "Frontend Engineer",
    "React Engineer",
    "Next.js Developer",
    "React Native Specialist",
    "TypeScript Architect",
    "Web Accessibility WCAG",
    "Web Performance Optimization",
    "Node.js Backend",
    "UI Engineering",
  ],
  authors: [{ name: profileData.name, url: siteBaseUrl }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteBaseUrl,
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.supportingStatement,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profileData.name} - Frontend Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.supportingStatement,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteBaseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = getPersonJsonLd();
  const websiteJsonLd = getWebSiteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Backdrop is painted by CSS, so preload it to avoid a flash of flat black */}
        <link rel="preload" as="image" href="/background-texture.webp" type="image/webp" />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
