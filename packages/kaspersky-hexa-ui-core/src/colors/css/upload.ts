/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/upload'

if (!document.querySelector('head > style.hexa-ui-colors-upload')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-upload'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
