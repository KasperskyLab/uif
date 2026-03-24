/**
 * Хендлер настройки текста (configHook).
 * Файл обязан быть TypeScript (.ts): см. docs/normalization/tooling.md
 */
import type { TextProps } from '@kaspersky/hexa-ui'
import type { FormSlice } from '../../src/types/form-dsl'

export default function textConfigHook(
  formSlice: FormSlice,
): TextProps | null {
  const keys = Object.keys(formSlice.state)
  const preview =
    keys.length === 0
      ? '(state пуст)'
      : keys.map((id) => `${id}: ${JSON.stringify(formSlice.state[id])}`).join(
          ', ',
        )

  return {
    type: 'BTR3',
    color: 'primary',
    children: `Текст из configHook. State: ${preview}`,
  }
}
