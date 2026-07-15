import { cssVarDeprecatedString, cssVarString } from '../tokens/tokens'

if (!document.querySelector('head > style.hexa-ui-colors-v2')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors-v2'
  style.textContent = cssVarString
  document.head.appendChild(style)
}

if (!document.querySelector('head > style.hexa-ui-colors')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors hexa-ui-colors-deprecated'
  style.textContent = cssVarDeprecatedString
  document.head.appendChild(style)
}