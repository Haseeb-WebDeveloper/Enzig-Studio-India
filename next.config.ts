import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: false, // or remove if you didn't enable it
  },
  images: {
    domains: ["www.shadcnblocks.com", "flowbite.s3.amazonaws.com", "unsplash.com", "cdn.sanity.io"],
  },
};

export default nextConfig;
