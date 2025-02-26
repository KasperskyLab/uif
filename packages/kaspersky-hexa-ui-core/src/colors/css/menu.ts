/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/menu'

if (!document.querySelector('head > style.hexa-ui-colors-menu')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-menu'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
