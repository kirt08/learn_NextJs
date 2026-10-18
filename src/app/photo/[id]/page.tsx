import { CARS } from "@/app/page"
import { notFound } from "next/navigation"

interface PhotoPageProps {
    params: Promise<{ id: string }>
}

export default async function PhotoPage({ params }: PhotoPageProps) {
    const { id } = await params

    const car = CARS.find((c) => c.id === id)

    if (!car) return notFound()

    return (
        <div className="m-8 font-extrabold text-2xl flex flex-col">
            <h1>Вы смотрите на машину с ID: {car.id}</h1>
            <h1>Название машины: {car.name}</h1>
        </div>
    )
}