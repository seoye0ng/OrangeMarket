/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // 경로를 'src'로 설정
    };
    return config;
  },
};

module.exports = nextConfig;
