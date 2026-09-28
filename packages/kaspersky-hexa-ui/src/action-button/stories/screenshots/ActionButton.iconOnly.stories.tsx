import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { ActionButton } from '../../ActionButton'
import { ActionButtonMode, ActionButtonSize } from '../../types'

const meta = {
  title: 'Screenshot Tests/ActionButton',
  component: ActionButton,
  tags: ['!autodocs'],
  parameters: {
    controls: { include: [] },
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ActionButton>

export default meta

type Story = StoryObj<typeof ActionButton>

type StateRow = StatesMatrixItem & {
  disabled?: boolean
}

type VariantColumn = StatesMatrixItem & {
  mode: ActionButtonMode
}

type SizeRow = StatesMatrixItem & {
  key: ActionButtonSize
}

// Строки readonly и loading нет: у ActionButton нет этих пропов в API.
// Отдельного правила :focus нет — ring задаёт :focus-visible.
const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'active', label: 'Active' },
  { key: 'focus-visible', label: 'Focus visible' },
  { key: 'disabled', label: 'Disabled', disabled: true }
]

const variantColumns: VariantColumn[] = [
  { key: 'ghost', label: 'Ghost', mode: 'ghost' },
  { key: 'ghostInverted', label: 'Ghost Inverted', mode: 'ghostInverted' },
  { key: 'filled', label: 'Filled', mode: 'filled' },
  { key: 'filledInverted', label: 'Filled Inverted', mode: 'filledInverted' },
  { key: 'onLight', label: 'On Light', mode: 'onLight' }
]

const sizeRows: SizeRow[] = (['small', 'medium', 'large'] as ActionButtonSize[]).map(size => ({
  key: size,
  label: size
}))

const renderStateCell = (row: StateRow, column: VariantColumn, size: SizeRow) => (
  <ActionButton
    disabled={row.disabled}
    icon={<Placeholder />}
    mode={column.mode}
    size={size.key}
  />
)

export const IconOnly: Story = {
  name: 'Icon Only',
  render: () => (
    <StatesMatrix
      rows={stateRows}
      columns={variantColumns}
      sizes={sizeRows}
      renderCell={renderStateCell}
    />
  )
}
