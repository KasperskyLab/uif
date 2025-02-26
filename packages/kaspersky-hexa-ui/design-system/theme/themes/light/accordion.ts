import { focus } from '@design-system/tokens/focus'
import { getTextSizes } from '@design-system/tokens/typography'
import { AccordionColorConfig, AccordionPanelSizeConfig, AccordionTitleSize } from '@src/accordion/types'

import { HeadingTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ComponentThemeContext } from '../config'

export const accordion = ({ colors, effects }: ComponentThemeContext): AccordionColorConfig => {
  return {
    enabled: {
      background: colors.accordion.bg.enabled,
      color: colors.accordion.text.enabled,
      border: colors.accordion.border.enabled,
      additionalTextColor: colors.accordion.text.additional
    },
    disabled: {
      background: colors.accordion.bg.disabled,
      color: colors.accordion.text.disabled,
      border: colors.accordion.bg.disabled
    },
    ...focus({ colors, effects })
  }
}

export const accordionSize: Record<AccordionTitleSize, AccordionPanelSizeConfig> = {
  small: {
    ...getTextSizes(HeadingTypes.H6)
  },
  medium: {
    ...getTextSizes(HeadingTypes.H5)
  },
  large: {
    ...getTextSizes(HeadingTypes.H4)
  }
}
