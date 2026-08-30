/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Required by `output: 'export'` — no resizing or format conversion happens,
    // so images must be committed at their delivery size.
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
