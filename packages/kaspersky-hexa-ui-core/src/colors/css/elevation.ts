/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/elevation'

if (!document.querySelector('head > style.hexa-ui-colors-elevation')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-elevation'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
