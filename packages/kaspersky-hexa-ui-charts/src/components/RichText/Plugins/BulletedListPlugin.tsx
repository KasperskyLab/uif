import React from 'react'

import { Text } from '@kaspersky/hexa-ui/src/typography/text'
import { QueueList } from '@kaspersky/hexa-ui-icons/16'

import { CustomFormats } from '../customTypes'
import { ElementPluginType } from '../types'

export const BulletedListPlugin: ElementPluginType = {
  elementType: CustomFormats.BULLETED_LIST,
  icon: <QueueList />,
  render: ({ attributes, children }) => (
    <ul {...attributes}>
      <Text>{children}</Text>
    </ul>
  )
}
