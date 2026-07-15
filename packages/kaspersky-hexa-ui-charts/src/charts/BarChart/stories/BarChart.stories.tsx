import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { action } from 'storybook/actions'

import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import MetaData from '../__meta__/meta.json'
import { BarChart } from '../components/BarChart'
import { BAR_CHART_SIZE_CONFIG } from '../constants'

import {
  denseBarChartData,
  stubGroupBarChartData,
  stubMultipleBarChartData,
  stubMultipleColorInChartData,
  stubSingleBarChartData,
  stubSingleBarChartDataWithSideLabels
} from './barChartStub'

const chartSizes = Object.keys(BAR_CHART_SIZE_CONFIG) as Array<keyof typeof BAR_CHART_SIZE_CONFIG>
const meta = {
  title: 'Charts/BarChart',
  component: BarChart,
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.width, height: args.height }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  },
  args: {
    width: DEFAULT_CHART_WIDTH,
    height: DEFAULT_CHART_HEIGHT,
    horizontal: false,
    showTooltip: true,
    showBarValues: false,
    showSideLabels: false,
    onClickData: action('onClickData'),
    onHoverData: action('onHoverData'),
    totalLabel: 'Total',
    showTotal: true
  },
  argTypes: {
    width: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    size: {
      control: 'select',
      options: chartSizes,
      description:
        'Фиксированный размер BarChart. Если задан, переопределяет ручные barWidth, cornerRadius и gap-пропсы: large = 32/8, medium = 24/4, small = 16/2.',
      table: { category: 'Layout' }
    },
    horizontal: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showBarValues: { control: 'boolean' },
    showSideLabels: { control: 'boolean' },
    yMin: { control: { type: 'range', min: -500, max: 1000, step: 10 } },
    yMax: { control: { type: 'range', min: -500, max: 1000, step: 10 } },
    showTotal: { control: 'boolean' },
    totalLabel: { control: 'text' }
  }
} satisfies Meta<typeof BarChart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: stubSingleBarChartData
  }
}

export const Sizes: Story = {
  args: {
    data: stubSingleBarChartData,
    size: 'small'
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 24 }}>
      {chartSizes.map((size) => (
        <div key={size} style={{ width: args.width, height: args.height }}>
          <BarChart {...args} size={size} />
        </div>
      ))}
    </div>
  )
}

export const SizeOverridesManualProps: Story = {
  args: {
    data: stubSingleBarChartData,
    size: 'small',
    barWidth: 64,
    cornerRadius: 16
  }
}

export const WithoutTooltip: Story = {
  args: {
    showTooltip: false,
    data: stubSingleBarChartData
  }
}

export const WithBarValues: Story = {
  args: {
    showBarValues: true,
    data: stubSingleBarChartData
  }
}

export const Horizontal: Story = {
  args: {
    horizontal: true,
    data: stubSingleBarChartData
  }
}

export const HorizontalWithBarValues: Story = {
  args: {
    horizontal: true,
    showBarValues: true,
    data: stubSingleBarChartData
  }
}

export const HorizontalWithSideLabels: Story = {
  args: {
    horizontal: true,
    data: stubSingleBarChartDataWithSideLabels,
    showSideLabels: true
  }
}

export const Multiple: Story = {
  args: {
    data: stubMultipleBarChartData
  }
}

export const Dense: Story = {
  args: {
    data: denseBarChartData,
    width: 584,
    height: 280,
    size: 'small'
  }
}

export const HorizontalMultiple: Story = {
  args: {
    horizontal: true,
    data: stubMultipleBarChartData
  }
}

export const MultipleColor: Story = {
  args: {
    data: stubMultipleBarChartData,
    colors: ['#ff0000']
  }
}

export const MultipleColorInData: Story = {
  args: {
    data: stubMultipleColorInChartData
  }
}

export const Group: Story = {
  args: {
    data: stubGroupBarChartData
  }
}

export const MinMax: Story = {
  args: {
    data: stubSingleBarChartData,
    yMin: 5,
    yMax: 10
  }
}

export const MinMaxHorizontal: Story = {
  args: {
    data: stubSingleBarChartData,
    horizontal: true,
    yMin: 5,
    yMax: 10
  }
}
