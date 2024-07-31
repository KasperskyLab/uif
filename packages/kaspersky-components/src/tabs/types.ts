import {
  PropsWithChildren,
  ReactNode,
  KeyboardEvent,
  MouseEvent,
  CSSProperties,
  FC
} from 'react'
import { IndicatorMode } from '@src/indicator'
import { SpaceProps } from '@src/space'
import { Theme } from '@design-system/types/Theme'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { TabPaneProps } from 'antd'
import { Focus } from '@design-system/tokens/focus'

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
  unSelected: TabsStateConfig,
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

export type TabsProps = TabsThemeProps & PropsWithChildren<{
  /** @deprecated Tabs type - card tabs are not supported */
  type?: 'line' | 'card',
  /** Extra content at left and right side of tabs. Intends should be set manually (until design review) */
  tabBarExtraContent?: ReactNode | { right?: ReactNode, left?: ReactNode },
  /** TabPane's className */
  className?: string,
  /** Tabs position */
  tabPosition?: 'top' | 'left',
  /** Current TabPane's key */
  activeKey?: string,
  /** Initial active TabPane's key, if activeKey is not set */
  defaultActiveKey?: string,
  /** Callback executed when active tab is changed */
  onChange?: (activeKey: string) => void,
  /** Callback executed when tab is clicked */
  onTabClick?: (activeKey: string, e: KeyboardEvent | MouseEvent) => void,
  /** Style properties */
  style?: CSSProperties,
  /** Whether destroy inactive TabPane when change tab */
  destroyInactiveTabPane?: boolean
}> & TestingProps

type TabsToViewProps<T> = ToViewProps<T, TabsCssConfig>

export type TabsViewProps = TabsToViewProps<TabsProps> & { rootHashClass?: string }

export type TabPaneHeadProps = {
  text: string,
  /** Icon before text */
  iconBefore?: ReactNode,
  /** Icon after text */
  iconAfter?: ReactNode,
  /** @deprecated Use 'iconBefore' prop instead */
  icon?: ReactNode,
  number?: number,
  indicator?: boolean,
  indicatorMode?: IndicatorMode,
  cssConfig?: TabsCssConfig,
  /** @deprecated Disabled state - use TabPane disabled prop instead */
  disabled?: boolean
}

export type StyledTabPanedHeadProps = SpaceProps & { cssConfig: TabsCssConfig }

export type TabPaneHeaderProps = PropsWithChildren<{
  divider?: boolean,
  dividerClassName?: string,
  title?: ReactNode
}> & TabPaneProps

export type GroupTabsProps = Omit<TabsProps, 'tabPosition'>

export type GroupTabsVariants = {
  TabPaneHeader: FC<TabPaneHeaderProps>
}

/** @deprecated Use TabsProps instead */
export type ITabsProps = TabsProps
/** @deprecated Use TabsViewProps instead */
export type ITabsViewProps = TabsViewProps
/** @deprecated Use TabPaneHeadProps instead */
export type ITabPaneHeadProps = TabPaneHeadProps
/** @deprecated Use TabThemeProps instead */
export type TabsStyleProps = TabsThemeProps
