import React from 'react'

import { generateConfigHash } from './generateConfigHash'

export function getDisplayName (Component: React.ComponentType): string {
  return Component.displayName || Component.name || 'Component'
}

export function useGlobalComponentStyles<T extends Record<string, any>> (
  cssConfig: T,
  getComponentStyles: (cssConfig: T, rootHashClass: string, extraProps?: any) => string,
  Component: React.ComponentType,
  extraProps?: any
): string {
  const displayName = getDisplayName(Component)

  const rootHashClass = React.useMemo(
    () => {
      const part1 = generateConfigHash(cssConfig)
      const part2 = extraProps ? generateConfigHash(extraProps) : undefined

      return [displayName, part1, part2].filter(Boolean).join('-').replace(/[()]/g, '_')
    },
    [cssConfig, displayName, extraProps]
  )

  React.useEffect(() => {
    try {
      if (!document.querySelector(`head > style.${rootHashClass}`)) {
        const styleEl = document.createElement('style')
        styleEl.className = rootHashClass
        styleEl.textContent = getComponentStyles(cssConfig, rootHashClass, extraProps)

        document.head.appendChild(styleEl)
      }
    } catch (error) {
      console.error(`Hexa UI: failed to set styles for ${displayName}. The reason is: ${error}`)
    }
  }, [rootHashClass])

  return rootHashClass
}
