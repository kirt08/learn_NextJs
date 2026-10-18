import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col pt-[30vh] items-center">
            <div className="flex flex-row flex-nowrap text-4xl font-bold m-4">
                <h1 className="mx-4">404</h1>
                <h2 className="">Not Found</h2>
            </div>
            
            <p className="italic m-4">Похоже вы перешли на несуществующую страницу</p>
            <Link
                href="/"
                className="
                mt-8 p-3 font-bold text-2xl border-2 border-white rounded-xl 
                transition-all duration-300
                ease-in-out 
                hover:-translate-y-1 hover:scale-110 hover:text-lime-500 hover:border-lime-500
                "
            >
                На Главную
            </Link>
        </div>
    )
}