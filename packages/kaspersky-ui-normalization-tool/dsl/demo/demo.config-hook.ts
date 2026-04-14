/**
 * Единый configHook формы `demo`: default export — lifecycle и секция `elements` (id → хук).
 */
import type { ReactNode } from 'react'
import type { ButtonProps, GridProps, TextProps, TextboxProps } from '@kaspersky/hexa-ui'
import type { ITableProps } from '@kaspersky/hexa-ui'
import type {
  FormConfigHookElementEntry,
  FormConfigHookFactoryFor,
  FormControlIdsOf,
  FormSlice,
} from '@normalization/form-dsl'
import {
  buildFormConfigHookRegistryFor,
  defineFormConfigHookElement,
} from '@normalization/form-dsl'
import demoSchema from './demo.schema'

type DemoSchema = typeof demoSchema
type DemoElementHookEntry = FormConfigHookElementEntry<FormControlIdsOf<DemoSchema>>

const DEMO_GRID_INPUT_ID =
  'demo.grid.input' satisfies FormControlIdsOf<DemoSchema>

const DEMO_FAKE_LOAD_MS = 450

async function loadFakeDemoFormState(): Promise<Record<string, unknown>> {
  await new Promise((r) => setTimeout(r, DEMO_FAKE_LOAD_MS))
  return {
    [DEMO_GRID_INPUT_ID]: 'Текст с фейкового API (onInit)',
  }
}

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
  const fromState = String(state[DEMO_GRID_INPUT_ID] ?? '').trim()
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

const useDemo: FormConfigHookFactoryFor<DemoSchema> = () => ({
  onInit: async (slice) => {
    const fake = await loadFakeDemoFormState()
    slice.mergeState?.(fake)
    console.log('[demo.config-hook] onInit: подставлены фейковые данные', fake)
  },
  onSubmit: (slice) => {
    console.log('[demo.config-hook] onSubmit: state формы', slice.state)
  },
  elements: buildFormConfigHookRegistryFor<FormControlIdsOf<DemoSchema>>(
    [
      defineFormConfigHookElement('demo.grid', useDemoGrid),
      defineFormConfigHookElement('demo.grid.input', useDemoGridInput),
      defineFormConfigHookElement('demo.grid.text', useDemoText),
      defineFormConfigHookElement(
        'demo.grid.button',
        useDemoGridSubmitButton,
      ),
      defineFormConfigHookElement('demo.table', useDemoTable),
      defineFormConfigHookElement('demo.table.text1', useDemoText),
      defineFormConfigHookElement('demo.table.textPlain', useDemoText),
      defineFormConfigHookElement('demo.table.text2', useDemoText),
      defineFormConfigHookElement('demo.table.button1', useDemoButton),
      defineFormConfigHookElement('demo.table.button2', useDemoButton),
    ] satisfies readonly DemoElementHookEntry[],
  ),
})

export default useDemo
