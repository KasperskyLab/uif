import { Theme } from '@design-system/types'
import { TestingAttributes, TestingProps } from '@helpers/typesHelpers'
import { ActionButtonProps } from '@src/action-button'
import { BadgeMode, BadgeProps } from '@src/badge'
import { IndicatorMode } from '@src/indicator'
import { ReactNode } from 'react'

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
  description?: string, 
  content?: ReactNode,
  contentClassName?: string,
  disabled?: boolean,
  draggable?: boolean,
  iconBefore?: ReactNode,
  elementAfter?: ReactNode,
  hoverElementAfter?: ReactNode,
  notification?: BadgeNotification | IndicatorNotification,
  action?: ActionProps,
  children?: RowProps[],
  /** Callback triggered when a submenu row is clicked 
   * Useful when the product wants to fully control click behavior
   * to display custom content.
   * 
   * If callback returns false - it prevents the default submenu activation
  */
  onClick?: (key: string, row?: RowProps) => boolean | void | Promise<boolean | void>
} & TestingProps

export type TitleProps = {
  type: 'title',
  key: string,
  text: string,
  action?: ActionProps
} & TestingProps

export type DividerProps = {
  type: 'divider'
}

export type SubmenuItemProps = DividerProps | TitleProps | RowProps

export type SubmenuItemType = 'row' | 'title' | 'divider'

export type SubmenuProps = SubmenuThemeProps & TestingProps & {
  /** Array of submenu items */
  items: SubmenuItemProps[],
  /** Initial submenu item key, if activeKey is not set */
  defaultActiveKey?: string,
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

export type LeveledRowProps = RowProps & {
  level?: number,
  opened?: boolean,
  extraLeftPadding?: number,
  testAttributes?: TestingAttributes,
  children?: LeveledRowProps[]
}

export type LeveledSubmenuItemProps = DividerProps | TitleProps | LeveledRowProps

export type CommonSubComponentProps = {
  truncateText: boolean,
  collapseOnTextClick: boolean,
  activeRowKey?: string,
  handleActiveRowChange: (row: LeveledRowProps) => void
}

export type RowViewProps = Omit<CommonSubComponentProps, 'activeRowKey' | 'handleActiveRowChange'> & {
  row: LeveledRowProps,
  selected: boolean,
  collapsible: boolean,
  onCollapsibleClick?: () => void,
  onClick?: () => void
}
