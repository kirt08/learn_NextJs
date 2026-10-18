import type { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="w-[20vw] h-[20vh] p-4 border-2 border-zinc-400 rounded-2xl bg-white flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}