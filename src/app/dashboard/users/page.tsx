import { db } from "@/app/lib/db"
import { WinkButton } from "@/components/wink-button"

export default async function UsersPage() {
    const users = await db.query.users.findMany()

    return (
        <div>
            <h1 className="text-3xl font-bold">Command of the project:</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="ml-4 p-4">
                        <span className="text-xl">
                            {user.name} {user.email}
                        </span>
                        <WinkButton name={user.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
