/**
 * Хендлер настройки сетки (configHook / П.2).
 * Файл обязан быть TypeScript (.ts): см. docs/normalization/tooling.md
 *
 * Хук может вернуть любые `GridProps` включая `cols` — renderer применит
 * pad/truncate к массиву children при смене размерности.
 */
import type { GridProps } from '@kaspersky/hexa-ui'
import type { FormSlice } from '../../src/types/form-dsl'

export default function gridConfigHook(
  _formSlice: FormSlice,
): Partial<GridProps> | null {
  return {
    cols: 3,
    layoutProperty: { gap: 10000 },
  }
}
