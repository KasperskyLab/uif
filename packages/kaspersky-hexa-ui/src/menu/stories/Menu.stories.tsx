import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { ServicesNav } from '@src/menu'
import { getStatusIcon } from '@src/menu/NavUserItem'
import { Notification } from '@src/notification'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import { Layout as AntLayout } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { AppUpdate, Help } from '@kaspersky/icons/16'

import MetaData from '../__meta__/meta.json'
import { Hamburger, Menu } from '../Menu'
import { Nav, UserNav } from '../Nav'
import { AppLogo } from '../stories/AppLogo'
import { clickHandler } from '../stories/CustomItem'
import { beforeItems, favItems, navItems, navUserItems } from '../stories/menu-items'
import { getNotificationsIcon } from '../stories/Notifications'
import { MenuProps, UserStatus } from '../types'

const meta: Meta<MenuProps> = {
  title: 'Hexa UI Components/Menu',
  component: Menu,
  args: {
    width: 280,
    trigger: null,
    collapsedWidth: 64,
    collapsible: true,
    testId: 'menu-test-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
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

const MockMenuStory = (args: MenuProps) => {
  const [menuMinimized, setMenuMinimized] = useState(false)
  const [menuNavState, setMenuNavState] = useState(navItems)
  const [userMenuState, setUserMenuState] = useState(navUserItems)
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

  const changeUserStatus = (status?: UserStatus) => {
    setUserMenuState([...userMenuState.map((item) => {
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
      console.log(item)
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
      setUserMenuState([...userMenuState])
    }
  }, [])

  return (
    <RootLayout>
      <Menu {...args} collapsed={menuMinimized}>
        <ServicesNav>
          <Hamburger className="item left" role="button" name="hamburger" onClick={ () => setMenuMinimized(!menuMinimized) } />
          {getNotificationsIcon(true)}
          <Help className="item" role="button" onClick={ () => clickHandler('open online help') } />
        </ServicesNav>
        <AppLogo/>
        <Nav beforeItems={beforeItems} navItems={menuNavState} favItems={favItems} minimized={menuMinimized} favsEnabled={true} />
        <UserNav navItems={userMenuState} minimized={menuMinimized} childPop={true} />
      </Menu>
      <Section size="10" align="auto" direction="vertical">
        <Notification />
        <Space size="10" justify="space-between">
          <Button onClick={addMenuItem} disabled={isAdded}>Add new menu item</Button>
          <Button onClick={removeMenuItem} disabled={!isAdded}>Remove new menu item</Button>
        </Space>
        <Space size="10" justify="space-between">
          <Button onClick={toggleUser}>Toggle user</Button>
          <Button onClick={() => changeUserStatus()}>
            Change user status: {userMenuState.find((item) => item.state === 'user')?.userProps?.status || 'unset'}
          </Button>
        </Space>
      </Section>
    </RootLayout>
  )
}

export const Base: StoryObj<MenuProps> = {
  render: MockMenuStory.bind({}),
  args: {
    applyAppTheme: true
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
