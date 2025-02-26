/*! This file was created automatically. */
/*! Use updateColors gulp task if you need to update colors. */

import { cssVarString } from '../tokens/components/input_datetime_picker'

if (!document.querySelector('head > style.hexa-ui-colors-input_datetime_picker')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-input_datetime_picker'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
