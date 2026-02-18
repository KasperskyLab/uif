/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/toggle_button'

if (!document.querySelector('head > style.hexa-ui-colors-toggle_button')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-toggle_button'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
