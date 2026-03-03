
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { legendItems } from '../../Legend/stories/legendItemsStub'
import { SummaryWidget } from '../SummaryWidget'

import { stubLineChartSingle } from './lineChartStub'
import { pieChartStub } from './pieChartStub'

const meta: Meta<typeof SummaryWidget> = {
  title: 'Widget/SummaryWidget',
  component: SummaryWidget,
  args: {
    titlePie: 'Protection status of devices',
    titleLine: 'Detection of threats durning last 7 days',
    dataPie: pieChartStub,
    dataLine: stubLineChartSingle,
    legend: legendItems,
    onClick: action('onClick'),
    onHover: action('onHover')
  }
}

export default meta

type Story = StoryObj<any>

export const Default = (args: any) => {
  return (
    <SummaryWidget<[string, string]> {...args} />
  )
}
