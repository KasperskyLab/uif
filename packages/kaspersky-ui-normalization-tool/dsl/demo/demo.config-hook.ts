/**
 * Именованные хуки конфигурации Hexa по узлам; в схеме — **`handlers.useConfig: useDemoGrid`** и т.д.
 */
import type { ReactNode } from 'react'
import type { ButtonProps, GridProps, TextProps, TextboxProps } from '@kaspersky/hexa-ui'
import type { ITableProps } from '@kaspersky/hexa-ui'
import type { FormSlice } from '@normalization/form-dsl'
import type { DemoFormModelState } from './model/demo.contract'

export function useDemoGridSubmitButton(formSlice: FormSlice): ButtonProps | null {
  const { state } = formSlice
  const demo = state as DemoFormModelState & Record<string, unknown>
  return {
    mode: 'primary',
    size: 'medium',
    type: 'submit',
    text: 'Submit button',
    disabled: String(demo['demo.grid.input'] ?? '').trim() === '123',
  }
}

export function useDemoButton(formSlice: FormSlice): ButtonProps | null {
  const { state } = formSlice
  const fromState = String(state['demo.grid.input'] ?? '').trim()
  const text =
    fromState || 'Введите текст в поле «Текст кнопки» выше'
  return {
    mode: 'dangerFilled',
    size: 'medium',
    text,
    onClick: () => {
      const keys = Object.keys(state)
      const preview =
        keys.length === 0
          ? '(state пуст)'
          : keys.map((id) => `${id}: ${JSON.stringify(state[id])}`).join('\n')
      window.alert('Клик из config-hook.\n\nformSlice.state:\n' + preview)
    },
  }
}

export function useDemoText(formSlice: FormSlice): TextProps | null {
  const keys = Object.keys(formSlice.state)
  const preview =
    keys.length === 0
      ? '(state пуст)'
      : keys.map((id) => `${id}: ${JSON.stringify(formSlice.state[id])}`).join(
          ', ',
        )
  const rowLabel =
    formSlice.tableRow &&
    typeof (formSlice.tableRow as { label?: unknown }).label !== 'undefined'
      ? String((formSlice.tableRow as { label?: unknown }).label)
      : ''
  const rowPart = rowLabel
    ? `Строка таблицы (dataSource): ${rowLabel}. `
    : ''
  const bind = formSlice.dataBind
  const bindPart =
    bind && bind.path
      ? `dataBind [${bind.path}]: ${JSON.stringify(bind.value)}. `
      : ''
  return {
    type: 'BTR3',
    color: 'primary',
    children: `${rowPart}${bindPart}Текст из config-hook. State: ${preview}`,
  }
}

export function useDemoGrid(_formSlice: FormSlice): Partial<GridProps> | null {
  return {
    cols: 2,
    layoutProperty: { gap: 10 },
  }
}

export function useDemoGridInput(
  _formSlice: FormSlice,
): Partial<TextboxProps> & { fieldLabel?: string } {
  return {
    fieldLabel: 'Текст кнопки (state)',
    placeholder: 'Меняется подпись кнопки',
  }
}

const DEMO_TABLE_DS_ROWS = 2
const DEMO_TABLE_DS_COLS = 6

export function useDemoTable(formSlice: FormSlice): Partial<ITableProps> | null {
  const state = formSlice.state ?? {}
  const keys = Object.keys(state)
  const hasValues = keys.length > 0
  return {
    dataSource: Array.from({ length: DEMO_TABLE_DS_ROWS }, (_, r) => ({
      key: `demo-table-row-${r}`,
      label: `Строка ${r + 1}`,
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
        console.debug('[demo.config-hook] rowSelection', data)
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

export const DEMO_FORM_CONTROL_IDS = [
  'demo.grid',
  'demo.grid.input',
  'demo.grid.text',
  'demo.grid.button',
  'demo.table',
  'demo.table.text1',
  'demo.table.textPlain',
  'demo.table.text2',
  'demo.table.button1',
  'demo.table.button2',
] as const

export type DemoFormControlIds = (typeof DEMO_FORM_CONTROL_IDS)[number]
