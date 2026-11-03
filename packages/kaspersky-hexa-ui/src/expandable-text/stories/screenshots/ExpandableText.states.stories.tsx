import { StatesMatrix, StatesMatrixItem } from '@sb/components/StatesMatrix'
import { Meta, StoryObj } from '@storybook/react'
import React, { useLayoutEffect, useRef } from 'react'

import { ExpandableText } from '../../ExpandableText'

const meta = {
  title: 'Screenshot Tests/ExpandableText',
  component: ExpandableText,
  tags: ['!autodocs']
} satisfies Meta<typeof ExpandableText>

export default meta

type Story = StoryObj<typeof ExpandableText>

type StateRow = StatesMatrixItem & {
  expanded?: boolean
}

type VariantColumn = StatesMatrixItem & {
  useGradient?: boolean
}

// Строк hover/active/focus нет: в ExpandableText.module.scss у корня есть
// только :focus-visible. Hover и active есть у внутренней ActionButton,
// у неё своя матрица; симуляция переписала бы эти правила на всю ячейку.
const stateRows: StateRow[] = [
  { key: 'default', label: 'Collapsed' },
  { key: 'expanded', label: 'Expanded', expanded: true },
  { key: 'focus-visible', label: 'Focus visible' }
]

const variantColumns: VariantColumn[] = [
  { key: 'text', label: 'Text' },
  { key: 'gradient', label: 'Gradient', useGradient: true }
]

const text = 'Text value that does not fit the first line and stays clipped'

// Раскрытие не проп. Кнопка появляется только после измерения переполнения.
// Пока стоит data-expanded, повторный замер не сворачивает блок обратно.
const ExpandableTextPreview = ({
  expanded = false,
  useGradient = false
}: {
  expanded?: boolean,
  useGradient?: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!expanded) return undefined

    let opened = false
    let frame = 0

    const openWhenClipped = () => {
      if (opened) return

      const button = ref.current?.querySelector<HTMLButtonElement>('.hexa-ui-expander')
      if (!button) {
        frame = requestAnimationFrame(openWhenClipped)
        return
      }

      opened = true
      button.click()
    }

    openWhenClipped()

    return () => cancelAnimationFrame(frame)
  }, [expanded])

  return (
    <div ref={ref} style={{ width: 180 }}>
      <ExpandableText useGradient={useGradient}>{text}</ExpandableText>
    </div>
  )
}

const renderStateCell = (row: StateRow, column: VariantColumn) => (
  <ExpandableTextPreview expanded={row.expanded} useGradient={column.useGradient} />
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
