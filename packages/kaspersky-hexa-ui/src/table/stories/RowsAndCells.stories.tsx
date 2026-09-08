import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta } from '@storybook/react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'

import { basicDataSource, basicTwoColumns } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Rows and cells',
  component: Table,
  args: {
    columns: basicTwoColumns,
    dataSource: basicDataSource,
    borderedStyle: false
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

export { BgPattern } from './BgPattern'
export { CellWithTable } from './CellWithTable'
export { EmptyCellDash } from './EmptyCellDash'
export { TagGroupCell } from './TagGroupCell'
export { OnHoverContent } from './OnHoverContent'
export { RowAccordion } from './RowAccordion'
export { WithIconColumn } from './WithIconColumn'
