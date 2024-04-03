import { ComponentThemeContext } from '../config'
import { AccordionColorConfig, AccordionPanelSizeConfig, AccordionTitleSize } from '@src/accordion/types'
import { getTextSizes, HeadingTypes } from './typography'
import { focus } from '@design-system/tokens/focus'

export const accordion = ({ colors }: ComponentThemeContext): AccordionColorConfig => {
  return {
    default: {
      background: 'transparent',
      color: colors.textIconsElements.primary,
      borderColor: colors.elements['separator-bold-solid'],
      additionalTextColor: colors.textIconsElements.secondary2
    },
    disabled: {
      background: colors.elements['separator-solid'],
      color: colors.textIconsElements['disabled-solid'],
      borderColor: colors.elements['separator-solid']
    },
    ...focus({ colors })
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
