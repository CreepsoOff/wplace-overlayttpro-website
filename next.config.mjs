/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  // Required for Docker deployment
  output: 'standalone',
  
  // Performance optimizations
  swcMinify: true,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;


