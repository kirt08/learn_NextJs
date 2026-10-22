"use client"

export function WinkButton({ name }: { name: string }) {
    return (
        <button
            className="border-2 border-black p-4 m-4 hover:bg-zinc-400 transition-colors"
            onClick={() =>
                alert(`You have blinked to user with name - ${name}!`)
            }
        >
            To Blink
        </button>
    )
}
