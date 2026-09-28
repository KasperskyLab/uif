import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Radio } from '../../Radio'
import { RadioProps } from '../../types'

const meta = {
  title: 'Screenshot Tests/Radio',
  component: Radio,
  tags: ['!autodocs']
} satisfies Meta<RadioProps>

export default meta

type Story = StoryObj<RadioProps>

type StateRow = StatesMatrixItem & {
  disabled?: boolean,
  readonly?: boolean
}

type VariantColumn = StatesMatrixItem & {
  selected: boolean,
  invalid: boolean
}

// Строки focus нет: правило .radio-input:focus (Radio.module.scss:82) только
// подавает ring antd и пиксельно неотличимо от default; ring даёт :focus-visible,
// он покрыт отдельной строкой.
const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'active', label: 'Active' },
  { key: 'focus-visible', label: 'Focus visible' },
  { key: 'readonly', label: 'Readonly', readonly: true },
  { key: 'disabled', label: 'Disabled', disabled: true }
]

const variantColumns: VariantColumn[] = [
  { key: 'unselected', label: 'Unselected', selected: false, invalid: false },
  { key: 'selected', label: 'Selected', selected: true, invalid: false },
  { key: 'invalid-unselected', label: 'Invalid Unselected', selected: false, invalid: true },
  { key: 'invalid-selected', label: 'Invalid Selected', selected: true, invalid: true }
]

const renderStateCell = (row: StateRow, column: VariantColumn) => (
  <Radio
    vertical={false}
    value={column.selected ? 'v' : undefined}
    onChange={() => {}}
    disabled={row.disabled}
    readonly={row.readonly}
    invalid={column.invalid}
    options={[{
      label: 'Text value',
      value: 'v',
      description: 'Text value',
      tooltip: 'Text value'
    }]}
  />
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
