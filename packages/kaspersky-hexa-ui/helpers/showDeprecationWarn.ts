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
  deprecatedPropType: string,
  message?: string
) => {
  let warning = `'${prop}' = '${deprecatedPropType}' is deprecated.`

  if (commonDeprecatedMapper[deprecatedPropType]) {
    warning += ` Use '${commonDeprecatedMapper[deprecatedPropType]}' instead`
  } else if (message) {
    warning += ` ${message}`
  }

  console.warn(warning)
}
