import { useState, useCallback } from "react"

const ValidatedInput = ({
  name,
  wasSubmitted,
  errors,
  fieldSchema,
  ...props
}: {
  name: string
  wasSubmitted: boolean
  errors?: string[]
  fieldSchema: { safeParse: (value: string) => { success: boolean; error?: { flatten: () => { formErrors: string[] } } } }
  [key: string]: any
}) => {
  const [value, setValue] = useState("")
  const [touched, setTouched] = useState(false)

  const getErrors = useCallback(() => {
    const validationResult = fieldSchema.safeParse(value)
    return validationResult.success
      ? []
      : validationResult?.error?.flatten().formErrors
  }, [fieldSchema, value])

  const fieldErrors = errors || getErrors()
  const shouldRenderErrors = errors || wasSubmitted || touched

  const handleBlur = () => setTouched(true)
  const handleChange = (e: any) => setValue(e.currentTarget.value)

  return (
    <>
      <input
        id={name}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        className={fieldErrors  && fieldErrors.length > 0 ? "border-red-500" : ""}
        {...props}
      />
      {shouldRenderErrors && (
        <span className="text-sm text-red-500">{fieldErrors}</span>
      )}
    </>
  )
}
export { ValidatedInput }