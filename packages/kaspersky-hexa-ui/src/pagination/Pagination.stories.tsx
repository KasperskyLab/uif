import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

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
  title: 'Hexa UI Components/Pagination',
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

export const HideOnSinglePage: Story = {
  render: PaginationTemplate.bind({}),
  args: {
    total: 5,
    hideOnSinglePage: true
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.pagination },
  render: args => <ThemedPalette {...args} />
}
