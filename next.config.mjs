/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: 'api.funbox.yhh.ae',
       
      },
      {
        protocol:"https",
        hostname:"solid-potato-gw75gpr94pcj4q-3000.app.github.dev"
      }
    ],
  }
};

//export default nextConfig;
export default withNextIntl(nextConfig);

