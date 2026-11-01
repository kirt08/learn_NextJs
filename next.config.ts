import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    cacheComponents: true,
    partialPrefetching: true,
    reactCompiler: true,
    output: "standalone",
    poweredByHeader: false,
    reactStrictMode: true,
    productionBrowserSourceMaps: false,
    compress: false,
    generateEtags: false,
    cleanDistDir: true,
    images: {
        unoptimized: false,
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 3600,
        contentDispositionType: "inline",
    },
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
}

export default nextConfig
