/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/code_compare'

if (!document.querySelector('head > style.hexa-ui-colors-code_compare')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-code_compare'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
