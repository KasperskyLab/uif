import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types/Theme'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { IndicatorMode } from '@src/indicator'
import { TabPaneProps } from 'antd'
import {
  CSSProperties,
  FC,
  KeyboardEvent,
  MouseEvent,
  PropsWithChildren,
  ReactNode
} from 'react'

type StateProps = {
  color?: string,
  border?: string,
  background?: string
}

type TabsStateConfig = {
  enabled?: StateProps,
  hover?: StateProps,
  pressed?: StateProps,
  disabled?: StateProps
}

export type TabsColorConfig = Focus & {
  selected: TabsStateConfig,
  unselected: TabsStateConfig,
  divider: StateProps
}

export type TabsCssConfig = TabsColorConfig

export type TabsThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type TabsVariants = {
  TabPane: FC<TabPaneProps>,
  TabPaneHead: FC<TabPaneHeadProps>
}

export type ComplexTabBarExtraContent = { right?: ReactNode, left?: ReactNode }

export const tabPositionArray = ['top', 'left'] as const
export type TabPosition = typeof tabPositionArray[number]

export type TabsProps = TabsThemeProps & PropsWithChildren<{
  /** Extra content at left and right side of tabs. Intends should be set manually (until design review) */
  tabBarExtraContent?: ReactNode | ComplexTabBarExtraContent,
  /** TabPane's className */
  className?: string,
  /** Tabs position */
  tabPosition?: TabPosition,
  /** Current TabPane's key */
  activeKey?: string,
  /** Initial active TabPane's key, if activeKey is not set */
  defaultActiveKey?: string,
  /** Callback executed when active tab is changed 
  * If `false` is returned, tab transition will be prevented
  */
  onChange?: (activeKey: string) => void | boolean | Promise<void | boolean>,
  /** Callback executed when tab is clicked */
  onTabClick?: (activeKey: string, e: KeyboardEvent | MouseEvent) => void,
  /** Style properties */
  style?: CSSProperties,
  /** Whether destroy inactive TabPane when change tab */
  destroyInactiveTabPane?: boolean,
  /** Add horizontal padding (24px) */
  padding?: boolean,
  /** Removes the margin from the component */
  noMargin?: boolean
}> & TestingProps

type TabsToViewProps<T> = ToViewProps<T, TabsCssConfig>

export type TabsViewProps = TabsToViewProps<TabsProps>

export type TabPaneHeadProps = {
  /** Tab text */
  text: string,
  /** Icon before text */
  iconBefore?: ReactNode,
  /** Icon after text */
  iconAfter?: ReactNode,
  /** Tooltip content */
  infoTooltip?: ReactNode,
  /** Tooltip content for disabled tabs */
  disabledTooltip?: ReactNode,
  /** Badge counter */
  number?: number,
  /** Indicator after text */
  indicator?: boolean,
  /** Indicator mode,  */
  indicatorMode?: Extract<IndicatorMode, 'critical' | 'accent'>,
  cssConfig?: TabsCssConfig
} & TestingProps

export type StyledTabPanedHeadProps = { cssConfig: TabsCssConfig }

export type TabPaneHeaderProps = PropsWithChildren<{
  divider?: boolean,
  dividerClassName?: string,
  title?: ReactNode
}> & TabPaneProps

export type GroupTabsProps = Omit<TabsProps, 'tabPosition'>

export type GroupTabsVariants = {
  TabPaneHeader: FC<TabPaneHeaderProps>
}
