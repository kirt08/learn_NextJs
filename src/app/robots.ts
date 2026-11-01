import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kirt.com"

    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/", "/catalog"],
                disallow: ["/api/", "/admin/"],
            },
            {
                userAgent: "YandexBot",
                allow: "/",
                disallow: "/admin/",
                crawlDelay: 1,
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
