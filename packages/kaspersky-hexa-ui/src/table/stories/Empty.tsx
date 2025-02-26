import { Button } from '@src/button'
import { H6, P } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

import { Table } from '..'
import { ITableProps } from '../types'

import { basicArgTypes, genArgType, Story, Wrapper } from './_commonConstants'

const StyledEmptyTextWrapper = styled.div`
  padding: 20px;
  p {
    margin: 10px;
  }
`

const customEmptyText = () => (
  <StyledEmptyTextWrapper>
    <H6>Time-consuming operation</H6>
    <P>The operation of retrieving the events may take a long time.</P>
    <P>Please click the button below to start.</P>
    <Button>Retrieve latest events</Button>
  </StyledEmptyTextWrapper>
)

export const EmptyText: Story = {
  render: (args: ITableProps) => (
    <Wrapper>
      <h2>Default empty message</h2>
      <Table {...args} />
      <h2>Custom empty message</h2>
      <Table {...args} emptyText={customEmptyText} />
    </Wrapper>
  ),
  args: {
    dataSource: [],
    pagination: false
  },
  argTypes: {
    emptyText: basicArgTypes.emptyText,
    dataSource: genArgType('Empty text is shown when dataSource contains nothing')
  },
  parameters: { controls: { exclude: ['pagination', 'columns'] } }
}
