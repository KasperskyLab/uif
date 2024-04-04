import { colors } from '../tokens/palette'
import { createGlobalStyle } from 'styled-components'

import { FontFamilySingle, FontWeight, FontStyle } from '../tokens/typography'

import KasperskySansRegular from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_Regular.woff2'
import KasperskySansDemiBold from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_DemiBold.woff2'
import KasperskySansMedium from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_Medium.woff2'
import KasperskySansBold from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_Bold.woff2'
import KasperskySansExtraBold from '../assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_ExtraBold.woff2'

import KasperskySansDisplayLight from '../assets/fonts/kaspersky-sans-display/Kaspersky_Sans_Display_Light.woff2'
import KasperskySansDisplayRegular from '../assets/fonts/kaspersky-sans-display/Kaspersky_Sans_Display_Regular.woff2'
import KasperskySansDisplayMedium from '../assets/fonts/kaspersky-sans-display/Kaspersky_Sans_Display_Medium.woff2'
import KasperskySansDisplaySemiBold from '../assets/fonts/kaspersky-sans-display/Kaspersky_Sans_Display_SemiBold.woff2'
import KasperskySansDisplayBold from '../assets/fonts/kaspersky-sans-display/Kaspersky_Sans_Display_Bold.woff2'
import KasperskySansDisplayExtraBold from '../assets/fonts/kaspersky-sans-display/Kaspersky_Sans_Display_ExtraBold.woff2'

import KasperskySansTextRegular from '../assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_Regular.woff2'
import KasperskySansTextMedium from '../assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_Medium.woff2'
import KasperskySansTextSemiBold from '../assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_SemiBold.woff2'
import KasperskySansTextBold from '../assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_Bold.woff2'
import KasperskySansTextExtraBold from '../assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_ExtraBold.woff2'

import KasperskySansMonoRegular from '../assets/fonts/kaspersky-sans-mono/Kaspersky_Sans_Mono_Regular.woff2'
import KasperskySansMonoBold from '../assets/fonts/kaspersky-sans-mono/Kaspersky_Sans_Mono_Bold.woff2'

export type FontFace = {
  fontFamily: FontFamilySingle,
  fontWeight?: FontWeight,
  fontStyle?: FontStyle,
  src: Array<{
    format: 'woff2' | 'truetype',
    url: string
  }>
}

const fontFacePrimary: FontFace[] = [
  {
    fontFamily: FontFamilySingle.Primary,
    src: [{ format: 'woff2', url: KasperskySansMedium }]
  },
  {
    fontFamily: FontFamilySingle.Primary,
    fontWeight: FontWeight.Regular,
    src: [{ format: 'woff2', url: KasperskySansRegular }]
  },
  {
    fontFamily: FontFamilySingle.Primary,
    fontWeight: FontWeight.DemiBold,
    src: [{ format: 'woff2', url: KasperskySansDemiBold }]
  },
  {
    fontFamily: FontFamilySingle.Primary,
    fontWeight: FontWeight.Bold,
    src: [{ format: 'woff2', url: KasperskySansBold }]
  },
  {
    fontFamily: FontFamilySingle.Primary,
    fontWeight: FontWeight.ExtraBold,
    src: [{ format: 'woff2', url: KasperskySansExtraBold }]
  }
]

const fontFaceDisplay: FontFace[] = [
  {
    fontFamily: FontFamilySingle.Display,
    fontWeight: FontWeight.Light,
    src: [{ format: 'woff2', url: KasperskySansDisplayLight }]
  },
  {
    fontFamily: FontFamilySingle.Display,
    fontWeight: FontWeight.Regular,
    src: [{ format: 'woff2', url: KasperskySansDisplayRegular }]
  },
  {
    fontFamily: FontFamilySingle.Display,
    fontWeight: FontWeight.Medium,
    src: [{ format: 'woff2', url: KasperskySansDisplayMedium }]
  },
  {
    fontFamily: FontFamilySingle.Display,
    fontWeight: FontWeight.SemiBold,
    src: [{ format: 'woff2', url: KasperskySansDisplaySemiBold }]
  },
  {
    fontFamily: FontFamilySingle.Display,
    fontWeight: FontWeight.Bold,
    src: [{ format: 'woff2', url: KasperskySansDisplayBold }]
  },
  {
    fontFamily: FontFamilySingle.Display,
    fontWeight: FontWeight.ExtraBold,
    src: [{ format: 'woff2', url: KasperskySansDisplayExtraBold }]
  }
]

const fontFaceText: FontFace[] = [
  {
    fontFamily: FontFamilySingle.Text,
    fontWeight: FontWeight.Regular,
    src: [{ format: 'woff2', url: KasperskySansTextRegular }]
  },
  {
    fontFamily: FontFamilySingle.Text,
    fontWeight: FontWeight.Medium,
    src: [{ format: 'woff2', url: KasperskySansTextMedium }]
  },
  {
    fontFamily: FontFamilySingle.Text,
    fontWeight: FontWeight.SemiBold,
    src: [{ format: 'woff2', url: KasperskySansTextSemiBold }]
  },
  {
    fontFamily: FontFamilySingle.Text,
    fontWeight: FontWeight.Bold,
    src: [{ format: 'woff2', url: KasperskySansTextBold }]
  },
  {
    fontFamily: FontFamilySingle.Text,
    fontWeight: FontWeight.ExtraBold,
    src: [{ format: 'woff2', url: KasperskySansTextExtraBold }]
  }
]

const fontFaceMono: FontFace[] = [
  {
    fontFamily: FontFamilySingle.Mono,
    fontWeight: FontWeight.Regular,
    src: [{ format: 'woff2', url: KasperskySansMonoRegular }]
  },
  {
    fontFamily: FontFamilySingle.Mono,
    fontWeight: FontWeight.Bold,
    src: [{ format: 'woff2', url: KasperskySansMonoBold }]
  }
]

export const fontFace: FontFace[] = [
  ...fontFacePrimary,
  ...fontFaceDisplay,
  ...fontFaceText,
  ...fontFaceMono
]

type FontFaceSrc = FontFace['src'][number]

const generateFontSrc = (x: FontFaceSrc[]) => x.map(value => `url(${value.url}) format("${value.format}")`).join(',\n')

const getFontFace = ({ fontFamily, fontStyle, fontWeight, src }: FontFace) => {
  return `
    @font-face {
      font-family: "${fontFamily}";
      ${fontStyle ? `font-style: ${fontStyle};` : ''}
      ${fontWeight ? `font-weight: ${fontWeight};` : ''}
      src: ${generateFontSrc(src)};
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

.antd-sidebar-wrapper:not(.antd-sidebar-wrapper_last) .ant-drawer-mask {
  visibility: hidden;
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
