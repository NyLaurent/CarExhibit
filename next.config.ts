import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript:{
    ignoreBuildErrors:true,
  }
  /* config options here */
};

export default nextConfig;
