import Link from "next/link";
import type { ReactNode } from "react";

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
            <aside className="w-64 bg-blue-50 p-6 border-r border-blue-100 flex flex-col">
                <div className="mb-8 text-xs font-bold text-blue-500 uppercase
                tracking-widest font-sans">
                    Dashboard Layout
                </div>

                <nav className="flex flex-col gap-4">
                    <span className="font-bold text-sm text-zinc-400">Навигация</span>
                    <Link 
                        href="/dashboard"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Главная
                    </Link>
                    <Link
                        href="/dashboard/settings"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Настройки
                    </Link>
                </nav>
            </aside>

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