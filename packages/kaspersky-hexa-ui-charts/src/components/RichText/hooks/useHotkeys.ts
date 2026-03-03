import { useMemo } from 'react'

import { CustomFormats } from '../customTypes'
import { isBlockStylePluginType, isElementPluginType, isLeafPluginType } from '../helpers'
import { PluginType } from '../types'

type Hotkeys = Record<string, CustomFormats>

export const useHotkeys = (plugins: PluginType[]): Hotkeys => {
  return useMemo(() => {
    return plugins.reduce((acc, plugin) => {
      if (plugin.hotKey) {
        if (isElementPluginType(plugin)) {
          acc[plugin.hotKey] = plugin.elementType
        }
        if (isBlockStylePluginType(plugin)) {
          acc[plugin.hotKey] = plugin.blockStyleType
        }

        if (isLeafPluginType(plugin)) {
          acc[plugin.hotKey] = plugin.leafType
        }
      }

      return acc
    }, {} as Hotkeys)
  }, [plugins])
}
