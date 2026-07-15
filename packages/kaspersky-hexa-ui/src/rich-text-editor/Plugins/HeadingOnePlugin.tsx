import React from 'react'

import { H1 } from '@kaspersky/hexa-ui-icons/16'

import { BlockElement } from '../components'
import { CustomFormats } from '../customTypes'
import { createHeadingBreakBehavior } from '../helpers/createHeadingBreakBehavior'
import { ElementPluginType } from '../types'

import styles from './HeadingOnePlugin.module.scss'

export const HeadingOnePlugin: ElementPluginType = {
  elementType: CustomFormats.HEADING_ONE,
  leafFormatsWithin: [CustomFormats.BOLD],
  icon: <H1 />,
  behavior: {
    onBreak: createHeadingBreakBehavior({
      targetType: CustomFormats.HEADING_ONE
    })
  },
  render: ({ attributes, children }) => (
    <BlockElement
      attributes={attributes}
      className={styles.richTextHeadingOne}
      dataElement={CustomFormats.HEADING_ONE}
    >
      {children}
    </BlockElement>
  )
}
