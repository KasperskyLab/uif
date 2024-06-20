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
import { Help } from '@kaspersky/icons/16'
import { AppLogo } from '../stories/AppLogo'
import { beforeItems, navItems, navUserItems, favItems } from '../stories/menu-items'
import { getNotificationsIcon } from '../stories/Notifications'

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
`

export const Base: StoryObj<MenuProps> = {
  render: (args: MenuProps) => {
    const [menuMinimized, setMenuMinimized] = useState(false)
    return (
      <RootLayout>
        <Menu {...args} collapsed={menuMinimized}>
          <ServicesNav>
            <Hamburger className='item left' role='button' name='hamburger' onClick={ () => setMenuMinimized(!menuMinimized) } />
            {getNotificationsIcon(true)}
            <Help className='item' role='button' onClick={ () => alert('open online help') } />
          </ServicesNav>
          <AppLogo/>
          <Nav beforeItems={beforeItems} navItems={navItems} favItems={favItems} minimized={menuMinimized} favsEnabled={true} />
          <UserNav navItems={navUserItems} minimized={menuMinimized} childPop={true} />
        </Menu>
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
