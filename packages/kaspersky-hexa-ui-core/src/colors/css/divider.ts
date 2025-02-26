/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/divider'

if (!document.querySelector('head > style.hexa-ui-colors-divider')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-divider'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
