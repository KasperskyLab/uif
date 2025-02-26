import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { SiderProps as AntSiderProps } from 'antd'
import { PropsWithChildren, ReactNode } from 'react'

export type UserStatus = 'available' | 'unavailable'

export type NavItemData = {
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key?: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: NavItemData[],
  onClick?: () => void,
  condition?: () => boolean,
  path?: string[],
  additionalElements?: ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,

  isCaption?: boolean,
  expanded?: boolean,
  active?: boolean,
  mode?: 'user' | undefined,
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After | undefined
}

type UserProps = {
  role?: string,
  name?: string,
  status?: UserStatus
}

export type NavItemProps = {
  className?: string,
  data: NavItemData,
  key: string,
  menuState?: any,
  userProps?: UserProps,
  favsEnabled?: boolean,
  component?: any,
  isCaption?: boolean,
  _isChild?: boolean
} & TestingProps & MenuApplyTheme & MenuThemeProps

export type NavProps = {
  beforeItems?: any,
  navItems: any,
  className?: string,
  minimized?: boolean,
  childPop?: boolean,
  inert?: boolean,
  favsEnabled?: boolean,
  favItems?: any
} & MenuApplyTheme

export type StateActions = {
  toggleExpandItem?: string,
  toggleExpandItemOne?: string,
  activateItem?: string,
  collapseAll?: boolean
}

export type MenuToViewProps<T> = ToViewProps<T, MenuCssConfig>

export type MenuThemeProps = {
  theme?: Theme
}

export type MenuApplyTheme = { applyAppTheme?: boolean }

export type MenuCssConfig = MenuColorConfig

export type MenuColorConfig = {
  background?: string,
  borderColor?: string,
  popBg?: string,
  popShadow?: string,
  roleColor?: string,
  captionColor?: string,
  dividerColor?: string,
  unselected?: NavItemCssState,
  selected?: NavItemCssState
}

type NavItemCssState = {
  enabled?: NavItemColors,
  hover?: NavItemColors,
  active?: NavItemColors
}

type NavItemColors = {
  color?: string,
  background?: string
}

export enum ItemDivider {
  'Before' = 'before',
  'After' = 'after'
}

export type HamburgerProps = { className: string, role: string, name: string, onClick: () => void }

export type MenuProps = PropsWithChildren<MenuThemeProps> & TestingProps & AntSiderProps & MenuApplyTheme
export type MenuViewProps = MenuToViewProps<MenuProps>
