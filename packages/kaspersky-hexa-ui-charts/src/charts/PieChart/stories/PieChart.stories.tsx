
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React, { useMemo } from 'react'

import { Space } from '@kaspersky/hexa-ui'

import { PieChart } from '..'
import { useActiveDataPoints } from '../../../widgets/hooks/useActiveDataPoints'

import { pieChartStubAllColors, pieChartStubExplicitColor, pieChartStubImplicitColor } from './pieChartStub'

const meta: Meta<typeof PieChart> = {
  title: 'Charts/PieChart',
  component: PieChart,
  args: {
    data: pieChartStubExplicitColor,
    onClickData: action('onClickData'),
    onHoverData: action('onHoverData')
  }
}

export default meta

type Story = StoryObj<any>

export const Default = (args: any) => {
  const sizes = [180, 260, 320]

  return (
    <Space gap={16}>
      {sizes.map((size, index) => {
        return (
          <div key={index} style={{ width: size, height: size }}>
            <PieChart<[string, string]> {...args} data={pieChartStubImplicitColor} width={size} height={size} />
          </div>
        )
      })}
    </Space>
  )
}

export const AllColors = (args: any) => (
  <div style={{ width: 260, height: 260 }}>
    <PieChart<[string, string]> {...args} data={pieChartStubAllColors} width={260} height={260} tooltip />
  </div>
)

export const WithTooltip = (args: any) => {
  const sizes = [180, 260, 320]

  return (
    <Space gap={16}>
      {sizes.map((size, index) => {
        return (
          <div key={index} style={{ width: size, height: size }}>
            <PieChart<[string, string]> {...args} data={pieChartStubExplicitColor} width={size} height={size} showTooltip />
          </div>
        )
      })}
    </Space>
  )
}

export const WithTotal = (args: any) => (
  <div style={{ width: 180, height: 180 }}>
    <PieChart<[string, string]> {...args} data={pieChartStubExplicitColor} width={180} height={180} showTotal />
  </div>
)

export const WithOutterState = (args: any) => {
  const { widgetData, updateActiveSlice } = useActiveDataPoints(pieChartStubExplicitColor)

  return <div style={{ width: 180, height: 180 }}>
    <PieChart<[string, string]> {...args} standalone={false} data={widgetData} width={180} height={180} showTotal onHoverData={(_, payload) => {
      updateActiveSlice(payload)
    }} onLeaveData={() => {
      updateActiveSlice(undefined)
    }} />
  </div>
}

export const WithExplicitActiveSlice = (args: any) => {
  const dataWithActive = useMemo(() => {
    return pieChartStubExplicitColor.map((record, index) => {
      return {
        ...record,
        active: index === 2
      }
    })
  }, [pieChartStubExplicitColor])
  return <div style={{ width: 180, height: 180 }}>
    <PieChart<[string, string]> {...args} standalone={false} data={dataWithActive} width={180} height={180} showTotal />
  </div>
}
