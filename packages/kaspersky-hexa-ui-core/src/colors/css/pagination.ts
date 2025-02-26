/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/pagination'

if (!document.querySelector('head > style.hexa-ui-colors-pagination')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-pagination'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
