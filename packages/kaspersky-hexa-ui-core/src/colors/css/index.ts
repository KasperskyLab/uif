import { isGreater, pkgVersion } from '../../helpers/semver'
import { cssVarDeprecatedString, cssVarString } from '../tokens/tokens'

const tokensStyle = document.querySelector<HTMLStyleElement>('head > style.hexa-ui-tokens')

if (tokensStyle) {
  if (isGreater(pkgVersion, tokensStyle.dataset.version!)) {
    tokensStyle.dataset.version = pkgVersion
    tokensStyle.textContent = cssVarString
  }
} else {
  const style = document.createElement('style')
  style.className = 'hexa-ui-tokens'
  style.dataset.version = pkgVersion
  style.textContent = cssVarString
  document.head.appendChild(style)
}

if (!document.querySelector('head > style.hexa-ui-colors')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-colors hexa-ui-tokens-deprecated'
  style.textContent = cssVarDeprecatedString
  document.head.appendChild(style)
}
