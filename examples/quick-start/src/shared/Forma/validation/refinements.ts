import { z } from 'zod'

export const sameAs = (fieldA: string, fieldB: string) =>
  (data: Record<string, unknown>) => data[fieldA] === data[fieldB]

export function useFormaScheme<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  fieldA: string,
  fieldB: string,
  message: string
): z.ZodEffects<z.ZodObject<T>> {
  return schema.refine(sameAs(fieldA, fieldB), {
    message,
    path: [fieldB]
  })
}
