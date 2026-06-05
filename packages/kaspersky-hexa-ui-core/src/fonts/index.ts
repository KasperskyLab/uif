import { FontFamilySingle, FontStyle, FontWeight } from '../typography/js'

import KasperskySansBold from './assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_Bold.woff2'
import KasperskySansExtraBold from './assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_ExtraBold.woff2'
import KasperskySansMedium from './assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_Medium.woff2'
import KasperskySansRegular from './assets/fonts/kaspersky-sans/Kaspersky_Sans_V3_Text_Regular.woff2'
import KasperskySansMonoBold from './assets/fonts/kaspersky-sans-mono/Kaspersky_Sans_Mono_Bold.woff2'
import KasperskySansMonoRegular from './assets/fonts/kaspersky-sans-mono/Kaspersky_Sans_Mono_Regular.woff2'
import KasperskySansTextBold from './assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_Bold.woff2'
import KasperskySansTextExtraBold from './assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_ExtraBold.woff2'
import KasperskySansTextMedium from './assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_Medium.woff2'
import KasperskySansTextRegular from './assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_Regular.woff2'
import KasperskySansTextSemiBold from './assets/fonts/kaspersky-sans-text/Kaspersky_Sans_Text_SemiBold.woff2'

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
    fontWeight: FontWeight.Bold,
    src: [{ format: 'woff2', url: KasperskySansBold }]
  },
  {
    fontFamily: FontFamilySingle.Primary,
    fontWeight: FontWeight.ExtraBold,
    src: [{ format: 'woff2', url: KasperskySansExtraBold }]
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
  ...fontFaceText,
  ...fontFaceMono
]

type FontFaceSrc = FontFace['src'][number]

const generateFontSrc = (x: FontFaceSrc[]) => x.map(value => `url(${value.url}) format("${value.format}")`).join(',\n')

export const getFontFace = ({ fontFamily, fontStyle, fontWeight, src }: FontFace): string => {
  return `
    @font-face {
      font-family: "${fontFamily}";
      ${fontStyle ? `font-style: ${fontStyle};` : ''}
      ${fontWeight ? `font-weight: ${fontWeight};` : ''}
      src: ${generateFontSrc(src)};
    }
  `
}

if (!document.querySelector('head > style.hexa-ui-fonts')) {
  const style = document.createElement('style')
  style.className = 'hexa-ui-fonts'
  style.textContent = fontFace.map(getFontFace).join('\n')
  document.head.appendChild(style)
}

export const fontsCssVarString = fontFace.map(getFontFace).join('\n')
