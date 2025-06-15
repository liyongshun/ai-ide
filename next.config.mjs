/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // 启用某些实验性功能
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
};

export default nextConfig; 