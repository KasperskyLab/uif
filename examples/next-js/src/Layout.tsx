import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import {
  Sidebar,
  Text,
  Table,
  Space,
  Menu,
  Nav,
  UserNav,
  ServicesNav,
  Hamburger,
  Toolbar,
  PageHeader
} from '@kaspersky/hexa-ui'
import type { ToolbarItems } from '@kaspersky/hexa-ui'
import { ThemeKey, themeColors } from '@kaspersky/hexa-ui/design-system'
import {
  AppUpdate,
  Sun,
  UserAccount,
  OpenInWindow,
  Bulb
} from '@kaspersky/hexa-ui-icons/16'

import { AppLogo } from './AppLogo'
import { DashboardWidgets } from './DashboardWidgets'
import { beforeItems, favItems, navUserItems, navItems } from './menu/menu-items'

const StyledSpace = styled(Space).withConfig({
  shouldForwardProp: (prop) => prop !== 'cssConfig'
})<{ themeKey: ThemeKey }>`
  flex: 1;
  min-width: 0;
  border-radius: 16px;
  padding: 16px;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: auto;
  position: relative;
  z-index: 1;
`

const StyledMenu = styled(Menu).withConfig({
  shouldForwardProp: (prop) => prop !== 'cssConfig'
})`
  position: relative;
  z-index: 2;
`

const StyledRootSpace = styled(Space).withConfig({
  shouldForwardProp: (prop) => prop !== 'cssConfig'
})<{ themeKey: ThemeKey }>`
  height: 100vh;
  align-items: normal;
  background: ${props => themeColors.bg.base[props.themeKey]};
`

const TableWrapper = styled.div`
  width: 100%;
`

const ToolbarWrapper = styled.div`
  width: 100%;
  min-width: 0;
  min-height: 40px;
  align-self: stretch;
`

type RowType = { name: string, description: string, age: number, key: string }

export type LayoutProps = {
  themeKey: ThemeKey,
  setThemeKey: Dispatch<SetStateAction<ThemeKey>>
}



export const Layout = ({ themeKey, setThemeKey }: LayoutProps) => {
  const [menuMinimized, setMenuMinimized] = useState(false)
  const [menuNavState, setMenuNavState] = useState(navItems)
  const [userMenuState, setUserMenuState] = useState(navUserItems)
  const [isAdded, setIsAdded] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const tableColumns = [
    {
      title: 'Column 1',
      key: 'name',
      dataIndex: 'name',
      width: 300
    },
    {
      title: 'Column 2',
      key: 'description',
      dataIndex: 'description',
      width: 200
    },
    {
      title: 'Column 3',
      key: 'age',
      dataIndex: 'age'
    }
  ]

  const menuProps = {
    width: 280,
    trigger: null,
    collapsedWidth: 64,
    collapsible: true
  }

  const tableData = Array.from({ length: 180 }).map((_, index): RowType => ({
    name: `Value ${index + 1}`,
    description: `Description ${index + 1}`,
    age: index + 1,
    key: `${index + 1}`
  }))

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
    console.log(menuNavState)
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

  const toolbarLeft: ToolbarItems[] = [
    {
      type: 'button',
      key: 'toggle-theme',
      label: 'Toggle theme',
      iconBefore: <Sun />,
      onClick: () => setThemeKey(themeKey === ThemeKey.Light ? ThemeKey.Dark : ThemeKey.Light)
    },
    { type: 'divider', key: 'd1' },
    {
      type: 'button',
      key: 'open-modal',
      label: 'Open modal',
      iconBefore: <OpenInWindow />,
      onClick: () => setIsOpen(true)
    },
    { type: 'divider', key: 'd2' },
    {
      type: 'dropdown',
      key: 'menu-item',
      label: 'Menu item',
      iconBefore: <AppUpdate />,
      overlay: [
        { children: 'Add new menu item', onClick: addMenuItem, disabled: isAdded },
        { children: 'Remove new menu item', onClick: removeMenuItem, disabled: !isAdded }
      ]
    },
    {
      type: 'button',
      key: 'toggle-user',
      label: 'Toggle user',
      iconBefore: <UserAccount />,
      onClick: toggleUser
    }
  ]

  return (
    <StyledRootSpace themeKey={themeKey} direction='horizontal' size={0} wrap='nowrap'>
      <StyledMenu {...menuProps} collapsed={menuMinimized}>
        <ServicesNav>
          <Hamburger className='item left' role='button' name='hamburger' onClick={ () => setMenuMinimized(!menuMinimized) } />
        </ServicesNav>
        <AppLogo />
        <Nav beforeItems={beforeItems} navItems={menuNavState} favItems={favItems} minimized={menuMinimized} favsEnabled={true} />
        <UserNav navItems={userMenuState} minimized={menuMinimized} childPop={true} />
      </StyledMenu>
      <StyledSpace themeKey={themeKey} direction='vertical' size={16}>
        <Sidebar visible={isOpen} onClose={() => setIsOpen(false)} title="Sidebar">
          <Text>Content</Text>
        </Sidebar>

        <PageHeader
          title="Next.js Example (React 19)"
          breadcrumbs={{
            routes: [
              { name: 'Home' },
              { name: 'Examples' },
              { name: 'Next.js' }
            ]
          }}
          iconBefore={<Bulb />}
        />

        <DashboardWidgets />

        <ToolbarWrapper>
          <Toolbar left={toolbarLeft} leftLimit={10} />
        </ToolbarWrapper>

        <TableWrapper>
          <Table
              columns={tableColumns}
              dataSource={tableData}
          />
        </TableWrapper>
      </StyledSpace>
    </StyledRootSpace>
  )
}
