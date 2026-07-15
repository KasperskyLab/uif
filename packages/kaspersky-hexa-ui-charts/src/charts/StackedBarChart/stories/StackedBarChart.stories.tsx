import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { useTheme } from '@kaspersky/hexa-ui/design-system'

import { generateData } from '../../../../.storybook/data'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import { defaultAddColorToData } from '../../../helpers/defaultAddColorToData'
import { getChartTheme } from '../../../hooks/useChartTheme'
import MetaData from '../__meta__/meta.json'
import { StackedBarChart } from '../components/StackedBarChart'

import {
  groupStackedBarChartData,
  multipleCornerRadiusStackedBarChartData,
  multipleStackedBarChartData,
  multipleStackedBarChartDataWithLongText,
  multipleStackedBarChartDataWithShortText,
  multipleStackedColorInDataBarChartData,
  singleStackedBarChartData,
  yLess1StackedBarChartData
} from './stackedBarChartStub'

const meta = {
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
    stack100Precision: { control: 'number' },
    yMin: { control: { type: 'range', min: 0, max: 1000, step: 10 } },
    yMax: { control: { type: 'range', min: 0, max: 1000, step: 10 } },
    otherLabel: { control: 'text' },
    totalLabel: { control: 'text' }
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<typeof StackedBarChart>

export default meta
type Story = StoryObj<typeof meta>

const groupStackedBarChartData2 = groupStackedBarChartData.map((d) => ({
  ...d,
  data: d.data.slice(0, 2)
}))

const multipleStackedBarChartData2 = multipleStackedBarChartData.map((d) => ({
  ...d,
  data: d.data.slice(0, 2)
}))

const exampleData = generateData(15)

export const Single: Story = {
  args: {
    data: singleStackedBarChartData
  }
}

export const Default: Story = {
  args: {
    data: multipleStackedBarChartData
  }
}

export const CornerRadius: Story = {
  args: {
    data: multipleCornerRadiusStackedBarChartData
  }
}

export const CornerRadiusHorizontal: Story = {
  args: {
    data: multipleCornerRadiusStackedBarChartData,
    horizontal: true
  }
}

export const xTickHide: Story = {
  args: {
    data: multipleStackedBarChartData,
    xTickHide: true
  }
}

export const yTickHide: Story = {
  args: {
    data: multipleStackedBarChartData,
    yTickHide: true
  }
}

export const DataBigger10: Story = {
  args: {
    data: exampleData
  }
}

export const WithoutTooltip: Story = {
  args: {
    showTooltip: false,
    data: multipleStackedBarChartData
  }
}

export const YLess1: Story = {
  args: {
    data: yLess1StackedBarChartData
  }
}

export const Default2: Story = {
  args: {
    data: multipleStackedBarChartData2
  }
}

export const MinMax: Story = {
  args: {
    yMax: 20,
    data: multipleStackedBarChartData
  }
}

export const MinMaxHorizontal: Story = {
  args: {
    yMax: 20,
    horizontal: true,
    data: multipleStackedBarChartData
  }
}

export const WithShortText: Story = {
  args: {
    data: multipleStackedBarChartDataWithShortText
  }
}

export const WithLongText: Story = {
  args: {
    data: multipleStackedBarChartDataWithLongText
  }
}

export const Horizontal: Story = {
  args: {
    horizontal: true,
    data: multipleStackedBarChartData
  }
}

export const HorizontalScroll: Story = {
  args: {
    height: 200,
    horizontal: true,
    data: multipleStackedBarChartData
  }
}

export const Scroll: Story = {
  args: {
    width: 200,
    data: multipleStackedBarChartData
  }
}

export const ScrollWithLongText: Story = {
  args: {
    width: 200,
    data: multipleStackedBarChartDataWithLongText
  }
}

export const HorizontalWithLongText: Story = {
  args: {
    horizontal: true,
    data: multipleStackedBarChartDataWithLongText
  }
}

// @ts-expect-error - we getting data from hook in render, so we don't need to set data prop here
export const ColorFromTheme: Story = {
  render: (args) => {
    const theme = useTheme()
    const chartTheme = getChartTheme(theme)
    const data = defaultAddColorToData(multipleStackedBarChartData, chartTheme)

    return <StackedBarChart {...args} data={data} />
  }
}

export const Stack100: Story = {
  args: {
    data: multipleStackedBarChartData,
    isStack100: true
  }
}

export const Stack100Scroll: Story = {
  args: {
    width: 200,
    data: multipleStackedBarChartData,
    isStack100: true
  }
}

export const Stack100HorizontalScroll: Story = {
  args: {
    height: 200,
    horizontal: true,
    isStack100: true,
    data: multipleStackedBarChartData
  }
}

export const Color: Story = {
  args: {
    data: multipleStackedBarChartData,
    colors: ['#ff0000']
  }
}

export const ColorInData: Story = {
  args: {
    data: multipleStackedColorInDataBarChartData
  }
}

export const Group: Story = {
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    data: groupStackedBarChartData
  }
}

export const GroupScroll: Story = {
  args: {
    data: groupStackedBarChartData
  }
}

export const GroupHorizontalScroll: Story = {
  args: {
    horizontal: true,
    data: groupStackedBarChartData
  }
}

export const Group2: Story = {
  args: {
    data: groupStackedBarChartData2
  }
}

export const Empty: Story = {
  args: {
    data: []
  }
}
