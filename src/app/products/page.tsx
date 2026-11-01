import { products } from "@/db/schema"
import { db } from "@/lib/db"
import { Suspense } from "react"

async function ProductsList() {
    const items = await db.select().from(products).orderBy(products.createdAt)

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.id} {item.name} {item.price / 100}$
                </li>
            ))}
        </ul>
    )
}

export default async function ProductsListPage() {
    return (
        <div>
            <h1>Products:</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <ProductsList />
            </Suspense>
        </div>
    )
}
