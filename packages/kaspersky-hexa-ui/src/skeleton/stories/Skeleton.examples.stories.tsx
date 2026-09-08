import { Size as SizeType } from '@design-system/types'
import { renderVariants } from '@sb/StoryComponents'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Skeleton, SkeletonTemplate } from '../Skeleton'
import { SkeletonProps, skeletonSizes } from '../types'
import { skeletonStorySettings } from './Skeleton.stories'

const meta: Meta<typeof Skeleton> = {
  title: 'Hexa UI Components/Skeleton/Stories',
  component: Skeleton,
  tags: ['!autodocs'],
  ...skeletonStorySettings
}

export default meta

type Story = StoryObj<SkeletonProps>

export const Basic: Story = {
  render: (args) => (
    <Skeleton
      {...args}
      style={args.size === 'flex' ? { height: 120, width: 640 } : {}}
    />
  )
}

export const Sizes: Story = {
  render: (args) => renderVariants(
    skeletonSizes.map(size => ({
      label: size,
      content: (
        <Skeleton
          {...args}
          size={size}
          style={size === 'flex' ? { height: 120, width: 640 } : {}}
        />
      )
    })),
    true
  ),
  args: {
    flexWidth: false
  }
}

export const TemplateTitle: Story = {
  render: () => (
    <SkeletonTemplate>
      <Skeleton size={SizeType.Medium} />
      <Skeleton size={SizeType.Small} />
    </SkeletonTemplate>
  )
}

export const TemplateForm: Story = {
  render: () => (
    <SkeletonTemplate>
      <Skeleton size={SizeType.Medium} />
      <Skeleton size={SizeType.Small} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Medium} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Medium} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
      <Skeleton size={SizeType.Large} flexWidth={true} />
    </SkeletonTemplate>
  )
}

export const TemplateWidget: Story = {
  render: () => (
    <SkeletonTemplate style={{ width: 568 }}>
      <Space gap={16} direction="vertical">
        <Skeleton size="flex" style={{ height: 188 }} />
        <Space gap={8}>
          <Skeleton size="flex" style={{ height: 20, width: 80 }} />
          <Skeleton size="flex" style={{ height: 20, width: 80 }} />
          <Skeleton size="flex" style={{ height: 20, width: 80 }} />
          <Skeleton size="flex" style={{ height: 20, width: 80 }} />
        </Space>
      </Space>
    </SkeletonTemplate>
  )
}

export const TemplateTable: Story = {
  render: () => (
    <SkeletonTemplate style={{ width: 1018 }}>
      <Space gap={8} direction="vertical">
        {[...Array(12).keys()].map(row => (
          <Space gap={8} wrap="nowrap" key={`skeleton-table-row-${row}`}>
            {[...Array(5).keys()].map(cell => (
              <Skeleton
                size={SizeType.Large}
                flexWidth={true}
                key={`skeleton-table-cell-${row}${cell}`}
                style={cell === 0 ? { width: 20, flex: 'none' } : {}}
              />
            ))}
          </Space>
        ))}
      </Space>
    </SkeletonTemplate>
  )
}
