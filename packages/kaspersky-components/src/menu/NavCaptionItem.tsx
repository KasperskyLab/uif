import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { navCaptionCss } from './navCss'
import { ItemDivider, MenuViewProps, NavItemProps } from './types'
import { useThemedMenu } from '@src/menu/useThemedMenu'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { NavDivider } from '@src/menu/NavItem'

export const NavCaptionItem = (rawProps: NavItemProps): JSX.Element => {
  const themedProps: MenuViewProps = useThemedMenu(rawProps)
  const props = useTestAttribute(themedProps)
  return <StyledNavCaptionItem {...props} {...rawProps}/>
}

const NavCaptionItemComponent = ({
  data: { key, itemDivider },
  className
}: NavItemProps) => (
  <>
    { itemDivider === ItemDivider.Before && <NavDivider/> }
    <div className={cn(className, 'uif-nav-caption')}>{key}</div>
    { itemDivider === ItemDivider.After && <NavDivider/> }
  </>
)

const StyledNavCaptionItem = styled(NavCaptionItemComponent).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${navCaptionCss};
`
