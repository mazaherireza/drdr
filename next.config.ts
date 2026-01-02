import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.paziresh24.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
