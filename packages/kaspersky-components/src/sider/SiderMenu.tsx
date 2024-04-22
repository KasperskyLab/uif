import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { MenuItem } from './SiderMenuItem'
import { menuCss } from '@src/sider/menuCss'
import { MenuItemProps } from '@src/sider/types'

type MenuProps = {
  menuItems: any,
  className?: string,
  collapsed?: boolean
}

const MenuComponent = ({ menuItems, className, collapsed }: MenuProps) => (
  <nav className={cn(className, 'uif-menu uif-menu-user', collapsed && 'menu-collapsed')}>
    {
      menuItems.map((item: MenuItemProps) => {
        return <MenuItem key={item.key} data={item} />
      })
    }
  </nav>
)

export const Menu = styled(MenuComponent)`
  ${menuCss}
`

export const UserMenu = styled(MenuComponent)`
  margin-top: auto;
  ${menuCss}
`
