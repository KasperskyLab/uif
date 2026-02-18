import { Focus } from '@design-system/tokens/focus'
import { Size, Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { BadgeLargeMode, BadgeSize } from '@src/badge/types'
import { IndicatorMode } from '@src/indicator'
import { MouseEventHandler, ReactNode } from 'react'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

export type SegmentedControlToViewProps<T> = ToViewProps<T, SegmentedControlCssConfig, SegmentedControlThemeProps>

export type SegmentedControlSize = `${Exclude<Size, Size.ExtraSmall | Size.ExtraLarge>}`

export type SegmentedControlSizeConfig = TextSizes & {
  padding?: string,
  height?: string,
  radius?: string
}

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type SegmentedControlColorConfig = {
  bar: {
    background?: string,
    dividerColor?: string
  },
  button: Focus & {
    enabled?: StateProps,
    hover?: StateProps,
    active?: StateProps,
    disabled?: StateProps
  }
}

export type SegmentedControlCounterMode = BadgeLargeMode

export type SegmentedControlCssConfig = SegmentedControlSizeConfig & SegmentedControlColorConfig

export type SegmentedControlThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Size */
  size?: SegmentedControlSize
}

export type SegmentedControlProps = {
  /** Tabs Data */
  tabsData: SegmentedControlItemProps[],
  /** Content Data */
  contentData: Record<string, (properties: SegmentedContentProperties | undefined) => ReactNode>,
  /** Custom class name */
  className?: string,
  /** Initial segmented control item name */
  defaultActiveTab?: string
} & SegmentedControlThemeProps & TestingProps

export type SegmentedControlItemProps = {
  disabled?: boolean,
  className?: string,
  iconBefore?: ReactNode,
  infoTooltip?: string,
  counter?: SegmentedControlItemCounter,
  indicator?: IndicatorMode,
  onClick?: MouseEventHandler<HTMLElement>,
  text?: string,
  role?: string,
  name?: string,
  content?: string,
  properties?: SegmentedContentProperties
}

export type SegmentedControlItemCounter = {
  number: number,
  mode?: SegmentedControlCounterMode
}

export type SegmentedControlItemClickProps = {
  name?: string,
  content?: string,
  properties?: SegmentedContentProperties
}

export type SegmentedContentProperties = Record<string, unknown>

export type SegmentedControlViewProps = SegmentedControlToViewProps<SegmentedControlProps> & {
  badgeSize?: BadgeSize
}
