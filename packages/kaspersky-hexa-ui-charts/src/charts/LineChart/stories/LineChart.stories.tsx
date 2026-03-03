
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React, { FC } from 'react'

import { LineChart } from '..'
import { generateData } from '../../../../.storybook/data'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import { LocalizationProvider } from '../../../l10n/LocalizationProvider'

import {
  stubLineChartData,
  stubLineChartDataOne,
  stubLineChartWithLongTextData,
  stubLineColorInDataChartData,
  stubLineTimeChartData,
  stubLineTimeChartDataOne,
  stubLineTimeEmpty
} from './lineChartStub'

export default {
  title: 'Charts/LineChart',
  component: LineChart,
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.width, height: args.height }}>
        <LocalizationProvider {...args}>
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
    locale: { control: 'radio', options: ['en-us', 'ru-ru'] },
    lineWidth: { control: { type: 'range', min: 1, max: 10, step: 1 } },
    pointSize: { control: { type: 'range', min: 1, max: 10, step: 1 } },
    xMin: { control: { type: 'range', min: -500, max: 1000, step: 10 } },
    xMax: { control: { type: 'range', min: -500, max: 1000, step: 10 } },
    yMin: { control: { type: 'range', min: -500, max: 10000, step: 10 } },
    yMax: { control: { type: 'range', min: -500, max: 10000, step: 10 } },
    metricLineWidth: { control: { type: 'range', min: 1, max: 100, step: 1 } },
    showTooltip: { control: 'boolean' },
    gradient: { control: 'boolean' },
    otherLabel: { control: 'text' },
    totalLabel: { control: 'text' },
    showTotal: { control: 'boolean' }
  }
} as Meta

export const Default: FC = (props) => <LineChart {...props} data={stubLineChartData} />

export const DataBigger10: FC = (props) => <LineChart {...props} data={generateData(15)} />

export const Single: FC = (props) => <LineChart {...props} data={stubLineChartDataOne} />

export const WithoutTooltip: StoryObj<Meta> = {
  render: (props) => <LineChart {...props} data={stubLineChartData} />,
  args: {
    showTooltip: false
  }
}

export const WithoutGradient: StoryObj<Meta> = {
  render: (props) => <LineChart {...props} data={stubLineChartData} />,
  args: {
    gradient: false
  }
}

export const I18nRu: StoryObj<Meta> = {
  render: (props) => <LineChart {...props} data={stubLineTimeChartData} xScale="time" />,
  args: {
    locale: 'ru'
  }
}

export const Logarithmic: FC = (props) => <LineChart {...props} yScale="log" data={stubLineChartWithLongTextData} />

export const ColorInData: FC = (props) => <LineChart {...props} data={stubLineColorInDataChartData} />

export const Timeline: FC = (props) => <LineChart {...props} data={stubLineTimeChartData} xScale="time" />

export const TimelineWithTimezone: FC = (props) => <LineChart {...props} data={stubLineTimeChartData} xScale="time" xTickFormat={(arg1, arg2, arg3, supposedFormat) => {
  return String(supposedFormat)
}} tooltipDateFormat={(date) => {
  return date.toString()
}} />

export const TimelineOne: FC = (props) => <LineChart {...props} data={stubLineTimeChartDataOne} xScale="time" />

export const TimelineEmpty: FC = (props) => <LineChart
      {...props}
      xScale="time"
      xMin={undefined}
      xMax={undefined}
      yMin={undefined}
      yMax={undefined}
      data={stubLineTimeEmpty}
    />
