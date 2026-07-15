import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { action } from 'storybook/actions'

import { IChartDataPoint } from '../../../types/chartData'
import { TLegendItemRow } from '../../Legend'
import MetaData from '../__meta__/meta.json'
import { PieWidget } from '../PieWidget'

import { extendedPieChartStub, getLegendData, pieChartStub } from './pieChartStub'

const meta = {
  title: 'Widget/PieWidget',
  component: PieWidget,
  args: {
    title: 'Protection status of devices',
    widgetLink: {
      clickHandler: () => console.log('click'),
      text: 'View the list of devices'
    },
    data: pieChartStub,
    onClickData: action('onClickData'),
    onHoverData: action('onHoverData'),
    onLeaveData: action('onLeaveData'),
    onMoveData: action('onMoveData'),
    legendProps: {
      description: 'Description text',
      items: getLegendData(pieChartStub),
      totalLabel: 'Total'
    },
    showTotal: true
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<typeof PieWidget>

export default meta

type Story = StoryObj<typeof meta>;

const renderPieWidget = (args: Story['args']) => {
  if (!args?.legendProps || !args?.data) {
    return null
  }

  const matchLegendToDataPoint = (legendItem: TLegendItemRow<IChartDataPoint>, pieData: IChartDataPoint[]) => {
    return pieData.find(data => (data.metric === legendItem.payload?.metric))
  }
  return <PieWidget {...args} legendProps={args.legendProps} data={args?.data} matchLegendToDataPoint={matchLegendToDataPoint} />
}

export const Default: Story = {
  render: renderPieWidget
}

export const WithScroll: Story = {
  args: {
    data: extendedPieChartStub,
    legendProps: {
      description: '',
      items: getLegendData(extendedPieChartStub),
      totalLabel: 'Total'
    }
  },
  render: renderPieWidget
}