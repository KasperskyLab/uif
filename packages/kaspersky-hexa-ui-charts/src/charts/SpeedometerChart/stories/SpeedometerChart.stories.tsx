import { Meta } from '@storybook/react'
import React, { FC } from 'react'

import { SpeedometerChart, SpeedometerChartProps } from '..'

export default {
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
    segments: [0, 2, 4, 6, 8, 10],
    labelDescription: 'SomeDescription'
  },
  argTypes: {
    width: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1000, step: 10 } }
  }
} as Meta

export const Default: FC<SpeedometerChartProps> = (args) => <SpeedometerChart {...args} />

export const Default300 = {
  render: (args: SpeedometerChartProps) => <SpeedometerChart {...args} />,
  args: {
    height: 300,
    width: 300
  }
}

export const Default800 = {
  render: (args: SpeedometerChartProps) => <SpeedometerChart {...args} />,
  args: {
    height: 800,
    width: 800
  }
}

export const WithoutDescription: FC<SpeedometerChartProps> = (args) => <SpeedometerChart {...args} labelDescription={undefined} />

export const LongDescription: FC<SpeedometerChartProps> = (args) => (
  <SpeedometerChart
    {...args}
    labelDescription="Pariatur commodo qui ut exercitation sint voluptate deserunt dolore amet aliqua"
  />
)

export const ValueGreaterMax: FC<SpeedometerChartProps> = (args) => <SpeedometerChart {...args} value={(args.segments?.at(-1) || 0) + 10} />

export const ValueLessMin: FC<SpeedometerChartProps> = (args) => <SpeedometerChart {...args} value={(args.segments.at(0) || 0) - 10} />

export const ShowLabelsHide: FC<SpeedometerChartProps> = (args) => <SpeedometerChart {...args} showLabels="hide" />

export const ShowLabelsBySegments: FC<SpeedometerChartProps> = (args) => <SpeedometerChart {...args} showLabels="bySegments" />

export const PercentageSegments: FC<SpeedometerChartProps> = (args) => (
  <SpeedometerChart {...args} value={40} segments={[0, 15, 85, 100]} showLabels="bySegments" />
)

export const TwoSegments: FC<SpeedometerChartProps> = (args) => (
  <SpeedometerChart {...args} value={40} segments={[0, 40, 100]} showLabels="bySegments" />
)

export const OtherSegments: FC<SpeedometerChartProps> = (args) => (
  <SpeedometerChart {...args} value={4000} segments={[0, 100, 1000, 2000, 10000]} showLabels="bySegments" />
)
