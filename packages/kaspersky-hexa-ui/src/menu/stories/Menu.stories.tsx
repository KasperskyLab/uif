import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { ServicesNav } from '@src/menu'
import { getStatusIcon } from '@src/menu/NavUserItem'
import { Notification } from '@src/notification'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import { Layout as AntLayout } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { AppUpdate, BookmarkOutline, BookmarkSolid, Help, Moon } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Hamburger, Menu as MenuComponent } from '../Menu'
import { AppLogo } from '../stories/AppLogo'
import { clickHandler } from '../stories/CustomItem'
import { beforeItems, favItems, navItems, navUserItems } from '../stories/menu-items'
import { getNotificationsIcon } from '../stories/Notifications'
import { MenuProps, UserStatus } from '../types'

export type MenuStoryProps = {
  showLogo?: boolean
}

const storySettings: Meta<MenuProps & MenuStoryProps> = {
  args: {
    width: 280,
    collapsedWidth: 64,
    testId: 'menu-test-id',
    showLogo: true,
    onItemsChanged: () => {},
    navUserItems
  },
  argTypes: {
    collapsible: { control: false },
    submenuMarginActive: { control: false }
  },
  parameters: {
    actions: { argTypesRegex: '^(on.*)' },
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

const meta: Meta<MenuProps & MenuStoryProps> = {
  component: MenuComponent,
  title: 'Hexa UI Components/Menu',
  ...withDesignControls<MenuProps & MenuStoryProps>({
    componentName: 'menu',
    meta: storySettings
  })
}
export default meta

const RootLayout = styled(AntLayout)`
  height: 100vh;
  background: transparent;
  padding: 0;
  margin: -24px;
`

const Section = styled(Space)`
  padding: 16px;
`

const MockMenuStory = (args: MenuProps & MenuStoryProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const [menuNavState, setMenuNavState] = useState(navItems)
  const [userMenuState, setUserMenuState] = useState(args.navUserItems)
  const [isAdded, setIsAdded] = useState(false)

  const addMenuItem = () => {
    setMenuNavState([{
      state: 'new',
      weight: 100,
      key: 'New item',
      icon: AppUpdate,
      klId: 'navigation.main.newItem',
      items: [],
      isRoot: true,
      onClick: () => clickHandler('New item')
    }, ...menuNavState.filter(item => item.state !== 'new')])
    setIsAdded(true)
  }

  const removeMenuItem = () => {
    setMenuNavState([...menuNavState.filter(item => item.state !== 'new')])
    setIsAdded(false)
  }

  const toggleUser = () => {
    userMenuState && setUserMenuState([...userMenuState.map((item) => {
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

  const changeUserStatus = (status?: UserStatus) => {
    userMenuState && setUserMenuState([...userMenuState.map((item) => {
      if (item.state === 'user' && item.userProps) {
        if (status) {
          item.userProps && (item.userProps.status = status)
        } else {
          switch (item.userProps?.status) {
            case 'available':
              item.userProps.status = 'unavailable'
              break
            case 'unavailable':
              item.userProps.status = undefined
              break
            case undefined:
              item.userProps.status = 'available'
              break
          }
        }
      }
      return item
    })])
  }

  useEffect(() => {
    if (userMenuState?.[0]?.items?.[0].key !== 'Availability') {
      userMenuState?.[0]?.items?.unshift(
        {
          key: 'Availability',
          isCaption: true
        },
        {
          key: 'Available',
          icon: getStatusIcon('available', 'dark'),
          onClick: () => changeUserStatus('available')
        },
        {
          key: 'Unavailable',
          icon: getStatusIcon('unavailable', 'dark'),
          onClick: () => changeUserStatus('unavailable')
        }
      )
      userMenuState && setUserMenuState([...userMenuState])
    }
  }, [])

  return (
    <RootLayout>
      <MenuComponent
        {...args}
        collapsed={collapsed}
        beforeItems={beforeItems}
        favItems={favItems}
        navItems={menuNavState}
        navUserItems={userMenuState}
        pinIcon={<BookmarkOutline />}
        unpinIcon={<BookmarkSolid />}
      >
        { !args.minimizerBottom && <ServicesNav>
          <Hamburger
            className="item left"
            role="button"
            name="hamburger"
            collapsed={collapsed}
            onClick={() => setCollapsed(prevSate => !prevSate)}
          />
          {getNotificationsIcon(true)}
          <Moon className="item" role="button" onClick={ () => clickHandler('change theme') } />
          <Help className="item" role="button" onClick={ () => clickHandler('open online help') } />
        </ServicesNav>}
        { args.showLogo && <AppLogo/> }
      </MenuComponent>
      <Section gap={10} align="auto" direction="vertical">
        <Notification />
        <Space gap={10} justify="space-between">
          <Button onClick={addMenuItem} disabled={isAdded}>Add new menu item</Button>
          <Button onClick={removeMenuItem} disabled={!isAdded}>Remove new menu item</Button>
        </Space>
        <Space gap={10} justify="space-between">
          <Button onClick={toggleUser}>Toggle user</Button>
          <Button onClick={() => changeUserStatus()}>
            Change user status: {userMenuState && userMenuState.find((item) => item.state === 'user')?.userProps?.status || 'unset'}
          </Button>
        </Space>
      </Section>
    </RootLayout>
  )
}

export const Menu: StoryObj<MenuProps> = {
  render: MockMenuStory.bind({}),
  args: {
    applyAppTheme: true
  }
}

export const WithoutLogo: StoryObj<MenuProps & MenuStoryProps> = {
  render: MockMenuStory.bind({}),
  args: {
    applyAppTheme: true,
    showLogo: false
  }
}

export { WithPanel } from './WithPanel'

export const MinimizerBottom: StoryObj<MenuProps & MenuStoryProps> = {
  render: MockMenuStory.bind({}),
  args: {
    applyAppTheme: true,
    showLogo: false,
    minimizerBottom: true,
    navUserItems: []
  }
}

export const Dark: StoryObj<MenuProps> = {
  render: MockMenuStory.bind({}),
  args: {
    applyAppTheme: false
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: { menu: componentColors.menu, menu_item: componentColors.menu_item } },
  render: args => <ThemedPalette {...args} />
}
