/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/help_message'

if (!document.querySelector('head > style.hexa-ui-colors-help_message')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-help_message'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
