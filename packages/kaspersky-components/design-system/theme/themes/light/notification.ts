import { NotificationColorConfig, NotificationCommonModeCssProps, NotificationMode } from '../../../../src/notification/types'
import { ComponentThemeContext } from '../config'

export const notification = ({ colors }: ComponentThemeContext): Record<NotificationMode, NotificationColorConfig> & {common: NotificationCommonModeCssProps} => ({
  info: {
    normal: {
      background: colors.statestatuses.resolved_solved,
      color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite
    }
  },
  success: {
    normal: {
      background: colors.criticalitystatuses.positive,
      color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite
    }
  },
  error: {
    normal: {
      background: colors.criticalitystatuses.critical,
      color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite
    }
  },
  infoAccent: {
    normal: {
      background: colors.statestatuses.inincedent,
      color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite
    }
  },
  common: {
    iconColor: colors.fixedNeutralColors.fixedneutralcolor_primarywhite
  }
})
