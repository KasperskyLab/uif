import { focus } from '@design-system/tokens/focus'
import { getTextSizes } from '@design-system/tokens/typography'
import { BreadcrumbsColorConfig, BreadcrumbsSize, BreadcrumbsSizeConfig } from '@src/breadcrumbs/types'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ComponentThemeContext } from '../config'

export const breadcrumbs = ({ colors, effects }: ComponentThemeContext): BreadcrumbsColorConfig => {
  return {
    enabled: {
      color: colors.breadcrumbs.text.enabled
    },
    hover: {
      color: colors.breadcrumbs.text.hover
    },
    selected: {
      color: colors.breadcrumbs.text.selected
    },
    disabled: {
      color: colors.breadcrumbs.text.disabled
    },
    ...focus({ colors, effects })
  }
}

export const breadcrumbsSize: Record<BreadcrumbsSize, BreadcrumbsSizeConfig> = {
  small: {
    gap: '4px',
    ...getTextSizes(TextTypes.BTM4)
  },
  medium: {
    gap: '8px',
    ...getTextSizes(TextTypes.BTM3)
  }
}
