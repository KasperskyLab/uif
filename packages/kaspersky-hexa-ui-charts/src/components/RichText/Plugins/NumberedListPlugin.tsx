import React from 'react'

import { NumberedList } from '@kaspersky/hexa-ui-icons/16'

import { CustomFormats } from '../customTypes'
import { ElementPluginType } from '../types'

export const NumberedListPlugin: ElementPluginType = {
  elementType: CustomFormats.NUMBERED_LIST,
  icon: <NumberedList />,
  render: ({ attributes, children }) => (
    <ol {...attributes}>
      {children}
    </ol>
  )
}
