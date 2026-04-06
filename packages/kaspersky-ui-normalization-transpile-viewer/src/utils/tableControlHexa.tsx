import type { ReactNode } from 'react'
import type { TableColumn, TableRecord } from '@kaspersky/hexa-ui'
import type { TableControl } from '@/types/form-dsl'

export const TABLE_MATRIX_ROW_INDEX_KEY = 'dslRowIndex'

export type TableMatrixHookMerge = {
  /** Поля колонок из хука (title, width, …); `render` игнорируется — ячейки из DSL. */
  columns?: readonly Partial<TableColumn>[] | undefined
  /** Поля строк из хука; `dslRowIndex` всегда пересчитывается рендерером. */
  dataSource?: readonly Partial<TableRecord>[] | undefined
}

export function buildTableMatrixColumnsAndDataSource(
  t: Pick<TableControl, 'id'>,
  renderCell: (flatIndex: number) => ReactNode,
  dims: { rows: number; cols: number },
  mergeFromHook?: TableMatrixHookMerge,
): { dataSource: TableRecord[]; columns: TableColumn[] } {
  const { rows, cols } = dims
  const dataSource: TableRecord[] = Array.from({ length: rows }, (_, r) => {
    const hookRow = mergeFromHook?.dataSource?.[r]
    const base: TableRecord = {
      key: `${t.id}-row-${r}`,
      [TABLE_MATRIX_ROW_INDEX_KEY]: r,
    }
    if (!hookRow) return base
    return {
      ...hookRow,
      key: hookRow.key ?? base.key,
      [TABLE_MATRIX_ROW_INDEX_KEY]: r,
    }
  })
  const columns: TableColumn[] = Array.from({ length: cols }, (_, c) => {
    const hookCol = mergeFromHook?.columns?.[c]
    const { render: _ignoreHookRender, ...hookRest } = (hookCol ??
      {}) as Partial<TableColumn> & { render?: unknown }
    const render: TableColumn['render'] = (_value, record) => {
      const r = record[TABLE_MATRIX_ROW_INDEX_KEY] as number
      const i = r * cols + c
      return renderCell(i)
    }
    return {
      key: `${t.id}-col-${c}`,
      title: '',
      ...hookRest,
      render,
    }
  })
  return { dataSource, columns }
}
