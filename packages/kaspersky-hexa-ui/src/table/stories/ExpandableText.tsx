import React from 'react'

import { basicDataSource, BasicTableStory, basicTwoColumns, genArgType, Story } from './_commonConstants'

const MOCK_LONG_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'

const columns = [
  {
    ...basicTwoColumns[0],
    title: MOCK_LONG_TEXT,
    expandableText: true,
    render: () =>{
      return (
        <div> 
          By default it is cut off at 3 points and shows the tooltip, but if expandableText is true this behavior will occur 
        </div>
      )
    }
  },
  {
    ...basicTwoColumns[1],
    expandableText: true
  }
]

export const ExpandableText: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns,
    dataSource: basicDataSource.slice(0, 20).map(({ name, ...rest }) => ({
      ...rest,
      name: MOCK_LONG_TEXT,
      description: MOCK_LONG_TEXT
    }))
  },
  argTypes: {
    columns: genArgType('columns[n].ellipsis = true - collapses long labels and shows tooltip with full text on hover')
  },
  parameters: { controls: { exclude: ['dataSource'] } }
}
