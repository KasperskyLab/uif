/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/scrollbar'

if (!document.querySelector('head > style.hexa-ui-colors-scrollbar')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-scrollbar'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
