import { useEffect } from 'react'

import { dynamicHexaUIGlobalStyles } from '../../src/@global-styles/dynamic-styles'

export function useGlobalStyles () {
  useEffect(() => {
    try {
      if (!document.querySelector('head > style.hexa-ui-dynamic-styles')) {
        const styleEl = document.createElement('style')
        styleEl.className = 'hexa-ui-dynamic-styles'
        styleEl.textContent = dynamicHexaUIGlobalStyles
        document.head.appendChild(styleEl)

        console.info('Hexa UI: set dynamic global styles')
      }
    } catch (error) {
      console.error('Hexa UI: failed to set dynamic global styles. The reason is: ' + error)
    }
  }, [])
}
