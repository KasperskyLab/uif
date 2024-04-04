import React from 'react'
import { ITableProps } from '../types'
import { Table } from '..'
import { Button } from '@src/button'
import { P, H6 } from '@src/typography'
import styled from 'styled-components'
import { basicArgTypes, genArgType, Wrapper, Story } from './_commonConstants'

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
