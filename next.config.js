/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, 
  basePath: "/valentine-surprise", 
  assetPrefix: "/valentine-surprise/", 
};

module.exports = nextConfig;
