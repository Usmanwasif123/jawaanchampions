/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // For static export
    images: {
      unoptimized: true, // Ensure images are not optimized and copied as-is
    },
    assetPrefix: './', // Ensure relative paths for assets
};

export default nextConfig;
