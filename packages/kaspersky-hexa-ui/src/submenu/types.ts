import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ActionButtonProps } from '@src/action-button'
import { BadgeMode, BadgeProps } from '@src/badge'
import { IndicatorMode } from '@src/indicator'
import { ReactNode } from 'react'

type StateConfig = {
  color?: string,
  border?: string,
  icon?: string,
  background?: string
}

type SubmenuRowStateConfig = Record<'enabled' | 'hover' | 'active' | 'disabled', StateConfig>

export type SubmenuColorConfig = StateConfig & {
  title: StateConfig,
  row: Focus & Record<'unselected' | 'selected', SubmenuRowStateConfig>
}

export type SubmenuCssConfig = SubmenuColorConfig

export type SubmenuThemeProps = {
  /** Custom theme */
  theme?: Theme
}

type ActionProps = Pick<ActionButtonProps, 'onClick' | 'icon'>

export type BadgeNotificationMode = Extract<BadgeMode, 'new' | 'critical'>

type BadgeNotification = {
  type: 'badge',
  mode: BadgeNotificationMode
} & Pick<BadgeProps, 'title' | 'count' | 'text' | 'overflowCount' | 'showZero'>

export type IndicatorNotificationMode = Extract<IndicatorMode, 'new' | 'critical' | 'medium'>

type IndicatorNotification = {
  type: 'indicator',
  mode: IndicatorNotificationMode
}

export type RowProps = {
  type: 'row',
  key: string,
  text: string,
  content: ReactNode,
  contentClassName?: string,
  disabled?: boolean,
  draggable?: boolean,
  iconBefore?: ReactNode,
  elementAfter?: ReactNode,
  notification?: BadgeNotification | IndicatorNotification,
  action?: ActionProps,
  children?: RowProps[]
}

export type TitleProps = {
  type: 'title',
  key: string,
  text: string,
  action?: ActionProps
}

export type DividerProps = {
  type: 'divider'
}

export type SubmenuItemProps = DividerProps | TitleProps | RowProps

export type SubmenuItemType = 'row' | 'title' | 'divider'

export type SubmenuProps = SubmenuThemeProps & TestingProps & {
  /** Array of submenu items */
  items: SubmenuItemProps[],
  /** Current submenu item key */
  activeKey?: string,
  /** Callback executed when active submenu item is changed */
  onChange?: (activeKey: string) => void,
  /** Should truncate text if the text is too long */
  truncateText?: boolean,
  /** Should collapse submenu item tree when clicking on its text */
  collapseOnTextClick?: boolean,
  /** Element before */
  elementBefore?: ReactNode,
  /** Element after */
  elementAfter?: ReactNode
}

export type SubmenuViewProps = ToViewProps<SubmenuProps, SubmenuCssConfig, SubmenuThemeProps>

export type LeveledRowProps = RowProps & {
  level?: number,
  opened?: boolean,
  extraLeftPadding?: number,
  children?: LeveledRowProps[]
}

export type LeveledSubmenuItemProps = DividerProps | TitleProps | LeveledRowProps

export type CommonSubComponentProps = {
  truncateText: boolean,
  collapseOnTextClick: boolean,
  activeRowKey?: string,
  handleActiveRowChange: (row: LeveledRowProps) => void,
  cssConfig: SubmenuCssConfig
}

export type RowViewProps = Omit<CommonSubComponentProps, 'activeRowKey' | 'handleActiveRowChange'> & {
  row: LeveledRowProps,
  selected: boolean,
  collapsible: boolean,
  onCollapsibleClick?: () => void,
  onClick?: () => void
}
