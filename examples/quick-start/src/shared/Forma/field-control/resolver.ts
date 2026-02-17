import { zodResolver as rhfZodResolver } from '@hookform/resolvers/zod'
import type { z } from 'zod'

/**
 * Forma resolver: wraps Zod schema for React Hook Form.
 * All form validation goes through Forma; use this in Forma internals only.
 */
export function createFormaResolver<T extends z.ZodType>(schema: T) {
  return rhfZodResolver(schema)
}
