import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SpeedometerChart } from '..'
import MetaData from '../__meta__/meta.json'

const trafficLightColors = [
  '',
  'var(--chart--base--status--primary--positive)',
  'var(--chart--base--status--primary--medium)',
  'var(--chart--base--status--primary--critical)'
]

const meta = {
  title: 'Charts/SpeedometerChart',
  component: SpeedometerChart,
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.width, height: args.height }}>
        <Story />
      </div>
    )
  ],
  args: {
    height: 180,
    width: 180,
    value: 5,
    segments: [0, 30, 70, 100],
    labelDescription: 'SomeDescription'
  },
  argTypes: {
    colors: { description: 'Colors of speedometer' },
    labelDescription: { description: 'Description under precentage'},
    padding: { description: 'Speedometer padding' },
    segments: { description: 'Segments on speedometer' },
    showLabels: { description: 'Show labels inside of speedometer' },
    showTotal: { description: 'Show precentage' },
    ticksGroup: { description: 'Number of ticks groups'},
    ticksUnitInGroup: { description: 'Number of ticks in group' },
    ticksUnitInGroupLength: { description: 'Length of group starting tick line' },
    tickUnitLength: { description: 'Length of tick line'},
    value: { description: 'Selected value on speedometer'},
    width: { table: { disable: true } },
    height: { table: { disable: true } }
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    },
    visual: {
      delayMs: 3000
    }
  }
} satisfies Meta<typeof SpeedometerChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    colors: trafficLightColors
  }
}

export const WithoutDescription: Story = {
  args: {
    labelDescription: undefined,
    colors: trafficLightColors
  }
}

export const LongDescription: Story = {
  args: {
    labelDescription: 'Pariatur commodo qui ut exercitation sint voluptate deserunt dolore amet aliqua',
    colors: trafficLightColors
  }
}

export const ValueGreaterMax: Story = {
  args: {
    colors: trafficLightColors
  },
  render: (args) => <SpeedometerChart {...args} value={(args.segments?.at(-1) || 0) + 10} />
}

export const ValueLessMin: Story = {
  args: {
    colors: trafficLightColors
  },
  render: (args) => <SpeedometerChart {...args} value={(args.segments.at(0) || 0) - 10} />
}

export const ShowLabelsHide: Story = {
  args: {
    colors: trafficLightColors,
    showLabels: 'hide'
  }
}

export const ShowLabelsBySegments: Story = {
  args: {
    colors: trafficLightColors,
    showLabels: 'bySegments'
  }
}

export const PercentageSegments: Story = {
  args: {
    segments: [0, 15, 85, 100],
    colors: trafficLightColors,
    showLabels: 'bySegments',
    value: 40
  }
}

export const TwoSegments: Story = {
  args: {
    segments: [0, 40, 100],
    showLabels: 'bySegments',
    value: 40
  }
}

export const BigValues: Story = {
  args: {
    segments: [0, 3000, 7000, 10000],
    colors: trafficLightColors,
    showLabels: 'bySegments',
    value: 4000
  }
}

export const OtherSegments: Story = {
  args: {
    segments: [0, 100, 300, 800, 1000],
    showLabels: 'bySegments',
    value: 400
  }
}