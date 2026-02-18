import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { SubmenuItemProps } from '@src/submenu'
import { SiderProps as AntSiderProps } from 'antd'
import { Dispatch, PropsWithChildren, ReactNode, SetStateAction } from 'react'

export type UserStatus = 'available' | 'unavailable'

export type NavItemNotifications = {
  critical?: number,
  warning?: number,
  info?: number,
  multi?: number,
}

export type NavItemData = {
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key?: string,
  id?: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: NavItemData[],
  onClick?: () => void,
  condition?: <T>(state: T) => boolean,
  path?: string[],
  additionalElements?: ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,
  elementAfter?: ReactNode,
  /** not ready to use in production */
  submenuItems?: SubmenuItemProps[],
  isCaption?: boolean,
  expanded?: boolean,
  active?: boolean,
  disabled?: boolean,
  mode?: 'user',
  userProps?: UserProps,
  itemDivider?: ItemDivider.Before | ItemDivider.After,
  notifications?: NavItemNotifications | (() => NavItemNotifications),
  canBeAddedAsFav?: boolean,
  skipActivation?: boolean,
  /** Number of lines after which the content will be clamped */
  lineClamp?: number
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
  elementAfter?: ReactNode,
  isCaption?: boolean,
  disabled?: boolean,
  _isChild?: boolean,
  onFavChanged?: OnFavChangedCallback,
  pinIcon?: ReactNode,
  unpinIcon?: ReactNode,
  skipActivation?: boolean
} & TestingProps & MenuApplyTheme & MenuThemeProps

export type NavProps = {
  beforeItems?: any,
  navItems: any,
  className?: string,
  minimized?: boolean,
  childPop?: boolean,
  inert?: boolean,
  favsEnabled?: boolean,
  favsExpanded?: boolean,
  favItems?: any,
  onItemsChanged?: OnItemsChangedCallback,
  onFavChanged?: OnFavChangedCallback,
  onFavToggle?: OnFavToggleCallback,
  pinIcon?: ReactNode,
  unpinIcon?: ReactNode,
  favIcon?: ReactNode
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

export type HamburgerProps = {
  className?: string,
  role?: string,
  name?: string,
  onClick: () => void,
  collapsed?: boolean
}

export type MenuProps = PropsWithChildren<MenuThemeProps> &
TestingProps &
AntSiderProps &
MenuApplyTheme & {
  beforeItems?: NavItemData[],
  favItems?: NavItemData[],
  favsExpanded?: boolean,
  navItems?: NavItemData[],
  navUserItems?: NavItemData[],
  submenuMarginActive?: boolean,
  /** not ready to use in production */
  submenuItems?: SubmenuItemProps[],
  onItemsChanged?: OnItemsChangedCallback,
  onFavChanged?: OnFavChangedCallback,
  onFavToggle?: OnFavToggleCallback,
  pinIcon?: ReactNode,
  unpinIcon?: ReactNode
  favIcon?: ReactNode,
  minimizerBottom?: boolean
}

export type MenuViewProps = MenuToViewProps<MenuProps>

export type MenuSubmenuProps = {
  active: boolean,
  items: SubmenuItemProps[]
}

export type MenuContextProps = {
  setSubmenuItems?: Dispatch<SetStateAction<SubmenuItemProps[]>>,
  setSubmenuMarginActive?: Dispatch<SetStateAction<boolean>>,
  setSubmenuActive?: Dispatch<SetStateAction<boolean>>,
  applyAppTheme?: boolean,
  menuActiveItem: string,
  setMenuActiveItem: Dispatch<SetStateAction<string>>,
  menuActivePopupItem: string,
  setMenuActivePopupItem: Dispatch<SetStateAction<string>>
}

export type OnItemsChangedCallbackType = 'toggleItem' | 'toggleSubmenu'
export type OnItemsChangedCallback = VoidFunction

export type OnFavChangedCallback = (
  itemKeys: Array<string>
) => void

export type OnFavToggleCallback = (value: boolean) => void
