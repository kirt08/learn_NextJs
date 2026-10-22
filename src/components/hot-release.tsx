import { cacheLife, cacheTag } from "next/cache"

async function getSingleSneaker(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        next: {
            tags: ["sneakers-data", `sneaker-${id}`],
        },
    })

    if (!res.ok) throw new Error("Product not found")

    return res.json()
}

async function newStyleGetSingleSneaker(id: string) {
    "use cache"

    cacheLife("minutes")
    // cacheLife({ stale: 60, revalidate: 120, expire: 3600 })
    cacheTag("sneakers-data", `sneaker-${id}`)

    const res = await fetch(`https://dummyjson.com/products/${id}`)

    if (!res.ok) throw new Error("Product not found")

    return res.json()
}

export async function HotRelease({ id }: { id: string }) {
    const item = await getSingleSneaker(id)

    return (
        <section>
            <h3>Product of the day:</h3>
            <p>Model: {item.title}</p>
            <p>Price: ${item.price}</p>
            <p>Actually left: {item.stock} items</p>
        </section>
    )
}
