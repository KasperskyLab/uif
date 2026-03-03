import React, { FC } from 'react'

import { Speedometer100Chart, Speedometer100ChartProps } from '..'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'

const trafficLightColors = [
  '',
  'var(--chart--base--status--primary--positive)',
  'var(--chart--base--status--primary--medium)',
  'var(--chart--base--status--primary--critical)'
]
const trafficLightSegments = [0, 30, 70, 100]

export default {
  title: 'Charts/Speedometer100Chart',
  component: Speedometer100Chart,
  args: {
    height: DEFAULT_CHART_HEIGHT,
    width: DEFAULT_CHART_WIDTH,
    value: 300,
    minValue: 0,
    maxValue: 500,
    labelDescription: 'SomeDescription'
  }
}

const TestContainer: FC<Speedometer100ChartProps> = (props) => (
  <div style={{ width: props.width, height: props.height }}>
    <Speedometer100Chart {...props} />
  </div>
)

export const Default = (args: any) => <TestContainer {...args} />

export const TrafficLight = (args: any) => <TestContainer {...args} colors={trafficLightColors} segments={trafficLightSegments} />
