import { ExpandableTextColorConfig } from '@src/expandable-text/types'

import { ComponentThemeContext } from '../config'
import { expandableText as defaultExpandableText } from '../light/expandableText'

export const expandableText = ({ colors, effects }: ComponentThemeContext): ExpandableTextColorConfig =>
  defaultExpandableText({ colors, effects })
