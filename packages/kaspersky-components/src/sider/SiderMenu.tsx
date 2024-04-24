import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { MenuItem } from './SiderMenuItem'
import { menuCss } from '@src/sider/menuCss'
import { MenuItemProps, MenuProps, StateActions } from '@src/sider/types'

const MenuComponent = ({ menuItems, className, minimized }: MenuProps) => {
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
        return menuItem
      }
      if (currentItem === toggleExpandItem) {
        menuItem.expanded = !expanded
        return menuItem
      }

      if (currentItem === activateItem) {
        menuItem.active = true
        setActive(activateItem as string)
      } else {
        menuItem.active = false
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

  return (<nav className={cn(className, 'uif-menu uif-menu-user', minimized && 'menu-minimized')}>
    {
      menuItems.map((item: MenuItemProps) => {
        return <MenuItem key={item.key} data={item} menuState={{ updateMenuState, setActive, active }} />
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
