import React from 'react'

import { Code } from '@kaspersky/hexa-ui-icons/16'

import { InlineElement } from '../components'
import { CustomFormats } from '../customTypes'
import { LeafPluginType } from '../types'

import styles from './CodePlugin.module.scss'

export const CodePlugin: LeafPluginType = {
  leafType: CustomFormats.CODE,
  icon: <Code />,
  hotKey: 'mod+`',
  render: ({ children, attributes, disabled, readOnly }) => (
    <code className={styles.codePlugin}>
      <InlineElement
        attributes={attributes}
        disabled={disabled}
        readOnly={readOnly}
      >
        {children}
      </InlineElement>
    </code>
  )
}
