/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/tree'

if (!document.querySelector('head > style.hexa-ui-colors-tree')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-tree'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
