/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/input_multi_select'

if (!document.querySelector('head > style.hexa-ui-colors-input_multi_select')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-input_multi_select'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
