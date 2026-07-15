import { InputPassword } from '../InputPassword'

export const inputPasswordValidationRulesSetupCode = `const rules = [
  { message: 'Минимум 8 символов', isValid: false },
  { message: 'Содержит цифру', isValid: true }
]`

export const inputPasswordActionsSetupCode = `const actions = [
  { tooltip: 'Скопировать', icon: 'Copy', onClick: () => alert('Скопировано') },
  { tooltip: 'Сгенерировать', icon: 'Key', onClick: () => alert('Сгенерировано') }
]`

export const inputPasswordDocumentationScope = {
  InputPassword
}
