import { Divider, DividerProps } from '@src/divider'
import { Space } from '@src/space'
import clsx from 'clsx'
import React, { Fragment } from 'react'
import { useSlate } from 'slate-react'

import {
  isBlockStylePluginType,
  isBlockStyleType,
  isElementPluginType
} from '../helpers/typeGuards'
import { Plugins, PluginsFlat, PluginType } from '../types'

import { BlockButton } from './components/BlockButton'
import { MarkButton } from './components/MarkButton'
import { isBlockActive } from './helpers'
import styles from './ToolbatContainer.module.scss'

interface ToolbarContainerProps {
  plugins: Plugins;
  flatPlugins: PluginsFlat;
  className?: string;
  dividerPluginsProps: DividerProps;
  testId?: string;
}

export const ToolbarContainer = ({
  plugins,
  flatPlugins,
  className,
  dividerPluginsProps,
  testId
}: ToolbarContainerProps) => {
  const editor = useSlate()

  const renderPlugin = (plugin: PluginType) => {
    if (isElementPluginType(plugin)) {
      const { elementType, icon, customAction } = plugin
      if (customAction) {
        const isSelected = isBlockActive(editor, elementType, isBlockStyleType(elementType) ? 'style' : 'type')

        return customAction({
          format: elementType,
          editor,
          icon,
          key: elementType,
          isActive: isSelected
        })
      }

      return (
        <BlockButton
          key={elementType}
          format={elementType}
          icon={icon}
          flatPlugins={flatPlugins}
        />
      )
    }

    if (isBlockStylePluginType(plugin)) {
      const { blockStyleType, icon } = plugin

      return (
        <BlockButton
          key={blockStyleType}
          format={blockStyleType}
          icon={icon}
          flatPlugins={flatPlugins}
        />
      )
    }

    const { leafType, icon } = plugin
    return <MarkButton key={leafType} format={leafType} icon={icon} />
  }

  const renderGroupPlugins = (
    groupOfPlugins: PluginsFlat,
    isLastGroup: boolean
  ) => {
    const firstInGroup = groupOfPlugins[0]
    const groupTypeByFirst = isBlockStylePluginType(firstInGroup)
      ? firstInGroup.blockStyleType
      : isElementPluginType(firstInGroup)
        ? firstInGroup.elementType
        : firstInGroup.leafType

    const keyDivider = `divider-${groupTypeByFirst}`
    const groupDivider = `group-${groupTypeByFirst}`

    return (
      <Fragment key={groupDivider}>
        {groupOfPlugins.map(renderPlugin)}
        {!isLastGroup && (
          <Divider
            {...dividerPluginsProps}
            className={clsx(styles.divider, dividerPluginsProps?.className)}
            key={keyDivider}
          />
        )}
      </Fragment>
    )
  }

  return (
    <Space wrap="nowrap" gap="related" width="max-content" className={clsx(styles.toolbarContainer, className)} data-test-id={testId ? `${testId}-toolbar` : undefined}>
      {plugins.map((plugin, idx) =>
        Array.isArray(plugin)
          ? renderGroupPlugins(plugin, idx === plugins.length - 1)
          : renderPlugin(plugin))}
    </Space>
  )
}
