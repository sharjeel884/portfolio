import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profileData } from "@/content/profile";
import { getPersonJsonLd, getWebSiteJsonLd, siteBaseUrl } from "@/lib/seo";
import { Backdrop } from "@/components/layout/Backdrop";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollAnimations } from "@/components/sections/ScrollAnimations";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#0b1530",
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
    "React Native Developer",
    "TypeScript",
    "Web Accessibility",
    "Web Performance",
    "UI Engineering",
    "Lahore",
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
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.supportingStatement,
  },
  robots: {
    index: true,
    follow: true,
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Backdrop />
        <SiteHeader />
        <ScrollAnimations />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
