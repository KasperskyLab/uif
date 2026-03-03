import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { useTheme } from '@kaspersky/hexa-ui/design-system'

import { generateData } from '../../../../.storybook/data'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import { defaultAddColorToData } from '../../../helpers/defaultAddColorToData'
import { getChartTheme } from '../../../hooks/useChartTheme'
import { StackedBarChart } from '../components/StackedBarChart'

import { currentPreviousStackedBarChartData, multipleCornerRadiusStackedBarChartData, multipleStackedBarChartData, multipleStackedBarChartDataWithLongText, multipleStackedBarChartDataWithShortText, multipleStackedColorInDataBarChartData, singleStackedBarChartData, yLess1StackedBarChartData } from './stackedBarChartStub'

export default {
  title: 'Charts/StackedBarChart',
  component: StackedBarChart,
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
    otherLabel: 'someOtherLabel',
    totalLabel: 'Total'
  },
  argTypes: {
    width: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    horizontal: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    yMin: { control: { type: 'range', min: 0, max: 1000, step: 10 } },
    yMax: { control: { type: 'range', min: 0, max: 1000, step: 10 } },
    otherLabel: { control: 'text' },
    totalLabel: { control: 'text' }
  }
} as Meta

const currentPreviousStacked2BarChartData = currentPreviousStackedBarChartData.map((d) => ({
  ...d,
  data: d.data.slice(0, 2)
}))

const multipleStackedBarChartData2 = multipleStackedBarChartData.map((d) => ({
  ...d,
  data: d.data.slice(0, 2)
}))

export const Single = (props: any) => <StackedBarChart {...props} data={singleStackedBarChartData} />

export const Default = (props: any) => <StackedBarChart {...props} data={multipleStackedBarChartData} />

export const CornerRadius = (props: any) => <StackedBarChart {...props} data={multipleCornerRadiusStackedBarChartData} />

export const CornerRadiusHorizontal = (props: any) => <StackedBarChart {...props} data={multipleCornerRadiusStackedBarChartData} horizontal />

export const xTickHide = (props: any) => <StackedBarChart {...props} data={multipleStackedBarChartData} xTickHide />

export const yTickHide = (props: any) => <StackedBarChart {...props} data={multipleStackedBarChartData} yTickHide />

export const DataBigger10 = (props: any) => <StackedBarChart {...props} data={generateData(15)} />

export const WithoutTooltip: StoryObj<Meta> = {
  render: (props) => <StackedBarChart {...props} data={multipleStackedBarChartData} />,
  args: {
    showTooltip: false
  }
}

export const YLess1 = (props: any) => <StackedBarChart {...props} data={yLess1StackedBarChartData} />

export const Default2 = (props: any) => <StackedBarChart {...props} data={multipleStackedBarChartData2} />

export const MinMax: StoryObj<Meta> = {
  render: (props) => <StackedBarChart {...props} data={multipleStackedBarChartData} />,
  args: {
    yMax: 20
  }
}

export const MinMaxHorizontal: StoryObj<Meta> = {
  render: (props) => <StackedBarChart {...props} data={multipleStackedBarChartData} />,
  args: {
    yMax: 20,
    horizontal: true
  }
}

export const WithShortText = (props: any) => (
  <StackedBarChart {...props} data={multipleStackedBarChartDataWithShortText} />
)

export const WithLongText = (props: any) => (
  <StackedBarChart {...props} data={multipleStackedBarChartDataWithLongText} />
)

export const Horizontal: StoryObj<Meta> = {
  render: (props) => (
    <StackedBarChart {...props} data={multipleStackedBarChartData} />
  ),
  args: {
    horizontal: true
  }
}

export const HorizontalScroll: StoryObj<Meta> = {
  render: (props) => (
    <StackedBarChart {...props} data={multipleStackedBarChartData} />
  ),
  args: {
    height: 200,
    horizontal: true
  }
}

export const Scroll: StoryObj<Meta> = {
  render: (props) => (
    <StackedBarChart {...props} data={multipleStackedBarChartData} />
  ),
  args: {
    width: 200
  }
}

export const ScrollWithLongText: StoryObj<Meta> = {
  render: (props) => (
    <StackedBarChart {...props} data={multipleStackedBarChartDataWithLongText} />
  ),
  args: {
    width: 200
  }
}

export const HorizontalWithLongText: StoryObj<Meta> = {
  render: (props) => (
  <StackedBarChart {...props} data={multipleStackedBarChartDataWithLongText} horizontal />),
  args: {
    horizontal: true
  }
}

export const ColorFromTheme = (props: any) => {
  const theme = useTheme()
  const chartTheme = getChartTheme(theme)
  const data = defaultAddColorToData(multipleStackedBarChartData, chartTheme)

  return <StackedBarChart {...props} data={data} />
}

export const Stack100 = (props: any) => (
  <StackedBarChart {...props} data={multipleStackedBarChartData} isStack100 />
)

export const Stack100Scroll: StoryObj<Meta> = {
  render: (props) => (
    <StackedBarChart {...props} data={multipleStackedBarChartData} isStack100 />
  ),
  args: {
    width: 200
  }
}

export const Stack100HorizontalScroll: StoryObj<Meta> = {
  render: (props) => (
    <StackedBarChart {...props} data={multipleStackedBarChartData} isStack100 />
  ),
  args: {
    height: 200,
    horizontal: true
  }
}

export const Color = (props: any) => (
  <StackedBarChart {...props} colors={['#ff0000']} data={multipleStackedBarChartData} />
)

export const ColorInData = (props: any) => (
  <StackedBarChart {...props} data={multipleStackedColorInDataBarChartData} />
)

export const Previous: StoryObj<Meta> = {
  render: (props) => (
    <StackedBarChart {...props} data={currentPreviousStackedBarChartData} />
  ),
  args: {
    width: DEFAULT_CHART_WIDTH * 2
  }
}

export const PreviousScroll = (props: any) => (
  <StackedBarChart {...props} data={currentPreviousStackedBarChartData} />
)

export const PreviousHorizontalScroll: StoryObj<Meta> = {
  render: (props) => (
    <StackedBarChart {...props} data={currentPreviousStackedBarChartData} />
  ),
  args: {
    horizontal: true
  }
}

export const Previous2 = (props: any) => (
  <StackedBarChart {...props} data={currentPreviousStacked2BarChartData} />
)

export const Empty = (props: any) => <StackedBarChart {...props} data={[]} />
