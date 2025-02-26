/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/text'

if (!document.querySelector('head > style.hexa-ui-colors-text')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-text'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
