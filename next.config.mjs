/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lht.gun.hmz.one',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
