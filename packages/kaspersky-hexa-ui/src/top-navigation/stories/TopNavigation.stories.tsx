import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { ThemeKey } from '@design-system/types'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { StoryComponentContainer } from '@sb/StoryComponents'
import { DropdownItemProps, DropdownOverlayProp } from '@src/dropdown'
import { getStatusIcon } from '@src/menu/NavUserItem'
import { Placeholder } from '@src/placeholder'
import { Search } from '@src/search'
import { Tag } from '@src/tag'
import { Toggle } from '@src/toggle'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import { Layout } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import {
  Advertisement,
  ArrowDown1,
  ArrowTurnOver,
  Browser,
  ITestIds,
  Moon,
  Settings21,
  SignOut,
  Web
} from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { TopNavigation as TopNavigationComponent } from '../TopNavigation'
import { TopNavigationProps } from '../types'

import { AppLogo } from './AppLogo'

const centerElementOverlay: DropdownItemProps[] = [
  { children: <Search /> },
  { children: 'Workspace 1' },
  { children: 'Workspace 2' },
  { children: 'Workspace 3' },
  { type: 'divider', children: '' },
  {
    title: 'Go to Portal',
    type: 'action',
    children: 'Go to Portal',
    // eslint-disable-next-line react/jsx-key
    componentsBefore: [ <ArrowTurnOver /> ]
  }
]

const defaultAccountMenuOverlay: DropdownItemProps[] = [
  {
    children: 'Account settings',
    componentsBefore: [ <Settings21 key="account-settings-icon" /> ]
  },
  {
    type: 'submenu',
    title: 'English',
    componentsBefore: [ <Web key="language-icon" /> ],
    children: [
      { children: 'English' },
      { children: 'Русский' },
      {
        type: 'divider',
        children: ''
      },
      { children: 'Deutsch' },
      { children: 'Italiano' }
    ]
  },
  {
    children: 'Dark mode',
    componentsBefore: [ <Moon key="mode-icon" /> ],
    componentsAfter: [ <Toggle key="mode-toggle" /> ]
  },
  {
    type: 'divider',
    children: ''
  },
  {
    children: 'Log out',
    componentsBefore: [ <SignOut key="logout-icon" /> ]
  },
  {
    title: '© 2025 AO Kaspersky Lab',
    type: 'group',
    children: []
  }
]

export enum UserWorkStatuses {
  AVAILABLE = 'available',
  BUSY = 'busy'
}

const UserAvailableIcon = getStatusIcon('available', ThemeKey.Light) as unknown as React.ComponentType<ITestIds>
const UserBusyIcon = getStatusIcon('unavailable', ThemeKey.Light) as unknown as React.ComponentType<ITestIds>

const userStatusIcons = {
  [UserWorkStatuses.AVAILABLE]: <UserAvailableIcon />,
  [UserWorkStatuses.BUSY]: <UserBusyIcon />
}

function getUserWorkStatusMenuItems (onClick?: (info: any) => void): DropdownItemProps[] {
  return [
    {
      title: 'User work status',
      type: 'group',
      children: [
        {
          key: UserWorkStatuses.AVAILABLE,
          componentsBefore: [ userStatusIcons[UserWorkStatuses.AVAILABLE] ],
          children: 'Available',
          onClick
        },
        {
          key: UserWorkStatuses.BUSY,
          componentsBefore: [ userStatusIcons[UserWorkStatuses.BUSY] ],
          children: 'Busy',
          onClick
        }
      ]
    },
    {
      type: 'divider',
      children: ''
    }
  ]
}

const storySettings: Meta<TopNavigationProps> = {
  args: {
    title: 'Kaspersky Next',
    notificationButtonProps: {},
    notificationIndicator: true,
    accountMenuProps: {
      title: 'test_user_123@mail.ru',
      dropdownMenuProps: {
        overlay: defaultAccountMenuOverlay
      }
    },
    logo: <AppLogo />
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  },
  decorators: [
    (Story, context) => (
      <StoryComponentContainer horizontalWidth="100%">
        <Story {...context} />
      </StoryComponentContainer>
    )
  ]
}

const meta: Meta<TopNavigationProps> = {
  component: TopNavigationComponent,
  title: 'Hexa UI Components/Top Navigation',
  ...withDesignControls<TopNavigationProps>({
    componentName: 'topNavigation',
    meta: storySettings
  })
}
export default meta

type Story = StoryObj<TopNavigationProps>

export const Basic: Story = {}

export const WithCenteredElementButton: Story = {
  args: {
    elementCentered: {
      type: 'button',
      buttonConfig: {
        title: 'New workspace',
        buttonProps: {
          mode: 'secondary',
          iconBefore: <Browser />,
          iconAfter: <ArrowDown1 />
        },
        dropdownMenuProps: {
          overlay: centerElementOverlay
        }
      }
    }
  },
  name: 'With Centered Element / Button'
}

export const WithCenteredElementHorizontalNav: Story = {
  args: {
    elementCentered: {
      type: 'horizontalNavigation',
      horizontalNavigationConfig: {
        items: [
          {
            label: 'Workspaces',
            selected: true,
            key: 'workspaces'
          },
          {
            label: 'Licenses',
            key: 'licenses'
          },
          {
            label: 'Trainings',
            key: 'trainings'
          }
        ]
      }
    }
  },
  name: 'With Centered Element / HorizontalNav'
}

export const WithContentRight: Story = {
  args: {
    contentRight: (
      <Tag
        icon={<Advertisement />}
        mode="yellow"
        outlined
        style={{ marginRight: 0 }}
      >
        Getting started: 3 of 12
      </Tag>
    )
  }
}

export const WithUserStatus: Story = {
  render: (args: TopNavigationProps) => {
    const [selectedStatus, setSelectedStatus] = useState<UserWorkStatuses>(UserWorkStatuses.AVAILABLE)

    const onMenuItemClick = (info: any) => {
      setSelectedStatus(info.key as UserWorkStatuses)
    }

    const accountMenuProps = {
      ...args.accountMenuProps,
      iconBefore: userStatusIcons[selectedStatus],
      dropdownMenuProps: {
        overlay: [...getUserWorkStatusMenuItems(onMenuItemClick), ...defaultAccountMenuOverlay] as DropdownOverlayProp,
        selectedItemsKeys: [selectedStatus]
      }
    }

    return <TopNavigationComponent {...args} accountMenuProps={accountMenuProps} />
  }
}

const StyledTopNavigationComponent = styled(TopNavigationComponent)`
  position: sticky;
  top: 0;
  zIndex: 1;
`

export const InScrollableLayout: Story = {
  render: (args: TopNavigationProps) => (
    <Layout>
      <StyledTopNavigationComponent {...args} />
      <Layout.Content style={{ overflow: 'scroll', height: '150vh' }}>
        <Placeholder
          description="Description"
          image="noData"
          mode="filled"
          size="medium"
          textAlign="center"
          title="Placeholder"
        />
      </Layout.Content>
    </Layout>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>

export const ColorTokens: PaletteStory = {
  args: { source: componentColors.top_navigation },
  render: args => <ThemedPalette {...args} />
}
