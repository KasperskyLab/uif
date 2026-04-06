/**
 * Единый configHook формы `demo`: default export — фабрика реестра по control.id.
 */
import type { ReactNode } from 'react'
import type { ButtonProps, GridProps, TextProps } from '@kaspersky/hexa-ui'
import type { ITableProps } from '@kaspersky/hexa-ui'
import type {
  FormConfigHookFactoryFor,
  FormConfigHookRegistryFor,
  FormControlIdsOf,
  FormSlice,
} from '@normalization/form-dsl'
import demoSchema from './demo.schema'

type DemoSchema = typeof demoSchema
type DemoRegistry = FormConfigHookRegistryFor<DemoSchema>

const DEMO_GRID_INPUT_ID =
  'demo.grid.input' satisfies FormControlIdsOf<DemoSchema>

function useDemoButton(formSlice: FormSlice): ButtonProps | null {
  const { state } = formSlice
  const fromState = String(state[DEMO_GRID_INPUT_ID] ?? '').trim()
  const text =
    fromState || 'Введите текст в поле «Текст кнопки» выше'
  const result: ButtonProps = {
    mode: 'dangerFilled',
    size: 'medium',
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

function useDemoText(formSlice: FormSlice): TextProps | null {
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

function useDemoGrid(_formSlice: FormSlice): Partial<GridProps> | null {
  return {
    cols: 2,
    layoutProperty: { gap: 10 },
  }
}

/** Длины массивов задают матрицу DSL (как в контракте Hexa); содержимое строк подменяет рендерер. */
const DEMO_TABLE_DS_ROWS = 2
const DEMO_TABLE_DS_COLS = 3

function useDemoTable(formSlice: FormSlice): Partial<ITableProps> | null {
  const state = formSlice.state ?? {}
  const keys = Object.keys(state)
  const hasValues = keys.length > 0
  return {
    dataSource: Array.from({ length: DEMO_TABLE_DS_ROWS }, (_, r) => ({
      key: `demo-table-row-${r}`,
    })),
    columns: Array.from({ length: DEMO_TABLE_DS_COLS }, (_, c) => ({
      key: `demo-table-col-${c}`,
      title: `Колонка ${c + 1}`,
    })),
    emptyText: 'Нет данных в ячейках',
    rowMode: 'standard',
    columnVerticalAlign: 'middle',
    ...(hasValues ? { stickyHeader: 48 } : {}),
    stickyScrollbarOffset: 0,
    stickyFooter: false,
    fullHeight: false,
    bordered: true,
    tableLayout: 'fixed',
    resizingMode: 'last',
    showSorterTooltip: false,
    maxColumnsForAutoResizing: 12,
    defaultColumnWidth: 120,
    search: false,
    showColumnsSelector: false,
    enableSearchHighlighting: false,
    useDragDrop: false,
    rowSelection: {
      type: 'checkbox',
      builtInRowSelection: true,
      processSelection: (data) => {
        console.debug('[form.config-hook] rowSelection', data)
      },
    },
    toolbar: {
      left: [
        {
          type: 'button',
          key: 'slice-state',
          label: `State: ${keys.length} полей`,
        },
        { type: 'divider', key: 'div-1' },
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
  }
}

const useDemo: FormConfigHookFactoryFor<DemoSchema> = () =>
  ({
    'demo.grid': useDemoGrid,
    'demo.grid.text': useDemoText,
    'demo.grid.button': useDemoButton,
    'demo.table': useDemoTable,
    'demo.table.text1': useDemoText,
    'demo.table.textPlain': useDemoText,
    'demo.table.text2': useDemoText,
    'demo.table.button1': useDemoButton,
    'demo.table.button2': useDemoButton,
  }) satisfies DemoRegistry

export default useDemo
