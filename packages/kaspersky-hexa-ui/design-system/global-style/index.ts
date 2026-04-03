import { buildCssVarsPalette, buildCssVarsTokens } from '@helpers/build-css-vars'
import { colorsCssVarString } from '@kaspersky/hexa-ui-core/colors/js'
import { fontsCssVarString } from '@kaspersky/hexa-ui-core/fonts'
import { typographyCssVarString } from '@kaspersky/hexa-ui-core/typography/js'
import { createGlobalStyle, css } from 'styled-components'

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
  ${fontsCssVarString}
  ${colorsCssVarString}
  ${typographyCssVarString}
  ${buildCssVarsPalette()}
  ${buildCssVarsTokens()}
  ${globalRootStyleForGallery}
`
