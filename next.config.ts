import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    cacheComponents: true,
    partialPrefetching: true,
    reactCompiler: true,
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
