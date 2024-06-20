import { PropsWithChildren, ReactNode } from 'react'
import { SiderProps as AntSiderProps } from 'antd'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { Theme } from '@design-system/types'

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
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After
}

type UserProps = {
  role?: string,
  name?: string
}

export type NavItemProps = {
  className?: string,
  data: NavItemData,
  key: string,
  menuState?: any,
  userProps?: UserProps,
  favsEnabled?: boolean,
  component?: any,
  isCaption?: boolean
}

export type NavProps = {
  beforeItems?: any,
  navItems: any,
  className?: string,
  minimized?: boolean,
  childPop?: boolean,
  inert?: boolean,
  favsEnabled?: boolean,
  favItems?: any
}

export type StateActions = {
  toggleExpandItem?: string,
  toggleExpandItemOne?: string,
  activateItem?: string,
  collapseAll?: boolean
}

export type MenuToViewProps<T> = ToViewProps<T, MenuCssConfig, MenuThemeProps>

export type MenuThemeProps = {
  theme?: Theme
}

export type MenuCssConfig = MenuColorConfig

export type MenuColorConfig = {
  background?: string,
  popBg?: string,
  roleColor?: string,
  captionColor?: string,
  unselected?: NavItemCssState,
  selected?: NavItemCssState
}

type NavItemCssState = {
  normal?: NavItemColors,
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

export type MenuProps = PropsWithChildren<MenuThemeProps> & TestingProps & AntSiderProps
export type MenuViewProps = MenuToViewProps<AntSiderProps>
