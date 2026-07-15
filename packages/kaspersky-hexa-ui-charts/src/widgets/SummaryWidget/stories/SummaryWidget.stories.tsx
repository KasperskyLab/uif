import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { action } from 'storybook/actions'

import { legendItems } from '../../Legend/stories/legendItemsStub'
import MetaData from '../__meta__/meta.json'
import { SummaryWidget } from '../SummaryWidget'

import { stubLineChartSingle } from './lineChartStub'
import { pieChartStub } from './pieChartStub'

const meta = {
  title: 'Widget/SummaryWidget',
  component: SummaryWidget,
  args: {
    titlePie: 'Protection status of devices',
    titleLine: 'Detection of threats durning last 7 days',
    pieWidgetLink: {
      clickHandler: () => console.log('click'),
      text: 'View the list of devices'
    },
    lineWidgetLink: {
      clickHandler: () => console.log('click threats'),
      text: 'View the list of threats'
    },
    pieChartProps: {
      data: pieChartStub,
      onClickData: action('onPieChartClick')
    },
    lineChartProps: {
      data: stubLineChartSingle,
      onClickData: action('onLineChartClick')
    },
    legendProps: {
      items: legendItems
    }
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<typeof SummaryWidget>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {}