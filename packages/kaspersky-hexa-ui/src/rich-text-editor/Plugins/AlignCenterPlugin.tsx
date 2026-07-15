import React from 'react'

import { AlignmentCenter } from '@kaspersky/hexa-ui-icons/16'

import { BlockElement } from '../components'
import { CustomFormats } from '../customTypes'
import { BlockStylePluginType } from '../types'

import styles from './AlignCenterPlugin.module.scss'

export const AlignCenterPlugin: BlockStylePluginType = {
  blockStyleType: CustomFormats.ALIGN_CENTER,
  icon: <AlignmentCenter />,
  render: ({ children, attributes }) => (
    <BlockElement
      attributes={attributes}
      className={styles.AlignCenterPlugin}
      dataElement={CustomFormats.ALIGN_CENTER}
    >
      {children}
    </BlockElement>
  )
}
