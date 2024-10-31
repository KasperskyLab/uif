import { ValidationStatus } from './typesHelpers'

export const getActualValidationStatus = (
  validationStatus: ValidationStatus = 'default',
  invalid?: boolean,
  valid?: boolean,
  error?: boolean,
  positive?: boolean,
  disabled?: boolean
): ValidationStatus => {
  if ((invalid === true || error === true) && !disabled) {
    return 'error'
  } else if ((valid === true || positive === true) && !disabled) {
    return 'success'
  } else {
    return validationStatus
  }
}
