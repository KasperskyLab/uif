import React from 'react'

import { AlignmentLeft } from '@kaspersky/hexa-ui-icons/16'

import { BlockElement } from '../components'
import { CustomFormats } from '../customTypes'
import { BlockStylePluginType } from '../types'

import styles from './AlignLeftPlugin.module.scss'

export const AlignLeftPlugin: BlockStylePluginType = {
  blockStyleType: CustomFormats.ALIGN_LEFT,
  icon: <AlignmentLeft />,
  render: ({ children, attributes }) => (
    <BlockElement
      attributes={attributes}
      className={styles.AlignLeftPlugin}
      dataElement={CustomFormats.ALIGN_LEFT}
    >
      {children}
    </BlockElement>
  )
}
