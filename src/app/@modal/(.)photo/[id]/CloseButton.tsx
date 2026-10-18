"use client"

import { useRouter } from "next/navigation";

export default function CloseButton() {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} className="pt-4 text-black font-bold hover:underline">Close</button>
    )
}