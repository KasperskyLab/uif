/**
 * Хендлер настройки сетки (configHook / П.2).
 * Файл обязан быть TypeScript (.ts): см. docs/normalization/tooling.md
 *
 * `cols` на `<Grid />` всегда берутся из DSL; здесь можно задать, например,
 * `layout`, `layoutProperty` и другие пропсы Hexa `GridProps` кроме `children`.
 */
import type { GridProps } from '@kaspersky/hexa-ui'
import type { FormSlice } from '../../src/types/form-dsl'

export default function gridConfigHook(
  _formSlice: FormSlice,
): Partial<GridProps> | null {
  return {
    layoutProperty: { gap: 10000 },
  }
}
