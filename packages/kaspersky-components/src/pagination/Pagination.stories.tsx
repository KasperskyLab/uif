import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from './__meta__/meta.json'
import { Pagination } from './Pagination'
import { PaginationProps } from './types'

const Wrapper = styled.div`
  width: 90vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: end;
`

const meta: Meta<PaginationProps> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    total: 500,
    disabled: false,
    simple: false,
    showSizeChanger: false,
    current: 1,
    pageSize: 10,
    pageSizeOptions: ['10', '20', '50', '100'],
    hideOnSinglePage: false,
    selected: 25,
    testId: 'pagination-test-id',
    klId: 'pagination-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context}/>
      </Wrapper>
    )
  ]
}
export default meta

type Story = StoryObj<PaginationProps>

const PaginationTemplate = ({
  current: currentFromProps,
  pageSize: pageSizeFromProps,
  ...rest
}: PaginationProps) => {
  const [pageSize, setPageSize] = useState(pageSizeFromProps)
  const [current, setCurrent] = useState(currentFromProps)
  const clb = (page: number, pageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(pageSize))
  }
  return (
    <Pagination
      {...rest}
      pageSize={pageSize}
      current={current}
      onChange={clb}
      onShowSizeChange={clb}
    />
  )
}

export const Basic: Story = {
  render: PaginationTemplate.bind({})
}

export const Simple: Story = {
  render: PaginationTemplate.bind({}),
  args: {
    simple: true
  }
}

export const WithSizeChanger: Story = {
  render: PaginationTemplate.bind({}),
  args: {
    showSizeChanger: true
  }
}

export const Disabled: Story = {
  render: PaginationTemplate.bind({}),
  args: {
    showSizeChanger: true,
    disabled: true
  }
}
