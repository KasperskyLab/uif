/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/input_number'

if (!document.querySelector('head > style.hexa-ui-colors-input_number')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-input_number'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
