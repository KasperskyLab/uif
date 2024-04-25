import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { MenuItem } from './SiderMenuItem'
import { menuCss } from '@src/sider/menuCss'
import { MenuItemProps, MenuProps, StateActions } from '@src/sider/types'

const MenuComponent = ({ menuItems, className, minimized, subsPop }: MenuProps) => {
  const [menuState, setMenuState] = useState(menuItems)
  const [active, setActive] = useState('')

  const collapseAll = () => {
    updateMenuState({ collapseAll: true })
  }

  const updateMenuState = ({
    toggleExpandItem,
    activateItem,
    collapseAll
  }: StateActions) => {
    const updateLevel = (menuItem: any) => {
      const { state: currentItem, expanded = false, items = undefined } = menuItem

      if (collapseAll) {
        menuItem.expanded = false
        if (menuItem.items) menuItem.items.map(updateLevel)
        return menuItem
      }

      if (toggleExpandItem && (currentItem === toggleExpandItem)) {
        menuItem.expanded = !expanded
        return menuItem
      }

      if (activateItem) {
        menuItem.active = false
        if (currentItem === activateItem) {
          menuItem.active = true
          setActive(activateItem as string)
        }
      }

      if (items) {
        menuItem.items.map(updateLevel)
      }
      return menuItem
    }
    const updatedMenuState = menuState.map(updateLevel)
    setMenuState(updatedMenuState)
  }

  useEffect(() => {
    collapseAll()
  }, [minimized])

  return (<nav className={cn(className, 'uif-menu uif-menu-user', minimized && 'menu-minimized', subsPop && 'menu-subs-pop')}>
    {
      menuItems.map((item: MenuItemProps) => {
        return <MenuItem key={item.key} data={item} menuState={{ updateMenuState, collapseAll, setActive, active, minimized }} />
      })
    }
  </nav>)
}

export const Menu = styled(MenuComponent)`
  ${menuCss}
`

export const UserMenu = styled(MenuComponent)`
  margin-top: auto;
  ${menuCss}
`
