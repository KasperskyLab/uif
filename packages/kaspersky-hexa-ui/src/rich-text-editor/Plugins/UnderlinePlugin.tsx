import React from 'react'

import { FontUnderstrike } from '@kaspersky/hexa-ui-icons/16'

import { inlineElementStyles } from '../components'
import { CustomFormats } from '../customTypes'
import { LeafPluginType } from '../types'

export const UnderlinePlugin: LeafPluginType = {
  leafType: CustomFormats.UNDERLINE,
  icon: <FontUnderstrike />,
  hotKey: 'mod+u',
  render: ({ children, attributes }) => (
    <u {...attributes} className={inlineElementStyles.inlineElement}>
      {children}
    </u>
  )
}
