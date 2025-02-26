import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { ToViewProps } from '@helpers/typesHelpers'
import { Text } from '@src/typography'
import { ComponentProps } from 'react'

export type ExpandableTextColorConfig = Focus

export type ExpandableTextCssConfig = ExpandableTextColorConfig

export type ExpandableTextThemeProps = {
  /** Custom theme */
  theme?: Theme
}

type SafeExpandableTextProps = ExpandableTextThemeProps & {
  /** Alternative text */
  altText?: string,
  /** Function-trigger when text expanded */
  onExpand?: (expanded: boolean) => void
}
export type ExpandableTextProps = ComponentProps<typeof Text> & SafeExpandableTextProps

export type ExpandableTextViewProps =
  ComponentProps<typeof Text> &
  ToViewProps<SafeExpandableTextProps, ExpandableTextCssConfig, ExpandableTextThemeProps>

export type StyledTextProps = {
  expanded: boolean,
  clipped: boolean,
  cssConfig: ExpandableTextCssConfig
}
