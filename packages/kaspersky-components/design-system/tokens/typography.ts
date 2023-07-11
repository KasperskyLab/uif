export enum FontFamily {
  Primary = 'Kaspersky Sans',
}
export enum FontWeight {
  Thin = 100,
  SemiLight = 200,
  Light = 300,
  Regular = 400,
  DemiBold = 500,
  Bolder = 600,
  Bold = 700,
  ExtraBold = 900
}

export enum HeadingTypes {
  H1 = 'Header/H1',
  H2 = 'Header/H2',
  H3 = 'Header/H3',
  H4 = 'Header/H4',
  S1 = 'Subheader/S1',
  S2 = 'Subheader/S2',
  S3 = 'Subheader/S3',
  S4 = 'Subheader/S4',
  N1 = 'Number/N1',
  N2 = 'Number/N2',
  N3 = 'Number/N3',
  N4 = 'Number/N4',
  N5 = 'Number/N5'
}

export enum TextTypes {
  BTM1 = 'BodyTextMedium/1',
  BTM2 = 'BodyTextMedium/2',
  BTM3 = 'BodyTextMedium/3',
  BTM4 = 'BodyTextMedium/4',
  BTM5 = 'BodyTextMedium/5',
  BTR1 = 'BodyTextRegular/1',
  BTR2 = 'BodyTextRegular/2',
  BTR3 = 'BodyTextRegular/3',
  BTR4 = 'BodyTextRegular/4',
  BTR5 = 'BodyTextRegular/5',
  L1 = 'Link/L1',
  L2 = 'Link/L2',
  L3 = 'Link/L3',
  L4 = 'Link/L4',
  L5 = 'Link/L5',
}

export enum FontStyle {
  Normal = 'normal',
  Italic = 'Italic'
}
export const textLevels = {
  ...HeadingTypes,
  ...TextTypes
} as const

export type TextLevel = typeof textLevels[keyof typeof textLevels]

export const textTags = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  P: 'p',
  Pre: 'pre',
  Span: 'span'
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

export const textStyle: TextStyleList = {
  [textLevels.H1]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.Bold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H1,
    fontSize: '52px',
    lineHeight: '62px',
    letterSpacing: '-0.5px'
  },
  [textLevels.H2]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.Bold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H2,
    fontSize: '36px',
    lineHeight: '48px',
    letterSpacing: '-0.5px'
  },
  [textLevels.H3]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.Bold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H3,
    fontSize: '28px',
    lineHeight: '36px',
    letterSpacing: '0'
  },
  [textLevels.H4]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.Bold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H4,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0'
  },
  [textLevels.S1]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H1,
    fontSize: '52px',
    lineHeight: '62px',
    letterSpacing: '-0.5px'
  },
  [textLevels.S2]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H2,
    fontSize: '36px',
    lineHeight: '48px',
    letterSpacing: '-0.5px'
  },
  [textLevels.S3]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H3,
    fontSize: '28px',
    lineHeight: '40px',
    letterSpacing: '0'
  },
  [textLevels.S4]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H4,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0'
  },
  [textLevels.N1]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H1,
    fontSize: '80px',
    lineHeight: '88px',
    letterSpacing: '-1.5px'
  },
  [textLevels.N2]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H2,
    fontSize: '64px',
    lineHeight: '68px',
    letterSpacing: '-1.5px'
  },
  [textLevels.N3]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H3,
    fontSize: '52px',
    lineHeight: '62px',
    letterSpacing: '-1px'
  },
  [textLevels.N4]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H4,
    fontSize: '36px',
    lineHeight: '48px',
    letterSpacing: '-1px'
  },
  [textLevels.N5]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.H4,
    fontSize: '28px',
    lineHeight: '40px',
    letterSpacing: '0px'
  },
  [textLevels.BTM1]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px'
  },
  [textLevels.BTR1]: {
    fontFamily: FontFamily.Primary,
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTM2]: {
    fontFamily: FontFamily.Primary,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTR2]: {
    fontFamily: FontFamily.Primary,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTM3]: {
    fontFamily: FontFamily.Primary,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTR3]: {
    fontFamily: FontFamily.Primary,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTM4]: {
    fontFamily: FontFamily.Primary,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTR4]: {
    fontFamily: FontFamily.Primary,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTM5]: {
    fontFamily: FontFamily.Primary,
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.BTR5]: {
    fontFamily: FontFamily.Primary,
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: FontWeight.Regular,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.L1]: {
    fontFamily: FontFamily.Primary,
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px'
  },
  [textLevels.L2]: {
    fontFamily: FontFamily.Primary,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.L3]: {
    fontFamily: FontFamily.Primary,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.L4]: {
    fontFamily: FontFamily.Primary,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  },
  [textLevels.L5]: {
    fontFamily: FontFamily.Primary,
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: FontWeight.DemiBold,
    fontStyle: FontStyle.Normal,
    htmlTag: textTags.Span,
    letterSpacing: '0px'
  }
}

export const getTextSizes = (level: TextLevel): TextSizes => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { htmlTag, ...textSizes } = textStyle[level]
  return textSizes
}

export type LabelPosition = 'none' | 'top' | 'aside' | 'right'
export type LabelType = 'default' | 'full' | 'stretch'
