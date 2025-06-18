/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 临时禁用严格模式以修复输入问题
  swcMinify: true,
  experimental: {
    // 启用某些实验性功能
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
};

export default nextConfig; 