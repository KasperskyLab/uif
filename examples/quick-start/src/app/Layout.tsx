import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import {
  Menu,
  Nav,
  Space,
  UserNav,
  ServicesNav,
  Hamburger
} from '@kaspersky/hexa-ui'
import { ThemeKey, themeColors } from '@kaspersky/hexa-ui/design-system'
import { AppUpdate } from '@kaspersky/hexa-ui-icons/16'

import { AppLogo } from './AppLogo'
import { beforeItems, favItems, navUserItems, navItems } from './menu/menu-items'
import type { LayoutOutletContext } from './DefaultContentOutlet'

const StyledMenu = styled(Menu)`
  position: relative;
  z-index: 2;
`

const StyledRootSpace = styled(Space)<{ themeKey: ThemeKey }>`
  height: 100vh;
  align-items: normal;
  background: ${(props: { themeKey: ThemeKey }) => themeColors.bg.base[props.themeKey]};
`

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  border-radius: 16px;
  padding: 16px;
  overflow: auto;
  position: relative;
  z-index: 1;
  height: 100vh;
`

export type LayoutProps = {
  themeKey: ThemeKey
  setThemeKey: Dispatch<SetStateAction<ThemeKey>>
}

export const Layout = ({ themeKey, setThemeKey }: LayoutProps) => {
  const navigate = useNavigate()
  const [menuMinimized, setMenuMinimized] = useState(false)
  const [menuNavState, setMenuNavState] = useState(navItems)
  const [userMenuState, setUserMenuState] = useState(navUserItems)
  const [isAdded, setIsAdded] = useState(false)

  const navItemsWithRouter = useMemo(
    () =>
      menuNavState.map((item: Record<string, unknown>) => {
        if (item.state === 'form-showcase') {
          return { ...item, onClick: () => navigate('/form-showcase') }
        }
        if (item.state === 'monitoring') {
          return { ...item, onClick: () => navigate('/') }
        }
        return item
      }),
    [menuNavState, navigate]
  )

  const addMenuItem = () => {
    setMenuNavState([{
      state: 'new',
      weight: 100,
      key: 'New item',
      icon: AppUpdate,
      klId: 'navigation.main.newItem',
      items: [],
      isRoot: true
    }, ...menuNavState.filter(item => item.state !== 'new')])
    setIsAdded(true)
  }

  const removeMenuItem = () => {
    setMenuNavState([...menuNavState.filter(item => item.state !== 'new')])
    setIsAdded(false)
  }

  const toggleUser = () => {
    setUserMenuState([...userMenuState.map((item) => {
      if (item.state === 'user') {
        if (item.userProps?.role !== 'Administrator') {
          item.userProps = {
            role: 'Administrator',
            name: 'Leonardo'
          }
        } else {
          item.userProps = {
            role: 'Operator',
            name: 'Raphael'
          }
        }
      }
      return item
    })])
    setIsAdded(false)
  }

  const menuProps = {
    width: 280,
    trigger: null,
    collapsedWidth: 64,
    collapsible: true
  }

  const outletContext: LayoutOutletContext = {
    themeKey,
    setThemeKey,
    addMenuItem,
    removeMenuItem,
    toggleUser,
    isAdded
  }

  return (
    <StyledRootSpace themeKey={themeKey} direction="horizontal" size={0} wrap="nowrap">
      <StyledMenu style={{ height: '100vh' }} {...menuProps} collapsed={menuMinimized}>
        <ServicesNav>
          <Hamburger
            className="item left"
            role="button"
            name="hamburger"
            onClick={() => setMenuMinimized(!menuMinimized)}
          />
        </ServicesNav>
        <AppLogo />
        <Nav
          beforeItems={beforeItems}
          navItems={navItemsWithRouter}
          favItems={favItems}
          minimized={menuMinimized}
          favsEnabled={true}
        />
        <UserNav navItems={userMenuState} minimized={menuMinimized} childPop={true} />
      </StyledMenu>
      <ContentArea id="layout-content-area">
        <Outlet context={outletContext} />
      </ContentArea>
    </StyledRootSpace>
  )
}
