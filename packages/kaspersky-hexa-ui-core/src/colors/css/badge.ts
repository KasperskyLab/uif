/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/badge'

if (!document.querySelector('head > style.hexa-ui-colors-badge')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-badge'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
