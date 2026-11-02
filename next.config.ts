import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page is static, so the site ships as plain HTML for Netlify.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
