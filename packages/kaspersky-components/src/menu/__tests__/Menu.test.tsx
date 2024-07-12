import { Nav, ServicesNav, UserNav } from '@src/menu'
import { AppLogo } from '@src/menu/stories/AppLogo'
import { navUserItems } from '@src/menu/stories/menu-items'
import { getNotificationsIcon } from '@src/menu/stories/Notifications'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Help, UserGroup } from '@kaspersky/icons/16'

import { Menu } from '../Menu'
import { MenuProps } from '../types'

const defaultProps = {
  'kl-id': 'menu-test-id'
}

const menuItemClickHandler = jest.fn()

const navItems = [
  {
    state: 'users-and-roles',
    weight: 400,
    key: 'Users & roles',
    iconClass: 'usersRoles',
    icon: UserGroup,
    itemClass: 'js-tutorial-welcome-step-13-selector',
    klId: 'navigation.main.usersAndRoles',
    isRoot: true,
    isNew: true,
    items: [{
      state: 'users',
      weight: 100,
      key: 'Users & groups',
      itemClass: null,
      klId: 'navigation.users-and-roles.users',
      onClick: menuItemClickHandler
    },
    {
      state: 'roles',
      weight: 200,
      key: 'Roles',
      itemClass: null,
      klId: 'navigation.users-and-roles.roles',
      onClick: menuItemClickHandler
    }]
  }
]

const getMenu = () => screen.getByTestId('menu-test-id')
const getItem = (klId: string) => screen.getByTestId(klId)

const MenuComponent = (props: MenuProps) => <Menu {...defaultProps} {...props} >
  <ServicesNav>
    {getNotificationsIcon(true)}
    <Help className='item' role='button' onClick={ () => alert('open online help') } />
  </ServicesNav>
  <AppLogo/>
  <Nav navItems={navItems} minimized={false} favsEnabled={true} />
  <UserNav navItems={navUserItems} minimized={false} childPop={true} />
</Menu>

describe('Menu', () => {
  test('should render', () => {
    render(<MenuComponent />)
    expect(getMenu()).toBeInTheDocument()
  })

  test('should receive qa props', () => {
    const { container } = render(<MenuComponent kl-id="kl-id" data-testid="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should render menu item', () => {
    const { container } = render(<MenuComponent />)
    expect(container.querySelector('.uif-nav-item-entry-title .title-ellipsis')).toHaveTextContent(navItems[0].key)
    expect(getMenu()).toBeInTheDocument()
  })

  test('should call onClick when clicked menu item', () => {
    render(<MenuComponent />)
    expect(getItem('navigation.users-and-roles.users')).toBeInTheDocument()

    userEvent.click(getItem('navigation.users-and-roles.users'))
    expect(menuItemClickHandler).toHaveBeenCalledTimes(1)
  })
})
