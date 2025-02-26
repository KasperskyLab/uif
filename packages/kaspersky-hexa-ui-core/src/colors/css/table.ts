/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/table'

if (!document.querySelector('head > style.hexa-ui-colors-table')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-table'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
