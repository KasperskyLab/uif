import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Alert } from '../../Alert'
import { AlertMode, AlertProps } from '../../types'

const meta = {
  title: 'Screenshot Tests/Alert',
  component: Alert,
  tags: ['!autodocs']
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof Alert>

type StateRow = StatesMatrixItem & {
  closable?: boolean,
  actions?: boolean
}

type VariantColumn = StatesMatrixItem & {
  mode: AlertMode
}

// Строк hover/active/focus-visible нет: alertCss не содержит ни одного
// правила с псевдоклассами для корня компонента — алерт статичен сам по
// себе, а интерактивные внутренности (ссылки actions, кнопка закрытия
// ActionButton) имеют собственные состояния и свои матрицы; симуляция
// переписывала бы их псевдоправила во всей ячейке сразу.
// Строка actions+closable отдельная: только при обоих пропах рендерится
// вертикальный сепаратор между ссылками и кнопкой закрытия
// (.alert-action-separator в alertCss).
const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'actions', label: 'With actions', actions: true },
  { key: 'closable', label: 'Closable', closable: true },
  { key: 'full', label: 'Actions + close', actions: true, closable: true }
]

const variantColumns: VariantColumn[] = [
  { key: 'info', label: 'Info', mode: 'info' },
  { key: 'success', label: 'Success', mode: 'success' },
  { key: 'warning', label: 'Warning', mode: 'warning' },
  { key: 'error', label: 'Error', mode: 'error' }
]

const actionsProp: AlertProps['actions'] = {
  FIRST_ACTION: {
    text: 'Action',
    onClick: () => {}
  },
  SECOND_ACTION: {
    text: 'Action',
    onClick: () => {}
  }
}

const renderStateCell = (row: StateRow, column: VariantColumn) => (
  <div style={{ width: 320 }}>
    <Alert
      mode={column.mode}
      closable={row.closable}
      actions={row.actions ? actionsProp : undefined}
      onClose={() => {}}
    >
      Text value
    </Alert>
  </div>
)

export const States: Story = {
  name: 'States',
  parameters: {
    controls: { include: [] },
    layout: 'fullscreen'
  },
  render: () => (
    <StatesMatrix
      labelWidth={120}
      rows={stateRows}
      columns={variantColumns}
      renderCell={renderStateCell}
    />
  )
}
