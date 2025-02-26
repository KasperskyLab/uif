interface DeprecatedToActualMap {
  [key: string]: string | undefined
}

const commonDeprecatedMapper: DeprecatedToActualMap = {
  infoAccent: 'info',
  black: 'neutral',
  dot: 'Indicator',
  primaryBlue: 'primary',
  primaryBlack: 'primary',
  danger: 'dangerFilled',
  invertedPrimary: 'primary',
  invertedSecondary: 'secondary',
  invertedTertiary: 'tertiary',
  default: 'accent'
}

export const showDeprecationWarn = (
  prop: string,
  deprecatedPropType: string
) => {
  console.warn(
    commonDeprecatedMapper[deprecatedPropType]
      ? `'${prop}' = '${deprecatedPropType}' is deprecated. Use '${commonDeprecatedMapper[deprecatedPropType]}' instead`
      : `'${prop}' = '${deprecatedPropType}' is deprecated.`
  )
}
