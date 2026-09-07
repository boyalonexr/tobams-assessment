import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prerender source maps are enabled by default and generate them for every
  // statically generated page, which balloons build memory far beyond what
  // this small site needs. Disabling this fixed OOM crashes during the
  // "Generating static pages" build stage.
  enablePrerenderSourceMaps: false,
  experimental: {
    webpackMemoryOptimizations: true,
  },
};

export default nextConfig;
