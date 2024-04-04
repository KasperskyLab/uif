import { ComponentThemeContext } from '../config'

export const notification = ({ colors }: ComponentThemeContext) => ({
  error: {
    background: colors.criticalitystatuses.critical,
    color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite,
    separator: colors.elements['separator-bold']
  },
  warning: {
    background: colors.criticalitystatuses.medium,
    color: colors.fixedNeutralColors.fixedneutralcolor_base,
    separator: colors.elements['separator-bold-invert']
  },
  success: {
    background: colors.criticalitystatuses.positive,
    color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite,
    separator: colors.elements['separator-bold']
  },
  info: {
    background: colors.statestatuses.new,
    color: colors.fixedNeutralColors.fixedneutralcolor_base,
    separator: colors.elements['separator-bold-invert']
  }
})
