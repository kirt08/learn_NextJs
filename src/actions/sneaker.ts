"use server"

import { actionClient } from "@/lib/safe-action"
import z from "zod"

const CreateSneakerSchema = z.object({
    title: z
        .string()
        .min(3, { error: "Length of title should be more then 3 symbols" })
        .max(50, { error: "Max length is 50 symbols" }),
    price: z.number().positive(),
    stock: z.number().int().nonnegative(),
})

export const createSneakerDrop = actionClient
    .inputSchema(CreateSneakerSchema)
    .action(async ({ parsedInput }) => {
        console.log("Payload: ", parsedInput)

        try {
            const res = await fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...parsedInput,
                    category: "mens-shoes",
                }),
            })

            if (!res.ok) {
                throw new Error(
                    "The product wasn't created. Something went wrong"
                )
            }

            const data = await res.json()

            return { success: true, productId: data.id }
        } catch (error: any) {
            throw new Error(error.message || "Product wasn't created")
        }
    })
