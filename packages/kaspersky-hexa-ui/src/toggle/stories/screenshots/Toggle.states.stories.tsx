import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Toggle } from '../../Toggle'
import { ToggleProps } from '../../types'

const meta = {
  title: 'Screenshot Tests/Toggle',
  component: Toggle,
  tags: ['!autodocs']
} satisfies Meta<ToggleProps>

export default meta

type Story = StoryObj<ToggleProps>

type StateRow = StatesMatrixItem & {
  disabled?: boolean,
  readonly?: boolean,
  loading?: boolean
}

type VariantColumn = StatesMatrixItem & {
  checked: boolean,
  labelPosition?: ToggleProps['labelPosition']
}

// Строки — интерактивные состояния из Toggle.module.scss:
// hover (:hover), active (:active), focus-visible (ring :144),
// readonly (.readonly), disabled (.ant-switch-disabled),
// loading (.ant-switch-loading). Анимация спиннера в строке loading
// заморожена в StatesMatrix (.sb-state-loading) — иначе он попадал бы
// на скриншот под случайным углом.
const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'active', label: 'Active' },
  { key: 'focus-visible', label: 'Focus visible' },
  { key: 'readonly', label: 'Readonly', readonly: true },
  { key: 'disabled', label: 'Disabled', disabled: true },
  { key: 'loading', label: 'Loading', loading: true }
]

const variantColumns: VariantColumn[] = [
  { key: 'unchecked', label: 'Unchecked', checked: false },
  { key: 'checked', label: 'Checked', checked: true },
  { key: 'unchecked-before', label: 'Unchecked', checked: false, labelPosition: 'before' },
  { key: 'checked-before', label: 'Checked', checked: true, labelPosition: 'before' }
]

const renderStateCell = (row: StateRow, column: VariantColumn) => (
  <Toggle
    checked={column.checked}
    onChange={() => {}}
    disabled={row.disabled}
    readonly={row.readonly}
    loading={row.loading}
    labelPosition={column.labelPosition}
    required
    tooltip="Text value"
    description="Text value"
  >
    Text value
  </Toggle>
)

export const States: Story = {
  name: 'States',
  parameters: {
    controls: { include: [] },
    layout: 'fullscreen'
  },
  render: () => (
    <StatesMatrix
      rows={stateRows}
      columns={variantColumns}
      renderCell={renderStateCell}
    />
  )
}
