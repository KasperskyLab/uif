import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Link } from '@src/link'
import { Meta } from '@storybook/react'
import React, { ReactNode } from 'react'

import { ITableProps, Table } from '../'
import MetaData from '../__meta__/meta.json'

import { basicArgTypes, BasicTableStory, basicTreeDataSource, basicTwoColumns, genArgType, patchKeys, Story } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Search',
  component: Table,
  args: {
    toolbar: { showSearch: true },
    columns: basicTwoColumns,
    dataSource: patchKeys(basicTreeDataSource),
    enableSearchHighlighting: true
  },
  argTypes: {
    toolbar: genArgType('You need to set "{ showSearch: true }" to enable the search'),
    enableSearchHighlighting: basicArgTypes.enableSearchHighlighting
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['dataSource', 'columns']
    }
  }
}
export default meta

export const Search: Story = { render: BasicTableStory.bind({}) }

export const SearchInRender: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns: [
      {
        ...basicTwoColumns[0],
        render: (data: ReactNode) => ({
          children: <b>{data} in jsx</b>,
          props: {}
        })
      },
      {
        ...basicTwoColumns[0],
        render: (data: ReactNode) => ({
          children: <>
            <span dangerouslySetInnerHTML={{ __html: '<a href="">Text in jsx</a>' }} />
            <b> {data}</b>
          </>,
          props: {}
        })
      },
      {
        ...basicTwoColumns[1],
        render: (data: ReactNode) => <Link href="#" >Link: {data}</Link>
      }
    ]
  },
  argTypes: { filterItems: basicArgTypes.filterItems }
}
