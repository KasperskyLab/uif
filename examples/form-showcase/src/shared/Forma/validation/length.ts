import { z } from 'zod'
import { getFormaValidationMessage } from './messages'

/** String with minimum length (e.g. password min 8 chars) */
export const stringMinLen = (min: number, message?: string) =>
  z.string().min(min, message ?? getFormaValidationMessage('minLength', { min }))
