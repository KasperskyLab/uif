import clsx from 'clsx'
import React, { FC } from 'react'

import { Space } from '@kaspersky/hexa-ui'

import { isBlockStylePluginType, isElementPluginType } from '../helpers'
import { PluginType } from '../types'

import { BlockButton } from './BlockButton'
import { MarkButton } from './MarkButton'
import styles from './ToolbatContainer.module.scss'

export const ToolbarContainer: FC<{plugins: PluginType[], className?: string}> = ({ plugins, className }) => {
  return (
    <Space gap={6} className={clsx(styles.toolbarContainer, className)}>
      {plugins.map((plugin) => {
        if (isElementPluginType(plugin)) {
          const { elementType, icon } = plugin

          return <BlockButton key={elementType} format={elementType} icon={icon} />
        }
        if (isBlockStylePluginType(plugin)) {
          const { blockStyleType, icon } = plugin

          return <BlockButton key={blockStyleType} format={blockStyleType} icon={icon} />
        }
        const { leafType, icon } = plugin
        return <MarkButton key={leafType} format={leafType} icon={icon} />
      })}
    </Space>
  )
}
