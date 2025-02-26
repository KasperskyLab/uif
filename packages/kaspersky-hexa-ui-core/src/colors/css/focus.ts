/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/focus'

if (!document.querySelector('head > style.hexa-ui-colors-focus')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-focus'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
