import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta } from '@storybook/react'

import { Table } from '..'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'
import { WithContextMenu as WithContextMenuStory } from './WithContextMenu'
import { WithContextMenuOnLink as WithContextMenuOnLinkStory } from './WithContextMenuOnLink'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Context menu',
  component: Table,
  parameters: {
    badges: [badges.stable],
    docs: {
      page: withMeta(MetaData)
    }
  },
  tags: ['!autodocs']
}
export default meta

export const WithContextMenu = {
  ...WithContextMenuStory,
  name: 'Context menu in a row'
}

export const WithContextMenuOnLink = {
  ...WithContextMenuOnLinkStory,
  name: 'Context menu on a cell link'
}
