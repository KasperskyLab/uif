/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/chip'

if (!document.querySelector('head > style.hexa-ui-colors-chip')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-chip'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
