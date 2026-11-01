import { HeroBanner } from "@/components/forest-banner"

async function getGithubProfile() {
    const res = await fetch("https://api.github.com/orgs/vercel", {
        cache: "force-cache",
    })

    if (!res.ok) throw new Error("Failed to fetch Github profile")

    return res.json()
}

export default async function Home() {
    const data = await getGithubProfile()

    return <HeroBanner />
}
