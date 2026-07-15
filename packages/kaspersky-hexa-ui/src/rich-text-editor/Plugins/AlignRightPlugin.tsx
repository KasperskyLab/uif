import React from 'react'

import { AlignmentRight } from '@kaspersky/hexa-ui-icons/16'

import { BlockElement } from '../components'
import { CustomFormats } from '../customTypes'
import { BlockStylePluginType } from '../types'

import styles from './AlignRightPlugin.module.scss'

export const AlignRightPlugin: BlockStylePluginType = {
  blockStyleType: CustomFormats.ALIGN_RIGHT,
  icon: <AlignmentRight />,
  render: ({ children, attributes }) => (
    <BlockElement
      attributes={attributes}
      className={styles.AlignRightPlugin}
      dataElement={CustomFormats.ALIGN_RIGHT}
    >
      {children}
    </BlockElement>
  )
}
