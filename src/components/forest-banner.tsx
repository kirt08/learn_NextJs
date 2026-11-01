import Image from "next/image"

import forestWallpaper from "@/assets/images/forest.jpg"

export function HeroBanner() {
    return (
        <Image src={forestWallpaper} alt="forest banner" placeholder="empty" />
    )
}
