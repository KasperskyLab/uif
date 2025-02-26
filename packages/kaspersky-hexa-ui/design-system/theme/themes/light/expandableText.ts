import { focus } from '@design-system/tokens/focus'
import { ExpandableTextColorConfig } from '@src/expandable-text/types'

import { ComponentThemeContext } from '../config'

export const expandableText = ({ colors, effects }: ComponentThemeContext): ExpandableTextColorConfig => ({
  ...focus({ colors, effects })
})
