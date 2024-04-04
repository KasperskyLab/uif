import { ComponentThemeContext } from '../config'
import { ExpandableTextColorConfig } from '@src/expandable-text/types'
import { expandableText as defaultExpandableText } from '../light/expandableText'

export const expandableText = ({ colors }: ComponentThemeContext): ExpandableTextColorConfig =>
  defaultExpandableText({ colors })
