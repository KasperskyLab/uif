import React from 'react'

import { CustomFormats } from '../customTypes'
import { ElementPluginType } from '../types'

export const ListItemPlugin: ElementPluginType = {
  elementType: CustomFormats.LIST_ITEM,
  icon: 'none',
  render: ({ attributes, children }) => (
    <li {...attributes}>
      {children}
    </li>
  )
}

export default [ListItemPlugin]
