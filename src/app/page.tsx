async function getGithubProfile() {
    const res = await fetch("https://api.github.com/orgs/vercel", {
        cache: "force-cache",
    })

    if (!res.ok) throw new Error("Failed to fetch Github profile")

    return res.json()
}

export default async function Home() {
    const data = await getGithubProfile()

    return (
        <main>
            <h2>Profile: {data.name}</h2>
            <p>Description: {data.description}</p>
            <p>Public Repos: {data.public_repos}</p>
        </main>
    )
}
