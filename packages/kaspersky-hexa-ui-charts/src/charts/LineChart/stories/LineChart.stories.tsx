import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ChartLocale } from 'src/types/locales'
import { action } from 'storybook/actions'

import { generateData } from '../../../../.storybook/data'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import { LocalizationProvider } from '../../../l10n/LocalizationProvider'
import MetaData from '../__meta__/meta.json'
import { LineChart, LineChartProps } from '../components/LineChart'

import {
  stubLineChartData,
  stubLineChartDataOne,
  stubLineChartWithLongTextData,
  stubLineColorInDataChartData,
  stubLineTimeChartData,
  stubLineTimeChartDataOne,
  stubLineTimeEmpty
} from './lineChartStub'

interface LineChartPropsLocale extends LineChartProps {
  locale: ChartLocale
}

const meta = {
  title: 'Charts/LineChart',
  component: LineChart,
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.width, height: args.height }}>
        <LocalizationProvider locale={args.locale}>
          <Story />
        </LocalizationProvider>
      </div>
    )
  ],
  args: {
    width: DEFAULT_CHART_WIDTH,
    height: DEFAULT_CHART_HEIGHT,
    locale: 'en',
    lineWidth: 2,
    pointSize: 3,
    padding: { bottom: 100 },
    showTooltip: true,
    gradient: true,
    otherLabel: 'someOtherLabel',
    onClickData: action('onClickData'),
    onHoverData: action('onHoverData'),
    totalLabel: 'Total',
    showTotal: true
  },
  argTypes: {
    width: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    lineWidth: { control: { type: 'range', min: 1, max: 10, step: 1 } },
    pointSize: { control: { type: 'range', min: 1, max: 10, step: 1 } },
    xMin: { control: { type: 'range', min: -500, max: 1000, step: 10 } },
    xMax: { control: { type: 'range', min: -500, max: 1000, step: 10 } },
    yMin: { control: { type: 'range', min: -500, max: 10000, step: 10 } },
    yMax: { control: { type: 'range', min: -500, max: 10000, step: 10 } },
    metricLineWidth: { control: { type: 'range', min: 1, max: 100, step: 1 } }
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<LineChartPropsLocale>

export default meta
type Story = StoryObj<typeof meta>

const exampleData = generateData(15)

export const Default: Story = {
  args: {
    data: stubLineChartData
  }
}

export const DataBigger10: Story = {
  args: {
    data: exampleData
  }
}

export const Single: Story = {
  args: {
    data: stubLineChartDataOne
  }
}

export const WithoutTooltip: Story = {
  args: {
    data: stubLineChartData,
    showTooltip: false
  }
}

export const WithoutGradient: Story = {
  args: {
    data: stubLineChartData,
    gradient: false
  }
}

export const I18nRu: Story = {
  args: {
    locale: 'ru',
    xScale: 'time',
    data: stubLineTimeChartData
  }
}

export const Logarithmic: Story = {
  args: {
    data: stubLineChartWithLongTextData,
    yScale: 'log'
  }
}

export const ColorInData: Story = {
  args: {
    data: stubLineColorInDataChartData
  }
}

export const Timeline: Story = {
  args: {
    data: stubLineTimeChartData,
    xScale: 'time'
  }
}

export const TimelineWithTimezone: Story = {
  args:{
    data: stubLineTimeChartData,
    xScale: 'time',
    xTickFormat: (tick: any, index: number, ticks: any[], supposedFormat?: string) => {
      return String(supposedFormat)
    },
    tooltipDateFormat: (date: number | Date) => {
      return date.toString()
    }
  }
}

export const TimelineOne: Story = {
  args: {
    data: stubLineTimeChartDataOne,
    xScale: 'time'
  }
}

export const TimelineEmpty: Story = {
  args: {
    data: stubLineTimeEmpty,
    xScale: 'time',
    xMin: undefined,
    xMax: undefined,
    yMin: undefined,
    yMax: undefined
  }
}

export const xTickHide: Story = {
  args: {
    data: stubLineTimeChartData,
    xTickHide: true
  }
}

export const yTickHide: Story = {
  args: {
    data: stubLineTimeChartData,
    yTickHide: true
  }
}
