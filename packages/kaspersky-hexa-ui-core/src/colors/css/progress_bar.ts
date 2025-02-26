/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/progress_bar'

if (!document.querySelector('head > style.hexa-ui-colors-progress_bar')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-progress_bar'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
