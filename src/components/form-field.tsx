type FormFieldProps = {
    name: string
    label: string
    type?: "text" | "number"
    defaultValue?: string
    errors?: string[]
    disabled?: boolean
}

export function FormField({
    name,
    label,
    type = "text",
    defaultValue,
    errors,
    disabled,
}: FormFieldProps) {
    return (
        <div>
            <label htmlFor={name} className="block mb-1 text-sm font-medium">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                defaultValue={defaultValue}
                disabled={disabled}
                className="w-full border rounded px-3 py-2 disabled:opacity-50"
            />
            {errors && (
                <span className="text-red-500 text-xs">{errors.join(", ")}</span>
            )}
        </div>
    )
}
