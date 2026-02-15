import { z } from 'zod'
import { getFormaValidationMessage } from './messages'

/** Required non-empty string (e.g. name, title) */
export const requiredString = (message?: string) =>
  z.string().min(1, message ?? getFormaValidationMessage('required'))

/** Required selection (e.g. select, radio — user must pick an option) */
export const requiredSelect = (message?: string) =>
  z.string().min(1, message ?? getFormaValidationMessage('select'))
