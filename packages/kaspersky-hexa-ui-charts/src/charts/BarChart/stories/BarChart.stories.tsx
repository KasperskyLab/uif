import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import { BarChart } from '../components/BarChart'

import {
  stubMultipleBarChartData,
  stubMultipleColorInChartData,
  stubPreviousBarChartData,
  stubSingleBarChartData
} from './barChartStub'

export default {
  title: 'Charts/BarChart',
  component: BarChart,
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.width, height: args.height }}>
        <Story />
      </div>
    )
  ],
  args: {
    width: DEFAULT_CHART_WIDTH,
    height: DEFAULT_CHART_HEIGHT,
    horizontal: false,
    showTooltip: true,
    onClickData: action('onClickData'),
    onHoverData: action('onHoverData'),
    totalLabel: 'Total',
    showTotal: true
  },
  argTypes: {
    width: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    horizontal: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    yMin: { control: { type: 'range', min: -500, max: 1000, step: 10 } },
    yMax: { control: { type: 'range', min: -500, max: 1000, step: 10 } },
    showTotal: { control: 'boolean' },
    totalLabel: { control: 'text' }
  }
} as Meta

export const Default = (props) => <BarChart {...props} data={stubSingleBarChartData} />

export const WithoutTooltip: StoryObj<Meta> = {
  args: {
    showTooltip: false,
    data: stubSingleBarChartData
  }
}

export const Horizontal: StoryObj<Meta> = {
  render: (props) => <BarChart {...props} data={stubSingleBarChartData} />,
  args: {
    horizontal: true
  }
}

export const Multiple = (props) => <BarChart {...props} data={stubMultipleBarChartData} />

export const HorizontalMultiple = {
  render: (props) => <BarChart {...props} data={stubMultipleBarChartData} />,
  args: {
    horizontal: true
  }
}

export const MultipleColor = (props) => <BarChart {...props} colors={['#ff0000']} data={stubMultipleBarChartData} />

export const MultipleColorInData = (props) => <BarChart {...props} data={stubMultipleColorInChartData} />

export const Previous = (props) => <BarChart {...props} data={stubPreviousBarChartData} />

export const MinMax: StoryObj<Meta> = {
  render: (props) => <BarChart {...props} data={stubSingleBarChartData} />,
  args: {
    yMin: 5,
    yMax: 10
  }
}

export const MinMaxHorizontal: StoryObj<Meta> = {
  render: (props) => <BarChart {...props} data={stubSingleBarChartData} />,
  args: {
    horizontal: true,
    yMin: 5,
    yMax: 10
  }
}
