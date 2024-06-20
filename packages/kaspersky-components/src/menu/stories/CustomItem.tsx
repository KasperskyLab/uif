import React from 'react'
import { StorageServer } from '@kaspersky/icons/esm/16'
import { NavDivider } from '@src/menu/NavItem'
import styled from 'styled-components'
import { navItemCss } from '@src/menu/navCss'
import cn from 'classnames'
const CustomComponent = ({ className }: any) => {
  return (
    <>
      <div className={cn(className, 'uif-nav-item')}>
        <div className='uif-nav-item-entry'>
          <div className='uif-nav-item-entry-icon'>
            <StorageServer/>
          </div>
          <div className='uif-nav-item-entry-title'>
            <span className='title-ellipsis'>Server</span>
          </div>
          <div className='uif-nav-item-entry-props'>
          </div>
        </div>
      </div>
      <NavDivider/>
    </>
  )
}

export const CustomItem = styled(CustomComponent)`
  ${navItemCss}
`
