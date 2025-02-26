import { withMeta } from '@sb/components/Meta'
import { StoryObj } from '@storybook/react'
import { Table as AntTable } from 'antd'

import MetaData from '../__meta__/meta.json'
import { marginsData, paddingData, gapData, columns } from '../data'

const meta = {
  title: 'Design/Sizing & Spacing',
  args: {
    columns: columns,
    pagination: false
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    },
    controls: { exclude: /.*/g }
  },
  component: AntTable
}
export default meta

type Story = StoryObj<typeof AntTable>

export const Margin: Story = {
  args: {
    dataSource: marginsData
  },
  name: 'Margins (outer)'
}

export const Padding: Story = {
  args: {
    dataSource: paddingData
  }
}

export const Gap: Story = {
  args: {
    dataSource: gapData
  },
  name: 'Gap (inner)'
}
