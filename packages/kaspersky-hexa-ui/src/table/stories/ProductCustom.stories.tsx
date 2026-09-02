import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta } from '@storybook/react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'

import { basicDataSource, basicTwoColumns } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/[Custom product tables]',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource
  },
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    },
    controls: {
      exclude: ['dataSource', 'columns']
    }
  },
  tags: ['!autodocs']
}
export default meta

export { KesTable } from './KesTable'
export { PolicyTable, WithLateDataSource } from './PolicyTable'
