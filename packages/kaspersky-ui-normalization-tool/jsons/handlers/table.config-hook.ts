/**
 * Настройка Hexa `<Table />` для контрола `type: 'table'`.
 * Рендерер подставляет `columns` и `dataSource` по матрице DSL — из хука
 * эти поля отбрасываются. Для управления размерностью матрицы используйте
 * `dslCols` / `dslRows` — renderer перестроит columns/dataSource и
 * pad/truncate children.
 *
 * Нативный тулбар: если вернуть `toolbar`, статический превью из DSL
 * не показывается.
 *
 * Типы: `FormSlice` из DSL, `ITableProps` из `@kaspersky/hexa-ui`.
 */
import type { ReactNode } from 'react'
import type { ITableProps } from '@kaspersky/hexa-ui'
import type { FormSlice } from '../../src/types/form-dsl'

export default function tableConfigHook(
  formSlice: FormSlice,
): Partial<ITableProps> & { dslCols?: number; dslRows?: number } | null {
  const state = formSlice.state ?? {}
  const keys = Object.keys(state)
  const hasValues = keys.length > 0

  return {
    /* --- размерность матрицы (перекрывают DSL cols/rows) ---------------- */
    dslCols: 4,

    /* --- внешний вид / скролл ------------------------------------------- */
    ...(hasValues ? { stickyHeader: 48 } : {}),
    stickyScrollbarOffset: 0,
    stickyFooter: false,
    fullHeight: false,
    bordered: true,
    tableLayout: 'fixed',

    /* --- плотность / валидация (перекрывают DSL, если заданы в хуке) ---- */
    // rowMode: 'compact',
    // columnVerticalAlign: 'middle',
    // disabled: false,
    // isValid: true,

    /* --- колонки: ресайз, подсказки сортировки -------------------------- */
    resizingMode: 'last',
    showSorterTooltip: false,
    maxColumnsForAutoResizing: 12,
    defaultColumnWidth: 120,

    /* --- поиск / колонки / подсветка (часто выключают для матрицы DSL) -- */
    search: false,
    showColumnsSelector: false,
    enableSearchHighlighting: false,
    useDragDrop: false,

    /* --- загрузка (пример; раскомментируйте при своём loader) ----------- */
    // loading: false,
    // loaderProps: { size: 'small' },

    /* --- выбор строк (встроенный чекбокс Hexa Table) -------------------- */
    rowSelection: {
      type: 'checkbox',
      builtInRowSelection: true,
      processSelection: (data) => {
        console.debug('[table.config-hook] rowSelection', data)
      },
    },

    /* --- нативный тулбар (right — функция, см. ToolbarIntegration) ----- */
    toolbar: {
      left: [
        {
          type: 'button',
          key: 'slice-state',
          label: `State: ${keys.length} полей`,
        },
        {
          type: 'divider',
          key: 'div-1',
        },
        {
          type: 'button',
          key: 'hint',
          label: hasValues ? 'Есть значения' : 'Форма пустая',
        },
      ],
      right: (existing: ReactNode[]) => existing,
      leftLimit: 6,
      sticky: 0,
      autoDropdown: true,
    },

    /* --- прочее (закомментировано, чтобы не шуметь в демо) -------------- */
    // storageKey: 'normalization-tool-table-demo',
    // filterVersion: 1,
    // useFiltersSidebar: false,
    // isServerFiltering: false,
  }
}
