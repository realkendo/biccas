/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://api.escuelajs.co/api/v1/:path*',
      },
      {
        source: '/api/proxy',
        destination: 'https://api.escuelajs.co/api/v1',
      },
    ];
  },
};

export default nextConfig;
