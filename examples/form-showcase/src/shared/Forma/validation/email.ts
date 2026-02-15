import { z } from 'zod'
import { getFormaValidationMessage } from './messages'

export const email = (requiredMessage?: string, invalidMessage?: string) =>
  z
    .string()
    .min(1, requiredMessage ?? getFormaValidationMessage('emailRequired'))
    .email(invalidMessage ?? getFormaValidationMessage('emailInvalid'))
