import { NotificationColorConfig, NotificationMode } from '../../../../src/notification/types'
import { ComponentThemeContext } from '../config'

export const notification = ({ colors }: ComponentThemeContext): Record<NotificationMode, NotificationColorConfig> => ({
  error: {
    background: colors.criticalitystatuses.critical,
    color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite,
    separator: colors.elements['separator-invert']
  },
  warning: {
    background: colors.criticalitystatuses.medium,
    color: colors.fixedNeutralColors.fixedneutralcolor_base,
    separator: colors.elements['separator-bold']
  },
  success: {
    background: colors.criticalitystatuses.positive,
    color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite,
    separator: colors.elements['separator-invert']
  },
  info: {
    background: colors.statestatuses.new,
    color: colors.fixedNeutralColors.fixedneutralcolor_base,
    separator: colors.elements['separator-bold']
  }
})
