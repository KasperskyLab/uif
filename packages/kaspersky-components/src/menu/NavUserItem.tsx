import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { navItemCss } from './navCss'
import { MenuViewProps, NavItemProps } from './types'
import { useThemedMenu } from '@src/menu/useThemedMenu'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const NavUserItem = (rawProps: NavItemProps): JSX.Element => {
  const themedProps: MenuViewProps = useThemedMenu(rawProps)
  const props = useTestAttribute(themedProps)
  return <StyledNavUserItem {...props} {...rawProps}/>
}

const NavUserItemComponent = ({
  data: { icon, state, onClick, active, userProps: { role, name } = {} },
  className,
  menuState
}: NavItemProps) => {
  const NavItemIcon = icon

  const itemClick = () => {
    menuState.updateNavState({ activateItem: state })
    menuState.setActive(state)
    alert('Active item: ' + state)
    onClick && onClick()
    menuState.minimized && menuState.collapseAll()
  }

  return (
    <div className={cn(className, 'uif-nav-item')}>
      <div className={cn(className, 'uif-nav-item-entry', 'uif-nav-item-user', active && 'active')} onClick={itemClick}>
        { icon && <div className='uif-nav-item-entry-icon'>
          <NavItemIcon/>
        </div> }
        <div className='uif-nav-item-user-entry-wrapper'>
          <div className='uif-nav-item-entry-title'>
            <span className='title-ellipsis'>{name}</span>
          </div>
          { role && <div className='uif-nav-item-entry-role'>{role}</div> }
        </div>
      </div>
    </div>
  )
}

const StyledNavUserItem = styled(NavUserItemComponent).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${navItemCss};
`
