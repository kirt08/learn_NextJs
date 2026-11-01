import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "NextJS by Kirt",
        short_name: "kirt",
        start_url: "/",
        display: "standalone",
    }
}
