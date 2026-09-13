import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static export into the `out/` directory
  output: "export",

  // Required for GitHub Pages project pages (sharjeel884.github.io/portfolio)
  basePath: "/portfolio",

  // Emit /me/ instead of /me so static hosts serve index.html correctly
  trailingSlash: true,

  // next/image's default optimizer requires a server; disable it for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
