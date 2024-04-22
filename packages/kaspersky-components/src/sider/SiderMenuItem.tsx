import React, { useState } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { ArrowRightMini } from '@kaspersky/icons/16'
import { menuItemCss } from './menuCss'
import { MenuItemProps, MenuItemData } from './types'

const MenuItemComponent = ({
  data,
  className,
  onClick
}: MenuItemProps) => {
  const MenuItemIcon = data.icon
  const haveSubs = Boolean(data.items && data.items.length)
  const [expanded, setExpanded] = useState(false)
  const entryClick = () => {
    haveSubs ? setExpanded(!expanded) : onClick && onClick()
  }
  return (
    <div className={cn(className, 'uif-menu-item', expanded && 'expanded')}>
      <div className='uif-menu-item-entry' onClick={entryClick}>
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
              return <MenuItemComponent {...item} data={item} key={`${item.key}-subs`} />
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
