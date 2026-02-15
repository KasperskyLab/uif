import { z } from 'zod'
import { getFormaValidationMessage } from './messages'

export const enumField = <T extends readonly [string, ...string[]]>(
  values: T,
  message?: string
) => z.enum(values, { message: message ?? getFormaValidationMessage('enumSelect') })
