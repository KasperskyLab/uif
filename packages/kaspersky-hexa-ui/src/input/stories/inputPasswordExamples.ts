import { ValidationRule } from '../types'

export const inputPasswordValidationRules = [
  {
    message: 'Пароль содержит от 8 до 256 символов.',
    validate: (v: string) => v.length >= 8 && v.length <= 256
  },
  {
    message: 'Пароль содержит символы как минимум трех групп из четырех:\n- верхний регистр (A–Z);\n- нижний регистр (a–z);\n- цифры (0–9);\n- специальные символы (@ # $ % ^ & * - _ ! + = [ ] { } | : \' , . ? / \\ ` ~ " ( ) );',
    validate: (v: string) => {
      const groups = [
        /[A-Z]/.test(v),
        /[a-z]/.test(v),
        /[0-9]/.test(v),
        /[@#$%^&*\-_!+=[\]{}|:'",.?/\\`~"()]/.test(v)
      ]
      return groups.filter(Boolean).length >= 3
    }
  },
  {
    message: 'Пароль не содержит пробелов, символов Юникода или комбинаций "." и "@", расположенных рядом друг с другом.',
    validate: (v: string) => !/[^\x20-\x7E]/.test(v) && !v.includes('.@') && !v.includes('@.')
  }
]

export const defaultInputPasswordValidationResult: ValidationRule[] = inputPasswordValidationRules.map((rule) => ({
  message: rule.message,
  isValid: false
}))
