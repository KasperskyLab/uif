import { colors } from '../tokens/palette'
import { createGlobalStyle } from 'styled-components'

import { FontFamily, FontWeight, FontStyle } from '../tokens/typography'

// @ts-ignore
import KasperskySansRegular from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_Regular.woff2'
// @ts-ignore
import KasperskySansDemiBold from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_DemiBold.woff2'
// @ts-ignore
import KasperskySansMedium from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_Medium.woff2'
// @ts-ignore
import KasperskySansExtraBold from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_ExtraBold.woff2'

export type FontFace = {
  fontFamily: FontFamily,
  fontWeight?: FontWeight,
  fontStyle?: FontStyle,
  src: Array<{
    format: 'woff2' | 'truetype',
    url: string,
  }>,
}
export const fontFace: FontFace[] = [
  {
    fontFamily: FontFamily.Primary,
    src: [{ format: 'woff2', url: KasperskySansMedium }]
  },
  {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.Regular,
    src: [{ format: 'woff2', url: KasperskySansRegular }]
  },
  {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    src: [{ format: 'woff2', url: KasperskySansDemiBold }]
  },
  {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.ExtraBold,
    src: [{ format: 'woff2', url: KasperskySansExtraBold }]
  }
]
type FontFaceSrc = FontFace['src'][number]

const generateFontSrc = (x: FontFaceSrc[]) => x.map(value => `url(${value.url}) format("${value.format}")`).join(',\n')

const getFontFace = ({ fontFamily, fontStyle, fontWeight, src }: FontFace) => {
  return `
    @font-face {
      font-family: ${fontFamily};
      ${fontStyle ? 'font-style: ' + fontStyle : ''};
      ${fontWeight ? 'font-weight: ' + fontWeight : ''};
      src:
        ${generateFontSrc(src)};
    }
  `
}

const globalFonts = fontFace.map(getFontFace).join('\n')

const globalColors = Object.entries(colors).map(([name, value]) => `--color-${name}: ${value};`).join('\n')

const globalRootStyleForGallery = `
.root-background-basic {
  transition: filter 0.2s ease-in-out;
}

.root-background-blurred {
  filter: blur(8px);
}
`

export const GlobalStyle = createGlobalStyle`
  :root {
    ${globalColors}
  }

  ${globalRootStyleForGallery}
`
const style = document.createElement('style')
style.textContent = `
  ${globalFonts}
`
document.head.appendChild(style)
