"use server"

import { products } from "@/db/schema"
import { db } from "@/lib/db"
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
            const [newProduct] = await db
                .insert(products)
                .values({
                    name: parsedInput.title,
                    price: Math.round(parsedInput.price * 100),
                    stock: parsedInput.stock,
                })
                .returning()

            return { success: true, productId: newProduct.id }
        } catch (error: any) {
            throw new Error(error.message || "Product wasn't created")
        }
    })

const ToggleFavoriteSchema = z.object({
    id: z.number(),
})

export const toggleFavorite = actionClient
    .inputSchema(ToggleFavoriteSchema)
    .action(async ({ parsedInput }) => {
        await new Promise((resolve) => setTimeout(resolve, 500))

        if (parsedInput.id === 2) {
            throw new Error("Something go wrong")
        }

        return { success: true, id: parsedInput.id }
    })
