import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Indicator } from '../../Indicator'
import { IndicatorMode, IndicatorModes, IndicatorProps } from '../../types'

const meta = {
  title: 'Screenshot Tests/Indicator',
  component: Indicator,
  tags: ['!autodocs']
} satisfies Meta<IndicatorProps>

export default meta

type Story = StoryObj<IndicatorProps>

type StateRow = StatesMatrixItem & {
  border?: boolean
}

type VariantColumn = StatesMatrixItem & {
  mode: IndicatorMode
}

// Строк hover/active/focus-visible/readonly/disabled/loading нет: в
// Indicator.module.scss нет ни одного правила с псевдоклассом, а в types.ts —
// соответствующих пропов, индикатор статичен — его вид описывают только mode
// и border, поэтому строки матрицы отличаются пропом border.
// Строка кастомного цвета границы (borderBackground) не добавлена: проп
// пробрасывает произвольный цвет в --indicator-border-color — это подгонка под
// конкретный фон, а не состояние компонента.
const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'border', label: 'Border', border: true }
]

const variantColumns: VariantColumn[] = IndicatorModes.map(mode => ({
  key: mode,
  label: mode,
  mode
}))

const renderStateCell = (row: StateRow, column: VariantColumn) => (
  <Indicator mode={column.mode} border={row.border} />
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
