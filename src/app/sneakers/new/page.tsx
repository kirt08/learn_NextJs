"use client"

import { createSneakerDrop } from "@/actions/sneaker"
import { FormField } from "@/components/form-field"
import { SubmitButton } from "@/components/submit-button"
import { useActionState } from "react"

type FormFields = {
    title: string
    price: string
    stock: string
}

type FormState = {
    success: boolean
    productId: number | null
    error: string | null
    validationErrors: {
        title?: string[]
        price?: string[]
        stock?: string[]
    }
    fields: FormFields
}

const emptyFields: FormFields = { title: "", price: "", stock: "" }

const initialState: FormState = {
    success: false,
    productId: null,
    error: null,
    validationErrors: {},
    fields: emptyFields,
}

export default function newDropPage() {
    const [state, formAction, isPending] = useActionState<FormState, FormData>(
        async (prevState, formData): Promise<FormState> => {
            const fields: FormFields = {
                title: String(formData.get("title") ?? ""),
                price: String(formData.get("price") ?? ""),
                stock: String(formData.get("stock") ?? ""),
            }

            const result = await createSneakerDrop({
                title: fields.title,
                price: Number(fields.price),
                stock: Number(fields.stock),
            })

            if (result?.validationErrors) {
                return {
                    success: false,
                    productId: null,
                    error: null,
                    validationErrors: {
                        title: result.validationErrors.title?._errors,
                        price: result.validationErrors.price?._errors,
                        stock: result.validationErrors.stock?._errors,
                    },
                    fields,
                }
            }

            if (result?.serverError) {
                return {
                    success: false,
                    productId: null,
                    error: result.serverError,
                    validationErrors: {},
                    fields,
                }
            }

            if (result?.data?.success) {
                return {
                    success: true,
                    productId: result.data.productId,
                    error: null,
                    validationErrors: {},
                    fields: emptyFields,
                }
            }

            return { ...prevState, fields }
        },
        initialState
    )

    return (
        <main className="p-5">
            <h2>Testing Server Action</h2>

            <form action={formAction} className="flex flex-col gap-4">
                <FormField
                    name="title"
                    label="Название:"
                    defaultValue={state.fields.title}
                    errors={state.validationErrors.title}
                    disabled={isPending}
                />
                <FormField
                    name="price"
                    label="Цена ($):"
                    type="number"
                    defaultValue={state.fields.price}
                    errors={state.validationErrors.price}
                    disabled={isPending}
                />
                <FormField
                    name="stock"
                    label="Остаток:"
                    type="number"
                    defaultValue={state.fields.stock}
                    errors={state.validationErrors.stock}
                    disabled={isPending}
                />

                <SubmitButton />
            </form>

            {state.error && <div className="text-red-500">{state.error}</div>}

            {state.success && (
                <div className="text-lime-500">
                    Дроп создан! ID товара: {state.productId}
                </div>
            )}
        </main>
    )
}
