import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.paziresh24.com",
        protocol: "https",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashborad/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
