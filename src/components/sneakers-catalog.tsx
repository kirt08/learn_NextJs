async function getSpecsCatalog() {
    const res = await fetch(
        "https://dummyjson.com/products/category/mens-shoes",
        {
            next: { tags: ["sneakers-data"] },
        }
    )

    if (!res.ok) throw new Error("Network error")

    const data = await res.json()

    return data.products
}

export async function SneakerCatalog() {
    const products = await getSpecsCatalog()

    return (
        <section>
            <h2>Available shoes catalog:</h2>
            <ul>
                {products.map((item: any) => (
                    <li key={item.id}>
                        {item.title} - <strong>Left: {item.stock} items</strong>
                    </li>
                ))}
            </ul>
        </section>
    )
}
