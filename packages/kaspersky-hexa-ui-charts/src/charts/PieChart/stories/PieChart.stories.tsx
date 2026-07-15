import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { action } from 'storybook/actions'

import { Space, Text } from '@kaspersky/hexa-ui'

import { PieChart } from '..'
import { useActiveDataPoints } from '../../../widgets/hooks/useActiveDataPoints'
import MetaData from '../__meta__/meta.json'
import { PIE_CHART_SIZE_CONFIG } from '../constants'

import { pieChartStubAllColors, pieChartStubExplicitColor, pieChartStubImplicitColor } from './pieChartStub'

const chartSizes = Object.keys(PIE_CHART_SIZE_CONFIG) as Array<keyof typeof PIE_CHART_SIZE_CONFIG>
const resizableContainerMinSize = 72
const resizableContainerMaxSize = 220
const resizableContainerInitialSize = 180

const ResizablePieChart = (args: React.ComponentProps<typeof PieChart>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState(resizableContainerInitialSize)
  const [chartSize, setChartSize] = useState(resizableContainerInitialSize)

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const updateChartSize = () => {
      const { width, height } = container.getBoundingClientRect()

      setChartSize(Math.round(Math.min(width, height)))
    }

    updateChartSize()

    const resizeObserver = new ResizeObserver(updateChartSize)
    resizeObserver.observe(container)

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <Space gap={16} direction="vertical">
      <Text>
        Container size: {containerSize}px
        <input
          min={resizableContainerMinSize}
          max={resizableContainerMaxSize}
          type="range"
          value={containerSize}
          onChange={(event) => setContainerSize(Number(event.target.value))}
          style={{ display: 'block', width: resizableContainerMaxSize }}
        />
      </Text>
      <div
        ref={containerRef}
        style={{
          width: containerSize,
          height: containerSize,
          minWidth: resizableContainerMinSize,
          minHeight: resizableContainerMinSize,
          maxWidth: resizableContainerMaxSize,
          maxHeight: resizableContainerMaxSize,
          overflow: 'visible',
          outline: '1px dashed var(--color--neutral400)'
        }}
      >
        <PieChart {...args} width={chartSize} height={chartSize} />
      </div>
    </Space>
  )
}

const meta = {
  title: 'Charts/PieChart',
  component: PieChart,
  args: {
    data: pieChartStubExplicitColor,
    onClickData: action('onClickData'),
    onHoverData: action('onHoverData')
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: chartSizes
    }
  }
} satisfies Meta<typeof PieChart<[string, string]>>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: pieChartStubImplicitColor
  },
  render: (args) => (
    <Space gap={16}>
      {chartSizes.map((size) => {
        return (
          <div
            key={size}
            style={{ width: PIE_CHART_SIZE_CONFIG[size].dimension, height: PIE_CHART_SIZE_CONFIG[size].dimension }}
          >
            <PieChart {...args} size={size} />
          </div>
        )
      })}
    </Space>
  )
}

export const AllColors: Story = {
  args: {
    data: pieChartStubAllColors,
    showTooltip: true,
    width: 260,
    height: 260
  },

  render: (args) => (
    <div style={{ width: args.width, height: args.height }}>
      <PieChart {...args} />
    </div>
  )
}

export const WithTooltip: Story = {
  args: {
    data: pieChartStubExplicitColor,
    showTooltip: true,
    size: 'medium'
  },
  render: (args) => (
    <Space gap={16}>
      {chartSizes.map((size) => {
        return (
          <div
            key={size}
            style={{ width: PIE_CHART_SIZE_CONFIG[size].dimension, height: PIE_CHART_SIZE_CONFIG[size].dimension }}
          >
            <PieChart {...args} size={size} />
          </div>
        )
      })}
    </Space>
  )
}

export const ResizableContainer: Story = {
  args: {
    data: pieChartStubExplicitColor,
    showTotal: true
  },
  render: (args) => <ResizablePieChart {...args} />
}

export const WithTotal: Story = {
  args: {
    data: pieChartStubExplicitColor,
    showTotal: true,
    width: 180,
    height: 180,
    size: 'large'
  },
  render: (args) => (
    <div style={{ width: args.width, height: args.height }}>
      <PieChart {...args} />
    </div>
  )
}

export const WithOutterState: Story = {
  args: {
    standalone: false,
    showTotal: true,
    width: 180,
    height: 180
  },
  render: (args) => {
    const { widgetData, updateActiveSlice } = useActiveDataPoints(pieChartStubExplicitColor)
    return (
      <div style={{ width: args.width, height: args.height }}>
        <PieChart
          {...args}
          data={widgetData}
          onHoverData={(_, payload) => {
            if (payload) updateActiveSlice(payload)
          }}
          onLeaveData={() => updateActiveSlice(undefined)}
        />
      </div>
    )
  }
}

export const WithExplicitActiveSlice: Story = {
  args: {
    standalone: false,
    showTotal: true,
    width: 180,
    height: 180
  },
  render: (args) => {
    const dataWithActive = useMemo(() => {
      return pieChartStubExplicitColor.map((record, index) => {
        return {
          ...record,
          active: index === 2
        }
      })
    }, [pieChartStubExplicitColor])

    return (
      <div style={{ width: args.width, height: args.height }}>
        <PieChart {...args} data={dataWithActive} />
      </div>
    )
  }
}
