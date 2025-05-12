import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: false, // or remove if you didn't enable it
  },
  images: {
    domains: ["www.shadcnblocks.com", "flowbite.s3.amazonaws.com", "unsplash.com", "cdn.sanity.io"],
  },
  // Add webpack configuration to ignore watching certain directories
  webpack: (config, { isServer, dev }) => {
    if (dev && !isServer) {
      // Ignore watching node_modules and .git directories
      config.watchOptions = {
        ignored: ['**/node_modules', '**/.git'],
        aggregateTimeout: 300,
        poll: 1000,
      };
    }
    return config;
  },
};

export default nextConfig;
