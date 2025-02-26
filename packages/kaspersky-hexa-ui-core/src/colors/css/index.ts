import { cssVarString } from '../tokens/tokens'

if (!document.querySelector('head > style.hexa-ui-colors')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
