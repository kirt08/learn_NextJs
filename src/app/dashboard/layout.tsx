import type { ReactNode } from "react"

import Sidebar from "@/components/layout/sidebar"

interface DashboardLayoutProps {
    children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="
        flex
        flex-row
        min-h-[calc(100vh-2rem)]
        border-4 border-blue-500
        rounded-xl
        m-4
        overflow-hidden
        ">
            <Sidebar />

            <main className="flex-1 flex flex-col bg-white text-black p-8">
                {children}
            </main>
        </div>
    )
}

// rounded-xl - make corner of container rounded
// m-4 - margin: 1rem (16px)
// overflow-hidden - cut everything out of rounded container
// w-64 - width: 16rem (0.25rem * 64 = 16rem)
// p-6 - padding: 1.5rem
// upercase - transform all letters in uppercase format
// tracking-widest - increases the letter spacing (distance between two letters)
// font-sans - use standart font (sans-serif)
// ring-2 - create shadow around element with size 2px, don't change geometry unlike border
