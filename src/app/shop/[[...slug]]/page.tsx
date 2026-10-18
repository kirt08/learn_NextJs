// [...slug] - catch-all, if we want go to /shop -> 404 Not Found
// [[...slug]] - optional catch-all, now if we go to /shop -> we will see our page

interface ShopPageProps {
    params: Promise<{ slug?: string[] }>
}

export default async function ShopPage({ params }: ShopPageProps) {
    const { slug=[] } = await params

    const [category, brand, model] = slug
    
    return (
        <div className="min-h-screen w-full flex justify-center mt-[20vh]">
            <p className="text-2xl font-bold">
                Raw segment array: {slug.length > 0 ? JSON.stringify(slug) : "empty"}
            </p>
        </div>
    )
}