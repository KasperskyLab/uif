/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/label'

if (!document.querySelector('head > style.hexa-ui-colors-label')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-label'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
