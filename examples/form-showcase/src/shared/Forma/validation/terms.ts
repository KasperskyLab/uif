import { z } from 'zod'
import { getFormaValidationMessage } from './messages'

/** Checkbox that must be checked (e.g. "I accept the terms") */
export const termsAccepted = (message?: string) =>
  z.boolean().refine((val) => val === true, message ?? getFormaValidationMessage('terms'))
