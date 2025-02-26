import { cssVarString } from '../tokens/tokens'

export const typographyCssVarString = cssVarString

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
  ExtraBold = 900
}

export enum FontStyle {
  Normal = 'normal'
}

export enum HeadingTypes {
  H1 = 'Header/H1',
  H2 = 'Header/H2',
  H3 = 'Header/H3',
  H4 = 'Header/H4',
  H5 = 'Header/H5',
  H6 = 'Header/H6'
}

export enum TextTypes {
  BTM2 = 'BodyTextMedium/BTM2',
  BTM3 = 'BodyTextMedium/BTM3',
  BTM4 = 'BodyTextMedium/BTM4',
  BTM5 = 'BodyTextMedium/BTM5',
  BTR2 = 'BodyTextRegular/BTR2',
  BTR3 = 'BodyTextRegular/BTR3',
  BTR4 = 'BodyTextRegular/BTR4',
  BTR5 = 'BodyTextRegular/BTR5'
}

export enum MonoTextTypes {
  MTR3 = 'MonoTextRegular/MTR3',
  MTR4 = 'MonoTextRegular/MTR4'
}

export const textLevels = {
  ...HeadingTypes,
  ...TextTypes,
  ...MonoTextTypes
} as const

export type TextLevel = typeof textLevels[keyof typeof textLevels]

export const textTags = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
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

export type Typography = TextSizes & { htmlTag: TextTag }

type TypographyList = {
  [textLevel in TextLevel]: Typography
}

const typographyHeader = {
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
  }
}

const typographyBTR = {
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

const typographyBTM = {
  [textLevels.BTM2]: {
    ...typographyBTR[TextTypes.BTR2],
    fontWeight: FontWeight.Medium
  },
  [textLevels.BTM3]: {
    ...typographyBTR[TextTypes.BTR3],
    fontWeight: FontWeight.Medium
  },
  [textLevels.BTM4]: {
    ...typographyBTR[TextTypes.BTR4],
    fontWeight: FontWeight.Medium
  },
  [textLevels.BTM5]: {
    ...typographyBTR[TextTypes.BTR5],
    fontWeight: FontWeight.Medium
  }
}

const typographyMTR = {
  [textLevels.MTR3]: {
    ...typographyBTR[TextTypes.BTR3],
    fontFamily: FontFamily.Mono
  },
  [textLevels.MTR4]: {
    ...typographyBTR[TextTypes.BTR4],
    fontFamily: FontFamily.Mono
  }
}

export const typography: TypographyList = {
  ...typographyHeader,
  ...typographyBTR,
  ...typographyBTM,
  ...typographyMTR
}
