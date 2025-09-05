import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "orzkyfwmyldhncurljnv.supabase.co",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
  reactStrictMode: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@supabase/supabase-js', 'lucide-react'],
  },
  // Bundle analyzer for production builds
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      if (process.env.ANALYZE === 'true') {
        config.plugins.push(
          new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        );
      }
      return config;
    },
  }),
  // Static optimization for better caching
  generateStaticParams: async () => {
    return [
      { locale: 'en' },
      { locale: 'id' },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);