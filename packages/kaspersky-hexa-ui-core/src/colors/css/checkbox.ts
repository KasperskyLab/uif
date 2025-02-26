/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/checkbox'

if (!document.querySelector('head > style.hexa-ui-colors-checkbox')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-checkbox'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
