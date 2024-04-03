import { ComponentProps } from 'react'
import { Text } from '@src/typography'
import { ToViewProps } from '@helpers/typesHelpers'
import { Theme } from '@design-system/types'
import { Focus } from '@design-system/tokens/focus'

type StateProps = {
  color?: string
}

export type ExpandableTextColorConfig = Focus & {
  normal?: StateProps
}

export type ExpandableTextCssConfig = ExpandableTextColorConfig

export type ExpandableTextThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type ExpandableTextProps = ComponentProps<typeof Text> & ExpandableTextThemeProps & {
  /** Alternative text */
  altText?: string
}

export type ExpandableTextViewProps = ToViewProps<ExpandableTextProps, ExpandableTextCssConfig, ExpandableTextThemeProps>

export type StyledTextProps = {
  expanded: boolean,
  clipped: boolean,
  cssConfig: ExpandableTextCssConfig
}

/** @deprecated Use ExpandableTextProps instead */
export type IExpandableTextProps = ExpandableTextProps
/** @deprecated Use ExpandableTextViewProps instead */
export type IExpandableTextViewProps = ExpandableTextViewProps
/** @deprecated Use StyledTextProps instead */
export type IStyledTextProps = StyledTextProps
