import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { StoryComponentContainer } from '@sb/StoryComponents'
import { Toggle } from '@src/toggle'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Moon, Settings21, SignOut, Web } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { TopNavigation as TopNavigationComponent } from '../TopNavigation'
import { TopNavigationProps } from '../types'

import { AppLogo } from './AppLogo'
import { defaultArgs, topNavigationPropPresentation } from './TopNavigation.controls'

const defaultAccountMenuOverlay = [
  {
    children: 'Account settings',
    componentsBefore: [<Settings21 key="account-settings-icon" />]
  },
  {
    type: 'submenu' as const,
    title: 'English',
    componentsBefore: [<Web key="language-icon" />],
    children: [
      { children: 'English' },
      { children: 'Русский' },
      { type: 'divider' as const, children: '' },
      { children: 'Deutsch' },
      { children: 'Italiano' }
    ]
  },
  {
    children: 'Dark mode',
    componentsBefore: [<Moon key="mode-icon" />],
    componentsAfter: [<Toggle key="mode-toggle" />]
  },
  { type: 'divider' as const, children: '' },
  {
    children: 'Log out',
    componentsBefore: [<SignOut key="logout-icon" />]
  },
  { title: '© 2025 AO Kaspersky Lab', type: 'group' as const, children: [] }
]

export const topNavigationStorySettings: Meta<TopNavigationProps> = {
  argTypes: buildStoryArgTypes(topNavigationPropPresentation),
  args: {
    ...defaultArgs,
    logo: <AppLogo />,
    accountMenuProps: {
      title: 'test_user_123@mail.ru',
      dropdownMenuProps: {
        overlay: defaultAccountMenuOverlay
      }
    }
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <StoryComponentContainer horizontalWidth="100%">
        <Story {...context} />
      </StoryComponentContainer>
    )
  ]
}

const meta = {
  title: 'Hexa UI Components/TopNavigation',
  component: TopNavigationComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['topNavigationStorySettings'],
  ...topNavigationStorySettings
} satisfies Meta<TopNavigationProps>

export default meta

type Story = StoryObj<TopNavigationProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(topNavigationPropPresentation),
      sort: 'none'
    }
  }
}
