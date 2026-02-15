/**
 * Form schemas must use only these parameterized validators (no custom
 * z.string().min(), .refine(), etc.). Use validateFormaField.* and useFormaScheme();
 * use z only for z.object() and z.infer().
 *
 * Validators are organized by scenario in validation/ (required, length, email,
 * terms, optional, enum, refinements).
 */

import * as required from './required'
import * as length from './length'
import * as email from './email'
import * as terms from './terms'
import * as optional from './optional'
import * as enumValidators from './enum'

export const validateFormaField = {
  ...required,
  ...length,
  ...email,
  ...terms,
  ...optional,
  ...enumValidators
} as const

export { useFormaScheme } from './refinements'
export {
  setFormaValidationTranslator,
  getFormaValidationMessage,
  FORMA_VALIDATION_KEYS,
  formaValidationResourceEn,
  formaValidationResourceRu
} from '../i18n/messages'
