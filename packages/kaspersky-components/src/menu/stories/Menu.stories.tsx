import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from '../__meta__/meta.json'
import { Layout as AntLayout } from 'antd'
import { Menu, Hamburger } from '../Menu'
import { MenuProps } from '../types'
import { Nav, UserNav } from '../Nav'
import { ServicesNav } from '@src/menu'
import { badges } from '@sb/badges'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { AppUpdate, Help } from '@kaspersky/icons/16'
import { AppLogo } from '../stories/AppLogo'
import { beforeItems, navItems, navUserItems, favItems } from '../stories/menu-items'
import { getNotificationsIcon } from '../stories/Notifications'
import { Space } from '@src/space'
import { Button } from '@src/button'

const meta: Meta<MenuProps> = {
  title: 'Organisms/Menu',
  component: Menu,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
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

export const Base: StoryObj<MenuProps> = {
  render: (args: MenuProps) => {
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

    return (
      <RootLayout>
        <Menu {...args} collapsed={menuMinimized}>
          <ServicesNav>
            <Hamburger className='item left' role='button' name='hamburger' onClick={ () => setMenuMinimized(!menuMinimized) } />
            {getNotificationsIcon(true)}
            <Help className='item' role='button' onClick={ () => alert('open online help') } />
          </ServicesNav>
          <AppLogo/>
          <Nav beforeItems={beforeItems} navItems={menuNavState} favItems={favItems} minimized={menuMinimized} favsEnabled={true} />
          <UserNav navItems={userMenuState} minimized={menuMinimized} childPop={true} />
        </Menu>
        <Section size='10' align='auto' direction='vertical'>
          <Space size='10' justify='space-between'>
            <Button onClick={addMenuItem} disabled={isAdded}>Add new menu item</Button>
            <Button onClick={removeMenuItem} disabled={!isAdded}>Remove new menu item</Button>
          </Space>
          <Space size='10' justify='space-between'>
            <Button onClick={toggleUser}>Toggle user</Button>
          </Space>
        </Section>
      </RootLayout>
    )
  },
  args: {
    width: 280,
    trigger: null,
    collapsedWidth: 64,
    collapsible: true
  }
}
