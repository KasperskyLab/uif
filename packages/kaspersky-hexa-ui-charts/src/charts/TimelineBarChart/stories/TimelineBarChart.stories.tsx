import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import hoursToMilliseconds from 'date-fns/hoursToMilliseconds'
import React from 'react'

import { generateTimelineData } from '../../../../.storybook/data'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import { LocalizationProvider } from '../../../l10n/LocalizationProvider'
import { TimelineBarChart } from '../components/TimelineBarChart'

import { groupStackedBarChartData, oneWeekPeriodData, oneWeekPeriodDomain, oneWeekPeriodStackedData, singleStackedBarChartData, singleStackedBarChartDataOne } from './timelineBarChartStub'

export default {
  title: 'Charts/TimelineBarChart',
  component: TimelineBarChart,
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.width, height: args.height }}>
        <LocalizationProvider {...args}>
          <Story {...args} />
        </LocalizationProvider>
      </div>
    )
  ],
  args: {
    width: DEFAULT_CHART_WIDTH,
    height: DEFAULT_CHART_HEIGHT,
    horizontal: false,
    locale: 'en',
    yScale: 'linear',
    padding: { bottom: 100 },
    timeScaleInterval: hoursToMilliseconds(24),
    showTooltip: true,
    otherLabel: 'someOtherLabel',
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
    locale: { control: 'radio', options: ['en-us', 'ru-ru'] },
    otherLabel: { control: 'text' },
    totalLabel: { control: 'text' },
    showTotal: { control: 'boolean' }
  }
} as Meta

export const Default = (props) => <TimelineBarChart {...props} data={singleStackedBarChartData} />

export const DataBigger10 = (props) => <TimelineBarChart {...props} data={generateTimelineData(15)} />

export const WithoitTooltip: StoryObj<Meta> = {
  render: (props) => <TimelineBarChart {...props} data={singleStackedBarChartData} />,
  args: {
    showTooltip: false
  }
}

export const MinMax = (props) => <TimelineBarChart {...props} data={singleStackedBarChartDataOne} yMin={2} yMax={10} />

export const X2: StoryObj<Meta> = {
  render: (props) => (
    <TimelineBarChart {...props} data={singleStackedBarChartData} />
  ),
  args: {
    width: DEFAULT_CHART_WIDTH * 2
  }
}

export const X3: StoryObj<Meta> = {
  render: (props) => (
    <TimelineBarChart {...props} data={singleStackedBarChartData} />
  ),
  args: {
    width: DEFAULT_CHART_WIDTH * 3
  }
}

export const OneWeekWithTooltip: StoryObj<Meta> = {
  render: (props) => (
    <TimelineBarChart {...props} data={oneWeekPeriodData} domain={oneWeekPeriodDomain} />
  ),
  args: {
    width: DEFAULT_CHART_WIDTH * 2
  }
}

export const HorizontalOneWeekWithTooltip: StoryObj<Meta> = {
  render: (props) => (
    <TimelineBarChart {...props} data={oneWeekPeriodData} domain={oneWeekPeriodDomain} />
  ),
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    horizontal: true
  }
}

export const WithTooltipDateFormat: StoryObj<Meta> = {
  render: (props) => (
    <TimelineBarChart {...props} data={oneWeekPeriodData} domain={oneWeekPeriodDomain} tooltipDateFormat={(date: Date) => {
      return date.toLocaleString() + 'TZ'
    }} xTickFormat={(arg1, arg2, arg3, supposedFormat) => {
      return String(supposedFormat)
    }} />
  ),
  args: {
    width: DEFAULT_CHART_WIDTH * 3
  }
}

export const StackedOneWeekWithTooltip = (props) => (
    <TimelineBarChart {...props} data={oneWeekPeriodStackedData} />
)

export const Horizontal = {
  render: (props) => <TimelineBarChart {...props} data={singleStackedBarChartData} />,
  args: {
    horizontal: true
  }
}

export const i18nRu: StoryObj<Meta> = {
  render: (props) => <TimelineBarChart {...props} data={singleStackedBarChartData} />,
  args: {
    locale: 'ru'
  }
}

export const GroupPrevious = (props) => <TimelineBarChart {...props} data={groupStackedBarChartData} />
