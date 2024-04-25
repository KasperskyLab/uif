import React from 'react'

export type MenuItemData = {
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: MenuItemData[],
  onClick?: () => void,
  condition?: () => boolean,
  path?: string[],
  additionalElements?: React.ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean,
  expanded?: boolean,
  active?: boolean
}

export type MenuItemProps = {
  className?: string,
  key: string,
  data: MenuItemData,
  onClick?: () => void,
  menuState?: any
}

export type MenuProps = {
  menuItems: any,
  className?: string,
  minimized?: boolean,
  subsPop?: boolean
}

export type StateActions = {
  toggleExpandItem?: string,
  toggleExpandItemOne?: string,
  activateItem?: string,
  collapseAll?: boolean
}
