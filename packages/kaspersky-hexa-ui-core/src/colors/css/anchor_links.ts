/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/anchor_links'

if (!document.querySelector('head > style.hexa-ui-colors-anchor_links')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-anchor_links'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
