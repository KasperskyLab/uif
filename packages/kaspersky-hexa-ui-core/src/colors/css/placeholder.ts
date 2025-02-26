/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/placeholder'

if (!document.querySelector('head > style.hexa-ui-colors-placeholder')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-placeholder'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
