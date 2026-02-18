import { buildCssVarsPalette, buildCssVarsTokens } from '@helpers/build-css-vars'
import { createGlobalStyle, css } from 'styled-components'

import('@kaspersky/hexa-ui-core/fonts')
import('@kaspersky/hexa-ui-core/colors/css')
import('@kaspersky/hexa-ui-core/typography/css')

const globalRootStyleForGallery = css`
.root-background-basic {
  transition: filter 0.2s ease-in-out;
}

.root-background-blurred {
  filter: blur(8px);
}

body:has(.antd-sidebar-wrapper_last) .antd-sidebar-wrapper:not(.antd-sidebar-wrapper_last) .ant-drawer-mask {
  visibility: hidden;
}
`

export const GlobalStyle = createGlobalStyle`
  ${buildCssVarsPalette()}
  ${buildCssVarsTokens()}
  ${globalRootStyleForGallery}
`
