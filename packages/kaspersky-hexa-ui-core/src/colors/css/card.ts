/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/card'

if (!document.querySelector('head > style.hexa-ui-colors-card')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-card'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
