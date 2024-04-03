import React from 'react'
import { generateConfigHash } from './generateConfigHash'

export function getDisplayName (Component: React.ComponentType): string {
  return Component.displayName || Component.name || 'Component'
}

export function useGlobalComponentStyles<T extends Record<string, any>> (
  cssConfig: T,
  getComponentStyles: (cssConfig: T, rootHashClass: string) => string,
  Component: React.ComponentType
): string {
  const displayName = getDisplayName(Component)

  const rootHashClass = React.useMemo(
    () => `${displayName}-${generateConfigHash(cssConfig)}`.replace(/[()]/g, '_'),
    [cssConfig, displayName]
  )

  React.useEffect(() => {
    try {
      if (!document.querySelector(`head > style.${rootHashClass}`)) {
        const styleEl = document.createElement('style')
        styleEl.className = rootHashClass
        styleEl.textContent = getComponentStyles(cssConfig, rootHashClass)

        document.head.appendChild(styleEl)
      }
    } catch (error) {
      console.error(`kl-components-v6: failed to set styles for ${displayName}. The reason is: ${error}`)
    }
  }, [rootHashClass])

  return rootHashClass
}
