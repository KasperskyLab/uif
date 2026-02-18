/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/panel'

if (!document.querySelector('head > style.hexa-ui-colors-panel')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-panel'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
