/**
 * Единый configHook формы `demo`: именованный `configHook`, реестр по `control.id`.
 * `DemoFormControlIds` выводится из ключей `demoFormConfigHookRegistry`.
 */
import type { ReactNode } from 'react'
import type { ButtonProps, GridProps, TextProps, TextboxProps } from '@kaspersky/hexa-ui'
import type { ITableProps } from '@kaspersky/hexa-ui'
import type {
  FormConfigHookFactory,
  FormConfigHookRegistry,
  FormSlice,
} from '@normalization/form-dsl'

/** Отправка формы: `type: 'submit'` — срабатывает `onSubmit` из того же configHook. */
function useDemoGridSubmitButton(_formSlice: FormSlice): ButtonProps | null {
  return {
    mode: 'primary',
    size: 'medium',
    type: 'submit',
    text: 'Submit button',
  }
}

function useDemoButton(formSlice: FormSlice): ButtonProps | null {
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
      window.alert('Клик из configHook.\n\nformSlice.state:\n' + preview)
    },
  }
}

function useDemoText(formSlice: FormSlice): TextProps | null {
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
  return {
    type: 'BTR3',
    color: 'primary',
    children: `${rowPart}Текст из configHook. State: ${preview}`,
  }
}

function useDemoGrid(_formSlice: FormSlice): Partial<GridProps> | null {
  return {
    cols: 2,
    layoutProperty: { gap: 10 },
  }
}

function useDemoGridInput(
  _formSlice: FormSlice,
): Partial<TextboxProps> & { fieldLabel?: string } {
  return {
    fieldLabel: 'Текст кнопки (state)',
    placeholder: 'Меняется подпись кнопки',
  }
}

/** Длины массивов задают матрицу DSL (как в контракте Hexa); содержимое строк подменяет рендерер. */
const DEMO_TABLE_DS_ROWS = 2
const DEMO_TABLE_DS_COLS = 6

function useDemoTable(formSlice: FormSlice): Partial<ITableProps> | null {
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

/** Union `control.id` из ключей реестра (без дублирования схемы в отдельном алиасе). */
const demoFormConfigHookRegistry = {
  'demo.grid': useDemoGrid,
  'demo.grid.input': useDemoGridInput,
  'demo.grid.text': useDemoText,
  'demo.grid.button': useDemoGridSubmitButton,
  'demo.table': useDemoTable,
  'demo.table.text1': useDemoText,
  'demo.table.textPlain': useDemoText,
  'demo.table.text2': useDemoText,
  'demo.table.button1': useDemoButton,
  'demo.table.button2': useDemoButton,
}

export type DemoFormControlIds = keyof typeof demoFormConfigHookRegistry & string

export const configHook: FormConfigHookFactory<DemoFormControlIds> = () =>
  demoFormConfigHookRegistry satisfies FormConfigHookRegistry<DemoFormControlIds>
