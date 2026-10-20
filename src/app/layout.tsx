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
    // Relative to the current route so child pages do not inherit the homepage URL.
    url: "./",
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
    // "./" resolves against metadataBase and the current pathname.
    canonical: "./",
  },
};

function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

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
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd) }}
        />
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
