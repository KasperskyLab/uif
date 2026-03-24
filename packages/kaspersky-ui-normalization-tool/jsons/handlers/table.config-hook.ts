/**
 * Настройка Hexa `<Table />` для контрола `type: 'table'`.
 * В DSL задаются `rows`, `cols`, `children`, тулбар и т.д.; рендерер
 * всегда подставляет `columns` и `dataSource` по матрице — из хука они
 * отбрасываются.
 *
 * Типы: `FormSlice` из DSL, `ITableProps` из `@kaspersky/hexa-ui`.
 */
import type { ITableProps } from '@kaspersky/hexa-ui'
import type { FormSlice } from '../../src/types/form-dsl'

export default function tableConfigHook(
  formSlice: FormSlice,
): Partial<ITableProps> | null {
  const keys = Object.keys(formSlice.state ?? {})
  const hasValues = keys.length > 0

  return {
    ...(hasValues ? { stickyHeader: 48 } : {}),
    fullHeight: false,
  }
}
