import { Size as SizeType } from '@design-system/types'
import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Skeleton as SkeletonComponent, SkeletonTemplate } from '../Skeleton'
import { SkeletonProps } from '../types'

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
  title: 'Hexa UI Components/Skeleton/Templates',
  component: SkeletonComponent,
  ...withDesignControls<SkeletonProps>({
    componentName: 'skeleton',
    meta: storySettings
  })
}

export default meta

type Story = StoryObj<SkeletonProps>

export const SkeletonTemplateTitle = {
  parameters: {
    title: 'Hexa UI Components/Skeleton/Template/Title'
  },
  render: () => (
    <SkeletonTemplate>
      <SkeletonComponent size={SizeType.Medium} />
      <SkeletonComponent size={SizeType.Small}/>
    </SkeletonTemplate>
  ),
  argTypes: {},
  args: {}
}

export const SkeletonTemplateForm = {
  render: () => (
    <SkeletonTemplate>
      <SkeletonComponent size={SizeType.Medium}/>
      <SkeletonComponent size={SizeType.Small}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
      <SkeletonComponent size={SizeType.Medium}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
      <SkeletonComponent size={SizeType.Medium}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
      <SkeletonComponent size={SizeType.Large} flexWidth={true}/>
    </SkeletonTemplate>
  ),
  argTypes: {},
  args: {}
}

export const SkeletonTemplateWidget = {
  render: () => (
    <SkeletonTemplate style={ { width: 568 } }>
      <Space gap={16} direction="vertical">
        <SkeletonComponent size="flex" style={ { height: 188 } }/>
        <Space gap={8}>
          <SkeletonComponent size="flex" style={ { height: 20, width: 80 } }/>
          <SkeletonComponent size="flex" style={ { height: 20, width: 80 } }/>
          <SkeletonComponent size="flex" style={ { height: 20, width: 80 } }/>
          <SkeletonComponent size="flex" style={ { height: 20, width: 80 } }/>
        </Space>
      </Space>

    </SkeletonTemplate>
  ),
  argTypes: {},
  args: {}
}

export const SkeletonTemplateTable = {
  render: () => (
    <SkeletonTemplate style={ { width: 1018 } }>
      <Space gap={8} direction="vertical">
        {
          [...Array(12).keys()].map(row => {
            return <Space gap={8} wrap="nowrap" key={`skeleton-table-row-${row}`}>
              {
                [...Array(5).keys()].map(cell => {
                  return <SkeletonComponent
                    size={SizeType.Large}
                    flexWidth={true}
                    key={`skeleton-table-cell-${row}${cell}`}
                    style={ cell === 0
                      ? { width: 20, flex: 'none' }
                      : {}
                    }
                  />
                })
              }
            </Space>
          })
        }
      </Space>
    </SkeletonTemplate>
  ),
  argTypes: {},
  args: {}
}
