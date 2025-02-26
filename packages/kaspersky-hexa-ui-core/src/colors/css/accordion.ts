/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/accordion'

if (!document.querySelector('head > style.hexa-ui-colors-accordion')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-accordion'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
