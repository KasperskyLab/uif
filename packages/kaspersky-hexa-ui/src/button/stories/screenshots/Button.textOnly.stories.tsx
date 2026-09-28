import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Button } from '../../Button'
import { ButtonMode, ButtonSize } from '../../types'

const meta = {
  title: 'Screenshot Tests/Button',
  component: Button,
  tags: ['!autodocs'],
  parameters: {
    controls: { include: [] },
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

type StateRow = StatesMatrixItem & {
  disabled?: boolean,
  loading?: boolean
}

type VariantColumn = StatesMatrixItem & {
  mode: ButtonMode
}

type SizeRow = StatesMatrixItem & {
  key: ButtonSize
}

const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'active', label: 'Active' },
  { key: 'focus-visible', label: 'Focus visible' },
  { key: 'disabled', label: 'Disabled', disabled: true },
  { key: 'loading', label: 'Loading', loading: true }
]

const variantColumns: VariantColumn[] = [
  { key: 'primary', label: 'Primary', mode: 'primary' },
  { key: 'secondary', label: 'Secondary', mode: 'secondary' },
  { key: 'tertiary', label: 'Tertiary', mode: 'tertiary' },
  { key: 'dangerFilled', label: 'Danger Filled', mode: 'dangerFilled' },
  { key: 'dangerOutlined', label: 'Danger Outlined', mode: 'dangerOutlined' },
  { key: 'ai', label: 'AI', mode: 'ai' }
]

const sizeRows: SizeRow[] = (['small', 'medium', 'large', 'extraLarge'] as ButtonSize[]).map(size => ({
  key: size,
  label: size
}))

const renderStateCell = (row: StateRow, column: VariantColumn, size: SizeRow) => (
  <Button
    mode={column.mode}
    size={size.key}
    disabled={row.disabled}
    loading={row.loading}
    text="Text value"
    onClick={() => {}}
  />
)

export const TextOnly: Story = {
  name: 'Text Only',
  render: () => (
    <StatesMatrix
      rows={stateRows}
      columns={variantColumns}
      sizes={sizeRows}
      renderCell={renderStateCell}
    />
  )
}
