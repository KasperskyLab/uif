import React from 'react'

import { inlineElementStyles } from '../components'
import { CustomFormats } from '../customTypes'
import { ElementPluginType } from '../types'

export const ListItemPlugin: ElementPluginType = {
  elementType: CustomFormats.LIST_ITEM,
  icon: 'none',
  render: ({ attributes, children }) => (
    <li {...attributes} className={inlineElementStyles.inlineElement}>
      {children}
    </li>
  )
}

export default [ListItemPlugin]
