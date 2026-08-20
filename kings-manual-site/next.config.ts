import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/download": ["./files/**"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ai-toolkit-generations.imgix.net",
      },
    ],
  },
};

export default nextConfig;
