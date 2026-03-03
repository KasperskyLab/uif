import React from 'react'

import { Code } from '@kaspersky/hexa-ui-icons/16'

import { CustomFormats } from '../customTypes'
import { LeafPluginType } from '../types'

export const CodePlugin: LeafPluginType = {
  leafType: CustomFormats.CODE,
  icon: <Code />,
  hotKey: 'mod+`',
  render: ({ children }) => <code style={{ backgroundColor: 'rgb(209, 213, 219)' }}>{children}</code>
}
