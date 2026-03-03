import React from 'react'

import { AlignmentCenter, AlignmentLeft, AlignmentRight } from '@kaspersky/hexa-ui-icons/16'

import { CustomFormats } from '../customTypes'
import { BlockStylePluginType } from '../types'

export const AlignRightPlugin: BlockStylePluginType = {
  blockStyleType: CustomFormats.ALIGN_RIGHT,
  icon: <AlignmentRight />,
  render: ({ children }) => <div style={{ textAlign: 'right' }}>{children}</div>
}

export const AlignLeftPlugin: BlockStylePluginType = {
  blockStyleType: CustomFormats.ALIGN_LEFT,
  icon: <AlignmentLeft />,
  render: ({ children }) => <div style={{ textAlign: 'left' }}>{children}</div>
}

export const AlignCenterPlugin: BlockStylePluginType = {
  blockStyleType: CustomFormats.ALIGN_CENTER,
  icon: <AlignmentCenter />,
  render: ({ children }) => <div style={{ textAlign: 'center' }}>{children}</div>
}
