import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static export
  basePath: "/haroun-kuti-fc",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
