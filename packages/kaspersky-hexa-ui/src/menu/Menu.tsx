import { ThemeKey } from '@design-system/types'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { SubmenuItemProps } from '@src/submenu'
import Layout from 'antd/es/layout'
import cn from 'classnames'
import React, { createContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import {
  ArrowDoubleLeft as MenuCollapse,
  ArrowDoubleRight as MenuExpand
} from '@kaspersky/hexa-ui-icons/16'

import { bottomWrapperCss, menuCss } from './menuCss'
import { Nav, UserNav } from './Nav'
import { SubmenuWrapper } from './SubmenuWrapper'
import { HamburgerProps, MenuContextProps, MenuProps } from './types'
import { useThemedMenu } from './useThemedMenu'

export const Hamburger = ({ collapsed, className, ...props }: HamburgerProps): React.ReactElement => (
  <ActionButton
    {...props}
    className={cn('menu-collapse-button', className)}
    icon={collapsed ? <MenuExpand /> : <MenuCollapse />}
  />
)

const StyledAntSider = styled(Layout.Sider).withConfig({
  shouldForwardProp: prop => !['cssConfig', 'showLogo'].includes(prop)
})`
  ${menuCss}
`

const BottomWrapper = styled.div`
  ${bottomWrapperCss}
`

export const MenuContext = createContext<MenuContextProps>({
  menuActiveItem: '',
  setMenuActiveItem: () => undefined,
  menuActivePopupItem: '',
  setMenuActivePopupItem: () => undefined
})

export const Menu = (rawProps: MenuProps): JSX.Element => {
  const {
    applyAppTheme = false,
    theme,
    children,
    beforeItems,
    collapsed: extCollapsed,
    minimizerBottom,
    favItems,
    favsExpanded,
    navItems,
    navUserItems,
    onItemsChanged,
    onFavChanged,
    onFavToggle,
    onCollapse : onCollapseProps,
    pinIcon,
    unpinIcon,
    favIcon,
    testAttributes,
    ...rest
  } = useTestAttribute(useThemedMenu(rawProps))
  const [submenuItems, setSubmenuItems] = useState<SubmenuItemProps[]>([])
  const [submenuMarginActive, setSubmenuMarginActive] = useState(false)
  const [submenuActive, setSubmenuActive] = useState(false)
  const [menuActiveItem, setMenuActiveItem] = useState('')
  const [menuActivePopupItem, setMenuActivePopupItem] = useState('')
  const [collapsed, setCollapsed] = useState(extCollapsed)

  const onCollapse = () => {
    const nextValue = !collapsed
    setCollapsed(nextValue)
    onCollapseProps?.(nextValue)
  }

  useEffect(() => {
    setCollapsed(extCollapsed)
  }, [extCollapsed])

  return (
    <MenuContext.Provider value={{
      applyAppTheme,
      setSubmenuItems,
      setSubmenuMarginActive,
      setSubmenuActive,
      menuActiveItem,
      setMenuActiveItem,
      menuActivePopupItem,
      setMenuActivePopupItem
    }}>
      <StyledAntSider
        {...testAttributes}
        {...rest}
        collapsed={collapsed}
        className={cn({
          'theme-dark': theme === ThemeKey.Dark,
          'menu-submenu-margin': submenuMarginActive
        })}>
        {children}
        <Nav
          className="nav-scrollable"
          beforeItems={beforeItems}
          navItems={navItems}
          favItems={favItems}
          minimized={collapsed}
          favsEnabled={true}
          favsExpanded={favsExpanded}
          onItemsChanged={onItemsChanged}
          onFavChanged={onFavChanged}
          onFavToggle={onFavToggle}
          pinIcon={pinIcon}
          unpinIcon={unpinIcon}
          favIcon={favIcon}
        />
        {Boolean(navUserItems) && (
          <UserNav
            navItems={navUserItems}
            minimized={collapsed}
            childPop={true}
          />
        )}
        {minimizerBottom && (
          <BottomWrapper><Hamburger
            role="button"
            name="hamburger"
            collapsed={collapsed}
            onClick={onCollapse}
          /></BottomWrapper>
        )}
        {Boolean(submenuItems.length) && (
          <SubmenuWrapper
            items={submenuItems}
            active={submenuActive}
          />
        )}
      </StyledAntSider>
    </MenuContext.Provider>
  )
}
