import React, { ComponentType, useEffect } from 'react'
import { dynamicV6GlobalStyles } from '../../src/@global-styles/dynamic-styles'

export function WithGlobalStyles<T extends React.ComponentType<any>> (Component: T): T {
  const WithStyles: React.FC<any> = (props) => {
    useEffect(() => {
      try {
        if (!document.querySelector('head > style.v6-dynamic-styles')) {
          const styleEl = document.createElement('style')
          styleEl.className = 'v6-dynamic-styles'
          styleEl.textContent = dynamicV6GlobalStyles
          document.head.appendChild(styleEl)

          console.info('kl-components-v6: set dynamic global styles')
        }
      } catch (error) {
        console.error('kl-components-v6: failed to set dynamic global styles. The reason is: ' + error)
      }
    }, [])

    return <Component {...props} />
  }

  WithStyles.displayName = `WithGlobalStyles(${getDisplayName(Component)})`

  return Object.assign(WithStyles, Component)
}

function getDisplayName (Component: ComponentType<any>) {
  return Component.displayName || Component.name || 'Component'
}
