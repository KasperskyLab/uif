import React from 'react'

import { H3 } from '@kaspersky/hexa-ui-icons/16'

import { BlockElement } from '../components'
import { CustomFormats } from '../customTypes'
import { createHeadingBreakBehavior } from '../helpers/createHeadingBreakBehavior'
import { ElementPluginType } from '../types'

import styles from './HeadingThreePlugin.module.scss'

export const HeadingThreePlugin: ElementPluginType = {
  elementType: CustomFormats.HEADING_THREE,
  leafFormatsWithin: [CustomFormats.BOLD],
  icon: <H3 />,
  behavior: {
    onBreak: createHeadingBreakBehavior({
      targetType: CustomFormats.HEADING_THREE
    })
  },
  render: ({ attributes, children }) => (
    <BlockElement
      attributes={attributes}
      className={styles.richTextHeadingThree}
      dataElement={CustomFormats.HEADING_THREE}
    >
      {children}
    </BlockElement>
  )
}
