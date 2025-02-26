/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/loader'

if (!document.querySelector('head > style.hexa-ui-colors-loader')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-loader'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
