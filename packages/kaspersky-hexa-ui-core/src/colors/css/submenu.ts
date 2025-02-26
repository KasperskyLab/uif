/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/submenu'

if (!document.querySelector('head > style.hexa-ui-colors-submenu')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-submenu'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
