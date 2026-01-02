import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.firewall-zone.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
