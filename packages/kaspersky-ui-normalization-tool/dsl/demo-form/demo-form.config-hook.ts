/**
 * Единый configHook демо-формы: default export — фабрика реестра по control.id.
 */
import type { ReactNode } from 'react'
import type { ButtonProps, GridProps, TextProps } from '@kaspersky/hexa-ui'
import type { ITableProps } from '@kaspersky/hexa-ui'
import type { FormSlice } from '../../src/types/form-dsl'

const BUTTON_TEXT_FIELD_ID = 'demo-button-text-source'

function buttonConfigHook(formSlice: FormSlice): ButtonProps | null {
  const { state } = formSlice
  const fromState = String(state[BUTTON_TEXT_FIELD_ID] ?? '').trim()
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

function textConfigHook(formSlice: FormSlice): TextProps | null {
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

function gridConfigHook(_formSlice: FormSlice): Partial<GridProps> | null {
  return {
    cols: 2,
    layoutProperty: { gap: 10 },
  }
}

function tableConfigHook(
  formSlice: FormSlice,
): Partial<ITableProps> & { dslCols?: number; dslRows?: number } | null {
  const state = formSlice.state ?? {}
  const keys = Object.keys(state)
  const hasValues = keys.length > 0
  return {
    dslCols: 4,
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

export default function demoFormConfigHookRegistry(): Record<
  string,
  (slice: FormSlice) => unknown
> {
  return {
    'grid-1774124980818-7sslddg': gridConfigHook,
    'text-1774124983057-g88o6vy': textConfigHook,
    'button-1774124998740-k5kscyr': buttonConfigHook,
    'text-table-1': textConfigHook,
    'button-table-1': buttonConfigHook,
    'button-table-2': buttonConfigHook,
    'text-table-2': textConfigHook,
    'table-demo-main': tableConfigHook,
  }
}
