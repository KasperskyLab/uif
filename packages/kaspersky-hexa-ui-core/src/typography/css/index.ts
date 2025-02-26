import { cssVarString } from 'src/typography/tokens/tokens'

if (!document.querySelector('head > style.hexa-ui-typography')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-typography'
  style.textContent = cssVarString
  document.head.appendChild(style)
}
