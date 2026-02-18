import { Button } from '@src/button'
import { Checkbox } from '@src/checkbox'
import { ServicesNav } from '@src/menu'
import { Notification } from '@src/notification'
import { PageHeader } from '@src/page-header'
import { Panel } from '@src/panel'
import { Search } from '@src/search'
import { Space } from '@src/space'
import { Submenu } from '@src/submenu'
import { mockedItemsWithoutContent } from '@src/submenu/stories/mocks'
import { TreeList, TreeNav } from '@src/tree'
import { treeDataMock, treeDataMockWithIcons } from '@src/tree/stories/mocks'
import { StoryObj } from '@storybook/react-webpack5'
import { Layout as AntLayout } from 'antd'
import React, { PropsWithChildren, useCallback } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import { BookmarkOutline, BookmarkSolid, Help, Moon, Switch1, Wrap } from '@kaspersky/hexa-ui-icons/16'
import { Layers, Placeholder, Usb } from '@kaspersky/hexa-ui-icons/16'

import { Hamburger, Menu as MenuComponent } from '../Menu'
import { MenuProps, NavItemData } from '../types'

import { AppLogo } from './AppLogo'
import { clickHandler } from './CustomItem'
import { MenuStoryProps } from './Menu.stories'
import { getNotificationsIcon } from './Notifications'

const RootLayout = styled(AntLayout)`
  height: 100vh;
  background: transparent;
  padding: 0;
  margin: -24px;
`

const Layout = styled(Space)`
  position: relative;
  flex: 1;
`

const App = styled(Space)`
  flex: 1;
  align-self: stretch;
`

const RightPanel = styled(Panel)<{
  $overlayAbove?: boolean
}>`
  height: 100%;
  .hexa-ui-panel-container {
    padding: 0 0 0 16px;
  }

  ${({ $overlayAbove }) => $overlayAbove && `
    left: 0;
    position: absolute;
    max-width: unset;
  `}
`

const SubmenuWrapper = styled.div`
  width: 100%;
  > div > div {
    width: 100%;
    border-right: none;
    padding: 0;
    > div {
      padding: 0;
    }
  } 
`

const Content = styled.div`
  flex: 1;
  align-self: normal;
  margin: 0 24px;
  background-image: repeating-linear-gradient(135deg, #f9f9f9, #f9f9f9 10px, transparent 10px, transparent 20px);
`

const Footer = styled(Space)`
  margin: 24px;
  align-self: normal;
  button {
    position: unset;
  }
`

const SearchWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Space style={{ marginTop: '2px' }} width="100%" direction="vertical" align="start" gap="grouped" justify="space-between">
      <Space direction="vertical" align="start" gap="grouped">
        <Search />
        {children}
      </Space>
      <Button>Save</Button>
    </Space>
  )
}

type MenuState = 'default' | 'submenu' | 'treeNav' | 'tree' | 'checkboxGroup'

const navItems: NavItemData[] = [
  {
    state: 'default',
    weight: 10,
    key: 'Default',
    klId: 'navigation.main.default',
    icon: Placeholder,
    active: true,
    isRoot: true
  },
  {
    key: 'Panel next to content area',
    isCaption: true,
    isRoot: true
  },
  {
    state: 'submenu',
    weight: 100,
    key: 'Submenu',
    klId: 'navigation.main.submenu',
    icon: Wrap,
    isRoot: true
  },
  {
    state: 'treeNav',
    weight: 200,
    key: 'Tree Nav',
    klId: 'navigation.main.treeNav',
    icon: Usb,
    isRoot: true
  },
  {
    state: 'tree',
    weight: 300,
    key: 'Tree',
    klId: 'navigation.main.tree',
    icon: Switch1,
    isRoot: true
  },
  {
    key: 'Panel above content area',
    isCaption: true,
    isRoot: true
  },
  {
    state: 'checkboxGroup',
    weight: 400,
    key: 'Checkbox Group',
    klId: 'navigation.main.checkboxGroup',
    icon: Layers,
    isRoot: true
  }
]

const contentMap = {
  submenu: <SubmenuWrapper><Submenu items={mockedItemsWithoutContent} /></SubmenuWrapper>,
  treeNav: <TreeNav multiple treeData={treeDataMockWithIcons} />,
  tree: (
    <SearchWrapper>
      <TreeList treeData={treeDataMock} />
    </SearchWrapper>
  ),
  checkboxGroup: (
    <SearchWrapper>
      <Checkbox.Group
        options={[
          { label: 'One', value: 1 },
          { label: 'Two', value: 2 },
          { label: 'Three', value: 3, description: 'Description in checkbox group' }
        ]}
      />
    </SearchWrapper>
  )
}

export const WithPanel: StoryObj<MenuProps & MenuStoryProps> = {
  render: (args) => {
    const [collapsed, setCollapsed] = useState(false)
    const [activeKey, setActiveKey] = useState<MenuState>('default')
    const [panelOpen, setPanelOpen] = useState(true)

    const addClickHandler = useCallback((navItems: NavItemData[]) =>
      navItems.map((item) => ({
        ...item,
        onClick: () => {
          setPanelOpen(true)
          clickHandler(item.key)
          setActiveKey(item.state as MenuState)
        } 
      }))
    , [])

    return (
      <RootLayout>
        <MenuComponent
          {...args}
          collapsed={collapsed}
          navItems={addClickHandler(navItems)}
          pinIcon={<BookmarkOutline />}
          unpinIcon={<BookmarkSolid />}
        >
          {!args.minimizerBottom && <ServicesNav>
            <Hamburger
              className="item left"
              role="button"
              name="hamburger"
              collapsed={collapsed}
              onClick={() => setCollapsed(prevSate => !prevSate)}
            />
            {getNotificationsIcon(true)}
            <Moon className="item" role="button" onClick={() => clickHandler('change theme')} />
            <Help className="item" role="button" onClick={() => clickHandler('open online help')} />
          </ServicesNav>}
          {args.showLogo && <AppLogo/>}
        </MenuComponent>
        <Layout width="unset" justify="flex-start" align="flex-start">
          <Notification />
          {activeKey !== 'default' && (
            <RightPanel $overlayAbove={activeKey === 'checkboxGroup'} resizable resizeHandle="right" open={panelOpen} onClose={() => { setPanelOpen(false) }}>
              {contentMap[activeKey]}
            </RightPanel>
          )}
          <App direction="vertical" align="start" wrap="nowrap">
            <PageHeader title="Page title example" description="Page description example" iconBefore={<Placeholder />} />
            <Content />
            <Footer gap={16}>
              <Button onClick={() => { setPanelOpen(false) }}>Save</Button>
              <Button mode="secondary">Cancel</Button>
            </Footer>
          </App>
        </Layout>
      </RootLayout>
    )
  },
  args: {
    applyAppTheme: true
  }
}
