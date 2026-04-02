import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allow production builds to succeed even when TypeScript reports errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
