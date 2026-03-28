import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ny-handyman-24yr",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
