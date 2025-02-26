/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/input_text'

if (!document.querySelector('head > style.hexa-ui-colors-input_text')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-input_text'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
