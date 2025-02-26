/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/dropdown'

if (!document.querySelector('head > style.hexa-ui-colors-dropdown')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-dropdown'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
