/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/tooltip'

if (!document.querySelector('head > style.hexa-ui-colors-tooltip')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-tooltip'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
