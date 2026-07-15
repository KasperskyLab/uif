import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { action } from 'storybook/actions'

import { colors } from '@kaspersky/hexa-ui/design-system/tokens'

import MetaData from '../__meta__/meta.json'
import { ILegendProps, Legend } from '../components/Legend'
import { LegendItemType, TLegendItem } from '../types'

import { legendItems } from './legendItemsStub'

const legendItemsSelectable = legendItems.map((l) => ({
  ...l,
  selected: true
}))

const legendItemsLargeDataset: TLegendItem[] = []
for (let i = 0; i < 100; i++) {
  legendItemsLargeDataset.push({
    kind: LegendItemType.Row,
    title: `item_${i}`,
    payload: i,
    color: colors.cg500
  })

  if (i % 10 === 0) {
    legendItemsLargeDataset.push({
      kind: LegendItemType.Divider
    })
  }
}

const meta = {
  title: 'Widget/Legend',
  component: Legend,
  args: {
    onCheck: action('onClick'),
    onHover: action('onHover'),
    onSelect: action('onSelect'),
    onLeave: action('onLeave'),
    totalLabel: 'totalLabel',
    selectable: false
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<typeof Legend>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: legendItems
  }
}

export const WithWidthModeIsFlex: Story = {
  args: {
    items: legendItems,
    widthMode: 'flex'
  }
}

export const WithValueAndTotal: Story = {
  args: {
    items: legendItems,
    showTotal: true
  }
}

export const WithPercentage: Story = {
  args: {
    items: legendItems,
    showPercentage: true,
    showTotal: true
  }
}

export const WithDescription: Story = {
  args: {
    items: legendItems,
    description: 'In elit veniam commodo culpa dolor et cillum aliqua laboris.',
    showTotal: true
  }
}

export const WithTitle: Story = {
  args: {
    items: legendItems,
    legendTitle: 'In elit veniam commodo'
  }
}

export const WithDefaultHeightScrollContainer: Story = {
  args: {
    items: legendItemsLargeDataset,
    showTotal: true,
    description: 'In elit veniam commodo culpa dolor et cillum aliqua laboris.'
  }
}

export const WithCustomHeightScrollContainer: Story = {
  args: {
    items: legendItemsLargeDataset,
    showTotal: true,
    description: 'In elit veniam commodo culpa dolor et cillum aliqua laboris.',
    maxHeightScrollContainer: 300
  }
}

export const Selectable: Story = {
  // @ts-expect-error - we use legendItems from hook in render
  args: {
    selectable: true
  },
  render: (args) => {
    const [legendItems, setlegendItems] = useState(legendItemsSelectable)

    const onSelect: ILegendProps['onSelect'] = (itemData) =>
      setlegendItems((legendItems) =>
        legendItems.map((l) => ({
          ...l,
          selected: l.kind === LegendItemType.Row && itemData.title === l.title ? !l.selected : l.selected
        }))
      )

    const onCheck: ILegendProps['onCheck'] = (itemData) =>
      setlegendItems((legendItems) =>
        legendItems.map((l) => {
          if (l.kind === LegendItemType.Row) {
            return {
              ...l,
              checked:
                itemData.title === l.title
                  ? !l.checked
                  : l.checked
            }
          }
          return l
        })
      )

    return <Legend {...args} onSelect={onSelect} onCheck={onCheck} items={legendItems} />
  }
}
