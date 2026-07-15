import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React, { FC } from 'react'

import { Speedometer100Chart } from '..'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import MetaData from '../__meta__/meta.json'

const trafficLightColors = [
  '',
  'var(--chart--base--status--primary--positive)',
  'var(--chart--base--status--primary--medium)',
  'var(--chart--base--status--primary--critical)'
]
const trafficLightSegments = [0, 30, 70, 100]

const meta = {
  title: 'Charts/Speedometer100Chart',
  component: Speedometer100Chart,
  args: {
    height: 180,
    width: 180,
    value: 300,
    minValue: 0,
    maxValue: 500,
    labelDescription: 'SomeDescription',
    segments: [0, 30, 70, 100]
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
    value: { description: 'Value between max and min values'},
    maxValue: { description: 'Max value (100%)' },
    minValue: { description: 'Min value (0)'},
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
} satisfies Meta<typeof Speedometer100Chart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: args.width, height: args.height }}>
      <Speedometer100Chart {...args} />
    </div>
  )
}

export const TrafficLight: Story = {
  args: {
    segments: trafficLightSegments,
    colors: trafficLightColors
  },
  render: (args) => (
    <div style={{ width: args.width, height: args.height }}>
      <Speedometer100Chart {...args} />
    </div>
  )
}