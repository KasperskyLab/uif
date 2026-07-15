import React from 'react'

import { Text2 } from '@kaspersky/hexa-ui-icons/16'

import { BlockElement } from '../components'
import { CustomFormats } from '../customTypes'
import { ElementPluginType } from '../types'

import styles from './ParagraphPlugin.module.scss'

export const ParagraphPlugin: ElementPluginType = {
  elementType: CustomFormats.PARAGRAPH,
  icon: <Text2 />,
  render: ({ attributes, children }) => (
    <BlockElement
      attributes={attributes}
      className={styles.ParagraphPlugin}
      dataElement={CustomFormats.PARAGRAPH}
    >
      {children}
    </BlockElement>
  )
}
