import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { colors } from '@kaspersky/hexa-ui/design-system/tokens'

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

export default {
  title: 'Legend',
  component: Legend,
  args: {
    onClick: action('onClick'),
    onHover: action('onHover'),
    onSelect: action('onSelect'),
    showPercents: true,
    totalLabel: 'totalLabel'
  },
  decorators: [(story) => <div style={{ width: 300 }}>{story()}</div>]
} as ComponentMeta<typeof Legend>

export const Default: ComponentStory<typeof Legend> = (args: any) => {
  return <Legend {...args} items={legendItems} />
}

export const WithValue: ComponentStory<typeof Legend> = (args: any) => {
  return <Legend {...args} items={legendItems} />
}

export const WithValueAndTotal: ComponentStory<typeof Legend> = (args: any) => {
  return <Legend {...args} items={legendItems} showTotal />
}

export const WithPercentage: ComponentStory<typeof Legend> = (args: any) => {
  return <Legend {...args} items={legendItems} showTotal showPercentage />
}

export const WithDescription: ComponentStory<typeof Legend> = (args: any) => {
  return (
    <Legend
      {...args}
      items={legendItems}
      showTotal
      showPercentage
      description="In elit veniam commodo culpa dolor et cillum aliqua laboris."
    />
  )
}

export const WithTitle: ComponentStory<typeof Legend> = (args: any) => {
  return (
    <Legend
      {...args}
      items={legendItems}
      legendTitle="In elit veniam commodo"
    />
  )
}

export const WithScroll: ComponentStory<typeof Legend> = (args: any) => {
  return (
    <div style={{ height: 300 }}>
      <Legend
        {...args}
        items={legendItemsLargeDataset}
        showTotal
        description="In elit veniam commodo culpa dolor et cillum aliqua laboris."
      />
    </div>
  )
}

export const Selectable: ComponentStory<typeof Legend> = (args: any) => {
  const [legendItems, setlegendItems] = useState(legendItemsSelectable)

  const onSelect: ILegendProps['onSelect'] = (itemData) =>
    setlegendItems((legendItems) =>
      legendItems.map((l) => ({
        ...l,
        selected:
          l.kind === LegendItemType.Row && itemData.title === l.title
            ? !l.selected
            : l.selected
      }))
    )

  return (
    <Legend {...args} items={legendItems} onSelect={onSelect} selectable />
  )
}
