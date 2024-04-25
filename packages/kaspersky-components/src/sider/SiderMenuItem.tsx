import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { ArrowRightMini } from '@kaspersky/icons/16'
import { menuItemCss } from './menuCss'
import { MenuItemProps, MenuItemData } from './types'

const MenuItemComponent = ({
  data,
  className,
  menuState
}: MenuItemProps) => {
  const MenuItemIcon = data.icon
  const haveSubs = Boolean(data.items && data.items.length)

  const toggleItem = (item: string) => {
    menuState.minimized && menuState.collapseAll()
    menuState.updateMenuState({ toggleExpandItem: item })
  }

  const itemClick = () => {
    menuState.updateMenuState({ activateItem: data.state })
    menuState.setActive(data.state)
    alert('Active item: ' + data.state)
    data.onClick && data.onClick()
    menuState.minimized && menuState.collapseAll()
  }

  const entryClick = () => {
    haveSubs ? toggleItem(data.state as string) : itemClick()
  }

  return (
    <div className={cn(className, 'uif-menu-item', data.expanded && 'expanded')}>
      <div className={cn(className, 'uif-menu-item-entry', data.active && 'active')} onClick={entryClick}>
        { data.icon && <div className='uif-menu-item-entry-icon'>
          <MenuItemIcon/>
        </div> }
        <div className='uif-menu-item-entry-title'>
          <span className='title-ellipsis'>{data.key}</span>
        </div>
        { haveSubs && <ArrowRightMini className='uif-menu-item-entry-arrow'/> }
      </div>
      {
        haveSubs && <div className='uif-menu-item-subs'>
          <div className='uif-menu-item-subs-wrapper'>
            { data.items?.map((item: MenuItemData) => {
              return <MenuItemComponent key={`${item.key}-subs`} data={item} menuState={menuState}/>
            }) }
          </div>
        </div>
      }
    </div>
  )
}

export const MenuItem = styled(MenuItemComponent)`
  ${menuItemCss};
`
