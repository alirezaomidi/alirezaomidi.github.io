/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    domains: ['www.pnas.org', 'www.biorxiv.org', 'www.cell.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
