import { Button } from '@src/button'
import { generateRoutes } from '@src/breadcrumbs/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Placeholder, Settings } from '@kaspersky/hexa-ui-icons/24'

import { PageHeader as PageHeaderComponent } from '../PageHeader'
import { PageHeaderProps } from '../types'

const meta = {
  title: 'Hexa UI Components/PageHeader/Stories',
  component: PageHeaderComponent,
  tags: ['!autodocs']
} satisfies Meta<PageHeaderProps>

export default meta

type Story = StoryObj<PageHeaderProps>

export const Basic: Story = {
  args: {
    title: 'Page title',
    description: 'Page description'
  }
}

export const WithNavigation: Story = {
  args: {
    title: 'Settings',
    description: 'Configure application preferences',
    iconBefore: <Settings />,
    breadcrumbs: { routes: generateRoutes() },
    tagsAfter: [{ label: 'New' }, { label: '2 items' }],
    elementAfter: <Button text="Save" />
  }
}

export const WithIconAndAction: Story = {
  args: {
    title: 'Projects',
    iconBefore: <Placeholder />,
    elementAfter: <Button text="Create project" />
  }
}
