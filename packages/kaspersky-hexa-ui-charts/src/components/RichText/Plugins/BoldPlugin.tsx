import React from 'react'

import { Text } from '@kaspersky/hexa-ui/src/typography/text'
import { FontBold } from '@kaspersky/hexa-ui-icons/16'

import { CustomFormats } from '../customTypes'
import { LeafPluginType } from '../types'

export const BoldPlugin: LeafPluginType = {
  leafType: CustomFormats.BOLD,
  icon: <FontBold />,
  hotKey: 'mod+b',
  render: ({ children }) => <Text type="BTM2">{children}</Text>
}
