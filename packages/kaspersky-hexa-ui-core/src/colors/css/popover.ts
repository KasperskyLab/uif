/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/popover'

if (!document.querySelector('head > style.hexa-ui-colors-popover')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-popover'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
