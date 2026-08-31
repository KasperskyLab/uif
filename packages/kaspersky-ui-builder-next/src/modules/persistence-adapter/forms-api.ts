import type { FormSchema } from "../schema-model/form-schema.ts"

async function json<T>(response: Response): Promise<T> {
  const body = await response.json() as T & { error?: string }
  if (!response.ok) throw new Error(body.error ?? `HTTP ${response.status}`)
  return body
}

export async function loadForms(): Promise<FormSchema[]> {
  return json<FormSchema[]>(await fetch("/api/forms"))
}

export async function saveFormFile(form: FormSchema, previousId?: string): Promise<FormSchema> {
  const query = previousId ? `?previousId=${encodeURIComponent(previousId)}` : ""
  return json<FormSchema>(await fetch(`/api/forms/${encodeURIComponent(form.id)}${query}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }))
}

export async function deleteFormFile(id: string): Promise<void> {
  await json(await fetch(`/api/forms/${encodeURIComponent(id)}`, { method: "DELETE" }))
}
