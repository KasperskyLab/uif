import { StatesMatrix } from '@sb/components/StatesMatrix'
import { Meta } from '@storybook/react'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { ActionButton } from '../../ActionButton'

import {
  SizeRow,
  sizeRows,
  StateRow,
  stateRows,
  Story,
  VariantColumn,
  variantColumns,
  wrapperStyles
} from './common'

const meta = {
  title: 'Screenshot Tests/ActionButton',
  component: ActionButton,
  tags: ['!autodocs', '!manifest'],
  parameters: {
    controls: { include: [] },
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ActionButton>

export default meta

const renderStateCell = (row: StateRow, column: VariantColumn, size: SizeRow) => (
  <div style={{ ...wrapperStyles, background: column.background }}>
    <ActionButton
      disabled={row.disabled}
      icon={<Placeholder />}
      mode={column.mode}
      size={size.key}
    >
      Text value
    </ActionButton>
  </div>
)

export const States: Story = {
  name: 'Text with icons',
  render: () => (
    <StatesMatrix
      rows={stateRows}
      columns={variantColumns}
      sizes={sizeRows}
      renderCell={renderStateCell}
    />
  )
}
