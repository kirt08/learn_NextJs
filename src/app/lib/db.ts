import "server-only"

const MOCK_USERS = [
    { id: 1, name: "Artem", email: "artem@gmail.com" },
    { id: 2, name: "Arina", email: "arina@gmail.com" },
    { id: 3, name: "Nikita", email: "nikita@gmail.com" },
    { id: 4, name: "Dmitriy", email: "dmitriy@gmail.com" },
]

export const db = {
    query: {
        users: {
            findMany: async () => {
                await new Promise((resolve) => setTimeout(resolve, 500))
                return MOCK_USERS
            },
        },
    },
}
