/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/tabs'

if (!document.querySelector('head > style.hexa-ui-colors-tabs')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-tabs'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
