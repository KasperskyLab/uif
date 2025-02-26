/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/breadcrumbs'

if (!document.querySelector('head > style.hexa-ui-colors-breadcrumbs')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-breadcrumbs'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
