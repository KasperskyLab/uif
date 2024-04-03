export enum FontFamily {
  Primary = '"Kaspersky Sans", Arial, sans-serif',
  Text = '"Kaspersky Sans Text", "Kaspersky Sans", Arial, sans-serif',
  Mono = '"Kaspersky Sans Mono", "Kaspersky Sans", Arial, sans-serif',
  Display = '"Kaspersky Sans Display", "Kaspersky Sans", Arial, sans-serif',
}

export enum FontFamilySingle {
  Primary = 'Kaspersky Sans',
  Text = 'Kaspersky Sans Text',
  Mono = 'Kaspersky Sans Mono',
  Display = 'Kaspersky Sans Display',
}

export enum FontWeight {
  Thin = 100,
  SemiLight = 200,
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
  ExtraBold = 900,
  /** @deprecated  */
  DemiBold = 500,
  /** @deprecated  */
  Bolder = 600
}

export enum HeadingTypes {
  H1 = 'Header/H1',
  H2 = 'Header/H2',
  H3 = 'Header/H3',
  H4 = 'Header/H4',
  H5 = 'Header/H5',
  H6 = 'Header/H6',
  /** deprecated */
  S1 = 'Subheader/S1',
  /** deprecated */
  S2 = 'Subheader/S2',
  /** deprecated */
  S3 = 'Subheader/S3',
  /** deprecated */
  S4 = 'Subheader/S4',
  /** deprecated */
  N1 = 'Number/N1',
  /** deprecated */
  N2 = 'Number/N2',
  /** deprecated */
  N3 = 'Number/N3',
  /** deprecated */
  N4 = 'Number/N4',
  /** deprecated */
  N5 = 'Number/N5'
}

export enum TextTypes {
  BTM2 = 'BodyTextMedium/2',
  BTM3 = 'BodyTextMedium/3',
  BTM4 = 'BodyTextMedium/4',
  BTM5 = 'BodyTextMedium/5',
  BTR2 = 'BodyTextRegular/2',
  BTR3 = 'BodyTextRegular/3',
  BTR4 = 'BodyTextRegular/4',
  BTR5 = 'BodyTextRegular/5',
  /** deprecated */
  BTM1 = 'BodyTextMedium/1',
  /** deprecated */
  BTR1 = 'BodyTextRegular/1',
  /** deprecated */
  L1 = 'Link/L1',
  /** deprecated */
  L2 = 'Link/L2',
  /** deprecated */
  L3 = 'Link/L3',
  /** deprecated */
  L4 = 'Link/L4',
  /** deprecated */
  L5 = 'Link/L5',
}

export enum MonoTextTypes {
  MTR3 = 'MonoTextRegular/3',
  MTR4 = 'MonoTextRegular/4'
}

export const textLevels = {
  ...HeadingTypes,
  ...TextTypes,
  ...MonoTextTypes
} as const

export type TextLevel = typeof textLevels[keyof typeof textLevels]

export enum FontStyle {
  Normal = 'normal',
  /** deprecated */
  Italic = 'Italic'
}

export const textTags = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
  Span: 'span',
  /** deprecated */
  Pre: 'pre'
} as const

export type TextTag = (typeof textTags)[keyof typeof textTags]

export type TextSizes = {
  fontFamily: FontFamily,
  fontWeight: FontWeight,
  fontStyle: FontStyle,
  fontSize: string,
  lineHeight: string,
  letterSpacing: string
}

export type TextStyle = TextSizes & { htmlTag: TextTag }

type TextStyleList = {
  [textLevel in TextLevel]: TextStyle
}

const textStyleHeader = {
  [textLevels.H1]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H1,
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: '-0.5px'
  },
  [textLevels.H2]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H2,
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-0.5px'
  },
  [textLevels.H3]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H3,
    fontSize: '28px',
    lineHeight: '32px',
    letterSpacing: '0'
  },
  [textLevels.H4]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H4,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '0'
  },
  [textLevels.H5]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H5,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0'
  },
  [textLevels.H6]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H6,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0'
  },
  /** deprecated */
  [textLevels.S1]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H1,
    fontSize: '52px',
    lineHeight: '62px',
    letterSpacing: '-0.5px'
  },
  /** deprecated */
  [textLevels.S2]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H2,
    fontSize: '36px',
    lineHeight: '48px',
    letterSpacing: '-0.5px'
  },
  /** deprecated */
  [textLevels.S3]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H3,
    fontSize: '28px',
    lineHeight: '40px',
    letterSpacing: '0'
  },
  /** deprecated */
  [textLevels.S4]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H4,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0'
  },
  /** deprecated */
  [textLevels.N1]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H1,
    fontSize: '80px',
    lineHeight: '88px',
    letterSpacing: '-1.5px'
  },
  /** deprecated */
  [textLevels.N2]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H2,
    fontSize: '64px',
    lineHeight: '68px',
    letterSpacing: '-1.5px'
  },
  /** deprecated */
  [textLevels.N3]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H3,
    fontSize: '52px',
    lineHeight: '62px',
    letterSpacing: '-1px'
  },
  /** deprecated */
  [textLevels.N4]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H4,
    fontSize: '36px',
    lineHeight: '48px',
    letterSpacing: '-1px'
  },
  /** deprecated */
  [textLevels.N5]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H4,
    fontSize: '28px',
    lineHeight: '40px',
    letterSpacing: '0px'
  }
}

const textStyleBTR = {
  /** deprecated */
  [textLevels.BTR1]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    fontSize: '18px',
    lineHeight: '24px',
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTR2]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    htmlTag: textTags.Span
  },
  [textLevels.BTR3]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
    htmlTag: textTags.Span
  },
  [textLevels.BTR4]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0px',
    htmlTag: textTags.Span
  },
  [textLevels.BTR5]: {
    fontFamily: FontFamily.Text,
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    fontSize: '10px',
    lineHeight: '12px',
    letterSpacing: '0px',
    htmlTag: textTags.Span
  }
}

const textStyleBTM = {
  /** deprecated */
  [textLevels.BTM1]: {
    ...textStyleBTR[TextTypes.BTR1],
    fontWeight: FontWeight.Medium
  },
  [textLevels.BTM2]: {
    ...textStyleBTR[TextTypes.BTR2],
    fontWeight: FontWeight.Medium
  },
  [textLevels.BTM3]: {
    ...textStyleBTR[TextTypes.BTR3],
    fontWeight: FontWeight.Medium
  },
  [textLevels.BTM4]: {
    ...textStyleBTR[TextTypes.BTR4],
    fontWeight: FontWeight.Medium
  },
  [textLevels.BTM5]: {
    ...textStyleBTR[TextTypes.BTR5],
    fontWeight: FontWeight.Medium
  }
}

const textStyleMTR = {
  [textLevels.MTR3]: {
    ...textStyleBTR[TextTypes.BTR3],
    fontFamily: FontFamily.Mono
  },
  [textLevels.MTR4]: {
    ...textStyleBTR[TextTypes.BTR4],
    fontFamily: FontFamily.Mono
  }
}

/** @deprecated */
const textStyleLink = {
  /** deprecated */
  [textLevels.L1]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px'
  },
  /** deprecated */
  [textLevels.L2]: {
    fontFamily: FontFamily.Primary,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  /** deprecated */
  [textLevels.L3]: {
    fontFamily: FontFamily.Primary,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  /** deprecated */
  [textLevels.L4]: {
    fontFamily: FontFamily.Primary,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  /** deprecated */
  [textLevels.L5]: {
    fontFamily: FontFamily.Primary,
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: FontWeight.SemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  }
}

export const textStyle: TextStyleList = {
  ...textStyleHeader,
  ...textStyleBTR,
  ...textStyleBTM,
  ...textStyleMTR,
  /** @deprecated */
  ...textStyleLink
}

export const getTextSizes = (level: TextLevel): TextSizes => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { htmlTag, ...textSizes } = textStyle[level]
  return textSizes
}

export const getTextCssSizes = (level: TextLevel): Record<string, string | number> => {
  const { htmlTag, ...textSizes } = textStyle[level]

  const cssTextSizes = Object.keys(textSizes).reduce((acc, key) => {
    const cssKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
    acc[cssKey] = textSizes[key as keyof TextSizes]
    return acc
  }, {} as Record<string, string | number>)
  return cssTextSizes
}

export const convertToCssString = (styles: { [s: string]: unknown } | ArrayLike<unknown>) => {
  const cssString = Object.entries(styles)
    .map(([key, value]) => {
      const cssKey = key.split(/(?=[A-Z])/).join('-').toLowerCase()
      return `${cssKey}: ${value};\n`
    })
    .join(' ')

  return cssString
}

export type LabelPosition = 'none' | 'top' | 'aside' | 'right'
export type LabelType = 'default' | 'full' | 'stretch'
