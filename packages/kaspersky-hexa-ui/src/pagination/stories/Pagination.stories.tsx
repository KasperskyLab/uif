import { badges } from '@sb/badges'
import {
  buildStoryArgTypes,
  getControlsInclude
} from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { Pagination } from '../Pagination'
import { PaginationProps } from '../types'

import { defaultArgs, paginationPropPresentation } from './Pagination.controls'

const Wrapper = styled.div`
  width: 90vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: end;
`

export const paginationStorySettings: Meta<PaginationProps> = {
  argTypes: buildStoryArgTypes(paginationPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

const meta: Meta<PaginationProps> = {
  title: 'Hexa UI Components/Pagination',
  component: Pagination,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['paginationStorySettings', 'PaginationTemplate'],
  ...paginationStorySettings
}

export default meta

type Story = StoryObj<PaginationProps>

export const PaginationTemplate = ({
  current: currentFromProps,
  pageSize: pageSizeFromProps,
  ...rest
}: PaginationProps) => {
  const [pageSize, setPageSize] = useState(pageSizeFromProps)
  const [current, setCurrent] = useState(currentFromProps)

  const onPageChange = (page: number, nextPageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(nextPageSize))
  }

  return (
    <Pagination
      {...rest}
      pageSize={pageSize}
      current={current}
      onChange={onPageChange}
      onShowSizeChange={onPageChange}
    />
  )
}

export const Playground: Story = {
  render: PaginationTemplate,
  parameters: {
    controls: {
      include: getControlsInclude(paginationPropPresentation),
      sort: 'none'
    }
  }
}
