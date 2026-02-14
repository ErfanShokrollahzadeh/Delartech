/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next-dev",
  reactStrictMode: true,
  poweredByHeader: false,
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  // Improved cache and process handling
  experimental: {
    forceSwcTransforms: true,
    optimizeCss: true,
  },
  webpack: (config, { isServer, dev }) => {
    // Improved webpack configuration
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { module: /node_modules\/punycode\/punycode\.js/ },
    ];
    // Add this to handle local images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: "asset/resource",
    });
    return config;
  },
  // Improved process handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
