import { CARS } from "@/app/page"
import CloseButton from "./CloseButton";

interface PhotoModalProps {
    params: Promise<{ id: string }>
}

export default async function PhotoModal({ params }: PhotoModalProps) {
    const { id } = await params
    const car = CARS.find((c) => c.id === id)

    if (!car) return null;

    return (
        // fixed inset-0 -> stretch to fill the entire screen
        // z-50 = z-index: 50 -> place the content on the top of main screen
        // backdrop-blue-sm -> Blurring page content behind the overlay
        <div className="
            fixed inset-0
            z-50
            backdrop-blur-xs
            flex items-center justify-center bg-black/30">
            <div className="rounded-2xl bg-white p-8 text-black shadow-2xl min-w-75">
                <h1 className="text-2xl font-extrabold">{car.name}</h1>
                <p className="mt-2 text-zinc-500">Модальное окно поверх главной страницы</p>
                <CloseButton />
            </div>
        </div>
    )
}