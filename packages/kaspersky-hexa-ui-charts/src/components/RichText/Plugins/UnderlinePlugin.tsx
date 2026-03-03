import React from 'react'

import { Text } from '@kaspersky/hexa-ui/src/typography/text'
import { FontUnderstrike } from '@kaspersky/hexa-ui-icons/16'

import { CustomFormats } from '../customTypes'
import { LeafPluginType } from '../types'

export const UnderlinePlugin: LeafPluginType = {
  leafType: CustomFormats.UNDERLINE,
  icon: <FontUnderstrike />,
  hotKey: 'mod+u',
  render: ({ children }) => (
    <u>
      <Text>{children}</Text>
    </u>
  )
}
