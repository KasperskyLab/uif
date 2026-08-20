import Ajv2020, { type ErrorObject } from "ajv/dist/2020"
import dispatcherSchema from "../../schemas/form.schema.json"
import v1Schema from "../../schemas/v1/form.schema.json"
import type { Diagnostic } from "./diagnostics.ts"

const ajv = new Ajv2020({ allErrors: true, strict: false })
ajv.addSchema(v1Schema)
const validate = ajv.compile(dispatcherSchema)

function elementIdAtPath(
  value: unknown,
  instancePath: string
): string | undefined {
  const parts = instancePath.split("/").filter(Boolean)
  let current: unknown = value
  let closestId: string | undefined
  for (const part of parts) {
    if (current && typeof current === "object" && !Array.isArray(current)) {
      const id = (current as Record<string, unknown>).id
      if (typeof id === "string") closestId = id
      current = (current as Record<string, unknown>)[part]
    } else if (Array.isArray(current)) {
      current = current[Number(part)]
    } else break
  }
  if (current && typeof current === "object" && !Array.isArray(current)) {
    const id = (current as Record<string, unknown>).id
    if (typeof id === "string") closestId = id
  }
  return closestId
}

function errorMessage(error: ErrorObject) {
  const path = error.instancePath || "/"
  if (error.keyword === "additionalProperties") {
    return `${path}: неизвестное поле «${String(error.params.additionalProperty)}»`
  }
  if (error.keyword === "required") {
    return `${path}: отсутствует обязательное поле «${String(error.params.missingProperty)}»`
  }
  return `${path}: ${error.message ?? "значение не соответствует схеме"}`
}

export function validateFormSchema(value: unknown): Diagnostic[] {
  if (validate(value)) return []
  return (validate.errors ?? []).map((error): Diagnostic => ({
    severity: "error",
    source: "json-schema",
    code: `JSON_SCHEMA_${error.keyword.toUpperCase()}`,
    message: errorMessage(error),
    path: error.instancePath || "/",
    elementId: elementIdAtPath(value, error.instancePath),
    blocking: true,
  }))
}
