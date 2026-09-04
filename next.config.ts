import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel's Next.js adapter does not need the standalone server bundle.
  // Keep standalone for Docker, but disable it on Vercel to avoid the
  // Next.js 16.3 output-tracing packaging issue.
  output: process.env.VERCEL ? undefined : "standalone",
  reactStrictMode: true,
};

export default nextConfig;
