import { Size as SizeType } from '@design-system/types'
import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Skeleton as SkeletonComponent } from '../Skeleton'
import { SkeletonProps, skeletonSizes } from '../types'

const storySettings: Meta<SkeletonProps> = {
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: /(tooltip)/
    },
    design: MetaData.pixsoView
  }
}

const meta: Meta<SkeletonProps> = {
  title: 'Hexa UI Components/Skeleton',
  component: SkeletonComponent,
  ...withDesignControls<SkeletonProps>({
    componentName: 'skeleton',
    meta: storySettings
  })
}

export default meta

type Story = StoryObj<SkeletonProps>

export const Skeleton: Story = {
  render: ({
    ...rest
  }: SkeletonProps) => (
    <SkeletonComponent
      {...rest}
      style={
        rest.size === 'flex'
          ? { height: 120, width: 640 }
          : {}
      }
    />
  ),
  argTypes: {
    size: {
      options: skeletonSizes,
      control: { type: 'select' }
    },
    flexWidth: {
      control: { type: 'boolean' }
    }
  },
  args: {
    flexWidth: false,
    size: SizeType.Medium
  }
}

export const Size = {
  render: ({
    ...rest
  }: SkeletonProps) => (
    renderVariants(
      skeletonSizes.map(size => ({
        label: size,
        content:
          <SkeletonComponent
            {...rest}
            size={size}
            style={ size === 'flex'
              ? { height: 120, width: 640 }
              : {}
            }
          />
      })),
      true
    )
  ),
  argTypes: {
    flexWidth: {
      control: { type: 'boolean' }
    },
    size: { control: false }
  },
  args: {
    flexWidth: false
  }
}
