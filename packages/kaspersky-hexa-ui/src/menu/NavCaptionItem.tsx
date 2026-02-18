import cn from 'classnames'
import React from 'react'
import styled from 'styled-components'

import { navCaptionCss } from './navCss'
import { ItemDivider, NavItemProps } from './types'
import { NavDivider } from './wrappers'

const NavCaptionItemComponent = ({
  data: { key, itemDivider, isRoot },
  className
}: NavItemProps) => (
  <>
    { itemDivider === ItemDivider.Before && <NavDivider/> }
    <div className={cn(className, 'uif-nav-caption', { 'caption-root': isRoot })}>{key}</div>
    { itemDivider === ItemDivider.After && <NavDivider/> }
  </>
)

export const NavCaptionItem = styled(NavCaptionItemComponent)`
  ${navCaptionCss};
`
