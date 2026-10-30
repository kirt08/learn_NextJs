"use client"

import { toggleFavorite } from "@/actions/sneaker"
import { startTransition, useOptimistic, useState } from "react"

type Sneaker = {
    id: number
    title: string
    isFavorite: boolean
}

const BASIC_MODELS: Sneaker[] = [
    { id: 1, title: "a", isFavorite: false },
    { id: 2, title: "b", isFavorite: false },
    { id: 3, title: "c", isFavorite: true },
]

export default function SneakersPage() {
    const [sneakers, setSneakers] = useState<Sneaker[]>(BASIC_MODELS)

    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const [optimisticSneakers, setOptimisticSneakers] = useOptimistic<
        Sneaker[],
        number
    >(sneakers, (state, targetId) =>
        state.map((item) =>
            item.id === targetId
                ? { ...item, isFavorite: !item.isFavorite }
                : item
        )
    )

    const handleToggleFavorite = async (id: number) => {
        setErrorMessage(null)

        startTransition(async () => {
            setOptimisticSneakers(id)

            const result = await toggleFavorite({ id })

            if (result.serverError) {
                setErrorMessage(result.serverError)
                return
            }

            if (result.data?.success) {
                setSneakers((prev) =>
                    prev.map((item) =>
                        item.id === id
                            ? { ...item, isFavorite: !item.isFavorite }
                            : item
                    )
                )
            }
        })
    }

    return (
        <main className="p-5">
            <h2 className="mb-4">Testing useOptimistic</h2>

            <ul className="flex flex-col gap-2">
                {optimisticSneakers.map((sneaker) => (
                    <li
                        key={sneaker.id}
                        className="flex items-center justify-between border rounded px-3 py-2 w-64"
                    >
                        <span>{sneaker.title}</span>
                        <button onClick={() => handleToggleFavorite(sneaker.id)}>
                            {sneaker.isFavorite ? "❤️" : "🤍"}
                        </button>
                    </li>
                ))}
            </ul>

            {errorMessage && (
                <div className="text-red-500 mt-4">{errorMessage}</div>
            )}
        </main>
    )
}
