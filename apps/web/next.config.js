/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "nepcha.com",
      "docs.material-tailwind.com",
    ],
  },
  assetPrefix: undefined,
  
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: `${process.env.NEXT_PUBLIC_ROOT_URL}`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
