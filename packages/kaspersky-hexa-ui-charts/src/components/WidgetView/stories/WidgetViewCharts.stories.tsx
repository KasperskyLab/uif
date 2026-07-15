import { Meta, StoryObj } from '@storybook/react'
import hoursToMilliseconds from 'date-fns/hoursToMilliseconds'
import React from 'react'
import { action } from 'storybook/actions'

import { BarChart } from '../../../charts/BarChart'
import { stubSingleBarChartData } from '../../../charts/BarChart/stories/barChartStub'
import { CounterChart } from '../../../charts/CounterChart'
import { LineChart } from '../../../charts/LineChart'
import { stubLineChartData } from '../../../charts/LineChart/stories/lineChartStub'
import { PieChart } from '../../../charts/PieChart'
import { pieChartStubExplicitColor } from '../../../charts/PieChart/stories/pieChartStub'
import { SpeedometerChart } from '../../../charts/SpeedometerChart'
import { StackedBarChart } from '../../../charts/StackedBarChart'
import { multipleStackedBarChartDataWithLongText } from '../../../charts/StackedBarChart/stories/stackedBarChartStub'
import { TimelineBarChart } from '../../../charts/TimelineBarChart'
import { singleStackedBarChartData } from '../../../charts/TimelineBarChart/stories/timelineBarChartStub'
import { Legend } from '../../../widgets/Legend'
import { WidgetHeader } from '../components/WidgetHeader'
import { LegendPosition } from '../types'
import { WidgetView } from '../WidgetView'

import { widgetViewArgTypes } from './constants'
import {
  toLegendItemsFromPieData,
  toLegendItemsFromStackedSeries
} from './helpers'

const storyContainerStyle: React.CSSProperties = { width: 980, height: 460 }

const widgetBaseArgs = {
  state: 'ready' as const,
  legendPosition: LegendPosition.RIGHT
}

const meta = {
  title: 'Widget/WidgetView/WithCharts',
  component: WidgetView,
  decorators: [
    (Story) => (
      <div style={storyContainerStyle}>
        <Story />
      </div>
    )
  ],
  args: widgetBaseArgs,
  argTypes: widgetViewArgTypes
} satisfies Meta<typeof WidgetView>

export default meta

type Story = StoryObj<typeof meta>

export const LineChartHorizontalStory: Story = {
  name: 'LineChart Horizontal',
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(stubLineChartData)

    return (
      <WidgetView
        {...args}
        header={<WidgetHeader title="Line chart" />}
        legend={<Legend items={legendItems} widthMode="flex"/>}
      >
        <LineChart
          data={stubLineChartData}
          lineWidth={2}
          pointSize={3}
          gradient
          showTooltip
          onClickData={action('line:onClickData')}
          onHoverData={action('line:onHoverData')}
        />
      </WidgetView>
    )
  }
}

export const LineChartVerticalStory: Story = {
  name: 'LineChart Vertical',
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(stubLineChartData)

    return (
      <WidgetView
        {...args}
        legendPosition={LegendPosition.BOTTOM}
        header={<WidgetHeader title="Line chart" />}
        legend={<Legend items={legendItems} widthMode="flex"/>}
      >
        <LineChart
          data={stubLineChartData}
          lineWidth={2}
          pointSize={3}
          gradient
          showTooltip
          onClickData={action('line:onClickData')}
          onHoverData={action('line:onHoverData')}
        />
      </WidgetView>
    )
  }
}

export const LineChartVerticalWithHorizontalLegendStory: Story = {
  name: 'LineChart Vertical With Horizontal Legend',
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(stubLineChartData)

    return (
      <WidgetView
        {...args}
        legendPosition={LegendPosition.BOTTOM}
        header={<WidgetHeader title="Line chart" />}
        legend={<Legend items={legendItems} widthMode="flex" orientation="horizontal"/>}
      >
        <LineChart
          data={stubLineChartData}
          lineWidth={2}
          pointSize={3}
          gradient
          showTooltip
          onClickData={action('line:onClickData')}
          onHoverData={action('line:onHoverData')}
        />
      </WidgetView>
    )
  }
}

export const PieChartStory: Story = {
  name: 'PieChart',
  render: (args) => {
    const legendItems = toLegendItemsFromPieData(pieChartStubExplicitColor)

    return (
      <WidgetView
        {...args}
        header={<WidgetHeader title="Pie chart" />}
        legend={<Legend items={legendItems} widthMode="flex"/>}
      >
        <PieChart
          data={pieChartStubExplicitColor}
          showTooltip
          onClickData={action('pie:onClickData')}
          onHoverData={action('pie:onHoverData')}
          showTotal
        />
      </WidgetView>
    )
  }
}

export const BarChartStory: Story = {
  name: 'BarChart',
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(stubSingleBarChartData)

    return (
      <WidgetView
        {...args}
        header={<WidgetHeader title="Bar chart" />}
        legend={<Legend items={legendItems} widthMode="flex"/>}
      >
        <BarChart
          data={stubSingleBarChartData}
          showTooltip
          onClickData={action('bar:onClickData')}
          onHoverData={action('bar:onHoverData')}
        />
      </WidgetView>
    )
  }
}

export const StackedBarChartStory: Story = {
  name: 'StackedBarChart',
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(
      multipleStackedBarChartDataWithLongText
    )

    return (
      <WidgetView
        {...args}
        header={<WidgetHeader title="Stacked bar chart" />}
        legend={<Legend items={legendItems} widthMode="flex"/>}
      >
        <StackedBarChart
          minTickLabel={{ y: 5, xHorizontal: 3, xVertical: 7 }}
          data={multipleStackedBarChartDataWithLongText}
          showTooltip
          otherLabel="Others"
        />
      </WidgetView>
    )
  }
}

export const TimelineBarChartStory: Story = {
  name: 'TimelineBarChart',
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(
      singleStackedBarChartData
    )

    return (
      <WidgetView
        {...args}
        header={<WidgetHeader title="Timeline bar chart" />}
        legend={<Legend items={legendItems} widthMode="flex"/>}
      >
        <TimelineBarChart
          data={singleStackedBarChartData}
          timeScaleInterval={hoursToMilliseconds(24)}
          showTooltip
          onClickData={action('timeline:onClickData')}
          onHoverData={action('timeline:onHoverData')}
        />
      </WidgetView>
    )
  }
}

export const SpeedometerChartStory: Story = {
  name: 'SpeedometerChart',
  parameters: {
    visual: {
      delayMs: 3000
    }
  },
  render: (args) => {
    const value = 5
    const segments = [0, 2, 4, 6, 8, 10]

    return (
      <WidgetView {...args} header={<WidgetHeader title="Speedometer" />}>
        <SpeedometerChart
          value={value}
          segments={segments}
          labelDescription="SomeDescription"
        />
      </WidgetView>
    )
  }
}

export const CounterChartStory: Story = {
  name: 'CounterChart',
  render: (args) => {
    const data = {
      metric: 'description',
      value: 551,
      previousValue: 442
    }

    return (
      <WidgetView {...args} header={<WidgetHeader title="Counter" />}>
        <CounterChart data={data} biggerBetter />
      </WidgetView>
    )
  }
}
