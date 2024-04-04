import { ComponentThemeContext } from '../config'
import { ExpandableTextColorConfig } from '@src/expandable-text/types'
import { focus } from '@design-system/tokens/focus'

export const expandableText = ({ colors }: ComponentThemeContext): ExpandableTextColorConfig => ({
  normal: {
    color: colors.textIconsElements.primary
  },
  ...focus({ colors })
})
