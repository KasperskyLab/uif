/**
 * Хендлер настройки кнопки (configHook / П.2).
 * Файл обязан быть TypeScript (.ts): см. docs/normalization/tooling.md
 *
 * Типы: `FormSlice` из DSL, `ButtonProps` из Hexa UI — сквозная типизация возврата.
 */
import type { ButtonProps } from '@kaspersky/hexa-ui'
import type { FormSlice } from '../../src/types/form-dsl'

/** id контрола `input` в форме — значение попадает в `formSlice.state[id]` */
const BUTTON_TEXT_FIELD_ID = 'demo-button-text-source'

export default function buttonConfigHook(
  formSlice: FormSlice,
): ButtonProps | null {
  const { state } = formSlice

  const fromState = String(state[BUTTON_TEXT_FIELD_ID] ?? '').trim()
  const text =
    fromState || 'Введите текст в поле «Текст кнопки» выше'

  const result: ButtonProps = {
    mode: 'dangerFilled',
    size: 'extraLarge',    
    text,
    onClick: () => {
      const keys = Object.keys(state)
      const preview =
        keys.length === 0
          ? '(state пуст)'
          : keys.map((id) => `${id}: ${JSON.stringify(state[id])}`).join('\n')
      window.alert('Клик из configHook.\n\nformSlice.state:\n' + preview)
    },
  }
  return result
}
