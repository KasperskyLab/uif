/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/segmented_control'

if (!document.querySelector('head > style.hexa-ui-colors-segmented_control')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-segmented_control'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
