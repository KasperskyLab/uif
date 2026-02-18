import { Submenu as SubmenuComponent } from '@src/submenu'
import cn from 'classnames'
import React from 'react'
import styled from 'styled-components'

import { submenuCss } from './submenuWrapperCss'
import { MenuSubmenuProps } from './types'

export const MenuSubmenuWrapper = styled('div')`
  ${submenuCss}
`

export const SubmenuWrapper = ({ items, active }: MenuSubmenuProps) => {
  return <MenuSubmenuWrapper className={cn({ 'submenu-active': active })}>
    { items.length && <SubmenuComponent items={items} /> }
  </MenuSubmenuWrapper>
}
