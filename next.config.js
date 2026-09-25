/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No remote images are used; everything is inline SVG for performance
    // and because no verified product/store photography was supplied.
    unoptimized: false,
  },
};

module.exports = nextConfig;
