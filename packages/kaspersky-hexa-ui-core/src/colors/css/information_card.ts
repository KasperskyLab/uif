/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/information_card'

if (!document.querySelector('head > style.hexa-ui-colors-information_card')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-information_card'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
