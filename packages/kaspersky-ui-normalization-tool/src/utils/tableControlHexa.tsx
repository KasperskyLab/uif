import type { ReactNode } from 'react'
import type { TableColumn, TableRecord } from '@kaspersky/hexa-ui'
import type { TableControl } from '../types/form-dsl'

/** Поле строки в `dataSource` для отладки; индекс ряда берётся из `rowIndex` Ant Table. */
export const TABLE_MATRIX_ROW_INDEX_KEY = 'dslRowIndex'

export type TableMatrixHookMerge = {
  /** Поля колонок из хука (title, width, …); `render` игнорируется — ячейки из DSL. */
  columns?: readonly Partial<TableColumn>[] | undefined
  /** Поля строк из хука; `dslRowIndex` всегда пересчитывается рендерером. */
  dataSource?: readonly Partial<TableRecord>[] | undefined
}

/** Контекст рендера одной ячейки матрицы (`шаблон колонки` × строка dataSource). */
export type TableMatrixRenderContext = {
  rowIndex: number
  colIndex: number
  record: TableRecord
}

/**
 * Колонки и строки для Hexa `<Table />` по матрице ячеек (`dims.rows` × `dims.cols`).
 * В DSL задаётся **одна строка шаблона** длины `dims.cols`; `renderCell` вызывается
 * для каждой строки `dataSource` и каждой колонки.
 */
export function buildTableMatrixColumnsAndDataSource(
  t: Pick<TableControl, 'id'>,
  renderCell: (ctx: TableMatrixRenderContext) => ReactNode,
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
    const render: TableColumn['render'] = (_value, record, rowIndex) => {
      const fromRecord = record?.[TABLE_MATRIX_ROW_INDEX_KEY]
      const r =
        typeof rowIndex === 'number' && rowIndex >= 0
          ? rowIndex
          : typeof fromRecord === 'number'
            ? fromRecord
            : 0
      return renderCell({ rowIndex: r, colIndex: c, record })
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
