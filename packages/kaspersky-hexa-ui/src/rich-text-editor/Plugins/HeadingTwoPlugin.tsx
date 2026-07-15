import React from 'react'

import { H2 } from '@kaspersky/hexa-ui-icons/16'

import { BlockElement } from '../components'
import { CustomFormats } from '../customTypes'
import { createHeadingBreakBehavior } from '../helpers/createHeadingBreakBehavior'
import { ElementPluginType } from '../types'

import styles from './HeadingTwoPlugin.module.scss'

export const HeadingTwoPlugin: ElementPluginType = {
  elementType: CustomFormats.HEADING_TWO,
  leafFormatsWithin: [CustomFormats.BOLD],
  icon: <H2 />,
  behavior: {
    onBreak: createHeadingBreakBehavior({
      targetType: CustomFormats.HEADING_TWO
    })
  },
  render: ({ attributes, children }) => (
    <BlockElement
      attributes={attributes}
      className={styles.richTextHeadingTwo}
      dataElement={CustomFormats.HEADING_TWO}
    >
      {children}
    </BlockElement>
  )
}
