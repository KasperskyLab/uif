/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/page_header'

if (!document.querySelector('head > style.hexa-ui-colors-page_header')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-page_header'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
