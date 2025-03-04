import React from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { basicDataSource, BasicTableStory, basicTwoColumns, Story } from './_commonConstants'

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`

export const WithIconColumn: Story = {
  render: BasicTableStory.bind({}),
  args: {
    dataSource: basicDataSource.map((row) => ({ ...row, icon: <IconWrapper><Placeholder /></IconWrapper> })),
    columns: [
      ...basicTwoColumns,
      {
        title: 'Icon',
        key: 'icon',
        dataIndex: 'icon'
      }
    ]
  }
}
