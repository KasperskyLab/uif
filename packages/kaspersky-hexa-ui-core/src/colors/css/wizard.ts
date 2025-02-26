/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/wizard'

if (!document.querySelector('head > style.hexa-ui-colors-wizard')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-wizard'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
