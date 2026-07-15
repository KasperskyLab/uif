import React from 'react'

import { QueueList } from '@kaspersky/hexa-ui-icons/16'

import { inlineElementStyles } from '../components'
import { CustomFormats } from '../customTypes'
import { ElementPluginType } from '../types'

export const BulletedListPlugin: ElementPluginType = {
  elementType: CustomFormats.BULLETED_LIST,
  icon: <QueueList />,
  render: ({ attributes, children }) => (
    <ul {...attributes} className={inlineElementStyles.inlineElement}>
      {children}
    </ul>
  )
}
