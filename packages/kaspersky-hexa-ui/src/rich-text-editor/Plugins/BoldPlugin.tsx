import React from 'react'

import { FontBold } from '@kaspersky/hexa-ui-icons/16'

import { InlineElement } from '../components'
import { CustomFormats } from '../customTypes'
import { LeafPluginType } from '../types'

import styles from './BoldPlugin.module.scss'
export const BoldPlugin: LeafPluginType = {
  leafType: CustomFormats.BOLD,
  icon: <FontBold />,
  hotKey: 'mod+b',
  render: ({ children, attributes }) => {
    return (
      <InlineElement attributes={attributes} className={styles.richTextBold}>
        {children}
      </InlineElement>
    )}
}
