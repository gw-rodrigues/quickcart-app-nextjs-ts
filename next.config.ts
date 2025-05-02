import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://images.unsplash.com/**'),
      new URL('https://unsplash.com/**'),
      new URL('https://fakestoreapi.com/**'),
    ],
  },
}

export default nextConfig
