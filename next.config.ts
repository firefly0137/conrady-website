import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Standard Next.js build for self-hosted deployment
  turbopack: {
    root: __dirname,
  },
};

export default withNextIntl(nextConfig);
