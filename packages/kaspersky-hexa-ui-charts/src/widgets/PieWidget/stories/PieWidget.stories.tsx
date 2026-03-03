import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { legendItems } from '../../Legend/stories/legendItemsStub'
import { PieWidget } from '../PieWidget'

import { pieChartStub } from './pieChartStub'

const meta: Meta<typeof PieWidget> = {
  title: 'Widget/PieWidget',
  component: PieWidget,
  args: {
    title: 'Protection status of devices',
    widgetLink: {
      clickHandler: () => console.log('click'),
      text: 'View the list of devices'
    },
    data: pieChartStub,
    legend: legendItems,
    description: 'Description text',
    showTotal: true,
    onClick: action('onClick'),
    onHover: action('onHover')
  }
}

export default meta

type Story = StoryObj<any>

export const Default = (args: any) => {
  return (
    <PieWidget<[string, string]> {...args} showTotal={true} />
  )
}
