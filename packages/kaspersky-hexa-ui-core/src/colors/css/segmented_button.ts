/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/segmented_button'

if (!document.querySelector('head > style.hexa-ui-colors-segmented_button')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-segmented_button'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
