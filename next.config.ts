// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "victoria-falls-safari-lodge.com",
      },
      {
        protocol: "https",
        hostname: "artofsafari.travel",
      },
      {
        protocol: "https",
        hostname: "yellowzebrasafaris.com",
      },
    ],
  },
  // you can add other Next.js options here
};

export default nextConfig;
